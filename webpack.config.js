const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const basePath = `${__dirname}/src/assets`;

module.exports = {
  entry: {
    styles: `${basePath}/css/styles.css`,
    script: `${basePath}/js/script.js`,
  },
  output: {
    path: `${__dirname}/dest/`,
  },
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["!manifest.json", "**"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      publicPath: "/dest/",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
    ],
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  },
};
