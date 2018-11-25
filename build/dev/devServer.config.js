const dirVars = require('../base/dirVars.config.js');

const proxyConfig = require('./proxy.dev.config.js');

let devServer = {
    contentBase: dirVars.distDir,
    //publicPath:'http://localhost:8080/',
    host: 'localhost',
    // host: 'html-www.dev.colorbridge.com.cn',
    port: '8080',
    open: false, //自动拉起浏览器
    hot: true, //热加载
    hotOnly: true,
    compress: true,
    // inline: true, // 可以监控js变化
    // 代理
    proxy: proxyConfig
};
module.exports = devServer;
