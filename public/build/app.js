(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.tsx":
/*!************************!*\
  !*** ./assets/app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context/AuthContext */ "./assets/context/AuthContext.tsx");
/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Question */ "./assets/components/Question.tsx");
/* harmony import */ var _components_Demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Demo */ "./assets/components/Demo.tsx");
/* harmony import */ var _components_Activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Activity */ "./assets/components/Activity.tsx");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/filters */ "./assets/scripts/filters.ts");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scripts_filters__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _scripts_switches__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/switches */ "./assets/scripts/switches.ts");
/* harmony import */ var _scripts_switches__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scripts_switches__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _scripts_question_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/question-form */ "./assets/scripts/question-form.js");
/* harmony import */ var _scripts_question_form__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scripts_question_form__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/menu */ "./assets/scripts/menu.ts");
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scripts_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/accordion */ "./assets/scripts/accordion.ts");
/* harmony import */ var _scripts_accordion__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scripts_accordion__WEBPACK_IMPORTED_MODULE_12__);













document.addEventListener('DOMContentLoaded', function () {
  var questionContainer = document.querySelector('#quiz-container');
  if (questionContainer) {
    var mode = questionContainer.dataset.mode || 'quiz';
    var questionId = parseInt(questionContainer.dataset.questionId || '0');
    var showComments = questionContainer.dataset.showComments !== 'false';
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(questionContainer);
    root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Question__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mode: mode,
      questionId: questionId,
      showComments: showComments
    })));
  }
  var demoContainer = document.querySelector('#demo-container');
  if (demoContainer) {
    var _root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(demoContainer);
    _root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Demo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mode: 'display'
    }));
  }
  var activityContainer = document.querySelector('#activity-container');
  if (activityContainer) {
    var _mode = activityContainer.dataset.mode || 'display';
    var _root2 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(activityContainer);
    _root2.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Activity__WEBPACK_IMPORTED_MODULE_6__["default"], {
      mode: _mode
    }));
  }
});

/***/ }),

/***/ "./assets/components/Activity.tsx":
/*!****************************************!*\
  !*** ./assets/components/Activity.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Activity: () => (/* binding */ Activity),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _services_commentsApi__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../services/commentsApi */ "./assets/services/commentsApi.ts");
/* harmony import */ var _Comment_CommentItem__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Comment/CommentItem */ "./assets/components/Comment/CommentItem.tsx");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../utils/routes */ "./assets/utils/routes.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Loading */ "./assets/components/Loading.tsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }































var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};







function Activity(_ref) {
  var mode = _ref.mode;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    comments = _useState2[0],
    setComments = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    loadComments();
  }, []);
  function loadComments() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            _context.next = 4;
            return (0,_services_commentsApi__WEBPACK_IMPORTED_MODULE_33__.getLastComments)();
          case 4:
            data = _context.sent;
            setComments(data);
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.error('Error loading comments:', _context.t0);
          case 11:
            _context.prev = 11;
            setLoading(false);
            return _context.finish(11);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8, 11, 14]]);
    }));
  }
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Loading__WEBPACK_IMPORTED_MODULE_36__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, comments && comments.length > 0 ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_37__.motion.ul, {
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_32__.container,
    initial: "hidden",
    animate: "visible",
    className: 'comments-container flex flex-col glass box bg-dark-grey-secondary'
  }, comments.map(function (comment, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Comment_CommentItem__WEBPACK_IMPORTED_MODULE_34__["default"], {
      mode: mode,
      comment: comment,
      index: index,
      key: "comment-".concat(index)
    });
  })))) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement((react__WEBPACK_IMPORTED_MODULE_31___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "glass box flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("h2", {
    className: "small-title"
  }, "There's no comment to show"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("p", null, "You can add comments after answering questions !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_35__.ROUTES.QUIZ,
    className: "button button-primary"
  }, "Play"))))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activity);

/***/ }),

/***/ "./assets/components/Choices.tsx":
/*!***************************************!*\
  !*** ./assets/components/Choices.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _MarkdownRenderer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./MarkdownRenderer */ "./assets/components/MarkdownRenderer.tsx");
/* harmony import */ var _hook_RaysAnimation__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../hook/RaysAnimation */ "./assets/hook/RaysAnimation.tsx");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }






























function Choices(_ref) {
  var mode = _ref.mode,
    question = _ref.question,
    answers = _ref.answers,
    setAnswers = _ref.setAnswers;
  (0,_hook_RaysAnimation__WEBPACK_IMPORTED_MODULE_27__["default"])(question, mode);
  function handleAnswersChange(answerId) {
    if (question.correctChoices) return;
    if (!setAnswers) return;
    setAnswers(function (prevSelected) {
      if (question.numberOfCorrectChoices === 1) {
        return [answerId];
      } else {
        if (prevSelected.includes(answerId)) {
          return prevSelected.filter(function (id) {
            return id !== answerId;
          });
        } else {
          return [].concat(_toConsumableArray(prevSelected), [answerId]);
        }
      }
    });
  }
  function checkAnswerValidity(answerId) {
    if (!question.correctChoices) return false;
    return question.correctChoices.includes(answerId);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_29__.motion.ul, {
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_28__.container,
    initial: "hidden",
    animate: "visible",
    className: "choices-container flex flex-col gap-8"
  }, question.choices.map(function (choice, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_29__.motion.li, {
      variants: _motion_animations__WEBPACK_IMPORTED_MODULE_28__.item,
      key: "choice-".concat(choice.id),
      className: "choice-option glass"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("fieldset", {
      className: "checkbox-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("input", {
      type: "checkbox",
      id: "choice-".concat(index),
      name: "choice",
      value: choice.id,
      checked: answers.includes(choice.id),
      onChange: function onChange() {
        return handleAnswersChange(choice.id);
      },
      className: "checkbox-input ".concat(question.correctChoices && (checkAnswerValidity(choice.id) ? "correct" : "incorrect"))
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("span", {
      className: "checkbox-tile box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement("span", {
      className: "checkbox-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_26__.MarkdownRenderer, {
      content: choice.content
    }))))));
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Choices);

/***/ }),

/***/ "./assets/components/Comment/CommentDelete.tsx":
/*!*****************************************************!*\
  !*** ./assets/components/Comment/CommentDelete.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _services_commentsApi__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../services/commentsApi */ "./assets/services/commentsApi.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
































var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};


function CommentUpdate(_ref) {
  var question = _ref.question,
    setQuestion = _ref.setQuestion,
    comment = _ref.comment,
    onCommentDelete = _ref.onCommentDelete,
    onCancel = _ref.onCancel;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDeleting = _useState2[0],
    setIsDeleting = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  function handleSubmit(e) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var deletedComment, updatedQuestion;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setIsDeleting(true);
            setError(null);
            _context.prev = 3;
            _context.next = 6;
            return (0,_services_commentsApi__WEBPACK_IMPORTED_MODULE_33__.deleteComment)(comment.id);
          case 6:
            deletedComment = _context.sent;
            updatedQuestion = Object.assign({}, question);
            if (updatedQuestion.comments) {
              updatedQuestion.comments = updatedQuestion.comments.filter(function (c) {
                return c.id !== comment.id;
              });
              setQuestion(updatedQuestion);
            }
            onCommentDelete(deletedComment);
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](3);
            if (_context.t0 instanceof Error) {
              setError(_context.t0.message);
            }
          case 15:
            _context.prev = 15;
            setIsDeleting(false);
            return _context.finish(15);
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 12, 15, 18]]);
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement((react__WEBPACK_IMPORTED_MODULE_32___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", null, "Do you want to remove this comment ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: 'buttons-container'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    type: "button",
    className: "button button-tertiary",
    onClick: onCancel,
    disabled: isDeleting
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    type: "submit",
    className: "button button-primary button-red",
    disabled: isDeleting,
    onClick: handleSubmit
  }, isDeleting ? 'Deleting' : 'Delete'))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentUpdate);

/***/ }),

/***/ "./assets/components/Comment/CommentItem.tsx":
/*!***************************************************!*\
  !*** ./assets/components/Comment/CommentItem.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _MarkdownRenderer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../MarkdownRenderer */ "./assets/components/MarkdownRenderer.tsx");
/* harmony import */ var _CommentUpdate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CommentUpdate */ "./assets/components/Comment/CommentUpdate.tsx");
/* harmony import */ var _CommentDelete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CommentDelete */ "./assets/components/Comment/CommentDelete.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../context/AuthContext */ "./assets/context/AuthContext.tsx");
/* harmony import */ var _ProfilePicture__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ProfilePicture */ "./assets/components/ProfilePicture.tsx");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../utils/routes */ "./assets/utils/routes.ts");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");




















function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









function CommentItem(_ref) {
  var comment = _ref.comment,
    index = _ref.index,
    setQuestion = _ref.setQuestion,
    question = _ref.question,
    mode = _ref.mode;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditing = _useState2[0],
    setIsEditing = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isDeleting = _useState4[0],
    setIsDeleting = _useState4[1];
  var _formatDate = formatDate(comment.creationDate),
    formattedDate = _formatDate.formattedDate,
    formattedTime = _formatDate.formattedTime;
  var _useAuth = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_24__.useAuth)(),
    isAuthor = _useAuth.isAuthor,
    isAdmin = _useAuth.isAdmin;
  var userCanEdit = isAuthor(comment.author.id) || isAdmin();
  function handleCommentUpdated() {
    setIsEditing(false);
  }
  function handleCommentDeleted() {
    setIsDeleting(false);
  }
  function handleStartEditing() {
    setIsEditing(true);
    setIsDeleting(false);
  }
  function handleStartDeleting() {
    setIsDeleting(true);
    setIsEditing(false);
  }
  function formatDate(dateObject) {
    var date = new Date(dateObject.date);
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return {
      formattedDate: "".concat(day, "/").concat(month, "/").concat(year),
      formattedTime: "".concat(hours, ":").concat(minutes)
    };
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement((react__WEBPACK_IMPORTED_MODULE_20___default().Fragment), null, index !== 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("hr", {
    className: "h-[2px] bg-white/10 border-0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_28__.motion.li, {
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_27__.item,
    className: "py-8 first:pt-0 last:pb-0 flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "comment-container flex flex-col gap-spacing-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "comment-header-container flex flex-wrap gap-4 items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "user-infos-container flex flex-wrap gap-spacing-secondary items-center grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_ProfilePicture__WEBPACK_IMPORTED_MODULE_25__["default"], {
    image: comment.author.image
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", null, comment.author.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "date-container flex gap-4  items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
    className: 'flex items-center muted'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
    className: "material-icons mr-2 md-14"
  }, "calendar_today"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", null, formattedDate)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("p", {
    className: 'flex items-center muted'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
    className: "material-icons mr-2 md-14"
  }, "schedule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", null, formattedTime))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "buttons-container grow"
  }, userCanEdit && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement((react__WEBPACK_IMPORTED_MODULE_20___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
    className: "button button-action",
    onClick: function onClick() {
      return handleStartEditing();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
    className: "material-icons"
  }, "edit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("button", {
    className: "button button-action",
    onClick: function onClick() {
      return handleStartDeleting();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
    className: "material-icons"
  }, "delete")))), mode === 'display' && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement((react__WEBPACK_IMPORTED_MODULE_20___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("a", {
    href: "".concat(_utils_routes__WEBPACK_IMPORTED_MODULE_26__.ROUTES.QUESTION, "/").concat(comment.questionId),
    className: "button button-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("span", {
    className: "material-icons"
  }, "visibility")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement("div", {
    className: "comment-body-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_21__.MarkdownRenderer, {
    content: comment.content
  }))), isEditing && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_CommentUpdate__WEBPACK_IMPORTED_MODULE_22__["default"], {
    question: question,
    setQuestion: setQuestion,
    comment: comment,
    onCommentUpdated: handleCommentUpdated,
    onCancel: function onCancel() {
      return setIsEditing(false);
    }
  }), isDeleting && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_CommentDelete__WEBPACK_IMPORTED_MODULE_23__["default"], {
    question: question,
    setQuestion: setQuestion,
    comment: comment,
    onCommentDelete: handleCommentDeleted,
    onCancel: function onCancel() {
      return setIsDeleting(false);
    }
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentItem);

/***/ }),

/***/ "./assets/components/Comment/CommentList.tsx":
/*!***************************************************!*\
  !*** ./assets/components/Comment/CommentList.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _services_commentsApi__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../services/commentsApi */ "./assets/services/commentsApi.ts");
/* harmony import */ var _CommentItem__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./CommentItem */ "./assets/components/Comment/CommentItem.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../context/AuthContext */ "./assets/context/AuthContext.tsx");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../utils/routes */ "./assets/utils/routes.ts");
/* harmony import */ var _MarkdownInfos__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../MarkdownInfos */ "./assets/components/MarkdownInfos.tsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
































var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};






function CommentList(_ref) {
  var question = _ref.question,
    setQuestion = _ref.setQuestion;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    comment = _useState2[0],
    setComment = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isSubmitting = _useState4[0],
    setIsSubmitting = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    success = _useState6[0],
    setSuccess = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    error = _useState8[0],
    setError = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_32__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    markdownInfos = _useState10[0],
    setMarkdownInfos = _useState10[1];
  var _useAuth = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_35__.useAuth)(),
    isAuthenticated = _useAuth.isAuthenticated;
  function handleSubmit(e) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var newComment, updatedQuestion;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setIsSubmitting(true);
            setError(null);
            setSuccess(false);
            _context.prev = 4;
            _context.next = 7;
            return (0,_services_commentsApi__WEBPACK_IMPORTED_MODULE_33__.addComment)(question.id, comment);
          case 7:
            newComment = _context.sent;
            if (newComment && newComment.id) {
              updatedQuestion = Object.assign({}, question);
              if (!updatedQuestion.comments) {
                updatedQuestion.comments = [];
              }
              updatedQuestion.comments.push(newComment);
              setQuestion(updatedQuestion);
              setSuccess(true);
              setComment('');
            }
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            if (_context.t0 instanceof Error) {
              setError('Failed to add comment: ' + _context.t0.message);
            } else {
              setError('Failed to add comment: ' + _context.t0);
            }
          case 14:
            _context.prev = 14;
            setIsSubmitting(false);
            return _context.finish(14);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 11, 14, 17]]);
    }));
  }
  function handleShowInfos(e) {
    e.preventDefault();
    setMarkdownInfos(function (prevState) {
      return !prevState;
    });
  }
  ;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement((react__WEBPACK_IMPORTED_MODULE_32___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "page-separator-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h2", {
    className: 'title'
  }, "Comments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("ul", {
    className: 'comments-container flex flex-col glass box bg-dark-grey-secondary'
  }, question.comments.length > 0 ? question.comments.map(function (comment, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_CommentItem__WEBPACK_IMPORTED_MODULE_34__["default"], {
      comment: comment,
      index: index,
      question: question,
      setQuestion: setQuestion,
      key: "comment-".concat(index)
    });
  }) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", null, "There's no discussion about this question..."))), isAuthenticated() ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "form-container gap-4 glass box bg-dark-grey-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h2", {
    className: "small-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
    className: "material-icons"
  }, "chat_bubble"), "Join the conversation"), success && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "alert alert-success"
  }, "Comment add with success !"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "alert alert-danger"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "form-group w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("textarea", {
    className: "form",
    value: comment,
    onChange: function onChange(e) {
      return setComment(e.target.value);
    },
    placeholder: "Your comment...",
    rows: 4,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "form-bottom-container flex-wrap justify-between flex gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    className: "flex items-center opacity-50",
    onClick: handleShowInfos
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("img", {
    src: "/images/logos/markdown-logo.png",
    alt: "Markdown logo",
    className: "h-5 mr-2"
  }), "Markdown infos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "buttons-container grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("button", {
    type: "submit",
    className: "button button-primary",
    disabled: isSubmitting
  }, isSubmitting ? 'Sending' : 'Send')))), markdownInfos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_MarkdownInfos__WEBPACK_IMPORTED_MODULE_37__["default"], null))) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "glass box flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h2", {
    className: 'small-title'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
    className: "material-icons"
  }, "chat_bubble"), "Wanna join the conversation ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", null, "Please login or register !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_36__.ROUTES.LOGIN,
    className: "button button-tertiary"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_36__.ROUTES.REGISTER,
    className: "button button-primary"
  }, "Register")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentList);

/***/ }),

/***/ "./assets/components/Comment/CommentUpdate.tsx":
/*!*****************************************************!*\
  !*** ./assets/components/Comment/CommentUpdate.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _services_commentsApi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../services/commentsApi */ "./assets/services/commentsApi.ts");
/* harmony import */ var _MarkdownInfos__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../MarkdownInfos */ "./assets/components/MarkdownInfos.tsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }































var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



function CommentUpdate(_ref) {
  var question = _ref.question,
    setQuestion = _ref.setQuestion,
    comment = _ref.comment,
    onCommentUpdated = _ref.onCommentUpdated,
    onCancel = _ref.onCancel;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isSubmitting = _useState2[0],
    setIsSubmitting = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(comment.content),
    _useState6 = _slicedToArray(_useState5, 2),
    newComment = _useState6[0],
    setNewComment = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    markdownInfos = _useState8[0],
    setMarkdownInfos = _useState8[1];
  function handleSubmit(e) {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var updatedComment, updatedQuestion, commentIndex;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            setIsSubmitting(true);
            setError(null);
            _context.prev = 3;
            _context.next = 6;
            return (0,_services_commentsApi__WEBPACK_IMPORTED_MODULE_32__.updateComment)(comment.id, newComment);
          case 6:
            updatedComment = _context.sent;
            if (updatedComment && updatedComment.id) {
              updatedQuestion = Object.assign({}, question);
              if (!updatedQuestion.comments) {
                updatedQuestion.comments = [];
              }
              commentIndex = updatedQuestion.comments.findIndex(function (c) {
                return c.id === updatedComment.id;
              });
              if (commentIndex !== -1) {
                updatedQuestion.comments[commentIndex] = updatedComment;
              } else {
                updatedQuestion.comments.push(updatedComment);
              }
              setQuestion(updatedQuestion);
            }
            onCommentUpdated(updatedComment);
            _context.next = 14;
            break;
          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            if (_context.t0 instanceof Error) {
              setError(_context.t0.message);
            }
          case 14:
            _context.prev = 14;
            setIsSubmitting(false);
            return _context.finish(14);
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 11, 14, 17]]);
    }));
  }
  function handleShowInfos(e) {
    e.preventDefault();
    setMarkdownInfos(function (prevState) {
      return !prevState;
    });
  }
  ;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "form-container"
  }, error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "alert alert-danger"
  }, error), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "form-group  w-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("textarea", {
    className: "form",
    value: newComment,
    onChange: function onChange(e) {
      return setNewComment(e.target.value);
    },
    rows: 3,
    required: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "form-bottom-container flex-wrap justify-between flex gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    className: "flex items-center opacity-50",
    onClick: handleShowInfos
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("img", {
    src: "/images/logos/markdown-logo.png",
    alt: "Markdown logo",
    className: "h-5 mr-2"
  }), "Markdown infos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("div", {
    className: 'buttons-container grow'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    type: "button",
    className: "button btn-tertiary",
    onClick: onCancel,
    disabled: isSubmitting
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement("button", {
    type: "submit",
    className: "button button-primary",
    disabled: isSubmitting
  }, isSubmitting ? 'Updating' : 'Save')))), markdownInfos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_MarkdownInfos__WEBPACK_IMPORTED_MODULE_33__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentUpdate);

/***/ }),

/***/ "./assets/components/Demo.tsx":
/*!************************************!*\
  !*** ./assets/components/Demo.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Demo: () => (/* binding */ Demo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QuestionContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionContent */ "./assets/components/QuestionContent.tsx");
/* harmony import */ var _Choices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Choices */ "./assets/components/Choices.tsx");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _Demo_demoQuestion1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Demo/demoQuestion1 */ "./assets/components/Demo/demoQuestion1.ts");
/* harmony import */ var _Demo_demoQuestion2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Demo/demoQuestion2 */ "./assets/components/Demo/demoQuestion2.ts");
/* harmony import */ var _Demo_demoQuestion3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Demo/demoQuestion3 */ "./assets/components/Demo/demoQuestion3.ts");
/* harmony import */ var _Demo_demoQuestion4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Demo/demoQuestion4 */ "./assets/components/Demo/demoQuestion4.ts");
/* harmony import */ var _Demo_demoQuestion5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Demo/demoQuestion5 */ "./assets/components/Demo/demoQuestion5.ts");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");














function Demo(_ref) {
  var mode = _ref.mode;
  var questionsData = [{
    question: _Demo_demoQuestion1__WEBPACK_IMPORTED_MODULE_6__.demoQuestion1,
    answers: _Demo_demoQuestion1__WEBPACK_IMPORTED_MODULE_6__.demoAnswers1
  }, {
    question: _Demo_demoQuestion2__WEBPACK_IMPORTED_MODULE_7__.demoQuestion2,
    answers: _Demo_demoQuestion2__WEBPACK_IMPORTED_MODULE_7__.demoAnswers2
  }, {
    question: _Demo_demoQuestion3__WEBPACK_IMPORTED_MODULE_8__.demoQuestion3,
    answers: _Demo_demoQuestion3__WEBPACK_IMPORTED_MODULE_8__.demoAnswers3
  }, {
    question: _Demo_demoQuestion4__WEBPACK_IMPORTED_MODULE_9__.demoQuestion4,
    answers: _Demo_demoQuestion4__WEBPACK_IMPORTED_MODULE_9__.demoAnswers4
  }, {
    question: _Demo_demoQuestion5__WEBPACK_IMPORTED_MODULE_10__.demoQuestion5,
    answers: _Demo_demoQuestion5__WEBPACK_IMPORTED_MODULE_10__.demoAnswers5
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_11__.Swiper, {
    speed: 1000,
    // spaceBetween={50}
    breakpoints: {
      0: {
        spaceBetween: 24
      },
      640: {
        spaceBetween: 32
      }
    },
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    // grabCursor={true}
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_12__.Autoplay],
    className: "max-w-[800px] ml-auto mr-auto"
  }, questionsData.map(function (data, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_11__.SwiperSlide, {
      key: data.question.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_13__.motion.div, {
      key: data.question.id,
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      variants: _motion_animations__WEBPACK_IMPORTED_MODULE_5__.item,
      className: "flex flex-col relative"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
      className: "flex flex-col gap-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_QuestionContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      question: data.question
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Choices__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mode: mode,
      question: data.question,
      answers: data.answers
    }))));
  })));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demo);

/***/ }),

/***/ "./assets/components/Demo/demoQuestion1.ts":
/*!*************************************************!*\
  !*** ./assets/components/Demo/demoQuestion1.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoAnswers1: () => (/* binding */ demoAnswers1),
/* harmony export */   demoQuestion1: () => (/* binding */ demoQuestion1)
/* harmony export */ });
var demoQuestion1 = {
  "id": 275,
  "categories": [{
    "id": 701,
    "name": "HTML"
  }],
  "choices": [{
    "id": 186,
    "content": "```html\r\n<input type=\"check\">\r\n```"
  }, {
    "id": 187,
    "content": "```html\r\n<checkbox>\r\n```"
  }, {
    "id": 188,
    "content": "```html\r\n<input type=\"checkbox\">\r\n```"
  }, {
    "id": 189,
    "content": "```\r\n<check>\r\n```"
  }],
  "comments": [],
  "content": "What is the correct HTML for creating a checkbox ?",
  "difficulty": 1,
  "explanation": "To create a checkbox in HTML, you use the `<input>` element with its `type` attribute set to `\"checkbox\"`.",
  "numberOfCorrectChoices": 1,
  "correctChoices": [188]
};
var demoAnswers1 = [188];

/***/ }),

/***/ "./assets/components/Demo/demoQuestion2.ts":
/*!*************************************************!*\
  !*** ./assets/components/Demo/demoQuestion2.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoAnswers2: () => (/* binding */ demoAnswers2),
/* harmony export */   demoQuestion2: () => (/* binding */ demoQuestion2)
/* harmony export */ });
var demoQuestion2 = {
  "id": 273,
  "categories": [{
    "id": 721,
    "name": "CSS"
  }],
  "choices": [{
    "id": 177,
    "content": "```css\r\np {\r\n    text-style: bold;\r\n}\r\n```"
  }, {
    "id": 178,
    "content": "```css\r\np {\r\n    font-weight: bold;\r\n}\r\n```"
  }, {
    "id": 179,
    "content": "```css\r\np {\r\n  font: bold;\r\n}\r\n```"
  }, {
    "id": 180,
    "content": "```css\r\np {\r\n  style: bold;\r\n}\r\n```"
  }, {
    "id": 181,
    "content": "```css\r\np {\r\n  font-weight: 700;\r\n}\r\n```"
  }],
  "comments": [],
  "content": "What is the correct CSS syntax for making all paragraph elements bold ?",
  "difficulty": 1,
  "explanation": "To make text bold in CSS, you use the `font-weight` property with a value of `bold`.",
  "numberOfCorrectChoices": 2,
  "correctChoices": [178, 181]
};
var demoAnswers2 = [177, 180];

/***/ }),

/***/ "./assets/components/Demo/demoQuestion3.ts":
/*!*************************************************!*\
  !*** ./assets/components/Demo/demoQuestion3.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoAnswers3: () => (/* binding */ demoAnswers3),
/* harmony export */   demoQuestion3: () => (/* binding */ demoQuestion3)
/* harmony export */ });
var demoQuestion3 = {
  "id": 272,
  "categories": [{
    "id": 704,
    "name": "JavaScript"
  }],
  "choices": [{
    "id": 173,
    "content": "20, 10"
  }, {
    "id": 174,
    "content": "20, 20"
  }, {
    "id": 175,
    "content": "10, 10"
  }, {
    "id": 176,
    "content": "20, undefined"
  }],
  "comments": [],
  "content": "What will be the output of the following JavaScript code?\r\n  ```javascript\r\n  function example() {\r\n    var x = 10;\r\n    if (true) {\r\n      var x = 20;\r\n      console.log(x);\r\n    }\r\n    console.log(x);\r\n  }\r\n  example();",
  "difficulty": 1,
  "explanation": "This question tests understanding of JavaScript variable scoping with `var`. Unlike `let` and `const`, variables declared with `var` are function-scoped, not block-scoped.",
  "numberOfCorrectChoices": 1,
  "correctChoices": [174]
};
var demoAnswers3 = [174];

/***/ }),

/***/ "./assets/components/Demo/demoQuestion4.ts":
/*!*************************************************!*\
  !*** ./assets/components/Demo/demoQuestion4.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoAnswers4: () => (/* binding */ demoAnswers4),
/* harmony export */   demoQuestion4: () => (/* binding */ demoQuestion4)
/* harmony export */ });
var demoQuestion4 = {
  "id": 279,
  "categories": [{
    "id": 703,
    "name": "PHP"
  }],
  "choices": [{
    "id": 202,
    "content": "Converts all characters to uppercase"
  }, {
    "id": 203,
    "content": "Converts all characters to lowercase"
  }, {
    "id": 204,
    "content": "Capitalizes the first letter of each word"
  }, {
    "id": 205,
    "content": "Returns \"HELLO WORLD\""
  }],
  "comments": [],
  "content": "What does this PHP function do?\r\n```php\r\nfunction process($str) {\r\n    return ucwords(strtolower($str));\r\n}\r\necho process(\"HELLO world\");\r\n```",
  "difficulty": 2,
  "explanation": "This function processes a string in two steps: First, it converts the entire string to lowercase using `strtolower()`.",
  "numberOfCorrectChoices": 1,
  "correctChoices": [204]
};
var demoAnswers4 = [202];

/***/ }),

/***/ "./assets/components/Demo/demoQuestion5.ts":
/*!*************************************************!*\
  !*** ./assets/components/Demo/demoQuestion5.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demoAnswers5: () => (/* binding */ demoAnswers5),
/* harmony export */   demoQuestion5: () => (/* binding */ demoQuestion5)
/* harmony export */ });
var demoQuestion5 = {
  "id": 280,
  "categories": [{
    "id": 723,
    "name": "SQL"
  }],
  "choices": [{
    "id": 206,
    "content": "Returns the 5 cheapest products"
  }, {
    "id": 207,
    "content": "Returns the 5 most expensive"
  }, {
    "id": 208,
    "content": "Returns 5 random products"
  }, {
    "id": 209,
    "content": "Returns products with prices higher than 5"
  }],
  "comments": [],
  "content": "What does this SQL query do?\r\n```sql\r\nSELECT name, price \r\nFROM products \r\nORDER BY price DESC \r\nLIMIT 5;\r\n```",
  "difficulty": 1,
  "explanation": "This SQL query selects the `name` and `price` columns from the `products` table, orders the results by price in descending order (highest to lowest), and limits the output to only 5 rows.",
  "numberOfCorrectChoices": 1,
  "correctChoices": [207]
};
var demoAnswers5 = [207];

/***/ }),

/***/ "./assets/components/Explanation.tsx":
/*!*******************************************!*\
  !*** ./assets/components/Explanation.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MarkdownRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownRenderer */ "./assets/components/MarkdownRenderer.tsx");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");




function Explanation(_ref) {
  var question = _ref.question;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_2__.item,
    className: "question-bottom-container mt-4 flex flex-col gap-spacing-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold"
  }, "Explanation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_1__.MarkdownRenderer, {
    content: question.explanation
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explanation);

/***/ }),

/***/ "./assets/components/Image.tsx":
/*!*************************************!*\
  !*** ./assets/components/Image.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Image(_ref) {
  var image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/uploads/images/questions/".concat(image),
    className: "mt-4 max-w-full rounded-radius-secondary mx-auto",
    alt: ""
  }));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./assets/components/LimitReached.tsx":
/*!********************************************!*\
  !*** ./assets/components/LimitReached.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/routes */ "./assets/utils/routes.ts");


function LimitReached() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "big-title grow"
  }, "Limit reached !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "glass box flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "small-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "material-icons"
  }, "warning"), "You've reached the question limit for today"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Please login or register to continue to play.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.LOGIN,
    className: "button button-tertiary"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.REGISTER,
    className: "button button-primary"
  }, "Register"))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LimitReached);

/***/ }),

/***/ "./assets/components/Loading.tsx":
/*!***************************************!*\
  !*** ./assets/components/Loading.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

/***/ }),

/***/ "./assets/components/MarkdownInfos.tsx":
/*!*********************************************!*\
  !*** ./assets/components/MarkdownInfos.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function MarkdownInfos() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "markdown-info box bg-very-dark-grey-primary rounded-radius-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "` ... `"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "muted ml-2"
  }, "Inline code"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "```javascript ... ```"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "muted ml-2"
  }, "Code block"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "* ... *"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "muted ml-2"
  }, "Italic"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "** ... **"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "muted ml-2"
  }, "Bold"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "[ ... ](https://url.com)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "muted ml-2"
  }, "Link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "- ..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "muted ml-2"
  }, "Unordered list"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, "1. ..."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "muted ml-2"
  }, "Ordered list"))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownInfos);

/***/ }),

/***/ "./assets/components/MarkdownRenderer.tsx":
/*!************************************************!*\
  !*** ./assets/components/MarkdownRenderer.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownRenderer: () => (/* binding */ MarkdownRenderer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/index.js");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/prism.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js");







var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




function MarkdownRenderer(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_8__.Markdown, {
    components: {
      code: function code(_a) {
        var children = _a.children,
          className = _a.className,
          node = _a.node,
          style = _a.style,
          ref = _a.ref,
          rest = __rest(_a, ["children", "className", "node", "style", "ref"]);
        var match = /language-(\w+)/.exec(className || "");
        var codeString = Array.isArray(children) ? children.join("") : String(children);
        return match ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({
          language: match[1],
          PreTag: "div",
          style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_10__.okaidia,
          className: "code-wrapper"
        }, rest), codeString.replace(/\n$/, ""))) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("code", Object.assign({
          className: className
        }, rest), children));
      }
    }
  }, content);
}

/***/ }),

/***/ "./assets/components/ProfilePicture.tsx":
/*!**********************************************!*\
  !*** ./assets/components/ProfilePicture.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function ProfilePicture(_ref) {
  var image = _ref.image;
  var imageSrc = image ? "/uploads/images/users/".concat(image) : "/images/logos/profile-picture.png";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "aspect-square rounded-full w-12 xl:w-12 object-cover border-light-grey-secondary border-2",
    src: imageSrc,
    alt: "Profile picture"
  });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePicture);

/***/ }),

/***/ "./assets/components/Question.tsx":
/*!****************************************!*\
  !*** ./assets/components/Question.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _services_questionsApi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../services/questionsApi */ "./assets/services/questionsApi.ts");
/* harmony import */ var _Choices__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Choices */ "./assets/components/Choices.tsx");
/* harmony import */ var _Comment_CommentList__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Comment/CommentList */ "./assets/components/Comment/CommentList.tsx");
/* harmony import */ var _LimitReached__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./LimitReached */ "./assets/components/LimitReached.tsx");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./Loading */ "./assets/components/Loading.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Sidebar */ "./assets/components/Sidebar.tsx");
/* harmony import */ var _QuestionNotFound__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./QuestionNotFound */ "./assets/components/QuestionNotFound.tsx");
/* harmony import */ var _QuestionContent__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./QuestionContent */ "./assets/components/QuestionContent.tsx");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../motion/animations */ "./assets/motion/animations.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



































var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};











function Question(_ref) {
  var _this = this;
  var mode = _ref.mode,
    questionId = _ref.questionId,
    showComments = _ref.showComments;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    question = _useState4[0],
    setQuestion = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    answers = _useState6[0],
    setAnswers = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    limitReached = _useState8[0],
    setLimitReached = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    visible = _useState10[0],
    setVisible = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_35__.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    wrap = _useState12[0],
    setWrap = _useState12[1];
  (0,react__WEBPACK_IMPORTED_MODULE_35__.useEffect)(function () {
    // console.log(question)
  }, [question]);
  (0,react__WEBPACK_IMPORTED_MODULE_35__.useEffect)(function () {
    loadQuestion();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_35__.useEffect)(function () {
    var quizContainer = document.querySelector('#quiz-container');
    if (quizContainer) {
      if (wrap) {
        quizContainer.classList.add('wrap');
      } else {
        quizContainer.classList.remove('wrap');
      }
    }
  }, [wrap]);
  function loadQuestion() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var urlFilters, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            setAnswers([]);
            urlFilters = searchForParams();
            _context.prev = 3;
            if (!(mode === 'display' && questionId > 0)) {
              _context.next = 10;
              break;
            }
            _context.next = 7;
            return (0,_services_questionsApi__WEBPACK_IMPORTED_MODULE_36__.getQuestion)(questionId);
          case 7:
            data = _context.sent;
            _context.next = 13;
            break;
          case 10:
            _context.next = 12;
            return (0,_services_questionsApi__WEBPACK_IMPORTED_MODULE_36__.getRandomQuestion)(urlFilters);
          case 12:
            data = _context.sent;
          case 13:
            if (!('limitReached' in data)) {
              _context.next = 18;
              break;
            }
            setLimitReached(true);
            return _context.abrupt("return");
          case 18:
            if ('id' in data) {
              setQuestion(data);
            }
          case 19:
            _context.next = 24;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](3);
            console.error('Error loading question:', _context.t0);
          case 24:
            _context.prev = 24;
            setLoading(false);
            return _context.finish(24);
          case 27:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[3, 21, 24, 27]]);
    }));
  }
  function searchForParams() {
    var searchParams = new URLSearchParams(window.location.search);
    var urlFilters = {};
    if (searchParams.has('difficulty')) {
      urlFilters.difficulty = searchParams.get('difficulty');
    }
    if (searchParams.has('category[]')) {
      urlFilters.categories = searchParams.getAll('category[]');
    }
    return urlFilters;
  }
  function handleNextQuestion() {
    setVisible(false);
  }
  function handleToggleWrap() {
    setWrap(function (wrap) {
      return !wrap;
    });
  }
  function handleSubmit() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var result;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return (0,_services_questionsApi__WEBPACK_IMPORTED_MODULE_36__.submitAnswers)(question === null || question === void 0 ? void 0 : question.id, answers);
          case 3:
            result = _context2.sent;
            if (question) {
              setQuestion(Object.assign(Object.assign({}, question), {
                correctChoices: result.correctChoices,
                isMatch: result.isMatch
              }));
            }
            _context2.next = 10;
            break;
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.error('Error submitting answers : ', _context2.t0);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
  }
  if (limitReached) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_LimitReached__WEBPACK_IMPORTED_MODULE_39__["default"], null);
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Loading__WEBPACK_IMPORTED_MODULE_40__["default"], null);
  if (!question) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_QuestionNotFound__WEBPACK_IMPORTED_MODULE_42__["default"], null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement("div", {
    className: "flex flex-col gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_45__.AnimatePresence, {
    mode: 'wait',
    onExitComplete: function onExitComplete() {
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return loadQuestion();
            case 2:
              setVisible(true);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
    }
  }, visible && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_46__.motion.div, {
    key: question.id,
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_44__.item,
    className: "flex flex-col relative"
  }, mode === 'game' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_41__["default"], {
    onNext: handleNextQuestion,
    onWrap: handleToggleWrap,
    wrap: wrap,
    isLoading: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement("div", {
    className: "flex flex-col gap-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_QuestionContent__WEBPACK_IMPORTED_MODULE_43__["default"], {
    question: question
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Choices__WEBPACK_IMPORTED_MODULE_37__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  }), mode === 'game' && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement("div", {
    className: 'buttons-container'
  }, question.correctChoices ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement("button", {
    className: "button button-tertiary",
    onClick: handleNextQuestion
  }, "Next question")) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement("button", {
    className: 'button button-tertiary',
    onClick: handleSubmit
  }, "Validate")))))))), question.correctChoices && showComments && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Comment_CommentList__WEBPACK_IMPORTED_MODULE_38__["default"], {
    question: question,
    setQuestion: setQuestion
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Question);

/***/ }),

/***/ "./assets/components/QuestionContent.tsx":
/*!***********************************************!*\
  !*** ./assets/components/QuestionContent.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _MarkdownRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MarkdownRenderer */ "./assets/components/MarkdownRenderer.tsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Image */ "./assets/components/Image.tsx");
/* harmony import */ var _Explanation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Explanation */ "./assets/components/Explanation.tsx");











function QuestionContent(_ref) {
  var question = _ref.question;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "glass box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "question-header-container flex gap-8 justify-between items-center mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("ul", {
    className: "tags-container grow-1"
  }, question.categories.map(function (category, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("li", {
      key: "category-".concat(index)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("span", {
      className: "tag tag-small"
    }, category.name));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "flex items-end gap-1"
  }, Array(3).fill(null).map(function (_, index) {
    var heightClass = index === 0 ? 'h-3' : index === 1 ? 'h-4' : 'h-5';
    var opacityClass = index < (question === null || question === void 0 ? void 0 : question.difficulty) ? 'opacity-100' : 'opacity-50';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("span", {
      className: "rounded-sm w-1.5 bg-white/75 ".concat(heightClass, " ").concat(opacityClass),
      key: index
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("div", {
    className: "question-content-container mt-4 flex flex-col gap-spacing-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_8__.MarkdownRenderer, {
    content: question.content
  })), question.numberOfCorrectChoices > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("p", {
    className: 'opacity-50 text-sm mt-4'
  }, "Multiple choices possible."), question.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {
    image: question.image
  }), question.correctChoices && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_Explanation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    question: question
  }));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionContent);

/***/ }),

/***/ "./assets/components/QuestionNotFound.tsx":
/*!************************************************!*\
  !*** ./assets/components/QuestionNotFound.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/routes */ "./assets/utils/routes.ts");


function QuestionNotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "page-header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "big-title grow"
  }, "Question not found")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "glass box flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: 'small-title'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "material-icons"
  }, "warning"), "No question found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "No question found, try later or with different filters.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.FILTERS,
    className: "button button-primary"
  }, "Filters"))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionNotFound);

/***/ }),

/***/ "./assets/components/Sidebar.tsx":
/*!***************************************!*\
  !*** ./assets/components/Sidebar.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/routes */ "./assets/utils/routes.ts");


function Sidebar(_ref) {
  var onNext = _ref.onNext,
    onWrap = _ref.onWrap,
    wrap = _ref.wrap,
    isLoading = _ref.isLoading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "xl:sticky top-spacing-primary z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("aside", {
    className: "absolute glass box bg-dark-grey-secondary bottom-0 xl:bottom-auto xl:mt-0 xl:-left-spacing-primary xl:-translate-x-full translate-y-1/2 xl:translate-y-0 p-2 z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons-container xl:flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button button-action",
    onClick: onNext,
    disabled: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "material-icons"
  }, "autorenew")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.FILTERS,
    className: "button button-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "material-icons"
  }, "tune")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "button button-action",
    onClick: onWrap
  }, wrap ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "material-icons"
  }, "start")) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "material-icons"
  }, "keyboard_return"))))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./assets/context/AuthContext.tsx":
/*!****************************************!*\
  !*** ./assets/context/AuthContext.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthContext: () => (/* binding */ AuthContext),
/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),
/* harmony export */   useAuth: () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_31__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }































var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var AuthContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_31__.createContext)({
  currentUser: null,
  loading: true,
  error: null,
  isAuthor: function isAuthor() {
    return false;
  },
  isAuthenticated: function isAuthenticated() {
    return false;
  },
  isAdmin: function isAdmin() {
    return false;
  }
});
function AuthProvider(_ref) {
  var children = _ref.children;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    currentUser = _useState2[0],
    setCurrentUser = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_31__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_31__.useEffect)(function () {
    function fetchCurrentUser() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('/api/user/current');
            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();
            case 6:
              data = _context.sent;
              if (data.error) {
                setCurrentUser(null);
                setError(data.error);
              } else {
                setCurrentUser(data);
                setError(null);
              }
              _context.next = 14;
              break;
            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setCurrentUser(null);
              setError(_context.t0 instanceof Error ? _context.t0.message : 'An unknown error occurred');
            case 14:
              _context.prev = 14;
              setLoading(false);
              return _context.finish(14);
            case 17:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 10, 14, 17]]);
      }));
    }
    fetchCurrentUser();
  }, []);
  function isAuthor(contentAuthorId) {
    if (!currentUser) return false;
    return currentUser.id === contentAuthorId;
  }
  function isAuthenticated() {
    return currentUser !== null;
  }
  function isAdmin() {
    if (!currentUser) return false;
    return currentUser.roles.includes('ROLE_ADMIN');
  }
  var value = {
    currentUser: currentUser,
    loading: loading,
    error: error,
    isAuthor: isAuthor,
    isAuthenticated: isAuthenticated,
    isAdmin: isAdmin
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(AuthContext.Provider, {
    value: value
  }, children);
}
function useAuth() {
  return react__WEBPACK_IMPORTED_MODULE_31___default().useContext(AuthContext);
}

/***/ }),

/***/ "./assets/hook/RaysAnimation.tsx":
/*!***************************************!*\
  !*** ./assets/hook/RaysAnimation.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useRaysAnimation(question, mode) {
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _a, _b;
    var originalElement = document.querySelector('.rays');
    if (mode === 'display') return;
    if (originalElement) {
      if (question.correctChoices) {
        var clonedElement = originalElement.cloneNode(true);
        var colorClass = question.isMatch === true ? 'green' : 'red';
        clonedElement.classList.add(colorClass);
        clonedElement.classList.add('hide');
        (_a = originalElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(clonedElement, originalElement.nextSibling);
        originalElement.classList.add('hide');
        requestAnimationFrame(function () {
          clonedElement.classList.remove('hide');
        });
        setTimeout(function () {
          originalElement.remove();
        }, 1000);
      } else {
        var _clonedElement = originalElement.cloneNode(true);
        _clonedElement.classList.add('hide');
        (_b = originalElement.parentNode) === null || _b === void 0 ? void 0 : _b.insertBefore(_clonedElement, originalElement.nextSibling);
        originalElement.classList.add('hide');
        requestAnimationFrame(function () {
          _clonedElement.classList.remove('hide');
          _clonedElement.classList.remove('green');
          _clonedElement.classList.remove('red');
        });
        setTimeout(function () {
          originalElement.remove();
        }, 1000);
      }
    }
  }, [question, mode]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useRaysAnimation);

/***/ }),

/***/ "./assets/motion/animations.ts":
/*!*************************************!*\
  !*** ./assets/motion/animations.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   item: () => (/* binding */ item)
/* harmony export */ });
var container = {
  hidden: {
    opacity: 0,
    y: 10
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  }
};
var item = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 10
  }
};

/***/ }),

/***/ "./assets/scripts/accordion.ts":
/*!*************************************!*\
  !*** ./assets/scripts/accordion.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var accordionButtons = document.querySelectorAll('.accordion-button');
  function toggleAccordion() {
    var content = this.nextElementSibling;
    this.classList.toggle('open');
    if (this.classList.contains('open')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  }
  accordionButtons.forEach(function (button) {
    button.addEventListener('click', toggleAccordion);
  });
});

/***/ }),

/***/ "./assets/scripts/filters.ts":
/*!***********************************!*\
  !*** ./assets/scripts/filters.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var resetButton = document.getElementById('resetFilters');
  var form = document.getElementById('questionForm');
  resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', function () {
    var radioButtons = form === null || form === void 0 ? void 0 : form.querySelectorAll('input[type="radio"]');
    radioButtons === null || radioButtons === void 0 ? void 0 : radioButtons.forEach(function (radio) {
      radio.checked = false;
    });
    var checkboxes = form === null || form === void 0 ? void 0 : form.querySelectorAll('input[type="checkbox"]');
    checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
  });
});

/***/ }),

/***/ "./assets/scripts/menu.ts":
/*!********************************!*\
  !*** ./assets/scripts/menu.ts ***!
  \********************************/
/***/ (() => {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('#button-menu');
  var headerBottomContainer = document.querySelector('.header-bottom-container');
  var isMenuOpen = false;
  function openMenu() {
    headerBottomContainer.classList.add('visible');
    isMenuOpen = true;
  }
  function closeMenu() {
    headerBottomContainer.classList.remove('visible');
    isMenuOpen = false;
  }
  menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener('click', function (event) {
    event.stopPropagation(); // Empêche la propagation du clic au document
    if (!isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  });
  headerBottomContainer === null || headerBottomContainer === void 0 ? void 0 : headerBottomContainer.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  document.addEventListener('click', function () {
    if (isMenuOpen) {
      closeMenu();
    }
  });
});

/***/ }),

/***/ "./assets/scripts/question-form.js":
/*!*****************************************!*\
  !*** ./assets/scripts/question-form.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.delete-choice').forEach(function (button) {
    button.addEventListener('click', function () {
      this.closest('.choice-item').remove();
      updateAddButtonState();
    });
  });
  document.querySelectorAll('.add_item_link').forEach(function (btn) {
    btn.addEventListener("click", addFormToCollection);
  });
  function updateAddButtonState() {
    var choicesList = document.querySelector('.choices-list');
    if (!choicesList) return;
    var maxChoices = parseInt(choicesList.dataset.maxChoices);
    var currentCount = document.querySelectorAll('.choice-item').length;
    document.querySelectorAll('.add_item_link').forEach(function (btn) {
      btn.disabled = currentCount >= maxChoices;
      var messageElement = btn.parentNode.querySelector('.max-choices-message');
      if (currentCount >= maxChoices) {
        if (!messageElement) {
          messageElement = document.createElement('div');
          messageElement.className = 'max-choices-message text-sm opacity-50 mt-4';
          btn.parentNode.appendChild(messageElement);
        }
        messageElement.textContent = "Maximum number of choices reached.";
      } else if (messageElement) {
        messageElement.remove();
      }
    });
  }
  function addFormToCollection(e) {
    var collectionHolder = document.querySelector('.' + e.currentTarget.dataset.collectionHolderClass);
    if (!collectionHolder || !collectionHolder.dataset.prototype) {
      console.error('Collection holder or prototype not found', collectionHolder);
      return;
    }
    var item = document.createElement('li');
    item.classList.add('choice-item', 'flex', 'flex-col', 'mb-8', 'relative');
    item.innerHTML = collectionHolder.dataset.prototype.replace(/__name__/g, collectionHolder.dataset.index);
    var removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.classList.add('button', 'button-action', 'absolute', 'bottom-[16px]', 'right-[16px]', 'delete-choice');
    removeButton.innerHTML = "<span class=\"material-icons\">delete</span>";
    removeButton.addEventListener('click', function () {
      item.remove();
      updateAddButtonState();
    });
    item.appendChild(removeButton);
    collectionHolder.appendChild(item);
    collectionHolder.dataset.index++;
    updateAddButtonState();
  }
  updateAddButtonState();
});

/***/ }),

/***/ "./assets/scripts/switches.ts":
/*!************************************!*\
  !*** ./assets/scripts/switches.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.addEventListener('DOMContentLoaded', function () {
  var switchButtons = document.querySelectorAll('button.switch-label');
  var scoresContainer = document.querySelectorAll('.score-container');
  function showScoresByPeriod(period) {
    scoresContainer.forEach(function (item) {
      item.classList.remove('active');
    });
    var visibleScores = document.querySelectorAll(".score-container[data-period=\"".concat(period, "\"]"));
    visibleScores.forEach(function (score) {
      score.classList.add('active');
    });
  }
  switchButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
      switchButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      if (index === 0) {
        showScoresByPeriod('week');
      } else if (index === 1) {
        showScoresByPeriod('month');
      } else if (index === 2) {
        showScoresByPeriod('all-time');
      }
    });
  });
  var activeButton = document.querySelector('.switch-label.active');
  if (activeButton) {
    var activeIndex = Array.from(switchButtons).indexOf(activeButton);
    var periods = ['week', 'month', 'all-time'];
    showScoresByPeriod(periods[activeIndex]);
  } else {
    showScoresByPeriod('week');
  }
});

/***/ }),

/***/ "./assets/services/commentsApi.ts":
/*!****************************************!*\
  !*** ./assets/services/commentsApi.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addComment: () => (/* binding */ addComment),
/* harmony export */   deleteComment: () => (/* binding */ deleteComment),
/* harmony export */   getComments: () => (/* binding */ getComments),
/* harmony export */   getLastComments: () => (/* binding */ getLastComments),
/* harmony export */   updateComment: () => (/* binding */ updateComment)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }


























var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var BASE_URL = '/api';
function getComments(questionId) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch("".concat(BASE_URL, "/question/").concat(questionId, "/comments"));
        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.json());
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
}
function getLastComments() {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("".concat(BASE_URL, "/comments/last"));
        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return response.json();
        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", data.comments);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
}
function addComment(questionId, content) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response, errorText;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("".concat(BASE_URL, "/question/").concat(questionId, "/comment/add"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              content: content
            }),
            credentials: 'include'
          });
        case 2:
          response = _context3.sent;
          if (response.ok) {
            _context3.next = 9;
            break;
          }
          _context3.next = 6;
          return response.text();
        case 6:
          errorText = _context3.sent;
          console.error('Server error:', errorText);
          throw new Error("Server error: ".concat(response.status, " ").concat(response.statusText));
        case 9:
          return _context3.abrupt("return", response.json());
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
}
function updateComment(commentId, content) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var response, errorData;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch("".concat(BASE_URL, "/comment/").concat(commentId, "/edit"), {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              commentId: commentId,
              content: content
            }),
            credentials: 'include'
          });
        case 2:
          response = _context4.sent;
          if (response.ok) {
            _context4.next = 8;
            break;
          }
          _context4.next = 6;
          return response.json();
        case 6:
          errorData = _context4.sent;
          throw new Error(errorData.error || 'Error while comment edition.');
        case 8:
          return _context4.abrupt("return", response.json());
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
}
function deleteComment(commentId) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    var response, errorData;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return fetch("".concat(BASE_URL, "/comment/").concat(commentId, "/delete"), {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: 'include'
          });
        case 2:
          response = _context5.sent;
          if (response.ok) {
            _context5.next = 8;
            break;
          }
          _context5.next = 6;
          return response.json();
        case 6:
          errorData = _context5.sent;
          throw new Error(errorData.error || 'Error while comment edition.');
        case 8:
          return _context5.abrupt("return", response.json());
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
}

/***/ }),

/***/ "./assets/services/questionsApi.ts":
/*!*****************************************!*\
  !*** ./assets/services/questionsApi.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getQuestion: () => (/* binding */ getQuestion),
/* harmony export */   getRandomQuestion: () => (/* binding */ getRandomQuestion),
/* harmony export */   submitAnswers: () => (/* binding */ submitAnswers)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "./node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ "./node_modules/core-js/modules/web.url-search-params.delete.js");
/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ "./node_modules/core-js/modules/web.url-search-params.has.js");
/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ "./node_modules/core-js/modules/web.url-search-params.size.js");
/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_30__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }































var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var BASE_URL = '/api/question';
function getRandomQuestion() {
  return __awaiter(this, arguments, void 0, function () {
    var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var params, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            params = new URLSearchParams();
            if (filters.difficulty && !isNaN(parseFloat(filters.difficulty))) {
              params.append('difficulty', filters.difficulty);
            }
            if (filters.categories && filters.categories.length > 0) {
              filters.categories.forEach(function (category) {
                params.append('category[]', category);
              });
            }
            _context.next = 5;
            return fetch("".concat(BASE_URL, "?").concat(params));
          case 5:
            response = _context.sent;
            return _context.abrupt("return", response.json());
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })();
  });
}
function getQuestion(questionId) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("".concat(BASE_URL, "/").concat(questionId));
        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.json());
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
}
function submitAnswers(questionId, answers) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("".concat(BASE_URL, "/").concat(questionId, "/check"), {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              answers: answers
            })
          });
        case 2:
          response = _context3.sent;
          return _context3.abrupt("return", response.json());
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
}

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/utils/routes.ts":
/*!********************************!*\
  !*** ./assets/utils/routes.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ROUTES: () => (/* binding */ ROUTES)
/* harmony export */ });
var ROUTES = {
  HOME: '/',
  QUIZ: '/quiz',
  FILTERS: '/filters',
  LOGIN: '/login',
  REGISTER: '/register',
  QUESTION: '/question'
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js-node_modules_react-syntax-highlighter_dist_cjs_style-56b9f9"], () => (__webpack_exec__("./assets/app.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDTztBQUNSO0FBQ1I7QUFDUTtBQUNuQjtBQUNDO0FBQ0M7QUFDSztBQUNUO0FBQ0s7QUFDN0JNLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRCxJQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDbkUsSUFBSUQsaUJBQWlCLEVBQUU7SUFDbkIsSUFBTUUsSUFBSSxHQUFHRixpQkFBaUIsQ0FBQ0csT0FBTyxDQUFDRCxJQUFJLElBQUksTUFBTTtJQUNyRCxJQUFNRSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0wsaUJBQWlCLENBQUNHLE9BQU8sQ0FBQ0MsVUFBVSxJQUFJLEdBQUcsQ0FBQztJQUN4RSxJQUFNRSxZQUFZLEdBQUdOLGlCQUFpQixDQUFDRyxPQUFPLENBQUNHLFlBQVksS0FBSyxPQUFPO0lBQ3ZFLElBQU1DLElBQUksR0FBR2QsNERBQVUsQ0FBQ08saUJBQWlCLENBQUM7SUFDMUNPLElBQUksQ0FBQ0MsTUFBTSxjQUFDaEIsMERBQW1CLENBQUNFLDhEQUFZLEVBQUUsSUFBSSxlQUM5Q0YsMERBQW1CLENBQUNHLDREQUFRLEVBQUU7TUFBRU8sSUFBSSxFQUFFQSxJQUFJO01BQUVFLFVBQVUsRUFBRUEsVUFBVTtNQUFFRSxZQUFZLEVBQUVBO0lBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMzRztFQUNBLElBQU1JLGFBQWEsR0FBR1osUUFBUSxDQUFDRyxhQUFhLENBQUMsaUJBQWlCLENBQUM7RUFDL0QsSUFBSVMsYUFBYSxFQUFFO0lBQ2YsSUFBTUgsS0FBSSxHQUFHZCw0REFBVSxDQUFDaUIsYUFBYSxDQUFDO0lBQ3RDSCxLQUFJLENBQUNDLE1BQU0sY0FBQ2hCLDBEQUFtQixDQUFDSSx3REFBSSxFQUFFO01BQUVNLElBQUksRUFBRTtJQUFVLENBQUMsQ0FBQyxDQUFDO0VBQy9EO0VBQ0EsSUFBTVMsaUJBQWlCLEdBQUdiLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ3ZFLElBQUlVLGlCQUFpQixFQUFFO0lBQ25CLElBQU1ULEtBQUksR0FBR1MsaUJBQWlCLENBQUNSLE9BQU8sQ0FBQ0QsSUFBSSxJQUFJLFNBQVM7SUFDeEQsSUFBTUssTUFBSSxHQUFHZCw0REFBVSxDQUFDa0IsaUJBQWlCLENBQUM7SUFDMUNKLE1BQUksQ0FBQ0MsTUFBTSxjQUFDaEIsMERBQW1CLENBQUNLLDREQUFRLEVBQUU7TUFBRUssSUFBSSxFQUFFQTtJQUFLLENBQUMsQ0FBQyxDQUFDO0VBQzlEO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDaENGLHFKQUFBVSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLGVBQUFwRyxDQUFBLEVBQUFGLENBQUEsV0FBQXVHLGVBQUEsQ0FBQXJHLENBQUEsS0FBQXNHLHFCQUFBLENBQUF0RyxDQUFBLEVBQUFGLENBQUEsS0FBQXlHLDJCQUFBLENBQUF2RyxDQUFBLEVBQUFGLENBQUEsS0FBQTBHLGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQTNDLFNBQUE7QUFBQSxTQUFBMEMsNEJBQUF2RyxDQUFBLEVBQUFVLENBQUEsUUFBQVYsQ0FBQSwyQkFBQUEsQ0FBQSxTQUFBeUcsaUJBQUEsQ0FBQXpHLENBQUEsRUFBQVUsQ0FBQSxPQUFBWCxDQUFBLE1BQUEyRyxRQUFBLENBQUE5RSxJQUFBLENBQUE1QixDQUFBLEVBQUE0RixLQUFBLDZCQUFBN0YsQ0FBQSxJQUFBQyxDQUFBLENBQUErRSxXQUFBLEtBQUFoRixDQUFBLEdBQUFDLENBQUEsQ0FBQStFLFdBQUEsQ0FBQUMsSUFBQSxhQUFBakYsQ0FBQSxjQUFBQSxDQUFBLEdBQUE0RyxLQUFBLENBQUFDLElBQUEsQ0FBQTVHLENBQUEsb0JBQUFELENBQUEsK0NBQUE4RyxJQUFBLENBQUE5RyxDQUFBLElBQUEwRyxpQkFBQSxDQUFBekcsQ0FBQSxFQUFBVSxDQUFBO0FBQUEsU0FBQStGLGtCQUFBekcsQ0FBQSxFQUFBVSxDQUFBLGFBQUFBLENBQUEsSUFBQUEsQ0FBQSxHQUFBVixDQUFBLENBQUE0RSxNQUFBLE1BQUFsRSxDQUFBLEdBQUFWLENBQUEsQ0FBQTRFLE1BQUEsWUFBQTlFLENBQUEsTUFBQUssQ0FBQSxHQUFBd0csS0FBQSxDQUFBakcsQ0FBQSxHQUFBWixDQUFBLEdBQUFZLENBQUEsRUFBQVosQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsSUFBQUUsQ0FBQSxDQUFBRixDQUFBLFVBQUFLLENBQUE7QUFBQSxTQUFBbUcsc0JBQUF0RyxDQUFBLEVBQUE4QixDQUFBLFFBQUEvQixDQUFBLFdBQUFDLENBQUEsZ0NBQUFTLE1BQUEsSUFBQVQsQ0FBQSxDQUFBUyxNQUFBLENBQUFFLFFBQUEsS0FBQVgsQ0FBQSw0QkFBQUQsQ0FBQSxRQUFBRCxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBTSxDQUFBLEVBQUFKLENBQUEsT0FBQXFCLENBQUEsT0FBQTFCLENBQUEsaUJBQUFHLENBQUEsSUFBQVQsQ0FBQSxHQUFBQSxDQUFBLENBQUE2QixJQUFBLENBQUE1QixDQUFBLEdBQUErRCxJQUFBLFFBQUFqQyxDQUFBLFFBQUE3QixNQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxVQUFBZ0MsQ0FBQSx1QkFBQUEsQ0FBQSxJQUFBakMsQ0FBQSxHQUFBVSxDQUFBLENBQUFvQixJQUFBLENBQUE3QixDQUFBLEdBQUFzRCxJQUFBLE1BQUEzQyxDQUFBLENBQUE2RCxJQUFBLENBQUF6RSxDQUFBLENBQUFTLEtBQUEsR0FBQUcsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBOUMsQ0FBQSxHQUFBQyxDQUFBLGlCQUFBL0IsQ0FBQSxJQUFBSyxDQUFBLE9BQUFGLENBQUEsR0FBQUgsQ0FBQSx5QkFBQStCLENBQUEsWUFBQWhDLENBQUEsZUFBQWUsQ0FBQSxHQUFBZixDQUFBLGNBQUFFLE1BQUEsQ0FBQWEsQ0FBQSxNQUFBQSxDQUFBLDJCQUFBVCxDQUFBLFFBQUFGLENBQUEsYUFBQU8sQ0FBQTtBQUFBLFNBQUEyRixnQkFBQXJHLENBQUEsUUFBQTJHLEtBQUEsQ0FBQUcsT0FBQSxDQUFBOUcsQ0FBQSxVQUFBQSxDQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxJQUFJK0csU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQVMsSUFBSyxVQUFVQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckYsU0FBU0MsS0FBS0EsQ0FBQzdHLEtBQUssRUFBRTtJQUFFLE9BQU9BLEtBQUssWUFBWTJHLENBQUMsR0FBRzNHLEtBQUssR0FBRyxJQUFJMkcsQ0FBQyxDQUFDLFVBQVVsRSxPQUFPLEVBQUU7TUFBRUEsT0FBTyxDQUFDekMsS0FBSyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0VBQUU7RUFDM0csT0FBTyxLQUFLMkcsQ0FBQyxLQUFLQSxDQUFDLEdBQUc1QixPQUFPLENBQUMsRUFBRSxVQUFVdEMsT0FBTyxFQUFFcUUsTUFBTSxFQUFFO0lBQ3ZELFNBQVNDLFNBQVNBLENBQUMvRyxLQUFLLEVBQUU7TUFBRSxJQUFJO1FBQUVnSCxJQUFJLENBQUNKLFNBQVMsQ0FBQ3BELElBQUksQ0FBQ3hELEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU9ULENBQUMsRUFBRTtRQUFFdUgsTUFBTSxDQUFDdkgsQ0FBQyxDQUFDO01BQUU7SUFBRTtJQUMxRixTQUFTMEgsUUFBUUEsQ0FBQ2pILEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRWdILElBQUksQ0FBQ0osU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDNUcsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT1QsQ0FBQyxFQUFFO1FBQUV1SCxNQUFNLENBQUN2SCxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzdGLFNBQVN5SCxJQUFJQSxDQUFDRSxNQUFNLEVBQUU7TUFBRUEsTUFBTSxDQUFDcEUsSUFBSSxHQUFHTCxPQUFPLENBQUN5RSxNQUFNLENBQUNsSCxLQUFLLENBQUMsR0FBRzZHLEtBQUssQ0FBQ0ssTUFBTSxDQUFDbEgsS0FBSyxDQUFDLENBQUMyQyxJQUFJLENBQUNvRSxTQUFTLEVBQUVFLFFBQVEsQ0FBQztJQUFFO0lBQzdHRCxJQUFJLENBQUMsQ0FBQ0osU0FBUyxHQUFHQSxTQUFTLENBQUNPLEtBQUssQ0FBQ1YsT0FBTyxFQUFFQyxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUVsRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDa0Q7QUFDRjtBQUNYO0FBQ29CO0FBQ1Y7QUFDUDtBQUNUO0FBQ3pCLFNBQVNqRixRQUFRQSxDQUFBcUosSUFBQSxFQUFXO0VBQUEsSUFBUmhKLElBQUksR0FBQWdKLElBQUEsQ0FBSmhKLElBQUk7RUFDM0IsSUFBQWlKLFNBQUEsR0FBZ0NSLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQWpDLGNBQUEsQ0FBQWdDLFNBQUE7SUFBckNFLFFBQVEsR0FBQUQsVUFBQTtJQUFFRSxXQUFXLEdBQUFGLFVBQUE7RUFDNUIsSUFBQUcsVUFBQSxHQUE4QlosZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWEsVUFBQSxHQUFBckMsY0FBQSxDQUFBb0MsVUFBQTtJQUFyQ0UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQmQsaURBQVMsQ0FBQyxZQUFNO0lBQ1ppQixZQUFZLENBQUMsQ0FBQztFQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sU0FBU0EsWUFBWUEsQ0FBQSxFQUFHO0lBQ3BCLE9BQU83QixTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxlQUFBbEgsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBNEQsUUFBQTtNQUFBLElBQUFDLElBQUE7TUFBQSxPQUFBakosbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJILFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBdEQsSUFBQSxHQUFBc0QsUUFBQSxDQUFBakYsSUFBQTtVQUFBO1lBQ25DNEUsVUFBVSxDQUFDLElBQUksQ0FBQztZQUFDSyxRQUFBLENBQUF0RCxJQUFBO1lBQUFzRCxRQUFBLENBQUFqRixJQUFBO1lBR04sT0FBTWdFLHVFQUFlLENBQUMsQ0FBQztVQUFBO1lBQTlCZSxJQUFJLEdBQUFFLFFBQUEsQ0FBQXZGLElBQUE7WUFDSjhFLFdBQVcsQ0FBQ08sSUFBSSxDQUFDO1lBQUNFLFFBQUEsQ0FBQWpGLElBQUE7WUFBQTtVQUFBO1lBQUFpRixRQUFBLENBQUF0RCxJQUFBO1lBQUFzRCxRQUFBLENBQUFDLEVBQUEsR0FBQUQsUUFBQTtZQUdsQkUsT0FBTyxDQUFDQyxLQUFLLENBQUMseUJBQXlCLEVBQUFILFFBQUEsQ0FBQUMsRUFBTyxDQUFDO1VBQUM7WUFBQUQsUUFBQSxDQUFBdEQsSUFBQTtZQUdoRGlELFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFBQyxPQUFBSyxRQUFBLENBQUEvQyxNQUFBO1VBQUE7VUFBQTtZQUFBLE9BQUErQyxRQUFBLENBQUFuRCxJQUFBO1FBQUE7TUFBQSxHQUFBZ0QsT0FBQTtJQUFBLENBRXpCLEVBQUM7RUFDTjtFQUNBLElBQUlILE9BQU8sRUFDUCxvQkFBT2pLLDJEQUFtQixDQUFDeUosaURBQU8sRUFBRSxJQUFJLENBQUM7RUFDN0Msb0JBQVF6SiwyREFBbUIsQ0FBQ0Esd0RBQWMsRUFBRSxJQUFJLEVBQUU2SixRQUFRLElBQUlBLFFBQVEsQ0FBQzFELE1BQU0sR0FBRyxDQUFDLGlCQUFJbkcsMkRBQW1CLENBQUNBLHdEQUFjLEVBQUUsSUFBSSxlQUN6SEEsMkRBQW1CLENBQUNxSixpREFBTSxDQUFDdUIsRUFBRSxFQUFFO0lBQUVDLFFBQVEsRUFBRXpCLDBEQUFTO0lBQUUwQixPQUFPLEVBQUUsUUFBUTtJQUFFQyxPQUFPLEVBQUUsU0FBUztJQUFFQyxTQUFTLEVBQUU7RUFBb0UsQ0FBQyxFQUFFbkIsUUFBUSxDQUFDb0IsR0FBRyxDQUFDLFVBQUNDLE9BQU8sRUFBRUMsS0FBSztJQUFBLG9CQUFNbkwsMkRBQW1CLENBQUN1Siw2REFBVyxFQUFFO01BQUU3SSxJQUFJLEVBQUVBLElBQUk7TUFBRXdLLE9BQU8sRUFBRUEsT0FBTztNQUFFQyxLQUFLLEVBQUVBLEtBQUs7TUFBRUMsR0FBRyxhQUFBQyxNQUFBLENBQWFGLEtBQUs7SUFBRyxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFLbkwsMkRBQW1CLENBQUNBLHdEQUFjLEVBQUUsSUFBSSxlQUMzV0EsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBOEMsQ0FBQyxlQUNuRmhMLDJEQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLGVBQzNCQSwyREFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFBRWdMLFNBQVM7RUFBZ0IsQ0FBQyxFQUFFLDRCQUE0QixDQUFDLGVBQ3JGaEwsMkRBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxrREFBa0QsQ0FBQyxDQUFDLGVBQ3ZGQSwyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFvQixDQUFDLGVBQ3pEaEwsMkRBQW1CLENBQUMsR0FBRyxFQUFFO0lBQUVzTCxJQUFJLEVBQUU5QixrREFBTSxDQUFDK0IsSUFBSTtJQUFFUCxTQUFTLEVBQUU7RUFBd0IsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEg7QUFDQTtBQUNBLGlFQUFlM0ssUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERHO0FBQzRCO0FBQ0Q7QUFDRTtBQUNqQjtBQUN0QyxTQUFTc0wsT0FBT0EsQ0FBQWpDLElBQUEsRUFBMEM7RUFBQSxJQUF2Q2hKLElBQUksR0FBQWdKLElBQUEsQ0FBSmhKLElBQUk7SUFBRWtMLFFBQVEsR0FBQWxDLElBQUEsQ0FBUmtDLFFBQVE7SUFBRUMsT0FBTyxHQUFBbkMsSUFBQSxDQUFQbUMsT0FBTztJQUFFQyxVQUFVLEdBQUFwQyxJQUFBLENBQVZvQyxVQUFVO0VBQ2xETCxnRUFBZ0IsQ0FBQ0csUUFBUSxFQUFFbEwsSUFBSSxDQUFDO0VBQ2hDLFNBQVNxTCxtQkFBbUJBLENBQUNDLFFBQVEsRUFBRTtJQUNuQyxJQUFJSixRQUFRLENBQUNLLGNBQWMsRUFDdkI7SUFDSixJQUFJLENBQUNILFVBQVUsRUFDWDtJQUNKQSxVQUFVLENBQUMsVUFBQUksWUFBWSxFQUFJO01BQ3ZCLElBQUlOLFFBQVEsQ0FBQ08sc0JBQXNCLEtBQUssQ0FBQyxFQUFFO1FBQ3ZDLE9BQU8sQ0FBQ0gsUUFBUSxDQUFDO01BQ3JCLENBQUMsTUFDSTtRQUNELElBQUlFLFlBQVksQ0FBQ0UsUUFBUSxDQUFDSixRQUFRLENBQUMsRUFBRTtVQUNqQyxPQUFPRSxZQUFZLENBQUNHLE1BQU0sQ0FBQyxVQUFBQyxFQUFFO1lBQUEsT0FBSUEsRUFBRSxLQUFLTixRQUFRO1VBQUEsRUFBQztRQUNyRCxDQUFDLE1BQ0k7VUFDRCxVQUFBWCxNQUFBLENBQUFrQixrQkFBQSxDQUFXTCxZQUFZLElBQUVGLFFBQVE7UUFDckM7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOO0VBQ0EsU0FBU1EsbUJBQW1CQSxDQUFDUixRQUFRLEVBQUU7SUFDbkMsSUFBSSxDQUFDSixRQUFRLENBQUNLLGNBQWMsRUFDeEIsT0FBTyxLQUFLO0lBQ2hCLE9BQU9MLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDRyxRQUFRLENBQUNKLFFBQVEsQ0FBQztFQUNyRDtFQUNBLG9CQUFRaE0sMkRBQW1CLENBQUNxSixpREFBTSxDQUFDdUIsRUFBRSxFQUFFO0lBQUVDLFFBQVEsRUFBRXpCLDBEQUFTO0lBQUUwQixPQUFPLEVBQUUsUUFBUTtJQUFFQyxPQUFPLEVBQUUsU0FBUztJQUFFQyxTQUFTLEVBQUU7RUFBd0MsQ0FBQyxFQUFFWSxRQUFRLENBQUNhLE9BQU8sQ0FBQ3hCLEdBQUcsQ0FBQyxVQUFDeUIsTUFBTSxFQUFFdkIsS0FBSztJQUFBLG9CQUFNbkwsMkRBQW1CLENBQUNxSixpREFBTSxDQUFDc0QsRUFBRSxFQUFFO01BQUU5QixRQUFRLEVBQUVhLHFEQUFJO01BQUVOLEdBQUcsWUFBQUMsTUFBQSxDQUFZcUIsTUFBTSxDQUFDSixFQUFFLENBQUU7TUFBRXRCLFNBQVM7SUFBd0IsQ0FBQyxlQUMvU2hMLDJEQUFtQixDQUFDLFVBQVUsRUFBRTtNQUFFZ0wsU0FBUztJQUFtQixDQUFDLGVBQzNEaEwsMkRBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksZUFDN0JBLDJEQUFtQixDQUFDLE9BQU8sRUFBRTtNQUFFaUQsSUFBSSxFQUFFLFVBQVU7TUFBRXFKLEVBQUUsWUFBQWpCLE1BQUEsQ0FBWUYsS0FBSyxDQUFFO01BQUU1RSxJQUFJLEVBQUUsUUFBUTtNQUFFekUsS0FBSyxFQUFFNEssTUFBTSxDQUFDSixFQUFFO01BQUVNLE9BQU8sRUFBRWYsT0FBTyxDQUFDTyxRQUFRLENBQUNNLE1BQU0sQ0FBQ0osRUFBRSxDQUFDO01BQUVPLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFBO1FBQUEsT0FBUWQsbUJBQW1CLENBQUNXLE1BQU0sQ0FBQ0osRUFBRSxDQUFDO01BQUE7TUFBRXRCLFNBQVMsb0JBQUFLLE1BQUEsQ0FBb0JPLFFBQVEsQ0FBQ0ssY0FBYyxLQUFLTyxtQkFBbUIsQ0FBQ0UsTUFBTSxDQUFDSixFQUFFLENBQUMsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDO0lBQUcsQ0FBQyxDQUFDLGVBQ3ZUdE0sMkRBQW1CLENBQUMsTUFBTSxFQUFFO01BQUVnTCxTQUFTLEVBQUU7SUFBb0IsQ0FBQyxlQUMxRGhMLDJEQUFtQixDQUFDLE1BQU0sRUFBRTtNQUFFZ0wsU0FBUyxFQUFFO0lBQWlCLENBQUMsZUFDdkRoTCwyREFBbUIsQ0FBQ3dMLGdFQUFnQixFQUFFO01BQUVzQixPQUFPLEVBQUVKLE1BQU0sQ0FBQ0k7SUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxDQUFDLENBQUM7QUFDbEc7QUFDQSxpRUFBZW5CLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ3RDdEIscUpBQUF2SyxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLGVBQUFwRyxDQUFBLEVBQUFGLENBQUEsV0FBQXVHLGVBQUEsQ0FBQXJHLENBQUEsS0FBQXNHLHFCQUFBLENBQUF0RyxDQUFBLEVBQUFGLENBQUEsS0FBQXlHLDJCQUFBLENBQUF2RyxDQUFBLEVBQUFGLENBQUEsS0FBQTBHLGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQTNDLFNBQUE7QUFBQSxTQUFBMEMsNEJBQUF2RyxDQUFBLEVBQUFVLENBQUEsUUFBQVYsQ0FBQSwyQkFBQUEsQ0FBQSxTQUFBeUcsaUJBQUEsQ0FBQXpHLENBQUEsRUFBQVUsQ0FBQSxPQUFBWCxDQUFBLE1BQUEyRyxRQUFBLENBQUE5RSxJQUFBLENBQUE1QixDQUFBLEVBQUE0RixLQUFBLDZCQUFBN0YsQ0FBQSxJQUFBQyxDQUFBLENBQUErRSxXQUFBLEtBQUFoRixDQUFBLEdBQUFDLENBQUEsQ0FBQStFLFdBQUEsQ0FBQUMsSUFBQSxhQUFBakYsQ0FBQSxjQUFBQSxDQUFBLEdBQUE0RyxLQUFBLENBQUFDLElBQUEsQ0FBQTVHLENBQUEsb0JBQUFELENBQUEsK0NBQUE4RyxJQUFBLENBQUE5RyxDQUFBLElBQUEwRyxpQkFBQSxDQUFBekcsQ0FBQSxFQUFBVSxDQUFBO0FBQUEsU0FBQStGLGtCQUFBekcsQ0FBQSxFQUFBVSxDQUFBLGFBQUFBLENBQUEsSUFBQUEsQ0FBQSxHQUFBVixDQUFBLENBQUE0RSxNQUFBLE1BQUFsRSxDQUFBLEdBQUFWLENBQUEsQ0FBQTRFLE1BQUEsWUFBQTlFLENBQUEsTUFBQUssQ0FBQSxHQUFBd0csS0FBQSxDQUFBakcsQ0FBQSxHQUFBWixDQUFBLEdBQUFZLENBQUEsRUFBQVosQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsSUFBQUUsQ0FBQSxDQUFBRixDQUFBLFVBQUFLLENBQUE7QUFBQSxTQUFBbUcsc0JBQUF0RyxDQUFBLEVBQUE4QixDQUFBLFFBQUEvQixDQUFBLFdBQUFDLENBQUEsZ0NBQUFTLE1BQUEsSUFBQVQsQ0FBQSxDQUFBUyxNQUFBLENBQUFFLFFBQUEsS0FBQVgsQ0FBQSw0QkFBQUQsQ0FBQSxRQUFBRCxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBTSxDQUFBLEVBQUFKLENBQUEsT0FBQXFCLENBQUEsT0FBQTFCLENBQUEsaUJBQUFHLENBQUEsSUFBQVQsQ0FBQSxHQUFBQSxDQUFBLENBQUE2QixJQUFBLENBQUE1QixDQUFBLEdBQUErRCxJQUFBLFFBQUFqQyxDQUFBLFFBQUE3QixNQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxVQUFBZ0MsQ0FBQSx1QkFBQUEsQ0FBQSxJQUFBakMsQ0FBQSxHQUFBVSxDQUFBLENBQUFvQixJQUFBLENBQUE3QixDQUFBLEdBQUFzRCxJQUFBLE1BQUEzQyxDQUFBLENBQUE2RCxJQUFBLENBQUF6RSxDQUFBLENBQUFTLEtBQUEsR0FBQUcsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBOUMsQ0FBQSxHQUFBQyxDQUFBLGlCQUFBL0IsQ0FBQSxJQUFBSyxDQUFBLE9BQUFGLENBQUEsR0FBQUgsQ0FBQSx5QkFBQStCLENBQUEsWUFBQWhDLENBQUEsZUFBQWUsQ0FBQSxHQUFBZixDQUFBLGNBQUFFLE1BQUEsQ0FBQWEsQ0FBQSxNQUFBQSxDQUFBLDJCQUFBVCxDQUFBLFFBQUFGLENBQUEsYUFBQU8sQ0FBQTtBQUFBLFNBQUEyRixnQkFBQXJHLENBQUEsUUFBQTJHLEtBQUEsQ0FBQUcsT0FBQSxDQUFBOUcsQ0FBQSxVQUFBQSxDQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLElBQUkrRyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBUyxJQUFLLFVBQVVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyRixTQUFTQyxLQUFLQSxDQUFDN0csS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZMkcsQ0FBQyxHQUFHM0csS0FBSyxHQUFHLElBQUkyRyxDQUFDLENBQUMsVUFBVWxFLE9BQU8sRUFBRTtNQUFFQSxPQUFPLENBQUN6QyxLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRTtFQUMzRyxPQUFPLEtBQUsyRyxDQUFDLEtBQUtBLENBQUMsR0FBRzVCLE9BQU8sQ0FBQyxFQUFFLFVBQVV0QyxPQUFPLEVBQUVxRSxNQUFNLEVBQUU7SUFDdkQsU0FBU0MsU0FBU0EsQ0FBQy9HLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRWdILElBQUksQ0FBQ0osU0FBUyxDQUFDcEQsSUFBSSxDQUFDeEQsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT1QsQ0FBQyxFQUFFO1FBQUV1SCxNQUFNLENBQUN2SCxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVMwSCxRQUFRQSxDQUFDakgsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFZ0gsSUFBSSxDQUFDSixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM1RyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPVCxDQUFDLEVBQUU7UUFBRXVILE1BQU0sQ0FBQ3ZILENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBU3lILElBQUlBLENBQUNFLE1BQU0sRUFBRTtNQUFFQSxNQUFNLENBQUNwRSxJQUFJLEdBQUdMLE9BQU8sQ0FBQ3lFLE1BQU0sQ0FBQ2xILEtBQUssQ0FBQyxHQUFHNkcsS0FBSyxDQUFDSyxNQUFNLENBQUNsSCxLQUFLLENBQUMsQ0FBQzJDLElBQUksQ0FBQ29FLFNBQVMsRUFBRUUsUUFBUSxDQUFDO0lBQUU7SUFDN0dELElBQUksQ0FBQyxDQUFDSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ08sS0FBSyxDQUFDVixPQUFPLEVBQUVDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRWxELElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUN1QztBQUNtQjtBQUMzRCxTQUFTMEgsYUFBYUEsQ0FBQXRELElBQUEsRUFBZ0U7RUFBQSxJQUE3RGtDLFFBQVEsR0FBQWxDLElBQUEsQ0FBUmtDLFFBQVE7SUFBRXFCLFdBQVcsR0FBQXZELElBQUEsQ0FBWHVELFdBQVc7SUFBRS9CLE9BQU8sR0FBQXhCLElBQUEsQ0FBUHdCLE9BQU87SUFBRWdDLGVBQWUsR0FBQXhELElBQUEsQ0FBZndELGVBQWU7SUFBRUMsUUFBUSxHQUFBekQsSUFBQSxDQUFSeUQsUUFBUTtFQUM5RSxJQUFBeEQsU0FBQSxHQUFvQ1IsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQVMsVUFBQSxHQUFBakMsY0FBQSxDQUFBZ0MsU0FBQTtJQUE1Q3lELFVBQVUsR0FBQXhELFVBQUE7SUFBRXlELGFBQWEsR0FBQXpELFVBQUE7RUFDaEMsSUFBQUcsVUFBQSxHQUEwQlosZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWEsVUFBQSxHQUFBckMsY0FBQSxDQUFBb0MsVUFBQTtJQUFqQ1csS0FBSyxHQUFBVixVQUFBO0lBQUVzRCxRQUFRLEdBQUF0RCxVQUFBO0VBQ3RCLFNBQVN1RCxZQUFZQSxDQUFDbE0sQ0FBQyxFQUFFO0lBQ3JCLE9BQU9pSCxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxlQUFBbEgsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBNEQsUUFBQTtNQUFBLElBQUFvRCxjQUFBLEVBQUFDLGVBQUE7TUFBQSxPQUFBck0sbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJILFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBdEQsSUFBQSxHQUFBc0QsUUFBQSxDQUFBakYsSUFBQTtVQUFBO1lBQ25DakUsQ0FBQyxDQUFDcU0sY0FBYyxDQUFDLENBQUM7WUFDbEJMLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDbkJDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFBQy9DLFFBQUEsQ0FBQXRELElBQUE7WUFBQXNELFFBQUEsQ0FBQWpGLElBQUE7WUFFWSxPQUFNeUgscUVBQWEsQ0FBQzdCLE9BQU8sQ0FBQ29CLEVBQUUsQ0FBQztVQUFBO1lBQWhEa0IsY0FBYyxHQUFBakQsUUFBQSxDQUFBdkYsSUFBQTtZQUNkeUksZUFBZSxHQUFHak0sTUFBTSxDQUFDbU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFL0IsUUFBUSxDQUFDO1lBQ25ELElBQUk2QixlQUFlLENBQUM1RCxRQUFRLEVBQUU7Y0FDMUI0RCxlQUFlLENBQUM1RCxRQUFRLEdBQUc0RCxlQUFlLENBQUM1RCxRQUFRLENBQUN3QyxNQUFNLENBQUMsVUFBQWxLLENBQUM7Z0JBQUEsT0FBSUEsQ0FBQyxDQUFDbUssRUFBRSxLQUFLcEIsT0FBTyxDQUFDb0IsRUFBRTtjQUFBLEVBQUM7Y0FDcEZXLFdBQVcsQ0FBQ1EsZUFBZSxDQUFDO1lBQ2hDO1lBQ0FQLGVBQWUsQ0FBQ00sY0FBYyxDQUFDO1lBQUNqRCxRQUFBLENBQUFqRixJQUFBO1lBQUE7VUFBQTtZQUFBaUYsUUFBQSxDQUFBdEQsSUFBQTtZQUFBc0QsUUFBQSxDQUFBQyxFQUFBLEdBQUFELFFBQUE7WUFHaEMsSUFBSUEsUUFBQSxDQUFBQyxFQUFBLFlBQWU3RixLQUFLLEVBQUU7Y0FDdEIySSxRQUFRLENBQUMvQyxRQUFBLENBQUFDLEVBQUEsQ0FBSW9ELE9BQU8sQ0FBQztZQUN6QjtVQUFDO1lBQUFyRCxRQUFBLENBQUF0RCxJQUFBO1lBR0RvRyxhQUFhLENBQUMsS0FBSyxDQUFDO1lBQUMsT0FBQTlDLFFBQUEsQ0FBQS9DLE1BQUE7VUFBQTtVQUFBO1lBQUEsT0FBQStDLFFBQUEsQ0FBQW5ELElBQUE7UUFBQTtNQUFBLEdBQUFnRCxPQUFBO0lBQUEsQ0FFNUIsRUFBQztFQUNOO0VBQ0Esb0JBQVFwSywyREFBbUIsQ0FBQ0Esd0RBQWMsRUFBRSxJQUFJLGVBQzVDQSwyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFpQixDQUFDLGVBQ3REaEwsMkRBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxzQ0FBc0MsQ0FBQyxlQUN0RUEsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBb0IsQ0FBQyxlQUN6RGhMLDJEQUFtQixDQUFDLFFBQVEsRUFBRTtJQUFFaUQsSUFBSSxFQUFFLFFBQVE7SUFBRStILFNBQVMsRUFBRSx3QkFBd0I7SUFBRTZDLE9BQU8sRUFBRVYsUUFBUTtJQUFFVyxRQUFRLEVBQUVWO0VBQVcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxlQUN6SXBOLDJEQUFtQixDQUFDLFFBQVEsRUFBRTtJQUFFaUQsSUFBSSxFQUFFLFFBQVE7SUFBRStILFNBQVMsRUFBRSxrQ0FBa0M7SUFBRThDLFFBQVEsRUFBRVYsVUFBVTtJQUFFUyxPQUFPLEVBQUVOO0VBQWEsQ0FBQyxFQUFFSCxVQUFVLEdBQUcsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwTTtBQUNBLGlFQUFlSixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NZO0FBQ2U7QUFDWDtBQUNBO0FBQ1E7QUFDTDtBQUNIO0FBQ0c7QUFDVDtBQUN0QyxTQUFTekQsV0FBV0EsQ0FBQUcsSUFBQSxFQUFtRDtFQUFBLElBQWhEd0IsT0FBTyxHQUFBeEIsSUFBQSxDQUFQd0IsT0FBTztJQUFFQyxLQUFLLEdBQUF6QixJQUFBLENBQUx5QixLQUFLO0lBQUU4QixXQUFXLEdBQUF2RCxJQUFBLENBQVh1RCxXQUFXO0lBQUVyQixRQUFRLEdBQUFsQyxJQUFBLENBQVJrQyxRQUFRO0lBQUVsTCxJQUFJLEdBQUFnSixJQUFBLENBQUpoSixJQUFJO0VBQzlELElBQUFpSixTQUFBLEdBQWtDUixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBUyxVQUFBLEdBQUFqQyxjQUFBLENBQUFnQyxTQUFBO0lBQTFDdUUsU0FBUyxHQUFBdEUsVUFBQTtJQUFFdUUsWUFBWSxHQUFBdkUsVUFBQTtFQUM5QixJQUFBRyxVQUFBLEdBQW9DWixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBYSxVQUFBLEdBQUFyQyxjQUFBLENBQUFvQyxVQUFBO0lBQTVDcUQsVUFBVSxHQUFBcEQsVUFBQTtJQUFFcUQsYUFBYSxHQUFBckQsVUFBQTtFQUNoQyxJQUFBb0UsV0FBQSxHQUF5Q0MsVUFBVSxDQUFDbkQsT0FBTyxDQUFDb0QsWUFBWSxDQUFDO0lBQWpFQyxhQUFhLEdBQUFILFdBQUEsQ0FBYkcsYUFBYTtJQUFFQyxhQUFhLEdBQUFKLFdBQUEsQ0FBYkksYUFBYTtFQUNwQyxJQUFBQyxRQUFBLEdBQThCVCw4REFBTyxDQUFDLENBQUM7SUFBL0JVLFFBQVEsR0FBQUQsUUFBQSxDQUFSQyxRQUFRO0lBQUVDLE9BQU8sR0FBQUYsUUFBQSxDQUFQRSxPQUFPO0VBQ3pCLElBQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDeEQsT0FBTyxDQUFDMkQsTUFBTSxDQUFDdkMsRUFBRSxDQUFDLElBQUlxQyxPQUFPLENBQUMsQ0FBQztFQUM1RCxTQUFTRyxvQkFBb0JBLENBQUEsRUFBRztJQUM1QlgsWUFBWSxDQUFDLEtBQUssQ0FBQztFQUN2QjtFQUNBLFNBQVNZLG9CQUFvQkEsQ0FBQSxFQUFHO0lBQzVCMUIsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN4QjtFQUNBLFNBQVMyQixrQkFBa0JBLENBQUEsRUFBRztJQUMxQmIsWUFBWSxDQUFDLElBQUksQ0FBQztJQUNsQmQsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUN4QjtFQUNBLFNBQVM0QixtQkFBbUJBLENBQUEsRUFBRztJQUMzQjVCLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDbkJjLFlBQVksQ0FBQyxLQUFLLENBQUM7RUFDdkI7RUFDQSxTQUFTRSxVQUFVQSxDQUFDYSxVQUFVLEVBQUU7SUFDNUIsSUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUksQ0FBQ0YsVUFBVSxDQUFDQyxJQUFJLENBQUM7SUFDdEMsSUFBTUUsR0FBRyxHQUFHRixJQUFJLENBQUNHLE9BQU8sQ0FBQyxDQUFDLENBQUNySCxRQUFRLENBQUMsQ0FBQyxDQUFDc0gsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDdEQsSUFBTUMsS0FBSyxHQUFHLENBQUNMLElBQUksQ0FBQ00sUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUV4SCxRQUFRLENBQUMsQ0FBQyxDQUFDc0gsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDL0QsSUFBTUcsSUFBSSxHQUFHUCxJQUFJLENBQUNRLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLElBQU1DLEtBQUssR0FBR1QsSUFBSSxDQUFDVSxRQUFRLENBQUMsQ0FBQyxDQUFDNUgsUUFBUSxDQUFDLENBQUMsQ0FBQ3NILFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQ3pELElBQU1PLE9BQU8sR0FBR1gsSUFBSSxDQUFDWSxVQUFVLENBQUMsQ0FBQyxDQUFDOUgsUUFBUSxDQUFDLENBQUMsQ0FBQ3NILFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO0lBQzdELE9BQU87TUFDSGhCLGFBQWEsS0FBQWxELE1BQUEsQ0FBS2dFLEdBQUcsT0FBQWhFLE1BQUEsQ0FBSW1FLEtBQUssT0FBQW5FLE1BQUEsQ0FBSXFFLElBQUksQ0FBRTtNQUN4Q2xCLGFBQWEsS0FBQW5ELE1BQUEsQ0FBS3VFLEtBQUssT0FBQXZFLE1BQUEsQ0FBSXlFLE9BQU87SUFDdEMsQ0FBQztFQUNMO0VBQ0Esb0JBQVE5UCwyREFBbUIsQ0FBQ0Esd0RBQWMsRUFBRSxJQUFJLEVBQzVDbUwsS0FBSyxLQUFLLENBQUMsaUJBQUluTCwyREFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUErQixDQUFDLENBQUMsZUFDdkZoTCwyREFBbUIsQ0FBQ3FKLGlEQUFNLENBQUNzRCxFQUFFLEVBQUU7SUFBRTlCLFFBQVEsRUFBRWEscURBQUk7SUFBRVYsU0FBUztFQUFnRSxDQUFDLGVBQ3ZIaEwsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBd0QsQ0FBQyxlQUM3RmhMLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQTZELENBQUMsZUFDbEdoTCwyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUE4RSxDQUFDLGVBQ25IaEwsMkRBQW1CLENBQUNpTyx3REFBYyxFQUFFO0lBQUUrQixLQUFLLEVBQUU5RSxPQUFPLENBQUMyRCxNQUFNLENBQUNtQjtFQUFNLENBQUMsQ0FBQyxlQUNwRWhRLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUztFQUF3QixDQUFDLGVBQzNEaEwsMkRBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRWtMLE9BQU8sQ0FBQzJELE1BQU0sQ0FBQ29CLFFBQVEsQ0FBQyxlQUN2RGpRLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQTBDLENBQUMsZUFDL0VoTCwyREFBbUIsQ0FBQyxHQUFHLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUEwQixDQUFDLGVBQzdEaEwsMkRBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBNEIsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLGVBQ3pGaEwsMkRBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRXVPLGFBQWEsQ0FBQyxDQUFDLGVBQ3JEdk8sMkRBQW1CLENBQUMsR0FBRyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBMEIsQ0FBQyxlQUM3RGhMLDJEQUFtQixDQUFDLE1BQU0sRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQTRCLENBQUMsRUFBRSxVQUFVLENBQUMsZUFDbkZoTCwyREFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFd08sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDcEV4TywyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUF5QixDQUFDLEVBQzlENEQsV0FBVyxrQkFBSzVPLDJEQUFtQixDQUFDQSx3REFBYyxFQUFFLElBQUksZUFDcERBLDJEQUFtQixDQUFDLFFBQVEsRUFBRTtJQUFFZ0wsU0FBUyxFQUFFLHNCQUFzQjtJQUFFNkMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7TUFBQSxPQUFRbUIsa0JBQWtCLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBQyxlQUNwR2hQLDJEQUFtQixDQUFDLE1BQU0sRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWlCLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxlQUN6RWhMLDJEQUFtQixDQUFDLFFBQVEsRUFBRTtJQUFFZ0wsU0FBUyxFQUFFLHNCQUFzQjtJQUFFNkMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7TUFBQSxPQUFRb0IsbUJBQW1CLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBQyxlQUNyR2pQLDJEQUFtQixDQUFDLE1BQU0sRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWlCLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDakZ0SyxJQUFJLEtBQUssU0FBUyxrQkFBS1YsMkRBQW1CLENBQUNBLHdEQUFjLEVBQUUsSUFBSSxlQUMzREEsMkRBQW1CLENBQUMsR0FBRyxFQUFFO0lBQUVzTCxJQUFJLEtBQUFELE1BQUEsQ0FBSzdCLGtEQUFNLENBQUMwRyxRQUFRLE9BQUE3RSxNQUFBLENBQUlILE9BQU8sQ0FBQ3RLLFVBQVUsQ0FBRTtJQUFFb0ssU0FBUyxFQUFFO0VBQXVCLENBQUMsZUFDNUdoTCwyREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFpQixDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUMvRmhMLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXlCLENBQUMsZUFDOURoTCwyREFBbUIsQ0FBQ3dMLGdFQUFnQixFQUFFO0lBQUVzQixPQUFPLEVBQUU1QixPQUFPLENBQUM0QjtFQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDN0VvQixTQUFTLGlCQUNMbE8sMkRBQW1CLENBQUNnTix1REFBYSxFQUFFO0lBQUVwQixRQUFRLEVBQUVBLFFBQVE7SUFBRXFCLFdBQVcsRUFBRUEsV0FBVztJQUFFL0IsT0FBTyxFQUFFQSxPQUFPO0lBQUVpRixnQkFBZ0IsRUFBRXJCLG9CQUFvQjtJQUFFM0IsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUE7TUFBQSxPQUFRZ0IsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLEVBQ3ZMZixVQUFVLGlCQUNOcE4sMkRBQW1CLENBQUMrTix1REFBYSxFQUFFO0lBQUVuQyxRQUFRLEVBQUVBLFFBQVE7SUFBRXFCLFdBQVcsRUFBRUEsV0FBVztJQUFFL0IsT0FBTyxFQUFFQSxPQUFPO0lBQUVnQyxlQUFlLEVBQUU2QixvQkFBb0I7SUFBRTVCLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFBO01BQUEsT0FBUUUsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUFBO0VBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyTTtBQUNBLGlFQUFlOUQsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ3hFMUIscUpBQUFuSSxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUEsU0FBQXNHLGVBQUFwRyxDQUFBLEVBQUFGLENBQUEsV0FBQXVHLGVBQUEsQ0FBQXJHLENBQUEsS0FBQXNHLHFCQUFBLENBQUF0RyxDQUFBLEVBQUFGLENBQUEsS0FBQXlHLDJCQUFBLENBQUF2RyxDQUFBLEVBQUFGLENBQUEsS0FBQTBHLGdCQUFBO0FBQUEsU0FBQUEsaUJBQUEsY0FBQTNDLFNBQUE7QUFBQSxTQUFBMEMsNEJBQUF2RyxDQUFBLEVBQUFVLENBQUEsUUFBQVYsQ0FBQSwyQkFBQUEsQ0FBQSxTQUFBeUcsaUJBQUEsQ0FBQXpHLENBQUEsRUFBQVUsQ0FBQSxPQUFBWCxDQUFBLE1BQUEyRyxRQUFBLENBQUE5RSxJQUFBLENBQUE1QixDQUFBLEVBQUE0RixLQUFBLDZCQUFBN0YsQ0FBQSxJQUFBQyxDQUFBLENBQUErRSxXQUFBLEtBQUFoRixDQUFBLEdBQUFDLENBQUEsQ0FBQStFLFdBQUEsQ0FBQUMsSUFBQSxhQUFBakYsQ0FBQSxjQUFBQSxDQUFBLEdBQUE0RyxLQUFBLENBQUFDLElBQUEsQ0FBQTVHLENBQUEsb0JBQUFELENBQUEsK0NBQUE4RyxJQUFBLENBQUE5RyxDQUFBLElBQUEwRyxpQkFBQSxDQUFBekcsQ0FBQSxFQUFBVSxDQUFBO0FBQUEsU0FBQStGLGtCQUFBekcsQ0FBQSxFQUFBVSxDQUFBLGFBQUFBLENBQUEsSUFBQUEsQ0FBQSxHQUFBVixDQUFBLENBQUE0RSxNQUFBLE1BQUFsRSxDQUFBLEdBQUFWLENBQUEsQ0FBQTRFLE1BQUEsWUFBQTlFLENBQUEsTUFBQUssQ0FBQSxHQUFBd0csS0FBQSxDQUFBakcsQ0FBQSxHQUFBWixDQUFBLEdBQUFZLENBQUEsRUFBQVosQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsSUFBQUUsQ0FBQSxDQUFBRixDQUFBLFVBQUFLLENBQUE7QUFBQSxTQUFBbUcsc0JBQUF0RyxDQUFBLEVBQUE4QixDQUFBLFFBQUEvQixDQUFBLFdBQUFDLENBQUEsZ0NBQUFTLE1BQUEsSUFBQVQsQ0FBQSxDQUFBUyxNQUFBLENBQUFFLFFBQUEsS0FBQVgsQ0FBQSw0QkFBQUQsQ0FBQSxRQUFBRCxDQUFBLEVBQUFLLENBQUEsRUFBQUssQ0FBQSxFQUFBTSxDQUFBLEVBQUFKLENBQUEsT0FBQXFCLENBQUEsT0FBQTFCLENBQUEsaUJBQUFHLENBQUEsSUFBQVQsQ0FBQSxHQUFBQSxDQUFBLENBQUE2QixJQUFBLENBQUE1QixDQUFBLEdBQUErRCxJQUFBLFFBQUFqQyxDQUFBLFFBQUE3QixNQUFBLENBQUFGLENBQUEsTUFBQUEsQ0FBQSxVQUFBZ0MsQ0FBQSx1QkFBQUEsQ0FBQSxJQUFBakMsQ0FBQSxHQUFBVSxDQUFBLENBQUFvQixJQUFBLENBQUE3QixDQUFBLEdBQUFzRCxJQUFBLE1BQUEzQyxDQUFBLENBQUE2RCxJQUFBLENBQUF6RSxDQUFBLENBQUFTLEtBQUEsR0FBQUcsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBOUMsQ0FBQSxHQUFBQyxDQUFBLGlCQUFBL0IsQ0FBQSxJQUFBSyxDQUFBLE9BQUFGLENBQUEsR0FBQUgsQ0FBQSx5QkFBQStCLENBQUEsWUFBQWhDLENBQUEsZUFBQWUsQ0FBQSxHQUFBZixDQUFBLGNBQUFFLE1BQUEsQ0FBQWEsQ0FBQSxNQUFBQSxDQUFBLDJCQUFBVCxDQUFBLFFBQUFGLENBQUEsYUFBQU8sQ0FBQTtBQUFBLFNBQUEyRixnQkFBQXJHLENBQUEsUUFBQTJHLEtBQUEsQ0FBQUcsT0FBQSxDQUFBOUcsQ0FBQSxVQUFBQSxDQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLElBQUkrRyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBUyxJQUFLLFVBQVVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyRixTQUFTQyxLQUFLQSxDQUFDN0csS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZMkcsQ0FBQyxHQUFHM0csS0FBSyxHQUFHLElBQUkyRyxDQUFDLENBQUMsVUFBVWxFLE9BQU8sRUFBRTtNQUFFQSxPQUFPLENBQUN6QyxLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRTtFQUMzRyxPQUFPLEtBQUsyRyxDQUFDLEtBQUtBLENBQUMsR0FBRzVCLE9BQU8sQ0FBQyxFQUFFLFVBQVV0QyxPQUFPLEVBQUVxRSxNQUFNLEVBQUU7SUFDdkQsU0FBU0MsU0FBU0EsQ0FBQy9HLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRWdILElBQUksQ0FBQ0osU0FBUyxDQUFDcEQsSUFBSSxDQUFDeEQsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT1QsQ0FBQyxFQUFFO1FBQUV1SCxNQUFNLENBQUN2SCxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVMwSCxRQUFRQSxDQUFDakgsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFZ0gsSUFBSSxDQUFDSixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM1RyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPVCxDQUFDLEVBQUU7UUFBRXVILE1BQU0sQ0FBQ3ZILENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBU3lILElBQUlBLENBQUNFLE1BQU0sRUFBRTtNQUFFQSxNQUFNLENBQUNwRSxJQUFJLEdBQUdMLE9BQU8sQ0FBQ3lFLE1BQU0sQ0FBQ2xILEtBQUssQ0FBQyxHQUFHNkcsS0FBSyxDQUFDSyxNQUFNLENBQUNsSCxLQUFLLENBQUMsQ0FBQzJDLElBQUksQ0FBQ29FLFNBQVMsRUFBRUUsUUFBUSxDQUFDO0lBQUU7SUFDN0dELElBQUksQ0FBQyxDQUFDSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ08sS0FBSyxDQUFDVixPQUFPLEVBQUVDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRWxELElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUN1QztBQUNnQjtBQUNoQjtBQUNZO0FBQ1I7QUFDQztBQUM3QyxTQUFTZ0wsV0FBV0EsQ0FBQTVHLElBQUEsRUFBNEI7RUFBQSxJQUF6QmtDLFFBQVEsR0FBQWxDLElBQUEsQ0FBUmtDLFFBQVE7SUFBRXFCLFdBQVcsR0FBQXZELElBQUEsQ0FBWHVELFdBQVc7RUFDeEMsSUFBQXRELFNBQUEsR0FBOEJSLGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUFTLFVBQUEsR0FBQWpDLGNBQUEsQ0FBQWdDLFNBQUE7SUFBbkN1QixPQUFPLEdBQUF0QixVQUFBO0lBQUUyRyxVQUFVLEdBQUEzRyxVQUFBO0VBQzFCLElBQUFHLFVBQUEsR0FBd0NaLGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUFhLFVBQUEsR0FBQXJDLGNBQUEsQ0FBQW9DLFVBQUE7SUFBaER5RyxZQUFZLEdBQUF4RyxVQUFBO0lBQUV5RyxlQUFlLEdBQUF6RyxVQUFBO0VBQ3BDLElBQUEwRyxVQUFBLEdBQThCdkgsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQXdILFVBQUEsR0FBQWhKLGNBQUEsQ0FBQStJLFVBQUE7SUFBdENFLE9BQU8sR0FBQUQsVUFBQTtJQUFFRSxVQUFVLEdBQUFGLFVBQUE7RUFDMUIsSUFBQUcsVUFBQSxHQUEwQjNILGdEQUFRLENBQUMsSUFBSSxDQUFDO0lBQUE0SCxVQUFBLEdBQUFwSixjQUFBLENBQUFtSixVQUFBO0lBQWpDcEcsS0FBSyxHQUFBcUcsVUFBQTtJQUFFekQsUUFBUSxHQUFBeUQsVUFBQTtFQUN0QixJQUFBQyxVQUFBLEdBQTBDN0gsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQThILFdBQUEsR0FBQXRKLGNBQUEsQ0FBQXFKLFVBQUE7SUFBbERFLGFBQWEsR0FBQUQsV0FBQTtJQUFFRSxnQkFBZ0IsR0FBQUYsV0FBQTtFQUN0QyxJQUFBeEMsUUFBQSxHQUE0QlQsOERBQU8sQ0FBQyxDQUFDO0lBQTdCb0QsZUFBZSxHQUFBM0MsUUFBQSxDQUFmMkMsZUFBZTtFQUN2QixTQUFTN0QsWUFBWUEsQ0FBQ2xNLENBQUMsRUFBRTtJQUNyQixPQUFPaUgsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBQWxILG1CQUFBLEdBQUFvRixJQUFBLENBQUUsU0FBQTRELFFBQUE7TUFBQSxJQUFBaUgsVUFBQSxFQUFBNUQsZUFBQTtNQUFBLE9BQUFyTSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBMkgsU0FBQUMsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUF0RCxJQUFBLEdBQUFzRCxRQUFBLENBQUFqRixJQUFBO1VBQUE7WUFDbkNqRSxDQUFDLENBQUNxTSxjQUFjLENBQUMsQ0FBQztZQUNsQitDLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFDckJuRCxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2R1RCxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQUN0RyxRQUFBLENBQUF0RCxJQUFBO1lBQUFzRCxRQUFBLENBQUFqRixJQUFBO1lBRUssT0FBTThLLGtFQUFVLENBQUN4RSxRQUFRLENBQUNVLEVBQUUsRUFBRXBCLE9BQU8sQ0FBQztVQUFBO1lBQW5EbUcsVUFBVSxHQUFBOUcsUUFBQSxDQUFBdkYsSUFBQTtZQUNoQixJQUFJcU0sVUFBVSxJQUFJQSxVQUFVLENBQUMvRSxFQUFFLEVBQUU7Y0FDdkJtQixlQUFlLEdBQUdqTSxNQUFNLENBQUNtTSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUvQixRQUFRLENBQUM7Y0FDbkQsSUFBSSxDQUFDNkIsZUFBZSxDQUFDNUQsUUFBUSxFQUFFO2dCQUMzQjRELGVBQWUsQ0FBQzVELFFBQVEsR0FBRyxFQUFFO2NBQ2pDO2NBQ0E0RCxlQUFlLENBQUM1RCxRQUFRLENBQUMvRCxJQUFJLENBQUN1TCxVQUFVLENBQUM7Y0FDekNwRSxXQUFXLENBQUNRLGVBQWUsQ0FBQztjQUM1Qm9ELFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDaEJOLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDbEI7WUFBQ2hHLFFBQUEsQ0FBQWpGLElBQUE7WUFBQTtVQUFBO1lBQUFpRixRQUFBLENBQUF0RCxJQUFBO1lBQUFzRCxRQUFBLENBQUFDLEVBQUEsR0FBQUQsUUFBQTtZQUdELElBQUlBLFFBQUEsQ0FBQUMsRUFBQSxZQUFpQjdGLEtBQUssRUFBRTtjQUN4QjJJLFFBQVEsQ0FBQyx5QkFBeUIsR0FBRy9DLFFBQUEsQ0FBQUMsRUFBQSxDQUFNb0QsT0FBTyxDQUFDO1lBQ3ZELENBQUMsTUFDSTtjQUNETixRQUFRLENBQUMseUJBQXlCLEdBQUEvQyxRQUFBLENBQUFDLEVBQVEsQ0FBQztZQUMvQztVQUFDO1lBQUFELFFBQUEsQ0FBQXRELElBQUE7WUFHRHdKLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFBQyxPQUFBbEcsUUFBQSxDQUFBL0MsTUFBQTtVQUFBO1VBQUE7WUFBQSxPQUFBK0MsUUFBQSxDQUFBbkQsSUFBQTtRQUFBO01BQUEsR0FBQWdELE9BQUE7SUFBQSxDQUU5QixFQUFDO0VBQ047RUFDQSxTQUFTa0gsZUFBZUEsQ0FBQ2pRLENBQUMsRUFBRTtJQUN4QkEsQ0FBQyxDQUFDcU0sY0FBYyxDQUFDLENBQUM7SUFDbEJ5RCxnQkFBZ0IsQ0FBQyxVQUFBSSxTQUFTO01BQUEsT0FBSSxDQUFDQSxTQUFTO0lBQUEsRUFBQztFQUM3QztFQUNBO0VBQ0Esb0JBQVF2UiwyREFBbUIsQ0FBQ0Esd0RBQWMsRUFBRSxJQUFJLGVBQzVDQSwyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUEyQixDQUFDLGVBQ2hFaEwsMkRBQW1CLENBQUMsSUFBSSxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBUSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsZUFDbEVoTCwyREFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFvRSxDQUFDLEVBQUVZLFFBQVEsQ0FBQy9CLFFBQVEsQ0FBQzFELE1BQU0sR0FBRyxDQUFDLEdBQUl5RixRQUFRLENBQUMvQixRQUFRLENBQUNvQixHQUFHLENBQUMsVUFBQ0MsT0FBTyxFQUFFQyxLQUFLO0lBQUEsb0JBQU1uTCwyREFBbUIsQ0FBQ3VKLHFEQUFXLEVBQUU7TUFBRTJCLE9BQU8sRUFBRUEsT0FBTztNQUFFQyxLQUFLLEVBQUVBLEtBQUs7TUFBRVMsUUFBUSxFQUFFQSxRQUFRO01BQUVxQixXQUFXLEVBQUVBLFdBQVc7TUFBRTdCLEdBQUcsYUFBQUMsTUFBQSxDQUFhRixLQUFLO0lBQUcsQ0FBQyxDQUFDO0VBQUEsQ0FBQyxDQUFDLGlCQUFLbkwsMkRBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDLENBQUMsRUFDM1pvUixlQUFlLENBQUMsQ0FBQyxpQkFBSXBSLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXdELENBQUMsZUFDbEhoTCwyREFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFjLENBQUMsZUFDbERoTCwyREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFpQixDQUFDLEVBQUUsYUFBYSxDQUFDLEVBQzNFLHVCQUF1QixDQUFDLEVBQzVCNEYsT0FBTyxpQkFBSTVRLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXNCLENBQUMsRUFBRSw0QkFBNEIsQ0FBQyxFQUN6R04sS0FBSyxpQkFBSTFLLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXFCLENBQUMsRUFBRU4sS0FBSyxDQUFDLGVBQy9FMUssMkRBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUV3UixRQUFRLEVBQUVqRTtFQUFhLENBQUMsZUFDbER2TiwyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFvQixDQUFDLGVBQ3pEaEwsMkRBQW1CLENBQUMsVUFBVSxFQUFFO0lBQUVnTCxTQUFTLEVBQUUsTUFBTTtJQUFFbEosS0FBSyxFQUFFb0osT0FBTztJQUFFMkIsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUd4TCxDQUFDO01BQUEsT0FBS2tQLFVBQVUsQ0FBQ2xQLENBQUMsQ0FBQ29RLE1BQU0sQ0FBQzNQLEtBQUssQ0FBQztJQUFBO0lBQUU0UCxXQUFXLEVBQUUsaUJBQWlCO0lBQUVDLElBQUksRUFBRSxDQUFDO0lBQUVDLFFBQVEsRUFBRTtFQUFLLENBQUMsQ0FBQyxDQUFDLGVBQ2pMNVIsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBNkQsQ0FBQyxlQUNsR2hMLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQW9CLENBQUMsZUFDekRoTCwyREFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFBRWdMLFNBQVMsZ0NBQWdDO0lBQUU2QyxPQUFPLEVBQUV5RDtFQUFnQixDQUFDLGVBQ2pHdFIsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUU2UixHQUFHLEVBQUUsaUNBQWlDO0lBQUVDLEdBQUcsRUFBRSxlQUFlO0lBQUU5RyxTQUFTLEVBQUU7RUFBVyxDQUFDLENBQUMsRUFDbkgsZ0JBQWdCLENBQUMsQ0FBQyxlQUMxQmhMLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXlCLENBQUMsZUFDOURoTCwyREFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFBRWlELElBQUksRUFBRSxRQUFRO0lBQUUrSCxTQUFTLEVBQUUsdUJBQXVCO0lBQUU4QyxRQUFRLEVBQUUwQztFQUFhLENBQUMsRUFBRUEsWUFBWSxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDL0pVLGFBQWEsaUJBQUlsUiwyREFBbUIsQ0FBQ3FRLHVEQUFhLEVBQUUsSUFBSSxDQUFDLENBQUMsa0JBQUtyUSwyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUE4QyxDQUFDLGVBQ3RKaEwsMkRBQW1CLENBQUMsS0FBSyxFQUFFLElBQUksZUFDM0JBLDJEQUFtQixDQUFDLElBQUksRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWMsQ0FBQyxlQUNsRGhMLDJEQUFtQixDQUFDLE1BQU0sRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWlCLENBQUMsRUFBRSxhQUFhLENBQUMsRUFDM0UsK0JBQStCLENBQUMsZUFDcENoTCwyREFBbUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLDRCQUE0QixDQUFDLENBQUMsZUFDakVBLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQW9CLENBQUMsZUFDekRoTCwyREFBbUIsQ0FBQyxHQUFHLEVBQUU7SUFBRXNMLElBQUksRUFBRTlCLGtEQUFNLENBQUN1SSxLQUFLO0lBQUUvRyxTQUFTLEVBQUU7RUFBeUIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxlQUM5RmhMLDJEQUFtQixDQUFDLEdBQUcsRUFBRTtJQUFFc0wsSUFBSSxFQUFFOUIsa0RBQU0sQ0FBQ3dJLFFBQVE7SUFBRWhILFNBQVMsRUFBRTtFQUF3QixDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkg7QUFDQSxpRUFBZXNGLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NDeEYxQixxSkFBQWxQLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csZUFBQXBHLENBQUEsRUFBQUYsQ0FBQSxXQUFBdUcsZUFBQSxDQUFBckcsQ0FBQSxLQUFBc0cscUJBQUEsQ0FBQXRHLENBQUEsRUFBQUYsQ0FBQSxLQUFBeUcsMkJBQUEsQ0FBQXZHLENBQUEsRUFBQUYsQ0FBQSxLQUFBMEcsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBM0MsU0FBQTtBQUFBLFNBQUEwQyw0QkFBQXZHLENBQUEsRUFBQVUsQ0FBQSxRQUFBVixDQUFBLDJCQUFBQSxDQUFBLFNBQUF5RyxpQkFBQSxDQUFBekcsQ0FBQSxFQUFBVSxDQUFBLE9BQUFYLENBQUEsTUFBQTJHLFFBQUEsQ0FBQTlFLElBQUEsQ0FBQTVCLENBQUEsRUFBQTRGLEtBQUEsNkJBQUE3RixDQUFBLElBQUFDLENBQUEsQ0FBQStFLFdBQUEsS0FBQWhGLENBQUEsR0FBQUMsQ0FBQSxDQUFBK0UsV0FBQSxDQUFBQyxJQUFBLGFBQUFqRixDQUFBLGNBQUFBLENBQUEsR0FBQTRHLEtBQUEsQ0FBQUMsSUFBQSxDQUFBNUcsQ0FBQSxvQkFBQUQsQ0FBQSwrQ0FBQThHLElBQUEsQ0FBQTlHLENBQUEsSUFBQTBHLGlCQUFBLENBQUF6RyxDQUFBLEVBQUFVLENBQUE7QUFBQSxTQUFBK0Ysa0JBQUF6RyxDQUFBLEVBQUFVLENBQUEsYUFBQUEsQ0FBQSxJQUFBQSxDQUFBLEdBQUFWLENBQUEsQ0FBQTRFLE1BQUEsTUFBQWxFLENBQUEsR0FBQVYsQ0FBQSxDQUFBNEUsTUFBQSxZQUFBOUUsQ0FBQSxNQUFBSyxDQUFBLEdBQUF3RyxLQUFBLENBQUFqRyxDQUFBLEdBQUFaLENBQUEsR0FBQVksQ0FBQSxFQUFBWixDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxJQUFBRSxDQUFBLENBQUFGLENBQUEsVUFBQUssQ0FBQTtBQUFBLFNBQUFtRyxzQkFBQXRHLENBQUEsRUFBQThCLENBQUEsUUFBQS9CLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQVMsTUFBQSxJQUFBVCxDQUFBLENBQUFTLE1BQUEsQ0FBQUUsUUFBQSxLQUFBWCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFNLENBQUEsRUFBQUosQ0FBQSxPQUFBcUIsQ0FBQSxPQUFBMUIsQ0FBQSxpQkFBQUcsQ0FBQSxJQUFBVCxDQUFBLEdBQUFBLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTVCLENBQUEsR0FBQStELElBQUEsUUFBQWpDLENBQUEsUUFBQTdCLE1BQUEsQ0FBQUYsQ0FBQSxNQUFBQSxDQUFBLFVBQUFnQyxDQUFBLHVCQUFBQSxDQUFBLElBQUFqQyxDQUFBLEdBQUFVLENBQUEsQ0FBQW9CLElBQUEsQ0FBQTdCLENBQUEsR0FBQXNELElBQUEsTUFBQTNDLENBQUEsQ0FBQTZELElBQUEsQ0FBQXpFLENBQUEsQ0FBQVMsS0FBQSxHQUFBRyxDQUFBLENBQUFrRSxNQUFBLEtBQUE5QyxDQUFBLEdBQUFDLENBQUEsaUJBQUEvQixDQUFBLElBQUFLLENBQUEsT0FBQUYsQ0FBQSxHQUFBSCxDQUFBLHlCQUFBK0IsQ0FBQSxZQUFBaEMsQ0FBQSxlQUFBZSxDQUFBLEdBQUFmLENBQUEsY0FBQUUsTUFBQSxDQUFBYSxDQUFBLE1BQUFBLENBQUEsMkJBQUFULENBQUEsUUFBQUYsQ0FBQSxhQUFBTyxDQUFBO0FBQUEsU0FBQTJGLGdCQUFBckcsQ0FBQSxRQUFBMkcsS0FBQSxDQUFBRyxPQUFBLENBQUE5RyxDQUFBLFVBQUFBLENBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLElBQUkrRyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBUyxJQUFLLFVBQVVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyRixTQUFTQyxLQUFLQSxDQUFDN0csS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZMkcsQ0FBQyxHQUFHM0csS0FBSyxHQUFHLElBQUkyRyxDQUFDLENBQUMsVUFBVWxFLE9BQU8sRUFBRTtNQUFFQSxPQUFPLENBQUN6QyxLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRTtFQUMzRyxPQUFPLEtBQUsyRyxDQUFDLEtBQUtBLENBQUMsR0FBRzVCLE9BQU8sQ0FBQyxFQUFFLFVBQVV0QyxPQUFPLEVBQUVxRSxNQUFNLEVBQUU7SUFDdkQsU0FBU0MsU0FBU0EsQ0FBQy9HLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRWdILElBQUksQ0FBQ0osU0FBUyxDQUFDcEQsSUFBSSxDQUFDeEQsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT1QsQ0FBQyxFQUFFO1FBQUV1SCxNQUFNLENBQUN2SCxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVMwSCxRQUFRQSxDQUFDakgsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFZ0gsSUFBSSxDQUFDSixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM1RyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPVCxDQUFDLEVBQUU7UUFBRXVILE1BQU0sQ0FBQ3ZILENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBU3lILElBQUlBLENBQUNFLE1BQU0sRUFBRTtNQUFFQSxNQUFNLENBQUNwRSxJQUFJLEdBQUdMLE9BQU8sQ0FBQ3lFLE1BQU0sQ0FBQ2xILEtBQUssQ0FBQyxHQUFHNkcsS0FBSyxDQUFDSyxNQUFNLENBQUNsSCxLQUFLLENBQUMsQ0FBQzJDLElBQUksQ0FBQ29FLFNBQVMsRUFBRUUsUUFBUSxDQUFDO0lBQUU7SUFDN0dELElBQUksQ0FBQyxDQUFDSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ08sS0FBSyxDQUFDVixPQUFPLEVBQUVDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRWxELElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUN1QztBQUNtQjtBQUNkO0FBQzdDLFNBQVMwSCxhQUFhQSxDQUFBdEQsSUFBQSxFQUFpRTtFQUFBLElBQTlEa0MsUUFBUSxHQUFBbEMsSUFBQSxDQUFSa0MsUUFBUTtJQUFFcUIsV0FBVyxHQUFBdkQsSUFBQSxDQUFYdUQsV0FBVztJQUFFL0IsT0FBTyxHQUFBeEIsSUFBQSxDQUFQd0IsT0FBTztJQUFFaUYsZ0JBQWdCLEdBQUF6RyxJQUFBLENBQWhCeUcsZ0JBQWdCO0lBQUVoRCxRQUFRLEdBQUF6RCxJQUFBLENBQVJ5RCxRQUFRO0VBQy9FLElBQUF4RCxTQUFBLEdBQXdDUixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBUyxVQUFBLEdBQUFqQyxjQUFBLENBQUFnQyxTQUFBO0lBQWhENkcsWUFBWSxHQUFBNUcsVUFBQTtJQUFFNkcsZUFBZSxHQUFBN0csVUFBQTtFQUNwQyxJQUFBRyxVQUFBLEdBQTBCWixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBYSxVQUFBLEdBQUFyQyxjQUFBLENBQUFvQyxVQUFBO0lBQWpDVyxLQUFLLEdBQUFWLFVBQUE7SUFBRXNELFFBQVEsR0FBQXRELFVBQUE7RUFDdEIsSUFBQTBHLFVBQUEsR0FBb0N2SCxnREFBUSxDQUFDK0IsT0FBTyxDQUFDNEIsT0FBTyxDQUFDO0lBQUE2RCxVQUFBLEdBQUFoSixjQUFBLENBQUErSSxVQUFBO0lBQXREVyxVQUFVLEdBQUFWLFVBQUE7SUFBRXVCLGFBQWEsR0FBQXZCLFVBQUE7RUFDaEMsSUFBQUcsVUFBQSxHQUEwQzNILGdEQUFRLENBQUMsS0FBSyxDQUFDO0lBQUE0SCxVQUFBLEdBQUFwSixjQUFBLENBQUFtSixVQUFBO0lBQWxESSxhQUFhLEdBQUFILFVBQUE7SUFBRUksZ0JBQWdCLEdBQUFKLFVBQUE7RUFDdEMsU0FBU3hELFlBQVlBLENBQUNsTSxDQUFDLEVBQUU7SUFDckIsT0FBT2lILFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLGVBQUFsSCxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUE0RCxRQUFBO01BQUEsSUFBQStILGNBQUEsRUFBQTFFLGVBQUEsRUFBQTJFLFlBQUE7TUFBQSxPQUFBaFIsbUJBQUEsR0FBQXVCLElBQUEsVUFBQTJILFNBQUFDLFFBQUE7UUFBQSxrQkFBQUEsUUFBQSxDQUFBdEQsSUFBQSxHQUFBc0QsUUFBQSxDQUFBakYsSUFBQTtVQUFBO1lBQ25DakUsQ0FBQyxDQUFDcU0sY0FBYyxDQUFDLENBQUM7WUFDbEIrQyxlQUFlLENBQUMsSUFBSSxDQUFDO1lBQ3JCbkQsUUFBUSxDQUFDLElBQUksQ0FBQztZQUFDL0MsUUFBQSxDQUFBdEQsSUFBQTtZQUFBc0QsUUFBQSxDQUFBakYsSUFBQTtZQUVZLE9BQU0yTSxxRUFBYSxDQUFDL0csT0FBTyxDQUFDb0IsRUFBRSxFQUFFK0UsVUFBVSxDQUFDO1VBQUE7WUFBNURjLGNBQWMsR0FBQTVILFFBQUEsQ0FBQXZGLElBQUE7WUFDcEIsSUFBSW1OLGNBQWMsSUFBSUEsY0FBYyxDQUFDN0YsRUFBRSxFQUFFO2NBQy9CbUIsZUFBZSxHQUFHak0sTUFBTSxDQUFDbU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFL0IsUUFBUSxDQUFDO2NBQ25ELElBQUksQ0FBQzZCLGVBQWUsQ0FBQzVELFFBQVEsRUFBRTtnQkFDM0I0RCxlQUFlLENBQUM1RCxRQUFRLEdBQUcsRUFBRTtjQUNqQztjQUNNdUksWUFBWSxHQUFHM0UsZUFBZSxDQUFDNUQsUUFBUSxDQUFDd0ksU0FBUyxDQUFDLFVBQUFsUSxDQUFDO2dCQUFBLE9BQUlBLENBQUMsQ0FBQ21LLEVBQUUsS0FBSzZGLGNBQWMsQ0FBQzdGLEVBQUU7Y0FBQSxFQUFDO2NBQ3hGLElBQUk4RixZQUFZLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCM0UsZUFBZSxDQUFDNUQsUUFBUSxDQUFDdUksWUFBWSxDQUFDLEdBQUdELGNBQWM7Y0FDM0QsQ0FBQyxNQUNJO2dCQUNEMUUsZUFBZSxDQUFDNUQsUUFBUSxDQUFDL0QsSUFBSSxDQUFDcU0sY0FBYyxDQUFDO2NBQ2pEO2NBQ0FsRixXQUFXLENBQUNRLGVBQWUsQ0FBQztZQUNoQztZQUNBMEMsZ0JBQWdCLENBQUNnQyxjQUFjLENBQUM7WUFBQzVILFFBQUEsQ0FBQWpGLElBQUE7WUFBQTtVQUFBO1lBQUFpRixRQUFBLENBQUF0RCxJQUFBO1lBQUFzRCxRQUFBLENBQUFDLEVBQUEsR0FBQUQsUUFBQTtZQUdqQyxJQUFJQSxRQUFBLENBQUFDLEVBQUEsWUFBZTdGLEtBQUssRUFBRTtjQUN0QjJJLFFBQVEsQ0FBQy9DLFFBQUEsQ0FBQUMsRUFBQSxDQUFJb0QsT0FBTyxDQUFDO1lBQ3pCO1VBQUM7WUFBQXJELFFBQUEsQ0FBQXRELElBQUE7WUFHRHdKLGVBQWUsQ0FBQyxLQUFLLENBQUM7WUFBQyxPQUFBbEcsUUFBQSxDQUFBL0MsTUFBQTtVQUFBO1VBQUE7WUFBQSxPQUFBK0MsUUFBQSxDQUFBbkQsSUFBQTtRQUFBO01BQUEsR0FBQWdELE9BQUE7SUFBQSxDQUU5QixFQUFDO0VBQ047RUFDQSxTQUFTa0gsZUFBZUEsQ0FBQ2pRLENBQUMsRUFBRTtJQUN4QkEsQ0FBQyxDQUFDcU0sY0FBYyxDQUFDLENBQUM7SUFDbEJ5RCxnQkFBZ0IsQ0FBQyxVQUFBSSxTQUFTO01BQUEsT0FBSSxDQUFDQSxTQUFTO0lBQUEsRUFBQztFQUM3QztFQUNBO0VBQ0Esb0JBQVF2UiwyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFpQixDQUFDLEVBQzlETixLQUFLLGlCQUFJMUssMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBcUIsQ0FBQyxFQUFFTixLQUFLLENBQUMsZUFDL0UxSywyREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRXdSLFFBQVEsRUFBRWpFO0VBQWEsQ0FBQyxlQUNsRHZOLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXFCLENBQUMsZUFDMURoTCwyREFBbUIsQ0FBQyxVQUFVLEVBQUU7SUFBRWdMLFNBQVMsRUFBRSxNQUFNO0lBQUVsSixLQUFLLEVBQUV1UCxVQUFVO0lBQUV4RSxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR3hMLENBQUM7TUFBQSxPQUFLNlEsYUFBYSxDQUFDN1EsQ0FBQyxDQUFDb1EsTUFBTSxDQUFDM1AsS0FBSyxDQUFDO0lBQUE7SUFBRTZQLElBQUksRUFBRSxDQUFDO0lBQUVDLFFBQVEsRUFBRTtFQUFLLENBQUMsQ0FBQyxDQUFDLGVBQ3ZKNVIsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBNkQsQ0FBQyxlQUNsR2hMLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQW9CLENBQUMsZUFDekRoTCwyREFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFBRWdMLFNBQVMsZ0NBQWdDO0lBQUU2QyxPQUFPLEVBQUV5RDtFQUFnQixDQUFDLGVBQ2pHdFIsMkRBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUU2UixHQUFHLEVBQUUsaUNBQWlDO0lBQUVDLEdBQUcsRUFBRSxlQUFlO0lBQUU5RyxTQUFTLEVBQUU7RUFBVyxDQUFDLENBQUMsRUFDbkgsZ0JBQWdCLENBQUMsQ0FBQyxlQUMxQmhMLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXlCLENBQUMsZUFDOURoTCwyREFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFBRWlELElBQUksRUFBRSxRQUFRO0lBQUUrSCxTQUFTLEVBQUUscUJBQXFCO0lBQUU2QyxPQUFPLEVBQUVWLFFBQVE7SUFBRVcsUUFBUSxFQUFFMEM7RUFBYSxDQUFDLEVBQUUsUUFBUSxDQUFDLGVBQ3hJeFEsMkRBQW1CLENBQUMsUUFBUSxFQUFFO0lBQUVpRCxJQUFJLEVBQUUsUUFBUTtJQUFFK0gsU0FBUyxFQUFFLHVCQUF1QjtJQUFFOEMsUUFBUSxFQUFFMEM7RUFBYSxDQUFDLEVBQUVBLFlBQVksR0FBRyxVQUFVLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2hLVSxhQUFhLGlCQUFJbFIsMkRBQW1CLENBQUNxUSx1REFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xFO0FBQ0EsaUVBQWVyRCxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFRjtBQUNzQjtBQUNoQjtBQUNZO0FBQ047QUFDNkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNoQjtBQUNUO0FBQ25DLFNBQVM1TSxJQUFJQSxDQUFBc0osSUFBQSxFQUFXO0VBQUEsSUFBUmhKLElBQUksR0FBQWdKLElBQUEsQ0FBSmhKLElBQUk7RUFDdkIsSUFBTTBTLGFBQWEsR0FBRyxDQUNsQjtJQUFFeEgsUUFBUSxFQUFFNEcsOERBQWE7SUFBRTNHLE9BQU8sRUFBRTBHLDZEQUFZQTtFQUFDLENBQUMsRUFDbEQ7SUFBRTNHLFFBQVEsRUFBRThHLDhEQUFhO0lBQUU3RyxPQUFPLEVBQUU0Ryw2REFBWUE7RUFBQyxDQUFDLEVBQ2xEO0lBQUU3RyxRQUFRLEVBQUVnSCw4REFBYTtJQUFFL0csT0FBTyxFQUFFOEcsNkRBQVlBO0VBQUMsQ0FBQyxFQUNsRDtJQUFFL0csUUFBUSxFQUFFa0gsOERBQWE7SUFBRWpILE9BQU8sRUFBRWdILDZEQUFZQTtFQUFDLENBQUMsRUFDbEQ7SUFBRWpILFFBQVEsRUFBRW9ILCtEQUFhO0lBQUVuSCxPQUFPLEVBQUVrSCw4REFBWUE7RUFBQyxDQUFDLENBQ3JEO0VBQ0Qsb0JBQVEvUywwREFBbUIsQ0FBQ0EsdURBQWMsRUFBRSxJQUFJLGVBQzVDQSwwREFBbUIsQ0FBQ2lULGlEQUFNLEVBQUU7SUFBRUksS0FBSyxFQUFFLElBQUk7SUFDckM7SUFDQUMsV0FBVyxFQUFFO01BQ1QsQ0FBQyxFQUFFO1FBQ0NDLFlBQVksRUFBRTtNQUNsQixDQUFDO01BQ0QsR0FBRyxFQUFFO1FBQ0RBLFlBQVksRUFBRTtNQUNsQjtJQUNKLENBQUM7SUFBRUMsYUFBYSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFLElBQUk7SUFBRUMsY0FBYyxFQUFFLElBQUk7SUFDckQ7SUFDQUMsUUFBUSxFQUFFO01BQ05DLEtBQUssRUFBRSxJQUFJO01BQ1hDLG9CQUFvQixFQUFFO0lBQzFCLENBQUM7SUFBRUMsT0FBTyxFQUFFLENBQUNYLHFEQUFRLENBQUM7SUFBRW5JLFNBQVM7RUFBa0MsQ0FBQyxFQUFFb0ksYUFBYSxDQUFDbkksR0FBRyxDQUFDLFVBQUNaLElBQUksRUFBRWMsS0FBSztJQUFBLG9CQUFNbkwsMERBQW1CLENBQUNrVCxzREFBVyxFQUFFO01BQUU5SCxHQUFHLEVBQUVmLElBQUksQ0FBQ3VCLFFBQVEsQ0FBQ1U7SUFBRyxDQUFDLGVBQ3BLdE0sMERBQW1CLENBQUNxSixpREFBTSxDQUFDMEssR0FBRyxFQUFFO01BQUUzSSxHQUFHLEVBQUVmLElBQUksQ0FBQ3VCLFFBQVEsQ0FBQ1UsRUFBRTtNQUFFeEIsT0FBTyxFQUFFLFFBQVE7TUFBRUMsT0FBTyxFQUFFLFNBQVM7TUFBRWlKLElBQUksRUFBRSxRQUFRO01BQUVuSixRQUFRLEVBQUVhLG9EQUFJO01BQUVWLFNBQVMsRUFBRTtJQUF5QixDQUFDLGVBQ2pLaEwsMERBQW1CLENBQUMsS0FBSyxFQUFFO01BQUVnTCxTQUFTLEVBQUU7SUFBc0IsQ0FBQyxlQUMzRGhMLDBEQUFtQixDQUFDc1Msd0RBQWUsRUFBRTtNQUFFMUcsUUFBUSxFQUFFdkIsSUFBSSxDQUFDdUI7SUFBUyxDQUFDLENBQUMsZUFDakU1TCwwREFBbUIsQ0FBQzJMLGdEQUFPLEVBQUU7TUFBRWpMLElBQUksRUFBRUEsSUFBSTtNQUFFa0wsUUFBUSxFQUFFdkIsSUFBSSxDQUFDdUIsUUFBUTtNQUFFQyxPQUFPLEVBQUV4QixJQUFJLENBQUN3QjtJQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdkg7QUFDQTtBQUNBLGlFQUFlekwsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztBQzFDWixJQUFNb1MsYUFBYSxHQUFHO0VBQ3pCLElBQUksRUFBRSxHQUFHO0VBQ1QsWUFBWSxFQUFFLENBQ1Y7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FDSjtFQUNELFNBQVMsRUFBRSxDQUNQO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDZixDQUFDLENBQ0o7RUFDRCxVQUFVLEVBQUUsRUFBRTtFQUNkLFNBQVMsRUFBRSxvREFBb0Q7RUFDL0QsWUFBWSxFQUFFLENBQUM7RUFDZixhQUFhLEVBQUUsOEdBQThHO0VBQzdILHdCQUF3QixFQUFFLENBQUM7RUFDM0IsZ0JBQWdCLEVBQUUsQ0FDZCxHQUFHO0FBRVgsQ0FBQztBQUNNLElBQU1ELFlBQVksR0FBRyxDQUN4QixHQUFHLENBQ047Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ00sSUFBTUcsYUFBYSxHQUFHO0VBQ3pCLElBQUksRUFBRSxHQUFHO0VBQ1QsWUFBWSxFQUFFLENBQ1Y7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULE1BQU0sRUFBRTtFQUNaLENBQUMsQ0FDSjtFQUNELFNBQVMsRUFBRSxDQUNQO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULFNBQVMsRUFBRTtFQUNmLENBQUMsQ0FDSjtFQUNELFVBQVUsRUFBRSxFQUFFO0VBQ2QsU0FBUyxFQUFFLHlFQUF5RTtFQUNwRixZQUFZLEVBQUUsQ0FBQztFQUNmLGFBQWEsRUFBRSxzRkFBc0Y7RUFDckcsd0JBQXdCLEVBQUUsQ0FBQztFQUMzQixnQkFBZ0IsRUFBRSxDQUNkLEdBQUcsRUFDSCxHQUFHO0FBRVgsQ0FBQztBQUNNLElBQU1ELFlBQVksR0FBRyxDQUN4QixHQUFHLEVBQ0gsR0FBRyxDQUNOOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0NNLElBQU1HLGFBQWEsR0FBRztFQUN6QixJQUFJLEVBQUUsR0FBRztFQUNULFlBQVksRUFBRSxDQUNWO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUU7RUFDWixDQUFDLENBQ0o7RUFDRCxTQUFTLEVBQUUsQ0FDUDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxDQUNKO0VBQ0QsVUFBVSxFQUFFLEVBQUU7RUFDZCxTQUFTLEVBQUUsbVBBQW1QO0VBQzlQLFlBQVksRUFBRSxDQUFDO0VBQ2YsYUFBYSxFQUFFLDZLQUE2SztFQUM1TCx3QkFBd0IsRUFBRSxDQUFDO0VBQzNCLGdCQUFnQixFQUFFLENBQ2QsR0FBRztBQUVYLENBQUM7QUFDTSxJQUFNRCxZQUFZLEdBQUcsQ0FDeEIsR0FBRyxDQUNOOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNNLElBQU1HLGFBQWEsR0FBRztFQUN6QixJQUFJLEVBQUUsR0FBRztFQUNULFlBQVksRUFBRSxDQUNWO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUU7RUFDWixDQUFDLENBQ0o7RUFDRCxTQUFTLEVBQUUsQ0FDUDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxDQUNKO0VBQ0QsVUFBVSxFQUFFLEVBQUU7RUFDZCxTQUFTLEVBQUUsOEpBQThKO0VBQ3pLLFlBQVksRUFBRSxDQUFDO0VBQ2YsYUFBYSxFQUFFLHdIQUF3SDtFQUN2SSx3QkFBd0IsRUFBRSxDQUFDO0VBQzNCLGdCQUFnQixFQUFFLENBQ2QsR0FBRztBQUVYLENBQUM7QUFDTSxJQUFNRCxZQUFZLEdBQUcsQ0FDeEIsR0FBRyxDQUNOOzs7Ozs7Ozs7Ozs7Ozs7O0FDckNNLElBQU1HLGFBQWEsR0FBRztFQUN6QixJQUFJLEVBQUUsR0FBRztFQUNULFlBQVksRUFBRSxDQUNWO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxNQUFNLEVBQUU7RUFDWixDQUFDLENBQ0o7RUFDRCxTQUFTLEVBQUUsQ0FDUDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxFQUNEO0lBQ0ksSUFBSSxFQUFFLEdBQUc7SUFDVCxTQUFTLEVBQUU7RUFDZixDQUFDLEVBQ0Q7SUFDSSxJQUFJLEVBQUUsR0FBRztJQUNULFNBQVMsRUFBRTtFQUNmLENBQUMsRUFDRDtJQUNJLElBQUksRUFBRSxHQUFHO0lBQ1QsU0FBUyxFQUFFO0VBQ2YsQ0FBQyxDQUNKO0VBQ0QsVUFBVSxFQUFFLEVBQUU7RUFDZCxTQUFTLEVBQUUsNEhBQTRIO0VBQ3ZJLFlBQVksRUFBRSxDQUFDO0VBQ2YsYUFBYSxFQUFFLDZMQUE2TDtFQUM1TSx3QkFBd0IsRUFBRSxDQUFDO0VBQzNCLGdCQUFnQixFQUFFLENBQ2QsR0FBRztBQUVYLENBQUM7QUFDTSxJQUFNRCxZQUFZLEdBQUcsQ0FDeEIsR0FBRyxDQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDeUI7QUFDNEI7QUFDVjtBQUNOO0FBQ3RDLFNBQVNrQixXQUFXQSxDQUFBdkssSUFBQSxFQUFlO0VBQUEsSUFBWmtDLFFBQVEsR0FBQWxDLElBQUEsQ0FBUmtDLFFBQVE7RUFDM0Isb0JBQVE1TCwwREFBbUIsQ0FBQ3FKLGdEQUFNLENBQUMwSyxHQUFHLEVBQUU7SUFBRWxKLFFBQVEsRUFBRWEsb0RBQUk7SUFBRVYsU0FBUztFQUF1RSxDQUFDLGVBQ3ZJaEwsMERBQW1CLENBQUMsSUFBSSxFQUFFO0lBQUVnTCxTQUFTO0VBQTBCLENBQUMsRUFBRSxhQUFhLENBQUMsZUFDaEZoTCwwREFBbUIsQ0FBQ3dMLCtEQUFnQixFQUFFO0lBQUVzQixPQUFPLEVBQUVsQixRQUFRLENBQUNzSTtFQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ2pGO0FBQ0EsaUVBQWVELFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDMUIsU0FBU0UsS0FBS0EsQ0FBQXpLLElBQUEsRUFBWTtFQUFBLElBQVRzRyxLQUFLLEdBQUF0RyxJQUFBLENBQUxzRyxLQUFLO0VBQ2xCLG9CQUFRaFEsMERBQW1CLENBQUNBLHVEQUFjLEVBQUUsSUFBSSxlQUM1Q0EsMERBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUU2UixHQUFHLCtCQUFBeEcsTUFBQSxDQUErQjJFLEtBQUssQ0FBRTtJQUFFaEYsU0FBUyxvREFBb0Q7SUFBRThHLEdBQUcsRUFBRTtFQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFKO0FBQ0E7QUFDQSxpRUFBZXFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05NO0FBQ2U7QUFDekMsU0FBU0MsWUFBWUEsQ0FBQSxFQUFHO0VBQ3BCLG9CQUFRcFUsMERBQW1CLENBQUNBLHVEQUFjLEVBQUUsSUFBSSxlQUM1Q0EsMERBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBd0IsQ0FBQyxlQUM3RGhMLDBEQUFtQixDQUFDLElBQUksRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWlCLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLGVBQ2xGaEwsMERBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBOEMsQ0FBQyxlQUNuRmhMLDBEQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLGVBQzNCQSwwREFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFBRWdMLFNBQVM7RUFBZ0IsQ0FBQyxlQUNsRGhMLDBEQUFtQixDQUFDLE1BQU0sRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWlCLENBQUMsRUFBRSxTQUFTLENBQUMsRUFDdkUsNkNBQTZDLENBQUMsZUFDbERoTCwwREFBbUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLCtDQUErQyxDQUFDLENBQUMsZUFDcEZBLDBEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQW9CLENBQUMsZUFDekRoTCwwREFBbUIsQ0FBQyxHQUFHLEVBQUU7SUFBRXNMLElBQUksRUFBRTlCLGlEQUFNLENBQUN1SSxLQUFLO0lBQUUvRyxTQUFTLEVBQUU7RUFBeUIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxlQUM5RmhMLDBEQUFtQixDQUFDLEdBQUcsRUFBRTtJQUFFc0wsSUFBSSxFQUFFOUIsaURBQU0sQ0FBQ3dJLFFBQVE7SUFBRWhILFNBQVMsRUFBRTtFQUF3QixDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RIO0FBQ0EsaUVBQWVvSixZQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRDtBQUMxQixTQUFTM0ssT0FBT0EsQ0FBQSxFQUFHO0VBQ2Ysb0JBQVF6SiwwREFBbUIsQ0FBQ0EsdURBQWMsRUFBRSxJQUFJLENBQUM7QUFDckQ7QUFDQSxpRUFBZXlKLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkk7QUFDMUIsU0FBUzRHLGFBQWFBLENBQUEsRUFBRztFQUNyQixvQkFBUXJRLDBEQUFtQixDQUFDLElBQUksRUFBRTtJQUFFZ0wsU0FBUztFQUF5RSxDQUFDLGVBQ25IaEwsMERBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksZUFDMUJBLDBEQUFtQixDQUFDLEdBQUcsRUFBRSxJQUFJLGVBQ3pCQSwwREFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxlQUM1Q0EsMERBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUVnTCxTQUFTO0VBQWUsQ0FBQyxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFDakZoTCwwREFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxlQUMxQkEsMERBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksZUFDekJBLDBEQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsdUJBQXVCLENBQUMsZUFDMURBLDBEQUFtQixDQUFDLE1BQU0sRUFBRTtJQUFFZ0wsU0FBUztFQUFlLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLGVBQ2hGaEwsMERBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksZUFDMUJBLDBEQUFtQixDQUFDLEdBQUcsRUFBRSxJQUFJLGVBQ3pCQSwwREFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxlQUM1Q0EsMERBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUVnTCxTQUFTO0VBQWUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsZUFDNUVoTCwwREFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxlQUMxQkEsMERBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksZUFDekJBLDBEQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLGVBQzlDQSwwREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRWdMLFNBQVM7RUFBZSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxlQUMxRWhMLDBEQUFtQixDQUFDLElBQUksRUFBRSxJQUFJLGVBQzFCQSwwREFBbUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxlQUN6QkEsMERBQW1CLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSwwQkFBMEIsQ0FBQyxlQUM3REEsMERBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUVnTCxTQUFTO0VBQWUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZUFDMUVoTCwwREFBbUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxlQUMxQkEsMERBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksZUFDekJBLDBEQUFtQixDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLGVBQzFDQSwwREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRWdMLFNBQVM7RUFBZSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGVBQ3BGaEwsMERBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksZUFDMUJBLDBEQUFtQixDQUFDLEdBQUcsRUFBRSxJQUFJLGVBQ3pCQSwwREFBbUIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxlQUMzQ0EsMERBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUVnTCxTQUFTO0VBQWUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzRjtBQUNBO0FBQ0EsaUVBQWVxRixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDNUIsSUFBSWdFLE1BQU0sR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxNQUFNLElBQUssVUFBVTlRLENBQUMsRUFBRWxDLENBQUMsRUFBRTtFQUNsRCxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0VBQ1YsS0FBSyxJQUFJcUMsQ0FBQyxJQUFJSixDQUFDLEVBQUUsSUFBSS9CLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDRSxjQUFjLENBQUN3QixJQUFJLENBQUNJLENBQUMsRUFBRUksQ0FBQyxDQUFDLElBQUl0QyxDQUFDLENBQUNpVCxPQUFPLENBQUMzUSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQy9FckMsQ0FBQyxDQUFDcUMsQ0FBQyxDQUFDLEdBQUdKLENBQUMsQ0FBQ0ksQ0FBQyxDQUFDO0VBQ2YsSUFBSUosQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPL0IsTUFBTSxDQUFDK1MscUJBQXFCLEtBQUssVUFBVSxFQUMvRCxLQUFLLElBQUl4UyxDQUFDLEdBQUcsQ0FBQyxFQUFFNEIsQ0FBQyxHQUFHbkMsTUFBTSxDQUFDK1MscUJBQXFCLENBQUNoUixDQUFDLENBQUMsRUFBRXhCLENBQUMsR0FBRzRCLENBQUMsQ0FBQ3dDLE1BQU0sRUFBRXBFLENBQUMsRUFBRSxFQUFFO0lBQ3BFLElBQUlWLENBQUMsQ0FBQ2lULE9BQU8sQ0FBQzNRLENBQUMsQ0FBQzVCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJUCxNQUFNLENBQUNDLFNBQVMsQ0FBQytTLG9CQUFvQixDQUFDclIsSUFBSSxDQUFDSSxDQUFDLEVBQUVJLENBQUMsQ0FBQzVCLENBQUMsQ0FBQyxDQUFDLEVBQzFFVCxDQUFDLENBQUNxQyxDQUFDLENBQUM1QixDQUFDLENBQUMsQ0FBQyxHQUFHd0IsQ0FBQyxDQUFDSSxDQUFDLENBQUM1QixDQUFDLENBQUMsQ0FBQztFQUN6QjtFQUNKLE9BQU9ULENBQUM7QUFDWixDQUFDO0FBQ3lCO0FBQ2lCO0FBQzJCO0FBQ0c7QUFDbEUsU0FBU2tLLGdCQUFnQkEsQ0FBQTlCLElBQUEsRUFBYztFQUFBLElBQVhvRCxPQUFPLEdBQUFwRCxJQUFBLENBQVBvRCxPQUFPO0VBQ3RDLG9CQUFROU0sMERBQW1CLENBQUN5VSxvREFBYSxFQUFFO0lBQUVJLFVBQVUsRUFBRTtNQUNqREMsSUFBSSxXQUFKQSxJQUFJQSxDQUFDQyxFQUFFLEVBQUU7UUFDTCxJQUFNQyxRQUFRLEdBQWtDRCxFQUFFLENBQTVDQyxRQUFRO1VBQUVoSyxTQUFTLEdBQXVCK0osRUFBRSxDQUFsQy9KLFNBQVM7VUFBRWlLLElBQUksR0FBaUJGLEVBQUUsQ0FBdkJFLElBQUk7VUFBRUMsS0FBSyxHQUFVSCxFQUFFLENBQWpCRyxLQUFLO1VBQUVDLEdBQUcsR0FBS0osRUFBRSxDQUFWSSxHQUFHO1VBQVNDLElBQUksR0FBR2YsTUFBTSxDQUFDVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEgsSUFBTU0sS0FBSyxHQUFHLGdCQUFnQixDQUFDQyxJQUFJLENBQUN0SyxTQUFTLElBQUksRUFBRSxDQUFDO1FBQ3BELElBQU11SyxVQUFVLEdBQUdyTixLQUFLLENBQUNHLE9BQU8sQ0FBQzJNLFFBQVEsQ0FBQyxHQUFHQSxRQUFRLENBQUNRLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBR0MsTUFBTSxDQUFDVCxRQUFRLENBQUM7UUFDakYsT0FBT0ssS0FBSyxpQkFBSXJWLDBEQUFtQixDQUFDMlUsZ0VBQWlCLEVBQUVuVCxNQUFNLENBQUNtTSxNQUFNLENBQUM7VUFBRStILFFBQVEsRUFBRUwsS0FBSyxDQUFDLENBQUMsQ0FBQztVQUFFTSxNQUFNLEVBQUUsS0FBSztVQUFFVCxLQUFLLEVBQUVOLG9GQUFPO1VBQUU1SixTQUFTLEVBQUU7UUFBZSxDQUFDLEVBQUVvSyxJQUFJLENBQUMsRUFBRUcsVUFBVSxDQUFDSyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGtCQUFLNVYsMERBQW1CLENBQUMsTUFBTSxFQUFFd0IsTUFBTSxDQUFDbU0sTUFBTSxDQUFDO1VBQUUzQyxTQUFTLEVBQUVBO1FBQVUsQ0FBQyxFQUFFb0ssSUFBSSxDQUFDLEVBQUVKLFFBQVEsQ0FBQyxDQUFDO01BQzFSO0lBQ0o7RUFBRSxDQUFDLEVBQUVsSSxPQUFPLENBQUM7QUFDckI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEIwQjtBQUMxQixTQUFTbUIsY0FBY0EsQ0FBQXZFLElBQUEsRUFBWTtFQUFBLElBQVRzRyxLQUFLLEdBQUF0RyxJQUFBLENBQUxzRyxLQUFLO0VBQzNCLElBQU02RixRQUFRLEdBQUc3RixLQUFLLDRCQUFBM0UsTUFBQSxDQUNTMkUsS0FBSyx1Q0FDSztFQUN6QyxvQkFBUWhRLDBEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyw2RkFBNkY7SUFBRTZHLEdBQUcsRUFBRWdFLFFBQVE7SUFBRS9ELEdBQUcsRUFBRTtFQUFrQixDQUFDLENBQUM7QUFDekw7QUFDQTtBQUNBLGlFQUFlN0QsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ1A3QixxSkFBQTdNLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csZUFBQXBHLENBQUEsRUFBQUYsQ0FBQSxXQUFBdUcsZUFBQSxDQUFBckcsQ0FBQSxLQUFBc0cscUJBQUEsQ0FBQXRHLENBQUEsRUFBQUYsQ0FBQSxLQUFBeUcsMkJBQUEsQ0FBQXZHLENBQUEsRUFBQUYsQ0FBQSxLQUFBMEcsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBM0MsU0FBQTtBQUFBLFNBQUEwQyw0QkFBQXZHLENBQUEsRUFBQVUsQ0FBQSxRQUFBVixDQUFBLDJCQUFBQSxDQUFBLFNBQUF5RyxpQkFBQSxDQUFBekcsQ0FBQSxFQUFBVSxDQUFBLE9BQUFYLENBQUEsTUFBQTJHLFFBQUEsQ0FBQTlFLElBQUEsQ0FBQTVCLENBQUEsRUFBQTRGLEtBQUEsNkJBQUE3RixDQUFBLElBQUFDLENBQUEsQ0FBQStFLFdBQUEsS0FBQWhGLENBQUEsR0FBQUMsQ0FBQSxDQUFBK0UsV0FBQSxDQUFBQyxJQUFBLGFBQUFqRixDQUFBLGNBQUFBLENBQUEsR0FBQTRHLEtBQUEsQ0FBQUMsSUFBQSxDQUFBNUcsQ0FBQSxvQkFBQUQsQ0FBQSwrQ0FBQThHLElBQUEsQ0FBQTlHLENBQUEsSUFBQTBHLGlCQUFBLENBQUF6RyxDQUFBLEVBQUFVLENBQUE7QUFBQSxTQUFBK0Ysa0JBQUF6RyxDQUFBLEVBQUFVLENBQUEsYUFBQUEsQ0FBQSxJQUFBQSxDQUFBLEdBQUFWLENBQUEsQ0FBQTRFLE1BQUEsTUFBQWxFLENBQUEsR0FBQVYsQ0FBQSxDQUFBNEUsTUFBQSxZQUFBOUUsQ0FBQSxNQUFBSyxDQUFBLEdBQUF3RyxLQUFBLENBQUFqRyxDQUFBLEdBQUFaLENBQUEsR0FBQVksQ0FBQSxFQUFBWixDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxJQUFBRSxDQUFBLENBQUFGLENBQUEsVUFBQUssQ0FBQTtBQUFBLFNBQUFtRyxzQkFBQXRHLENBQUEsRUFBQThCLENBQUEsUUFBQS9CLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQVMsTUFBQSxJQUFBVCxDQUFBLENBQUFTLE1BQUEsQ0FBQUUsUUFBQSxLQUFBWCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFNLENBQUEsRUFBQUosQ0FBQSxPQUFBcUIsQ0FBQSxPQUFBMUIsQ0FBQSxpQkFBQUcsQ0FBQSxJQUFBVCxDQUFBLEdBQUFBLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTVCLENBQUEsR0FBQStELElBQUEsUUFBQWpDLENBQUEsUUFBQTdCLE1BQUEsQ0FBQUYsQ0FBQSxNQUFBQSxDQUFBLFVBQUFnQyxDQUFBLHVCQUFBQSxDQUFBLElBQUFqQyxDQUFBLEdBQUFVLENBQUEsQ0FBQW9CLElBQUEsQ0FBQTdCLENBQUEsR0FBQXNELElBQUEsTUFBQTNDLENBQUEsQ0FBQTZELElBQUEsQ0FBQXpFLENBQUEsQ0FBQVMsS0FBQSxHQUFBRyxDQUFBLENBQUFrRSxNQUFBLEtBQUE5QyxDQUFBLEdBQUFDLENBQUEsaUJBQUEvQixDQUFBLElBQUFLLENBQUEsT0FBQUYsQ0FBQSxHQUFBSCxDQUFBLHlCQUFBK0IsQ0FBQSxZQUFBaEMsQ0FBQSxlQUFBZSxDQUFBLEdBQUFmLENBQUEsY0FBQUUsTUFBQSxDQUFBYSxDQUFBLE1BQUFBLENBQUEsMkJBQUFULENBQUEsUUFBQUYsQ0FBQSxhQUFBTyxDQUFBO0FBQUEsU0FBQTJGLGdCQUFBckcsQ0FBQSxRQUFBMkcsS0FBQSxDQUFBRyxPQUFBLENBQUE5RyxDQUFBLFVBQUFBLENBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREEsSUFBSStHLFNBQVMsR0FBSSxTQUFJLElBQUksU0FBSSxDQUFDQSxTQUFTLElBQUssVUFBVUMsT0FBTyxFQUFFQyxVQUFVLEVBQUVDLENBQUMsRUFBRUMsU0FBUyxFQUFFO0VBQ3JGLFNBQVNDLEtBQUtBLENBQUM3RyxLQUFLLEVBQUU7SUFBRSxPQUFPQSxLQUFLLFlBQVkyRyxDQUFDLEdBQUczRyxLQUFLLEdBQUcsSUFBSTJHLENBQUMsQ0FBQyxVQUFVbEUsT0FBTyxFQUFFO01BQUVBLE9BQU8sQ0FBQ3pDLEtBQUssQ0FBQztJQUFFLENBQUMsQ0FBQztFQUFFO0VBQzNHLE9BQU8sS0FBSzJHLENBQUMsS0FBS0EsQ0FBQyxHQUFHNUIsT0FBTyxDQUFDLEVBQUUsVUFBVXRDLE9BQU8sRUFBRXFFLE1BQU0sRUFBRTtJQUN2RCxTQUFTQyxTQUFTQSxDQUFDL0csS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFZ0gsSUFBSSxDQUFDSixTQUFTLENBQUNwRCxJQUFJLENBQUN4RCxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPVCxDQUFDLEVBQUU7UUFBRXVILE1BQU0sQ0FBQ3ZILENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDMUYsU0FBUzBILFFBQVFBLENBQUNqSCxLQUFLLEVBQUU7TUFBRSxJQUFJO1FBQUVnSCxJQUFJLENBQUNKLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzVHLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU9ULENBQUMsRUFBRTtRQUFFdUgsTUFBTSxDQUFDdkgsQ0FBQyxDQUFDO01BQUU7SUFBRTtJQUM3RixTQUFTeUgsSUFBSUEsQ0FBQ0UsTUFBTSxFQUFFO01BQUVBLE1BQU0sQ0FBQ3BFLElBQUksR0FBR0wsT0FBTyxDQUFDeUUsTUFBTSxDQUFDbEgsS0FBSyxDQUFDLEdBQUc2RyxLQUFLLENBQUNLLE1BQU0sQ0FBQ2xILEtBQUssQ0FBQyxDQUFDMkMsSUFBSSxDQUFDb0UsU0FBUyxFQUFFRSxRQUFRLENBQUM7SUFBRTtJQUM3R0QsSUFBSSxDQUFDLENBQUNKLFNBQVMsR0FBR0EsU0FBUyxDQUFDTyxLQUFLLENBQUNWLE9BQU8sRUFBRUMsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFbEQsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUN6RSxDQUFDLENBQUM7QUFDTixDQUFDO0FBQ2tEO0FBQ3NDO0FBQ3pEO0FBQ2dCO0FBQ047QUFDVjtBQUNBO0FBQ2tCO0FBQ0Y7QUFDTztBQUNYO0FBQzVDLFNBQVNuRixRQUFRQSxDQUFBdUosSUFBQSxFQUFxQztFQUFBLElBQUEwTSxLQUFBO0VBQUEsSUFBbEMxVixJQUFJLEdBQUFnSixJQUFBLENBQUpoSixJQUFJO0lBQUVFLFVBQVUsR0FBQThJLElBQUEsQ0FBVjlJLFVBQVU7SUFBRUUsWUFBWSxHQUFBNEksSUFBQSxDQUFaNUksWUFBWTtFQUM5QyxJQUFBNkksU0FBQSxHQUE4QlIsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQVMsVUFBQSxHQUFBakMsY0FBQSxDQUFBZ0MsU0FBQTtJQUFyQ00sT0FBTyxHQUFBTCxVQUFBO0lBQUVNLFVBQVUsR0FBQU4sVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQWdDWixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBYSxVQUFBLEdBQUFyQyxjQUFBLENBQUFvQyxVQUFBO0lBQXZDNkIsUUFBUSxHQUFBNUIsVUFBQTtJQUFFaUQsV0FBVyxHQUFBakQsVUFBQTtFQUM1QixJQUFBMEcsVUFBQSxHQUE4QnZILGdEQUFRLENBQUMsRUFBRSxDQUFDO0lBQUF3SCxVQUFBLEdBQUFoSixjQUFBLENBQUErSSxVQUFBO0lBQW5DN0UsT0FBTyxHQUFBOEUsVUFBQTtJQUFFN0UsVUFBVSxHQUFBNkUsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQXdDM0gsZ0RBQVEsQ0FBQyxLQUFLLENBQUM7SUFBQTRILFVBQUEsR0FBQXBKLGNBQUEsQ0FBQW1KLFVBQUE7SUFBaER1RixZQUFZLEdBQUF0RixVQUFBO0lBQUV1RixlQUFlLEdBQUF2RixVQUFBO0VBQ3BDLElBQUFDLFVBQUEsR0FBOEI3SCxnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBOEgsV0FBQSxHQUFBdEosY0FBQSxDQUFBcUosVUFBQTtJQUFyQ3VGLE9BQU8sR0FBQXRGLFdBQUE7SUFBRXVGLFVBQVUsR0FBQXZGLFdBQUE7RUFDMUIsSUFBQXdGLFdBQUEsR0FBd0J0TixnREFBUSxDQUFDLEtBQUssQ0FBQztJQUFBdU4sV0FBQSxHQUFBL08sY0FBQSxDQUFBOE8sV0FBQTtJQUFoQzlULElBQUksR0FBQStULFdBQUE7SUFBRUMsT0FBTyxHQUFBRCxXQUFBO0VBQ3BCeE4saURBQVMsQ0FBQyxZQUFNO0lBQ1o7RUFBQSxDQUNILEVBQUUsQ0FBQzBDLFFBQVEsQ0FBQyxDQUFDO0VBQ2QxQyxpREFBUyxDQUFDLFlBQU07SUFDWjBOLFlBQVksQ0FBQyxDQUFDO0VBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTjFOLGlEQUFTLENBQUMsWUFBTTtJQUNaLElBQU0yTixhQUFhLEdBQUd2VyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUMvRCxJQUFJb1csYUFBYSxFQUFFO01BQ2YsSUFBSWxVLElBQUksRUFBRTtRQUNOa1UsYUFBYSxDQUFDQyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFDdkMsQ0FBQyxNQUNJO1FBQ0RGLGFBQWEsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO01BQzFDO0lBQ0o7RUFDSixDQUFDLEVBQUUsQ0FBQ3JVLElBQUksQ0FBQyxDQUFDO0VBQ1YsU0FBU2lVLFlBQVlBLENBQUEsRUFBRztJQUNwQixPQUFPdE8sU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBQWxILG1CQUFBLEdBQUFvRixJQUFBLENBQUUsU0FBQTRELFFBQUE7TUFBQSxJQUFBNk0sVUFBQSxFQUFBNU0sSUFBQTtNQUFBLE9BQUFqSixtQkFBQSxHQUFBdUIsSUFBQSxVQUFBMkgsU0FBQUMsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUF0RCxJQUFBLEdBQUFzRCxRQUFBLENBQUFqRixJQUFBO1VBQUE7WUFDbkM0RSxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2hCNEIsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNSbUwsVUFBVSxHQUFHQyxlQUFlLENBQUMsQ0FBQztZQUFBM00sUUFBQSxDQUFBdEQsSUFBQTtZQUFBLE1BRzVCdkcsSUFBSSxLQUFLLFNBQVMsSUFBSUUsVUFBVSxHQUFHLENBQUM7Y0FBQTJKLFFBQUEsQ0FBQWpGLElBQUE7Y0FBQTtZQUFBO1lBQUFpRixRQUFBLENBQUFqRixJQUFBO1lBQzdCLE9BQU15USxvRUFBVyxDQUFDblYsVUFBVSxDQUFDO1VBQUE7WUFBcEN5SixJQUFJLEdBQUFFLFFBQUEsQ0FBQXZGLElBQUE7WUFBQXVGLFFBQUEsQ0FBQWpGLElBQUE7WUFBQTtVQUFBO1lBQUFpRixRQUFBLENBQUFqRixJQUFBO1lBR0csT0FBTXdRLDBFQUFpQixDQUFDbUIsVUFBVSxDQUFDO1VBQUE7WUFBMUM1TSxJQUFJLEdBQUFFLFFBQUEsQ0FBQXZGLElBQUE7VUFBQTtZQUFBLE1BRUosY0FBYyxJQUFJcUYsSUFBSTtjQUFBRSxRQUFBLENBQUFqRixJQUFBO2NBQUE7WUFBQTtZQUN0QmdSLGVBQWUsQ0FBQyxJQUFJLENBQUM7WUFBQyxPQUFBL0wsUUFBQSxDQUFBcEYsTUFBQTtVQUFBO1lBR3JCLElBQUksSUFBSSxJQUFJa0YsSUFBSSxFQUFFO2NBQ25CNEMsV0FBVyxDQUFDNUMsSUFBSSxDQUFDO1lBQ3JCO1VBQUM7WUFBQUUsUUFBQSxDQUFBakYsSUFBQTtZQUFBO1VBQUE7WUFBQWlGLFFBQUEsQ0FBQXRELElBQUE7WUFBQXNELFFBQUEsQ0FBQUMsRUFBQSxHQUFBRCxRQUFBO1lBR0RFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHlCQUF5QixFQUFBSCxRQUFBLENBQUFDLEVBQU8sQ0FBQztVQUFDO1lBQUFELFFBQUEsQ0FBQXRELElBQUE7WUFHaERpRCxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQUMsT0FBQUssUUFBQSxDQUFBL0MsTUFBQTtVQUFBO1VBQUE7WUFBQSxPQUFBK0MsUUFBQSxDQUFBbkQsSUFBQTtRQUFBO01BQUEsR0FBQWdELE9BQUE7SUFBQSxDQUV6QixFQUFDO0VBQ047RUFDQSxTQUFTOE0sZUFBZUEsQ0FBQSxFQUFHO0lBQ3ZCLElBQU1DLFlBQVksR0FBRyxJQUFJQyxlQUFlLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLENBQUM7SUFDaEUsSUFBTU4sVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNyQixJQUFJRSxZQUFZLENBQUNLLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBRTtNQUNoQ1AsVUFBVSxDQUFDUSxVQUFVLEdBQUdOLFlBQVksQ0FBQ08sR0FBRyxDQUFDLFlBQVksQ0FBQztJQUMxRDtJQUNBLElBQUlQLFlBQVksQ0FBQ0ssR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFO01BQ2hDUCxVQUFVLENBQUNVLFVBQVUsR0FBR1IsWUFBWSxDQUFDUyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQzdEO0lBQ0EsT0FBT1gsVUFBVTtFQUNyQjtFQUNBLFNBQVNZLGtCQUFrQkEsQ0FBQSxFQUFHO0lBQzFCckIsVUFBVSxDQUFDLEtBQUssQ0FBQztFQUNyQjtFQUNBLFNBQVNzQixnQkFBZ0JBLENBQUEsRUFBRztJQUN4Qm5CLE9BQU8sQ0FBQyxVQUFBaFUsSUFBSTtNQUFBLE9BQUksQ0FBQ0EsSUFBSTtJQUFBLEVBQUM7RUFDMUI7RUFDQSxTQUFTNEssWUFBWUEsQ0FBQSxFQUFHO0lBQ3BCLE9BQU9qRixTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxlQUFBbEgsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBdVIsU0FBQTtNQUFBLElBQUEvTyxNQUFBO01BQUEsT0FBQTVILG1CQUFBLEdBQUF1QixJQUFBLFVBQUFxVixVQUFBQyxTQUFBO1FBQUEsa0JBQUFBLFNBQUEsQ0FBQWhSLElBQUEsR0FBQWdSLFNBQUEsQ0FBQTNTLElBQUE7VUFBQTtZQUFBMlMsU0FBQSxDQUFBaFIsSUFBQTtZQUFBZ1IsU0FBQSxDQUFBM1MsSUFBQTtZQUVoQixPQUFNMFEsc0VBQWEsQ0FBQ3BLLFFBQVEsS0FBSyxJQUFJLElBQUlBLFFBQVEsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsUUFBUSxDQUFDVSxFQUFFLEVBQUVULE9BQU8sQ0FBQztVQUFBO1lBQXRHN0MsTUFBTSxHQUFBaVAsU0FBQSxDQUFBalQsSUFBQTtZQUNaLElBQUk0RyxRQUFRLEVBQUU7Y0FDVnFCLFdBQVcsQ0FBQ3pMLE1BQU0sQ0FBQ21NLE1BQU0sQ0FBQ25NLE1BQU0sQ0FBQ21NLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRS9CLFFBQVEsQ0FBQyxFQUFFO2dCQUFFSyxjQUFjLEVBQUVqRCxNQUFNLENBQUNpRCxjQUFjO2dCQUFFaU0sT0FBTyxFQUFFbFAsTUFBTSxDQUFDa1A7Y0FBUSxDQUFDLENBQUMsQ0FBQztZQUMvSDtZQUFDRCxTQUFBLENBQUEzUyxJQUFBO1lBQUE7VUFBQTtZQUFBMlMsU0FBQSxDQUFBaFIsSUFBQTtZQUFBZ1IsU0FBQSxDQUFBek4sRUFBQSxHQUFBeU4sU0FBQTtZQUdEeE4sT0FBTyxDQUFDQyxLQUFLLENBQUMsNkJBQTZCLEVBQUF1TixTQUFBLENBQUF6TixFQUFPLENBQUM7VUFBQztVQUFBO1lBQUEsT0FBQXlOLFNBQUEsQ0FBQTdRLElBQUE7UUFBQTtNQUFBLEdBQUEyUSxRQUFBO0lBQUEsQ0FFM0QsRUFBQztFQUNOO0VBQ0EsSUFBSTFCLFlBQVksRUFDWixvQkFBT3JXLDJEQUFtQixDQUFDb1Usc0RBQVksRUFBRSxJQUFJLENBQUM7RUFDbEQsSUFBSW5LLE9BQU8sRUFDUCxvQkFBT2pLLDJEQUFtQixDQUFDeUosaURBQU8sRUFBRSxJQUFJLENBQUM7RUFDN0MsSUFBSSxDQUFDbUMsUUFBUSxFQUNULG9CQUFPNUwsMkRBQW1CLENBQUNrVywwREFBZ0IsRUFBRSxJQUFJLENBQUM7RUFDdEQsb0JBQVFsVywyREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFzQixDQUFDLGVBQ25FaEwsMkRBQW1CLENBQUNtVywwREFBZSxFQUFFO0lBQUV6VixJQUFJLEVBQUUsTUFBTTtJQUFFeVgsY0FBYyxFQUFFLFNBQWhCQSxjQUFjQSxDQUFBO01BQUEsT0FBUTdQLFNBQVMsQ0FBQzhOLEtBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBQWhWLG1CQUFBLEdBQUFvRixJQUFBLENBQUUsU0FBQTRSLFNBQUE7UUFBQSxPQUFBaFgsbUJBQUEsR0FBQXVCLElBQUEsVUFBQTBWLFVBQUFDLFNBQUE7VUFBQSxrQkFBQUEsU0FBQSxDQUFBclIsSUFBQSxHQUFBcVIsU0FBQSxDQUFBaFQsSUFBQTtZQUFBO2NBQUFnVCxTQUFBLENBQUFoVCxJQUFBO2NBQ25HLE9BQU1zUixZQUFZLENBQUMsQ0FBQztZQUFBO2NBQ3BCSixVQUFVLENBQUMsSUFBSSxDQUFDO1lBQUM7WUFBQTtjQUFBLE9BQUE4QixTQUFBLENBQUFsUixJQUFBO1VBQUE7UUFBQSxHQUFBZ1IsUUFBQTtNQUFBLENBQ3BCLEVBQUM7SUFBQTtFQUFDLENBQUMsRUFBRTdCLE9BQU8sa0JBQUt2VywyREFBbUIsQ0FBQ3FKLGlEQUFNLENBQUMwSyxHQUFHLEVBQUU7SUFBRTNJLEdBQUcsRUFBRVEsUUFBUSxDQUFDVSxFQUFFO0lBQUV4QixPQUFPLEVBQUUsUUFBUTtJQUFFQyxPQUFPLEVBQUUsU0FBUztJQUFFaUosSUFBSSxFQUFFLFFBQVE7SUFBRW5KLFFBQVEsRUFBRWEscURBQUk7SUFBRVYsU0FBUyxFQUFFO0VBQXlCLENBQUMsRUFDbEx0SyxJQUFJLEtBQUssTUFBTSxpQkFDWFYsMkRBQW1CLENBQUNpVyxpREFBTyxFQUFFO0lBQUVzQyxNQUFNLEVBQUVWLGtCQUFrQjtJQUFFVyxNQUFNLEVBQUVWLGdCQUFnQjtJQUFFblYsSUFBSSxFQUFFQSxJQUFJO0lBQUU4VixTQUFTLEVBQUV4TztFQUFRLENBQUMsQ0FBQyxlQUMxSGpLLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXNCLENBQUMsZUFDM0RoTCwyREFBbUIsQ0FBQ3NTLHlEQUFlLEVBQUU7SUFBRTFHLFFBQVEsRUFBRUE7RUFBUyxDQUFDLENBQUMsZUFDNUQ1TCwyREFBbUIsQ0FBQzJMLGlEQUFPLEVBQUU7SUFBRWpMLElBQUksRUFBRUEsSUFBSTtJQUFFa0wsUUFBUSxFQUFFQSxRQUFRO0lBQUVDLE9BQU8sRUFBRUEsT0FBTztJQUFFQyxVQUFVLEVBQUVBO0VBQVcsQ0FBQyxDQUFDLEVBQzFHcEwsSUFBSSxLQUFLLE1BQU0sa0JBQUtWLDJEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQW9CLENBQUMsRUFBRVksUUFBUSxDQUFDSyxjQUFjLGlCQUFJak0sMkRBQW1CLENBQUMsUUFBUSxFQUFFO0lBQUVnTCxTQUFTLDBCQUEwQjtJQUFFNkMsT0FBTyxFQUFFZ0s7RUFBbUIsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxrQkFBSzdYLDJEQUFtQixDQUFDLFFBQVEsRUFBRTtJQUFFZ0wsU0FBUyxFQUFFLHdCQUF3QjtJQUFFNkMsT0FBTyxFQUFFTjtFQUFhLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUMvVjNCLFFBQVEsQ0FBQ0ssY0FBYyxJQUFJbkwsWUFBWSxrQkFBS2QsMkRBQW1CLENBQUNzUSw2REFBVyxFQUFFO0lBQUUxRSxRQUFRLEVBQUVBLFFBQVE7SUFBRXFCLFdBQVcsRUFBRUE7RUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hJO0FBQ0EsaUVBQWU5TSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFIRztBQUM0QjtBQUMxQjtBQUNZO0FBQ3hDLFNBQVNtUyxlQUFlQSxDQUFBNUksSUFBQSxFQUFlO0VBQUEsSUFBWmtDLFFBQVEsR0FBQWxDLElBQUEsQ0FBUmtDLFFBQVE7RUFDL0Isb0JBQVE1TCwwREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFZLENBQUMsZUFDekRoTCwwREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUF5RSxDQUFDLGVBQzlHaEwsMERBQW1CLENBQUMsSUFBSSxFQUFFO0lBQUVnTCxTQUFTO0VBQTBCLENBQUMsRUFBRVksUUFBUSxDQUFDK0wsVUFBVSxDQUFDMU0sR0FBRyxDQUFDLFVBQUN5TixRQUFRLEVBQUV2TixLQUFLO0lBQUEsb0JBQU1uTCwwREFBbUIsQ0FBQyxJQUFJLEVBQUU7TUFBRW9MLEdBQUcsY0FBQUMsTUFBQSxDQUFjRixLQUFLO0lBQUcsQ0FBQyxlQUNsS25MLDBEQUFtQixDQUFDLE1BQU0sRUFBRTtNQUFFZ0wsU0FBUztJQUFrQixDQUFDLEVBQUUwTixRQUFRLENBQUNuUyxJQUFJLENBQUMsQ0FBQztFQUFBLENBQUMsQ0FBQyxDQUFDLGVBQ2xGdkcsMERBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTO0VBQXlCLENBQUMsRUFBRTlDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ3lRLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzFOLEdBQUcsQ0FBQyxVQUFDMk4sQ0FBQyxFQUFFek4sS0FBSyxFQUFLO0lBQ3BHLElBQU0wTixXQUFXLEdBQUcxTixLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBR0EsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSztJQUNyRSxJQUFNMk4sWUFBWSxHQUFHM04sS0FBSyxJQUFJUyxRQUFRLEtBQUssSUFBSSxJQUFJQSxRQUFRLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLFFBQVEsQ0FBQzZMLFVBQVUsQ0FBQyxHQUFHLGFBQWEsR0FBRyxZQUFZO0lBQ3JJLG9CQUFRelgsMERBQW1CLENBQUMsTUFBTSxFQUFFO01BQUVnTCxTQUFTLGtDQUFBSyxNQUFBLENBQWtDd04sV0FBVyxPQUFBeE4sTUFBQSxDQUFJeU4sWUFBWSxDQUFFO01BQUUxTixHQUFHLEVBQUVEO0lBQU0sQ0FBQyxDQUFDO0VBQ2pJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDUm5MLDBEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUztFQUF3RSxDQUFDLGVBQzNHaEwsMERBQW1CLENBQUN3TCwrREFBZ0IsRUFBRTtJQUFFc0IsT0FBTyxFQUFFbEIsUUFBUSxDQUFDa0I7RUFBUSxDQUFDLENBQUMsQ0FBQyxFQUN6RWxCLFFBQVEsQ0FBQ08sc0JBQXNCLEdBQUcsQ0FBQyxpQkFDL0JuTSwwREFBbUIsQ0FBQyxHQUFHLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUEwQixDQUFDLEVBQUUsNEJBQTRCLENBQUMsRUFDcEdZLFFBQVEsQ0FBQ29FLEtBQUssaUJBQUloUSwwREFBbUIsQ0FBQ21VLDhDQUFLLEVBQUU7SUFBRW5FLEtBQUssRUFBRXBFLFFBQVEsQ0FBQ29FO0VBQU0sQ0FBQyxDQUFDLEVBQ3ZFcEUsUUFBUSxDQUFDSyxjQUFjLGlCQUFJak0sMERBQW1CLENBQUNpVSxxREFBVyxFQUFFO0lBQUVySSxRQUFRLEVBQUVBO0VBQVMsQ0FBQyxDQUFDLENBQUM7QUFDNUY7QUFDQTtBQUNBLGlFQUFlMEcsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJKO0FBQ2U7QUFDekMsU0FBUzRELGdCQUFnQkEsQ0FBQSxFQUFHO0VBQ3hCLG9CQUFRbFcsMERBQW1CLENBQUNBLHVEQUFjLEVBQUUsSUFBSSxlQUM1Q0EsMERBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBd0IsQ0FBQyxlQUM3RGhMLDBEQUFtQixDQUFDLElBQUksRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWlCLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLGVBQ3JGaEwsMERBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBOEMsQ0FBQyxlQUNuRmhMLDBEQUFtQixDQUFDLEtBQUssRUFBRSxJQUFJLGVBQzNCQSwwREFBbUIsQ0FBQyxJQUFJLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFjLENBQUMsZUFDbERoTCwwREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFpQixDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQ3ZFLG1CQUFtQixDQUFDLGVBQ3hCaEwsMERBQW1CLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSx5REFBeUQsQ0FBQyxDQUFDLGVBQzlGQSwwREFBbUIsQ0FBQyxLQUFLLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFvQixDQUFDLGVBQ3pEaEwsMERBQW1CLENBQUMsR0FBRyxFQUFFO0lBQUVzTCxJQUFJLEVBQUU5QixpREFBTSxDQUFDdVAsT0FBTztJQUFFL04sU0FBUyxFQUFFO0VBQXdCLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEg7QUFDQTtBQUNBLGlFQUFla0wsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkw7QUFDZTtBQUN6QyxTQUFTRCxPQUFPQSxDQUFBdk0sSUFBQSxFQUFzQztFQUFBLElBQW5DNk8sTUFBTSxHQUFBN08sSUFBQSxDQUFONk8sTUFBTTtJQUFFQyxNQUFNLEdBQUE5TyxJQUFBLENBQU44TyxNQUFNO0lBQUU3VixJQUFJLEdBQUErRyxJQUFBLENBQUovRyxJQUFJO0lBQUU4VixTQUFTLEdBQUEvTyxJQUFBLENBQVQrTyxTQUFTO0VBQzlDLG9CQUFRelksMERBQW1CLENBQUMsS0FBSyxFQUFFO0lBQUVnTCxTQUFTO0VBQXVDLENBQUMsZUFDbEZoTCwwREFBbUIsQ0FBQyxPQUFPLEVBQUU7SUFBRWdMLFNBQVM7RUFBc0ssQ0FBQyxlQUMzTWhMLDBEQUFtQixDQUFDLEtBQUssRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQXNDLENBQUMsZUFDM0VoTCwwREFBbUIsQ0FBQyxRQUFRLEVBQUU7SUFBRWdMLFNBQVMsRUFBRSxzQkFBc0I7SUFBRTZDLE9BQU8sRUFBRTBLLE1BQU07SUFBRXpLLFFBQVEsRUFBRTJLO0VBQVUsQ0FBQyxlQUNyR3pZLDBEQUFtQixDQUFDLE1BQU0sRUFBRTtJQUFFZ0wsU0FBUyxFQUFFO0VBQWlCLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxlQUM5RWhMLDBEQUFtQixDQUFDLEdBQUcsRUFBRTtJQUFFc0wsSUFBSSxFQUFFOUIsaURBQU0sQ0FBQ3VQLE9BQU87SUFBRS9OLFNBQVMsRUFBRTtFQUF1QixDQUFDLGVBQ2hGaEwsMERBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBaUIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLGVBQ3pFaEwsMERBQW1CLENBQUMsUUFBUSxFQUFFO0lBQUVnTCxTQUFTLEVBQUUsc0JBQXNCO0lBQUU2QyxPQUFPLEVBQUUySztFQUFPLENBQUMsRUFBRTdWLElBQUksaUJBQUkzQywwREFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFBRWdMLFNBQVMsRUFBRTtFQUFpQixDQUFDLEVBQUUsT0FBTyxDQUFDLGtCQUFLaEwsMERBQW1CLENBQUMsTUFBTSxFQUFFO0lBQUVnTCxTQUFTLEVBQUU7RUFBaUIsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM1UTtBQUNBO0FBQ0EsaUVBQWVpTCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQ1p0QixxSkFBQTdVLG1CQUFBLFlBQUFBLG9CQUFBLFdBQUFDLENBQUEsU0FBQUMsQ0FBQSxFQUFBRCxDQUFBLE9BQUFFLENBQUEsR0FBQUMsTUFBQSxDQUFBQyxTQUFBLEVBQUFDLENBQUEsR0FBQUgsQ0FBQSxDQUFBSSxjQUFBLEVBQUFDLENBQUEsR0FBQUosTUFBQSxDQUFBSyxjQUFBLGNBQUFQLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLElBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLENBQUFPLEtBQUEsS0FBQUMsQ0FBQSx3QkFBQUMsTUFBQSxHQUFBQSxNQUFBLE9BQUFDLENBQUEsR0FBQUYsQ0FBQSxDQUFBRyxRQUFBLGtCQUFBQyxDQUFBLEdBQUFKLENBQUEsQ0FBQUssYUFBQSx1QkFBQUMsQ0FBQSxHQUFBTixDQUFBLENBQUFPLFdBQUEsOEJBQUFDLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBQyxNQUFBLENBQUFLLGNBQUEsQ0FBQVAsQ0FBQSxFQUFBRCxDQUFBLElBQUFTLEtBQUEsRUFBQVAsQ0FBQSxFQUFBaUIsVUFBQSxNQUFBQyxZQUFBLE1BQUFDLFFBQUEsU0FBQXBCLENBQUEsQ0FBQUQsQ0FBQSxXQUFBa0IsTUFBQSxtQkFBQWpCLENBQUEsSUFBQWlCLE1BQUEsWUFBQUEsT0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLFdBQUFELENBQUEsQ0FBQUQsQ0FBQSxJQUFBRSxDQUFBLGdCQUFBb0IsS0FBQXJCLENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUssQ0FBQSxHQUFBVixDQUFBLElBQUFBLENBQUEsQ0FBQUksU0FBQSxZQUFBbUIsU0FBQSxHQUFBdkIsQ0FBQSxHQUFBdUIsU0FBQSxFQUFBWCxDQUFBLEdBQUFULE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWQsQ0FBQSxDQUFBTixTQUFBLEdBQUFVLENBQUEsT0FBQVcsT0FBQSxDQUFBcEIsQ0FBQSxnQkFBQUUsQ0FBQSxDQUFBSyxDQUFBLGVBQUFILEtBQUEsRUFBQWlCLGdCQUFBLENBQUF6QixDQUFBLEVBQUFDLENBQUEsRUFBQVksQ0FBQSxNQUFBRixDQUFBLGFBQUFlLFNBQUExQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxtQkFBQTBCLElBQUEsWUFBQUMsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBNkIsSUFBQSxDQUFBOUIsQ0FBQSxFQUFBRSxDQUFBLGNBQUFELENBQUEsYUFBQTJCLElBQUEsV0FBQUMsR0FBQSxFQUFBNUIsQ0FBQSxRQUFBRCxDQUFBLENBQUFzQixJQUFBLEdBQUFBLElBQUEsTUFBQVMsQ0FBQSxxQkFBQUMsQ0FBQSxxQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQUMsQ0FBQSxnQkFBQVosVUFBQSxjQUFBYSxrQkFBQSxjQUFBQywyQkFBQSxTQUFBQyxDQUFBLE9BQUFwQixNQUFBLENBQUFvQixDQUFBLEVBQUExQixDQUFBLHFDQUFBMkIsQ0FBQSxHQUFBcEMsTUFBQSxDQUFBcUMsY0FBQSxFQUFBQyxDQUFBLEdBQUFGLENBQUEsSUFBQUEsQ0FBQSxDQUFBQSxDQUFBLENBQUFHLE1BQUEsUUFBQUQsQ0FBQSxJQUFBQSxDQUFBLEtBQUF2QyxDQUFBLElBQUFHLENBQUEsQ0FBQXlCLElBQUEsQ0FBQVcsQ0FBQSxFQUFBN0IsQ0FBQSxNQUFBMEIsQ0FBQSxHQUFBRyxDQUFBLE9BQUFFLENBQUEsR0FBQU4sMEJBQUEsQ0FBQWpDLFNBQUEsR0FBQW1CLFNBQUEsQ0FBQW5CLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBYyxDQUFBLFlBQUFNLHNCQUFBM0MsQ0FBQSxnQ0FBQTRDLE9BQUEsV0FBQTdDLENBQUEsSUFBQWtCLE1BQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGdCQUFBNkMsT0FBQSxDQUFBOUMsQ0FBQSxFQUFBQyxDQUFBLHNCQUFBOEMsY0FBQTlDLENBQUEsRUFBQUQsQ0FBQSxhQUFBZ0QsT0FBQTlDLENBQUEsRUFBQUssQ0FBQSxFQUFBRyxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxHQUFBYSxRQUFBLENBQUExQixDQUFBLENBQUFDLENBQUEsR0FBQUQsQ0FBQSxFQUFBTSxDQUFBLG1CQUFBTyxDQUFBLENBQUFjLElBQUEsUUFBQVosQ0FBQSxHQUFBRixDQUFBLENBQUFlLEdBQUEsRUFBQUUsQ0FBQSxHQUFBZixDQUFBLENBQUFQLEtBQUEsU0FBQXNCLENBQUEsZ0JBQUFrQixPQUFBLENBQUFsQixDQUFBLEtBQUExQixDQUFBLENBQUF5QixJQUFBLENBQUFDLENBQUEsZUFBQS9CLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsQ0FBQW9CLE9BQUEsRUFBQUMsSUFBQSxXQUFBbkQsQ0FBQSxJQUFBK0MsTUFBQSxTQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsZ0JBQUFYLENBQUEsSUFBQStDLE1BQUEsVUFBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLFFBQUFaLENBQUEsQ0FBQWtELE9BQUEsQ0FBQW5CLENBQUEsRUFBQXFCLElBQUEsV0FBQW5ELENBQUEsSUFBQWUsQ0FBQSxDQUFBUCxLQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxDQUFBTSxDQUFBLGdCQUFBZixDQUFBLFdBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxTQUFBQSxDQUFBLENBQUFFLENBQUEsQ0FBQWUsR0FBQSxTQUFBM0IsQ0FBQSxFQUFBSyxDQUFBLG9CQUFBRSxLQUFBLFdBQUFBLE1BQUFSLENBQUEsRUFBQUksQ0FBQSxhQUFBZ0QsMkJBQUEsZUFBQXJELENBQUEsV0FBQUEsQ0FBQSxFQUFBRSxDQUFBLElBQUE4QyxNQUFBLENBQUEvQyxDQUFBLEVBQUFJLENBQUEsRUFBQUwsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBQSxDQUFBLEdBQUFBLENBQUEsR0FBQUEsQ0FBQSxDQUFBa0QsSUFBQSxDQUFBQywwQkFBQSxFQUFBQSwwQkFBQSxJQUFBQSwwQkFBQSxxQkFBQTNCLGlCQUFBMUIsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsUUFBQUUsQ0FBQSxHQUFBd0IsQ0FBQSxtQkFBQXJCLENBQUEsRUFBQUUsQ0FBQSxRQUFBTCxDQUFBLEtBQUEwQixDQUFBLFFBQUFxQixLQUFBLHNDQUFBL0MsQ0FBQSxLQUFBMkIsQ0FBQSxvQkFBQXhCLENBQUEsUUFBQUUsQ0FBQSxXQUFBSCxLQUFBLEVBQUFSLENBQUEsRUFBQXNELElBQUEsZUFBQWxELENBQUEsQ0FBQW1ELE1BQUEsR0FBQTlDLENBQUEsRUFBQUwsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBakIsQ0FBQSxVQUFBRSxDQUFBLEdBQUFULENBQUEsQ0FBQW9ELFFBQUEsTUFBQTNDLENBQUEsUUFBQUUsQ0FBQSxHQUFBMEMsbUJBQUEsQ0FBQTVDLENBQUEsRUFBQVQsQ0FBQSxPQUFBVyxDQUFBLFFBQUFBLENBQUEsS0FBQW1CLENBQUEsbUJBQUFuQixDQUFBLHFCQUFBWCxDQUFBLENBQUFtRCxNQUFBLEVBQUFuRCxDQUFBLENBQUFzRCxJQUFBLEdBQUF0RCxDQUFBLENBQUF1RCxLQUFBLEdBQUF2RCxDQUFBLENBQUF3QixHQUFBLHNCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxRQUFBakQsQ0FBQSxLQUFBd0IsQ0FBQSxRQUFBeEIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBd0IsR0FBQSxFQUFBeEIsQ0FBQSxDQUFBd0QsaUJBQUEsQ0FBQXhELENBQUEsQ0FBQXdCLEdBQUEsdUJBQUF4QixDQUFBLENBQUFtRCxNQUFBLElBQUFuRCxDQUFBLENBQUF5RCxNQUFBLFdBQUF6RCxDQUFBLENBQUF3QixHQUFBLEdBQUF0QixDQUFBLEdBQUEwQixDQUFBLE1BQUFLLENBQUEsR0FBQVgsUUFBQSxDQUFBM0IsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsb0JBQUFpQyxDQUFBLENBQUFWLElBQUEsUUFBQXJCLENBQUEsR0FBQUYsQ0FBQSxDQUFBa0QsSUFBQSxHQUFBckIsQ0FBQSxHQUFBRixDQUFBLEVBQUFNLENBQUEsQ0FBQVQsR0FBQSxLQUFBTSxDQUFBLHFCQUFBMUIsS0FBQSxFQUFBNkIsQ0FBQSxDQUFBVCxHQUFBLEVBQUEwQixJQUFBLEVBQUFsRCxDQUFBLENBQUFrRCxJQUFBLGtCQUFBakIsQ0FBQSxDQUFBVixJQUFBLEtBQUFyQixDQUFBLEdBQUEyQixDQUFBLEVBQUE3QixDQUFBLENBQUFtRCxNQUFBLFlBQUFuRCxDQUFBLENBQUF3QixHQUFBLEdBQUFTLENBQUEsQ0FBQVQsR0FBQSxtQkFBQTZCLG9CQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLFFBQUFHLENBQUEsR0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxFQUFBakQsQ0FBQSxHQUFBUCxDQUFBLENBQUFhLFFBQUEsQ0FBQVIsQ0FBQSxPQUFBRSxDQUFBLEtBQUFOLENBQUEsU0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxxQkFBQXBELENBQUEsSUFBQUwsQ0FBQSxDQUFBYSxRQUFBLGVBQUFYLENBQUEsQ0FBQXNELE1BQUEsYUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsRUFBQXlELG1CQUFBLENBQUExRCxDQUFBLEVBQUFFLENBQUEsZUFBQUEsQ0FBQSxDQUFBc0QsTUFBQSxrQkFBQW5ELENBQUEsS0FBQUgsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSx1Q0FBQTFELENBQUEsaUJBQUE4QixDQUFBLE1BQUF6QixDQUFBLEdBQUFpQixRQUFBLENBQUFwQixDQUFBLEVBQUFQLENBQUEsQ0FBQWEsUUFBQSxFQUFBWCxDQUFBLENBQUEyQixHQUFBLG1CQUFBbkIsQ0FBQSxDQUFBa0IsSUFBQSxTQUFBMUIsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBbkIsQ0FBQSxDQUFBbUIsR0FBQSxFQUFBM0IsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxNQUFBdkIsQ0FBQSxHQUFBRixDQUFBLENBQUFtQixHQUFBLFNBQUFqQixDQUFBLEdBQUFBLENBQUEsQ0FBQTJDLElBQUEsSUFBQXJELENBQUEsQ0FBQUYsQ0FBQSxDQUFBZ0UsVUFBQSxJQUFBcEQsQ0FBQSxDQUFBSCxLQUFBLEVBQUFQLENBQUEsQ0FBQStELElBQUEsR0FBQWpFLENBQUEsQ0FBQWtFLE9BQUEsZUFBQWhFLENBQUEsQ0FBQXNELE1BQUEsS0FBQXRELENBQUEsQ0FBQXNELE1BQUEsV0FBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQTVCLENBQUEsR0FBQUMsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxJQUFBdkIsQ0FBQSxJQUFBVixDQUFBLENBQUFzRCxNQUFBLFlBQUF0RCxDQUFBLENBQUEyQixHQUFBLE9BQUFrQyxTQUFBLHNDQUFBN0QsQ0FBQSxDQUFBdUQsUUFBQSxTQUFBdEIsQ0FBQSxjQUFBZ0MsYUFBQWxFLENBQUEsUUFBQUQsQ0FBQSxLQUFBb0UsTUFBQSxFQUFBbkUsQ0FBQSxZQUFBQSxDQUFBLEtBQUFELENBQUEsQ0FBQXFFLFFBQUEsR0FBQXBFLENBQUEsV0FBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRSxVQUFBLEdBQUFyRSxDQUFBLEtBQUFELENBQUEsQ0FBQXVFLFFBQUEsR0FBQXRFLENBQUEsV0FBQXVFLFVBQUEsQ0FBQUMsSUFBQSxDQUFBekUsQ0FBQSxjQUFBMEUsY0FBQXpFLENBQUEsUUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUEwRSxVQUFBLFFBQUEzRSxDQUFBLENBQUE0QixJQUFBLG9CQUFBNUIsQ0FBQSxDQUFBNkIsR0FBQSxFQUFBNUIsQ0FBQSxDQUFBMEUsVUFBQSxHQUFBM0UsQ0FBQSxhQUFBeUIsUUFBQXhCLENBQUEsU0FBQXVFLFVBQUEsTUFBQUosTUFBQSxhQUFBbkUsQ0FBQSxDQUFBNEMsT0FBQSxDQUFBc0IsWUFBQSxjQUFBUyxLQUFBLGlCQUFBbEMsT0FBQTFDLENBQUEsUUFBQUEsQ0FBQSxXQUFBQSxDQUFBLFFBQUFFLENBQUEsR0FBQUYsQ0FBQSxDQUFBWSxDQUFBLE9BQUFWLENBQUEsU0FBQUEsQ0FBQSxDQUFBNEIsSUFBQSxDQUFBOUIsQ0FBQSw0QkFBQUEsQ0FBQSxDQUFBaUUsSUFBQSxTQUFBakUsQ0FBQSxPQUFBNkUsS0FBQSxDQUFBN0UsQ0FBQSxDQUFBOEUsTUFBQSxTQUFBdkUsQ0FBQSxPQUFBRyxDQUFBLFlBQUF1RCxLQUFBLGFBQUExRCxDQUFBLEdBQUFQLENBQUEsQ0FBQThFLE1BQUEsT0FBQXpFLENBQUEsQ0FBQXlCLElBQUEsQ0FBQTlCLENBQUEsRUFBQU8sQ0FBQSxVQUFBMEQsSUFBQSxDQUFBeEQsS0FBQSxHQUFBVCxDQUFBLENBQUFPLENBQUEsR0FBQTBELElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFNBQUFBLElBQUEsQ0FBQXhELEtBQUEsR0FBQVIsQ0FBQSxFQUFBZ0UsSUFBQSxDQUFBVixJQUFBLE9BQUFVLElBQUEsWUFBQXZELENBQUEsQ0FBQXVELElBQUEsR0FBQXZELENBQUEsZ0JBQUFxRCxTQUFBLENBQUFkLE9BQUEsQ0FBQWpELENBQUEsa0NBQUFvQyxpQkFBQSxDQUFBaEMsU0FBQSxHQUFBaUMsMEJBQUEsRUFBQTlCLENBQUEsQ0FBQW9DLENBQUEsbUJBQUFsQyxLQUFBLEVBQUE0QiwwQkFBQSxFQUFBakIsWUFBQSxTQUFBYixDQUFBLENBQUE4QiwwQkFBQSxtQkFBQTVCLEtBQUEsRUFBQTJCLGlCQUFBLEVBQUFoQixZQUFBLFNBQUFnQixpQkFBQSxDQUFBMkMsV0FBQSxHQUFBN0QsTUFBQSxDQUFBbUIsMEJBQUEsRUFBQXJCLENBQUEsd0JBQUFoQixDQUFBLENBQUFnRixtQkFBQSxhQUFBL0UsQ0FBQSxRQUFBRCxDQUFBLHdCQUFBQyxDQUFBLElBQUFBLENBQUEsQ0FBQWdGLFdBQUEsV0FBQWpGLENBQUEsS0FBQUEsQ0FBQSxLQUFBb0MsaUJBQUEsNkJBQUFwQyxDQUFBLENBQUErRSxXQUFBLElBQUEvRSxDQUFBLENBQUFrRixJQUFBLE9BQUFsRixDQUFBLENBQUFtRixJQUFBLGFBQUFsRixDQUFBLFdBQUFFLE1BQUEsQ0FBQWlGLGNBQUEsR0FBQWpGLE1BQUEsQ0FBQWlGLGNBQUEsQ0FBQW5GLENBQUEsRUFBQW9DLDBCQUFBLEtBQUFwQyxDQUFBLENBQUFvRixTQUFBLEdBQUFoRCwwQkFBQSxFQUFBbkIsTUFBQSxDQUFBakIsQ0FBQSxFQUFBZSxDQUFBLHlCQUFBZixDQUFBLENBQUFHLFNBQUEsR0FBQUQsTUFBQSxDQUFBcUIsTUFBQSxDQUFBbUIsQ0FBQSxHQUFBMUMsQ0FBQSxLQUFBRCxDQUFBLENBQUFzRixLQUFBLGFBQUFyRixDQUFBLGFBQUFrRCxPQUFBLEVBQUFsRCxDQUFBLE9BQUEyQyxxQkFBQSxDQUFBRyxhQUFBLENBQUEzQyxTQUFBLEdBQUFjLE1BQUEsQ0FBQTZCLGFBQUEsQ0FBQTNDLFNBQUEsRUFBQVUsQ0FBQSxpQ0FBQWQsQ0FBQSxDQUFBK0MsYUFBQSxHQUFBQSxhQUFBLEVBQUEvQyxDQUFBLENBQUF1RixLQUFBLGFBQUF0RixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEVBQUFHLENBQUEsZUFBQUEsQ0FBQSxLQUFBQSxDQUFBLEdBQUE4RSxPQUFBLE9BQUE1RSxDQUFBLE9BQUFtQyxhQUFBLENBQUF6QixJQUFBLENBQUFyQixDQUFBLEVBQUFDLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLEdBQUFHLENBQUEsVUFBQVYsQ0FBQSxDQUFBZ0YsbUJBQUEsQ0FBQTlFLENBQUEsSUFBQVUsQ0FBQSxHQUFBQSxDQUFBLENBQUFxRCxJQUFBLEdBQUFiLElBQUEsV0FBQW5ELENBQUEsV0FBQUEsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBUSxLQUFBLEdBQUFHLENBQUEsQ0FBQXFELElBQUEsV0FBQXJCLHFCQUFBLENBQUFELENBQUEsR0FBQXpCLE1BQUEsQ0FBQXlCLENBQUEsRUFBQTNCLENBQUEsZ0JBQUFFLE1BQUEsQ0FBQXlCLENBQUEsRUFBQS9CLENBQUEsaUNBQUFNLE1BQUEsQ0FBQXlCLENBQUEsNkRBQUEzQyxDQUFBLENBQUF5RixJQUFBLGFBQUF4RixDQUFBLFFBQUFELENBQUEsR0FBQUcsTUFBQSxDQUFBRixDQUFBLEdBQUFDLENBQUEsZ0JBQUFHLENBQUEsSUFBQUwsQ0FBQSxFQUFBRSxDQUFBLENBQUF1RSxJQUFBLENBQUFwRSxDQUFBLFVBQUFILENBQUEsQ0FBQXdGLE9BQUEsYUFBQXpCLEtBQUEsV0FBQS9ELENBQUEsQ0FBQTRFLE1BQUEsU0FBQTdFLENBQUEsR0FBQUMsQ0FBQSxDQUFBeUYsR0FBQSxRQUFBMUYsQ0FBQSxJQUFBRCxDQUFBLFNBQUFpRSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFdBQUFBLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFFBQUFqRSxDQUFBLENBQUEwQyxNQUFBLEdBQUFBLE1BQUEsRUFBQWpCLE9BQUEsQ0FBQXJCLFNBQUEsS0FBQTZFLFdBQUEsRUFBQXhELE9BQUEsRUFBQW1ELEtBQUEsV0FBQUEsTUFBQTVFLENBQUEsYUFBQTRGLElBQUEsV0FBQTNCLElBQUEsV0FBQU4sSUFBQSxRQUFBQyxLQUFBLEdBQUEzRCxDQUFBLE9BQUFzRCxJQUFBLFlBQUFFLFFBQUEsY0FBQUQsTUFBQSxnQkFBQTNCLEdBQUEsR0FBQTVCLENBQUEsT0FBQXVFLFVBQUEsQ0FBQTNCLE9BQUEsQ0FBQTZCLGFBQUEsSUFBQTFFLENBQUEsV0FBQUUsQ0FBQSxrQkFBQUEsQ0FBQSxDQUFBMkYsTUFBQSxPQUFBeEYsQ0FBQSxDQUFBeUIsSUFBQSxPQUFBNUIsQ0FBQSxNQUFBMkUsS0FBQSxFQUFBM0UsQ0FBQSxDQUFBNEYsS0FBQSxjQUFBNUYsQ0FBQSxJQUFBRCxDQUFBLE1BQUE4RixJQUFBLFdBQUFBLEtBQUEsU0FBQXhDLElBQUEsV0FBQXRELENBQUEsUUFBQXVFLFVBQUEsSUFBQUcsVUFBQSxrQkFBQTFFLENBQUEsQ0FBQTJCLElBQUEsUUFBQTNCLENBQUEsQ0FBQTRCLEdBQUEsY0FBQW1FLElBQUEsS0FBQW5DLGlCQUFBLFdBQUFBLGtCQUFBN0QsQ0FBQSxhQUFBdUQsSUFBQSxRQUFBdkQsQ0FBQSxNQUFBRSxDQUFBLGtCQUFBK0YsT0FBQTVGLENBQUEsRUFBQUUsQ0FBQSxXQUFBSyxDQUFBLENBQUFnQixJQUFBLFlBQUFoQixDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFFLENBQUEsQ0FBQStELElBQUEsR0FBQTVELENBQUEsRUFBQUUsQ0FBQSxLQUFBTCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEtBQUFNLENBQUEsYUFBQUEsQ0FBQSxRQUFBaUUsVUFBQSxDQUFBTSxNQUFBLE1BQUF2RSxDQUFBLFNBQUFBLENBQUEsUUFBQUcsQ0FBQSxRQUFBOEQsVUFBQSxDQUFBakUsQ0FBQSxHQUFBSyxDQUFBLEdBQUFGLENBQUEsQ0FBQWlFLFVBQUEsaUJBQUFqRSxDQUFBLENBQUEwRCxNQUFBLFNBQUE2QixNQUFBLGFBQUF2RixDQUFBLENBQUEwRCxNQUFBLFNBQUF3QixJQUFBLFFBQUE5RSxDQUFBLEdBQUFULENBQUEsQ0FBQXlCLElBQUEsQ0FBQXBCLENBQUEsZUFBQU0sQ0FBQSxHQUFBWCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLHFCQUFBSSxDQUFBLElBQUFFLENBQUEsYUFBQTRFLElBQUEsR0FBQWxGLENBQUEsQ0FBQTJELFFBQUEsU0FBQTRCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTJELFFBQUEsZ0JBQUF1QixJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLGNBQUF4RCxDQUFBLGFBQUE4RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLHFCQUFBckQsQ0FBQSxRQUFBc0MsS0FBQSxxREFBQXNDLElBQUEsR0FBQWxGLENBQUEsQ0FBQTRELFVBQUEsU0FBQTJCLE1BQUEsQ0FBQXZGLENBQUEsQ0FBQTRELFVBQUEsWUFBQVIsTUFBQSxXQUFBQSxPQUFBN0QsQ0FBQSxFQUFBRCxDQUFBLGFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBNUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFLLENBQUEsUUFBQWlFLFVBQUEsQ0FBQXRFLENBQUEsT0FBQUssQ0FBQSxDQUFBNkQsTUFBQSxTQUFBd0IsSUFBQSxJQUFBdkYsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBdkIsQ0FBQSx3QkFBQXFGLElBQUEsR0FBQXJGLENBQUEsQ0FBQStELFVBQUEsUUFBQTVELENBQUEsR0FBQUgsQ0FBQSxhQUFBRyxDQUFBLGlCQUFBVCxDQUFBLG1CQUFBQSxDQUFBLEtBQUFTLENBQUEsQ0FBQTBELE1BQUEsSUFBQXBFLENBQUEsSUFBQUEsQ0FBQSxJQUFBVSxDQUFBLENBQUE0RCxVQUFBLEtBQUE1RCxDQUFBLGNBQUFFLENBQUEsR0FBQUYsQ0FBQSxHQUFBQSxDQUFBLENBQUFpRSxVQUFBLGNBQUEvRCxDQUFBLENBQUFnQixJQUFBLEdBQUEzQixDQUFBLEVBQUFXLENBQUEsQ0FBQWlCLEdBQUEsR0FBQTdCLENBQUEsRUFBQVUsQ0FBQSxTQUFBOEMsTUFBQSxnQkFBQVMsSUFBQSxHQUFBdkQsQ0FBQSxDQUFBNEQsVUFBQSxFQUFBbkMsQ0FBQSxTQUFBK0QsUUFBQSxDQUFBdEYsQ0FBQSxNQUFBc0YsUUFBQSxXQUFBQSxTQUFBakcsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBQyxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLHFCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxtQkFBQTNCLENBQUEsQ0FBQTJCLElBQUEsUUFBQXFDLElBQUEsR0FBQWhFLENBQUEsQ0FBQTRCLEdBQUEsZ0JBQUE1QixDQUFBLENBQUEyQixJQUFBLFNBQUFvRSxJQUFBLFFBQUFuRSxHQUFBLEdBQUE1QixDQUFBLENBQUE0QixHQUFBLE9BQUEyQixNQUFBLGtCQUFBUyxJQUFBLHlCQUFBaEUsQ0FBQSxDQUFBMkIsSUFBQSxJQUFBNUIsQ0FBQSxVQUFBaUUsSUFBQSxHQUFBakUsQ0FBQSxHQUFBbUMsQ0FBQSxLQUFBZ0UsTUFBQSxXQUFBQSxPQUFBbEcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQW9FLFVBQUEsS0FBQXJFLENBQUEsY0FBQWlHLFFBQUEsQ0FBQWhHLENBQUEsQ0FBQXlFLFVBQUEsRUFBQXpFLENBQUEsQ0FBQXFFLFFBQUEsR0FBQUcsYUFBQSxDQUFBeEUsQ0FBQSxHQUFBaUMsQ0FBQSx5QkFBQWlFLE9BQUFuRyxDQUFBLGFBQUFELENBQUEsUUFBQXdFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBOUUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFFLENBQUEsUUFBQXNFLFVBQUEsQ0FBQXhFLENBQUEsT0FBQUUsQ0FBQSxDQUFBa0UsTUFBQSxLQUFBbkUsQ0FBQSxRQUFBSSxDQUFBLEdBQUFILENBQUEsQ0FBQXlFLFVBQUEsa0JBQUF0RSxDQUFBLENBQUF1QixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQXdCLEdBQUEsRUFBQTZDLGFBQUEsQ0FBQXhFLENBQUEsWUFBQUssQ0FBQSxZQUFBK0MsS0FBQSw4QkFBQStDLGFBQUEsV0FBQUEsY0FBQXJHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGdCQUFBb0QsUUFBQSxLQUFBNUMsUUFBQSxFQUFBNkIsTUFBQSxDQUFBMUMsQ0FBQSxHQUFBZ0UsVUFBQSxFQUFBOUQsQ0FBQSxFQUFBZ0UsT0FBQSxFQUFBN0QsQ0FBQSxvQkFBQW1ELE1BQUEsVUFBQTNCLEdBQUEsR0FBQTVCLENBQUEsR0FBQWtDLENBQUEsT0FBQW5DLENBQUE7QUFBQSxTQUFBc0csZUFBQXBHLENBQUEsRUFBQUYsQ0FBQSxXQUFBdUcsZUFBQSxDQUFBckcsQ0FBQSxLQUFBc0cscUJBQUEsQ0FBQXRHLENBQUEsRUFBQUYsQ0FBQSxLQUFBeUcsMkJBQUEsQ0FBQXZHLENBQUEsRUFBQUYsQ0FBQSxLQUFBMEcsZ0JBQUE7QUFBQSxTQUFBQSxpQkFBQSxjQUFBM0MsU0FBQTtBQUFBLFNBQUEwQyw0QkFBQXZHLENBQUEsRUFBQVUsQ0FBQSxRQUFBVixDQUFBLDJCQUFBQSxDQUFBLFNBQUF5RyxpQkFBQSxDQUFBekcsQ0FBQSxFQUFBVSxDQUFBLE9BQUFYLENBQUEsTUFBQTJHLFFBQUEsQ0FBQTlFLElBQUEsQ0FBQTVCLENBQUEsRUFBQTRGLEtBQUEsNkJBQUE3RixDQUFBLElBQUFDLENBQUEsQ0FBQStFLFdBQUEsS0FBQWhGLENBQUEsR0FBQUMsQ0FBQSxDQUFBK0UsV0FBQSxDQUFBQyxJQUFBLGFBQUFqRixDQUFBLGNBQUFBLENBQUEsR0FBQTRHLEtBQUEsQ0FBQUMsSUFBQSxDQUFBNUcsQ0FBQSxvQkFBQUQsQ0FBQSwrQ0FBQThHLElBQUEsQ0FBQTlHLENBQUEsSUFBQTBHLGlCQUFBLENBQUF6RyxDQUFBLEVBQUFVLENBQUE7QUFBQSxTQUFBK0Ysa0JBQUF6RyxDQUFBLEVBQUFVLENBQUEsYUFBQUEsQ0FBQSxJQUFBQSxDQUFBLEdBQUFWLENBQUEsQ0FBQTRFLE1BQUEsTUFBQWxFLENBQUEsR0FBQVYsQ0FBQSxDQUFBNEUsTUFBQSxZQUFBOUUsQ0FBQSxNQUFBSyxDQUFBLEdBQUF3RyxLQUFBLENBQUFqRyxDQUFBLEdBQUFaLENBQUEsR0FBQVksQ0FBQSxFQUFBWixDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxJQUFBRSxDQUFBLENBQUFGLENBQUEsVUFBQUssQ0FBQTtBQUFBLFNBQUFtRyxzQkFBQXRHLENBQUEsRUFBQThCLENBQUEsUUFBQS9CLENBQUEsV0FBQUMsQ0FBQSxnQ0FBQVMsTUFBQSxJQUFBVCxDQUFBLENBQUFTLE1BQUEsQ0FBQUUsUUFBQSxLQUFBWCxDQUFBLDRCQUFBRCxDQUFBLFFBQUFELENBQUEsRUFBQUssQ0FBQSxFQUFBSyxDQUFBLEVBQUFNLENBQUEsRUFBQUosQ0FBQSxPQUFBcUIsQ0FBQSxPQUFBMUIsQ0FBQSxpQkFBQUcsQ0FBQSxJQUFBVCxDQUFBLEdBQUFBLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTVCLENBQUEsR0FBQStELElBQUEsUUFBQWpDLENBQUEsUUFBQTdCLE1BQUEsQ0FBQUYsQ0FBQSxNQUFBQSxDQUFBLFVBQUFnQyxDQUFBLHVCQUFBQSxDQUFBLElBQUFqQyxDQUFBLEdBQUFVLENBQUEsQ0FBQW9CLElBQUEsQ0FBQTdCLENBQUEsR0FBQXNELElBQUEsTUFBQTNDLENBQUEsQ0FBQTZELElBQUEsQ0FBQXpFLENBQUEsQ0FBQVMsS0FBQSxHQUFBRyxDQUFBLENBQUFrRSxNQUFBLEtBQUE5QyxDQUFBLEdBQUFDLENBQUEsaUJBQUEvQixDQUFBLElBQUFLLENBQUEsT0FBQUYsQ0FBQSxHQUFBSCxDQUFBLHlCQUFBK0IsQ0FBQSxZQUFBaEMsQ0FBQSxlQUFBZSxDQUFBLEdBQUFmLENBQUEsY0FBQUUsTUFBQSxDQUFBYSxDQUFBLE1BQUFBLENBQUEsMkJBQUFULENBQUEsUUFBQUYsQ0FBQSxhQUFBTyxDQUFBO0FBQUEsU0FBQTJGLGdCQUFBckcsQ0FBQSxRQUFBMkcsS0FBQSxDQUFBRyxPQUFBLENBQUE5RyxDQUFBLFVBQUFBLENBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLElBQUkrRyxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBUyxJQUFLLFVBQVVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyRixTQUFTQyxLQUFLQSxDQUFDN0csS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZMkcsQ0FBQyxHQUFHM0csS0FBSyxHQUFHLElBQUkyRyxDQUFDLENBQUMsVUFBVWxFLE9BQU8sRUFBRTtNQUFFQSxPQUFPLENBQUN6QyxLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRTtFQUMzRyxPQUFPLEtBQUsyRyxDQUFDLEtBQUtBLENBQUMsR0FBRzVCLE9BQU8sQ0FBQyxFQUFFLFVBQVV0QyxPQUFPLEVBQUVxRSxNQUFNLEVBQUU7SUFDdkQsU0FBU0MsU0FBU0EsQ0FBQy9HLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRWdILElBQUksQ0FBQ0osU0FBUyxDQUFDcEQsSUFBSSxDQUFDeEQsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT1QsQ0FBQyxFQUFFO1FBQUV1SCxNQUFNLENBQUN2SCxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVMwSCxRQUFRQSxDQUFDakgsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFZ0gsSUFBSSxDQUFDSixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM1RyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPVCxDQUFDLEVBQUU7UUFBRXVILE1BQU0sQ0FBQ3ZILENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBU3lILElBQUlBLENBQUNFLE1BQU0sRUFBRTtNQUFFQSxNQUFNLENBQUNwRSxJQUFJLEdBQUdMLE9BQU8sQ0FBQ3lFLE1BQU0sQ0FBQ2xILEtBQUssQ0FBQyxHQUFHNkcsS0FBSyxDQUFDSyxNQUFNLENBQUNsSCxLQUFLLENBQUMsQ0FBQzJDLElBQUksQ0FBQ29FLFNBQVMsRUFBRUUsUUFBUSxDQUFDO0lBQUU7SUFDN0dELElBQUksQ0FBQyxDQUFDSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ08sS0FBSyxDQUFDVixPQUFPLEVBQUVDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRWxELElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNpRTtBQUMzRCxJQUFNMlQsV0FBVyxnQkFBR0QscURBQWEsQ0FBQztFQUNyQ0UsV0FBVyxFQUFFLElBQUk7RUFDakJqUCxPQUFPLEVBQUUsSUFBSTtFQUNiUyxLQUFLLEVBQUUsSUFBSTtFQUNYZ0UsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUE7SUFBQSxPQUFRLEtBQUs7RUFBQTtFQUNyQjBDLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQTtJQUFBLE9BQVEsS0FBSztFQUFBO0VBQzVCekMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUE7SUFBQSxPQUFRLEtBQUs7RUFBQTtBQUN4QixDQUFDLENBQUM7QUFDSyxTQUFTek8sWUFBWUEsQ0FBQXdKLElBQUEsRUFBZTtFQUFBLElBQVpzTCxRQUFRLEdBQUF0TCxJQUFBLENBQVJzTCxRQUFRO0VBQ25DLElBQUFyTCxTQUFBLEdBQXNDUixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBUyxVQUFBLEdBQUFqQyxjQUFBLENBQUFnQyxTQUFBO0lBQTdDdVAsV0FBVyxHQUFBdFAsVUFBQTtJQUFFdVAsY0FBYyxHQUFBdlAsVUFBQTtFQUNsQyxJQUFBRyxVQUFBLEdBQThCWixnREFBUSxDQUFDLElBQUksQ0FBQztJQUFBYSxVQUFBLEdBQUFyQyxjQUFBLENBQUFvQyxVQUFBO0lBQXJDRSxPQUFPLEdBQUFELFVBQUE7SUFBRUUsVUFBVSxHQUFBRixVQUFBO0VBQzFCLElBQUEwRyxVQUFBLEdBQTBCdkgsZ0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQXdILFVBQUEsR0FBQWhKLGNBQUEsQ0FBQStJLFVBQUE7SUFBakNoRyxLQUFLLEdBQUFpRyxVQUFBO0lBQUVyRCxRQUFRLEdBQUFxRCxVQUFBO0VBQ3RCekgsaURBQVMsQ0FBQyxZQUFNO0lBQ1osU0FBU2tRLGdCQUFnQkEsQ0FBQSxFQUFHO01BQ3hCLE9BQU85USxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxlQUFBbEgsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBNEQsUUFBQTtRQUFBLElBQUFpUCxRQUFBLEVBQUFoUCxJQUFBO1FBQUEsT0FBQWpKLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEySCxTQUFBQyxRQUFBO1VBQUEsa0JBQUFBLFFBQUEsQ0FBQXRELElBQUEsR0FBQXNELFFBQUEsQ0FBQWpGLElBQUE7WUFBQTtjQUFBaUYsUUFBQSxDQUFBdEQsSUFBQTtjQUFBc0QsUUFBQSxDQUFBakYsSUFBQTtjQUVkLE9BQU1nVSxLQUFLLENBQUMsbUJBQW1CLENBQUM7WUFBQTtjQUEzQ0QsUUFBUSxHQUFBOU8sUUFBQSxDQUFBdkYsSUFBQTtjQUFBdUYsUUFBQSxDQUFBakYsSUFBQTtjQUNELE9BQU0rVCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO1lBQUE7Y0FBNUJsUCxJQUFJLEdBQUFFLFFBQUEsQ0FBQXZGLElBQUE7Y0FDVixJQUFJcUYsSUFBSSxDQUFDSyxLQUFLLEVBQUU7Z0JBQ1p5TyxjQUFjLENBQUMsSUFBSSxDQUFDO2dCQUNwQjdMLFFBQVEsQ0FBQ2pELElBQUksQ0FBQ0ssS0FBSyxDQUFDO2NBQ3hCLENBQUMsTUFDSTtnQkFDRHlPLGNBQWMsQ0FBQzlPLElBQUksQ0FBQztnQkFDcEJpRCxRQUFRLENBQUMsSUFBSSxDQUFDO2NBQ2xCO2NBQUMvQyxRQUFBLENBQUFqRixJQUFBO2NBQUE7WUFBQTtjQUFBaUYsUUFBQSxDQUFBdEQsSUFBQTtjQUFBc0QsUUFBQSxDQUFBQyxFQUFBLEdBQUFELFFBQUE7Y0FHRDRPLGNBQWMsQ0FBQyxJQUFJLENBQUM7Y0FDcEI3TCxRQUFRLENBQUMvQyxRQUFBLENBQUFDLEVBQUEsWUFBZTdGLEtBQUssR0FBRzRGLFFBQUEsQ0FBQUMsRUFBQSxDQUFJb0QsT0FBTyxHQUFHLDJCQUEyQixDQUFDO1lBQUM7Y0FBQXJELFFBQUEsQ0FBQXRELElBQUE7Y0FHM0VpRCxVQUFVLENBQUMsS0FBSyxDQUFDO2NBQUMsT0FBQUssUUFBQSxDQUFBL0MsTUFBQTtZQUFBO1lBQUE7Y0FBQSxPQUFBK0MsUUFBQSxDQUFBbkQsSUFBQTtVQUFBO1FBQUEsR0FBQWdELE9BQUE7TUFBQSxDQUV6QixFQUFDO0lBQ047SUFDQWdQLGdCQUFnQixDQUFDLENBQUM7RUFDdEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNOLFNBQVMxSyxRQUFRQSxDQUFDOEssZUFBZSxFQUFFO0lBQy9CLElBQUksQ0FBQ04sV0FBVyxFQUNaLE9BQU8sS0FBSztJQUNoQixPQUFPQSxXQUFXLENBQUM1TSxFQUFFLEtBQUtrTixlQUFlO0VBQzdDO0VBQ0EsU0FBU3BJLGVBQWVBLENBQUEsRUFBRztJQUN2QixPQUFPOEgsV0FBVyxLQUFLLElBQUk7RUFDL0I7RUFDQSxTQUFTdkssT0FBT0EsQ0FBQSxFQUFHO0lBQ2YsSUFBSSxDQUFDdUssV0FBVyxFQUNaLE9BQU8sS0FBSztJQUNoQixPQUFPQSxXQUFXLENBQUNPLEtBQUssQ0FBQ3JOLFFBQVEsQ0FBQyxZQUFZLENBQUM7RUFDbkQ7RUFDQSxJQUFNdEssS0FBSyxHQUFHO0lBQ1ZvWCxXQUFXLEVBQVhBLFdBQVc7SUFDWGpQLE9BQU8sRUFBUEEsT0FBTztJQUNQUyxLQUFLLEVBQUxBLEtBQUs7SUFDTGdFLFFBQVEsRUFBUkEsUUFBUTtJQUNSMEMsZUFBZSxFQUFmQSxlQUFlO0lBQ2Z6QyxPQUFPLEVBQVBBO0VBQ0osQ0FBQztFQUNELG9CQUFPM08sMkRBQW1CLENBQUNpWixXQUFXLENBQUNTLFFBQVEsRUFBRTtJQUFFNVgsS0FBSyxFQUFFQTtFQUFNLENBQUMsRUFBRWtULFFBQVEsQ0FBQztBQUNoRjtBQUNPLFNBQVNoSCxPQUFPQSxDQUFBLEVBQUc7RUFDdEIsT0FBT2hPLHdEQUFnQixDQUFDaVosV0FBVyxDQUFDO0FBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pFa0M7QUFDbEMsU0FBU3hOLGdCQUFnQkEsQ0FBQ0csUUFBUSxFQUFFbEwsSUFBSSxFQUFFO0VBQ3RDd0ksZ0RBQVMsQ0FBQyxZQUFZO0lBQ2xCLElBQUk2TCxFQUFFLEVBQUU2RSxFQUFFO0lBQ1YsSUFBTUMsZUFBZSxHQUFHdlosUUFBUSxDQUFDRyxhQUFhLENBQUMsT0FBTyxDQUFDO0lBQ3ZELElBQUlDLElBQUksS0FBSyxTQUFTLEVBQ2xCO0lBQ0osSUFBSW1aLGVBQWUsRUFBRTtNQUNqQixJQUFJak8sUUFBUSxDQUFDSyxjQUFjLEVBQUU7UUFDekIsSUFBTTZOLGFBQWEsR0FBR0QsZUFBZSxDQUFDRSxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQ3JELElBQU1DLFVBQVUsR0FBR3BPLFFBQVEsQ0FBQ3NNLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUs7UUFDOUQ0QixhQUFhLENBQUNoRCxTQUFTLENBQUNDLEdBQUcsQ0FBQ2lELFVBQVUsQ0FBQztRQUN2Q0YsYUFBYSxDQUFDaEQsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25DLENBQUNoQyxFQUFFLEdBQUc4RSxlQUFlLENBQUNJLFVBQVUsTUFBTSxJQUFJLElBQUlsRixFQUFFLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLEVBQUUsQ0FBQ21GLFlBQVksQ0FBQ0osYUFBYSxFQUFFRCxlQUFlLENBQUNNLFdBQVcsQ0FBQztRQUNsSU4sZUFBZSxDQUFDL0MsU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ3JDcUQscUJBQXFCLENBQUMsWUFBTTtVQUN4Qk4sYUFBYSxDQUFDaEQsU0FBUyxDQUFDRSxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFDLENBQUMsQ0FBQztRQUNGcUQsVUFBVSxDQUFDLFlBQVk7VUFDbkJSLGVBQWUsQ0FBQzdDLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLENBQUMsRUFBRSxJQUFJLENBQUM7TUFDWixDQUFDLE1BQ0k7UUFDRCxJQUFNOEMsY0FBYSxHQUFHRCxlQUFlLENBQUNFLFNBQVMsQ0FBQyxJQUFJLENBQUM7UUFDckRELGNBQWEsQ0FBQ2hELFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNuQyxDQUFDNkMsRUFBRSxHQUFHQyxlQUFlLENBQUNJLFVBQVUsTUFBTSxJQUFJLElBQUlMLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsRUFBRSxDQUFDTSxZQUFZLENBQUNKLGNBQWEsRUFBRUQsZUFBZSxDQUFDTSxXQUFXLENBQUM7UUFDbElOLGVBQWUsQ0FBQy9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNyQ3FELHFCQUFxQixDQUFDLFlBQU07VUFDeEJOLGNBQWEsQ0FBQ2hELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE1BQU0sQ0FBQztVQUN0QzhDLGNBQWEsQ0FBQ2hELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLE9BQU8sQ0FBQztVQUN2QzhDLGNBQWEsQ0FBQ2hELFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN6QyxDQUFDLENBQUM7UUFDRnFELFVBQVUsQ0FBQyxZQUFZO1VBQ25CUixlQUFlLENBQUM3QyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1o7SUFDSjtFQUNKLENBQUMsRUFBRSxDQUFDcEwsUUFBUSxFQUFFbEwsSUFBSSxDQUFDLENBQUM7QUFDeEI7QUFDQSxpRUFBZStLLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDeEIsSUFBTXJDLFNBQVMsR0FBRztFQUNyQmtSLE1BQU0sRUFBRTtJQUNKQyxPQUFPLEVBQUUsQ0FBQztJQUNWL1csQ0FBQyxFQUFFO0VBQ1AsQ0FBQztFQUNEK1MsT0FBTyxFQUFFO0lBQ0xnRSxPQUFPLEVBQUUsQ0FBQztJQUNWL1csQ0FBQyxFQUFFLENBQUM7SUFDSmdYLFVBQVUsRUFBRTtNQUNSQyxlQUFlLEVBQUU7SUFDckI7RUFDSjtBQUNKLENBQUM7QUFDTSxJQUFNL08sSUFBSSxHQUFHO0VBQ2hCNkssT0FBTyxFQUFFO0lBQ0xnRSxPQUFPLEVBQUUsQ0FBQztJQUNWL1csQ0FBQyxFQUFFO0VBQ1AsQ0FBQztFQUNEOFcsTUFBTSxFQUFFO0lBQ0pDLE9BQU8sRUFBRSxDQUFDO0lBQ1YvVyxDQUFDLEVBQUU7RUFDUDtBQUNKLENBQUM7Ozs7Ozs7Ozs7O0FDdEJZOztBQUFBa1gsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFDYnBhLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxJQUFNb2EsZ0JBQWdCLEdBQUdyYSxRQUFRLENBQUNzYSxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztFQUN2RSxTQUFTQyxlQUFlQSxDQUFBLEVBQUc7SUFDdkIsSUFBTS9OLE9BQU8sR0FBRyxJQUFJLENBQUNnTyxrQkFBa0I7SUFDdkMsSUFBSSxDQUFDaEUsU0FBUyxDQUFDaUUsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLElBQUksQ0FBQ2pFLFNBQVMsQ0FBQ2tFLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtNQUNqQ2xPLE9BQU8sQ0FBQ29JLEtBQUssQ0FBQytGLFNBQVMsR0FBR25PLE9BQU8sQ0FBQ29PLFlBQVksR0FBRyxJQUFJO0lBQ3pELENBQUMsTUFDSTtNQUNEcE8sT0FBTyxDQUFDb0ksS0FBSyxDQUFDK0YsU0FBUyxHQUFHLEdBQUc7SUFDakM7RUFDSjtFQUNBTixnQkFBZ0IsQ0FBQ3pXLE9BQU8sQ0FBQyxVQUFBaVgsTUFBTSxFQUFJO0lBQy9CQSxNQUFNLENBQUM1YSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVzYSxlQUFlLENBQUM7RUFDckQsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ2hCVzs7QUFBQUgsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFBQUEsbUJBQUE7QUFDYnBhLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxJQUFNNmEsV0FBVyxHQUFHOWEsUUFBUSxDQUFDK2EsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUMzRCxJQUFNQyxJQUFJLEdBQUdoYixRQUFRLENBQUMrYSxjQUFjLENBQUMsY0FBYyxDQUFDO0VBQ3BERCxXQUFXLEtBQUssSUFBSSxJQUFJQSxXQUFXLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLFdBQVcsQ0FBQzdhLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO0lBQ3hHLElBQU1nYixZQUFZLEdBQUdELElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsSUFBSSxDQUFDVixnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztJQUM3R1csWUFBWSxLQUFLLElBQUksSUFBSUEsWUFBWSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxZQUFZLENBQUNyWCxPQUFPLENBQUMsVUFBVXNYLEtBQUssRUFBRTtNQUM5RkEsS0FBSyxDQUFDNU8sT0FBTyxHQUFHLEtBQUs7SUFDekIsQ0FBQyxDQUFDO0lBQ0YsSUFBTTZPLFVBQVUsR0FBR0gsSUFBSSxLQUFLLElBQUksSUFBSUEsSUFBSSxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHQSxJQUFJLENBQUNWLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO0lBQzlHYSxVQUFVLEtBQUssSUFBSSxJQUFJQSxVQUFVLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUdBLFVBQVUsQ0FBQ3ZYLE9BQU8sQ0FBQyxVQUFVd1gsUUFBUSxFQUFFO01BQzNGQSxRQUFRLENBQUM5TyxPQUFPLEdBQUcsS0FBSztJQUM1QixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDZFc7O0FBQ2J0TSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQsSUFBTW9iLFVBQVUsR0FBR3JiLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGNBQWMsQ0FBQztFQUN6RCxJQUFNbWIscUJBQXFCLEdBQUd0YixRQUFRLENBQUNHLGFBQWEsQ0FBQywwQkFBMEIsQ0FBQztFQUNoRixJQUFJb2IsVUFBVSxHQUFHLEtBQUs7RUFDdEIsU0FBU0MsUUFBUUEsQ0FBQSxFQUFHO0lBQ2hCRixxQkFBcUIsQ0FBQzlFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztJQUM5QzhFLFVBQVUsR0FBRyxJQUFJO0VBQ3JCO0VBQ0EsU0FBU0UsU0FBU0EsQ0FBQSxFQUFHO0lBQ2pCSCxxQkFBcUIsQ0FBQzlFLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUNqRDZFLFVBQVUsR0FBRyxLQUFLO0VBQ3RCO0VBQ0FGLFVBQVUsS0FBSyxJQUFJLElBQUlBLFVBQVUsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsVUFBVSxDQUFDcGIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUN5YixLQUFLLEVBQUs7SUFDcEdBLEtBQUssQ0FBQ0MsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLElBQUksQ0FBQ0osVUFBVSxFQUFFO01BQ2JDLFFBQVEsQ0FBQyxDQUFDO0lBQ2QsQ0FBQyxNQUNJO01BQ0RDLFNBQVMsQ0FBQyxDQUFDO0lBQ2Y7RUFDSixDQUFDLENBQUM7RUFDRkgscUJBQXFCLEtBQUssSUFBSSxJQUFJQSxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EscUJBQXFCLENBQUNyYixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQ3liLEtBQUssRUFBSztJQUNySUEsS0FBSyxDQUFDQyxlQUFlLENBQUMsQ0FBQztFQUMzQixDQUFDLENBQUM7RUFDRjNiLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07SUFDckMsSUFBSXNiLFVBQVUsRUFBRTtNQUNaRSxTQUFTLENBQUMsQ0FBQztJQUNmO0VBQ0osQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkZ6YixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdERELFFBQVEsQ0FBQ3NhLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMxVyxPQUFPLENBQUMsVUFBQ2lYLE1BQU0sRUFBSztJQUM1REEsTUFBTSxDQUFDNWEsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDekMsSUFBSSxDQUFDMmIsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDbEYsTUFBTSxDQUFDLENBQUM7TUFDckNtRixvQkFBb0IsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUMsQ0FBQztFQUVGN2IsUUFBUSxDQUFDc2EsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzFXLE9BQU8sQ0FBQyxVQUFBa1ksR0FBRyxFQUFJO0lBQ3ZEQSxHQUFHLENBQUM3YixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU4YixtQkFBbUIsQ0FBQztFQUN0RCxDQUFDLENBQUM7RUFFRixTQUFTRixvQkFBb0JBLENBQUEsRUFBRztJQUM1QixJQUFNRyxXQUFXLEdBQUdoYyxRQUFRLENBQUNHLGFBQWEsQ0FBQyxlQUFlLENBQUM7SUFDM0QsSUFBSSxDQUFDNmIsV0FBVyxFQUFFO0lBRWxCLElBQU1DLFVBQVUsR0FBRzFiLFFBQVEsQ0FBQ3liLFdBQVcsQ0FBQzNiLE9BQU8sQ0FBQzRiLFVBQVUsQ0FBQztJQUMzRCxJQUFNQyxZQUFZLEdBQUdsYyxRQUFRLENBQUNzYSxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQ3pVLE1BQU07SUFFckU3RixRQUFRLENBQUNzYSxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDMVcsT0FBTyxDQUFDLFVBQUFrWSxHQUFHLEVBQUk7TUFDdkRBLEdBQUcsQ0FBQ3RPLFFBQVEsR0FBRzBPLFlBQVksSUFBSUQsVUFBVTtNQUV6QyxJQUFJRSxjQUFjLEdBQUdMLEdBQUcsQ0FBQ25DLFVBQVUsQ0FBQ3haLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztNQUV6RSxJQUFJK2IsWUFBWSxJQUFJRCxVQUFVLEVBQUU7UUFDNUIsSUFBSSxDQUFDRSxjQUFjLEVBQUU7VUFDakJBLGNBQWMsR0FBR25jLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLEtBQUssQ0FBQztVQUM5Q3diLGNBQWMsQ0FBQ3pSLFNBQVMsR0FBRyw2Q0FBNkM7VUFDeEVvUixHQUFHLENBQUNuQyxVQUFVLENBQUN5QyxXQUFXLENBQUNELGNBQWMsQ0FBQztRQUM5QztRQUNBQSxjQUFjLENBQUNFLFdBQVcsdUNBQXVDO01BQ3JFLENBQUMsTUFBTSxJQUFJRixjQUFjLEVBQUU7UUFDdkJBLGNBQWMsQ0FBQ3pGLE1BQU0sQ0FBQyxDQUFDO01BQzNCO0lBQ0osQ0FBQyxDQUFDO0VBQ047RUFFQSxTQUFTcUYsbUJBQW1CQSxDQUFDaGIsQ0FBQyxFQUFFO0lBQzVCLElBQU11YixnQkFBZ0IsR0FBR3RjLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEdBQUcsR0FBR1ksQ0FBQyxDQUFDd2IsYUFBYSxDQUFDbGMsT0FBTyxDQUFDbWMscUJBQXFCLENBQUM7SUFFcEcsSUFBSSxDQUFDRixnQkFBZ0IsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ2pjLE9BQU8sQ0FBQ2MsU0FBUyxFQUFFO01BQzFEZ0osT0FBTyxDQUFDQyxLQUFLLENBQUMsMENBQTBDLEVBQUVrUyxnQkFBZ0IsQ0FBQztNQUMzRTtJQUNKO0lBRUEsSUFBTWxSLElBQUksR0FBR3BMLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLElBQUksQ0FBQztJQUN6Q3lLLElBQUksQ0FBQ29MLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUM7SUFFekVyTCxJQUFJLENBQUNxUixTQUFTLEdBQUdILGdCQUFnQixDQUFDamMsT0FBTyxDQUFDYyxTQUFTLENBQUNtVSxPQUFPLENBQ3ZELFdBQVcsRUFDWGdILGdCQUFnQixDQUFDamMsT0FBTyxDQUFDd0ssS0FDN0IsQ0FBQztJQUVELElBQU02UixZQUFZLEdBQUcxYyxRQUFRLENBQUNXLGFBQWEsQ0FBQyxRQUFRLENBQUM7SUFDckQrYixZQUFZLENBQUMvWixJQUFJLEdBQUcsUUFBUTtJQUM1QitaLFlBQVksQ0FBQ2xHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDO0lBQ25IaUcsWUFBWSxDQUFDRCxTQUFTLGlEQUErQztJQUVyRUMsWUFBWSxDQUFDemMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDL0NtTCxJQUFJLENBQUNzTCxNQUFNLENBQUMsQ0FBQztNQUNibUYsb0JBQW9CLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7SUFFRnpRLElBQUksQ0FBQ2dSLFdBQVcsQ0FBQ00sWUFBWSxDQUFDO0lBQzlCSixnQkFBZ0IsQ0FBQ0YsV0FBVyxDQUFDaFIsSUFBSSxDQUFDO0lBRWxDa1IsZ0JBQWdCLENBQUNqYyxPQUFPLENBQUN3SyxLQUFLLEVBQUU7SUFFaENnUixvQkFBb0IsQ0FBQyxDQUFDO0VBQzFCO0VBRUFBLG9CQUFvQixDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQ3hFVzs7QUFBQXpCLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQUFBLG1CQUFBO0FBQ2JwYSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQU07RUFDaEQsSUFBTTBjLGFBQWEsR0FBRzNjLFFBQVEsQ0FBQ3NhLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDO0VBQ3RFLElBQU1zQyxlQUFlLEdBQUc1YyxRQUFRLENBQUNzYSxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQztFQUNyRSxTQUFTdUMsa0JBQWtCQSxDQUFDQyxNQUFNLEVBQUU7SUFDaENGLGVBQWUsQ0FBQ2haLE9BQU8sQ0FBQyxVQUFBd0gsSUFBSSxFQUFJO01BQzVCQSxJQUFJLENBQUNvTCxTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBQ0YsSUFBTXFHLGFBQWEsR0FBRy9jLFFBQVEsQ0FBQ3NhLGdCQUFnQixtQ0FBQXZQLE1BQUEsQ0FBa0MrUixNQUFNLFFBQUksQ0FBQztJQUM1RkMsYUFBYSxDQUFDblosT0FBTyxDQUFDLFVBQUFvWixLQUFLLEVBQUk7TUFDM0JBLEtBQUssQ0FBQ3hHLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztJQUNqQyxDQUFDLENBQUM7RUFDTjtFQUNBa0csYUFBYSxDQUFDL1ksT0FBTyxDQUFDLFVBQUNpWCxNQUFNLEVBQUVoUSxLQUFLLEVBQUs7SUFDckNnUSxNQUFNLENBQUM1YSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtNQUNuQzBjLGFBQWEsQ0FBQy9ZLE9BQU8sQ0FBQyxVQUFBa1ksR0FBRyxFQUFJO1FBQ3pCQSxHQUFHLENBQUN0RixTQUFTLENBQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbEMsQ0FBQyxDQUFDO01BQ0ZtRSxNQUFNLENBQUNyRSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7TUFDOUIsSUFBSTVMLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDYmdTLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztNQUM5QixDQUFDLE1BQ0ksSUFBSWhTLEtBQUssS0FBSyxDQUFDLEVBQUU7UUFDbEJnUyxrQkFBa0IsQ0FBQyxPQUFPLENBQUM7TUFDL0IsQ0FBQyxNQUNJLElBQUloUyxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ2xCZ1Msa0JBQWtCLENBQUMsVUFBVSxDQUFDO01BQ2xDO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0VBQ0YsSUFBTUksWUFBWSxHQUFHamQsUUFBUSxDQUFDRyxhQUFhLENBQUMsc0JBQXNCLENBQUM7RUFDbkUsSUFBSThjLFlBQVksRUFBRTtJQUNkLElBQU1DLFdBQVcsR0FBR3RWLEtBQUssQ0FBQ0MsSUFBSSxDQUFDOFUsYUFBYSxDQUFDLENBQUMzSSxPQUFPLENBQUNpSixZQUFZLENBQUM7SUFDbkUsSUFBTUUsT0FBTyxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFDN0NOLGtCQUFrQixDQUFDTSxPQUFPLENBQUNELFdBQVcsQ0FBQyxDQUFDO0VBQzVDLENBQUMsTUFDSTtJQUNETCxrQkFBa0IsQ0FBQyxNQUFNLENBQUM7RUFDOUI7QUFDSixDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0N0Q0YscUpBQUEvYixtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBLElBQUlpSCxTQUFTLEdBQUksU0FBSSxJQUFJLFNBQUksQ0FBQ0EsU0FBUyxJQUFLLFVBQVVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFQyxDQUFDLEVBQUVDLFNBQVMsRUFBRTtFQUNyRixTQUFTQyxLQUFLQSxDQUFDN0csS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZMkcsQ0FBQyxHQUFHM0csS0FBSyxHQUFHLElBQUkyRyxDQUFDLENBQUMsVUFBVWxFLE9BQU8sRUFBRTtNQUFFQSxPQUFPLENBQUN6QyxLQUFLLENBQUM7SUFBRSxDQUFDLENBQUM7RUFBRTtFQUMzRyxPQUFPLEtBQUsyRyxDQUFDLEtBQUtBLENBQUMsR0FBRzVCLE9BQU8sQ0FBQyxFQUFFLFVBQVV0QyxPQUFPLEVBQUVxRSxNQUFNLEVBQUU7SUFDdkQsU0FBU0MsU0FBU0EsQ0FBQy9HLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRWdILElBQUksQ0FBQ0osU0FBUyxDQUFDcEQsSUFBSSxDQUFDeEQsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT1QsQ0FBQyxFQUFFO1FBQUV1SCxNQUFNLENBQUN2SCxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVMwSCxRQUFRQSxDQUFDakgsS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFZ0gsSUFBSSxDQUFDSixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM1RyxLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPVCxDQUFDLEVBQUU7UUFBRXVILE1BQU0sQ0FBQ3ZILENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBU3lILElBQUlBLENBQUNFLE1BQU0sRUFBRTtNQUFFQSxNQUFNLENBQUNwRSxJQUFJLEdBQUdMLE9BQU8sQ0FBQ3lFLE1BQU0sQ0FBQ2xILEtBQUssQ0FBQyxHQUFHNkcsS0FBSyxDQUFDSyxNQUFNLENBQUNsSCxLQUFLLENBQUMsQ0FBQzJDLElBQUksQ0FBQ29FLFNBQVMsRUFBRUUsUUFBUSxDQUFDO0lBQUU7SUFDN0dELElBQUksQ0FBQyxDQUFDSixTQUFTLEdBQUdBLFNBQVMsQ0FBQ08sS0FBSyxDQUFDVixPQUFPLEVBQUVDLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRWxELElBQUksQ0FBQyxDQUFDLENBQUM7RUFDekUsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELElBQU1vWSxRQUFRLEdBQUcsTUFBTTtBQUNoQixTQUFTQyxXQUFXQSxDQUFDL2MsVUFBVSxFQUFFO0VBQ3BDLE9BQU8wSCxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxlQUFBbEgsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBNEQsUUFBQTtJQUFBLElBQUFpUCxRQUFBO0lBQUEsT0FBQWpZLG1CQUFBLEdBQUF1QixJQUFBLFVBQUEySCxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQXRELElBQUEsR0FBQXNELFFBQUEsQ0FBQWpGLElBQUE7UUFBQTtVQUFBaUYsUUFBQSxDQUFBakYsSUFBQTtVQUNsQixPQUFNZ1UsS0FBSyxJQUFBak8sTUFBQSxDQUFJcVMsUUFBUSxnQkFBQXJTLE1BQUEsQ0FBYXpLLFVBQVUsY0FBVyxDQUFDO1FBQUE7VUFBckV5WSxRQUFRLEdBQUE5TyxRQUFBLENBQUF2RixJQUFBO1VBQUEsT0FBQXVGLFFBQUEsQ0FBQXBGLE1BQUEsV0FDUGtVLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQWhQLFFBQUEsQ0FBQW5ELElBQUE7TUFBQTtJQUFBLEdBQUFnRCxPQUFBO0VBQUEsQ0FDekIsRUFBQztBQUNOO0FBQ08sU0FBU2QsZUFBZUEsQ0FBQSxFQUFHO0VBQzlCLE9BQU9oQixTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLEtBQUssQ0FBQyxlQUFBbEgsbUJBQUEsR0FBQW9GLElBQUEsQ0FBRSxTQUFBdVIsU0FBQTtJQUFBLElBQUFzQixRQUFBLEVBQUFoUCxJQUFBO0lBQUEsT0FBQWpKLG1CQUFBLEdBQUF1QixJQUFBLFVBQUFxVixVQUFBQyxTQUFBO01BQUEsa0JBQUFBLFNBQUEsQ0FBQWhSLElBQUEsR0FBQWdSLFNBQUEsQ0FBQTNTLElBQUE7UUFBQTtVQUFBMlMsU0FBQSxDQUFBM1MsSUFBQTtVQUNsQixPQUFNZ1UsS0FBSyxJQUFBak8sTUFBQSxDQUFJcVMsUUFBUSxtQkFBZ0IsQ0FBQztRQUFBO1VBQW5EckUsUUFBUSxHQUFBcEIsU0FBQSxDQUFBalQsSUFBQTtVQUFBaVQsU0FBQSxDQUFBM1MsSUFBQTtVQUNELE9BQU0rVCxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQUE7VUFBNUJsUCxJQUFJLEdBQUE0TixTQUFBLENBQUFqVCxJQUFBO1VBQUEsT0FBQWlULFNBQUEsQ0FBQTlTLE1BQUEsV0FDSGtGLElBQUksQ0FBQ1IsUUFBUTtRQUFBO1FBQUE7VUFBQSxPQUFBb08sU0FBQSxDQUFBN1EsSUFBQTtNQUFBO0lBQUEsR0FBQTJRLFFBQUE7RUFBQSxDQUN2QixFQUFDO0FBQ047QUFDTyxTQUFTM0gsVUFBVUEsQ0FBQ3hQLFVBQVUsRUFBRWtNLE9BQU8sRUFBRTtFQUM1QyxPQUFPeEUsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBQWxILG1CQUFBLEdBQUFvRixJQUFBLENBQUUsU0FBQTRSLFNBQUE7SUFBQSxJQUFBaUIsUUFBQSxFQUFBdUUsU0FBQTtJQUFBLE9BQUF4YyxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBMFYsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFyUixJQUFBLEdBQUFxUixTQUFBLENBQUFoVCxJQUFBO1FBQUE7VUFBQWdULFNBQUEsQ0FBQWhULElBQUE7VUFDbEIsT0FBTWdVLEtBQUssSUFBQWpPLE1BQUEsQ0FBSXFTLFFBQVEsZ0JBQUFyUyxNQUFBLENBQWF6SyxVQUFVLG1CQUFnQjtZQUMzRWlFLE1BQU0sRUFBRSxNQUFNO1lBQ2RnWixPQUFPLEVBQUU7Y0FDTCxjQUFjLEVBQUU7WUFDcEIsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2NBQUVsUixPQUFPLEVBQUVBO1lBQVEsQ0FBQyxDQUFDO1lBQzFDbVIsV0FBVyxFQUFFO1VBQ2pCLENBQUMsQ0FBQztRQUFBO1VBUEk1RSxRQUFRLEdBQUFmLFNBQUEsQ0FBQXRULElBQUE7VUFBQSxJQVFUcVUsUUFBUSxDQUFDNkUsRUFBRTtZQUFBNUYsU0FBQSxDQUFBaFQsSUFBQTtZQUFBO1VBQUE7VUFBQWdULFNBQUEsQ0FBQWhULElBQUE7VUFDTSxPQUFNK1QsUUFBUSxDQUFDOEUsSUFBSSxDQUFDLENBQUM7UUFBQTtVQUFqQ1AsU0FBUyxHQUFBdEYsU0FBQSxDQUFBdFQsSUFBQTtVQUNmeUYsT0FBTyxDQUFDQyxLQUFLLENBQUMsZUFBZSxFQUFFa1QsU0FBUyxDQUFDO1VBQUMsTUFDcEMsSUFBSWpaLEtBQUssa0JBQUEwRyxNQUFBLENBQWtCZ08sUUFBUSxDQUFDK0UsTUFBTSxPQUFBL1MsTUFBQSxDQUFJZ08sUUFBUSxDQUFDZ0YsVUFBVSxDQUFFLENBQUM7UUFBQTtVQUFBLE9BQUEvRixTQUFBLENBQUFuVCxNQUFBLFdBRXZFa1UsUUFBUSxDQUFDRSxJQUFJLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBakIsU0FBQSxDQUFBbFIsSUFBQTtNQUFBO0lBQUEsR0FBQWdSLFFBQUE7RUFBQSxDQUN6QixFQUFDO0FBQ047QUFDTyxTQUFTbkcsYUFBYUEsQ0FBQ3FNLFNBQVMsRUFBRXhSLE9BQU8sRUFBRTtFQUM5QyxPQUFPeEUsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBQWxILG1CQUFBLEdBQUFvRixJQUFBLENBQUUsU0FBQStYLFNBQUE7SUFBQSxJQUFBbEYsUUFBQSxFQUFBbUYsU0FBQTtJQUFBLE9BQUFwZCxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBOGIsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUF6WCxJQUFBLEdBQUF5WCxTQUFBLENBQUFwWixJQUFBO1FBQUE7VUFBQW9aLFNBQUEsQ0FBQXBaLElBQUE7VUFDbEIsT0FBTWdVLEtBQUssSUFBQWpPLE1BQUEsQ0FBSXFTLFFBQVEsZUFBQXJTLE1BQUEsQ0FBWWlULFNBQVMsWUFBUztZQUNsRXpaLE1BQU0sRUFBRSxLQUFLO1lBQ2JnWixPQUFPLEVBQUU7Y0FDTCxjQUFjLEVBQUU7WUFDcEIsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2NBQUVNLFNBQVMsRUFBRUEsU0FBUztjQUFFeFIsT0FBTyxFQUFFQTtZQUFRLENBQUMsQ0FBQztZQUNoRW1SLFdBQVcsRUFBRTtVQUNqQixDQUFDLENBQUM7UUFBQTtVQVBJNUUsUUFBUSxHQUFBcUYsU0FBQSxDQUFBMVosSUFBQTtVQUFBLElBUVRxVSxRQUFRLENBQUM2RSxFQUFFO1lBQUFRLFNBQUEsQ0FBQXBaLElBQUE7WUFBQTtVQUFBO1VBQUFvWixTQUFBLENBQUFwWixJQUFBO1VBQ00sT0FBTStULFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFBQTtVQUFqQ2lGLFNBQVMsR0FBQUUsU0FBQSxDQUFBMVosSUFBQTtVQUFBLE1BQ1QsSUFBSUwsS0FBSyxDQUFDNlosU0FBUyxDQUFDOVQsS0FBSyxJQUFJLDhCQUE4QixDQUFDO1FBQUE7VUFBQSxPQUFBZ1UsU0FBQSxDQUFBdlosTUFBQSxXQUUvRGtVLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQW1GLFNBQUEsQ0FBQXRYLElBQUE7TUFBQTtJQUFBLEdBQUFtWCxRQUFBO0VBQUEsQ0FDekIsRUFBQztBQUNOO0FBQ08sU0FBU3hSLGFBQWFBLENBQUN1UixTQUFTLEVBQUU7RUFDckMsT0FBT2hXLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLGVBQUFsSCxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUFtWSxTQUFBO0lBQUEsSUFBQXRGLFFBQUEsRUFBQW1GLFNBQUE7SUFBQSxPQUFBcGQsbUJBQUEsR0FBQXVCLElBQUEsVUFBQWljLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBNVgsSUFBQSxHQUFBNFgsU0FBQSxDQUFBdlosSUFBQTtRQUFBO1VBQUF1WixTQUFBLENBQUF2WixJQUFBO1VBQ2xCLE9BQU1nVSxLQUFLLElBQUFqTyxNQUFBLENBQUlxUyxRQUFRLGVBQUFyUyxNQUFBLENBQVlpVCxTQUFTLGNBQVc7WUFDcEV6WixNQUFNLEVBQUUsUUFBUTtZQUNoQmdaLE9BQU8sRUFBRTtjQUNMLGNBQWMsRUFBRTtZQUNwQixDQUFDO1lBQ0RJLFdBQVcsRUFBRTtVQUNqQixDQUFDLENBQUM7UUFBQTtVQU5JNUUsUUFBUSxHQUFBd0YsU0FBQSxDQUFBN1osSUFBQTtVQUFBLElBT1RxVSxRQUFRLENBQUM2RSxFQUFFO1lBQUFXLFNBQUEsQ0FBQXZaLElBQUE7WUFBQTtVQUFBO1VBQUF1WixTQUFBLENBQUF2WixJQUFBO1VBQ00sT0FBTStULFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFBQTtVQUFqQ2lGLFNBQVMsR0FBQUssU0FBQSxDQUFBN1osSUFBQTtVQUFBLE1BQ1QsSUFBSUwsS0FBSyxDQUFDNlosU0FBUyxDQUFDOVQsS0FBSyxJQUFJLDhCQUE4QixDQUFDO1FBQUE7VUFBQSxPQUFBbVUsU0FBQSxDQUFBMVosTUFBQSxXQUUvRGtVLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXNGLFNBQUEsQ0FBQXpYLElBQUE7TUFBQTtJQUFBLEdBQUF1WCxRQUFBO0VBQUEsQ0FDekIsRUFBQztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0N4RUEscUpBQUF2ZCxtQkFBQSxZQUFBQSxvQkFBQSxXQUFBQyxDQUFBLFNBQUFDLENBQUEsRUFBQUQsQ0FBQSxPQUFBRSxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsU0FBQSxFQUFBQyxDQUFBLEdBQUFILENBQUEsQ0FBQUksY0FBQSxFQUFBQyxDQUFBLEdBQUFKLE1BQUEsQ0FBQUssY0FBQSxjQUFBUCxDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxJQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxDQUFBTyxLQUFBLEtBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLGFBQUEsdUJBQUFDLENBQUEsR0FBQU4sQ0FBQSxDQUFBTyxXQUFBLDhCQUFBQyxPQUFBakIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsV0FBQUMsTUFBQSxDQUFBSyxjQUFBLENBQUFQLENBQUEsRUFBQUQsQ0FBQSxJQUFBUyxLQUFBLEVBQUFQLENBQUEsRUFBQWlCLFVBQUEsTUFBQUMsWUFBQSxNQUFBQyxRQUFBLFNBQUFwQixDQUFBLENBQUFELENBQUEsV0FBQWtCLE1BQUEsbUJBQUFqQixDQUFBLElBQUFpQixNQUFBLFlBQUFBLE9BQUFqQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxXQUFBRCxDQUFBLENBQUFELENBQUEsSUFBQUUsQ0FBQSxnQkFBQW9CLEtBQUFyQixDQUFBLEVBQUFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFLLENBQUEsR0FBQVYsQ0FBQSxJQUFBQSxDQUFBLENBQUFJLFNBQUEsWUFBQW1CLFNBQUEsR0FBQXZCLENBQUEsR0FBQXVCLFNBQUEsRUFBQVgsQ0FBQSxHQUFBVCxNQUFBLENBQUFxQixNQUFBLENBQUFkLENBQUEsQ0FBQU4sU0FBQSxHQUFBVSxDQUFBLE9BQUFXLE9BQUEsQ0FBQXBCLENBQUEsZ0JBQUFFLENBQUEsQ0FBQUssQ0FBQSxlQUFBSCxLQUFBLEVBQUFpQixnQkFBQSxDQUFBekIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFZLENBQUEsTUFBQUYsQ0FBQSxhQUFBZSxTQUFBMUIsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsbUJBQUEwQixJQUFBLFlBQUFDLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTZCLElBQUEsQ0FBQTlCLENBQUEsRUFBQUUsQ0FBQSxjQUFBRCxDQUFBLGFBQUEyQixJQUFBLFdBQUFDLEdBQUEsRUFBQTVCLENBQUEsUUFBQUQsQ0FBQSxDQUFBc0IsSUFBQSxHQUFBQSxJQUFBLE1BQUFTLENBQUEscUJBQUFDLENBQUEscUJBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFDLENBQUEsZ0JBQUFaLFVBQUEsY0FBQWEsa0JBQUEsY0FBQUMsMkJBQUEsU0FBQUMsQ0FBQSxPQUFBcEIsTUFBQSxDQUFBb0IsQ0FBQSxFQUFBMUIsQ0FBQSxxQ0FBQTJCLENBQUEsR0FBQXBDLE1BQUEsQ0FBQXFDLGNBQUEsRUFBQUMsQ0FBQSxHQUFBRixDQUFBLElBQUFBLENBQUEsQ0FBQUEsQ0FBQSxDQUFBRyxNQUFBLFFBQUFELENBQUEsSUFBQUEsQ0FBQSxLQUFBdkMsQ0FBQSxJQUFBRyxDQUFBLENBQUF5QixJQUFBLENBQUFXLENBQUEsRUFBQTdCLENBQUEsTUFBQTBCLENBQUEsR0FBQUcsQ0FBQSxPQUFBRSxDQUFBLEdBQUFOLDBCQUFBLENBQUFqQyxTQUFBLEdBQUFtQixTQUFBLENBQUFuQixTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQWMsQ0FBQSxZQUFBTSxzQkFBQTNDLENBQUEsZ0NBQUE0QyxPQUFBLFdBQUE3QyxDQUFBLElBQUFrQixNQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsWUFBQUMsQ0FBQSxnQkFBQTZDLE9BQUEsQ0FBQTlDLENBQUEsRUFBQUMsQ0FBQSxzQkFBQThDLGNBQUE5QyxDQUFBLEVBQUFELENBQUEsYUFBQWdELE9BQUE5QyxDQUFBLEVBQUFLLENBQUEsRUFBQUcsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsR0FBQWEsUUFBQSxDQUFBMUIsQ0FBQSxDQUFBQyxDQUFBLEdBQUFELENBQUEsRUFBQU0sQ0FBQSxtQkFBQU8sQ0FBQSxDQUFBYyxJQUFBLFFBQUFaLENBQUEsR0FBQUYsQ0FBQSxDQUFBZSxHQUFBLEVBQUFFLENBQUEsR0FBQWYsQ0FBQSxDQUFBUCxLQUFBLFNBQUFzQixDQUFBLGdCQUFBa0IsT0FBQSxDQUFBbEIsQ0FBQSxLQUFBMUIsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBQyxDQUFBLGVBQUEvQixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLENBQUFvQixPQUFBLEVBQUFDLElBQUEsV0FBQW5ELENBQUEsSUFBQStDLE1BQUEsU0FBQS9DLENBQUEsRUFBQVMsQ0FBQSxFQUFBRSxDQUFBLGdCQUFBWCxDQUFBLElBQUErQyxNQUFBLFVBQUEvQyxDQUFBLEVBQUFTLENBQUEsRUFBQUUsQ0FBQSxRQUFBWixDQUFBLENBQUFrRCxPQUFBLENBQUFuQixDQUFBLEVBQUFxQixJQUFBLFdBQUFuRCxDQUFBLElBQUFlLENBQUEsQ0FBQVAsS0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsQ0FBQU0sQ0FBQSxnQkFBQWYsQ0FBQSxXQUFBK0MsTUFBQSxVQUFBL0MsQ0FBQSxFQUFBUyxDQUFBLEVBQUFFLENBQUEsU0FBQUEsQ0FBQSxDQUFBRSxDQUFBLENBQUFlLEdBQUEsU0FBQTNCLENBQUEsRUFBQUssQ0FBQSxvQkFBQUUsS0FBQSxXQUFBQSxNQUFBUixDQUFBLEVBQUFJLENBQUEsYUFBQWdELDJCQUFBLGVBQUFyRCxDQUFBLFdBQUFBLENBQUEsRUFBQUUsQ0FBQSxJQUFBOEMsTUFBQSxDQUFBL0MsQ0FBQSxFQUFBSSxDQUFBLEVBQUFMLENBQUEsRUFBQUUsQ0FBQSxnQkFBQUEsQ0FBQSxHQUFBQSxDQUFBLEdBQUFBLENBQUEsQ0FBQWtELElBQUEsQ0FBQUMsMEJBQUEsRUFBQUEsMEJBQUEsSUFBQUEsMEJBQUEscUJBQUEzQixpQkFBQTFCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLFFBQUFFLENBQUEsR0FBQXdCLENBQUEsbUJBQUFyQixDQUFBLEVBQUFFLENBQUEsUUFBQUwsQ0FBQSxLQUFBMEIsQ0FBQSxRQUFBcUIsS0FBQSxzQ0FBQS9DLENBQUEsS0FBQTJCLENBQUEsb0JBQUF4QixDQUFBLFFBQUFFLENBQUEsV0FBQUgsS0FBQSxFQUFBUixDQUFBLEVBQUFzRCxJQUFBLGVBQUFsRCxDQUFBLENBQUFtRCxNQUFBLEdBQUE5QyxDQUFBLEVBQUFMLENBQUEsQ0FBQXdCLEdBQUEsR0FBQWpCLENBQUEsVUFBQUUsQ0FBQSxHQUFBVCxDQUFBLENBQUFvRCxRQUFBLE1BQUEzQyxDQUFBLFFBQUFFLENBQUEsR0FBQTBDLG1CQUFBLENBQUE1QyxDQUFBLEVBQUFULENBQUEsT0FBQVcsQ0FBQSxRQUFBQSxDQUFBLEtBQUFtQixDQUFBLG1CQUFBbkIsQ0FBQSxxQkFBQVgsQ0FBQSxDQUFBbUQsTUFBQSxFQUFBbkQsQ0FBQSxDQUFBc0QsSUFBQSxHQUFBdEQsQ0FBQSxDQUFBdUQsS0FBQSxHQUFBdkQsQ0FBQSxDQUFBd0IsR0FBQSxzQkFBQXhCLENBQUEsQ0FBQW1ELE1BQUEsUUFBQWpELENBQUEsS0FBQXdCLENBQUEsUUFBQXhCLENBQUEsR0FBQTJCLENBQUEsRUFBQTdCLENBQUEsQ0FBQXdCLEdBQUEsRUFBQXhCLENBQUEsQ0FBQXdELGlCQUFBLENBQUF4RCxDQUFBLENBQUF3QixHQUFBLHVCQUFBeEIsQ0FBQSxDQUFBbUQsTUFBQSxJQUFBbkQsQ0FBQSxDQUFBeUQsTUFBQSxXQUFBekQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBdEIsQ0FBQSxHQUFBMEIsQ0FBQSxNQUFBSyxDQUFBLEdBQUFYLFFBQUEsQ0FBQTNCLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLG9CQUFBaUMsQ0FBQSxDQUFBVixJQUFBLFFBQUFyQixDQUFBLEdBQUFGLENBQUEsQ0FBQWtELElBQUEsR0FBQXJCLENBQUEsR0FBQUYsQ0FBQSxFQUFBTSxDQUFBLENBQUFULEdBQUEsS0FBQU0sQ0FBQSxxQkFBQTFCLEtBQUEsRUFBQTZCLENBQUEsQ0FBQVQsR0FBQSxFQUFBMEIsSUFBQSxFQUFBbEQsQ0FBQSxDQUFBa0QsSUFBQSxrQkFBQWpCLENBQUEsQ0FBQVYsSUFBQSxLQUFBckIsQ0FBQSxHQUFBMkIsQ0FBQSxFQUFBN0IsQ0FBQSxDQUFBbUQsTUFBQSxZQUFBbkQsQ0FBQSxDQUFBd0IsR0FBQSxHQUFBUyxDQUFBLENBQUFULEdBQUEsbUJBQUE2QixvQkFBQTFELENBQUEsRUFBQUUsQ0FBQSxRQUFBRyxDQUFBLEdBQUFILENBQUEsQ0FBQXNELE1BQUEsRUFBQWpELENBQUEsR0FBQVAsQ0FBQSxDQUFBYSxRQUFBLENBQUFSLENBQUEsT0FBQUUsQ0FBQSxLQUFBTixDQUFBLFNBQUFDLENBQUEsQ0FBQXVELFFBQUEscUJBQUFwRCxDQUFBLElBQUFMLENBQUEsQ0FBQWEsUUFBQSxlQUFBWCxDQUFBLENBQUFzRCxNQUFBLGFBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEVBQUF5RCxtQkFBQSxDQUFBMUQsQ0FBQSxFQUFBRSxDQUFBLGVBQUFBLENBQUEsQ0FBQXNELE1BQUEsa0JBQUFuRCxDQUFBLEtBQUFILENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsT0FBQWtDLFNBQUEsdUNBQUExRCxDQUFBLGlCQUFBOEIsQ0FBQSxNQUFBekIsQ0FBQSxHQUFBaUIsUUFBQSxDQUFBcEIsQ0FBQSxFQUFBUCxDQUFBLENBQUFhLFFBQUEsRUFBQVgsQ0FBQSxDQUFBMkIsR0FBQSxtQkFBQW5CLENBQUEsQ0FBQWtCLElBQUEsU0FBQTFCLENBQUEsQ0FBQXNELE1BQUEsWUFBQXRELENBQUEsQ0FBQTJCLEdBQUEsR0FBQW5CLENBQUEsQ0FBQW1CLEdBQUEsRUFBQTNCLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsTUFBQXZCLENBQUEsR0FBQUYsQ0FBQSxDQUFBbUIsR0FBQSxTQUFBakIsQ0FBQSxHQUFBQSxDQUFBLENBQUEyQyxJQUFBLElBQUFyRCxDQUFBLENBQUFGLENBQUEsQ0FBQWdFLFVBQUEsSUFBQXBELENBQUEsQ0FBQUgsS0FBQSxFQUFBUCxDQUFBLENBQUErRCxJQUFBLEdBQUFqRSxDQUFBLENBQUFrRSxPQUFBLGVBQUFoRSxDQUFBLENBQUFzRCxNQUFBLEtBQUF0RCxDQUFBLENBQUFzRCxNQUFBLFdBQUF0RCxDQUFBLENBQUEyQixHQUFBLEdBQUE1QixDQUFBLEdBQUFDLENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsSUFBQXZCLENBQUEsSUFBQVYsQ0FBQSxDQUFBc0QsTUFBQSxZQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxPQUFBa0MsU0FBQSxzQ0FBQTdELENBQUEsQ0FBQXVELFFBQUEsU0FBQXRCLENBQUEsY0FBQWdDLGFBQUFsRSxDQUFBLFFBQUFELENBQUEsS0FBQW9FLE1BQUEsRUFBQW5FLENBQUEsWUFBQUEsQ0FBQSxLQUFBRCxDQUFBLENBQUFxRSxRQUFBLEdBQUFwRSxDQUFBLFdBQUFBLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0UsVUFBQSxHQUFBckUsQ0FBQSxLQUFBRCxDQUFBLENBQUF1RSxRQUFBLEdBQUF0RSxDQUFBLFdBQUF1RSxVQUFBLENBQUFDLElBQUEsQ0FBQXpFLENBQUEsY0FBQTBFLGNBQUF6RSxDQUFBLFFBQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBMEUsVUFBQSxRQUFBM0UsQ0FBQSxDQUFBNEIsSUFBQSxvQkFBQTVCLENBQUEsQ0FBQTZCLEdBQUEsRUFBQTVCLENBQUEsQ0FBQTBFLFVBQUEsR0FBQTNFLENBQUEsYUFBQXlCLFFBQUF4QixDQUFBLFNBQUF1RSxVQUFBLE1BQUFKLE1BQUEsYUFBQW5FLENBQUEsQ0FBQTRDLE9BQUEsQ0FBQXNCLFlBQUEsY0FBQVMsS0FBQSxpQkFBQWxDLE9BQUExQyxDQUFBLFFBQUFBLENBQUEsV0FBQUEsQ0FBQSxRQUFBRSxDQUFBLEdBQUFGLENBQUEsQ0FBQVksQ0FBQSxPQUFBVixDQUFBLFNBQUFBLENBQUEsQ0FBQTRCLElBQUEsQ0FBQTlCLENBQUEsNEJBQUFBLENBQUEsQ0FBQWlFLElBQUEsU0FBQWpFLENBQUEsT0FBQTZFLEtBQUEsQ0FBQTdFLENBQUEsQ0FBQThFLE1BQUEsU0FBQXZFLENBQUEsT0FBQUcsQ0FBQSxZQUFBdUQsS0FBQSxhQUFBMUQsQ0FBQSxHQUFBUCxDQUFBLENBQUE4RSxNQUFBLE9BQUF6RSxDQUFBLENBQUF5QixJQUFBLENBQUE5QixDQUFBLEVBQUFPLENBQUEsVUFBQTBELElBQUEsQ0FBQXhELEtBQUEsR0FBQVQsQ0FBQSxDQUFBTyxDQUFBLEdBQUEwRCxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxTQUFBQSxJQUFBLENBQUF4RCxLQUFBLEdBQUFSLENBQUEsRUFBQWdFLElBQUEsQ0FBQVYsSUFBQSxPQUFBVSxJQUFBLFlBQUF2RCxDQUFBLENBQUF1RCxJQUFBLEdBQUF2RCxDQUFBLGdCQUFBcUQsU0FBQSxDQUFBZCxPQUFBLENBQUFqRCxDQUFBLGtDQUFBb0MsaUJBQUEsQ0FBQWhDLFNBQUEsR0FBQWlDLDBCQUFBLEVBQUE5QixDQUFBLENBQUFvQyxDQUFBLG1CQUFBbEMsS0FBQSxFQUFBNEIsMEJBQUEsRUFBQWpCLFlBQUEsU0FBQWIsQ0FBQSxDQUFBOEIsMEJBQUEsbUJBQUE1QixLQUFBLEVBQUEyQixpQkFBQSxFQUFBaEIsWUFBQSxTQUFBZ0IsaUJBQUEsQ0FBQTJDLFdBQUEsR0FBQTdELE1BQUEsQ0FBQW1CLDBCQUFBLEVBQUFyQixDQUFBLHdCQUFBaEIsQ0FBQSxDQUFBZ0YsbUJBQUEsYUFBQS9FLENBQUEsUUFBQUQsQ0FBQSx3QkFBQUMsQ0FBQSxJQUFBQSxDQUFBLENBQUFnRixXQUFBLFdBQUFqRixDQUFBLEtBQUFBLENBQUEsS0FBQW9DLGlCQUFBLDZCQUFBcEMsQ0FBQSxDQUFBK0UsV0FBQSxJQUFBL0UsQ0FBQSxDQUFBa0YsSUFBQSxPQUFBbEYsQ0FBQSxDQUFBbUYsSUFBQSxhQUFBbEYsQ0FBQSxXQUFBRSxNQUFBLENBQUFpRixjQUFBLEdBQUFqRixNQUFBLENBQUFpRixjQUFBLENBQUFuRixDQUFBLEVBQUFvQywwQkFBQSxLQUFBcEMsQ0FBQSxDQUFBb0YsU0FBQSxHQUFBaEQsMEJBQUEsRUFBQW5CLE1BQUEsQ0FBQWpCLENBQUEsRUFBQWUsQ0FBQSx5QkFBQWYsQ0FBQSxDQUFBRyxTQUFBLEdBQUFELE1BQUEsQ0FBQXFCLE1BQUEsQ0FBQW1CLENBQUEsR0FBQTFDLENBQUEsS0FBQUQsQ0FBQSxDQUFBc0YsS0FBQSxhQUFBckYsQ0FBQSxhQUFBa0QsT0FBQSxFQUFBbEQsQ0FBQSxPQUFBMkMscUJBQUEsQ0FBQUcsYUFBQSxDQUFBM0MsU0FBQSxHQUFBYyxNQUFBLENBQUE2QixhQUFBLENBQUEzQyxTQUFBLEVBQUFVLENBQUEsaUNBQUFkLENBQUEsQ0FBQStDLGFBQUEsR0FBQUEsYUFBQSxFQUFBL0MsQ0FBQSxDQUFBdUYsS0FBQSxhQUFBdEYsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxFQUFBRyxDQUFBLGVBQUFBLENBQUEsS0FBQUEsQ0FBQSxHQUFBOEUsT0FBQSxPQUFBNUUsQ0FBQSxPQUFBbUMsYUFBQSxDQUFBekIsSUFBQSxDQUFBckIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUUsQ0FBQSxHQUFBRyxDQUFBLFVBQUFWLENBQUEsQ0FBQWdGLG1CQUFBLENBQUE5RSxDQUFBLElBQUFVLENBQUEsR0FBQUEsQ0FBQSxDQUFBcUQsSUFBQSxHQUFBYixJQUFBLFdBQUFuRCxDQUFBLFdBQUFBLENBQUEsQ0FBQXNELElBQUEsR0FBQXRELENBQUEsQ0FBQVEsS0FBQSxHQUFBRyxDQUFBLENBQUFxRCxJQUFBLFdBQUFyQixxQkFBQSxDQUFBRCxDQUFBLEdBQUF6QixNQUFBLENBQUF5QixDQUFBLEVBQUEzQixDQUFBLGdCQUFBRSxNQUFBLENBQUF5QixDQUFBLEVBQUEvQixDQUFBLGlDQUFBTSxNQUFBLENBQUF5QixDQUFBLDZEQUFBM0MsQ0FBQSxDQUFBeUYsSUFBQSxhQUFBeEYsQ0FBQSxRQUFBRCxDQUFBLEdBQUFHLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBQyxDQUFBLGdCQUFBRyxDQUFBLElBQUFMLENBQUEsRUFBQUUsQ0FBQSxDQUFBdUUsSUFBQSxDQUFBcEUsQ0FBQSxVQUFBSCxDQUFBLENBQUF3RixPQUFBLGFBQUF6QixLQUFBLFdBQUEvRCxDQUFBLENBQUE0RSxNQUFBLFNBQUE3RSxDQUFBLEdBQUFDLENBQUEsQ0FBQXlGLEdBQUEsUUFBQTFGLENBQUEsSUFBQUQsQ0FBQSxTQUFBaUUsSUFBQSxDQUFBeEQsS0FBQSxHQUFBUixDQUFBLEVBQUFnRSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxXQUFBQSxJQUFBLENBQUFWLElBQUEsT0FBQVUsSUFBQSxRQUFBakUsQ0FBQSxDQUFBMEMsTUFBQSxHQUFBQSxNQUFBLEVBQUFqQixPQUFBLENBQUFyQixTQUFBLEtBQUE2RSxXQUFBLEVBQUF4RCxPQUFBLEVBQUFtRCxLQUFBLFdBQUFBLE1BQUE1RSxDQUFBLGFBQUE0RixJQUFBLFdBQUEzQixJQUFBLFdBQUFOLElBQUEsUUFBQUMsS0FBQSxHQUFBM0QsQ0FBQSxPQUFBc0QsSUFBQSxZQUFBRSxRQUFBLGNBQUFELE1BQUEsZ0JBQUEzQixHQUFBLEdBQUE1QixDQUFBLE9BQUF1RSxVQUFBLENBQUEzQixPQUFBLENBQUE2QixhQUFBLElBQUExRSxDQUFBLFdBQUFFLENBQUEsa0JBQUFBLENBQUEsQ0FBQTJGLE1BQUEsT0FBQXhGLENBQUEsQ0FBQXlCLElBQUEsT0FBQTVCLENBQUEsTUFBQTJFLEtBQUEsRUFBQTNFLENBQUEsQ0FBQTRGLEtBQUEsY0FBQTVGLENBQUEsSUFBQUQsQ0FBQSxNQUFBOEYsSUFBQSxXQUFBQSxLQUFBLFNBQUF4QyxJQUFBLFdBQUF0RCxDQUFBLFFBQUF1RSxVQUFBLElBQUFHLFVBQUEsa0JBQUExRSxDQUFBLENBQUEyQixJQUFBLFFBQUEzQixDQUFBLENBQUE0QixHQUFBLGNBQUFtRSxJQUFBLEtBQUFuQyxpQkFBQSxXQUFBQSxrQkFBQTdELENBQUEsYUFBQXVELElBQUEsUUFBQXZELENBQUEsTUFBQUUsQ0FBQSxrQkFBQStGLE9BQUE1RixDQUFBLEVBQUFFLENBQUEsV0FBQUssQ0FBQSxDQUFBZ0IsSUFBQSxZQUFBaEIsQ0FBQSxDQUFBaUIsR0FBQSxHQUFBN0IsQ0FBQSxFQUFBRSxDQUFBLENBQUErRCxJQUFBLEdBQUE1RCxDQUFBLEVBQUFFLENBQUEsS0FBQUwsQ0FBQSxDQUFBc0QsTUFBQSxXQUFBdEQsQ0FBQSxDQUFBMkIsR0FBQSxHQUFBNUIsQ0FBQSxLQUFBTSxDQUFBLGFBQUFBLENBQUEsUUFBQWlFLFVBQUEsQ0FBQU0sTUFBQSxNQUFBdkUsQ0FBQSxTQUFBQSxDQUFBLFFBQUFHLENBQUEsUUFBQThELFVBQUEsQ0FBQWpFLENBQUEsR0FBQUssQ0FBQSxHQUFBRixDQUFBLENBQUFpRSxVQUFBLGlCQUFBakUsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBNkIsTUFBQSxhQUFBdkYsQ0FBQSxDQUFBMEQsTUFBQSxTQUFBd0IsSUFBQSxRQUFBOUUsQ0FBQSxHQUFBVCxDQUFBLENBQUF5QixJQUFBLENBQUFwQixDQUFBLGVBQUFNLENBQUEsR0FBQVgsQ0FBQSxDQUFBeUIsSUFBQSxDQUFBcEIsQ0FBQSxxQkFBQUksQ0FBQSxJQUFBRSxDQUFBLGFBQUE0RSxJQUFBLEdBQUFsRixDQUFBLENBQUEyRCxRQUFBLFNBQUE0QixNQUFBLENBQUF2RixDQUFBLENBQUEyRCxRQUFBLGdCQUFBdUIsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBNEQsVUFBQSxTQUFBMkIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBNEQsVUFBQSxjQUFBeEQsQ0FBQSxhQUFBOEUsSUFBQSxHQUFBbEYsQ0FBQSxDQUFBMkQsUUFBQSxTQUFBNEIsTUFBQSxDQUFBdkYsQ0FBQSxDQUFBMkQsUUFBQSxxQkFBQXJELENBQUEsUUFBQXNDLEtBQUEscURBQUFzQyxJQUFBLEdBQUFsRixDQUFBLENBQUE0RCxVQUFBLFNBQUEyQixNQUFBLENBQUF2RixDQUFBLENBQUE0RCxVQUFBLFlBQUFSLE1BQUEsV0FBQUEsT0FBQTdELENBQUEsRUFBQUQsQ0FBQSxhQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUFNLE1BQUEsTUFBQTVFLENBQUEsU0FBQUEsQ0FBQSxRQUFBSyxDQUFBLFFBQUFpRSxVQUFBLENBQUF0RSxDQUFBLE9BQUFLLENBQUEsQ0FBQTZELE1BQUEsU0FBQXdCLElBQUEsSUFBQXZGLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsd0JBQUFxRixJQUFBLEdBQUFyRixDQUFBLENBQUErRCxVQUFBLFFBQUE1RCxDQUFBLEdBQUFILENBQUEsYUFBQUcsQ0FBQSxpQkFBQVQsQ0FBQSxtQkFBQUEsQ0FBQSxLQUFBUyxDQUFBLENBQUEwRCxNQUFBLElBQUFwRSxDQUFBLElBQUFBLENBQUEsSUFBQVUsQ0FBQSxDQUFBNEQsVUFBQSxLQUFBNUQsQ0FBQSxjQUFBRSxDQUFBLEdBQUFGLENBQUEsR0FBQUEsQ0FBQSxDQUFBaUUsVUFBQSxjQUFBL0QsQ0FBQSxDQUFBZ0IsSUFBQSxHQUFBM0IsQ0FBQSxFQUFBVyxDQUFBLENBQUFpQixHQUFBLEdBQUE3QixDQUFBLEVBQUFVLENBQUEsU0FBQThDLE1BQUEsZ0JBQUFTLElBQUEsR0FBQXZELENBQUEsQ0FBQTRELFVBQUEsRUFBQW5DLENBQUEsU0FBQStELFFBQUEsQ0FBQXRGLENBQUEsTUFBQXNGLFFBQUEsV0FBQUEsU0FBQWpHLENBQUEsRUFBQUQsQ0FBQSxvQkFBQUMsQ0FBQSxDQUFBMkIsSUFBQSxRQUFBM0IsQ0FBQSxDQUFBNEIsR0FBQSxxQkFBQTVCLENBQUEsQ0FBQTJCLElBQUEsbUJBQUEzQixDQUFBLENBQUEyQixJQUFBLFFBQUFxQyxJQUFBLEdBQUFoRSxDQUFBLENBQUE0QixHQUFBLGdCQUFBNUIsQ0FBQSxDQUFBMkIsSUFBQSxTQUFBb0UsSUFBQSxRQUFBbkUsR0FBQSxHQUFBNUIsQ0FBQSxDQUFBNEIsR0FBQSxPQUFBMkIsTUFBQSxrQkFBQVMsSUFBQSx5QkFBQWhFLENBQUEsQ0FBQTJCLElBQUEsSUFBQTVCLENBQUEsVUFBQWlFLElBQUEsR0FBQWpFLENBQUEsR0FBQW1DLENBQUEsS0FBQWdFLE1BQUEsV0FBQUEsT0FBQWxHLENBQUEsYUFBQUQsQ0FBQSxRQUFBd0UsVUFBQSxDQUFBTSxNQUFBLE1BQUE5RSxDQUFBLFNBQUFBLENBQUEsUUFBQUUsQ0FBQSxRQUFBc0UsVUFBQSxDQUFBeEUsQ0FBQSxPQUFBRSxDQUFBLENBQUFvRSxVQUFBLEtBQUFyRSxDQUFBLGNBQUFpRyxRQUFBLENBQUFoRyxDQUFBLENBQUF5RSxVQUFBLEVBQUF6RSxDQUFBLENBQUFxRSxRQUFBLEdBQUFHLGFBQUEsQ0FBQXhFLENBQUEsR0FBQWlDLENBQUEseUJBQUFpRSxPQUFBbkcsQ0FBQSxhQUFBRCxDQUFBLFFBQUF3RSxVQUFBLENBQUFNLE1BQUEsTUFBQTlFLENBQUEsU0FBQUEsQ0FBQSxRQUFBRSxDQUFBLFFBQUFzRSxVQUFBLENBQUF4RSxDQUFBLE9BQUFFLENBQUEsQ0FBQWtFLE1BQUEsS0FBQW5FLENBQUEsUUFBQUksQ0FBQSxHQUFBSCxDQUFBLENBQUF5RSxVQUFBLGtCQUFBdEUsQ0FBQSxDQUFBdUIsSUFBQSxRQUFBckIsQ0FBQSxHQUFBRixDQUFBLENBQUF3QixHQUFBLEVBQUE2QyxhQUFBLENBQUF4RSxDQUFBLFlBQUFLLENBQUEsWUFBQStDLEtBQUEsOEJBQUErQyxhQUFBLFdBQUFBLGNBQUFyRyxDQUFBLEVBQUFFLENBQUEsRUFBQUcsQ0FBQSxnQkFBQW9ELFFBQUEsS0FBQTVDLFFBQUEsRUFBQTZCLE1BQUEsQ0FBQTFDLENBQUEsR0FBQWdFLFVBQUEsRUFBQTlELENBQUEsRUFBQWdFLE9BQUEsRUFBQTdELENBQUEsb0JBQUFtRCxNQUFBLFVBQUEzQixHQUFBLEdBQUE1QixDQUFBLEdBQUFrQyxDQUFBLE9BQUFuQyxDQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQSxJQUFJaUgsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQVMsSUFBSyxVQUFVQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckYsU0FBU0MsS0FBS0EsQ0FBQzdHLEtBQUssRUFBRTtJQUFFLE9BQU9BLEtBQUssWUFBWTJHLENBQUMsR0FBRzNHLEtBQUssR0FBRyxJQUFJMkcsQ0FBQyxDQUFDLFVBQVVsRSxPQUFPLEVBQUU7TUFBRUEsT0FBTyxDQUFDekMsS0FBSyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0VBQUU7RUFDM0csT0FBTyxLQUFLMkcsQ0FBQyxLQUFLQSxDQUFDLEdBQUc1QixPQUFPLENBQUMsRUFBRSxVQUFVdEMsT0FBTyxFQUFFcUUsTUFBTSxFQUFFO0lBQ3ZELFNBQVNDLFNBQVNBLENBQUMvRyxLQUFLLEVBQUU7TUFBRSxJQUFJO1FBQUVnSCxJQUFJLENBQUNKLFNBQVMsQ0FBQ3BELElBQUksQ0FBQ3hELEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU9ULENBQUMsRUFBRTtRQUFFdUgsTUFBTSxDQUFDdkgsQ0FBQyxDQUFDO01BQUU7SUFBRTtJQUMxRixTQUFTMEgsUUFBUUEsQ0FBQ2pILEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRWdILElBQUksQ0FBQ0osU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDNUcsS0FBSyxDQUFDLENBQUM7TUFBRSxDQUFDLENBQUMsT0FBT1QsQ0FBQyxFQUFFO1FBQUV1SCxNQUFNLENBQUN2SCxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzdGLFNBQVN5SCxJQUFJQSxDQUFDRSxNQUFNLEVBQUU7TUFBRUEsTUFBTSxDQUFDcEUsSUFBSSxHQUFHTCxPQUFPLENBQUN5RSxNQUFNLENBQUNsSCxLQUFLLENBQUMsR0FBRzZHLEtBQUssQ0FBQ0ssTUFBTSxDQUFDbEgsS0FBSyxDQUFDLENBQUMyQyxJQUFJLENBQUNvRSxTQUFTLEVBQUVFLFFBQVEsQ0FBQztJQUFFO0lBQzdHRCxJQUFJLENBQUMsQ0FBQ0osU0FBUyxHQUFHQSxTQUFTLENBQUNPLEtBQUssQ0FBQ1YsT0FBTyxFQUFFQyxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUVsRCxJQUFJLENBQUMsQ0FBQyxDQUFDO0VBQ3pFLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRCxJQUFNb1ksUUFBUSxHQUFHLGVBQWU7QUFDekIsU0FBUzVILGlCQUFpQkEsQ0FBQSxFQUFHO0VBQ2hDLE9BQU94TixTQUFTLENBQUMsSUFBSSxFQUFFd1csU0FBUyxFQUFFLEtBQUssQ0FBQyxFQUFFO0lBQUEsSUFBV0MsT0FBTyxHQUFBRCxTQUFBLENBQUEzWSxNQUFBLFFBQUEyWSxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBLG9CQUFBMWQsbUJBQUEsR0FBQW9GLElBQUEsVUFBQTRELFFBQUE7TUFBQSxJQUFBNlUsTUFBQSxFQUFBNUYsUUFBQTtNQUFBLE9BQUFqWSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBMkgsU0FBQUMsUUFBQTtRQUFBLGtCQUFBQSxRQUFBLENBQUF0RCxJQUFBLEdBQUFzRCxRQUFBLENBQUFqRixJQUFBO1VBQUE7WUFDdkQyWixNQUFNLEdBQUcsSUFBSTdILGVBQWUsQ0FBQyxDQUFDO1lBQ3BDLElBQUkySCxPQUFPLENBQUN0SCxVQUFVLElBQUksQ0FBQ3ZSLEtBQUssQ0FBQ2daLFVBQVUsQ0FBQ0gsT0FBTyxDQUFDdEgsVUFBVSxDQUFDLENBQUMsRUFBRTtjQUM5RHdILE1BQU0sQ0FBQ0UsTUFBTSxDQUFDLFlBQVksRUFBRUosT0FBTyxDQUFDdEgsVUFBVSxDQUFDO1lBQ25EO1lBQ0EsSUFBSXNILE9BQU8sQ0FBQ3BILFVBQVUsSUFBSW9ILE9BQU8sQ0FBQ3BILFVBQVUsQ0FBQ3hSLE1BQU0sR0FBRyxDQUFDLEVBQUU7Y0FDckQ0WSxPQUFPLENBQUNwSCxVQUFVLENBQUN6VCxPQUFPLENBQUMsVUFBQXdVLFFBQVEsRUFBSTtnQkFDbkN1RyxNQUFNLENBQUNFLE1BQU0sQ0FBQyxZQUFZLEVBQUV6RyxRQUFRLENBQUM7Y0FDekMsQ0FBQyxDQUFDO1lBQ047WUFBQ25PLFFBQUEsQ0FBQWpGLElBQUE7WUFDZ0IsT0FBTWdVLEtBQUssSUFBQWpPLE1BQUEsQ0FBSXFTLFFBQVEsT0FBQXJTLE1BQUEsQ0FBSTRULE1BQU0sQ0FBRSxDQUFDO1VBQUE7WUFBL0M1RixRQUFRLEdBQUE5TyxRQUFBLENBQUF2RixJQUFBO1lBQUEsT0FBQXVGLFFBQUEsQ0FBQXBGLE1BQUEsV0FDUGtVLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7VUFBQTtVQUFBO1lBQUEsT0FBQWhQLFFBQUEsQ0FBQW5ELElBQUE7UUFBQTtNQUFBLEdBQUFnRCxPQUFBO0lBQUE7RUFBQSxDQUN6QixDQUFDO0FBQ047QUFDTyxTQUFTMkwsV0FBV0EsQ0FBQ25WLFVBQVUsRUFBRTtFQUNwQyxPQUFPMEgsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsZUFBQWxILG1CQUFBLEdBQUFvRixJQUFBLENBQUUsU0FBQXVSLFNBQUE7SUFBQSxJQUFBc0IsUUFBQTtJQUFBLE9BQUFqWSxtQkFBQSxHQUFBdUIsSUFBQSxVQUFBcVYsVUFBQUMsU0FBQTtNQUFBLGtCQUFBQSxTQUFBLENBQUFoUixJQUFBLEdBQUFnUixTQUFBLENBQUEzUyxJQUFBO1FBQUE7VUFBQTJTLFNBQUEsQ0FBQTNTLElBQUE7VUFDbEIsT0FBTWdVLEtBQUssSUFBQWpPLE1BQUEsQ0FBSXFTLFFBQVEsT0FBQXJTLE1BQUEsQ0FBSXpLLFVBQVUsQ0FBRSxDQUFDO1FBQUE7VUFBbkR5WSxRQUFRLEdBQUFwQixTQUFBLENBQUFqVCxJQUFBO1VBQUEsT0FBQWlULFNBQUEsQ0FBQTlTLE1BQUEsV0FDUGtVLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQXRCLFNBQUEsQ0FBQTdRLElBQUE7TUFBQTtJQUFBLEdBQUEyUSxRQUFBO0VBQUEsQ0FDekIsRUFBQztBQUNOO0FBQ08sU0FBUy9CLGFBQWFBLENBQUNwVixVQUFVLEVBQUVpTCxPQUFPLEVBQUU7RUFDL0MsT0FBT3ZELFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsS0FBSyxDQUFDLGVBQUFsSCxtQkFBQSxHQUFBb0YsSUFBQSxDQUFFLFNBQUE0UixTQUFBO0lBQUEsSUFBQWlCLFFBQUE7SUFBQSxPQUFBalksbUJBQUEsR0FBQXVCLElBQUEsVUFBQTBWLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBclIsSUFBQSxHQUFBcVIsU0FBQSxDQUFBaFQsSUFBQTtRQUFBO1VBQUFnVCxTQUFBLENBQUFoVCxJQUFBO1VBQ2xCLE9BQU1nVSxLQUFLLElBQUFqTyxNQUFBLENBQUlxUyxRQUFRLE9BQUFyUyxNQUFBLENBQUl6SyxVQUFVLGFBQVU7WUFDNURpRSxNQUFNLEVBQUUsTUFBTTtZQUNkZ1osT0FBTyxFQUFFO2NBQ0wsY0FBYyxFQUFFO1lBQ3BCLENBQUM7WUFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztjQUFFblMsT0FBTyxFQUFFQTtZQUFRLENBQUM7VUFDN0MsQ0FBQyxDQUFDO1FBQUE7VUFOSXdOLFFBQVEsR0FBQWYsU0FBQSxDQUFBdFQsSUFBQTtVQUFBLE9BQUFzVCxTQUFBLENBQUFuVCxNQUFBLFdBT1BrVSxRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFqQixTQUFBLENBQUFsUixJQUFBO01BQUE7SUFBQSxHQUFBZ1IsUUFBQTtFQUFBLENBQ3pCLEVBQUM7QUFDTjs7Ozs7Ozs7Ozs7O0FDMUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTTVPLE1BQU0sR0FBRztFQUNsQjRWLElBQUksRUFBRSxHQUFHO0VBQ1Q3VCxJQUFJLEVBQUUsT0FBTztFQUNid04sT0FBTyxFQUFFLFVBQVU7RUFDbkJoSCxLQUFLLEVBQUUsUUFBUTtFQUNmQyxRQUFRLEVBQUUsV0FBVztFQUNyQjlCLFFBQVEsRUFBRTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9BY3Rpdml0eS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ2hvaWNlcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50RGVsZXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnRJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnRMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnRVcGRhdGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbW8udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbW8vZGVtb1F1ZXN0aW9uMS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbjIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVtby9kZW1vUXVlc3Rpb24zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbW8vZGVtb1F1ZXN0aW9uNC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbjUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRXhwbGFuYXRpb24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9MaW1pdFJlYWNoZWQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01hcmtkb3duSW5mb3MudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyZXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1Byb2ZpbGVQaWN0dXJlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWVzdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUXVlc3Rpb25Db250ZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWVzdGlvbk5vdEZvdW5kLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TaWRlYmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udGV4dC9BdXRoQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2hvb2svUmF5c0FuaW1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21vdGlvbi9hbmltYXRpb25zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2FjY29yZGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9maWx0ZXJzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvcXVlc3Rpb24tZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9zd2l0Y2hlcy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZXMvY29tbWVudHNBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL3F1ZXN0aW9uc0FwaS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL3JvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9RdWVzdGlvblwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vY29tcG9uZW50cy9EZW1vXCI7XG5pbXBvcnQgQWN0aXZpdHkgZnJvbSBcIi4vY29tcG9uZW50cy9BY3Rpdml0eVwiO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2ZpbHRlcnMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc3dpdGNoZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvcXVlc3Rpb24tZm9ybSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9tZW51JztcbmltcG9ydCAnLi9zY3JpcHRzL2FjY29yZGlvbic7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aXotY29udGFpbmVyJyk7XG4gICAgaWYgKHF1ZXN0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBxdWVzdGlvbkNvbnRhaW5lci5kYXRhc2V0Lm1vZGUgfHwgJ3F1aXonO1xuICAgICAgICBjb25zdCBxdWVzdGlvbklkID0gcGFyc2VJbnQocXVlc3Rpb25Db250YWluZXIuZGF0YXNldC5xdWVzdGlvbklkIHx8ICcwJyk7XG4gICAgICAgIGNvbnN0IHNob3dDb21tZW50cyA9IHF1ZXN0aW9uQ29udGFpbmVyLmRhdGFzZXQuc2hvd0NvbW1lbnRzICE9PSAnZmFsc2UnO1xuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChxdWVzdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIHJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aFByb3ZpZGVyLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbiwgeyBtb2RlOiBtb2RlLCBxdWVzdGlvbklkOiBxdWVzdGlvbklkLCBzaG93Q29tbWVudHM6IHNob3dDb21tZW50cyB9KSkpO1xuICAgIH1cbiAgICBjb25zdCBkZW1vQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbW8tY29udGFpbmVyJyk7XG4gICAgaWYgKGRlbW9Db250YWluZXIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZGVtb0NvbnRhaW5lcik7XG4gICAgICAgIHJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVtbywgeyBtb2RlOiAnZGlzcGxheScgfSkpO1xuICAgIH1cbiAgICBjb25zdCBhY3Rpdml0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpdml0eS1jb250YWluZXInKTtcbiAgICBpZiAoYWN0aXZpdHlDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGFjdGl2aXR5Q29udGFpbmVyLmRhdGFzZXQubW9kZSB8fCAnZGlzcGxheSc7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGFjdGl2aXR5Q29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpdml0eSwgeyBtb2RlOiBtb2RlIH0pKTtcbiAgICB9XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tIFwiLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IGdldExhc3RDb21tZW50cyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb21tZW50c0FwaVwiO1xuaW1wb3J0IENvbW1lbnRJdGVtIGZyb20gXCIuL0NvbW1lbnQvQ29tbWVudEl0ZW1cIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi91dGlscy9yb3V0ZXNcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0xvYWRpbmdcIjtcbmV4cG9ydCBmdW5jdGlvbiBBY3Rpdml0eSh7IG1vZGUgfSkge1xuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRDb21tZW50cygpO1xuICAgIH0sIFtdKTtcbiAgICBmdW5jdGlvbiBsb2FkQ29tbWVudHMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgICAgICBkYXRhID0geWllbGQgZ2V0TGFzdENvbW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGNvbW1lbnRzOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIG51bGwpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29tbWVudHMgJiYgY29tbWVudHMubGVuZ3RoID4gMCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi51bCwgeyB2YXJpYW50czogY29udGFpbmVyLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgY2xhc3NOYW1lOiAnY29tbWVudHMtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2xhc3MgYm94IGJnLWRhcmstZ3JleS1zZWNvbmRhcnknIH0sIGNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1lbnRJdGVtLCB7IG1vZGU6IG1vZGUsIGNvbW1lbnQ6IGNvbW1lbnQsIGluZGV4OiBpbmRleCwga2V5OiBgY29tbWVudC0ke2luZGV4fWAgfSkpKSkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogYHNtYWxsLXRpdGxlYCB9LCBcIlRoZXJlJ3Mgbm8gY29tbWVudCB0byBzaG93XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiWW91IGNhbiBhZGQgY29tbWVudHMgYWZ0ZXIgYW5zd2VyaW5nIHF1ZXN0aW9ucyAhXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLlFVSVosIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiB9LCBcIlBsYXlcIikpKSkpKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSBcIi4vTWFya2Rvd25SZW5kZXJlclwiO1xuaW1wb3J0IHVzZVJheXNBbmltYXRpb24gZnJvbSBcIi4uL2hvb2svUmF5c0FuaW1hdGlvblwiO1xuaW1wb3J0IHsgY29udGFpbmVyLCBpdGVtIH0gZnJvbSBcIi4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5mdW5jdGlvbiBDaG9pY2VzKHsgbW9kZSwgcXVlc3Rpb24sIGFuc3dlcnMsIHNldEFuc3dlcnMgfSkge1xuICAgIHVzZVJheXNBbmltYXRpb24ocXVlc3Rpb24sIG1vZGUpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUFuc3dlcnNDaGFuZ2UoYW5zd2VySWQpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIXNldEFuc3dlcnMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldEFuc3dlcnMocHJldlNlbGVjdGVkID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbi5udW1iZXJPZkNvcnJlY3RDaG9pY2VzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFthbnN3ZXJJZF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldlNlbGVjdGVkLmluY2x1ZGVzKGFuc3dlcklkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldlNlbGVjdGVkLmZpbHRlcihpZCA9PiBpZCAhPT0gYW5zd2VySWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2U2VsZWN0ZWQsIGFuc3dlcklkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja0Fuc3dlclZhbGlkaXR5KGFuc3dlcklkKSB7XG4gICAgICAgIGlmICghcXVlc3Rpb24uY29ycmVjdENob2ljZXMpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBxdWVzdGlvbi5jb3JyZWN0Q2hvaWNlcy5pbmNsdWRlcyhhbnN3ZXJJZCk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtb3Rpb24udWwsIHsgdmFyaWFudHM6IGNvbnRhaW5lciwgaW5pdGlhbDogXCJoaWRkZW5cIiwgYW5pbWF0ZTogXCJ2aXNpYmxlXCIsIGNsYXNzTmFtZTogXCJjaG9pY2VzLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdhcC04XCIgfSwgcXVlc3Rpb24uY2hvaWNlcy5tYXAoKGNob2ljZSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi5saSwgeyB2YXJpYW50czogaXRlbSwga2V5OiBgY2hvaWNlLSR7Y2hvaWNlLmlkfWAsIGNsYXNzTmFtZTogYGNob2ljZS1vcHRpb24gZ2xhc3NgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiLCB7IGNsYXNzTmFtZTogYGNoZWNrYm94LWdyb3VwYCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogYGNob2ljZS0ke2luZGV4fWAsIG5hbWU6IFwiY2hvaWNlXCIsIHZhbHVlOiBjaG9pY2UuaWQsIGNoZWNrZWQ6IGFuc3dlcnMuaW5jbHVkZXMoY2hvaWNlLmlkKSwgb25DaGFuZ2U6ICgpID0+IGhhbmRsZUFuc3dlcnNDaGFuZ2UoY2hvaWNlLmlkKSwgY2xhc3NOYW1lOiBgY2hlY2tib3gtaW5wdXQgJHtxdWVzdGlvbi5jb3JyZWN0Q2hvaWNlcyAmJiAoY2hlY2tBbnN3ZXJWYWxpZGl0eShjaG9pY2UuaWQpID8gXCJjb3JyZWN0XCIgOiBcImluY29ycmVjdFwiKX1gIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImNoZWNrYm94LXRpbGUgYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiY2hlY2tib3gtbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IGNob2ljZS5jb250ZW50IH0pKSkpKSkpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hvaWNlcztcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVsZXRlQ29tbWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tZW50c0FwaVwiO1xuZnVuY3Rpb24gQ29tbWVudFVwZGF0ZSh7IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbiwgY29tbWVudCwgb25Db21tZW50RGVsZXRlLCBvbkNhbmNlbCB9KSB7XG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlZENvbW1lbnQgPSB5aWVsZCBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVzdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cyA9IHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cy5maWx0ZXIoYyA9PiBjLmlkICE9PSBjb21tZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24odXBkYXRlZFF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Db21tZW50RGVsZXRlKGRlbGV0ZWRDb21tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiRG8geW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgY29tbWVudCA/XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2J1dHRvbnMtY29udGFpbmVyJyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeVwiLCBvbkNsaWNrOiBvbkNhbmNlbCwgZGlzYWJsZWQ6IGlzRGVsZXRpbmcgfSwgXCJDYW5jZWxcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLXJlZFwiLCBkaXNhYmxlZDogaXNEZWxldGluZywgb25DbGljazogaGFuZGxlU3VibWl0IH0sIGlzRGVsZXRpbmcgPyAnRGVsZXRpbmcnIDogJ0RlbGV0ZScpKSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRVcGRhdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSBcIi4uL01hcmtkb3duUmVuZGVyZXJcIjtcbmltcG9ydCBDb21tZW50VXBkYXRlIGZyb20gXCIuL0NvbW1lbnRVcGRhdGVcIjtcbmltcG9ydCBDb21tZW50RGVsZXRlIGZyb20gXCIuL0NvbW1lbnREZWxldGVcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IFByb2ZpbGVQaWN0dXJlIGZyb20gXCIuLi9Qcm9maWxlUGljdHVyZVwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlc1wiO1xuaW1wb3J0IHsgaXRlbSB9IGZyb20gXCIuLi8uLi9tb3Rpb24vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuZnVuY3Rpb24gQ29tbWVudEl0ZW0oeyBjb21tZW50LCBpbmRleCwgc2V0UXVlc3Rpb24sIHF1ZXN0aW9uLCBtb2RlLCB9KSB7XG4gICAgY29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBmb3JtYXR0ZWREYXRlLCBmb3JtYXR0ZWRUaW1lIH0gPSBmb3JtYXREYXRlKGNvbW1lbnQuY3JlYXRpb25EYXRlKTtcbiAgICBjb25zdCB7IGlzQXV0aG9yLCBpc0FkbWluIH0gPSB1c2VBdXRoKCk7XG4gICAgY29uc3QgdXNlckNhbkVkaXQgPSBpc0F1dGhvcihjb21tZW50LmF1dGhvci5pZCkgfHwgaXNBZG1pbigpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbW1lbnRVcGRhdGVkKCkge1xuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVDb21tZW50RGVsZXRlZCgpIHtcbiAgICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0RWRpdGluZygpIHtcbiAgICAgICAgc2V0SXNFZGl0aW5nKHRydWUpO1xuICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnREZWxldGluZygpIHtcbiAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcbiAgICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRlT2JqZWN0LmRhdGUpO1xuICAgICAgICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZTogYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YCxcbiAgICAgICAgICAgIGZvcm1hdHRlZFRpbWU6IGAke2hvdXJzfToke21pbnV0ZXN9YFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIGluZGV4ICE9PSAwICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoclwiLCB7IGNsYXNzTmFtZTogXCJoLVsycHhdIGJnLXdoaXRlLzEwIGJvcmRlci0wXCIgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmxpLCB7IHZhcmlhbnRzOiBpdGVtLCBjbGFzc05hbWU6IGBweS04IGZpcnN0OnB0LTAgbGFzdDpwYi0wIGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeWAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29tbWVudC1jb250YWluZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1zZWNvbmRhcnlcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29tbWVudC1oZWFkZXItY29udGFpbmVyIGZsZXggZmxleC13cmFwIGdhcC00IGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwidXNlci1pbmZvcy1jb250YWluZXIgZmxleCBmbGV4LXdyYXAgZ2FwLXNwYWNpbmctc2Vjb25kYXJ5IGl0ZW1zLWNlbnRlciBncm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUHJvZmlsZVBpY3R1cmUsIHsgaW1hZ2U6IGNvbW1lbnQuYXV0aG9yLmltYWdlIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgZ2FwLTJgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgY29tbWVudC5hdXRob3IudXNlcm5hbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZGF0ZS1jb250YWluZXIgZmxleCBnYXAtNCAgaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6ICdmbGV4IGl0ZW1zLWNlbnRlciBtdXRlZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zIG1yLTIgbWQtMTRcIiB9LCBcImNhbGVuZGFyX3RvZGF5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgZm9ybWF0dGVkRGF0ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogJ2ZsZXggaXRlbXMtY2VudGVyIG11dGVkJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnMgbXItMiBtZC0xNFwiIH0sIFwic2NoZWR1bGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBmb3JtYXR0ZWRUaW1lKSkpKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXIgZ3Jvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyQ2FuRWRpdCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uXCIsIG9uQ2xpY2s6ICgpID0+IGhhbmRsZVN0YXJ0RWRpdGluZygpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJlZGl0XCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uXCIsIG9uQ2xpY2s6ICgpID0+IGhhbmRsZVN0YXJ0RGVsZXRpbmcoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiZGVsZXRlXCIpKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZSA9PT0gJ2Rpc3BsYXknICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogYCR7Uk9VVEVTLlFVRVNUSU9OfS8ke2NvbW1lbnQucXVlc3Rpb25JZH1gLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwidmlzaWJpbGl0eVwiKSkpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29tbWVudC1ib2R5LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd25SZW5kZXJlciwgeyBjb250ZW50OiBjb21tZW50LmNvbnRlbnQgfSkpKSxcbiAgICAgICAgICAgIGlzRWRpdGluZyAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudFVwZGF0ZSwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIHNldFF1ZXN0aW9uOiBzZXRRdWVzdGlvbiwgY29tbWVudDogY29tbWVudCwgb25Db21tZW50VXBkYXRlZDogaGFuZGxlQ29tbWVudFVwZGF0ZWQsIG9uQ2FuY2VsOiAoKSA9PiBzZXRJc0VkaXRpbmcoZmFsc2UpIH0pLFxuICAgICAgICAgICAgaXNEZWxldGluZyAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudERlbGV0ZSwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIHNldFF1ZXN0aW9uOiBzZXRRdWVzdGlvbiwgY29tbWVudDogY29tbWVudCwgb25Db21tZW50RGVsZXRlOiBoYW5kbGVDb21tZW50RGVsZXRlZCwgb25DYW5jZWw6ICgpID0+IHNldElzRGVsZXRpbmcoZmFsc2UpIH0pKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEl0ZW07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGFkZENvbW1lbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbWVudHNBcGlcIjtcbmltcG9ydCBDb21tZW50SXRlbSBmcm9tIFwiLi9Db21tZW50SXRlbVwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVzXCI7XG5pbXBvcnQgTWFya2Rvd25JbmZvcyBmcm9tIFwiLi4vTWFya2Rvd25JbmZvc1wiO1xuZnVuY3Rpb24gQ29tbWVudExpc3QoeyBxdWVzdGlvbiwgc2V0UXVlc3Rpb24gfSkge1xuICAgIGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFttYXJrZG93bkluZm9zLCBzZXRNYXJrZG93bkluZm9zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQXV0aCgpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgICAgIHNldFN1Y2Nlc3MoZmFsc2UpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDb21tZW50ID0geWllbGQgYWRkQ29tbWVudChxdWVzdGlvbi5pZCwgY29tbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0NvbW1lbnQgJiYgbmV3Q29tbWVudC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkUXVlc3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBxdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMucHVzaChuZXdDb21tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24odXBkYXRlZFF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29tbWVudCgnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBhZGQgY29tbWVudDogJyArIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoJ0ZhaWxlZCB0byBhZGQgY29tbWVudDogJyArIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvd0luZm9zKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRNYXJrZG93bkluZm9zKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcbiAgICB9XG4gICAgO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLXNlcGFyYXRvci1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiAndGl0bGUnIH0sIFwiQ29tbWVudHNcIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6ICdjb21tZW50cy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBnbGFzcyBib3ggYmctZGFyay1ncmV5LXNlY29uZGFyeScgfSwgcXVlc3Rpb24uY29tbWVudHMubGVuZ3RoID4gMCA/IChxdWVzdGlvbi5jb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50SXRlbSwgeyBjb21tZW50OiBjb21tZW50LCBpbmRleDogaW5kZXgsIHF1ZXN0aW9uOiBxdWVzdGlvbiwgc2V0UXVlc3Rpb246IHNldFF1ZXN0aW9uLCBrZXk6IGBjb21tZW50LSR7aW5kZXh9YCB9KSkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlRoZXJlJ3Mgbm8gZGlzY3Vzc2lvbiBhYm91dCB0aGlzIHF1ZXN0aW9uLi4uXCIpKSksXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCgpID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250YWluZXIgZ2FwLTQgZ2xhc3MgYm94IGJnLWRhcmstZ3JleS1zZWNvbmRhcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBcInNtYWxsLXRpdGxlXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiY2hhdF9idWJibGVcIiksXG4gICAgICAgICAgICAgICAgXCJKb2luIHRoZSBjb252ZXJzYXRpb25cIiksXG4gICAgICAgICAgICBzdWNjZXNzICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIH0sIFwiQ29tbWVudCBhZGQgd2l0aCBzdWNjZXNzICFcIiksXG4gICAgICAgICAgICBlcnJvciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiIH0sIGVycm9yKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cCB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiLCB2YWx1ZTogY29tbWVudCwgb25DaGFuZ2U6IChlKSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKSwgcGxhY2Vob2xkZXI6IFwiWW91ciBjb21tZW50Li4uXCIsIHJvd3M6IDQsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tYm90dG9tLWNvbnRhaW5lciBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGZsZXggZ2FwLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGBmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTUwYCwgb25DbGljazogaGFuZGxlU2hvd0luZm9zIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCIvaW1hZ2VzL2xvZ29zL21hcmtkb3duLWxvZ28ucG5nXCIsIGFsdDogXCJNYXJrZG93biBsb2dvXCIsIGNsYXNzTmFtZTogXCJoLTUgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTWFya2Rvd24gaW5mb3NcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyIGdyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiwgZGlzYWJsZWQ6IGlzU3VibWl0dGluZyB9LCBpc1N1Ym1pdHRpbmcgPyAnU2VuZGluZycgOiAnU2VuZCcpKSkpLFxuICAgICAgICAgICAgbWFya2Rvd25JbmZvcyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duSW5mb3MsIG51bGwpKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnbGFzcyBib3ggZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6ICdzbWFsbC10aXRsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImNoYXRfYnViYmxlXCIpLFxuICAgICAgICAgICAgICAgICAgICBcIldhbm5hIGpvaW4gdGhlIGNvbnZlcnNhdGlvbiA/XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiUGxlYXNlIGxvZ2luIG9yIHJlZ2lzdGVyICFcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuTE9HSU4sIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXRlcnRpYXJ5XCIgfSwgXCJMb2dpblwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5SRUdJU1RFUiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIH0sIFwiUmVnaXN0ZXJcIikpKSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRMaXN0O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1cGRhdGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1lbnRzQXBpXCI7XG5pbXBvcnQgTWFya2Rvd25JbmZvcyBmcm9tIFwiLi4vTWFya2Rvd25JbmZvc1wiO1xuZnVuY3Rpb24gQ29tbWVudFVwZGF0ZSh7IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbiwgY29tbWVudCwgb25Db21tZW50VXBkYXRlZCwgb25DYW5jZWwgfSkge1xuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbmV3Q29tbWVudCwgc2V0TmV3Q29tbWVudF0gPSB1c2VTdGF0ZShjb21tZW50LmNvbnRlbnQpO1xuICAgIGNvbnN0IFttYXJrZG93bkluZm9zLCBzZXRNYXJrZG93bkluZm9zXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDb21tZW50ID0geWllbGQgdXBkYXRlQ29tbWVudChjb21tZW50LmlkLCBuZXdDb21tZW50KTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZENvbW1lbnQgJiYgdXBkYXRlZENvbW1lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbWVudEluZGV4ID0gdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzLmZpbmRJbmRleChjID0+IGMuaWQgPT09IHVwZGF0ZWRDb21tZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnRJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50c1tjb21tZW50SW5kZXhdID0gdXBkYXRlZENvbW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMucHVzaCh1cGRhdGVkQ29tbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24odXBkYXRlZFF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Db21tZW50VXBkYXRlZCh1cGRhdGVkQ29tbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU2hvd0luZm9zKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRNYXJrZG93bkluZm9zKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcbiAgICB9XG4gICAgO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRhaW5lclwiIH0sXG4gICAgICAgIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgfSwgZXJyb3IpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG9uU3VibWl0OiBoYW5kbGVTdWJtaXQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cCAgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBjbGFzc05hbWU6IFwiZm9ybVwiLCB2YWx1ZTogbmV3Q29tbWVudCwgb25DaGFuZ2U6IChlKSA9PiBzZXROZXdDb21tZW50KGUudGFyZ2V0LnZhbHVlKSwgcm93czogMywgcmVxdWlyZWQ6IHRydWUgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWJvdHRvbS1jb250YWluZXIgZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBmbGV4IGdhcC00XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogYGZsZXggaXRlbXMtY2VudGVyIG9wYWNpdHktNTBgLCBvbkNsaWNrOiBoYW5kbGVTaG93SW5mb3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiL2ltYWdlcy9sb2dvcy9tYXJrZG93bi1sb2dvLnBuZ1wiLCBhbHQ6IFwiTWFya2Rvd24gbG9nb1wiLCBjbGFzc05hbWU6IFwiaC01IG1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTWFya2Rvd24gaW5mb3NcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdidXR0b25zLWNvbnRhaW5lciBncm93JyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidG4tdGVydGlhcnlcIiwgb25DbGljazogb25DYW5jZWwsIGRpc2FibGVkOiBpc1N1Ym1pdHRpbmcgfSwgXCJDYW5jZWxcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIsIGRpc2FibGVkOiBpc1N1Ym1pdHRpbmcgfSwgaXNTdWJtaXR0aW5nID8gJ1VwZGF0aW5nJyA6ICdTYXZlJykpKSksXG4gICAgICAgIG1hcmtkb3duSW5mb3MgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93bkluZm9zLCBudWxsKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFVwZGF0ZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVlc3Rpb25Db250ZW50IGZyb20gXCIuL1F1ZXN0aW9uQ29udGVudFwiO1xuaW1wb3J0IENob2ljZXMgZnJvbSBcIi4vQ2hvaWNlc1wiO1xuaW1wb3J0IHsgaXRlbSB9IGZyb20gXCIuLi9tb3Rpb24vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgZGVtb0Fuc3dlcnMxLCBkZW1vUXVlc3Rpb24xIH0gZnJvbSBcIi4vRGVtby9kZW1vUXVlc3Rpb24xXCI7XG5pbXBvcnQgeyBkZW1vQW5zd2VyczIsIGRlbW9RdWVzdGlvbjIgfSBmcm9tIFwiLi9EZW1vL2RlbW9RdWVzdGlvbjJcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzMywgZGVtb1F1ZXN0aW9uMyB9IGZyb20gXCIuL0RlbW8vZGVtb1F1ZXN0aW9uM1wiO1xuaW1wb3J0IHsgZGVtb0Fuc3dlcnM0LCBkZW1vUXVlc3Rpb240IH0gZnJvbSBcIi4vRGVtby9kZW1vUXVlc3Rpb240XCI7XG5pbXBvcnQgeyBkZW1vQW5zd2VyczUsIGRlbW9RdWVzdGlvbjUgfSBmcm9tIFwiLi9EZW1vL2RlbW9RdWVzdGlvbjVcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbmV4cG9ydCBmdW5jdGlvbiBEZW1vKHsgbW9kZSB9KSB7XG4gICAgY29uc3QgcXVlc3Rpb25zRGF0YSA9IFtcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uMSwgYW5zd2VyczogZGVtb0Fuc3dlcnMxIH0sXG4gICAgICAgIHsgcXVlc3Rpb246IGRlbW9RdWVzdGlvbjIsIGFuc3dlcnM6IGRlbW9BbnN3ZXJzMiB9LFxuICAgICAgICB7IHF1ZXN0aW9uOiBkZW1vUXVlc3Rpb24zLCBhbnN3ZXJzOiBkZW1vQW5zd2VyczMgfSxcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uNCwgYW5zd2VyczogZGVtb0Fuc3dlcnM0IH0sXG4gICAgICAgIHsgcXVlc3Rpb246IGRlbW9RdWVzdGlvbjUsIGFuc3dlcnM6IGRlbW9BbnN3ZXJzNSB9XG4gICAgXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyLCB7IHNwZWVkOiAxMDAwLCBcbiAgICAgICAgICAgIC8vIHNwYWNlQmV0d2Vlbj17NTB9XG4gICAgICAgICAgICBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDY0MDoge1xuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LCBzbGlkZXNQZXJWaWV3OiAxLCBsb29wOiB0cnVlLCBjZW50ZXJlZFNsaWRlczogdHJ1ZSwgXG4gICAgICAgICAgICAvLyBncmFiQ3Vyc29yPXt0cnVlfVxuICAgICAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgICAgICBkZWxheTogNTAwMCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICB9LCBtb2R1bGVzOiBbQXV0b3BsYXldLCBjbGFzc05hbWU6IGBtYXgtdy1bODAwcHhdIG1sLWF1dG8gbXItYXV0b2AgfSwgcXVlc3Rpb25zRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgeyBrZXk6IGRhdGEucXVlc3Rpb24uaWQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmRpdiwgeyBrZXk6IGRhdGEucXVlc3Rpb24uaWQsIGluaXRpYWw6IFwiaGlkZGVuXCIsIGFuaW1hdGU6IFwidmlzaWJsZVwiLCBleGl0OiBcImhpZGRlblwiLCB2YXJpYW50czogaXRlbSwgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBnYXAtOFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBkYXRhLnF1ZXN0aW9uIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IGRhdGEucXVlc3Rpb24sIGFuc3dlcnM6IGRhdGEuYW5zd2VycyB9KSkpKSkpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgRGVtbztcbiIsImV4cG9ydCBjb25zdCBkZW1vUXVlc3Rpb24xID0ge1xuICAgIFwiaWRcIjogMjc1LFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogNzAxLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSFRNTFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTg2LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiYGBgaHRtbFxcclxcbjxpbnB1dCB0eXBlPVxcXCJjaGVja1xcXCI+XFxyXFxuYGBgXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxODcsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgYGBodG1sXFxyXFxuPGNoZWNrYm94PlxcclxcbmBgYFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTg4LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiYGBgaHRtbFxcclxcbjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuYGBgXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxODksXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgYGBcXHJcXG48Y2hlY2s+XFxyXFxuYGBgXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJjb21tZW50c1wiOiBbXSxcbiAgICBcImNvbnRlbnRcIjogXCJXaGF0IGlzIHRoZSBjb3JyZWN0IEhUTUwgZm9yIGNyZWF0aW5nIGEgY2hlY2tib3ggP1wiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAxLFxuICAgIFwiZXhwbGFuYXRpb25cIjogXCJUbyBjcmVhdGUgYSBjaGVja2JveCBpbiBIVE1MLCB5b3UgdXNlIHRoZSBgPGlucHV0PmAgZWxlbWVudCB3aXRoIGl0cyBgdHlwZWAgYXR0cmlidXRlIHNldCB0byBgXFxcImNoZWNrYm94XFxcImAuXCIsXG4gICAgXCJudW1iZXJPZkNvcnJlY3RDaG9pY2VzXCI6IDEsXG4gICAgXCJjb3JyZWN0Q2hvaWNlc1wiOiBbXG4gICAgICAgIDE4OFxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnMxID0gW1xuICAgIDE4OFxuXTtcbiIsImV4cG9ydCBjb25zdCBkZW1vUXVlc3Rpb24yID0ge1xuICAgIFwiaWRcIjogMjczLFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogNzIxLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ1NTXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJjaG9pY2VzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxNzcsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgYGBjc3NcXHJcXG5wIHtcXHJcXG4gICAgdGV4dC1zdHlsZTogYm9sZDtcXHJcXG59XFxyXFxuYGBgXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxNzgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgYGBjc3NcXHJcXG5wIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcbmBgYFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTc5LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiYGBgY3NzXFxyXFxucCB7XFxyXFxuICBmb250OiBib2xkO1xcclxcbn1cXHJcXG5gYGBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE4MCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcImBgYGNzc1xcclxcbnAge1xcclxcbiAgc3R5bGU6IGJvbGQ7XFxyXFxufVxcclxcbmBgYFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTgxLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiYGBgY3NzXFxyXFxucCB7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5gYGBcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgaXMgdGhlIGNvcnJlY3QgQ1NTIHN5bnRheCBmb3IgbWFraW5nIGFsbCBwYXJhZ3JhcGggZWxlbWVudHMgYm9sZCA/XCIsXG4gICAgXCJkaWZmaWN1bHR5XCI6IDEsXG4gICAgXCJleHBsYW5hdGlvblwiOiBcIlRvIG1ha2UgdGV4dCBib2xkIGluIENTUywgeW91IHVzZSB0aGUgYGZvbnQtd2VpZ2h0YCBwcm9wZXJ0eSB3aXRoIGEgdmFsdWUgb2YgYGJvbGRgLlwiLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAyLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4MVxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnMyID0gW1xuICAgIDE3NyxcbiAgICAxODBcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uMyA9IHtcbiAgICBcImlkXCI6IDI3MixcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcwNCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphdmFTY3JpcHRcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNob2ljZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3MyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIjIwLCAxMFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTc0LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiMjAsIDIwXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxNzUsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCIxMCwgMTBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3NixcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIjIwLCB1bmRlZmluZWRcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgd2lsbCBiZSB0aGUgb3V0cHV0IG9mIHRoZSBmb2xsb3dpbmcgSmF2YVNjcmlwdCBjb2RlP1xcclxcbiAgYGBgamF2YXNjcmlwdFxcclxcbiAgZnVuY3Rpb24gZXhhbXBsZSgpIHtcXHJcXG4gICAgdmFyIHggPSAxMDtcXHJcXG4gICAgaWYgKHRydWUpIHtcXHJcXG4gICAgICB2YXIgeCA9IDIwO1xcclxcbiAgICAgIGNvbnNvbGUubG9nKHgpO1xcclxcbiAgICB9XFxyXFxuICAgIGNvbnNvbGUubG9nKHgpO1xcclxcbiAgfVxcclxcbiAgZXhhbXBsZSgpO1wiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAxLFxuICAgIFwiZXhwbGFuYXRpb25cIjogXCJUaGlzIHF1ZXN0aW9uIHRlc3RzIHVuZGVyc3RhbmRpbmcgb2YgSmF2YVNjcmlwdCB2YXJpYWJsZSBzY29waW5nIHdpdGggYHZhcmAuIFVubGlrZSBgbGV0YCBhbmQgYGNvbnN0YCwgdmFyaWFibGVzIGRlY2xhcmVkIHdpdGggYHZhcmAgYXJlIGZ1bmN0aW9uLXNjb3BlZCwgbm90IGJsb2NrLXNjb3BlZC5cIixcbiAgICBcIm51bWJlck9mQ29ycmVjdENob2ljZXNcIjogMSxcbiAgICBcImNvcnJlY3RDaG9pY2VzXCI6IFtcbiAgICAgICAgMTc0XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBkZW1vQW5zd2VyczMgPSBbXG4gICAgMTc0XG5dO1xuIiwiZXhwb3J0IGNvbnN0IGRlbW9RdWVzdGlvbjQgPSB7XG4gICAgXCJpZFwiOiAyNzksXG4gICAgXCJjYXRlZ29yaWVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiA3MDMsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJQSFBcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNob2ljZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIwMixcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIkNvbnZlcnRzIGFsbCBjaGFyYWN0ZXJzIHRvIHVwcGVyY2FzZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjAzLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiQ29udmVydHMgYWxsIGNoYXJhY3RlcnMgdG8gbG93ZXJjYXNlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAyMDQsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJDYXBpdGFsaXplcyB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA1LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiUmV0dXJucyBcXFwiSEVMTE8gV09STERcXFwiXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJjb21tZW50c1wiOiBbXSxcbiAgICBcImNvbnRlbnRcIjogXCJXaGF0IGRvZXMgdGhpcyBQSFAgZnVuY3Rpb24gZG8/XFxyXFxuYGBgcGhwXFxyXFxuZnVuY3Rpb24gcHJvY2Vzcygkc3RyKSB7XFxyXFxuICAgIHJldHVybiB1Y3dvcmRzKHN0cnRvbG93ZXIoJHN0cikpO1xcclxcbn1cXHJcXG5lY2hvIHByb2Nlc3MoXFxcIkhFTExPIHdvcmxkXFxcIik7XFxyXFxuYGBgXCIsXG4gICAgXCJkaWZmaWN1bHR5XCI6IDIsXG4gICAgXCJleHBsYW5hdGlvblwiOiBcIlRoaXMgZnVuY3Rpb24gcHJvY2Vzc2VzIGEgc3RyaW5nIGluIHR3byBzdGVwczogRmlyc3QsIGl0IGNvbnZlcnRzIHRoZSBlbnRpcmUgc3RyaW5nIHRvIGxvd2VyY2FzZSB1c2luZyBgc3RydG9sb3dlcigpYC5cIixcbiAgICBcIm51bWJlck9mQ29ycmVjdENob2ljZXNcIjogMSxcbiAgICBcImNvcnJlY3RDaG9pY2VzXCI6IFtcbiAgICAgICAgMjA0XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBkZW1vQW5zd2VyczQgPSBbXG4gICAgMjAyXG5dO1xuIiwiZXhwb3J0IGNvbnN0IGRlbW9RdWVzdGlvbjUgPSB7XG4gICAgXCJpZFwiOiAyODAsXG4gICAgXCJjYXRlZ29yaWVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiA3MjMsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJTUUxcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNob2ljZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIwNixcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlJldHVybnMgdGhlIDUgY2hlYXBlc3QgcHJvZHVjdHNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIwNyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlJldHVybnMgdGhlIDUgbW9zdCBleHBlbnNpdmVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIwOCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlJldHVybnMgNSByYW5kb20gcHJvZHVjdHNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIwOSxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlJldHVybnMgcHJvZHVjdHMgd2l0aCBwcmljZXMgaGlnaGVyIHRoYW4gNVwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY29tbWVudHNcIjogW10sXG4gICAgXCJjb250ZW50XCI6IFwiV2hhdCBkb2VzIHRoaXMgU1FMIHF1ZXJ5IGRvP1xcclxcbmBgYHNxbFxcclxcblNFTEVDVCBuYW1lLCBwcmljZSBcXHJcXG5GUk9NIHByb2R1Y3RzIFxcclxcbk9SREVSIEJZIHByaWNlIERFU0MgXFxyXFxuTElNSVQgNTtcXHJcXG5gYGBcIixcbiAgICBcImRpZmZpY3VsdHlcIjogMSxcbiAgICBcImV4cGxhbmF0aW9uXCI6IFwiVGhpcyBTUUwgcXVlcnkgc2VsZWN0cyB0aGUgYG5hbWVgIGFuZCBgcHJpY2VgIGNvbHVtbnMgZnJvbSB0aGUgYHByb2R1Y3RzYCB0YWJsZSwgb3JkZXJzIHRoZSByZXN1bHRzIGJ5IHByaWNlIGluIGRlc2NlbmRpbmcgb3JkZXIgKGhpZ2hlc3QgdG8gbG93ZXN0KSwgYW5kIGxpbWl0cyB0aGUgb3V0cHV0IHRvIG9ubHkgNSByb3dzLlwiLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAxLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAyMDdcbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGRlbW9BbnN3ZXJzNSA9IFtcbiAgICAyMDdcbl07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFya2Rvd25SZW5kZXJlciB9IGZyb20gXCIuL01hcmtkb3duUmVuZGVyZXJcIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmZ1bmN0aW9uIEV4cGxhbmF0aW9uKHsgcXVlc3Rpb24gfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtb3Rpb24uZGl2LCB7IHZhcmlhbnRzOiBpdGVtLCBjbGFzc05hbWU6IGBxdWVzdGlvbi1ib3R0b20tY29udGFpbmVyIG10LTQgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1zZWNvbmRhcnlgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IGNsYXNzTmFtZTogYHRleHQtbGcgZm9udC1zZW1pYm9sZGAgfSwgXCJFeHBsYW5hdGlvblwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IHF1ZXN0aW9uLmV4cGxhbmF0aW9uIH0pKSk7XG59XG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBJbWFnZSh7IGltYWdlIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvdXBsb2Fkcy9pbWFnZXMvcXVlc3Rpb25zLyR7aW1hZ2V9YCwgY2xhc3NOYW1lOiBgbXQtNCBtYXgtdy1mdWxsIHJvdW5kZWQtcmFkaXVzLXNlY29uZGFyeSBteC1hdXRvYCwgYWx0OiBcIlwiIH0pKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBJbWFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vdXRpbHMvcm91dGVzXCI7XG5mdW5jdGlvbiBMaW1pdFJlYWNoZWQoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwiYmlnLXRpdGxlIGdyb3dcIiB9LCBcIkxpbWl0IHJlYWNoZWQgIVwiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2xhc3MgYm94IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgc21hbGwtdGl0bGVgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJ3YXJuaW5nXCIpLFxuICAgICAgICAgICAgICAgICAgICBcIllvdSd2ZSByZWFjaGVkIHRoZSBxdWVzdGlvbiBsaW1pdCBmb3IgdG9kYXlcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJQbGVhc2UgbG9naW4gb3IgcmVnaXN0ZXIgdG8gY29udGludWUgdG8gcGxheS5cIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuTE9HSU4sIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXRlcnRpYXJ5XCIgfSwgXCJMb2dpblwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5SRUdJU1RFUiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIH0sIFwiUmVnaXN0ZXJcIikpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgTGltaXRSZWFjaGVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIExvYWRpbmcoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsKSk7XG59XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIE1hcmtkb3duSW5mb3MoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IGBtYXJrZG93bi1pbmZvIGJveCBiZy12ZXJ5LWRhcmstZ3JleS1wcmltYXJ5IHJvdW5kZWQtcmFkaXVzLXNlY29uZGFyeWAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiYCAuLi4gYFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiSW5saW5lIGNvZGVcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiYGBgamF2YXNjcmlwdCAuLi4gYGBgXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJDb2RlIGJsb2NrXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcIiogLi4uICpcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGBtdXRlZCBtbC0yYCB9LCBcIkl0YWxpY1wiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCIqKiAuLi4gKipcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGBtdXRlZCBtbC0yYCB9LCBcIkJvbGRcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiWyAuLi4gXShodHRwczovL3VybC5jb20pXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJMaW5rXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcIi0gLi4uXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJVbm9yZGVyZWQgbGlzdFwiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCIxLiAuLi5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGBtdXRlZCBtbC0yYCB9LCBcIk9yZGVyZWQgbGlzdFwiKSkpKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bkluZm9zO1xuIiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBQcmlzbSBhcyBTeW50YXhIaWdobGlnaHRlciB9IGZyb20gXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJcIjtcbmltcG9ydCB7IG9rYWlkaWEgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL2Rpc3QvY2pzL3N0eWxlcy9wcmlzbVwiO1xuZXhwb3J0IGZ1bmN0aW9uIE1hcmtkb3duUmVuZGVyZXIoeyBjb250ZW50IH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RNYXJrZG93biwgeyBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBjb2RlKF9hKSB7XG4gICAgICAgICAgICAgICAgdmFyIHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgbm9kZSwgc3R5bGUsIHJlZiB9ID0gX2EsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwibm9kZVwiLCBcInN0eWxlXCIsIFwicmVmXCJdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IC9sYW5ndWFnZS0oXFx3KykvLmV4ZWMoY2xhc3NOYW1lIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGVTdHJpbmcgPSBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuLmpvaW4oXCJcIikgOiBTdHJpbmcoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFN5bnRheEhpZ2hsaWdodGVyLCBPYmplY3QuYXNzaWduKHsgbGFuZ3VhZ2U6IG1hdGNoWzFdLCBQcmVUYWc6IFwiZGl2XCIsIHN0eWxlOiBva2FpZGlhLCBjbGFzc05hbWU6IFwiY29kZS13cmFwcGVyXCIgfSwgcmVzdCksIGNvZGVTdHJpbmcucmVwbGFjZSgvXFxuJC8sIFwiXCIpKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgT2JqZWN0LmFzc2lnbih7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sIHJlc3QpLCBjaGlsZHJlbikpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSB9LCBjb250ZW50KSk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gUHJvZmlsZVBpY3R1cmUoeyBpbWFnZSB9KSB7XG4gICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZVxuICAgICAgICA/IGAvdXBsb2Fkcy9pbWFnZXMvdXNlcnMvJHtpbWFnZX1gXG4gICAgICAgIDogYC9pbWFnZXMvbG9nb3MvcHJvZmlsZS1waWN0dXJlLnBuZ2A7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBgYXNwZWN0LXNxdWFyZSByb3VuZGVkLWZ1bGwgdy0xMiB4bDp3LTEyIG9iamVjdC1jb3ZlciBib3JkZXItbGlnaHQtZ3JleS1zZWNvbmRhcnkgYm9yZGVyLTJgLCBzcmM6IGltYWdlU3JjLCBhbHQ6IFwiUHJvZmlsZSBwaWN0dXJlXCIgfSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBpY3R1cmU7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tUXVlc3Rpb24sIGdldFF1ZXN0aW9uLCBzdWJtaXRBbnN3ZXJzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3F1ZXN0aW9uc0FwaVwiO1xuaW1wb3J0IENob2ljZXMgZnJvbSBcIi4vQ2hvaWNlc1wiO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuL0NvbW1lbnQvQ29tbWVudExpc3RcIjtcbmltcG9ydCBMaW1pdFJlYWNoZWQgZnJvbSBcIi4vTGltaXRSZWFjaGVkXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi9Mb2FkaW5nXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9TaWRlYmFyXCI7XG5pbXBvcnQgUXVlc3Rpb25Ob3RGb3VuZCBmcm9tIFwiLi9RdWVzdGlvbk5vdEZvdW5kXCI7XG5pbXBvcnQgUXVlc3Rpb25Db250ZW50IGZyb20gXCIuL1F1ZXN0aW9uQ29udGVudFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5mdW5jdGlvbiBRdWVzdGlvbih7IG1vZGUsIHF1ZXN0aW9uSWQsIHNob3dDb21tZW50cyB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xpbWl0UmVhY2hlZCwgc2V0TGltaXRSZWFjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbd3JhcCwgc2V0V3JhcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2cocXVlc3Rpb24pXG4gICAgfSwgW3F1ZXN0aW9uXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZFF1ZXN0aW9uKCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1aXpDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpei1jb250YWluZXInKTtcbiAgICAgICAgaWYgKHF1aXpDb250YWluZXIpIHtcbiAgICAgICAgICAgIGlmICh3cmFwKSB7XG4gICAgICAgICAgICAgICAgcXVpekNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWl6Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dyYXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt3cmFwXSk7XG4gICAgZnVuY3Rpb24gbG9hZFF1ZXN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEFuc3dlcnMoW10pO1xuICAgICAgICAgICAgY29uc3QgdXJsRmlsdGVycyA9IHNlYXJjaEZvclBhcmFtcygpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2Rpc3BsYXknICYmIHF1ZXN0aW9uSWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB5aWVsZCBnZXRRdWVzdGlvbihxdWVzdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB5aWVsZCBnZXRSYW5kb21RdWVzdGlvbih1cmxGaWx0ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCdsaW1pdFJlYWNoZWQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGltaXRSZWFjaGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdpZCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbihkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHF1ZXN0aW9uOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2VhcmNoRm9yUGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCB1cmxGaWx0ZXJzID0ge307XG4gICAgICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzKCdkaWZmaWN1bHR5JykpIHtcbiAgICAgICAgICAgIHVybEZpbHRlcnMuZGlmZmljdWx0eSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2RpZmZpY3VsdHknKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoUGFyYW1zLmhhcygnY2F0ZWdvcnlbXScpKSB7XG4gICAgICAgICAgICB1cmxGaWx0ZXJzLmNhdGVnb3JpZXMgPSBzZWFyY2hQYXJhbXMuZ2V0QWxsKCdjYXRlZ29yeVtdJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybEZpbHRlcnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZU5leHRRdWVzdGlvbigpIHtcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVdyYXAoKSB7XG4gICAgICAgIHNldFdyYXAod3JhcCA9PiAhd3JhcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgc3VibWl0QW5zd2VycyhxdWVzdGlvbiA9PT0gbnVsbCB8fCBxdWVzdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcXVlc3Rpb24uaWQsIGFuc3dlcnMpO1xuICAgICAgICAgICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHF1ZXN0aW9uKSwgeyBjb3JyZWN0Q2hvaWNlczogcmVzdWx0LmNvcnJlY3RDaG9pY2VzLCBpc01hdGNoOiByZXN1bHQuaXNNYXRjaCB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBhbnN3ZXJzIDogJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGxpbWl0UmVhY2hlZClcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGltaXRSZWFjaGVkLCBudWxsKTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCk7XG4gICAgaWYgKCFxdWVzdGlvbilcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Ob3RGb3VuZCwgbnVsbCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLThcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGVQcmVzZW5jZSwgeyBtb2RlOiAnd2FpdCcsIG9uRXhpdENvbXBsZXRlOiAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgbG9hZFF1ZXN0aW9uKCk7XG4gICAgICAgICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgIH0pIH0sIHZpc2libGUgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmRpdiwgeyBrZXk6IHF1ZXN0aW9uLmlkLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgZXhpdDogXCJoaWRkZW5cIiwgdmFyaWFudHM6IGl0ZW0sIGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgIG1vZGUgPT09ICdnYW1lJyAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZWJhciwgeyBvbk5leHQ6IGhhbmRsZU5leHRRdWVzdGlvbiwgb25XcmFwOiBoYW5kbGVUb2dnbGVXcmFwLCB3cmFwOiB3cmFwLCBpc0xvYWRpbmc6IGxvYWRpbmcgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLThcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXJzOiBhbnN3ZXJzLCBzZXRBbnN3ZXJzOiBzZXRBbnN3ZXJzIH0pLFxuICAgICAgICAgICAgICAgIG1vZGUgPT09ICdnYW1lJyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2J1dHRvbnMtY29udGFpbmVyJyB9LCBxdWVzdGlvbi5jb3JyZWN0Q2hvaWNlcyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeWAsIG9uQ2xpY2s6IGhhbmRsZU5leHRRdWVzdGlvbiB9LCBcIk5leHQgcXVlc3Rpb25cIikpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6ICdidXR0b24gYnV0dG9uLXRlcnRpYXJ5Jywgb25DbGljazogaGFuZGxlU3VibWl0IH0sIFwiVmFsaWRhdGVcIikpKSkpKSkpLFxuICAgICAgICBxdWVzdGlvbi5jb3JyZWN0Q2hvaWNlcyAmJiBzaG93Q29tbWVudHMgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudExpc3QsIHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbjogc2V0UXVlc3Rpb24gfSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSBcIi4vTWFya2Rvd25SZW5kZXJlclwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCIuL0ltYWdlXCI7XG5pbXBvcnQgRXhwbGFuYXRpb24gZnJvbSBcIi4vRXhwbGFuYXRpb25cIjtcbmZ1bmN0aW9uIFF1ZXN0aW9uQ29udGVudCh7IHF1ZXN0aW9uIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2xhc3MgYm94XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJxdWVzdGlvbi1oZWFkZXItY29udGFpbmVyIGZsZXggZ2FwLTgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogYHRhZ3MtY29udGFpbmVyIGdyb3ctMWAgfSwgcXVlc3Rpb24uY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogYGNhdGVnb3J5LSR7aW5kZXh9YCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgdGFnIHRhZy1zbWFsbGAgfSwgY2F0ZWdvcnkubmFtZSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggaXRlbXMtZW5kIGdhcC0xYCB9LCBBcnJheSgzKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHRDbGFzcyA9IGluZGV4ID09PSAwID8gJ2gtMycgOiBpbmRleCA9PT0gMSA/ICdoLTQnIDogJ2gtNSc7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eUNsYXNzID0gaW5kZXggPCAocXVlc3Rpb24gPT09IG51bGwgfHwgcXVlc3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHF1ZXN0aW9uLmRpZmZpY3VsdHkpID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJztcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgcm91bmRlZC1zbSB3LTEuNSBiZy13aGl0ZS83NSAke2hlaWdodENsYXNzfSAke29wYWNpdHlDbGFzc31gLCBrZXk6IGluZGV4IH0pKTtcbiAgICAgICAgICAgIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBxdWVzdGlvbi1jb250ZW50LWNvbnRhaW5lciBtdC00IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctc2Vjb25kYXJ5YCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IHF1ZXN0aW9uLmNvbnRlbnQgfSkpLFxuICAgICAgICBxdWVzdGlvbi5udW1iZXJPZkNvcnJlY3RDaG9pY2VzID4gMSAmJlxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6ICdvcGFjaXR5LTUwIHRleHQtc20gbXQtNCcgfSwgXCJNdWx0aXBsZSBjaG9pY2VzIHBvc3NpYmxlLlwiKSxcbiAgICAgICAgcXVlc3Rpb24uaW1hZ2UgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChJbWFnZSwgeyBpbWFnZTogcXVlc3Rpb24uaW1hZ2UgfSksXG4gICAgICAgIHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXhwbGFuYXRpb24sIHsgcXVlc3Rpb246IHF1ZXN0aW9uIH0pKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbkNvbnRlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uL3V0aWxzL3JvdXRlc1wiO1xuZnVuY3Rpb24gUXVlc3Rpb25Ob3RGb3VuZCgpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1oZWFkZXItY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJiaWctdGl0bGUgZ3Jvd1wiIH0sIFwiUXVlc3Rpb24gbm90IGZvdW5kXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnbGFzcyBib3ggZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6ICdzbWFsbC10aXRsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcIndhcm5pbmdcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiTm8gcXVlc3Rpb24gZm91bmRcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJObyBxdWVzdGlvbiBmb3VuZCwgdHJ5IGxhdGVyIG9yIHdpdGggZGlmZmVyZW50IGZpbHRlcnMuXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLkZJTFRFUlMsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiB9LCBcIkZpbHRlcnNcIikpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25Ob3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vdXRpbHMvcm91dGVzXCI7XG5mdW5jdGlvbiBTaWRlYmFyKHsgb25OZXh0LCBvbldyYXAsIHdyYXAsIGlzTG9hZGluZyB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgeGw6c3RpY2t5IHRvcC1zcGFjaW5nLXByaW1hcnkgei0xMGAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFzaWRlXCIsIHsgY2xhc3NOYW1lOiBgYWJzb2x1dGUgZ2xhc3MgYm94IGJnLWRhcmstZ3JleS1zZWNvbmRhcnkgYm90dG9tLTAgeGw6Ym90dG9tLWF1dG8geGw6bXQtMCB4bDotbGVmdC1zcGFjaW5nLXByaW1hcnkgeGw6LXRyYW5zbGF0ZS14LWZ1bGwgdHJhbnNsYXRlLXktMS8yIHhsOnRyYW5zbGF0ZS15LTAgcC0yIHotMTBgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyIHhsOmZsZXgtY29sIGdhcC0yXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uXCIsIG9uQ2xpY2s6IG9uTmV4dCwgZGlzYWJsZWQ6IGlzTG9hZGluZyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiYXV0b3JlbmV3XCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5GSUxURVJTLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwidHVuZVwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiLCBvbkNsaWNrOiBvbldyYXAgfSwgd3JhcCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwic3RhcnRcIikpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJrZXlib2FyZF9yZXR1cm5cIikpKSkpKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICAgIGN1cnJlbnRVc2VyOiBudWxsLFxuICAgIGxvYWRpbmc6IHRydWUsXG4gICAgZXJyb3I6IG51bGwsXG4gICAgaXNBdXRob3I6ICgpID0+IGZhbHNlLFxuICAgIGlzQXV0aGVudGljYXRlZDogKCkgPT4gZmFsc2UsXG4gICAgaXNBZG1pbjogKCkgPT4gZmFsc2UsXG59KTtcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gICAgY29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIGZldGNoQ3VycmVudFVzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goJy9hcGkvdXNlci9jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGRhdGEuZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRVc2VyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIgaW5zdGFuY2VvZiBFcnJvciA/IGVyci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoQ3VycmVudFVzZXIoKTtcbiAgICB9LCBbXSk7XG4gICAgZnVuY3Rpb24gaXNBdXRob3IoY29udGVudEF1dGhvcklkKSB7XG4gICAgICAgIGlmICghY3VycmVudFVzZXIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlci5pZCA9PT0gY29udGVudEF1dGhvcklkO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0F1dGhlbnRpY2F0ZWQoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlciAhPT0gbnVsbDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNBZG1pbigpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyLnJvbGVzLmluY2x1ZGVzKCdST0xFX0FETUlOJyk7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0ge1xuICAgICAgICBjdXJyZW50VXNlcixcbiAgICAgICAgbG9hZGluZyxcbiAgICAgICAgZXJyb3IsXG4gICAgICAgIGlzQXV0aG9yLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgICAgIGlzQWRtaW5cbiAgICB9O1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEF1dGhDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB2YWx1ZSB9LCBjaGlsZHJlbik7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiB1c2VSYXlzQW5pbWF0aW9uKHF1ZXN0aW9uLCBtb2RlKSB7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJheXMnKTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdkaXNwbGF5JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKG9yaWdpbmFsRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JDbGFzcyA9IHF1ZXN0aW9uLmlzTWF0Y2ggPT09IHRydWUgPyAnZ3JlZW4nIDogJ3JlZCc7XG4gICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbG9yQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIChfYSA9IG9yaWdpbmFsRWxlbWVudC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5zZXJ0QmVmb3JlKGNsb25lZEVsZW1lbnQsIG9yaWdpbmFsRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgKF9iID0gb3JpZ2luYWxFbGVtZW50LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbnNlcnRCZWZvcmUoY2xvbmVkRWxlbWVudCwgb3JpZ2luYWxFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtxdWVzdGlvbiwgbW9kZV0pO1xufVxuZXhwb3J0IGRlZmF1bHQgdXNlUmF5c0FuaW1hdGlvbjtcbiIsImV4cG9ydCBjb25zdCBjb250YWluZXIgPSB7XG4gICAgaGlkZGVuOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6IDEwLFxuICAgIH0sXG4gICAgdmlzaWJsZToge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB5OiAwLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMixcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgY29uc3QgaXRlbSA9IHtcbiAgICB2aXNpYmxlOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgfSxcbiAgICBoaWRkZW46IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogMTAsXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWNjb3JkaW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24tYnV0dG9uJyk7XG4gICAgZnVuY3Rpb24gdG9nZ2xlQWNjb3JkaW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY2NvcmRpb25CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWNjb3JkaW9uKTtcbiAgICB9KTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0RmlsdGVycycpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25Gb3JtJyk7XG4gICAgcmVzZXRCdXR0b24gPT09IG51bGwgfHwgcmVzZXRCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBmb3JtID09PSBudWxsIHx8IGZvcm0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgIHJhZGlvQnV0dG9ucyA9PT0gbnVsbCB8fCByYWRpb0J1dHRvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJhZGlvQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChyYWRpbykge1xuICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGZvcm0gPT09IG51bGwgfHwgZm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgICAgY2hlY2tib3hlcyA9PT0gbnVsbCB8fCBjaGVja2JveGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGVja2JveGVzLmZvckVhY2goZnVuY3Rpb24gKGNoZWNrYm94KSB7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tbWVudScpO1xuICAgIGNvbnN0IGhlYWRlckJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYm90dG9tLWNvbnRhaW5lcicpO1xuICAgIGxldCBpc01lbnVPcGVuID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgICAgIGhlYWRlckJvdHRvbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIGlzTWVudU9wZW4gPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG4gICAgICAgIGhlYWRlckJvdHRvbUNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIGlzTWVudU9wZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgbWVudUJ1dHRvbiA9PT0gbnVsbCB8fCBtZW51QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpOyAvLyBFbXDDqmNoZSBsYSBwcm9wYWdhdGlvbiBkdSBjbGljIGF1IGRvY3VtZW50XG4gICAgICAgIGlmICghaXNNZW51T3Blbikge1xuICAgICAgICAgICAgb3Blbk1lbnUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgaGVhZGVyQm90dG9tQ29udGFpbmVyID09PSBudWxsIHx8IGhlYWRlckJvdHRvbUNvbnRhaW5lciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaGVhZGVyQm90dG9tQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoaXNNZW51T3Blbikge1xuICAgICAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWxldGUtY2hvaWNlJykuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3Nlc3QoJy5jaG9pY2UtaXRlbScpLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB1cGRhdGVBZGRCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZF9pdGVtX2xpbmsnKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRGb3JtVG9Db2xsZWN0aW9uKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUFkZEJ1dHRvblN0YXRlKCkge1xyXG4gICAgICAgIGNvbnN0IGNob2ljZXNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNob2ljZXMtbGlzdCcpO1xyXG4gICAgICAgIGlmICghY2hvaWNlc0xpc3QpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbWF4Q2hvaWNlcyA9IHBhcnNlSW50KGNob2ljZXNMaXN0LmRhdGFzZXQubWF4Q2hvaWNlcyk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNob2ljZS1pdGVtJykubGVuZ3RoO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkX2l0ZW1fbGluaycpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICAgICAgYnRuLmRpc2FibGVkID0gY3VycmVudENvdW50ID49IG1heENob2ljZXM7XHJcblxyXG4gICAgICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQgPSBidG4ucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCcubWF4LWNob2ljZXMtbWVzc2FnZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb3VudCA+PSBtYXhDaG9pY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1lc3NhZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5jbGFzc05hbWUgPSAnbWF4LWNob2ljZXMtbWVzc2FnZSB0ZXh0LXNtIG9wYWNpdHktNTAgbXQtNCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnRuLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQudGV4dENvbnRlbnQgPSBgTWF4aW11bSBudW1iZXIgb2YgY2hvaWNlcyByZWFjaGVkLmA7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkRm9ybVRvQ29sbGVjdGlvbihlKSB7XHJcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbkhvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29sbGVjdGlvbkhvbGRlckNsYXNzKTtcclxuXHJcbiAgICAgICAgaWYgKCFjb2xsZWN0aW9uSG9sZGVyIHx8ICFjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQucHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbGxlY3Rpb24gaG9sZGVyIG9yIHByb3RvdHlwZSBub3QgZm91bmQnLCBjb2xsZWN0aW9uSG9sZGVyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjaG9pY2UtaXRlbScsICdmbGV4JywgJ2ZsZXgtY29sJywgJ21iLTgnLCAncmVsYXRpdmUnKTtcclxuXHJcbiAgICAgICAgaXRlbS5pbm5lckhUTUwgPSBjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQucHJvdG90eXBlLnJlcGxhY2UoXHJcbiAgICAgICAgICAgIC9fX25hbWVfXy9nLFxyXG4gICAgICAgICAgICBjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQuaW5kZXhcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICByZW1vdmVCdXR0b24udHlwZSA9ICdidXR0b24nO1xyXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24nLCAnYnV0dG9uLWFjdGlvbicsICdhYnNvbHV0ZScsICdib3R0b20tWzE2cHhdJywgJ3JpZ2h0LVsxNnB4XScsICdkZWxldGUtY2hvaWNlJyk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZGVsZXRlPC9zcGFuPmA7XHJcblxyXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdXBkYXRlQWRkQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdXR0b24pO1xyXG4gICAgICAgIGNvbGxlY3Rpb25Ib2xkZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG4gICAgICAgIGNvbGxlY3Rpb25Ib2xkZXIuZGF0YXNldC5pbmRleCsrO1xyXG5cclxuICAgICAgICB1cGRhdGVBZGRCdXR0b25TdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFkZEJ1dHRvblN0YXRlKCk7XHJcbn0pO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3Qgc3dpdGNoQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5zd2l0Y2gtbGFiZWwnKTtcbiAgICBjb25zdCBzY29yZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2NvcmUtY29udGFpbmVyJyk7XG4gICAgZnVuY3Rpb24gc2hvd1Njb3Jlc0J5UGVyaW9kKHBlcmlvZCkge1xuICAgICAgICBzY29yZXNDb250YWluZXIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB2aXNpYmxlU2NvcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnNjb3JlLWNvbnRhaW5lcltkYXRhLXBlcmlvZD1cIiR7cGVyaW9kfVwiXWApO1xuICAgICAgICB2aXNpYmxlU2NvcmVzLmZvckVhY2goc2NvcmUgPT4ge1xuICAgICAgICAgICAgc2NvcmUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzd2l0Y2hCdXR0b25zLmZvckVhY2goKGJ1dHRvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoQnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QoJ3dlZWsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgICAgICAgc2hvd1Njb3Jlc0J5UGVyaW9kKCdtb250aCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QoJ2FsbC10aW1lJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IGFjdGl2ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2gtbGFiZWwuYWN0aXZlJyk7XG4gICAgaWYgKGFjdGl2ZUJ1dHRvbikge1xuICAgICAgICBjb25zdCBhY3RpdmVJbmRleCA9IEFycmF5LmZyb20oc3dpdGNoQnV0dG9ucykuaW5kZXhPZihhY3RpdmVCdXR0b24pO1xuICAgICAgICBjb25zdCBwZXJpb2RzID0gWyd3ZWVrJywgJ21vbnRoJywgJ2FsbC10aW1lJ107XG4gICAgICAgIHNob3dTY29yZXNCeVBlcmlvZChwZXJpb2RzW2FjdGl2ZUluZGV4XSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QoJ3dlZWsnKTtcbiAgICB9XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgQkFTRV9VUkwgPSAnL2FwaSc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbWVudHMocXVlc3Rpb25JZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9L3F1ZXN0aW9uLyR7cXVlc3Rpb25JZH0vY29tbWVudHNgKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0Q29tbWVudHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vY29tbWVudHMvbGFzdGApO1xuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5jb21tZW50cztcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tZW50KHF1ZXN0aW9uSWQsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9xdWVzdGlvbi8ke3F1ZXN0aW9uSWR9L2NvbW1lbnQvYWRkYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbnRlbnQ6IGNvbnRlbnQgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0geWllbGQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2VydmVyIGVycm9yOicsIGVycm9yVGV4dCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1lbnQoY29tbWVudElkLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vY29tbWVudC8ke2NvbW1lbnRJZH0vZWRpdGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnRJZDogY29tbWVudElkLCBjb250ZW50OiBjb250ZW50IH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRXJyb3Igd2hpbGUgY29tbWVudCBlZGl0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tbWVudChjb21tZW50SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9jb21tZW50LyR7Y29tbWVudElkfS9kZWxldGVgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRXJyb3Igd2hpbGUgY29tbWVudCBlZGl0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IEJBU0VfVVJMID0gJy9hcGkvcXVlc3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVF1ZXN0aW9uKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAoZmlsdGVycyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKGZpbHRlcnMuZGlmZmljdWx0eSAmJiAhaXNOYU4ocGFyc2VGbG9hdChmaWx0ZXJzLmRpZmZpY3VsdHkpKSkge1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnZGlmZmljdWx0eScsIGZpbHRlcnMuZGlmZmljdWx0eSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcnMuY2F0ZWdvcmllcyAmJiBmaWx0ZXJzLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsdGVycy5jYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2NhdGVnb3J5W10nLCBjYXRlZ29yeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfT8ke3BhcmFtc31gKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbihxdWVzdGlvbklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vJHtxdWVzdGlvbklkfWApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdEFuc3dlcnMocXVlc3Rpb25JZCwgYW5zd2Vycykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9LyR7cXVlc3Rpb25JZH0vY2hlY2tgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW5zd2VyczogYW5zd2VycyB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xuICAgIEhPTUU6ICcvJyxcbiAgICBRVUlaOiAnL3F1aXonLFxuICAgIEZJTFRFUlM6ICcvZmlsdGVycycsXG4gICAgTE9HSU46ICcvbG9naW4nLFxuICAgIFJFR0lTVEVSOiAnL3JlZ2lzdGVyJyxcbiAgICBRVUVTVElPTjogJy9xdWVzdGlvbidcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVSb290IiwiQXV0aFByb3ZpZGVyIiwiUXVlc3Rpb24iLCJEZW1vIiwiQWN0aXZpdHkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVzdGlvbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RlIiwiZGF0YXNldCIsInF1ZXN0aW9uSWQiLCJwYXJzZUludCIsInNob3dDb21tZW50cyIsInJvb3QiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZGVtb0NvbnRhaW5lciIsImFjdGl2aXR5Q29udGFpbmVyIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsInJlamVjdGVkIiwicmVzdWx0IiwiYXBwbHkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNvbnRhaW5lciIsIm1vdGlvbiIsImdldExhc3RDb21tZW50cyIsIkNvbW1lbnRJdGVtIiwiUk9VVEVTIiwiTG9hZGluZyIsIl9yZWYiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJsb2FkQ29tbWVudHMiLCJfY2FsbGVlIiwiZGF0YSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsIkZyYWdtZW50IiwidWwiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwiY2xhc3NOYW1lIiwibWFwIiwiY29tbWVudCIsImluZGV4Iiwia2V5IiwiY29uY2F0IiwiaHJlZiIsIlFVSVoiLCJNYXJrZG93blJlbmRlcmVyIiwidXNlUmF5c0FuaW1hdGlvbiIsIml0ZW0iLCJDaG9pY2VzIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwic2V0QW5zd2VycyIsImhhbmRsZUFuc3dlcnNDaGFuZ2UiLCJhbnN3ZXJJZCIsImNvcnJlY3RDaG9pY2VzIiwicHJldlNlbGVjdGVkIiwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlcyIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaWQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjaGVja0Fuc3dlclZhbGlkaXR5IiwiY2hvaWNlcyIsImNob2ljZSIsImxpIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiY29udGVudCIsImRlbGV0ZUNvbW1lbnQiLCJDb21tZW50VXBkYXRlIiwic2V0UXVlc3Rpb24iLCJvbkNvbW1lbnREZWxldGUiLCJvbkNhbmNlbCIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwic2V0RXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJkZWxldGVkQ29tbWVudCIsInVwZGF0ZWRRdWVzdGlvbiIsInByZXZlbnREZWZhdWx0IiwiYXNzaWduIiwibWVzc2FnZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIkNvbW1lbnREZWxldGUiLCJ1c2VBdXRoIiwiUHJvZmlsZVBpY3R1cmUiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJfZm9ybWF0RGF0ZSIsImZvcm1hdERhdGUiLCJjcmVhdGlvbkRhdGUiLCJmb3JtYXR0ZWREYXRlIiwiZm9ybWF0dGVkVGltZSIsIl91c2VBdXRoIiwiaXNBdXRob3IiLCJpc0FkbWluIiwidXNlckNhbkVkaXQiLCJhdXRob3IiLCJoYW5kbGVDb21tZW50VXBkYXRlZCIsImhhbmRsZUNvbW1lbnREZWxldGVkIiwiaGFuZGxlU3RhcnRFZGl0aW5nIiwiaGFuZGxlU3RhcnREZWxldGluZyIsImRhdGVPYmplY3QiLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJwYWRTdGFydCIsIm1vbnRoIiwiZ2V0TW9udGgiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJpbWFnZSIsInVzZXJuYW1lIiwiUVVFU1RJT04iLCJvbkNvbW1lbnRVcGRhdGVkIiwiYWRkQ29tbWVudCIsIk1hcmtkb3duSW5mb3MiLCJDb21tZW50TGlzdCIsInNldENvbW1lbnQiLCJpc1N1Ym1pdHRpbmciLCJzZXRJc1N1Ym1pdHRpbmciLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsInN1Y2Nlc3MiLCJzZXRTdWNjZXNzIiwiX3VzZVN0YXRlNyIsIl91c2VTdGF0ZTgiLCJfdXNlU3RhdGU5IiwiX3VzZVN0YXRlMTAiLCJtYXJrZG93bkluZm9zIiwic2V0TWFya2Rvd25JbmZvcyIsImlzQXV0aGVudGljYXRlZCIsIm5ld0NvbW1lbnQiLCJoYW5kbGVTaG93SW5mb3MiLCJwcmV2U3RhdGUiLCJvblN1Ym1pdCIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicm93cyIsInJlcXVpcmVkIiwic3JjIiwiYWx0IiwiTE9HSU4iLCJSRUdJU1RFUiIsInVwZGF0ZUNvbW1lbnQiLCJzZXROZXdDb21tZW50IiwidXBkYXRlZENvbW1lbnQiLCJjb21tZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJRdWVzdGlvbkNvbnRlbnQiLCJkZW1vQW5zd2VyczEiLCJkZW1vUXVlc3Rpb24xIiwiZGVtb0Fuc3dlcnMyIiwiZGVtb1F1ZXN0aW9uMiIsImRlbW9BbnN3ZXJzMyIsImRlbW9RdWVzdGlvbjMiLCJkZW1vQW5zd2VyczQiLCJkZW1vUXVlc3Rpb240IiwiZGVtb0Fuc3dlcnM1IiwiZGVtb1F1ZXN0aW9uNSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQXV0b3BsYXkiLCJxdWVzdGlvbnNEYXRhIiwic3BlZWQiLCJicmVha3BvaW50cyIsInNwYWNlQmV0d2VlbiIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJtb2R1bGVzIiwiZGl2IiwiZXhpdCIsIkV4cGxhbmF0aW9uIiwiZXhwbGFuYXRpb24iLCJJbWFnZSIsIkxpbWl0UmVhY2hlZCIsIl9fcmVzdCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIlJlYWN0TWFya2Rvd24iLCJQcmlzbSIsIlN5bnRheEhpZ2hsaWdodGVyIiwib2thaWRpYSIsImNvbXBvbmVudHMiLCJjb2RlIiwiX2EiLCJjaGlsZHJlbiIsIm5vZGUiLCJzdHlsZSIsInJlZiIsInJlc3QiLCJtYXRjaCIsImV4ZWMiLCJjb2RlU3RyaW5nIiwiam9pbiIsIlN0cmluZyIsImxhbmd1YWdlIiwiUHJlVGFnIiwicmVwbGFjZSIsImltYWdlU3JjIiwiZ2V0UmFuZG9tUXVlc3Rpb24iLCJnZXRRdWVzdGlvbiIsInN1Ym1pdEFuc3dlcnMiLCJTaWRlYmFyIiwiUXVlc3Rpb25Ob3RGb3VuZCIsIkFuaW1hdGVQcmVzZW5jZSIsIl90aGlzIiwibGltaXRSZWFjaGVkIiwic2V0TGltaXRSZWFjaGVkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwic2V0V3JhcCIsImxvYWRRdWVzdGlvbiIsInF1aXpDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ1cmxGaWx0ZXJzIiwic2VhcmNoRm9yUGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJkaWZmaWN1bHR5IiwiZ2V0IiwiY2F0ZWdvcmllcyIsImdldEFsbCIsImhhbmRsZU5leHRRdWVzdGlvbiIsImhhbmRsZVRvZ2dsZVdyYXAiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImlzTWF0Y2giLCJvbkV4aXRDb21wbGV0ZSIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwib25OZXh0Iiwib25XcmFwIiwiaXNMb2FkaW5nIiwiY2F0ZWdvcnkiLCJmaWxsIiwiXyIsImhlaWdodENsYXNzIiwib3BhY2l0eUNsYXNzIiwiRklMVEVSUyIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJmZXRjaEN1cnJlbnRVc2VyIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJjb250ZW50QXV0aG9ySWQiLCJyb2xlcyIsIlByb3ZpZGVyIiwidXNlQ29udGV4dCIsIl9iIiwib3JpZ2luYWxFbGVtZW50IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImNvbG9yQ2xhc3MiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiaGlkZGVuIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJyZXF1aXJlIiwiYWNjb3JkaW9uQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGVBY2NvcmRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b2dnbGUiLCJjb250YWlucyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImJ1dHRvbiIsInJlc2V0QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb3JtIiwicmFkaW9CdXR0b25zIiwicmFkaW8iLCJjaGVja2JveGVzIiwiY2hlY2tib3giLCJtZW51QnV0dG9uIiwiaGVhZGVyQm90dG9tQ29udGFpbmVyIiwiaXNNZW51T3BlbiIsIm9wZW5NZW51IiwiY2xvc2VNZW51IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbG9zZXN0IiwidXBkYXRlQWRkQnV0dG9uU3RhdGUiLCJidG4iLCJhZGRGb3JtVG9Db2xsZWN0aW9uIiwiY2hvaWNlc0xpc3QiLCJtYXhDaG9pY2VzIiwiY3VycmVudENvdW50IiwibWVzc2FnZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInRleHRDb250ZW50IiwiY29sbGVjdGlvbkhvbGRlciIsImN1cnJlbnRUYXJnZXQiLCJjb2xsZWN0aW9uSG9sZGVyQ2xhc3MiLCJpbm5lckhUTUwiLCJyZW1vdmVCdXR0b24iLCJzd2l0Y2hCdXR0b25zIiwic2NvcmVzQ29udGFpbmVyIiwic2hvd1Njb3Jlc0J5UGVyaW9kIiwicGVyaW9kIiwidmlzaWJsZVNjb3JlcyIsInNjb3JlIiwiYWN0aXZlQnV0dG9uIiwiYWN0aXZlSW5kZXgiLCJwZXJpb2RzIiwiQkFTRV9VUkwiLCJnZXRDb21tZW50cyIsImVycm9yVGV4dCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwib2siLCJ0ZXh0Iiwic3RhdHVzIiwic3RhdHVzVGV4dCIsImNvbW1lbnRJZCIsIl9jYWxsZWU0IiwiZXJyb3JEYXRhIiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiX2NhbGxlZTUiLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJhcmd1bWVudHMiLCJmaWx0ZXJzIiwidW5kZWZpbmVkIiwicGFyYW1zIiwicGFyc2VGbG9hdCIsImFwcGVuZCIsIkhPTUUiXSwic291cmNlUm9vdCI6IiJ9