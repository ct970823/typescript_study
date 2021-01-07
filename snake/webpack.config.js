// 引入一个包
const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
// webpack 中的所有配置信息
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",
    // 打包文件所在的目录
    output: {
        // 指定打包文件的目录
        path:path.resolve(__dirname,"dist"),
        // 打包后的文件
        filename: "bundle.js",
        environment:{
            arrowFunction:false,
            const:false
        }
    },
    // 指定webpack打包是所需要的模块
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    // 配置babel
                    {
                        loader:"babel-loader",
                        options: {
                            // 设置预定义的环境
                            presets:[
                                [
                                    // 指定环境插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets:{
                                            "chrome":"88",
                                            "ie":"11"
                                        },
                                        // 指定corejs的版本
                                        "corejs":"3",
                                        // 使用corejs的方式，按需加载
                                        "useBuiltIns":"usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/
            },
            //  设置less文件的处理
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                      loader: "postcss-loader",
                      options: {
                          postcssOptions: {
                              plugins: [
                                  [
                                      "postcss-preset-env",
                                      {
                                          "browsers":"last 2 versions"
                                      }
                                  ]
                              ]
                          }
                      }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    // 配置webpack插件
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:"自定义title"
            template:'./src/index.html'//模板
        })
    ],
    // 设置引用的模块
    resolve: {
        extensions: ['.ts','.js']
    }
}
