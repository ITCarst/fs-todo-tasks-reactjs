import path                 from 'path'
import webpack              from 'webpack';
import baseConfig           from './webpack.config.common';
import HtmlWebpackPlugin    from 'html-webpack-plugin';

const config = Object.assign({}, baseConfig);

//inject app init for dev env
const devConf = path.join(__dirname, '../config/config.dev.js');
config.entry.devConf = devConf;

config.devtool = 'cheap-source-map';
config.module.rules.push(
    {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'stylus-loader']
    },
    {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }
);

config.plugins.push(
    new HtmlWebpackPlugin({
        template: 'client/index.html',
        inject: 'body',
        filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(), 
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    }
));

config.devServer = {
    historyApiFallback: true,
    publicPath: 'http://localhost:8080/'
};
config.module.rules[0].query.presets.push("react-hmre");

module.exports = config;
