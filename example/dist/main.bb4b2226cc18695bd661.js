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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Life; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debounce */ \"../node_modules/debounce/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! seedrandom */ \"../node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./life.scss */ \"../lib/life.scss\");\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_life_scss__WEBPACK_IMPORTED_MODULE_5__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nclass Life extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...params) {\n    super(...params);\n    this.display = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n    this.draw = this.draw.bind(this);\n    this.start = this.start.bind(this);\n    this.flushInputBuffer = debounce__WEBPACK_IMPORTED_MODULE_3___default()(this.flushInputBuffer.bind(this), 1000);\n    this.inputBuffer = [];\n    this.animationInterval = 1000 / this.props.framerate;\n    this.previousAnimationTimestamp = 0;\n    this.animationPhase = 0;\n  }\n\n  tick() {\n    const {\n      environment,\n      numRows,\n      numCols\n    } = this;\n    const mask = this.animationPhase === 0 ? 1 : 2;\n    const writeMask = this.animationPhase === 0 ? 2 : 1;\n\n    for (let i = 0; i < numRows; i++) {\n      for (let j = 0; j < numCols; j++) {\n        const northRow = (numRows + i - 1) % numRows;\n        const southRow = (numRows + i + 1) % numRows;\n        const westCol = (numCols + j - 1) % numCols;\n        const eastCol = (numCols + j + 1) % numCols;\n        const neighbors = 0 + +((environment[northRow][westCol] & mask) >> this.animationPhase) + ((environment[northRow][j] & mask) >> this.animationPhase) + ((environment[northRow][eastCol] & mask) >> this.animationPhase) + ((environment[i][westCol] & mask) >> this.animationPhase) + ((environment[i][eastCol] & mask) >> this.animationPhase) + ((environment[southRow][westCol] & mask) >> this.animationPhase) + ((environment[southRow][j] & mask) >> this.animationPhase) + ((environment[southRow][eastCol] & mask) >> this.animationPhase);\n        const cell = environment[i][j];\n\n        if ((cell & mask) >> this.animationPhase === 1) {\n          if (neighbors === 3 || neighbors === 2) {\n            environment[i][j] = writeMask | cell;\n          } else {\n            environment[i][j] = mask & cell;\n          }\n        } else if (neighbors === 3) {\n          environment[i][j] = writeMask | cell;\n        } else {\n          environment[i][j] = mask & cell;\n        }\n      }\n    }\n\n    this.animationPhase = this.animationPhase === 0 ? 1 : 0;\n  }\n\n  draw() {\n    const context = this.display.current.getContext('2d');\n    const {\n      scale\n    } = this.props;\n    const mask = this.animationPhase === 0 ? 1 : 2; // Draw environment\n\n    for (let i = 0; i < this.numRows; i++) {\n      for (let j = 0; j < this.numCols; j++) {\n        if ((this.environment[i][j] && mask) >> this.animationPhase === 1) {\n          context.fillStyle = 'white';\n          context.fillRect(j * scale, i * scale, scale, scale);\n        } else {\n          context.fillStyle = 'black';\n          context.fillRect(j * scale, i * scale, scale, scale);\n        }\n      }\n    } // Draw input buffer\n\n\n    context.fillStyle = 'red';\n\n    for (const [i, j] of this.inputBuffer) {\n      context.fillRect(j * scale, i * scale, scale, scale);\n    } // Draw cursor\n\n\n    if (this.showCursor) {\n      context.fillStyle = 'red';\n      context.fillRect(this.cursorCol * scale, this.cursorRow * scale, scale, scale);\n    }\n  }\n\n  start(timestamp) {\n    if (timestamp - this.previousAnimationTimestamp >= this.animationInterval) {\n      this.tick();\n      this.draw();\n      this.previousAnimationTimestamp = timestamp;\n    }\n\n    if (this.props.running) {\n      window.requestAnimationFrame(this.start);\n    }\n  }\n\n  flushInputBuffer() {\n    const writeMask = this.animationPhase === 0 ? 1 : 2;\n\n    for (const [i, j] of this.inputBuffer) {\n      this.environment[i][j] = writeMask | this.environment[i][j];\n    }\n\n    this.inputBuffer = [];\n  }\n\n  seed() {\n    const random = seedrandom__WEBPACK_IMPORTED_MODULE_4___default()(this.props.seed);\n    this.environment = this.environment.map(row => {\n      return [...row.map(() => {\n        return Math.round(random() * 2) === 0 ? 0 : 3;\n      })];\n    });\n  }\n\n  componentDidMount() {\n    const canvas = this.display.current;\n    canvas.height = canvas.clientHeight;\n    canvas.width = canvas.clientWidth;\n    this.numCols = Math.ceil(canvas.width / this.props.scale);\n    this.numRows = Math.ceil(canvas.height / this.props.scale);\n    this.environment = [...new Array(this.numRows)].map(() => [...new Array(this.numCols)]);\n    this.cursorRow = 0;\n    this.cursorCol = 0;\n    this.showCursor = false;\n    this.drawing = false;\n    this.seed();\n    this.tick();\n    canvas.addEventListener('mouseover', e => {\n      this.showCursor = true;\n      this.cursorRow = Math.floor(e.offsetY / this.props.scale);\n      this.cursorCol = Math.floor(e.offsetX / this.props.scale);\n    });\n    canvas.addEventListener('mousedown', () => {\n      this.drawing = true;\n      this.inputBuffer.push([this.cursorRow, this.cursorCol]);\n    });\n    canvas.addEventListener('mousemove', e => {\n      this.cursorRow = Math.floor(e.offsetY / this.props.scale);\n      this.cursorCol = Math.floor(e.offsetX / this.props.scale);\n\n      if (this.drawing) {\n        this.inputBuffer.push([this.cursorRow, this.cursorCol]);\n      }\n    });\n    canvas.addEventListener('mouseup', () => {\n      this.drawing = false;\n      this.flushInputBuffer();\n    });\n    canvas.addEventListener('mouseleave', () => {\n      this.drawing = false;\n      this.showCursor = false;\n      this.flushInputBuffer();\n    });\n    window.requestAnimationFrame(this.start);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n      ref: this.display,\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(this.props.className, _life_scss__WEBPACK_IMPORTED_MODULE_5___default.a.display)\n    });\n  }\n\n}\n\n_defineProperty(Life, \"propTypes\", {\n  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n  scale: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  running: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,\n  framerate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,\n  seed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n});\n\n_defineProperty(Life, \"defaultProps\", {\n  scale: 4,\n  running: true,\n  framerate: 60\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbGliL2xpZmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbGliL2xpZmUuanM/YjZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlJ1xuaW1wb3J0IHNlZWRyYW5kb20gZnJvbSAnc2VlZHJhbmRvbSdcbmltcG9ydCBjIGZyb20gJy4vbGlmZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWZlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2NhbGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcnVubmluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgZnJhbWVyYXRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHNlZWQ6IFByb3BUeXBlcy5zdHJpbmdcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc2NhbGU6IDQsXG4gICAgcnVubmluZzogdHJ1ZSxcbiAgICBmcmFtZXJhdGU6IDYwXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoLi4ucGFyYW1zKSB7XG4gICAgc3VwZXIoLi4ucGFyYW1zKVxuICAgIHRoaXMuZGlzcGxheSA9IFJlYWN0LmNyZWF0ZVJlZigpXG4gICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcylcbiAgICB0aGlzLnN0YXJ0ID0gdGhpcy5zdGFydC5iaW5kKHRoaXMpXG4gICAgdGhpcy5mbHVzaElucHV0QnVmZmVyID0gZGVib3VuY2UodGhpcy5mbHVzaElucHV0QnVmZmVyLmJpbmQodGhpcyksIDEwMDApXG5cbiAgICB0aGlzLmlucHV0QnVmZmVyID0gW11cblxuICAgIHRoaXMuYW5pbWF0aW9uSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5wcm9wcy5mcmFtZXJhdGVcbiAgICB0aGlzLnByZXZpb3VzQW5pbWF0aW9uVGltZXN0YW1wID0gMFxuXG4gICAgdGhpcy5hbmltYXRpb25QaGFzZSA9IDBcbiAgfVxuXG4gIHRpY2sgKCkge1xuICAgIGNvbnN0IHsgZW52aXJvbm1lbnQsIG51bVJvd3MsIG51bUNvbHMgfSA9IHRoaXNcblxuICAgIGNvbnN0IG1hc2sgPSB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAwID8gMSA6IDJcbiAgICBjb25zdCB3cml0ZU1hc2sgPSB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAwID8gMiA6IDFcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IG51bUNvbHM7IGorKykge1xuICAgICAgICBjb25zdCBub3J0aFJvdyA9IChudW1Sb3dzICsgaSAtIDEpICUgbnVtUm93c1xuICAgICAgICBjb25zdCBzb3V0aFJvdyA9IChudW1Sb3dzICsgaSArIDEpICUgbnVtUm93c1xuICAgICAgICBjb25zdCB3ZXN0Q29sID0gKG51bUNvbHMgKyBqIC0gMSkgJSBudW1Db2xzXG4gICAgICAgIGNvbnN0IGVhc3RDb2wgPSAobnVtQ29scyArIGogKyAxKSAlIG51bUNvbHNcblxuICAgICAgICBjb25zdCBuZWlnaGJvcnMgPSAwICtcbiAgICAgICAgICArKChlbnZpcm9ubWVudFtub3J0aFJvd11bd2VzdENvbF0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKSArXG4gICAgICAgICAgKChlbnZpcm9ubWVudFtub3J0aFJvd11bal0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKSArXG4gICAgICAgICAgKChlbnZpcm9ubWVudFtub3J0aFJvd11bZWFzdENvbF0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKSArXG4gICAgICAgICAgKChlbnZpcm9ubWVudFtpXVt3ZXN0Q29sXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpICtcbiAgICAgICAgICAoKGVudmlyb25tZW50W2ldW2Vhc3RDb2xdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSkgK1xuICAgICAgICAgICgoZW52aXJvbm1lbnRbc291dGhSb3ddW3dlc3RDb2xdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSkgK1xuICAgICAgICAgICgoZW52aXJvbm1lbnRbc291dGhSb3ddW2pdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSkgK1xuICAgICAgICAgICgoZW52aXJvbm1lbnRbc291dGhSb3ddW2Vhc3RDb2xdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSlcblxuICAgICAgICBjb25zdCBjZWxsID0gZW52aXJvbm1lbnRbaV1bal1cblxuICAgICAgICBpZiAoKGNlbGwgJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAxKSB7XG4gICAgICAgICAgaWYgKG5laWdoYm9ycyA9PT0gMyB8fCBuZWlnaGJvcnMgPT09IDIpIHtcbiAgICAgICAgICAgIGVudmlyb25tZW50W2ldW2pdID0gd3JpdGVNYXNrIHwgY2VsbFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbnZpcm9ubWVudFtpXVtqXSA9IG1hc2sgJiBjZWxsXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG5laWdoYm9ycyA9PT0gMykge1xuICAgICAgICAgIGVudmlyb25tZW50W2ldW2pdID0gd3JpdGVNYXNrIHwgY2VsbFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVudmlyb25tZW50W2ldW2pdID0gbWFzayAmIGNlbGxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW9uUGhhc2UgPSB0aGlzLmFuaW1hdGlvblBoYXNlID09PSAwID8gMSA6IDBcbiAgfVxuXG4gIGRyYXcgKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmRpc3BsYXkuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgbWFzayA9IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDAgPyAxIDogMlxuXG4gICAgLy8gRHJhdyBlbnZpcm9ubWVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Sb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5udW1Db2xzOyBqKyspIHtcbiAgICAgICAgaWYgKCh0aGlzLmVudmlyb25tZW50W2ldW2pdICYmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDEpIHtcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGogKiBzY2FsZSwgaSAqIHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgICAgICAgY29udGV4dC5maWxsUmVjdChqICogc2NhbGUsIGkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRHJhdyBpbnB1dCBidWZmZXJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgZm9yIChjb25zdCBbaSwgal0gb2YgdGhpcy5pbnB1dEJ1ZmZlcikge1xuICAgICAgY29udGV4dC5maWxsUmVjdChqICogc2NhbGUsIGkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKVxuICAgIH1cblxuICAgIC8vIERyYXcgY3Vyc29yXG4gICAgaWYgKHRoaXMuc2hvd0N1cnNvcikge1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmVkJ1xuICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLmN1cnNvckNvbCAqIHNjYWxlLCB0aGlzLmN1cnNvclJvdyAqIHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgfVxuICB9XG5cbiAgc3RhcnQgKHRpbWVzdGFtcCkge1xuICAgIGlmICh0aW1lc3RhbXAgLSB0aGlzLnByZXZpb3VzQW5pbWF0aW9uVGltZXN0YW1wID49IHRoaXMuYW5pbWF0aW9uSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMudGljaygpXG4gICAgICB0aGlzLmRyYXcoKVxuXG4gICAgICB0aGlzLnByZXZpb3VzQW5pbWF0aW9uVGltZXN0YW1wID0gdGltZXN0YW1wXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMucnVubmluZykge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0YXJ0KVxuICAgIH1cbiAgfVxuXG4gIGZsdXNoSW5wdXRCdWZmZXIgKCkge1xuICAgIGNvbnN0IHdyaXRlTWFzayA9IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDAgPyAxIDogMlxuXG4gICAgZm9yIChjb25zdCBbaSwgal0gb2YgdGhpcy5pbnB1dEJ1ZmZlcikge1xuICAgICAgdGhpcy5lbnZpcm9ubWVudFtpXVtqXSA9IHdyaXRlTWFzayB8IHRoaXMuZW52aXJvbm1lbnRbaV1bal1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0QnVmZmVyID0gW11cbiAgfVxuXG4gIHNlZWQgKCkge1xuICAgIGNvbnN0IHJhbmRvbSA9IHNlZWRyYW5kb20odGhpcy5wcm9wcy5zZWVkKVxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSB0aGlzLmVudmlyb25tZW50Lm1hcChyb3cgPT4ge1xuICAgICAgcmV0dXJuIFsuLi5yb3cubWFwKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQocmFuZG9tKCkgKiAyKSA9PT0gMCA/IDAgOiAzXG4gICAgICB9KV1cbiAgICB9KVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZGlzcGxheS5jdXJyZW50XG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5jbGllbnRIZWlnaHRcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMuY2xpZW50V2lkdGhcblxuICAgIHRoaXMubnVtQ29scyA9IE1hdGguY2VpbChjYW52YXMud2lkdGggLyB0aGlzLnByb3BzLnNjYWxlKVxuICAgIHRoaXMubnVtUm93cyA9IE1hdGguY2VpbChjYW52YXMuaGVpZ2h0IC8gdGhpcy5wcm9wcy5zY2FsZSlcblxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSAoWy4uLm5ldyBBcnJheSh0aGlzLm51bVJvd3MpXSkubWFwKCgpID0+IFsuLi5uZXcgQXJyYXkodGhpcy5udW1Db2xzKV0pXG5cbiAgICB0aGlzLmN1cnNvclJvdyA9IDBcbiAgICB0aGlzLmN1cnNvckNvbCA9IDBcblxuICAgIHRoaXMuc2hvd0N1cnNvciA9IGZhbHNlXG4gICAgdGhpcy5kcmF3aW5nID0gZmFsc2VcblxuICAgIHRoaXMuc2VlZCgpXG4gICAgdGhpcy50aWNrKClcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcbiAgICAgIHRoaXMuc2hvd0N1cnNvciA9IHRydWVcbiAgICAgIHRoaXMuY3Vyc29yUm93ID0gTWF0aC5mbG9vcihlLm9mZnNldFkgLyB0aGlzLnByb3BzLnNjYWxlKVxuICAgICAgdGhpcy5jdXJzb3JDb2wgPSBNYXRoLmZsb29yKGUub2Zmc2V0WCAvIHRoaXMucHJvcHMuc2NhbGUpXG4gICAgfSlcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdpbmcgPSB0cnVlXG4gICAgICB0aGlzLmlucHV0QnVmZmVyLnB1c2goW3RoaXMuY3Vyc29yUm93LCB0aGlzLmN1cnNvckNvbF0pXG4gICAgfSlcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICAgIHRoaXMuY3Vyc29yUm93ID0gTWF0aC5mbG9vcihlLm9mZnNldFkgLyB0aGlzLnByb3BzLnNjYWxlKVxuICAgICAgdGhpcy5jdXJzb3JDb2wgPSBNYXRoLmZsb29yKGUub2Zmc2V0WCAvIHRoaXMucHJvcHMuc2NhbGUpXG5cbiAgICAgIGlmICh0aGlzLmRyYXdpbmcpIHtcbiAgICAgICAgdGhpcy5pbnB1dEJ1ZmZlci5wdXNoKFt0aGlzLmN1cnNvclJvdywgdGhpcy5jdXJzb3JDb2xdKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlXG4gICAgICB0aGlzLmZsdXNoSW5wdXRCdWZmZXIoKVxuICAgIH0pXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlXG4gICAgICB0aGlzLnNob3dDdXJzb3IgPSBmYWxzZVxuICAgICAgdGhpcy5mbHVzaElucHV0QnVmZmVyKClcbiAgICB9KVxuXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnN0YXJ0KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gPGNhbnZhc1xuICAgICAgcmVmPXt0aGlzLmRpc3BsYXl9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIGMuZGlzcGxheSl9XG4gICAgLz5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQW5NQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUZBO0FBVUE7QUFDQTtBQUNBO0FBSEEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../lib/life.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ \"../node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.scss */ \"./app/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_life__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/life */ \"../lib/life.js\");\n\n\n\n\n\n\n\n\nfunction Content(props) {\n  var _qs$parse = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(props.history.location.search),\n      seed = _qs$parse.seed;\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_life__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    className: _main_scss__WEBPACK_IMPORTED_MODULE_5___default.a.life,\n    seed: seed\n  });\n}\n\nContent.propTypes = {\n  history: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({\n    location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({\n      search: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string\n    }).isRequired\n  }).isRequired\n};\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n  component: Content\n})), document.getElementById('react-root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9tYWluLmpzP2YxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBxcyBmcm9tICdxdWVyeS1zdHJpbmcnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgYyBmcm9tICcuL21haW4uc2NzcydcbmltcG9ydCBMaWZlIGZyb20gJy4uLy4uL2xpYi9saWZlJ1xuXG5mdW5jdGlvbiBDb250ZW50IChwcm9wcykge1xuICBjb25zdCB7IHNlZWQgfSA9IHFzLnBhcnNlKHByb3BzLmhpc3RvcnkubG9jYXRpb24uc2VhcmNoKVxuICByZXR1cm4gPExpZmUgY2xhc3NOYW1lPXtjLmxpZmV9IHNlZWQ9e3NlZWR9IC8+XG59XG5cbkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBoaXN0b3J5OiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGxvY2F0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgc2VhcmNoOiBQcm9wVHlwZXMuc3RyaW5nXG4gICAgfSkuaXNSZXF1aXJlZFxuICB9KS5pc1JlcXVpcmVkXG59XG5cbnJlbmRlcihcbiAgPFJvdXRlcj5cbiAgICA8Um91dGUgY29tcG9uZW50PXtDb250ZW50fSAvPlxuICA8L1JvdXRlcj4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdC1yb290JylcbilcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBRUE7QUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/main.js\n");

/***/ }),

/***/ "./app/main.scss":
/*!***********************!*\
  !*** ./app/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"life\":\"app-main-life-3io2L\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uc2Nzcz8wMWY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaWZlXCI6XCJhcHAtbWFpbi1saWZlLTNpbzJMXCJ9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/main.scss\n");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpPzY4YmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })

/******/ });