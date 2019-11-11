const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
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
                test: /\.(t|j)sx$/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader?module=es6'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'source-map-loader',
                enforce: "pre"
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