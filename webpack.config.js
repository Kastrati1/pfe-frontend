const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const outputDirectory = "dist";
const projectRoot = path.resolve(__dirname, "..");
require("dotenv").config();
//process.env.NODE_ENV == development
console.log(process.env);

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: ["node_modules", "src/client"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [new CleanWebpackPlugin([outputDirectory])]
};
