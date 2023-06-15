const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // webpack4預設src
  // context: path.resolve(__dirname, "./src"),
  entry: {
    index: "index",
  },
  output: {
    filename: "./js/[name]-bundle.js?[hash:8]",
    // webpack4預設dist
    // path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      path.resolve("src"),
      path.resolve("src/js"),
      path.resolve("src/js/object"),
      path.resolve("src/sass"),
      path.resolve("src/img"),
      path.resolve("node_modules"),
      // {
      //   alias: {
      //     Utilities: path.resolve(__dirname, 'src/utilities/'),
      //     Templates: path.resolve(__dirname, 'src/templates/')
      //   },
      // },
    ],
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // publicPath: "../",
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        include: path.resolve("."),
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpg|gif)$/,
        exclude: path.resolve("./node_modules"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[path][name].[ext]?[hash:8]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optpng: {
                enabled: false,
              },
              pngquant: {
                quality: "65-90",
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new MiniCssExtractPlugin({
      // filename: devMode ? "css/[name].css" : "css/[name]-bundle.[hash:8].css",
      // chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
      filename: "css/[name].css",
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        }
      }
    },
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    // publicPath: '/assets/',
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