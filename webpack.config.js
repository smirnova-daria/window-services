const path = require('path')

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		hot: true,
		static: {
			directory: './',
			watch: true
		}
	},
}