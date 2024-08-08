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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUpFormReact; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n////////////////\n// \n// Using Framer?\n// See https://www.framer.com/learn/code-components/ for more info\n//\n////////////////\n\nvar _s = $RefreshSig$();\n\nconst INIT = \"INIT\";\nconst SUBMITTING = \"SUBMITTING\";\nconst ERROR = \"ERROR\";\nconst SUCCESS = \"SUCCESS\";\nconst formStates = [\n    INIT,\n    SUBMITTING,\n    ERROR,\n    SUCCESS\n];\nconst formStyles = {\n    \"id\": \"clzjxovih00h78g8yt7x6iy8y\",\n    \"name\": \"Default\",\n    \"formStyle\": \"inline\",\n    \"placeholderText\": \"you@example.com\",\n    \"formFont\": \"Inter\",\n    \"formFontColor\": \"#000000\",\n    \"formFontSizePx\": 14,\n    \"buttonText\": \"Join Waitlist\",\n    \"buttonFont\": \"Inter\",\n    \"buttonFontColor\": \"#ffffff\",\n    \"buttonColor\": \"#0D9488\",\n    \"buttonFontSizePx\": 14,\n    \"successMessage\": \"Thanks! We'll be in touch!\",\n    \"successFont\": \"Inter\",\n    \"successFontColor\": \"#000000\",\n    \"successFontSizePx\": 14,\n    \"userGroup\": \"Waitlist\"\n};\nconst domain = \"app.loops.so\";\nfunction SignUpFormReact() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [formState, setFormState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(INIT);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const resetForm = ()=>{\n        setEmail(\"\");\n        setFormState(INIT);\n        setErrorMessage(\"\");\n    };\n    /**\n     * Rate limit the number of submissions allowed\n     * @returns {boolean} true if the form has been successfully submitted in the past minute\n     */ const hasRecentSubmission = ()=>{\n        const time = new Date();\n        const timestamp = time.valueOf();\n        const previousTimestamp = localStorage.getItem(\"loops-form-timestamp\");\n        // Indicate if the last sign up was less than a minute ago\n        if (previousTimestamp && Number(previousTimestamp) + 60 * 1000 > timestamp) {\n            setFormState(ERROR);\n            setErrorMessage(\"Too many signups, please try again in a little while\");\n            return true;\n        }\n        localStorage.setItem(\"loops-form-timestamp\", timestamp.toString());\n        return false;\n    };\n    const handleSubmit = (event)=>{\n        // Prevent the default form submission\n        event.preventDefault();\n        // boundary conditions for submission\n        if (formState !== INIT) return;\n        if (!isValidEmail(email)) {\n            setFormState(ERROR);\n            setErrorMessage(\"Please enter a valid email\");\n            return;\n        }\n        if (hasRecentSubmission()) return;\n        setFormState(SUBMITTING);\n        // build body\n        const formBody = \"userGroup=\".concat(encodeURIComponent(formStyles.userGroup), \"&email=\").concat(encodeURIComponent(email), \"&mailingLists=\");\n        // API request to add user to newsletter\n        fetch(\"https://\".concat(domain, \"/api/newsletter-form/\").concat(formStyles.id), {\n            method: \"POST\",\n            body: formBody,\n            headers: {\n                \"Content-Type\": \"application/x-www-form-urlencoded\"\n            }\n        }).then((res)=>[\n                res.ok,\n                res.json(),\n                res\n            ]).then((param)=>{\n            let [ok, dataPromise, res] = param;\n            if (ok) {\n                resetForm();\n                setFormState(SUCCESS);\n            } else {\n                dataPromise.then((data)=>{\n                    setFormState(ERROR);\n                    setErrorMessage(data.message || res.statusText);\n                    localStorage.setItem(\"loops-form-timestamp\", \"\");\n                });\n            }\n            ;\n        }).catch((error)=>{\n            setFormState(ERROR);\n            // check for cloudflare error\n            if (error.message === \"Failed to fetch\") {\n                setErrorMessage(\"Too many signups, please try again in a little while\");\n            } else if (error.message) {\n                setErrorMessage(error.message);\n            }\n            localStorage.setItem(\"loops-form-timestamp\", \"\");\n        });\n    };\n    const isInline = formStyles.formStyle === \"inline\";\n    switch(formState){\n        case SUCCESS:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    justifyContent: \"center\",\n                    width: \"100%\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    style: {\n                        fontFamily: \"'\".concat(formStyles.successFont, \"', sans-serif\"),\n                        color: formStyles.successFontColor,\n                        fontSize: \"\".concat(formStyles.successFontSizePx, \"px\")\n                    },\n                    children: formStyles.successMessage\n                }, void 0, false, {\n                    fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                    lineNumber: 134,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                lineNumber: 126,\n                columnNumber: 13\n            }, this);\n        case ERROR:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignUpFormError, {}, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                        lineNumber: 148,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackButton, {}, void 0, false, {\n                        fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                        lineNumber: 149,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true);\n        default:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    style: {\n                        display: \"flex\",\n                        flexDirection: isInline ? \"row\" : \"column\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        width: \"100%\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"email\",\n                            placeholder: formStyles.placeholderText,\n                            value: email,\n                            onChange: (e)=>setEmail(e.target.value),\n                            required: true,\n                            style: {\n                                color: formStyles.formFontColor,\n                                fontFamily: \"'\".concat(formStyles.formFont, \"', sans-serif\"),\n                                fontSize: \"\".concat(formStyles.formFontSizePx, \"px\"),\n                                margin: isInline ? \"0px 10px 0px 0px\" : \"0px 0px 10px\",\n                                width: \"100%\",\n                                maxWidth: \"300px\",\n                                minWidth: \"100px\",\n                                background: \"#FFFFFF\",\n                                border: \"1px solid #D1D5DB\",\n                                boxSizing: \"border-box\",\n                                boxShadow: \"rgba(0, 0, 0, 0.05) 0px 1px 2px\",\n                                borderRadius: \"6px\",\n                                padding: \"8px 12px\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                            lineNumber: 165,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SignUpFormButton, {}, void 0, false, {\n                            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                            lineNumber: 188,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                    lineNumber: 155,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false);\n    }\n    function SignUpFormError() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                width: \"100%\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                style: {\n                    fontFamily: \"Inter, sans-serif\",\n                    color: \"rgb(185, 28, 28)\",\n                    fontSize: \"14px\"\n                },\n                children: errorMessage || \"Oops! Something went wrong, please try again\"\n            }, void 0, false, {\n                fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n                lineNumber: 203,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n            lineNumber: 196,\n            columnNumber: 13\n        }, this);\n    }\n    function BackButton() {\n        _s1();\n        const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            style: {\n                color: \"#6b7280\",\n                font: \"14px, Inter, sans-serif\",\n                margin: \"10px auto\",\n                textAlign: \"center\",\n                background: \"transparent\",\n                border: \"none\",\n                cursor: \"pointer\",\n                textDecoration: isHovered ? \"underline\" : \"none\"\n            },\n            onMouseOut: ()=>setIsHovered(false),\n            onMouseOver: ()=>setIsHovered(true),\n            onClick: resetForm,\n            children: \"← Back\"\n        }, void 0, false, {\n            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n            lineNumber: 220,\n            columnNumber: 13\n        }, this);\n    }\n    _s1(BackButton, \"FPQn8a98tPjpohC7NUYORQR8GJE=\");\n    function SignUpFormButton(param) {\n        let { props } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            style: {\n                background: formStyles.buttonColor,\n                fontSize: \"\".concat(formStyles.buttonFontSizePx, \"px\"),\n                color: formStyles.buttonFontColor,\n                fontFamily: \"'\".concat(formStyles.buttonFont, \"', sans-serif\"),\n                width: isInline ? \"min-content\" : \"100%\",\n                maxWidth: \"300px\",\n                whiteSpace: isInline ? \"nowrap\" : \"normal\",\n                height: \"38px\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                flexDirection: \"row\",\n                padding: \"9px 17px\",\n                boxShadow: \"0px 1px 2px rgba(0, 0, 0, 0.05)\",\n                borderRadius: \"6px\",\n                textAlign: \"center\",\n                fontStyle: \"normal\",\n                fontWeight: 500,\n                lineHeight: \"20px\",\n                border: \"none\",\n                cursor: \"pointer\"\n            },\n            children: formState === SUBMITTING ? \"Please wait...\" : formStyles.buttonText\n        }, void 0, false, {\n            fileName: \"/Users/tylersmith/Development/intel-apply/src/components/signUpWaitList/formTest.jsx\",\n            lineNumber: 242,\n            columnNumber: 13\n        }, this);\n    }\n}\n_s(SignUpFormReact, \"7Y5PydQ8Q1gE+oCwGOsyNJ7Mdek=\");\n_c = SignUpFormReact;\nfunction isValidEmail(email) {\n    return /.+@.+/.test(email);\n}\nvar _c;\n$RefreshReg$(_c, \"SignUpFormReact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NpZ25VcFdhaXRMaXN0L2Zvcm1UZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0JBQWdCO0FBQ2hCLEdBQUc7QUFDSCxnQkFBZ0I7QUFDaEIsa0VBQWtFO0FBQ2xFLEVBQUU7QUFDRixnQkFBZ0I7OztBQUVpQjtBQUVqQyxNQUFNQyxPQUFPO0FBQ2IsTUFBTUMsYUFBYTtBQUNuQixNQUFNQyxRQUFRO0FBQ2QsTUFBTUMsVUFBVTtBQUNoQixNQUFNQyxhQUFhO0lBQUNKO0lBQU1DO0lBQVlDO0lBQU9DO0NBQVE7QUFDckQsTUFBTUUsYUFBYTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCO0FBQ0EsTUFBTUMsU0FBUztBQUVBLFNBQVNDOzs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1csV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQ0M7SUFDM0MsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBLENBQUM7SUFFakQsTUFBTWUsWUFBWTtRQUNkTCxTQUFTO1FBQ1RFLGFBQWFYO1FBQ2JhLGdCQUFnQjtJQUNwQjtJQUVBOzs7S0FHQyxHQUNELE1BQU1FLHNCQUFzQjtRQUN4QixNQUFNQyxPQUFPLElBQUlDO1FBQ2pCLE1BQU1DLFlBQVlGLEtBQUtHLE9BQU87UUFDOUIsTUFBTUMsb0JBQW9CQyxhQUFhQyxPQUFPLENBQUM7UUFFL0MsMERBQTBEO1FBQzFELElBQ0lGLHFCQUNBRyxPQUFPSCxx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V29HLGVBQWU7Z0JBQ2pDaEQsWUFBWSxJQUEwQixPQUF0QnBELFdBQVdxRyxVQUFVLEVBQUM7Z0JBQ3RDbkQsT0FBT1AsV0FBVyxnQkFBZ0I7Z0JBQ2xDbUMsVUFBVTtnQkFDVndCLFlBQVkzRCxXQUFXLFdBQVc7Z0JBQ2xDNEQsUUFBUTtnQkFDUnZELFlBQVk7Z0JBQ1pDLGdCQUFnQjtnQkFDaEJjLGVBQWU7Z0JBQ2ZzQixTQUFTO2dCQUNURixXQUFXO2dCQUNYQyxjQUFjO2dCQUNkTyxXQUFXO2dCQUNYYSxXQUFXO2dCQUNYQyxZQUFZO2dCQUNaQyxZQUFZO2dCQUNaekIsUUFBUTtnQkFDUlcsUUFBUTtZQUNSO3NCQUVDdkYsY0FBY1QsYUFBYSxtQkFBbUJJLFdBQVcyRyxVQUFVOzs7Ozs7SUFHaEY7QUFDQTtHQTNPb0J6RztLQUFBQTtBQTZPeEIsU0FBU3NCLGFBQWFyQixLQUFLO0lBQ3ZCLE9BQU8sUUFBUXlHLElBQUksQ0FBQ3pHO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NpZ25VcFdhaXRMaXN0L2Zvcm1UZXN0LmpzeD80MzI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vLy8vLy8vLy8vLy8vLy9cbi8vIFxuLy8gVXNpbmcgRnJhbWVyP1xuLy8gU2VlIGh0dHBzOi8vd3d3LmZyYW1lci5jb20vbGVhcm4vY29kZS1jb21wb25lbnRzLyBmb3IgbW9yZSBpbmZvXG4vL1xuLy8vLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJTklUID0gXCJJTklUXCI7XG5jb25zdCBTVUJNSVRUSU5HID0gXCJTVUJNSVRUSU5HXCI7XG5jb25zdCBFUlJPUiA9IFwiRVJST1JcIjtcbmNvbnN0IFNVQ0NFU1MgPSBcIlNVQ0NFU1NcIjtcbmNvbnN0IGZvcm1TdGF0ZXMgPSBbSU5JVCwgU1VCTUlUVElORywgRVJST1IsIFNVQ0NFU1NdO1xuY29uc3QgZm9ybVN0eWxlcyA9IHtcbiAgICBcImlkXCI6IFwiY2x6anhvdmloMDBoNzhnOHl0N3g2aXk4eVwiLFxuICAgIFwibmFtZVwiOiBcIkRlZmF1bHRcIixcbiAgICBcImZvcm1TdHlsZVwiOiBcImlubGluZVwiLFxuICAgIFwicGxhY2Vob2xkZXJUZXh0XCI6IFwieW91QGV4YW1wbGUuY29tXCIsXG4gICAgXCJmb3JtRm9udFwiOiBcIkludGVyXCIsXG4gICAgXCJmb3JtRm9udENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9ybUZvbnRTaXplUHhcIjogMTQsXG4gICAgXCJidXR0b25UZXh0XCI6IFwiSm9pbiBXYWl0bGlzdFwiLFxuICAgIFwiYnV0dG9uRm9udFwiOiBcIkludGVyXCIsXG4gICAgXCJidXR0b25Gb250Q29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJidXR0b25Db2xvclwiOiBcIiMwRDk0ODhcIixcbiAgICBcImJ1dHRvbkZvbnRTaXplUHhcIjogMTQsXG4gICAgXCJzdWNjZXNzTWVzc2FnZVwiOiBcIlRoYW5rcyEgV2UnbGwgYmUgaW4gdG91Y2ghXCIsXG4gICAgXCJzdWNjZXNzRm9udFwiOiBcIkludGVyXCIsXG4gICAgXCJzdWNjZXNzRm9udENvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwic3VjY2Vzc0ZvbnRTaXplUHhcIjogMTQsXG4gICAgXCJ1c2VyR3JvdXBcIjogXCJXYWl0bGlzdFwiXG59XG5jb25zdCBkb21haW4gPSBcImFwcC5sb29wcy5zb1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcEZvcm1SZWFjdCgpIHtcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtmb3JtU3RhdGUsIHNldEZvcm1TdGF0ZV0gPSB1c2VTdGF0ZShJTklUKTtcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgICBjb25zdCByZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgICBzZXRGb3JtU3RhdGUoSU5JVCk7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmF0ZSBsaW1pdCB0aGUgbnVtYmVyIG9mIHN1Ym1pc3Npb25zIGFsbG93ZWRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZm9ybSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIGluIHRoZSBwYXN0IG1pbnV0ZVxuICAgICAqL1xuICAgIGNvbnN0IGhhc1JlY2VudFN1Ym1pc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSB0aW1lLnZhbHVlT2YoKTtcbiAgICAgICAgY29uc3QgcHJldmlvdXNUaW1lc3RhbXAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvb3BzLWZvcm0tdGltZXN0YW1wXCIpO1xuXG4gICAgICAgIC8vIEluZGljYXRlIGlmIHRoZSBsYXN0IHNpZ24gdXAgd2FzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhZ29cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJldmlvdXNUaW1lc3RhbXAgJiZcbiAgICAgICAgICAgIE51bWJlcihwcmV2aW91c1RpbWVzdGFtcCkgKyA2MCAqIDEwMDAgPiB0aW1lc3RhbXBcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBzZXRGb3JtU3RhdGUoRVJST1IpO1xuICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiVG9vIG1hbnkgc2lnbnVwcywgcGxlYXNlIHRyeSBhZ2FpbiBpbiBhIGxpdHRsZSB3aGlsZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb29wcy1mb3JtLXRpbWVzdGFtcFwiLCB0aW1lc3RhbXAudG9TdHJpbmcoKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gYm91bmRhcnkgY29uZGl0aW9ucyBmb3Igc3VibWlzc2lvblxuICAgICAgICBpZiAoZm9ybVN0YXRlICE9PSBJTklUKSByZXR1cm47XG4gICAgICAgIGlmICghaXNWYWxpZEVtYWlsKGVtYWlsKSkge1xuICAgICAgICAgICAgc2V0Rm9ybVN0YXRlKEVSUk9SKTtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNSZWNlbnRTdWJtaXNzaW9uKCkpIHJldHVybjtcbiAgICAgICAgXG4gICAgICAgIHNldEZvcm1TdGF0ZShTVUJNSVRUSU5HKTtcblxuICAgICAgICAvLyBidWlsZCBib2R5XG4gICAgICAgIGNvbnN0IGZvcm1Cb2R5ID0gYHVzZXJHcm91cD0ke2VuY29kZVVSSUNvbXBvbmVudChmb3JtU3R5bGVzLnVzZXJHcm91cCl9JmVtYWlsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVtYWlsKX0mbWFpbGluZ0xpc3RzPWA7XG5cbiAgICAgICAgLy8gQVBJIHJlcXVlc3QgdG8gYWRkIHVzZXIgdG8gbmV3c2xldHRlclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly8ke2RvbWFpbn0vYXBpL25ld3NsZXR0ZXItZm9ybS8ke2Zvcm1TdHlsZXMuaWR9YCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGJvZHk6IGZvcm1Cb2R5LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiBbcmVzLm9rLCByZXMuanNvbigpLCByZXNdKVxuICAgICAgICAudGhlbigoW29rLCBkYXRhUHJvbWlzZSwgcmVzXSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XG4gICAgICAgICAgICAgICAgc2V0Rm9ybVN0YXRlKFNVQ0NFU1MpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhUHJvbWlzZS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZvcm1TdGF0ZShFUlJPUik7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShkYXRhLm1lc3NhZ2UgfHwgcmVzLnN0YXR1c1RleHQpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvb3BzLWZvcm0tdGltZXN0YW1wXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBzZXRGb3JtU3RhdGUoRVJST1IpO1xuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGNsb3VkZmxhcmUgZXJyb3JcbiAgICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlID09PSBcIkZhaWxlZCB0byBmZXRjaFwiKSB7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiVG9vIG1hbnkgc2lnbnVwcywgcGxlYXNlIHRyeSBhZ2FpbiBpbiBhIGxpdHRsZSB3aGlsZVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXJyb3IubWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9vcHMtZm9ybS10aW1lc3RhbXBcIiwgXCJcIik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBpc0lubGluZSA9IGZvcm1TdHlsZXMuZm9ybVN0eWxlID09PSBcImlubGluZVwiO1xuXG4gICAgc3dpdGNoIChmb3JtU3RhdGUpIHtcbiAgICAgICAgY2FzZSBTVUNDRVNTOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseTogYCcke2Zvcm1TdHlsZXMuc3VjY2Vzc0ZvbnR9Jywgc2Fucy1zZXJpZmAsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBmb3JtU3R5bGVzLnN1Y2Nlc3NGb250Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBgJHtmb3JtU3R5bGVzLnN1Y2Nlc3NGb250U2l6ZVB4fXB4YCxcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtmb3JtU3R5bGVzLnN1Y2Nlc3NNZXNzYWdlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBjYXNlIEVSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8U2lnblVwRm9ybUVycm9yIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCYWNrQnV0dG9uIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBpc0lubGluZSA/IFwicm93XCIgOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Zvcm1TdHlsZXMucGxhY2Vob2xkZXJUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZm9ybVN0eWxlcy5mb3JtRm9udENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBgJyR7Zm9ybVN0eWxlcy5mb3JtRm9udH0nLCBzYW5zLXNlcmlmYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IGAke2Zvcm1TdHlsZXMuZm9ybUZvbnRTaXplUHh9cHhgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGlzSW5saW5lID8gXCIwcHggMTBweCAwcHggMHB4XCIgOiBcIjBweCAwcHggMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjMwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNEMUQ1REJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2l6aW5nOiBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcInJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDFweCAycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjZweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2lnblVwRm9ybUJ1dHRvbiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFNpZ25VcEZvcm1FcnJvcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkludGVyLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYigxODUsIDI4LCAyOClcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlIHx8IFwiT29wcyEgU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW5cIn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBCYWNrQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBbaXNIb3ZlcmVkLCBzZXRJc0hvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjNmI3MjgwXCIsXG4gICAgICAgICAgICAgICAgZm9udDogXCIxNHB4LCBJbnRlciwgc2Fucy1zZXJpZlwiLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IGF1dG9cIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogaXNIb3ZlcmVkID8gXCJ1bmRlcmxpbmVcIiA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25Nb3VzZU91dD17KCkgPT4gc2V0SXNIb3ZlcmVkKGZhbHNlKX1cbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0SXNIb3ZlcmVkKHRydWUpfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Rm9ybX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAmbGFycjsgQmFja1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gU2lnblVwRm9ybUJ1dHRvbih7IHByb3BzIH0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGZvcm1TdHlsZXMuYnV0dG9uQ29sb3IsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IGAke2Zvcm1TdHlsZXMuYnV0dG9uRm9udFNpemVQeH1weGAsXG4gICAgICAgICAgICAgICAgY29sb3I6IGZvcm1TdHlsZXMuYnV0dG9uRm9udENvbG9yLFxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IGAnJHtmb3JtU3R5bGVzLmJ1dHRvbkZvbnR9Jywgc2Fucy1zZXJpZmAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGlzSW5saW5lID8gXCJtaW4tY29udGVudFwiIDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IFwiMzAwcHhcIixcbiAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiBpc0lubGluZSA/IFwibm93cmFwXCIgOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzOHB4XCIsXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOXB4IDE3cHhcIixcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KVwiLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Zm9ybVN0YXRlID09PSBTVUJNSVRUSU5HID8gXCJQbGVhc2Ugd2FpdC4uLlwiIDogZm9ybVN0eWxlcy5idXR0b25UZXh0fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICk7XG4gICAgfVxuICAgIH1cblxuZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC8uK0AuKy8udGVzdChlbWFpbCk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJTklUIiwiU1VCTUlUVElORyIsIkVSUk9SIiwiU1VDQ0VTUyIsImZvcm1TdGF0ZXMiLCJmb3JtU3R5bGVzIiwiZG9tYWluIiwiU2lnblVwRm9ybVJlYWN0IiwiZW1haWwiLCJzZXRFbWFpbCIsImZvcm1TdGF0ZSIsInNldEZvcm1TdGF0ZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInJlc2V0Rm9ybSIsImhhc1JlY2VudFN1Ym1pc3Npb24iLCJ0aW1lIiwiRGF0ZSIsInRpbWVzdGFtcCIsInZhbHVlT2YiLCJwcmV2aW91c1RpbWVzdGFtcCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJOdW1iZXIiLCJzZXRJdGVtIiwidG9TdHJpbmciLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNWYWxpZEVtYWlsIiwiZm9ybUJvZHkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJ1c2VyR3JvdXAiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwib2siLCJqc29uIiwiZGF0YVByb21pc2UiLCJkYXRhIiwibWVzc2FnZSIsInN0YXR1c1RleHQiLCJjYXRjaCIsImVycm9yIiwiaXNJbmxpbmUiLCJmb3JtU3R5bGUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJ3aWR0aCIsInAiLCJmb250RmFtaWx5Iiwic3VjY2Vzc0ZvbnQiLCJjb2xvciIsInN1Y2Nlc3NGb250Q29sb3IiLCJmb250U2l6ZSIsInN1Y2Nlc3NGb250U2l6ZVB4Iiwic3VjY2Vzc01lc3NhZ2UiLCJTaWduVXBGb3JtRXJyb3IiLCJCYWNrQnV0dG9uIiwiZm9ybSIsIm9uU3VibWl0IiwiZmxleERpcmVjdGlvbiIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyVGV4dCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJmb3JtRm9udENvbG9yIiwiZm9ybUZvbnQiLCJmb3JtRm9udFNpemVQeCIsIm1hcmdpbiIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyIiwiYm94U2l6aW5nIiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIlNpZ25VcEZvcm1CdXR0b24iLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJidXR0b24iLCJmb250IiwidGV4dEFsaWduIiwiY3Vyc29yIiwidGV4dERlY29yYXRpb24iLCJvbk1vdXNlT3V0Iiwib25Nb3VzZU92ZXIiLCJvbkNsaWNrIiwicHJvcHMiLCJidXR0b25Db2xvciIsImJ1dHRvbkZvbnRTaXplUHgiLCJidXR0b25Gb250Q29sb3IiLCJidXR0b25Gb250Iiwid2hpdGVTcGFjZSIsImhlaWdodCIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiYnV0dG9uVGV4dCIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/signUpWaitList/formTest.jsx\n"));

/***/ })

});