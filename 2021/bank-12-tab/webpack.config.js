const path = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  // webpack4預設src
  // context: path.resolve(__dirname, "src"),
  devtool: isDev ? 'inline-source-map' : '',
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
        test: /\.(pug|jade)$/,
        use: [
          {
            // 讓data-src也可以被輸出
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'img:data-src'],
            },
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
              basedir: path.resolve(__dirname, 'src'),
            },
          },
        ],
        exclude: path.resolve('./node_modules'),
      },
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
              outputStyle: 'compressed',
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/app.pug',
      chunks: ['vendor', 'app'],
    }),
    new MiniCssExtractPlugin({
      // 有資料夾的配置
      // filename: "css/[name]-bundle.css",

      // 沒資料夾的配置
      filename: "[name]-bundle.css",
    } ),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: "src/assets/current",
        flatten: true,
      },
    ]),
  ],
  optimization: {
    minimizer:
      isDev ? []: [
          new TerserPlugin({
            parallel: true,
            // sourceMap: true,
          }),
          new OptimizeCSSAssetsPlugin(),
      ],
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
    port: 8080,
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