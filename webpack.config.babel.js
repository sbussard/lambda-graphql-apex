import path from 'path';
import Webpack from 'webpack';

// Paths
// NOTE: paths are relative to each functions folder

const ENTRY_PATH = './index.js';
const OUTPUT_PATH = path.join(process.cwd(), 'lib');
let OUTPUT_FILENAME = 'index.js';

// Rules
let jsRule = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  },
  exclude: [/node_modules/],
};

// Plugins
let noErrorEmitPlugin = new Webpack.NoEmitOnErrorsPlugin();

let envPlugin = new Webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

let optionsPlugin = new Webpack.LoaderOptionsPlugin({
  minimize: true,
  debug: false,
});

let uglifyPlugin = new Webpack.optimize.UglifyJsPlugin({
  compress: { warnings: false },
  output: { comments: false },
  sourceMaps: false,
});

// Configuration
let configuration = {
  entry: ENTRY_PATH,
  target: 'node',
  output: {
    path: OUTPUT_PATH,
    filename: OUTPUT_FILENAME,
    libraryTarget: 'commonjs2',
  },
  externals: ['aws-sdk'],
  module: {
    rules: [jsRule],
  },
  plugins: [
    noErrorEmitPlugin,
    envPlugin,
    optionsPlugin,
    uglifyPlugin,
  ],
};

export default configuration;
