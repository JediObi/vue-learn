const path = require('path');
module.exports = function(env, argv) { // env其实是在package中运行的命令是配置了
    env = env || {};
    return {
        // entry: './src/main.js',
        entry: path.resolve(__dirname, 'src/index.js'),
        module: {
            rules: [
                // 处理css
                {
                    test: /\.css$/i,
                    use: ['vue-style-loader', 'css-loader']
                },
                // 处理vue
                {
                    test: /\.vue$/i,
                    use: 'vue-loader'
                },
                // // 处理less
                // {
                //     test: /\.less$/i,
                //     use: ['vue-style-loader', 'css-loader', 'less-loader']
                // },
                // 小图片转为base64
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'static/media/[name].[ext]',
                        }
                    }]
                },
                // 处理es6
                {
                    test: /\.(js|jsdevelopmentx)$/i,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                // 多媒体文件
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,

                    }
                },
                // 处理字体
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,

                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue': 'vue/dist/vue.esm',
                '@': path.resolve(__dirname, 'src/components')
            }
        },
        ...env.development ? require('./config/webpack.dev') : require('./config/webpack.prod')
    }
}