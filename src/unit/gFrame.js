module.exports = function (sl) {
	'use strict';

	var gapX, gapY, parent, _move;
	function renderMove (elem) {
		return function (e) {
			elem.style.left = (window.event.clientX - gapX) + 'px';
			elem.style.top = (window.event.clientY - gapY) + 'px';
		}
	}

	function mouseDown(e) {
		var rect = this.getBoundingClientRect();
		gapX = e.pageX - rect.x;
		gapY = e.pageY - rect.y;

		if(e.button !== 0) return;
		_move = renderMove(this);
		sl.util.addEvent(document, 'mousemove', _move)
	}

	function mouseUp (e) {
		sl.util.removeEvent(document, 'mousemove', _move)
	}


	return function (config) {
		var _frame = sl.util.createElement({
			dom: 'div',
			attr: sl.util.merge({
				class: 'frame'
			}, (config.frame && config.frame.attr) || {}),
			style:(config.frame && config.frame.style) || {},
			text: config.message, /* = temporary */
			event: {
				mousedown: mouseDown,
				mouseup: mouseUp
			}
		})
		return _frame;
	}
}