const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = merge(base, {
  devtool: devMode ? "inline-source-map" : "",
  module: {
    rules: [
      {
        test: /\.(pug|jade)$/,
        use: [
          "html-loader",
          {
            loader: "pug-html-loader",
            options: {
              pretty: devMode ? true : false,
              basedir: path.resolve(__dirname, "src")
            }
          }
        ],
        exclude: path.resolve("./node_modules"),
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/template.pug",
      chunks: ["vendor", "app"],
    }),
  ],
  optimization: {
    minimizer: devMode ? [] : [
      new TerserPlugin({
        parallel: true,
        // sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
});