// next.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    });

    config.plugins.push(new MiniCssExtractPlugin());

    return config;
  },
};
