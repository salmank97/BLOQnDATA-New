// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function(webpackConfig) {
    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
      libraryName: 'antd',
      style: 'css',
    }]);
    return webpackConfig;
  };
  





// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   entry: './app/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'index_bundle.js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       { test: /\.(js)$/, use: 'babel-loader' },
//       { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
//     ]
//   },
//   devServer: {
//     historyApiFallback: true,
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: 'app/index.html'
//     })
//   ]