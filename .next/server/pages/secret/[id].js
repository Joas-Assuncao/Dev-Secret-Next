module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/secret/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/secret/[id].js":
/*!******************************!*\
  !*** ./pages/secret/[id].js ***!
  \******************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/Headers/AdminSecretHeader */ "./src/components/Headers/AdminSecretHeader.js");
/* harmony import */ var _src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/Headers/SecretHeader */ "./src/components/Headers/SecretHeader.js");
/* harmony import */ var _src_components_Participants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/Participants */ "./src/components/Participants.js");


var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\pages\\secret\\[id].js";




function Secret({
  participants,
  hasDrew,
  isAdmin
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_AdminSecretHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 20
    }, this), !isAdmin && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Headers_SecretHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_components_Participants__WEBPACK_IMPORTED_MODULE_3__["default"], {
      showButton: isAdmin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

async function getServerSideProps(context) {
  return {
    props: {
      participants: [],
      hasDrew: false,
      isAdmin: true
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Secret);

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\Button.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "s50478-0"
})(["border:none;cursor:pointer;padding:15px 30px;font-size:14px;display:block;border-radius:50px;margin:10px 0;background-color:", ";"], ({
  theme
}) => theme.colors.secondary);
function Button(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledButton, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/Containers/ImageContainer.js":
/*!*****************************************************!*\
  !*** ./src/components/Containers/ImageContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\Containers\\ImageContainer.js";

const Background = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ImageContainer__Background",
  componentId: "l9auz2-0"
})(["background-image:url('/background.png');background-position:center;background-repeat:no-repeat;background-size:cover;"]);
function ImageContainer({
  children
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Background, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/Headers/AdminSecretHeader.js":
/*!*****************************************************!*\
  !*** ./src/components/Headers/AdminSecretHeader.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminSecretHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Input */ "./src/components/Input.js");

var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\Headers\\AdminSecretHeader.js";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AdminSecretHeader__Container",
  componentId: "sc-1rf8q7b-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "AdminSecretHeader__DivForm",
  componentId: "sc-1rf8q7b-1"
})(["color:", ";padding:20px;max-width:400px;"], ({
  theme
}) => theme.colors.light);
function AdminSecretHeader() {
  const link = "https://link.com/sala";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Compartilhe essa sala com seus amigos!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: link,
        disabled: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Headers/SecretHeader.js":
/*!************************************************!*\
  !*** ./src/components/Headers/SecretHeader.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdminSecretHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Containers/ImageContainer */ "./src/components/Containers/ImageContainer.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Logo */ "./src/components/Logo.js");
/* harmony import */ var _NameEmailForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../NameEmailForm */ "./src/components/NameEmailForm.js");

var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\Headers\\SecretHeader.js";




const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SecretHeader__Container",
  componentId: "sc-1uyg66o-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;color:", ";"], ({
  theme
}) => theme.colors.light);
const DivForm = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "SecretHeader__DivForm",
  componentId: "sc-1uyg66o-1"
})(["display:flex;flex-direction:row;align-items:center;justify-content:center;flex-shrink:0;"]);
function AdminSecretHeader() {
  const link = "https://link.com/sala";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Containers_ImageContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA foi convidado para participar deste amigo secreto!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DivForm, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NameEmailForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        buttonText: "Participar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Input.js":
/*!*********************************!*\
  !*** ./src/components/Input.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputComponent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\Input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input",
  componentId: "sc-1nvkxom-0"
})(["padding:20px;color:", ";background-color:", ";border:0;border-radius:10px;width:88%;&:focus{border:none;outline:none;}&::placeholder{color:", ";}"], ({
  theme
}) => theme.colors.primary, ({
  theme
}) => theme.colors.primaryLight, ({
  theme
}) => theme.colors.primary);
function InputComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Input, _objectSpread({}, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Logo.js":
/*!********************************!*\
  !*** ./src/components/Logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\Logo.js";

const H1 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h1.withConfig({
  displayName: "Logo__H1",
  componentId: "sc-1dwg1yw-0"
})(["font-size:64px;color:", ""], ({
  theme
}) => theme.colors.light);
function Logo() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H1, {
    children: '{Dev} Oculto'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/components/NameEmailForm.js":
/*!*****************************************!*\
  !*** ./src/components/NameEmailForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./src/components/Input.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./src/components/Button.js");

var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\NameEmailForm.js";



const Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "NameEmailForm__Form",
  componentId: "sc-1y2pkam-0"
})(["flex:1;display:flex;max-width:900px;padding:20px;@media (max-width:500px){flex-direction:column;}> input,button{margin:10px;}"]);

function NameEmailForm({
  buttonText
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Form, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      placeholder: "Seu nome",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
      type: "email",
      placeholder: "Seu email",
      required: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: buttonText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

NameEmailForm.defaultProps = {
  buttonText: "Criar"
};
/* harmony default export */ __webpack_exports__["default"] = (NameEmailForm);

/***/ }),

/***/ "./src/components/Participants.js":
/*!****************************************!*\
  !*** ./src/components/Participants.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Participants; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\jasal\\Documents\\devoculto-frontend\\src\\components\\Participants.js";


const H4 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__H4",
  componentId: "sc-17ajueh-0"
})(["text-align:center;"]);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__Container",
  componentId: "sc-17ajueh-1"
})(["display:flex;padding:5px 20px;justify-content:center;align-items:center;flex-direction:column;"]);
const ParticipantDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__ParticipantDiv",
  componentId: "sc-17ajueh-2"
})(["display:flex;align-items:center;"]);
const ParticipantDelete = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Participants__ParticipantDelete",
  componentId: "sc-17ajueh-3"
})(["color:", ";cursor:pointer;"], ({
  theme
}) => theme.colors.primary);

const Participant = ({
  showButton
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDiv, {
  children: [showButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ParticipantDelete, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_2__["RiDeleteBin2Fill"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 7
  }, undefined), "Nome (email@gmail.com)"]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 27,
  columnNumber: 3
}, undefined);

function Participants({
  showButton
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(H4, {
      children: "Participantes:"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Participant, {
        showButton: showButton
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2VjcmV0Ly5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVycy9JbWFnZUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXJzL0FkbWluU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvU2VjcmV0SGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmFtZUVtYWlsRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9QYXJ0aWNpcGFudHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIlNlY3JldCIsInBhcnRpY2lwYW50cyIsImhhc0RyZXciLCJpc0FkbWluIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsInByb3BzIiwiU3R5bGVkQnV0dG9uIiwic3R5bGVkIiwiYnV0dG9uIiwidGhlbWUiLCJjb2xvcnMiLCJzZWNvbmRhcnkiLCJCdXR0b24iLCJCYWNrZ3JvdW5kIiwiZGl2IiwiSW1hZ2VDb250YWluZXIiLCJjaGlsZHJlbiIsIkNvbnRhaW5lciIsImxpZ2h0IiwiRGl2Rm9ybSIsIkFkbWluU2VjcmV0SGVhZGVyIiwibGluayIsIklucHV0IiwiaW5wdXQiLCJwcmltYXJ5IiwicHJpbWFyeUxpZ2h0IiwiSW5wdXRDb21wb25lbnQiLCJIMSIsImgxIiwiTG9nbyIsIkZvcm0iLCJmb3JtIiwiTmFtZUVtYWlsRm9ybSIsImJ1dHRvblRleHQiLCJkZWZhdWx0UHJvcHMiLCJINCIsIlBhcnRpY2lwYW50RGl2IiwiUGFydGljaXBhbnREZWxldGUiLCJQYXJ0aWNpcGFudCIsInNob3dCdXR0b24iLCJQYXJ0aWNpcGFudHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWlCO0FBQUVDLGNBQUY7QUFBZ0JDLFNBQWhCO0FBQXlCQztBQUF6QixDQUFqQixFQUFxRDtBQUNuRCxzQkFDRTtBQUFBLGVBRUlBLE9BQU8saUJBQUkscUVBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZmLEVBS0ks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QTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQVlpQixTQUFTQyxZQUFULENBQXVCO0FBQUVEO0FBQUYsQ0FBdkIsRUFBdUM7QUFDdEQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0UscUVBQUMsV0FBRDtBQUFhLGtCQUFVLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLFdBQUQ7QUFBYSxrQkFBVSxFQUFFQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSxxRUFBQyxXQUFEO0FBQWEsa0JBQVUsRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUUscUVBQUMsV0FBRDtBQUFhLGtCQUFVLEVBQUVBO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFLHFFQUFDLFdBQUQ7QUFBYSxrQkFBVSxFQUFFQTtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRSxxRUFBQyxXQUFEO0FBQWEsa0JBQVUsRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFhRCxDOzs7Ozs7Ozs7OztBQ25ERCwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9zZWNyZXQvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvc2VjcmV0L1tpZF0uanNcIik7XG4iLCJcclxuaW1wb3J0IEFkbWluU2VjcmV0SGVhZGVyIGZyb20gJy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRlcnMvQWRtaW5TZWNyZXRIZWFkZXInXHJcbmltcG9ydCBTZWNyZXRIZWFkZXIgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZGVycy9TZWNyZXRIZWFkZXInXHJcbmltcG9ydCBQYXJ0aWNpcGFudHMgZnJvbSAnLi4vLi4vc3JjL2NvbXBvbmVudHMvUGFydGljaXBhbnRzJ1xyXG5cclxuZnVuY3Rpb24gU2VjcmV0ICh7IHBhcnRpY2lwYW50cywgaGFzRHJldywgaXNBZG1pbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtcclxuICAgICAgICBpc0FkbWluICYmIDxBZG1pblNlY3JldEhlYWRlciAvPlxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICAhaXNBZG1pbiAmJiA8U2VjcmV0SGVhZGVyIC8+XHJcbiAgICAgIH1cclxuICAgICAgPFBhcnRpY2lwYW50cyBcclxuICAgICAgICBzaG93QnV0dG9uPXtpc0FkbWlufVxyXG4gICAgICAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzIChjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBhcnRpY2lwYW50czogW10sXHJcbiAgICAgIGhhc0RyZXc6IGZhbHNlLFxyXG4gICAgICBpc0FkbWluOiB0cnVlLFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3JldCIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBTdHlsZWRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnNlY29uZGFyeX07XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbiAocHJvcHMpIHtcclxuICByZXR1cm4gPFN0eWxlZEJ1dHRvbiB7Li4ucHJvcHN9IC8+XHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgQmFja2dyb3VuZCA9IHN0eWxlZC5kaXZgXHJcbiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9iYWNrZ3JvdW5kLnBuZycpO1xyXG4gYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlQ29udGFpbmVyICh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gPEJhY2tncm91bmQ+eyBjaGlsZHJlbiB9PC9CYWNrZ3JvdW5kPlxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmltcG9ydCBJbWFnZUNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL0ltYWdlQ29udGFpbmVyJ1xyXG5pbXBvcnQgTG9nbyBmcm9tICcuLi9Mb2dvJ1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07ICBcclxuYFxyXG5cclxuY29uc3QgRGl2Rm9ybSA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLmxpZ2h0fTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluU2VjcmV0SGVhZGVyICgpIHtcclxuICBjb25zdCBsaW5rID0gXCJodHRwczovL2xpbmsuY29tL3NhbGFcIlxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExvZ28gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxEaXZGb3JtPlxyXG4gICAgICAgIDxwPkNvbXBhcnRpbGhlIGVzc2Egc2FsYSBjb20gc2V1cyBhbWlnb3MhPC9wPlxyXG4gICAgICAgIDxJbnB1dCB2YWx1ZT17bGlua30gZGlzYWJsZWQgLz5cclxuICAgICAgPC9EaXZGb3JtPlxyXG4gICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICApXHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW1wb3J0IEltYWdlQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvSW1hZ2VDb250YWluZXInXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL0xvZ28nXHJcbmltcG9ydCBOYW1lRW1haWxGb3JtIGZyb20gJy4uL05hbWVFbWFpbEZvcm0nXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9ycy5saWdodH07ICBcclxuYFxyXG5cclxuY29uc3QgRGl2Rm9ybSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluU2VjcmV0SGVhZGVyICgpIHtcclxuICBjb25zdCBsaW5rID0gXCJodHRwczovL2xpbmsuY29tL3NhbGFcIlxyXG4gIHJldHVybiAoXHJcbiAgICA8SW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPExvZ28gLz5cclxuICAgICAgICA8cD5Wb2PDqiBmb2kgY29udmlkYWRvIHBhcmEgcGFydGljaXBhciBkZXN0ZSBhbWlnbyBzZWNyZXRvITwvcD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxEaXZGb3JtPlxyXG4gICAgICAgIDxOYW1lRW1haWxGb3JtIFxyXG4gICAgICAgICAgYnV0dG9uVGV4dD1cIlBhcnRpY2lwYXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRGl2Rm9ybT5cclxuICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnlMaWdodH07XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDg4JTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnl9O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRDb21wb25lbnQgKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dCB7Li4ucHJvcHN9IC8+XHJcbiAgKVxyXG59IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IEgxID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMubGlnaHR9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28gKCkge1xyXG4gIHJldHVybiA8SDE+eyd7RGV2fSBPY3VsdG8nfTwvSDE+XHJcbn0iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXHJcblxyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGZsZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gID4gaW5wdXQsIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5mdW5jdGlvbiBOYW1lRW1haWxGb3JtICh7IGJ1dHRvblRleHQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybT5cclxuICAgICAgPElucHV0XHJcbiAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBub21lXCJcclxuICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxJbnB1dCBcclxuICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICBwbGFjZWhvbGRlcj1cIlNldSBlbWFpbFwiXHJcbiAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8QnV0dG9uPnsgYnV0dG9uVGV4dCB9PC9CdXR0b24+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG5OYW1lRW1haWxGb3JtLmRlZmF1bHRQcm9wcyA9IHtcclxuICBidXR0b25UZXh0OiBcIkNyaWFyXCJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmFtZUVtYWlsRm9ybSIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFJpRGVsZXRlQmluMkZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcclxuXHJcbmNvbnN0IEg0ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuXHJcbmNvbnN0IFBhcnRpY2lwYW50RGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFBhcnRpY2lwYW50RGVsZXRlID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMucHJpbWFyeX07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5jb25zdCBQYXJ0aWNpcGFudCA9ICh7IHNob3dCdXR0b24gfSkgPT4gKFxyXG4gIDxQYXJ0aWNpcGFudERpdj5cclxuICAgIHtcclxuICAgICAgc2hvd0J1dHRvbiAmJiBcclxuICAgICAgPFBhcnRpY2lwYW50RGVsZXRlPlxyXG4gICAgICAgIDxSaURlbGV0ZUJpbjJGaWxsIC8+XHJcbiAgICAgIDwvUGFydGljaXBhbnREZWxldGU+XHJcbiAgICB9XHJcbiAgICBOb21lIChlbWFpbEBnbWFpbC5jb20pXHJcbiAgPC9QYXJ0aWNpcGFudERpdj5cclxuKVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJ0aWNpcGFudHMgKHsgc2hvd0J1dHRvbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIND5QYXJ0aWNpcGFudGVzOjwvSDQ+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFBhcnRpY2lwYW50IHNob3dCdXR0b249e3Nob3dCdXR0b259IC8+XHJcbiAgICAgICAgPFBhcnRpY2lwYW50IHNob3dCdXR0b249e3Nob3dCdXR0b259IC8+XHJcbiAgICAgICAgPFBhcnRpY2lwYW50IHNob3dCdXR0b249e3Nob3dCdXR0b259IC8+XHJcbiAgICAgICAgPFBhcnRpY2lwYW50IHNob3dCdXR0b249e3Nob3dCdXR0b259IC8+XHJcbiAgICAgICAgPFBhcnRpY2lwYW50IHNob3dCdXR0b249e3Nob3dCdXR0b259IC8+XHJcbiAgICAgICAgPFBhcnRpY2lwYW50IHNob3dCdXR0b249e3Nob3dCdXR0b259IC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC8+ICBcclxuICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==