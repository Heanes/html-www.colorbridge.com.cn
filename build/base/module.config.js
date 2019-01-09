const dirVars = require('./dirVars.config.js');

/**
 * @doc module定义
 * @author Heanes
 * @time 2018-11-05 17:04:40 周一
 */
module.exports = {
    rules: [
        // ejs 模版文件
        {
            test: /\.vue$/,
            use: ['vue-loader'],
            include: dirVars.srcRootDir,
            exclude: /node_modules|vendor/
        },
        // 图片等资源文件
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 4,
                        name: 'static/img/[name].[hash:8].[ext]',
                    },
                }
            ],
            /*include: dirVars.srcRootDir,
            exclude: /node_modules|vendor/*/
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 4,
                //useRelativePath: true,
                name: 'static/media/[name].[hash:8].[ext]'
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 4,
                //useRelativePath: true,
                name: 'static/fonts/[name].[hash:8].[ext]'
            }
        }
    ],
};
