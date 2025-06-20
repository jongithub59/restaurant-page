const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    watchFiles: {
      // Watch all files in the src folder and index and styles
      paths: ["src/**/*", "dist/index.html", "dist/styles.css"],
      options: {
        usePolling: true, // Enable polling
        interval: 300, // Check every 300ms
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // outputPath: "pics" //need to have outputPath if image files are stored in a folder
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        // outputPath: "fonts"
      },
    ],
  },
};