/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  "use strict";
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack://webpack_ts/./src/styles.scss?");
  
  /***/ }),
  
  /***/ "./src/scripts.ts":
  /*!************************!*\
    !*** ./src/scripts.ts ***!
    \************************/
  /***/ (() => {
  
  eval("console.log('Ready for coding');\r\nvar levelSelector = document.querySelectorAll('.btn-level');\r\nvar gameField = document.querySelector('.gameField');\r\nvar reset = document.querySelector('.reset');\r\nvar getCards = function () { return document.querySelectorAll('.card'); };\r\nvar getFaces = function () { return document.querySelectorAll('.face'); };\r\nvar getBacks = function () { return document.querySelectorAll('.back'); };\r\nvar cards = getCards();\r\nvar faces = getFaces();\r\nvar backs = getBacks();\r\nvar cardBacks = {\r\n    boy: './assets/images/boy.png',\r\n    camel: './assets/images/camel.png',\r\n    deer: './assets/images/deer.png',\r\n    eagle: './assets/images/eagle.png',\r\n    fox: './assets/images/fox.png',\r\n    horse: './assets/images/horse.png',\r\n    kangaroo: './assets/images/kangaroo.png',\r\n    penguin: './assets/images/penguin.png',\r\n    pig: './assets/images/pig.png',\r\n    polar_bear: './assets/images/polar_bear.png',\r\n    python: './assets/images/python.png',\r\n    sloth: './assets/images/sloth.png',\r\n};\r\nvar cardFace = './assets/images/card_face.png';\r\nvar cardBackKeys = Object.keys(cardBacks);\r\nvar fieldSize = 0;\r\nvar randomKeyNumbers = [];\r\nvar openedCards = 0;\r\nvar firstOpenedCardValue = '';\r\nvar firstOpenedCardIndex;\r\nvar secondOpenedCardValue = '';\r\nvar secondOpenedCardIndex;\r\nvar guessedCards = [];\r\nvar points = 0;\r\nvar getRandomKeyNumbers = function () {\r\n    for (var i = 0; i < fieldSize / 2; i += 1) {\r\n        var randnum = Math.floor(Math.random() * cardBackKeys.length);\r\n        if (randomKeyNumbers.includes(randnum)) {\r\n            i -= 1;\r\n        }\r\n        else {\r\n            randomKeyNumbers.push(randnum);\r\n            randomKeyNumbers.push(randnum);\r\n        }\r\n    }\r\n    randomKeyNumbers = randomKeyNumbers.sort(function () { return 0.5 - Math.random(); });\r\n};\r\nreset.addEventListener('click', function () {\r\n    document.querySelector('.levelSelector').classList.remove('hidden');\r\n    document.querySelector('.gameField').classList.add('hidden');\r\n    document.querySelector('.win').classList.add('hidden');\r\n    gameField.innerHTML = '';\r\n    fieldSize = 0;\r\n    randomKeyNumbers = [];\r\n    openedCards = 0;\r\n    firstOpenedCardValue = '';\r\n    firstOpenedCardIndex = NaN;\r\n    secondOpenedCardValue = '';\r\n    secondOpenedCardIndex = NaN;\r\n    guessedCards = [];\r\n});\r\nvar hideShow = function () {\r\n    document.querySelector('.levelSelector').classList.add('hidden');\r\n    document.querySelector('.gameField').classList.remove('hidden');\r\n};\r\nvar flipCard = function (ind) {\r\n    faces = getFaces();\r\n    backs = getBacks();\r\n    faces[ind].classList.add('hidden');\r\n    backs[ind].classList.remove('hidden');\r\n};\r\nvar flipCardBack = function (ind) {\r\n    faces = getFaces();\r\n    backs = getBacks();\r\n    faces[ind].classList.remove('hidden');\r\n    backs[ind].classList.add('hidden');\r\n};\r\nvar hideWrongGuess = function () {\r\n    cards.forEach(function (el, i) {\r\n        if (!guessedCards.includes(i)) {\r\n            flipCardBack(i);\r\n        }\r\n    });\r\n};\r\nvar drawFiled = function () {\r\n    for (var i = 0; i < fieldSize; i += 1) {\r\n        gameField.innerHTML += \"<div class=\\\"card\\\"><img class=\\\"wrapper back hidden\\\" src=\\\"\".concat(cardBacks[cardBackKeys[randomKeyNumbers[i]]], \"\\\"><img class=\\\"wrapper face\\\" src=\\\"\").concat(cardFace, \"\\\" alt=\\\"parrot\\\"></div>\");\r\n    }\r\n};\r\nvar winCheck = function () {\r\n    if (guessedCards.length === fieldSize) {\r\n        console.log('WIN WIN WIN');\r\n        document.querySelector('.gameField').classList.add('hidden');\r\n        document.querySelector('.win').classList.remove('hidden');\r\n        if (fieldSize === 6) {\r\n            points += 1;\r\n        }\r\n        else if (fieldSize === 12) {\r\n            points += 3;\r\n        }\r\n        else {\r\n            points += 5;\r\n        }\r\n    }\r\n};\r\nvar updateScore = function () {\r\n    document.querySelector('.points').innerHTML = \"Score: \".concat(points);\r\n};\r\n// And here starts game :)\r\nlevelSelector.forEach(function (el, i) {\r\n    levelSelector[i].addEventListener('click', function () {\r\n        fieldSize = (+levelSelector[i].value);\r\n        var colSize = i === 0 ? 'col-4' : i === 1 ? 'col-3' : 'col-2';\r\n        getRandomKeyNumbers();\r\n        hideShow();\r\n        drawFiled();\r\n        getCards().forEach(function (card) { return card.classList.add(colSize); });\r\n        cards = getCards();\r\n        cards.forEach(function (card, ind) {\r\n            cards[ind].addEventListener('click', function () {\r\n                if (openedCards === 2) {\r\n                    hideWrongGuess();\r\n                    openedCards = 0;\r\n                    firstOpenedCardValue = '';\r\n                    secondOpenedCardValue = '';\r\n                }\r\n                if (firstOpenedCardIndex !== ind) {\r\n                    openedCards += 1;\r\n                    flipCard(ind);\r\n                    if (openedCards === 1) {\r\n                        firstOpenedCardValue = cardBackKeys[randomKeyNumbers[ind]];\r\n                        firstOpenedCardIndex = ind;\r\n                    }\r\n                    if (openedCards === 2) {\r\n                        secondOpenedCardValue = cardBackKeys[randomKeyNumbers[ind]];\r\n                        secondOpenedCardIndex = ind;\r\n                    }\r\n                    if (firstOpenedCardValue === secondOpenedCardValue) {\r\n                        openedCards = 0;\r\n                        guessedCards.push(firstOpenedCardIndex);\r\n                        guessedCards.push(secondOpenedCardIndex);\r\n                        firstOpenedCardValue = '';\r\n                        secondOpenedCardValue = '';\r\n                    }\r\n                    winCheck();\r\n                    updateScore();\r\n                }\r\n            });\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/scripts.ts?");
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The require scope
  /******/ 	var __webpack_require__ = {};
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
  /******/ 	/* webpack/runtime/global */
  /******/ 	(() => {
  /******/ 		__webpack_require__.g = (function() {
  /******/ 			if (typeof globalThis === 'object') return globalThis;
  /******/ 			try {
  /******/ 				return this || new Function('return this')();
  /******/ 			} catch (e) {
  /******/ 				if (typeof window === 'object') return window;
  /******/ 			}
  /******/ 		})();
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
  /******/ 	/* webpack/runtime/publicPath */
  /******/ 	(() => {
  /******/ 		var scriptUrl;
  /******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
  /******/ 		var document = __webpack_require__.g.document;
  /******/ 		if (!scriptUrl && document) {
  /******/ 			if (document.currentScript)
  /******/ 				scriptUrl = document.currentScript.src
  /******/ 			if (!scriptUrl) {
  /******/ 				var scripts = document.getElementsByTagName("script");
  /******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
  /******/ 			}
  /******/ 		}
  /******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
  /******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
  /******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
  /******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
  /******/ 		__webpack_require__.p = scriptUrl;
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	__webpack_modules__["./src/scripts.ts"](0, {}, __webpack_require__);
  /******/ 	var __webpack_exports__ = {};
  /******/ 	__webpack_modules__["./src/styles.scss"](0, __webpack_exports__, __webpack_require__);
  /******/ 	
  /******/ })()
  ;