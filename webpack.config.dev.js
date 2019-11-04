const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const host_port = 3000;

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build/static/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true, //inject all js at the bottom of the body
            template: path.resolve(__dirname, 'public/index.html'), //source file
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        historyApiFallback: false,
        inline: true,
        port: 3000,
    },
}