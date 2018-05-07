/**
 * Created by XiYin on 03/05/2018.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path:path.resolve(__dirname, 'dist')
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude:/(node_modules|bower_components)/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader?modules'
                ]
            }
        ]

    },
    devServer:{
        contentBase: path.join(__dirname,"dist"),
        compress: true,
        hot:true,
        port: 8080
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};