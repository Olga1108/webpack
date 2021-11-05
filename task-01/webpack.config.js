const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 
const path = require('path');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
    },
    devtool: isDev ? 'source-map' : ' ',
    module: {
      rules: [{
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ]
      }, {
        test: /\.(jpg|jpeg|png|svg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }]
      },
       {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
              presets: ['babel-preset-env']
          }
        }
      },
  ]
    },
    resolve: {
      extensions: ['.js']
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
      new HtmlWebpackPlugin({
        template: (__dirname, './src/index.html'),
        filename: 'index.html',
        minify: {
          collapseWhitespace: isProd
        },
      }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jquery: "jQuery",
        "window.jQuery": "jquery"
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'build'),
      open: true,
      compress: true,
      port: 5000,
    },
  }
