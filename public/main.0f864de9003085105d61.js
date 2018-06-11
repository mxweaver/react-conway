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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./main.scss */ \"./app/main.scss\");\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar CELL_WIDTH = 5;\nvar CELL_HEIGHT = CELL_WIDTH;\n\nvar DEAD = 0;\nvar ALIVE = 1;\n\nvar KEY_ENTER = 13;\nvar KEY_P = 80;\n\nwindow.onload = function () {\n    var canvas = document.getElementById('canvas');\n    canvas.width = document.body.clientWidth;\n    canvas.height = document.body.clientHeight;\n\n    var numCols = Math.ceil(canvas.width / CELL_WIDTH);\n    var numRows = Math.ceil(canvas.height / CELL_HEIGHT);\n\n    var environment = [].concat(_toConsumableArray(new Array(numRows))).map(function () {\n        return [].concat(_toConsumableArray(new Array(numCols)));\n    });\n    var nextEnvironment = [].concat(_toConsumableArray(new Array(numRows))).map(function () {\n        return [].concat(_toConsumableArray(new Array(numCols)));\n    });\n    var running = true;\n\n    var cursorRow = 0;\n    var cursorCol = 0;\n\n    if (!canvas.getContext) {\n        console.error(\"browser does not support canvas context\");\n    }\n\n    environment = environment.map(function (row) {\n        return [].concat(_toConsumableArray(row.map(function () {\n            return Math.round(Math.random() * 2) === 0 ? DEAD : ALIVE;\n        })));\n    });\n\n    var overlay = [].concat(_toConsumableArray(new Array(numRows))).map(function () {\n        return [].concat(_toConsumableArray(new Array(numCols)));\n    }).map(function (row) {\n        return [].concat(_toConsumableArray(row.map(function () {\n            return DEAD;\n        })));\n    });\n\n    var showCursor = false;\n    var drawing = false;\n\n    canvas.addEventListener('mouseover', function (e) {\n        showCursor = true;\n        cursorRow = Math.floor(e.clientY / CELL_HEIGHT);\n        cursorCol = Math.floor(e.clientX / CELL_WIDTH);\n    });\n\n    canvas.addEventListener('mousedown', function (e) {\n        drawing = true;\n        overlay[cursorRow][cursorCol] = ALIVE;\n    });\n\n    canvas.addEventListener('mouseup', function (e) {\n        drawing = false;\n    });\n\n    canvas.addEventListener('mousemove', function (e) {\n        cursorRow = Math.floor(e.clientY / CELL_HEIGHT);\n        cursorCol = Math.floor(e.clientX / CELL_WIDTH);\n\n        if (drawing) {\n            overlay[cursorRow][cursorCol] = ALIVE;\n        }\n    });\n\n    document.addEventListener('keydown', function (e) {\n        if (e.keyCode === KEY_ENTER) {\n            var _numRows = overlay.length;\n            var _numCols = overlay[0].length;\n\n            for (var _i = 0; _i < _numRows; _i++) {\n                for (var _j = 0; _j < _numCols; _j++) {\n                    if (overlay[_i][_j] === ALIVE) {\n                        overlay[_i][_j] = DEAD;\n                        environment[_i][_j] = ALIVE;\n                    }\n                }\n            }\n        } else if (e.keyCode === KEY_P) {\n            running = !running;\n\n            if (running) {\n                draw();\n            }\n        }\n    });\n\n    canvas.addEventListener('mouseleave', function (e) {\n        showCursor = false;\n    });\n\n    var context = canvas.getContext('2d');\n\n    var cycle = 0;\n    var averageComputeTime = 0;\n    var northRow = void 0,\n        southRow = void 0,\n        westCol = void 0,\n        eastCol = void 0,\n        neighbors = void 0,\n        temp = void 0,\n        i = void 0,\n        j = void 0,\n        startTime = void 0;\n\n    function draw() {\n        startTime = performance.now();\n\n        for (i = 0; i < numRows; i++) {\n            for (j = 0; j < numCols; j++) {\n                northRow = (numRows + i - 1) % numRows;\n                southRow = (numRows + i + 1) % numRows;\n                westCol = (numCols + j - 1) % numCols;\n                eastCol = (numCols + j + 1) % numCols;\n\n                neighbors = environment[northRow][westCol] + environment[northRow][j] + environment[northRow][eastCol] + environment[i][westCol] + environment[i][eastCol] + environment[southRow][westCol] + environment[southRow][j] + environment[southRow][eastCol];\n\n                if (environment[i][j] === ALIVE) {\n                    if (neighbors !== 3 && neighbors !== 2) {\n                        nextEnvironment[i][j] = DEAD;\n                    } else {\n                        nextEnvironment[i][j] = environment[i][j];\n                    }\n                } else if (neighbors === 3) {\n                    nextEnvironment[i][j] = ALIVE;\n                } else {\n                    nextEnvironment[i][j] = environment[i][j];\n                }\n            }\n        }\n\n        temp = environment;\n        environment = nextEnvironment;\n        nextEnvironment = temp;\n\n        // Draw environment\n        for (i = 0; i < numRows; i++) {\n            for (j = 0; j < numCols; j++) {\n                if (environment[i][j] === ALIVE) {\n                    context.fillStyle = 'white';\n                    context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n                } else {\n                    context.fillStyle = 'black';\n                    context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n                }\n\n                // Dray overlay\n                if (overlay[i][j] === ALIVE) {\n                    context.fillStyle = 'red';\n                    context.fillRect(j * CELL_WIDTH, i * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n                }\n            }\n        }\n\n        // Draw cursor\n        if (showCursor) {\n            context.fillStyle = 'red';\n            context.fillRect(cursorCol * CELL_WIDTH, cursorRow * CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);\n        }\n\n        // console.log(Math.floor(performance.now() - startTime))\n\n        if (running) {\n            window.requestAnimationFrame(draw);\n        }\n    }\n\n    window.requestAnimationFrame(draw);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvbWFpbi5qcz9lMTAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9tYWluLnNjc3MnXG5cbmNvbnN0IENFTExfV0lEVEggPSA1XG5jb25zdCBDRUxMX0hFSUdIVCA9IENFTExfV0lEVEhcblxuY29uc3QgREVBRCA9IDBcbmNvbnN0IEFMSVZFID0gMVxuXG5jb25zdCBLRVlfRU5URVIgPSAxM1xuY29uc3QgS0VZX1AgPSA4MFxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKVxuICAgIGNhbnZhcy53aWR0aCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGhcbiAgICBjYW52YXMuaGVpZ2h0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHRcblxuICAgIGNvbnN0IG51bUNvbHMgPSBNYXRoLmNlaWwoY2FudmFzLndpZHRoIC8gQ0VMTF9XSURUSClcbiAgICBjb25zdCBudW1Sb3dzID0gTWF0aC5jZWlsKGNhbnZhcy5oZWlnaHQgLyBDRUxMX0hFSUdIVClcblxuICAgIGxldCBlbnZpcm9ubWVudCA9IChbLi4ubmV3IEFycmF5KG51bVJvd3MpXSkubWFwKCgpID0+IFsuLi5uZXcgQXJyYXkobnVtQ29scyldKVxuICAgIGxldCBuZXh0RW52aXJvbm1lbnQgPSAoWy4uLm5ldyBBcnJheShudW1Sb3dzKV0pLm1hcCgoKSA9PiBbLi4ubmV3IEFycmF5KG51bUNvbHMpXSlcbiAgICBsZXQgcnVubmluZyA9IHRydWVcblxuICAgIGxldCBjdXJzb3JSb3cgPSAwXG4gICAgbGV0IGN1cnNvckNvbCA9IDBcblxuICAgIGlmICghY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcImJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBjYW52YXMgY29udGV4dFwiKVxuICAgIH1cblxuICAgIGVudmlyb25tZW50ID0gZW52aXJvbm1lbnQubWFwKHJvdyA9PiB7XG4gICAgICAgIHJldHVybiBbLi4ucm93Lm1hcCgoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMikgPT09IDAgPyBERUFEIDogQUxJVkVcbiAgICAgICAgfSldXG4gICAgfSlcblxuICAgIGxldCBvdmVybGF5ID0gKFsuLi5uZXcgQXJyYXkobnVtUm93cyldKVxuICAgICAgICAubWFwKCgpID0+IFsuLi5uZXcgQXJyYXkobnVtQ29scyldKSAgXG4gICAgICAgIC5tYXAocm93ID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbLi4ucm93Lm1hcCgoKSA9PiBERUFEKV1cbiAgICAgICAgfSlcblxuICAgIGxldCBzaG93Q3Vyc29yID0gZmFsc2VcbiAgICBsZXQgZHJhd2luZyA9IGZhbHNlXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XG4gICAgICAgIHNob3dDdXJzb3IgPSB0cnVlXG4gICAgICAgIGN1cnNvclJvdyA9IE1hdGguZmxvb3IoZS5jbGllbnRZIC8gQ0VMTF9IRUlHSFQpXG4gICAgICAgIGN1cnNvckNvbCA9IE1hdGguZmxvb3IoZS5jbGllbnRYIC8gQ0VMTF9XSURUSClcbiAgICB9KVxuXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgICAgICBkcmF3aW5nID0gdHJ1ZVxuICAgICAgICBvdmVybGF5W2N1cnNvclJvd11bY3Vyc29yQ29sXSA9IEFMSVZFXG4gICAgfSlcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZSA9PiB7XG4gICAgICAgIGRyYXdpbmcgPSBmYWxzZVxuICAgIH0pXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICAgIGN1cnNvclJvdyA9IE1hdGguZmxvb3IoZS5jbGllbnRZIC8gQ0VMTF9IRUlHSFQpXG4gICAgICAgIGN1cnNvckNvbCA9IE1hdGguZmxvb3IoZS5jbGllbnRYIC8gQ0VMTF9XSURUSClcblxuICAgICAgICBpZiAoZHJhd2luZykge1xuICAgICAgICAgICAgb3ZlcmxheVtjdXJzb3JSb3ddW2N1cnNvckNvbF0gPSBBTElWRVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gS0VZX0VOVEVSKSB7XG4gICAgICAgICAgICBjb25zdCBudW1Sb3dzID0gb3ZlcmxheS5sZW5ndGhcbiAgICAgICAgICAgIGNvbnN0IG51bUNvbHMgPSBvdmVybGF5WzBdLmxlbmd0aFxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVJvd3M7IGkrKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbnVtQ29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGF5W2ldW2pdID09PSBBTElWRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVtpXVtqXSA9IERFQURcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50W2ldW2pdID0gQUxJVkVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEtFWV9QKSB7XG4gICAgICAgICAgICBydW5uaW5nID0gIXJ1bm5pbmdcblxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBkcmF3KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xuICAgICAgICBzaG93Q3Vyc29yID0gZmFsc2VcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBsZXQgY3ljbGUgPSAwXG4gICAgbGV0IGF2ZXJhZ2VDb21wdXRlVGltZSA9IDBcbiAgICBsZXQgbm9ydGhSb3csIHNvdXRoUm93LCB3ZXN0Q29sLCBlYXN0Q29sLCBuZWlnaGJvcnMsIHRlbXAsIGksIGosIHN0YXJ0VGltZVxuXG4gICAgZnVuY3Rpb24gZHJhdyAoKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpXG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbnVtQ29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgbm9ydGhSb3cgPSAobnVtUm93cyArIGkgLSAxKSAlIG51bVJvd3NcbiAgICAgICAgICAgICAgICBzb3V0aFJvdyA9IChudW1Sb3dzICsgaSArIDEpICUgbnVtUm93c1xuICAgICAgICAgICAgICAgIHdlc3RDb2wgPSAobnVtQ29scyArIGogLSAxKSAlIG51bUNvbHNcbiAgICAgICAgICAgICAgICBlYXN0Q29sID0gKG51bUNvbHMgKyBqICsgMSkgJSBudW1Db2xzXG5cbiAgICAgICAgICAgICAgICBuZWlnaGJvcnMgPSBlbnZpcm9ubWVudFtub3J0aFJvd11bd2VzdENvbF1cbiAgICAgICAgICAgICAgICAgICAgKyBlbnZpcm9ubWVudFtub3J0aFJvd11bal1cbiAgICAgICAgICAgICAgICAgICAgKyBlbnZpcm9ubWVudFtub3J0aFJvd11bZWFzdENvbF1cbiAgICAgICAgICAgICAgICAgICAgKyBlbnZpcm9ubWVudFtpXVt3ZXN0Q29sXVxuICAgICAgICAgICAgICAgICAgICArIGVudmlyb25tZW50W2ldW2Vhc3RDb2xdXG4gICAgICAgICAgICAgICAgICAgICsgZW52aXJvbm1lbnRbc291dGhSb3ddW3dlc3RDb2xdXG4gICAgICAgICAgICAgICAgICAgICsgZW52aXJvbm1lbnRbc291dGhSb3ddW2pdXG4gICAgICAgICAgICAgICAgICAgICsgZW52aXJvbm1lbnRbc291dGhSb3ddW2Vhc3RDb2xdXG5cbiAgICAgICAgICAgICAgICBpZiAoZW52aXJvbm1lbnRbaV1bal0gPT09IEFMSVZFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvcnMgIT09IDMgJiYgbmVpZ2hib3JzICE9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW52aXJvbm1lbnRbaV1bal0gPSBERUFEXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0RW52aXJvbm1lbnRbaV1bal0gPSBlbnZpcm9ubWVudFtpXVtqXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZWlnaGJvcnMgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVudmlyb25tZW50W2ldW2pdID0gQUxJVkVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0RW52aXJvbm1lbnRbaV1bal0gPSBlbnZpcm9ubWVudFtpXVtqXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXAgPSBlbnZpcm9ubWVudFxuICAgICAgICBlbnZpcm9ubWVudCA9IG5leHRFbnZpcm9ubWVudFxuICAgICAgICBuZXh0RW52aXJvbm1lbnQgPSB0ZW1wXG5cbiAgICAgICAgLy8gRHJhdyBlbnZpcm9ubWVudFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbnVtUm93czsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgbnVtQ29sczsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVudmlyb25tZW50W2ldW2pdID09PSBBTElWRSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChqICogQ0VMTF9XSURUSCwgaSAqIENFTExfSEVJR0hULCBDRUxMX1dJRFRILCBDRUxMX0hFSUdIVClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdibGFjaydcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdChqICogQ0VMTF9XSURUSCwgaSAqIENFTExfSEVJR0hULCBDRUxMX1dJRFRILCBDRUxMX0hFSUdIVCkgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIERyYXkgb3ZlcmxheVxuICAgICAgICAgICAgICAgIGlmIChvdmVybGF5W2ldW2pdID09PSBBTElWRSkge1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdyZWQnXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoaiAqIENFTExfV0lEVEgsIGkgKiBDRUxMX0hFSUdIVCwgQ0VMTF9XSURUSCwgQ0VMTF9IRUlHSFQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRHJhdyBjdXJzb3JcbiAgICAgICAgaWYgKHNob3dDdXJzb3IpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ3JlZCdcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoY3Vyc29yQ29sICogQ0VMTF9XSURUSCwgY3Vyc29yUm93ICogQ0VMTF9IRUlHSFQsIENFTExfV0lEVEgsIENFTExfSEVJR0hUKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coTWF0aC5mbG9vcihwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZSkpXG5cbiAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdylcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpXG5cbn0iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/main.js\n");

/***/ }),

/***/ "./app/main.scss":
/*!***********************!*\
  !*** ./app/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbWFpbi5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL21haW4uc2Nzcz9mY2EwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app/main.scss\n");

/***/ })

/******/ });