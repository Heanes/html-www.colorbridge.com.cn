let utils = require('./utils/utils');
/**
 * @doc 编译信息基础配置文件
 */
module.exports = {
    appName: 'html-www.colorbridge.com.cn',
    appVersion: 'v1.0.0',
    appAuthor: 'Heanes',
    copyrightYear: utils.getFormatDate('yyyy'),
    generateTime: utils.getFormatDate(),
};
