"use strict";

import fs from "fs";

function router (app) {
	const __rootdir = app.get('rootdir');

	app.get('/', function (req, res) {
		res.sendFile(__rootdir + '/index.html');
	});
	app.get('/assets/js/:jsfile', function (req, res) {
		// const jsfile = req.params.jsfile;
		// if (!jsfile) {res.end(); return}
		fs.stat(__rootdir + req.url, (err, stat) => {
			if (err) {console.log(err); return}
			console.log(__rootdir + req.url);
			res.sendFile(__rootdir + req.url);
			res.end();
		});
	});
}

export default router;