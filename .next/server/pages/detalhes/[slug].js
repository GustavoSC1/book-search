module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/detalhes/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/*! exports provided: fetchProducts, fetchBooks, fetchBook, api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProducts", function() { return fetchProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBooks", function() { return fetchBooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBook", function() { return fetchBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = 'https://www.googleapis.com/books/v1';
const API_KEY = "AIzaSyA75O0rJPfEgWUyyAsAjLVrSytWKwMG36U";
const API_URL2 = 'https://dsdeliver-gustavo.herokuapp.com';
function fetchProducts() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()(`${API_URL2}/products`);
}
function fetchBooks(bookName) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()(`${API_URL}/volumes?q=${bookName}&orderBy=relevance&printType=books&maxResults=15&key=${API_KEY}`);
}
function fetchBook(bookId) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default()(`${API_URL}/volumes/${bookId}`);
}
const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://www.googleapis.com/books/v1'
});

/***/ }),

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

/***/ "./src/pages/detalhes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/detalhes/[slug].tsx ***!
  \***************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/pages/Detalhes.module.css */ "./src/styles/pages/Detalhes.module.css");
/* harmony import */ var _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_FooterFixed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FooterFixed */ "./src/components/FooterFixed.tsx");


var _jsxFileName = "C:\\Users\\Gustavo\\Documents\\ws-ionic\\next-book-search\\src\\pages\\detalhes\\[slug].tsx";




function BookDetail({
  book
}) {
  var _book$volumeInfo$imag, _book$volumeInfo$imag2;

  console.log(book);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.detailContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bookTitle,
            children: book.volumeInfo.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, this), book.volumeInfo.authors ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bookAutor,
            children: book.volumeInfo.authors.map(author => author + " ")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 48
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bookAutor,
            children: "Autor n\xE3o informado"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 142
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: (_book$volumeInfo$imag = (_book$volumeInfo$imag2 = book.volumeInfo.imageLinks) === null || _book$volumeInfo$imag2 === void 0 ? void 0 : _book$volumeInfo$imag2.smallThumbnail) !== null && _book$volumeInfo$imag !== void 0 ? _book$volumeInfo$imag : "./no_book_cover.jpg",
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bookImage,
            alt: "Capa do Livro"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, this), book.volumeInfo.description ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bookDetail,
            dangerouslySetInnerHTML: {
              __html: book.volumeInfo.description
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 52
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Descri\xE7\xE3o n\xE3o informada"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 156
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FooterFixed__WEBPACK_IMPORTED_MODULE_4__["FooterFixed"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
async function getServerSideProps(ctx) {
  const {
    slug
  } = ctx.params;
  const {
    data
  } = await Object(_api_api__WEBPACK_IMPORTED_MODULE_1__["fetchBook"])(slug);
  return {
    props: {
      book: data
    }
  };
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

/***/ "./src/styles/pages/Detalhes.module.css":
/*!**********************************************!*\
  !*** ./src/styles/pages/Detalhes.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"detailContainer": "Detalhes_detailContainer__R3FTW",
	"bookTitle": "Detalhes_bookTitle__2GkwE",
	"bookImage": "Detalhes_bookImage__1fpqm",
	"bookAutor": "Detalhes_bookAutor__1uRWn",
	"bookDetail": "Detalhes_bookDetail__3eHvR"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyRml4ZWQudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kZXRhbGhlcy9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0RldGFsaGVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQVBJX1VSTCIsIkFQSV9LRVkiLCJBUElfVVJMMiIsImZldGNoUHJvZHVjdHMiLCJheGlvcyIsImZldGNoQm9va3MiLCJib29rTmFtZSIsImZldGNoQm9vayIsImJvb2tJZCIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJGb290ZXJGaXhlZCIsInN0eWxlcyIsImxheW91dFJvZGFwZUZpeGVkIiwiQm9va0RldGFpbCIsImJvb2siLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsQ29udGFpbmVyIiwiYm9va1RpdGxlIiwidm9sdW1lSW5mbyIsInRpdGxlIiwiYXV0aG9ycyIsImJvb2tBdXRvciIsIm1hcCIsImF1dGhvciIsImltYWdlTGlua3MiLCJzbWFsbFRodW1ibmFpbCIsImJvb2tJbWFnZSIsImRlc2NyaXB0aW9uIiwiYm9va0RldGFpbCIsIl9faHRtbCIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInNsdWciLCJwYXJhbXMiLCJkYXRhIiwicHJvcHMiXSwibWFw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Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2RldGFsaGVzL1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2RldGFsaGVzL1tzbHVnXS50c3hcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBBUElfVVJMID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxJztcclxuXHJcbmNvbnN0IEFQSV9LRVkgPSBcIkFJemFTeUE3NU8wckpQZkVnV1V5eUFzQWpMVnJTeXRXS3dNRzM2VVwiO1xyXG5cclxuY29uc3QgQVBJX1VSTDIgPSAnaHR0cHM6Ly9kc2RlbGl2ZXItZ3VzdGF2by5oZXJva3VhcHAuY29tJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaFByb2R1Y3RzKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zKGAke0FQSV9VUkwyfS9wcm9kdWN0c2ApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEJvb2tzKGJvb2tOYW1lIDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gYXhpb3MoYCR7QVBJX1VSTH0vdm9sdW1lcz9xPSR7Ym9va05hbWV9Jm9yZGVyQnk9cmVsZXZhbmNlJnByaW50VHlwZT1ib29rcyZtYXhSZXN1bHRzPTE1JmtleT0ke0FQSV9LRVl9YClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoQm9vayhib29rSWQgOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBheGlvcyhgJHtBUElfVVJMfS92b2x1bWVzLyR7Ym9va0lkfWApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jvb2tzL3YxJ1xyXG59KSIsImltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL2NvbXBvbmVudHMvRm9vdGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZvb3RlckZpeGVkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmxheW91dFJvZGFwZUZpeGVkfT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxwPiZjb3B5OyBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zLjwvcD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgQm9vayB9IGZyb20gJy4uLy4uL3R5cGVzL2Jvb2snO1xyXG5pbXBvcnQgeyBmZXRjaEJvb2ssIGFwaSB9IGZyb20gJy4uLy4uL2FwaS9hcGknO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9wYWdlcy9EZXRhbGhlcy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgRm9vdGVyRml4ZWQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3RlckZpeGVkJztcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBib29rOiBCb29rO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rRGV0YWlsKHsgYm9vayB9OiBQcm9wcykge1xyXG4gICAgY29uc29sZS5sb2coYm9vayk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbENvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmJvb2tUaXRsZX0+e2Jvb2sudm9sdW1lSW5mby50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIHtib29rLnZvbHVtZUluZm8uYXV0aG9ycyA/IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ib29rQXV0b3J9Pntib29rLnZvbHVtZUluZm8uYXV0aG9ycy5tYXAoYXV0aG9yID0+IChhdXRob3IrXCIgXCIpKX08L2gyPiA6IDxoMiBjbGFzc05hbWU9e3N0eWxlcy5ib29rQXV0b3J9PkF1dG9yIG7Do28gaW5mb3JtYWRvPC9oMj59XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Jvb2sudm9sdW1lSW5mby5pbWFnZUxpbmtzPy5zbWFsbFRodW1ibmFpbCA/PyBcIi4vbm9fYm9va19jb3Zlci5qcGdcIn0gY2xhc3NOYW1lPXtzdHlsZXMuYm9va0ltYWdlfSBhbHQ9XCJDYXBhIGRvIExpdnJvXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtib29rLnZvbHVtZUluZm8uZGVzY3JpcHRpb24gPyA8cCBjbGFzc05hbWU9e3N0eWxlcy5ib29rRGV0YWlsfSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6Ym9vay52b2x1bWVJbmZvLmRlc2NyaXB0aW9uIH19PjwvcD46IDxwPkRlc2NyacOnw6NvIG7Do28gaW5mb3JtYWRhPC9wPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEZvb3RlckZpeGVkIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkgeyAgICBcclxuICAgIGNvbnN0IHsgc2x1ZyB9ID0gY3R4LnBhcmFtcztcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgZmV0Y2hCb29rKHNsdWcpO1xyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGJvb2s6IGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGF5b3V0Um9kYXBlXCI6IFwiRm9vdGVyX2xheW91dFJvZGFwZV9fMzNqT2RcIixcblx0XCJsYXlvdXRSb2RhcGVGaXhlZFwiOiBcIkZvb3Rlcl9sYXlvdXRSb2RhcGVGaXhlZF9fM3B4YXNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbENvbnRhaW5lclwiOiBcIkRldGFsaGVzX2RldGFpbENvbnRhaW5lcl9fUjNGVFdcIixcblx0XCJib29rVGl0bGVcIjogXCJEZXRhbGhlc19ib29rVGl0bGVfXzJHa3dFXCIsXG5cdFwiYm9va0ltYWdlXCI6IFwiRGV0YWxoZXNfYm9va0ltYWdlX18xZnBxbVwiLFxuXHRcImJvb2tBdXRvclwiOiBcIkRldGFsaGVzX2Jvb2tBdXRvcl9fMXVSV25cIixcblx0XCJib29rRGV0YWlsXCI6IFwiRGV0YWxoZXNfYm9va0RldGFpbF9fM2VIdlJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvQ29udGFpbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9