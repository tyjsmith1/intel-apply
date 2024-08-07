"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/signUpWaitList/formTest.jsx":
/*!****************************************************!*\
  !*** ./src/components/signUpWaitList/formTest.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpFormReact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n////////////////\n// \n// Using Framer?\n// See https://www.framer.com/learn/code-components/ for more info\n//\n////////////////\n\nvar _s = $RefreshSig$();\n\nconst INIT = \"INIT\";\nconst SUBMITTING = \"SUBMITTING\";\nconst ERROR = \"ERROR\";\nconst SUCCESS = \"SUCCESS\";\nconst formStates = [\n    INIT,\n    SUBMITTING,\n    ERROR,\n    SUCCESS\n];\nconst formStyles = {\n    \"id\": \"clzjxovih00h78g8yt7x6iy8y\",\n    \"name\": \"Default\",\n    \"formStyle\": \"inline\",\n    \"placeholderText\": \"you@example.com\",\n    \"formFont\": \"Inter\",\n    \"formFontColor\": \"#000000\",\n    \"formFontSizePx\": 14,\n    \"buttonText\": \"Join Waitlist\",\n    \"buttonFont\": \"Inter\",\n    \"buttonFontColor\": \"#ffffff\",\n    \"buttonColor\": \"#0D9488\",\n    \"buttonFontSizePx\": 14,\n    \"successMessage\": \"Thanks! We'll be in touch!\",\n    \"successFont\": \"Inter\",\n    \"successFontColor\": \"#000000\",\n    \"successFontSizePx\": 14,\n    \"userGroup\": \"Waitlist\"\n};\nconst domain = \"app.loops.so\";\nfunction SignUpFormReact() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(INIT);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const resetForm = ()=>{\n        setEmail(\"\");\n        setFormState(INIT);\n        setErrorMessage(\"\");\n    };\n    /**\n     * Rate limit the number of submissions allowed\n     * @returns {boolean} true if the form has been successfully submitted in the past minute\n     */ const hasRecentSubmission = ()=>{\n        const time = new Date();\n        const timestamp = time.valueOf();\n        const previousTimestamp = localStorage.getItem(\"loops-form-timestamp\");\n        // Indicate if the last sign up was less than a minute ago\n        if (previousTimestamp && Number(previousTimestamp) + 60 * 1000 > timestamp) {\n            setFormState(ERROR);\n            setErrorMessage(\"Too many signups, please try again in a little while\");\n            return true;\n        }\n        localStorage.setItem(\"loops-form-timestamp\", timestamp.toString());\n        return false;\n    };\n    const handleSubmit = (event)=>{\n        // Prevent the default form submission\n        event.preventDefault();\n        // boundary conditions for submission\n        if (formState !== INIT) return;\n        if (!isValidEmail(email)) {\n            setFormState(ERROR);\n            setErrorMessage(\"Please enter a valid email\");\n            return;\n        }\n        if (hasRecentSubmission()) return;\n        setFormState(SUBMITTING);\n        // build body\n        const formBody = \"userGroup=\".concat(encodeURIComponent(formStyles.userGroup), \"&email=\").concat(encodeURIComponent(email), \"&mailingLists=\");\n        // API request to add user to newsletter\n        fetch(\"https://\".concat(domain, \"/api/newsletter-form/\").concat(formStyles.id), {\n            method: \"POST\",\n            body: formBody,\n            headers: {\n                \"Content-Type\": \"application/x-www-form-urlencoded\"\n            }\n        }).then((res)=>[\n                res.ok,\n                res.json(),\n                res\n            ]).then((param)=>{\n            let [ok, dataPromise, res] = param;\n            if (ok) {\n                resetForm();\n                setFormState(SUCCESS);\n            } else {\n                dataPromise.then((data)=>{\n                    setFormState(ERROR);\n                    setErrorMessage(data.message || res.statusText);\n                    localStorage.setItem(\"loops-form-timestamp\", \"\");\n                });\n            }\n            ;\n        }).catch((error)=>{\n            setFormState(ERROR);\n            // check for cloudflare error\n            if (error.message === \"Failed to fetch\") {\n                setErrorMessage(\"Too many signups, please try again in a little while\");\n            } else if (error.message) {\n                setErrorMessage(error.message);\n            }\n            localStorage.setItem(\"loops-form-timestamp\", \"\");\n        });\n    };\n    const isInline = formStyles.formStyle === \"inline\";\n    switch(formState){\n        case SUCCESS:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        fontFamily: \"'\".concat(formStyles.successFont, \"', sans-serif\"),\n                        color: formStyles.successFontColor,\n                        fontSize: \"\".concat(formStyles.successFontSizePx, \"px\")\n                    },\n                    children: formStyles.successMessage\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this);\n        case ERROR:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignUpFormError, {}, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                        lineNumber: 148,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackButton, {}, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                        lineNumber: 149,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true);\n        default:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    style: {\n                        display: \"flex\",\n                        flexDirection: isInline ? \"row\" : \"column\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        width: \"100%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"email\",\n                            placeholder: formStyles.placeholderText,\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            required: true,\n                            style: {\n                                color: formStyles.formFontColor,\n                                fontFamily: \"'\".concat(formStyles.formFont, \"', sans-serif\"),\n                                fontSize: \"\".concat(formStyles.formFontSizePx, \"px\"),\n                                margin: isInline ? \"0px 10px 0px 0px\" : \"0px 0px 10px\",\n                                width: \"100%\",\n                                maxWidth: \"300px\",\n                                minWidth: \"100px\",\n                                background: \"#FFFFFF\",\n                                border: \"1px solid #D1D5DB\",\n                                boxSizing: \"border-box\",\n                                boxShadow: \"rgba(0, 0, 0, 0.05) 0px 1px 2px\",\n                                borderRadius: \"6px\",\n                                padding: \"8px 12px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                            lineNumber: 165,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignUpFormButton, {}, void 0, false, {\n                            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                            lineNumber: 188,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                    lineNumber: 155,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false);\n    }\n    function SignUpFormError() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                width: \"100%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    fontFamily: \"Inter, sans-serif\",\n                    color: \"rgb(185, 28, 28)\",\n                    fontSize: \"14px\"\n                },\n                children: errorMessage || \"Oops! Something went wrong, please try again\"\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                lineNumber: 203,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n            lineNumber: 196,\n            columnNumber: 13\n        }, this);\n    }\n    function BackButton() {\n        _s1();\n        const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            style: {\n                color: \"#6b7280\",\n                font: \"14px, Inter, sans-serif\",\n                margin: \"10px auto\",\n                textAlign: \"center\",\n                background: \"transparent\",\n                border: \"none\",\n                cursor: \"pointer\",\n                textDecoration: isHovered ? \"underline\" : \"none\"\n            },\n            onMouseOut: ()=>setIsHovered(false),\n            onMouseOver: ()=>setIsHovered(true),\n            onClick: resetForm,\n            children: \"← Back\"\n        }, void 0, false, {\n            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n            lineNumber: 220,\n            columnNumber: 13\n        }, this);\n    }\n    _s1(BackButton, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n    function SignUpFormButton(param) {\n        let { props } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            className: \"gradient-background-button gradient-background-button:hover\",\n            style: {\n                // background: formStyles.buttonColor,\n                fontSize: \"\".concat(formStyles.buttonFontSizePx, \"px\"),\n                // color: formStyles.buttonFontColor,\n                // fontFamily: `'${formStyles.buttonFont}', sans-serif`,\n                // width: isInline ? \"min-content\" : \"100%\",\n                maxWidth: \"300px\",\n                whiteSpace: isInline ? \"nowrap\" : \"normal\",\n                height: \"38px\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                flexDirection: \"row\",\n                padding: \"9px 17px\",\n                boxShadow: \"0px 1px 2px rgba(0, 0, 0, 0.05)\",\n                borderRadius: \"6px\",\n                textAlign: \"center\",\n                fontStyle: \"normal\",\n                fontWeight: 500,\n                lineHeight: \"20px\",\n                border: \"none\",\n                cursor: \"pointer\"\n            },\n            children: formState === SUBMITTING ? \"Please wait...\" : formStyles.buttonText\n        }, void 0, false, {\n            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n            lineNumber: 242,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(SignUpFormReact, \"7Y5PydQ8Q1gE+oCwGOsyNJ7Mdek=\");\n_c = SignUpFormReact;\nfunction isValidEmail(email) {\n    return /.+@.+/.test(email);\n}\nvar _c;\n$RefreshReg$(_c, \"SignUpFormReact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZ25VcFdhaXRMaXN0L2Zvcm1UZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0JBQWdCO0FBQ2hCLEdBQUc7QUFDSCxnQkFBZ0I7QUFDaEIsa0VBQWtFO0FBQ2xFLEVBQUU7QUFDRixnQkFBZ0I7OztBQUVpQjtBQUVqQyxNQUFNQyxPQUFPO0FBQ2IsTUFBTUMsYUFBYTtBQUNuQixNQUFNQyxRQUFRO0FBQ2QsTUFBTUMsVUFBVTtBQUNoQixNQUFNQyxhQUFhO0lBQUNKO0lBQU1DO0lBQVlDO0lBQU9DO0NBQVE7QUFDckQsTUFBTUUsYUFBYTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCO0FBQ0EsTUFBTUMsU0FBUztBQUVBLFNBQVNDOzs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQ0M7SUFDM0MsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFFakQsTUFBTWUsWUFBWTtRQUNkTCxTQUFTO1FBQ1RFLGFBQWFYO1FBQ2JhLGdCQUFnQjtJQUNwQjtJQUVBOzs7S0FHQyxHQUNELE1BQU1FLHNCQUFzQjtRQUN4QixNQUFNQyxPQUFPLElBQUlDO1FBQ2pCLE1BQU1DLFlBQVlGLEtBQUtHLE9BQU87UUFDOUIsTUFBTUMsb0JBQW9CQyxhQUFhQyxPQUFPLENBQUM7UUFFL0MsMERBQTBEO1FBQzFELElBQ0lGLHFCQUNBRyxPQUFPSCxx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REFBd0Q7Z0JBQ3hELDRDQUE0QztnQkFDNUNyQixVQUFVO2dCQUNWc0IsWUFBWXpELFdBQVcsV0FBVztnQkFDbEMwRCxRQUFRO2dCQUNSckQsWUFBWTtnQkFDWkMsZ0JBQWdCO2dCQUNoQmMsZUFBZTtnQkFDZnNCLFNBQVM7Z0JBQ1RGLFdBQVc7Z0JBQ1hDLGNBQWM7Z0JBQ2RPLFdBQVc7Z0JBQ1hXLFdBQVc7Z0JBQ1hDLFlBQVk7Z0JBQ1pDLFlBQVk7Z0JBQ1p2QixRQUFRO2dCQUNSVyxRQUFRO1lBQ1o7c0JBRUN2RixjQUFjVCxhQUFhLG1CQUFtQkksV0FBV3lHLFVBQVU7Ozs7OztJQUdoRjtBQUNBO0dBNU9vQnZHO0tBQUFBO0FBOE94QixTQUFTc0IsYUFBYXJCLEtBQUs7SUFDdkIsT0FBTyxRQUFRdUcsSUFBSSxDQUFDdkc7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2lnblVwV2FpdExpc3QvZm9ybVRlc3QuanN4PzQzMjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vL1xuLy8gXG4vLyBVc2luZyBGcmFtZXI/XG4vLyBTZWUgaHR0cHM6Ly93d3cuZnJhbWVyLmNvbS9sZWFybi9jb2RlLWNvbXBvbmVudHMvIGZvciBtb3JlIGluZm9cbi8vXG4vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IElOSVQgPSBcIklOSVRcIjtcbmNvbnN0IFNVQk1JVFRJTkcgPSBcIlNVQk1JVFRJTkdcIjtcbmNvbnN0IEVSUk9SID0gXCJFUlJPUlwiO1xuY29uc3QgU1VDQ0VTUyA9IFwiU1VDQ0VTU1wiO1xuY29uc3QgZm9ybVN0YXRlcyA9IFtJTklULCBTVUJNSVRUSU5HLCBFUlJPUiwgU1VDQ0VTU107XG5jb25zdCBmb3JtU3R5bGVzID0ge1xuICAgIFwiaWRcIjogXCJjbHpqeG92aWgwMGg3OGc4eXQ3eDZpeTh5XCIsXG4gICAgXCJuYW1lXCI6IFwiRGVmYXVsdFwiLFxuICAgIFwiZm9ybVN0eWxlXCI6IFwiaW5saW5lXCIsXG4gICAgXCJwbGFjZWhvbGRlclRleHRcIjogXCJ5b3VAZXhhbXBsZS5jb21cIixcbiAgICBcImZvcm1Gb250XCI6IFwiSW50ZXJcIixcbiAgICBcImZvcm1Gb250Q29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb3JtRm9udFNpemVQeFwiOiAxNCxcbiAgICBcImJ1dHRvblRleHRcIjogXCJKb2luIFdhaXRsaXN0XCIsXG4gICAgXCJidXR0b25Gb250XCI6IFwiSW50ZXJcIixcbiAgICBcImJ1dHRvbkZvbnRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJ1dHRvbkNvbG9yXCI6IFwiIzBEOTQ4OFwiLFxuICAgIFwiYnV0dG9uRm9udFNpemVQeFwiOiAxNCxcbiAgICBcInN1Y2Nlc3NNZXNzYWdlXCI6IFwiVGhhbmtzISBXZSdsbCBiZSBpbiB0b3VjaCFcIixcbiAgICBcInN1Y2Nlc3NGb250XCI6IFwiSW50ZXJcIixcbiAgICBcInN1Y2Nlc3NGb250Q29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJzdWNjZXNzRm9udFNpemVQeFwiOiAxNCxcbiAgICBcInVzZXJHcm91cFwiOiBcIldhaXRsaXN0XCJcbn1cbmNvbnN0IGRvbWFpbiA9IFwiYXBwLmxvb3BzLnNvXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwRm9ybVJlYWN0KCkge1xuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IHVzZVN0YXRlKElOSVQpO1xuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIGNvbnN0IHJlc2V0Rm9ybSA9ICgpID0+IHtcbiAgICAgICAgc2V0RW1haWwoXCJcIik7XG4gICAgICAgIHNldEZvcm1TdGF0ZShJTklUKTtcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSYXRlIGxpbWl0IHRoZSBudW1iZXIgb2Ygc3VibWlzc2lvbnMgYWxsb3dlZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBmb3JtIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQgaW4gdGhlIHBhc3QgbWludXRlXG4gICAgICovXG4gICAgY29uc3QgaGFzUmVjZW50U3VibWlzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IHRpbWUudmFsdWVPZigpO1xuICAgICAgICBjb25zdCBwcmV2aW91c1RpbWVzdGFtcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9vcHMtZm9ybS10aW1lc3RhbXBcIik7XG5cbiAgICAgICAgLy8gSW5kaWNhdGUgaWYgdGhlIGxhc3Qgc2lnbiB1cCB3YXMgbGVzcyB0aGFuIGEgbWludXRlIGFnb1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcmV2aW91c1RpbWVzdGFtcCAmJlxuICAgICAgICAgICAgTnVtYmVyKHByZXZpb3VzVGltZXN0YW1wKSArIDYwICogMTAwMCA+IHRpbWVzdGFtcFxuICAgICAgICApIHtcbiAgICAgICAgICAgIHNldEZvcm1TdGF0ZShFUlJPUik7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJUb28gbWFueSBzaWdudXBzLCBwbGVhc2UgdHJ5IGFnYWluIGluIGEgbGl0dGxlIHdoaWxlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvb3BzLWZvcm0tdGltZXN0YW1wXCIsIHRpbWVzdGFtcC50b1N0cmluZygpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBib3VuZGFyeSBjb25kaXRpb25zIGZvciBzdWJtaXNzaW9uXG4gICAgICAgIGlmIChmb3JtU3RhdGUgIT09IElOSVQpIHJldHVybjtcbiAgICAgICAgaWYgKCFpc1ZhbGlkRW1haWwoZW1haWwpKSB7XG4gICAgICAgICAgICBzZXRGb3JtU3RhdGUoRVJST1IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWxcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhhc1JlY2VudFN1Ym1pc3Npb24oKSkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgc2V0Rm9ybVN0YXRlKFNVQk1JVFRJTkcpO1xuXG4gICAgICAgIC8vIGJ1aWxkIGJvZHlcbiAgICAgICAgY29uc3QgZm9ybUJvZHkgPSBgdXNlckdyb3VwPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZvcm1TdHlsZXMudXNlckdyb3VwKX0mZW1haWw9JHtlbmNvZGVVUklDb21wb25lbnQoZW1haWwpfSZtYWlsaW5nTGlzdHM9YDtcblxuICAgICAgICAvLyBBUEkgcmVxdWVzdCB0byBhZGQgdXNlciB0byBuZXdzbGV0dGVyXG4gICAgICAgIGZldGNoKGBodHRwczovLyR7ZG9tYWlufS9hcGkvbmV3c2xldHRlci1mb3JtLyR7Zm9ybVN0eWxlcy5pZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgYm9keTogZm9ybUJvZHksXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IFtyZXMub2ssIHJlcy5qc29uKCksIHJlc10pXG4gICAgICAgIC50aGVuKChbb2ssIGRhdGFQcm9taXNlLCByZXNdKSA9PiB7XG4gICAgICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICAgICAgICByZXNldEZvcm0oKTtcbiAgICAgICAgICAgICAgICBzZXRGb3JtU3RhdGUoU1VDQ0VTUyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFQcm9taXNlLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybVN0YXRlKEVSUk9SKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGRhdGEubWVzc2FnZSB8fCByZXMuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9vcHMtZm9ybS10aW1lc3RhbXBcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHNldEZvcm1TdGF0ZShFUlJPUik7XG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgY2xvdWRmbGFyZSBlcnJvclxuICAgICAgICAgICAgaWYgKGVycm9yLm1lc3NhZ2UgPT09IFwiRmFpbGVkIHRvIGZldGNoXCIpIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJUb28gbWFueSBzaWdudXBzLCBwbGVhc2UgdHJ5IGFnYWluIGluIGEgbGl0dGxlIHdoaWxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb29wcy1mb3JtLXRpbWVzdGFtcFwiLCBcIlwiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGlzSW5saW5lID0gZm9ybVN0eWxlcy5mb3JtU3R5bGUgPT09IFwiaW5saW5lXCI7XG5cbiAgICBzd2l0Y2ggKGZvcm1TdGF0ZSkge1xuICAgICAgICBjYXNlIFNVQ0NFU1M6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBgJyR7Zm9ybVN0eWxlcy5zdWNjZXNzRm9udH0nLCBzYW5zLXNlcmlmYCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGZvcm1TdHlsZXMuc3VjY2Vzc0ZvbnRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGAke2Zvcm1TdHlsZXMuc3VjY2Vzc0ZvbnRTaXplUHh9cHhgLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Zvcm1TdHlsZXMuc3VjY2Vzc01lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxTaWduVXBGb3JtRXJyb3IgLz5cbiAgICAgICAgICAgICAgICAgICAgPEJhY2tCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGlzSW5saW5lID8gXCJyb3dcIiA6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Zm9ybVN0eWxlcy5wbGFjZWhvbGRlclRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBmb3JtU3R5bGVzLmZvcm1Gb250Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGAnJHtmb3JtU3R5bGVzLmZvcm1Gb250fScsIHNhbnMtc2VyaWZgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7Zm9ybVN0eWxlcy5mb3JtRm9udFNpemVQeH1weGAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogaXNJbmxpbmUgPyBcIjBweCAxMHB4IDBweCAwcHhcIiA6IFwiMHB4IDBweCAxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjRkZGRkZGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI0QxRDVEQlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwicmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggMXB4IDJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4IDEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaWduVXBGb3JtQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2lnblVwRm9ybUVycm9yKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSW50ZXIsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiKDE4NSwgMjgsIDI4KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgfHwgXCJPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZywgcGxlYXNlIHRyeSBhZ2FpblwifVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIEJhY2tCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM2YjcyODBcIixcbiAgICAgICAgICAgICAgICBmb250OiBcIjE0cHgsIEludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjEwcHggYXV0b1wiLFxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBpc0hvdmVyZWQgPyBcInVuZGVybGluZVwiIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3V0PXsoKSA9PiBzZXRJc0hvdmVyZWQoZmFsc2UpfVxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRJc0hvdmVyZWQodHJ1ZSl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17cmVzZXRGb3JtfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICZsYXJyOyBCYWNrXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBTaWduVXBGb3JtQnV0dG9uKHsgcHJvcHMgfSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyYWRpZW50LWJhY2tncm91bmQtYnV0dG9uIGdyYWRpZW50LWJhY2tncm91bmQtYnV0dG9uOmhvdmVyXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiBmb3JtU3R5bGVzLmJ1dHRvbkNvbG9yLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogYCR7Zm9ybVN0eWxlcy5idXR0b25Gb250U2l6ZVB4fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgLy8gY29sb3I6IGZvcm1TdHlsZXMuYnV0dG9uRm9udENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAvLyBmb250RmFtaWx5OiBgJyR7Zm9ybVN0eWxlcy5idXR0b25Gb250fScsIHNhbnMtc2VyaWZgLFxuICAgICAgICAgICAgICAgICAgICAvLyB3aWR0aDogaXNJbmxpbmUgPyBcIm1pbi1jb250ZW50XCIgOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgd2hpdGVTcGFjZTogaXNJbmxpbmUgPyBcIm5vd3JhcFwiIDogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjM4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOXB4IDE3cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSlcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtmb3JtU3RhdGUgPT09IFNVQk1JVFRJTkcgPyBcIlBsZWFzZSB3YWl0Li4uXCIgOiBmb3JtU3R5bGVzLmJ1dHRvblRleHR9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgfVxuXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gLy4rQC4rLy50ZXN0KGVtYWlsKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIklOSVQiLCJTVUJNSVRUSU5HIiwiRVJST1IiLCJTVUNDRVNTIiwiZm9ybVN0YXRlcyIsImZvcm1TdHlsZXMiLCJkb21haW4iLCJTaWduVXBGb3JtUmVhY3QiLCJlbWFpbCIsInNldEVtYWlsIiwiZm9ybVN0YXRlIiwic2V0Rm9ybVN0YXRlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwicmVzZXRGb3JtIiwiaGFzUmVjZW50U3VibWlzc2lvbiIsInRpbWUiLCJEYXRlIiwidGltZXN0YW1wIiwidmFsdWVPZiIsInByZXZpb3VzVGltZXN0YW1wIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk51bWJlciIsInNldEl0ZW0iLCJ0b1N0cmluZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc1ZhbGlkRW1haWwiLCJmb3JtQm9keSIsImVuY29kZVVSSUNvbXBvbmVudCIsInVzZXJHcm91cCIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJvayIsImpzb24iLCJkYXRhUHJvbWlzZSIsImRhdGEiLCJtZXNzYWdlIiwic3RhdHVzVGV4dCIsImNhdGNoIiwiZXJyb3IiLCJpc0lubGluZSIsImZvcm1TdHlsZSIsImRpdiIsInN0eWxlIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwicCIsImZvbnRGYW1pbHkiLCJzdWNjZXNzRm9udCIsImNvbG9yIiwic3VjY2Vzc0ZvbnRDb2xvciIsImZvbnRTaXplIiwic3VjY2Vzc0ZvbnRTaXplUHgiLCJzdWNjZXNzTWVzc2FnZSIsIlNpZ25VcEZvcm1FcnJvciIsIkJhY2tCdXR0b24iLCJmb3JtIiwib25TdWJtaXQiLCJmbGV4RGlyZWN0aW9uIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwicGxhY2Vob2xkZXJUZXh0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImZvcm1Gb250Q29sb3IiLCJmb3JtRm9udCIsImZvcm1Gb250U2l6ZVB4IiwibWFyZ2luIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJib3hTaXppbmciLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiU2lnblVwRm9ybUJ1dHRvbiIsImlzSG92ZXJlZCIsInNldElzSG92ZXJlZCIsImJ1dHRvbiIsImZvbnQiLCJ0ZXh0QWxpZ24iLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsIm9uTW91c2VPdXQiLCJvbk1vdXNlT3ZlciIsIm9uQ2xpY2siLCJwcm9wcyIsImNsYXNzTmFtZSIsImJ1dHRvbkZvbnRTaXplUHgiLCJ3aGl0ZVNwYWNlIiwiaGVpZ2h0IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJidXR0b25UZXh0IiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/signUpWaitList/formTest.jsx\n"));

/***/ })

});