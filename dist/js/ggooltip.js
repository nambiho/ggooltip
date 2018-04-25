/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ggooltip.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sl) {\n\t'use strict';\n\n\treturn function (conf) {\n\t\treturn sl.util.merge({\n\t\t\tframe: {\n\t\t\t\tevent: {\n\t\t\t\t\tinit: sl.util.noop,\n\t\t\t\t\tload: sl.util.noop,\n\t\t\t\t\tunload: sl.util.noop\n\t\t\t\t}\n\t\t\t},\n\t\t\tclose: {},\n\t\t\ttitle: {\n\t\t\t\ttext: \"\",\n\t\t\t\tevent: {/*init*/}\n\t\t\t},\n\t\t\tbutton: false, //{init},\n\t\t\tmessage: null, /*{text:\"\",event:{init:sl.util.noop}}*/\n\t\t\ttype: \"message\",\n\t\t\tposition: \"center\",\n\t\t\twidth: \"350px\",\n\t\t\theight: \"150px\",\n\t\t\tduration: false,\n\t\t\tstage: document\n\t\t}, conf);\n\t};\n};\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/ggooltip.js":
/*!*************************!*\
  !*** ./src/ggooltip.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n(function (simplelib) {\n\t'use strict';\n\n\tif (!simplelib) {\n\t\treturn;\n\t\tconsole.warn('simplelib is not defined\\n' + 'The ggooltip have to use simplelib library.\\n' + 'https://github.com/nambiho/jsSimpleLib/blob/master/dist/simplelib.js'), {};\n\t}\n\n\tvar sl = new simplelib(),\n\t    _gFrame = __webpack_require__(/*! ./unit/gFrame */ \"./src/unit/gFrame.js\")(sl),\n\t    _gConfig = __webpack_require__(/*! ./config */ \"./src/config.js\")(sl),\n\t    _gTitle = __webpack_require__(/*! ./unit/gTitle */ \"./src/unit/gTitle.js\")(sl),\n\t    _gMsg = __webpack_require__(/*! ./unit/gMessage */ \"./src/unit/gMessage.js\")(sl),\n\t    _gClose = __webpack_require__(/*! ./unit/gClose */ \"./src/unit/gClose.js\")(sl);\n\n\tfunction ggooltip(conf) {\n\t\tvar config = _gConfig(conf);\n\t\tconfig.frame = _gFrame(config);\n\t\tconfig.title = _gTitle(config);\n\t\tconfig.msg = _gMsg(config);\n\t\tconfig.close = _gClose(config);\n\n\t\t(config.parent || document.body).append(config.frame);\n\n\t\treturn {\n\t\t\tconfig: config\n\t\t};\n\t}\n\n\t/**\n  * simplelib prototype with ggooltip\n  */\n\tsl.util.proto(simplelib, 'ggooltip', function (conf) {\n\t\treturn new ggooltip(conf);\n\t});\n})(window.simplelib);\n\n//# sourceURL=webpack:///./src/ggooltip.js?");

/***/ }),

/***/ "./src/unit/gClose.js":
/*!****************************!*\
  !*** ./src/unit/gClose.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sl) {\n\t'use strict';\n\n\tfunction removeElement() {\n\t\t// just use 'call' or 'apply' methods\n\t\tif (!sl.util.isDom(this)) return sl.util.noop;\n\t\treturn function () {\n\t\t\tthis.parentNode.removeChild(this);\n\t\t}.bind(this);\n\t}\n\n\treturn function (config) {\n\t\tvar close = sl.util.createElement({\n\t\t\tdom: 'div',\n\t\t\tparent: config.frame,\n\t\t\thtml: '<svg width=\"20px\" height=\"20px\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">' + '<circle cx=\"50%\" cy=\"50%\" r=\"48%\" stroke=\"black\" stroke-width=\"1\" fill=\"white\" />' + '<line x1=\"25%\" y1=\"25%\" x2=\"75%\" y2=\"75%\" stroke=\"black\" stroke-width=\"1\" />' + '<line x1=\"25%\" y1=\"75%\" x2=\"75%\" y2=\"25%\" stroke=\"black\" stroke-width=\"1\" />' + '</svg>',\n\t\t\tstyle: {\n\t\t\t\tcursor: 'pointer',\n\t\t\t\tposition: 'relative',\n\t\t\t\t// border:'1px solid gray',\n\t\t\t\tright: '0',\n\t\t\t\tmargin: '12px 0',\n\t\t\t\tpadding: 0,\n\t\t\t\tdisplay: 'inline-flex'\n\t\t\t},\n\t\t\tevent: {\n\t\t\t\tclick: removeElement.call(config.frame)\n\t\t\t}\n\t\t});\n\t\treturn close;\n\t};\n};\n\n//# sourceURL=webpack:///./src/unit/gClose.js?");

/***/ }),

/***/ "./src/unit/gFrame.js":
/*!****************************!*\
  !*** ./src/unit/gFrame.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sl) {\n\t'use strict';\n\n\tvar moveEvent,\n\t    upEvent,\n\t    tpOffset = { x: 0, y: 0 },\n\t    tpPosition = {\n\t\tgap: sl.util.copy({}, tpOffset),\n\t\tpos: sl.util.copy({}, tpOffset),\n\t\treal: sl.util.copy({}, tpOffset),\n\t\tleft: 0, top: 0, width: 0, height: 0\n\t},\n\t    margin = { top: 0, right: 0, bottom: 0, left: 0 },\n\t    elemPosition = sl.util.merge(tpPosition, {\n\t\tinit: function init(elem, evt) {\n\t\t\tvar rect = elem.getBoundingClientRect();\n\t\t\t// real\n\t\t\tthis.real.x = elem.offsetLeft - rect.x;\n\t\t\tthis.real.y = elem.offsetTop - rect.y;\n\t\t\t// gap\n\t\t\tthis.gap.x = evt.pageX - rect.x - this.real.x;\n\t\t\tthis.gap.y = evt.pageY - rect.y - this.real.y;\n\t\t\t// pos\n\t\t\tthis.pos.x = evt.pageX - rect.x;\n\t\t\tthis.pos.y = evt.pageY - rect.y;\n\t\t\t// left\n\t\t\tthis.left = rect.width - this.pos.x;\n\t\t\tthis.top = rect.height - this.pos.y;\n\t\t\t// size\n\t\t\tthis.width = Math.ceil(rect.width - this.real.x);\n\t\t\tthis.height = Math.ceil(rect.height - this.real.y);\n\n\t\t\tsetElemMargin(elem);\n\t\t},\n\t\tgetXY: function getXY(elem, evt) {\n\t\t\tvar x, y;\n\t\t\tif (evt.pageX - this.pos.x < 0) x = this.real.x;else x = evt.pageX - this.gap.x;\n\n\t\t\tif (evt.pageY - this.pos.y < 0) y = this.real.y;else y = evt.pageY - this.gap.y;\n\n\t\t\tvar winWidth = window.innerWidth,\n\t\t\t    winHeight = window.innerHeight,\n\t\t\t    right = winWidth - (window.event.pageX + this.left),\n\t\t\t    bottom = winHeight - (window.event.pageY + this.top);\n\n\t\t\tif (right <= 0) x = winWidth - this.width - 1;\n\t\t\tif (bottom <= 0) y = winHeight - this.height - 1;\n\n\t\t\treturn { x: x - margin.left, y: y - margin.top };\n\t\t}\n\t});\n\n\tfunction setElemMargin(elem) {\n\t\tvar style = sl.util.getComputedStyle(elem);\n\t\tvar marginData = style.margin.split(\" \");\n\t\tObject.keys(margin).forEach(function (val, idx) {\n\t\t\tvar dataIdx = marginData.length == 1 ? 0 : marginData.length == 2 ? idx % 2 : marginData.length == 3 ? idx == 3 ? 1 : idx : idx;\n\t\t\tvar data = /[\\d\\.]+/.exec(marginData[dataIdx]);\n\t\t\tmargin[val] = data && +/[\\d\\.]+/.exec(marginData[dataIdx])[0] || 0;\n\t\t});\n\t}\n\n\tfunction getMoveEvent(elem) {\n\t\treturn function (e) {\n\t\t\tvar xy = elemPosition.getXY(elem, e);\n\t\t\telem.style.left = xy.x + 'px';\n\t\t\telem.style.top = xy.y + 'px';\n\t\t};\n\t}\n\n\tfunction getUpEvent(elem) {\n\t\treturn function (e) {\n\t\t\treturn sl.util.trigger(elem, 'mouseup');\n\t\t};\n\t}\n\n\tfunction mouseDown(e) {\n\t\tif (e.button !== 0) return;\n\n\t\tvar rect = this.getBoundingClientRect();\n\t\telemPosition.init(this, e);\n\n\t\tmoveEvent = getMoveEvent(this);\n\t\tupEvent = getUpEvent(this);\n\n\t\tthis.classList.add('unselectable');\n\t\tsl.util.addEvent(window, {\n\t\t\t'mousemove': moveEvent,\n\t\t\t'mouseup': upEvent\n\t\t});\n\t}\n\n\tfunction mouseUp(e) {\n\t\tthis.classList.remove('unselectable');\n\t\tsl.util.removeEvent(window, {\n\t\t\t'mousemove': moveEvent,\n\t\t\t'mouseup': upEvent\n\t\t});\n\t}\n\n\treturn function (config) {\n\t\tvar _frame = sl.util.createElement({\n\t\t\tdom: 'div',\n\t\t\tattr: sl.util.merge({\n\t\t\t\tclass: 'frame',\n\t\t\t\tid: 'frame'\n\t\t\t}, config.frame && config.frame.attr || {}),\n\t\t\tstyle: sl.util.merge({\n\t\t\t\t'cursor': 'default',\n\t\t\t\t'background': 'white'\n\t\t\t}, config.frame && config.frame.style),\n\t\t\tevent: {\n\t\t\t\tmousedown: mouseDown,\n\t\t\t\tmouseup: mouseUp\n\t\t\t}\n\t\t});\n\n\t\treturn _frame;\n\t};\n};\n\n//# sourceURL=webpack:///./src/unit/gFrame.js?");

/***/ }),

/***/ "./src/unit/gMessage.js":
/*!******************************!*\
  !*** ./src/unit/gMessage.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sl) {\n\t'use strict';\n\n\treturn function (config) {\n\t\tvar msg = sl.util.createElement({\n\t\t\tdom: 'div',\n\t\t\ttext: sl.util.isString(config.message) && config.message || sl.util.isJSON(config.message) && config.message.text || \"\",\n\t\t\tparent: config.frame,\n\t\t\tstyle: {\n\t\t\t\tlineHeight: 'normal'\n\t\t\t}\n\t\t});\n\t\treturn msg;\n\t};\n};\n\n//# sourceURL=webpack:///./src/unit/gMessage.js?");

/***/ }),

/***/ "./src/unit/gTitle.js":
/*!****************************!*\
  !*** ./src/unit/gTitle.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (sl) {\n\t'use strict';\n\n\treturn function (config) {\n\t\tvar title = sl.util.createElement({\n\t\t\tdom: 'h1',\n\t\t\tparent: config.frame,\n\t\t\ttext: 'ggooltip message example',\n\t\t\tstyle: {\n\t\t\t\tfontSize: '1.5em',\n\t\t\t\twordWrap: 'break-word',\n\t\t\t\tlineHeight: '12px'\n\t\t\t}\n\t\t});\n\t\treturn title;\n\t};\n};\n\n//# sourceURL=webpack:///./src/unit/gTitle.js?");

/***/ })

/******/ });