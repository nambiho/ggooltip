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
	_gConfig = require('./unit/config')(sl)
	;

	function ggooltip (conf) {
		var config = _gConfig(conf);
		var frame = _gFrame(config);

		(config.parent||document.body).append(frame);
		
		return {
			config: config,
			frame: frame
		}
	}

	/**
	 * simplelib prototype with ggooltip
	 */
	sl.util.proto(simplelib, 'ggooltip', function (conf) {
		return new ggooltip(conf);
	});
} (window.simplelib));