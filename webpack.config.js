let MiniCssExtractPlugin = require("mini-css-extract-plugin");
let path = require('path');

let configuration = {
  entry: "./src/scripts.ts",
  plugins: [new MiniCssExtractPlugin({filename: "styles.css"})],

  module: {
    rules: [

      // SCSS
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      // Typescript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // Babel
      /*{
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              '@babel/preset-typescript'
            ]
          }
        }
      }*/

      // Images
     /* {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },*/

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

module.exports = (env, options) => {

  let isProd = options.mode === 'production';

  if (isProd) {
    configuration.devtool = false;
    configuration.watch = false;
  } else {
    configuration.devtool = "eval-source-map";
    configuration.watch = true;
  }

  return configuration;
}
