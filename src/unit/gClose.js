module.exports = function (sl) {
	'use strict';

	function removeElement () {
		// just use 'call' or 'apply' methods
		if (!sl.util.isDom(this)) return sl.util.noop;
		return function () {
			this.parentNode.removeChild(this)
		}.bind(this)
	}

	return function (config) {
		let close = sl.util.createElement({
			dom: 'div',
			parent: config.frame,
			html: '<svg width="20px" height="20px" version="1.1" xmlns="http://www.w3.org/2000/svg">'+
				'<circle cx="50%" cy="50%" r="48%" stroke="black" stroke-width="1" fill="white" />'+
				'<line x1="25%" y1="25%" x2="75%" y2="75%" stroke="black" stroke-width="1" />'+
				'<line x1="25%" y1="75%" x2="75%" y2="25%" stroke="black" stroke-width="1" />'+
				'</svg>',
			style: {
				cursor: 'pointer',
				position: 'relative',
				// border:'1px solid gray',
				right: '0',
				margin: '12px 0',
				padding: 0,
				display: 'inline-flex'
			},
			event: {
				click: removeElement.call(config.frame)
			}
		});
		return close
	}
}