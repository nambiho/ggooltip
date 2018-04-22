module.exports = function (sl) {
	'use strict';

	
	return function (config) {
		let msg = sl.util.createElement({
			dom: 'div',
			text: ((sl.util.isString(config.message) && config.message) || (sl.util.isJSON(config.message) && config.message.text)) || "",
			parent: config.frame,
			style: {
				lineHeight: 'normal'
			}
		});
		return msg
	}
}