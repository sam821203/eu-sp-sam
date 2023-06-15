const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // webpack4預設src
  // context: path.resolve(__dirname, "src"),
  entry: {
    app: "app",
  },
  output: {
    // 有資料夾的配置
    // filename: "js/[name]-bundle.js",

    // 沒資料夾的配置
    filename: "[name]-bundle.js",
    
    path: path.resolve(__dirname, "dist/public"),
  },
    // 解決相對路徑，src 當成根路徑 path：nodejs API resolve 前面那段都變成絕對路徑
  resolve: {
    modules: [
      path.resolve("src"),
      "node_modules",
    ],
      // 別名
    alias: {
      // Assets: path.resolve(__dirname, "src/assets/"),
      // include: path.resolve(__dirname, "src/utils/pug/include"),
    },
    // 預設值
    // extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath設定loader給background-image的url()相對位置，可以省去每次都要打一堆../
              // 攤平資料夾則不用設，若是裡面有img資料夾則要打開publicPath
              // publicPath: "../",
              hmr: process.env.NODE_ENV === "development",
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require('autoprefixer'),
              ],
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif)$/,
        exclude: path.resolve("./node_modules"),
        use: [
          {
            loader: "file-loader",
            options: {
              // 有資料夾的配置
              // name: "img/[name].[ext]"

              // 沒資料夾的配置
              name: "[name].[ext]"
              
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "src/assets",
        flatten: true,
      },
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
      // 有資料夾的配置
      // filename: "css/[name]-bundle.css",

      // 沒資料夾的配置
      filename: "[name]-bundle.css",
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
          enforce: true,
        }
      }
    },
  },
  devServer: {
    compress: true,
    port: 3000,
    stats: {
      asset: true,
      cached: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      color: true,
      hash: false,
      modules: false,
      reasons: false,
      source: false,
      version: false,
      warnings: false,
    }
  },
}