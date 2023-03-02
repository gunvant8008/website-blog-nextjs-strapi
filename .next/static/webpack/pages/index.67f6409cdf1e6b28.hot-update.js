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

/***/ "./src/components/BlogCard.tsx":
/*!*************************************!*\
  !*** ./src/components/BlogCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst BlogCard = (param)=>{\n    let { article  } = param;\n    var _article_attributes_createdBy, _article_attributes_createdBy_data, _article_attributes_createdBy1, _article_attributes_createdBy_data1;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-5 bg-gray-100 shadow-sm\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/article/\".concat(article.attributes.Slug),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-xl font-bold text-gray-600 hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary\",\n                    children: article.attributes.Title\n                }, void 0, false, {\n                    fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mr-2 font-bold text-gray-600\",\n                                children: [\n                                    \"By: \",\n                                    (_article_attributes_createdBy = article.attributes.createdBy) === null || _article_attributes_createdBy === void 0 ? void 0 : (_article_attributes_createdBy_data = _article_attributes_createdBy.data) === null || _article_attributes_createdBy_data === void 0 ? void 0 : _article_attributes_createdBy_data.attributes.firstname,\n                                    \" \",\n                                    (_article_attributes_createdBy1 = article.attributes.createdBy) === null || _article_attributes_createdBy1 === void 0 ? void 0 : (_article_attributes_createdBy_data1 = _article_attributes_createdBy1.data) === null || _article_attributes_createdBy_data1 === void 0 ? void 0 : _article_attributes_createdBy_data1.attributes.lastname,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-400\",\n                            children: (0,_utils__WEBPACK_IMPORTED_MODULE_1__.formatDate)(article.attributes.createdAt)\n                        }, void 0, false, {\n                            fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        article.attributes.Body.substring(0, 200),\n                        \" \",\n                        article.attributes.Body.length > 200 ? \"...\" : \"\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/gunvantsharma/Desktop/feb2023/07-blog-next-ts-tcss-strapi/frontend/src/components/BlogCard.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_c = BlogCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogCard);\nvar _c;\n$RefreshReg$(_c, \"BlogCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ29DO0FBRVI7QUFDSDtBQUl6QixNQUFNRyxXQUFXLFNBQTRCO1FBQTNCLEVBQUVDLFFBQU8sRUFBYTtRQVVyQkEsbUVBQ0pBO0lBVmIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNMLGtEQUFJQTtZQUFDTSxNQUFNLFlBQW9DLE9BQXhCSCxRQUFRSSxVQUFVLENBQUNDLElBQUk7OzhCQUM3Qyw4REFBQ0M7b0JBQUdKLFdBQVU7OEJBQ1hGLFFBQVFJLFVBQVUsQ0FBQ0csS0FBSzs7Ozs7OzhCQUUzQiw4REFBQ047b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDtzQ0FDQyw0RUFBQ087Z0NBQUVOLFdBQVU7O29DQUErQjtvQ0FDckNGLENBQUFBLGdDQUFBQSxRQUFRSSxVQUFVLENBQUNLLFNBQVMsY0FBNUJULDJDQUFBQSxLQUFBQSxJQUFBQSxzQ0FBQUEsOEJBQThCVSxrRUFBOUJWLEtBQUFBLElBQUFBLG1DQUFvQ0ksV0FBV08sU0FBUztvQ0FBRTtvQ0FDOURYLENBQUFBLGlDQUFBQSxRQUFRSSxVQUFVLENBQUNLLFNBQVMsY0FBNUJULDRDQUFBQSxLQUFBQSxJQUFBQSx1Q0FBQUEsK0JBQThCVSxtRUFBOUJWLEtBQUFBLElBQUFBLG9DQUFvQ0ksV0FBV1EsUUFBUTtvQ0FBRTs7Ozs7Ozs7Ozs7O3NDQUc5RCw4REFBQ0M7NEJBQUtYLFdBQVU7c0NBQ2JOLGtEQUFVQSxDQUFDSSxRQUFRSSxVQUFVLENBQUNVLFNBQVM7Ozs7Ozs7Ozs7Ozs4QkFHNUMsOERBQUNiOzt3QkFDRUQsUUFBUUksVUFBVSxDQUFDVyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxHQUFHO3dCQUFNO3dCQUMzQ2hCLFFBQVFJLFVBQVUsQ0FBQ1csSUFBSSxDQUFDRSxNQUFNLEdBQUcsTUFBTSxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1RDtLQXpCTWxCO0FBMkJOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jsb2dDYXJkLnRzeD9iOTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElBcnRpY2xlIH0gZnJvbSBcIkAvdHlwZXNcIlxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJAL3V0aWxzXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW50ZXJmYWNlIElQcm9wVHlwZSB7XG4gIGFydGljbGU6IElBcnRpY2xlXG59XG5jb25zdCBCbG9nQ2FyZCA9ICh7IGFydGljbGUgfTogSVByb3BUeXBlKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTUgYmctZ3JheS0xMDAgc2hhZG93LXNtXCI+XG4gICAgICA8TGluayBocmVmPXtgL2FydGljbGUvJHthcnRpY2xlLmF0dHJpYnV0ZXMuU2x1Z31gfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtZ3JheS02MDAgaG92ZXI6ZGVjb3JhdGlvbi0yIGhvdmVyOnVuZGVybGluZSBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpkZWNvcmF0aW9uLXByaW1hcnlcIj5cbiAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLlRpdGxlfVxuICAgICAgICA8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMiBmb250LWJvbGQgdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICBCeToge2FydGljbGUuYXR0cmlidXRlcy5jcmVhdGVkQnk/LmRhdGE/LmF0dHJpYnV0ZXMuZmlyc3RuYW1lfXtcIiBcIn1cbiAgICAgICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5jcmVhdGVkQnk/LmRhdGE/LmF0dHJpYnV0ZXMubGFzdG5hbWV9e1wiIFwifVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgIHtmb3JtYXREYXRlKGFydGljbGUuYXR0cmlidXRlcy5jcmVhdGVkQXQpfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge2FydGljbGUuYXR0cmlidXRlcy5Cb2R5LnN1YnN0cmluZygwLCAyMDApfXtcIiBcIn1cbiAgICAgICAgICB7YXJ0aWNsZS5hdHRyaWJ1dGVzLkJvZHkubGVuZ3RoID4gMjAwID8gXCIuLi5cIiA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dDYXJkXG4iXSwibmFtZXMiOlsiZm9ybWF0RGF0ZSIsIkxpbmsiLCJSZWFjdCIsIkJsb2dDYXJkIiwiYXJ0aWNsZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJhdHRyaWJ1dGVzIiwiU2x1ZyIsImgxIiwiVGl0bGUiLCJwIiwiY3JlYXRlZEJ5IiwiZGF0YSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwic3BhbiIsImNyZWF0ZWRBdCIsIkJvZHkiLCJzdWJzdHJpbmciLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/BlogCard.tsx\n"));

/***/ })

});