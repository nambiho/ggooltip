module.exports = function (sl) {
	'use strict';

	var moveEvent,
	tpXY = {x:0, y:0},
	tpPosition = {
		gap: tpXY, pos: tpXY, real: tpXY,left: 0, top: 0, width: 0, height: 0
	},
	elemPosition = sl.util.merge(tpPosition, {
		init (elem, evt) {
			var rect = elem.getBoundingClientRect();
			// real
			this.real.x = elem.offsetLeft - rect.left;
			this.real.y = elem.offsetTop - rect.top;
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
		},
		getXY (elem, evt) {
			var x, y, rect = elem.getBoundingClientRect();
			if (evt.pageX - elemPosition.pos.x < 0) x = elemPosition.real.x
			else x = evt.pageX - elemPosition.gap.x

			if (evt.pageY - elemPosition.pos.y < 0) y = elemPosition.real.y
			else y = evt.pageY - elemPosition.gap.y

			var winWidth = window.innerWidth,
			winHeight = window.innerHeight,
			right = winWidth - (window.event.pageX + elemPosition.left),
			bottom = winHeight - (window.event.pageY + elemPosition.top)
			;

			if (right <= 0) x = (winWidth - this.width) - 1;
			if (bottom <= 0) y = (winHeight - this.height) - 1;

			return {x:x,y:y}
		}
	})

	function getMoveEvent (elem) {
		return (e) => {
			var xy = elemPosition.getXY(elem, e);
			elem.style.left = xy.x + 'px';
			elem.style.top = xy.y + 'px';
		}
	}

	function getUpEvent (elem) {
		return (e) => {
			sl.util.trigger(elem, 'mouseup');
		}
	}
	var upEvent;
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
				class: 'frame'
			}, (config.frame && config.frame.attr) || {}),
			style:sl.util.merge({
				'cursor': 'default',
				'background': 'white'
			}, (config.frame && config.frame.style)),
			text: config.message, /* = temporary */
			event: {
				mousedown: mouseDown,
				mouseup: mouseUp
			}
		})
		return _frame;
	}
}