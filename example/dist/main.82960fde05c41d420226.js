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
/******/ 	}
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
/******/ 	deferredModules.push(["./main.js","vendors~main"]);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Life; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./life.scss */ \"../lib/life.scss\");\n/* harmony import */ var _life_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_life_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CELL_WIDTH = 5;\nconst CELL_HEIGHT = CELL_WIDTH;\nconst DEAD = 0;\nconst ALIVE = 1;\nconst KEY_ENTER = 13;\nconst KEY_P = 80;\nclass Life extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(...params) {\n    super(...params);\n    this.display = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();\n  }\n\n  componentDidMount() {\n    const canvas = this.display.current;\n    const numCols = Math.ceil(canvas.width / CELL_WIDTH);\n    const numRows = Math.ceil(canvas.height / CELL_HEIGHT);\n    let environment = [...new Array(numRows)].map(() => [...new Array(numCols)]);\n    let nextEnvironment = [...new Array(numRows)].map(() => [...new Array(numCols)]);\n    let running = true;\n    let cursorRow = 0;\n    let cursorCol = 0;\n\n    if (!canvas.getContext) {\n      console.error(\"browser does not support canvas context\");\n    }\n\n    environment = environment.map(row => {\n      return [...row.map(() => {\n        return Math.round(Math.random() * 2) === 0 ? DEAD : ALIVE;\n      })];\n    });\n    let overlay = [...new Array(numRows)].map(() => [...new Array(numCols)]).map(row => {\n      return [...row.map(() => DEAD)];\n    });\n    let showCursor = false;\n    let drawing = false;\n    canvas.addEventListener('mouseover', e => {\n      showCursor = true;\n      cursorRow = Math.floor(e.clientY / CELL_HEIGHT);\n      cursorCol = Math.floor(e.clientX / CELL_WIDTH);\n    });\n    canvas.addEventListener('mousedown', e => {\n      drawing = true;\n      overlay[cursorRow][cursorCol] = ALIVE;\n    });\n    canvas.addEventListener('mouseup', e => {\n      drawing = false;\n    });\n    canvas.addEventListener('mousemove', e => {\n      cursorRow = Math.floor(e.clientY / CELL_HEIGHT);\n      cursorCol = Math.floor(e.clientX / CELL_WIDTH);\n\n      if (drawing) {\n        overlay[cursorRow][cursorCol] = ALIVE;\n      }\n    });\n\n    this.handleKeyDown = e => {\n      if (e.keyCode === KEY_ENTER) {\n        const numRows = overlay.length;\n        const numCols = overlay[0].length;\n\n        for (let i = 0; i < numRows; i++) {\n          for (let j = 0; j < numCols; j++) {\n            if (overlay[i][j] === ALIVE) {\n              overlay[i][j] = DEAD;\n              environment[i][j] = ALIVE;\n            }\n          }\n        }\n      } else if (e.keyCode === KEY_P) {\n        running = !running;\n\n        if (running) {\n          draw();\n        }\n      }\n    };\n\n    document.addEventListener('keydown', this.handleKeyDown);\n    canvas.addEventListener('mouseleave', e => {\n      showCursor = false;\n    });\n    const context = canvas.getContext('2d');\n    let northRow, southRow, westCol, eastCol, neighbors, temp;\n\n    function draw() {\n      for (let i = 0; i < numRows; i++) {\n        for (let j = 0; j < numCols; j++) {\n          northRow = (numRows + i - 1) % numRows;\n          southRow = (numRows + i + 1) % numRows;\n          westCol = (numCols + j - 1) % numCols;\n          eastCol = (numCols + j + 1) % numCols;\n          neighbors = environment[northRow][westCol] + environment[northRow][j] + environment[northRow][eastCol] + environment[i][westCol] + environment[i][eastCol] + environment[southRow][westCol] + environment[southRow][j] + environment[southRow][eastCol];\n\n          if (environment[i][j] === ALIVE) {\n            if (neighbors !== 3 && neighbors !== 2) {\n              nextEnvironment[i][j] = DEAD;\n            } else {\n              nextEnvironment[i][j] = environment[i][j];\n            }\n          } else if (neighbors === 3) {\n            nextEnvironment[i][j] = ALIVE;\n          } else {\n            nextEnvironment[i][j] = environment[i][j];\n          }\n        }\n      }\n\n      temp = environment;\n      environment = nextEnvironment;\n      nextEnvironment = temp; // Draw environment\n\n      for (let i = 0; i < numRows; i++) {\n        for (let j = 0; j < numCols; j++) {\n          if (environment[i][j] === ALIVE) {\n            context.fillStyle = 'white';\n            context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n          } else {\n            context.fillStyle = 'black';\n            context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n          } // Draw overlay\n\n\n          if (overlay[i][j] === ALIVE) {\n            context.fillStyle = 'red';\n            context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n          }\n        }\n      } // Draw cursor\n\n\n      if (showCursor) {\n        context.fillStyle = 'red';\n        context.fillRect(cursorCol * CELL_WIDTH, cursorRow * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n      }\n\n      if (running) {\n        window.requestAnimationFrame(draw);\n      }\n    }\n\n    window.requestAnimationFrame(draw);\n  }\n\n  componentWillUnmount() {\n    document.removeEventListener('keydown', this.handleKeyDown);\n    this.handleKeyDown = undefined;\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"canvas\", {\n      ref: this.display,\n      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(this.props.className, _life_scss__WEBPACK_IMPORTED_MODULE_2___default.a.display)\n    });\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbGliL2xpZmUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbGliL2xpZmUuanM/YjZmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IGMgZnJvbSAnLi9saWZlLnNjc3MnXG5cbmNvbnN0IENFTExfV0lEVEggPSA1XG5jb25zdCBDRUxMX0hFSUdIVCA9IENFTExfV0lEVEhcblxuY29uc3QgREVBRCA9IDBcbmNvbnN0IEFMSVZFID0gMVxuXG5jb25zdCBLRVlfRU5URVIgPSAxM1xuY29uc3QgS0VZX1AgPSA4MFxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaWZlIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoLi4ucGFyYW1zKSB7XG5cdFx0c3VwZXIoLi4ucGFyYW1zKVxuICAgIFx0dGhpcy5kaXNwbGF5ID0gUmVhY3QuY3JlYXRlUmVmKClcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IGNhbnZhcyA9IHRoaXMuZGlzcGxheS5jdXJyZW50XG5cblx0XHRjb25zdCBudW1Db2xzID0gTWF0aC5jZWlsKGNhbnZhcy53aWR0aCAvIENFTExfV0lEVEgpXG5cdFx0Y29uc3QgbnVtUm93cyA9IE1hdGguY2VpbChjYW52YXMuaGVpZ2h0IC8gQ0VMTF9IRUlHSFQpXG5cblx0XHRsZXQgZW52aXJvbm1lbnQgPSAoWy4uLm5ldyBBcnJheShudW1Sb3dzKV0pLm1hcCgoKSA9PiBbLi4ubmV3IEFycmF5KG51bUNvbHMpXSlcblx0XHRsZXQgbmV4dEVudmlyb25tZW50ID0gKFsuLi5uZXcgQXJyYXkobnVtUm93cyldKS5tYXAoKCkgPT4gWy4uLm5ldyBBcnJheShudW1Db2xzKV0pXG5cdFx0bGV0IHJ1bm5pbmcgPSB0cnVlXG5cblx0XHRsZXQgY3Vyc29yUm93ID0gMFxuXHRcdGxldCBjdXJzb3JDb2wgPSAwXG5cblx0XHRpZiAoIWNhbnZhcy5nZXRDb250ZXh0KSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGNhbnZhcyBjb250ZXh0XCIpXG5cdFx0fVxuXG5cdFx0ZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudC5tYXAocm93ID0+IHtcblx0XHRcdHJldHVybiBbLi4ucm93Lm1hcCgoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyKSA9PT0gMCA/IERFQUQgOiBBTElWRVxuXHRcdFx0fSldXG5cdFx0fSlcblxuXHRcdGxldCBvdmVybGF5ID0gKFsuLi5uZXcgQXJyYXkobnVtUm93cyldKVxuXHRcdFx0Lm1hcCgoKSA9PiBbLi4ubmV3IEFycmF5KG51bUNvbHMpXSlcblx0XHRcdC5tYXAocm93ID0+IHtcblx0XHRcdFx0cmV0dXJuIFsuLi5yb3cubWFwKCgpID0+IERFQUQpXVxuXHRcdFx0fSlcblxuXHRcdGxldCBzaG93Q3Vyc29yID0gZmFsc2Vcblx0XHRsZXQgZHJhd2luZyA9IGZhbHNlXG5cblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG5cdFx0XHRzaG93Q3Vyc29yID0gdHJ1ZVxuXHRcdFx0Y3Vyc29yUm93ID0gTWF0aC5mbG9vcihlLmNsaWVudFkgLyBDRUxMX0hFSUdIVClcblx0XHRcdGN1cnNvckNvbCA9IE1hdGguZmxvb3IoZS5jbGllbnRYIC8gQ0VMTF9XSURUSClcblx0XHR9KVxuXG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuXHRcdFx0ZHJhd2luZyA9IHRydWVcblx0XHRcdG92ZXJsYXlbY3Vyc29yUm93XVtjdXJzb3JDb2xdID0gQUxJVkVcblx0XHR9KVxuXG5cdFx0Y2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlID0+IHtcblx0XHRcdGRyYXdpbmcgPSBmYWxzZVxuXHRcdH0pXG5cblx0XHRjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG5cdFx0XHRjdXJzb3JSb3cgPSBNYXRoLmZsb29yKGUuY2xpZW50WSAvIENFTExfSEVJR0hUKVxuXHRcdFx0Y3Vyc29yQ29sID0gTWF0aC5mbG9vcihlLmNsaWVudFggLyBDRUxMX1dJRFRIKVxuXG5cdFx0XHRpZiAoZHJhd2luZykge1xuXHRcdFx0XHRvdmVybGF5W2N1cnNvclJvd11bY3Vyc29yQ29sXSA9IEFMSVZFXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdFx0dGhpcy5oYW5kbGVLZXlEb3duID0gKGUpID0+IHtcblx0XHRcdFx0aWYgKGUua2V5Q29kZSA9PT0gS0VZX0VOVEVSKSB7XG5cdFx0XHRcdFx0XHRjb25zdCBudW1Sb3dzID0gb3ZlcmxheS5sZW5ndGhcblx0XHRcdFx0XHRcdGNvbnN0IG51bUNvbHMgPSBvdmVybGF5WzBdLmxlbmd0aFxuXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgbnVtQ29sczsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvdmVybGF5W2ldW2pdID09PSBBTElWRSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmxheVtpXVtqXSA9IERFQURcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVudmlyb25tZW50W2ldW2pdID0gQUxJVkVcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWV9QKSB7XG5cdFx0XHRcdFx0XHRydW5uaW5nID0gIXJ1bm5pbmdcblxuXHRcdFx0XHRcdFx0aWYgKHJ1bm5pbmcpIHtcblx0XHRcdFx0XHRcdFx0XHRkcmF3KClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcblxuXHRcdGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XG5cdFx0XHRzaG93Q3Vyc29yID0gZmFsc2Vcblx0XHR9KVxuXG5cdFx0Y29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cblx0XHRsZXQgbm9ydGhSb3csIHNvdXRoUm93LCB3ZXN0Q29sLCBlYXN0Q29sLCBuZWlnaGJvcnMsIHRlbXBcblxuXHRcdGZ1bmN0aW9uIGRyYXcgKCkge1x0XHRcdFxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBudW1Db2xzOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0XHRub3J0aFJvdyA9IChudW1Sb3dzICsgaSAtIDEpICUgbnVtUm93c1xuXHRcdFx0XHRcdFx0XHRcdHNvdXRoUm93ID0gKG51bVJvd3MgKyBpICsgMSkgJSBudW1Sb3dzXG5cdFx0XHRcdFx0XHRcdFx0d2VzdENvbCA9IChudW1Db2xzICsgaiAtIDEpICUgbnVtQ29sc1xuXHRcdFx0XHRcdFx0XHRcdGVhc3RDb2wgPSAobnVtQ29scyArIGogKyAxKSAlIG51bUNvbHNcblxuXHRcdFx0XHRcdFx0XHRcdG5laWdoYm9ycyA9IGVudmlyb25tZW50W25vcnRoUm93XVt3ZXN0Q29sXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrIGVudmlyb25tZW50W25vcnRoUm93XVtqXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrIGVudmlyb25tZW50W25vcnRoUm93XVtlYXN0Q29sXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrIGVudmlyb25tZW50W2ldW3dlc3RDb2xdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsgZW52aXJvbm1lbnRbaV1bZWFzdENvbF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0KyBlbnZpcm9ubWVudFtzb3V0aFJvd11bd2VzdENvbF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0KyBlbnZpcm9ubWVudFtzb3V0aFJvd11bal1cblx0XHRcdFx0XHRcdFx0XHRcdFx0KyBlbnZpcm9ubWVudFtzb3V0aFJvd11bZWFzdENvbF1cblxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbnZpcm9ubWVudFtpXVtqXSA9PT0gQUxJVkUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG5laWdoYm9ycyAhPT0gMyAmJiBuZWlnaGJvcnMgIT09IDIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5leHRFbnZpcm9ubWVudFtpXVtqXSA9IERFQURcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5leHRFbnZpcm9ubWVudFtpXVtqXSA9IGVudmlyb25tZW50W2ldW2pdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKG5laWdoYm9ycyA9PT0gMykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRuZXh0RW52aXJvbm1lbnRbaV1bal0gPSBBTElWRVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5leHRFbnZpcm9ubWVudFtpXVtqXSA9IGVudmlyb25tZW50W2ldW2pdXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGVtcCA9IGVudmlyb25tZW50XG5cdFx0XHRcdGVudmlyb25tZW50ID0gbmV4dEVudmlyb25tZW50XG5cdFx0XHRcdG5leHRFbnZpcm9ubWVudCA9IHRlbXBcblxuXHRcdFx0XHQvLyBEcmF3IGVudmlyb25tZW50XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IG51bUNvbHM7IGorKykge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChlbnZpcm9ubWVudFtpXVtqXSA9PT0gQUxJVkUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSAnd2hpdGUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQuZmlsbFJlY3QoaiAqIENFTExfV0lEVEgsIGkgKiBDRUxMX0hFSUdIVCwgQ0VMTF9XSURUSCwgQ0VMTF9IRUlHSFQpXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSAnYmxhY2snXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnRleHQuZmlsbFJlY3QoaiAqIENFTExfV0lEVEgsIGkgKiBDRUxMX0hFSUdIVCwgQ0VMTF9XSURUSCwgQ0VMTF9IRUlHSFQpICAgICAgICBcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBEcmF3IG92ZXJsYXlcblx0XHRcdFx0XHRcdFx0XHRpZiAob3ZlcmxheVtpXVtqXSA9PT0gQUxJVkUpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y29udGV4dC5maWxsU3R5bGUgPSAncmVkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb250ZXh0LmZpbGxSZWN0KGogKiBDRUxMX1dJRFRILCBpICogQ0VMTF9IRUlHSFQsIENFTExfV0lEVEgsIENFTExfSEVJR0hUKVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERyYXcgY3Vyc29yXG5cdFx0XHRcdGlmIChzaG93Q3Vyc29yKSB7XG5cdFx0XHRcdFx0XHRjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnXG5cdFx0XHRcdFx0XHRjb250ZXh0LmZpbGxSZWN0KGN1cnNvckNvbCAqIENFTExfV0lEVEgsIGN1cnNvclJvdyAqIENFTExfSEVJR0hULCBDRUxMX1dJRFRILCBDRUxMX0hFSUdIVClcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChydW5uaW5nKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXG5cdFx0XHRcdH1cblx0XHR9XG5cdFx0XG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5RG93bilcblx0XHR0aGlzLmhhbmRsZUtleURvd24gPSB1bmRlZmluZWRcblx0fVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxjYW52YXNcblx0XHRcdFx0cmVmPXt0aGlzLmRpc3BsYXl9XG5cdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0aGlzLnByb3BzLmNsYXNzTmFtZSwgYy5kaXNwbGF5KX1cblx0XHRcdC8+XG5cdFx0KVxuXHR9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQS9LQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../lib/life.js\n");

/***/ }),

/***/ "../lib/life.scss":
/*!************************!*\
  !*** ../lib/life.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"display\":\"_-lib-life-display-2Vjbu\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbGliL2xpZmUuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9saWIvbGlmZS5zY3NzPzQzMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImRpc3BsYXlcIjpcIl8tbGliLWxpZmUtZGlzcGxheS0yVmpidVwifTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../lib/life.scss\n");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_life__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/life */ \"../lib/life.js\");\n\n\n\n\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_2__[\"render\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_life__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n  className: _main_scss__WEBPACK_IMPORTED_MODULE_0___default.a.life\n}), document.getElementById('react-root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbWFpbi5qcz8xZDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tYWluLnNjc3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgYyBmcm9tICcuL21haW4uc2NzcydcbmltcG9ydCBMaWZlIGZyb20gJy4uL2xpYi9saWZlJ1xuXG5yZW5kZXIoXG4gICAgPExpZmUgY2xhc3NOYW1lPXtjLmxpZmV9Lz4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0LXJvb3QnKVxuKSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./main.js\n");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\nmodule.exports = {\"life\":\"main-life-31f7w\"};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYWluLnNjc3M/ZDJlZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlmZVwiOlwibWFpbi1saWZlLTMxZjd3XCJ9OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./main.scss\n");

/***/ })

/******/ });