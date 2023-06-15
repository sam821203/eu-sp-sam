const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(base, {
  module: {
    rules: [
      {
        test: /\.(pug|jade)$/,
        use: [
          "html-loader",
          {
            loader: "pug-html-loader",
            options: {
              pretty: true,
            }
          }
        ],
        // include: path.resolve("src/pug"),
        exclude: path.resolve("./node_modules"),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.pug",
      chunks: ["vendor", "index"],//.js
    }),
  ],
});