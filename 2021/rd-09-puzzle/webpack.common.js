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
                    {
                        // 讓data-src也可以被輸出
                        loader: "html-loader",
                        options: {
                            attrs: ['img:src', 'img:data-src']
                        }
                    },
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
            filename: "signup/index.html",
            template: "src/pages/signup/signup.pug",
            publicPath: "signup",
            chunks: ["signup"],
        }),
        new HtmlWebpackPlugin({
            filename: "info/index.html",
            template: "src/pages/info/info.pug",
            chunks: ["info"],
        }),
        new HtmlWebpackPlugin({
            filename: "vote/index.html",
            template: "src/pages/vote/vote.pug",
            chunks: ["vote"],
        } ),
        new HtmlWebpackPlugin({
            filename: "player/index.html",
            template: "src/pages/player/player.pug",
            chunks: ["player"],
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