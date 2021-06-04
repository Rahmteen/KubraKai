const path = require('path');
let HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  entry: "./client/index.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js",
  },
  mode: 'development',
  module: {
    rules: [
      {
        // checks the extension
        test: /.(js|jsx)$/,
        // ignores these folders/directories
        exclude: /node_modules/,
        // if test passes, webpack uses the loaders specified
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: 'file-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, "client/"),
    compress: true,
    host: 'localhost',
    port: '8080',
    historyApiFallback: true,
    proxy: [
      { '/': { target: 'http://localhost:4000', secure: false } },
    ]

  },
  // set plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // favicon: 'test.png'
    }),
  ],
  resolve: { extensions: ["*", ".js", ".jsx"] },
  
}

