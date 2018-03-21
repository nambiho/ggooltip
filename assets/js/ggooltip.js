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
	function getOption (opt) {
		return opt = sl.util.merge({
			type: "message",
			position:"center",
			width:"350px",
			height:"150px",
			message:"",
			title:"",
			duration:false,
			animation:false,
			x:true,
			button:false,
			block:true,
			stage:document,
			textalign:'left',
			event:{
				init:sl.util.noop,
				load:sl.util.noop,
				unload:sl.util.noop
			}
		}, opt),
		opt
	}
	function removeChild () {
		// just call or apply
		if (!sl.util.isDom(this)) return sl.util.noop;
		return (function () {
			this.parentNode.removeChild(this);
		}).bind(this);
	}
	function gg (opt) {
		var option = getOption(opt);
		var parent = option.parent && 
			(sl.util.isDom(option.parent) && option.parent.tagName !== "body") 
				? option.parent 
				: document.documentElement;
		
				
		var frame,x,title,msg

		if (option.type === 'message') {
			frame = sl.util.createElement({
				dom:'div',
				style:{
					background:'#eee',
					color:'black',
					display:'table',
					padding:'15px',
					borderRadius:'10px',
					padding:'10px',
					border:'5px dashed gray',
					zIndex:'999',
					left:'50%',
					top:'50%',
					transform:'translate(-50%, -50%)',
					position:'absolute',
					width:'600px',
					maxWidth:'400px'
				},
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


		var x = sl.util.createElement({
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
				click: removeChild.call(frame)
			}
		});

		var title = sl.util.createElement({
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
				fontWeight:'bold',
				fontSize:'large',
				marginBottom:'10px',
				paddingBottom:'10px',
				borderWidth:'0 0 1px 0',
				borderStyle:'double'
			}
		});

		var msg = sl.util.createElement({
			dom:'span',
			text:option.message,
			parent:frame,
			style:{
				width:'300px'
			}
		});

		//parent.appendChild(frame);
		document.body.appendChild(frame);
		//setTimeout(_remove, 1500)
	}

	return gg
} ())));