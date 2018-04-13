var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './src/index.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                        loader: 'file-loader',
                        options: {}  
                    }
                ]
            }
        ]
    },
    plugins: [new htmlWebpackPlugin({
        template: 'src/index.html'
    })]
}