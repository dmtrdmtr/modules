const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, ".tmp"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader',
                options: {
                    limit: '10000',
                    name: 'fonts/[name].[ext]'
                }
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]'
                },
                exclude: /images/
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/,
                loader: 'url-loader',
                options: {name: 'images/[name].[ext]'}
            }
        ]
    },
    devtool: "cheap-module-source-map",
    devServer: {
        stats: 'minimal',
        port: 9090,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
}