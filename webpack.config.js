var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './src/index.js'
    ],

    output: {
        filename: 'bundle.js',
        path: 'public',
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-object-rest-spread'],
                    presets: ['es2015', 'react']
                }
            },
            {test: /\.css$/, loaders: ['style', 'css', 'postcss']},
            {test: /\.scss$/, loaders: ['style', 'css', 'postcss', 'sass']},
            {test: /\.(woff2?|ttf|eot|svg|png|jpg)$/, loader: 'url-loader?limit=10000'},
            {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'}
        ]
    },

    postcss: [
        autoprefixer({
            browsers: ['> 5%']
        })
    ],

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}

