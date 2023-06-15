// nodeJS的path方法，可找到檔案路徑
const path = require("path");
// webpack本體
const webpack = require("webpack");
// dist之前先清除dist資料夾
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 將靜態資源直接搬移到目標資料夾(打包很慢，有用再開)
const CopyWebpackPlugin = require("copy-webpack-plugin");
// 可在JS中創建HTML檔案
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 抽出CSS到獨立一隻檔案
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 壓縮CSS檔
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// 因為上面OptimizeCSSAssetsPlugin會覆蓋webpack預設的JS壓縮功能，要重新呼叫並定義JS壓縮
const TerserPlugin = require('terser-webpack-plugin');
// 判定是否為開發模式
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  // 除了可指定mode為"development"或是"production"外(預設是production)，
  // 可以指定nodeJS的環境變數，然後在package.json中的script指定，會自動帶入
  // mode: process.env.NOD_ENV,

  // 內文路徑(預設./src) 
  context: path.resolve(__dirname, "./src"),

  // 存取相對路徑，指定resolve就可以解決開發模式與生產模式中模組路徑不對的問題
  // 會在以下路徑查找目標檔案(注意檔名重複會找不到，因此只規定副檔名是.js)
  resolve: {
    modules: [
      path.resolve("src"),
      path.resolve("src/js"),
      path.resolve("src/js/object"),
      path.resolve("src/sass"),
      path.resolve("src/img"),
      path.resolve("node_modules"),
      {
        // 別名 (FIXME: 目前有錯會造成webpack起不起來)
        alias: {
          Utilities: path.resolve(__dirname, 'src/utilities/'),
          Templates: path.resolve(__dirname, 'src/templates/')
        },
      },
    ],
    extensions: [".js"],
  },
  // 進入點
  entry: {
    index: "index",
    about: "about"
  },
  // 輸出檔名
  output: {
    // path: path.resolve(__dirname, "./app"),
    filename: "./js/[name]-bundle.js?[hash:8]",
    // filename: "./js/[name]-bundle.js?[contenthash:8]",
    // 可和後端搭配上線時的絕對路徑
    // publicPath: '/'
  },
  // 模組規則
  module: {
    rules: [
      // // html-loader，有用HtmlWebpackPlugin就不用這個
      // {
      //   test: /\.html$/,
      //   use: [{
      //     loader: "file-loader",
      //     options: {
      //       name: "[path][name].[ext]",
      //       minimize: devMode ? false : true,
      //     }
      //   }]
      // },

      // pug用pug-html-loader轉譯完丟到html-loader輸出
      {
        test: /\.(pug|jade)$/,
        use: ["html-loader", "pug-html-loader"],
        include: path.resolve("src/pug"),
        exclude: path.resolve("./node_modules"),
      },

      // CSS / SASS loader，需不需要搭配url-loader(過小圖片用data64產生)的設定檔
      // {
      //   test: /\.css$/,
      //   // use: ["style-loader", "css-loader"]
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       // options: {
      //       //   publicPath: "../",
      //       //   hmr: process.env.NODE_ENV === "development",
      //       // },
      //     },
      //     "css-loader"
      //   ],
      //   include: path.resolve("src/css"),
      //   exclude: path.resolve("./node_modules"),
      // },
      // {
      //   test: /\.(sass|scss)$/,
      //   // MiniCssExtractPlugin
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "postcss-loader",
      //     "sass-loader"         
      //   ],
      //   // 要搭url-loader時
      //   // use: [
      //   //   "style-loader",
      //   //   "css-loader",
      //   //   "postcss-loader",
      //   //   "sass-loader"
      //   // ],
      // },
      // 抽出CSS到獨立一隻檔案(如果有SASS或SCSS，先轉譯)
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
      // 所有JS用babel處理過
      {
        test: /\.js$/,
        use: "babel-loader",
        include: path.resolve("."),
        exclude: /node_modules/,
      },
      // 不壓縮字型純粹搬移使用時，須將下方url-loader的test內容拿掉字型部分
      // {
      //   test: /\.(woff|woff2|ttf|eot)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[path][name].[ext]?[hash:8]"
      //   }
      // },
      {
        test: /\.(woff|woff2|eot|ttf|otf|png|svg|jpe?g|gif)$/,
        // include: path.resolve("src/img"),
        exclude: path.resolve("./node_modules"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[path][name].[ext]?[contenthash:8]"
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
  // 插件規則
  plugins: [
    // dist之前先清除dist資料夾
    new CleanWebpackPlugin(),
    // 抽出CSS到獨立一隻檔案
    new MiniCssExtractPlugin({
      filename: devMode ? "css/[name].css" : "css/[name]-bundle.[hash:8].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    // 將靜態資源直接搬移到目標資料夾
    new CopyWebpackPlugin([
      {from: "assets", to: "assets"}
    ]),
     // 如果需要全域套件(如jQuery)可設定此套件(此套件內建，無需另外安裝)
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),

    // 可在JS中創建HTML檔案
    new HtmlWebpackPlugin({
      title: "Webpack網頁開發",
      filename: "index.html",
      template: "html/template.html",
      viewport: "width=device-width, initial-scale=1.0",
      description: "Web前端自動化開發",
      keywords: "webpack、前端、工程師",
      chunks: ["vendor", "index"],//.js
      minify: devMode ? "" : {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    // pug一定要用這個plugin當template引入
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "pug/about.pug",
      chunks: ["vendor","about"],//.js
      minify: devMode ? "" : {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),
  ],

  // 最佳化規則
  optimization: {
    // 將套件的JS獨立打包，不和自己寫的混合
    // 在這裡使用 SplitChunksPlugin
    splitChunks: {
      cacheGroups: {
        // 把所有 node_modules 內的程式碼打包成一支 vendors.bundle.js
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
          enforce: true,
        }
      }
    },
    // 壓縮CSS檔
    // 設置optimization.minimizer會覆蓋webpack提供的默認值，因此要同時指定JS minimalizer
    minimizer: [
      new TerserPlugin({
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  // 開發server設定
  devServer: {
    // 網站內容從哪來，預設會使用 '/'
    contentBase: path.join(__dirname, 'dist'),
    // 打包好的檔案將在這個路由下取用
    // publicPath: '/assets/',
    // 使用 gzip 壓縮
    compress: true,
    port: 3000,
    stats: {
      // 預設是 localhost，設定則可讓外網存取
      // host: '0.0.0.0',
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