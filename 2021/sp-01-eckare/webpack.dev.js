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
            filename: "login/login.html",
            template: "src/event/eckare/pages/login/_login.pug",
            chunks: ["vendor", "login"],
        }),
        new HtmlWebpackPlugin({
            filename: "pop__window/pop__window.html",
            template: "src/event/eckare/pages/pop__window/_pop__window.pug",
            chunks: ["vendor", "pop__window"],
        }),
        // new HtmlWebpackPlugin({
        //     filename: "apple/index.html",
        //     template: "src/pages/apple/apple.pug",
        //     chunks: ["vendor", "apple"],
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "accessories/index.html",
        //     template: "src/pages/accessories/accessories.pug",
        //     chunks: ["vendor", "accessories"],
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "pad/index.html",
        //     template: "src/pages/pad/pad.pug",
        //     chunks: ["vendor", "pad"],
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "phone/index.html",
        //     template: "src/pages/phone/phone.pug",
        //     chunks: ["vendor", "phone"],
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "wear/index.html",
        //     template: "src/pages/wear/wear.pug",
        //     chunks: ["vendor", "wear"],
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "hot/index.html",
        //     template: "src/pages/_note/hot/_hot.pug",
        //     chunks: ["vendor", "hot"],
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "timeline/index.html",
        //     template: "src/pages/_note/timeline/_timeline.pug",
        //     chunks: ["vendor", "timeline"],
        // }),
        // new HtmlWebpackPlugin({
        //     filename: "sugardaddy/index.html",
        //     template: "src/pages/_note/sugardaddy/_sugardaddy.pug",
        //     chunks: ["vendor", "sugardaddy"],
        // }),
    ],
});