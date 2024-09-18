const path = require('path');

module.exports = {
    mode: 'development', // Change to 'production' for production builds
    entry: './src/index.ts',
    target: 'node', // Specify that we are building for Node.js
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js', // Output file name
        path: path.resolve(__dirname, 'dist'), // Output directory
    },
};
