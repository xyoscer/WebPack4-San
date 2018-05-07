/**
 * Created by XiYin on 03/05/2018.
 */
const path = require('path');

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

    }
};