const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, '../app.js'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/
            }, {
                test: /\.(css|less)$/,
                exclude: /\.module\.(css|less)$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                        }
                    },{
                        loader: require.resolve('less-loader'), // compiles Less to LESS
                        options: {
                            lessOptions: {
                                importLoaders: 2,
                                javascriptEnabled: true
                            }
                        },
                    }
                ]
            }, {
                test: /\.(css|less)$/,
                include: /\.module\.(css|less)$/,
                use: [
                    require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            importLoaders: 1,
                            modules: true,
                        }
                    },{
                        loader: require.resolve('postcss-loader'),
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: () => [
                                    require('postcss-flexbugs-fixes'),
                                    autoprefixer({
                                        browsers: [
                                            '>1%',
                                            'last 4 versions',
                                            'Firefox ESR',
                                            'not ie < 9', // React doesn't support IE8 anyway
                                        ],
                                        flexbox: 'no-2009',
                                    }),
                                ],
                            }
                        }
                    },{
                        loader: require.resolve('less-loader'), // compiles Less to LESS
                        options: {
                            lessOptions: {
                                importLoaders: 2,
                                modules: true,
                                javascriptEnabled: true,
                                localIndetName:"[name]__[local]___[hash:base64:5]"
                            }
                        },
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../public'),
        port: '4001',
        host: '0.0.0.0',
        historyApiFallback: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, "../public/index.html")
        })
    ]
};