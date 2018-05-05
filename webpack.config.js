var path = require('path');

const lifecycle = process.env.npm_lifecycle_event;
let entry = {ggooltip: path.join(__dirname , 'src/ggooltip.js')};
if (lifecycle === 'dev') {
	entry.ggooltip = path.join(__dirname , 'app.js');
}
module.exports = (function () {
	'use strict';

	return {
		mode: 'development',
		entry: entry,
		output: {
			path : path.join(__dirname , 'dist/js'),
			filename : '[name].js',
			publicPath: '/dist/js/'
		},
		module: {
			rules: [{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['env']
				}
			}, {
				test: /\.scss$/,
				//exclude: /node-modules/,
				use: [{
					loader: 'style-loader'
				},{
					loader: 'css-loader'
				},{
					loader: 'sass-loader',
					options: {
						includePaths: ['./src/scss/base.scss']
					}
				}]
			}]
		},
		devServer: {
			contentBase: [path.join(__dirname, "."),path.join(__dirname, "assets")],
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