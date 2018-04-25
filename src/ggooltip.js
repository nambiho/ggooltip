(function (simplelib) {
	'use strict';
	if (!simplelib) {
		return 
			console.warn(
				'simplelib is not defined\n'+
				'The ggooltip have to use simplelib library.\n'+
				'https://github.com/nambiho/jsSimpleLib/blob/master/dist/simplelib.js'
			),
			{}
	}

	var sl = new simplelib(),
	_gFrame = require('./unit/gFrame')(sl),
	_gConfig = require('./config')(sl),
	_gTitle = require('./unit/gTitle')(sl),
	_gMsg = require('./unit/gMessage')(sl),
	_gClose = require('./unit/gClose')(sl)
	;

	function ggooltip (conf) {
		var config = _gConfig(conf);
		config.frame = _gFrame(config);
		config.title = _gTitle(config);
		config.msg = _gMsg(config);
		config.close = _gClose(config);

		(config.parent||document.body).append(config.frame);

		return {
			config: config
		}

	}

	/**
	 * simplelib prototype with ggooltip
	 */
	sl.util.proto(simplelib, 'ggooltip', function (conf) {
		return new ggooltip(conf);
	});
} (window.simplelib));