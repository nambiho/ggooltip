module.exports = function (sl) {
	'use strict';

	var moveEvent, upEvent,
	tpOffset = {x:0, y:0},
	tpPosition = {
		gap: sl.util.copy({}, tpOffset),
		pos: sl.util.copy({}, tpOffset),
		real: sl.util.copy({}, tpOffset),
		left: 0, top: 0, width: 0, height: 0
	}, 
	margin = {top: 0, right: 0, bottom: 0, left: 0},
	elemPosition = sl.util.merge(tpPosition, {
		init (elem, evt) {
			var rect = elem.getBoundingClientRect();
			// real
			this.real.x = elem.offsetLeft - rect.x;
			this.real.y = elem.offsetTop - rect.y;
			// gap
			this.gap.x = evt.pageX - rect.x - this.real.x;
			this.gap.y = evt.pageY - rect.y - this.real.y;
			// pos
			this.pos.x = evt.pageX - rect.x;
			this.pos.y = evt.pageY - rect.y;
			// left
			this.left = rect.width - this.pos.x;
			this.top = rect.height - this.pos.y;
			// size
			this.width = Math.ceil(rect.width - this.real.x);
			this.height = Math.ceil(rect.height - this.real.y);

			setElemMargin(elem);
		},
		getXY (elem, evt) {
			var x, y;
			if (evt.pageX - this.pos.x < 0) x = this.real.x
			else x = evt.pageX - this.gap.x

			if (evt.pageY - this.pos.y < 0) y = this.real.y
			else y = evt.pageY - this.gap.y

			var winWidth = window.innerWidth,
			winHeight = window.innerHeight,
			right = winWidth - (window.event.pageX + this.left),
			bottom = winHeight - (window.event.pageY + this.top)
			;

			if (right <= 0) x = (winWidth - this.width) - 1;
			if (bottom <= 0) y = (winHeight - this.height) - 1;

			return {x:x-margin.left,y:y-margin.top}
		}
	});

	function setElemMargin (elem) {
		let style = sl.util.getComputedStyle(elem);
		let marginData = style.margin.split(" ");
		Object.keys(margin).forEach(function (val, idx) {
			let dataIdx = 
				marginData.length == 1 ? 0 : 
				marginData.length == 2 ? idx%2 : 
				marginData.length == 3 ? (idx == 3 ? 1 : idx) : 
				idx;
			let data = /[\d\.]+/.exec(marginData[dataIdx]);
			margin[val] = (data&&+(/[\d\.]+/.exec(marginData[dataIdx])[0]))||0;
		});
	}

	function getMoveEvent (elem) {
		return (e) => {
			var xy = elemPosition.getXY(elem, e);
			elem.style.left = xy.x + 'px';
			elem.style.top = xy.y + 'px';
		}
	}

	function getUpEvent (elem) {
		return (e) => sl.util.trigger(elem, 'mouseup');
		
	}
	
	function mouseDown(e) {
		if(e.button !== 0) return;

		var rect = this.getBoundingClientRect();
		elemPosition.init(this, e);

		moveEvent = getMoveEvent(this);
		upEvent = getUpEvent(this);

		this.classList.add('unselectable');
		sl.util.addEvent(window, {
			'mousemove': moveEvent,
			'mouseup': upEvent
		})
	}

	function mouseUp (e) {
		this.classList.remove('unselectable');
		sl.util.removeEvent(window, {
			'mousemove': moveEvent,
			'mouseup': upEvent
		})
	}

	return function (config) {
		var _frame = sl.util.createElement({
			dom: 'div',
			attr: sl.util.merge({
				class: 'frame',
				id: 'frame'
			}, (config.frame && config.frame.attr) || {}),
			style:sl.util.merge({
				'cursor': 'default',
				'background': 'white'
			}, (config.frame && config.frame.style)),
			event: {
				mousedown: mouseDown,
				mouseup: mouseUp
			}
		});

		return _frame
	}
}