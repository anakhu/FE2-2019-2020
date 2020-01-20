module.exports = {
  entry: ['webpack/hot/dev-server', './app/image-loader.js'],
  output: {
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      }],
  },
};
