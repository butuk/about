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

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ (() => {

eval("\nconst headline = document.querySelector('.headline');\nconst reset = document.querySelector('.reset');\nconst ux = document.querySelector('.ux-ui');\nconst trainer = document.querySelector('.trainer');\nconst clickable = document.querySelectorAll('.clickable');\n\n// Dynamic favicon\nconst iconPlace = document.getElementById('favicon');\ndocument.body.addEventListener('click', () => {\n    let icon = Math.round(Math.random() * 19) + 1;\n    iconPlace.setAttribute(`href`, `icons/${icon}.png`);\n});\nclickable.forEach(element => {\n    element.addEventListener('click', () => {\n        reset.classList.remove('hidden');\n        headline.classList.add('hidden');\n        element.nextElementSibling.classList.remove('hidden');\n        element.classList.add('hidden');\n    });\n});\n// Reset to default state\nreset.addEventListener('click', () => {\n    reset.classList.toggle('hidden');\n    headline.classList.toggle('hidden');\n    document.querySelectorAll('span').forEach(element => {\n        element.classList.add('hidden');\n    });\n    ux.classList.remove('hidden');\n    trainer.classList.remove('hidden');\n});\n\n\n//# sourceURL=webpack://portfolio-site/./src/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts.js"]();
/******/ 	
/******/ })()
;