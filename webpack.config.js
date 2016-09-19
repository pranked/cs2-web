var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var _ = require('lodash');

var config;
var jsLoader;
var babelLoader = 'babel?presets[]=react,presets[]=es2015,presets[]=stage-0';
var scssLoaders = [
    'style',
    'css',
    'postcss',
    'sass'
];

if (process.env.NODE_ENV === 'production') {
    var scssLoader = ExtractTextPlugin.extract('style', 'css!sass', 'postcss');
    scssLoaders = null;
    jsLoader = [babelLoader];
    config = {
        plugins: [
            new ExtractTextPlugin('style.css', {
                allChunks: true
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            })
        ]
    }
} else {
    jsLoader = ['react-hot', babelLoader];
    config = {
        devtool: 'eval-source-map',
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ],
        output: {
            publicPath: 'http://localhost:8011/build/'
        }
    };
}

_.merge(config, {
    entry: {
        app: ['./src/main.js']
    },
    output: {
        path: __dirname + '/src/build/',
        filename: 'app.js'
    },
    devServer: {
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    },
    resolve: {
        root: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'bower_components')],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loaders: jsLoader
            },
            {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, loader: 'file-loader'},
            {test: /\.scss$/, loader: scssLoader, loaders: scssLoaders}
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 6 versions']
        })
    ],
    sassLoader: {
        includePaths: [
            path.resolve(__dirname, './bower_components/bourbon/app/assets/stylesheets/')
        ]
    }
});

module.exports = config;