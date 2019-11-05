const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "dist/index.html",
        }),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    }
};