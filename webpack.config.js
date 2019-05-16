var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: "./index.scss"  // 要打包的入口文件
    },
    output: {
        path: path.resolve(__dirname, "dist"), // 使用绝对路径，dist目录
        publicPath: './dist/',
        filename: "[name].css" // 或./dist/[name].[hash:5].js
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader", "postcss-loader"]
                // use: ["css-loader", "sass-loader" ]
            }) //把 css 抽离出来生成一个文件
        }],
    },
    plugins: [
        new ExtractTextPlugin("css/index.css")
    ]
}
