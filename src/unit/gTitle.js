module.exports = function (sl) {
	'use strict';
	
	return function (config) {
		let title = sl.util.createElement({
			dom: 'h1',
			parent: config.frame,
			text: 'ggooltip message example',
			style: {
				fontSize: '1.5em',
				wordWrap: 'break-word',
				lineHeight: '12px'
			}
		});
		return title;
	}
}