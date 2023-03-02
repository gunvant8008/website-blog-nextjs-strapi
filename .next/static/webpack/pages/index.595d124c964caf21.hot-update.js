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

/***/ "./src/components/Tabs.tsx":
/*!*********************************!*\
  !*** ./src/components/Tabs.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Tabs = (param)=>{\n    let { categories , handleOnSearch  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const isActiveLink = (category)=>{\n        return category.attributes.slug === router.query.category;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-between my-8 font-bold text-gray-400 border-b-2 border-gray-100 md:flex-row\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex gap-x-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"border-b-2 rounded-sm mr-0 pb-1 \" + \"\".concat(router.pathname === \"/\" ? \"border-primary text-primary\" : \"border-white text-gray-400\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            children: \"Recent\"\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    categories.map((category)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"border-b-2 rounded-sm mr-0 pb-1 \" + \"\".concat(isActiveLink(category) ? \"border-primary text-primary\" : \"border-white text-gray-400\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/category/\".concat(category.attributes.slug),\n                                children: category.attributes.Title\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 15\n                            }, undefined)\n                        }, category.id, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-x-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search\",\n                        className: \"w-full px-2 py-1 ml-1 outline-dashed outline-1\",\n                        onChange: (e)=>handleOnSearch(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        width: \"25px\",\n                        height: \"25px\",\n                        viewBox: \"0 0 24 24\",\n                        fill: \"none\",\n                        xmlns: \"http://www.w3.org/2000/svg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                opacity: \"0.1\",\n                                d: \"M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z\",\n                                fill: \"#323232\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M17 17L21 21\",\n                                stroke: \"#323232\",\n                                strokeWidth: \"2\",\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                d: \"M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z\",\n                                stroke: \"#323232\",\n                                strokeWidth: \"2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/Tabs.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Tabs, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Tabs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tabs);\nvar _c;\n$RefreshReg$(_c, \"Tabs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UYWJzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM0QjtBQUNXO0FBQ2Q7QUFRekIsTUFBTUcsT0FBTyxTQUErQztRQUE5QyxFQUFFQyxXQUFVLEVBQUVDLGVBQWMsRUFBYTs7SUFDckQsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLE1BQU1NLGVBQWUsQ0FBQ0MsV0FBd0I7UUFDNUMsT0FBT0EsU0FBU0MsVUFBVSxDQUFDQyxJQUFJLEtBQUtKLE9BQU9LLEtBQUssQ0FBQ0gsUUFBUTtJQUMzRDtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7O2tDQUNaLDhEQUFDRTt3QkFDQ0YsV0FDRSxxQ0FDQSxHQUlDLE9BSENQLE9BQU9VLFFBQVEsS0FBSyxNQUNoQixnQ0FDQSw0QkFBNEI7a0NBSXBDLDRFQUFDaEIsa0RBQUlBOzRCQUFDaUIsTUFBSztzQ0FBSTs7Ozs7Ozs7Ozs7b0JBRWhCYixXQUFXYyxHQUFHLENBQUNWLENBQUFBLFdBQVk7d0JBQzFCLHFCQUNFLDhEQUFDTzs0QkFFQ0YsV0FDRSxxQ0FDQSxHQUlDLE9BSENOLGFBQWFDLFlBQ1QsZ0NBQ0EsNEJBQTRCO3NDQUlwQyw0RUFBQ1Isa0RBQUlBO2dDQUFDaUIsTUFBTSxhQUFzQyxPQUF6QlQsU0FBU0MsVUFBVSxDQUFDQyxJQUFJOzBDQUM5Q0YsU0FBU0MsVUFBVSxDQUFDVSxLQUFLOzs7Ozs7MkJBWHZCWCxTQUFTWSxFQUFFOzs7OztvQkFldEI7Ozs7Ozs7MEJBRUYsOERBQUNSO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1E7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pWLFdBQVU7d0JBQ1ZXLFVBQVVDLENBQUFBLElBQUtwQixlQUFlb0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7a0NBRTlDLDhEQUFDQzt3QkFDQ0MsT0FBTTt3QkFDTkMsUUFBTzt3QkFDUEMsU0FBUTt3QkFDUkMsTUFBSzt3QkFDTEMsT0FBTTs7MENBRU4sOERBQUNDO2dDQUNDQyxTQUFRO2dDQUNSQyxHQUFFO2dDQUNGSixNQUFLOzs7Ozs7MENBRVAsOERBQUNFO2dDQUNDRSxHQUFFO2dDQUNGQyxRQUFPO2dDQUNQQyxhQUFZO2dDQUNaQyxlQUFjO2dDQUNkQyxnQkFBZTs7Ozs7OzBDQUVqQiw4REFBQ047Z0NBQ0NFLEdBQUU7Z0NBQ0ZDLFFBQU87Z0NBQ1BDLGFBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QjtHQTdFTW5DOztRQUNXRixrREFBU0E7OztLQURwQkU7QUErRU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGFicy50c3g/MGYzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJQ2F0ZWdvcnkgfSBmcm9tIFwiQC90eXBlc1wiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBzZWFyY2hTdmcgZnJvbSBcInB1YmxpYy9zZWFyY2guc3ZnXCJcblxuaW50ZXJmYWNlIElQcm9wVHlwZSB7XG4gIGNhdGVnb3JpZXM6IElDYXRlZ29yeVtdXG4gIGhhbmRsZU9uU2VhcmNoOiAocXVlcnk6IHN0cmluZykgPT4gdm9pZFxufVxuXG5jb25zdCBUYWJzID0gKHsgY2F0ZWdvcmllcywgaGFuZGxlT25TZWFyY2ggfTogSVByb3BUeXBlKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaXNBY3RpdmVMaW5rID0gKGNhdGVnb3J5OiBJQ2F0ZWdvcnkpID0+IHtcbiAgICByZXR1cm4gY2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnID09PSByb3V0ZXIucXVlcnkuY2F0ZWdvcnlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXktOCBmb250LWJvbGQgdGV4dC1ncmF5LTQwMCBib3JkZXItYi0yIGJvcmRlci1ncmF5LTEwMCBtZDpmbGV4LXJvd1wiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtNVwiPlxuICAgICAgICA8bGlcbiAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgYGJvcmRlci1iLTIgcm91bmRlZC1zbSBtci0wIHBiLTEgYCArXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9cIlxuICAgICAgICAgICAgICAgID8gXCJib3JkZXItcHJpbWFyeSB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICB9YFxuICAgICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+UmVjZW50PC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeS5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICBgYm9yZGVyLWItMiByb3VuZGVkLXNtIG1yLTAgcGItMSBgICtcbiAgICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICAgIGlzQWN0aXZlTGluayhjYXRlZ29yeSlcbiAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1wcmltYXJ5IHRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItd2hpdGUgdGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgfWBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NhdGVnb3J5LyR7Y2F0ZWdvcnkuYXR0cmlidXRlcy5zbHVnfWB9PlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeS5hdHRyaWJ1dGVzLlRpdGxlfVxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTIgcHktMSBtbC0xIG91dGxpbmUtZGFzaGVkIG91dGxpbmUtMVwiXG4gICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25TZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAvPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCIyNXB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCIyNXB4XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgb3BhY2l0eT1cIjAuMVwiXG4gICAgICAgICAgICBkPVwiTTE5IDExQzE5IDE1LjQxODMgMTUuNDE4MyAxOSAxMSAxOUM2LjU4MTcyIDE5IDMgMTUuNDE4MyAzIDExQzMgNi41ODE3MiA2LjU4MTcyIDMgMTEgM0MxNS40MTgzIDMgMTkgNi41ODE3MiAxOSAxMVpcIlxuICAgICAgICAgICAgZmlsbD1cIiMzMjMyMzJcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTcgMTdMMjEgMjFcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiIzMyMzIzMlwiXG4gICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMTkgMTFDMTkgMTUuNDE4MyAxNS40MTgzIDE5IDExIDE5QzYuNTgxNzIgMTkgMyAxNS40MTgzIDMgMTFDMyA2LjU4MTcyIDYuNTgxNzIgMyAxMSAzQzE1LjQxODMgMyAxOSA2LjU4MTcyIDE5IDExWlwiXG4gICAgICAgICAgICBzdHJva2U9XCIjMzIzMjMyXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJzXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVJvdXRlciIsIlJlYWN0IiwiVGFicyIsImNhdGVnb3JpZXMiLCJoYW5kbGVPblNlYXJjaCIsInJvdXRlciIsImlzQWN0aXZlTGluayIsImNhdGVnb3J5IiwiYXR0cmlidXRlcyIsInNsdWciLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJwYXRobmFtZSIsImhyZWYiLCJtYXAiLCJUaXRsZSIsImlkIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJvcGFjaXR5IiwiZCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Tabs.tsx\n"));

/***/ })

});