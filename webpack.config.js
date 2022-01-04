const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  entry: {
    index: "./src/index.jsx",
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],

  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader',
        //MiniCssExtractPlugin.loader,,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, 'postcss-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    //new MiniCssExtractPlugin({
      //filename: "index.css",
      //chunkFilename: "index.css"
    //}),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
   
  };
}

module.exports = config;