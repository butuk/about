let path = require('path');

let configuration = {
  entry: "./src/scripts.js",
  output: {
    path: path.resolve(__dirname, ""),
    filename: "scripts.js"
  }
};

module.exports = configuration;
