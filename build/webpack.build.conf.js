const {merge} = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const buildWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin()
    ]
})

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
})