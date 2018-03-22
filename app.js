"use strict";

const express = require('express');

const app = express();

const path = require('path');

app.set('port', process.env.PORT || 8000);
app.set('rootdir', __dirname);


app.use('/js', express.static(path.join(__dirname, 'assets/js')));
app.use('/css', express.static(path.join(__dirname, 'assets/css')));

app.listen(app.get('port'), function (req, res) {
	console.log('Express server is running on port ' + app.get('port'))
});

require('./lib/router').default(app);