var path = require('path');


module.exports = (function () {
	'use strict';

	return {
		entry: {
			ggooltip: path.join(__dirname , 'src/ggooltip.js')
		},
		output: {
			path : path.join(__dirname , 'dist'),
			filename : '[name].js',
			publicPath: '/dist/'
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
		},
		devServer: {
			before (app /* <= express() */) {
				const express = require('express');
				function eStatic (ar={
					'/js': 'assets/js',
					'/css': 'assets/css',
					'/lib': 'lib'
				}) {
					for (let x in ar) {
						app.use(x, express.static(path.join(__dirname, ar[x])));
					}
				}
				eStatic();
			}
		}
	}
}())