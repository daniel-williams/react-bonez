var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var TARGET = 'dev'; // 'dev' | 'build'
var url = require('url-loader');

var PROJECT_PATH = path.resolve(__dirname);
var BOWER_COMPONENTS = path.resolve(PROJECT_PATH, 'bower_components');
var NODE_MODULES = path.resolve(PROJECT_PATH, 'node_modules');
var WEB_ROOT = path.resolve(PROJECT_PATH, 'Web');

var APP_ROOT = path.resolve(WEB_ROOT, 'app');
var DIST_PATH = path.resolve(WEB_ROOT, 'content/scripts');


var config = {
    entry: {
        app: [path.resolve(APP_ROOT, 'app')]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: NODE_MODULES,
        alias: {
            lodash: 'lodash/dist/lodash'
        }
    },
    resolveLoader: {
        root: NODE_MODULES
    },
    output: {
        path: DIST_PATH,
        filename: '[name].js',
        publicPath: 'http://react-bonez.com:8088/'
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash',
        })
    ],
    module: {
        preLoaders: [
            { test: /\.jsx?$/, include: APP_ROOT, loader: 'eslint-loader' },
        ],
        loaders: [
            { test: /\.jsx?$/, include: APP_ROOT, loaders: ['react-hot', 'babel'] },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'url?limit=100000' },
        ]
    }
};

module.exports = config;
// switch (TARGET) {
//     case 'build':
//         module.exports = merge(config, {
//             plugins: [
//                 new webpack.optimize.UglifyJsPlugin({
//                     compress: {
//                         warnings: false
//                     }
//                 }),
//                 new webpack.DefinePlugin({
//                     'process.env': {
//                         'NODE_ENV': JSON.stringify('production')
//                     }
//                 })
//             ]
//         });

//         break;

//     case 'dev':
//         module.exports = merge(config, {
//             entry: [
//                 'webpack-dev-server/client?http://127.0.0.1:8080',
//                 'webpack/hot/dev-server'
//             ]
//         });
//         break;
// }

