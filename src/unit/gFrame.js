module.exports = function (sl) {
	'use strict';

	var gapX, gapY, posX, posY, _move;

	function renderMove (elem) {
		return (e) => {
			var x = e.pageX - gapX,
			y = e.pageY - gapY,
			rect = elem.getBoundingClientRect()
			// limitLeft = (e.clientX - posX),
			// limitTop = (e.clientY - posY);
			// console.log(e.clientX, posX)
			;
			if (e.clientX < 0) x = posX;
			if (e.clientY < 0) y = posY;

			elem.style.left = x + 'px';
			elem.style.top = y + 'px';
		}
	}

	function mouseDown(e) {
		var rect = this.getBoundingClientRect();
		// e.pageX : click point
		// rect.x : computed left position
		// this.offsetLeft : real left position
		// 

		gapX = e.pageX - rect.x - (this.offsetLeft-rect.x);
		gapY = e.pageY - rect.y - (this.offsetTop-rect.y);
		posX = e.clientX - rect.x;
		posY = e.clientY - rect.y;

		if(e.button !== 0) return;
		_move = renderMove(this);
		this.classList.add('unselectable');
		sl.util.addEvent(document, 'mousemove', _move)
	}

	function mouseUp (e) {
		this.classList.remove('unselectable');
		sl.util.removeEvent(document, 'mousemove', _move)
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