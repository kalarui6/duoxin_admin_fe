"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/appProvider.tsx":
/*!*****************************!*\
  !*** ./src/appProvider.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"D:\\\\aProject\\\\qingliao_admin\\\\admin_front\\\\src\\\\appProvider.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\nvar appProvider = function appProvider(_ref) {\n  _s();\n  var props = _ref.props,\n    Store = _ref.Store,\n    comp = _ref.comp;\n  // let store\n  var store = new Store((props === null || props === void 0 ? void 0 : props.store) || {});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // if (store.query?.csr) {\n    store.initData();\n    // }\n  }, []);\n  console.log(222, store);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(mobx_react__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: store,\n    children: comp\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 12\n  }, _this);\n};\n_s(appProvider, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (appProvider);\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwUHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN1QztBQUNIO0FBQUE7QUFXcEMsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLElBQUEsRUFBb0M7RUFBQUMsRUFBQTtFQUFBLElBQS9CQyxLQUFLLEdBQUFGLElBQUEsQ0FBTEUsS0FBSztJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFFQyxJQUFJLEdBQUFKLElBQUEsQ0FBSkksSUFBSTtFQUNwQztFQUNBLElBQU1DLEtBQUssR0FBRyxJQUFJRixLQUFLLENBQUMsQ0FBQUQsS0FBSyxhQUFMQSxLQUFLLHVCQUFMQSxLQUFLLENBQUVHLEtBQUssS0FBSSxDQUFDLENBQUMsQ0FBQztFQUMzQ1YsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1o7SUFDSVUsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQztJQUNwQjtFQUNKLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxFQUFDSCxLQUFLLENBQUM7RUFDdEIsb0JBQU9QLDZEQUFBLENBQUNGLGdEQUFRO0lBQUNTLEtBQUssRUFBRUEsS0FBTTtJQUFBSSxRQUFBLEVBQ3pCTDtFQUFJO0lBQUFNLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNDLENBQUM7QUFDZixDQUFDO0FBQUFiLEVBQUEsQ0FaS0YsV0FBVztBQWNqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwUHJvdmlkZXIudHN4P2NkMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VTdG9yZSBmcm9tIFwiLi9zdG9yZS9CYXNlU3RvcmVcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSBcIm1vYngtcmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHN0b3JlOiBCYXNlU3RvcmU7XHJcbiAgICAgICAgcXVlcnk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgICB9O1xyXG4gICAgU3RvcmU6IEJhc2VTdG9yZTtcclxuICAgIGNvbXA6IFJlYWN0LlJlYWN0RWxlbWVudDtcclxufVxyXG5cclxuY29uc3QgYXBwUHJvdmlkZXIgPSAoe3Byb3BzLCBTdG9yZSwgY29tcH06IFByb3BzKSA9PiB7XHJcbiAgICAvLyBsZXQgc3RvcmVcclxuICAgIGNvbnN0IHN0b3JlID0gbmV3IFN0b3JlKHByb3BzPy5zdG9yZSB8fCB7fSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChzdG9yZS5xdWVyeT8uY3NyKSB7XHJcbiAgICAgICAgICAgIHN0b3JlLmluaXREYXRhKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zb2xlLmxvZygyMjIsc3RvcmUpXHJcbiAgICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAge2NvbXB9XHJcbiAgICA8L1Byb3ZpZGVyPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBQcm92aWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlByb3ZpZGVyIiwianN4REVWIiwiX2pzeERFViIsImFwcFByb3ZpZGVyIiwiX3JlZiIsIl9zIiwicHJvcHMiLCJTdG9yZSIsImNvbXAiLCJzdG9yZSIsImluaXREYXRhIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/appProvider.tsx\n"));

/***/ })

});