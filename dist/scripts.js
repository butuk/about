/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXNpdGUvLi9zcmMvc3R5bGVzLnNjc3M/MDI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles.scss\n");

/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\nconst headline = document.querySelector('.headline');\nconst reset = document.querySelector('.reset');\nconst ux = document.querySelector('.ux-ui');\nconst trainer = document.querySelector('.trainer');\nconst help = document.querySelector('.can-help');\nconst graduated = document.querySelector('.graduated');\nif (ux) {\n    ux.addEventListener('click', () => {\n        ux.classList.add('hidden');\n        help ? help.classList.remove('hidden') : null;\n        reset ? reset.classList.remove('hidden') : null;\n        headline ? headline.classList.add('hidden') : null;\n    });\n}\nif (trainer) {\n    trainer.addEventListener('click', () => {\n        trainer.classList.add('hidden');\n        graduated ? graduated.classList.remove('hidden') : null;\n        reset ? reset.classList.remove('hidden') : null;\n        headline ? headline.classList.add('hidden') : null;\n    });\n}\n//const clickable = document.querySelectorAll('.clickable');\n// Dynamic favicon\nconst iconPlace = document.getElementById('favicon');\ndocument.body.addEventListener('click', () => {\n    console.log('Hi!');\n    let icon = Math.round(Math.random() * 19) + 1;\n    if (iconPlace) {\n        iconPlace.setAttribute(`href`, `icons/${icon}.png`);\n    }\n});\n/*clickable.forEach(element => {\n    element.addEventListener('click', () => {\n        reset.classList.remove('hidden');\n        headline.classList.add('hidden');\n        element.nextElementSibling.classList.remove('hidden');\n        element.classList.add('hidden');\n    });\n});*/\n// Reset to default state\nif (reset) {\n    reset.addEventListener('click', () => {\n        reset.classList.toggle('hidden');\n        headline ? headline.classList.toggle('hidden') : null;\n        help ? help.classList.add('hidden') : null;\n        graduated ? graduated.classList.add('hidden') : null;\n        ux ? ux.classList.remove('hidden') : null;\n        trainer ? trainer.classList.remove('hidden') : null;\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy50cy5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLHdDQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7QUFDckQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMsRUFBRTtBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1zaXRlLy4vc3JjL3NjcmlwdHMudHM/MTY0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCIuL3N0eWxlcy5zY3NzXCIpO1xuY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGxpbmUnKTtcbmNvbnN0IHJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0Jyk7XG5jb25zdCB1eCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51eC11aScpO1xuY29uc3QgdHJhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmFpbmVyJyk7XG5jb25zdCBoZWxwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbi1oZWxwJyk7XG5jb25zdCBncmFkdWF0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JhZHVhdGVkJyk7XG5pZiAodXgpIHtcbiAgICB1eC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdXguY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGhlbHAgPyBoZWxwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpIDogbnVsbDtcbiAgICAgICAgcmVzZXQgPyByZXNldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSA6IG51bGw7XG4gICAgICAgIGhlYWRsaW5lID8gaGVhZGxpbmUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykgOiBudWxsO1xuICAgIH0pO1xufVxuaWYgKHRyYWluZXIpIHtcbiAgICB0cmFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0cmFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBncmFkdWF0ZWQgPyBncmFkdWF0ZWQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgOiBudWxsO1xuICAgICAgICByZXNldCA/IHJlc2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpIDogbnVsbDtcbiAgICAgICAgaGVhZGxpbmUgPyBoZWFkbGluZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IG51bGw7XG4gICAgfSk7XG59XG4vL2NvbnN0IGNsaWNrYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGlja2FibGUnKTtcbi8vIER5bmFtaWMgZmF2aWNvblxuY29uc3QgaWNvblBsYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zhdmljb24nKTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0hpIScpO1xuICAgIGxldCBpY29uID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTkpICsgMTtcbiAgICBpZiAoaWNvblBsYWNlKSB7XG4gICAgICAgIGljb25QbGFjZS5zZXRBdHRyaWJ1dGUoYGhyZWZgLCBgaWNvbnMvJHtpY29ufS5wbmdgKTtcbiAgICB9XG59KTtcbi8qY2xpY2thYmxlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9KTtcbn0pOyovXG4vLyBSZXNldCB0byBkZWZhdWx0IHN0YXRlXG5pZiAocmVzZXQpIHtcbiAgICByZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVzZXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgIGhlYWRsaW5lID8gaGVhZGxpbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJykgOiBudWxsO1xuICAgICAgICBoZWxwID8gaGVscC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IG51bGw7XG4gICAgICAgIGdyYWR1YXRlZCA/IGdyYWR1YXRlZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKSA6IG51bGw7XG4gICAgICAgIHV4ID8gdXguY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgOiBudWxsO1xuICAgICAgICB0cmFpbmVyID8gdHJhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSA6IG51bGw7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts.ts");
/******/ 	
/******/ })()
;