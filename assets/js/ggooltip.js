;(function (global, gg) {
	global['gg'] = typeof exports === 'object' || typeof modules === 'object' ? null : gg;
} (this, (function () {
	"use strict";
	var sl = new simplelib();

	var gg = function (option) {

		var frame = sl.util.createElement({
			dom:'div',
			style:{
				background:'#eee',
				color:'black',
				display:'inline-table',
				padding:'15px',
				borderRadius:'10px',
				padding:'10px',
				border:'5px dashed gray',
				zIndex:'999',
				position:'absolute'/*,
				left:'50%',
				top:'50%',
				transform:'translate(-50%, -50%)'*/
			},
			event:(function () {
				var xpos,ypos;
				function _move (e) {
					var chposx = xpos - e.pageX,
					chposy = ypos - e.pageY,
					offsetx = this.offsetLeft-chposx,
					offsety = this.offsetTop-chposy;
					
					xpos = e.pageX;
					ypos = e.pageY;

					if ( offsetx <= 0) return;
					if ( offsety <= 0) return;
					if ( offsetx + this.offsetWidth >= document.documentElement.clientWidth ) return;
					if ( offsety + this.offsetHeight >= document.documentElement.clientHeight ) return;

					this.style.left = offsetx + 'px';
					this.style.top = offsety + 'px';
				}
				return {
					mousedown:function (e) {
						xpos = e.pageX; ypos = e.pageY;
						if(e.button !== 0) return;
						sl.util.addEvent(this, 'mousemove', _move);
					},
					mouseup:function (e) {
						sl.util.removeEvent(this, 'mousemove', _move)
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
				'click':function () {
					frame.parentNode.removeChild(frame);
				}
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

		option.parent ? option.parent.appendChild(frame) : document.body.appendChild(frame);
	}

	return gg
} ())));