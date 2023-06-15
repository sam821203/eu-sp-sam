const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // webpack4預設src
    // context: path.resolve(__dirname, "src"),
    entry: {
        login: "event/eckare/pages/login/login",
        // 前面要與webpack.dev.js 裡面的chunk 相同
        pop__window: "event/eckare/pages/pop__window/pop__window",
        // apple: "pages/apple/apple",
        // accessories: "pages/accessories/accessories",
        // pad: "pages/pad/pad",
        // phone: "pages/phone/phone",
        // wear: "pages/wear/wear",
    },
    output: {
        filename: "[name]/[name]-bundle.js",
        // path: path.resolve(__dirname, "dist/public/"),
    },
    resolve: {
        modules: [
            path.resolve("src"),
            "node_modules",
        ],
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
                            name: "[name].[ext]",
                            outputPath: "img",
                            publicPath: "../img",
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name]/[name]-bundle.css",
        }),
        new CopyWebpackPlugin([
            {
                from: "src/assets",
                to: "login",
            }
        ]),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all",
                    enforce: true,
                },
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