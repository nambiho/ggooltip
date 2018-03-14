;(function (global, gg) {
	global['gg'] = typeof exports === 'object' || typeof modules === 'object' ? null : gg;
} (this, (function () {
	"use strict";
	var sl = new simplelib();

	var gg = function (option) {
		var frame = sl.util.createElement({
			dom:"div",
			style:{
				background:"#eee",
				color:"black",
				display:"inline-flex",
				padding:"10px"
			}
		});
		var element = sl.util.createElement({
			dom:"div",
			text:option.message,
			parent:frame,
			style:{
				float:"left",
				paddingRight:"10px"
			}
		});
		var x = sl.util.createElement({
			dom:"div",
			parent:frame,
			html:'<svg width="10" height="10" version="1.1" xmlns="http://www.w3.org/2000/svg">'+
				'<line x1="0" y1="0" x2="100%" y2="100%" stroke="black" stroke-width="1" />'+
				'<line x1="0" y1="100%" x2="100%" y2="0" stroke="black" stroke-width="1" />'+
				'</svg>'
		});

		document.body.appendChild(frame);
	}

	return gg
} ())));