const path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist/js')
        // path: "../dist/js"
    },


    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 9000,
        open: true
    }
};

module: {
    rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }]
}