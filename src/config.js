module.exports = function (sl) {
	'use strict';
	return function (conf) {
		return sl.util.merge({
			frame:{
				event:{
					init:sl.util.noop,
					load:sl.util.noop,
					unload:sl.util.noop
				}
			},
			close:{},
			title:{
				text:"",
				event:{/*init*/}
			},
			button:false, //{init},
			message:null, /*{text:"",event:{init:sl.util.noop}}*/
			type: "message",
			position:"center",
			width:"350px",
			height:"150px",
			duration:false,
			stage:document
		}, conf)
	}
}