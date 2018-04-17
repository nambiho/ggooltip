"use strict";

const fs = require('fs');

module.exports = function (app) {
	const __rootdir = app.get('rootdir');

	app.get('/', function (req, res) {
		res.sendFile(__rootdir + '/index.html');
	});
}