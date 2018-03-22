"use strict";

import fs from "fs";

function router (app) {
	const __rootdir = app.get('rootdir');

	app.get('/', function (req, res) {
		res.sendFile(__rootdir + '/index.html');
	});

	// app.use in app.js
	// app.get, fs example
	// app.get('/assets/js/:jsfile', function (req, res) {
	// 	fs.stat(__rootdir + req.url, (err, stat) => {
	// 		if (err) {console.log(err); return}
	// 		const output = fs.readFileSync(__rootdir + req.url, 'utf8');
	// 		res.send(output);
	// 		res.end();
	// 	});
	// });
}

export default router;