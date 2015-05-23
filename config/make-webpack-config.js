const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(options) {
  var cssLoaders = 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions';
  var sassLoaders = cssLoaders + '!sass-loader?indentedSyntax=sass';

  if (options.production) {
    cssLoaders = ExtractTextPlugin.extract('style-loader', cssLoaders.substr(cssLoaders.indexOf('!')));
    sassLoaders = ExtractTextPlugin.extract('style-loader', sassLoaders.substr(sassLoaders.indexOf('!')));
    require('./utils/clean-dist')();
  }

  var jsLoaders = ['babel-loader','flowcheck'];

  return {
    entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
    ],
    debug: !options.production,
    devtool: options.devtool,
    output: {
      path: options.production ? './dist' : path.join(__dirname,'./build'),
      filename: options.production ? 'app.[hash].js' : 'app.js',
      publicPath: '',
    },
    eslint: {
      configFile: '.eslintrc'
    },
    module: {
      preLoaders: options.lint ? [
        {
          test: /\.js$|.jsx?$/,
          exclude: /node_modules/,
          loaders: ['eslint', 'jscs']
        }
      ] : [],
      loaders: [
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.js$|.jsx$/,
          exclude: /(node_modules|bower_components)/,
          loaders: options.production ? jsLoaders : ['react-hot-loader'].concat(jsLoaders),
        },
        {
          test: /\.css$/,
          loader: cssLoaders,
        },
        {
          test: /\.sass$/,
          loader: sassLoaders,
        },
        {
          test: /\.less$/,
          loader: 'style-loader!css-loader!less-loader'
        },
        {
          test: /\.(jpe?g|png|gif|svg|woff|eot|ttf)$/,
          loader: 'url?limit=10000&name=[sha512:hash:base64:7].[ext]'
        },
        {
          test: /\.scss$/,
          loader: 'style!css?sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
        },
        {
          test: /\.jpg$/,
          loader: "file-loader",
        },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.json', '.jsx'],
    },
    plugins: options.production ? [
      // Important to keep React file size down
      new webpack.DefinePlugin({
        "process.env": {
          "BROWSER" : JSON.stringify(true),
          "NODE_ENV": JSON.stringify("production")
        }
      }),
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: true
      },
      output: {
        comments: false
      }
      }),
      new ExtractTextPlugin("app.[hash].css"),
      new HtmlWebpackPlugin({
        template: './config/tmpl.html'
      }),
      function () { this.plugin('done', writeStats); },
      
    ] : []
  };
};

