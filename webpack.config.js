const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => ({
  mode: "development",
  entry: ["./src/main.tsx", "./src/assets/styles.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "rebel-nell.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [[/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/]],
            customAttrAssign: [/\)?\]?=/]
          }
        }
      },
      {
        test: /\.tsx?$/,
        enforce: "pre",
        exclude: /(node_modules)/,
        use: [
          { loader: "cache-loader" },
          {
            loader: "tslint-loader",
            options: {
              typeCheck: false,
              emitErrors: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /(node_modules)/,
        use: [
          { loader: "cache-loader" },
          { loader: "babel-loader" }
        ]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(mp3)$/,
        loader: 'file-loader',
        options: {
          name: 'mustic/[name].[ext]'
        }
      },
    ]
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".scss",
      ".sass",
      ".less",
      ".png",
      ".woff",
      ".woff2",
      ".eot",
      ".ttf",
      ".svg",
      ".ico"
    ],
    modules: ["src", "node_modules"]
  },
  performance: {
    maxAssetSize: 200000,
    maxEntrypointSize: 400000
  },
  devtool: "source-map",
  context: __dirname,
  target: "web",
  devServer: {
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    https: false,
    port: 3035,
    inline: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    watchOptions: { ignored: /node_modules/ }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      async: false
    }),
    new MiniCssExtractPlugin({
      filename: `rebel-nell.css`
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/assets/index.html",
      filename: "./index.html"
    }),
    new webpack.EnvironmentPlugin({
      FIREBASE_API_KEY: (env && env.FIREBASE_API_KEY) || ""
    })
  ]
});
