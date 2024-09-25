import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Assuming you have this utility for class names

// Define button styles using `class-variance-authority`
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
        secondary: "bg-gray-700 text-white hover:bg-gray-800",
        ghost: "bg-transparent hover:bg-gray-100",
        link: "text-blue-600 underline hover:text-blue-800",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-lg",
        icon: "h-10 w-10 flex items-center justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button component props extending HTML button attributes and variant types
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean; // New prop to handle loading state
  loadingText?: string; // Optional loading text to display
}

// Button component
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      loadingText,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";

    // If loading, disable the button and display loading text
    const buttonContent = isLoading
      ? loadingText
        ? loadingText
        : "Loading..."
      : children;

    return (
      <Component
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        // Disable button while loading
        {...props}
      >
        {" "}
        {isLoading && loadingText ? loadingText : children}
        {isLoading ? (
          <span className="ml-1.5 flex items-center gap-1">
            <span className="animate-flashing w-1 h-1 bg-white rounded-full inline-block" />
            <span className="animate-flashing delay-100 w-1 h-1 bg-white rounded-full inline-block" />
            <span className="animate-flashing delay-200 w-1 h-1 bg-white rounded-full inline-block" />
          </span>
        ) : null}
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
