;(function (global, gg) {
	global['gg'] = typeof exports === 'object' || typeof modules === 'object' ? null : gg;
} (this, (function () {
	"use strict";
	var sl = new simplelib();

	var gg = function (option) {
		var element = sl.util.createElement({
			dom:"div",
			text:option.message,
			style:{
				background:"#eee",
				color:"black"
			}
		}, document);
	}

	return gg
} ())));