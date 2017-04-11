var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/server/server.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                // exclude: '/node_modules/'
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        // modules: ["node_modules"]
    },
    externals: [nodeExternals()]
};
