const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: [
        './index.tsx',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        contentBase: path.resolve(__dirname, 'public/assets'),
        historyApiFallback: true,
        open: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
        new CopyPlugin([
            { from: 'Static/robots.txt', to: '.' },
        ]),
    ],
    stats: {
        assets: true,
        assetsSort: 'size',
        all: false,
        errors: true,
        colors: true,
        performance: true,
        timings: true,
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        }, {
            test: /\.styl$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
        }, {
            test: /\.(jpg|png|gif|svg|woff2?|ttf|eot|svg|otf|ico|webmanifest)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: './',
                },
            }],
        }],
    },
}