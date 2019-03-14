const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

process.noDeprecation = true;

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'), // Compile production build into dir build
      publicPath: '/',
    },
    options.output
  ),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use:  [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
    //   {
    //     test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
    //     use: 'file-loader',
    //   },
    //   {
    //     test: /\.(jpe?g|png|gif)$/,
    //     use: [
    //       {
    //         loader: 'url-loader',
    //         options: {
    //           limit: 10 * 1024, // limit: 10 kb
    //         }
    //       },
    //       {
    //         loader: 'image-webpack-loader',
    //         options: {
    //           mozjpeg: {
    //             enabled: false
    //           },
    //           gifsicle: {
    //             interlaced: false,
    //           },
    //           optipng: {
    //             optimizationLevel: 7,
    //           },
    //           pngquant: {
    //             quality: '65-90',
    //             speed: 4,
    //           },
    //         }
    //       }
    //     ]
    //   },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
    ],
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    })
  ]),
  resolve: {
    modules: [
      'node_modules',
      'app'
    ],
    extensions: [
      '.js',
      '.jsx',
      '.scss',
      '.react.js'
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main'
    ]
  },
  devtool: options.devtool,
  devServer: options.devserver,
  target: 'web',
  performance: options.performance || {},
  optimization: options.optimization || {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
});