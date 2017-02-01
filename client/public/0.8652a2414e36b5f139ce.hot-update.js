webpackHotUpdate(0,{

/***/ 48:
/* unknown exports provided */
/* all exports used */
/*!****************************!*\
  !*** ./client/app/app.jsx ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ 677);\n\nvar _homepage = __webpack_require__(/*! ./homepage.jsx */ 683);\n\nvar _homepage2 = _interopRequireDefault(_homepage);\n\nvar _skillspage = __webpack_require__(/*! ./skillspage.jsx */ 684);\n\nvar _skillspage2 = _interopRequireDefault(_skillspage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App() {\n  return _react2.default.createElement(\n    _reactRouter.Router,\n    { history: _reactRouter.hashHistory },\n    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _homepage2.default }),\n    _react2.default.createElement(_reactRouter.Route, { path: '/skillpage', component: _skillspage2.default })\n  );\n};\n\nexports.default = App;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY2xpZW50L2FwcC9hcHAuanN4PzBhMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlciwgUm91dGUsIGhhc2hIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBIb21lcGFnZSBmcm9tICcuL2hvbWVwYWdlLmpzeCdcbmltcG9ydCBTa2lsbHNwYWdlIGZyb20gJy4vc2tpbGxzcGFnZS5qc3gnXG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lcGFnZX0gLz5cbiAgICA8Um91dGUgcGF0aD1cIi9za2lsbHBhZ2VcIiBjb21wb25lbnQ9e1NraWxsc3BhZ2V9IC8+XG4gIDwvUm91dGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNsaWVudC9hcHAvYXBwLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUEiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),

/***/ 684:
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./client/app/skillspage.jsx ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHtml5video = __webpack_require__(/*! react-html5video */ 335);\n\nvar _reactHtml5video2 = _interopRequireDefault(_reactHtml5video);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ 677);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 599);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mp4 = __webpack_require__(/*! ../public/video.mp4 */ 357);\n\nvar Homepage = function Homepage() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactHtml5video2.default,\n      { autoPlay: true, muted: true },\n      _react2.default.createElement('source', { src: mp4, type: 'video/mp4' }),\n      ' Your browser does not support the video tag.'\n    )\n  );\n};\n\nexports.default = Homepage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9hcHAvc2tpbGxzcGFnZS5qc3g/ZWU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJ3JlYWN0LWh0bWw1dmlkZW8nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5jb25zdCBtcDQgPSByZXF1aXJlKCcuLi9wdWJsaWMvdmlkZW8ubXA0Jyk7XG5cbmNvbnN0IEhvbWVwYWdlID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxWaWRlbyBhdXRvUGxheSBtdXRlZD5cbiAgICAgIDxzb3VyY2Ugc3JjPXttcDR9IHR5cGU9XCJ2aWRlby9tcDRcIi8+IFlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSB2aWRlbyB0YWcuIFxuICAgIDwvVmlkZW8+XG4gIDwvZGl2PlxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2FwcC9za2lsbHNwYWdlLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBREE7QUFDQTtBQVFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})