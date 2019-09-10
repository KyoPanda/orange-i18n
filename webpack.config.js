const path = require('path');

module.exports = {
	mode: 'production',
	target: 'web',
	entry: './src/index.js',
	output: {
		filename: 'OrangeI18N.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
					},
				},
			},
		],
	},
};