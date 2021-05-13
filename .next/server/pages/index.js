module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/FooterFixed.tsx":
/*!****************************************!*\
  !*** ./src/components/FooterFixed.tsx ***!
  \****************************************/
/*! exports provided: FooterFixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterFixed", function() { return FooterFixed; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ "react-bootstrap/Container");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/Footer.module.css */ "./src/styles/components/Footer.module.css");
/* harmony import */ var _styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Gustavo\\Documents\\ws-ionic\\next-book-search\\src\\components\\FooterFixed.tsx";


function FooterFixed() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
    className: _styles_components_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layoutRodapeFixed,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "\xA9 Todos os direitos reservados."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/contexts/SearchContext.tsx":
/*!****************************************!*\
  !*** ./src/contexts/SearchContext.tsx ***!
  \****************************************/
/*! exports provided: SearchContext, SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContext", function() { return SearchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Gustavo\\Documents\\ws-ionic\\next-book-search\\src\\contexts\\SearchContext.tsx";

const SearchContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function SearchProvider({
  children
}) {
  const {
    0: bookName,
    1: setBookName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");

  function setName(name) {
    setBookName(name);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SearchContext.Provider, {
    value: {
      bookName,
      setName
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SearchContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SearchContext */ "./src/contexts/SearchContext.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_FooterFixed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FooterFixed */ "./src/components/FooterFixed.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\Gustavo\\Documents\\ws-ionic\\next-book-search\\src\\pages\\index.tsx";






function Home() {
  const {
    setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_contexts_SearchContext__WEBPACK_IMPORTED_MODULE_3__["SearchContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  const searchBook = event => {
    event.preventDefault(); // não redirecione a página

    setName(event.target.buscar.value);
    router.push('/resultados');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.layoutChamada,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chamada,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chamada__titulo,
            children: "PROJETO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.chamada__subtitulo,
            children: "BOOK SEARCH"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
              onSubmit: searchBook,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputText,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "text",
                  name: "buscar",
                  id: "buscar",
                  className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputPrincipal,
                  placeholder: "Buscar..."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputSubmit,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                  type: "submit",
                  value: "PROCURAR",
                  className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.botaoPrincipal
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FooterFixed__WEBPACK_IMPORTED_MODULE_5__["FooterFixed"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/styles/components/Footer.module.css":
/*!*************************************************!*\
  !*** ./src/styles/components/Footer.module.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layoutRodape": "Footer_layoutRodape__33jOd",
	"layoutRodapeFixed": "Footer_layoutRodapeFixed__3pxas"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"layoutChamada": "Home_layoutChamada__37Mg8",
	"chamada": "Home_chamada__3P0vO",
	"chamada__titulo": "Home_chamada__titulo__35Edv",
	"chamada__subtitulo": "Home_chamada__subtitulo__25ga8",
	"input": "Home_input__3PByw",
	"inputText": "Home_inputText__12g7M",
	"inputSubmit": "Home_inputSubmit__2sYbS",
	"inputPrincipal": "Home_inputPrincipal__1imb9",
	"botaoPrincipal": "Home_botaoPrincipal__35N9b"
};


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-bootstrap/Container":
/*!********************************************!*\
  !*** external "react-bootstrap/Container" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyRml4ZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9TZWFyY2hDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkZvb3RlckZpeGVkIiwic3R5bGVzIiwibGF5b3V0Um9kYXBlRml4ZWQiLCJTZWFyY2hDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlNlYXJjaFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJib29rTmFtZSIsInNldEJvb2tOYW1lIiwidXNlU3RhdGUiLCJzZXROYW1lIiwibmFtZSIsIkhvbWUiLCJ1c2VDb250ZXh0Iiwicm91dGVyIiwidXNlUm91dGVyIiwic2VhcmNoQm9vayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJidXNjYXIiLCJ2YWx1ZSIsInB1c2giLCJsYXlvdXRDaGFtYWRhIiwiY2hhbWFkYSIsImNoYW1hZGFfX3RpdHVsbyIsImNoYW1hZGFfX3N1YnRpdHVsbyIsImlucHV0IiwiaW5wdXRUZXh0IiwiaW5wdXRQcmluY2lwYWwiLCJpbnB1dFN1Ym1pdCIsImJvdGFvUHJp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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9jb21wb25lbnRzL0Zvb3Rlci5tb2R1bGUuY3NzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGb290ZXJGaXhlZCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5sYXlvdXRSb2RhcGVGaXhlZH0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8cD4mY29weTsgVG9kb3Mgb3MgZGlyZWl0b3MgcmVzZXJ2YWRvcy48L3A+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgU2VhcmNoQ29udGV4dERhdGEge1xyXG4gICAgYm9va05hbWU6IHN0cmluZztcclxuICAgIHNldE5hbWU6IChuYW1lIDogc3RyaW5nKSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU2VhcmNoUHJvdmlkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VhcmNoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2VhcmNoQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogU2VhcmNoUHJvdmlkZXJQcm9wcykge1xyXG4gICAgY29uc3QgW2Jvb2tOYW1lLCBzZXRCb29rTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzZXROYW1lKG5hbWUgOiBzdHJpbmcpe1xyXG4gICAgICAgIHNldEJvb2tOYW1lKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlYXJjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tib29rTmFtZSwgc2V0TmFtZX19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TZWFyY2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7Q29udGFpbmVyLCBSb3csIENvbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgU2VhcmNoQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL1NlYXJjaENvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvb3RlckZpeGVkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXJGaXhlZCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBzZXROYW1lIH0gPSB1c2VDb250ZXh0KFNlYXJjaENvbnRleHQpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHNlYXJjaEJvb2sgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKSAvLyBuw6NvIHJlZGlyZWNpb25lIGEgcMOhZ2luYVxuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LmJ1c2Nhci52YWx1ZSk7XG4gICAgcm91dGVyLnB1c2goJy9yZXN1bHRhZG9zJyk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMubGF5b3V0Q2hhbWFkYX0+XG4gICAgICAgIDxDb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoYW1hZGF9PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmNoYW1hZGFfX3RpdHVsb30+UFJPSkVUTzwvaDE+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2hhbWFkYV9fc3VidGl0dWxvfT5CT09LIFNFQVJDSDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZWFyY2hCb29rfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0VGV4dH0+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiYnVzY2FyXCIgaWQ9XCJidXNjYXJcIiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFByaW5jaXBhbH0gcGxhY2Vob2xkZXI9XCJCdXNjYXIuLi5cIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFN1Ym1pdH0+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiUFJPQ1VSQVJcIiBjbGFzc05hbWU9e3N0eWxlcy5ib3Rhb1ByaW5jaXBhbH0gLz4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEZvb3RlckZpeGVkIC8+XG4gICAgPC8+XG4gIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxheW91dFJvZGFwZVwiOiBcIkZvb3Rlcl9sYXlvdXRSb2RhcGVfXzMzak9kXCIsXG5cdFwibGF5b3V0Um9kYXBlRml4ZWRcIjogXCJGb290ZXJfbGF5b3V0Um9kYXBlRml4ZWRfXzNweGFzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsYXlvdXRDaGFtYWRhXCI6IFwiSG9tZV9sYXlvdXRDaGFtYWRhX18zN01nOFwiLFxuXHRcImNoYW1hZGFcIjogXCJIb21lX2NoYW1hZGFfXzNQMHZPXCIsXG5cdFwiY2hhbWFkYV9fdGl0dWxvXCI6IFwiSG9tZV9jaGFtYWRhX190aXR1bG9fXzM1RWR2XCIsXG5cdFwiY2hhbWFkYV9fc3VidGl0dWxvXCI6IFwiSG9tZV9jaGFtYWRhX19zdWJ0aXR1bG9fXzI1Z2E4XCIsXG5cdFwiaW5wdXRcIjogXCJIb21lX2lucHV0X18zUEJ5d1wiLFxuXHRcImlucHV0VGV4dFwiOiBcIkhvbWVfaW5wdXRUZXh0X18xMmc3TVwiLFxuXHRcImlucHV0U3VibWl0XCI6IFwiSG9tZV9pbnB1dFN1Ym1pdF9fMnNZYlNcIixcblx0XCJpbnB1dFByaW5jaXBhbFwiOiBcIkhvbWVfaW5wdXRQcmluY2lwYWxfXzFpbWI5XCIsXG5cdFwiYm90YW9QcmluY2lwYWxcIjogXCJIb21lX2JvdGFvUHJpbmNpcGFsX18zNU45YlwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=