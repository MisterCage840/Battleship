/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard)\n/* harmony export */ });\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n\nconst gameboard = () => {\n  let gamecells = Array(10).fill(null).map(() => Array(10).fill(null));\n  let shipObjects = [];\n  const placeShip = ship => {\n    shipObjects.push(ship);\n    let coordinate = Math.floor(Math.random() * 9);\n    const shipLength = ship.getLength();\n    const shipDirection = ship.getDirection();\n    let shipName = ship.getShipName();\n    if (shipDirection == \"horizontal\") {\n      if (shipLength + coordinate > 9) {\n        for (let i = shipLength; i > 0; i--) {\n          gamecells[i][coordinate] = shipName;\n        }\n      } else {\n        for (let i = 0; i < shipLength; i++) gamecells[i][coordinate] = shipName;\n      }\n    } else if (shipDirection == \"vertical\") {\n      if (shipLength + coordinate > 9) {\n        for (let i = shipLength; i > 0; i--) {\n          gamecells[coordinate][i] = shipName;\n        }\n      } else {\n        for (let i = 0; i < shipLength; i++) gamecells[coordinate][i] = shipName;\n      }\n    }\n  };\n  const receiveAttack = (x, y) => {\n    if (gamecells[x][y] == null) gamecells[x][y] = \"miss\";else if (gamecells[x][y] == \"hit\") {} else {\n      shipObjects.forEach(ship => {\n        if (ship.getShipName() == gamecells[x][y]) {\n          ship.hit();\n          gamecells[x][y] = \"hit\";\n        }\n      });\n    }\n  };\n  const checkShips = () => {\n    let allShipsSunk = true;\n    shipObjects.forEach(ship => {\n      if (ship.getHits() < ship.getLength()) allShipsSunk = false;\n    });\n    return allShipsSunk;\n  };\n  const getGameboard = () => gamecells;\n  const getShipObjects = () => shipObjects;\n  return {\n    getGameboard,\n    placeShip,\n    receiveAttack,\n    checkShips,\n    getShipObjects\n  };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDO0VBRUQsTUFBTUcsVUFBVSxHQUFHQSxDQUFBLEtBQU07SUFDdkIsSUFBSUMsWUFBWSxHQUFHLElBQUk7SUFDdkJwQixXQUFXLENBQUNpQixPQUFPLENBQUV2QixJQUFJLElBQUs7TUFDNUIsSUFBSUEsSUFBSSxDQUFDMkIsT0FBTyxDQUFDLENBQUMsR0FBRzNCLElBQUksQ0FBQ2MsU0FBUyxDQUFDLENBQUMsRUFBRVksWUFBWSxHQUFHLEtBQUs7SUFDN0QsQ0FBQyxDQUFDO0lBQ0YsT0FBT0EsWUFBWTtFQUNyQixDQUFDO0VBRUQsTUFBTUUsWUFBWSxHQUFHQSxDQUFBLEtBQU0xQixTQUFTO0VBQ3BDLE1BQU0yQixjQUFjLEdBQUdBLENBQUEsS0FBTXZCLFdBQVc7RUFFeEMsT0FBTztJQUFFc0IsWUFBWTtJQUFFckIsU0FBUztJQUFFYSxhQUFhO0lBQUVLLFVBQVU7SUFBRUk7RUFBZSxDQUFDO0FBQy9FLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZXJlcG8vLi9zcmMvZ2FtZWJvYXJkLmpzP2ZjM2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcblxuY29uc3QgZ2FtZWJvYXJkID0gKCkgPT4ge1xuICBsZXQgZ2FtZWNlbGxzID0gQXJyYXkoMTApXG4gICAgLmZpbGwobnVsbClcbiAgICAubWFwKCgpID0+IEFycmF5KDEwKS5maWxsKG51bGwpKTtcbiAgbGV0IHNoaXBPYmplY3RzID0gW107XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXApID0+IHtcbiAgICBzaGlwT2JqZWN0cy5wdXNoKHNoaXApO1xuXG4gICAgbGV0IGNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICBjb25zdCBzaGlwTGVuZ3RoID0gc2hpcC5nZXRMZW5ndGgoKTtcbiAgICBjb25zdCBzaGlwRGlyZWN0aW9uID0gc2hpcC5nZXREaXJlY3Rpb24oKTtcbiAgICBsZXQgc2hpcE5hbWUgPSBzaGlwLmdldFNoaXBOYW1lKCk7XG5cbiAgICBpZiAoc2hpcERpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKHNoaXBMZW5ndGggKyBjb29yZGluYXRlID4gOSkge1xuICAgICAgICBmb3IgKGxldCBpID0gc2hpcExlbmd0aDsgaSA+IDA7IGktLSkge1xuICAgICAgICAgIGdhbWVjZWxsc1tpXVtjb29yZGluYXRlXSA9IHNoaXBOYW1lO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKylcbiAgICAgICAgICBnYW1lY2VsbHNbaV1bY29vcmRpbmF0ZV0gPSBzaGlwTmFtZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNoaXBEaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoc2hpcExlbmd0aCArIGNvb3JkaW5hdGUgPiA5KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzaGlwTGVuZ3RoOyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgZ2FtZWNlbGxzW2Nvb3JkaW5hdGVdW2ldID0gc2hpcE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKVxuICAgICAgICAgIGdhbWVjZWxsc1tjb29yZGluYXRlXVtpXSA9IHNoaXBOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHgsIHkpID0+IHtcbiAgICBpZiAoZ2FtZWNlbGxzW3hdW3ldID09IG51bGwpIGdhbWVjZWxsc1t4XVt5XSA9IFwibWlzc1wiO1xuICAgIGVsc2UgaWYgKGdhbWVjZWxsc1t4XVt5XSA9PSBcImhpdFwiKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNoaXBPYmplY3RzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgICAgaWYgKHNoaXAuZ2V0U2hpcE5hbWUoKSA9PSBnYW1lY2VsbHNbeF1beV0pIHtcbiAgICAgICAgICBzaGlwLmhpdCgpO1xuICAgICAgICAgIGdhbWVjZWxsc1t4XVt5XSA9IFwiaGl0XCI7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjaGVja1NoaXBzID0gKCkgPT4ge1xuICAgIGxldCBhbGxTaGlwc1N1bmsgPSB0cnVlO1xuICAgIHNoaXBPYmplY3RzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmIChzaGlwLmdldEhpdHMoKSA8IHNoaXAuZ2V0TGVuZ3RoKCkpIGFsbFNoaXBzU3VuayA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybiBhbGxTaGlwc1N1bms7XG4gIH07XG5cbiAgY29uc3QgZ2V0R2FtZWJvYXJkID0gKCkgPT4gZ2FtZWNlbGxzO1xuICBjb25zdCBnZXRTaGlwT2JqZWN0cyA9ICgpID0+IHNoaXBPYmplY3RzO1xuXG4gIHJldHVybiB7IGdldEdhbWVib2FyZCwgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBjaGVja1NoaXBzLCBnZXRTaGlwT2JqZWN0cyB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZWJvYXJkIH07XG4iXSwibmFtZXMiOlsic2hpcCIsImdhbWVib2FyZCIsImdhbWVjZWxscyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInNoaXBPYmplY3RzIiwicGxhY2VTaGlwIiwicHVzaCIsImNvb3JkaW5hdGUiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzaGlwTGVuZ3RoIiwiZ2V0TGVuZ3RoIiwic2hpcERpcmVjdGlvbiIsImdldERpcmVjdGlvbiIsInNoaXBOYW1lIiwiZ2V0U2hpcE5hbWUiLCJpIiwicmVjZWl2ZUF0dGFjayIsIngiLCJ5IiwiZm9yRWFjaCIsImhpdCIsImNoZWNrU2hpcHMiLCJhbGxTaGlwc1N1bmsiLCJnZXRIaXRzIiwiZ2V0R2FtZWJvYXJkIiwiZ2V0U2hpcE9iamVjdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/gameboard.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_player_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFDViIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlcmVwby8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZC5qc1wiO1xuaW1wb3J0IHsgc2hpcCB9IGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCB7IHBsYXllciB9IGZyb20gXCIuL3BsYXllci5qc1wiO1xuIl0sIm5hbWVzIjpbImdhbWVib2FyZCIsInNoaXAiLCJwbGF5ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/cage/Desktop/projects/Battleship/src/player.js: Identifier 'gameboard' has already been declared. (1:20)\n\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 1 |\u001b[39m \u001b[36mimport\u001b[39m { gameboard\u001b[33m,\u001b[39m gameboard } \u001b[36mfrom\u001b[39m \u001b[32m\"./gameboard.js\"\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m   |\u001b[39m                     \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 2 |\u001b[39m\n \u001b[90m 3 |\u001b[39m \u001b[36mconst\u001b[39m player \u001b[33m=\u001b[39m (type) \u001b[33m=>\u001b[39m {\n \u001b[90m 4 |\u001b[39m   \u001b[36mconst\u001b[39m playerGameboard \u001b[33m=\u001b[39m gameboard()\u001b[33m;\u001b[39m\u001b[0m\n    at constructor (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:360:19)\n    at Parser.raise (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:3338:19)\n    at ScopeHandler.checkRedeclarationInScope (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:1566:19)\n    at ScopeHandler.declareName (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:1532:12)\n    at Parser.declareNameFromIdentifier (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:7494:16)\n    at Parser.checkIdentifier (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:7490:12)\n    at Parser.checkLVal (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:7431:12)\n    at Parser.finishImportSpecifier (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:13926:10)\n    at Parser.parseImportSpecifier (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:14083:17)\n    at Parser.parseNamedImportSpecifiers (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:14062:36)\n    at Parser.parseImportSpecifiersAndAfter (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:13902:37)\n    at Parser.parseImport (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:13895:17)\n    at Parser.parseStatementContent (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:12540:27)\n    at Parser.parseStatementLike (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:12432:17)\n    at Parser.parseModuleItem (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:12409:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:12980:36)\n    at Parser.parseBlockBody (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:12973:10)\n    at Parser.parseProgram (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:12306:10)\n    at Parser.parseTopLevel (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:12296:25)\n    at Parser.parse (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:14152:10)\n    at parse (/home/cage/Desktop/projects/Battleship/node_modules/@babel/parser/lib/index.js:14186:38)\n    at parser (/home/cage/Desktop/projects/Battleship/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/cage/Desktop/projects/Battleship/node_modules/@babel/core/lib/transformation/normalize-file.js:64:37)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/cage/Desktop/projects/Battleship/node_modules/@babel/core/lib/transformation/index.js:22:50)\n    at run.next (<anonymous>)\n    at transform (/home/cage/Desktop/projects/Battleship/node_modules/@babel/core/lib/transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (/home/cage/Desktop/projects/Battleship/node_modules/gensync/index.js:261:32)\n    at /home/cage/Desktop/projects/Battleship/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/home/cage/Desktop/projects/Battleship/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\nconst ship = (shipName, length) => {\n  let hits = 0;\n  let isSunk = false;\n  let direction;\n  const hit = () => hits++;\n  const toggleSunk = () => isSunk = true;\n  const getDirection = () => {\n    let randomiser = Math.round(Math.random());\n    direction = randomiser == 0 ? \"horizontal\" : \"vertical\";\n    return direction;\n  };\n  const getLength = () => length;\n  const getHits = () => hits;\n  const getSunk = () => isSunk;\n  const getShipName = () => shipName;\n  return {\n    getLength,\n    getHits,\n    getSunk,\n    hit,\n    toggleSunk,\n    getDirection,\n    getShipName\n  };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hpcC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsSUFBSSxHQUFHQSxDQUFDQyxRQUFRLEVBQUVDLE1BQU0sS0FBSztFQUNqQyxJQUFJQyxJQUFJLEdBQUcsQ0FBQztFQUNaLElBQUlDLE1BQU0sR0FBRyxLQUFLO0VBQ2xCLElBQUlDLFNBQVM7RUFFYixNQUFNQyxHQUFHLEdBQUdBLENBQUEsS0FBTUgsSUFBSSxFQUFFO0VBQ3hCLE1BQU1JLFVBQVUsR0FBR0EsQ0FBQSxLQUFPSCxNQUFNLEdBQUcsSUFBSztFQUV4QyxNQUFNSSxZQUFZLEdBQUdBLENBQUEsS0FBTTtJQUN6QixJQUFJQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUNQLFNBQVMsR0FBR0ksVUFBVSxJQUFJLENBQUMsR0FBRyxZQUFZLEdBQUcsVUFBVTtJQUN2RCxPQUFPSixTQUFTO0VBQ2xCLENBQUM7RUFFRCxNQUFNUSxTQUFTLEdBQUdBLENBQUEsS0FBTVgsTUFBTTtFQUM5QixNQUFNWSxPQUFPLEdBQUdBLENBQUEsS0FBTVgsSUFBSTtFQUMxQixNQUFNWSxPQUFPLEdBQUdBLENBQUEsS0FBTVgsTUFBTTtFQUM1QixNQUFNWSxXQUFXLEdBQUdBLENBQUEsS0FBTWYsUUFBUTtFQUVsQyxPQUFPO0lBQ0xZLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxPQUFPO0lBQ1BULEdBQUc7SUFDSEMsVUFBVTtJQUNWQyxZQUFZO0lBQ1pRO0VBQ0YsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZXJlcG8vLi9zcmMvc2hpcC5qcz9kMDM3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNoaXAgPSAoc2hpcE5hbWUsIGxlbmd0aCkgPT4ge1xuICBsZXQgaGl0cyA9IDA7XG4gIGxldCBpc1N1bmsgPSBmYWxzZTtcbiAgbGV0IGRpcmVjdGlvbjtcblxuICBjb25zdCBoaXQgPSAoKSA9PiBoaXRzKys7XG4gIGNvbnN0IHRvZ2dsZVN1bmsgPSAoKSA9PiAoaXNTdW5rID0gdHJ1ZSk7XG5cbiAgY29uc3QgZ2V0RGlyZWN0aW9uID0gKCkgPT4ge1xuICAgIGxldCByYW5kb21pc2VyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICBkaXJlY3Rpb24gPSByYW5kb21pc2VyID09IDAgPyBcImhvcml6b250YWxcIiA6IFwidmVydGljYWxcIjtcbiAgICByZXR1cm4gZGlyZWN0aW9uO1xuICB9O1xuXG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgY29uc3QgZ2V0SGl0cyA9ICgpID0+IGhpdHM7XG4gIGNvbnN0IGdldFN1bmsgPSAoKSA9PiBpc1N1bms7XG4gIGNvbnN0IGdldFNoaXBOYW1lID0gKCkgPT4gc2hpcE5hbWU7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMZW5ndGgsXG4gICAgZ2V0SGl0cyxcbiAgICBnZXRTdW5rLFxuICAgIGhpdCxcbiAgICB0b2dnbGVTdW5rLFxuICAgIGdldERpcmVjdGlvbixcbiAgICBnZXRTaGlwTmFtZSxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IHNoaXAgfTtcbiJdLCJuYW1lcyI6WyJzaGlwIiwic2hpcE5hbWUiLCJsZW5ndGgiLCJoaXRzIiwiaXNTdW5rIiwiZGlyZWN0aW9uIiwiaGl0IiwidG9nZ2xlU3VuayIsImdldERpcmVjdGlvbiIsInJhbmRvbWlzZXIiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJnZXRMZW5ndGgiLCJnZXRIaXRzIiwiZ2V0U3VuayIsImdldFNoaXBOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ship.js\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;