webpackHotUpdate(0,{

/***/ 684:
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./client/app/skillspage.jsx ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 20);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHtml5video = __webpack_require__(/*! react-html5video */ 335);\n\nvar _reactHtml5video2 = _interopRequireDefault(_reactHtml5video);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ 677);\n\nvar _reactRouterTransition = __webpack_require__(/*! react-router-transition */ 685);\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ 599);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Skillspage = function Skillspage() {\n  return _react2.default.createElement(\n    _reactRouterTransition.RouteTransition,\n    {\n      pathname: '/skillspage',\n      atEnter: { translateX: 100 },\n      atLeave: { translateX: -100 },\n      atActive: { translateX: 0 },\n      mapStyles: function mapStyles(styles) {\n        return { transform: 'translateX(' + styles.translateX + '%)' };\n      }\n    },\n    _react2.default.createElement(\n      'div',\n      { className: 'skillsbg' },\n      _react2.default.createElement(\n        'div',\n        { className: 'container', id: 'skills' },\n        _react2.default.createElement(\n          _reactRouter.Link,\n          { className: 'btn btn-default homebutton', to: '/' },\n          'Home'\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'skillsheader' },\n          _react2.default.createElement(\n            'h1',\n            null,\n            'SKILLS'\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'row' },\n          _react2.default.createElement(\n            'div',\n            { className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'skillList' },\n              _react2.default.createElement(\n                'h4',\n                null,\n                _react2.default.createElement('i', { className: 'fa fa-book fa-4x' }),\n                ' Languages'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'JavaScript'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'HTML'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'CSS'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'SQL'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Java'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'skillList' },\n              _react2.default.createElement(\n                'h4',\n                null,\n                _react2.default.createElement('i', { className: 'fa fa-skyatlas fa-4x' }),\n                ' Frameworks'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'React.js'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Redux'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'AngularJS'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Node.js'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Express.js'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'D3.js'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Backbone.js'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'jQuery'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Bootstrap'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'col-xs-4 col-sm-4 col-md-4 col-lg-4 col-centered holder' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'skillList' },\n              _react2.default.createElement(\n                'h4',\n                null,\n                _react2.default.createElement('i', { className: 'fa fa-wrench fa-4x' }),\n                ' Tools'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Git'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'PostgreSQL'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'MySQL'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'MongoDB'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Webpack'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Jasmine'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Heroku'\n              )\n            )\n          )\n        ),\n        _react2.default.createElement(\n          'div',\n          { className: 'row' },\n          _react2.default.createElement(\n            'div',\n            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6 col-centered holder' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'skillList' },\n              _react2.default.createElement(\n                'h4',\n                null,\n                _react2.default.createElement('i', { className: 'fa fa-plus fa-4x' }),\n                ' Additional'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Scrum methodology'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Trello'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Asana'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Sketch wireframing'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Adobe Photoshop'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Visual Studio'\n              )\n            )\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'col-xs-6 col-sm-6 col-md-6 col-lg-6 col-centered holder' },\n            _react2.default.createElement(\n              'ul',\n              { className: 'skillList' },\n              _react2.default.createElement(\n                'h4',\n                null,\n                _react2.default.createElement('i', { className: 'fa fa-graduation-cap fa-4x' }),\n                ' Education'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Brown University'\n              ),\n              _react2.default.createElement(\n                'li',\n                null,\n                'Hack Reactor'\n              )\n            )\n          )\n        )\n      )\n    )\n  );\n};\n\nexports.default = Skillspage;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9hcHAvc2tpbGxzcGFnZS5qc3g/ZWU1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJ3JlYWN0LWh0bWw1dmlkZW8nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZVRyYW5zaXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItdHJhbnNpdGlvbic7XG5pbXBvcnQgeyBPdmVybGF5VHJpZ2dlciwgVG9vbHRpcCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IFNraWxsc3BhZ2UgPSAoKSA9PiAoXG4gIDxSb3V0ZVRyYW5zaXRpb25cbiAgcGF0aG5hbWU9e2Avc2tpbGxzcGFnZWB9XG4gIGF0RW50ZXI9e3sgdHJhbnNsYXRlWDogMTAwIH19XG4gIGF0TGVhdmU9e3sgdHJhbnNsYXRlWDogLTEwMCB9fVxuICBhdEFjdGl2ZT17eyB0cmFuc2xhdGVYOiAwIH19XG4gIG1hcFN0eWxlcz17c3R5bGVzID0+ICh7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtzdHlsZXMudHJhbnNsYXRlWH0lKWAgfSl9XG4+XG4gIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzYmdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgaWQ9XCJza2lsbHNcIj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgaG9tZWJ1dHRvblwiIHRvPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDE+U0tJTExTPC9oMT4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC14cy00IGNvbC1zbS00IGNvbC1tZC00IGNvbC1sZy00IGNvbC1jZW50ZXJlZCBob2xkZXInPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNraWxsTGlzdFwiPlxuICAgICAgICAgICAgICA8aDQ+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYm9vayBmYS00eFwiPjwvaT4gTGFuZ3VhZ2VzPC9oND5cbiAgICAgICAgICAgICAgPGxpPkphdmFTY3JpcHQ8L2xpPlxuICAgICAgICAgICAgICA8bGk+SFRNTDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5DU1M8L2xpPlxuICAgICAgICAgICAgICA8bGk+U1FMPC9saT5cbiAgICAgICAgICAgICAgPGxpPkphdmE8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTQgY29sLWNlbnRlcmVkIGhvbGRlcic+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGxMaXN0XCI+XG4gICAgICAgICAgICAgIDxoND48aSBjbGFzc05hbWU9XCJmYSBmYS1za3lhdGxhcyBmYS00eFwiPjwvaT4gRnJhbWV3b3JrczwvaDQ+XG4gICAgICAgICAgICAgIDxsaT5SZWFjdC5qczwvbGk+XG4gICAgICAgICAgICAgIDxsaT5SZWR1eDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Bbmd1bGFySlM8L2xpPlxuICAgICAgICAgICAgICA8bGk+Tm9kZS5qczwvbGk+XG4gICAgICAgICAgICAgIDxsaT5FeHByZXNzLmpzPC9saT5cbiAgICAgICAgICAgICAgPGxpPkQzLmpzPC9saT5cbiAgICAgICAgICAgICAgPGxpPkJhY2tib25lLmpzPC9saT5cbiAgICAgICAgICAgICAgPGxpPmpRdWVyeTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Cb290c3RyYXA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXhzLTQgY29sLXNtLTQgY29sLW1kLTQgY29sLWxnLTQgY29sLWNlbnRlcmVkIGhvbGRlcic+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2tpbGxMaXN0XCI+XG4gICAgICAgICAgICAgIDxoND48aSBjbGFzc05hbWU9XCJmYSBmYS13cmVuY2ggZmEtNHhcIj48L2k+IFRvb2xzPC9oND5cbiAgICAgICAgICAgICAgPGxpPkdpdDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5Qb3N0Z3JlU1FMPC9saT5cbiAgICAgICAgICAgICAgPGxpPk15U1FMPC9saT5cbiAgICAgICAgICAgICAgPGxpPk1vbmdvREI8L2xpPlxuICAgICAgICAgICAgICA8bGk+V2VicGFjazwvbGk+XG4gICAgICAgICAgICAgIDxsaT5KYXNtaW5lPC9saT5cbiAgICAgICAgICAgICAgPGxpPkhlcm9rdTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctNiBjb2wtY2VudGVyZWQgaG9sZGVyJz5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJza2lsbExpc3RcIj5cbiAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMgZmEtNHhcIj48L2k+IEFkZGl0aW9uYWw8L2g0PlxuICAgICAgICAgICAgICA8bGk+U2NydW0gbWV0aG9kb2xvZ3k8L2xpPlxuICAgICAgICAgICAgICA8bGk+VHJlbGxvPC9saT5cbiAgICAgICAgICAgICAgPGxpPkFzYW5hPC9saT5cbiAgICAgICAgICAgICAgPGxpPlNrZXRjaCB3aXJlZnJhbWluZzwvbGk+XG4gICAgICAgICAgICAgIDxsaT5BZG9iZSBQaG90b3Nob3A8L2xpPlxuICAgICAgICAgICAgICA8bGk+VmlzdWFsIFN0dWRpbzwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtNiBjb2wtc20tNiBjb2wtbWQtNiBjb2wtbGctNiBjb2wtY2VudGVyZWQgaG9sZGVyJz5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJza2lsbExpc3RcIj5cbiAgICAgICAgICAgICAgPGg0PjxpIGNsYXNzTmFtZT1cImZhIGZhLWdyYWR1YXRpb24tY2FwIGZhLTR4XCI+PC9pPiBFZHVjYXRpb248L2g0PlxuICAgICAgICAgICAgICA8bGk+QnJvd24gVW5pdmVyc2l0eTwvbGk+XG4gICAgICAgICAgICAgIDxsaT5IYWNrIFJlYWN0b3I8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L1JvdXRlVHJhbnNpdGlvbj5cblxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU2tpbGxzcGFnZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2xpZW50L2FwcC9za2lsbHNwYWdlLmpzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkE7QUFEQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQURBO0FBekJBO0FBc0NBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBBO0FBREE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFaQTtBQTNDQTtBQURBO0FBUEE7QUFEQTtBQUNBO0FBNkVBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})