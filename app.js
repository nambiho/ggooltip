"use strict";

const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function (req, res) {
	console.log('Express server is running on port ' + app.get('port'))
});

require('./lib/router').default(app);