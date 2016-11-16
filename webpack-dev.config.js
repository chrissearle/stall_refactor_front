var webpack = require('webpack');

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
            {test: /\.css$/, loaders: ['style', 'css']},
            {test: /\.scss$/, loaders: ['style', 'css', 'sass']},
            {test: /\.(woff2?|ttf|eot|svg|png|jpg)$/, loader: 'url-loader?limit=10000'},
            {test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'}
        ]
    },

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

