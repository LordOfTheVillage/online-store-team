const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpackConfig = require('./webpack.config');

module.exports = (env, argv) => {
  const watchMode = argv.liveReload || false;
  const modeEnv = argv.mode || 'development';
  const config = webpackConfig(modeEnv);

  const optimizations = {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [],
  };

  return {
    devServer: {
      port: 9000,
    },
    resolve: config.resolve,
    module: {
      rules: [config.modules.js, config.modules.css],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/Html/template.html',
      }),
      new WebpackNotifierPlugin({ alwaysNotify: false }),
    ],
    entry: {
      main: './src/index.tsx',
    },
    output: {
      filename: watchMode ? 'assets/[name].[hash].js' : 'assets/[name].[chunkhash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
  };
};
