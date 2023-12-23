"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/web",{

/***/ "./pages/search/web/index.jsx":
/*!************************************!*\
  !*** ./pages/search/web/index.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_searchPageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/searchPageComponent */ \"./components/searchPageComponent.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst WebPage = ()=>{\n    _s();\n    const { query } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getResults() {\n            try {\n                const response = await fetch(\"https://www.googleapis.com/customsearch/v1?key=\".concat(\"AIzaSyBruRmbiNABuDCSDtwgK4I_wRY5CbzgOqI\", \"&cx=\").concat(\"b1a3d87f2c6e64947\", \"&q=\").concat(query.searchTerm));\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setResults(data.items);\n                console.log(data);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error.message);\n            }\n        }\n        if (query.searchTerm) {\n            getResults();\n        }\n    }, [\n        query.searchTerm\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchPageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: results === null || results === void 0 ? void 0 : results.map((result)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1clas\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 18\n                    }, undefined);\n                    {\n                        result.title;\n                    }\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WebPage, \"2B45iqWJ9IPDoaQzCjQfC4gNB6Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = WebPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebPage);\nvar _c;\n$RefreshReg$(_c, \"WebPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvd2ViL2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMkM7QUFDOEI7QUFDbEM7QUFFdkMsTUFBTUksVUFBVTs7SUFDZCxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRixzREFBU0E7SUFDM0IsTUFBTSxDQUFDRyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDekNELGdEQUFTQSxDQUFDO1FBQ1IsZUFBZVE7WUFDYixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsa0RBQTJGQyxPQUF6Q0EseUNBQWtDLEVBQUMsUUFBK0NOLE9BQXpDTSxtQkFBbUMsRUFBQyxPQUFzQixPQUFqQk4sTUFBTVUsVUFBVTtnQkFHdEosSUFBSSxDQUFDTixTQUFTTyxFQUFFLEVBQUU7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSx1QkFBdUMsT0FBaEJSLFNBQVNTLE1BQU07Z0JBQ3hEO2dCQUVBLE1BQU1DLE9BQU8sTUFBTVYsU0FBU1csSUFBSTtnQkFDaENiLFdBQVdZLEtBQUtFLEtBQUs7Z0JBQ3JCQyxRQUFRQyxHQUFHLENBQUNKO1lBQ2QsRUFBRSxPQUFPSyxPQUFPO2dCQUNkRixRQUFRRSxLQUFLLENBQUMsa0NBQWtDQSxNQUFNQyxPQUFPO1lBQy9EO1FBQ0Y7UUFFQSxJQUFJcEIsTUFBTVUsVUFBVSxFQUFFO1lBQ3BCUDtRQUNGO0lBQ0YsR0FBRztRQUFDSCxNQUFNVSxVQUFVO0tBQUM7SUFFckIscUJBQ0U7OzBCQUNFLDhEQUFDYix1RUFBbUJBOzs7OzswQkFDcEIsOERBQUN3QjswQkFFRXBCLG9CQUFBQSw4QkFBQUEsUUFBU3FCLEdBQUcsQ0FBQyxDQUFDQztvQkFDYixxQkFBTyw4REFBQ0M7Ozs7O29CQUNSO3dCQUNFRCxPQUFPRSxLQUFLO29CQUNkO2dCQUNGOzs7Ozs7OztBQUlSO0dBekNNMUI7O1FBQ2NELGtEQUFTQTs7O0tBRHZCQztBQTJDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gvd2ViL2luZGV4LmpzeD81MGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgU2VhcmNoUGFnZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zZWFyY2hQYWdlQ29tcG9uZW50XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuXHJcbmNvbnN0IFdlYlBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UmVzdWx0cygpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2N1c3RvbXNlYXJjaC92MT9rZXk9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfS0VZfSZjeD0ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFWFRfS0VZfSZxPSR7cXVlcnkuc2VhcmNoVGVybX1gXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgICAgICBzZXRSZXN1bHRzKGRhdGEuaXRlbXMpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2VhcmNoIHJlc3VsdHM6XCIsIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocXVlcnkuc2VhcmNoVGVybSkge1xyXG4gICAgICBnZXRSZXN1bHRzKClcclxuICAgIH1cclxuICB9LCBbcXVlcnkuc2VhcmNoVGVybV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8U2VhcmNoUGFnZUNvbXBvbmVudCAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICBcclxuICAgICAgICB7cmVzdWx0cz8ubWFwKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8aDFjbGFzPjwvaDFjbGFzPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXN1bHQudGl0bGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWJQYWdlXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaFBhZ2VDb21wb25lbnQiLCJ1c2VSb3V0ZXIiLCJXZWJQYWdlIiwicXVlcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsImdldFJlc3VsdHMiLCJyZXNwb25zZSIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0dPT0dMRV9LRVkiLCJORVhUX1BVQkxJQ19DT05URVhUX0tFWSIsInNlYXJjaFRlcm0iLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJpdGVtcyIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1lc3NhZ2UiLCJtYWluIiwibWFwIiwicmVzdWx0IiwiaDFjbGFzIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search/web/index.jsx\n"));

/***/ })

});