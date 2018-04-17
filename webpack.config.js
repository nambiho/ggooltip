var path = require('path');

module.exports = (function () {
	'use strict';

	return {
		entry: {
			ggooltip: path.join(__dirname , 'src/ggooltip.js')
		},
		output: {
			path : path.join(__dirname , 'dist'),
			filename : '[name].js'
		},
		module: {
			rules: [{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: ['/node_modules'],
				options: {
					presets: ['env']
				}
			}]
		}
	}
}())