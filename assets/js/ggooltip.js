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

	var gg = function (option) {

		/*
		option
		{

			type: message, status
			position: normal, center, top, right, bottom, left
			textalign: left, right
			stage: document.body
			block: true, false
			button:{
				image:
				click:
				init:
				position: top, right, bottom, left
			}
			x: true, false
			animation: true, false
			duration: true(=1500), false(=default), number(=1500)
			title: string

		}
		*/

		var option = sl.util.merge({
			type: "message",
			position:"center",
			width:"350px",
			height:"150px",
			message:"",
			title:""
		}, option);

		var parent = option.parent && 
			(sl.util.isDom(option.parent) && option.parent.tagName !== "body") 
				? option.parent 
				: document.documentElement;
		
		var _remove = function () {
			frame.parentNode.removeChild(frame);
		}

		var frame = sl.util.createElement({
			dom:'div',
			style:{
				background:'#eee',
				color:'black',
				//display:'inline-table',
				padding:'15px',
				borderRadius:'10px',
				padding:'10px',
				border:'5px dashed gray',
				zIndex:'999',
				//*
				left:'50%',
				top:'50%',
				transform:'translate(-50%, -50%)',
				// */
				position:'absolute'
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
		});

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
				'click':_remove
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

		var element = sl.util.createElement({
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