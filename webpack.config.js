const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: isProd ? "production" : "development",
  target: process.env.NODE_ENV === "development" ? "web" : "browserslist",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    modules: ['node_modules', path.join(__dirname, 'src')],

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
        // Extract any CSS or SCSS content and minimize
        test: /\.[s]?css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: './public/favicon.ico'
    }),
    new Dotenv()
    //new MiniCssExtractPlugin({
    //filename: "index.css",
    //chunkFilename: "index.css"
    //}),
  ],
};

if (isProd) {
  config.optimization = {
    minimize: true,
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    client: {
      webSocketURL: "auto://0.0.0.0:0/ws",
    },
    proxy: {
      "/api/**": {
        //target: "http://172.25.80.1:8082/",
        target: "http://192.168.1.101:31728/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {"^/api":"" }
        //rewrite: function (path, req) { return path.replace(/\/(.*?)/g, '') }

      },
      "/thumbnail": {
        target: "http://172.24.224.1/",
        secure: false,
        changeOrigin: true,
        pathRewrite: {"^/api":"" }
        //rewrite: function (path, req) { return path.replace(/\/(.*?)/g, '') }

      }
    }

  };
}

module.exports = config;
