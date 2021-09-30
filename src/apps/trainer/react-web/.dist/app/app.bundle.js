(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/register */ "./node_modules/.pnpm/registry.npmjs.org/@babel/register/7.9.0_@babel+core@7.9.6/node_modules/@babel/register/lib/index.js");
/* harmony import */ var _babel_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.less */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/dist/antd.less");
/* harmony import */ var antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.ts");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/.pnpm/registry.npmjs.org/react-dom/16.13.1_react@16.13.1/node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");
/* harmony import */ var _react_containers_App_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./react/containers/App/App */ "./src/react/containers/App/App.tsx");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/.pnpm/registry.npmjs.org/apollo-link-http/1.5.17_graphql@15.0.0/node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/.pnpm/registry.npmjs.org/apollo-cache-inmemory/1.6.5_graphql@15.0.0/node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/.pnpm/registry.npmjs.org/@apollo/react-hooks/3.1.5_23e6eb72a57148097d5f5c5daf91cd18/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! apollo-client */ "./node_modules/.pnpm/registry.npmjs.org/apollo-client/2.6.8_graphql@15.0.0/node_modules/apollo-client/bundle.esm.js");











console.log("GATEWAY:", {"DOMAIN":"http://localhost","GATEWAY":"http://192.168.2.76:10001","PORT":"8888"}.GATEWAY);
var _ENV = {"DOMAIN":"http://localhost","GATEWAY":"http://192.168.2.76:10001","PORT":"8888"},
    GATEWAY = _ENV.GATEWAY,
    client = new apollo_client__WEBPACK_IMPORTED_MODULE_10__["ApolloClient"]({
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_8__["InMemoryCache"](),
  link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_7__["HttpLink"]({
    fetch: fetch,
    uri: GATEWAY
  })
});
Object(react_dom__WEBPACK_IMPORTED_MODULE_4__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: _redux_store__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["ApolloProvider"], {
  client: client
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_containers_App_App__WEBPACK_IMPORTED_MODULE_6__["App"], null))), document.querySelector("#app"));

/***/ }),

/***/ "./src/react/containers/App/App.tsx":
/*!******************************************!*\
  !*** ./src/react/containers/App/App.tsx ***!
  \******************************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _routes_AppRouter_AppRouter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @routes/AppRouter/AppRouter */ "./src/react/routes/AppRouter/AppRouter.tsx");


var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes_AppRouter_AppRouter__WEBPACK_IMPORTED_MODULE_1__["AppRouter"], null));
};

/***/ }),

/***/ "./src/react/containers/layouts/TrainerLayout/AsyncTrainerLayout.tsx":
/*!***************************************************************************!*\
  !*** ./src/react/containers/layouts/TrainerLayout/AsyncTrainerLayout.tsx ***!
  \***************************************************************************/
/*! exports provided: AsyncTrainerLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsyncTrainerLayout", function() { return AsyncTrainerLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @loadable/component */ "./node_modules/.pnpm/registry.npmjs.org/@loadable/component/5.12.0_react@16.13.1/node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @loaders/AppLoader/AppLoader */ "./src/react/loaders/AppLoader/AppLoader.tsx");



var AsyncTrainerLayout = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./TrainerLayout */ "./src/react/containers/layouts/TrainerLayout/TrainerLayout.tsx")).then(function (_ref) {
    var TrainerLayout = _ref.TrainerLayout;
    return TrainerLayout;
  });
}, {
  fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_2__["AppLoader"], null)
});

/***/ }),

/***/ "./src/react/loaders/AppLoader/AppLoader.jss.ts":
/*!******************************************************!*\
  !*** ./src/react/loaders/AppLoader/AppLoader.jss.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100%"
  },
  loadingIcon: {
    fontSize: "6rem"
  },
  loadingMsg: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    fontStyle: "italic",
    marginTop: "1rem"
  }
}));

/***/ }),

/***/ "./src/react/loaders/AppLoader/AppLoader.tsx":
/*!***************************************************!*\
  !*** ./src/react/loaders/AppLoader/AppLoader.tsx ***!
  \***************************************************/
/*! exports provided: AppLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLoader", function() { return AppLoader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/registry.npmjs.org/@ant-design/icons/4.1.0_react-dom@16.13.1+react@16.13.1/node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _AppLoader_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppLoader.jss */ "./src/react/loaders/AppLoader/AppLoader.jss.ts");



var AppLoader = function AppLoader(props) {
  var classes = Object(_AppLoader_jss__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.loadingContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["LoadingOutlined"], {
    className: classes.loadingIcon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.loadingMsg
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Loading...")));
};

/***/ }),

/***/ "./src/react/routes/AppRouter/AppRouter.tsx":
/*!**************************************************!*\
  !*** ./src/react/routes/AppRouter/AppRouter.tsx ***!
  \**************************************************/
/*! exports provided: AppRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouter", function() { return AppRouter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/registry.npmjs.org/react-router-dom/5.1.2_react@16.13.1/node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _layouts_TrainerLayout_AsyncTrainerLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/TrainerLayout/AsyncTrainerLayout */ "./src/react/containers/layouts/TrainerLayout/AsyncTrainerLayout.tsx");



var AppRouter = function AppRouter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    component: _layouts_TrainerLayout_AsyncTrainerLayout__WEBPACK_IMPORTED_MODULE_2__["AsyncTrainerLayout"],
    exact: true
  })));
};

/***/ }),

/***/ "./src/redux/actions/lexiconActions.ts":
/*!*********************************************!*\
  !*** ./src/redux/actions/lexiconActions.ts ***!
  \*********************************************/
/*! exports provided: TOGGLE_REFETCH, SET_LEXICONS_DATA, SET_ENTITIES_DATA, SET_LEXICONS_SEARCH, TOGGLE_MODEL_CONFIRM, TOGGLE_OPTIONS_EXACT_MATCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_REFETCH", function() { return TOGGLE_REFETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEXICONS_DATA", function() { return SET_LEXICONS_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENTITIES_DATA", function() { return SET_ENTITIES_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LEXICONS_SEARCH", function() { return SET_LEXICONS_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODEL_CONFIRM", function() { return TOGGLE_MODEL_CONFIRM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_OPTIONS_EXACT_MATCH", function() { return TOGGLE_OPTIONS_EXACT_MATCH; });
var TOGGLE_REFETCH = "TOGGLE_REFETCH",
    SET_LEXICONS_DATA = "SET_LEXICONS_DATA",
    SET_ENTITIES_DATA = "SET_ENTITIES_DATA",
    SET_LEXICONS_SEARCH = "SET_LEXICONS_SEARCH",
    TOGGLE_MODEL_CONFIRM = "TOGGLE_MODEL_CONFIRM",
    TOGGLE_OPTIONS_EXACT_MATCH = "TOGGLE_OPTIONS_EXACT_MATCH";

/***/ }),

/***/ "./src/redux/actions/modalEntityActions.ts":
/*!*************************************************!*\
  !*** ./src/redux/actions/modalEntityActions.ts ***!
  \*************************************************/
/*! exports provided: TOGGLE_MODEL_ENTITY, SET_ENTITY_MODAL_DATA, TOGGLE_ENTITY_MODAL_REFETCH, SET_ENTITY_MODAL_INPUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODEL_ENTITY", function() { return TOGGLE_MODEL_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENTITY_MODAL_DATA", function() { return SET_ENTITY_MODAL_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_ENTITY_MODAL_REFETCH", function() { return TOGGLE_ENTITY_MODAL_REFETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ENTITY_MODAL_INPUT", function() { return SET_ENTITY_MODAL_INPUT; });
var TOGGLE_MODEL_ENTITY = "TOGGLE_MODEL_ENTITY",
    SET_ENTITY_MODAL_DATA = "SET_ENTITY_MODAL_DATA",
    TOGGLE_ENTITY_MODAL_REFETCH = "TOGGLE_ENTITY_MODAL_REFETCH",
    SET_ENTITY_MODAL_INPUT = "SET_ENTITY_MODAL_INPUT";

/***/ }),

/***/ "./src/redux/actions/modalPeekActions.ts":
/*!***********************************************!*\
  !*** ./src/redux/actions/modalPeekActions.ts ***!
  \***********************************************/
/*! exports provided: TOGGLE_MODEL_PEEK, SET_PEEK_MODAL_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MODEL_PEEK", function() { return TOGGLE_MODEL_PEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_PEEK_MODAL_DATA", function() { return SET_PEEK_MODAL_DATA; });
var TOGGLE_MODEL_PEEK = "TOGGLE_MODEL_PEEK",
    SET_PEEK_MODAL_DATA = "SET_PEEK_MODAL_DATA";

/***/ }),

/***/ "./src/redux/reducers/lexiconReducers.ts":
/*!***********************************************!*\
  !*** ./src/redux/reducers/lexiconReducers.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/.pnpm/registry.npmjs.org/ramda/0.27.0/node_modules/ramda/es/index.js");
/* harmony import */ var _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");
/* harmony import */ var _utils_useReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/useReducer */ "./src/utils/useReducer.ts");


var _useReducers;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var init = {
  refetch: false,
  lexicons: [],
  entities: [],
  search: "",
  options: {
    exactMatch: false
  },
  modelConfirm: {
    show: false,
    lexicon: null
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_useReducer__WEBPACK_IMPORTED_MODULE_3__["default"])(init, (_useReducers = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_REFETCH"], function (state, _ref) {
  var _ref$refetch = _ref.refetch,
      refetch = _ref$refetch === void 0 ? null : _ref$refetch;
  return _objectSpread(_objectSpread({}, state), {}, {
    refetch: refetch || !state.refetch
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_2__["SET_LEXICONS_DATA"], function (state, _ref2) {
  var typename = _ref2.typename,
      payload = _ref2.payload;
  var lexicons = payload || [];
  if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["type"])(payload) === "Object") lexicons = payload[typename].data || [];
  return _objectSpread(_objectSpread({}, state), {}, {
    lexicons: lexicons
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_2__["SET_ENTITIES_DATA"], function (state, _ref3) {
  var typename = _ref3.typename,
      payload = _ref3.payload;
  var entities = payload || [];
  if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["type"])(payload) === "Object") entities = payload[typename].data || [];
  return _objectSpread(_objectSpread({}, state), {}, {
    entities: entities
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_2__["SET_LEXICONS_SEARCH"], function (state, _ref4) {
  var search = _ref4.search;
  return _objectSpread(_objectSpread({}, state), {}, {
    search: search
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_MODEL_CONFIRM"], function (state, _ref5) {
  var _ref5$show = _ref5.show,
      show = _ref5$show === void 0 ? null : _ref5$show,
      lexicon = _ref5.lexicon;
  return _objectSpread(_objectSpread({}, state), {}, {
    modelConfirm: _objectSpread(_objectSpread({}, state.modelConfirm), {}, {
      show: show || !state.modelConfirm.show,
      lexicon: lexicon
    })
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_OPTIONS_EXACT_MATCH"], function (state) {
  return _objectSpread(_objectSpread({}, state), {}, {
    options: _objectSpread(_objectSpread({}, state.options), {}, {
      exactMatch: !state.options.exactMatch
    })
  });
}), _useReducers)));

/***/ }),

/***/ "./src/redux/reducers/modalEntityReducers.ts":
/*!***************************************************!*\
  !*** ./src/redux/reducers/modalEntityReducers.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/.pnpm/registry.npmjs.org/ramda/0.27.0/node_modules/ramda/es/index.js");
/* harmony import */ var _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/actions/modalEntityActions */ "./src/redux/actions/modalEntityActions.ts");
/* harmony import */ var _utils_useReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/useReducer */ "./src/utils/useReducer.ts");


var _useReducers;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var init = {
  refetch: false,
  show: false,
  lexicon: null,
  search: null,
  data: null,
  entity: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_useReducer__WEBPACK_IMPORTED_MODULE_3__["default"])(init, (_useReducers = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_MODEL_ENTITY"], function (state, _ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? null : _ref$show,
      _ref$lexicon = _ref.lexicon,
      lexicon = _ref$lexicon === void 0 ? null : _ref$lexicon,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? null : _ref$search;
  return _objectSpread(_objectSpread({}, state), {}, {
    show: show || !state.show,
    lexicon: lexicon,
    search: search
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_2__["SET_ENTITY_MODAL_DATA"], function (state, _ref2) {
  var typename = _ref2.typename,
      payload = _ref2.payload;
  var data = payload || null;
  if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["type"])(payload) === "Object") data = payload[typename].data || null;
  return _objectSpread(_objectSpread({}, state), {}, {
    data: data
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_ENTITY_MODAL_REFETCH"], function (state, _ref3) {
  var _ref3$refetch = _ref3.refetch,
      refetch = _ref3$refetch === void 0 ? null : _ref3$refetch;
  return _objectSpread(_objectSpread({}, state), {}, {
    refetch: refetch || !state.refetch
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_2__["SET_ENTITY_MODAL_INPUT"], function (state, _ref4) {
  var entity = _ref4.entity;
  return _objectSpread(_objectSpread({}, state), {}, {
    entity: entity
  });
}), _useReducers)));

/***/ }),

/***/ "./src/redux/reducers/modelPeekReducers.ts":
/*!*************************************************!*\
  !*** ./src/redux/reducers/modelPeekReducers.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/.pnpm/registry.npmjs.org/ramda/0.27.0/node_modules/ramda/es/index.js");
/* harmony import */ var _redux_actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/actions/modalPeekActions */ "./src/redux/actions/modalPeekActions.ts");
/* harmony import */ var _utils_useReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/useReducer */ "./src/utils/useReducer.ts");


var _useReducers;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var init = {
  show: false,
  lexicon: null,
  data: null
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_useReducer__WEBPACK_IMPORTED_MODULE_3__["default"])(init, (_useReducers = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_2__["TOGGLE_MODEL_PEEK"], function (state, _ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? null : _ref$show,
      lexicon = _ref.lexicon;
  return _objectSpread(_objectSpread({}, state), {}, {
    show: show || !state.show,
    lexicon: lexicon
  });
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_useReducers, _redux_actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_2__["SET_PEEK_MODAL_DATA"], function (state, _ref2) {
  var typename = _ref2.typename,
      payload = _ref2.payload;
  var data = payload || null;
  if (Object(ramda__WEBPACK_IMPORTED_MODULE_1__["type"])(payload) === "Object") data = payload[typename].data || null;
  return _objectSpread(_objectSpread({}, state), {}, {
    data: data
  });
}), _useReducers)));

/***/ }),

/***/ "./src/redux/store.ts":
/*!****************************!*\
  !*** ./src/redux/store.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/.pnpm/registry.npmjs.org/redux/4.0.5/node_modules/redux/es/redux.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/.pnpm/registry.npmjs.org/redux-logger/3.0.6/node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_lexiconReducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/lexiconReducers */ "./src/redux/reducers/lexiconReducers.ts");
/* harmony import */ var _reducers_modalEntityReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/modalEntityReducers */ "./src/redux/reducers/modalEntityReducers.ts");
/* harmony import */ var _reducers_modelPeekReducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/modelPeekReducers */ "./src/redux/reducers/modelPeekReducers.ts");





/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  lexicons: _reducers_lexiconReducers__WEBPACK_IMPORTED_MODULE_2__["default"],
  modalEntity: _reducers_modalEntityReducers__WEBPACK_IMPORTED_MODULE_3__["default"],
  modalPeek: _reducers_modelPeekReducers__WEBPACK_IMPORTED_MODULE_4__["default"]
}), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(Object(redux_logger__WEBPACK_IMPORTED_MODULE_1__["createLogger"])())));

/***/ }),

/***/ "./src/utils/useReducer.ts":
/*!*********************************!*\
  !*** ./src/utils/useReducer.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* harmony default export */ __webpack_exports__["default"] = (function (init, config) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : init;
    var action = arguments.length > 1 ? arguments[1] : undefined;
    return config != null && config.hasOwnProperty(action.type) ? config[action.type](state, action) : _objectSpread({}, state);
  };
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/odysseus/Workspaces/lydia/src/apps/trainer/react-web/src/index.tsx */"./src/index.tsx");


/***/ })

},[[0,"manifest","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL0FwcC9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL2xheW91dHMvVHJhaW5lckxheW91dC9Bc3luY1RyYWluZXJMYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9sb2FkZXJzL0FwcExvYWRlci9BcHBMb2FkZXIuanNzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9sb2FkZXJzL0FwcExvYWRlci9BcHBMb2FkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9yb3V0ZXMvQXBwUm91dGVyL0FwcFJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbGV4aWNvbkFjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvbW9kYWxFbnRpdHlBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL21vZGFsUGVla0FjdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL2xleGljb25SZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbW9kYWxFbnRpdHlSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvbW9kZWxQZWVrUmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy91c2VSZWR1Y2VyLnRzIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJFTlYiLCJHQVRFV0FZIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwibGluayIsIkh0dHBMaW5rIiwiZmV0Y2giLCJ1cmkiLCJyZW5kZXIiLCJzdG9yZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkFwcCIsInByb3BzIiwiQXN5bmNUcmFpbmVyTGF5b3V0IiwibG9hZGFibGUiLCJ0aGVuIiwiVHJhaW5lckxheW91dCIsImZhbGxiYWNrIiwiY3JlYXRlVXNlU3R5bGVzIiwibG9hZGluZ0NvbnRhaW5lciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwibG9hZGluZ0ljb24iLCJmb250U2l6ZSIsImxvYWRpbmdNc2ciLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwibWFyZ2luVG9wIiwiQXBwTG9hZGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIkFwcFJvdXRlciIsIlRPR0dMRV9SRUZFVENIIiwiU0VUX0xFWElDT05TX0RBVEEiLCJTRVRfRU5USVRJRVNfREFUQSIsIlNFVF9MRVhJQ09OU19TRUFSQ0giLCJUT0dHTEVfTU9ERUxfQ09ORklSTSIsIlRPR0dMRV9PUFRJT05TX0VYQUNUX01BVENIIiwiVE9HR0xFX01PREVMX0VOVElUWSIsIlNFVF9FTlRJVFlfTU9EQUxfREFUQSIsIlRPR0dMRV9FTlRJVFlfTU9EQUxfUkVGRVRDSCIsIlNFVF9FTlRJVFlfTU9EQUxfSU5QVVQiLCJUT0dHTEVfTU9ERUxfUEVFSyIsIlNFVF9QRUVLX01PREFMX0RBVEEiLCJpbml0IiwicmVmZXRjaCIsImxleGljb25zIiwiZW50aXRpZXMiLCJzZWFyY2giLCJvcHRpb25zIiwiZXhhY3RNYXRjaCIsIm1vZGVsQ29uZmlybSIsInNob3ciLCJsZXhpY29uIiwidXNlUmVkdWNlcnMiLCJBIiwic3RhdGUiLCJ0eXBlbmFtZSIsInBheWxvYWQiLCJ0eXBlIiwiZGF0YSIsImVudGl0eSIsImNyZWF0ZVN0b3JlIiwiY29tYmluZVJlZHVjZXJzIiwibW9kYWxFbnRpdHkiLCJtb2RhbFBlZWsiLCJhcHBseU1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJjb25maWciLCJhY3Rpb24iLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBw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Q29udGVudCI6WyJpbXBvcnQgXCJAYmFiZWwvcmVnaXN0ZXJcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmxlc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdG9yZSBmcm9tIFwiLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IEFwcCB9IGZyb20gXCIuL3JlYWN0L2NvbnRhaW5lcnMvQXBwL0FwcFwiO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tIFwiYXBvbGxvLWxpbmstaHR0cFwiO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZX0gZnJvbSBcImFwb2xsby1jYWNoZS1pbm1lbW9yeVwiO1xuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSBcImFwb2xsby1jbGllbnRcIjtcbmNvbnNvbGUubG9nKFwiR0FURVdBWTpcIiwgRU5WLkdBVEVXQVkpO1xuXG5jb25zdFxueyBHQVRFV0FZIH0gPSBFTlYsXG5jbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xuICAgICAgICBmZXRjaCxcbiAgICAgICAgdXJpOiBHQVRFV0FZLFxuICAgIH0pXG59KTtcblxucmVuZGVyKFxuICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgIDwvUHJvdmlkZXI+LFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpXG4pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gXCJAcm91dGVzL0FwcFJvdXRlci9BcHBSb3V0ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgQXBwID0gKHByb3BzOiBBcHBQcm9wcykgPT4gKFxuICAgIDw+XG4gICAgICAgIDxBcHBSb3V0ZXIgLz5cbiAgICA8Lz5cbik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGxvYWRhYmxlIGZyb20gXCJAbG9hZGFibGUvY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBcHBMb2FkZXIgfSBmcm9tIFwiQGxvYWRlcnMvQXBwTG9hZGVyL0FwcExvYWRlclwiO1xuXG5leHBvcnQgY29uc3QgQXN5bmNUcmFpbmVyTGF5b3V0ID0gbG9hZGFibGUoXG4gICAgKCkgPT4gaW1wb3J0KFwiLi9UcmFpbmVyTGF5b3V0XCIpLnRoZW4oKHsgVHJhaW5lckxheW91dCB9KSA9PiBUcmFpbmVyTGF5b3V0KSwge1xuICAgICAgICBmYWxsYmFjazogPEFwcExvYWRlciAvPlxuICAgIH1cbik7IiwiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVc2VTdHlsZXMoe1xuICAgIGxvYWRpbmdDb250YWluZXI6IHtcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgbG9hZGluZ0ljb246IHtcbiAgICAgICAgZm9udFNpemU6IFwiNnJlbVwiLFxuICAgIH0sXG4gICAgbG9hZGluZ01zZzoge1xuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjFyZW1cIlxuICAgIH1cbn0pOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi9BcHBMb2FkZXIuanNzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwTG9hZGVyUHJvcHMge31cblxuZXhwb3J0IGNvbnN0IEFwcExvYWRlciA9IChwcm9wczogQXBwTG9hZGVyUHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzOiBhbnkgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxvYWRpbmdDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8TG9hZGluZ091dGxpbmVkIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2FkaW5nSWNvbn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubG9hZGluZ01zZ30+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtcIkxvYWRpbmcuLi5cIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgeyBBc3luY1RyYWluZXJMYXlvdXQgfSBmcm9tIFwiQGxheW91dHMvVHJhaW5lckxheW91dC9Bc3luY1RyYWluZXJMYXlvdXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBcHBSb3V0ZXJQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgQXBwUm91dGVyID0gKHByb3BzOiBBcHBSb3V0ZXJQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXN5bmNUcmFpbmVyTGF5b3V0fSBleGFjdCAvPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICk7XG59IiwiZXhwb3J0IGNvbnN0XG5UT0dHTEVfUkVGRVRDSCA9IFwiVE9HR0xFX1JFRkVUQ0hcIixcblNFVF9MRVhJQ09OU19EQVRBID0gXCJTRVRfTEVYSUNPTlNfREFUQVwiLFxuU0VUX0VOVElUSUVTX0RBVEEgPSBcIlNFVF9FTlRJVElFU19EQVRBXCIsXG5TRVRfTEVYSUNPTlNfU0VBUkNIID0gXCJTRVRfTEVYSUNPTlNfU0VBUkNIXCIsXG5UT0dHTEVfTU9ERUxfQ09ORklSTSA9IFwiVE9HR0xFX01PREVMX0NPTkZJUk1cIixcblRPR0dMRV9PUFRJT05TX0VYQUNUX01BVENIID0gXCJUT0dHTEVfT1BUSU9OU19FWEFDVF9NQVRDSFwiOyIsImV4cG9ydCBjb25zdFxuVE9HR0xFX01PREVMX0VOVElUWSA9IFwiVE9HR0xFX01PREVMX0VOVElUWVwiLFxuU0VUX0VOVElUWV9NT0RBTF9EQVRBID0gXCJTRVRfRU5USVRZX01PREFMX0RBVEFcIixcblRPR0dMRV9FTlRJVFlfTU9EQUxfUkVGRVRDSCA9IFwiVE9HR0xFX0VOVElUWV9NT0RBTF9SRUZFVENIXCIsXG5TRVRfRU5USVRZX01PREFMX0lOUFVUID0gXCJTRVRfRU5USVRZX01PREFMX0lOUFVUXCI7IiwiZXhwb3J0IGNvbnN0XG5UT0dHTEVfTU9ERUxfUEVFSyA9IFwiVE9HR0xFX01PREVMX1BFRUtcIixcblNFVF9QRUVLX01PREFMX0RBVEEgPSBcIlNFVF9QRUVLX01PREFMX0RBVEFcIjsiLCJpbXBvcnQgeyB0eXBlIH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgKiBhcyBBIGZyb20gXCJAcmVkdXgvYWN0aW9ucy9sZXhpY29uQWN0aW9uc1wiO1xuaW1wb3J0IHVzZVJlZHVjZXJzIGZyb20gXCJAdXRpbHMvdXNlUmVkdWNlclwiO1xuXG5jb25zdFxuaW5pdCA9IHtcbiAgICByZWZldGNoOiBmYWxzZSxcbiAgICBsZXhpY29uczogW10sXG4gICAgZW50aXRpZXM6IFtdLFxuICAgIHNlYXJjaDogXCJcIixcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGV4YWN0TWF0Y2g6IGZhbHNlXG4gICAgfSxcbiAgICBtb2RlbENvbmZpcm06IHtcbiAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIGxleGljb246IG51bGxcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVkdWNlcnMoaW5pdCwge1xuICAgIFtBLlRPR0dMRV9SRUZFVENIXTogKHN0YXRlLCB7IHJlZmV0Y2g9bnVsbCB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHJlZmV0Y2g6IHJlZmV0Y2ggfHwgIXN0YXRlLnJlZmV0Y2ggfTtcbiAgICB9LFxuICAgIFtBLlNFVF9MRVhJQ09OU19EQVRBXTogKHN0YXRlLCB7IHR5cGVuYW1lLCBwYXlsb2FkIH0pID0+IHtcbiAgICAgICAgbGV0IGxleGljb25zID0gcGF5bG9hZCB8fCBbXTtcblxuICAgICAgICBpZiAodHlwZShwYXlsb2FkKSA9PT0gXCJPYmplY3RcIilcbiAgICAgICAgICAgIGxleGljb25zID0gcGF5bG9hZFt0eXBlbmFtZV0uZGF0YSB8fCBbXTtcblxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBsZXhpY29ucyB9O1xuICAgIH0sXG4gICAgW0EuU0VUX0VOVElUSUVTX0RBVEFdOiAoc3RhdGUsIHsgdHlwZW5hbWUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBsZXQgZW50aXRpZXMgPSBwYXlsb2FkIHx8IFtdO1xuXG4gICAgICAgIGlmICh0eXBlKHBheWxvYWQpID09PSBcIk9iamVjdFwiKVxuICAgICAgICAgICAgZW50aXRpZXMgPSBwYXlsb2FkW3R5cGVuYW1lXS5kYXRhIHx8IFtdO1xuXG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVudGl0aWVzIH07XG4gICAgfSxcbiAgICBbQS5TRVRfTEVYSUNPTlNfU0VBUkNIXTogKHN0YXRlLCB7IHNlYXJjaCB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIHNlYXJjaCB9O1xuICAgIH0sXG4gICAgW0EuVE9HR0xFX01PREVMX0NPTkZJUk1dOiAoc3RhdGUsIHsgc2hvdz1udWxsLCBsZXhpY29uIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgbW9kZWxDb25maXJtOiB7Li4uc3RhdGUubW9kZWxDb25maXJtLFxuICAgICAgICAgICAgc2hvdzogc2hvdyB8fCAhc3RhdGUubW9kZWxDb25maXJtLnNob3csXG4gICAgICAgICAgICBsZXhpY29uXG4gICAgICAgIH19O1xuICAgIH0sXG4gICAgW0EuVE9HR0xFX09QVElPTlNfRVhBQ1RfTUFUQ0hdOiBzdGF0ZSA9PiB7XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIG9wdGlvbnM6IHsuLi5zdGF0ZS5vcHRpb25zLFxuICAgICAgICAgICAgZXhhY3RNYXRjaDogIXN0YXRlLm9wdGlvbnMuZXhhY3RNYXRjaFxuICAgICAgICB9fTtcbiAgICB9LFxufSk7IiwiaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0ICogYXMgQSBmcm9tIFwiQHJlZHV4L2FjdGlvbnMvbW9kYWxFbnRpdHlBY3Rpb25zXCI7XG5pbXBvcnQgdXNlUmVkdWNlcnMgZnJvbSBcIkB1dGlscy91c2VSZWR1Y2VyXCI7XG5cbmNvbnN0IGluaXQgPSB7XG4gICAgcmVmZXRjaDogZmFsc2UsXG4gICAgc2hvdzogZmFsc2UsXG4gICAgbGV4aWNvbjogbnVsbCxcbiAgICBzZWFyY2g6IG51bGwsXG4gICAgZGF0YTogbnVsbCxcbiAgICBlbnRpdHk6IFwiXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVkdWNlcnMoaW5pdCwge1xuICAgIFtBLlRPR0dMRV9NT0RFTF9FTlRJVFldOiAoc3RhdGUsIHsgc2hvdz1udWxsLCBsZXhpY29uPW51bGwsIHNlYXJjaD1udWxsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSxcbiAgICAgICAgICAgIHNob3c6IHNob3cgfHwgIXN0YXRlLnNob3csXG4gICAgICAgICAgICBsZXhpY29uLFxuICAgICAgICAgICAgc2VhcmNoXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBbQS5TRVRfRU5USVRZX01PREFMX0RBVEFdOiAoc3RhdGUsIHsgdHlwZW5hbWUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHBheWxvYWQgfHwgbnVsbDtcblxuICAgICAgICBpZiAodHlwZShwYXlsb2FkKSA9PT0gXCJPYmplY3RcIilcbiAgICAgICAgICAgIGRhdGEgPSBwYXlsb2FkW3R5cGVuYW1lXS5kYXRhIHx8IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgZGF0YSB9O1xuICAgIH0sXG4gICAgW0EuVE9HR0xFX0VOVElUWV9NT0RBTF9SRUZFVENIXTogKHN0YXRlLCB7IHJlZmV0Y2g9bnVsbCB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsXG4gICAgICAgICAgICByZWZldGNoOiByZWZldGNoIHx8ICFzdGF0ZS5yZWZldGNoXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBbQS5TRVRfRU5USVRZX01PREFMX0lOUFVUXTogKHN0YXRlLCB7IGVudGl0eSB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsIGVudGl0eSB9O1xuICAgIH1cbn0pOyIsImltcG9ydCB7IHR5cGUgfSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCAqIGFzIEEgZnJvbSBcIkByZWR1eC9hY3Rpb25zL21vZGFsUGVla0FjdGlvbnNcIjtcbmltcG9ydCB1c2VSZWR1Y2VycyBmcm9tIFwiQHV0aWxzL3VzZVJlZHVjZXJcIjtcblxuY29uc3QgaW5pdCA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICBsZXhpY29uOiBudWxsLFxuICAgIGRhdGE6IG51bGxcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlUmVkdWNlcnMoaW5pdCwge1xuICAgIFtBLlRPR0dMRV9NT0RFTF9QRUVLXTogKHN0YXRlLCB7IHNob3c9bnVsbCwgbGV4aWNvbiB9KSA9PiB7XG4gICAgICAgIHJldHVybiB7Li4uc3RhdGUsXG4gICAgICAgICAgICBzaG93OiBzaG93IHx8ICFzdGF0ZS5zaG93LFxuICAgICAgICAgICAgbGV4aWNvblxuICAgICAgICB9O1xuICAgIH0sXG4gICAgW0EuU0VUX1BFRUtfTU9EQUxfREFUQV06IChzdGF0ZSwgeyB0eXBlbmFtZSwgcGF5bG9hZCB9KSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gcGF5bG9hZCB8fCBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlKHBheWxvYWQpID09PSBcIk9iamVjdFwiKVxuICAgICAgICAgICAgZGF0YSA9IHBheWxvYWRbdHlwZW5hbWVdLmRhdGEgfHwgbnVsbDtcblxuICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBkYXRhIH07XG4gICAgfSxcbn0pOyIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5pbXBvcnQgbGV4aWNvbnMgZnJvbSBcIi4vcmVkdWNlcnMvbGV4aWNvblJlZHVjZXJzXCI7XG5pbXBvcnQgbW9kYWxFbnRpdHkgZnJvbSBcIi4vcmVkdWNlcnMvbW9kYWxFbnRpdHlSZWR1Y2Vyc1wiO1xuaW1wb3J0IG1vZGFsUGVlayBmcm9tIFwiLi9yZWR1Y2Vycy9tb2RlbFBlZWtSZWR1Y2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdG9yZShcbiAgICBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICBsZXhpY29ucyxcbiAgICAgICAgbW9kYWxFbnRpdHksXG4gICAgICAgIG1vZGFsUGVla1xuICAgIH0pLFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgICAgY3JlYXRlTG9nZ2VyKClcbiAgICApXG4pOyIsImV4cG9ydCBkZWZhdWx0IChpbml0LCBjb25maWcpID0+IChzdGF0ZT1pbml0LCBhY3Rpb24pID0+XG4gICAgY29uZmlnICE9IG51bGwgJiYgY29uZmlnLmhhc093blByb3BlcnR5KGFjdGlvbi50eXBlKVxuICAgICAgICA/IGNvbmZpZ1thY3Rpb24udHlwZV0oc3RhdGUsIGFjdGlvbilcbiAgICAgICAgOiB7Li4uc3RhdGV9OyJdLCJzb3VyY2VSb290IjoiIn0=