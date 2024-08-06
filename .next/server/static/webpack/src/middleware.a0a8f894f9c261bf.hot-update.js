"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @clerk/nextjs/server */ \"(middleware)/./node_modules/@clerk/nextjs/dist/esm/server/clerkMiddleware.js\");\n\nconst publishableKey = \"pk_test_ZnJlZS1mb3gtMTMuY2xlcmsuYWNjb3VudHMuZGV2JA\";\nif (!publishableKey) {\n    console.error(\"Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY environment variable\");\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_clerk_nextjs_server__WEBPACK_IMPORTED_MODULE_0__.clerkMiddleware)({\n    publishableKey\n}));\nconst config = {\n    matcher: [\n        // Skip Next.js internals and all static files, unless found in search params\n        \"/((?!_next|[^?]*\\\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)\",\n        // Always run for API routes\n        \"/(api|trpc)(.*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXVEO0FBRXZELE1BQU1DLGlCQUFpQkMsb0RBQTZDO0FBRXBFLElBQUksQ0FBQ0QsZ0JBQWdCO0lBQ25CSSxRQUFRQyxLQUFLLENBQUM7QUFDaEI7QUFFQSxpRUFBZU4scUVBQWVBLENBQUM7SUFDN0JDO0FBQ0YsRUFBRSxFQUFDO0FBRUksTUFBTU0sU0FBUztJQUNwQkMsU0FBUztRQUNQLDZFQUE2RTtRQUM3RTtRQUNBLDRCQUE0QjtRQUM1QjtLQUNEO0FBQ0gsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZXJrTWlkZGxld2FyZSB9IGZyb20gXCJAY2xlcmsvbmV4dGpzL3NlcnZlclwiO1xuXG5jb25zdCBwdWJsaXNoYWJsZUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NMRVJLX1BVQkxJU0hBQkxFX0tFWTtcblxuaWYgKCFwdWJsaXNoYWJsZUtleSkge1xuICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBORVhUX1BVQkxJQ19DTEVSS19QVUJMSVNIQUJMRV9LRVkgZW52aXJvbm1lbnQgdmFyaWFibGVcIilcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xlcmtNaWRkbGV3YXJlKHtcbiAgcHVibGlzaGFibGVLZXlcbn0pO1xuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICBtYXRjaGVyOiBbXG4gICAgLy8gU2tpcCBOZXh0LmpzIGludGVybmFscyBhbmQgYWxsIHN0YXRpYyBmaWxlcywgdW5sZXNzIGZvdW5kIGluIHNlYXJjaCBwYXJhbXNcbiAgICAnLygoPyFfbmV4dHxbXj9dKlxcXFwuKD86aHRtbD98Y3NzfGpzKD8hb24pfGpwZT9nfHdlYnB8cG5nfGdpZnxzdmd8dHRmfHdvZmYyP3xpY298Y3N2fGRvY3g/fHhsc3g/fHppcHx3ZWJtYW5pZmVzdCkpLiopJyxcbiAgICAvLyBBbHdheXMgcnVuIGZvciBBUEkgcm91dGVzXG4gICAgJy8oYXBpfHRycGMpKC4qKScsXG4gIF0sXG59OyJdLCJuYW1lcyI6WyJjbGVya01pZGRsZXdhcmUiLCJwdWJsaXNoYWJsZUtleSIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19DTEVSS19QVUJMSVNIQUJMRV9LRVkiLCJjb25zb2xlIiwiZXJyb3IiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});