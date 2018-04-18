"use strict";

const express = require('express');
const app = express();
const path = require('path');
const _static = {
	'/js': 'assets/js',
	'/css': 'assets/css',
	'/dist': 'dist',
	'/lib': 'lib'
};

app.set('port', process.env.PORT || 8000);
app.set('rootdir', __dirname);


function eStatic (ar) {
	for (let x in ar) {
		console.log(express.static(path.join(__dirname, ar[x])))
		app.use(x, express.static(path.join(__dirname, ar[x])));
	}
}
eStatic(_static);

app.listen(app.get('port'), function (req, res) {
	console.log('Express server is running on port ' + app.get('port'))
});

require('./router/main')(app);