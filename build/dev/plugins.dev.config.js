const pluginsConfig = require('../base/plugins.config.js');

const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const config = require('../config');
const utils = require('../utils/utils.js');

pluginsConfig.push(
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin()
);

module.exports = pluginsConfig;
