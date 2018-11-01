/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../lib/life.js":
/*!**********************!*\
  !*** ../lib/life.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Life; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debounce */ \"../node_modules/debounce/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./life.scss */ \"../lib/life.scss\");\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_life_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst ALIVE = 1;\nclass Life extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...params) {\n    super(...params);\n    this.display = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    this.draw = this.draw.bind(this);\n    this.start = this.start.bind(this);\n    this.flushInputBuffer = debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.flushInputBuffer.bind(this), 1000);\n    this.inputBuffer = [];\n    this.animationInterval = 1000 / this.props.framerate;\n    this.previousAnimationTimestamp = 0;\n    this.animationPhase = 0;\n  }\n\n  tick() {\n    const {\n      environment,\n      numRows,\n      numCols\n    } = this;\n    const mask = this.animationPhase === 0 ? 1 : 2;\n    const writeMask = this.animationPhase === 0 ? 2 : 1;\n\n    for (let i = 0; i < numRows; i++) {\n      for (let j = 0; j < numCols; j++) {\n        const northRow = (numRows + i - 1) % numRows;\n        const southRow = (numRows + i + 1) % numRows;\n        const westCol = (numCols + j - 1) % numCols;\n        const eastCol = (numCols + j + 1) % numCols;\n        const neighbors = 0 + +((environment[northRow][westCol] & mask) >> this.animationPhase) + ((environment[northRow][j] & mask) >> this.animationPhase) + ((environment[northRow][eastCol] & mask) >> this.animationPhase) + ((environment[i][westCol] & mask) >> this.animationPhase) + ((environment[i][eastCol] & mask) >> this.animationPhase) + ((environment[southRow][westCol] & mask) >> this.animationPhase) + ((environment[southRow][j] & mask) >> this.animationPhase) + ((environment[southRow][eastCol] & mask) >> this.animationPhase);\n        const cell = environment[i][j];\n\n        if ((cell & mask) >> this.animationPhase === 1) {\n          if (neighbors === 3 || neighbors === 2) {\n            environment[i][j] = writeMask | cell;\n          } else {\n            environment[i][j] = mask & cell;\n          }\n        } else if (neighbors === 3) {\n          environment[i][j] = writeMask | cell;\n        } else {\n          environment[i][j] = mask & cell;\n        }\n      }\n    }\n\n    this.animationPhase = this.animationPhase === 0 ? 1 : 0;\n  }\n\n  draw() {\n    const context = this.display.current.getContext('2d');\n    const {\n      scale\n    } = this.props;\n    const mask = this.animationPhase === 0 ? 1 : 2; // Draw environment\n\n    for (let i = 0; i < this.numRows; i++) {\n      for (let j = 0; j < this.numCols; j++) {\n        if ((this.environment[i][j] && mask) >> this.animationPhase === 1) {\n          context.fillStyle = 'white';\n          context.fillRect(j * scale, i * scale, scale, scale);\n        } else {\n          context.fillStyle = 'black';\n          context.fillRect(j * scale, i * scale, scale, scale);\n        }\n      }\n    } // Draw input buffer\n\n\n    context.fillStyle = 'red';\n\n    for (const [i, j] of this.inputBuffer) {\n      context.fillRect(j * scale, i * scale, scale, scale);\n    } // Draw cursor\n\n\n    if (this.showCursor) {\n      context.fillStyle = 'red';\n      context.fillRect(this.cursorCol * scale, this.cursorRow * scale, scale, scale);\n    }\n  }\n\n  start(timestamp) {\n    if (timestamp - this.previousAnimationTimestamp >= this.animationInterval) {\n      this.tick();\n      this.draw();\n      this.previousAnimationTimestamp = timestamp;\n    }\n\n    if (this.props.running) {\n      window.requestAnimationFrame(this.start);\n    }\n  }\n\n  flushInputBuffer() {\n    const writeMask = this.animationPhase === 0 ? 1 : 2;\n\n    for (const [i, j] of this.inputBuffer) {\n      this.environment[i][j] = writeMask | this.environment[i][j];\n    }\n\n    this.inputBuffer = [];\n  }\n\n  componentDidMount() {\n    const canvas = this.display.current;\n    canvas.height = canvas.clientHeight;\n    canvas.width = canvas.clientWidth;\n    this.numCols = Math.ceil(canvas.width / this.props.scale);\n    this.numRows = Math.ceil(canvas.height / this.props.scale);\n    this.environment = [...new Array(this.numRows)].map(() => [...new Array(this.numCols)]);\n    this.cursorRow = 0;\n    this.cursorCol = 0;\n    this.showCursor = false;\n    this.drawing = false;\n    this.environment = this.environment.map(row => {\n      return [...row.map(() => {\n        return Math.round(Math.random() * 2) === 0 ? 0 : 3;\n      })];\n    });\n    this.tick();\n    canvas.addEventListener('mouseover', e => {\n      this.showCursor = true;\n      this.cursorRow = Math.floor(e.offsetY / this.props.scale);\n      this.cursorCol = Math.floor(e.offsetX / this.props.scale);\n    });\n    canvas.addEventListener('mousedown', () => {\n      this.drawing = true;\n      this.inputBuffer.push([this.cursorRow, this.cursorCol]);\n    });\n    canvas.addEventListener('mousemove', e => {\n      this.cursorRow = Math.floor(e.offsetY / this.props.scale);\n      this.cursorCol = Math.floor(e.offsetX / this.props.scale);\n\n      if (this.drawing) {\n        this.inputBuffer.push([this.cursorRow, this.cursorCol]);\n      }\n    });\n    canvas.addEventListener('mouseup', () => {\n      this.drawing = false;\n      this.flushInputBuffer();\n    });\n    canvas.addEventListener('mouseleave', () => {\n      this.drawing = false;\n      this.showCursor = false;\n      this.flushInputBuffer();\n    });\n    window.requestAnimationFrame(this.start);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n      ref: this.display,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.props.className, _life_scss__WEBPACK_IMPORTED_MODULE_4___default.a.display)\n    });\n  }\n\n}\n\n_defineProperty(Life, \"propTypes\", {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  running: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  framerate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number\n});\n\n_defineProperty(Life, \"defaultProps\", {\n  scale: 4,\n  running: true,\n  framerate: 60\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbGliL2xpZmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbGliL2xpZmUuanM/YjZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcblx0Q29tcG9uZW50XG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdkZWJvdW5jZSdcbmltcG9ydCBjIGZyb20gJy4vbGlmZS5zY3NzJ1xuXG5jb25zdCBBTElWRSA9IDFcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRpYyBwcm9wVHlwZXMgPSB7XG5cdFx0Y2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdHNjYWxlOiBQcm9wVHlwZXMubnVtYmVyLFxuXHRcdHJ1bm5pbmc6IFByb3BUeXBlcy5ib29sLFxuXHRcdGZyYW1lcmF0ZTogUHJvcFR5cGVzLm51bWJlclxuXHR9XG5cblx0c3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcblx0XHRzY2FsZTogNCxcblx0XHRydW5uaW5nOiB0cnVlLFxuXHRcdGZyYW1lcmF0ZTogNjBcblx0fVxuXG5cdGNvbnN0cnVjdG9yKC4uLnBhcmFtcykge1xuXHRcdHN1cGVyKC4uLnBhcmFtcylcblx0XHR0aGlzLmRpc3BsYXkgPSBSZWFjdC5jcmVhdGVSZWYoKVxuXHRcdHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpXG5cdFx0dGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxuXHRcdHRoaXMuZmx1c2hJbnB1dEJ1ZmZlciA9IGRlYm91bmNlKHRoaXMuZmx1c2hJbnB1dEJ1ZmZlci5iaW5kKHRoaXMpLCAxMDAwKVxuXG5cdFx0dGhpcy5pbnB1dEJ1ZmZlciA9IFtdXG5cblx0XHR0aGlzLmFuaW1hdGlvbkludGVydmFsID0gMTAwMCAvIHRoaXMucHJvcHMuZnJhbWVyYXRlXG5cdFx0dGhpcy5wcmV2aW91c0FuaW1hdGlvblRpbWVzdGFtcCA9IDBcblxuXHRcdHRoaXMuYW5pbWF0aW9uUGhhc2UgPSAwXG5cdH1cblxuXHR0aWNrKCkge1xuXHRcdGNvbnN0IHsgZW52aXJvbm1lbnQsIG51bVJvd3MsIG51bUNvbHMgfSA9IHRoaXNcblxuXHRcdGNvbnN0IG1hc2sgPSB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAwID8gMSA6IDJcblx0XHRjb25zdCB3cml0ZU1hc2sgPSB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAwID8gMiA6IDFcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG51bUNvbHM7IGorKykge1xuXHRcdFx0XHRjb25zdCBub3J0aFJvdyA9IChudW1Sb3dzICsgaSAtIDEpICUgbnVtUm93c1xuXHRcdFx0XHRjb25zdCBzb3V0aFJvdyA9IChudW1Sb3dzICsgaSArIDEpICUgbnVtUm93c1xuXHRcdFx0XHRjb25zdCB3ZXN0Q29sID0gKG51bUNvbHMgKyBqIC0gMSkgJSBudW1Db2xzXG5cdFx0XHRcdGNvbnN0IGVhc3RDb2wgPSAobnVtQ29scyArIGogKyAxKSAlIG51bUNvbHNcblxuXHRcdFx0XHRjb25zdCBuZWlnaGJvcnMgPSAwICsgXG5cdFx0XHRcdFx0KyAoKGVudmlyb25tZW50W25vcnRoUm93XVt3ZXN0Q29sXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpXG5cdFx0XHRcdFx0KyAoKGVudmlyb25tZW50W25vcnRoUm93XVtqXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpXG5cdFx0XHRcdFx0KyAoKGVudmlyb25tZW50W25vcnRoUm93XVtlYXN0Q29sXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpXG5cdFx0XHRcdFx0KyAoKGVudmlyb25tZW50W2ldW3dlc3RDb2xdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSlcblx0XHRcdFx0XHQrICgoZW52aXJvbm1lbnRbaV1bZWFzdENvbF0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKVxuXHRcdFx0XHRcdCsgKChlbnZpcm9ubWVudFtzb3V0aFJvd11bd2VzdENvbF0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKVxuXHRcdFx0XHRcdCsgKChlbnZpcm9ubWVudFtzb3V0aFJvd11bal0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKVxuXHRcdFx0XHRcdCsgKChlbnZpcm9ubWVudFtzb3V0aFJvd11bZWFzdENvbF0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKVxuXG5cdFx0XHRcdGNvbnN0IGNlbGwgPSBlbnZpcm9ubWVudFtpXVtqXVxuXG5cdFx0XHRcdGlmICgoY2VsbCAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDEpIHtcblx0XHRcdFx0XHRpZiAobmVpZ2hib3JzID09PSAzIHx8IG5laWdoYm9ycyA9PT0gMikge1xuXHRcdFx0XHRcdFx0ZW52aXJvbm1lbnRbaV1bal0gPSB3cml0ZU1hc2sgfCBjZWxsXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGVudmlyb25tZW50W2ldW2pdID0gbWFzayAmIGNlbGxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAobmVpZ2hib3JzID09PSAzKSB7XG5cdFx0XHRcdFx0ZW52aXJvbm1lbnRbaV1bal0gPSB3cml0ZU1hc2sgfCBjZWxsXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZW52aXJvbm1lbnRbaV1bal0gPSBtYXNrICYgY2VsbFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5hbmltYXRpb25QaGFzZSA9IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDAgPyAxIDogMFxuXHR9XG5cblx0ZHJhdygpIHtcblx0XHRjb25zdCBjb250ZXh0ID0gdGhpcy5kaXNwbGF5LmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuXHRcdGNvbnN0IHsgc2NhbGUgfSA9IHRoaXMucHJvcHNcblxuXHRcdGNvbnN0IG1hc2sgPSB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAwID8gMSA6IDJcblxuXHRcdC8vIERyYXcgZW52aXJvbm1lbnRcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUm93czsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMubnVtQ29sczsgaisrKSB7XG5cdFx0XHRcdGlmICgodGhpcy5lbnZpcm9ubWVudFtpXVtqXSAmJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAxKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnXG5cdFx0XHRcdFx0Y29udGV4dC5maWxsUmVjdChqICogc2NhbGUsIGkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRleHQuZmlsbFN0eWxlID0gJ2JsYWNrJ1xuXHRcdFx0XHRcdGNvbnRleHQuZmlsbFJlY3QoaiAqIHNjYWxlLCBpICogc2NhbGUsIHNjYWxlLCBzY2FsZSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIERyYXcgaW5wdXQgYnVmZmVyXG5cdFx0Y29udGV4dC5maWxsU3R5bGUgPSAncmVkJ1xuXHRcdGZvciAoY29uc3QgW2ksIGpdIG9mIHRoaXMuaW5wdXRCdWZmZXIpIHtcblx0XHRcdGNvbnRleHQuZmlsbFJlY3QoaiAqIHNjYWxlLCBpICogc2NhbGUsIHNjYWxlLHNjYWxlKVxuXHRcdH1cblxuXHRcdC8vIERyYXcgY3Vyc29yXG5cdFx0aWYgKHRoaXMuc2hvd0N1cnNvcikge1xuXHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSAncmVkJ1xuXHRcdFx0Y29udGV4dC5maWxsUmVjdCh0aGlzLmN1cnNvckNvbCAqIHNjYWxlLCB0aGlzLmN1cnNvclJvdyAqIHNjYWxlLCBzY2FsZSwgc2NhbGUpXG5cdFx0fVxuXHR9XG5cblx0c3RhcnQodGltZXN0YW1wKSB7XG5cdFx0aWYgKHRpbWVzdGFtcCAtIHRoaXMucHJldmlvdXNBbmltYXRpb25UaW1lc3RhbXAgPj0gdGhpcy5hbmltYXRpb25JbnRlcnZhbCkge1xuXHRcdFx0dGhpcy50aWNrKClcblx0XHRcdHRoaXMuZHJhdygpXG5cblx0XHRcdHRoaXMucHJldmlvdXNBbmltYXRpb25UaW1lc3RhbXAgPSB0aW1lc3RhbXBcblx0XHR9XG5cblx0XHRpZiAodGhpcy5wcm9wcy5ydW5uaW5nKSB7XG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuc3RhcnQpXG5cdFx0fVxuXHR9XG5cblx0Zmx1c2hJbnB1dEJ1ZmZlcigpIHtcblx0XHRjb25zdCB3cml0ZU1hc2sgPSB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAwID8gMSA6IDJcblxuXHRcdGZvciAoY29uc3QgW2ksIGpdIG9mIHRoaXMuaW5wdXRCdWZmZXIpIHtcblx0XHRcdHRoaXMuZW52aXJvbm1lbnRbaV1bal0gPSB3cml0ZU1hc2sgfCB0aGlzLmVudmlyb25tZW50W2ldW2pdXG5cdFx0fVxuXG5cdFx0dGhpcy5pbnB1dEJ1ZmZlciA9IFtdXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCBjYW52YXMgPSB0aGlzLmRpc3BsYXkuY3VycmVudFxuXHRcdGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0XG5cdFx0Y2FudmFzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoXG5cblx0XHR0aGlzLm51bUNvbHMgPSBNYXRoLmNlaWwoY2FudmFzLndpZHRoIC8gdGhpcy5wcm9wcy5zY2FsZSlcblx0XHR0aGlzLm51bVJvd3MgPSBNYXRoLmNlaWwoY2FudmFzLmhlaWdodCAvIHRoaXMucHJvcHMuc2NhbGUpXG5cblx0XHR0aGlzLmVudmlyb25tZW50ID0gKFsuLi5uZXcgQXJyYXkodGhpcy5udW1Sb3dzKV0pLm1hcCgoKSA9PiBbLi4ubmV3IEFycmF5KHRoaXMubnVtQ29scyldKVxuXG5cdFx0dGhpcy5jdXJzb3JSb3cgPSAwXG5cdFx0dGhpcy5jdXJzb3JDb2wgPSAwXG5cblx0XHR0aGlzLnNob3dDdXJzb3IgPSBmYWxzZVxuXHRcdHRoaXMuZHJhd2luZyA9IGZhbHNlXG5cblx0XHR0aGlzLmVudmlyb25tZW50ID0gdGhpcy5lbnZpcm9ubWVudC5tYXAocm93ID0+IHtcblx0XHRcdHJldHVybiBbLi4ucm93Lm1hcCgoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/IDAgOiAzXG5cdFx0XHR9KV1cblx0XHR9KVxuXHRcdHRoaXMudGljaygpXG5cblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG5cdFx0XHR0aGlzLnNob3dDdXJzb3IgPSB0cnVlXG5cdFx0XHR0aGlzLmN1cnNvclJvdyA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gdGhpcy5wcm9wcy5zY2FsZSlcblx0XHRcdHRoaXMuY3Vyc29yQ29sID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyB0aGlzLnByb3BzLnNjYWxlKVxuXHRcdH0pXG5cblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuXHRcdFx0dGhpcy5kcmF3aW5nID0gdHJ1ZVxuXHRcdFx0dGhpcy5pbnB1dEJ1ZmZlci5wdXNoKFt0aGlzLmN1cnNvclJvdywgdGhpcy5jdXJzb3JDb2xdKVxuXHRcdH0pXG5cblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG5cdFx0XHR0aGlzLmN1cnNvclJvdyA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gdGhpcy5wcm9wcy5zY2FsZSlcblx0XHRcdHRoaXMuY3Vyc29yQ29sID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyB0aGlzLnByb3BzLnNjYWxlKVxuXG5cdFx0XHRpZiAodGhpcy5kcmF3aW5nKSB7XG5cdFx0XHRcdHRoaXMuaW5wdXRCdWZmZXIucHVzaChbdGhpcy5jdXJzb3JSb3csIHRoaXMuY3Vyc29yQ29sXSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmRyYXdpbmcgPSBmYWxzZVxuXHRcdFx0dGhpcy5mbHVzaElucHV0QnVmZmVyKClcblx0XHR9KVxuXG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG5cdFx0XHR0aGlzLmRyYXdpbmcgPSBmYWxzZVxuXHRcdFx0dGhpcy5zaG93Q3Vyc29yID0gZmFsc2Vcblx0XHRcdHRoaXMuZmx1c2hJbnB1dEJ1ZmZlcigpXG5cdFx0fSlcblxuXHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGFydClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGNhbnZhc1xuXHRcdFx0cmVmPXt0aGlzLmRpc3BsYXl9XG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIGMuZGlzcGxheSl9XG5cdFx0Lz5cblx0fVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUE3TEE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBQ0E7QUFIQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../lib/life.js\n");

/***/ }),

/***/ "../lib/life.scss":
/*!************************!*\
  !*** ../lib/life.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"display\":\"_-lib-life-display-2Vjbu\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbGliL2xpZmUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9saWIvbGlmZS5zY3NzPzQzMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImRpc3BsYXlcIjpcIl8tbGliLWxpZmUtZGlzcGxheS0yVmpidVwifTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../lib/life.scss\n");

/***/ }),

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./app/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_life__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/life */ \"../lib/life.js\");\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_life__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  className: _main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.life\n}), document.getElementById('react-root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9tYWluLmpzP2YxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL21haW4uc2NzcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjIGZyb20gJy4vbWFpbi5zY3NzJ1xuaW1wb3J0IExpZmUgZnJvbSAnLi4vLi4vbGliL2xpZmUnXG5cbnJlbmRlcihcbiAgICA8TGlmZSBjbGFzc05hbWU9e2MubGlmZX0vPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpXG4pIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/main.js\n");

/***/ }),

/***/ "./app/main.scss":
/*!***********************!*\
  !*** ./app/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"life\":\"app-main-life-3io2L\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uc2Nzcz8wMWY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaWZlXCI6XCJhcHAtbWFpbi1saWZlLTNpbzJMXCJ9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/main.scss\n");

/***/ })

/******/ });