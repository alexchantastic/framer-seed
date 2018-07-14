const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.coffee'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.coffee$/,
        exclude: /(node_modules|bower_components)/,
        use: ['coffee-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new CopyWebpackPlugin([
      {
        from: './src/framer',
        to: 'framer'
      },
      {
        from: './src/images',
        to: 'images'
      },
      {
        from: './src/imported',
        to: 'imported'
      }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.png'
    })
  ],
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json', '.coffee'],
    modules: [
      path.resolve(__dirname, 'src/modules'),
      'node_modules'
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'dist')
  }
};
