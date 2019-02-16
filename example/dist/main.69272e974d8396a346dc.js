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
/******/ 	deferredModules.push(["./app/main.tsx","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../lib/life.scss":
/*!************************!*\
  !*** ../lib/life.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"display\":\"_-lib-life-display-2Vjbu\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbGliL2xpZmUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9saWIvbGlmZS5zY3NzPzQzMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImRpc3BsYXlcIjpcIl8tbGliLWxpZmUtZGlzcGxheS0yVmpidVwifTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../lib/life.scss\n");

/***/ }),

/***/ "../lib/life.tsx":
/*!***********************!*\
  !*** ../lib/life.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Life; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debounce */ \"../node_modules/debounce/index.js\");\n/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! seedrandom */ \"../node_modules/seedrandom/index.js\");\n/* harmony import */ var seedrandom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(seedrandom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./life.scss */ \"../lib/life.scss\");\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_life_scss__WEBPACK_IMPORTED_MODULE_4__);\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Life extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"display\", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());\n\n    _defineProperty(this, \"inputBuffer\", []);\n\n    _defineProperty(this, \"animationInterval\", void 0);\n\n    _defineProperty(this, \"previousAnimationTimestamp\", 0);\n\n    _defineProperty(this, \"animationPhase\", 0);\n\n    _defineProperty(this, \"environment\", void 0);\n\n    _defineProperty(this, \"numRows\", void 0);\n\n    _defineProperty(this, \"numCols\", void 0);\n\n    _defineProperty(this, \"showCursor\", false);\n\n    _defineProperty(this, \"cursorCol\", void 0);\n\n    _defineProperty(this, \"cursorRow\", void 0);\n\n    _defineProperty(this, \"drawing\", false);\n\n    this.draw = this.draw.bind(this);\n    this.start = this.start.bind(this);\n    this.flushInputBuffer = debounce__WEBPACK_IMPORTED_MODULE_2___default()(this.flushInputBuffer.bind(this), 1000);\n    this.animationInterval = 1000 / this.props.framerate;\n  }\n\n  tick() {\n    const {\n      environment,\n      numRows,\n      numCols\n    } = this;\n    const mask = this.animationPhase === 0 ? 1 : 2;\n    const writeMask = this.animationPhase === 0 ? 2 : 1;\n\n    for (let i = 0; i < numRows; i++) {\n      for (let j = 0; j < numCols; j++) {\n        const northRow = (numRows + i - 1) % numRows;\n        const southRow = (numRows + i + 1) % numRows;\n        const westCol = (numCols + j - 1) % numCols;\n        const eastCol = (numCols + j + 1) % numCols;\n        const neighbors = 0 + +((environment[northRow][westCol] & mask) >> this.animationPhase) + ((environment[northRow][j] & mask) >> this.animationPhase) + ((environment[northRow][eastCol] & mask) >> this.animationPhase) + ((environment[i][westCol] & mask) >> this.animationPhase) + ((environment[i][eastCol] & mask) >> this.animationPhase) + ((environment[southRow][westCol] & mask) >> this.animationPhase) + ((environment[southRow][j] & mask) >> this.animationPhase) + ((environment[southRow][eastCol] & mask) >> this.animationPhase);\n        const cell = environment[i][j];\n\n        if ((cell & mask) >> this.animationPhase === 1) {\n          if (neighbors === 3 || neighbors === 2) {\n            environment[i][j] = writeMask | cell;\n          } else {\n            environment[i][j] = mask & cell;\n          }\n        } else if (neighbors === 3) {\n          environment[i][j] = writeMask | cell;\n        } else {\n          environment[i][j] = mask & cell;\n        }\n      }\n    }\n\n    this.animationPhase = this.animationPhase === 0 ? 1 : 0;\n  }\n\n  draw() {\n    const context = this.display.current.getContext('2d');\n    const {\n      scale\n    } = this.props;\n    const mask = this.animationPhase === 0 ? 1 : 2; // Draw environment\n\n    for (let i = 0; i < this.numRows; i++) {\n      for (let j = 0; j < this.numCols; j++) {\n        if ((this.environment[i][j] && mask) >> this.animationPhase === 1) {\n          context.fillStyle = 'white';\n          context.fillRect(j * scale, i * scale, scale, scale);\n        } else {\n          context.fillStyle = 'black';\n          context.fillRect(j * scale, i * scale, scale, scale);\n        }\n      }\n    } // Draw input buffer\n\n\n    context.fillStyle = 'red';\n\n    for (const [i, j] of this.inputBuffer) {\n      context.fillRect(j * scale, i * scale, scale, scale);\n    } // Draw cursor\n\n\n    if (this.showCursor) {\n      context.fillStyle = 'red';\n      context.fillRect(this.cursorCol * scale, this.cursorRow * scale, scale, scale);\n    }\n  }\n\n  start(timestamp) {\n    if (timestamp - this.previousAnimationTimestamp >= this.animationInterval) {\n      this.tick();\n      this.draw();\n      this.previousAnimationTimestamp = timestamp;\n    }\n\n    if (this.props.running) {\n      window.requestAnimationFrame(this.start);\n    }\n  }\n\n  flushInputBuffer() {\n    const writeMask = this.animationPhase === 0 ? 1 : 2;\n\n    for (const [i, j] of this.inputBuffer) {\n      this.environment[i][j] = writeMask | this.environment[i][j];\n    }\n\n    this.inputBuffer = [];\n  }\n\n  seed() {\n    const random = seedrandom__WEBPACK_IMPORTED_MODULE_3___default()(this.props.seed);\n    this.environment = this.environment.map(row => {\n      return [...row.map(() => {\n        return Math.round(random() * 2) === 0 ? 0 : 3;\n      })];\n    });\n  }\n\n  componentDidMount() {\n    const canvas = this.display.current;\n    canvas.height = canvas.clientHeight;\n    canvas.width = canvas.clientWidth;\n    this.numCols = Math.ceil(canvas.width / this.props.scale);\n    this.numRows = Math.ceil(canvas.height / this.props.scale);\n    this.environment = [...new Array(this.numRows)].map(() => [...new Array(this.numCols)]);\n    this.cursorRow = 0;\n    this.cursorCol = 0;\n    this.showCursor = false;\n    this.drawing = false;\n    this.seed();\n    this.tick();\n    canvas.addEventListener('mouseover', e => {\n      this.showCursor = true;\n      this.cursorRow = Math.floor(e.offsetY / this.props.scale);\n      this.cursorCol = Math.floor(e.offsetX / this.props.scale);\n    });\n    canvas.addEventListener('mousedown', () => {\n      this.drawing = true;\n      this.inputBuffer.push([this.cursorRow, this.cursorCol]);\n    });\n    canvas.addEventListener('mousemove', e => {\n      this.cursorRow = Math.floor(e.offsetY / this.props.scale);\n      this.cursorCol = Math.floor(e.offsetX / this.props.scale);\n\n      if (this.drawing) {\n        this.inputBuffer.push([this.cursorRow, this.cursorCol]);\n      }\n    });\n    canvas.addEventListener('mouseup', () => {\n      this.drawing = false;\n      this.flushInputBuffer();\n    });\n    canvas.addEventListener('mouseleave', () => {\n      this.drawing = false;\n      this.showCursor = false;\n      this.flushInputBuffer();\n    });\n    window.requestAnimationFrame(this.start);\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n      ref: this.display,\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, _life_scss__WEBPACK_IMPORTED_MODULE_4___default.a.display)\n    });\n  }\n\n}\n\n_defineProperty(Life, \"defaultProps\", {\n  scale: 4,\n  running: true,\n  framerate: 60\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbGliL2xpZmUudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2xpYi9saWZlLnRzeD84YmFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnZGVib3VuY2UnXG5pbXBvcnQgc2VlZHJhbmRvbSBmcm9tICdzZWVkcmFuZG9tJ1xuaW1wb3J0IGMgZnJvbSAnLi9saWZlLnNjc3MnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHNjYWxlOiBudW1iZXJcbiAgcnVubmluZzogYm9vbGVhblxuICBmcmFtZXJhdGU6IG51bWJlclxuICBzZWVkPzogc3RyaW5nLFxuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlmZSBleHRlbmRzIENvbXBvbmVudDxQcm9wcywge30+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wczogUGFydGlhbDxQcm9wcz4gPSB7XG4gICAgc2NhbGU6IDQsXG4gICAgcnVubmluZzogdHJ1ZSxcbiAgICBmcmFtZXJhdGU6IDYwXG4gIH1cblxuICBkaXNwbGF5ID0gUmVhY3QuY3JlYXRlUmVmPEhUTUxDYW52YXNFbGVtZW50PigpXG4gIGlucHV0QnVmZmVyOiBudW1iZXJbXSA9IFtdXG4gIGFuaW1hdGlvbkludGVydmFsOiBudW1iZXJcbiAgcHJldmlvdXNBbmltYXRpb25UaW1lc3RhbXAgPSAwXG4gIGFuaW1hdGlvblBoYXNlID0gMFxuICBlbnZpcm9ubWVudDogbnVtYmVyW11bXVxuICBudW1Sb3dzOiBudW1iZXJcbiAgbnVtQ29sczogbnVtYmVyXG4gIHNob3dDdXJzb3IgPSBmYWxzZVxuICBjdXJzb3JDb2w/OiBudW1iZXJcbiAgY3Vyc29yUm93PzogbnVtYmVyXG4gIGRyYXdpbmcgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuZHJhdyA9IHRoaXMuZHJhdy5iaW5kKHRoaXMpXG4gICAgdGhpcy5zdGFydCA9IHRoaXMuc3RhcnQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5mbHVzaElucHV0QnVmZmVyID0gZGVib3VuY2UodGhpcy5mbHVzaElucHV0QnVmZmVyLmJpbmQodGhpcyksIDEwMDApXG4gICAgdGhpcy5hbmltYXRpb25JbnRlcnZhbCA9IDEwMDAgLyB0aGlzLnByb3BzLmZyYW1lcmF0ZVxuICB9XG5cbiAgdGljaygpIHtcbiAgICBjb25zdCB7IGVudmlyb25tZW50LCBudW1Sb3dzLCBudW1Db2xzIH0gPSB0aGlzXG5cbiAgICBjb25zdCBtYXNrID0gdGhpcy5hbmltYXRpb25QaGFzZSA9PT0gMCA/IDEgOiAyXG4gICAgY29uc3Qgd3JpdGVNYXNrID0gdGhpcy5hbmltYXRpb25QaGFzZSA9PT0gMCA/IDIgOiAxXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBudW1Db2xzOyBqKyspIHtcbiAgICAgICAgY29uc3Qgbm9ydGhSb3cgPSAobnVtUm93cyArIGkgLSAxKSAlIG51bVJvd3NcbiAgICAgICAgY29uc3Qgc291dGhSb3cgPSAobnVtUm93cyArIGkgKyAxKSAlIG51bVJvd3NcbiAgICAgICAgY29uc3Qgd2VzdENvbCA9IChudW1Db2xzICsgaiAtIDEpICUgbnVtQ29sc1xuICAgICAgICBjb25zdCBlYXN0Q29sID0gKG51bUNvbHMgKyBqICsgMSkgJSBudW1Db2xzXG5cbiAgICAgICAgY29uc3QgbmVpZ2hib3JzID0gMCArXG4gICAgICAgICAgKygoZW52aXJvbm1lbnRbbm9ydGhSb3ddW3dlc3RDb2xdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSkgK1xuICAgICAgICAgICgoZW52aXJvbm1lbnRbbm9ydGhSb3ddW2pdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSkgK1xuICAgICAgICAgICgoZW52aXJvbm1lbnRbbm9ydGhSb3ddW2Vhc3RDb2xdICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSkgK1xuICAgICAgICAgICgoZW52aXJvbm1lbnRbaV1bd2VzdENvbF0gJiBtYXNrKSA+PiB0aGlzLmFuaW1hdGlvblBoYXNlKSArXG4gICAgICAgICAgKChlbnZpcm9ubWVudFtpXVtlYXN0Q29sXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpICtcbiAgICAgICAgICAoKGVudmlyb25tZW50W3NvdXRoUm93XVt3ZXN0Q29sXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpICtcbiAgICAgICAgICAoKGVudmlyb25tZW50W3NvdXRoUm93XVtqXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpICtcbiAgICAgICAgICAoKGVudmlyb25tZW50W3NvdXRoUm93XVtlYXN0Q29sXSAmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UpXG5cbiAgICAgICAgY29uc3QgY2VsbCA9IGVudmlyb25tZW50W2ldW2pdXG5cbiAgICAgICAgaWYgKChjZWxsICYgbWFzaykgPj4gdGhpcy5hbmltYXRpb25QaGFzZSA9PT0gMSkge1xuICAgICAgICAgIGlmIChuZWlnaGJvcnMgPT09IDMgfHwgbmVpZ2hib3JzID09PSAyKSB7XG4gICAgICAgICAgICBlbnZpcm9ubWVudFtpXVtqXSA9IHdyaXRlTWFzayB8IGNlbGxcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW52aXJvbm1lbnRbaV1bal0gPSBtYXNrICYgY2VsbFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcnMgPT09IDMpIHtcbiAgICAgICAgICBlbnZpcm9ubWVudFtpXVtqXSA9IHdyaXRlTWFzayB8IGNlbGxcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbnZpcm9ubWVudFtpXVtqXSA9IG1hc2sgJiBjZWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmFuaW1hdGlvblBoYXNlID0gdGhpcy5hbmltYXRpb25QaGFzZSA9PT0gMCA/IDEgOiAwXG4gIH1cblxuICBkcmF3KCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmRpc3BsYXkuY3VycmVudC5nZXRDb250ZXh0KCcyZCcpXG4gICAgY29uc3QgeyBzY2FsZSB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgbWFzayA9IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDAgPyAxIDogMlxuXG4gICAgLy8gRHJhdyBlbnZpcm9ubWVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1Sb3dzOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5udW1Db2xzOyBqKyspIHtcbiAgICAgICAgaWYgKCh0aGlzLmVudmlyb25tZW50W2ldW2pdICYmIG1hc2spID4+IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDEpIHtcbiAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KGogKiBzY2FsZSwgaSAqIHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snXG4gICAgICAgICAgY29udGV4dC5maWxsUmVjdChqICogc2NhbGUsIGkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRHJhdyBpbnB1dCBidWZmZXJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgZm9yIChjb25zdCBbaSwgal0gb2YgdGhpcy5pbnB1dEJ1ZmZlcikge1xuICAgICAgY29udGV4dC5maWxsUmVjdChqICogc2NhbGUsIGkgKiBzY2FsZSwgc2NhbGUsIHNjYWxlKVxuICAgIH1cblxuICAgIC8vIERyYXcgY3Vyc29yXG4gICAgaWYgKHRoaXMuc2hvd0N1cnNvcikge1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmVkJ1xuICAgICAgY29udGV4dC5maWxsUmVjdCh0aGlzLmN1cnNvckNvbCAqIHNjYWxlLCB0aGlzLmN1cnNvclJvdyAqIHNjYWxlLCBzY2FsZSwgc2NhbGUpXG4gICAgfVxuICB9XG5cbiAgc3RhcnQodGltZXN0YW1wOiBudW1iZXIpIHtcbiAgICBpZiAodGltZXN0YW1wIC0gdGhpcy5wcmV2aW91c0FuaW1hdGlvblRpbWVzdGFtcCA+PSB0aGlzLmFuaW1hdGlvbkludGVydmFsKSB7XG4gICAgICB0aGlzLnRpY2soKVxuICAgICAgdGhpcy5kcmF3KClcblxuICAgICAgdGhpcy5wcmV2aW91c0FuaW1hdGlvblRpbWVzdGFtcCA9IHRpbWVzdGFtcFxuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnJ1bm5pbmcpIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGFydClcbiAgICB9XG4gIH1cblxuICBmbHVzaElucHV0QnVmZmVyKCkge1xuICAgIGNvbnN0IHdyaXRlTWFzayA9IHRoaXMuYW5pbWF0aW9uUGhhc2UgPT09IDAgPyAxIDogMlxuXG4gICAgZm9yIChjb25zdCBbaSwgal0gb2YgdGhpcy5pbnB1dEJ1ZmZlcikge1xuICAgICAgdGhpcy5lbnZpcm9ubWVudFtpXVtqXSA9IHdyaXRlTWFzayB8IHRoaXMuZW52aXJvbm1lbnRbaV1bal1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0QnVmZmVyID0gW11cbiAgfVxuXG4gIHNlZWQoKSB7XG4gICAgY29uc3QgcmFuZG9tID0gc2VlZHJhbmRvbSh0aGlzLnByb3BzLnNlZWQpXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IHRoaXMuZW52aXJvbm1lbnQubWFwKHJvdyA9PiB7XG4gICAgICByZXR1cm4gWy4uLnJvdy5tYXAoKCkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChyYW5kb20oKSAqIDIpID09PSAwID8gMCA6IDNcbiAgICAgIH0pXVxuICAgIH0pXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmRpc3BsYXkuY3VycmVudFxuICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXMuY2xpZW50SGVpZ2h0XG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzLmNsaWVudFdpZHRoXG5cbiAgICB0aGlzLm51bUNvbHMgPSBNYXRoLmNlaWwoY2FudmFzLndpZHRoIC8gdGhpcy5wcm9wcy5zY2FsZSlcbiAgICB0aGlzLm51bVJvd3MgPSBNYXRoLmNlaWwoY2FudmFzLmhlaWdodCAvIHRoaXMucHJvcHMuc2NhbGUpXG5cbiAgICB0aGlzLmVudmlyb25tZW50ID0gKFsuLi5uZXcgQXJyYXkodGhpcy5udW1Sb3dzKV0pLm1hcCgoKSA9PiBbLi4ubmV3IEFycmF5KHRoaXMubnVtQ29scyldKVxuXG4gICAgdGhpcy5jdXJzb3JSb3cgPSAwXG4gICAgdGhpcy5jdXJzb3JDb2wgPSAwXG5cbiAgICB0aGlzLnNob3dDdXJzb3IgPSBmYWxzZVxuICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlXG5cbiAgICB0aGlzLnNlZWQoKVxuICAgIHRoaXMudGljaygpXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICB0aGlzLnNob3dDdXJzb3IgPSB0cnVlXG4gICAgICB0aGlzLmN1cnNvclJvdyA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gdGhpcy5wcm9wcy5zY2FsZSlcbiAgICAgIHRoaXMuY3Vyc29yQ29sID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyB0aGlzLnByb3BzLnNjYWxlKVxuICAgIH0pXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgICAgdGhpcy5kcmF3aW5nID0gdHJ1ZVxuICAgICAgdGhpcy5pbnB1dEJ1ZmZlci5wdXNoKFt0aGlzLmN1cnNvclJvdywgdGhpcy5jdXJzb3JDb2xdKVxuICAgIH0pXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICB0aGlzLmN1cnNvclJvdyA9IE1hdGguZmxvb3IoZS5vZmZzZXRZIC8gdGhpcy5wcm9wcy5zY2FsZSlcbiAgICAgIHRoaXMuY3Vyc29yQ29sID0gTWF0aC5mbG9vcihlLm9mZnNldFggLyB0aGlzLnByb3BzLnNjYWxlKVxuXG4gICAgICBpZiAodGhpcy5kcmF3aW5nKSB7XG4gICAgICAgIHRoaXMuaW5wdXRCdWZmZXIucHVzaChbdGhpcy5jdXJzb3JSb3csIHRoaXMuY3Vyc29yQ29sXSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5mbHVzaElucHV0QnVmZmVyKClcbiAgICB9KVxuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICB0aGlzLmRyYXdpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5zaG93Q3Vyc29yID0gZmFsc2VcbiAgICAgIHRoaXMuZmx1c2hJbnB1dEJ1ZmZlcigpXG4gICAgfSlcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5zdGFydClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGNhbnZhc1xuICAgICAgcmVmPXt0aGlzLmRpc3BsYXl9XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIGMuZGlzcGxheSl9XG4gICAgLz5cbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQW9CQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWxNQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../lib/life.tsx\n");

/***/ }),

/***/ "./app/main.scss":
/*!***********************!*\
  !*** ./app/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"life\":\"app-main-life-3io2L\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uc2Nzcz8wMWY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaWZlXCI6XCJhcHAtbWFpbi1saWZlLTNpbzJMXCJ9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/main.scss\n");

/***/ }),

/***/ "./app/main.tsx":
/*!**********************!*\
  !*** ./app/main.tsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"../node_modules/react-router-dom/es/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ \"../node_modules/query-string/index.js\");\n/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.scss */ \"./app/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_life__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/life */ \"../lib/life.tsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\n\n\nvar Content =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Content, _Component);\n\n  function Content() {\n    _classCallCheck(this, Content);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Content).apply(this, arguments));\n  }\n\n  _createClass(Content, [{\n    key: \"render\",\n    value: function render() {\n      var _qs$parse = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(this.props.history.location.search),\n          seed = _qs$parse.seed;\n\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_life__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        className: _main_scss__WEBPACK_IMPORTED_MODULE_4___default.a.life,\n        seed: seed\n      });\n    }\n  }]);\n\n  return Content;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"BrowserRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n  component: Content\n})), document.getElementById('react-root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi50c3g/Nzg3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHFzIGZyb20gJ3F1ZXJ5LXN0cmluZydcbmltcG9ydCBjIGZyb20gJy4vbWFpbi5zY3NzJ1xuaW1wb3J0IExpZmUgZnJvbSAnLi4vLi4vbGliL2xpZmUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGhpc3Rvcnk6IHtcbiAgICBsb2NhdGlvbjoge1xuICAgICAgc2VhcmNoOiBzdHJpbmdcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgQ29udGVudCBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzZWVkIH0gPSBxcy5wYXJzZSh0aGlzLnByb3BzLmhpc3RvcnkubG9jYXRpb24uc2VhcmNoKVxuICAgIHJldHVybiA8TGlmZSBjbGFzc05hbWU9e2MubGlmZX0gc2VlZD17c2VlZH0gLz5cbiAgfVxufVxuXG5yZW5kZXIoXG4gIDxSb3V0ZXI+XG4gICAgPFJvdXRlIGNvbXBvbmVudD17Q29udGVudH0gLz5cbiAgPC9Sb3V0ZXI+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3Qtcm9vdCcpXG4pXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/main.tsx\n");

/***/ }),

/***/ 0:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9jcnlwdG8gKGlnbm9yZWQpPzA5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiLyogKGlnbm9yZWQpICovIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })

/******/ });