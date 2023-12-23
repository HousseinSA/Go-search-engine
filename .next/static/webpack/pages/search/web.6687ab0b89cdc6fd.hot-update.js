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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_searchPageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/searchPageComponent */ \"./components/searchPageComponent.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst WebPage = ()=>{\n    _s();\n    const { query } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [results, setResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getResults() {\n            try {\n                const response = await fetch(\"https://www.googleapis.com/customsearch/v1?key=\".concat(\"AIzaSyBruRmbiNABuDCSDtwgK4I_wRY5CbzgOqI\", \"&cx=\").concat(\"b1a3d87f2c6e64947\", \"&q=\").concat(query.searchTerm));\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setResults(data.items);\n                console.log(data);\n            } catch (error) {\n                console.error(\"Error fetching search results:\", error.message);\n            }\n        }\n        if (query.searchTerm) {\n            getResults();\n        }\n    }, [\n        query.searchTerm\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_searchPageComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-col p-4\",\n                children: results === null || results === void 0 ? void 0 : results.map((result, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            href: result === null || result === void 0 ? void 0 : result.link,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: result === null || result === void 0 ? void 0 : result.title\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: result === null || result === void 0 ? void 0 : result.snippet\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nejih\\\\Downloads\\\\Work-Education\\\\Frontend\\\\NextJS Projects\\\\Google Search\\\\pages\\\\search\\\\web\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(WebPage, \"2B45iqWJ9IPDoaQzCjQfC4gNB6Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = WebPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebPage);\nvar _c;\n$RefreshReg$(_c, \"WebPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2gvd2ViL2luZGV4LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUM4QjtBQUNsQztBQUNYO0FBRTVCLE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0gsc0RBQVNBO0lBQzNCLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDRCxnREFBU0EsQ0FBQztRQUNSLGVBQWVTO1lBQ2IsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLGtEQUEyRkMsT0FBekNBLHlDQUFrQyxFQUFDLFFBQStDTixPQUF6Q00sbUJBQW1DLEVBQUMsT0FBc0IsT0FBakJOLE1BQU1VLFVBQVU7Z0JBR3RKLElBQUksQ0FBQ04sU0FBU08sRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU0sdUJBQXVDLE9BQWhCUixTQUFTUyxNQUFNO2dCQUN4RDtnQkFFQSxNQUFNQyxPQUFPLE1BQU1WLFNBQVNXLElBQUk7Z0JBQ2hDYixXQUFXWSxLQUFLRSxLQUFLO2dCQUNyQkMsUUFBUUMsR0FBRyxDQUFDSjtZQUNkLEVBQUUsT0FBT0ssT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLGtDQUFrQ0EsTUFBTUMsT0FBTztZQUMvRDtRQUNGO1FBRUEsSUFBSXBCLE1BQU1VLFVBQVUsRUFBRTtZQUNwQlA7UUFDRjtJQUNGLEdBQUc7UUFBQ0gsTUFBTVUsVUFBVTtLQUFDO0lBRXJCLHFCQUNFOzswQkFDRSw4REFBQ2QsdUVBQW1CQTs7Ozs7MEJBQ3BCLDhEQUFDeUI7Z0JBQUtDLFdBQVU7MEJBQ2JyQixvQkFBQUEsOEJBQUFBLFFBQVNzQixHQUFHLENBQUMsQ0FBQ0MsUUFBUUM7b0JBQ3JCLHFCQUNFLDhEQUFDQzt3QkFBZ0JKLFdBQVU7a0NBQ3pCLDRFQUFDeEIsa0RBQUlBOzRCQUFDNkIsSUFBSSxFQUFFSCxtQkFBQUEsNkJBQUFBLE9BQVFJLElBQUk7OzhDQUN0Qiw4REFBQ0M7OENBQUlMLG1CQUFBQSw2QkFBQUEsT0FBUU0sS0FBSzs7Ozs7OzhDQUNsQiw4REFBQ0M7OENBQU1QLG1CQUFBQSw2QkFBQUEsT0FBUVEsT0FBTzs7Ozs7Ozs7Ozs7O3VCQUhoQlA7Ozs7O2dCQU9kOzs7Ozs7OztBQUlSO0dBNUNNMUI7O1FBQ2NGLGtEQUFTQTs7O0tBRHZCRTtBQThDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2gvd2ViL2luZGV4LmpzeD81MGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgU2VhcmNoUGFnZUNvbXBvbmVudCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9zZWFyY2hQYWdlQ29tcG9uZW50XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5jb25zdCBXZWJQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFJlc3VsdHMoKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jdXN0b21zZWFyY2gvdjE/a2V5PSR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0tFWX0mY3g9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URVhUX0tFWX0mcT0ke3F1ZXJ5LnNlYXJjaFRlcm19YFxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgc2V0UmVzdWx0cyhkYXRhLml0ZW1zKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNlYXJjaCByZXN1bHRzOlwiLCBlcnJvci5tZXNzYWdlKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHF1ZXJ5LnNlYXJjaFRlcm0pIHtcclxuICAgICAgZ2V0UmVzdWx0cygpXHJcbiAgICB9XHJcbiAgfSwgW3F1ZXJ5LnNlYXJjaFRlcm1dKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFNlYXJjaFBhZ2VDb21wb25lbnQgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTRcIj5cclxuICAgICAgICB7cmVzdWx0cz8ubWFwKChyZXN1bHQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cmVzdWx0Py5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxoMT57cmVzdWx0Py50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3Jlc3VsdD8uc25pcHBldH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWJQYWdlXHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNlYXJjaFBhZ2VDb21wb25lbnQiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiV2ViUGFnZSIsInF1ZXJ5IiwicmVzdWx0cyIsInNldFJlc3VsdHMiLCJnZXRSZXN1bHRzIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfS0VZIiwiTkVYVF9QVUJMSUNfQ09OVEVYVF9LRVkiLCJzZWFyY2hUZXJtIiwib2siLCJFcnJvciIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJtZXNzYWdlIiwibWFpbiIsImNsYXNzTmFtZSIsIm1hcCIsInJlc3VsdCIsImluZGV4IiwiZGl2IiwiaHJlZiIsImxpbmsiLCJoMSIsInRpdGxlIiwic3BhbiIsInNuaXBwZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search/web/index.jsx\n"));

/***/ })

});