/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../common/hooks/useResponse.ts":
/*!***********************************************************************!*\
  !*** /home/odysseus/Workspaces/lydia/src/common/hooks/useResponse.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Response */ "../../common/utils/Response.ts");



function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // [About]
// The "useResponse" hook takes 2 arguments. The first argument is
// an array of strings or a single string that represents the name
// of a registered Mongoose model. The first argument is the resulting
// Mongoose model instance(s). The second argument is a new "Response"
// object instance, which is used to handle the returning data in a standard
// format. All arguments passed the first 2, are standard GraphQL resolver
// arguments, in the standards order.
//
// Example Usage:
// export default useResponse("Model", (Model, response, root, args) => {
//     try {
//         Model.find(...);
//
//         // Do stuff...
//
//         response.send();
//     } catch(e) {
//         throw e;
//     }
// }

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var models = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var asyncCallback = arguments.length > 1 ? arguments[1] : undefined;
  return function () {
    for (var _len = arguments.length, resolverArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      resolverArgs[_key] = arguments[_key];
    }

    return new Promise( /*#__PURE__*/function () {
      var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
        var modelInstances, _iterator, _step, model;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                modelInstances = [];

                if (!(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(models) === "String")) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.model(models);

              case 5:
                modelInstances = _context.sent;
                _context.next = 30;
                break;

              case 8:
                if (!(Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(models) === "Array")) {
                  _context.next = 30;
                  break;
                }

                _iterator = _createForOfIteratorHelper(models);
                _context.prev = 10;

                _iterator.s();

              case 12:
                if ((_step = _iterator.n()).done) {
                  _context.next = 21;
                  break;
                }

                model = _step.value;
                _context.t0 = modelInstances;
                _context.next = 17;
                return mongoose__WEBPACK_IMPORTED_MODULE_3___default.a.model(model);

              case 17:
                _context.t1 = _context.sent;

                _context.t0.push.call(_context.t0, _context.t1);

              case 19:
                _context.next = 12;
                break;

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t2 = _context["catch"](10);

                _iterator.e(_context.t2);

              case 26:
                _context.prev = 26;

                _iterator.f();

                return _context.finish(26);

              case 29:
                if (modelInstances.length === 1) modelInstances = modelInstances[0];

              case 30:
                _context.next = 32;
                return asyncCallback.apply(void 0, [modelInstances, new _utils_Response__WEBPACK_IMPORTED_MODULE_4__["default"](resolve)].concat(resolverArgs));

              case 32:
                _context.next = 37;
                break;

              case 34:
                _context.prev = 34;
                _context.t3 = _context["catch"](0);
                reject(_context.t3);

              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 34], [10, 23, 26, 29]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());
  };
});

/***/ }),

/***/ "../../common/utils/Response.ts":
/*!********************************************************************!*\
  !*** /home/odysseus/Workspaces/lydia/src/common/utils/Response.ts ***!
  \********************************************************************/
/*! exports provided: STATUS_CODES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS_CODES", function() { return STATUS_CODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var STATUS_CODES = function () {
  var codes = {
    WIP: {
      code: -1,
      msg: "WIP"
    },
    THROW: {
      code: -1,
      msg: "Unable to complete request"
    },
    OK: {
      code: 200,
      msg: "Ok"
    },
    NOT_FOUND: {
      code: 404,
      msg: "Not found"
    },
    ID_REQUIRED: {
      code: 404.6,
      msg: "An \"_id\" is required, but not provided."
    },
    LEXICON_NOT_FOUND: {
      code: 404.1,
      msg: "Lexicon not found"
    },
    INPUT_NOT_FOUND: {
      code: 404.2,
      msg: "Lexicon input not found"
    },
    ENTITY_NOT_FOUND: {
      code: 404.3,
      msg: "Lexicon entity not found"
    },
    LEXICON_INPUT_UPDATE_FAILURE: {
      code: 404.4,
      msg: "Lexicon not updated"
    },
    LEXICON_CREATION_FAILURE: {
      code: 404.5,
      msg: "Lexicon not found"
    },
    LEXICON_REMOVAL_FAILURE: {
      code: 500.1,
      msg: "Lexicon not unable to be removed"
    },
    LEXICON_ENTITY_EXISTS: {
      code: 500.2,
      msg: "Lexicon entity already exists"
    },
    LEXICON_ENTITY_UPDATE_FAILURE: {
      code: 500.3,
      msg: "Lexicon entity already exists"
    },
    ENTITY_LABEL_NOT_FOUND: {
      code: 404.6,
      msg: "Entity not found"
    },
    ENTITY_LABEL_EXISTS: {
      code: 404.7,
      msg: "Entity already exists"
    },
    THREAD_NUMBER_INVALID_EN_US: {
      code: 500.4,
      msg: "Invalid number detected, only use en-US phone numbers."
    },
    THREAD_CREATE_FAILURE: {
      code: 500.5,
      msg: "Unable to create a new thread."
    },
    THREAD_REMOVE_FAILURE: {
      code: 500.6,
      msg: "Unable to remove thread."
    },
    THREAD_UPDATE_FAILURE: {
      code: 500.7,
      msg: "Unable to update thread."
    }
  };
  return {
    asObject: function asObject() {
      return codes;
    },
    asArray: function asArray() {
      var array = {};

      for (var code in codes) {
        array[code] = Object.values(codes[code]);
      }

      return array;
    }
  };
}();

var _default = /*#__PURE__*/function () {
  function _default(resolve) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _default);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "resolve", null);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(this, "response", {
      code: 0,
      errors: [],
      data: null
    });

    this.resolve = resolve;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(_default, [{
    key: "setError",
    value: function () {
      var _setError = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(code, msg) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.code = code;
                this.errors = [msg];

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setError(_x, _x2) {
        return _setError.apply(this, arguments);
      }

      return setError;
    }()
  }, {
    key: "setData",
    value: function () {
      var _setData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(data) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.data = data;
                this.code = 200;

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function setData(_x3) {
        return _setData.apply(this, arguments);
      }

      return setData;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var code,
            _args3 = arguments;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                code = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
                if (code != null) this.code = code;
                if (this.resolve != null) this.resolve(_objectSpread({}, this.response));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function send() {
        return _send.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: "code",
    set: function set(value) {
      this.response.code = value;
    },
    get: function get() {
      return this.response.code;
    }
  }, {
    key: "errors",
    set: function set(value) {
      this.response.errors = value;
    },
    get: function get() {
      return this.response.errors;
    }
  }, {
    key: "data",
    set: function set(value) {
      this.response.data = value;
    },
    get: function get() {
      return this.response.data;
    }
  }]);

  return _default;
}();



/***/ }),

/***/ "../../common/utils/gqlSchemaBuilder.ts":
/*!****************************************************************************!*\
  !*** /home/odysseus/Workspaces/lydia/src/common/utils/gqlSchemaBuilder.ts ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "ramda");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ramda__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var init = {
  typeDefs: [],
  resolvers: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var makeGql = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var typeDefs = schema.typeDefs,
      resolvers = schema.resolvers,
      Queries = {},
      Mutations = {},
      Types = {};
  if (typeDefs.length > 0) typeDefs = typeDefs.join("");
  if (makeGql) typeDefs = Object(apollo_server__WEBPACK_IMPORTED_MODULE_3__["gql"])(typeDefs);

  if (resolvers.length > 0) {
    var _iterator = _createForOfIteratorHelper(resolvers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _ref2 = _step.value;

        var Query = _ref2.Query,
            Mutation = _ref2.Mutation,
            Type = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["Query", "Mutation"]);

        Types = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["merge"])(Types, Type);
        Queries = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["merge"])(Queries, Query);
        Mutations = Object(ramda__WEBPACK_IMPORTED_MODULE_2__["merge"])(Mutations, Mutation);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return {
    typeDefs: typeDefs,
    resolvers: _objectSpread({
      Query: Queries,
      Mutation: Mutations
    }, Types)
  };
});

/***/ }),

/***/ "./src/graphql.ts":
/*!************************!*\
  !*** ./src/graphql.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/federation */ "@apollo/federation");
/* harmony import */ var _apollo_federation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_federation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonUtils_gqlSchemaBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @commonUtils/gqlSchemaBuilder */ "../../common/utils/gqlSchemaBuilder.ts");
/* harmony import */ var _schemas_Lexicon_Lexicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schemas/Lexicon/Lexicon */ "./src/schemas/Lexicon/Lexicon.ts");
/* harmony import */ var _schemas_Entity_Entity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schemas/Entity/Entity */ "./src/schemas/Entity/Entity.ts");
/* harmony import */ var _schemas_Thread_Thread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schemas/Thread/Thread */ "./src/schemas/Thread/Thread.ts");






dotenv__WEBPACK_IMPORTED_MODULE_0___default.a.config();
/* harmony default export */ __webpack_exports__["default"] = ({
  // playground: !(process.env.PLAYGROUND == "true") ? false : {
  //     settings: {
  //         "request.credentials": "include"
  //     }
  // },
  schema: Object(_apollo_federation__WEBPACK_IMPORTED_MODULE_1__["buildFederatedSchema"])([Object(_commonUtils_gqlSchemaBuilder__WEBPACK_IMPORTED_MODULE_2__["default"])({
    typeDefs: [_schemas_Entity_Entity__WEBPACK_IMPORTED_MODULE_4__["typeDefs"], _schemas_Lexicon_Lexicon__WEBPACK_IMPORTED_MODULE_3__["typeDefs"], _schemas_Thread_Thread__WEBPACK_IMPORTED_MODULE_5__["typeDefs"]],
    resolvers: [_schemas_Entity_Entity__WEBPACK_IMPORTED_MODULE_4__["resolvers"], _schemas_Lexicon_Lexicon__WEBPACK_IMPORTED_MODULE_3__["resolvers"], _schemas_Thread_Thread__WEBPACK_IMPORTED_MODULE_5__["resolvers"]]
  }, true)])
});

/***/ }),

/***/ "./src/hooks/useResolverMiddleware.ts":
/*!********************************************!*\
  !*** ./src/hooks/useResolverMiddleware.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var init = {
  Query: {},
  Mutation: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var resolvers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
  var middleware = arguments.length > 1 ? arguments[1] : undefined;

  try {
    var Query = resolvers.Query,
        Mutation = resolvers.Mutation,
        Types = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(resolvers, ["Query", "Mutation"]);

    var queryCnt = Object.keys(Query).length,
        queryMethods = Object.keys(Query);
    var mutationCnt = Object.keys(Mutation).length,
        mutationMethods = Object.keys(Mutation);
    if (queryCnt > 0) for (var i = 0; i < queryMethods.length; i++) {
      var _iterator = _createForOfIteratorHelper(middleware),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mw = _step.value;
          Query[queryMethods[i]] = mw(Query[queryMethods[i]]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (mutationCnt > 0) for (var _i = 0; _i < mutationMethods.length; _i++) {
      var _iterator2 = _createForOfIteratorHelper(middleware),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _mw = _step2.value;
          Mutation[mutationMethods[_i]] = _mw(Mutation[mutationMethods[_i]]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    return _objectSpread({
      Query: Query,
      Mutation: Mutation
    }, Types);
  } catch (e) {
    throw e;
  }
});

/***/ }),

/***/ "./src/middleware/applyArgsProto.ts":
/*!******************************************!*\
  !*** ./src/middleware/applyArgsProto.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (resolver) {
  return /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var _len,
        resolverArgs,
        _key,
        _args = arguments;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            for (_len = _args.length, resolverArgs = new Array(_len), _key = 0; _key < _len; _key++) {
              resolverArgs[_key] = _args[_key];
            }

            // Apply a parser to the args to instantiate the generic Object prototype
            // to the passed in "args" property. The second argument.
            resolverArgs[1] = JSON.parse(JSON.stringify(resolverArgs[1]));
            _context.next = 5;
            return resolver.apply(void 0, resolverArgs);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
});

/***/ }),

/***/ "./src/mongoose.ts":
/*!*************************!*\
  !*** ./src/mongoose.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! console */ "console");
/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(console__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);



dotenv__WEBPACK_IMPORTED_MODULE_2___default.a.config();

var db = mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connection,
    DB_CONNECTION = process.env.DB_CONNECTION,
    msg = function msg(_msg) {
  Object(console__WEBPACK_IMPORTED_MODULE_0__["log"])("> DB: ".bold + "" + _msg);
}; // Signal interrupt.


process.on("SIGINT", function () {
  db.close();
}); // Database events.

db.on("connecting", function () {
  msg("Connecting".cyan.bold);
});
db.on("connected", function () {
  msg("Connected".green.bold);
});
db.on("open", function () {
  msg("Open".green.bold);
});
db.on("disconnecting", function () {
  msg("Disconnecting".cyan.bold);
});
db.on("disconnected", function () {
  msg("Disconnected".yellow.bold);
});
db.on("close", function () {
  msg("Close".yellow.bold);
});
db.on("reconnected", function () {
  msg("Reconnected".cyan.bold);
});
db.on("error", function (err) {
  msg("Error".red.bold);
  Object(console__WEBPACK_IMPORTED_MODULE_0__["error"])(err);
});
mongoose__WEBPACK_IMPORTED_MODULE_1___default.a.connect(DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

/***/ }),

/***/ "./src/schemas/Entity/Entity.model.ts":
/*!********************************************!*\
  !*** ./src/schemas/Entity/Entity.model.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);



var EntitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
  created: Date,
  modified: Date,
  label: String,
  backgroundColor: {
    type: String,
    "default": null
  },
  accentColor: {
    type: String,
    "default": null
  }
}, {
  collection: "entity",
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
});
EntitySchema.statics.hasEntityById = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var _id,
      Entity,
      _args = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _id = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;

          if (!(_id == null)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", null);

        case 5:
          Entity = this.model("Entity");
          _context.next = 8;
          return Entity.countDocuments({
            _id: _id
          });

        case 8:
          _context.t0 = _context.sent;
          return _context.abrupt("return", _context.t0 != 0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
EntitySchema.statics.hasEntityByLabel = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var label,
      Entity,
      _args2 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          label = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;

          if (!(label == null)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", null);

        case 5:
          Entity = this.model("Entity");
          _context2.next = 8;
          return Entity.countDocuments({
            label: label
          });

        case 8:
          _context2.t0 = _context2.sent;
          return _context2.abrupt("return", _context2.t0 != 0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
})); // Register the model with Mongoose.

Object(mongoose__WEBPACK_IMPORTED_MODULE_2__["model"])("Entity", EntitySchema);

/***/ }),

/***/ "./src/schemas/Entity/Entity.ts":
/*!**************************************!*\
  !*** ./src/schemas/Entity/Entity.ts ***!
  \**************************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var _Entity_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entity.model */ "./src/schemas/Entity/Entity.model.ts");
/* harmony import */ var _hooks_useResolverMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/useResolverMiddleware */ "./src/hooks/useResolverMiddleware.ts");
/* harmony import */ var _middleware_applyArgsProto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middleware/applyArgsProto */ "./src/middleware/applyArgsProto.ts");
/* harmony import */ var _graphql_Entity_extend_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/Entity.extend.gql */ "./src/schemas/Entity/graphql/Entity.extend.gql");
/* harmony import */ var _graphql_Entity_query_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql/Entity.query.gql */ "./src/schemas/Entity/graphql/Entity.query.gql");
/* harmony import */ var _graphql_Entity_mutation_gql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql/Entity.mutation.gql */ "./src/schemas/Entity/graphql/Entity.mutation.gql");
/* harmony import */ var _graphql_Entity_type_gql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql/Entity.type.gql */ "./src/schemas/Entity/graphql/Entity.type.gql");
/* harmony import */ var _resolvers_queries_entities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/queries/entities */ "./src/schemas/Entity/resolvers/queries/entities.ts");
/* harmony import */ var _resolvers_queries_entityById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/queries/entityById */ "./src/schemas/Entity/resolvers/queries/entityById.ts");
/* harmony import */ var _resolvers_queries_entityByLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/queries/entityByLabel */ "./src/schemas/Entity/resolvers/queries/entityByLabel.ts");
/* harmony import */ var _resolvers_mutations_entityCreateOne__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/mutations/entityCreateOne */ "./src/schemas/Entity/resolvers/mutations/entityCreateOne.ts");
/* harmony import */ var _resolvers_mutations_entityUpdateOne__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/mutations/entityUpdateOne */ "./src/schemas/Entity/resolvers/mutations/entityUpdateOne.ts");
/* harmony import */ var _resolvers_mutations_entityRemoveOne__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/mutations/entityRemoveOne */ "./src/schemas/Entity/resolvers/mutations/entityRemoveOne.ts");
/* harmony import */ var _resolvers_mutations_entityUpdateOneColor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/mutations/entityUpdateOneColor */ "./src/schemas/Entity/resolvers/mutations/entityUpdateOneColor.ts");
/* harmony import */ var _resolvers_mutations_entityRemoveOneColor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/mutations/entityRemoveOneColor */ "./src/schemas/Entity/resolvers/mutations/entityRemoveOneColor.ts");
/* harmony import */ var _resolvers_mutations_entityCreateMany__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resolvers/mutations/entityCreateMany */ "./src/schemas/Entity/resolvers/mutations/entityCreateMany.ts");
/* harmony import */ var _resolvers_mutations_entityUpdateMany__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers/mutations/entityUpdateMany */ "./src/schemas/Entity/resolvers/mutations/entityUpdateMany.ts");
/* harmony import */ var _resolvers_mutations_entityRemoveMany__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/mutations/entityRemoveMany */ "./src/schemas/Entity/resolvers/mutations/entityRemoveMany.ts");
// Register the model.
 // Hooks

 // Middleware

 // Type Definitions




 // Query Resolvers



 // Mutation Resolvers









var typeDefs = [_graphql_Entity_extend_gql__WEBPACK_IMPORTED_MODULE_3__["default"], _graphql_Entity_query_gql__WEBPACK_IMPORTED_MODULE_4__["default"], _graphql_Entity_mutation_gql__WEBPACK_IMPORTED_MODULE_5__["default"], _graphql_Entity_type_gql__WEBPACK_IMPORTED_MODULE_6__["default"]].join("\n"),
    resolvers = Object(_hooks_useResolverMiddleware__WEBPACK_IMPORTED_MODULE_1__["default"])({
  Query: {
    entities: _resolvers_queries_entities__WEBPACK_IMPORTED_MODULE_7__["default"],
    entityById: _resolvers_queries_entityById__WEBPACK_IMPORTED_MODULE_8__["default"],
    entityByLabel: _resolvers_queries_entityByLabel__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  Mutation: {
    entityCreateOne: _resolvers_mutations_entityCreateOne__WEBPACK_IMPORTED_MODULE_10__["default"],
    entityUpdateOne: _resolvers_mutations_entityUpdateOne__WEBPACK_IMPORTED_MODULE_11__["default"],
    entityRemoveOne: _resolvers_mutations_entityRemoveOne__WEBPACK_IMPORTED_MODULE_12__["default"],
    entityUpdateOneColor: _resolvers_mutations_entityUpdateOneColor__WEBPACK_IMPORTED_MODULE_13__["default"],
    entityRemoveOneColor: _resolvers_mutations_entityRemoveOneColor__WEBPACK_IMPORTED_MODULE_14__["default"],
    entityCreateMany: _resolvers_mutations_entityCreateMany__WEBPACK_IMPORTED_MODULE_15__["default"],
    entityUpdateMany: _resolvers_mutations_entityUpdateMany__WEBPACK_IMPORTED_MODULE_16__["default"],
    entityRemoveMany: _resolvers_mutations_entityRemoveMany__WEBPACK_IMPORTED_MODULE_17__["default"]
  }
}, [_middleware_applyArgsProto__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ }),

/***/ "./src/schemas/Entity/graphql/Entity.extend.gql":
/*!******************************************************!*\
  !*** ./src/schemas/Entity/graphql/Entity.extend.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("extend type Query {\n    entities: EntityResponseArray\n    entityById(_id: ID!): EntityResponse\n    entityByLabel(label: String!): EntityResponse\n}\n\nextend type Mutation {\n    entityCreateOne(entity: EntityMutationInput!): EntityResponse\n    entityUpdateOne(_id: ID!, entity: EntityMutationInput!): EntityResponse\n    entityRemoveOne(_id: ID!): EntityResponse\n\n    entityUpdateOneColor(_id: ID!, color: EntityMutationColor): EntityResponse\n    entityRemoveOneColor(_id: ID!): EntityResponse\n\n    entityCreateMany(entities: [EntityMutationInput]!): EntityResponseArray\n    entityUpdateMany(entities: [EntityMutationInputWithId]!): EntityResponseArray\n    entityRemoveMany(ids: [ID]!): EntityResponseArray\n}");

/***/ }),

/***/ "./src/schemas/Entity/graphql/Entity.mutation.gql":
/*!********************************************************!*\
  !*** ./src/schemas/Entity/graphql/Entity.mutation.gql ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input EntityMutationInput {\n    label: String\n    backgroundColor: String\n    accentColor: String\n}\n\ninput EntityMutationInputWithId {\n    _id: ID!\n    label: String\n    backgroundColor: String\n    accentColor: String\n}\n\ninput EntityMutationColor {\n    backgroundColor: String\n    accentColor: String\n}");

/***/ }),

/***/ "./src/schemas/Entity/graphql/Entity.query.gql":
/*!*****************************************************!*\
  !*** ./src/schemas/Entity/graphql/Entity.query.gql ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/schemas/Entity/graphql/Entity.type.gql":
/*!****************************************************!*\
  !*** ./src/schemas/Entity/graphql/Entity.type.gql ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("type EntityResponse {\n    code: Float\n    errors: [String]\n    data: Entity\n}\n\ntype EntityResponseArray {\n    code: Float\n    errors: [String]\n    data: [Entity]\n}\n\ntype Entity @key(fields: \"_id\") {\n    _id: ID\n    created: String\n    modified: String\n    label: String\n    backgroundColor: String\n    accentColor: String\n}");

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityCreateMany.ts":
/*!********************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityCreateMany.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var entities, STATUS, newEntities, _iterator, _step, entity, newEntity;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            entities = _ref.entities;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            newEntities = [];
            _iterator = _createForOfIteratorHelper(entities);
            _context.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context.next = 18;
              break;
            }

            entity = _step.value;
            _context.next = 11;
            return Entity.hasEntityByLabel(entity.label);

          case 11:
            if (_context.sent) {
              _context.next = 16;
              break;
            }

            newEntity = new Entity(entity);
            _context.next = 15;
            return newEntity.save();

          case 15:
            newEntities.push(newEntity);

          case 16:
            _context.next = 7;
            break;

          case 18:
            _context.next = 23;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](5);

            _iterator.e(_context.t0);

          case 23:
            _context.prev = 23;

            _iterator.f();

            return _context.finish(23);

          case 26:
            _context.next = 28;
            return response.setData(newEntities);

          case 28:
            _context.next = 30;
            return response.send();

          case 30:
            _context.next = 38;
            break;

          case 32:
            _context.prev = 32;
            _context.t1 = _context["catch"](2);
            _context.next = 36;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 36:
            _context.next = 38;
            return response.send();

          case 38:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 32], [5, 20, 23, 26]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityCreateOne.ts":
/*!*******************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityCreateOne.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var entity, STATUS, label;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            entity = _ref.entity;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            label = entity.label;
            _context.next = 6;
            return Entity.hasEntityByLabel(label);

          case 6:
            if (!_context.sent) {
              _context.next = 10;
              break;
            }

            response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.ENTITY_LABEL_EXISTS));
            _context.next = 16;
            break;

          case 10:
            _context.t0 = response;
            _context.next = 13;
            return new Entity(entity).save();

          case 13:
            _context.t1 = _context.sent;
            _context.next = 16;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
            _context.next = 26;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context["catch"](2);
            _context.next = 24;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 24:
            _context.next = 26;
            return response.send();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 20]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityRemoveMany.ts":
/*!********************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityRemoveMany.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var ids, STATUS, deletedEntities, _iterator, _step, _id;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ids = _ref.ids;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            deletedEntities = [];
            _iterator = _createForOfIteratorHelper(ids);
            _context.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context.next = 21;
              break;
            }

            _id = _step.value;
            _context.next = 11;
            return Entity.hasEntityById(_id);

          case 11:
            if (!_context.sent) {
              _context.next = 19;
              break;
            }

            _context.t0 = deletedEntities;
            _context.next = 15;
            return Entity.findOne({
              _id: _id
            });

          case 15:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

            _context.next = 19;
            return Entity.deleteOne({
              _id: _id
            });

          case 19:
            _context.next = 7;
            break;

          case 21:
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t2 = _context["catch"](5);

            _iterator.e(_context.t2);

          case 26:
            _context.prev = 26;

            _iterator.f();

            return _context.finish(26);

          case 29:
            _context.next = 31;
            return response.setData(deletedEntities);

          case 31:
            _context.next = 33;
            return response.send();

          case 33:
            _context.next = 41;
            break;

          case 35:
            _context.prev = 35;
            _context.t3 = _context["catch"](2);
            _context.next = 39;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 39:
            _context.next = 41;
            return response.send();

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 35], [5, 23, 26, 29]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityRemoveOne.ts":
/*!*******************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityRemoveOne.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var _id, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Entity.hasEntityById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.ENTITY_LABEL_NOT_FOUND));

          case 8:
            _context.next = 18;
            break;

          case 10:
            _context.next = 12;
            return Entity.deleteOne({
              _id: _id
            });

          case 12:
            _context.t0 = response;
            _context.next = 15;
            return Entity.findOne({
              _id: _id
            });

          case 15:
            _context.t1 = _context.sent;
            _context.next = 18;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 18:
            _context.next = 20;
            return response.send();

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t2 = _context["catch"](2);
            _context.next = 26;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 26:
            _context.next = 28;
            return response.send();

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityRemoveOneColor.ts":
/*!************************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityRemoveOneColor.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var _id, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Entity.hasEntityById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.ENTITY_LABEL_NOT_FOUND));

          case 8:
            _context.next = 18;
            break;

          case 10:
            _context.next = 12;
            return Entity.findOneAndUpdate({
              _id: _id
            }, {
              backgroundColor: null,
              accentColor: null
            });

          case 12:
            _context.t0 = response;
            _context.next = 15;
            return Entity.findOne({
              _id: _id
            });

          case 15:
            _context.t1 = _context.sent;
            _context.next = 18;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 18:
            _context.next = 20;
            return response.send();

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t2 = _context["catch"](2);
            _context.next = 26;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 26:
            _context.next = 28;
            return response.send();

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityUpdateMany.ts":
/*!********************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityUpdateMany.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var entities, STATUS, updatedEntities, _iterator, _step, entity, ent;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            entities = _ref.entities;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__["STATUS_CODES"].asArray();
            _context.prev = 2;
            updatedEntities = [];
            _iterator = _createForOfIteratorHelper(entities);
            _context.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context.next = 25;
              break;
            }

            entity = _step.value;
            _context.next = 11;
            return Entity.hasEntityById(entity._id);

          case 11:
            if (!_context.sent) {
              _context.next = 23;
              break;
            }

            ent = _objectSpread({}, entity);
            if (ent.hasOwnProperty("_id")) delete ent._id;
            _context.next = 16;
            return Entity.findOneAndUpdate({
              _id: entity._id
            }, ent);

          case 16:
            _context.t0 = updatedEntities;
            _context.next = 19;
            return Entity.findOne({
              _id: entity._id
            });

          case 19:
            _context.t1 = _context.sent;

            _context.t0.push.call(_context.t0, _context.t1);

            _context.next = 23;
            return response.setData(updatedEntities);

          case 23:
            _context.next = 7;
            break;

          case 25:
            _context.next = 30;
            break;

          case 27:
            _context.prev = 27;
            _context.t2 = _context["catch"](5);

            _iterator.e(_context.t2);

          case 30:
            _context.prev = 30;

            _iterator.f();

            return _context.finish(30);

          case 33:
            _context.next = 35;
            return response.send();

          case 35:
            _context.next = 43;
            break;

          case 37:
            _context.prev = 37;
            _context.t3 = _context["catch"](2);
            _context.next = 41;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 41:
            _context.next = 43;
            return response.send();

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 37], [5, 27, 30, 33]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityUpdateOne.ts":
/*!*******************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityUpdateOne.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var _id, entity, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, entity = _ref.entity;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Entity.hasEntityById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.ENTITY_LABEL_NOT_FOUND));

          case 8:
            _context.next = 18;
            break;

          case 10:
            _context.next = 12;
            return Entity.findOneAndUpdate({
              _id: _id
            }, entity);

          case 12:
            _context.t0 = response;
            _context.next = 15;
            return Entity.findOne({
              _id: _id
            });

          case 15:
            _context.t1 = _context.sent;
            _context.next = 18;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 18:
            _context.next = 20;
            return response.send();

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t2 = _context["catch"](2);
            _context.next = 26;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 26:
            _context.next = 28;
            return response.send();

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/mutations/entityUpdateOneColor.ts":
/*!************************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/mutations/entityUpdateOneColor.ts ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var _id, color, STATUS, backgroundColor, accentColor;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, color = _ref.color;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Entity.hasEntityById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 9;
              break;
            }

            response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.ENTITY_LABEL_NOT_FOUND));
            _context.next = 18;
            break;

          case 9:
            backgroundColor = color.backgroundColor, accentColor = color.accentColor;
            _context.next = 12;
            return Entity.findOneAndUpdate({
              _id: _id
            }, {
              backgroundColor: backgroundColor,
              accentColor: accentColor
            });

          case 12:
            _context.t0 = response;
            _context.next = 15;
            return Entity.findOne({
              _id: _id
            });

          case 15:
            _context.t1 = _context.sent;
            _context.next = 18;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 18:
            _context.next = 20;
            return response.send();

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t2 = _context["catch"](2);
            _context.next = 26;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 26:
            _context.next = 28;
            return response.send();

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/queries/entities.ts":
/*!**********************************************************!*\
  !*** ./src/schemas/Entity/resolvers/queries/entities.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response) {
    var STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 1;
            _context.t0 = response;
            _context.next = 5;
            return Entity.find({});

          case 5:
            _context.t1 = _context.sent;
            _context.next = 8;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 8:
            _context.next = 10;
            return response.send();

          case 10:
            _context.next = 18;
            break;

          case 12:
            _context.prev = 12;
            _context.t2 = _context["catch"](1);
            _context.next = 16;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/queries/entityById.ts":
/*!************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/queries/entityById.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var _id, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.t0 = response;
            _context.next = 6;
            return Entity.findOne({
              _id: _id
            });

          case 6:
            _context.t1 = _context.sent;
            _context.next = 9;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 9:
            _context.next = 11;
            return response.send();

          case 11:
            _context.next = 19;
            break;

          case 13:
            _context.prev = 13;
            _context.t2 = _context["catch"](2);
            _context.next = 17;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 17:
            _context.next = 19;
            return response.send();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Entity/resolvers/queries/entityByLabel.ts":
/*!***************************************************************!*\
  !*** ./src/schemas/Entity/resolvers/queries/entityByLabel.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Entity", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Entity, response, root, _ref) {
    var label, STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            label = _ref.label;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.t0 = response;
            _context.next = 6;
            return Entity.findOne({
              label: label
            });

          case 6:
            _context.t1 = _context.sent;
            _context.next = 9;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 9:
            _context.next = 11;
            return response.send();

          case 11:
            _context.next = 19;
            break;

          case 13:
            _context.prev = 13;
            _context.t2 = _context["catch"](2);
            _context.next = 17;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 17:
            _context.next = 19;
            return response.send();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/Lexicon.model.ts":
/*!**********************************************!*\
  !*** ./src/schemas/Lexicon/Lexicon.model.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose_paginate_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose-paginate-v2 */ "mongoose-paginate-v2");
/* harmony import */ var mongoose_paginate_v2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose_paginate_v2__WEBPACK_IMPORTED_MODULE_3__);




var ObjectId = mongoose__WEBPACK_IMPORTED_MODULE_2__["Types"].ObjectId,
    EntitySchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
  created: Date,
  modified: Date,
  label: String,
  start: Number,
  stop: Number
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
}),
    LexiconSchema = new mongoose__WEBPACK_IMPORTED_MODULE_2__["Schema"]({
  created: Date,
  modified: Date,
  input: String,
  entities: [EntitySchema]
}, {
  collection: "lexicon",
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
});
LexiconSchema.plugin(mongoose_paginate_v2__WEBPACK_IMPORTED_MODULE_3___default.a);
LexiconSchema.statics.hasInput = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var input,
      Lexicon,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          input = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;

          if (!(input == null)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", null);

        case 5:
          Lexicon = this.model("Lexicon");
          _context.next = 8;
          return Lexicon.countDocuments({
            input: input
          });

        case 8:
          _context.t0 = _context.sent;
          return _context.abrupt("return", _context.t0 !== 0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
LexiconSchema.statics.hasLexicon = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
  var _id,
      Lexicon,
      _args2 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _id = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;

          if (!(_id == null)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", null);

        case 5:
          Lexicon = this.model("Lexicon");
          _context2.next = 8;
          return Lexicon.countDocuments({
            _id: _id
          });

        case 8:
          _context2.t0 = _context2.sent;
          return _context2.abrupt("return", _context2.t0 !== 0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));
LexiconSchema.statics.getEntity = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
  var lexicon,
      entity,
      input,
      entities,
      start,
      stop,
      _args3 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          lexicon = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;
          entity = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : "";

          if (!(lexicon == null || entity.length === 0)) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", null);

        case 6:
          input = lexicon.input, entities = lexicon.entities;

          if (input.includes(entity)) {
            _context3.next = 11;
            break;
          }

          return _context3.abrupt("return", null);

        case 11:
          start = input.indexOf(entity), stop = start + entity.length;
          return _context3.abrupt("return", entities.find(function (e) {
            return e.start === start && e.stop === stop;
          }) || null);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
}));
LexiconSchema.statics.getEntityData = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
  var lexicon,
      entity,
      label,
      start,
      stop,
      _args4 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          lexicon = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : null;
          entity = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : null;

          if (!(lexicon == null || entity == null)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", null);

        case 6:
          label = entity.label, start = entity.start, stop = entity.stop;
          return _context4.abrupt("return", lexicon.entities.find(function (e) {
            return e.label === label && e.start === start && e.stop == stop;
          }) || null);

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4);
}));
LexiconSchema.statics.hasEntity = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
  var lexicon,
      entity,
      start,
      stop,
      entities,
      _args5 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          lexicon = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
          entity = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : null;

          if (!(lexicon == null || entity == null)) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", null);

        case 6:
          start = entity.start, stop = entity.stop, entities = lexicon.entities;

          if (!(entities == null)) {
            _context5.next = 11;
            break;
          }

          return _context5.abrupt("return", false);

        case 11:
          return _context5.abrupt("return", entities == null ? false : entities.find(function (e) {
            return e.start === start && e.stop === stop;
          }) != null);

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5);
}));
LexiconSchema.statics.hasEntityWithLabel = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
  var lexicon,
      entity,
      label,
      start,
      stop,
      entities,
      _args6 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          lexicon = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : null;
          entity = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;

          if (!(lexicon == null || entity == null)) {
            _context6.next = 6;
            break;
          }

          return _context6.abrupt("return", null);

        case 6:
          label = entity.label, start = entity.start, stop = entity.stop, entities = lexicon.entities;
          return _context6.abrupt("return", entities == null ? false : entities.find(function (e) {
            return e.label === label && e.start === start && e.stop === stop;
          }) != null);

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6);
}));
LexiconSchema.statics.hasEntityById = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
  var lexicon,
      _entity,
      entities,
      _args7 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          lexicon = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : null;
          _entity = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : null;

          if (!(lexicon == null || _entity == null)) {
            _context7.next = 6;
            break;
          }

          return _context7.abrupt("return", null);

        case 6:
          entities = lexicon.entities;
          return _context7.abrupt("return", entities != null ? entities.find(function (_ref8) {
            var _id = _ref8._id;
            return _id.toString() === _entity;
          }) != null : false);

        case 8:
        case "end":
          return _context7.stop();
      }
    }
  }, _callee7);
})); // Register the model with Mongoose.

Object(mongoose__WEBPACK_IMPORTED_MODULE_2__["model"])("Lexicon", LexiconSchema);

/***/ }),

/***/ "./src/schemas/Lexicon/Lexicon.ts":
/*!****************************************!*\
  !*** ./src/schemas/Lexicon/Lexicon.ts ***!
  \****************************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var _Lexicon_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lexicon.model */ "./src/schemas/Lexicon/Lexicon.model.ts");
/* harmony import */ var _hooks_useResolverMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/useResolverMiddleware */ "./src/hooks/useResolverMiddleware.ts");
/* harmony import */ var _middleware_applyArgsProto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middleware/applyArgsProto */ "./src/middleware/applyArgsProto.ts");
/* harmony import */ var _graphql_Lexicon_extend_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/Lexicon.extend.gql */ "./src/schemas/Lexicon/graphql/Lexicon.extend.gql");
/* harmony import */ var _graphql_Lexicon_query_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql/Lexicon.query.gql */ "./src/schemas/Lexicon/graphql/Lexicon.query.gql");
/* harmony import */ var _graphql_Lexicon_mutation_gql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql/Lexicon.mutation.gql */ "./src/schemas/Lexicon/graphql/Lexicon.mutation.gql");
/* harmony import */ var _graphql_Lexicon_type_gql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql/Lexicon.type.gql */ "./src/schemas/Lexicon/graphql/Lexicon.type.gql");
/* harmony import */ var _resolvers_queries_lexiconAll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resolvers/queries/lexiconAll */ "./src/schemas/Lexicon/resolvers/queries/lexiconAll.ts");
/* harmony import */ var _resolvers_queries_lexiconById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/queries/lexiconById */ "./src/schemas/Lexicon/resolvers/queries/lexiconById.ts");
/* harmony import */ var _resolvers_queries_lexiconByInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/queries/lexiconByInput */ "./src/schemas/Lexicon/resolvers/queries/lexiconByInput.ts");
/* harmony import */ var _resolvers_queries_lexiconCount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/queries/lexiconCount */ "./src/schemas/Lexicon/resolvers/queries/lexiconCount.ts");
/* harmony import */ var _resolvers_queries_lexiconEntityCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/queries/lexiconEntityCount */ "./src/schemas/Lexicon/resolvers/queries/lexiconEntityCount.ts");
/* harmony import */ var _resolvers_queries_lexiconSearchByInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/queries/lexiconSearchByInput */ "./src/schemas/Lexicon/resolvers/queries/lexiconSearchByInput.ts");
/* harmony import */ var _resolvers_mutations_lexiconCreateOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/mutations/lexiconCreateOne */ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateOne.ts");
/* harmony import */ var _resolvers_mutations_lexiconUpdateOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/mutations/lexiconUpdateOne */ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateOne.ts");
/* harmony import */ var _resolvers_mutations_lexiconRemoveOne__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resolvers/mutations/lexiconRemoveOne */ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveOne.ts");
/* harmony import */ var _resolvers_mutations_lexiconCreateMany__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers/mutations/lexiconCreateMany */ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateMany.ts");
/* harmony import */ var _resolvers_mutations_lexiconUpdateMany__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/mutations/lexiconUpdateMany */ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateMany.ts");
/* harmony import */ var _resolvers_mutations_lexiconRemoveMany__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resolvers/mutations/lexiconRemoveMany */ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveMany.ts");
/* harmony import */ var _resolvers_mutations_lexiconCreateOneEntity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resolvers/mutations/lexiconCreateOneEntity */ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateOneEntity.ts");
/* harmony import */ var _resolvers_mutations_lexiconUpdateOneEntity__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./resolvers/mutations/lexiconUpdateOneEntity */ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateOneEntity.ts");
/* harmony import */ var _resolvers_mutations_lexiconRemoveOneEntity__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./resolvers/mutations/lexiconRemoveOneEntity */ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveOneEntity.ts");
/* harmony import */ var _resolvers_mutations_lexiconCreateManyEntities__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./resolvers/mutations/lexiconCreateManyEntities */ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateManyEntities.ts");
/* harmony import */ var _resolvers_mutations_lexiconUpdateManyEntities__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./resolvers/mutations/lexiconUpdateManyEntities */ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateManyEntities.ts");
/* harmony import */ var _resolvers_mutations_lexiconRemoveManyEntities__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./resolvers/mutations/lexiconRemoveManyEntities */ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveManyEntities.ts");
// Register the model.
 // Hooks

 // Middleware

 // Type Definitions




 // Query Resolvers






 // Mutation Resolvers













var typeDefs = [_graphql_Lexicon_extend_gql__WEBPACK_IMPORTED_MODULE_3__["default"], _graphql_Lexicon_query_gql__WEBPACK_IMPORTED_MODULE_4__["default"], _graphql_Lexicon_mutation_gql__WEBPACK_IMPORTED_MODULE_5__["default"], _graphql_Lexicon_type_gql__WEBPACK_IMPORTED_MODULE_6__["default"]].join("\n"),
    resolvers = Object(_hooks_useResolverMiddleware__WEBPACK_IMPORTED_MODULE_1__["default"])({
  Query: {
    lexiconAll: _resolvers_queries_lexiconAll__WEBPACK_IMPORTED_MODULE_7__["default"],
    lexiconById: _resolvers_queries_lexiconById__WEBPACK_IMPORTED_MODULE_8__["default"],
    lexiconByInput: _resolvers_queries_lexiconByInput__WEBPACK_IMPORTED_MODULE_9__["default"],
    lexiconCount: _resolvers_queries_lexiconCount__WEBPACK_IMPORTED_MODULE_10__["default"],
    lexiconEntityCount: _resolvers_queries_lexiconEntityCount__WEBPACK_IMPORTED_MODULE_11__["default"],
    lexiconSearchByInput: _resolvers_queries_lexiconSearchByInput__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  Mutation: {
    lexiconCreateOne: _resolvers_mutations_lexiconCreateOne__WEBPACK_IMPORTED_MODULE_13__["default"],
    lexiconUpdateOne: _resolvers_mutations_lexiconUpdateOne__WEBPACK_IMPORTED_MODULE_14__["default"],
    lexiconRemoveOne: _resolvers_mutations_lexiconRemoveOne__WEBPACK_IMPORTED_MODULE_15__["default"],
    lexiconCreateMany: _resolvers_mutations_lexiconCreateMany__WEBPACK_IMPORTED_MODULE_16__["default"],
    lexiconUpdateMany: _resolvers_mutations_lexiconUpdateMany__WEBPACK_IMPORTED_MODULE_17__["default"],
    lexiconRemoveMany: _resolvers_mutations_lexiconRemoveMany__WEBPACK_IMPORTED_MODULE_18__["default"],
    lexiconCreateOneEntity: _resolvers_mutations_lexiconCreateOneEntity__WEBPACK_IMPORTED_MODULE_19__["default"],
    lexiconUpdateOneEntity: _resolvers_mutations_lexiconUpdateOneEntity__WEBPACK_IMPORTED_MODULE_20__["default"],
    lexiconRemoveOneEntity: _resolvers_mutations_lexiconRemoveOneEntity__WEBPACK_IMPORTED_MODULE_21__["default"],
    lexiconCreateManyEntities: _resolvers_mutations_lexiconCreateManyEntities__WEBPACK_IMPORTED_MODULE_22__["default"],
    lexiconUpdateManyEntities: _resolvers_mutations_lexiconUpdateManyEntities__WEBPACK_IMPORTED_MODULE_23__["default"],
    lexiconRemoveManyEntities: _resolvers_mutations_lexiconRemoveManyEntities__WEBPACK_IMPORTED_MODULE_24__["default"]
  }
}, [_middleware_applyArgsProto__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ }),

/***/ "./src/schemas/Lexicon/graphql/Lexicon.extend.gql":
/*!********************************************************!*\
  !*** ./src/schemas/Lexicon/graphql/Lexicon.extend.gql ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("extend type Query {\n    lexiconAll: LexiconResponse\n    lexiconById(_id: ID!): LexiconResponse\n    lexiconByInput(input: String!): LexiconResponse\n    lexiconCount: LexiconResponseCount\n    lexiconEntityCount(_id: ID!): LexiconResponseCount\n    lexiconSearchByInput(input: String!, limit: Int, options: QueryLexiconOptions): LexiconResponseArray\n}\n\nextend type Mutation {\n    lexiconCreateOne(input: String!): LexiconResponse\n    lexiconUpdateOne(_id: ID!, input: String!): LexiconResponse\n    lexiconRemoveOne(_id: ID!): LexiconResponse\n\n    lexiconCreateMany(lexicons: [MutationLexicon]!): LexiconResponseArray\n    lexiconUpdateMany(inputs: [MutationLexiconInputArray]!): LexiconResponseArray\n    lexiconRemoveMany(ids: [ID]!): LexiconResponseArray\n\n    lexiconCreateOneEntity(_id: ID!, entity: MutationLexiconEntity!): LexiconResponse\n    lexiconUpdateOneEntity(_id: ID!, _entity: ID!, entity: MutationLexiconEntity!): LexiconResponse\n    lexiconRemoveOneEntity(_id: ID!, _entity: ID!): LexiconResponse\n\n    lexiconCreateManyEntities(_id: ID!, entities: [MutationLexiconEntity]!): LexiconResponse\n    lexiconUpdateManyEntities(_id: ID!, entities: [MutationLexiconUpdateEntity]!): LexiconResponse\n    lexiconRemoveManyEntities(_id: ID!, _entities: [ID]!): LexiconResponse\n}");

/***/ }),

/***/ "./src/schemas/Lexicon/graphql/Lexicon.mutation.gql":
/*!**********************************************************!*\
  !*** ./src/schemas/Lexicon/graphql/Lexicon.mutation.gql ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input MutationLexicon {\n    input: String!\n    entities: [MutationLexiconEntity]\n}\n\ninput MutationLexiconEntity {\n    label: String\n    start: Int\n    stop: Int\n}\n\ninput MutationLexiconEntityData {\n    _id: ID!\n    label: String\n    start: Int\n    stop: Int\n}\n\ninput MutationLexiconUpdateEntity {\n    _id: ID!\n    entity: MutationLexiconEntity\n}\n\ninput MutationLexiconInputArray {\n    _id: ID!\n    input: String\n    entities: [MutationLexiconEntityData]\n}");

/***/ }),

/***/ "./src/schemas/Lexicon/graphql/Lexicon.query.gql":
/*!*******************************************************!*\
  !*** ./src/schemas/Lexicon/graphql/Lexicon.query.gql ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input QueryLexiconOptions {\n    exactMatch: Boolean\n}\n\ninput QueryLexicon {\n    _id: ID\n    created: String\n    modified: String\n    input: String\n    entities: [QueryLexiconEntity]\n}\n\ninput QueryLexiconEntity {\n    _id: ID\n    created: String\n    modified: String\n    label: String\n    start: Int\n    stop: Int\n}\n\ninput QueryLexiconPagination {\n    page: Int\n    limit: Int\n}");

/***/ }),

/***/ "./src/schemas/Lexicon/graphql/Lexicon.type.gql":
/*!******************************************************!*\
  !*** ./src/schemas/Lexicon/graphql/Lexicon.type.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("type LexiconResponse {\n    code: Float\n    errors: [String]\n    data: Lexicon\n}\n\ntype LexiconResponseCount {\n    code: Float\n    errors: [String]\n    data: Int\n}\n\ntype LexiconResponseArray {\n    code: Float\n    errors: [String]\n    data: [Lexicon]\n}\n\ntype Lexicon @key(fields: \"_id\") {\n    _id: ID\n    created: String\n    modified: String\n    input: String\n    entities: [LexiconEntity]\n}\n\ntype LexiconEntity @key(fields: \"_id\") {\n    _id: ID\n    created: String\n    modified: String\n    label: String\n    start: Int\n    stop: Int\n}");

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateMany.ts":
/*!**********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconCreateMany.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var lexicons, STATUS, newLexicons, _iterator, _step, lexicon, newLexicon;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lexicons = _ref.lexicons;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            newLexicons = [];
            _iterator = _createForOfIteratorHelper(lexicons);
            _context.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context.next = 20;
              break;
            }

            lexicon = _step.value;
            _context.next = 11;
            return new Lexicon(lexicon).save();

          case 11:
            newLexicon = _context.sent;
            newLexicons.push(newLexicon);

            if (Lexicon.hasLexicon(newLexicon._id)) {
              _context.next = 18;
              break;
            }

            response.data = null;
            _context.next = 17;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_CREATION_FAILURE));

          case 17:
            return _context.abrupt("break", 20);

          case 18:
            _context.next = 7;
            break;

          case 20:
            _context.next = 25;
            break;

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](5);

            _iterator.e(_context.t0);

          case 25:
            _context.prev = 25;

            _iterator.f();

            return _context.finish(25);

          case 28:
            if (!(response.errors.length == 0)) {
              _context.next = 31;
              break;
            }

            _context.next = 31;
            return response.setData(newLexicons);

          case 31:
            _context.next = 33;
            return response.send();

          case 33:
            _context.next = 41;
            break;

          case 35:
            _context.prev = 35;
            _context.t1 = _context["catch"](2);
            _context.next = 39;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 39:
            _context.next = 41;
            return response.send();

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 35], [5, 22, 25, 28]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateManyEntities.ts":
/*!******************************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconCreateManyEntities.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, entities, STATUS, lexicon, _iterator, _step, entity;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, entities = _ref.entities;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;

            if (!(lexicon == null)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_NOT_FOUND));

          case 9:
            _context.next = 36;
            break;

          case 11:
            _iterator = _createForOfIteratorHelper(entities);
            _context.prev = 12;

            _iterator.s();

          case 14:
            if ((_step = _iterator.n()).done) {
              _context.next = 23;
              break;
            }

            entity = _step.value;
            _context.next = 18;
            return Lexicon.hasEntityWithLabel(lexicon, entity);

          case 18:
            if (_context.sent) {
              _context.next = 21;
              break;
            }

            _context.next = 21;
            return Lexicon.findOneAndUpdate({
              _id: _id
            }, {
              $push: {
                entities: entity
              }
            });

          case 21:
            _context.next = 14;
            break;

          case 23:
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](12);

            _iterator.e(_context.t0);

          case 28:
            _context.prev = 28;

            _iterator.f();

            return _context.finish(28);

          case 31:
            _context.next = 33;
            return Lexicon.findOne({
              _id: _id
            });

          case 33:
            lexicon = _context.sent;
            _context.next = 36;
            return response.setData(lexicon);

          case 36:
            _context.next = 38;
            return response.send();

          case 38:
            _context.next = 46;
            break;

          case 40:
            _context.prev = 40;
            _context.t1 = _context["catch"](2);
            _context.next = 44;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 44:
            _context.next = 46;
            return response.send();

          case 46:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 40], [12, 25, 28, 31]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateOne.ts":
/*!*********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconCreateOne.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var input, STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.t0 = response;
            _context.next = 6;
            return new Lexicon({
              input: input
            }).save();

          case 6:
            _context.t1 = _context.sent;
            _context.next = 9;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 9:
            _context.next = 11;
            return response.send();

          case 11:
            _context.next = 19;
            break;

          case 13:
            _context.prev = 13;
            _context.t2 = _context["catch"](2);
            _context.next = 17;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 17:
            _context.next = 19;
            return response.send();

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconCreateOneEntity.ts":
/*!***************************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconCreateOneEntity.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, entity, STATUS, lexicon;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, entity = _ref.entity;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;

            if (!(lexicon == null)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_NOT_FOUND));

          case 9:
            _context.next = 32;
            break;

          case 11:
            _context.next = 13;
            return Lexicon.hasEntityWithLabel(lexicon, entity);

          case 13:
            if (!_context.sent) {
              _context.next = 18;
              break;
            }

            _context.next = 16;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_ENTITY_EXISTS));

          case 16:
            _context.next = 32;
            break;

          case 18:
            _context.next = 20;
            return Lexicon.findOneAndUpdate({
              _id: _id
            }, {
              $push: {
                entities: entity
              }
            });

          case 20:
            _context.next = 22;
            return Lexicon.findOne({
              _id: _id
            });

          case 22:
            lexicon = _context.sent;
            _context.next = 25;
            return Lexicon.hasEntityWithLabel(lexicon, entity);

          case 25:
            if (_context.sent) {
              _context.next = 30;
              break;
            }

            _context.next = 28;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_ENTITY_UPDATE_FAILURE));

          case 28:
            _context.next = 32;
            break;

          case 30:
            _context.next = 32;
            return response.setData(lexicon);

          case 32:
            _context.next = 34;
            return response.send();

          case 34:
            _context.next = 42;
            break;

          case 36:
            _context.prev = 36;
            _context.t0 = _context["catch"](2);
            _context.next = 40;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 40:
            _context.next = 42;
            return response.send();

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 36]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveMany.ts":
/*!**********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveMany.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var ids, STATUS, _iterator, _step, _id;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ids = _ref.ids;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _iterator = _createForOfIteratorHelper(ids);
            _context.prev = 4;

            _iterator.s();

          case 6:
            if ((_step = _iterator.n()).done) {
              _context.next = 21;
              break;
            }

            _id = _step.value;
            _context.next = 10;
            return Lexicon.hasLexicon(_id);

          case 10:
            if (!_context.sent) {
              _context.next = 19;
              break;
            }

            _context.next = 13;
            return Lexicon.deleteOne({
              _id: _id
            });

          case 13:
            _context.next = 15;
            return Lexicon.hasLexicon(_id);

          case 15:
            if (!_context.sent) {
              _context.next = 19;
              break;
            }

            _context.next = 18;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_REMOVAL_FAILURE));

          case 18:
            return _context.abrupt("break", 21);

          case 19:
            _context.next = 6;
            break;

          case 21:
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](4);

            _iterator.e(_context.t0);

          case 26:
            _context.prev = 26;

            _iterator.f();

            return _context.finish(26);

          case 29:
            if (!(response.errors.length === 0)) {
              _context.next = 32;
              break;
            }

            _context.next = 32;
            return response.setData(null);

          case 32:
            _context.next = 34;
            return response.send();

          case 34:
            _context.next = 42;
            break;

          case 36:
            _context.prev = 36;
            _context.t1 = _context["catch"](2);
            _context.next = 40;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 40:
            _context.next = 42;
            return response.send();

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 36], [4, 23, 26, 29]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveManyEntities.ts":
/*!******************************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveManyEntities.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, _entities, STATUS, lexicon, _iterator, _step, _entity;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, _entities = _ref._entities;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;

            if (!(lexicon == null)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_NOT_FOUND));

          case 9:
            _context.next = 36;
            break;

          case 11:
            _iterator = _createForOfIteratorHelper(_entities);
            _context.prev = 12;

            _iterator.s();

          case 14:
            if ((_step = _iterator.n()).done) {
              _context.next = 23;
              break;
            }

            _entity = _step.value;
            _context.next = 18;
            return Lexicon.hasEntityById(lexicon, _entity);

          case 18:
            if (!_context.sent) {
              _context.next = 21;
              break;
            }

            _context.next = 21;
            return Lexicon.findOneAndUpdate({
              _id: _id
            }, {
              $pull: {
                entities: {
                  _id: _entity
                }
              }
            });

          case 21:
            _context.next = 14;
            break;

          case 23:
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](12);

            _iterator.e(_context.t0);

          case 28:
            _context.prev = 28;

            _iterator.f();

            return _context.finish(28);

          case 31:
            _context.t1 = response;
            _context.next = 34;
            return Lexicon.findOne({
              _id: _id
            });

          case 34:
            _context.t2 = _context.sent;

            _context.t1.setData.call(_context.t1, _context.t2);

          case 36:
            _context.next = 38;
            return response.send();

          case 38:
            _context.next = 46;
            break;

          case 40:
            _context.prev = 40;
            _context.t3 = _context["catch"](2);
            _context.next = 44;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 44:
            _context.next = 46;
            return response.send();

          case 46:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 40], [12, 25, 28, 31]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveOne.ts":
/*!*********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveOne.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, STATUS, lexicon;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;

            if (!(lexicon == null)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_NOT_FOUND));

          case 9:
            _context.next = 23;
            break;

          case 11:
            _context.next = 13;
            return Lexicon.deleteOne({
              _id: _id
            });

          case 13:
            _context.next = 15;
            return Lexicon.findOne({
              _id: _id
            });

          case 15:
            lexicon = _context.sent;

            if (!(lexicon != null)) {
              _context.next = 21;
              break;
            }

            _context.next = 19;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_REMOVAL_FAILURE));

          case 19:
            _context.next = 23;
            break;

          case 21:
            _context.next = 23;
            return response.setData(null);

          case 23:
            _context.next = 25;
            return response.send();

          case 25:
            _context.next = 33;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](2);
            _context.next = 31;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 31:
            _context.next = 33;
            return response.send();

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 27]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveOneEntity.ts":
/*!***************************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconRemoveOneEntity.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, _entity, STATUS, lexicon;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, _entity = _ref._entity;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;

            if (!(lexicon == null)) {
              _context.next = 10;
              break;
            }

            response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_NOT_FOUND));
            _context.next = 20;
            break;

          case 10:
            _context.next = 12;
            return Lexicon.hasEntityById(lexicon, _entity);

          case 12:
            if (!_context.sent) {
              _context.next = 20;
              break;
            }

            _context.next = 15;
            return Lexicon.findOneAndUpdate({
              _id: _id
            }, {
              $pull: {
                entities: {
                  _id: _entity
                }
              }
            });

          case 15:
            _context.t0 = response;
            _context.next = 18;
            return Lexicon.findOne({
              _id: _id
            });

          case 18:
            _context.t1 = _context.sent;

            _context.t0.setData.call(_context.t0, _context.t1);

          case 20:
            _context.next = 22;
            return response.send();

          case 22:
            _context.next = 30;
            break;

          case 24:
            _context.prev = 24;
            _context.t2 = _context["catch"](2);
            _context.next = 28;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 28:
            _context.next = 30;
            return response.send();

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 24]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateMany.ts":
/*!**********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateMany.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var inputs, STATUS, updatedLexicons, _iterator, _step, _step$value, _id, _step$value$input, input, _step$value$entities, entities, _iterator2, _step2, entity, _entity, updateEntity, prop;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            inputs = _ref.inputs;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__["STATUS_CODES"].asArray();
            _context.prev = 2;
            updatedLexicons = [];
            _iterator = _createForOfIteratorHelper(inputs);
            _context.prev = 5;

            _iterator.s();

          case 7:
            if ((_step = _iterator.n()).done) {
              _context.next = 42;
              break;
            }

            _step$value = _step.value, _id = _step$value._id, _step$value$input = _step$value.input, input = _step$value$input === void 0 ? null : _step$value$input, _step$value$entities = _step$value.entities, entities = _step$value$entities === void 0 ? [] : _step$value$entities;
            _context.next = 11;
            return Lexicon.hasLexicon(_id);

          case 11:
            if (!_context.sent) {
              _context.next = 40;
              break;
            }

            if (!(input != null)) {
              _context.next = 15;
              break;
            }

            _context.next = 15;
            return Lexicon.findOneAndUpdate({
              _id: _id
            }, {
              input: input
            });

          case 15:
            _iterator2 = _createForOfIteratorHelper(entities);
            _context.prev = 16;

            _iterator2.s();

          case 18:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 27;
              break;
            }

            entity = _step2.value;
            _entity = _objectSpread({}, entity)._id, updateEntity = {};
            delete entity._id;

            for (prop in entity) {
              updateEntity["entities.$.".concat(prop)] = entity[prop];
            }

            _context.next = 25;
            return Lexicon.updateOne({
              "entities._id": _entity
            }, {
              $set: updateEntity
            });

          case 25:
            _context.next = 18;
            break;

          case 27:
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t0 = _context["catch"](16);

            _iterator2.e(_context.t0);

          case 32:
            _context.prev = 32;

            _iterator2.f();

            return _context.finish(32);

          case 35:
            _context.t1 = updatedLexicons;
            _context.next = 38;
            return Lexicon.findOne({
              _id: _id
            });

          case 38:
            _context.t2 = _context.sent;

            _context.t1.push.call(_context.t1, _context.t2);

          case 40:
            _context.next = 7;
            break;

          case 42:
            _context.next = 47;
            break;

          case 44:
            _context.prev = 44;
            _context.t3 = _context["catch"](5);

            _iterator.e(_context.t3);

          case 47:
            _context.prev = 47;

            _iterator.f();

            return _context.finish(47);

          case 50:
            if (!(response.errors.length === 0)) {
              _context.next = 53;
              break;
            }

            _context.next = 53;
            return response.setData(updatedLexicons);

          case 53:
            _context.next = 55;
            return response.send();

          case 55:
            _context.next = 63;
            break;

          case 57:
            _context.prev = 57;
            _context.t4 = _context["catch"](2);
            _context.next = 61;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 61:
            _context.next = 63;
            return response.send();

          case 63:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 57], [5, 44, 47, 50], [16, 29, 32, 35]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateManyEntities.ts":
/*!******************************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateManyEntities.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, entities, STATUS, lexicon, _iterator, _step, data, _data$entity, label, start, stop;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, entities = _ref.entities;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;

            if (!(lexicon == null)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_NOT_FOUND));

          case 9:
            _context.next = 38;
            break;

          case 11:
            _iterator = _createForOfIteratorHelper(entities);
            _context.prev = 12;

            _iterator.s();

          case 14:
            if ((_step = _iterator.n()).done) {
              _context.next = 24;
              break;
            }

            data = _step.value;
            _data$entity = data.entity, label = _data$entity.label, start = _data$entity.start, stop = _data$entity.stop;
            _context.next = 19;
            return Lexicon.hasEntityById(lexicon, data._id);

          case 19:
            if (!_context.sent) {
              _context.next = 22;
              break;
            }

            _context.next = 22;
            return Lexicon.updateOne({
              "entities._id": data._id
            }, {
              $set: {
                "entities.$.label": label,
                "entities.$.start": start,
                "entities.$.stop": stop
              }
            });

          case 22:
            _context.next = 14;
            break;

          case 24:
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t0 = _context["catch"](12);

            _iterator.e(_context.t0);

          case 29:
            _context.prev = 29;

            _iterator.f();

            return _context.finish(29);

          case 32:
            _context.t1 = response;
            _context.next = 35;
            return Lexicon.findOne({
              _id: _id
            });

          case 35:
            _context.t2 = _context.sent;
            _context.next = 38;
            return _context.t1.setData.call(_context.t1, _context.t2);

          case 38:
            _context.next = 40;
            return response.send();

          case 40:
            _context.next = 48;
            break;

          case 42:
            _context.prev = 42;
            _context.t3 = _context["catch"](2);
            _context.next = 46;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 46:
            _context.next = 48;
            return response.send();

          case 48:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 42], [12, 26, 29, 32]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateOne.ts":
/*!*********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateOne.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, input, STATUS, lexicon;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, input = _ref.input;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;

            if (!(lexicon == null || lexicon.input === input)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_INPUT_UPDATE_FAILURE));

          case 9:
            _context.next = 23;
            break;

          case 11:
            _context.next = 13;
            return Lexicon.findOneAndUpdate({
              _id: _id
            }, {
              input: input
            });

          case 13:
            _context.next = 15;
            return Lexicon.findOne({
              _id: _id
            });

          case 15:
            lexicon = _context.sent;

            if (!(lexicon.input !== input)) {
              _context.next = 21;
              break;
            }

            _context.next = 19;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.LEXICON_INPUT_UPDATE_FAILURE));

          case 19:
            _context.next = 23;
            break;

          case 21:
            _context.next = 23;
            return response.setData(lexicon);

          case 23:
            _context.next = 25;
            return response.send();

          case 25:
            _context.next = 33;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](2);
            _context.next = 31;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 31:
            _context.next = 33;
            return response.send();

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 27]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateOneEntity.ts":
/*!***************************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/mutations/lexiconUpdateOneEntity.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, _entity, entity, STATUS, lexicon, label, start, stop;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, _entity = _ref._entity, entity = _ref.entity;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.findOne({
              _id: _id
            });

          case 5:
            lexicon = _context.sent;
            _context.next = 8;
            return Lexicon.hasEntityById(lexicon, _entity);

          case 8:
            if (_context.sent) {
              _context.next = 13;
              break;
            }

            _context.next = 11;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.ENTITY_NOT_FOUND));

          case 11:
            _context.next = 21;
            break;

          case 13:
            label = entity.label, start = entity.start, stop = entity.stop;
            _context.next = 16;
            return Lexicon.updateOne({
              "entities._id": _entity
            }, {
              $set: {
                "entities.$.label": label,
                "entities.$.start": start,
                "entities.$.stop": stop
              }
            });

          case 16:
            _context.next = 18;
            return Lexicon.findOne({
              _id: _id
            });

          case 18:
            lexicon = _context.sent;
            _context.next = 21;
            return response.setData(lexicon);

          case 21:
            _context.next = 23;
            return response.send();

          case 23:
            _context.next = 31;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](2);
            _context.next = 29;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 29:
            _context.next = 31;
            return response.send();

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 25]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/queries/lexiconAll.ts":
/*!*************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/queries/lexiconAll.ts ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response) {
    var STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 1;
            _context.t0 = response;
            _context.next = 5;
            return Lexicon.find({});

          case 5:
            _context.t1 = _context.sent;
            _context.next = 8;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 8:
            _context.next = 10;
            return response.send();

          case 10:
            _context.next = 18;
            break;

          case 12:
            _context.prev = 12;
            _context.t2 = _context["catch"](1);
            _context.next = 16;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/queries/lexiconById.ts":
/*!**************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/queries/lexiconById.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.hasLexicon(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 16;
            break;

          case 10:
            _context.t0 = response;
            _context.next = 13;
            return Lexicon.findOne({
              _id: _id
            });

          case 13:
            _context.t1 = _context.sent;
            _context.next = 16;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
            _context.next = 27;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context["catch"](2);
            console.log(_context.t2);
            _context.next = 25;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 25:
            _context.next = 27;
            return response.send();

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 20]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/queries/lexiconByInput.ts":
/*!*****************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/queries/lexiconByInput.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var input, STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            input = _ref.input;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Lexicon.hasInput(input);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 16;
            break;

          case 10:
            _context.t0 = response;
            _context.next = 13;
            return Lexicon.findOne({
              input: input
            });

          case 13:
            _context.t1 = _context.sent;
            _context.next = 16;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
            _context.next = 26;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context["catch"](2);
            _context.next = 24;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 24:
            _context.next = 26;
            return response.send();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 20]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/queries/lexiconCount.ts":
/*!***************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/queries/lexiconCount.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response) {
    var STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 1;
            _context.t0 = response;
            _context.next = 5;
            return Lexicon.countDocuments({});

          case 5:
            _context.t1 = _context.sent;

            _context.t0.setData.call(_context.t0, _context.t1);

            response.send();
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t2 = _context["catch"](1);
            response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));
            response.send();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/queries/lexiconEntityCount.ts":
/*!*********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/queries/lexiconEntityCount.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _id, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.t0 = response;
            _context.next = 6;
            return Lexicon.findOne({
              _id: _id
            });

          case 6:
            _context.t1 = _context.sent.entities.length;

            _context.t0.setData.call(_context.t0, _context.t1);

            response.send();
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t2 = _context["catch"](2);
            response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));
            response.send();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 11]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Lexicon/resolvers/queries/lexiconSearchByInput.ts":
/*!***********************************************************************!*\
  !*** ./src/schemas/Lexicon/resolvers/queries/lexiconSearchByInput.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Lexicon", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Lexicon, response, root, _ref) {
    var _ref$input, input, _ref$limit, limit, options, STATUS, _options$exactMatch, exactMatch, query, data;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$input = _ref.input, input = _ref$input === void 0 ? "" : _ref$input, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 5 : _ref$limit, options = _ref.options;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;

            if (!(input.length > 0 && input !== "*")) {
              _context.next = 20;
              break;
            }

            _options$exactMatch = options.exactMatch;
            exactMatch = _options$exactMatch === void 0 ? false : _options$exactMatch;
            query = !exactMatch ? {
              input: {
                $regex: input,
                $options: "i"
              }
            } : {
              input: input
            };

            if (!(limit == 0)) {
              _context.next = 13;
              break;
            }

            _context.next = 10;
            return Lexicon.find(query).sort({
              modified: "descending"
            });

          case 10:
            _context.t0 = _context.sent;
            _context.next = 16;
            break;

          case 13:
            _context.next = 15;
            return Lexicon.find(query).limit(limit).sort({
              modified: "descending"
            });

          case 15:
            _context.t0 = _context.sent;

          case 16:
            data = _context.t0;
            response.setData(data);
            _context.next = 26;
            break;

          case 20:
            if (!(input === "*")) {
              _context.next = 26;
              break;
            }

            _context.t1 = response;
            _context.next = 24;
            return Lexicon.find({}).limit(limit).sort({
              modified: "descending"
            });

          case 24:
            _context.t2 = _context.sent;

            _context.t1.setData.call(_context.t1, _context.t2);

          case 26:
            response.send();
            _context.next = 34;
            break;

          case 29:
            _context.prev = 29;
            _context.t3 = _context["catch"](2);
            console.log(_context.t3);
            response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));
            response.send();

          case 34:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 29]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/Thread.model.ts":
/*!********************************************!*\
  !*** ./src/schemas/Thread/Thread.model.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validator */ "validator");
/* harmony import */ var validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validator__WEBPACK_IMPORTED_MODULE_4__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var SarcasmAnalysisSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
  created: Date,
  modified: Date,
  sarcastic: {
    type: String,
    "default": null
  },
  nonSarcastic: {
    type: String,
    "default": null
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
}),
    EmotionAnalysisSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
  created: Date,
  modified: Date,
  happy: {
    type: String,
    "default": null
  },
  angry: {
    type: String,
    "default": null
  },
  excited: {
    type: String,
    "default": null
  },
  sad: {
    type: String,
    "default": null
  },
  fear: {
    type: String,
    "default": null
  },
  bored: {
    type: String,
    "default": null
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
}),
    SentimentAnalysisSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
  created: Date,
  modified: Date,
  positive: {
    type: String,
    "default": null
  },
  neutral: {
    type: String,
    "default": null
  },
  negative: {
    type: String,
    "default": null
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
}),
    AnalysisSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
  created: Date,
  modified: Date,
  sentiment: {
    type: SentimentAnalysisSchema,
    "default": null
  },
  emotion: {
    type: EmotionAnalysisSchema,
    "default": null
  },
  sarcasm: {
    type: SarcasmAnalysisSchema,
    "default": null
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
}),
    // Used to keep track of the overall scope of data
// needed for a thread by the system. This assists in
// keeping track of how the AI will respond, based on
// what information it has and still needs.
DataSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
  created: Date,
  modified: Date,
  actions: [String],
  buy: {
    type: {
      location: {
        type: String,
        "default": null
      },
      priceRange: {
        type: String,
        "default": null
      },
      propertyType: {
        type: String,
        "default": null
      },
      beds: {
        type: String,
        "default": null
      },
      baths: {
        type: String,
        "default": null
      }
    }
  },
  sell: {
    type: {
      why: {
        type: String,
        "default": null
      },
      meeting: {
        type: String,
        "default": null
      },
      timeframe: {
        type: String,
        "default": null
      },
      condition: {
        type: String,
        "default": null
      },
      priceRange: {
        type: String,
        "default": null
      },
      propertyType: {
        type: String,
        "default": null
      },
      address: {
        type: String,
        "default": null
      }
    }
  },
  rent: {
    type: {
      location: {
        type: String,
        "default": null
      },
      priceRange: {
        type: String,
        "default": null
      },
      propertyType: {
        type: String,
        "default": null
      },
      beds: {
        type: String,
        "default": null
      },
      baths: {
        type: String,
        "default": null
      }
    }
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
}),
    // Individual message from a user.
// The "analysis" information is performed on each of
// the messages the comes into the AI and is saved here.
MessageSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
  created: Date,
  modified: Date,
  number: {
    type: String,
    "default": null
  },
  message: {
    type: String,
    "default": null
  },
  analysis: {
    type: AnalysisSchema,
    "default": null
  },
  origin: {
    type: String,
    "enum": ["inbound", "outbound"],
    "default": null
  }
}, {
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
}),
    // Overall conversation thread.
//
// [analysis]
// The "analysis" information is performed on the entire
// conversation thread and aggregated together. This is meant
// for overall conversational analysis.
ThreadSchema = new mongoose__WEBPACK_IMPORTED_MODULE_3__["Schema"]({
  created: Date,
  modified: Date,
  numbers: {
    type: [{
      type: String,
      defualt: null
    }]
  },
  messages: {
    type: [MessageSchema],
    "default": null
  },
  data: {
    type: DataSchema,
    "default": null
  },
  analysis: {
    type: AnalysisSchema,
    "default": null
  }
}, {
  collection: "thread",
  timestamps: {
    createdAt: "created",
    updatedAt: "modified"
  }
});
ThreadSchema.statics.hasThreadByNumbers = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
  var numbers,
      Thread,
      _args = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          numbers = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;

          if (!(numbers == null)) {
            _context.next = 5;
            break;
          }

          return _context.abrupt("return", null);

        case 5:
          Thread = this.model("Thread");
          _context.next = 8;
          return Thread.countDocuments({
            numbers: {
              $all: numbers
            }
          });

        case 8:
          _context.t0 = _context.sent;
          return _context.abrupt("return", _context.t0 !== 0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
ThreadSchema.statics.hasValidNumbers = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
  var numbers,
      _iterator,
      _step,
      number,
      _args2 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          numbers = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;

          if (!(numbers == null)) {
            _context2.next = 5;
            break;
          }

          return _context2.abrupt("return", null);

        case 5:
          _iterator = _createForOfIteratorHelper(numbers);
          _context2.prev = 6;

          _iterator.s();

        case 8:
          if ((_step = _iterator.n()).done) {
            _context2.next = 14;
            break;
          }

          number = _step.value;

          if (Object(validator__WEBPACK_IMPORTED_MODULE_4__["isMobilePhone"])(number, "en-US")) {
            _context2.next = 12;
            break;
          }

          return _context2.abrupt("return", false);

        case 12:
          _context2.next = 8;
          break;

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](6);

          _iterator.e(_context2.t0);

        case 19:
          _context2.prev = 19;

          _iterator.f();

          return _context2.finish(19);

        case 22:
          return _context2.abrupt("return", true);

        case 23:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2, null, [[6, 16, 19, 22]]);
}));
ThreadSchema.statics.hasThreadById = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
  var _id,
      Thread,
      _args3 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _id = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : null;

          if (!(_id == null)) {
            _context3.next = 5;
            break;
          }

          return _context3.abrupt("return", null);

        case 5:
          Thread = this.model("Thread");
          _context3.next = 8;
          return Thread.countDocuments({
            _id: _id
          });

        case 8:
          _context3.t0 = _context3.sent;
          return _context3.abrupt("return", _context3.t0 !== 0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3, this);
}));
ThreadSchema.statics.hasMessageById = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
  var _id,
      _message,
      Thread,
      _args4 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _id = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : null;
          _message = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : null;

          if (!(_id == null || _message == null)) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", null);

        case 6:
          Thread = this.model("Thread");
          _context4.next = 9;
          return Thread.countDocuments({
            _id: _id,
            "messages._id": _message
          });

        case 9:
          _context4.t0 = _context4.sent;
          return _context4.abrupt("return", _context4.t0 !== 0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _callee4, this);
}));
ThreadSchema.statics.messageIndexAndData = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
  var _id,
      _message,
      Thread,
      _yield$Thread$findOne,
      messages,
      idx,
      _args5 = arguments;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _id = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : null;
          _message = _args5.length > 1 && _args5[1] !== undefined ? _args5[1] : null;

          if (!(_id == null || _message == null)) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", null);

        case 6:
          Thread = this.model("Thread");
          _context5.next = 9;
          return Thread.findOne({
            _id: _id
          });

        case 9:
          _yield$Thread$findOne = _context5.sent;
          messages = _yield$Thread$findOne.messages;
          _context5.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.keys(messages);

        case 12:
          if ((_context5.t1 = _context5.t0()).done) {
            _context5.next = 18;
            break;
          }

          idx = _context5.t1.value;

          if (!(messages[idx]._id.toString() === _message)) {
            _context5.next = 16;
            break;
          }

          return _context5.abrupt("return", [parseInt(idx), _objectSpread({}, messages[idx])._doc]);

        case 16:
          _context5.next = 12;
          break;

        case 18:
        case "end":
          return _context5.stop();
      }
    }
  }, _callee5, this);
}));
ThreadSchema.statics.updateAnalysis = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
  var current,
      update,
      section,
      analysis,
      _args6 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          current = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : null;
          update = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : null;

          if (!(current == null || update == null)) {
            _context6.next = 6;
            break;
          }

          return _context6.abrupt("return", null);

        case 6:
          current = _objectSpread({}, current)._doc;

          for (section in update) {
            if (current.hasOwnProperty(section)) for (analysis in update[section]) {
              current[section][analysis] = update[section][analysis];
            }
          }

          return _context6.abrupt("return", current);

        case 9:
        case "end":
          return _context6.stop();
      }
    }
  }, _callee6);
}));
ThreadSchema.statics.updateData = /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
  var current,
      update,
      section,
      analysis,
      _args7 = arguments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          current = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : null;
          update = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : null;

          if (!(current == null || update == null)) {
            _context7.next = 6;
            break;
          }

          return _context7.abrupt("return", null);

        case 6:
          current = _objectSpread({}, current)._doc;
          _context7.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.keys(update);

        case 8:
          if ((_context7.t1 = _context7.t0()).done) {
            _context7.next = 19;
            break;
          }

          section = _context7.t1.value;
          _context7.t2 = section;
          _context7.next = _context7.t2 === "buy" ? 13 : _context7.t2 === "sell" ? 13 : _context7.t2 === "rent" ? 13 : _context7.t2 === "actions" ? 15 : 17;
          break;

        case 13:
          if (current.hasOwnProperty(section)) for (analysis in update[section]) {
            current[section][analysis] = update[section][analysis];
          }
          return _context7.abrupt("break", 17);

        case 15:
          current[section] = update[section];
          return _context7.abrupt("break", 17);

        case 17:
          _context7.next = 8;
          break;

        case 19:
          return _context7.abrupt("return", current);

        case 20:
        case "end":
          return _context7.stop();
      }
    }
  }, _callee7);
})); // Register the model with Mongoose.

Object(mongoose__WEBPACK_IMPORTED_MODULE_3__["model"])("Thread", ThreadSchema);

/***/ }),

/***/ "./src/schemas/Thread/Thread.ts":
/*!**************************************!*\
  !*** ./src/schemas/Thread/Thread.ts ***!
  \**************************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var _Thread_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Thread.model */ "./src/schemas/Thread/Thread.model.ts");
/* harmony import */ var _hooks_useResolverMiddleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hooks/useResolverMiddleware */ "./src/hooks/useResolverMiddleware.ts");
/* harmony import */ var _middleware_applyArgsProto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middleware/applyArgsProto */ "./src/middleware/applyArgsProto.ts");
/* harmony import */ var _graphql_Thread_extend_gql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/Thread.extend.gql */ "./src/schemas/Thread/graphql/Thread.extend.gql");
/* harmony import */ var _graphql_Thread_enum_gql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql/Thread.enum.gql */ "./src/schemas/Thread/graphql/Thread.enum.gql");
/* harmony import */ var _graphql_Thread_type_gql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql/Thread.type.gql */ "./src/schemas/Thread/graphql/Thread.type.gql");
/* harmony import */ var _graphql_Thread_mutation_gql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql/Thread.mutation.gql */ "./src/schemas/Thread/graphql/Thread.mutation.gql");
/* harmony import */ var _graphql_Thread_query_gql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphql/Thread.query.gql */ "./src/schemas/Thread/graphql/Thread.query.gql");
/* harmony import */ var _resolvers_queries_threadById__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resolvers/queries/threadById */ "./src/schemas/Thread/resolvers/queries/threadById.ts");
/* harmony import */ var _resolvers_queries_threadByNumbers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resolvers/queries/threadByNumbers */ "./src/schemas/Thread/resolvers/queries/threadByNumbers.ts");
/* harmony import */ var _resolvers_queries_threadMessageById__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolvers/queries/threadMessageById */ "./src/schemas/Thread/resolvers/queries/threadMessageById.ts");
/* harmony import */ var _resolvers_queries_threadMessageByNumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resolvers/queries/threadMessageByNumber */ "./src/schemas/Thread/resolvers/queries/threadMessageByNumber.ts");
/* harmony import */ var _resolvers_queries_threadMessageLatest__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/queries/threadMessageLatest */ "./src/schemas/Thread/resolvers/queries/threadMessageLatest.ts");
/* harmony import */ var _resolvers_mutations_threadCreateOne__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./resolvers/mutations/threadCreateOne */ "./src/schemas/Thread/resolvers/mutations/threadCreateOne.ts");
/* harmony import */ var _resolvers_mutations_threadRemoveOne__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./resolvers/mutations/threadRemoveOne */ "./src/schemas/Thread/resolvers/mutations/threadRemoveOne.ts");
/* harmony import */ var _resolvers_mutations_threadCreateOneMessage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./resolvers/mutations/threadCreateOneMessage */ "./src/schemas/Thread/resolvers/mutations/threadCreateOneMessage.ts");
/* harmony import */ var _resolvers_mutations_threadUpdateOneMessage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./resolvers/mutations/threadUpdateOneMessage */ "./src/schemas/Thread/resolvers/mutations/threadUpdateOneMessage.ts");
/* harmony import */ var _resolvers_mutations_threadRemoveOneMessage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./resolvers/mutations/threadRemoveOneMessage */ "./src/schemas/Thread/resolvers/mutations/threadRemoveOneMessage.ts");
/* harmony import */ var _resolvers_mutations_threadUpdateMessageAnalysis__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./resolvers/mutations/threadUpdateMessageAnalysis */ "./src/schemas/Thread/resolvers/mutations/threadUpdateMessageAnalysis.ts");
/* harmony import */ var _resolvers_mutations_threadUpdateData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./resolvers/mutations/threadUpdateData */ "./src/schemas/Thread/resolvers/mutations/threadUpdateData.ts");
// Register the model.
 // Hooks

 // Middleware

 // Type Definitions





 // Query Resolvers





 // Mutation Resolvers








var typeDefs = [_graphql_Thread_extend_gql__WEBPACK_IMPORTED_MODULE_3__["default"], _graphql_Thread_enum_gql__WEBPACK_IMPORTED_MODULE_4__["default"], _graphql_Thread_type_gql__WEBPACK_IMPORTED_MODULE_5__["default"], _graphql_Thread_mutation_gql__WEBPACK_IMPORTED_MODULE_6__["default"], _graphql_Thread_query_gql__WEBPACK_IMPORTED_MODULE_7__["default"]].join("\n"),
    resolvers = Object(_hooks_useResolverMiddleware__WEBPACK_IMPORTED_MODULE_1__["default"])({
  Query: {
    threadById: _resolvers_queries_threadById__WEBPACK_IMPORTED_MODULE_8__["default"],
    threadByNumbers: _resolvers_queries_threadByNumbers__WEBPACK_IMPORTED_MODULE_9__["default"],
    threadMessageById: _resolvers_queries_threadMessageById__WEBPACK_IMPORTED_MODULE_10__["default"],
    threadMessageByNumber: _resolvers_queries_threadMessageByNumber__WEBPACK_IMPORTED_MODULE_11__["default"],
    threadMessageLatest: _resolvers_queries_threadMessageLatest__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  Mutation: {
    threadCreateOne: _resolvers_mutations_threadCreateOne__WEBPACK_IMPORTED_MODULE_13__["default"],
    threadRemoveOne: _resolvers_mutations_threadRemoveOne__WEBPACK_IMPORTED_MODULE_14__["default"],
    threadCreateOneMessage: _resolvers_mutations_threadCreateOneMessage__WEBPACK_IMPORTED_MODULE_15__["default"],
    threadUpdateOneMessage: _resolvers_mutations_threadUpdateOneMessage__WEBPACK_IMPORTED_MODULE_16__["default"],
    threadRemoveOneMessage: _resolvers_mutations_threadRemoveOneMessage__WEBPACK_IMPORTED_MODULE_17__["default"],
    threadUpdateMessageAnalysis: _resolvers_mutations_threadUpdateMessageAnalysis__WEBPACK_IMPORTED_MODULE_18__["default"],
    threadUpdateData: _resolvers_mutations_threadUpdateData__WEBPACK_IMPORTED_MODULE_19__["default"]
  }
}, [_middleware_applyArgsProto__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ }),

/***/ "./src/schemas/Thread/graphql/Thread.enum.gql":
/*!****************************************************!*\
  !*** ./src/schemas/Thread/graphql/Thread.enum.gql ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("enum EnumThreadMessageOrigin {\n    inbound\n    outbound\n}");

/***/ }),

/***/ "./src/schemas/Thread/graphql/Thread.extend.gql":
/*!******************************************************!*\
  !*** ./src/schemas/Thread/graphql/Thread.extend.gql ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("extend type Query {\n    threadById(_id: ID!): ThreadResponse\n    threadByNumbers(numbers: [String]!): ThreadResponse\n    threadMessageById(_id: ID!, _message: ID!): ThreadMessageResponse\n    threadMessageByNumber(_id: ID!, number: String!): ThreadMessageResponseArray\n    threadMessageLatest(_id: ID!): ThreadMessageResponse\n}\n\nextend type Mutation {\n    threadCreateOne(numbers: [String]!): ThreadResponse\n    threadRemoveOne(_id: ID!): ThreadResponse\n\n    threadCreateOneMessage(_id: ID!, message: MutationThreadMessageCreate): ThreadResponse\n    threadUpdateOneMessage(_id: ID!, _message: ID!, message: MutationThreadMessageUpdate): ThreadResponse\n    threadRemoveOneMessage(_id: ID!, _message: ID!): ThreadResponse\n\n    threadUpdateMessageAnalysis(_id: ID!, _message: ID!, analysis: MutationThreadAnalysis!): ThreadResponse\n    threadUpdateData(_id: ID!, data: MutationThreadData!): ThreadResponse\n}");

/***/ }),

/***/ "./src/schemas/Thread/graphql/Thread.mutation.gql":
/*!********************************************************!*\
  !*** ./src/schemas/Thread/graphql/Thread.mutation.gql ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input MutationThreadMessageCreate {\n    number: String!\n    message: String!\n    origin: EnumThreadMessageOrigin!\n}\n\ninput MutationThreadMessageUpdate {\n    number: String\n    message: String\n    origin: EnumThreadMessageOrigin\n}\n\ninput MutationThreadAnalysis {\n    emotion: MutationThreadAnalysisEmotion\n    sarcasm: MutationThreadAnalysisSarcasm\n    sentiment: MutationThreadAnalysisSentiment\n}\n\ninput MutationThreadAnalysisEmotion {\n    happy: Float\n    angry: Float\n    excited: Float\n    sad: Float\n    fear: Float\n    bored: Float\n}\n\ninput MutationThreadAnalysisSentiment {\n    positive: Float\n    neutral: Float\n    negative: Float\n}\n\ninput MutationThreadAnalysisSarcasm {\n    sarcastic: Float\n    nonSarcastic: Float\n}\n\ninput MutationThreadData {\n    buy: MutationThreadDataBuy\n    sell: MutationThreadDataSell\n    rent: MutationThreadDataRent\n}\n\ninput MutationThreadDataBuy {\n    location: String\n    priceRange: String\n    propertyType: String\n    beds: String\n    baths: String\n}\n\ninput MutationThreadDataSell {\n    why: String\n    meeting: String\n    timeframe: String\n    condition: String\n    priceRange: String\n    propertyType: String\n    address: String\n}\n\ninput MutationThreadDataRent {\n    location: String\n    priceRange: String\n    propertyType: String\n    beds: String\n    baths: String\n}");

/***/ }),

/***/ "./src/schemas/Thread/graphql/Thread.query.gql":
/*!*****************************************************!*\
  !*** ./src/schemas/Thread/graphql/Thread.query.gql ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./src/schemas/Thread/graphql/Thread.type.gql":
/*!****************************************************!*\
  !*** ./src/schemas/Thread/graphql/Thread.type.gql ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("type ThreadResponse {\n    code: Float\n    errors: [String]\n    data: Thread\n}\n\ntype ThreadMessageResponse {\n    code: Float\n    errors: [String]\n    data: ThreadMessage\n}\n\ntype ThreadResponseArray {\n    code: Float\n    errors: [String]\n    data: [Thread]\n}\n\ntype ThreadMessageResponseArray {\n    code: Float\n    errors: [String]\n    data: [ThreadMessage]\n}\n\ntype Thread @key(fields: \"_id\") {\n    _id: ID\n    created: String\n    modified: String\n    numbers: [String]\n    messages: [ThreadMessage]\n    data: ThreadData\n    analysis: ThreadAnalysis\n}\n\ntype ThreadMessage {\n    _id: ID\n    created: String\n    modified: String\n    number: String!\n    message: String!\n    origin: EnumThreadMessageOrigin\n    analysis: ThreadAnalysis\n}\n\ntype ThreadData {\n    _id: ID\n    created: String\n    modified: String\n    buy: ThreadDataBuy\n    sell: ThreadDataSell\n    rent: ThreadDataRent\n}\n\ntype ThreadDataBuy {\n    location: String\n    priceRange: String\n    propertyType: String\n    beds: String\n    baths: String\n}\n\ntype ThreadDataSell {\n    why: String\n    meeting: String\n    timeframe: String\n    condition: String\n    priceRange: String\n    propertyType: String\n    address: String\n}\n\ntype ThreadDataRent {\n    location: String\n    priceRange: String\n    propertyType: String\n    beds: String\n    baths: String\n}\n\ntype ThreadAnalysis {\n    _id: ID\n    created: String\n    modified: String\n    sentiment: ThreadAnalysisSentiment\n    emotion: ThreadAnalysisEmotion\n    sarcasm: ThreadAnalysisSarcasm\n}\n\ntype ThreadAnalysisSentiment {\n    created: String\n    modified: String\n    positive: String\n    neutral: String\n    negative: String\n}\n\ntype ThreadAnalysisEmotion {\n    created: String\n    modified: String\n    happy: String\n    angry: String\n    excited: String\n    sad: String\n    fear: String\n    bored: String\n}\n\ntype ThreadAnalysisSarcasm {\n    created: String\n    modified: String\n    sarcastic: String\n    nonSarcastic: String\n}");

/***/ }),

/***/ "./src/schemas/Thread/resolvers/mutations/threadCreateOne.ts":
/*!*******************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/mutations/threadCreateOne.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var numbers, STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            numbers = _ref.numbers;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasValidNumbers(numbers);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THREAD_NUMBER_INVALID_EN_US));

          case 8:
            _context.next = 23;
            break;

          case 10:
            _context.next = 12;
            return Thread.hasThreadByNumbers(numbers);

          case 12:
            if (!_context.sent) {
              _context.next = 17;
              break;
            }

            _context.next = 15;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THREAD_CREATE_FAILURE));

          case 15:
            _context.next = 23;
            break;

          case 17:
            _context.t0 = response;
            _context.next = 20;
            return new Thread({
              numbers: numbers
            }).save();

          case 20:
            _context.t1 = _context.sent;
            _context.next = 23;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 23:
            _context.next = 25;
            return response.send();

          case 25:
            _context.next = 33;
            break;

          case 27:
            _context.prev = 27;
            _context.t2 = _context["catch"](2);
            _context.next = 31;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 31:
            _context.next = 33;
            return response.send();

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 27]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/mutations/threadCreateOneMessage.ts":
/*!**************************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/mutations/threadCreateOneMessage.ts ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, message, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, message = _ref.message;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasThreadById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THREAD_UPDATE_FAILURE));

          case 8:
            _context.next = 18;
            break;

          case 10:
            _context.next = 12;
            return Thread.findOneAndUpdate({
              _id: _id
            }, {
              $push: {
                messages: message
              }
            });

          case 12:
            _context.t0 = response;
            _context.next = 15;
            return Thread.findOne({
              _id: _id
            });

          case 15:
            _context.t1 = _context.sent;
            _context.next = 18;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 18:
            _context.next = 20;
            return response.send();

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t2 = _context["catch"](2);
            _context.next = 26;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 26:
            _context.next = 28;
            return response.send();

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/mutations/threadRemoveOne.ts":
/*!*******************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/mutations/threadRemoveOne.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasThreadById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THREAD_REMOVE_FAILURE));

          case 8:
            _context.next = 16;
            break;

          case 10:
            _context.t0 = response;
            _context.next = 13;
            return Thread.deleteOne({
              _id: _id
            });

          case 13:
            _context.t1 = _context.sent;
            _context.next = 16;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
            _context.next = 26;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context["catch"](2);
            _context.next = 24;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 24:
            _context.next = 26;
            return response.send();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 20]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/mutations/threadRemoveOneMessage.ts":
/*!**************************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/mutations/threadRemoveOneMessage.ts ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, _message, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, _message = _ref._message;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasMessageById(_id, _message);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 18;
            break;

          case 10:
            _context.next = 12;
            return Thread.findOneAndUpdate({
              _id: _id
            }, {
              $pull: {
                messages: {
                  _id: _message
                }
              }
            });

          case 12:
            _context.t0 = response;
            _context.next = 15;
            return Thread.findOne({
              _id: _id
            });

          case 15:
            _context.t1 = _context.sent;
            _context.next = 18;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 18:
            _context.next = 20;
            return response.send();

          case 20:
            _context.next = 28;
            break;

          case 22:
            _context.prev = 22;
            _context.t2 = _context["catch"](2);
            _context.next = 26;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 26:
            _context.next = 28;
            return response.send();

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/mutations/threadUpdateData.ts":
/*!********************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/mutations/threadUpdateData.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, data, STATUS, thread;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, data = _ref.data;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasThreadById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 26;
            break;

          case 10:
            _context.next = 12;
            return Thread.findOne({
              _id: _id
            });

          case 12:
            thread = _context.sent;

            if (!(thread.data == null)) {
              _context.next = 18;
              break;
            }

            _context.next = 16;
            return Thread.findOneAndUpdate({
              _id: _id
            }, {
              data: data
            });

          case 16:
            _context.next = 26;
            break;

          case 18:
            _context.t0 = Thread;
            _context.t1 = {
              _id: _id
            };
            _context.next = 22;
            return Thread.updateData(thread.data, data);

          case 22:
            _context.t2 = _context.sent;
            _context.t3 = {
              data: _context.t2
            };
            _context.next = 26;
            return _context.t0.findOneAndUpdate.call(_context.t0, _context.t1, _context.t3);

          case 26:
            _context.t4 = response;
            _context.next = 29;
            return Thread.findOne({
              _id: _id
            });

          case 29:
            _context.t5 = _context.sent;
            _context.next = 32;
            return _context.t4.setData.call(_context.t4, _context.t5);

          case 32:
            _context.next = 34;
            return response.send();

          case 34:
            _context.next = 42;
            break;

          case 36:
            _context.prev = 36;
            _context.t6 = _context["catch"](2);
            _context.next = 40;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 40:
            _context.next = 42;
            return response.send();

          case 42:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 36]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/mutations/threadUpdateMessageAnalysis.ts":
/*!*******************************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/mutations/threadUpdateMessageAnalysis.ts ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "@babel/runtime/helpers/slicedToArray");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");







/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_5__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, _message, analysis, STATUS, _yield$Thread$message, _yield$Thread$message2, index, message;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, _message = _ref._message, analysis = _ref.analysis;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_6__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasMessageById(_id, _message);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 33;
            break;

          case 10:
            _context.next = 12;
            return Thread.messageIndexAndData(_id, _message);

          case 12:
            _yield$Thread$message = _context.sent;
            _yield$Thread$message2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_yield$Thread$message, 2);
            index = _yield$Thread$message2[0];
            message = _yield$Thread$message2[1];

            if (!(message.analysis == null)) {
              _context.next = 21;
              break;
            }

            _context.next = 19;
            return Thread.updateOne({
              _id: _id,
              "messages._id": _message
            }, {
              $set: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "messages.".concat(index, ".analysis"), analysis)
            });

          case 19:
            _context.next = 33;
            break;

          case 21:
            _context.t0 = Thread;
            _context.t1 = {
              _id: _id,
              "messages._id": _message
            };
            _context.t2 = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default.a;
            _context.t3 = {};
            _context.t4 = "messages.".concat(index, ".analysis");
            _context.next = 28;
            return Thread.updateAnalysis(message.analysis, analysis);

          case 28:
            _context.t5 = _context.sent;
            _context.t6 = (0, _context.t2)(_context.t3, _context.t4, _context.t5);
            _context.t7 = {
              $set: _context.t6
            };
            _context.next = 33;
            return _context.t0.updateOne.call(_context.t0, _context.t1, _context.t7);

          case 33:
            _context.t8 = response;
            _context.next = 36;
            return Thread.findOne({
              _id: _id
            });

          case 36:
            _context.t9 = _context.sent;
            _context.next = 39;
            return _context.t8.setData.call(_context.t8, _context.t9);

          case 39:
            _context.next = 41;
            return response.send();

          case 41:
            _context.next = 49;
            break;

          case 43:
            _context.prev = 43;
            _context.t10 = _context["catch"](2);
            _context.next = 47;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_3___default()(STATUS.THROW));

          case 47:
            _context.next = 49;
            return response.send();

          case 49:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 43]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/mutations/threadUpdateOneMessage.ts":
/*!**************************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/mutations/threadUpdateOneMessage.ts ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, _message, message, STATUS, thread, idx, msg, prop;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, _message = _ref._message, message = _ref.message;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasThreadById(_id);

          case 5:
            _context.t0 = !_context.sent;

            if (_context.t0) {
              _context.next = 10;
              break;
            }

            _context.next = 9;
            return Thread.hasMessageById(_id, _message);

          case 9:
            _context.t0 = !_context.sent;

          case 10:
            if (!_context.t0) {
              _context.next = 14;
              break;
            }

            response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(STATUS.NOT_FOUND));
            _context.next = 33;
            break;

          case 14:
            _context.next = 16;
            return Thread.findOne({
              _id: _id,
              "messages._id": _message
            });

          case 16:
            thread = _context.sent;
            _context.t1 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(thread.messages);

          case 18:
            if ((_context.t2 = _context.t1()).done) {
              _context.next = 27;
              break;
            }

            idx = _context.t2.value;
            msg = _objectSpread({}, thread.messages[idx]._doc);
            delete msg.modified;

            for (prop in message) {
              msg[prop] = message[prop];
            }

            _context.next = 25;
            return Thread.updateOne({
              _id: _id,
              "messages._id": _message
            }, {
              $set: _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "messages.".concat(idx), msg)
            });

          case 25:
            _context.next = 18;
            break;

          case 27:
            _context.t3 = response;
            _context.next = 30;
            return Thread.findOne({
              _id: _id
            });

          case 30:
            _context.t4 = _context.sent;
            _context.next = 33;
            return _context.t3.setData.call(_context.t3, _context.t4);

          case 33:
            _context.next = 35;
            return response.send();

          case 35:
            _context.next = 43;
            break;

          case 37:
            _context.prev = 37;
            _context.t5 = _context["catch"](2);
            _context.next = 41;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(STATUS.THROW));

          case 41:
            _context.next = 43;
            return response.send();

          case 43:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 37]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/queries/threadById.ts":
/*!************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/queries/threadById.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _ref$_id, _id, STATUS;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$_id = _ref._id, _id = _ref$_id === void 0 ? null : _ref$_id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;

            if (!(_id == null)) {
              _context.next = 8;
              break;
            }

            _context.next = 6;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.ID_REQUIRED));

          case 6:
            _context.next = 14;
            break;

          case 8:
            _context.t0 = response;
            _context.next = 11;
            return Thread.findOne({
              _id: _id
            });

          case 11:
            _context.t1 = _context.sent;
            _context.next = 14;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 14:
            _context.next = 16;
            return response.send();

          case 16:
            _context.next = 24;
            break;

          case 18:
            _context.prev = 18;
            _context.t2 = _context["catch"](2);
            _context.next = 22;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 22:
            _context.next = 24;
            return response.send();

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 18]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/queries/threadByNumbers.ts":
/*!*****************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/queries/threadByNumbers.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var numbers, STATUS;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            numbers = _ref.numbers;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasValidNumbers(numbers);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THREAD_NUMBER_INVALID_EN_US));

          case 8:
            _context.next = 16;
            break;

          case 10:
            _context.t0 = response;
            _context.next = 13;
            return Thread.findOne({
              $and: [{
                numbers: {
                  $size: numbers.length
                }
              }, {
                numbers: {
                  $all: numbers
                }
              }]
            });

          case 13:
            _context.t1 = _context.sent;
            _context.next = 16;
            return _context.t0.setData.call(_context.t0, _context.t1);

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
            _context.next = 26;
            break;

          case 20:
            _context.prev = 20;
            _context.t2 = _context["catch"](2);
            _context.next = 24;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 24:
            _context.next = 26;
            return response.send();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 20]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/queries/threadMessageById.ts":
/*!*******************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/queries/threadMessageById.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, _message, STATUS, _yield$Thread$findOne, messages, msg;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, _message = _ref._message;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasMessageById(_id, _message);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 17;
            break;

          case 10:
            _context.next = 12;
            return Thread.findOne({
              _id: _id,
              "messages._id": _message
            });

          case 12:
            _yield$Thread$findOne = _context.sent;
            messages = _yield$Thread$findOne.messages;
            msg = _objectSpread({}, messages.find(function (msg) {
              return msg._id == _message;
            }))._doc;
            _context.next = 17;
            return response.setData(msg);

          case 17:
            _context.next = 19;
            return response.send();

          case 19:
            _context.next = 27;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](2);
            _context.next = 25;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(STATUS.THROW));

          case 25:
            _context.next = 27;
            return response.send();

          case 27:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 21]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/queries/threadMessageByNumber.ts":
/*!***********************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/queries/threadMessageByNumber.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_4__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, number, STATUS, _yield$Thread$findOne, messages, data, _iterator, _step, message, msg;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id, number = _ref.number;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_5__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasThreadById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 19;
            break;

          case 10:
            _context.next = 12;
            return Thread.findOne({
              _id: _id
            });

          case 12:
            _yield$Thread$findOne = _context.sent;
            messages = _yield$Thread$findOne.messages;
            data = [];
            _iterator = _createForOfIteratorHelper(messages);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                message = _step.value;
                msg = _objectSpread({}, message)._doc;
                if (msg.number === number) data.push(msg);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _context.next = 19;
            return response.setData(data);

          case 19:
            _context.next = 21;
            return response.send();

          case 21:
            _context.next = 29;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](2);
            _context.next = 27;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(STATUS.THROW));

          case 27:
            _context.next = 29;
            return response.send();

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 23]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/schemas/Thread/resolvers/queries/threadMessageLatest.ts":
/*!*********************************************************************!*\
  !*** ./src/schemas/Thread/resolvers/queries/threadMessageLatest.ts ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "@babel/runtime/helpers/toConsumableArray");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @commonHooks/useResponse */ "../../common/hooks/useResponse.ts");
/* harmony import */ var _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @commonUtils/Response */ "../../common/utils/Response.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(_commonHooks_useResponse__WEBPACK_IMPORTED_MODULE_3__["default"])("Thread", /*#__PURE__*/function () {
  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(Thread, response, root, _ref) {
    var _id, STATUS, _yield$Thread$findOne, messages;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _id = _ref._id;
            STATUS = _commonUtils_Response__WEBPACK_IMPORTED_MODULE_4__["STATUS_CODES"].asArray();
            _context.prev = 2;
            _context.next = 5;
            return Thread.hasThreadById(_id);

          case 5:
            if (_context.sent) {
              _context.next = 10;
              break;
            }

            _context.next = 8;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.NOT_FOUND));

          case 8:
            _context.next = 16;
            break;

          case 10:
            _context.next = 12;
            return Thread.findOne({
              _id: _id
            });

          case 12:
            _yield$Thread$findOne = _context.sent;
            messages = _yield$Thread$findOne.messages;
            _context.next = 16;
            return response.setData(messages[messages.length - 1]);

          case 16:
            _context.next = 18;
            return response.send();

          case 18:
            _context.next = 26;
            break;

          case 20:
            _context.prev = 20;
            _context.t0 = _context["catch"](2);
            _context.next = 24;
            return response.setError.apply(response, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(STATUS.THROW));

          case 24:
            _context.next = 26;
            return response.send();

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 20]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}()));

/***/ }),

/***/ "./src/server.ts":
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! colors */ "colors");
/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mongoose */ "./src/mongoose.ts");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! console */ "console");
/* harmony import */ var console__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(console__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-server */ "apollo-server");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./graphql */ "./src/graphql.ts");



 // Environment configuration from ".env" file.


dotenv__WEBPACK_IMPORTED_MODULE_4___default.a.config();




_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var PORT, app, _yield$app$listen, url;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          PORT = process.env.PORT;
          app = new apollo_server__WEBPACK_IMPORTED_MODULE_6__["ApolloServer"](_graphql__WEBPACK_IMPORTED_MODULE_7__["default"]);
          _context.next = 5;
          return app.listen({
            port: PORT
          });

        case 5:
          _yield$app$listen = _context.sent;
          url = _yield$app$listen.url;
          Object(console__WEBPACK_IMPORTED_MODULE_5__["log"])(url.green.bold);
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 10]]);
}))();

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/server.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/odysseus/Workspaces/lydia/src/apps/database/src/server.ts */"./src/server.ts");


/***/ }),

/***/ "@apollo/federation":
/*!*************************************!*\
  !*** external "@apollo/federation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/federation");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/toConsumableArray":
/*!***********************************************************!*\
  !*** external "@babel/runtime/helpers/toConsumableArray" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/toConsumableArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-server":
/*!********************************!*\
  !*** external "apollo-server" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),

/***/ "console":
/*!**************************!*\
  !*** external "console" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("console");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-paginate-v2":
/*!***************************************!*\
  !*** external "mongoose-paginate-v2" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-paginate-v2");

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy9ob21lL29keXNzZXVzL1dvcmtzcGFjZXMvbHlkaWEvc3JjL2NvbW1vbi9ob29rcy91c2VSZXNwb25zZS50cyIsIndlYnBhY2s6Ly8vL2hvbWUvb2R5c3NldXMvV29ya3NwYWNlcy9seWRpYS9zcmMvY29tbW9uL3V0aWxzL1Jlc3BvbnNlLnRzIiwid2VicGFjazovLy8vaG9tZS9vZHlzc2V1cy9Xb3Jrc3BhY2VzL2x5ZGlhL3NyYy9jb21tb24vdXRpbHMvZ3FsU2NoZW1hQnVpbGRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlUmVzb2x2ZXJNaWRkbGV3YXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9taWRkbGV3YXJlL2FwcGx5QXJnc1Byb3RvLnRzIiwid2VicGFjazovLy8uL3NyYy9tb25nb29zZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvRW50aXR5Lm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0VudGl0eS9FbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvRW50aXR5L2dyYXBocWwvRW50aXR5LmV4dGVuZC5ncWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvRW50aXR5L2dyYXBocWwvRW50aXR5Lm11dGF0aW9uLmdxbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvZ3JhcGhxbC9FbnRpdHkucXVlcnkuZ3FsIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0VudGl0eS9ncmFwaHFsL0VudGl0eS50eXBlLmdxbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlDcmVhdGVNYW55LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0VudGl0eS9yZXNvbHZlcnMvbXV0YXRpb25zL2VudGl0eUNyZWF0ZU9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlSZW1vdmVNYW55LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0VudGl0eS9yZXNvbHZlcnMvbXV0YXRpb25zL2VudGl0eVJlbW92ZU9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlSZW1vdmVPbmVDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlVcGRhdGVNYW55LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0VudGl0eS9yZXNvbHZlcnMvbXV0YXRpb25zL2VudGl0eVVwZGF0ZU9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlVcGRhdGVPbmVDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9FbnRpdHkvcmVzb2x2ZXJzL3F1ZXJpZXMvZW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvRW50aXR5L3Jlc29sdmVycy9xdWVyaWVzL2VudGl0eUJ5SWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvRW50aXR5L3Jlc29sdmVycy9xdWVyaWVzL2VudGl0eUJ5TGFiZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9MZXhpY29uLm1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0xleGljb24vTGV4aWNvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL2dyYXBocWwvTGV4aWNvbi5leHRlbmQuZ3FsIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0xleGljb24vZ3JhcGhxbC9MZXhpY29uLm11dGF0aW9uLmdxbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL2dyYXBocWwvTGV4aWNvbi5xdWVyeS5ncWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9ncmFwaHFsL0xleGljb24udHlwZS5ncWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25DcmVhdGVNYW55LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0xleGljb24vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uQ3JlYXRlTWFueUVudGl0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0xleGljb24vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uQ3JlYXRlT25lLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0xleGljb24vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uQ3JlYXRlT25lRW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0xleGljb24vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uUmVtb3ZlTWFueS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvblJlbW92ZU1hbnlFbnRpdGllcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvblJlbW92ZU9uZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvblJlbW92ZU9uZUVudGl0eS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvblVwZGF0ZU1hbnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25VcGRhdGVNYW55RW50aXRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25VcGRhdGVPbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25VcGRhdGVPbmVFbnRpdHkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9yZXNvbHZlcnMvcXVlcmllcy9sZXhpY29uQWxsLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL0xleGljb24vcmVzb2x2ZXJzL3F1ZXJpZXMvbGV4aWNvbkJ5SWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvTGV4aWNvbi9yZXNvbHZlcnMvcXVlcmllcy9sZXhpY29uQnlJbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL3Jlc29sdmVycy9xdWVyaWVzL2xleGljb25Db3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL3Jlc29sdmVycy9xdWVyaWVzL2xleGljb25FbnRpdHlDb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9MZXhpY29uL3Jlc29sdmVycy9xdWVyaWVzL2xleGljb25TZWFyY2hCeUlucHV0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1RocmVhZC9UaHJlYWQubW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvVGhyZWFkL1RocmVhZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9UaHJlYWQvZ3JhcGhxbC9UaHJlYWQuZW51bS5ncWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvVGhyZWFkL2dyYXBocWwvVGhyZWFkLmV4dGVuZC5ncWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvVGhyZWFkL2dyYXBocWwvVGhyZWFkLm11dGF0aW9uLmdxbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9UaHJlYWQvZ3JhcGhxbC9UaHJlYWQucXVlcnkuZ3FsIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1RocmVhZC9ncmFwaHFsL1RocmVhZC50eXBlLmdxbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9UaHJlYWQvcmVzb2x2ZXJzL211dGF0aW9ucy90aHJlYWRDcmVhdGVPbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvVGhyZWFkL3Jlc29sdmVycy9tdXRhdGlvbnMvdGhyZWFkQ3JlYXRlT25lTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9UaHJlYWQvcmVzb2x2ZXJzL211dGF0aW9ucy90aHJlYWRSZW1vdmVPbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvVGhyZWFkL3Jlc29sdmVycy9tdXRhdGlvbnMvdGhyZWFkUmVtb3ZlT25lTWVzc2FnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9UaHJlYWQvcmVzb2x2ZXJzL211dGF0aW9ucy90aHJlYWRVcGRhdGVEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1RocmVhZC9yZXNvbHZlcnMvbXV0YXRpb25zL3RocmVhZFVwZGF0ZU1lc3NhZ2VBbmFseXNpcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hcy9UaHJlYWQvcmVzb2x2ZXJzL211dGF0aW9ucy90aHJlYWRVcGRhdGVPbmVNZXNzYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1RocmVhZC9yZXNvbHZlcnMvcXVlcmllcy90aHJlYWRCeUlkLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1RocmVhZC9yZXNvbHZlcnMvcXVlcmllcy90aHJlYWRCeU51bWJlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvVGhyZWFkL3Jlc29sdmVycy9xdWVyaWVzL3RocmVhZE1lc3NhZ2VCeUlkLnRzIiwid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1RocmVhZC9yZXNvbHZlcnMvcXVlcmllcy90aHJlYWRNZXNzYWdlQnlOdW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjaGVtYXMvVGhyZWFkL3Jlc29sdmVycy9xdWVyaWVzL3RocmVhZE1lc3NhZ2VMYXRlc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2ZlZGVyYXRpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXBvbGxvLXNlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbG9yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvbnNvbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbmdvb3NlLXBhZ2luYXRlLXYyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmFtZGFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2YWxpZGF0b3JcIiJdLCJuYW1lcyI6WyJtb2RlbHMiLCJhc3luY0NhbGxiYWNrIiwicmVzb2x2ZXJBcmdzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtb2RlbEluc3RhbmNlcyIsInR5cGUiLCJtb25nb29zZSIsIm1vZGVsIiwicHVzaCIsImxlbmd0aCIsIlJlc3BvbnNlIiwiU1RBVFVTX0NPREVTIiwiY29kZXMiLCJXSVAiLCJjb2RlIiwibXNnIiwiVEhST1ciLCJPSyIsIk5PVF9GT1VORCIsIklEX1JFUVVJUkVEIiwiTEVYSUNPTl9OT1RfRk9VTkQiLCJJTlBVVF9OT1RfRk9VTkQiLCJFTlRJVFlfTk9UX0ZPVU5EIiwiTEVYSUNPTl9JTlBVVF9VUERBVEVfRkFJTFVSRSIsIkxFWElDT05fQ1JFQVRJT05fRkFJTFVSRSIsIkxFWElDT05fUkVNT1ZBTF9GQUlMVVJFIiwiTEVYSUNPTl9FTlRJVFlfRVhJU1RTIiwiTEVYSUNPTl9FTlRJVFlfVVBEQVRFX0ZBSUxVUkUiLCJFTlRJVFlfTEFCRUxfTk9UX0ZPVU5EIiwiRU5USVRZX0xBQkVMX0VYSVNUUyIsIlRIUkVBRF9OVU1CRVJfSU5WQUxJRF9FTl9VUyIsIlRIUkVBRF9DUkVBVEVfRkFJTFVSRSIsIlRIUkVBRF9SRU1PVkVfRkFJTFVSRSIsIlRIUkVBRF9VUERBVEVfRkFJTFVSRSIsImFzT2JqZWN0IiwiYXNBcnJheSIsImFycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiZXJyb3JzIiwiZGF0YSIsInJlc3BvbnNlIiwidmFsdWUiLCJpbml0IiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJzY2hlbWEiLCJtYWtlR3FsIiwiUXVlcmllcyIsIk11dGF0aW9ucyIsIlR5cGVzIiwiam9pbiIsImdxbCIsIlF1ZXJ5IiwiTXV0YXRpb24iLCJUeXBlIiwibWVyZ2UiLCJkb3RlbnYiLCJjb25maWciLCJidWlsZEZlZGVyYXRlZFNjaGVtYSIsImdxbFNjaGVtYUJ1aWxkZXIiLCJFbnRpdHkiLCJMZXhpY29uIiwiVGhyZWFkIiwiRW50aXR5UmVzb2x2ZXJzIiwiTGV4aWNvblJlc29sdmVycyIsIlRocmVhZFJlc29sdmVycyIsIm1pZGRsZXdhcmUiLCJxdWVyeUNudCIsImtleXMiLCJxdWVyeU1ldGhvZHMiLCJtdXRhdGlvbkNudCIsIm11dGF0aW9uTWV0aG9kcyIsImkiLCJtdyIsImUiLCJyZXNvbHZlciIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImRiIiwiY29ubmVjdGlvbiIsIkRCX0NPTk5FQ1RJT04iLCJwcm9jZXNzIiwiZW52IiwibG9nIiwiYm9sZCIsIm9uIiwiY2xvc2UiLCJjeWFuIiwiZ3JlZW4iLCJ5ZWxsb3ciLCJlcnIiLCJyZWQiLCJlcnJvciIsImNvbm5lY3QiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJFbnRpdHlTY2hlbWEiLCJTY2hlbWEiLCJjcmVhdGVkIiwiRGF0ZSIsIm1vZGlmaWVkIiwibGFiZWwiLCJTdHJpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJhY2NlbnRDb2xvciIsImNvbGxlY3Rpb24iLCJ0aW1lc3RhbXBzIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Iiwic3RhdGljcyIsImhhc0VudGl0eUJ5SWQiLCJfaWQiLCJjb3VudERvY3VtZW50cyIsImhhc0VudGl0eUJ5TGFiZWwiLCJleHRlbmRHcWwiLCJxdWVyeUdxbCIsIm11dGF0aW9uR3FsIiwidHlwZUdxbCIsInVzZVJlc29sdmVyTWlkZGxld2FyZSIsImVudGl0aWVzIiwiZW50aXR5QnlJZCIsImVudGl0eUJ5TGFiZWwiLCJlbnRpdHlDcmVhdGVPbmUiLCJlbnRpdHlVcGRhdGVPbmUiLCJlbnRpdHlSZW1vdmVPbmUiLCJlbnRpdHlVcGRhdGVPbmVDb2xvciIsImVudGl0eVJlbW92ZU9uZUNvbG9yIiwiZW50aXR5Q3JlYXRlTWFueSIsImVudGl0eVVwZGF0ZU1hbnkiLCJlbnRpdHlSZW1vdmVNYW55IiwiYXBwbHlBcmdzUHJvdG8iLCJ1c2VSZXNwb25zZSIsInJvb3QiLCJTVEFUVVMiLCJuZXdFbnRpdGllcyIsImVudGl0eSIsIm5ld0VudGl0eSIsInNhdmUiLCJzZXREYXRhIiwic2VuZCIsInNldEVycm9yIiwiaWRzIiwiZGVsZXRlZEVudGl0aWVzIiwiZmluZE9uZSIsImRlbGV0ZU9uZSIsImZpbmRPbmVBbmRVcGRhdGUiLCJ1cGRhdGVkRW50aXRpZXMiLCJlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsImNvbG9yIiwiZmluZCIsIk9iamVjdElkIiwic3RhcnQiLCJOdW1iZXIiLCJzdG9wIiwiTGV4aWNvblNjaGVtYSIsImlucHV0IiwicGx1Z2luIiwicGFnaW5hdGlvbiIsImhhc0lucHV0IiwiaGFzTGV4aWNvbiIsImdldEVudGl0eSIsImxleGljb24iLCJpbmNsdWRlcyIsImluZGV4T2YiLCJnZXRFbnRpdHlEYXRhIiwiaGFzRW50aXR5IiwiaGFzRW50aXR5V2l0aExhYmVsIiwiX2VudGl0eSIsInRvU3RyaW5nIiwibGV4aWNvbkFsbCIsImxleGljb25CeUlkIiwibGV4aWNvbkJ5SW5wdXQiLCJsZXhpY29uQ291bnQiLCJsZXhpY29uRW50aXR5Q291bnQiLCJsZXhpY29uU2VhcmNoQnlJbnB1dCIsImxleGljb25DcmVhdGVPbmUiLCJsZXhpY29uVXBkYXRlT25lIiwibGV4aWNvblJlbW92ZU9uZSIsImxleGljb25DcmVhdGVNYW55IiwibGV4aWNvblVwZGF0ZU1hbnkiLCJsZXhpY29uUmVtb3ZlTWFueSIsImxleGljb25DcmVhdGVPbmVFbnRpdHkiLCJsZXhpY29uVXBkYXRlT25lRW50aXR5IiwibGV4aWNvblJlbW92ZU9uZUVudGl0eSIsImxleGljb25DcmVhdGVNYW55RW50aXRpZXMiLCJsZXhpY29uVXBkYXRlTWFueUVudGl0aWVzIiwibGV4aWNvblJlbW92ZU1hbnlFbnRpdGllcyIsImxleGljb25zIiwibmV3TGV4aWNvbnMiLCJuZXdMZXhpY29uIiwiJHB1c2giLCJfZW50aXRpZXMiLCIkcHVsbCIsImlucHV0cyIsInVwZGF0ZWRMZXhpY29ucyIsInVwZGF0ZUVudGl0eSIsInByb3AiLCJ1cGRhdGVPbmUiLCIkc2V0IiwiY29uc29sZSIsImxpbWl0Iiwib3B0aW9ucyIsImV4YWN0TWF0Y2giLCJxdWVyeSIsIiRyZWdleCIsIiRvcHRpb25zIiwic29ydCIsIlNhcmNhc21BbmFseXNpc1NjaGVtYSIsInNhcmNhc3RpYyIsIm5vblNhcmNhc3RpYyIsIkVtb3Rpb25BbmFseXNpc1NjaGVtYSIsImhhcHB5IiwiYW5ncnkiLCJleGNpdGVkIiwic2FkIiwiZmVhciIsImJvcmVkIiwiU2VudGltZW50QW5hbHlzaXNTY2hlbWEiLCJwb3NpdGl2ZSIsIm5ldXRyYWwiLCJuZWdhdGl2ZSIsIkFuYWx5c2lzU2NoZW1hIiwic2VudGltZW50IiwiZW1vdGlvbiIsInNhcmNhc20iLCJEYXRhU2NoZW1hIiwiYWN0aW9ucyIsImJ1eSIsImxvY2F0aW9uIiwicHJpY2VSYW5nZSIsInByb3BlcnR5VHlwZSIsImJlZHMiLCJiYXRocyIsInNlbGwiLCJ3aHkiLCJtZWV0aW5nIiwidGltZWZyYW1lIiwiY29uZGl0aW9uIiwiYWRkcmVzcyIsInJlbnQiLCJNZXNzYWdlU2NoZW1hIiwibnVtYmVyIiwibWVzc2FnZSIsImFuYWx5c2lzIiwib3JpZ2luIiwiVGhyZWFkU2NoZW1hIiwibnVtYmVycyIsImRlZnVhbHQiLCJtZXNzYWdlcyIsImhhc1RocmVhZEJ5TnVtYmVycyIsIiRhbGwiLCJoYXNWYWxpZE51bWJlcnMiLCJpc01vYmlsZVBob25lIiwiaGFzVGhyZWFkQnlJZCIsImhhc01lc3NhZ2VCeUlkIiwiX21lc3NhZ2UiLCJtZXNzYWdlSW5kZXhBbmREYXRhIiwiaWR4IiwicGFyc2VJbnQiLCJfZG9jIiwidXBkYXRlQW5hbHlzaXMiLCJjdXJyZW50IiwidXBkYXRlIiwic2VjdGlvbiIsInVwZGF0ZURhdGEiLCJlbnVtR3FsIiwidGhyZWFkQnlJZCIsInRocmVhZEJ5TnVtYmVycyIsInRocmVhZE1lc3NhZ2VCeUlkIiwidGhyZWFkTWVzc2FnZUJ5TnVtYmVyIiwidGhyZWFkTWVzc2FnZUxhdGVzdCIsInRocmVhZENyZWF0ZU9uZSIsInRocmVhZFJlbW92ZU9uZSIsInRocmVhZENyZWF0ZU9uZU1lc3NhZ2UiLCJ0aHJlYWRVcGRhdGVPbmVNZXNzYWdlIiwidGhyZWFkUmVtb3ZlT25lTWVzc2FnZSIsInRocmVhZFVwZGF0ZU1lc3NhZ2VBbmFseXNpcyIsInRocmVhZFVwZGF0ZURhdGEiLCJ0aHJlYWQiLCJpbmRleCIsIiRhbmQiLCIkc2l6ZSIsIlBPUlQiLCJhcHAiLCJBcG9sbG9TZXJ2ZXIiLCJncmFwaHFsIiwibGlzdGVuIiwicG9ydCIsInVybCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0FBVUosSUFBWCxDQUFIO0FBUFA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFELEs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsaUU7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IG1vbmdvb3NlLCB7IERvY3VtZW50IH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgUmVzcG9uc2UgZnJvbSBcIi4uL3V0aWxzL1Jlc3BvbnNlXCI7XG5cbi8vIFtBYm91dF1cbi8vIFRoZSBcInVzZVJlc3BvbnNlXCIgaG9vayB0YWtlcyAyIGFyZ3VtZW50cy4gVGhlIGZpcnN0IGFyZ3VtZW50IGlzXG4vLyBhbiBhcnJheSBvZiBzdHJpbmdzIG9yIGEgc2luZ2xlIHN0cmluZyB0aGF0IHJlcHJlc2VudHMgdGhlIG5hbWVcbi8vIG9mIGEgcmVnaXN0ZXJlZCBNb25nb29zZSBtb2RlbC4gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHRoZSByZXN1bHRpbmdcbi8vIE1vbmdvb3NlIG1vZGVsIGluc3RhbmNlKHMpLiBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIGEgbmV3IFwiUmVzcG9uc2VcIlxuLy8gb2JqZWN0IGluc3RhbmNlLCB3aGljaCBpcyB1c2VkIHRvIGhhbmRsZSB0aGUgcmV0dXJuaW5nIGRhdGEgaW4gYSBzdGFuZGFyZFxuLy8gZm9ybWF0LiBBbGwgYXJndW1lbnRzIHBhc3NlZCB0aGUgZmlyc3QgMiwgYXJlIHN0YW5kYXJkIEdyYXBoUUwgcmVzb2x2ZXJcbi8vIGFyZ3VtZW50cywgaW4gdGhlIHN0YW5kYXJkcyBvcmRlci5cbi8vXG4vLyBFeGFtcGxlIFVzYWdlOlxuLy8gZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXCJNb2RlbFwiLCAoTW9kZWwsIHJlc3BvbnNlLCByb290LCBhcmdzKSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgTW9kZWwuZmluZCguLi4pO1xuLy9cbi8vICAgICAgICAgLy8gRG8gc3R1ZmYuLi5cbi8vXG4vLyAgICAgICAgIHJlc3BvbnNlLnNlbmQoKTtcbi8vICAgICB9IGNhdGNoKGUpIHtcbi8vICAgICAgICAgdGhyb3cgZTtcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IChtb2RlbHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcgPSBbXSwgYXN5bmNDYWxsYmFjazogRnVuY3Rpb24pID0+XG4oLi4ucmVzb2x2ZXJBcmdzKSA9PiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IG1vZGVsSW5zdGFuY2VzOiBBcnJheTxEb2N1bWVudD4gfCBEb2N1bWVudCA9IFtdO1xuXG4gICAgICAgIGlmICh0eXBlKG1vZGVscykgPT09IFwiU3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1vZGVsSW5zdGFuY2VzID0gYXdhaXQgbW9uZ29vc2UubW9kZWwobW9kZWxzKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlKG1vZGVscykgPT09IFwiQXJyYXlcIikge1xuICAgICAgICAgICAgZm9yIChsZXQgbW9kZWwgb2YgbW9kZWxzKVxuICAgICAgICAgICAgICAgIG1vZGVsSW5zdGFuY2VzLnB1c2goYXdhaXQgbW9uZ29vc2UubW9kZWwobW9kZWwpKTtcblxuICAgICAgICAgICAgaWYgKG1vZGVsSW5zdGFuY2VzLmxlbmd0aCA9PT0gMSlcbiAgICAgICAgICAgICAgICBtb2RlbEluc3RhbmNlcyA9IG1vZGVsSW5zdGFuY2VzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgYXN5bmNDYWxsYmFjayhcbiAgICAgICAgICAgIG1vZGVsSW5zdGFuY2VzLFxuICAgICAgICAgICAgbmV3IFJlc3BvbnNlKHJlc29sdmUpLFxuICAgICAgICAgICAgLi4ucmVzb2x2ZXJBcmdzXG4gICAgICAgICk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICB9XG59KTsiLCJleHBvcnQgaW50ZXJmYWNlIElSZXNwb25zZSB7XG4gICAgY29kZTogbnVtYmVyXG4gICAgZXJyb3JzOiBBcnJheTxzdHJpbmc+XG4gICAgZGF0YTogYW55XG59XG5cbmludGVyZmFjZSBJU3RhdHVzQ29kZXMge1xuICAgIGFzT2JqZWN0OiBGdW5jdGlvblxuICAgIGFzQXJyYXk6IEZ1bmN0aW9uXG59XG5cbmludGVyZmFjZSBJT2JqZWN0Q29kZSB7XG4gICAgY29kZTogbnVtYmVyXG4gICAgbXNnOiBzdHJpbmdcbn1cblxuaW50ZXJmYWNlIElTdGF0dXNDb2Rlc09iamVjdCB7XG4gICAgV0lQOiBJT2JqZWN0Q29kZVxuICAgIFRIUk9XOiBJT2JqZWN0Q29kZVxuICAgIE9LOiBJT2JqZWN0Q29kZVxuICAgIE5PVF9GT1VORDogSU9iamVjdENvZGVcbiAgICBJRF9SRVFVSVJFRDogSU9iamVjdENvZGVcbiAgICBMRVhJQ09OX05PVF9GT1VORDogSU9iamVjdENvZGVcbiAgICBJTlBVVF9OT1RfRk9VTkQ6IElPYmplY3RDb2RlXG4gICAgRU5USVRZX05PVF9GT1VORDogSU9iamVjdENvZGVcbiAgICBMRVhJQ09OX0lOUFVUX1VQREFURV9GQUlMVVJFOiBJT2JqZWN0Q29kZVxuICAgIExFWElDT05fQ1JFQVRJT05fRkFJTFVSRTogSU9iamVjdENvZGVcbiAgICBMRVhJQ09OX1JFTU9WQUxfRkFJTFVSRTogSU9iamVjdENvZGVcbiAgICBMRVhJQ09OX0VOVElUWV9FWElTVFM6IElPYmplY3RDb2RlXG4gICAgTEVYSUNPTl9FTlRJVFlfVVBEQVRFX0ZBSUxVUkU6IElPYmplY3RDb2RlXG4gICAgRU5USVRZX0xBQkVMX05PVF9GT1VORDogSU9iamVjdENvZGVcbiAgICBFTlRJVFlfTEFCRUxfRVhJU1RTOiBJT2JqZWN0Q29kZVxuICAgIFRIUkVBRF9OVU1CRVJfSU5WQUxJRF9FTl9VUzogSU9iamVjdENvZGVcbiAgICBUSFJFQURfQ1JFQVRFX0ZBSUxVUkU6IElPYmplY3RDb2RlXG4gICAgVEhSRUFEX1JFTU9WRV9GQUlMVVJFOiBJT2JqZWN0Q29kZVxuICAgIFRIUkVBRF9VUERBVEVfRkFJTFVSRTogSU9iamVjdENvZGVcbn1cblxuZXhwb3J0IGNvbnN0IFNUQVRVU19DT0RFUzogSVN0YXR1c0NvZGVzID0gKCgpID0+IHtcbiAgICBjb25zdCBjb2RlczogSVN0YXR1c0NvZGVzT2JqZWN0ID0ge1xuICAgICAgICBXSVA6IHtcbiAgICAgICAgICAgIGNvZGU6IC0xLFxuICAgICAgICAgICAgbXNnOiBgV0lQYFxuICAgICAgICB9LFxuICAgICAgICBUSFJPVzoge1xuICAgICAgICAgICAgY29kZTogLTEsXG4gICAgICAgICAgICBtc2c6IGBVbmFibGUgdG8gY29tcGxldGUgcmVxdWVzdGBcbiAgICAgICAgfSxcbiAgICAgICAgT0s6IHtcbiAgICAgICAgICAgIGNvZGU6IDIwMCxcbiAgICAgICAgICAgIG1zZzogYE9rYFxuICAgICAgICB9LFxuICAgICAgICBOT1RfRk9VTkQ6IHtcbiAgICAgICAgICAgIGNvZGU6IDQwNCxcbiAgICAgICAgICAgIG1zZzogYE5vdCBmb3VuZGBcbiAgICAgICAgfSxcbiAgICAgICAgSURfUkVRVUlSRUQ6IHtcbiAgICAgICAgICAgIGNvZGU6IDQwNC42LFxuICAgICAgICAgICAgbXNnOiBgQW4gXCJfaWRcIiBpcyByZXF1aXJlZCwgYnV0IG5vdCBwcm92aWRlZC5gXG4gICAgICAgIH0sXG4gICAgICAgIExFWElDT05fTk9UX0ZPVU5EOiB7XG4gICAgICAgICAgICBjb2RlOiA0MDQuMSxcbiAgICAgICAgICAgIG1zZzogYExleGljb24gbm90IGZvdW5kYFxuICAgICAgICB9LFxuICAgICAgICBJTlBVVF9OT1RfRk9VTkQ6IHtcbiAgICAgICAgICAgIGNvZGU6IDQwNC4yLFxuICAgICAgICAgICAgbXNnOiBgTGV4aWNvbiBpbnB1dCBub3QgZm91bmRgXG4gICAgICAgIH0sXG4gICAgICAgIEVOVElUWV9OT1RfRk9VTkQ6IHtcbiAgICAgICAgICAgIGNvZGU6IDQwNC4zLFxuICAgICAgICAgICAgbXNnOiBgTGV4aWNvbiBlbnRpdHkgbm90IGZvdW5kYFxuICAgICAgICB9LFxuICAgICAgICBMRVhJQ09OX0lOUFVUX1VQREFURV9GQUlMVVJFOiB7XG4gICAgICAgICAgICBjb2RlOiA0MDQuNCxcbiAgICAgICAgICAgIG1zZzogYExleGljb24gbm90IHVwZGF0ZWRgXG4gICAgICAgIH0sXG4gICAgICAgIExFWElDT05fQ1JFQVRJT05fRkFJTFVSRToge1xuICAgICAgICAgICAgY29kZTogNDA0LjUsXG4gICAgICAgICAgICBtc2c6IGBMZXhpY29uIG5vdCBmb3VuZGBcbiAgICAgICAgfSxcbiAgICAgICAgTEVYSUNPTl9SRU1PVkFMX0ZBSUxVUkU6IHtcbiAgICAgICAgICAgIGNvZGU6IDUwMC4xLFxuICAgICAgICAgICAgbXNnOiBgTGV4aWNvbiBub3QgdW5hYmxlIHRvIGJlIHJlbW92ZWRgXG4gICAgICAgIH0sXG4gICAgICAgIExFWElDT05fRU5USVRZX0VYSVNUUzoge1xuICAgICAgICAgICAgY29kZTogNTAwLjIsXG4gICAgICAgICAgICBtc2c6IGBMZXhpY29uIGVudGl0eSBhbHJlYWR5IGV4aXN0c2BcbiAgICAgICAgfSxcbiAgICAgICAgTEVYSUNPTl9FTlRJVFlfVVBEQVRFX0ZBSUxVUkU6IHtcbiAgICAgICAgICAgIGNvZGU6IDUwMC4zLFxuICAgICAgICAgICAgbXNnOiBgTGV4aWNvbiBlbnRpdHkgYWxyZWFkeSBleGlzdHNgXG4gICAgICAgIH0sXG4gICAgICAgIEVOVElUWV9MQUJFTF9OT1RfRk9VTkQ6IHtcbiAgICAgICAgICAgIGNvZGU6IDQwNC42LFxuICAgICAgICAgICAgbXNnOiBgRW50aXR5IG5vdCBmb3VuZGBcbiAgICAgICAgfSxcbiAgICAgICAgRU5USVRZX0xBQkVMX0VYSVNUUzoge1xuICAgICAgICAgICAgY29kZTogNDA0LjcsXG4gICAgICAgICAgICBtc2c6IGBFbnRpdHkgYWxyZWFkeSBleGlzdHNgXG4gICAgICAgIH0sXG4gICAgICAgIFRIUkVBRF9OVU1CRVJfSU5WQUxJRF9FTl9VUzoge1xuICAgICAgICAgICAgY29kZTogNTAwLjQsXG4gICAgICAgICAgICBtc2c6IGBJbnZhbGlkIG51bWJlciBkZXRlY3RlZCwgb25seSB1c2UgZW4tVVMgcGhvbmUgbnVtYmVycy5gXG4gICAgICAgIH0sXG4gICAgICAgIFRIUkVBRF9DUkVBVEVfRkFJTFVSRToge1xuICAgICAgICAgICAgY29kZTogNTAwLjUsXG4gICAgICAgICAgICBtc2c6IGBVbmFibGUgdG8gY3JlYXRlIGEgbmV3IHRocmVhZC5gXG4gICAgICAgIH0sXG4gICAgICAgIFRIUkVBRF9SRU1PVkVfRkFJTFVSRToge1xuICAgICAgICAgICAgY29kZTogNTAwLjYsXG4gICAgICAgICAgICBtc2c6IGBVbmFibGUgdG8gcmVtb3ZlIHRocmVhZC5gXG4gICAgICAgIH0sXG4gICAgICAgIFRIUkVBRF9VUERBVEVfRkFJTFVSRToge1xuICAgICAgICAgICAgY29kZTogNTAwLjcsXG4gICAgICAgICAgICBtc2c6IGBVbmFibGUgdG8gdXBkYXRlIHRocmVhZC5gXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXNPYmplY3QoKTogSVN0YXR1c0NvZGVzT2JqZWN0IHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlcztcbiAgICAgICAgfSxcbiAgICAgICAgYXNBcnJheSgpOiBhbnkge1xuICAgICAgICAgICAgY29uc3QgYXJyYXk6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBjb2RlIGluIGNvZGVzKVxuICAgICAgICAgICAgICAgIGFycmF5W2NvZGVdID0gT2JqZWN0LnZhbHVlcyhjb2Rlc1tjb2RlXSk7XG5cbiAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgfSxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBwcml2YXRlIHJlc29sdmU6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGw7XG4gICAgcHJpdmF0ZSByZXNwb25zZTogSVJlc3BvbnNlID0ge1xuICAgICAgICBjb2RlOiAwLFxuICAgICAgICBlcnJvcnM6IFtdLFxuICAgICAgICBkYXRhOiBudWxsXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHJlc29sdmUpIHtcbiAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9XG5cbiAgICBzZXQgY29kZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UuY29kZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBlcnJvcnModmFsdWU6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdGhpcy5yZXNwb25zZS5lcnJvcnMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZGF0YSh2YWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2UuZGF0YSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldCBjb2RlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLmNvZGU7XG4gICAgfVxuXG4gICAgZ2V0IGVycm9ycygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzcG9uc2UuZXJyb3JzO1xuICAgIH1cblxuICAgIGdldCBkYXRhKCk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0RXJyb3IoY29kZTogbnVtYmVyLCBtc2c6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgICAgICB0aGlzLmVycm9ycyA9IFsgbXNnIF07XG4gICAgfVxuXG4gICAgYXN5bmMgc2V0RGF0YShkYXRhOiBhbnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5jb2RlID0gMjAwO1xuICAgIH1cblxuICAgIGFzeW5jIHNlbmQoY29kZTogbnVtYmVyIHwgbnVsbCA9IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgaWYgKGNvZGUgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG5cbiAgICAgICAgaWYgKHRoaXMucmVzb2x2ZSAhPSBudWxsKVxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlKHsuLi50aGlzLnJlc3BvbnNlfSk7XG4gICAgfVxufSIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlclwiO1xuXG5jb25zdCBpbml0ID0ge1xuICAgIHR5cGVEZWZzOiBbXSxcbiAgICByZXNvbHZlcnM6IFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IChzY2hlbWE6IGFueSA9IGluaXQsIG1ha2VHcWwgPSBmYWxzZSk6IGFueSA9PiB7XG4gICAgbGV0XG4gICAgeyB0eXBlRGVmcywgcmVzb2x2ZXJzIH0gPSBzY2hlbWEsXG4gICAgUXVlcmllcyA9IHt9LFxuICAgIE11dGF0aW9ucyA9IHt9LFxuICAgIFR5cGVzID0ge307XG5cbiAgICBpZiAodHlwZURlZnMubGVuZ3RoID4gMClcbiAgICAgICAgdHlwZURlZnMgPSB0eXBlRGVmcy5qb2luKFwiXCIpO1xuXG4gICAgaWYgKG1ha2VHcWwpXG4gICAgICAgIHR5cGVEZWZzID0gZ3FsKHR5cGVEZWZzKTtcblxuICAgIGlmIChyZXNvbHZlcnMubGVuZ3RoID4gMClcbiAgICAgICAgZm9yIChsZXQgeyBRdWVyeSwgTXV0YXRpb24sIC4uLlR5cGUgfSBvZiByZXNvbHZlcnMpIHtcbiAgICAgICAgICAgIFR5cGVzID0gbWVyZ2UoVHlwZXMsIFR5cGUpO1xuICAgICAgICAgICAgUXVlcmllcyA9IG1lcmdlKFF1ZXJpZXMsIFF1ZXJ5KTtcbiAgICAgICAgICAgIE11dGF0aW9ucyA9IG1lcmdlKE11dGF0aW9ucywgTXV0YXRpb24pO1xuICAgICAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlRGVmcyxcbiAgICAgICAgcmVzb2x2ZXJzOiB7XG4gICAgICAgICAgICBRdWVyeTogUXVlcmllcyxcbiAgICAgICAgICAgIE11dGF0aW9uOiBNdXRhdGlvbnMsXG4gICAgICAgICAgICAuLi5UeXBlc1xuICAgICAgICB9XG4gICAgfTtcbn0iLCJpbXBvcnQgZG90ZW52IGZyb20gXCJkb3RlbnZcIjtcbmltcG9ydCB7IGJ1aWxkRmVkZXJhdGVkU2NoZW1hIH0gZnJvbSBcIkBhcG9sbG8vZmVkZXJhdGlvblwiO1xuaW1wb3J0IGdxbFNjaGVtYUJ1aWxkZXIgZnJvbSBcIkBjb21tb25VdGlscy9ncWxTY2hlbWFCdWlsZGVyXCI7XG5pbXBvcnQgeyB0eXBlRGVmcyBhcyBMZXhpY29uLCByZXNvbHZlcnMgYXMgTGV4aWNvblJlc29sdmVycyB9IGZyb20gXCIuL3NjaGVtYXMvTGV4aWNvbi9MZXhpY29uXCI7XG5pbXBvcnQgeyB0eXBlRGVmcyBhcyBFbnRpdHksIHJlc29sdmVycyBhcyBFbnRpdHlSZXNvbHZlcnMgfSBmcm9tIFwiLi9zY2hlbWFzL0VudGl0eS9FbnRpdHlcIjtcbmltcG9ydCB7IHR5cGVEZWZzIGFzIFRocmVhZCwgcmVzb2x2ZXJzIGFzIFRocmVhZFJlc29sdmVycyB9IGZyb20gXCIuL3NjaGVtYXMvVGhyZWFkL1RocmVhZFwiO1xuXG5kb3RlbnYuY29uZmlnKCk7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gcGxheWdyb3VuZDogIShwcm9jZXNzLmVudi5QTEFZR1JPVU5EID09IFwidHJ1ZVwiKSA/IGZhbHNlIDoge1xuICAgIC8vICAgICBzZXR0aW5nczoge1xuICAgIC8vICAgICAgICAgXCJyZXF1ZXN0LmNyZWRlbnRpYWxzXCI6IFwiaW5jbHVkZVwiXG4gICAgLy8gICAgIH1cbiAgICAvLyB9LFxuICAgIHNjaGVtYTogYnVpbGRGZWRlcmF0ZWRTY2hlbWEoW1xuICAgICAgICBncWxTY2hlbWFCdWlsZGVyKHtcbiAgICAgICAgICAgIHR5cGVEZWZzOiBbXG4gICAgICAgICAgICAgICAgRW50aXR5LFxuICAgICAgICAgICAgICAgIExleGljb24sXG4gICAgICAgICAgICAgICAgVGhyZWFkXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgICAgICAgRW50aXR5UmVzb2x2ZXJzLFxuICAgICAgICAgICAgICAgIExleGljb25SZXNvbHZlcnMsXG4gICAgICAgICAgICAgICAgVGhyZWFkUmVzb2x2ZXJzXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIHRydWUpXG4gICAgXSlcbn0iLCJjb25zdFxuaW5pdDogYW55ID0ge1xuICAgIFF1ZXJ5OiB7fSxcbiAgICBNdXRhdGlvbjoge31cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChyZXNvbHZlcnM9aW5pdCwgbWlkZGxld2FyZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB7IFF1ZXJ5LCBNdXRhdGlvbiwgLi4uVHlwZXMgfTogYW55ID0gcmVzb2x2ZXJzO1xuXG4gICAgICAgIGNvbnN0XG4gICAgICAgIHF1ZXJ5Q250ID0gT2JqZWN0LmtleXMoUXVlcnkpLmxlbmd0aCxcbiAgICAgICAgcXVlcnlNZXRob2RzID0gT2JqZWN0LmtleXMoUXVlcnkpO1xuXG4gICAgICAgIGNvbnN0XG4gICAgICAgIG11dGF0aW9uQ250ID0gT2JqZWN0LmtleXMoTXV0YXRpb24pLmxlbmd0aCxcbiAgICAgICAgbXV0YXRpb25NZXRob2RzID0gT2JqZWN0LmtleXMoTXV0YXRpb24pO1xuXG4gICAgICAgIGlmIChxdWVyeUNudCA+IDApXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8cXVlcnlNZXRob2RzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGZvciAobGV0IG13IG9mIG1pZGRsZXdhcmUpXG4gICAgICAgICAgICAgICAgICAgIFF1ZXJ5W3F1ZXJ5TWV0aG9kc1tpXV0gPSBtdyhRdWVyeVtxdWVyeU1ldGhvZHNbaV1dKTtcblxuICAgICAgICBpZiAobXV0YXRpb25DbnQgPiAwKVxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPG11dGF0aW9uTWV0aG9kcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBtdyBvZiBtaWRkbGV3YXJlKVxuICAgICAgICAgICAgICAgICAgICBNdXRhdGlvblttdXRhdGlvbk1ldGhvZHNbaV1dID0gbXcoTXV0YXRpb25bbXV0YXRpb25NZXRob2RzW2ldXSk7XG5cbiAgICAgICAgcmV0dXJuIHsgUXVlcnksIE11dGF0aW9uLCAuLi5UeXBlcyB9O1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCByZXNvbHZlciA9PiBhc3luYyAoLi4ucmVzb2x2ZXJBcmdzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gQXBwbHkgYSBwYXJzZXIgdG8gdGhlIGFyZ3MgdG8gaW5zdGFudGlhdGUgdGhlIGdlbmVyaWMgT2JqZWN0IHByb3RvdHlwZVxuICAgICAgICAvLyB0byB0aGUgcGFzc2VkIGluIFwiYXJnc1wiIHByb3BlcnR5LiBUaGUgc2Vjb25kIGFyZ3VtZW50LlxuICAgICAgICByZXNvbHZlckFyZ3NbMV0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlc29sdmVyQXJnc1sxXSkpO1xuXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNvbHZlciguLi5yZXNvbHZlckFyZ3MpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBsb2csIGVycm9yIH0gZnJvbSBcImNvbnNvbGVcIjtcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcbmltcG9ydCBkb3RlbnYgZnJvbSBcImRvdGVudlwiO1xuZG90ZW52LmNvbmZpZygpO1xuXG5jb25zdFxuZGIgPSBtb25nb29zZS5jb25uZWN0aW9uLFxueyBEQl9DT05ORUNUSU9OIH0gPSBwcm9jZXNzLmVudixcbm1zZyA9IG1zZyA9PiB7IGxvZyhgPiBEQjogYC5ib2xkICsgYGAgKyBtc2cpOyB9O1xuXG4vLyBTaWduYWwgaW50ZXJydXB0LlxucHJvY2Vzcy5vbihcIlNJR0lOVFwiLCAoKSA9PiB7XG4gICAgZGIuY2xvc2UoKTtcbn0pO1xuXG4vLyBEYXRhYmFzZSBldmVudHMuXG5kYi5vbihcImNvbm5lY3RpbmdcIiwgKCkgPT4ge1xuICAgIG1zZyhgQ29ubmVjdGluZ2AuY3lhbi5ib2xkKTtcbn0pO1xuXG5kYi5vbihcImNvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgbXNnKGBDb25uZWN0ZWRgLmdyZWVuLmJvbGQpO1xufSk7XG5cbmRiLm9uKFwib3BlblwiLCAoKSA9PiB7XG4gICAgbXNnKGBPcGVuYC5ncmVlbi5ib2xkKTtcbn0pO1xuXG5kYi5vbihcImRpc2Nvbm5lY3RpbmdcIiwgKCkgPT4ge1xuICAgIG1zZyhgRGlzY29ubmVjdGluZ2AuY3lhbi5ib2xkKTtcbn0pO1xuXG5kYi5vbihcImRpc2Nvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgbXNnKGBEaXNjb25uZWN0ZWRgLnllbGxvdy5ib2xkKTtcbn0pO1xuXG5kYi5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICBtc2coYENsb3NlYC55ZWxsb3cuYm9sZCk7XG59KTtcblxuZGIub24oXCJyZWNvbm5lY3RlZFwiLCAoKSA9PiB7XG4gICAgbXNnKGBSZWNvbm5lY3RlZGAuY3lhbi5ib2xkKTtcbn0pO1xuXG5kYi5vbihcImVycm9yXCIsIGVyciA9PiB7XG4gICAgbXNnKGBFcnJvcmAucmVkLmJvbGQpO1xuICAgIGVycm9yKGVycik7XG59KTtcblxubW9uZ29vc2UuY29ubmVjdChEQl9DT05ORUNUSU9OLCB7XG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB1c2VDcmVhdGVJbmRleDogdHJ1ZSxcbiAgICB1c2VGaW5kQW5kTW9kaWZ5OiBmYWxzZVxufSk7IiwiaW1wb3J0IHsgSU1vbmdvb3NlRW50aXR5IH0gZnJvbSBcIi4vSUVudGl0eVwiO1xuaW1wb3J0IHsgbW9kZWwsIFNjaGVtYSwgVHlwZXMgfSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgRW50aXR5U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgY3JlYXRlZDogRGF0ZSxcbiAgICBtb2RpZmllZDogRGF0ZSxcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIGJhY2tncm91bmRDb2xvcjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGFjY2VudENvbG9yOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG59LCB7XG4gICAgY29sbGVjdGlvbjogXCJlbnRpdHlcIixcbiAgICB0aW1lc3RhbXBzOiB7XG4gICAgICAgIGNyZWF0ZWRBdDogXCJjcmVhdGVkXCIsXG4gICAgICAgIHVwZGF0ZWRBdDogXCJtb2RpZmllZFwiXG4gICAgfSxcbn0pO1xuXG5FbnRpdHlTY2hlbWEuc3RhdGljcy5oYXNFbnRpdHlCeUlkID0gYXN5bmMgZnVuY3Rpb24oX2lkOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgIGlmIChfaWQgPT0gbnVsbCkgcmV0dXJuIG51bGxcbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgRW50aXR5ID0gdGhpcy5tb2RlbChcIkVudGl0eVwiKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IEVudGl0eS5jb3VudERvY3VtZW50cyh7IF9pZCB9KSAhPSAwO1xuICAgIH1cbn1cblxuRW50aXR5U2NoZW1hLnN0YXRpY3MuaGFzRW50aXR5QnlMYWJlbCA9IGFzeW5jIGZ1bmN0aW9uKGxhYmVsOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgIGlmIChsYWJlbCA9PSBudWxsKSByZXR1cm4gbnVsbFxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBFbnRpdHkgPSB0aGlzLm1vZGVsKFwiRW50aXR5XCIpO1xuICAgICAgICByZXR1cm4gYXdhaXQgRW50aXR5LmNvdW50RG9jdW1lbnRzKHsgbGFiZWwgfSkgIT0gMDtcbiAgICB9XG59XG5cbi8vIFJlZ2lzdGVyIHRoZSBtb2RlbCB3aXRoIE1vbmdvb3NlLlxubW9kZWw8SU1vbmdvb3NlRW50aXR5PihcIkVudGl0eVwiLCBFbnRpdHlTY2hlbWEpOyIsIi8vIFJlZ2lzdGVyIHRoZSBtb2RlbC5cbmltcG9ydCBcIi4vRW50aXR5Lm1vZGVsXCI7XG5cbi8vIEhvb2tzXG5pbXBvcnQgdXNlUmVzb2x2ZXJNaWRkbGV3YXJlIGZyb20gXCJAaG9va3MvdXNlUmVzb2x2ZXJNaWRkbGV3YXJlXCI7XG5cbi8vIE1pZGRsZXdhcmVcbmltcG9ydCBhcHBseUFyZ3NQcm90byBmcm9tIFwiQG1pZGRsZXdhcmUvYXBwbHlBcmdzUHJvdG9cIjtcblxuLy8gVHlwZSBEZWZpbml0aW9uc1xuaW1wb3J0IGV4dGVuZEdxbCBmcm9tIFwiLi9ncmFwaHFsL0VudGl0eS5leHRlbmQuZ3FsXCI7XG5pbXBvcnQgcXVlcnlHcWwgZnJvbSBcIi4vZ3JhcGhxbC9FbnRpdHkucXVlcnkuZ3FsXCI7XG5pbXBvcnQgbXV0YXRpb25HcWwgZnJvbSBcIi4vZ3JhcGhxbC9FbnRpdHkubXV0YXRpb24uZ3FsXCI7XG5pbXBvcnQgdHlwZUdxbCBmcm9tIFwiLi9ncmFwaHFsL0VudGl0eS50eXBlLmdxbFwiO1xuXG4vLyBRdWVyeSBSZXNvbHZlcnNcbmltcG9ydCBlbnRpdGllcyBmcm9tIFwiLi9yZXNvbHZlcnMvcXVlcmllcy9lbnRpdGllc1wiO1xuaW1wb3J0IGVudGl0eUJ5SWQgZnJvbSBcIi4vcmVzb2x2ZXJzL3F1ZXJpZXMvZW50aXR5QnlJZFwiO1xuaW1wb3J0IGVudGl0eUJ5TGFiZWwgZnJvbSBcIi4vcmVzb2x2ZXJzL3F1ZXJpZXMvZW50aXR5QnlMYWJlbFwiO1xuXG4vLyBNdXRhdGlvbiBSZXNvbHZlcnNcbmltcG9ydCBlbnRpdHlDcmVhdGVPbmUgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlDcmVhdGVPbmVcIjtcbmltcG9ydCBlbnRpdHlVcGRhdGVPbmUgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlVcGRhdGVPbmVcIjtcbmltcG9ydCBlbnRpdHlSZW1vdmVPbmUgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlSZW1vdmVPbmVcIjtcblxuaW1wb3J0IGVudGl0eVVwZGF0ZU9uZUNvbG9yIGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvZW50aXR5VXBkYXRlT25lQ29sb3JcIjtcbmltcG9ydCBlbnRpdHlSZW1vdmVPbmVDb2xvciBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL2VudGl0eVJlbW92ZU9uZUNvbG9yXCI7XG5cbmltcG9ydCBlbnRpdHlDcmVhdGVNYW55IGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvZW50aXR5Q3JlYXRlTWFueVwiO1xuaW1wb3J0IGVudGl0eVVwZGF0ZU1hbnkgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9lbnRpdHlVcGRhdGVNYW55XCI7XG5pbXBvcnQgZW50aXR5UmVtb3ZlTWFueSBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL2VudGl0eVJlbW92ZU1hbnlcIjtcblxuZXhwb3J0IGNvbnN0XG50eXBlRGVmcyA9IFtcbiAgICBleHRlbmRHcWwsXG4gICAgcXVlcnlHcWwsXG4gICAgbXV0YXRpb25HcWwsXG4gICAgdHlwZUdxbFxuXS5qb2luKFwiXFxuXCIpLFxuXG5yZXNvbHZlcnMgPSB1c2VSZXNvbHZlck1pZGRsZXdhcmUoe1xuICAgIFF1ZXJ5OiB7XG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgICBlbnRpdHlCeUlkLFxuICAgICAgICBlbnRpdHlCeUxhYmVsXG4gICAgfSxcbiAgICBNdXRhdGlvbjoge1xuICAgICAgICBlbnRpdHlDcmVhdGVPbmUsXG4gICAgICAgIGVudGl0eVVwZGF0ZU9uZSxcbiAgICAgICAgZW50aXR5UmVtb3ZlT25lLFxuICAgICAgICBlbnRpdHlVcGRhdGVPbmVDb2xvcixcbiAgICAgICAgZW50aXR5UmVtb3ZlT25lQ29sb3IsXG4gICAgICAgIGVudGl0eUNyZWF0ZU1hbnksXG4gICAgICAgIGVudGl0eVVwZGF0ZU1hbnksXG4gICAgICAgIGVudGl0eVJlbW92ZU1hbnlcbiAgICB9XG59LCBbXG4gICAgYXBwbHlBcmdzUHJvdG9cbl0pOyIsImV4cG9ydCBkZWZhdWx0IFwiZXh0ZW5kIHR5cGUgUXVlcnkge1xcbiAgICBlbnRpdGllczogRW50aXR5UmVzcG9uc2VBcnJheVxcbiAgICBlbnRpdHlCeUlkKF9pZDogSUQhKTogRW50aXR5UmVzcG9uc2VcXG4gICAgZW50aXR5QnlMYWJlbChsYWJlbDogU3RyaW5nISk6IEVudGl0eVJlc3BvbnNlXFxufVxcblxcbmV4dGVuZCB0eXBlIE11dGF0aW9uIHtcXG4gICAgZW50aXR5Q3JlYXRlT25lKGVudGl0eTogRW50aXR5TXV0YXRpb25JbnB1dCEpOiBFbnRpdHlSZXNwb25zZVxcbiAgICBlbnRpdHlVcGRhdGVPbmUoX2lkOiBJRCEsIGVudGl0eTogRW50aXR5TXV0YXRpb25JbnB1dCEpOiBFbnRpdHlSZXNwb25zZVxcbiAgICBlbnRpdHlSZW1vdmVPbmUoX2lkOiBJRCEpOiBFbnRpdHlSZXNwb25zZVxcblxcbiAgICBlbnRpdHlVcGRhdGVPbmVDb2xvcihfaWQ6IElEISwgY29sb3I6IEVudGl0eU11dGF0aW9uQ29sb3IpOiBFbnRpdHlSZXNwb25zZVxcbiAgICBlbnRpdHlSZW1vdmVPbmVDb2xvcihfaWQ6IElEISk6IEVudGl0eVJlc3BvbnNlXFxuXFxuICAgIGVudGl0eUNyZWF0ZU1hbnkoZW50aXRpZXM6IFtFbnRpdHlNdXRhdGlvbklucHV0XSEpOiBFbnRpdHlSZXNwb25zZUFycmF5XFxuICAgIGVudGl0eVVwZGF0ZU1hbnkoZW50aXRpZXM6IFtFbnRpdHlNdXRhdGlvbklucHV0V2l0aElkXSEpOiBFbnRpdHlSZXNwb25zZUFycmF5XFxuICAgIGVudGl0eVJlbW92ZU1hbnkoaWRzOiBbSURdISk6IEVudGl0eVJlc3BvbnNlQXJyYXlcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbnB1dCBFbnRpdHlNdXRhdGlvbklucHV0IHtcXG4gICAgbGFiZWw6IFN0cmluZ1xcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFN0cmluZ1xcbiAgICBhY2NlbnRDb2xvcjogU3RyaW5nXFxufVxcblxcbmlucHV0IEVudGl0eU11dGF0aW9uSW5wdXRXaXRoSWQge1xcbiAgICBfaWQ6IElEIVxcbiAgICBsYWJlbDogU3RyaW5nXFxuICAgIGJhY2tncm91bmRDb2xvcjogU3RyaW5nXFxuICAgIGFjY2VudENvbG9yOiBTdHJpbmdcXG59XFxuXFxuaW5wdXQgRW50aXR5TXV0YXRpb25Db2xvciB7XFxuICAgIGJhY2tncm91bmRDb2xvcjogU3RyaW5nXFxuICAgIGFjY2VudENvbG9yOiBTdHJpbmdcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJcIjsiLCJleHBvcnQgZGVmYXVsdCBcInR5cGUgRW50aXR5UmVzcG9uc2Uge1xcbiAgICBjb2RlOiBGbG9hdFxcbiAgICBlcnJvcnM6IFtTdHJpbmddXFxuICAgIGRhdGE6IEVudGl0eVxcbn1cXG5cXG50eXBlIEVudGl0eVJlc3BvbnNlQXJyYXkge1xcbiAgICBjb2RlOiBGbG9hdFxcbiAgICBlcnJvcnM6IFtTdHJpbmddXFxuICAgIGRhdGE6IFtFbnRpdHldXFxufVxcblxcbnR5cGUgRW50aXR5IEBrZXkoZmllbGRzOiBcXFwiX2lkXFxcIikge1xcbiAgICBfaWQ6IElEXFxuICAgIGNyZWF0ZWQ6IFN0cmluZ1xcbiAgICBtb2RpZmllZDogU3RyaW5nXFxuICAgIGxhYmVsOiBTdHJpbmdcXG4gICAgYmFja2dyb3VuZENvbG9yOiBTdHJpbmdcXG4gICAgYWNjZW50Q29sb3I6IFN0cmluZ1xcbn1cIjsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkVudGl0eVwiLFxuICAgIGFzeW5jIChFbnRpdHksIHJlc3BvbnNlLCByb290LCB7IGVudGl0aWVzIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmV3RW50aXRpZXM6IGFueSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMpXG4gICAgICAgICAgICAgICAgaWYgKCFhd2FpdCBFbnRpdHkuaGFzRW50aXR5QnlMYWJlbChlbnRpdHkubGFiZWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VudGl0eSA9IG5ldyBFbnRpdHkoZW50aXR5KTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgbmV3RW50aXR5LnNhdmUoKTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdFbnRpdGllcy5wdXNoKG5ld0VudGl0eSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKG5ld0VudGl0aWVzKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkVudGl0eVwiLFxuICAgIGFzeW5jIChFbnRpdHksIHJlc3BvbnNlLCByb290LCB7IGVudGl0eSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbGFiZWwgfSA9IGVudGl0eTtcblxuICAgICAgICAgICAgaWYgKGF3YWl0IEVudGl0eS5oYXNFbnRpdHlCeUxhYmVsKGxhYmVsKSlcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuRU5USVRZX0xBQkVMX0VYSVNUUyk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YShhd2FpdCAobmV3IEVudGl0eShlbnRpdHkpKS5zYXZlKCkpO1xuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7IiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJFbnRpdHlcIixcbiAgICBhc3luYyAoRW50aXR5LCByZXNwb25zZSwgcm9vdCwgeyBpZHMgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkRW50aXRpZXM6IGFueSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBfaWQgb2YgaWRzKVxuICAgICAgICAgICAgICAgIGlmIChhd2FpdCBFbnRpdHkuaGFzRW50aXR5QnlJZChfaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZWRFbnRpdGllcy5wdXNoKGF3YWl0IEVudGl0eS5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgRW50aXR5LmRlbGV0ZU9uZSh7IF9pZCB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoZGVsZXRlZEVudGl0aWVzKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkVudGl0eVwiLFxuICAgIGFzeW5jIChFbnRpdHksIHJlc3BvbnNlLCByb290LCB7IF9pZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghYXdhaXQgRW50aXR5Lmhhc0VudGl0eUJ5SWQoX2lkKSlcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuRU5USVRZX0xBQkVMX05PVF9GT1VORCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBFbnRpdHkuZGVsZXRlT25lKHsgX2lkIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoYXdhaXQgRW50aXR5LmZpbmRPbmUoeyBfaWQgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7IiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJFbnRpdHlcIixcbiAgICBhc3luYyAoRW50aXR5LCByZXNwb25zZSwgcm9vdCwgeyBfaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IEVudGl0eS5oYXNFbnRpdHlCeUlkKF9pZCkpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLkVOVElUWV9MQUJFTF9OT1RfRk9VTkQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgRW50aXR5LmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQgfSwge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGFjY2VudENvbG9yOiBudWxsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IEVudGl0eS5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiRW50aXR5XCIsXG4gICAgYXN5bmMgKEVudGl0eSwgcmVzcG9uc2UsIHJvb3QsIHsgZW50aXRpZXMgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkRW50aXRpZXM6IGFueSA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMpXG4gICAgICAgICAgICAgICAgaWYgKGF3YWl0IEVudGl0eS5oYXNFbnRpdHlCeUlkKGVudGl0eS5faWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudCA9IHsuLi5lbnRpdHl9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnQuaGFzT3duUHJvcGVydHkoXCJfaWRcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZW50Ll9pZDtcblxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBFbnRpdHkuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZDogZW50aXR5Ll9pZCB9LCBlbnQpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkRW50aXRpZXMucHVzaChhd2FpdCBFbnRpdHkuZmluZE9uZSh7IF9pZDogZW50aXR5Ll9pZCB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YSh1cGRhdGVkRW50aXRpZXMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiRW50aXR5XCIsXG4gICAgYXN5bmMgKEVudGl0eSwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBlbnRpdHkgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IEVudGl0eS5oYXNFbnRpdHlCeUlkKF9pZCkpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLkVOVElUWV9MQUJFTF9OT1RfRk9VTkQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgRW50aXR5LmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQgfSwgZW50aXR5KTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IEVudGl0eS5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiRW50aXR5XCIsXG4gICAgYXN5bmMgKEVudGl0eSwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBjb2xvciB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghYXdhaXQgRW50aXR5Lmhhc0VudGl0eUJ5SWQoX2lkKSlcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuRU5USVRZX0xBQkVMX05PVF9GT1VORClcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYmFja2dyb3VuZENvbG9yLCBhY2NlbnRDb2xvciB9ID0gY29sb3I7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCBFbnRpdHkuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgYWNjZW50Q29sb3JcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoYXdhaXQgRW50aXR5LmZpbmRPbmUoeyBfaWQgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7IiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJFbnRpdHlcIixcbiAgICBhc3luYyAoRW50aXR5LCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IEVudGl0eS5maW5kKHt9KSk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7IiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJFbnRpdHlcIixcbiAgICBhc3luYyAoRW50aXR5LCByZXNwb25zZSwgcm9vdCwgeyBfaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IEVudGl0eS5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkVudGl0eVwiLFxuICAgIGFzeW5jIChFbnRpdHksIHJlc3BvbnNlLCByb290LCB7IGxhYmVsIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YShhd2FpdCBFbnRpdHkuZmluZE9uZSh7IGxhYmVsIH0pKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgeyBJTW9uZ29vc2VMZXhpY29uIH0gZnJvbSBcIi4vSUxleGljb25cIjtcbmltcG9ydCB7IG1vZGVsLCBTY2hlbWEsIFR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgcGFnaW5hdGlvbiBmcm9tIFwibW9uZ29vc2UtcGFnaW5hdGUtdjJcIjtcblxuY29uc3RcbnsgT2JqZWN0SWQgfSA9IFR5cGVzLFxuRW50aXR5U2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgY3JlYXRlZDogRGF0ZSxcbiAgICBtb2RpZmllZDogRGF0ZSxcbiAgICBsYWJlbDogU3RyaW5nLFxuICAgIHN0YXJ0OiBOdW1iZXIsXG4gICAgc3RvcDogTnVtYmVyLFxufSwge1xuICAgIHRpbWVzdGFtcHM6IHtcbiAgICAgICAgY3JlYXRlZEF0OiBcImNyZWF0ZWRcIixcbiAgICAgICAgdXBkYXRlZEF0OiBcIm1vZGlmaWVkXCJcbiAgICB9LFxufSksXG5MZXhpY29uU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgY3JlYXRlZDogRGF0ZSxcbiAgICBtb2RpZmllZDogRGF0ZSxcbiAgICBpbnB1dDogU3RyaW5nLFxuICAgIGVudGl0aWVzOiBbIEVudGl0eVNjaGVtYSBdXG59LCB7XG4gICAgY29sbGVjdGlvbjogXCJsZXhpY29uXCIsXG4gICAgdGltZXN0YW1wczoge1xuICAgICAgICBjcmVhdGVkQXQ6IFwiY3JlYXRlZFwiLFxuICAgICAgICB1cGRhdGVkQXQ6IFwibW9kaWZpZWRcIlxuICAgIH0sXG59KTtcblxuTGV4aWNvblNjaGVtYS5wbHVnaW4ocGFnaW5hdGlvbik7XG5cbkxleGljb25TY2hlbWEuc3RhdGljcy5oYXNJbnB1dCA9IGFzeW5jIGZ1bmN0aW9uKGlucHV0PW51bGwpIHtcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IExleGljb24gPSB0aGlzLm1vZGVsKFwiTGV4aWNvblwiKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IExleGljb24uY291bnREb2N1bWVudHMoeyBpbnB1dCB9KSAhPT0gMDtcbiAgICB9XG59XG5cbkxleGljb25TY2hlbWEuc3RhdGljcy5oYXNMZXhpY29uID0gYXN5bmMgZnVuY3Rpb24oX2lkPW51bGwpIHtcbiAgICBpZiAoX2lkID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBMZXhpY29uID0gdGhpcy5tb2RlbChcIkxleGljb25cIik7XG4gICAgICAgIHJldHVybiBhd2FpdCBMZXhpY29uLmNvdW50RG9jdW1lbnRzKHsgX2lkIH0pICE9PSAwO1xuICAgIH1cbn1cblxuTGV4aWNvblNjaGVtYS5zdGF0aWNzLmdldEVudGl0eSA9IGFzeW5jIGZ1bmN0aW9uKGxleGljb246IGFueSA9IG51bGwsIGVudGl0eTogc3RyaW5nID0gXCJcIikge1xuICAgIGlmIChsZXhpY29uID09IG51bGwgfHwgZW50aXR5Lmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgaW5wdXQsIGVudGl0aWVzIH0gPSBsZXhpY29uO1xuXG4gICAgICAgIGlmICghaW5wdXQuaW5jbHVkZXMoZW50aXR5KSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgIHN0YXJ0ID0gaW5wdXQuaW5kZXhPZihlbnRpdHkpLFxuICAgICAgICAgICAgc3RvcCA9IHN0YXJ0ICsgZW50aXR5Lmxlbmd0aDtcblxuICAgICAgICAgICAgcmV0dXJuIGVudGl0aWVzLmZpbmQoZSA9PlxuICAgICAgICAgICAgICAgIGUuc3RhcnQgPT09IHN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgZS5zdG9wID09PSBzdG9wXG4gICAgICAgICAgICApIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkxleGljb25TY2hlbWEuc3RhdGljcy5nZXRFbnRpdHlEYXRhID0gYXN5bmMgZnVuY3Rpb24obGV4aWNvbjogYW55ID0gbnVsbCwgZW50aXR5OiBhbnkgPSBudWxsKSB7XG4gICAgaWYgKGxleGljb24gPT0gbnVsbCB8fCBlbnRpdHkgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIHN0YXJ0LCBzdG9wIH0gPSBlbnRpdHk7XG5cbiAgICAgICAgcmV0dXJuIGxleGljb24uZW50aXRpZXMuZmluZChlID0+XG4gICAgICAgICAgICBlLmxhYmVsID09PSBsYWJlbCAmJlxuICAgICAgICAgICAgZS5zdGFydCA9PT0gc3RhcnQgJiZcbiAgICAgICAgICAgIGUuc3RvcCA9PSBzdG9wXG4gICAgICAgICkgfHwgbnVsbDtcbiAgICB9XG59XG5cbkxleGljb25TY2hlbWEuc3RhdGljcy5oYXNFbnRpdHkgPSBhc3luYyBmdW5jdGlvbihsZXhpY29uOiBhbnkgPSBudWxsLCBlbnRpdHk6IGFueSA9IG51bGwpIHtcbiAgICBpZiAobGV4aWNvbiA9PSBudWxsIHx8IGVudGl0eSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgeyBzdGFydCwgc3RvcCB9OiBhbnkgPSBlbnRpdHksXG4gICAgICAgIHsgZW50aXRpZXMgfTogYW55ID0gbGV4aWNvbjtcblxuICAgICAgICBpZiAoZW50aXRpZXMgPT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBlbHNlIHJldHVybiBlbnRpdGllcyA9PSBudWxsID8gZmFsc2UgOiBlbnRpdGllcy5maW5kKGUgPT5cbiAgICAgICAgICAgIGUuc3RhcnQgPT09IHN0YXJ0ICYmXG4gICAgICAgICAgICBlLnN0b3AgPT09IHN0b3BcbiAgICAgICAgKSAhPSBudWxsO1xuICAgIH1cbn1cblxuTGV4aWNvblNjaGVtYS5zdGF0aWNzLmhhc0VudGl0eVdpdGhMYWJlbCA9IGFzeW5jIGZ1bmN0aW9uKGxleGljb246IGFueSA9IG51bGwsIGVudGl0eTogYW55ID0gbnVsbCkge1xuICAgIGlmIChsZXhpY29uID09IG51bGwgfHwgZW50aXR5ID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zdFxuICAgICAgICB7IGxhYmVsLCBzdGFydCwgc3RvcCB9OiBhbnkgPSBlbnRpdHksXG4gICAgICAgIHsgZW50aXRpZXMgfSA9IGxleGljb247XG5cbiAgICAgICAgcmV0dXJuIGVudGl0aWVzID09IG51bGwgPyBmYWxzZSA6IGVudGl0aWVzLmZpbmQoZSA9PlxuICAgICAgICAgICAgZS5sYWJlbCA9PT0gbGFiZWwgJiZcbiAgICAgICAgICAgIGUuc3RhcnQgPT09IHN0YXJ0ICYmXG4gICAgICAgICAgICBlLnN0b3AgPT09IHN0b3BcbiAgICAgICAgKSAhPSBudWxsO1xuICAgIH1cbn1cblxuTGV4aWNvblNjaGVtYS5zdGF0aWNzLmhhc0VudGl0eUJ5SWQgPSBhc3luYyBmdW5jdGlvbihsZXhpY29uOiBhbnkgPSBudWxsLCBfZW50aXR5OiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgIGlmIChsZXhpY29uID09IG51bGwgfHwgX2VudGl0eSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgeyBlbnRpdGllcyB9ID0gbGV4aWNvbjtcblxuICAgICAgICByZXR1cm4gZW50aXRpZXMgIT0gbnVsbFxuICAgICAgICAgICAgPyBlbnRpdGllcy5maW5kKCh7IF9pZCB9KSA9PiBfaWQudG9TdHJpbmcoKSA9PT0gX2VudGl0eSkgIT0gbnVsbFxuICAgICAgICAgICAgOiBmYWxzZTtcbiAgICB9XG59XG5cbi8vIFJlZ2lzdGVyIHRoZSBtb2RlbCB3aXRoIE1vbmdvb3NlLlxubW9kZWw8SU1vbmdvb3NlTGV4aWNvbj4oXCJMZXhpY29uXCIsIExleGljb25TY2hlbWEpOyIsIi8vIFJlZ2lzdGVyIHRoZSBtb2RlbC5cbmltcG9ydCBcIi4vTGV4aWNvbi5tb2RlbFwiO1xuXG4vLyBIb29rc1xuaW1wb3J0IHVzZVJlc29sdmVyTWlkZGxld2FyZSBmcm9tIFwiQGhvb2tzL3VzZVJlc29sdmVyTWlkZGxld2FyZVwiO1xuXG4vLyBNaWRkbGV3YXJlXG5pbXBvcnQgYXBwbHlBcmdzUHJvdG8gZnJvbSBcIkBtaWRkbGV3YXJlL2FwcGx5QXJnc1Byb3RvXCI7XG5cbi8vIFR5cGUgRGVmaW5pdGlvbnNcbmltcG9ydCBleHRlbmRHcWwgZnJvbSBcIi4vZ3JhcGhxbC9MZXhpY29uLmV4dGVuZC5ncWxcIjtcbmltcG9ydCBxdWVyeUdxbCBmcm9tIFwiLi9ncmFwaHFsL0xleGljb24ucXVlcnkuZ3FsXCI7XG5pbXBvcnQgbXV0YXRpb25HcWwgZnJvbSBcIi4vZ3JhcGhxbC9MZXhpY29uLm11dGF0aW9uLmdxbFwiO1xuaW1wb3J0IHR5cGVHcWwgZnJvbSBcIi4vZ3JhcGhxbC9MZXhpY29uLnR5cGUuZ3FsXCI7XG5cbi8vIFF1ZXJ5IFJlc29sdmVyc1xuaW1wb3J0IGxleGljb25BbGwgZnJvbSBcIi4vcmVzb2x2ZXJzL3F1ZXJpZXMvbGV4aWNvbkFsbFwiO1xuaW1wb3J0IGxleGljb25CeUlkIGZyb20gXCIuL3Jlc29sdmVycy9xdWVyaWVzL2xleGljb25CeUlkXCI7XG5pbXBvcnQgbGV4aWNvbkJ5SW5wdXQgZnJvbSBcIi4vcmVzb2x2ZXJzL3F1ZXJpZXMvbGV4aWNvbkJ5SW5wdXRcIjtcbmltcG9ydCBsZXhpY29uQ291bnQgZnJvbSBcIi4vcmVzb2x2ZXJzL3F1ZXJpZXMvbGV4aWNvbkNvdW50XCI7XG5pbXBvcnQgbGV4aWNvbkVudGl0eUNvdW50IGZyb20gXCIuL3Jlc29sdmVycy9xdWVyaWVzL2xleGljb25FbnRpdHlDb3VudFwiO1xuaW1wb3J0IGxleGljb25TZWFyY2hCeUlucHV0IGZyb20gXCIuL3Jlc29sdmVycy9xdWVyaWVzL2xleGljb25TZWFyY2hCeUlucHV0XCI7XG5cbi8vIE11dGF0aW9uIFJlc29sdmVyc1xuaW1wb3J0IGxleGljb25DcmVhdGVPbmUgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uQ3JlYXRlT25lXCI7XG5pbXBvcnQgbGV4aWNvblVwZGF0ZU9uZSBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25VcGRhdGVPbmVcIjtcbmltcG9ydCBsZXhpY29uUmVtb3ZlT25lIGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvblJlbW92ZU9uZVwiO1xuXG5pbXBvcnQgbGV4aWNvbkNyZWF0ZU1hbnkgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uQ3JlYXRlTWFueVwiO1xuaW1wb3J0IGxleGljb25VcGRhdGVNYW55IGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvblVwZGF0ZU1hbnlcIjtcbmltcG9ydCBsZXhpY29uUmVtb3ZlTWFueSBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25SZW1vdmVNYW55XCI7XG5cbmltcG9ydCBsZXhpY29uQ3JlYXRlT25lRW50aXR5IGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvbkNyZWF0ZU9uZUVudGl0eVwiO1xuaW1wb3J0IGxleGljb25VcGRhdGVPbmVFbnRpdHkgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uVXBkYXRlT25lRW50aXR5XCI7XG5pbXBvcnQgbGV4aWNvblJlbW92ZU9uZUVudGl0eSBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25SZW1vdmVPbmVFbnRpdHlcIjtcblxuaW1wb3J0IGxleGljb25DcmVhdGVNYW55RW50aXRpZXMgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy9sZXhpY29uQ3JlYXRlTWFueUVudGl0aWVzXCI7XG5pbXBvcnQgbGV4aWNvblVwZGF0ZU1hbnlFbnRpdGllcyBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL2xleGljb25VcGRhdGVNYW55RW50aXRpZXNcIjtcbmltcG9ydCBsZXhpY29uUmVtb3ZlTWFueUVudGl0aWVzIGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvbGV4aWNvblJlbW92ZU1hbnlFbnRpdGllc1wiO1xuXG5leHBvcnQgY29uc3RcbnR5cGVEZWZzID0gW1xuICAgIGV4dGVuZEdxbCxcbiAgICBxdWVyeUdxbCxcbiAgICBtdXRhdGlvbkdxbCxcbiAgICB0eXBlR3FsXG5dLmpvaW4oXCJcXG5cIiksXG5cbnJlc29sdmVycyA9IHVzZVJlc29sdmVyTWlkZGxld2FyZSh7XG4gICAgUXVlcnk6IHtcbiAgICAgICAgbGV4aWNvbkFsbCxcbiAgICAgICAgbGV4aWNvbkJ5SWQsXG4gICAgICAgIGxleGljb25CeUlucHV0LFxuICAgICAgICBsZXhpY29uQ291bnQsXG4gICAgICAgIGxleGljb25FbnRpdHlDb3VudCxcbiAgICAgICAgbGV4aWNvblNlYXJjaEJ5SW5wdXQsXG4gICAgfSxcbiAgICBNdXRhdGlvbjoge1xuICAgICAgICBsZXhpY29uQ3JlYXRlT25lLFxuICAgICAgICBsZXhpY29uVXBkYXRlT25lLFxuICAgICAgICBsZXhpY29uUmVtb3ZlT25lLFxuXG4gICAgICAgIGxleGljb25DcmVhdGVNYW55LFxuICAgICAgICBsZXhpY29uVXBkYXRlTWFueSxcbiAgICAgICAgbGV4aWNvblJlbW92ZU1hbnksXG5cbiAgICAgICAgbGV4aWNvbkNyZWF0ZU9uZUVudGl0eSxcbiAgICAgICAgbGV4aWNvblVwZGF0ZU9uZUVudGl0eSxcbiAgICAgICAgbGV4aWNvblJlbW92ZU9uZUVudGl0eSxcblxuICAgICAgICBsZXhpY29uQ3JlYXRlTWFueUVudGl0aWVzLFxuICAgICAgICBsZXhpY29uVXBkYXRlTWFueUVudGl0aWVzLFxuICAgICAgICBsZXhpY29uUmVtb3ZlTWFueUVudGl0aWVzXG4gICAgfVxufSwgW1xuICAgIGFwcGx5QXJnc1Byb3RvXG5dKTsiLCJleHBvcnQgZGVmYXVsdCBcImV4dGVuZCB0eXBlIFF1ZXJ5IHtcXG4gICAgbGV4aWNvbkFsbDogTGV4aWNvblJlc3BvbnNlXFxuICAgIGxleGljb25CeUlkKF9pZDogSUQhKTogTGV4aWNvblJlc3BvbnNlXFxuICAgIGxleGljb25CeUlucHV0KGlucHV0OiBTdHJpbmchKTogTGV4aWNvblJlc3BvbnNlXFxuICAgIGxleGljb25Db3VudDogTGV4aWNvblJlc3BvbnNlQ291bnRcXG4gICAgbGV4aWNvbkVudGl0eUNvdW50KF9pZDogSUQhKTogTGV4aWNvblJlc3BvbnNlQ291bnRcXG4gICAgbGV4aWNvblNlYXJjaEJ5SW5wdXQoaW5wdXQ6IFN0cmluZyEsIGxpbWl0OiBJbnQsIG9wdGlvbnM6IFF1ZXJ5TGV4aWNvbk9wdGlvbnMpOiBMZXhpY29uUmVzcG9uc2VBcnJheVxcbn1cXG5cXG5leHRlbmQgdHlwZSBNdXRhdGlvbiB7XFxuICAgIGxleGljb25DcmVhdGVPbmUoaW5wdXQ6IFN0cmluZyEpOiBMZXhpY29uUmVzcG9uc2VcXG4gICAgbGV4aWNvblVwZGF0ZU9uZShfaWQ6IElEISwgaW5wdXQ6IFN0cmluZyEpOiBMZXhpY29uUmVzcG9uc2VcXG4gICAgbGV4aWNvblJlbW92ZU9uZShfaWQ6IElEISk6IExleGljb25SZXNwb25zZVxcblxcbiAgICBsZXhpY29uQ3JlYXRlTWFueShsZXhpY29uczogW011dGF0aW9uTGV4aWNvbl0hKTogTGV4aWNvblJlc3BvbnNlQXJyYXlcXG4gICAgbGV4aWNvblVwZGF0ZU1hbnkoaW5wdXRzOiBbTXV0YXRpb25MZXhpY29uSW5wdXRBcnJheV0hKTogTGV4aWNvblJlc3BvbnNlQXJyYXlcXG4gICAgbGV4aWNvblJlbW92ZU1hbnkoaWRzOiBbSURdISk6IExleGljb25SZXNwb25zZUFycmF5XFxuXFxuICAgIGxleGljb25DcmVhdGVPbmVFbnRpdHkoX2lkOiBJRCEsIGVudGl0eTogTXV0YXRpb25MZXhpY29uRW50aXR5ISk6IExleGljb25SZXNwb25zZVxcbiAgICBsZXhpY29uVXBkYXRlT25lRW50aXR5KF9pZDogSUQhLCBfZW50aXR5OiBJRCEsIGVudGl0eTogTXV0YXRpb25MZXhpY29uRW50aXR5ISk6IExleGljb25SZXNwb25zZVxcbiAgICBsZXhpY29uUmVtb3ZlT25lRW50aXR5KF9pZDogSUQhLCBfZW50aXR5OiBJRCEpOiBMZXhpY29uUmVzcG9uc2VcXG5cXG4gICAgbGV4aWNvbkNyZWF0ZU1hbnlFbnRpdGllcyhfaWQ6IElEISwgZW50aXRpZXM6IFtNdXRhdGlvbkxleGljb25FbnRpdHldISk6IExleGljb25SZXNwb25zZVxcbiAgICBsZXhpY29uVXBkYXRlTWFueUVudGl0aWVzKF9pZDogSUQhLCBlbnRpdGllczogW011dGF0aW9uTGV4aWNvblVwZGF0ZUVudGl0eV0hKTogTGV4aWNvblJlc3BvbnNlXFxuICAgIGxleGljb25SZW1vdmVNYW55RW50aXRpZXMoX2lkOiBJRCEsIF9lbnRpdGllczogW0lEXSEpOiBMZXhpY29uUmVzcG9uc2VcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbnB1dCBNdXRhdGlvbkxleGljb24ge1xcbiAgICBpbnB1dDogU3RyaW5nIVxcbiAgICBlbnRpdGllczogW011dGF0aW9uTGV4aWNvbkVudGl0eV1cXG59XFxuXFxuaW5wdXQgTXV0YXRpb25MZXhpY29uRW50aXR5IHtcXG4gICAgbGFiZWw6IFN0cmluZ1xcbiAgICBzdGFydDogSW50XFxuICAgIHN0b3A6IEludFxcbn1cXG5cXG5pbnB1dCBNdXRhdGlvbkxleGljb25FbnRpdHlEYXRhIHtcXG4gICAgX2lkOiBJRCFcXG4gICAgbGFiZWw6IFN0cmluZ1xcbiAgICBzdGFydDogSW50XFxuICAgIHN0b3A6IEludFxcbn1cXG5cXG5pbnB1dCBNdXRhdGlvbkxleGljb25VcGRhdGVFbnRpdHkge1xcbiAgICBfaWQ6IElEIVxcbiAgICBlbnRpdHk6IE11dGF0aW9uTGV4aWNvbkVudGl0eVxcbn1cXG5cXG5pbnB1dCBNdXRhdGlvbkxleGljb25JbnB1dEFycmF5IHtcXG4gICAgX2lkOiBJRCFcXG4gICAgaW5wdXQ6IFN0cmluZ1xcbiAgICBlbnRpdGllczogW011dGF0aW9uTGV4aWNvbkVudGl0eURhdGFdXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW5wdXQgUXVlcnlMZXhpY29uT3B0aW9ucyB7XFxuICAgIGV4YWN0TWF0Y2g6IEJvb2xlYW5cXG59XFxuXFxuaW5wdXQgUXVlcnlMZXhpY29uIHtcXG4gICAgX2lkOiBJRFxcbiAgICBjcmVhdGVkOiBTdHJpbmdcXG4gICAgbW9kaWZpZWQ6IFN0cmluZ1xcbiAgICBpbnB1dDogU3RyaW5nXFxuICAgIGVudGl0aWVzOiBbUXVlcnlMZXhpY29uRW50aXR5XVxcbn1cXG5cXG5pbnB1dCBRdWVyeUxleGljb25FbnRpdHkge1xcbiAgICBfaWQ6IElEXFxuICAgIGNyZWF0ZWQ6IFN0cmluZ1xcbiAgICBtb2RpZmllZDogU3RyaW5nXFxuICAgIGxhYmVsOiBTdHJpbmdcXG4gICAgc3RhcnQ6IEludFxcbiAgICBzdG9wOiBJbnRcXG59XFxuXFxuaW5wdXQgUXVlcnlMZXhpY29uUGFnaW5hdGlvbiB7XFxuICAgIHBhZ2U6IEludFxcbiAgICBsaW1pdDogSW50XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwidHlwZSBMZXhpY29uUmVzcG9uc2Uge1xcbiAgICBjb2RlOiBGbG9hdFxcbiAgICBlcnJvcnM6IFtTdHJpbmddXFxuICAgIGRhdGE6IExleGljb25cXG59XFxuXFxudHlwZSBMZXhpY29uUmVzcG9uc2VDb3VudCB7XFxuICAgIGNvZGU6IEZsb2F0XFxuICAgIGVycm9yczogW1N0cmluZ11cXG4gICAgZGF0YTogSW50XFxufVxcblxcbnR5cGUgTGV4aWNvblJlc3BvbnNlQXJyYXkge1xcbiAgICBjb2RlOiBGbG9hdFxcbiAgICBlcnJvcnM6IFtTdHJpbmddXFxuICAgIGRhdGE6IFtMZXhpY29uXVxcbn1cXG5cXG50eXBlIExleGljb24gQGtleShmaWVsZHM6IFxcXCJfaWRcXFwiKSB7XFxuICAgIF9pZDogSURcXG4gICAgY3JlYXRlZDogU3RyaW5nXFxuICAgIG1vZGlmaWVkOiBTdHJpbmdcXG4gICAgaW5wdXQ6IFN0cmluZ1xcbiAgICBlbnRpdGllczogW0xleGljb25FbnRpdHldXFxufVxcblxcbnR5cGUgTGV4aWNvbkVudGl0eSBAa2V5KGZpZWxkczogXFxcIl9pZFxcXCIpIHtcXG4gICAgX2lkOiBJRFxcbiAgICBjcmVhdGVkOiBTdHJpbmdcXG4gICAgbW9kaWZpZWQ6IFN0cmluZ1xcbiAgICBsYWJlbDogU3RyaW5nXFxuICAgIHN0YXJ0OiBJbnRcXG4gICAgc3RvcDogSW50XFxufVwiOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBsZXhpY29ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xleGljb25zOiBhbnkgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgbGV4aWNvbiBvZiBsZXhpY29ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0xleGljb24gPSBhd2FpdCAobmV3IExleGljb24obGV4aWNvbikpLnNhdmUoKTtcblxuICAgICAgICAgICAgICAgIG5ld0xleGljb25zLnB1c2gobmV3TGV4aWNvbik7XG4gICAgICAgICAgICAgICAgaWYgKCFMZXhpY29uLmhhc0xleGljb24obmV3TGV4aWNvbi5faWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTEVYSUNPTl9DUkVBVElPTl9GQUlMVVJFKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA9PSAwKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEobmV3TGV4aWNvbnMpO1xuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7IiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJMZXhpY29uXCIsXG4gICAgYXN5bmMgKExleGljb24sIHJlc3BvbnNlLCByb290LCB7IF9pZCwgZW50aXRpZXMgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbGV4aWNvbiA9IGF3YWl0IExleGljb24uZmluZE9uZSh7IF9pZCB9KTtcblxuICAgICAgICAgICAgaWYgKGxleGljb24gPT0gbnVsbClcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTEVYSUNPTl9OT1RfRk9VTkQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZW50aXR5IG9mIGVudGl0aWVzKVxuICAgICAgICAgICAgICAgICAgICBpZiAoIWF3YWl0IExleGljb24uaGFzRW50aXR5V2l0aExhYmVsKGxleGljb24sIGVudGl0eSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBMZXhpY29uLmZpbmRPbmVBbmRVcGRhdGUoeyBfaWQgfSwgeyAkcHVzaDogeyBlbnRpdGllczogZW50aXR5IH19KTtcblxuICAgICAgICAgICAgICAgIGxleGljb24gPSBhd2FpdCBMZXhpY29uLmZpbmRPbmUoeyBfaWQgfSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YShsZXhpY29uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBpbnB1dCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoYXdhaXQgbmV3IExleGljb24oeyBpbnB1dCB9KS5zYXZlKCkpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBfaWQsIGVudGl0eSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBsZXhpY29uID0gYXdhaXQgTGV4aWNvbi5maW5kT25lKHsgX2lkIH0pO1xuXG4gICAgICAgICAgICBpZiAobGV4aWNvbiA9PSBudWxsKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5MRVhJQ09OX05PVF9GT1VORCk7XG4gICAgICAgICAgICBlbHNlIGlmIChhd2FpdCBMZXhpY29uLmhhc0VudGl0eVdpdGhMYWJlbChsZXhpY29uLCBlbnRpdHkpKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5MRVhJQ09OX0VOVElUWV9FWElTVFMpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgTGV4aWNvbi5maW5kT25lQW5kVXBkYXRlKHsgX2lkIH0sIHsgJHB1c2g6IHsgZW50aXRpZXM6IGVudGl0eSB9fSk7XG4gICAgICAgICAgICAgICAgbGV4aWNvbiA9IGF3YWl0IExleGljb24uZmluZE9uZSh7IF9pZCB9KTtcblxuICAgICAgICAgICAgICAgIGlmICghYXdhaXQgTGV4aWNvbi5oYXNFbnRpdHlXaXRoTGFiZWwobGV4aWNvbiwgZW50aXR5KSlcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLkxFWElDT05fRU5USVRZX1VQREFURV9GQUlMVVJFKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEobGV4aWNvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkxleGljb25cIixcbiAgICBhc3luYyAoTGV4aWNvbiwgcmVzcG9uc2UsIHJvb3QsIHsgaWRzIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChsZXQgX2lkIG9mIGlkcylcbiAgICAgICAgICAgICAgICBpZiAoYXdhaXQgTGV4aWNvbi5oYXNMZXhpY29uKF9pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgTGV4aWNvbi5kZWxldGVPbmUoeyBfaWQgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGF3YWl0IExleGljb24uaGFzTGV4aWNvbihfaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTEVYSUNPTl9SRU1PVkFMX0ZBSUxVUkUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5lcnJvcnMubGVuZ3RoID09PSAwKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEobnVsbCk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkxleGljb25cIixcbiAgICBhc3luYyAoTGV4aWNvbiwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBfZW50aXRpZXMgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbGV4aWNvbiA9IGF3YWl0IExleGljb24uZmluZE9uZSh7IF9pZCB9KTtcblxuICAgICAgICAgICAgaWYgKGxleGljb24gPT0gbnVsbClcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTEVYSUNPTl9OT1RfRk9VTkQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgX2VudGl0eSBvZiBfZW50aXRpZXMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChhd2FpdCBMZXhpY29uLmhhc0VudGl0eUJ5SWQobGV4aWNvbiwgX2VudGl0eSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBMZXhpY29uLmZpbmRPbmVBbmRVcGRhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBfaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICRwdWxsOiB7IGVudGl0aWVzOiB7IF9pZDogX2VudGl0eSB9fX1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXREYXRhKGF3YWl0IExleGljb24uZmluZE9uZSh7IF9pZCB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkxleGljb25cIixcbiAgICBhc3luYyAoTGV4aWNvbiwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGxleGljb24gPSBhd2FpdCBMZXhpY29uLmZpbmRPbmUoeyBfaWQgfSk7XG5cbiAgICAgICAgICAgIGlmIChsZXhpY29uID09IG51bGwpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLkxFWElDT05fTk9UX0ZPVU5EKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IExleGljb24uZGVsZXRlT25lKHsgX2lkIH0pO1xuICAgICAgICAgICAgICAgIGxleGljb24gPSBhd2FpdCBMZXhpY29uLmZpbmRPbmUoeyBfaWQgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGV4aWNvbiAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTEVYSUNPTl9SRU1PVkFMX0ZBSUxVUkUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YShudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBfaWQsIF9lbnRpdHkgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgbGV4aWNvbiA9IGF3YWl0IExleGljb24uZmluZE9uZSh7IF9pZCB9KTtcblxuICAgICAgICAgICAgaWYgKGxleGljb24gPT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTEVYSUNPTl9OT1RfRk9VTkQpO1xuICAgICAgICAgICAgZWxzZSBpZiAoYXdhaXQgTGV4aWNvbi5oYXNFbnRpdHlCeUlkKGxleGljb24sIF9lbnRpdHkpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgTGV4aWNvbi5maW5kT25lQW5kVXBkYXRlKHsgX2lkIH0sIHsgJHB1bGw6IHsgZW50aXRpZXM6IHsgX2lkOiBfZW50aXR5IH19fSk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0RGF0YShhd2FpdCBMZXhpY29uLmZpbmRPbmUoeyBfaWQgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbikiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkxleGljb25cIixcbiAgICBhc3luYyAoTGV4aWNvbiwgcmVzcG9uc2UsIHJvb3QsIHsgaW5wdXRzIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExleGljb25zOiBhbnkgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgeyBfaWQsIGlucHV0PW51bGwsIGVudGl0aWVzPVtdIH0gb2YgaW5wdXRzKVxuICAgICAgICAgICAgICAgIGlmIChhd2FpdCBMZXhpY29uLmhhc0xleGljb24oX2lkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5wdXQgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IExleGljb24uZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCB9LCB7IGlucHV0IH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGVudGl0eSBvZiBlbnRpdGllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIF9lbnRpdHkgPSAoey4uLmVudGl0eX0pLl9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUVudGl0eSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZW50aXR5Ll9pZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBlbnRpdHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlRW50aXR5W2BlbnRpdGllcy4kLiR7cHJvcH1gXSA9IGVudGl0eVtwcm9wXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgTGV4aWNvbi51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudGl0aWVzLl9pZFwiOiBfZW50aXR5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAkc2V0OiB1cGRhdGVFbnRpdHkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRMZXhpY29ucy5wdXNoKGF3YWl0IExleGljb24uZmluZE9uZSh7IF9pZCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZXJyb3JzLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKHVwZGF0ZWRMZXhpY29ucyk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTsiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkxleGljb25cIixcbiAgICBhc3luYyAoTGV4aWNvbiwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBlbnRpdGllcyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBsZXhpY29uID0gYXdhaXQgTGV4aWNvbi5maW5kT25lKHsgX2lkIH0pO1xuXG4gICAgICAgICAgICBpZiAobGV4aWNvbiA9PSBudWxsKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5MRVhJQ09OX05PVF9GT1VORCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGVudGl0aWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbGFiZWwsIHN0YXJ0LCBzdG9wIH0gPSBkYXRhLmVudGl0eTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYXdhaXQgTGV4aWNvbi5oYXNFbnRpdHlCeUlkKGxleGljb24sIGRhdGEuX2lkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IExleGljb24udXBkYXRlT25lKHsgXCJlbnRpdGllcy5faWRcIjogZGF0YS5faWQgfSwgeyAkc2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnRpdGllcy4kLmxhYmVsXCI6IGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW50aXRpZXMuJC5zdGFydFwiOiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudGl0aWVzLiQuc3RvcFwiOiBzdG9wLFxuICAgICAgICAgICAgICAgICAgICAgICAgfX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoYXdhaXQgTGV4aWNvbi5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBfaWQsIGlucHV0IH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGxleGljb24gPSBhd2FpdCBMZXhpY29uLmZpbmRPbmUoeyBfaWQgfSk7XG5cbiAgICAgICAgICAgIGlmIChsZXhpY29uID09IG51bGwgfHwgbGV4aWNvbi5pbnB1dCA9PT0gaW5wdXQpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLkxFWElDT05fSU5QVVRfVVBEQVRFX0ZBSUxVUkUpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgTGV4aWNvbi5maW5kT25lQW5kVXBkYXRlKHsgX2lkIH0sIHsgaW5wdXQgfSk7XG4gICAgICAgICAgICAgICAgbGV4aWNvbiA9IGF3YWl0IExleGljb24uZmluZE9uZSh7IF9pZCB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChsZXhpY29uLmlucHV0ICE9PSBpbnB1dClcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLkxFWElDT05fSU5QVVRfVVBEQVRFX0ZBSUxVUkUpO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YShsZXhpY29uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBfaWQsIF9lbnRpdHksIGVudGl0eSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBsZXhpY29uID0gYXdhaXQgTGV4aWNvbi5maW5kT25lKHsgX2lkIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWF3YWl0IExleGljb24uaGFzRW50aXR5QnlJZChsZXhpY29uLCBfZW50aXR5KSlcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuRU5USVRZX05PVF9GT1VORCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxhYmVsLCBzdGFydCwgc3RvcCB9ID0gZW50aXR5O1xuXG4gICAgICAgICAgICAgICAgYXdhaXQgTGV4aWNvbi51cGRhdGVPbmUoeyBcImVudGl0aWVzLl9pZFwiOiBfZW50aXR5IH0sIHsgJHNldDoge1xuICAgICAgICAgICAgICAgICAgICBcImVudGl0aWVzLiQubGFiZWxcIjogbGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIFwiZW50aXRpZXMuJC5zdGFydFwiOiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgXCJlbnRpdGllcy4kLnN0b3BcIjogc3RvcCxcbiAgICAgICAgICAgICAgICB9fSk7XG5cbiAgICAgICAgICAgICAgICBsZXhpY29uID0gYXdhaXQgTGV4aWNvbi5maW5kT25lKHsgX2lkIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEobGV4aWNvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKSIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IExleGljb24uZmluZCh7fSkpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pIiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXCJMZXhpY29uXCIsIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBfaWQgfSkgPT4ge1xuICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICB0cnkge1xuICAgICAgICBpZiAoIWF3YWl0IExleGljb24uaGFzTGV4aWNvbihfaWQpKVxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLk5PVF9GT1VORCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoYXdhaXQgTGV4aWNvbi5maW5kT25lKHsgX2lkIH0pKTtcblxuICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgfVxufSk7IiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJMZXhpY29uXCIsXG4gICAgYXN5bmMgKExleGljb24sIHJlc3BvbnNlLCByb290LCB7IGlucHV0IH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFhd2FpdCBMZXhpY29uLmhhc0lucHV0KGlucHV0KSlcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTk9UX0ZPVU5EKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IExleGljb24uZmluZE9uZSh7IGlucHV0IH0pKTtcblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pOyIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZS5zZXREYXRhKGF3YWl0IExleGljb24uY291bnREb2N1bWVudHMoe30pKTtcbiAgICAgICAgICAgIHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiTGV4aWNvblwiLFxuICAgIGFzeW5jIChMZXhpY29uLCByZXNwb25zZSwgcm9vdCwgeyBfaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZS5zZXREYXRhKChhd2FpdCBMZXhpY29uLmZpbmRPbmUoeyBfaWQgfSkpLmVudGl0aWVzLmxlbmd0aCk7XG4gICAgICAgICAgICByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIkxleGljb25cIixcbiAgICBhc3luYyAoTGV4aWNvbiwgcmVzcG9uc2UsIHJvb3QsIHsgaW5wdXQ9XCJcIiwgbGltaXQ9NSwgb3B0aW9ucyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5sZW5ndGggPiAwICYmIGlucHV0ICE9PSBcIipcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0XG4gICAgICAgICAgICAgICAgeyBleGFjdE1hdGNoPWZhbHNlIH06IGFueSA9IG9wdGlvbnMsXG5cbiAgICAgICAgICAgICAgICBxdWVyeSA9ICFleGFjdE1hdGNoXG4gICAgICAgICAgICAgICAgICAgID8geyBpbnB1dDogeyAkcmVnZXg6IGlucHV0LCAkb3B0aW9uczogXCJpXCIsIH19XG4gICAgICAgICAgICAgICAgICAgIDogeyBpbnB1dCB9LFxuXG4gICAgICAgICAgICAgICAgZGF0YSA9IGxpbWl0ID09IDBcbiAgICAgICAgICAgICAgICAgICAgPyBhd2FpdCBMZXhpY29uLmZpbmQocXVlcnkpLnNvcnQoeyBtb2RpZmllZDogXCJkZXNjZW5kaW5nXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBhd2FpdCBMZXhpY29uLmZpbmQocXVlcnkpLmxpbWl0KGxpbWl0KS5zb3J0KHsgbW9kaWZpZWQ6IFwiZGVzY2VuZGluZ1wiIH0pO1xuXG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0RGF0YShkYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5wdXQgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc2V0RGF0YShcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgTGV4aWNvbi5maW5kKHt9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpbWl0KGxpbWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoeyBtb2RpZmllZDogXCJkZXNjZW5kaW5nXCIgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCB7IElNb25nb29zZVRocmVhZCB9IGZyb20gXCIuL0lUaHJlYWRcIjtcbmltcG9ydCB7IG1vZGVsLCBTY2hlbWEsIFR5cGVzIH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyBpc01vYmlsZVBob25lIH0gZnJvbSBcInZhbGlkYXRvclwiO1xuXG5jb25zdFxuU2FyY2FzbUFuYWx5c2lzU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgY3JlYXRlZDogRGF0ZSxcbiAgICBtb2RpZmllZDogRGF0ZSxcbiAgICBzYXJjYXN0aWM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBub25TYXJjYXN0aWM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHtcbiAgICAgICAgY3JlYXRlZEF0OiBcImNyZWF0ZWRcIixcbiAgICAgICAgdXBkYXRlZEF0OiBcIm1vZGlmaWVkXCJcbiAgICB9LFxufSksXG5cbkVtb3Rpb25BbmFseXNpc1NjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGNyZWF0ZWQ6IERhdGUsXG4gICAgbW9kaWZpZWQ6IERhdGUsXG4gICAgaGFwcHk6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBhbmdyeToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGV4Y2l0ZWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBzYWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBmZWFyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgYm9yZWQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHtcbiAgICAgICAgY3JlYXRlZEF0OiBcImNyZWF0ZWRcIixcbiAgICAgICAgdXBkYXRlZEF0OiBcIm1vZGlmaWVkXCJcbiAgICB9LFxufSksXG5cblNlbnRpbWVudEFuYWx5c2lzU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgY3JlYXRlZDogRGF0ZSxcbiAgICBtb2RpZmllZDogRGF0ZSxcbiAgICBwb3NpdGl2ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIG5ldXRyYWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBuZWdhdGl2ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9XG59LCB7XG4gICAgdGltZXN0YW1wczoge1xuICAgICAgICBjcmVhdGVkQXQ6IFwiY3JlYXRlZFwiLFxuICAgICAgICB1cGRhdGVkQXQ6IFwibW9kaWZpZWRcIlxuICAgIH0sXG59KSxcblxuQW5hbHlzaXNTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBjcmVhdGVkOiBEYXRlLFxuICAgIG1vZGlmaWVkOiBEYXRlLFxuICAgIHNlbnRpbWVudDoge1xuICAgICAgICB0eXBlOiBTZW50aW1lbnRBbmFseXNpc1NjaGVtYSxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgZW1vdGlvbjoge1xuICAgICAgICB0eXBlOiBFbW90aW9uQW5hbHlzaXNTY2hlbWEsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIHNhcmNhc206IHtcbiAgICAgICAgdHlwZTogU2FyY2FzbUFuYWx5c2lzU2NoZW1hLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfVxufSwge1xuICAgIHRpbWVzdGFtcHM6IHtcbiAgICAgICAgY3JlYXRlZEF0OiBcImNyZWF0ZWRcIixcbiAgICAgICAgdXBkYXRlZEF0OiBcIm1vZGlmaWVkXCJcbiAgICB9LFxufSksXG5cbi8vIFVzZWQgdG8ga2VlcCB0cmFjayBvZiB0aGUgb3ZlcmFsbCBzY29wZSBvZiBkYXRhXG4vLyBuZWVkZWQgZm9yIGEgdGhyZWFkIGJ5IHRoZSBzeXN0ZW0uIFRoaXMgYXNzaXN0cyBpblxuLy8ga2VlcGluZyB0cmFjayBvZiBob3cgdGhlIEFJIHdpbGwgcmVzcG9uZCwgYmFzZWQgb25cbi8vIHdoYXQgaW5mb3JtYXRpb24gaXQgaGFzIGFuZCBzdGlsbCBuZWVkcy5cbkRhdGFTY2hlbWEgPSBuZXcgU2NoZW1hKHtcbiAgICBjcmVhdGVkOiBEYXRlLFxuICAgIG1vZGlmaWVkOiBEYXRlLFxuICAgIGFjdGlvbnM6IFsgU3RyaW5nIF0sXG4gICAgYnV5OiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVJhbmdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdGhzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsbDoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB3aHk6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lZXRpbmc6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRpbWVmcmFtZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVJhbmdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICByZW50OiB7XG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZVJhbmdlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJlZHM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdGhzOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB7XG4gICAgICAgIGNyZWF0ZWRBdDogXCJjcmVhdGVkXCIsXG4gICAgICAgIHVwZGF0ZWRBdDogXCJtb2RpZmllZFwiXG4gICAgfSxcbn0pLFxuXG4vLyBJbmRpdmlkdWFsIG1lc3NhZ2UgZnJvbSBhIHVzZXIuXG4vLyBUaGUgXCJhbmFseXNpc1wiIGluZm9ybWF0aW9uIGlzIHBlcmZvcm1lZCBvbiBlYWNoIG9mXG4vLyB0aGUgbWVzc2FnZXMgdGhlIGNvbWVzIGludG8gdGhlIEFJIGFuZCBpcyBzYXZlZCBoZXJlLlxuTWVzc2FnZVNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIGNyZWF0ZWQ6IERhdGUsXG4gICAgbW9kaWZpZWQ6IERhdGUsXG4gICAgbnVtYmVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICB9LFxuICAgIGFuYWx5c2lzOiB7XG4gICAgICAgIHR5cGU6IEFuYWx5c2lzU2NoZW1hLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBvcmlnaW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBlbnVtOiBbIFwiaW5ib3VuZFwiLCBcIm91dGJvdW5kXCIgXSxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG59LCB7XG4gICAgdGltZXN0YW1wczoge1xuICAgICAgICBjcmVhdGVkQXQ6IFwiY3JlYXRlZFwiLFxuICAgICAgICB1cGRhdGVkQXQ6IFwibW9kaWZpZWRcIlxuICAgIH0sXG59KSxcblxuLy8gT3ZlcmFsbCBjb252ZXJzYXRpb24gdGhyZWFkLlxuLy9cbi8vIFthbmFseXNpc11cbi8vIFRoZSBcImFuYWx5c2lzXCIgaW5mb3JtYXRpb24gaXMgcGVyZm9ybWVkIG9uIHRoZSBlbnRpcmVcbi8vIGNvbnZlcnNhdGlvbiB0aHJlYWQgYW5kIGFnZ3JlZ2F0ZWQgdG9nZXRoZXIuIFRoaXMgaXMgbWVhbnRcbi8vIGZvciBvdmVyYWxsIGNvbnZlcnNhdGlvbmFsIGFuYWx5c2lzLlxuVGhyZWFkU2NoZW1hID0gbmV3IFNjaGVtYSh7XG4gICAgY3JlYXRlZDogRGF0ZSxcbiAgICBtb2RpZmllZDogRGF0ZSxcbiAgICBudW1iZXJzOiB7XG4gICAgICAgIHR5cGU6IFt7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZ1YWx0OiBudWxsXG4gICAgICAgIH1dXG4gICAgfSxcbiAgICBtZXNzYWdlczoge1xuICAgICAgICB0eXBlOiBbIE1lc3NhZ2VTY2hlbWEgXSxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0eXBlOiBEYXRhU2NoZW1hLFxuICAgICAgICBkZWZhdWx0OiBudWxsXG4gICAgfSxcbiAgICBhbmFseXNpczoge1xuICAgICAgICB0eXBlOiBBbmFseXNpc1NjaGVtYSxcbiAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgIH1cbn0sIHtcbiAgICBjb2xsZWN0aW9uOiBcInRocmVhZFwiLFxuICAgIHRpbWVzdGFtcHM6IHtcbiAgICAgICAgY3JlYXRlZEF0OiBcImNyZWF0ZWRcIixcbiAgICAgICAgdXBkYXRlZEF0OiBcIm1vZGlmaWVkXCJcbiAgICB9LFxufSk7XG5cblRocmVhZFNjaGVtYS5zdGF0aWNzLmhhc1RocmVhZEJ5TnVtYmVycyA9IGFzeW5jIGZ1bmN0aW9uKG51bWJlcnM9bnVsbCkge1xuICAgIGlmIChudW1iZXJzID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBUaHJlYWQgPSB0aGlzLm1vZGVsKFwiVGhyZWFkXCIpO1xuICAgICAgICByZXR1cm4gYXdhaXQgVGhyZWFkLmNvdW50RG9jdW1lbnRzKHsgbnVtYmVyczogeyAkYWxsOiBudW1iZXJzIH19KSAhPT0gMDtcbiAgICB9XG59XG5cblRocmVhZFNjaGVtYS5zdGF0aWNzLmhhc1ZhbGlkTnVtYmVycyA9IGFzeW5jIGZ1bmN0aW9uKG51bWJlcnM6IEFycmF5PHN0cmluZz4gfCBudWxsID0gbnVsbCkge1xuICAgIGlmIChudW1iZXJzID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGxldCBudW1iZXIgb2YgbnVtYmVycylcbiAgICAgICAgICAgIGlmICghaXNNb2JpbGVQaG9uZShudW1iZXIsIFwiZW4tVVNcIikpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cblxuVGhyZWFkU2NoZW1hLnN0YXRpY3MuaGFzVGhyZWFkQnlJZCA9IGFzeW5jIGZ1bmN0aW9uKF9pZDogc3RyaW5nIHwgbnVsbCA9IG51bGwpIHtcbiAgICBpZiAoX2lkID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBUaHJlYWQgPSB0aGlzLm1vZGVsKFwiVGhyZWFkXCIpO1xuICAgICAgICByZXR1cm4gYXdhaXQgVGhyZWFkLmNvdW50RG9jdW1lbnRzKHsgX2lkIH0pICE9PSAwO1xuICAgIH1cbn1cblxuVGhyZWFkU2NoZW1hLnN0YXRpY3MuaGFzTWVzc2FnZUJ5SWQgPSBhc3luYyBmdW5jdGlvbihfaWQ6IG51bGwgfCBzdHJpbmcgPSBudWxsLCBfbWVzc2FnZTogbnVsbCB8IHN0cmluZyA9IG51bGwpIHtcbiAgICBpZiAoX2lkID09IG51bGwgfHwgX21lc3NhZ2UgPT0gbnVsbCkgcmV0dXJuIG51bGw7XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IFRocmVhZCA9IHRoaXMubW9kZWwoXCJUaHJlYWRcIik7XG4gICAgICAgIHJldHVybiBhd2FpdCBUaHJlYWQuY291bnREb2N1bWVudHMoeyBfaWQsIFwibWVzc2FnZXMuX2lkXCI6IF9tZXNzYWdlIH0pICE9PSAwO1xuICAgIH1cbn1cblxuVGhyZWFkU2NoZW1hLnN0YXRpY3MubWVzc2FnZUluZGV4QW5kRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKF9pZDogc3RyaW5nIHwgbnVsbCA9IG51bGwsIF9tZXNzYWdlOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgIGlmIChfaWQgPT0gbnVsbCB8fCBfbWVzc2FnZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgVGhyZWFkID0gdGhpcy5tb2RlbChcIlRocmVhZFwiKSxcbiAgICAgICAgeyBtZXNzYWdlcyB9ID0gYXdhaXQgVGhyZWFkLmZpbmRPbmUoeyBfaWQgfSk7XG5cbiAgICAgICAgZm9yIChjb25zdCBpZHggaW4gbWVzc2FnZXMpXG4gICAgICAgICAgICBpZiAobWVzc2FnZXNbaWR4XS5faWQudG9TdHJpbmcoKSA9PT0gX21lc3NhZ2UpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoaWR4KSxcbiAgICAgICAgICAgICAgICAgICAgey4uLm1lc3NhZ2VzW2lkeF19Ll9kb2NcbiAgICAgICAgICAgICAgICBdO1xuICAgIH1cbn1cblxuVGhyZWFkU2NoZW1hLnN0YXRpY3MudXBkYXRlQW5hbHlzaXMgPSBhc3luYyBmdW5jdGlvbihjdXJyZW50OiBhbnkgPSBudWxsLCB1cGRhdGU6IGFueSA9IG51bGwpIHtcbiAgICBpZiAoY3VycmVudCA9PSBudWxsIHx8IHVwZGF0ZSA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICBlbHNlIHtcbiAgICAgICAgY3VycmVudCA9IHsuLi5jdXJyZW50fS5fZG9jO1xuXG4gICAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBpbiB1cGRhdGUpXG4gICAgICAgICAgICBpZiAoY3VycmVudC5oYXNPd25Qcm9wZXJ0eShzZWN0aW9uKSlcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuYWx5c2lzIGluIHVwZGF0ZVtzZWN0aW9uXSlcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFtzZWN0aW9uXVthbmFseXNpc10gPSB1cGRhdGVbc2VjdGlvbl1bYW5hbHlzaXNdO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50O1xuICAgIH1cbn1cblxuVGhyZWFkU2NoZW1hLnN0YXRpY3MudXBkYXRlRGF0YSA9IGFzeW5jIGZ1bmN0aW9uKGN1cnJlbnQ6IGFueSA9IG51bGwsIHVwZGF0ZTogYW55ID0gbnVsbCkge1xuICAgIGlmIChjdXJyZW50ID09IG51bGwgfHwgdXBkYXRlID09IG51bGwpIHJldHVybiBudWxsO1xuICAgIGVsc2Uge1xuICAgICAgICBjdXJyZW50ID0gey4uLmN1cnJlbnR9Ll9kb2M7XG5cbiAgICAgICAgZm9yIChjb25zdCBzZWN0aW9uIGluIHVwZGF0ZSlcbiAgICAgICAgICAgIHN3aXRjaChzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcImJ1eVwiOlxuICAgICAgICAgICAgICAgIGNhc2UgXCJzZWxsXCI6XG4gICAgICAgICAgICAgICAgY2FzZSBcInJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQuaGFzT3duUHJvcGVydHkoc2VjdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFuYWx5c2lzIGluIHVwZGF0ZVtzZWN0aW9uXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3NlY3Rpb25dW2FuYWx5c2lzXSA9IHVwZGF0ZVtzZWN0aW9uXVthbmFseXNpc107XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcImFjdGlvbnNcIjpcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFtzZWN0aW9uXSA9IHVwZGF0ZVtzZWN0aW9uXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnQ7XG4gICAgfVxufVxuXG4vLyBSZWdpc3RlciB0aGUgbW9kZWwgd2l0aCBNb25nb29zZS5cbm1vZGVsPElNb25nb29zZVRocmVhZD4oXCJUaHJlYWRcIiwgVGhyZWFkU2NoZW1hKTsiLCIvLyBSZWdpc3RlciB0aGUgbW9kZWwuXG5pbXBvcnQgXCIuL1RocmVhZC5tb2RlbFwiO1xuXG4vLyBIb29rc1xuaW1wb3J0IHVzZVJlc29sdmVyTWlkZGxld2FyZSBmcm9tIFwiQGhvb2tzL3VzZVJlc29sdmVyTWlkZGxld2FyZVwiO1xuXG4vLyBNaWRkbGV3YXJlXG5pbXBvcnQgYXBwbHlBcmdzUHJvdG8gZnJvbSBcIkBtaWRkbGV3YXJlL2FwcGx5QXJnc1Byb3RvXCI7XG5cbi8vIFR5cGUgRGVmaW5pdGlvbnNcbmltcG9ydCBleHRlbmRHcWwgZnJvbSBcIi4vZ3JhcGhxbC9UaHJlYWQuZXh0ZW5kLmdxbFwiO1xuaW1wb3J0IGVudW1HcWwgZnJvbSBcIi4vZ3JhcGhxbC9UaHJlYWQuZW51bS5ncWxcIjtcbmltcG9ydCB0eXBlR3FsIGZyb20gXCIuL2dyYXBocWwvVGhyZWFkLnR5cGUuZ3FsXCI7XG5pbXBvcnQgbXV0YXRpb25HcWwgZnJvbSBcIi4vZ3JhcGhxbC9UaHJlYWQubXV0YXRpb24uZ3FsXCI7XG5pbXBvcnQgcXVlcnlHcWwgZnJvbSBcIi4vZ3JhcGhxbC9UaHJlYWQucXVlcnkuZ3FsXCI7XG5cbi8vIFF1ZXJ5IFJlc29sdmVyc1xuaW1wb3J0IHRocmVhZEJ5SWQgZnJvbSBcIi4vcmVzb2x2ZXJzL3F1ZXJpZXMvdGhyZWFkQnlJZFwiO1xuaW1wb3J0IHRocmVhZEJ5TnVtYmVycyBmcm9tIFwiLi9yZXNvbHZlcnMvcXVlcmllcy90aHJlYWRCeU51bWJlcnNcIjtcbmltcG9ydCB0aHJlYWRNZXNzYWdlQnlJZCBmcm9tIFwiLi9yZXNvbHZlcnMvcXVlcmllcy90aHJlYWRNZXNzYWdlQnlJZFwiO1xuaW1wb3J0IHRocmVhZE1lc3NhZ2VCeU51bWJlciBmcm9tIFwiLi9yZXNvbHZlcnMvcXVlcmllcy90aHJlYWRNZXNzYWdlQnlOdW1iZXJcIjtcbmltcG9ydCB0aHJlYWRNZXNzYWdlTGF0ZXN0IGZyb20gXCIuL3Jlc29sdmVycy9xdWVyaWVzL3RocmVhZE1lc3NhZ2VMYXRlc3RcIjtcblxuLy8gTXV0YXRpb24gUmVzb2x2ZXJzXG5pbXBvcnQgdGhyZWFkQ3JlYXRlT25lIGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvdGhyZWFkQ3JlYXRlT25lXCI7XG5pbXBvcnQgdGhyZWFkUmVtb3ZlT25lIGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvdGhyZWFkUmVtb3ZlT25lXCI7XG5cbmltcG9ydCB0aHJlYWRDcmVhdGVPbmVNZXNzYWdlIGZyb20gXCIuL3Jlc29sdmVycy9tdXRhdGlvbnMvdGhyZWFkQ3JlYXRlT25lTWVzc2FnZVwiO1xuaW1wb3J0IHRocmVhZFVwZGF0ZU9uZU1lc3NhZ2UgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy90aHJlYWRVcGRhdGVPbmVNZXNzYWdlXCI7XG5pbXBvcnQgdGhyZWFkUmVtb3ZlT25lTWVzc2FnZSBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL3RocmVhZFJlbW92ZU9uZU1lc3NhZ2VcIjtcblxuaW1wb3J0IHRocmVhZFVwZGF0ZU1lc3NhZ2VBbmFseXNpcyBmcm9tIFwiLi9yZXNvbHZlcnMvbXV0YXRpb25zL3RocmVhZFVwZGF0ZU1lc3NhZ2VBbmFseXNpc1wiO1xuaW1wb3J0IHRocmVhZFVwZGF0ZURhdGEgZnJvbSBcIi4vcmVzb2x2ZXJzL211dGF0aW9ucy90aHJlYWRVcGRhdGVEYXRhXCI7XG5cbmV4cG9ydCBjb25zdFxudHlwZURlZnMgPSBbXG4gICAgZXh0ZW5kR3FsLFxuICAgIGVudW1HcWwsXG4gICAgdHlwZUdxbCxcbiAgICBtdXRhdGlvbkdxbCxcbiAgICBxdWVyeUdxbFxuXS5qb2luKFwiXFxuXCIpLFxucmVzb2x2ZXJzID0gdXNlUmVzb2x2ZXJNaWRkbGV3YXJlKHtcbiAgICBRdWVyeToge1xuICAgICAgICB0aHJlYWRCeUlkLFxuICAgICAgICB0aHJlYWRCeU51bWJlcnMsXG4gICAgICAgIHRocmVhZE1lc3NhZ2VCeUlkLFxuICAgICAgICB0aHJlYWRNZXNzYWdlQnlOdW1iZXIsXG4gICAgICAgIHRocmVhZE1lc3NhZ2VMYXRlc3RcbiAgICB9LFxuICAgIE11dGF0aW9uOiB7XG4gICAgICAgIHRocmVhZENyZWF0ZU9uZSxcbiAgICAgICAgdGhyZWFkUmVtb3ZlT25lLFxuXG4gICAgICAgIHRocmVhZENyZWF0ZU9uZU1lc3NhZ2UsXG4gICAgICAgIHRocmVhZFVwZGF0ZU9uZU1lc3NhZ2UsXG4gICAgICAgIHRocmVhZFJlbW92ZU9uZU1lc3NhZ2UsXG5cbiAgICAgICAgdGhyZWFkVXBkYXRlTWVzc2FnZUFuYWx5c2lzLFxuICAgICAgICB0aHJlYWRVcGRhdGVEYXRhLFxuICAgIH1cbn0sIFtcbiAgICBhcHBseUFyZ3NQcm90b1xuXSk7IiwiZXhwb3J0IGRlZmF1bHQgXCJlbnVtIEVudW1UaHJlYWRNZXNzYWdlT3JpZ2luIHtcXG4gICAgaW5ib3VuZFxcbiAgICBvdXRib3VuZFxcbn1cIjsiLCJleHBvcnQgZGVmYXVsdCBcImV4dGVuZCB0eXBlIFF1ZXJ5IHtcXG4gICAgdGhyZWFkQnlJZChfaWQ6IElEISk6IFRocmVhZFJlc3BvbnNlXFxuICAgIHRocmVhZEJ5TnVtYmVycyhudW1iZXJzOiBbU3RyaW5nXSEpOiBUaHJlYWRSZXNwb25zZVxcbiAgICB0aHJlYWRNZXNzYWdlQnlJZChfaWQ6IElEISwgX21lc3NhZ2U6IElEISk6IFRocmVhZE1lc3NhZ2VSZXNwb25zZVxcbiAgICB0aHJlYWRNZXNzYWdlQnlOdW1iZXIoX2lkOiBJRCEsIG51bWJlcjogU3RyaW5nISk6IFRocmVhZE1lc3NhZ2VSZXNwb25zZUFycmF5XFxuICAgIHRocmVhZE1lc3NhZ2VMYXRlc3QoX2lkOiBJRCEpOiBUaHJlYWRNZXNzYWdlUmVzcG9uc2VcXG59XFxuXFxuZXh0ZW5kIHR5cGUgTXV0YXRpb24ge1xcbiAgICB0aHJlYWRDcmVhdGVPbmUobnVtYmVyczogW1N0cmluZ10hKTogVGhyZWFkUmVzcG9uc2VcXG4gICAgdGhyZWFkUmVtb3ZlT25lKF9pZDogSUQhKTogVGhyZWFkUmVzcG9uc2VcXG5cXG4gICAgdGhyZWFkQ3JlYXRlT25lTWVzc2FnZShfaWQ6IElEISwgbWVzc2FnZTogTXV0YXRpb25UaHJlYWRNZXNzYWdlQ3JlYXRlKTogVGhyZWFkUmVzcG9uc2VcXG4gICAgdGhyZWFkVXBkYXRlT25lTWVzc2FnZShfaWQ6IElEISwgX21lc3NhZ2U6IElEISwgbWVzc2FnZTogTXV0YXRpb25UaHJlYWRNZXNzYWdlVXBkYXRlKTogVGhyZWFkUmVzcG9uc2VcXG4gICAgdGhyZWFkUmVtb3ZlT25lTWVzc2FnZShfaWQ6IElEISwgX21lc3NhZ2U6IElEISk6IFRocmVhZFJlc3BvbnNlXFxuXFxuICAgIHRocmVhZFVwZGF0ZU1lc3NhZ2VBbmFseXNpcyhfaWQ6IElEISwgX21lc3NhZ2U6IElEISwgYW5hbHlzaXM6IE11dGF0aW9uVGhyZWFkQW5hbHlzaXMhKTogVGhyZWFkUmVzcG9uc2VcXG4gICAgdGhyZWFkVXBkYXRlRGF0YShfaWQ6IElEISwgZGF0YTogTXV0YXRpb25UaHJlYWREYXRhISk6IFRocmVhZFJlc3BvbnNlXFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW5wdXQgTXV0YXRpb25UaHJlYWRNZXNzYWdlQ3JlYXRlIHtcXG4gICAgbnVtYmVyOiBTdHJpbmchXFxuICAgIG1lc3NhZ2U6IFN0cmluZyFcXG4gICAgb3JpZ2luOiBFbnVtVGhyZWFkTWVzc2FnZU9yaWdpbiFcXG59XFxuXFxuaW5wdXQgTXV0YXRpb25UaHJlYWRNZXNzYWdlVXBkYXRlIHtcXG4gICAgbnVtYmVyOiBTdHJpbmdcXG4gICAgbWVzc2FnZTogU3RyaW5nXFxuICAgIG9yaWdpbjogRW51bVRocmVhZE1lc3NhZ2VPcmlnaW5cXG59XFxuXFxuaW5wdXQgTXV0YXRpb25UaHJlYWRBbmFseXNpcyB7XFxuICAgIGVtb3Rpb246IE11dGF0aW9uVGhyZWFkQW5hbHlzaXNFbW90aW9uXFxuICAgIHNhcmNhc206IE11dGF0aW9uVGhyZWFkQW5hbHlzaXNTYXJjYXNtXFxuICAgIHNlbnRpbWVudDogTXV0YXRpb25UaHJlYWRBbmFseXNpc1NlbnRpbWVudFxcbn1cXG5cXG5pbnB1dCBNdXRhdGlvblRocmVhZEFuYWx5c2lzRW1vdGlvbiB7XFxuICAgIGhhcHB5OiBGbG9hdFxcbiAgICBhbmdyeTogRmxvYXRcXG4gICAgZXhjaXRlZDogRmxvYXRcXG4gICAgc2FkOiBGbG9hdFxcbiAgICBmZWFyOiBGbG9hdFxcbiAgICBib3JlZDogRmxvYXRcXG59XFxuXFxuaW5wdXQgTXV0YXRpb25UaHJlYWRBbmFseXNpc1NlbnRpbWVudCB7XFxuICAgIHBvc2l0aXZlOiBGbG9hdFxcbiAgICBuZXV0cmFsOiBGbG9hdFxcbiAgICBuZWdhdGl2ZTogRmxvYXRcXG59XFxuXFxuaW5wdXQgTXV0YXRpb25UaHJlYWRBbmFseXNpc1NhcmNhc20ge1xcbiAgICBzYXJjYXN0aWM6IEZsb2F0XFxuICAgIG5vblNhcmNhc3RpYzogRmxvYXRcXG59XFxuXFxuaW5wdXQgTXV0YXRpb25UaHJlYWREYXRhIHtcXG4gICAgYnV5OiBNdXRhdGlvblRocmVhZERhdGFCdXlcXG4gICAgc2VsbDogTXV0YXRpb25UaHJlYWREYXRhU2VsbFxcbiAgICByZW50OiBNdXRhdGlvblRocmVhZERhdGFSZW50XFxufVxcblxcbmlucHV0IE11dGF0aW9uVGhyZWFkRGF0YUJ1eSB7XFxuICAgIGxvY2F0aW9uOiBTdHJpbmdcXG4gICAgcHJpY2VSYW5nZTogU3RyaW5nXFxuICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXFxuICAgIGJlZHM6IFN0cmluZ1xcbiAgICBiYXRoczogU3RyaW5nXFxufVxcblxcbmlucHV0IE11dGF0aW9uVGhyZWFkRGF0YVNlbGwge1xcbiAgICB3aHk6IFN0cmluZ1xcbiAgICBtZWV0aW5nOiBTdHJpbmdcXG4gICAgdGltZWZyYW1lOiBTdHJpbmdcXG4gICAgY29uZGl0aW9uOiBTdHJpbmdcXG4gICAgcHJpY2VSYW5nZTogU3RyaW5nXFxuICAgIHByb3BlcnR5VHlwZTogU3RyaW5nXFxuICAgIGFkZHJlc3M6IFN0cmluZ1xcbn1cXG5cXG5pbnB1dCBNdXRhdGlvblRocmVhZERhdGFSZW50IHtcXG4gICAgbG9jYXRpb246IFN0cmluZ1xcbiAgICBwcmljZVJhbmdlOiBTdHJpbmdcXG4gICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcXG4gICAgYmVkczogU3RyaW5nXFxuICAgIGJhdGhzOiBTdHJpbmdcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJcIjsiLCJleHBvcnQgZGVmYXVsdCBcInR5cGUgVGhyZWFkUmVzcG9uc2Uge1xcbiAgICBjb2RlOiBGbG9hdFxcbiAgICBlcnJvcnM6IFtTdHJpbmddXFxuICAgIGRhdGE6IFRocmVhZFxcbn1cXG5cXG50eXBlIFRocmVhZE1lc3NhZ2VSZXNwb25zZSB7XFxuICAgIGNvZGU6IEZsb2F0XFxuICAgIGVycm9yczogW1N0cmluZ11cXG4gICAgZGF0YTogVGhyZWFkTWVzc2FnZVxcbn1cXG5cXG50eXBlIFRocmVhZFJlc3BvbnNlQXJyYXkge1xcbiAgICBjb2RlOiBGbG9hdFxcbiAgICBlcnJvcnM6IFtTdHJpbmddXFxuICAgIGRhdGE6IFtUaHJlYWRdXFxufVxcblxcbnR5cGUgVGhyZWFkTWVzc2FnZVJlc3BvbnNlQXJyYXkge1xcbiAgICBjb2RlOiBGbG9hdFxcbiAgICBlcnJvcnM6IFtTdHJpbmddXFxuICAgIGRhdGE6IFtUaHJlYWRNZXNzYWdlXVxcbn1cXG5cXG50eXBlIFRocmVhZCBAa2V5KGZpZWxkczogXFxcIl9pZFxcXCIpIHtcXG4gICAgX2lkOiBJRFxcbiAgICBjcmVhdGVkOiBTdHJpbmdcXG4gICAgbW9kaWZpZWQ6IFN0cmluZ1xcbiAgICBudW1iZXJzOiBbU3RyaW5nXVxcbiAgICBtZXNzYWdlczogW1RocmVhZE1lc3NhZ2VdXFxuICAgIGRhdGE6IFRocmVhZERhdGFcXG4gICAgYW5hbHlzaXM6IFRocmVhZEFuYWx5c2lzXFxufVxcblxcbnR5cGUgVGhyZWFkTWVzc2FnZSB7XFxuICAgIF9pZDogSURcXG4gICAgY3JlYXRlZDogU3RyaW5nXFxuICAgIG1vZGlmaWVkOiBTdHJpbmdcXG4gICAgbnVtYmVyOiBTdHJpbmchXFxuICAgIG1lc3NhZ2U6IFN0cmluZyFcXG4gICAgb3JpZ2luOiBFbnVtVGhyZWFkTWVzc2FnZU9yaWdpblxcbiAgICBhbmFseXNpczogVGhyZWFkQW5hbHlzaXNcXG59XFxuXFxudHlwZSBUaHJlYWREYXRhIHtcXG4gICAgX2lkOiBJRFxcbiAgICBjcmVhdGVkOiBTdHJpbmdcXG4gICAgbW9kaWZpZWQ6IFN0cmluZ1xcbiAgICBidXk6IFRocmVhZERhdGFCdXlcXG4gICAgc2VsbDogVGhyZWFkRGF0YVNlbGxcXG4gICAgcmVudDogVGhyZWFkRGF0YVJlbnRcXG59XFxuXFxudHlwZSBUaHJlYWREYXRhQnV5IHtcXG4gICAgbG9jYXRpb246IFN0cmluZ1xcbiAgICBwcmljZVJhbmdlOiBTdHJpbmdcXG4gICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcXG4gICAgYmVkczogU3RyaW5nXFxuICAgIGJhdGhzOiBTdHJpbmdcXG59XFxuXFxudHlwZSBUaHJlYWREYXRhU2VsbCB7XFxuICAgIHdoeTogU3RyaW5nXFxuICAgIG1lZXRpbmc6IFN0cmluZ1xcbiAgICB0aW1lZnJhbWU6IFN0cmluZ1xcbiAgICBjb25kaXRpb246IFN0cmluZ1xcbiAgICBwcmljZVJhbmdlOiBTdHJpbmdcXG4gICAgcHJvcGVydHlUeXBlOiBTdHJpbmdcXG4gICAgYWRkcmVzczogU3RyaW5nXFxufVxcblxcbnR5cGUgVGhyZWFkRGF0YVJlbnQge1xcbiAgICBsb2NhdGlvbjogU3RyaW5nXFxuICAgIHByaWNlUmFuZ2U6IFN0cmluZ1xcbiAgICBwcm9wZXJ0eVR5cGU6IFN0cmluZ1xcbiAgICBiZWRzOiBTdHJpbmdcXG4gICAgYmF0aHM6IFN0cmluZ1xcbn1cXG5cXG50eXBlIFRocmVhZEFuYWx5c2lzIHtcXG4gICAgX2lkOiBJRFxcbiAgICBjcmVhdGVkOiBTdHJpbmdcXG4gICAgbW9kaWZpZWQ6IFN0cmluZ1xcbiAgICBzZW50aW1lbnQ6IFRocmVhZEFuYWx5c2lzU2VudGltZW50XFxuICAgIGVtb3Rpb246IFRocmVhZEFuYWx5c2lzRW1vdGlvblxcbiAgICBzYXJjYXNtOiBUaHJlYWRBbmFseXNpc1NhcmNhc21cXG59XFxuXFxudHlwZSBUaHJlYWRBbmFseXNpc1NlbnRpbWVudCB7XFxuICAgIGNyZWF0ZWQ6IFN0cmluZ1xcbiAgICBtb2RpZmllZDogU3RyaW5nXFxuICAgIHBvc2l0aXZlOiBTdHJpbmdcXG4gICAgbmV1dHJhbDogU3RyaW5nXFxuICAgIG5lZ2F0aXZlOiBTdHJpbmdcXG59XFxuXFxudHlwZSBUaHJlYWRBbmFseXNpc0Vtb3Rpb24ge1xcbiAgICBjcmVhdGVkOiBTdHJpbmdcXG4gICAgbW9kaWZpZWQ6IFN0cmluZ1xcbiAgICBoYXBweTogU3RyaW5nXFxuICAgIGFuZ3J5OiBTdHJpbmdcXG4gICAgZXhjaXRlZDogU3RyaW5nXFxuICAgIHNhZDogU3RyaW5nXFxuICAgIGZlYXI6IFN0cmluZ1xcbiAgICBib3JlZDogU3RyaW5nXFxufVxcblxcbnR5cGUgVGhyZWFkQW5hbHlzaXNTYXJjYXNtIHtcXG4gICAgY3JlYXRlZDogU3RyaW5nXFxuICAgIG1vZGlmaWVkOiBTdHJpbmdcXG4gICAgc2FyY2FzdGljOiBTdHJpbmdcXG4gICAgbm9uU2FyY2FzdGljOiBTdHJpbmdcXG59XCI7IiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJUaHJlYWRcIixcbiAgICBhc3luYyAoVGhyZWFkLCByZXNwb25zZSwgcm9vdCwgeyBudW1iZXJzIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFhd2FpdCBUaHJlYWQuaGFzVmFsaWROdW1iZXJzKG51bWJlcnMpKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJFQURfTlVNQkVSX0lOVkFMSURfRU5fVVMpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGlmIChhd2FpdCBUaHJlYWQuaGFzVGhyZWFkQnlOdW1iZXJzKG51bWJlcnMpKVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhSRUFEX0NSRUFURV9GQUlMVVJFKTtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoYXdhaXQgbmV3IFRocmVhZCh7IG51bWJlcnMgfSkuc2F2ZSgpKTtcblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pIiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJUaHJlYWRcIixcbiAgICBhc3luYyAoVGhyZWFkLCByZXNwb25zZSwgcm9vdCwgeyBfaWQsIG1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IFRocmVhZC5oYXNUaHJlYWRCeUlkKF9pZCkpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUkVBRF9VUERBVEVfRkFJTFVSRSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBUaHJlYWQuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCB9LCB7ICRwdXNoOiB7IG1lc3NhZ2VzOiBtZXNzYWdlIH19KTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IFRocmVhZC5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pIiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJUaHJlYWRcIixcbiAgICBhc3luYyAoVGhyZWFkLCByZXNwb25zZSwgcm9vdCwgeyBfaWQgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IFRocmVhZC5oYXNUaHJlYWRCeUlkKF9pZCkpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUkVBRF9SRU1PVkVfRkFJTFVSRSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YShhd2FpdCBUaHJlYWQuZGVsZXRlT25lKHsgX2lkIH0pKTtcblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pIiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJUaHJlYWRcIixcbiAgICBhc3luYyAoVGhyZWFkLCByZXNwb25zZSwgcm9vdCwgeyBfaWQsIF9tZXNzYWdlIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFhd2FpdCBUaHJlYWQuaGFzTWVzc2FnZUJ5SWQoX2lkLCBfbWVzc2FnZSkpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLk5PVF9GT1VORCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBUaHJlYWQuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCB9LCB7ICRwdWxsOiB7IG1lc3NhZ2VzOiB7IF9pZDogX21lc3NhZ2UgfX19KTtcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IFRocmVhZC5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pIiwiaW1wb3J0IHVzZVJlc3BvbnNlIGZyb20gXCJAY29tbW9uSG9va3MvdXNlUmVzcG9uc2VcIjtcbmltcG9ydCB7IFNUQVRVU19DT0RFUyB9IGZyb20gXCJAY29tbW9uVXRpbHMvUmVzcG9uc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVzcG9uc2UoXG4gICAgXCJUaHJlYWRcIixcbiAgICBhc3luYyAoVGhyZWFkLCByZXNwb25zZSwgcm9vdCwgeyBfaWQsIGRhdGEgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IFRocmVhZC5oYXNUaHJlYWRCeUlkKF9pZCkpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLk5PVF9GT1VORCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aHJlYWQgPSBhd2FpdCBUaHJlYWQuZmluZE9uZSh7IF9pZCB9KTtcblxuICAgICAgICAgICAgICAgIGlmICh0aHJlYWQuZGF0YSA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBUaHJlYWQuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCB9LCB7IGRhdGEgfSk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBUaHJlYWQuZmluZE9uZUFuZFVwZGF0ZSh7IF9pZCB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBhd2FpdCBUaHJlYWQudXBkYXRlRGF0YShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJlYWQuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IFRocmVhZC5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKSIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiVGhyZWFkXCIsXG4gICAgYXN5bmMgKFRocmVhZCwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBfbWVzc2FnZSwgYW5hbHlzaXMgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IFRocmVhZC5oYXNNZXNzYWdlQnlJZChfaWQsIF9tZXNzYWdlKSlcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTk9UX0ZPVU5EKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBbIGluZGV4LCBtZXNzYWdlIF0gPSBhd2FpdCBUaHJlYWQubWVzc2FnZUluZGV4QW5kRGF0YShfaWQsIF9tZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlLmFuYWx5c2lzID09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IFRocmVhZC51cGRhdGVPbmUoXG4gICAgICAgICAgICAgICAgICAgICAgICB7IF9pZCwgXCJtZXNzYWdlcy5faWRcIjogX21lc3NhZ2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJHNldDogeyBbYG1lc3NhZ2VzLiR7aW5kZXh9LmFuYWx5c2lzYF06IGFuYWx5c2lzIH19XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBUaHJlYWQudXBkYXRlT25lKFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBfaWQsIFwibWVzc2FnZXMuX2lkXCI6IF9tZXNzYWdlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7ICRzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYG1lc3NhZ2VzLiR7aW5kZXh9LmFuYWx5c2lzYF06XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IFRocmVhZC51cGRhdGVBbmFseXNpcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuYW5hbHlzaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmFseXNpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IFRocmVhZC5maW5kT25lKHsgX2lkIH0pKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKSIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiVGhyZWFkXCIsXG4gICAgYXN5bmMgKFRocmVhZCwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBfbWVzc2FnZSwgbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghYXdhaXQgVGhyZWFkLmhhc1RocmVhZEJ5SWQoX2lkKSB8fCAhYXdhaXQgVGhyZWFkLmhhc01lc3NhZ2VCeUlkKF9pZCwgX21lc3NhZ2UpKVxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5OT1RfRk9VTkQpXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aHJlYWQgPSBhd2FpdCBUaHJlYWQuZmluZE9uZSh7IF9pZCwgXCJtZXNzYWdlcy5faWRcIjogX21lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpZHggaW4gdGhyZWFkLm1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IHsuLi50aHJlYWQubWVzc2FnZXNbaWR4XS5fZG9jfTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbXNnLm1vZGlmaWVkO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gbWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZ1twcm9wXSA9IG1lc3NhZ2VbcHJvcF07XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgVGhyZWFkLnVwZGF0ZU9uZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgX2lkLCBcIm1lc3NhZ2VzLl9pZFwiOiBfbWVzc2FnZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyAkc2V0OiB7IFtgbWVzc2FnZXMuJHtpZHh9YF06IG1zZyB9fVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEoYXdhaXQgVGhyZWFkLmZpbmRPbmUoeyBfaWQgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbikiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIlRocmVhZFwiLFxuICAgIGFzeW5jIChUaHJlYWQsIHJlc3BvbnNlLCByb290LCB7IF9pZD1udWxsIH0pID0+IHtcbiAgICAgICAgY29uc3QgU1RBVFVTID0gU1RBVFVTX0NPREVTLmFzQXJyYXkoKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKF9pZCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5JRF9SRVFVSVJFRCk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RGF0YShhd2FpdCBUaHJlYWQuZmluZE9uZSh7IF9pZCB9KSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKSIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiVGhyZWFkXCIsXG4gICAgYXN5bmMgKFRocmVhZCwgcmVzcG9uc2UsIHJvb3QsIHsgbnVtYmVycyB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghYXdhaXQgVGhyZWFkLmhhc1ZhbGlkTnVtYmVycyhudW1iZXJzKSlcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhSRUFEX05VTUJFUl9JTlZBTElEX0VOX1VTKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGF3YWl0IFRocmVhZC5maW5kT25lKHtcbiAgICAgICAgICAgICAgICAgICAgJGFuZDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBudW1iZXJzOiB7ICRzaXplOiBudW1iZXJzLmxlbmd0aCB9fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgbnVtYmVyczogeyAkYWxsOiBudW1iZXJzIH19XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKSIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiVGhyZWFkXCIsXG4gICAgYXN5bmMgKFRocmVhZCwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBfbWVzc2FnZSB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghYXdhaXQgVGhyZWFkLmhhc01lc3NhZ2VCeUlkKF9pZCwgX21lc3NhZ2UpKVxuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5OT1RfRk9VTkQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICB7IG1lc3NhZ2VzIH0gPSBhd2FpdCBUaHJlYWQuZmluZE9uZSh7IF9pZCwgXCJtZXNzYWdlcy5faWRcIjogX21lc3NhZ2UgfSksXG4gICAgICAgICAgICAgICAgbXNnID0gey4uLm1lc3NhZ2VzLmZpbmQoKG1zZykgPT4gbXNnLl9pZCA9PSBfbWVzc2FnZSl9Ll9kb2M7XG5cbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKG1zZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuVEhST1cpO1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9XG4gICAgfVxuKSIsImltcG9ydCB1c2VSZXNwb25zZSBmcm9tIFwiQGNvbW1vbkhvb2tzL3VzZVJlc3BvbnNlXCI7XG5pbXBvcnQgeyBTVEFUVVNfQ09ERVMgfSBmcm9tIFwiQGNvbW1vblV0aWxzL1Jlc3BvbnNlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJlc3BvbnNlKFxuICAgIFwiVGhyZWFkXCIsXG4gICAgYXN5bmMgKFRocmVhZCwgcmVzcG9uc2UsIHJvb3QsIHsgX2lkLCBudW1iZXIgfSkgPT4ge1xuICAgICAgICBjb25zdCBTVEFUVVMgPSBTVEFUVVNfQ09ERVMuYXNBcnJheSgpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIWF3YWl0IFRocmVhZC5oYXNUaHJlYWRCeUlkKF9pZCkpXG4gICAgICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLk5PVF9GT1VORCk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIHsgbWVzc2FnZXMgfSA9IGF3YWl0IFRocmVhZC5maW5kT25lKHsgX2lkIH0pLFxuICAgICAgICAgICAgICAgIGRhdGE6IGFueSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIG1lc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IHsuLi5tZXNzYWdlfS5fZG9jO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cubnVtYmVyID09PSBudW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnB1c2gobXNnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXREYXRhKGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2V0RXJyb3IoLi4uU1RBVFVTLlRIUk9XKTtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNlbmQoKTtcbiAgICAgICAgfVxuICAgIH1cbikiLCJpbXBvcnQgdXNlUmVzcG9uc2UgZnJvbSBcIkBjb21tb25Ib29rcy91c2VSZXNwb25zZVwiO1xuaW1wb3J0IHsgU1RBVFVTX0NPREVTIH0gZnJvbSBcIkBjb21tb25VdGlscy9SZXNwb25zZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VSZXNwb25zZShcbiAgICBcIlRocmVhZFwiLFxuICAgIGFzeW5jIChUaHJlYWQsIHJlc3BvbnNlLCByb290LCB7IF9pZCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IFNUQVRVUyA9IFNUQVRVU19DT0RFUy5hc0FycmF5KCk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmICghYXdhaXQgVGhyZWFkLmhhc1RocmVhZEJ5SWQoX2lkKSlcbiAgICAgICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZXRFcnJvciguLi5TVEFUVVMuTk9UX0ZPVU5EKTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbWVzc2FnZXMgfSA9IGF3YWl0IFRocmVhZC5maW5kT25lKHsgX2lkIH0pO1xuICAgICAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldERhdGEobWVzc2FnZXNbbWVzc2FnZXMubGVuZ3RoICAtIDFdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXdhaXQgcmVzcG9uc2Uuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGF3YWl0IHJlc3BvbnNlLnNldEVycm9yKC4uLlNUQVRVUy5USFJPVyk7XG4gICAgICAgICAgICBhd2FpdCByZXNwb25zZS5zZW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG4pIiwiaW1wb3J0IFwiY29sb3JzXCI7XG5pbXBvcnQgXCIuL21vbmdvb3NlXCI7XG5cbi8vIEVudmlyb25tZW50IGNvbmZpZ3VyYXRpb24gZnJvbSBcIi5lbnZcIiBmaWxlLlxuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmltcG9ydCB7IGxvZyB9IGZyb20gXCJjb25zb2xlXCI7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tIFwiYXBvbGxvLXNlcnZlclwiO1xuaW1wb3J0IGdyYXBocWwgZnJvbSBcIi4vZ3JhcGhxbFwiO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0XG4gICAgICAgIHsgUE9SVCB9ID0gcHJvY2Vzcy5lbnYsXG4gICAgICAgIGFwcCA9IG5ldyBBcG9sbG9TZXJ2ZXIoZ3JhcGhxbCksXG4gICAgICAgIHsgdXJsIH0gPSBhd2FpdCBhcHAubGlzdGVuKHsgcG9ydDogUE9SVCB9KTtcblxuICAgICAgICBsb2codXJsLmdyZWVuLmJvbGQpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn0pKCkiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2ZlZGVyYXRpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvcmVnZW5lcmF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb2xvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29uc29sZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb3RlbnZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2UtcGFnaW5hdGUtdjJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmFtZGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidmFsaWRhdG9yXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=