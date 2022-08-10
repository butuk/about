let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let path = require('path');

let configuration = {
  entry: "./src/scripts.ts",
  plugins: [new MiniCssExtractPlugin(
    {
      filename: "styles.css"
      }
  )],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],

      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },


    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "scripts.js"
  },
};

//module.exports = configuration;

module.exports = (env, options) => {

  let production = options.mode === 'production';

  configuration.devtool = production
                        ? "source-map"
                        : "eval-source-map"
  return configuration;
}
