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
                            pretty: true,
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
});