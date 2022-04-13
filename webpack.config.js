const path = require("path");

module.exports = {
  // entry point
  entry: "./src/index.js",

  // bundle output
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  // devserver option
  devServer: {
    static: path.join(__dirname, "./dist"),
    compress: true,
    hot: true,
    port: 1020,
  },

  // use module
  module: {
    // rules apply to development
    rules: [
      // babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // css and style
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // development mode
  mode: "development",
};
