/*
by Hosung moon <nambiho.moon@gmail.com>
company is HS
MIT license
github https://github.com/nambiho/ggooltip
*/

;(function (global, gg) {
	global['gg'] = typeof exports === 'object' || typeof modules === 'object' ? {} : gg;
} (this, (function () {
	"use strict";

	var sl = new simplelib();

	function getConfig (conf) {
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

	function removeElement () {
		// just use 'call' or 'apply' methods
		if (!sl.util.isDom(this)) return sl.util.noop;
		return function () {
			this.parentNode.removeChild(this)
		}.bind(this)
	}

	function gg (conf) {
		var config = getConfig(conf);
		var parent = config.parent && 
			(sl.util.isDom(config.parent) && config.parent.tagName !== "body") 
				? config.parent 
				: document.documentElement;
		
		var frame,close,title,msg;

		if (config.type === 'message') {
			frame = sl.util.createElement({
				dom:'div',
				attr:sl.util.merge({
					class : 'frame'
				}, (config.frame&&config.frame.attr) || {}),
				style:sl.util.merge({
					background:'#eee',
					color:'black',
					display:'table',
					padding:'15px',
					borderRadius:'10px',
					padding:'10px',
					border:'1px dashed gray',
					zIndex:'999',
					left:'50%',
					top:'50%',
					transform:'translate(-50%, -50%)',
					position:'absolute',
					width:config.width
				}, (config.frame&&config.frame.style) || {}),
				event:(function () {
					var gapX, gapY, parent, _move;
					function _renderMove (elem) {
						return function (e) {
							elem.style.left = (window.event.clientX - gapX) + 'px';
							elem.style.top = (window.event.clientY - gapY) + 'px';
						}
					}
					return {
						mousedown:function (e) {
							var rect = this.getBoundingClientRect();
							gapX = e.pageX - rect.x;
							gapY = e.pageY - rect.y;
	
							if(e.button !== 0) return;
							_move = _renderMove(this);
							sl.util.addEvent(document, 'mousemove', _move)
						},
						mouseup:function (e) {
							sl.util.removeEvent(document, 'mousemove', _move)
						}
					}
				} ())
			})
		}


		close = sl.util.createElement({
			dom:'div',
			parent:frame,
			html:'<svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg">'+
				'<circle cx="50%" cy="50%" r="49%" stroke="black" stroke-width="0.5" fill="white" />'+
				'<line x1="25%" y1="25%" x2="75%" y2="75%" stroke="black" stroke-width="1" />'+
				'<line x1="25%" y1="75%" x2="75%" y2="25%" stroke="black" stroke-width="1" />'+
				'</svg>',
			style:{
				cursor:'pointer',
				position:'absolute',
				right:'10px'
			},
			event:{
				click: removeElement.call(frame)
			}
		});

		title = sl.util.createElement({
			dom:'div',
			//text:'title2',
			//html:"<span>span title</span>",
			child:sl.util.createElement({
				dom:'span',
				text:'child title',
				style:{
					display:'block',
					width:'calc(100% - 30px)',
					wordWrap:'break-word'
				}
			}),
			parent:frame,
			style:{
				background:'#fff',
				padding:'5px',
				fontWeight:'bold',
				fontSize:'large',
				marginBottom:'10px',
				paddingBottom:'10px',
				borderWidth:'0 0 1px 0',
				borderStyle:'double'
			}
		});

		msg = sl.util.createElement({
			dom:'div',
			text:((sl.util.isString(config.message) && config.message) || (sl.util.isJSON(config.message) && config.message.text)) || "",
			parent:frame,
			style:{
				padding:'5px'
			}
		});

		document.body.appendChild(frame);
		
		return {
			frame:frame,
			close:close,
			title:title,
			msg
		}
	}

	return gg
} ())));