import path                 from 'path'
import webpack              from 'webpack';
import baseConfig           from './webpack.config.common';
import ExtractTextPlugin    from 'extract-text-webpack-plugin';

const config = Object.assign({}, baseConfig);

config.module.rules.push(
    {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader')
    }, 
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css-loader')
    },
);

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('[name].css')
);

module.exports = config;
