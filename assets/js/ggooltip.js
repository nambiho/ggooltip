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
				display:"inline-table",
				padding:"15px",
				borderRadius:"10px",
				padding:"10px",
				border:"5px dashed gray",
				position:"absolute"/*,
				left:"50%",
				top:"50%",
				transform:"translate(-50%, -50%)"*/
			}
		});


		var x = sl.util.createElement({
			dom:"div",
			parent:frame,
			html:'<svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg">'+
				'<circle cx="50%" cy="50%" r="49%" stroke="black" stroke-width="0.5" fill="white" />'+
				'<line x1="25%" y1="25%" x2="75%" y2="75%" stroke="black" stroke-width="1" />'+
				'<line x1="25%" y1="75%" x2="75%" y2="25%" stroke="black" stroke-width="1" />'+
				'</svg>',
			style:{
				cursor:"pointer",
				position:"absolute",
				right:"10px"
			},
			event:{
				'click':function () {
					frame.parentNode.removeChild(frame);
				}
			}
		});


		var title = sl.util.createElement({
			dom:"div",
			//text:"title2",
			//html:"<span>span title</span>",
			child:sl.util.createElement({
				dom:"span",
				text:"child title",
				style:{
					display:"block",
					width:"calc(100% - 30px)",
					wordWrap:"break-word"
				}
			}),
			parent:frame,
			style:{
				fontWeight:"bold",
				fontSize:"large",
				marginBottom:"10px",
				paddingBottom:"10px",
				borderWidth:"0 0 1px 0",
				borderStyle:"double"
			}
		});

		var element = sl.util.createElement({
			dom:"span",
			text:option.message,
			parent:frame,
			style:{
				width:"300px"
			}
		});

		document.body.appendChild(frame);
	}

	return gg
} ())));