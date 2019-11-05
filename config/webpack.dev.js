const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const host_port = 3000;

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../build/static/js'),
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true, //inject all js at the bottom of the body
            template: path.resolve(__dirname, '../public/index.html'), //source file
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        historyApiFallback: false,
        inline: true,
        port: 3000,
    },
}