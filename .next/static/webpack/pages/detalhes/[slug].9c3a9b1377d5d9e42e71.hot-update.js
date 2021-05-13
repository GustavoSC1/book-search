webpackHotUpdate_N_E("pages/detalhes/[slug]",{

/***/ "./src/pages/detalhes/[slug].tsx":
/*!***************************************!*\
  !*** ./src/pages/detalhes/[slug].tsx ***!
  \***************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookDetail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/pages/Detalhes.module.css */ "./src/styles/pages/Detalhes.module.css");
/* harmony import */ var _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_FooterFixed__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FooterFixed */ "./src/components/FooterFixed.tsx");


var _jsxFileName = "C:\\Users\\Gustavo\\Documents\\ws-ionic\\next-book-search\\src\\pages\\detalhes\\[slug].tsx";



var __N_SSP = true;
function BookDetail(_ref) {
  var _book$volumeInfo$imag, _book$volumeInfo$imag2;

  var book = _ref.book;
  console.log(book);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detailContainer,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bookTitle,
            children: book.volumeInfo.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, this), book.volumeInfo.authors ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bookAutor,
            children: book.volumeInfo.authors.map(function (author) {
              return author + " ";
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 48
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bookAutor,
            children: "Autor n\xE3o informado"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 142
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: (_book$volumeInfo$imag = (_book$volumeInfo$imag2 = book.volumeInfo.imageLinks) === null || _book$volumeInfo$imag2 === void 0 ? void 0 : _book$volumeInfo$imag2.smallThumbnail) !== null && _book$volumeInfo$imag !== void 0 ? _book$volumeInfo$imag : "./no_book_cover.jpg",
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bookImage,
            alt: "Capa do Livro"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, this), book.volumeInfo.description ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: _styles_pages_Detalhes_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bookDetail,
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FooterFixed__WEBPACK_IMPORTED_MODULE_3__["FooterFixed"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}
_c = BookDetail;

var _c;

$RefreshReg$(_c, "BookDetail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2RldGFsaGVzL1tzbHVnXS50c3giXSwibmFtZXMiOlsiQm9va0RldGFpbCIsImJvb2siLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZGV0YWlsQ29udGFpbmVyIiwiYm9va1RpdGxlIiwidm9sdW1lSW5mbyIsInRpdGxlIiwiYXV0aG9ycyIsImJvb2tBdXRvciIsIm1hcCIsImF1dGhvciIsImltYWdlTGlua3MiLCJzbWFsbFRodW1ibmFpbCIsImJvb2tJbWFnZSIsImRlc2NyaXB0aW9uIiwiYm9va0RldGFpbCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTs7QUFNZSxTQUFTQSxVQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQ2hEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw2QkFDSSxxRUFBQyx5REFBRDtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBRUcsd0VBQU0sQ0FBQ0MsZUFBdkI7QUFBQSxrQ0FDSTtBQUFJLHFCQUFTLEVBQUVELHdFQUFNLENBQUNFLFNBQXRCO0FBQUEsc0JBQWtDTCxJQUFJLENBQUNNLFVBQUwsQ0FBZ0JDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFFS1AsSUFBSSxDQUFDTSxVQUFMLENBQWdCRSxPQUFoQixnQkFBMEI7QUFBSSxxQkFBUyxFQUFFTCx3RUFBTSxDQUFDTSxTQUF0QjtBQUFBLHNCQUFrQ1QsSUFBSSxDQUFDTSxVQUFMLENBQWdCRSxPQUFoQixDQUF3QkUsR0FBeEIsQ0FBNEIsVUFBQUMsTUFBTTtBQUFBLHFCQUFLQSxNQUFNLEdBQUMsR0FBWjtBQUFBLGFBQWxDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQTFCLGdCQUF3SDtBQUFJLHFCQUFTLEVBQUVSLHdFQUFNLENBQUNNLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUY3SCxlQUdJO0FBQUssZUFBRyxxREFBRVQsSUFBSSxDQUFDTSxVQUFMLENBQWdCTSxVQUFsQiwyREFBRSx1QkFBNEJDLGNBQTlCLHlFQUFnRCxxQkFBeEQ7QUFBK0UscUJBQVMsRUFBRVYsd0VBQU0sQ0FBQ1csU0FBakc7QUFBNEcsZUFBRyxFQUFDO0FBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEosRUFJS2QsSUFBSSxDQUFDTSxVQUFMLENBQWdCUyxXQUFoQixnQkFBOEI7QUFBRyxxQkFBUyxFQUFFWix3RUFBTSxDQUFDYSxVQUFyQjtBQUFpQyxtQ0FBdUIsRUFBRTtBQUFFQyxvQkFBTSxFQUFDakIsSUFBSSxDQUFDTSxVQUFMLENBQWdCUztBQUF6QjtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUE5QixnQkFBc0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSjNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQSxrQkFERjtBQWVIO0tBakJ1QmhCLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGV0YWxoZXMvW3NsdWddLjljM2E5YjEzNzdkNWQ5ZTQyZTcxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb29rIH0gZnJvbSAnLi4vLi4vdHlwZXMvYm9vayc7XHJcbmltcG9ydCB7IGZldGNoQm9vaywgYXBpIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3BhZ2VzL0RldGFsaGVzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBGb290ZXJGaXhlZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyRml4ZWQnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGJvb2s6IEJvb2s7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvb2tEZXRhaWwoeyBib29rIH06IFByb3BzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhib29rKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuYm9va1RpdGxlfT57Ym9vay52b2x1bWVJbmZvLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jvb2sudm9sdW1lSW5mby5hdXRob3JzID8gPGgyIGNsYXNzTmFtZT17c3R5bGVzLmJvb2tBdXRvcn0+e2Jvb2sudm9sdW1lSW5mby5hdXRob3JzLm1hcChhdXRob3IgPT4gKGF1dGhvcitcIiBcIikpfTwvaDI+IDogPGgyIGNsYXNzTmFtZT17c3R5bGVzLmJvb2tBdXRvcn0+QXV0b3IgbsOjbyBpbmZvcm1hZG88L2gyPn1cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Ym9vay52b2x1bWVJbmZvLmltYWdlTGlua3M/LnNtYWxsVGh1bWJuYWlsID8/IFwiLi9ub19ib29rX2NvdmVyLmpwZ1wifSBjbGFzc05hbWU9e3N0eWxlcy5ib29rSW1hZ2V9IGFsdD1cIkNhcGEgZG8gTGl2cm9cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jvb2sudm9sdW1lSW5mby5kZXNjcmlwdGlvbiA/IDxwIGNsYXNzTmFtZT17c3R5bGVzLmJvb2tEZXRhaWx9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDpib29rLnZvbHVtZUluZm8uZGVzY3JpcHRpb24gfX0+PC9wPjogPHA+RGVzY3Jpw6fDo28gbsOjbyBpbmZvcm1hZGE8L3A+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Rm9vdGVyRml4ZWQgLz5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7ICAgIFxyXG4gICAgY29uc3QgeyBzbHVnIH0gPSBjdHgucGFyYW1zO1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBmZXRjaEJvb2soc2x1Zyk7XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgYm9vazogZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9