//bg-blue-950 border-blue-950
//bg-rose-950 border-rose-950
//bg-yellow-500 border-yellow-500
//bg-green-950 border-green-950
//bg-pink-500 border-pink-500

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  { label: "Rose", value: "rose", tw: "rose-950" },
  { label: "yellow", value: "yellow", tw: "yellow-500" },
  { label: "green", value: "green", tw: "green-950" },
  { label: "pink", value: "pink", tw: "pink-500" },
] as const;
export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
      imageUrl: "/phones/iphonex.jpg",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
      imageUrl: "/phones/iphone11.jpg",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
      imageUrl: "/phones/iphone12.jpg",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
      imageUrl: "/phones/iphone13.jpg",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
      imageUrl: "/phones/iphone14.jpg",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
      imageUrl: "/phones/iphone15.jpg",
    },
    {
      label: "iPhone 16",
      value: "iphone16",
      imageUrl: "/phones/iphone16.jpg",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "silicone",
      value: "silicone",
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },

    {
      label: "soft polycarbonate",
      value: "polycarbonate",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const;
export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth Finish",
      value: "Smooth",
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },

    {
      label: "Textured Finish",
      value: "textured",
      description: "Scratch-resistant coating",
      price: PRODUCT_PRICES.finish.texture,
    },
  ],
} as const;
