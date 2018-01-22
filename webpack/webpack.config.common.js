import path                 from 'path'
import webpack              from 'webpack';
import HtmlWebpackPlugin    from 'html-webpack-plugin';

module.exports = {
    entry: {
        app: ['babel-polyfill','whatwg-fetch', path.join(__dirname, '../client/js/index.js')],
        vendor: ['react', 'react-dom', 'redux', 'react-redux', 'redux-saga'],
        styles: path.join(__dirname, '../client/styles/main.styl')
    },
    output: {
        path: path.join(__dirname, '../public/'),
        filename: 'js/[name].bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            }, {
                test: /\.json$/,
                use: ['json-loader']
            }, {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'url-loader?limit=4000&publicPath=./&name=imgs/[name].[ext]'
            }, {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?&publicPath=./&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'js/vendor.bundle.js' })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.styl']
    },
    devtool: 'eval-source-map'
};
