(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/assets/ai-icons-64.png":
/*!************************************!*\
  !*** ./src/assets/ai-icons-64.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/06cdf6261beab83af2bd39d7e74b48eb.png");

/***/ }),

/***/ "./src/assets/biggs-logo-small.jpg":
/*!*****************************************!*\
  !*** ./src/assets/biggs-logo-small.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("assets/b52c010aeb874d5ac242d8e8fd1d5f41.jpg");

/***/ }),

/***/ "./src/graphql/mutations.ts":
/*!**********************************!*\
  !*** ./src/graphql/mutations.ts ***!
  \**********************************/
/*! exports provided: removeLexicon, createLexicon, createEntity, updateEntityLabel, removeEntityLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLexicon", function() { return removeLexicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLexicon", function() { return createLexicon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntity", function() { return createEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityLabel", function() { return updateEntityLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityLabel", function() { return removeEntityLabel; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/.pnpm/registry.npmjs.org/apollo-boost/0.4.7_graphql@15.0.0/node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        mutation lexiconRemoveOneEntity(\n            $_id: ID!,\n            $_entity: ID!\n        ) {\n            lexiconRemoveOneEntity(\n                _id: $_id,\n                _entity: $_entity\n            ) {\n                code\n                errors\n                data {\n                    _id\n                    input\n                    entities {\n                        _id\n                        label\n                        start\n                        stop\n                    }\n                }\n            }\n        }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        mutation lexiconUpdateOneEntity(\n            $_id: ID!,\n            $_entity: ID!,\n            $entity: MutationLexiconEntity!\n        ) {\n            lexiconUpdateOneEntity(\n                _id: $_id,\n                _entity: $_entity,\n                entity: $entity\n            ) {\n                code\n                errors\n                data {\n                    _id\n                    input\n                    entities {\n                        _id\n                        label\n                        start\n                        stop\n                    }\n                }\n            }\n        }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        mutation lexiconCreateOneEntity(\n            $_id: ID!,\n            $entity: MutationLexiconEntity!\n        ) {\n            lexiconCreateOneEntity(\n                _id: $_id,\n                entity: $entity\n            ) {\n                code\n                errors\n            }\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        mutation lexiconCreateOne($input: String!) {\n            lexiconCreateOne(input: $input) {\n                code\n                errors\n            }\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        mutation lexiconRemoveOne($_id: ID!) {\n            lexiconRemoveOne(_id: $_id) {\n                code\n                errors\n            }\n        }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var removeLexicon = {
  typename: "lexiconRemoveOne",
  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject())
},
    createLexicon = {
  typename: "lexiconCreateOne",
  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2())
},
    createEntity = {
  typename: "lexiconCreateOneEntity",
  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3())
},
    updateEntityLabel = {
  typename: "lexiconUpdateOneEntity",
  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4())
},
    removeEntityLabel = {
  typename: "lexiconRemoveOneEntity",
  mutation: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5())
};

/***/ }),

/***/ "./src/graphql/queries.ts":
/*!********************************!*\
  !*** ./src/graphql/queries.ts ***!
  \********************************/
/*! exports provided: topLexicons, topLexiconsSearch, topLexiconsSearchExactMatch, entities, getLexiconById, getLexiconByInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topLexicons", function() { return topLexicons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topLexiconsSearch", function() { return topLexiconsSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topLexiconsSearchExactMatch", function() { return topLexiconsSearchExactMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entities", function() { return entities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLexiconById", function() { return getLexiconById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLexiconByInput", function() { return getLexiconByInput; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/.pnpm/registry.npmjs.org/apollo-boost/0.4.7_graphql@15.0.0/node_modules/apollo-boost/lib/bundle.esm.js");


function _templateObject6() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        query getLexiconById($input: String!) {\n            lexiconByInput(\n                input: $input,\n            ) {\n                code\n                errors\n                data {\n                    _id\n                    created\n                    modified\n                    input\n                    entities {\n                        _id\n                        created\n                        modified\n                        label\n                        start\n                        stop\n                    }\n                }\n            }\n        }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        query getLexiconById($_id: ID!) {\n            lexiconById(\n                _id: $_id,\n            ) {\n                code\n                errors\n                data {\n                    _id\n                    created\n                    modified\n                    input\n                    entities {\n                        _id\n                        created\n                        modified\n                        label\n                        start\n                        stop\n                    }\n                }\n            }\n        }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["{\n        entities {\n            code\n            errors\n            data {\n                _id\n                label\n                backgroundColor\n                accentColor\n            }\n        }\n    }"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        query topLexiconsSearchExactMatch($input: String!) {\n            lexiconSearchByInput(\n                input: $input,\n                options: {\n                    exactMatch: true\n                }\n            ) {\n                code\n                errors\n                data {\n                    _id\n                    created\n                    modified\n                    input\n                    entities {\n                        _id\n                        created\n                        modified\n                        label\n                        start\n                        stop\n                    }\n                }\n            }\n        }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n        query topLexiconSearch($input: String!) {\n            lexiconSearchByInput(\n                input: $input,\n                options: {\n                    exactMatch: false\n                }\n            ) {\n                code\n                errors\n                data {\n                    _id\n                    created\n                    modified\n                    input\n                    entities {\n                        _id\n                        created\n                        modified\n                        label\n                        start\n                        stop\n                    }\n                }\n            }\n        }\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["{\n        lexiconSearchByInput(input: \"*\") {\n            code\n            errors\n            data {\n                _id\n                created\n                modified\n                input\n                entities {\n                    _id\n                    created\n                    modified\n                    label\n                    start\n                    stop\n                }\n            }\n        }\n    }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var topLexicons = {
  typename: "lexiconSearchByInput",
  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject())
},
    topLexiconsSearch = {
  typename: "lexiconSearchByInput",
  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2())
},
    topLexiconsSearchExactMatch = {
  typename: "lexiconSearchByInput",
  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject3())
},
    entities = {
  typename: "entities",
  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject4())
},
    getLexiconById = {
  typename: "lexiconById",
  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject5())
},
    getLexiconByInput = {
  typename: "lexiconByInput",
  query: Object(apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject6())
};

/***/ }),

/***/ "./src/react/components/ConfirmationModal/ConfirmModel.jss.ts":
/*!********************************************************************!*\
  !*** ./src/react/components/ConfirmationModal/ConfirmModel.jss.ts ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    fontWeight: "bold",
    width: "100%"
  }
}));

/***/ }),

/***/ "./src/react/components/ConfirmationModal/ConfirmationModal.tsx":
/*!**********************************************************************!*\
  !*** ./src/react/components/ConfirmationModal/ConfirmationModal.tsx ***!
  \**********************************************************************/
/*! exports provided: ConfirmationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationModal", function() { return ConfirmationModal; });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConfirmModel_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfirmModel.jss */ "./src/react/components/ConfirmationModal/ConfirmModel.jss.ts");




var ConfirmationModal = function ConfirmationModal(_ref) {
  var title = _ref.title,
      _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      message = _ref.message,
      _onOk = _ref.onOk,
      _onCancel = _ref.onCancel;
  var classes = Object(_ConfirmModel_jss__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    centered: true,
    title: title || null,
    visible: visible,
    closable: false,
    okText: "Confirm",
    onOk: function onOk() {
      if (_onOk != null) _onOk();
    },
    onCancel: function onCancel() {
      if (_onCancel != null) _onCancel();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.container
  }, message)));
};

/***/ }),

/***/ "./src/react/components/EntityInput/EntityInput.tsx":
/*!**********************************************************!*\
  !*** ./src/react/components/EntityInput/EntityInput.tsx ***!
  \**********************************************************/
/*! exports provided: EntityInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityInput", function() { return EntityInput; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/.pnpm/registry.npmjs.org/ramda/0.27.0/node_modules/ramda/es/index.js");
/* harmony import */ var _containers_Entity_Entity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @containers/Entity/Entity */ "./src/react/containers/Entity/Entity.tsx");




var EntityInput = function EntityInput(_ref) {
  var _id = _ref._id,
      input = _ref.input,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? [] : _ref$entities,
      _ref$disable = _ref.disable,
      disable = _ref$disable === void 0 ? false : _ref$disable;
  entities = entities.sort(function (a, b) {
    return a.start - b.start;
  });
  var result = [];
  var diff = 0;
  entities.forEach(function (_ref2) {
    var _id = _ref2._id,
        label = _ref2.label,
        start = _ref2.start,
        stop = _ref2.stop;
    var hasEntity = start - diff;
    if (hasEntity > 0) result.push(input.substring(diff, start));
    result.push([{
      text: input.substring(start, stop),
      _id: _id,
      label: label,
      start: start,
      stop: stop
    }]);
    diff = stop;
  });
  if (input.length - 1 - diff > 0) result.push(input.substring(diff, input.length));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, result.map(function (entity, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: idx
    }, Object(ramda__WEBPACK_IMPORTED_MODULE_2__["type"])(entity) !== "Array" ? entity : function (_ref3) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 1),
          entity = _ref4[0];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_Entity_Entity__WEBPACK_IMPORTED_MODULE_3__["Entity"], {
        _id: _id,
        entity: entity,
        disable: disable
      });
    }(entity));
  }));
};

/***/ }),

/***/ "./src/react/components/EntityManager/EntityManager.jss.ts":
/*!*****************************************************************!*\
  !*** ./src/react/components/EntityManager/EntityManager.jss.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  inputTitle: {
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
    color: "rgb(170, 170, 170)",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  entityTable: {
    width: "100%",
    marginTop: "0.5rem",
    maxHeight: "500px",
    overflow: "auto"
  },
  tableTitle: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "rgb(170, 170, 170)"
  },
  entityInput: {
    width: "100%",
    marginTop: "1.5rem"
  },
  entityInputTitle: {
    fontWeight: "bold",
    color: "rgb(170, 170, 170)"
  },
  entityInputControls: {
    width: "100%",
    marginTop: "0.5rem",
    display: "flex",
    justifyContent: "space-between"
  }
}));

/***/ }),

/***/ "./src/react/components/EntityManager/EntityManager.tsx":
/*!**************************************************************!*\
  !*** ./src/react/components/EntityManager/EntityManager.tsx ***!
  \**************************************************************/
/*! exports provided: EntityManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityManager", function() { return EntityManager; });
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/table/style/index.js");
/* harmony import */ var antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _EntityManager_jss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./EntityManager.jss */ "./src/react/components/EntityManager/EntityManager.jss.ts");
/* harmony import */ var _loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @loaders/AppLoader/AppLoader */ "./src/react/loaders/AppLoader/AppLoader.tsx");
/* harmony import */ var _containers_Entity_Entity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @containers/Entity/Entity */ "./src/react/containers/Entity/Entity.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/registry.npmjs.org/@ant-design/icons/4.1.0_react-dom@16.13.1+react@16.13.1/node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/.pnpm/registry.npmjs.org/@apollo/react-hooks/3.1.5_23e6eb72a57148097d5f5c5daf91cd18/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @graphql/mutations */ "./src/graphql/mutations.ts");
/* harmony import */ var _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");
/* harmony import */ var _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @actions/modalEntityActions */ "./src/redux/actions/modalEntityActions.ts");





















var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a.Option;
var EntityManager = function EntityManager(_ref) {
  var data = _ref.data,
      _ref$entity = _ref.entity,
      entity = _ref$entity === void 0 ? "" : _ref$entity,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? [] : _ref$entities;

  var allEntities = entities,
      classes = Object(_EntityManager_jss__WEBPACK_IMPORTED_MODULE_12__["default"])(),
      dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useDispatch"])(),
      add = _graphql_mutations__WEBPACK_IMPORTED_MODULE_18__["createEntity"],
      update = _graphql_mutations__WEBPACK_IMPORTED_MODULE_18__["updateEntityLabel"],
      remove = _graphql_mutations__WEBPACK_IMPORTED_MODULE_18__["removeEntityLabel"],
      _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__["useMutation"])(add.mutation),
      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_useMutation, 2),
      addLabel = _useMutation2[0],
      addStatus = _useMutation2[1],
      _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__["useMutation"])(update.mutation),
      _useMutation4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_useMutation3, 2),
      updateLabel = _useMutation4[0],
      updateStatus = _useMutation4[1],
      _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_17__["useMutation"])(remove.mutation),
      _useMutation6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_8___default()(_useMutation5, 2),
      removeLabel = _useMutation6[0],
      removeStatus = _useMutation6[1];

  var selectedLabel = allEntities[0].label;
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    if (addStatus.data != null) {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_19__["TOGGLE_REFETCH"],
        refetch: true
      });
      dispatch({
        type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_20__["TOGGLE_ENTITY_MODAL_REFETCH"],
        refetch: true
      });
    }
  }, [addStatus.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    if (updateStatus.data != null) {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_19__["TOGGLE_REFETCH"],
        refetch: true
      });
      dispatch({
        type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_20__["TOGGLE_ENTITY_MODAL_REFETCH"],
        refetch: true
      });
    }
  }, [updateStatus.data]);
  Object(react__WEBPACK_IMPORTED_MODULE_11__["useEffect"])(function () {
    if (removeStatus.data != null) {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_19__["TOGGLE_REFETCH"],
        refetch: true
      });
      dispatch({
        type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_20__["TOGGLE_ENTITY_MODAL_REFETCH"],
        refetch: true
      });
    }
  }, [removeStatus.data]);
  return data == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_13__["AppLoader"], null))) : function () {
    var _id = data._id,
        input = data.input,
        entities = data.entities,
        hasEntity = function hasEntity() {
      if (!input.includes(entity)) return false;else {
        var start = input.indexOf(entity),
            stop = start + entity.length;
        return entities.find(function (e) {
          return e.start === start && e.stop === stop;
        }) != null;
      }
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: classes.container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: classes.inputTitle
    }, "Training Input"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", null, input), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: classes.entityInput
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: classes.entityInputTitle
    }, "Add / Update an entity:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_7___default.a, {
      placeholder: "Type in an entity...",
      allowClear: true,
      value: entity,
      onChange: function onChange(e) {
        dispatch({
          type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_20__["SET_ENTITY_MODAL_INPUT"],
          entity: e.target.value
        });
      },
      addonAfter: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_10___default.a, {
        defaultValue: selectedLabel,
        onChange: function onChange(value) {
          selectedLabel = value;
        }
      }, allEntities.map(function (_ref2, idx) {
        var label = _ref2.label;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Option, {
          key: idx,
          value: label
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_containers_Entity_Entity__WEBPACK_IMPORTED_MODULE_14__["Entity"], {
          disable: true,
          entity: {
            label: label,
            text: label
          }
        }));
      }))
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: classes.entityInputControls
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: true,
      size: "small",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["PlusOutlined"], null),
      disabled: entity.length <= 1 ? true : hasEntity() ? true : !input.includes(entity),
      style: {
        marginRight: "0.5rem"
      },
      onClick: function onClick() {
        var start = input.indexOf(entity),
            stop = start + (entity === null || entity === void 0 ? void 0 : entity.length);
        dispatch({
          type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_20__["SET_ENTITY_MODAL_INPUT"],
          entity: ""
        });
        addLabel({
          variables: {
            _id: _id,
            entity: {
              label: selectedLabel,
              start: start,
              stop: stop
            }
          }
        });
        selectedLabel = allEntities[0].label;
      }
    }, "Add"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
      block: true,
      size: "small",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["UploadOutlined"], null),
      disabled: entity.length <= 1 ? true : !hasEntity(),
      onClick: function onClick() {
        var start = input.indexOf(entity),
            stop = start + (entity === null || entity === void 0 ? void 0 : entity.length),
            existingEntity = entities.find(function (e) {
          return e.start === start && e.stop === stop;
        });

        if (existingEntity != null) {
          dispatch({
            type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_20__["SET_ENTITY_MODAL_INPUT"],
            entity: ""
          });
          updateLabel({
            variables: {
              _id: _id,
              _entity: existingEntity._id,
              entity: {
                label: selectedLabel,
                start: existingEntity.start,
                stop: existingEntity.stop
              }
            }
          });
          selectedLabel = allEntities[0].label;
        }
      }
    }, "Update")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        amrgin: "0"
      }
    }, "Entities Table"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
      className: classes.entityTable
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_table__WEBPACK_IMPORTED_MODULE_1___default.a, {
      scroll: {
        y: 240
      },
      size: "small",
      pagination: false,
      dataSource: entities.map(function (_ref3, idx) {
        var _id = _ref3._id,
            label = _ref3.label,
            start = _ref3.start,
            stop = _ref3.stop;
        return {
          key: idx,
          text: input.substring(start, stop),
          label: label,
          _id: _id
        };
      }),
      columns: [{
        title: "Label",
        dataIndex: "label",
        render: function render(label) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_containers_Entity_Entity__WEBPACK_IMPORTED_MODULE_14__["Entity"], {
            disable: true,
            entity: {
              label: label,
              text: label
            }
          });
        }
      }, {
        title: "Entity",
        dataIndex: "text",
        render: function render(text) {
          return "\"".concat(text, "\"");
        }
      }, {
        key: "actions",
        title: "Action(s)",
        render: function render(record) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
            block: true,
            danger: true,
            size: "small",
            shape: "round",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["DeleteOutlined"], null),
            onClick: function onClick() {
              removeLabel({
                variables: {
                  _id: _id,
                  _entity: record._id
                }
              });
            }
          }, "Delete");
        }
      }]
    }))));
  }();
};

/***/ }),

/***/ "./src/react/components/SearchBar/SearchBar.jss.ts":
/*!*********************************************************!*\
  !*** ./src/react/components/SearchBar/SearchBar.jss.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  text: {
    color: "rgb(150, 150, 150)",
    fontStyle: "italic"
  },
  colorCode: {
    margin: "0.4rem 0"
  },
  info: {
    color: "rgb(150, 150, 150)",
    fontStyle: "italic",
    fontSize: "0.9rem"
  }
}));

/***/ }),

/***/ "./src/react/components/SearchBar/SearchBar.tsx":
/*!******************************************************!*\
  !*** ./src/react/components/SearchBar/SearchBar.tsx ***!
  \******************************************************/
/*! exports provided: SearchBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBar", function() { return SearchBar; });
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/checkbox/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/checkbox/style/index.js");
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/checkbox */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/checkbox/index.js");
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/popover/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/popover/style/index.js");
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _SearchBar_jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchBar.jss */ "./src/react/components/SearchBar/SearchBar.jss.ts");
/* harmony import */ var _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");
/* harmony import */ var _containers_Entity_Entity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @containers/Entity/Entity */ "./src/react/containers/Entity/Entity.tsx");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/registry.npmjs.org/@ant-design/icons/4.1.0_react-dom@16.13.1+react@16.13.1/node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");












var Search = antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a.Search;
var SearchBar = function SearchBar(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$exactMatch = _ref.exactMatch,
      exactMatch = _ref$exactMatch === void 0 ? false : _ref$exactMatch,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? "" : _ref$search,
      _ref$entities = _ref.entities,
      entities = _ref$entities === void 0 ? [] : _ref$entities;
  var classes = Object(_SearchBar_jss__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      width: "100%",
      marginBottom: "0.5rem",
      cursor: "default"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default.a, {
    trigger: "click",
    content: function content() {
      return entities.map(function (_ref2, idx) {
        var label = _ref2.label;
        var margin = "8px 0px";
        if (idx === 0) margin = "0px 0px 8px 0px";else if (idx === entities.length - 1) margin = "8px 0px 0px 0px";
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          key: idx,
          style: {
            margin: margin
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_containers_Entity_Entity__WEBPACK_IMPORTED_MODULE_9__["Entity"], {
          disable: true,
          entity: {
            label: label,
            text: label
          }
        }));
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: classes.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["InfoCircleOutlined"], null), " Color codes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Search, {
    allowClear: true,
    enterButton: true,
    loading: loading,
    value: search,
    placeholder: "Search for database input(s)...",
    onPressEnter: function onPressEnter(e) {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["SET_LEXICONS_SEARCH"],
        search: e.target.value
      });
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_REFETCH"]
      });
    },
    onSearch: function onSearch(search) {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["SET_LEXICONS_SEARCH"],
        search: search
      });
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_REFETCH"]
      });
    },
    onChange: function onChange(e) {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["SET_LEXICONS_SEARCH"],
        search: e.target.value
      });
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_REFETCH"]
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      width: "100%",
      marginTop: "0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default.a, {
    checked: exactMatch,
    onChange: function onChange() {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_OPTIONS_EXACT_MATCH"]
      });
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_REFETCH"]
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: classes.text
  }, "Exact match"))));
};

/***/ }),

/***/ "./src/react/components/SearchResults/SearchResults.jss.ts":
/*!*****************************************************************!*\
  !*** ./src/react/components/SearchResults/SearchResults.jss.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  container: {
    marginTop: "0.5rem"
  },
  content: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: "1.1rem",
    color: "rgb(180, 180, 180)",
    cursor: "default"
  },
  icon: {
    textAlign: "center",
    fontSize: "2rem",
    color: "rgb(180, 180, 180)"
  },
  description: {
    fontSize: "0.7rem",
    color: "rgb(150, 150, 150)",
    cursor: "default"
  },
  title: {
    fontWeight: "bold",
    cursor: "default",
    overflow: "auto"
  },
  inputContainer: {
    margin: "4px 0px",
    padding: "10px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "4px"
  },
  badge: {
    width: "95%"
  }
}));

/***/ }),

/***/ "./src/react/components/SearchResults/SearchResults.tsx":
/*!**************************************************************!*\
  !*** ./src/react/components/SearchResults/SearchResults.tsx ***!
  \**************************************************************/
/*! exports provided: SearchResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResults", function() { return SearchResults; });
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/list/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/list/style/index.js");
/* harmony import */ var antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/list */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/list/index.js");
/* harmony import */ var antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_list__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/badge/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/badge/style/index.js");
/* harmony import */ var antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/badge */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/badge/index.js");
/* harmony import */ var antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/skeleton/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/skeleton/style/index.js");
/* harmony import */ var antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/skeleton */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/skeleton/index.js");
/* harmony import */ var antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/registry.npmjs.org/@ant-design/icons/4.1.0_react-dom@16.13.1+react@16.13.1/node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @loaders/AppLoader/AppLoader */ "./src/react/loaders/AppLoader/AppLoader.tsx");
/* harmony import */ var _components_ConfirmationModal_ConfirmationModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/ConfirmationModal/ConfirmationModal */ "./src/react/components/ConfirmationModal/ConfirmationModal.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");
/* harmony import */ var _SearchResults_jss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SearchResults.jss */ "./src/react/components/SearchResults/SearchResults.jss.ts");
/* harmony import */ var _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");
/* harmony import */ var _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @actions/modalEntityActions */ "./src/redux/actions/modalEntityActions.ts");
/* harmony import */ var _actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @actions/modalPeekActions */ "./src/redux/actions/modalPeekActions.ts");






















var getLexiconId = function getLexiconId(id) {
  var _document$getElementB;

  return (_document$getElementB = document.getElementById(id)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.getAttribute("id");
};

var SearchResults = function SearchResults(_ref) {
  var _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$search = _ref.search,
      search = _ref$search === void 0 ? "" : _ref$search,
      _ref$showConfirm = _ref.showConfirm,
      showConfirm = _ref$showConfirm === void 0 ? false : _ref$showConfirm,
      removeLexiconId = _ref.removeLexiconId,
      _ref$lexicons = _ref.lexicons,
      lexicons = _ref$lexicons === void 0 ? [] : _ref$lexicons,
      removeLexicon = _ref.removeLexicon,
      addLexicon = _ref.addLexicon,
      removalMsgKey = _ref.removalMsgKey,
      addMsgKey = _ref.addMsgKey;
  var classes = Object(_SearchResults_jss__WEBPACK_IMPORTED_MODULE_17__["default"])(),
      dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_16__["useDispatch"])();
  return loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_14__["AppLoader"], null))) : lexicons.length === 0 ? search.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: classes.icon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["FrownOutlined"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: classes.content
  }, "No records")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_9___default.a, {
    block: true,
    type: "primary",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["PlusOutlined"], null),
    onClick: function onClick() {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default.a.loading({
        content: "Adding data...",
        key: addMsgKey
      });

      addLexicon({
        variables: {
          input: search
        }
      });
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_18__["TOGGLE_REFETCH"],
        refetch: true
      });
      dispatch({
        type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_19__["TOGGLE_MODEL_ENTITY"],
        search: search,
        show: true
      });
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_18__["SET_LEXICONS_SEARCH"],
        search: ""
      });
    }
  }, "Add input")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_ConfirmationModal_ConfirmationModal__WEBPACK_IMPORTED_MODULE_15__["ConfirmationModal"], {
    visible: showConfirm,
    title: null,
    message: "Are you sure?",
    onOk: function onOk() {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_11___default.a.loading({
        content: "Removing data...",
        key: removalMsgKey
      });

      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_18__["TOGGLE_MODEL_CONFIRM"],
        lexicon: null
      });
      removeLexicon({
        variables: {
          _id: removeLexiconId
        }
      });
    },
    onCancel: function onCancel() {
      dispatch({
        type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_18__["TOGGLE_MODEL_CONFIRM"],
        lexicon: null
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a, {
    itemLayout: "horizontal",
    loading: loading,
    dataSource: lexicons,
    renderItem: function renderItem(_ref2) {
      var _id = _ref2._id,
          input = _ref2.input,
          entities = _ref2.entities;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        id: _id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_list__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_badge__WEBPACK_IMPORTED_MODULE_3___default.a, {
        showZero: true,
        count: entities.length,
        className: classes.badge,
        title: "Number of entities",
        style: {
          backgroundColor: entities.length > 0 ? "rgb(82, 191, 28)" : "rgb(180, 180, 180)"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default.a, {
        style: {
          width: "100%"
        },
        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["EditOutlined"], {
          key: "edit",
          onClick: function onClick() {
            dispatch({
              type: _actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_19__["TOGGLE_MODEL_ENTITY"],
              lexicon: getLexiconId(_id),
              show: true
            });
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["DeleteOutlined"], {
          key: "remove",
          onClick: function onClick() {
            dispatch({
              type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_18__["TOGGLE_MODEL_CONFIRM"],
              lexicon: getLexiconId(_id),
              show: true
            });
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["EyeOutlined"], {
          key: "peek",
          onClick: function onClick() {
            dispatch({
              type: _actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_20__["TOGGLE_MODEL_PEEK"],
              lexicon: getLexiconId(_id),
              show: true
            });
          }
        })]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_skeleton__WEBPACK_IMPORTED_MODULE_5___default.a, {
        title: false,
        loading: loading,
        active: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(antd_lib_card__WEBPACK_IMPORTED_MODULE_7___default.a.Meta, {
        title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: classes.title
        }, input),
        description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          className: classes.description
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("b", null, "ID: "), _id)
      }))))));
    }
  })));
};

/***/ }),

/***/ "./src/react/components/TrainerTitle/TrainerTitle.jss.ts":
/*!***************************************************************!*\
  !*** ./src/react/components/TrainerTitle/TrainerTitle.jss.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  trainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0.5rem"
  },
  logo: {
    width: "7rem"
  },
  aiImg: {
    width: "2.4rem",
    marginRight: "0.5rem"
  },
  aiTitle: {
    fontSize: "1.4rem"
  }
}));

/***/ }),

/***/ "./src/react/components/TrainerTitle/TrainerTitle.tsx":
/*!************************************************************!*\
  !*** ./src/react/components/TrainerTitle/TrainerTitle.tsx ***!
  \************************************************************/
/*! exports provided: TrainerTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerTitle", function() { return TrainerTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_biggs_logo_small_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/biggs-logo-small.jpg */ "./src/assets/biggs-logo-small.jpg");
/* harmony import */ var _assets_ai_icons_64_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/ai-icons-64.png */ "./src/assets/ai-icons-64.png");
/* harmony import */ var _TrainerTitle_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrainerTitle.jss */ "./src/react/components/TrainerTitle/TrainerTitle.jss.ts");




var TrainerTitle = function TrainerTitle(props) {
  var classes = Object(_TrainerTitle_jss__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.logo,
    src: _assets_biggs_logo_small_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.trainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classes.aiImg,
    src: _assets_ai_icons_64_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.aiTitle
  }, "AI Trainer"))));
};

/***/ }),

/***/ "./src/react/containers/Entity/Entity.jss.ts":
/*!***************************************************!*\
  !*** ./src/react/containers/Entity/Entity.jss.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  entity: function entity(_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        entities = _ref2[0],
        label = _ref2[1];

    var _ref3 = entities.find(function (e) {
      return e.label === label;
    }) || {
      backgroundColor: "240,240,240",
      accentColor: "147,147,147"
    },
        backgroundColor = _ref3.backgroundColor,
        accentColor = _ref3.accentColor;

    return {
      cursor: "default",
      backgroundColor: "rgb(".concat(backgroundColor, ")"),
      borderRadius: "4px",
      padding: "2px 8px",
      borderStyle: "solid",
      borderColor: "rgb(".concat(accentColor, ")"),
      borderWidth: "1px 1px 1px 4px",
      fontWeight: "bold",
      color: "rgb(".concat(accentColor, ")")
    };
  },
  labelSelect: {
    width: "100%"
  },
  labelContainer: {
    marginBottom: "0.7rem"
  },
  popoverTitle: {
    fontStyle: "italic",
    color: "rgb(120, 120, 120)",
    fontWeight: "bold"
  }
}));

/***/ }),

/***/ "./src/react/containers/Entity/Entity.tsx":
/*!************************************************!*\
  !*** ./src/react/containers/Entity/Entity.tsx ***!
  \************************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/popover/style/index.js");
/* harmony import */ var antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/popover */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/popover/index.js");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Entity_jss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Entity.jss */ "./src/react/containers/Entity/Entity.jss.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/.pnpm/registry.npmjs.org/@apollo/react-hooks/3.1.5_23e6eb72a57148097d5f5c5daf91cd18/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/registry.npmjs.org/@ant-design/icons/4.1.0_react-dom@16.13.1+react@16.13.1/node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @graphql/mutations */ "./src/graphql/mutations.ts");
/* harmony import */ var _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");









function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a.Option;
var Entity = function Entity(_ref) {
  var _ref$disable = _ref.disable,
      disable = _ref$disable === void 0 ? false : _ref$disable,
      _id = _ref._id,
      entity = _ref.entity;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])(),
      entities = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (_ref2) {
    var lexicons = _ref2.lexicons;
    return lexicons.entities;
  }),
      classes = Object(_Entity_jss__WEBPACK_IMPORTED_MODULE_9__["default"])([entities || [], entity.label]),
      update = _graphql_mutations__WEBPACK_IMPORTED_MODULE_13__["updateEntityLabel"],
      remove = _graphql_mutations__WEBPACK_IMPORTED_MODULE_13__["removeEntityLabel"],
      _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(update.mutation),
      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useMutation, 2),
      updateLabel = _useMutation2[0],
      updateStatus = _useMutation2[1],
      _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(remove.mutation),
      _useMutation4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_5___default()(_useMutation3, 2),
      removeLabel = _useMutation4[0],
      removeStatus = _useMutation4[1];

  return disable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: classes.entity
  }, entity.text)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default.a, {
    trigger: "click",
    placement: "top",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
      className: classes.popoverTitle
    }, "Update Label"),
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: classes.labelContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
      size: "small",
      defaultValue: entity.label,
      className: classes.labelSelect,
      onChange: function onChange(value) {
        var data = _objectSpread(_objectSpread({}, entity), {}, {
          label: value
        });

        updateLabel({
          variables: {
            _id: _id,
            _entity: data._id,
            entity: {
              label: data.label,
              start: data.start,
              stop: data.stop
            }
          }
        });
        dispatch({
          type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_14__["TOGGLE_REFETCH"],
          refetch: true
        });
      }
    }, entities.map(function (_ref3, idx) {
      var label = _ref3.label;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Option, {
        key: idx,
        value: label
      }, label);
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      block: true,
      danger: true,
      size: "small",
      type: "primary",
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["DeleteOutlined"], null),
      onClick: function onClick() {
        removeLabel({
          variables: {
            _id: _id,
            _entity: entity._id
          }
        });
        dispatch({
          type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_14__["TOGGLE_REFETCH"],
          refetch: true
        });
      }
    }, "Delete")))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
    className: classes.entity
  }, entity.text)));
};

/***/ }),

/***/ "./src/react/containers/EntityManagerModal/EntityManagerModal.jss.ts":
/*!***************************************************************************!*\
  !*** ./src/react/containers/EntityManagerModal/EntityManagerModal.jss.ts ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({}));

/***/ }),

/***/ "./src/react/containers/EntityManagerModal/EntityManagerModal.tsx":
/*!************************************************************************!*\
  !*** ./src/react/containers/EntityManagerModal/EntityManagerModal.tsx ***!
  \************************************************************************/
/*! exports provided: EntityManagerModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityManagerModal", function() { return EntityManagerModal; });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EntityManagerModal_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EntityManagerModal.jss */ "./src/react/containers/EntityManagerModal/EntityManagerModal.jss.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/.pnpm/registry.npmjs.org/@apollo/react-hooks/3.1.5_23e6eb72a57148097d5f5c5daf91cd18/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/.pnpm/registry.npmjs.org/@ant-design/icons/4.1.0_react-dom@16.13.1+react@16.13.1/node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @graphql/queries */ "./src/graphql/queries.ts");
/* harmony import */ var _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @redux/actions/modalEntityActions */ "./src/redux/actions/modalEntityActions.ts");
/* harmony import */ var _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redux/actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");
/* harmony import */ var _components_EntityManager_EntityManager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/EntityManager/EntityManager */ "./src/react/components/EntityManager/EntityManager.tsx");











var EntityManagerModal = function EntityManagerModal(props) {
  var classes = Object(_EntityManagerModal_jss__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(),
      _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref) {
    var modalEntity = _ref.modalEntity;
    return modalEntity;
  }),
      refetch = _useSelector.refetch,
      show = _useSelector.show,
      lexicon = _useSelector.lexicon,
      search = _useSelector.search,
      data = _useSelector.data,
      entity = _useSelector.entity,
      _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref2) {
    var lexicons = _ref2.lexicons;
    return lexicons;
  }),
      entities = _useSelector2.entities;

  var _queries = _graphql_queries__WEBPACK_IMPORTED_MODULE_7__[lexicon != null ? "getLexiconById" : search != null ? "getLexiconByInput" : "getLexiconById"],
      typename = _queries.typename,
      query = _queries.query,
      lexiconQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(query, {
    variables: {
      _id: lexicon,
      input: search
    },
    skip: !show,
    pollInterval: show ? 500 : 0
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (refetch) {
      dispatch({
        type: _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_ENTITY_MODAL_REFETCH"],
        refetch: false
      });
      lexiconQuery.refetch();
    }
  }, [refetch]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (lexiconQuery.data != null) dispatch({
      typename: typename,
      type: _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_8__["SET_ENTITY_MODAL_DATA"],
      payload: lexiconQuery.data
    });
  }, [lexiconQuery.data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    destroyOnClose: true,
    centered: true,
    title: "Entity Manager",
    visible: show,
    footer: null,
    closeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["CloseCircleOutlined"], null),
    onCancel: function onCancel() {
      setTimeout(function () {
        dispatch({
          type: _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_9__["TOGGLE_REFETCH"],
          refetch: true
        });
        dispatch({
          type: _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_8__["TOGGLE_MODEL_ENTITY"],
          lexicon: null
        });
        dispatch({
          typename: typename,
          type: _redux_actions_modalEntityActions__WEBPACK_IMPORTED_MODULE_8__["SET_ENTITY_MODAL_DATA"],
          payload: null
        });
      }, 100);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_EntityManager_EntityManager__WEBPACK_IMPORTED_MODULE_10__["EntityManager"], {
    data: data,
    entity: entity,
    entities: entities
  })));
};

/***/ }),

/***/ "./src/react/containers/PeekModal/PeekModal.jss.ts":
/*!*********************************************************!*\
  !*** ./src/react/containers/PeekModal/PeekModal.jss.ts ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  nomenclature: {
    fontStyle: "italic",
    color: "rgb(180, 180, 180)"
  },
  id: {
    fontWeight: "bold"
  },
  input: {
    margin: "2rem 0"
  }
}));

/***/ }),

/***/ "./src/react/containers/PeekModal/PeekModal.tsx":
/*!******************************************************!*\
  !*** ./src/react/containers/PeekModal/PeekModal.tsx ***!
  \******************************************************/
/*! exports provided: PeekModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeekModal", function() { return PeekModal; });
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/modal/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/modal/style/index.js");
/* harmony import */ var antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/modal */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/modal/index.js");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @loaders/AppLoader/AppLoader */ "./src/react/loaders/AppLoader/AppLoader.tsx");
/* harmony import */ var _components_EntityInput_EntityInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/EntityInput/EntityInput */ "./src/react/components/EntityInput/EntityInput.tsx");
/* harmony import */ var _PeekModal_jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PeekModal.jss */ "./src/react/containers/PeekModal/PeekModal.jss.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/.pnpm/registry.npmjs.org/@apollo/react-hooks/3.1.5_23e6eb72a57148097d5f5c5daf91cd18/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @graphql/queries */ "./src/graphql/queries.ts");
/* harmony import */ var _redux_actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redux/actions/modalPeekActions */ "./src/redux/actions/modalPeekActions.ts");












var PeekModal = function PeekModal(props) {
  var classes = Object(_PeekModal_jss__WEBPACK_IMPORTED_MODULE_7__["default"])(),
      dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])(),
      _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (_ref) {
    var modalPeek = _ref.modalPeek;
    return modalPeek;
  }),
      show = _useSelector.show,
      lexicon = _useSelector.lexicon,
      data = _useSelector.data;

  var _queries$getLexiconBy = _graphql_queries__WEBPACK_IMPORTED_MODULE_10__["getLexiconById"],
      typename = _queries$getLexiconBy.typename,
      query = _queries$getLexiconBy.query,
      lexiconQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_9__["useQuery"])(query, {
    variables: {
      _id: lexicon
    },
    skip: !show
  });
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (lexiconQuery.data != null) dispatch({
      typename: typename,
      type: _redux_actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_11__["SET_PEEK_MODAL_DATA"],
      payload: lexiconQuery.data
    });
  }, [lexiconQuery.data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    centered: true,
    title: null,
    footer: null,
    closable: false,
    visible: show
  }, data == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_loaders_AppLoader_AppLoader__WEBPACK_IMPORTED_MODULE_5__["AppLoader"], null))) : function () {
    var _id = data._id,
        input = data.input,
        entities = data.entities;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: classes.nomenclature
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      className: classes.id
    }, "ID: "), _id), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: classes.input
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_EntityInput_EntityInput__WEBPACK_IMPORTED_MODULE_6__["EntityInput"], {
      _id: _id,
      input: input,
      entities: entities
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      block: true,
      onClick: function onClick() {
        setTimeout(function () {
          dispatch({
            type: _redux_actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_11__["TOGGLE_MODEL_PEEK"],
            lexicon: null
          });
          dispatch({
            typename: typename,
            type: _redux_actions_modalPeekActions__WEBPACK_IMPORTED_MODULE_11__["SET_PEEK_MODAL_DATA"],
            payload: null
          });
        }, 100);
      }
    }, "Ok"));
  }()));
};

/***/ }),

/***/ "./src/react/containers/layouts/SearchLayout/SearchLayout.jss.ts":
/*!***********************************************************************!*\
  !*** ./src/react/containers/layouts/SearchLayout/SearchLayout.jss.ts ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  searchBarContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  searchResultsContainer: {
    flexGrow: "1",
    overflow: "auto",

    /* for Firefox */
    minHeight: "0"
  }
}));

/***/ }),

/***/ "./src/react/containers/layouts/SearchLayout/SearchLayout.tsx":
/*!********************************************************************!*\
  !*** ./src/react/containers/layouts/SearchLayout/SearchLayout.tsx ***!
  \********************************************************************/
/*! exports provided: SearchLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLayout", function() { return SearchLayout; });
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/divider/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/divider/style/index.js");
/* harmony import */ var antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/divider */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/divider/index.js");
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/.pnpm/registry.npmjs.org/@babel/runtime/7.9.6/node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchLayout_jss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchLayout.jss */ "./src/react/containers/layouts/SearchLayout/SearchLayout.jss.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/.pnpm/registry.npmjs.org/@apollo/react-hooks/3.1.5_23e6eb72a57148097d5f5c5daf91cd18/node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/SearchBar/SearchBar */ "./src/react/components/SearchBar/SearchBar.tsx");
/* harmony import */ var _components_SearchResults_SearchResults__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/SearchResults/SearchResults */ "./src/react/components/SearchResults/SearchResults.tsx");
/* harmony import */ var _SearchNotifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SearchNotifications */ "./src/react/containers/layouts/SearchLayout/SearchNotifications.ts");
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @graphql/mutations */ "./src/graphql/mutations.ts");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @graphql/queries */ "./src/graphql/queries.ts");
/* harmony import */ var _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redux/actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");














var SearchLayout = function SearchLayout(props) {
  var classes = Object(_SearchLayout_jss__WEBPACK_IMPORTED_MODULE_4__["default"])(),
      dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(),
      _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (_ref) {
    var lexicons = _ref.lexicons;
    return lexicons;
  }),
      refetch = _useSelector.refetch,
      search = _useSelector.search,
      lexicons = _useSelector.lexicons,
      entities = _useSelector.entities,
      modelConfirm = _useSelector.modelConfirm,
      options = _useSelector.options,
      exactMatch = options.exactMatch,
      showConfirm = modelConfirm.show,
      removeLexiconId = modelConfirm.lexicon,
      removalMsgKey = "LEXICON_REMOVE_MSG_KEY",
      addMsgKey = "LEXICON_ADD_MSG_KEY";

  var showEntityManager = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (_ref2) {
    var modalEntity = _ref2.modalEntity;
    return modalEntity.show;
  });

  var removeLexicon = _graphql_mutations__WEBPACK_IMPORTED_MODULE_10__["removeLexicon"],
      createLexicon = _graphql_mutations__WEBPACK_IMPORTED_MODULE_10__["createLexicon"],
      _ref3 = search.length === 0 ? _graphql_queries__WEBPACK_IMPORTED_MODULE_11__["topLexicons"] : !exactMatch ? _graphql_queries__WEBPACK_IMPORTED_MODULE_11__["topLexiconsSearch"] : _graphql_queries__WEBPACK_IMPORTED_MODULE_11__["topLexiconsSearchExactMatch"],
      typename = _ref3.typename,
      query = _ref3.query;

  var entityQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(_graphql_queries__WEBPACK_IMPORTED_MODULE_11__["entities"].query),
      lexiconQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(query, {
    variables: {
      input: search
    },
    pollInterval: showEntityManager ? 1500 : 500
  });

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(removeLexicon.mutation),
      _useMutation2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useMutation, 2),
      removeLexiconMutation = _useMutation2[0],
      removeResults = _useMutation2[1],
      _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_6__["useMutation"])(createLexicon.mutation),
      _useMutation4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useMutation3, 2),
      addLexiconMutation = _useMutation4[0],
      addResults = _useMutation4[1];

  Object(_SearchNotifications__WEBPACK_IMPORTED_MODULE_9__["lexiconRemovalNotifications"])(removeResults, removalMsgKey);
  Object(_SearchNotifications__WEBPACK_IMPORTED_MODULE_9__["leixconAddNotifications"])(addResults, addMsgKey); // Load entity data.

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var typename = _graphql_queries__WEBPACK_IMPORTED_MODULE_11__["entities"].typename;
    dispatch({
      typename: typename,
      type: _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_12__["SET_ENTITIES_DATA"],
      payload: entityQuery.data
    });
  }, [entityQuery.data]); // Perform another refetch when triggered to via the "refetch"
  // redux property.

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (refetch) {
      lexiconQuery.refetch();
      dispatch({
        type: _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_12__["TOGGLE_REFETCH"],
        refetch: false
      });
      dispatch({
        typename: typename,
        type: _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_12__["SET_LEXICONS_DATA"],
        payload: lexiconQuery.data
      });
    }
  }, [refetch]); // Trigger an update based on the result of the received data.
  // This may get triggered again by the redux "refetch", but that
  // won't hurt.

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    lexiconQuery.refetch();
    dispatch({
      typename: typename,
      type: _redux_actions_lexiconActions__WEBPACK_IMPORTED_MODULE_12__["SET_LEXICONS_DATA"],
      payload: lexiconQuery.data
    });
  }, [lexiconQuery.data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.searchBarContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SearchBar_SearchBar__WEBPACK_IMPORTED_MODULE_7__["SearchBar"], {
    loading: lexiconQuery.loading,
    search: search,
    exactMatch: exactMatch,
    entities: entities
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: "0px"
    }
  }, "Showing ".concat(lexicons.length < 20 ? lexicons.length : "20+", " results")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.searchResultsContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_SearchResults_SearchResults__WEBPACK_IMPORTED_MODULE_8__["SearchResults"], {
    loading: lexiconQuery.loading,
    search: search,
    showConfirm: showConfirm,
    lexicons: lexicons,
    removeLexiconId: removeLexiconId,
    removeLexicon: removeLexiconMutation,
    addLexicon: addLexiconMutation,
    removalMsgKey: removalMsgKey,
    addMsgKey: addMsgKey
  })));
};

/***/ }),

/***/ "./src/react/containers/layouts/SearchLayout/SearchNotifications.ts":
/*!**************************************************************************!*\
  !*** ./src/react/containers/layouts/SearchLayout/SearchNotifications.ts ***!
  \**************************************************************************/
/*! exports provided: lexiconRemovalNotifications, leixconAddNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexiconRemovalNotifications", function() { return lexiconRemovalNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leixconAddNotifications", function() { return leixconAddNotifications; });
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/message/style */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/message/style/index.js");
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/.pnpm/registry.npmjs.org/antd/4.2.0_react-dom@16.13.1+react@16.13.1/node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @graphql/mutations */ "./src/graphql/mutations.ts");
/* harmony import */ var _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @actions/lexiconActions */ "./src/redux/actions/lexiconActions.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/.pnpm/registry.npmjs.org/react-redux/7.2.0_49f644e2f7de4182503f8b93abece808/node_modules/react-redux/es/index.js");






var defaultDuration = 2;
var lexiconRemovalNotifications = function lexiconRemovalNotifications(status, key) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDuration;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(),
      typename = _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["removeLexicon"].typename,
      _status$called = status.called,
      called = _status$called === void 0 ? false : _status$called,
      _status$loading = status.loading,
      loading = _status$loading === void 0 ? false : _status$loading,
      _status$data = status.data,
      data = _status$data === void 0 ? null : _status$data;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (called && !loading && data != null) {
      var _data$typename$code = data[typename].code,
          code = _data$typename$code === void 0 ? null : _data$typename$code;

      if (code != null && code === 200) {
        dispatch({
          type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_4__["TOGGLE_REFETCH"]
        });

        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success({
          content: 'Successfully removed',
          duration: duration,
          key: key
        });
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warning({
          content: 'Not removed, please try again later...',
          duration: duration,
          key: key
        });
      }
    }
  }, [status]);
},
    leixconAddNotifications = function leixconAddNotifications(status, key) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDuration;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(),
      typename = _graphql_mutations__WEBPACK_IMPORTED_MODULE_3__["createLexicon"].typename,
      _status$called2 = status.called,
      called = _status$called2 === void 0 ? false : _status$called2,
      _status$loading2 = status.loading,
      loading = _status$loading2 === void 0 ? false : _status$loading2,
      _status$data2 = status.data,
      data = _status$data2 === void 0 ? null : _status$data2;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (called && !loading && data != null) {
      var _data$typename$code2 = data[typename].code,
          code = _data$typename$code2 === void 0 ? null : _data$typename$code2;

      if (code != null && code === 200) {
        dispatch({
          type: _actions_lexiconActions__WEBPACK_IMPORTED_MODULE_4__["TOGGLE_REFETCH"]
        });

        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.success({
          content: 'Successfully added',
          duration: duration,
          key: key
        });
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warning({
          content: 'Not added, please try again later...',
          duration: duration,
          key: key
        });
      }
    }
  }, [status]);
};

/***/ }),

/***/ "./src/react/containers/layouts/TrainerLayout/TrainerLayout.jss.ts":
/*!*************************************************************************!*\
  !*** ./src/react/containers/layouts/TrainerLayout/TrainerLayout.jss.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-jss */ "./node_modules/.pnpm/registry.npmjs.org/react-jss/10.1.1_react@16.13.1/node_modules/react-jss/dist/react-jss.esm.js");
 // [NOTE]
// I had to apply the "left" property in the JS because,
// for whatever reason that is unknown to me, the "left"
// property does not override in the Media Query, once applied.

/* harmony default export */ __webpack_exports__["default"] = (Object(react_jss__WEBPACK_IMPORTED_MODULE_0__["createUseStyles"])({
  "@media (min-width: 1000px)": {
    container: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "50%",
      transform: "translateX(-50%)"
    }
  },
  "@media (max-width: 999px)": {
    container: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0"
    }
  },
  container: {
    display: "flex",
    position: "absolute",
    flexDirection: "column",
    overflow: "hidden",
    marginBottom: "12px"
  },
  section: {
    margin: "10px",
    flexGrow: "1",
    display: "flex",
    flexDirection: "column",

    /* for Firefox */
    minHeight: 0
  }
}));

/***/ }),

/***/ "./src/react/containers/layouts/TrainerLayout/TrainerLayout.tsx":
/*!**********************************************************************!*\
  !*** ./src/react/containers/layouts/TrainerLayout/TrainerLayout.tsx ***!
  \**********************************************************************/
/*! exports provided: TrainerLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainerLayout", function() { return TrainerLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/registry.npmjs.org/react/16.13.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TrainerLayout_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TrainerLayout.jss */ "./src/react/containers/layouts/TrainerLayout/TrainerLayout.jss.ts");
/* harmony import */ var _react_containers_layouts_SearchLayout_SearchLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react/containers/layouts/SearchLayout/SearchLayout */ "./src/react/containers/layouts/SearchLayout/SearchLayout.tsx");
/* harmony import */ var _components_TrainerTitle_TrainerTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/TrainerTitle/TrainerTitle */ "./src/react/components/TrainerTitle/TrainerTitle.tsx");
/* harmony import */ var _containers_EntityManagerModal_EntityManagerModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @containers/EntityManagerModal/EntityManagerModal */ "./src/react/containers/EntityManagerModal/EntityManagerModal.tsx");
/* harmony import */ var _containers_PeekModal_PeekModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @containers/PeekModal/PeekModal */ "./src/react/containers/PeekModal/PeekModal.tsx");






var TrainerLayout = function TrainerLayout(props) {
  var classes = Object(_TrainerLayout_jss__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.section
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_EntityManagerModal_EntityManagerModal__WEBPACK_IMPORTED_MODULE_4__["EntityManagerModal"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_PeekModal_PeekModal__WEBPACK_IMPORTED_MODULE_5__["PeekModal"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TrainerTitle_TrainerTitle__WEBPACK_IMPORTED_MODULE_3__["TrainerTitle"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_containers_layouts_SearchLayout_SearchLayout__WEBPACK_IMPORTED_MODULE_2__["SearchLayout"], null))));
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2FpLWljb25zLTY0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2JpZ2dzLWxvZ28tc21hbGwuanBnIiwid2VicGFjazovLy8uL3NyYy9ncmFwaHFsL211dGF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGhxbC9xdWVyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb21wb25lbnRzL0NvbmZpcm1hdGlvbk1vZGFsL0NvbmZpcm1Nb2RlbC5qc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L2NvbXBvbmVudHMvQ29uZmlybWF0aW9uTW9kYWwvQ29uZmlybWF0aW9uTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb21wb25lbnRzL0VudGl0eUlucHV0L0VudGl0eUlucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvY29tcG9uZW50cy9FbnRpdHlNYW5hZ2VyL0VudGl0eU1hbmFnZXIuanNzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb21wb25lbnRzL0VudGl0eU1hbmFnZXIvRW50aXR5TWFuYWdlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci5qc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L2NvbXBvbmVudHMvU2VhcmNoQmFyL1NlYXJjaEJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L2NvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzLmpzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvY29tcG9uZW50cy9TZWFyY2hSZXN1bHRzL1NlYXJjaFJlc3VsdHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb21wb25lbnRzL1RyYWluZXJUaXRsZS9UcmFpbmVyVGl0bGUuanNzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb21wb25lbnRzL1RyYWluZXJUaXRsZS9UcmFpbmVyVGl0bGUudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL0VudGl0eS9FbnRpdHkuanNzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL0VudGl0eS9FbnRpdHkudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL0VudGl0eU1hbmFnZXJNb2RhbC9FbnRpdHlNYW5hZ2VyTW9kYWwuanNzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL0VudGl0eU1hbmFnZXJNb2RhbC9FbnRpdHlNYW5hZ2VyTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL1BlZWtNb2RhbC9QZWVrTW9kYWwuanNzLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL1BlZWtNb2RhbC9QZWVrTW9kYWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL2xheW91dHMvU2VhcmNoTGF5b3V0L1NlYXJjaExheW91dC5qc3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlYWN0L2NvbnRhaW5lcnMvbGF5b3V0cy9TZWFyY2hMYXlvdXQvU2VhcmNoTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvY29udGFpbmVycy9sYXlvdXRzL1NlYXJjaExheW91dC9TZWFyY2hOb3RpZmljYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9yZWFjdC9jb250YWluZXJzL2xheW91dHMvVHJhaW5lckxheW91dC9UcmFpbmVyTGF5b3V0Lmpzcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVhY3QvY29udGFpbmVycy9sYXlvdXRzL1RyYWluZXJMYXlvdXQvVHJhaW5lckxheW91dC50c3giXSwibmFtZXMiOlsicmVtb3ZlTGV4aWNvbiIsInR5cGVuYW1lIiwibXV0YXRpb24iLCJncWwiLCJjcmVhdGVMZXhpY29uIiwiY3JlYXRlRW50aXR5IiwidXBkYXRlRW50aXR5TGFiZWwiLCJyZW1vdmVFbnRpdHlMYWJlbCIsInRvcExleGljb25zIiwicXVlcnkiLCJ0b3BMZXhpY29uc1NlYXJjaCIsInRvcExleGljb25zU2VhcmNoRXhhY3RNYXRjaCIsImVudGl0aWVzIiwiZ2V0TGV4aWNvbkJ5SWQiLCJnZXRMZXhpY29uQnlJbnB1dCIsImNyZWF0ZVVzZVN0eWxlcyIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJhbGlnbkNvbnRlbnQiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsIkNvbmZpcm1hdGlvbk1vZGFsIiwidGl0bGUiLCJ2aXNpYmxlIiwibWVzc2FnZSIsIm9uT2siLCJvbkNhbmNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJFbnRpdHlJbnB1dCIsIl9pZCIsImlucHV0IiwiZGlzYWJsZSIsInNvcnQiLCJhIiwiYiIsInN0YXJ0IiwicmVzdWx0IiwiZGlmZiIsImZvckVhY2giLCJsYWJlbCIsInN0b3AiLCJoYXNFbnRpdHkiLCJwdXNoIiwic3Vic3RyaW5nIiwidGV4dCIsImxlbmd0aCIsIm1hcCIsImVudGl0eSIsImlkeCIsInR5cGUiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImlucHV0VGl0bGUiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiZm9udFN0eWxlIiwiZW50aXR5VGFibGUiLCJtYXJnaW5Ub3AiLCJtYXhIZWlnaHQiLCJvdmVyZmxvdyIsInRhYmxlVGl0bGUiLCJlbnRpdHlJbnB1dCIsImVudGl0eUlucHV0VGl0bGUiLCJlbnRpdHlJbnB1dENvbnRyb2xzIiwiT3B0aW9uIiwiRW50aXR5TWFuYWdlciIsImRhdGEiLCJhbGxFbnRpdGllcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJhZGQiLCJtdXRhdGlvbnMiLCJ1cGRhdGUiLCJyZW1vdmUiLCJ1c2VNdXRhdGlvbiIsImFkZExhYmVsIiwiYWRkU3RhdHVzIiwidXBkYXRlTGFiZWwiLCJ1cGRhdGVTdGF0dXMiLCJyZW1vdmVMYWJlbCIsInJlbW92ZVN0YXR1cyIsInNlbGVjdGVkTGFiZWwiLCJ1c2VFZmZlY3QiLCJMQSIsInJlZmV0Y2giLCJFQSIsImluY2x1ZGVzIiwiaW5kZXhPZiIsImZpbmQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5SaWdodCIsInZhcmlhYmxlcyIsImV4aXN0aW5nRW50aXR5IiwiX2VudGl0eSIsImFtcmdpbiIsInkiLCJrZXkiLCJkYXRhSW5kZXgiLCJyZW5kZXIiLCJyZWNvcmQiLCJjb2xvckNvZGUiLCJtYXJnaW4iLCJpbmZvIiwiU2VhcmNoIiwiU2VhcmNoQmFyIiwibG9hZGluZyIsImV4YWN0TWF0Y2giLCJzZWFyY2giLCJjdXJzb3IiLCJUT0dHTEVfUkVGRVRDSCIsIlRPR0dMRV9PUFRJT05TX0VYQUNUX01BVENIIiwiY29udGVudCIsInRleHRBbGlnbiIsImljb24iLCJkZXNjcmlwdGlvbiIsImlucHV0Q29udGFpbmVyIiwicGFkZGluZyIsImJvcmRlclN0eWxlIiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJiYWRnZSIsImdldExleGljb25JZCIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsIlNlYXJjaFJlc3VsdHMiLCJzaG93Q29uZmlybSIsInJlbW92ZUxleGljb25JZCIsImxleGljb25zIiwiYWRkTGV4aWNvbiIsInJlbW92YWxNc2dLZXkiLCJhZGRNc2dLZXkiLCJzaG93IiwibGV4aWNvbiIsImJhY2tncm91bmRDb2xvciIsIlBBIiwidHJhaW5lciIsImxvZ28iLCJhaUltZyIsImFpVGl0bGUiLCJUcmFpbmVyVGl0bGUiLCJwcm9wcyIsImNvbXBhbnlJY29uIiwiYWlJY29uIiwiYWNjZW50Q29sb3IiLCJib3JkZXJDb2xvciIsImxhYmVsU2VsZWN0IiwibGFiZWxDb250YWluZXIiLCJwb3BvdmVyVGl0bGUiLCJFbnRpdHkiLCJ1c2VTZWxlY3RvciIsIkVudGl0eU1hbmFnZXJNb2RhbCIsIm1vZGFsRW50aXR5IiwicXVlcmllcyIsImxleGljb25RdWVyeSIsInVzZVF1ZXJ5Iiwic2tpcCIsInBvbGxJbnRlcnZhbCIsInBheWxvYWQiLCJzZXRUaW1lb3V0Iiwibm9tZW5jbGF0dXJlIiwiUGVla01vZGFsIiwibW9kYWxQZWVrIiwic2VhcmNoQmFyQ29udGFpbmVyIiwic2VhcmNoUmVzdWx0c0NvbnRhaW5lciIsImZsZXhHcm93IiwibWluSGVpZ2h0IiwiU2VhcmNoTGF5b3V0IiwibW9kZWxDb25maXJtIiwib3B0aW9ucyIsInNob3dFbnRpdHlNYW5hZ2VyIiwiZW50aXR5UXVlcnkiLCJyZW1vdmVMZXhpY29uTXV0YXRpb24iLCJyZW1vdmVSZXN1bHRzIiwiYWRkTGV4aWNvbk11dGF0aW9uIiwiYWRkUmVzdWx0cyIsImxleGljb25SZW1vdmFsTm90aWZpY2F0aW9ucyIsImxlaXhjb25BZGROb3RpZmljYXRpb25zIiwiZGVmYXVsdER1cmF0aW9uIiwic3RhdHVzIiwiZHVyYXRpb24iLCJjYWxsZWQiLCJjb2RlIiwiQSIsInN1Y2Nlc3MiLCJ3YXJuaW5nIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwidHJhbnNmb3JtIiwicG9zaXRpb24iLCJzZWN0aW9uIiwiVHJhaW5lckxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWUsNEdBQTZDLEU7Ozs7Ozs7Ozs7OztBQ0E1RDtBQUFlLDRHQUE2QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTVEO0FBRU8sSUFDUEEsYUFBYSxHQUFHO0FBQ1pDLFVBQVEsRUFBRSxrQkFERTtBQUVaQyxVQUFRLEVBQUVDLHdEQUFGO0FBRkksQ0FEVDtBQUFBLElBWVBDLGFBQWEsR0FBRztBQUNaSCxVQUFRLEVBQUUsa0JBREU7QUFFWkMsVUFBUSxFQUFFQyx3REFBRjtBQUZJLENBWlQ7QUFBQSxJQXVCUEUsWUFBWSxHQUFHO0FBQ1hKLFVBQVEsRUFBRSx3QkFEQztB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WUFBUSxFQUFFLFVBRkg7QUFHUGpKLGlCQUFhLEVBQUUsUUFIUjtBQUlQVSxZQUFRLEVBQUUsUUFKSDtBQUtQTixnQkFBWSxFQUFFO0FBTFAsR0FsQmdCO0FBeUIzQjhJLFNBQU8sRUFBRTtBQUNMNUYsVUFBTSxFQUFFLE1BREg7QUFFTGlFLFlBQVEsRUFBRSxHQUZMO0FBR0wxSixXQUFPLEVBQUUsTUFISjtBQUlMbUMsaUJBQWEsRUFBRSxRQUpWOztBQU1MO0FBQ0F3SCxhQUFTLEVBQUU7QUFQTjtBQXpCa0IsQ0FBRCxDQUE5QixFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNMkIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDcEQsS0FBRCxFQUErQjtBQUN4RCxNQUFNdkgsT0FBTyxHQUFHQyxrRUFBUyxFQUF6QjtBQUVBLHNCQUNJLHFJQUNJO0FBQUssYUFBUyxFQUFFRCxPQUFPLENBQUNaO0FBQXhCLGtCQUNJO0FBQUssYUFBUyxFQUFFWSxPQUFPLENBQUMwSztBQUF4QixrQkFDSSwyREFBQyxvR0FBRCxPQURKLGVBRUksMkRBQUMseUVBQUQsT0FGSixlQUdJLDJEQUFDLGtGQUFELE9BSEosZUFJSSwyREFBQyxnR0FBRCxPQUpKLENBREosQ0FESixDQURKO0FBWUgsQ0FmTSxDIiwiZmlsZSI6IjEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJhc3NldHMvMDZjZGY2MjYxYmVhYjgzYWYyYmQzOWQ3ZTc0YjQ4ZWIucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJhc3NldHMvYjUyYzAxMGFlYjg3NGQ1YWMyNDJkOGU4ZmQxZDVmNDEuanBnXCI7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1ib29zdFwiO1xuXG5leHBvcnQgY29uc3RcbnJlbW92ZUxleGljb24gPSB7XG4gICAgdHlwZW5hbWU6IFwibGV4aWNvblJlbW92ZU9uZVwiLFxuICAgIG11dGF0aW9uOiBncWxgXG4gICAgICAgIG11dGF0aW9uIGxleGljb25SZW1vdmVPbmUoJF9pZDogSUQhKSB7XG4gICAgICAgICAgICBsZXhpY29uUmVtb3ZlT25lKF9pZDogJF9pZCkge1xuICAgICAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGBcbn0sXG5jcmVhdGVMZXhpY29uID0ge1xuICAgIHR5cGVuYW1lOiBcImxleGljb25DcmVhdGVPbmVcIixcbiAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICBtdXRhdGlvbiBsZXhpY29uQ3JlYXRlT25lKCRpbnB1dDogU3RyaW5nISkge1xuICAgICAgICAgICAgbGV4aWNvbkNyZWF0ZU9uZShpbnB1dDogJGlucHV0KSB7XG4gICAgICAgICAgICAgICAgY29kZVxuICAgICAgICAgICAgICAgIGVycm9yc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYFxufSxcbmNyZWF0ZUVudGl0eSA9IHtcbiAgICB0eXBlbmFtZTogXCJsZXhpY29uQ3JlYXRlT25lRW50aXR5XCIsXG4gICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgbXV0YXRpb24gbGV4aWNvbkNyZWF0ZU9uZUVudGl0eShcbiAgICAgICAgICAgICRfaWQ6IElEISxcbiAgICAgICAgICAgICRlbnRpdHk6IE11dGF0aW9uTGV4aWNvbkVudGl0eSFcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBsZXhpY29uQ3JlYXRlT25lRW50aXR5KFxuICAgICAgICAgICAgICAgIF9pZDogJF9pZCxcbiAgICAgICAgICAgICAgICBlbnRpdHk6ICRlbnRpdHlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGBcbn0sXG51cGRhdGVFbnRpdHlMYWJlbCA9IHtcbiAgICB0eXBlbmFtZTogXCJsZXhpY29uVXBkYXRlT25lRW50aXR5XCIsXG4gICAgbXV0YXRpb246IGdxbGBcbiAgICAgICAgbXV0YXRpb24gbGV4aWNvblVwZGF0ZU9uZUVudGl0eShcbiAgICAgICAgICAgICRfaWQ6IElEISxcbiAgICAgICAgICAgICRfZW50aXR5OiBJRCEsXG4gICAgICAgICAgICAkZW50aXR5OiBNdXRhdGlvbkxleGljb25FbnRpdHkhXG4gICAgICAgICkge1xuICAgICAgICAgICAgbGV4aWNvblVwZGF0ZU9uZUVudGl0eShcbiAgICAgICAgICAgICAgICBfaWQ6ICRfaWQsXG4gICAgICAgICAgICAgICAgX2VudGl0eTogJF9lbnRpdHksXG4gICAgICAgICAgICAgICAgZW50aXR5OiAkZW50aXR5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBlbnRpdGllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYFxufSxcbnJlbW92ZUVudGl0eUxhYmVsID0ge1xuICAgIHR5cGVuYW1lOiBcImxleGljb25SZW1vdmVPbmVFbnRpdHlcIixcbiAgICBtdXRhdGlvbjogZ3FsYFxuICAgICAgICBtdXRhdGlvbiBsZXhpY29uUmVtb3ZlT25lRW50aXR5KFxuICAgICAgICAgICAgJF9pZDogSUQhLFxuICAgICAgICAgICAgJF9lbnRpdHk6IElEIVxuICAgICAgICApIHtcbiAgICAgICAgICAgIGxleGljb25SZW1vdmVPbmVFbnRpdHkoXG4gICAgICAgICAgICAgICAgX2lkOiAkX2lkLFxuICAgICAgICAgICAgICAgIF9lbnRpdHk6ICRfZW50aXR5XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBlbnRpdGllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYFxufSIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIjtcblxuZXhwb3J0IGNvbnN0XG50b3BMZXhpY29ucyA9IHtcbiAgICB0eXBlbmFtZTogXCJsZXhpY29uU2VhcmNoQnlJbnB1dFwiLFxuICAgIHF1ZXJ5OiBncWxge1xuICAgICAgICBsZXhpY29uU2VhcmNoQnlJbnB1dChpbnB1dDogXCIqXCIpIHtcbiAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgIGVycm9yc1xuICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgY3JlYXRlZFxuICAgICAgICAgICAgICAgIG1vZGlmaWVkXG4gICAgICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgICAgICBlbnRpdGllcyB7XG4gICAgICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgIHN0b3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9YFxufSxcbnRvcExleGljb25zU2VhcmNoID0ge1xuICAgIHR5cGVuYW1lOiBcImxleGljb25TZWFyY2hCeUlucHV0XCIsXG4gICAgcXVlcnk6IGdxbGBcbiAgICAgICAgcXVlcnkgdG9wTGV4aWNvblNlYXJjaCgkaW5wdXQ6IFN0cmluZyEpIHtcbiAgICAgICAgICAgIGxleGljb25TZWFyY2hCeUlucHV0KFxuICAgICAgICAgICAgICAgIGlucHV0OiAkaW5wdXQsXG4gICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBleGFjdE1hdGNoOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZW50aXRpZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgXG59LFxudG9wTGV4aWNvbnNTZWFyY2hFeGFjdE1hdGNoID0ge1xuICAgIHR5cGVuYW1lOiBcImxleGljb25TZWFyY2hCeUlucHV0XCIsXG4gICAgcXVlcnk6IGdxbGBcbiAgICAgICAgcXVlcnkgdG9wTGV4aWNvbnNTZWFyY2hFeGFjdE1hdGNoKCRpbnB1dDogU3RyaW5nISkge1xuICAgICAgICAgICAgbGV4aWNvblNlYXJjaEJ5SW5wdXQoXG4gICAgICAgICAgICAgICAgaW5wdXQ6ICRpbnB1dCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4YWN0TWF0Y2g6IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICAgICAgZXJyb3JzXG4gICAgICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkXG4gICAgICAgICAgICAgICAgICAgIGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGVudGl0aWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RvcFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgYFxufSxcbmVudGl0aWVzID0ge1xuICAgIHR5cGVuYW1lOiBcImVudGl0aWVzXCIsXG4gICAgcXVlcnk6IGdxbGB7XG4gICAgICAgIGVudGl0aWVzIHtcbiAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgIGVycm9yc1xuICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JcbiAgICAgICAgICAgICAgICBhY2NlbnRDb2xvclxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfWBcbn0sXG5nZXRMZXhpY29uQnlJZCA9IHtcbiAgICB0eXBlbmFtZTogXCJsZXhpY29uQnlJZFwiLFxuICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgIHF1ZXJ5IGdldExleGljb25CeUlkKCRfaWQ6IElEISkge1xuICAgICAgICAgICAgbGV4aWNvbkJ5SWQoXG4gICAgICAgICAgICAgICAgX2lkOiAkX2lkLFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29kZVxuICAgICAgICAgICAgICAgIGVycm9yc1xuICAgICAgICAgICAgICAgIGRhdGEge1xuICAgICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZFxuICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFxuICAgICAgICAgICAgICAgICAgICBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBlbnRpdGllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0b3BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGBcbn0sXG5nZXRMZXhpY29uQnlJbnB1dCA9IHtcbiAgICB0eXBlbmFtZTogXCJsZXhpY29uQnlJbnB1dFwiLFxuICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgIHF1ZXJ5IGdldExleGljb25CeUlkKCRpbnB1dDogU3RyaW5nISkge1xuICAgICAgICAgICAgbGV4aWNvbkJ5SW5wdXQoXG4gICAgICAgICAgICAgICAgaW5wdXQ6ICRpbnB1dCxcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvZGVcbiAgICAgICAgICAgICAgICBlcnJvcnNcbiAgICAgICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZWRcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZW50aXRpZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgXG59IiwiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVc2VTdHlsZXMoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25Db250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL0NvbmZpcm1Nb2RlbC5qc3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25Nb2RhbFByb3BzIHtcbiAgICB0aXRsZT86IHN0cmluZyB8IG51bGxcbiAgICBtZXNzYWdlOiBzdHJpbmdcbiAgICB2aXNpYmxlOiBib29sZWFuXG4gICAgb25Paz86IEZ1bmN0aW9uXG4gICAgb25DYW5jZWw/OiBGdW5jdGlvblxufVxuXG5leHBvcnQgY29uc3QgQ29uZmlybWF0aW9uTW9kYWwgPSAoeyB0aXRsZSwgdmlzaWJsZT1mYWxzZSwgbWVzc2FnZSwgb25Paywgb25DYW5jZWwgfTogQ29uZmlybWF0aW9uTW9kYWxQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZSB8fCBudWxsfVxuICAgICAgICAgICAgICAgIHZpc2libGU9e3Zpc2libGV9XG4gICAgICAgICAgICAgICAgY2xvc2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIG9rVGV4dD17XCJDb25maXJtXCJ9XG4gICAgICAgICAgICAgICAgb25Paz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob25PayAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgb25PaygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uQ2FuY2VsICE9IG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8Lz5cbiAgICApXG59IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdHlwZSB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIkBjb250YWluZXJzL0VudGl0eS9FbnRpdHlcIjtcblxuaW50ZXJmYWNlIElFbnRpdHkge1xuICAgIF9pZD86IHN0cmluZ1xuICAgIGxhYmVsOiBzdHJpbmdcbiAgICBzdGFydDogbnVtYmVyXG4gICAgc3RvcDogbnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5SW5wdXRQcm9wcyB7XG4gICAgX2lkOiBzdHJpbmdcbiAgICBpbnB1dDogc3RyaW5nXG4gICAgZW50aXRpZXM6IEFycmF5PElFbnRpdHk+XG4gICAgZGlzYWJsZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGNvbnN0IEVudGl0eUlucHV0ID0gKHsgX2lkLCBpbnB1dCwgZW50aXRpZXM9W10sIGRpc2FibGU9ZmFsc2UgfTogRW50aXR5SW5wdXRQcm9wcykgPT4ge1xuICAgIGVudGl0aWVzID0gZW50aXRpZXMuc29ydCgoYSwgYikgPT4gYS5zdGFydCAtIGIuc3RhcnQpO1xuXG4gICAgY29uc3QgcmVzdWx0OiBhbnkgPSBbXTtcbiAgICBsZXQgZGlmZiA9IDA7XG5cbiAgICBlbnRpdGllcy5mb3JFYWNoKCh7IF9pZCwgbGFiZWwsIHN0YXJ0LCBzdG9wIH0pID0+IHtcbiAgICAgICAgY29uc3QgaGFzRW50aXR5ID0gc3RhcnQgLSBkaWZmO1xuXG4gICAgICAgIGlmIChoYXNFbnRpdHkgPiAwKVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goaW5wdXQuc3Vic3RyaW5nKGRpZmYsIHN0YXJ0KSk7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goW3tcbiAgICAgICAgICAgIHRleHQ6IGlucHV0LnN1YnN0cmluZyhzdGFydCwgc3RvcCksXG4gICAgICAgICAgICBfaWQsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgc3RvcFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgZGlmZiA9IHN0b3A7XG4gICAgfSk7XG5cbiAgICBpZiAoKChpbnB1dC5sZW5ndGggLSAxKSAtIGRpZmYpID4gMClcbiAgICAgICAgcmVzdWx0LnB1c2goaW5wdXQuc3Vic3RyaW5nKGRpZmYsIGlucHV0Lmxlbmd0aCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtyZXN1bHQubWFwKChlbnRpdHksIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgICAge3R5cGUoZW50aXR5KSAhPT0gXCJBcnJheVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoKFsgZW50aXR5IF0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZD17X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk9e2VudGl0eX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZT17ZGlzYWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSkoZW50aXR5KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZVN0eWxlcyh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIGlucHV0VGl0bGU6IHtcbiAgICAgICAgZm9udFNpemU6IFwiMS4ycmVtXCIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIwLjVyZW1cIixcbiAgICAgICAgY29sb3I6IFwicmdiKDE3MCwgMTcwLCAxNzApXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCJcbiAgICB9LFxuICAgIGVudGl0eVRhYmxlOiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICBtYXhIZWlnaHQ6IFwiNTAwcHhcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiXG4gICAgfSxcbiAgICB0YWJsZVRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICBjb2xvcjogXCJyZ2IoMTcwLCAxNzAsIDE3MClcIlxuICAgIH0sXG4gICAgZW50aXR5SW5wdXQ6IHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW5Ub3A6IFwiMS41cmVtXCJcbiAgICB9LFxuICAgIGVudGl0eUlucHV0VGl0bGU6IHtcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIGNvbG9yOiBcInJnYigxNzAsIDE3MCwgMTcwKVwiXG4gICAgfSxcbiAgICBlbnRpdHlJbnB1dENvbnRyb2xzOiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIH1cbn0pOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4vRW50aXR5TWFuYWdlci5qc3NcIjtcbmltcG9ydCB7IERpdmlkZXIsIFRhYmxlLCBCdXR0b24sIElucHV0LCBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgQXBwTG9hZGVyIH0gZnJvbSBcIkBsb2FkZXJzL0FwcExvYWRlci9BcHBMb2FkZXJcIjtcbmltcG9ydCB7IEVudGl0eUlucHV0IH0gZnJvbSBcIkBjb21wb25lbnRzL0VudGl0eUlucHV0L0VudGl0eUlucHV0XCI7XG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiQGNvbnRhaW5lcnMvRW50aXR5L0VudGl0eVwiO1xuaW1wb3J0IHsgRGVsZXRlT3V0bGluZWQsIFBsdXNPdXRsaW5lZCwgVXBsb2FkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCJAZ3JhcGhxbC9tdXRhdGlvbnNcIjtcbmltcG9ydCAqIGFzIExBIGZyb20gXCJAYWN0aW9ucy9sZXhpY29uQWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgRUEgZnJvbSBcIkBhY3Rpb25zL21vZGFsRW50aXR5QWN0aW9uc1wiO1xuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcblxuZXhwb3J0IGludGVyZmFjZSBFbnRpdHlNYW5hZ2VyUHJvcHMge1xuICAgIGRhdGE6IGFueVxuICAgIGVudGl0eTogc3RyaW5nXG4gICAgZW50aXRpZXM6IGFueSB8IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IEVudGl0eU1hbmFnZXIgPSAoeyBkYXRhLCBlbnRpdHk9XCJcIiwgZW50aXRpZXM9W10gfTogRW50aXR5TWFuYWdlclByb3BzKSA9PiB7XG4gICAgY29uc3RcbiAgICBhbGxFbnRpdGllcyA9IGVudGl0aWVzLFxuICAgIGNsYXNzZXMgPSB1c2VTdHlsZXMoKSxcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXG4gICAgYWRkID0gbXV0YXRpb25zLmNyZWF0ZUVudGl0eSxcbiAgICB1cGRhdGUgPSBtdXRhdGlvbnMudXBkYXRlRW50aXR5TGFiZWwsXG4gICAgcmVtb3ZlID0gbXV0YXRpb25zLnJlbW92ZUVudGl0eUxhYmVsLFxuICAgIFsgYWRkTGFiZWwsIGFkZFN0YXR1cyBdID0gdXNlTXV0YXRpb24oYWRkLm11dGF0aW9uKSxcbiAgICBbIHVwZGF0ZUxhYmVsLCB1cGRhdGVTdGF0dXMgXSA9IHVzZU11dGF0aW9uKHVwZGF0ZS5tdXRhdGlvbiksXG4gICAgWyByZW1vdmVMYWJlbCwgcmVtb3ZlU3RhdHVzIF0gPSB1c2VNdXRhdGlvbihyZW1vdmUubXV0YXRpb24pO1xuXG4gICAgbGV0IHNlbGVjdGVkTGFiZWwgPSBhbGxFbnRpdGllc1swXS5sYWJlbDtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChhZGRTdGF0dXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTEEuVE9HR0xFX1JFRkVUQ0gsXG4gICAgICAgICAgICAgICAgcmVmZXRjaDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFQS5UT0dHTEVfRU5USVRZX01PREFMX1JFRkVUQ0gsXG4gICAgICAgICAgICAgICAgcmVmZXRjaDogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbIGFkZFN0YXR1cy5kYXRhIF0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHVwZGF0ZVN0YXR1cy5kYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBMQS5UT0dHTEVfUkVGRVRDSCxcbiAgICAgICAgICAgICAgICByZWZldGNoOiB0cnVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IEVBLlRPR0dMRV9FTlRJVFlfTU9EQUxfUkVGRVRDSCxcbiAgICAgICAgICAgICAgICByZWZldGNoOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFsgdXBkYXRlU3RhdHVzLmRhdGEgXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocmVtb3ZlU3RhdHVzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IExBLlRPR0dMRV9SRUZFVENILFxuICAgICAgICAgICAgICAgIHJlZmV0Y2g6IHRydWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogRUEuVE9HR0xFX0VOVElUWV9NT0RBTF9SRUZFVENILFxuICAgICAgICAgICAgICAgIHJlZmV0Y2g6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgWyByZW1vdmVTdGF0dXMuZGF0YSBdKTtcblxuICAgIHJldHVybiBkYXRhID09IG51bGwgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxBcHBMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApIDogKCgpID0+IHtcbiAgICAgICAgY29uc3RcbiAgICAgICAgeyBfaWQsIGlucHV0LCBlbnRpdGllcyB9ID0gZGF0YSxcbiAgICAgICAgaGFzRW50aXR5ID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpbnB1dC5pbmNsdWRlcyhlbnRpdHkpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gaW5wdXQuaW5kZXhPZihlbnRpdHkpLFxuICAgICAgICAgICAgICAgIHN0b3AgPSBzdGFydCArIGVudGl0eS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZW50aXRpZXMuZmluZChlID0+XG4gICAgICAgICAgICAgICAgICAgIGUuc3RhcnQgPT09IHN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcCA9PT0gc3RvcFxuICAgICAgICAgICAgICAgICkgIT0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dFRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIlRyYWluaW5nIElucHV0XCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2lucHV0fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZW50aXR5SW5wdXR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZW50aXR5SW5wdXRUaXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiQWRkIC8gVXBkYXRlIGFuIGVudGl0eTpcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1wiVHlwZSBpbiBhbiBlbnRpdHkuLi5cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0NsZWFyPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbnRpdHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFQS5TRVRfRU5USVRZX01PREFMX0lOUFVULFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZG9uQWZ0ZXI9eyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWxlY3RlZExhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExhYmVsID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWxsRW50aXRpZXMubWFwKCh7IGxhYmVsIH0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpZHh9IHZhbHVlPXtsYWJlbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk9e3sgbGFiZWwsIHRleHQ6IGxhYmVsIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9PcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbnRpdHlJbnB1dENvbnRyb2xzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PFBsdXNPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZW50aXR5Lmxlbmd0aCA8PSAxID8gdHJ1ZSA6IGhhc0VudGl0eSgpID8gdHJ1ZSA6ICFpbnB1dC5pbmNsdWRlcyhlbnRpdHkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCA9IGlucHV0LmluZGV4T2YoZW50aXR5KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcCA9IHN0YXJ0ICsgZW50aXR5Py5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRUEuU0VUX0VOVElUWV9NT0RBTF9JTlBVVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eTogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRMYWJlbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzZWxlY3RlZExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMYWJlbCA9IGFsbEVudGl0aWVzWzBdLmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiQWRkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlbnRpdHkubGVuZ3RoIDw9IDEgPyB0cnVlIDogIWhhc0VudGl0eSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBpbnB1dC5pbmRleE9mKGVudGl0eSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AgPSBzdGFydCArIGVudGl0eT8ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0VudGl0eSA9IGVudGl0aWVzLmZpbmQoZSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdGFydCA9PT0gc3RhcnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcCA9PT0gc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ0VudGl0eSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRUEuU0VUX0VOVElUWV9NT0RBTF9JTlBVVCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYWJlbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2VudGl0eTogZXhpc3RpbmdFbnRpdHkuX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzZWxlY3RlZExhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IGV4aXN0aW5nRW50aXR5LnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcDogZXhpc3RpbmdFbnRpdHkuc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkTGFiZWwgPSBhbGxFbnRpdGllc1swXS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiVXBkYXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIHN0eWxlPXt7IGFtcmdpbjogXCIwXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJFbnRpdGllcyBUYWJsZVwifVxuICAgICAgICAgICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVudGl0eVRhYmxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbD17eyB5OiAyNDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPXtcInNtYWxsXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnaW5hdGlvbj17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZW50aXRpZXMubWFwKCh7IF9pZCwgbGFiZWwsIHN0YXJ0LCBzdG9wIH0sIGlkeCkgPT4gKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpZHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGlucHV0LnN1YnN0cmluZyhzdGFydCwgc3RvcCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17W3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUluZGV4OiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogbGFiZWwgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVudGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5PXt7IGxhYmVsLCB0ZXh0OiBsYWJlbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRW50aXR5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFJbmRleDogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcjogdGV4dCA9PiBgXCIke3RleHR9XCJgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJBY3Rpb24ocylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyOiByZWNvcmQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXs8RGVsZXRlT3V0bGluZWQgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVMYWJlbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2VudGl0eTogcmVjb3JkLl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIkRlbGV0ZVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9KSgpO1xufSIsImltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcyB9IGZyb20gXCJyZWFjdC1qc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVXNlU3R5bGVzKHtcbiAgICB0ZXh0OiB7XG4gICAgICAgIGNvbG9yOiBcInJnYigxNTAsIDE1MCwgMTUwKVwiLFxuICAgICAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgfSxcbiAgICBjb2xvckNvZGU6IHtcbiAgICAgICAgbWFyZ2luOiBcIjAuNHJlbSAwXCJcbiAgICB9LFxuICAgIGluZm86IHtcbiAgICAgICAgY29sb3I6IFwicmdiKDE1MCwgMTUwLCAxNTApXCIsXG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgZm9udFNpemU6IFwiMC45cmVtXCJcbiAgICB9XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL1NlYXJjaEJhci5qc3NcIjtcbmltcG9ydCAqIGFzIExBIGZyb20gXCJAYWN0aW9ucy9sZXhpY29uQWN0aW9uc1wiO1xuaW1wb3J0IHsgSW5wdXQsIENoZWNrYm94LCBQb3BvdmVyLCBUb29sdGlwIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCJAY29udGFpbmVycy9FbnRpdHkvRW50aXR5XCI7XG5pbXBvcnQgeyBJbmZvQ2lyY2xlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0XG57IFNlYXJjaCB9ID0gSW5wdXQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQmFyUHJvcHMge1xuICAgIGxvYWRpbmc/OiBib29sZWFuXG4gICAgc2VhcmNoPzogc3RyaW5nXG4gICAgZXhhY3RNYXRjaD86IGJvb2xlYW5cbiAgICBlbnRpdGllcz86IEFycmF5PGFueT5cbn1cblxuZXhwb3J0IGNvbnN0IFNlYXJjaEJhciA9ICh7XG4gICAgbG9hZGluZz1mYWxzZSxcbiAgICBleGFjdE1hdGNoPWZhbHNlLFxuICAgIHNlYXJjaD1cIlwiLFxuICAgIGVudGl0aWVzPVtdLFxufTogU2VhcmNoQmFyUHJvcHMpID0+IHtcbiAgICBjb25zdFxuICAgIGNsYXNzZXMgPSB1c2VTdHlsZXMoKSxcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIG1hcmdpbkJvdHRvbTogXCIwLjVyZW1cIiwgY3Vyc29yOiBcImRlZmF1bHRcIiB9fT5cbiAgICAgICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW50aXRpZXMubWFwKCh7IGxhYmVsIH0sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXJnaW4gPSBcIjhweCAwcHhcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpZHggPT09IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbiA9IFwiMHB4IDBweCA4cHggMHB4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZihpZHggPT09IChlbnRpdGllcy5sZW5ndGggLSAxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luID0gXCI4cHggMHB4IDBweCAwcHhcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IHN0eWxlPXt7IG1hcmdpbiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eT17eyBsYWJlbCwgdGV4dDogbGFiZWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmluZm99PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEluZm9DaXJjbGVPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiIENvbG9yIGNvZGVzXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgIDxTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgYWxsb3dDbGVhclxuICAgICAgICAgICAgICAgICAgICBlbnRlckJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17XCJTZWFyY2ggZm9yIGRhdGFiYXNlIGlucHV0KHMpLi4uXCJ9XG4gICAgICAgICAgICAgICAgICAgIG9uUHJlc3NFbnRlcj17KGU6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExBLlNFVF9MRVhJQ09OU19TRUFSQ0gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTEEuVE9HR0xFX1JFRkVUQ0hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17KHNlYXJjaDogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTEEuU0VUX0xFWElDT05TX1NFQVJDSCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExBLlRPR0dMRV9SRUZFVENIXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExBLlNFVF9MRVhJQ09OU19TRUFSQ0gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTEEuVE9HR0xFX1JFRkVUQ0hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMC41cmVtXCIgfX0+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2V4YWN0TWF0Y2h9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTEEuVE9HR0xFX09QVElPTlNfRVhBQ1RfTUFUQ0hcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExBLlRPR0dMRV9SRUZFVENIXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIkV4YWN0IG1hdGNoXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0NoZWNrYm94PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVc2VTdHlsZXMoe1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCJcbiAgICB9LFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgICBmb250U2l6ZTogXCIxLjFyZW1cIixcbiAgICAgICAgY29sb3I6IFwicmdiKDE4MCwgMTgwLCAxODApXCIsXG4gICAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCIsXG4gICAgfSxcbiAgICBpY29uOiB7XG4gICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgZm9udFNpemU6IFwiMnJlbVwiLFxuICAgICAgICBjb2xvcjogXCJyZ2IoMTgwLCAxODAsIDE4MClcIixcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgIGZvbnRTaXplOiBcIjAuN3JlbVwiLFxuICAgICAgICBjb2xvcjogXCJyZ2IoMTUwLCAxNTAsIDE1MClcIixcbiAgICAgICAgY3Vyc29yOiBcImRlZmF1bHRcIlxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgICAgIGN1cnNvcjogXCJkZWZhdWx0XCIsXG4gICAgICAgIG92ZXJmbG93OiBcImF1dG9cIlxuICAgIH0sXG4gICAgaW5wdXRDb250YWluZXI6IHtcbiAgICAgICAgbWFyZ2luOiBcIjRweCAwcHhcIixcbiAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgIGJvcmRlclN0eWxlOiBcInNvbGlkXCIsXG4gICAgICAgIGJvcmRlcldpZHRoOiBcIjFweFwiLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCJcbiAgICB9LFxuICAgIGJhZGdlOiB7XG4gICAgICAgIHdpZHRoOiBcIjk1JVwiXG4gICAgfVxufSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGlzdCwgU2tlbGV0b24sIEJ1dHRvbiwgbWVzc2FnZSwgQ2FyZCwgQmFkZ2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHsgRnJvd25PdXRsaW5lZCwgRWRpdE91dGxpbmVkLCBEZWxldGVPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBFeWVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0IHsgQXBwTG9hZGVyIH0gZnJvbSBcIkBsb2FkZXJzL0FwcExvYWRlci9BcHBMb2FkZXJcIjtcbmltcG9ydCB7IEVudGl0eUlucHV0IH0gZnJvbSBcIkBjb21wb25lbnRzL0VudGl0eUlucHV0L0VudGl0eUlucHV0XCI7XG5pbXBvcnQgeyBDb25maXJtYXRpb25Nb2RhbCB9IGZyb20gXCJAY29tcG9uZW50cy9Db25maXJtYXRpb25Nb2RhbC9Db25maXJtYXRpb25Nb2RhbFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4vU2VhcmNoUmVzdWx0cy5qc3NcIjtcbmltcG9ydCAqIGFzIExBIGZyb20gXCJAYWN0aW9ucy9sZXhpY29uQWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgRUEgZnJvbSBcIkBhY3Rpb25zL21vZGFsRW50aXR5QWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgUEEgZnJvbSBcIkBhY3Rpb25zL21vZGFsUGVla0FjdGlvbnNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hSZXN1bHRzUHJvcHMge1xuICAgIGxvYWRpbmc/OiBib29sZWFuXG4gICAgc2VhcmNoPzogc3RyaW5nXG4gICAgbGV4aWNvbnM/OiBBcnJheTxhbnk+XG4gICAgcmVtb3ZlTGV4aWNvbklkOiBzdHJpbmdcbiAgICBzaG93Q29uZmlybTogYm9vbGVhblxuICAgIHJlbW92ZUxleGljb246IEZ1bmN0aW9uXG4gICAgYWRkTGV4aWNvbjogRnVuY3Rpb25cbiAgICByZW1vdmFsTXNnS2V5Pzogc3RyaW5nXG4gICAgYWRkTXNnS2V5Pzogc3RyaW5nXG59XG5cbmNvbnN0XG5nZXRMZXhpY29uSWQgPSBpZCA9PlxuICAgIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKGlkKVxuICAgID8uZ2V0QXR0cmlidXRlKFwiaWRcIik7XG5cbmV4cG9ydCBjb25zdCBTZWFyY2hSZXN1bHRzID0gKHtcbiAgICBsb2FkaW5nPWZhbHNlLFxuICAgIHNlYXJjaD1cIlwiLFxuICAgIHNob3dDb25maXJtPWZhbHNlLFxuICAgIHJlbW92ZUxleGljb25JZCxcbiAgICBsZXhpY29ucz1bXSxcbiAgICByZW1vdmVMZXhpY29uLFxuICAgIGFkZExleGljb24sXG4gICAgcmVtb3ZhbE1zZ0tleSxcbiAgICBhZGRNc2dLZXlcbn06IFNlYXJjaFJlc3VsdHNQcm9wcykgPT4ge1xuICAgIGNvbnN0XG4gICAgY2xhc3NlcyA9IHVzZVN0eWxlcygpLFxuICAgIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICAgIHJldHVybiBsb2FkaW5nXG4gICAgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxBcHBMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG4gICAgOiBsZXhpY29ucy5sZW5ndGggPT09IDBcbiAgICAgICAgPyBzZWFyY2gubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pY29ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcm93bk91dGxpbmVkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIk5vIHJlY29yZHNcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBibG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PFBsdXNPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmxvYWRpbmcoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBgQWRkaW5nIGRhdGEuLi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGFkZE1zZ0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTGV4aWNvbih7IHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogc2VhcmNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMQS5UT0dHTEVfUkVGRVRDSCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXRjaDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFQS5UT0dHTEVfTU9ERUxfRU5USVRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTEEuU0VUX0xFWElDT05TX1NFQVJDSCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XCJBZGQgaW5wdXRcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIDogKFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8Q29uZmlybWF0aW9uTW9kYWxcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17c2hvd0NvbmZpcm19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtudWxsfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPVwiQXJlIHlvdSBzdXJlP1wiXG4gICAgICAgICAgICAgICAgICAgIG9uT2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UubG9hZGluZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYFJlbW92aW5nIGRhdGEuLi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogcmVtb3ZhbE1zZ0tleVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMQS5UT0dHTEVfTU9ERUxfQ09ORklSTSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXhpY29uOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGV4aWNvbih7IHZhcmlhYmxlczogeyBfaWQ6IHJlbW92ZUxleGljb25JZCB9fSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogTEEuVE9HR0xFX01PREVMX0NPTkZJUk0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV4aWNvbjogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2xleGljb25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHsgX2lkLCBpbnB1dCwgZW50aXRpZXMgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e19pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWRnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93WmVybz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ9e2VudGl0aWVzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJhZGdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk51bWJlciBvZiBlbnRpdGllc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVudGl0aWVzLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiKDgyLCAxOTEsIDI4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJnYigxODAsIDE4MCwgMTgwKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFQS5UT0dHTEVfTU9ERUxfRU5USVRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV4aWNvbjogZ2V0TGV4aWNvbklkKF9pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVPdXRsaW5lZCBrZXk9XCJyZW1vdmVcIiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExBLlRPR0dMRV9NT0RFTF9DT05GSVJNLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV4aWNvbjogZ2V0TGV4aWNvbklkKF9pZCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFeWVPdXRsaW5lZCBrZXk9XCJwZWVrXCIgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUEEuVE9HR0xFX01PREVMX1BFRUssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXhpY29uOiBnZXRMZXhpY29uSWQoX2lkKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3c6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiB0aXRsZT17ZmFsc2V9IGxvYWRpbmc9e2xvYWRpbmd9IGFjdGl2ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e1wiSUQ6IFwifTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZVN0eWxlcyh7XG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxuICAgIH0sXG4gICAgdHJhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIlxuICAgIH0sXG4gICAgbG9nbzoge1xuICAgICAgICB3aWR0aDogXCI3cmVtXCJcbiAgICB9LFxuICAgIGFpSW1nOiB7XG4gICAgICAgIHdpZHRoOiBcIjIuNHJlbVwiLFxuICAgICAgICBtYXJnaW5SaWdodDogXCIwLjVyZW1cIlxuICAgIH0sXG4gICAgYWlUaXRsZToge1xuICAgICAgICBmb250U2l6ZTogXCIxLjRyZW1cIixcbiAgICB9XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgY29tcGFueUljb24gZnJvbSBcIkBhc3NldHMvYmlnZ3MtbG9nby1zbWFsbC5qcGdcIjtcbmltcG9ydCBhaUljb24gZnJvbSBcIkBhc3NldHMvYWktaWNvbnMtNjQucG5nXCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL1RyYWluZXJUaXRsZS5qc3NcIjtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFpbmVyVGl0bGVQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgVHJhaW5lclRpdGxlID0gKHByb3BzOiBUcmFpbmVyVGl0bGVQcm9wcykgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ299IHNyYz17Y29tcGFueUljb259IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudHJhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmFpSW1nfSBzcmM9e2FpSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmFpVGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1wiQUkgVHJhaW5lclwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZVN0eWxlcyh7XG4gICAgZW50aXR5OiAoWyBlbnRpdGllcywgbGFiZWwgXSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICBhY2NlbnRDb2xvclxuICAgICAgICB9ID0gZW50aXRpZXMuZmluZChlID0+IGUubGFiZWwgPT09IGxhYmVsKSB8fCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiMjQwLDI0MCwyNDBcIixcbiAgICAgICAgICAgIGFjY2VudENvbG9yOiBcIjE0NywxNDcsMTQ3XCJcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3Vyc29yOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYHJnYigke2JhY2tncm91bmRDb2xvcn0pYCxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMnB4IDhweFwiLFxuICAgICAgICAgICAgYm9yZGVyU3R5bGU6IFwic29saWRcIixcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBgcmdiKCR7YWNjZW50Q29sb3J9KWAsXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogXCIxcHggMXB4IDFweCA0cHhcIixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgY29sb3I6IGByZ2IoJHthY2NlbnRDb2xvcn0pYCxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGxhYmVsU2VsZWN0OiB7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGxhYmVsQ29udGFpbmVyOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogXCIwLjdyZW1cIlxuICAgIH0sXG4gICAgcG9wb3ZlclRpdGxlOiB7XG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgY29sb3I6IFwicmdiKDEyMCwgMTIwLCAxMjApXCIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgfVxufSk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9wb3ZlciwgU2VsZWN0LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi9FbnRpdHkuanNzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcyc7XG5pbXBvcnQgeyBEZWxldGVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCJAZ3JhcGhxbC9tdXRhdGlvbnNcIjtcbmltcG9ydCAqIGFzIExBIGZyb20gXCJAYWN0aW9ucy9sZXhpY29uQWN0aW9uc1wiO1xuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcblxuaW50ZXJmYWNlIElFbnRpdHkge1xuICAgIHRleHQ/OiBzdHJpbmdcbiAgICBfaWQ/OiBzdHJpbmdcbiAgICBsYWJlbD86IHN0cmluZ1xuICAgIHN0YXJ0PzogbnVtYmVyXG4gICAgc3RvcD86IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVByb3BzIHtcbiAgICBkaXNhYmxlPzogYm9vbGVhblxuICAgIF9pZD86IHN0cmluZ1xuICAgIGVudGl0eTogSUVudGl0eVxufVxuXG5leHBvcnQgY29uc3QgRW50aXR5ID0gKHtcbiAgICBkaXNhYmxlPWZhbHNlLFxuICAgIF9pZCxcbiAgICBlbnRpdHlcbn06IEVudGl0eVByb3BzKSA9PiB7XG4gICAgY29uc3RcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXG4gICAgZW50aXRpZXMgPSB1c2VTZWxlY3RvcigoeyBsZXhpY29ucyB9KSA9PiBsZXhpY29ucy5lbnRpdGllcyksXG4gICAgY2xhc3NlcyA9IHVzZVN0eWxlcyhbIGVudGl0aWVzIHx8IFtdLCBlbnRpdHkubGFiZWwgXSksXG4gICAgdXBkYXRlID0gbXV0YXRpb25zLnVwZGF0ZUVudGl0eUxhYmVsLFxuICAgIHJlbW92ZSA9IG11dGF0aW9ucy5yZW1vdmVFbnRpdHlMYWJlbCxcbiAgICBbIHVwZGF0ZUxhYmVsLCB1cGRhdGVTdGF0dXMgXSA9IHVzZU11dGF0aW9uKHVwZGF0ZS5tdXRhdGlvbiksXG4gICAgWyByZW1vdmVMYWJlbCwgcmVtb3ZlU3RhdHVzIF0gPSB1c2VNdXRhdGlvbihyZW1vdmUubXV0YXRpb24pO1xuXG4gICAgcmV0dXJuIGRpc2FibGUgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZW50aXR5fT5cbiAgICAgICAgICAgICAgICB7ZW50aXR5LnRleHR9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8UG9wb3ZlclxuICAgICAgICAgICAgICAgIHRyaWdnZXI9XCJjbGlja1wiXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17KFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMucG9wb3ZlclRpdGxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcIlVwZGF0ZSBMYWJlbFwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBjb250ZW50PXsoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sYWJlbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2VudGl0eS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsU2VsZWN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHsuLi5lbnRpdHksIGxhYmVsOiB2YWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVMYWJlbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2VudGl0eTogZGF0YS5faWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGRhdGEubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogZGF0YS5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3A6IGRhdGEuc3RvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMQS5UT0dHTEVfUkVGRVRDSCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlbnRpdGllcy5tYXAoKHsgbGFiZWwgfSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3B0aW9uIGtleT17aWR4fSB2YWx1ZT17bGFiZWx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvT3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxEZWxldGVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlTGFiZWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9lbnRpdHk6IGVudGl0eS5faWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IExBLlRPR0dMRV9SRUZFVENILFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZmV0Y2g6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiRGVsZXRlXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuZW50aXR5fT5cbiAgICAgICAgICAgICAgICAgICAge2VudGl0eS50ZXh0fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZVN0eWxlcyh7XG59KTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL0VudGl0eU1hbmFnZXJNb2RhbC5qc3NcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHsgQ2xvc2VDaXJjbGVPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuaW1wb3J0ICogYXMgcXVlcmllcyBmcm9tIFwiQGdyYXBocWwvcXVlcmllc1wiO1xuaW1wb3J0ICogYXMgRUEgZnJvbSBcIkByZWR1eC9hY3Rpb25zL21vZGFsRW50aXR5QWN0aW9uc1wiO1xuaW1wb3J0ICogYXMgTEEgZnJvbSBcIkByZWR1eC9hY3Rpb25zL2xleGljb25BY3Rpb25zXCI7XG5pbXBvcnQgeyBFbnRpdHlNYW5hZ2VyIH0gZnJvbSBcIkBjb21wb25lbnRzL0VudGl0eU1hbmFnZXIvRW50aXR5TWFuYWdlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eU1hbmFnZXJNb2RhbFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBFbnRpdHlNYW5hZ2VyTW9kYWwgPSAocHJvcHM6IEVudGl0eU1hbmFnZXJNb2RhbFByb3BzKSA9PiB7XG4gICAgY29uc3RcbiAgICBjbGFzc2VzID0gdXNlU3R5bGVzKCksXG4gICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxuICAgIHsgcmVmZXRjaCwgc2hvdywgbGV4aWNvbiwgc2VhcmNoLCBkYXRhLCBlbnRpdHkgfSA9IHVzZVNlbGVjdG9yKCh7IG1vZGFsRW50aXR5IH0pID0+IG1vZGFsRW50aXR5KSxcbiAgICB7IGVudGl0aWVzIH0gPSB1c2VTZWxlY3RvcigoeyBsZXhpY29ucyB9KSA9PiBsZXhpY29ucyk7XG5cbiAgICBjb25zdFxuICAgIHsgdHlwZW5hbWUsIHF1ZXJ5IH0gPSBxdWVyaWVzW2xleGljb24gIT0gbnVsbFxuICAgICAgICA/IFwiZ2V0TGV4aWNvbkJ5SWRcIlxuICAgICAgICA6IHNlYXJjaCAhPSBudWxsXG4gICAgICAgICAgICA/IFwiZ2V0TGV4aWNvbkJ5SW5wdXRcIlxuICAgICAgICAgICAgOiBcImdldExleGljb25CeUlkXCJcbiAgICBdLFxuICAgIGxleGljb25RdWVyeSA9IHVzZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgX2lkOiBsZXhpY29uLFxuICAgICAgICAgICAgaW5wdXQ6IHNlYXJjaFxuICAgICAgICB9LFxuICAgICAgICBza2lwOiAhc2hvdyxcbiAgICAgICAgcG9sbEludGVydmFsOiBzaG93ID8gNTAwIDogMFxuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBFQS5UT0dHTEVfRU5USVRZX01PREFMX1JFRkVUQ0gsXG4gICAgICAgICAgICAgICAgcmVmZXRjaDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV4aWNvblF1ZXJ5LnJlZmV0Y2goKTtcbiAgICAgICAgfVxuICAgIH0sIFsgcmVmZXRjaCBdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChsZXhpY29uUXVlcnkuZGF0YSAhPSBudWxsKVxuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IEVBLlNFVF9FTlRJVFlfTU9EQUxfREFUQSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBsZXhpY29uUXVlcnkuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgfSwgWyBsZXhpY29uUXVlcnkuZGF0YSBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBkZXN0cm95T25DbG9zZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIkVudGl0eSBNYW5hZ2VyXCJ9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17c2hvd31cbiAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XG4gICAgICAgICAgICAgICAgY2xvc2VJY29uPXs8Q2xvc2VDaXJjbGVPdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBMQS5UT0dHTEVfUkVGRVRDSCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZldGNoOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFQS5UT0dHTEVfTU9ERUxfRU5USVRZLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxleGljb246IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEVBLlNFVF9FTlRJVFlfTU9EQUxfREFUQSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxFbnRpdHlNYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eT17ZW50aXR5fVxuICAgICAgICAgICAgICAgICAgICBlbnRpdGllcz17ZW50aXRpZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgIClcbn0iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZVN0eWxlcyh7XG4gICAgbm9tZW5jbGF0dXJlOiB7XG4gICAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgICAgY29sb3I6IFwicmdiKDE4MCwgMTgwLCAxODApXCJcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgICBtYXJnaW46IFwiMnJlbSAwXCJcbiAgICB9XG59KTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCB7IENsb3NlQ2lyY2xlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcbmltcG9ydCB7IEFwcExvYWRlciB9IGZyb20gXCJAbG9hZGVycy9BcHBMb2FkZXIvQXBwTG9hZGVyXCI7XG5pbXBvcnQgeyBFbnRpdHlJbnB1dCB9IGZyb20gXCJAY29tcG9uZW50cy9FbnRpdHlJbnB1dC9FbnRpdHlJbnB1dFwiO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi9QZWVrTW9kYWwuanNzXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vcmVhY3QtaG9va3NcIjtcbmltcG9ydCAqIGFzIHF1ZXJpZXMgZnJvbSBcIkBncmFwaHFsL3F1ZXJpZXNcIjtcbmltcG9ydCAqIGFzIFBBIGZyb20gXCJAcmVkdXgvYWN0aW9ucy9tb2RhbFBlZWtBY3Rpb25zXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVla01vZGFsUHJvcHMge31cblxuZXhwb3J0IGNvbnN0IFBlZWtNb2RhbCA9IChwcm9wczogUGVla01vZGFsUHJvcHMpID0+IHtcbiAgICBjb25zdFxuICAgIGNsYXNzZXMgPSB1c2VTdHlsZXMoKSxcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXG4gICAgeyBzaG93LCBsZXhpY29uLCBkYXRhIH0gPSB1c2VTZWxlY3RvcigoeyBtb2RhbFBlZWsgfSkgPT4gbW9kYWxQZWVrKTtcblxuICAgIGNvbnN0XG4gICAgeyB0eXBlbmFtZSwgcXVlcnkgfSA9IHF1ZXJpZXMuZ2V0TGV4aWNvbkJ5SWQsXG4gICAgbGV4aWNvblF1ZXJ5ID0gdXNlUXVlcnkocXVlcnksIHtcbiAgICAgICAgdmFyaWFibGVzOiB7IF9pZDogbGV4aWNvbiB9LFxuICAgICAgICBza2lwOiAhc2hvd1xuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGxleGljb25RdWVyeS5kYXRhICE9IG51bGwpXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZW5hbWUsXG4gICAgICAgICAgICAgICAgdHlwZTogUEEuU0VUX1BFRUtfTU9EQUxfREFUQSxcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiBsZXhpY29uUXVlcnkuZGF0YVxuICAgICAgICAgICAgfSk7XG4gICAgfSwgWyBsZXhpY29uUXVlcnkuZGF0YSBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBjZW50ZXJlZFxuICAgICAgICAgICAgICAgIHRpdGxlPXtudWxsfVxuICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cbiAgICAgICAgICAgICAgICBjbG9zYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgdmlzaWJsZT17c2hvd31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YSA9PSBudWxsID8gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXBwTG9hZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKSA6ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgX2lkLCBpbnB1dCwgZW50aXRpZXMgfSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubm9tZW5jbGF0dXJlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIklEOiBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmlucHV0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVudGl0eUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfaWQ9e19pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0PXtpbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0aWVzPXtlbnRpdGllc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogUEEuVE9HR0xFX01PREVMX1BFRUssXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxleGljb246IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBQQS5TRVRfUEVFS19NT0RBTF9EQVRBLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiT2tcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSkoKX1cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvPlxuICAgICk7XG59IiwiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVc2VTdHlsZXMoe1xuICAgIHNlYXJjaEJhckNvbnRhaW5lcjoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcbiAgICB9LFxuICAgIHNlYXJjaFJlc3VsdHNDb250YWluZXI6IHtcbiAgICAgICAgZmxleEdyb3c6IFwiMVwiLFxuICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG5cbiAgICAgICAgLyogZm9yIEZpcmVmb3ggKi9cbiAgICAgICAgbWluSGVpZ2h0OiBcIjBcIixcbiAgICB9LFxufSk7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRGl2aWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL1NlYXJjaExheW91dC5qc3NcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcIkBjb21wb25lbnRzL1NlYXJjaEJhci9TZWFyY2hCYXJcIjtcbmltcG9ydCB7IFNlYXJjaFJlc3VsdHMgfSBmcm9tIFwiQGNvbXBvbmVudHMvU2VhcmNoUmVzdWx0cy9TZWFyY2hSZXN1bHRzXCI7XG5pbXBvcnQgeyBsZXhpY29uUmVtb3ZhbE5vdGlmaWNhdGlvbnMsIGxlaXhjb25BZGROb3RpZmljYXRpb25zIH0gZnJvbSBcIi4vU2VhcmNoTm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9yZWFjdC1ob29rc1wiO1xuaW1wb3J0ICogYXMgbXV0YXRpb25zIGZyb20gXCJAZ3JhcGhxbC9tdXRhdGlvbnNcIjtcbmltcG9ydCAqIGFzIHF1ZXJpZXMgZnJvbSBcIkBncmFwaHFsL3F1ZXJpZXNcIjtcbmltcG9ydCAqIGFzIExBIGZyb20gXCJAcmVkdXgvYWN0aW9ucy9sZXhpY29uQWN0aW9uc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaFJlc3VsdHNMYXlvdXRQcm9wcyB7fVxuXG5leHBvcnQgY29uc3QgU2VhcmNoTGF5b3V0ID0gKHByb3BzOiBTZWFyY2hSZXN1bHRzTGF5b3V0UHJvcHMpID0+IHtcbiAgICBjb25zdFxuICAgIGNsYXNzZXMgPSB1c2VTdHlsZXMoKSxcbiAgICBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCksXG4gICAge1xuICAgICAgICByZWZldGNoLFxuICAgICAgICBzZWFyY2gsXG4gICAgICAgIGxleGljb25zLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgICAgbW9kZWxDb25maXJtLFxuICAgICAgICBvcHRpb25zXG4gICAgfSA9IHVzZVNlbGVjdG9yKCh7IGxleGljb25zIH0pID0+IGxleGljb25zKSxcbiAgICB7IGV4YWN0TWF0Y2ggfSA9IG9wdGlvbnMsXG4gICAgc2hvd0NvbmZpcm0gPSBtb2RlbENvbmZpcm0uc2hvdyxcbiAgICByZW1vdmVMZXhpY29uSWQgPSBtb2RlbENvbmZpcm0ubGV4aWNvbixcbiAgICByZW1vdmFsTXNnS2V5ID0gYExFWElDT05fUkVNT1ZFX01TR19LRVlgLFxuICAgIGFkZE1zZ0tleSA9IGBMRVhJQ09OX0FERF9NU0dfS0VZYDtcblxuICAgIGNvbnN0XG4gICAgc2hvd0VudGl0eU1hbmFnZXIgPSB1c2VTZWxlY3RvcigoeyBtb2RhbEVudGl0eSB9KSA9PiBtb2RhbEVudGl0eS5zaG93KTtcblxuICAgIGNvbnN0XG4gICAgeyByZW1vdmVMZXhpY29uLCBjcmVhdGVMZXhpY29uIH0gPSBtdXRhdGlvbnMsXG4gICAgeyB0eXBlbmFtZSwgcXVlcnkgfSA9IHNlYXJjaC5sZW5ndGggPT09IDBcbiAgICAgICAgPyBxdWVyaWVzLnRvcExleGljb25zXG4gICAgICAgIDogIWV4YWN0TWF0Y2hcbiAgICAgICAgICAgID8gcXVlcmllcy50b3BMZXhpY29uc1NlYXJjaFxuICAgICAgICAgICAgOiBxdWVyaWVzLnRvcExleGljb25zU2VhcmNoRXhhY3RNYXRjaDtcblxuICAgIGNvbnN0XG4gICAgZW50aXR5UXVlcnkgPSB1c2VRdWVyeShxdWVyaWVzLmVudGl0aWVzLnF1ZXJ5KSxcbiAgICBsZXhpY29uUXVlcnkgPSB1c2VRdWVyeShxdWVyeSwge1xuICAgICAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHNlYXJjaCB9LFxuICAgICAgICBwb2xsSW50ZXJ2YWw6IHNob3dFbnRpdHlNYW5hZ2VyID8gMTUwMCA6IDUwMFxuICAgIH0pO1xuXG4gICAgY29uc3RcbiAgICBbIHJlbW92ZUxleGljb25NdXRhdGlvbiwgcmVtb3ZlUmVzdWx0cyBdID0gdXNlTXV0YXRpb24ocmVtb3ZlTGV4aWNvbi5tdXRhdGlvbiksXG4gICAgWyBhZGRMZXhpY29uTXV0YXRpb24sIGFkZFJlc3VsdHMgXSA9IHVzZU11dGF0aW9uKGNyZWF0ZUxleGljb24ubXV0YXRpb24pO1xuXG4gICAgbGV4aWNvblJlbW92YWxOb3RpZmljYXRpb25zKHJlbW92ZVJlc3VsdHMsIHJlbW92YWxNc2dLZXkpO1xuICAgIGxlaXhjb25BZGROb3RpZmljYXRpb25zKGFkZFJlc3VsdHMsIGFkZE1zZ0tleSk7XG5cbiAgICAvLyBMb2FkIGVudGl0eSBkYXRhLlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdHlwZW5hbWUgfSA9IHF1ZXJpZXMuZW50aXRpZXM7XG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZW5hbWUsXG4gICAgICAgICAgICB0eXBlOiBMQS5TRVRfRU5USVRJRVNfREFUQSxcbiAgICAgICAgICAgIHBheWxvYWQ6IGVudGl0eVF1ZXJ5LmRhdGFcbiAgICAgICAgfSk7XG4gICAgfSwgWyBlbnRpdHlRdWVyeS5kYXRhIF0pO1xuXG4gICAgLy8gUGVyZm9ybSBhbm90aGVyIHJlZmV0Y2ggd2hlbiB0cmlnZ2VyZWQgdG8gdmlhIHRoZSBcInJlZmV0Y2hcIlxuICAgIC8vIHJlZHV4IHByb3BlcnR5LlxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChyZWZldGNoKSB7XG4gICAgICAgICAgICBsZXhpY29uUXVlcnkucmVmZXRjaCgpO1xuXG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogTEEuVE9HR0xFX1JFRkVUQ0gsXG4gICAgICAgICAgICAgICAgcmVmZXRjaDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGVuYW1lLFxuICAgICAgICAgICAgICAgIHR5cGU6IExBLlNFVF9MRVhJQ09OU19EQVRBLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGxleGljb25RdWVyeS5kYXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFsgcmVmZXRjaCBdKTtcblxuICAgIC8vIFRyaWdnZXIgYW4gdXBkYXRlIGJhc2VkIG9uIHRoZSByZXN1bHQgb2YgdGhlIHJlY2VpdmVkIGRhdGEuXG4gICAgLy8gVGhpcyBtYXkgZ2V0IHRyaWdnZXJlZCBhZ2FpbiBieSB0aGUgcmVkdXggXCJyZWZldGNoXCIsIGJ1dCB0aGF0XG4gICAgLy8gd29uJ3QgaHVydC5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXhpY29uUXVlcnkucmVmZXRjaCgpO1xuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGVuYW1lLFxuICAgICAgICAgICAgdHlwZTogTEEuU0VUX0xFWElDT05TX0RBVEEsXG4gICAgICAgICAgICBwYXlsb2FkOiBsZXhpY29uUXVlcnkuZGF0YVxuICAgICAgICB9KTtcbiAgICB9LCBbIGxleGljb25RdWVyeS5kYXRhIF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaEJhckNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEJhclxuICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPXtsZXhpY29uUXVlcnkubG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgIGV4YWN0TWF0Y2g9e2V4YWN0TWF0Y2h9XG4gICAgICAgICAgICAgICAgICAgIGVudGl0aWVzPXtlbnRpdGllc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8RGl2aWRlciBzdHlsZT17eyBtYXJnaW46IFwiMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAge2BTaG93aW5nICR7bGV4aWNvbnMubGVuZ3RoIDwgMjAgPyBsZXhpY29ucy5sZW5ndGggOiBcIjIwK1wifSByZXN1bHRzYH1cbiAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaFJlc3VsdHNDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxTZWFyY2hSZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9e2xleGljb25RdWVyeS5sb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g9e3NlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgc2hvd0NvbmZpcm09e3Nob3dDb25maXJtfVxuICAgICAgICAgICAgICAgICAgICBsZXhpY29ucz17bGV4aWNvbnN9XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUxleGljb25JZD17cmVtb3ZlTGV4aWNvbklkfVxuICAgICAgICAgICAgICAgICAgICByZW1vdmVMZXhpY29uPXtyZW1vdmVMZXhpY29uTXV0YXRpb259XG4gICAgICAgICAgICAgICAgICAgIGFkZExleGljb249e2FkZExleGljb25NdXRhdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZhbE1zZ0tleT17cmVtb3ZhbE1zZ0tleX1cbiAgICAgICAgICAgICAgICAgICAgYWRkTXNnS2V5PXthZGRNc2dLZXl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0ICogYXMgbXV0YXRpb24gZnJvbSBcIkBncmFwaHFsL211dGF0aW9uc1wiO1xuaW1wb3J0ICogYXMgQSBmcm9tIFwiQGFjdGlvbnMvbGV4aWNvbkFjdGlvbnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IGRlZmF1bHREdXJhdGlvbjogbnVtYmVyID0gMjtcblxuZXhwb3J0IGNvbnN0XG5sZXhpY29uUmVtb3ZhbE5vdGlmaWNhdGlvbnMgPSAoc3RhdHVzLCBrZXksIGR1cmF0aW9uPWRlZmF1bHREdXJhdGlvbikgPT4ge1xuICAgIGNvbnN0XG4gICAgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpLFxuICAgIHsgdHlwZW5hbWUgfSA9IG11dGF0aW9uLnJlbW92ZUxleGljb24sXG4gICAgeyBjYWxsZWQ9ZmFsc2UsIGxvYWRpbmc9ZmFsc2UsIGRhdGE9bnVsbCB9ID0gc3RhdHVzO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGNhbGxlZCAmJiAhbG9hZGluZyAmJiBkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29kZT1udWxsIH0gPSBkYXRhW3R5cGVuYW1lXTtcblxuICAgICAgICAgICAgaWYgKGNvZGUgIT0gbnVsbCAmJiBjb2RlID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IEEuVE9HR0xFX1JFRkVUQ0hcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTdWNjZXNzZnVsbHkgcmVtb3ZlZCcsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uud2FybmluZyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdOb3QgcmVtb3ZlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLicsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbIHN0YXR1cyBdKTtcbn0sXG5cbmxlaXhjb25BZGROb3RpZmljYXRpb25zID0gKHN0YXR1cywga2V5LCBkdXJhdGlvbj1kZWZhdWx0RHVyYXRpb24pID0+IHtcbiAgICBjb25zdFxuICAgIGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKSxcbiAgICB7IHR5cGVuYW1lIH0gPSBtdXRhdGlvbi5jcmVhdGVMZXhpY29uLFxuICAgIHsgY2FsbGVkPWZhbHNlLCBsb2FkaW5nPWZhbHNlLCBkYXRhPW51bGwgfSA9IHN0YXR1cztcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChjYWxsZWQgJiYgIWxvYWRpbmcgJiYgZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvZGU9bnVsbCB9ID0gZGF0YVt0eXBlbmFtZV07XG5cbiAgICAgICAgICAgIGlmIChjb2RlICE9IG51bGwgJiYgY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBBLlRPR0dMRV9SRUZFVENIXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU3VjY2Vzc2Z1bGx5IGFkZGVkJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS53YXJuaW5nKHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ05vdCBhZGRlZCwgcGxlYXNlIHRyeSBhZ2FpbiBsYXRlci4uLicsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbIHN0YXR1cyBdKTtcbn0iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbi8vIFtOT1RFXVxuLy8gSSBoYWQgdG8gYXBwbHkgdGhlIFwibGVmdFwiIHByb3BlcnR5IGluIHRoZSBKUyBiZWNhdXNlLFxuLy8gZm9yIHdoYXRldmVyIHJlYXNvbiB0aGF0IGlzIHVua25vd24gdG8gbWUsIHRoZSBcImxlZnRcIlxuLy8gcHJvcGVydHkgZG9lcyBub3Qgb3ZlcnJpZGUgaW4gdGhlIE1lZGlhIFF1ZXJ5LCBvbmNlIGFwcGxpZWQuXG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVzZVN0eWxlcyh7XG4gICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KVwiOiB7XG4gICAgICAgIGNvbnRhaW5lcjoge1xuICAgICAgICAgICAgdG9wOiBcIjBcIixcbiAgICAgICAgICAgIHJpZ2h0OiBcIjBcIixcbiAgICAgICAgICAgIGJvdHRvbTogXCIwXCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjUwJVwiLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVgoLTUwJSlcIlxuICAgICAgICB9LFxuICAgIH0sXG4gICAgXCJAbWVkaWEgKG1heC13aWR0aDogOTk5cHgpXCI6IHtcbiAgICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgICAgICB0b3A6IFwiMFwiLFxuICAgICAgICAgICAgcmlnaHQ6IFwiMFwiLFxuICAgICAgICAgICAgYm90dG9tOiBcIjBcIixcbiAgICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgY29udGFpbmVyOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEycHhcIlxuICAgIH0sXG4gICAgc2VjdGlvbjoge1xuICAgICAgICBtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICBmbGV4R3JvdzogXCIxXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuXG4gICAgICAgIC8qIGZvciBGaXJlZm94ICovXG4gICAgICAgIG1pbkhlaWdodDogMCxcbiAgICB9XG59KTsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuL1RyYWluZXJMYXlvdXQuanNzXCI7XG5pbXBvcnQgeyBTZWFyY2hMYXlvdXQgfSBmcm9tIFwiQHJlYWN0L2NvbnRhaW5lcnMvbGF5b3V0cy9TZWFyY2hMYXlvdXQvU2VhcmNoTGF5b3V0XCI7XG5pbXBvcnQgeyBUcmFpbmVyVGl0bGUgfSBmcm9tIFwiQGNvbXBvbmVudHMvVHJhaW5lclRpdGxlL1RyYWluZXJUaXRsZVwiO1xuaW1wb3J0IHsgRW50aXR5TWFuYWdlck1vZGFsIH0gZnJvbSBcIkBjb250YWluZXJzL0VudGl0eU1hbmFnZXJNb2RhbC9FbnRpdHlNYW5hZ2VyTW9kYWxcIjtcbmltcG9ydCB7IFBlZWtNb2RhbCB9IGZyb20gXCJAY29udGFpbmVycy9QZWVrTW9kYWwvUGVla01vZGFsXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhaW5lckxheW91dFByb3BzIHt9XG5cbmV4cG9ydCBjb25zdCBUcmFpbmVyTGF5b3V0ID0gKHByb3BzOiBUcmFpbmVyTGF5b3V0UHJvcHMpID0+IHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgPEVudGl0eU1hbmFnZXJNb2RhbCAvPlxuICAgICAgICAgICAgICAgICAgICA8UGVla01vZGFsIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFpbmVyVGl0bGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaExheW91dCAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==