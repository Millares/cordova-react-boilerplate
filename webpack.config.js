const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.tsx',
	output: {
		path: path.resolve(__dirname, './www/assets'),
		filename: 'bundle.js'
	},
	node: {
    __dirname: false
  },
	devtool: "source-map",
	module: {
		rules: [{
				test: /\.ts$/,
				enforce: 'pre',
				loader: 'tslint-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.tsx?$/,
				loader: ["babel-loader", "awesome-typescript-loader"]
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.js$/,
				enforce: 'pre',
				loader: 'standard-loader',
				options: {
					typeCheck: true,
					emitErrors: true
				}
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
                 test:/\.(s*)css$/,
                 use: ExtractTextPlugin.extract({
                        fallback:'style-loader',
                        use:['css-loader','sass-loader'],
					})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
				filename:'bundle.css'
			})
    ],
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
	},
	externals: {

	}
}
