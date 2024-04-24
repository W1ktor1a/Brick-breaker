/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Brick.ts":
/*!**********************!*\
  !*** ./src/Brick.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Brick: () => (/* binding */ Brick)\n/* harmony export */ });\nvar Brick = /** @class */ (function () {\n    function Brick(width, height, x, y) {\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n    }\n    return Brick;\n}());\n\n\n\n//# sourceURL=webpack://brick-breaker/./src/Brick.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Game: () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/Brick.ts\");\n/* harmony import */ var _Paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paddle */ \"./src/Paddle.ts\");\n\n\nvar Game = /** @class */ (function () {\n    function Game() {\n        var _this = this;\n        //Game board dimensions \n        this.gameBoardWidth = 500;\n        this.gameBoardHeight = 500;\n        this.board = document.getElementById(\"playField\");\n        this.context = this.board.getContext('2d');\n        this.board.width = this.gameBoardWidth;\n        this.board.height = this.gameBoardHeight;\n        this.paddle = new _Paddle__WEBPACK_IMPORTED_MODULE_1__.Paddle(this.gameBoardWidth / 10, this.gameBoardHeight / 50, 10, this.gameBoardWidth / 2 - 50 / 2, this.gameBoardHeight - 25);\n        this.brick = new _Brick__WEBPACK_IMPORTED_MODULE_0__.Brick(this.gameBoardWidth / 20, this.gameBoardHeight / 40, this.gameBoardWidth / 2 - 50 / 2, this.gameBoardHeight - 500);\n        requestAnimationFrame(function () { return _this.updateGame(); });\n        document.addEventListener(\"keydown\", function (e) { return _this.movePaddle(e); });\n    }\n    Game.prototype.updateGame = function () {\n        var _this = this;\n        var _a;\n        requestAnimationFrame(function () { return _this.updateGame(); });\n        (_a = this.context) === null || _a === void 0 ? void 0 : _a.clearRect(0, 0, this.gameBoardWidth, this.gameBoardHeight);\n        this.context.fillStyle = 'white';\n        this.context.fillRect(this.paddle.x, this.paddle.y, this.paddle.width, this.paddle.height);\n        this.context.fillStyle = 'green';\n        this.context.fillRect(this.brick.x, this.brick.y, this.brick.width, this.brick.height);\n    };\n    Game.prototype.movePaddle = function (e) {\n        if (e.code === 'ArrowLeft') {\n            var nextx = this.paddle.x - this.paddle.speed;\n            if (!this.outOfBoard(nextx)) {\n                this.paddle.x = nextx;\n            }\n        }\n        else if (e.code === 'ArrowRight') {\n            var nextx = this.paddle.x + this.paddle.speed;\n            if (!this.outOfBoard(nextx)) {\n                this.paddle.x = nextx;\n            }\n        }\n    };\n    Game.prototype.outOfBoard = function (xPos) {\n        return xPos < 0 || xPos + this.paddle.width > 500;\n    };\n    return Game;\n}());\n\n\n\n//# sourceURL=webpack://brick-breaker/./src/Game.ts?");

/***/ }),

/***/ "./src/Paddle.ts":
/*!***********************!*\
  !*** ./src/Paddle.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Paddle: () => (/* binding */ Paddle)\n/* harmony export */ });\nvar Paddle = /** @class */ (function () {\n    function Paddle(width, height, speed, x, y) {\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.speed = speed;\n    }\n    return Paddle;\n}());\n\n\n\n//# sourceURL=webpack://brick-breaker/./src/Paddle.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\n\nwindow.addEventListener(\"DOMContentLoaded\", function (event) {\n    console.log(\"DOM fully loaded and parsed\");\n    new _Game__WEBPACK_IMPORTED_MODULE_0__.Game();\n});\n\n\n//# sourceURL=webpack://brick-breaker/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;