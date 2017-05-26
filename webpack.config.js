'use strict';

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        styles: __dirname + '/public/sass/app.scss',
        app: __dirname + '/app/app.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        modules: [
            path.resolve('./app/'),
            path.resolve('./node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=font/[name].[hash].[ext]'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(
                    {
                        use: [{
                            loader: "css-loader"
                        }, {
                            loader: "sass-loader"
                        }],

                        fallback: "style-loader"
                    }
                )
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 3000
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        })
    ]
};