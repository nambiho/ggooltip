"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function router(app) {
	var __rootdir = app.get('rootdir');

	app.get('/', function (req, res) {
		res.sendFile(__rootdir + '/index.html');
	});

	app.get('/assets/js/:jsfile', function (req, res) {
		_fs2.default.stat(__rootdir + req.url, function (err, stat) {
			if (err) {
				console.log(err);return;
			}
			var output = _fs2.default.readFileSync(__rootdir + req.url, 'utf8');
			res.send(output);
			res.end();
		});
	});
}

exports.default = router;