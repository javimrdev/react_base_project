const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new Dotenv({
            path: './dev.env',
        })
    ],
    devServer: {
        hot: 'only',
        liveReload: true
    },
})