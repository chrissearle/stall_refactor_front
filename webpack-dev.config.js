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
            {test: /\.css$/, loaders: ['style', 'postcss', 'css']},
            {test: /\.scss$/, loaders: ['style', 'postcss', 'css', 'sass']},
            {test: /\.(woff2?|ttf|eot|svg|png|jpg)$/, loader: 'url-loader?limit=10000'},
            {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'}
        ]
    },

    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],

    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        hot: true,
        inline: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

