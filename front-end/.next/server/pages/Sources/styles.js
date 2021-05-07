(function() {
var exports = {};
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 2176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourcesDiv": function() { return /* binding */ SourcesDiv; },
/* harmony export */   "Button": function() { return /* binding */ Button; },
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SourcesDiv = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  position: relative;
  margin-top: 10%;
`;
const Button = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  height: ${props => props.active ? "220px" : "160px"};
  width: ${props => props.active ? "220px" : "160px"};

  border-radius: 50px;
  transition: 0.5s;
  margin: 10px;

  color: white;
  cursor: pointer;
  /* background-color: #1fc8db; */
  background-color: ${props => props.visible ? "#1fc8db" : "#f00"};
  /*  */
  &:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);
    box-shadow: 0px 0px 10px 2px rgba(30, 160, 240, 1);
    height: 220px;
    width: 220px;
  }
  &:focus {
    outline: none;
  }
`;
const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;

  padding: 0 2%;
  height: 100%;
  display: flex;

  justify-content: center;
`; // export const SourcesDiv = styled.div `
//   width: 100%;
//   height: 100%;
//   background-color: rgb(45, 146, 235);
// `;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(2176));
module.exports = __webpack_exports__;

})();