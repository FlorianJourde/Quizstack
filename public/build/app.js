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
/* harmony import */ var _components_StacksSlider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/StacksSlider */ "./assets/components/StacksSlider.tsx");














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
  var stacksSliderContainer = document.querySelector('#stacks-slider-container');
  if (stacksSliderContainer) {
    var _root3 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(stacksSliderContainer);
    _root3.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_StacksSlider__WEBPACK_IMPORTED_MODULE_13__["default"], null));
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
  function getAnswerStatus(answerId) {
    if (!question.correctChoices) return '';
    var isSelected = answers.includes(answerId);
    var isCorrect = question.correctChoices.includes(answerId);
    if (isCorrect) return 'correct';
    if (isSelected) return 'incorrect';
    return '';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_25___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_29__.motion.ul, {
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_28__.container,
    initial: "hidden",
    animate: "visible",
    className: "choices-container flex flex-col gap-spacing-primary"
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
      className: "checkbox-input ".concat(getAnswerStatus(choice.id))
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
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_12__.Autoplay],
    className: "-m-spacing-primary"
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
      className: "flex flex-col gap-spacing-primary m-spacing-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_QuestionContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      question: data.question,
      mode: mode
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
    "id": 188,
    "content": "The input is missing a proper label, which makes it inaccessible to screen reader users."
  }, {
    "id": 186,
    "content": "The submit button doesn't have an explicit aria-label attribute."
  }],
  "comments": [],
  "content": "What is the accessibility issue with the following form element ?\n" + "```html\n" + "<input type=\"text\" placeholder=\"Enter your email\">\n" + "<button type=\"submit\">Submit</button>\n" + "```",
  "difficulty": 1,
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
    "content": "```css\r\np {\r text-style: bold; \r}\r```"
  }, {
    "id": 178,
    "content": "```css\r\np {\r font-weight: bold; \r}\r```"
  }],
  "comments": [],
  "content": "What is the correct CSS syntax for making all paragraph elements bold ?",
  "difficulty": 1,
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
    "content": "`[1, 2, 3, 4, 5]`"
  }, {
    "id": 174,
    "content": "`[2, 4, 6, 8, 10]`"
  }],
  "comments": [],
  "content": "What will be the output of the following code ?\n" + "```javascript\n" + "const numbers = [1, 2, 3, 4, 5];\n" + "const doubled = numbers.map(num => num * 2);\n" + "console.log(doubled);\n" + "```",
  "difficulty": 1,
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
    "id": 204,
    "content": "Capitalizes the first letter of each word"
  }, {
    "id": 205,
    "content": "Returns \"HELLO WORLD\""
  }],
  "comments": [],
  "content": "What does this PHP function do?\r\n```php\r\nfunction process($str) {\r\n    return ucwords(strtolower($str));\r\n}\r\necho process(\"HELLO world\");\r\n```",
  "difficulty": 2,
  "numberOfCorrectChoices": 1,
  "correctChoices": [204]
};
var demoAnswers4 = [204];

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
    "id": 207,
    "content": "Returns the 5 most expensive"
  }, {
    "id": 206,
    "content": "Returns the 5 cheapest products"
  }],
  "comments": [],
  "content": "What does this SQL query do?\r\n```sql\r\nSELECT name, price \r\nFROM products \r\nORDER BY price DESC \r\nLIMIT 5;\r\n```",
  "difficulty": 1,
  "numberOfCorrectChoices": 1,
  "correctChoices": [206]
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
    className: "flex flex-col gap-spacing-primary"
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
    className: "flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_QuestionContent__WEBPACK_IMPORTED_MODULE_43__["default"], {
    question: question,
    mode: mode
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
  var question = _ref.question,
    mode = _ref.mode;
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
  }), question.correctChoices && question.explanation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_Explanation__WEBPACK_IMPORTED_MODULE_10__["default"], {
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

/***/ "./assets/components/StacksSlider.tsx":
/*!********************************************!*\
  !*** ./assets/components/StacksSlider.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");



function StacksSlider() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__.Autoplay],
    spaceBetween: 30,
    loop: true,
    speed: 5000,
    allowTouchMove: false,
    preventClicks: true,
    simulateTouch: false,
    touchStartPreventDefault: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      stopOnLastSlide: false,
      waitForTransition: true
    },
    breakpoints: {
      320: {
        slidesPerView: 5,
        spaceBetween: 10
      },
      640: {
        slidesPerView: 7,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 10,
        spaceBetween: 30
      },
      1280: {
        slidesPerView: 12,
        spaceBetween: 30
      },
      1536: {
        slidesPerView: 15,
        spaceBetween: 30
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/css3-logo.png",
    alt: "CSS logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/javascript-logo.png",
    alt: "JavaScript logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/docker-logo.png",
    alt: "Docker logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/next-js-logo.png",
    alt: "Next.js logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/react-logo.png",
    alt: "React logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/html-logo.png",
    alt: "HTML logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/sass-logo.png",
    alt: "Sass logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/symfony-logo-2.png",
    alt: "Symfony logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/tailwindcss-logo.png",
    alt: "TailwindCSS logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/vue-js-logo.png",
    alt: "Vue.js logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/wordpress-logo.png",
    alt: "Wordpress logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/python-logo.png",
    alt: "Python logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/git-logo.png",
    alt: "Git logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/node-js-logo.png",
    alt: "Node.js logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/php-logo.png",
    alt: "PHP logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/typescript-logo.png",
    alt: "TypeScript logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/django-logo.png",
    alt: "Django logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/angular-logo.png",
    alt: "Angular logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/twig-logo.png",
    alt: "Twig logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/github-logo.png",
    alt: "GitHub logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/laravel-logo.png",
    alt: "Laravel logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/mysql-logo.png",
    alt: "MySQL logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/express-logo.png",
    alt: "ExpressJS logo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/gitlab-logo.png",
    alt: "GitLab logo"
  }))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StacksSlider);

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
    event.stopPropagation();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b21wb25lbnRzL0FjdGl2aXR5LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9DaG9pY2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnREZWxldGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudEl0ZW0udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudExpc3QudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudFVwZGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVtby50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVtby9kZW1vUXVlc3Rpb24xLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbW8vZGVtb1F1ZXN0aW9uMi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbjMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVtby9kZW1vUXVlc3Rpb240LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbW8vZGVtb1F1ZXN0aW9uNS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9FeHBsYW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvSW1hZ2UudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0xpbWl0UmVhY2hlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFya2Rvd25JbmZvcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFya2Rvd25SZW5kZXJlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUHJvZmlsZVBpY3R1cmUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1ZXN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWVzdGlvbkNvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1ZXN0aW9uTm90Rm91bmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1N0YWNrc1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRleHQvQXV0aENvbnRleHQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9ob29rL1JheXNBbmltYXRpb24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9tb3Rpb24vYW5pbWF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9hY2NvcmRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tZW51LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3F1ZXN0aW9uLWZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc3dpdGNoZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL2NvbW1lbnRzQXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9xdWVzdGlvbnNBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzZiZTYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3V0aWxzL3JvdXRlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgUXVlc3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9RdWVzdGlvblwiO1xuaW1wb3J0IERlbW8gZnJvbSBcIi4vY29tcG9uZW50cy9EZW1vXCI7XG5pbXBvcnQgQWN0aXZpdHkgZnJvbSBcIi4vY29tcG9uZW50cy9BY3Rpdml0eVwiO1xuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcbmltcG9ydCAnLi9zY3JpcHRzL2ZpbHRlcnMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc3dpdGNoZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvcXVlc3Rpb24tZm9ybSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9tZW51JztcbmltcG9ydCAnLi9zY3JpcHRzL2FjY29yZGlvbic7XG5pbXBvcnQgU3RhY2tzU2xpZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvU3RhY2tzU2xpZGVyXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aXotY29udGFpbmVyJyk7XG4gICAgaWYgKHF1ZXN0aW9uQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBxdWVzdGlvbkNvbnRhaW5lci5kYXRhc2V0Lm1vZGUgfHwgJ3F1aXonO1xuICAgICAgICBjb25zdCBxdWVzdGlvbklkID0gcGFyc2VJbnQocXVlc3Rpb25Db250YWluZXIuZGF0YXNldC5xdWVzdGlvbklkIHx8ICcwJyk7XG4gICAgICAgIGNvbnN0IHNob3dDb21tZW50cyA9IHF1ZXN0aW9uQ29udGFpbmVyLmRhdGFzZXQuc2hvd0NvbW1lbnRzICE9PSAnZmFsc2UnO1xuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChxdWVzdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIHJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aFByb3ZpZGVyLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbiwgeyBtb2RlOiBtb2RlLCBxdWVzdGlvbklkOiBxdWVzdGlvbklkLCBzaG93Q29tbWVudHM6IHNob3dDb21tZW50cyB9KSkpO1xuICAgIH1cbiAgICBjb25zdCBkZW1vQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbW8tY29udGFpbmVyJyk7XG4gICAgaWYgKGRlbW9Db250YWluZXIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZGVtb0NvbnRhaW5lcik7XG4gICAgICAgIHJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGVtbywgeyBtb2RlOiAnZGlzcGxheScgfSkpO1xuICAgIH1cbiAgICBjb25zdCBhY3Rpdml0eUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpdml0eS1jb250YWluZXInKTtcbiAgICBpZiAoYWN0aXZpdHlDb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGFjdGl2aXR5Q29udGFpbmVyLmRhdGFzZXQubW9kZSB8fCAnZGlzcGxheSc7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGFjdGl2aXR5Q29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBY3Rpdml0eSwgeyBtb2RlOiBtb2RlIH0pKTtcbiAgICB9XG4gICAgY29uc3Qgc3RhY2tzU2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWNrcy1zbGlkZXItY29udGFpbmVyJyk7XG4gICAgaWYgKHN0YWNrc1NsaWRlckNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChzdGFja3NTbGlkZXJDb250YWluZXIpO1xuICAgICAgICByb290LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFN0YWNrc1NsaWRlciwgbnVsbCkpO1xuICAgIH1cbn0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi9tb3Rpb24vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TGFzdENvbW1lbnRzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2NvbW1lbnRzQXBpXCI7XG5pbXBvcnQgQ29tbWVudEl0ZW0gZnJvbSBcIi4vQ29tbWVudC9Db21tZW50SXRlbVwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uL3V0aWxzL3JvdXRlc1wiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vTG9hZGluZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIEFjdGl2aXR5KHsgbW9kZSB9KSB7XG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZENvbW1lbnRzKCk7XG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIGxvYWRDb21tZW50cygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB5aWVsZCBnZXRMYXN0Q29tbWVudHMoKTtcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgY29tbWVudHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjb21tZW50cyAmJiBjb21tZW50cy5sZW5ndGggPiAwID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLnVsLCB7IHZhcmlhbnRzOiBjb250YWluZXIsIGluaXRpYWw6IFwiaGlkZGVuXCIsIGFuaW1hdGU6IFwidmlzaWJsZVwiLCBjbGFzc05hbWU6ICdjb21tZW50cy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBnbGFzcyBib3ggYmctZGFyay1ncmV5LXNlY29uZGFyeScgfSwgY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudEl0ZW0sIHsgbW9kZTogbW9kZSwgY29tbWVudDogY29tbWVudCwgaW5kZXg6IGluZGV4LCBrZXk6IGBjb21tZW50LSR7aW5kZXh9YCB9KSkpKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2xhc3MgYm94IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgc21hbGwtdGl0bGVgIH0sIFwiVGhlcmUncyBubyBjb21tZW50IHRvIHNob3dcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJZb3UgY2FuIGFkZCBjb21tZW50cyBhZnRlciBhbnN3ZXJpbmcgcXVlc3Rpb25zICFcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuUVVJWiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIH0sIFwiUGxheVwiKSkpKSkpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXR5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tIFwiLi9NYXJrZG93blJlbmRlcmVyXCI7XG5pbXBvcnQgdXNlUmF5c0FuaW1hdGlvbiBmcm9tIFwiLi4vaG9vay9SYXlzQW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBjb250YWluZXIsIGl0ZW0gfSBmcm9tIFwiLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmZ1bmN0aW9uIENob2ljZXMoeyBtb2RlLCBxdWVzdGlvbiwgYW5zd2Vycywgc2V0QW5zd2VycyB9KSB7XG4gICAgdXNlUmF5c0FuaW1hdGlvbihxdWVzdGlvbiwgbW9kZSk7XG4gICAgZnVuY3Rpb24gaGFuZGxlQW5zd2Vyc0NoYW5nZShhbnN3ZXJJZCkge1xuICAgICAgICBpZiAocXVlc3Rpb24uY29ycmVjdENob2ljZXMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghc2V0QW5zd2VycylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2V0QW5zd2VycyhwcmV2U2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uLm51bWJlck9mQ29ycmVjdENob2ljZXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2Fuc3dlcklkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoYW5zd2VySWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U2VsZWN0ZWQuZmlsdGVyKGlkID0+IGlkICE9PSBhbnN3ZXJJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWy4uLnByZXZTZWxlY3RlZCwgYW5zd2VySWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldEFuc3dlclN0YXR1cyhhbnN3ZXJJZCkge1xuICAgICAgICBpZiAoIXF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzKVxuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gYW5zd2Vycy5pbmNsdWRlcyhhbnN3ZXJJZCk7XG4gICAgICAgIGNvbnN0IGlzQ29ycmVjdCA9IHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzLmluY2x1ZGVzKGFuc3dlcklkKTtcbiAgICAgICAgaWYgKGlzQ29ycmVjdClcbiAgICAgICAgICAgIHJldHVybiAnY29ycmVjdCc7XG4gICAgICAgIGlmIChpc1NlbGVjdGVkKVxuICAgICAgICAgICAgcmV0dXJuICdpbmNvcnJlY3QnO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtb3Rpb24udWwsIHsgdmFyaWFudHM6IGNvbnRhaW5lciwgaW5pdGlhbDogXCJoaWRkZW5cIiwgYW5pbWF0ZTogXCJ2aXNpYmxlXCIsIGNsYXNzTmFtZTogXCJjaG9pY2VzLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LCBxdWVzdGlvbi5jaG9pY2VzLm1hcCgoY2hvaWNlLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmxpLCB7IHZhcmlhbnRzOiBpdGVtLCBrZXk6IGBjaG9pY2UtJHtjaG9pY2UuaWR9YCwgY2xhc3NOYW1lOiBgY2hvaWNlLW9wdGlvbiBnbGFzc2AgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIsIHsgY2xhc3NOYW1lOiBgY2hlY2tib3gtZ3JvdXBgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBgY2hvaWNlLSR7aW5kZXh9YCwgbmFtZTogXCJjaG9pY2VcIiwgdmFsdWU6IGNob2ljZS5pZCwgY2hlY2tlZDogYW5zd2Vycy5pbmNsdWRlcyhjaG9pY2UuaWQpLCBvbkNoYW5nZTogKCkgPT4gaGFuZGxlQW5zd2Vyc0NoYW5nZShjaG9pY2UuaWQpLCBjbGFzc05hbWU6IGBjaGVja2JveC1pbnB1dCAke2dldEFuc3dlclN0YXR1cyhjaG9pY2UuaWQpfWAgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiY2hlY2tib3gtdGlsZSBib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJjaGVja2JveC1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duUmVuZGVyZXIsIHsgY29udGVudDogY2hvaWNlLmNvbnRlbnQgfSkpKSkpKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBDaG9pY2VzO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1lbnRzQXBpXCI7XG5mdW5jdGlvbiBDb21tZW50VXBkYXRlKHsgcXVlc3Rpb24sIHNldFF1ZXN0aW9uLCBjb21tZW50LCBvbkNvbW1lbnREZWxldGUsIG9uQ2FuY2VsIH0pIHtcbiAgICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVkQ29tbWVudCA9IHlpZWxkIGRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzID0gdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzLmZpbHRlcihjID0+IGMuaWQgIT09IGNvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih1cGRhdGVkUXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNvbW1lbnREZWxldGUoZGVsZXRlZENvbW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJEbyB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBjb21tZW50ID9cIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYnV0dG9ucy1jb250YWluZXInIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXRlcnRpYXJ5XCIsIG9uQ2xpY2s6IG9uQ2FuY2VsLCBkaXNhYmxlZDogaXNEZWxldGluZyB9LCBcIkNhbmNlbFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tcmVkXCIsIGRpc2FibGVkOiBpc0RlbGV0aW5nLCBvbkNsaWNrOiBoYW5kbGVTdWJtaXQgfSwgaXNEZWxldGluZyA/ICdEZWxldGluZycgOiAnRGVsZXRlJykpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFVwZGF0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tIFwiLi4vTWFya2Rvd25SZW5kZXJlclwiO1xuaW1wb3J0IENvbW1lbnRVcGRhdGUgZnJvbSBcIi4vQ29tbWVudFVwZGF0ZVwiO1xuaW1wb3J0IENvbW1lbnREZWxldGUgZnJvbSBcIi4vQ29tbWVudERlbGV0ZVwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSBcIi4uL1Byb2ZpbGVQaWN0dXJlXCI7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVzXCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uLy4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IGNvbW1lbnQsIGluZGV4LCBzZXRRdWVzdGlvbiwgcXVlc3Rpb24sIG1vZGUsIH0pIHtcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IGZvcm1hdHRlZERhdGUsIGZvcm1hdHRlZFRpbWUgfSA9IGZvcm1hdERhdGUoY29tbWVudC5jcmVhdGlvbkRhdGUpO1xuICAgIGNvbnN0IHsgaXNBdXRob3IsIGlzQWRtaW4gfSA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCB1c2VyQ2FuRWRpdCA9IGlzQXV0aG9yKGNvbW1lbnQuYXV0aG9yLmlkKSB8fCBpc0FkbWluKCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ29tbWVudFVwZGF0ZWQoKSB7XG4gICAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbW1lbnREZWxldGVkKCkge1xuICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnRFZGl0aW5nKCkge1xuICAgICAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gICAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydERlbGV0aW5nKCkge1xuICAgICAgICBzZXRJc0RlbGV0aW5nKHRydWUpO1xuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVPYmplY3QpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVPYmplY3QuZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gLFxuICAgICAgICAgICAgZm9ybWF0dGVkVGltZTogYCR7aG91cnN9OiR7bWludXRlc31gXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgaW5kZXggIT09IDAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIHsgY2xhc3NOYW1lOiBcImgtWzJweF0gYmctd2hpdGUvMTAgYm9yZGVyLTBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtb3Rpb24ubGksIHsgdmFyaWFudHM6IGl0ZW0sIGNsYXNzTmFtZTogYHB5LTggZmlyc3Q6cHQtMCBsYXN0OnBiLTAgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5YCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50LWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXNlY29uZGFyeVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50LWhlYWRlci1jb250YWluZXIgZmxleCBmbGV4LXdyYXAgZ2FwLTQgaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ1c2VyLWluZm9zLWNvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBnYXAtc3BhY2luZy1zZWNvbmRhcnkgaXRlbXMtY2VudGVyIGdyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQcm9maWxlUGljdHVyZSwgeyBpbWFnZTogY29tbWVudC5hdXRob3IuaW1hZ2UgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCBmbGV4LWNvbCBnYXAtMmAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBjb21tZW50LmF1dGhvci51c2VybmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkYXRlLWNvbnRhaW5lciBmbGV4IGdhcC00ICBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogJ2ZsZXggaXRlbXMtY2VudGVyIG11dGVkJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnMgbXItMiBtZC0xNFwiIH0sIFwiY2FsZW5kYXJfdG9kYXlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBmb3JtYXR0ZWREYXRlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiAnZmxleCBpdGVtcy1jZW50ZXIgbXV0ZWQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29ucyBtci0yIG1kLTE0XCIgfSwgXCJzY2hlZHVsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGZvcm1hdHRlZFRpbWUpKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lciBncm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJDYW5FZGl0ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiwgb25DbGljazogKCkgPT4gaGFuZGxlU3RhcnRFZGl0aW5nKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImVkaXRcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiwgb25DbGljazogKCkgPT4gaGFuZGxlU3RhcnREZWxldGluZygpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJkZWxldGVcIikpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAnZGlzcGxheScgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBgJHtST1VURVMuUVVFU1RJT059LyR7Y29tbWVudC5xdWVzdGlvbklkfWAsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJ2aXNpYmlsaXR5XCIpKSkpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50LWJvZHktY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IGNvbW1lbnQuY29udGVudCB9KSkpLFxuICAgICAgICAgICAgaXNFZGl0aW5nICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50VXBkYXRlLCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgc2V0UXVlc3Rpb246IHNldFF1ZXN0aW9uLCBjb21tZW50OiBjb21tZW50LCBvbkNvbW1lbnRVcGRhdGVkOiBoYW5kbGVDb21tZW50VXBkYXRlZCwgb25DYW5jZWw6ICgpID0+IHNldElzRWRpdGluZyhmYWxzZSkgfSksXG4gICAgICAgICAgICBpc0RlbGV0aW5nICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50RGVsZXRlLCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgc2V0UXVlc3Rpb246IHNldFF1ZXN0aW9uLCBjb21tZW50OiBjb21tZW50LCBvbkNvbW1lbnREZWxldGU6IGhhbmRsZUNvbW1lbnREZWxldGVkLCBvbkNhbmNlbDogKCkgPT4gc2V0SXNEZWxldGluZyhmYWxzZSkgfSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50SXRlbTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkQ29tbWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tZW50c0FwaVwiO1xuaW1wb3J0IENvbW1lbnRJdGVtIGZyb20gXCIuL0NvbW1lbnRJdGVtXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXNcIjtcbmltcG9ydCBNYXJrZG93bkluZm9zIGZyb20gXCIuLi9NYXJrZG93bkluZm9zXCI7XG5mdW5jdGlvbiBDb21tZW50TGlzdCh7IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbiB9KSB7XG4gICAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21hcmtkb3duSW5mb3MsIHNldE1hcmtkb3duSW5mb3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VBdXRoKCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB5aWVsZCBhZGRDb21tZW50KHF1ZXN0aW9uLmlkLCBjb21tZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Q29tbWVudCAmJiBuZXdDb21tZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVzdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cy5wdXNoKG5ld0NvbW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih1cGRhdGVkUXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDb21tZW50KCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGFkZCBjb21tZW50OiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGFkZCBjb21tZW50OiAnICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93SW5mb3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldE1hcmtkb3duSW5mb3MocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICAgIH1cbiAgICA7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2Utc2VwYXJhdG9yLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6ICd0aXRsZScgfSwgXCJDb21tZW50c1wiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogJ2NvbW1lbnRzLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdsYXNzIGJveCBiZy1kYXJrLWdyZXktc2Vjb25kYXJ5JyB9LCBxdWVzdGlvbi5jb21tZW50cy5sZW5ndGggPiAwID8gKHF1ZXN0aW9uLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1lbnRJdGVtLCB7IGNvbW1lbnQ6IGNvbW1lbnQsIGluZGV4OiBpbmRleCwgcXVlc3Rpb246IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbjogc2V0UXVlc3Rpb24sIGtleTogYGNvbW1lbnQtJHtpbmRleH1gIH0pKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiVGhlcmUncyBubyBkaXNjdXNzaW9uIGFib3V0IHRoaXMgcXVlc3Rpb24uLi5cIikpKSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkKCkgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRhaW5lciBnYXAtNCBnbGFzcyBib3ggYmctZGFyay1ncmV5LXNlY29uZGFyeVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwic21hbGwtdGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJjaGF0X2J1YmJsZVwiKSxcbiAgICAgICAgICAgICAgICBcIkpvaW4gdGhlIGNvbnZlcnNhdGlvblwiKSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1zdWNjZXNzXCIgfSwgXCJDb21tZW50IGFkZCB3aXRoIHN1Y2Nlc3MgIVwiKSxcbiAgICAgICAgICAgIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgfSwgZXJyb3IpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7IGNsYXNzTmFtZTogXCJmb3JtXCIsIHZhbHVlOiBjb21tZW50LCBvbkNoYW5nZTogKGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpLCBwbGFjZWhvbGRlcjogXCJZb3VyIGNvbW1lbnQuLi5cIiwgcm93czogNCwgcmVxdWlyZWQ6IHRydWUgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ib3R0b20tY29udGFpbmVyIGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gZmxleCBnYXAtNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogYGZsZXggaXRlbXMtY2VudGVyIG9wYWNpdHktNTBgLCBvbkNsaWNrOiBoYW5kbGVTaG93SW5mb3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcIi9pbWFnZXMvbG9nb3MvbWFya2Rvd24tbG9nby5wbmdcIiwgYWx0OiBcIk1hcmtkb3duIGxvZ29cIiwgY2xhc3NOYW1lOiBcImgtNSBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJrZG93biBpbmZvc1wiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXIgZ3Jvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIH0sIGlzU3VibWl0dGluZyA/ICdTZW5kaW5nJyA6ICdTZW5kJykpKSksXG4gICAgICAgICAgICBtYXJrZG93bkluZm9zICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd25JbmZvcywgbnVsbCkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogJ3NtYWxsLXRpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiY2hhdF9idWJibGVcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiV2FubmEgam9pbiB0aGUgY29udmVyc2F0aW9uID9cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJQbGVhc2UgbG9naW4gb3IgcmVnaXN0ZXIgIVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5MT0dJTiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tdGVydGlhcnlcIiB9LCBcIkxvZ2luXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLlJFR0lTVEVSLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgfSwgXCJSZWdpc3RlclwiKSkpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVwZGF0ZUNvbW1lbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbWVudHNBcGlcIjtcbmltcG9ydCBNYXJrZG93bkluZm9zIGZyb20gXCIuLi9NYXJrZG93bkluZm9zXCI7XG5mdW5jdGlvbiBDb21tZW50VXBkYXRlKHsgcXVlc3Rpb24sIHNldFF1ZXN0aW9uLCBjb21tZW50LCBvbkNvbW1lbnRVcGRhdGVkLCBvbkNhbmNlbCB9KSB7XG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtuZXdDb21tZW50LCBzZXROZXdDb21tZW50XSA9IHVzZVN0YXRlKGNvbW1lbnQuY29udGVudCk7XG4gICAgY29uc3QgW21hcmtkb3duSW5mb3MsIHNldE1hcmtkb3duSW5mb3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZENvbW1lbnQgPSB5aWVsZCB1cGRhdGVDb21tZW50KGNvbW1lbnQuaWQsIG5ld0NvbW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkQ29tbWVudCAmJiB1cGRhdGVkQ29tbWVudC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkUXVlc3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBxdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50SW5kZXggPSB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMuZmluZEluZGV4KGMgPT4gYy5pZCA9PT0gdXBkYXRlZENvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzW2NvbW1lbnRJbmRleF0gPSB1cGRhdGVkQ29tbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cy5wdXNoKHVwZGF0ZWRDb21tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih1cGRhdGVkUXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNvbW1lbnRVcGRhdGVkKHVwZGF0ZWRDb21tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93SW5mb3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldE1hcmtkb3duSW5mb3MocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICAgIH1cbiAgICA7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udGFpbmVyXCIgfSxcbiAgICAgICAgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiB9LCBlcnJvciksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwICB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7IGNsYXNzTmFtZTogXCJmb3JtXCIsIHZhbHVlOiBuZXdDb21tZW50LCBvbkNoYW5nZTogKGUpID0+IHNldE5ld0NvbW1lbnQoZS50YXJnZXQudmFsdWUpLCByb3dzOiAzLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tYm90dG9tLWNvbnRhaW5lciBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGZsZXggZ2FwLTRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS01MGAsIG9uQ2xpY2s6IGhhbmRsZVNob3dJbmZvcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCIvaW1hZ2VzL2xvZ29zL21hcmtkb3duLWxvZ28ucG5nXCIsIGFsdDogXCJNYXJrZG93biBsb2dvXCIsIGNsYXNzTmFtZTogXCJoLTUgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJrZG93biBpbmZvc1wiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2J1dHRvbnMtY29udGFpbmVyIGdyb3cnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ0bi10ZXJ0aWFyeVwiLCBvbkNsaWNrOiBvbkNhbmNlbCwgZGlzYWJsZWQ6IGlzU3VibWl0dGluZyB9LCBcIkNhbmNlbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiwgZGlzYWJsZWQ6IGlzU3VibWl0dGluZyB9LCBpc1N1Ym1pdHRpbmcgPyAnVXBkYXRpbmcnIDogJ1NhdmUnKSkpKSxcbiAgICAgICAgbWFya2Rvd25JbmZvcyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duSW5mb3MsIG51bGwpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50VXBkYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBRdWVzdGlvbkNvbnRlbnQgZnJvbSBcIi4vUXVlc3Rpb25Db250ZW50XCI7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tIFwiLi9DaG9pY2VzXCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBkZW1vQW5zd2VyczEsIGRlbW9RdWVzdGlvbjEgfSBmcm9tIFwiLi9EZW1vL2RlbW9RdWVzdGlvbjFcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzMiwgZGVtb1F1ZXN0aW9uMiB9IGZyb20gXCIuL0RlbW8vZGVtb1F1ZXN0aW9uMlwiO1xuaW1wb3J0IHsgZGVtb0Fuc3dlcnMzLCBkZW1vUXVlc3Rpb24zIH0gZnJvbSBcIi4vRGVtby9kZW1vUXVlc3Rpb24zXCI7XG5pbXBvcnQgeyBkZW1vQW5zd2VyczQsIGRlbW9RdWVzdGlvbjQgfSBmcm9tIFwiLi9EZW1vL2RlbW9RdWVzdGlvbjRcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzNSwgZGVtb1F1ZXN0aW9uNSB9IGZyb20gXCIuL0RlbW8vZGVtb1F1ZXN0aW9uNVwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIERlbW8oeyBtb2RlIH0pIHtcbiAgICBjb25zdCBxdWVzdGlvbnNEYXRhID0gW1xuICAgICAgICB7IHF1ZXN0aW9uOiBkZW1vUXVlc3Rpb24xLCBhbnN3ZXJzOiBkZW1vQW5zd2VyczEgfSxcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uMiwgYW5zd2VyczogZGVtb0Fuc3dlcnMyIH0sXG4gICAgICAgIHsgcXVlc3Rpb246IGRlbW9RdWVzdGlvbjMsIGFuc3dlcnM6IGRlbW9BbnN3ZXJzMyB9LFxuICAgICAgICB7IHF1ZXN0aW9uOiBkZW1vUXVlc3Rpb240LCBhbnN3ZXJzOiBkZW1vQW5zd2VyczQgfSxcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uNSwgYW5zd2VyczogZGVtb0Fuc3dlcnM1IH1cbiAgICBdO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXIsIHsgc3BlZWQ6IDEwMDAsIHNsaWRlc1BlclZpZXc6IDEsIGxvb3A6IHRydWUsIGNlbnRlcmVkU2xpZGVzOiB0cnVlLCBhdXRvcGxheToge1xuICAgICAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxuICAgICAgICAgICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIH0sIG1vZHVsZXM6IFtBdXRvcGxheV0sIGNsYXNzTmFtZTogYC1tLXNwYWNpbmctcHJpbWFyeWAgfSwgcXVlc3Rpb25zRGF0YS5tYXAoKGRhdGEsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgeyBrZXk6IGRhdGEucXVlc3Rpb24uaWQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmRpdiwgeyBrZXk6IGRhdGEucXVlc3Rpb24uaWQsIGluaXRpYWw6IFwiaGlkZGVuXCIsIGFuaW1hdGU6IFwidmlzaWJsZVwiLCBleGl0OiBcImhpZGRlblwiLCB2YXJpYW50czogaXRlbSwgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5IG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbkNvbnRlbnQsIHsgcXVlc3Rpb246IGRhdGEucXVlc3Rpb24sIG1vZGU6IG1vZGUgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hvaWNlcywgeyBtb2RlOiBtb2RlLCBxdWVzdGlvbjogZGF0YS5xdWVzdGlvbiwgYW5zd2VyczogZGF0YS5hbnN3ZXJzIH0pKSkpKSkpKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBEZW1vO1xuIiwiZXhwb3J0IGNvbnN0IGRlbW9RdWVzdGlvbjEgPSB7XG4gICAgXCJpZFwiOiAyNzUsXG4gICAgXCJjYXRlZ29yaWVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiA3MDEsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJIVE1MXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJjaG9pY2VzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxODgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJUaGUgaW5wdXQgaXMgbWlzc2luZyBhIHByb3BlciBsYWJlbCwgd2hpY2ggbWFrZXMgaXQgaW5hY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXIgdXNlcnMuXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxODYsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJUaGUgc3VibWl0IGJ1dHRvbiBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQgYXJpYS1sYWJlbCBhdHRyaWJ1dGUuXCJcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIFwiY29tbWVudHNcIjogW10sXG4gICAgXCJjb250ZW50XCI6IFwiV2hhdCBpcyB0aGUgYWNjZXNzaWJpbGl0eSBpc3N1ZSB3aXRoIHRoZSBmb2xsb3dpbmcgZm9ybSBlbGVtZW50ID9cXG5cIiArXG4gICAgICAgIFwiYGBgaHRtbFxcblwiICtcbiAgICAgICAgXCI8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkVudGVyIHlvdXIgZW1haWxcXFwiPlxcblwiICtcbiAgICAgICAgXCI8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCI+U3VibWl0PC9idXR0b24+XFxuXCIgK1xuICAgICAgICBcImBgYFwiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAxLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAxLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAxODhcbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGRlbW9BbnN3ZXJzMSA9IFtcbiAgICAxODhcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uMiA9IHtcbiAgICBcImlkXCI6IDI3MyxcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcyMSxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkNTU1wiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTc3LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiYGBgY3NzXFxyXFxucCB7XFxyIHRleHQtc3R5bGU6IGJvbGQ7IFxccn1cXHJgYGBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3OCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcImBgYGNzc1xcclxcbnAge1xcciBmb250LXdlaWdodDogYm9sZDsgXFxyfVxccmBgYFwiXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgaXMgdGhlIGNvcnJlY3QgQ1NTIHN5bnRheCBmb3IgbWFraW5nIGFsbCBwYXJhZ3JhcGggZWxlbWVudHMgYm9sZCA/XCIsXG4gICAgXCJkaWZmaWN1bHR5XCI6IDEsXG4gICAgXCJudW1iZXJPZkNvcnJlY3RDaG9pY2VzXCI6IDIsXG4gICAgXCJjb3JyZWN0Q2hvaWNlc1wiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTgxXG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBkZW1vQW5zd2VyczIgPSBbXG4gICAgMTc3LFxuICAgIDE4MFxuXTtcbiIsImV4cG9ydCBjb25zdCBkZW1vUXVlc3Rpb24zID0ge1xuICAgIFwiaWRcIjogMjcyLFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogNzA0LFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmF2YVNjcmlwdFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTczLFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiYFsxLCAyLCAzLCA0LCA1XWBcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3NCxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcImBbMiwgNCwgNiwgOCwgMTBdYFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY29tbWVudHNcIjogW10sXG4gICAgXCJjb250ZW50XCI6IFwiV2hhdCB3aWxsIGJlIHRoZSBvdXRwdXQgb2YgdGhlIGZvbGxvd2luZyBjb2RlID9cXG5cIiArXG4gICAgICAgIFwiYGBgamF2YXNjcmlwdFxcblwiICtcbiAgICAgICAgXCJjb25zdCBudW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdO1xcblwiICtcbiAgICAgICAgXCJjb25zdCBkb3VibGVkID0gbnVtYmVycy5tYXAobnVtID0+IG51bSAqIDIpO1xcblwiICtcbiAgICAgICAgXCJjb25zb2xlLmxvZyhkb3VibGVkKTtcXG5cIiArXG4gICAgICAgIFwiYGBgXCIsXG4gICAgXCJkaWZmaWN1bHR5XCI6IDEsXG4gICAgXCJudW1iZXJPZkNvcnJlY3RDaG9pY2VzXCI6IDEsXG4gICAgXCJjb3JyZWN0Q2hvaWNlc1wiOiBbXG4gICAgICAgIDE3NFxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnMzID0gW1xuICAgIDE3NFxuXTtcbiIsImV4cG9ydCBjb25zdCBkZW1vUXVlc3Rpb240ID0ge1xuICAgIFwiaWRcIjogMjc5LFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogNzAzLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiUEhQXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJjaG9pY2VzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAyMDQsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJDYXBpdGFsaXplcyB0aGUgZmlyc3QgbGV0dGVyIG9mIGVhY2ggd29yZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA1LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiUmV0dXJucyBcXFwiSEVMTE8gV09STERcXFwiXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJjb21tZW50c1wiOiBbXSxcbiAgICBcImNvbnRlbnRcIjogXCJXaGF0IGRvZXMgdGhpcyBQSFAgZnVuY3Rpb24gZG8/XFxyXFxuYGBgcGhwXFxyXFxuZnVuY3Rpb24gcHJvY2Vzcygkc3RyKSB7XFxyXFxuICAgIHJldHVybiB1Y3dvcmRzKHN0cnRvbG93ZXIoJHN0cikpO1xcclxcbn1cXHJcXG5lY2hvIHByb2Nlc3MoXFxcIkhFTExPIHdvcmxkXFxcIik7XFxyXFxuYGBgXCIsXG4gICAgXCJkaWZmaWN1bHR5XCI6IDIsXG4gICAgXCJudW1iZXJPZkNvcnJlY3RDaG9pY2VzXCI6IDEsXG4gICAgXCJjb3JyZWN0Q2hvaWNlc1wiOiBbXG4gICAgICAgIDIwNFxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnM0ID0gW1xuICAgIDIwNFxuXTtcbiIsImV4cG9ydCBjb25zdCBkZW1vUXVlc3Rpb241ID0ge1xuICAgIFwiaWRcIjogMjgwLFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogNzIzLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiU1FMXCJcbiAgICAgICAgfVxuICAgIF0sXG4gICAgXCJjaG9pY2VzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAyMDcsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJSZXR1cm5zIHRoZSA1IG1vc3QgZXhwZW5zaXZlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAyMDYsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJSZXR1cm5zIHRoZSA1IGNoZWFwZXN0IHByb2R1Y3RzXCJcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIFwiY29tbWVudHNcIjogW10sXG4gICAgXCJjb250ZW50XCI6IFwiV2hhdCBkb2VzIHRoaXMgU1FMIHF1ZXJ5IGRvP1xcclxcbmBgYHNxbFxcclxcblNFTEVDVCBuYW1lLCBwcmljZSBcXHJcXG5GUk9NIHByb2R1Y3RzIFxcclxcbk9SREVSIEJZIHByaWNlIERFU0MgXFxyXFxuTElNSVQgNTtcXHJcXG5gYGBcIixcbiAgICBcImRpZmZpY3VsdHlcIjogMSxcbiAgICBcIm51bWJlck9mQ29ycmVjdENob2ljZXNcIjogMSxcbiAgICBcImNvcnJlY3RDaG9pY2VzXCI6IFtcbiAgICAgICAgMjA2XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBkZW1vQW5zd2VyczUgPSBbXG4gICAgMjA3XG5dO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tIFwiLi9NYXJrZG93blJlbmRlcmVyXCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5mdW5jdGlvbiBFeHBsYW5hdGlvbih7IHF1ZXN0aW9uIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmRpdiwgeyB2YXJpYW50czogaXRlbSwgY2xhc3NOYW1lOiBgcXVlc3Rpb24tYm90dG9tLWNvbnRhaW5lciBtdC00IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctc2Vjb25kYXJ5YCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBjbGFzc05hbWU6IGB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRgIH0sIFwiRXhwbGFuYXRpb25cIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd25SZW5kZXJlciwgeyBjb250ZW50OiBxdWVzdGlvbi5leHBsYW5hdGlvbiB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgRXhwbGFuYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gSW1hZ2UoeyBpbWFnZSB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL3VwbG9hZHMvaW1hZ2VzL3F1ZXN0aW9ucy8ke2ltYWdlfWAsIGNsYXNzTmFtZTogYG10LTQgbWF4LXctZnVsbCByb3VuZGVkLXJhZGl1cy1zZWNvbmRhcnkgbXgtYXV0b2AsIGFsdDogXCJcIiB9KSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgSW1hZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uL3V0aWxzL3JvdXRlc1wiO1xuZnVuY3Rpb24gTGltaXRSZWFjaGVkKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLWhlYWRlci1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgY2xhc3NOYW1lOiBcImJpZy10aXRsZSBncm93XCIgfSwgXCJMaW1pdCByZWFjaGVkICFcIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogYHNtYWxsLXRpdGxlYCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwid2FybmluZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJZb3UndmUgcmVhY2hlZCB0aGUgcXVlc3Rpb24gbGltaXQgZm9yIHRvZGF5XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiUGxlYXNlIGxvZ2luIG9yIHJlZ2lzdGVyIHRvIGNvbnRpbnVlIHRvIHBsYXkuXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLkxPR0lOLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeVwiIH0sIFwiTG9naW5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuUkVHSVNURVIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiB9LCBcIlJlZ2lzdGVyXCIpKSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExpbWl0UmVhY2hlZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xufVxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBNYXJrZG93bkluZm9zKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBgbWFya2Rvd24taW5mbyBib3ggYmctdmVyeS1kYXJrLWdyZXktcHJpbWFyeSByb3VuZGVkLXJhZGl1cy1zZWNvbmRhcnlgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImAgLi4uIGBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGBtdXRlZCBtbC0yYCB9LCBcIklubGluZSBjb2RlXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImBgYGphdmFzY3JpcHQgLi4uIGBgYFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiQ29kZSBibG9ja1wiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCIqIC4uLiAqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJJdGFsaWNcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiKiogLi4uICoqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJCb2xkXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcIlsgLi4uIF0oaHR0cHM6Ly91cmwuY29tKVwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiTGlua1wiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCItIC4uLlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiVW5vcmRlcmVkIGxpc3RcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiMS4gLi4uXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJPcmRlcmVkIGxpc3RcIikpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25JbmZvcztcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyBva2FpZGlhIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc21cIjtcbmV4cG9ydCBmdW5jdGlvbiBNYXJrZG93blJlbmRlcmVyKHsgY29udGVudCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TWFya2Rvd24sIHsgY29tcG9uZW50czoge1xuICAgICAgICAgICAgY29kZShfYSkge1xuICAgICAgICAgICAgICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG5vZGUsIHN0eWxlLCByZWYgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcIm5vZGVcIiwgXCJzdHlsZVwiLCBcInJlZlwiXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvbGFuZ3VhZ2UtKFxcdyspLy5leGVjKGNsYXNzTmFtZSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlU3RyaW5nID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKFwiXCIpIDogU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChTeW50YXhIaWdobGlnaHRlciwgT2JqZWN0LmFzc2lnbih7IGxhbmd1YWdlOiBtYXRjaFsxXSwgUHJlVGFnOiBcImRpdlwiLCBzdHlsZTogb2thaWRpYSwgY2xhc3NOYW1lOiBcImNvZGUtd3JhcHBlclwiIH0sIHJlc3QpLCBjb2RlU3RyaW5nLnJlcGxhY2UoL1xcbiQvLCBcIlwiKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCByZXN0KSwgY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gfSwgY29udGVudCkpO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIFByb2ZpbGVQaWN0dXJlKHsgaW1hZ2UgfSkge1xuICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2VcbiAgICAgICAgPyBgL3VwbG9hZHMvaW1hZ2VzL3VzZXJzLyR7aW1hZ2V9YFxuICAgICAgICA6IGAvaW1hZ2VzL2xvZ29zL3Byb2ZpbGUtcGljdHVyZS5wbmdgO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzTmFtZTogYGFzcGVjdC1zcXVhcmUgcm91bmRlZC1mdWxsIHctMTIgeGw6dy0xMiBvYmplY3QtY292ZXIgYm9yZGVyLWxpZ2h0LWdyZXktc2Vjb25kYXJ5IGJvcmRlci0yYCwgc3JjOiBpbWFnZVNyYywgYWx0OiBcIlByb2ZpbGUgcGljdHVyZVwiIH0pKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQaWN0dXJlO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFJhbmRvbVF1ZXN0aW9uLCBnZXRRdWVzdGlvbiwgc3VibWl0QW5zd2VycyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9xdWVzdGlvbnNBcGlcIjtcbmltcG9ydCBDaG9pY2VzIGZyb20gXCIuL0Nob2ljZXNcIjtcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi9Db21tZW50L0NvbW1lbnRMaXN0XCI7XG5pbXBvcnQgTGltaXRSZWFjaGVkIGZyb20gXCIuL0xpbWl0UmVhY2hlZFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vTG9hZGluZ1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xuaW1wb3J0IFF1ZXN0aW9uTm90Rm91bmQgZnJvbSBcIi4vUXVlc3Rpb25Ob3RGb3VuZFwiO1xuaW1wb3J0IFF1ZXN0aW9uQ29udGVudCBmcm9tIFwiLi9RdWVzdGlvbkNvbnRlbnRcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgaXRlbSB9IGZyb20gXCIuLi9tb3Rpb24vYW5pbWF0aW9uc1wiO1xuZnVuY3Rpb24gUXVlc3Rpb24oeyBtb2RlLCBxdWVzdGlvbklkLCBzaG93Q29tbWVudHMgfSkge1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtxdWVzdGlvbiwgc2V0UXVlc3Rpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Fuc3dlcnMsIHNldEFuc3dlcnNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsaW1pdFJlYWNoZWQsIHNldExpbWl0UmVhY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3dyYXAsIHNldFdyYXBdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRRdWVzdGlvbigpO1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBxdWl6Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1aXotY29udGFpbmVyJyk7XG4gICAgICAgIGlmIChxdWl6Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZiAod3JhcCkge1xuICAgICAgICAgICAgICAgIHF1aXpDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd3JhcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVpekNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCd3cmFwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbd3JhcF0pO1xuICAgIGZ1bmN0aW9uIGxvYWRRdWVzdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRBbnN3ZXJzKFtdKTtcbiAgICAgICAgICAgIGNvbnN0IHVybEZpbHRlcnMgPSBzZWFyY2hGb3JQYXJhbXMoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUgPT09ICdkaXNwbGF5JyAmJiBxdWVzdGlvbklkID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0geWllbGQgZ2V0UXVlc3Rpb24ocXVlc3Rpb25JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0geWllbGQgZ2V0UmFuZG9tUXVlc3Rpb24odXJsRmlsdGVycyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgnbGltaXRSZWFjaGVkJyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldExpbWl0UmVhY2hlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgnaWQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24oZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBxdWVzdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNlYXJjaEZvclBhcmFtcygpIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgdXJsRmlsdGVycyA9IHt9O1xuICAgICAgICBpZiAoc2VhcmNoUGFyYW1zLmhhcygnZGlmZmljdWx0eScpKSB7XG4gICAgICAgICAgICB1cmxGaWx0ZXJzLmRpZmZpY3VsdHkgPSBzZWFyY2hQYXJhbXMuZ2V0KCdkaWZmaWN1bHR5Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5oYXMoJ2NhdGVnb3J5W10nKSkge1xuICAgICAgICAgICAgdXJsRmlsdGVycy5jYXRlZ29yaWVzID0gc2VhcmNoUGFyYW1zLmdldEFsbCgnY2F0ZWdvcnlbXScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmxGaWx0ZXJzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVOZXh0UXVlc3Rpb24oKSB7XG4gICAgICAgIHNldFZpc2libGUoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVXcmFwKCkge1xuICAgICAgICBzZXRXcmFwKHdyYXAgPT4gIXdyYXApO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIHN1Ym1pdEFuc3dlcnMocXVlc3Rpb24gPT09IG51bGwgfHwgcXVlc3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHF1ZXN0aW9uLmlkLCBhbnN3ZXJzKTtcbiAgICAgICAgICAgICAgICBpZiAocXVlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBxdWVzdGlvbiksIHsgY29ycmVjdENob2ljZXM6IHJlc3VsdC5jb3JyZWN0Q2hvaWNlcywgaXNNYXRjaDogcmVzdWx0LmlzTWF0Y2ggfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN1Ym1pdHRpbmcgYW5zd2VycyA6ICcsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChsaW1pdFJlYWNoZWQpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExpbWl0UmVhY2hlZCwgbnVsbCk7XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIG51bGwpO1xuICAgIGlmICghcXVlc3Rpb24pXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uTm90Rm91bmQsIG51bGwpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFuaW1hdGVQcmVzZW5jZSwgeyBtb2RlOiAnd2FpdCcsIG9uRXhpdENvbXBsZXRlOiAoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgeWllbGQgbG9hZFF1ZXN0aW9uKCk7XG4gICAgICAgICAgICAgICAgc2V0VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgICAgIH0pIH0sIHZpc2libGUgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmRpdiwgeyBrZXk6IHF1ZXN0aW9uLmlkLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgZXhpdDogXCJoaWRkZW5cIiwgdmFyaWFudHM6IGl0ZW0sIGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgIG1vZGUgPT09ICdnYW1lJyAmJlxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2lkZWJhciwgeyBvbk5leHQ6IGhhbmRsZU5leHRRdWVzdGlvbiwgb25XcmFwOiBoYW5kbGVUb2dnbGVXcmFwLCB3cmFwOiB3cmFwLCBpc0xvYWRpbmc6IGxvYWRpbmcgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbkNvbnRlbnQsIHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBtb2RlOiBtb2RlIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hvaWNlcywgeyBtb2RlOiBtb2RlLCBxdWVzdGlvbjogcXVlc3Rpb24sIGFuc3dlcnM6IGFuc3dlcnMsIHNldEFuc3dlcnM6IHNldEFuc3dlcnMgfSksXG4gICAgICAgICAgICAgICAgbW9kZSA9PT0gJ2dhbWUnICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYnV0dG9ucy1jb250YWluZXInIH0sIHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGBidXR0b24gYnV0dG9uLXRlcnRpYXJ5YCwgb25DbGljazogaGFuZGxlTmV4dFF1ZXN0aW9uIH0sIFwiTmV4dCBxdWVzdGlvblwiKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tdGVydGlhcnknLCBvbkNsaWNrOiBoYW5kbGVTdWJtaXQgfSwgXCJWYWxpZGF0ZVwiKSkpKSkpKSksXG4gICAgICAgIHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzICYmIHNob3dDb21tZW50cyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50TGlzdCwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIHNldFF1ZXN0aW9uOiBzZXRRdWVzdGlvbiB9KSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tIFwiLi9NYXJrZG93blJlbmRlcmVyXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIi4vSW1hZ2VcIjtcbmltcG9ydCBFeHBsYW5hdGlvbiBmcm9tIFwiLi9FeHBsYW5hdGlvblwiO1xuZnVuY3Rpb24gUXVlc3Rpb25Db250ZW50KHsgcXVlc3Rpb24sIG1vZGUgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnbGFzcyBib3hcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInF1ZXN0aW9uLWhlYWRlci1jb250YWluZXIgZmxleCBnYXAtOCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTRcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBgdGFncy1jb250YWluZXIgZ3Jvdy0xYCB9LCBxdWVzdGlvbi5jYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnksIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsga2V5OiBgY2F0ZWdvcnktJHtpbmRleH1gIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGB0YWcgdGFnLXNtYWxsYCB9LCBjYXRlZ29yeS5uYW1lKSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCBpdGVtcy1lbmQgZ2FwLTFgIH0sIEFycmF5KDMpLmZpbGwobnVsbCkubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlaWdodENsYXNzID0gaW5kZXggPT09IDAgPyAnaC0zJyA6IGluZGV4ID09PSAxID8gJ2gtNCcgOiAnaC01JztcbiAgICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5Q2xhc3MgPSBpbmRleCA8IChxdWVzdGlvbiA9PT0gbnVsbCB8fCBxdWVzdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcXVlc3Rpb24uZGlmZmljdWx0eSkgPyAnb3BhY2l0eS0xMDAnIDogJ29wYWNpdHktNTAnO1xuICAgICAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGByb3VuZGVkLXNtIHctMS41IGJnLXdoaXRlLzc1ICR7aGVpZ2h0Q2xhc3N9ICR7b3BhY2l0eUNsYXNzfWAsIGtleTogaW5kZXggfSkpO1xuICAgICAgICAgICAgfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYHF1ZXN0aW9uLWNvbnRlbnQtY29udGFpbmVyIG10LTQgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1zZWNvbmRhcnlgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duUmVuZGVyZXIsIHsgY29udGVudDogcXVlc3Rpb24uY29udGVudCB9KSksXG4gICAgICAgIHF1ZXN0aW9uLm51bWJlck9mQ29ycmVjdENob2ljZXMgPiAxICYmXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogJ29wYWNpdHktNTAgdGV4dC1zbSBtdC00JyB9LCBcIk11bHRpcGxlIGNob2ljZXMgcG9zc2libGUuXCIpLFxuICAgICAgICBxdWVzdGlvbi5pbWFnZSAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KEltYWdlLCB7IGltYWdlOiBxdWVzdGlvbi5pbWFnZSB9KSxcbiAgICAgICAgcXVlc3Rpb24uY29ycmVjdENob2ljZXMgJiYgcXVlc3Rpb24uZXhwbGFuYXRpb24gJiYgUmVhY3QuY3JlYXRlRWxlbWVudChFeHBsYW5hdGlvbiwgeyBxdWVzdGlvbjogcXVlc3Rpb24gfSkpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vdXRpbHMvcm91dGVzXCI7XG5mdW5jdGlvbiBRdWVzdGlvbk5vdEZvdW5kKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLWhlYWRlci1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgY2xhc3NOYW1lOiBcImJpZy10aXRsZSBncm93XCIgfSwgXCJRdWVzdGlvbiBub3QgZm91bmRcIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogJ3NtYWxsLXRpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwid2FybmluZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJObyBxdWVzdGlvbiBmb3VuZFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIk5vIHF1ZXN0aW9uIGZvdW5kLCB0cnkgbGF0ZXIgb3Igd2l0aCBkaWZmZXJlbnQgZmlsdGVycy5cIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuRklMVEVSUywgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIH0sIFwiRmlsdGVyc1wiKSkpKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbk5vdEZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi91dGlscy9yb3V0ZXNcIjtcbmZ1bmN0aW9uIFNpZGViYXIoeyBvbk5leHQsIG9uV3JhcCwgd3JhcCwgaXNMb2FkaW5nIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGB4bDpzdGlja3kgdG9wLXNwYWNpbmctcHJpbWFyeSB6LTEwYCB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYXNpZGVcIiwgeyBjbGFzc05hbWU6IGBhYnNvbHV0ZSBnbGFzcyBib3ggYmctZGFyay1ncmV5LXNlY29uZGFyeSBib3R0b20tMCB4bDpib3R0b20tYXV0byB4bDptdC0wIHhsOi1sZWZ0LXNwYWNpbmctcHJpbWFyeSB4bDotdHJhbnNsYXRlLXgtZnVsbCB0cmFuc2xhdGUteS0xLzIgeGw6dHJhbnNsYXRlLXktMCBwLTIgei0xMGAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXIgeGw6ZmxleC1jb2wgZ2FwLTJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiwgb25DbGljazogb25OZXh0LCBkaXNhYmxlZDogaXNMb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJhdXRvcmVuZXdcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLkZJTFRFUlMsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJ0dW5lXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uXCIsIG9uQ2xpY2s6IG9uV3JhcCB9LCB3cmFwID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJzdGFydFwiKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImtleWJvYXJkX3JldHVyblwiKSkpKSkpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xuZnVuY3Rpb24gU3RhY2tzU2xpZGVyKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXIsIHsgbW9kdWxlczogW0F1dG9wbGF5XSwgc3BhY2VCZXR3ZWVuOiAzMCwgbG9vcDogdHJ1ZSwgc3BlZWQ6IDUwMDAsIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgcHJldmVudENsaWNrczogdHJ1ZSwgc2ltdWxhdGVUb3VjaDogZmFsc2UsIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogdHJ1ZSwgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0b3BPbkxhc3RTbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgICB9LCBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgIDMyMDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA1LFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgNjQwOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDcsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAxMDI0OiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEwLFxuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgMTI4MDoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxMixcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIDE1MzY6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMTUsXG4gICAgICAgICAgICAgICAgICAgIHNwYWNlQmV0d2VlbjogMzAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvY3NzMy1sb2dvLnBuZ2AsIGFsdDogXCJDU1MgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvamF2YXNjcmlwdC1sb2dvLnBuZ2AsIGFsdDogXCJKYXZhU2NyaXB0IGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2RvY2tlci1sb2dvLnBuZ2AsIGFsdDogXCJEb2NrZXIgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvbmV4dC1qcy1sb2dvLnBuZ2AsIGFsdDogXCJOZXh0LmpzIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3JlYWN0LWxvZ28ucG5nYCwgYWx0OiBcIlJlYWN0IGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2h0bWwtbG9nby5wbmdgLCBhbHQ6IFwiSFRNTCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9zYXNzLWxvZ28ucG5nYCwgYWx0OiBcIlNhc3MgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3Mvc3ltZm9ueS1sb2dvLTIucG5nYCwgYWx0OiBcIlN5bWZvbnkgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvdGFpbHdpbmRjc3MtbG9nby5wbmdgLCBhbHQ6IFwiVGFpbHdpbmRDU1MgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvdnVlLWpzLWxvZ28ucG5nYCwgYWx0OiBcIlZ1ZS5qcyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy93b3JkcHJlc3MtbG9nby5wbmdgLCBhbHQ6IFwiV29yZHByZXNzIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3B5dGhvbi1sb2dvLnBuZ2AsIGFsdDogXCJQeXRob24gbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvZ2l0LWxvZ28ucG5nYCwgYWx0OiBcIkdpdCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9ub2RlLWpzLWxvZ28ucG5nYCwgYWx0OiBcIk5vZGUuanMgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvcGhwLWxvZ28ucG5nYCwgYWx0OiBcIlBIUCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy90eXBlc2NyaXB0LWxvZ28ucG5nYCwgYWx0OiBcIlR5cGVTY3JpcHQgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvZGphbmdvLWxvZ28ucG5nYCwgYWx0OiBcIkRqYW5nbyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9hbmd1bGFyLWxvZ28ucG5nYCwgYWx0OiBcIkFuZ3VsYXIgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvdHdpZy1sb2dvLnBuZ2AsIGFsdDogXCJUd2lnIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2dpdGh1Yi1sb2dvLnBuZ2AsIGFsdDogXCJHaXRIdWIgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvbGFyYXZlbC1sb2dvLnBuZ2AsIGFsdDogXCJMYXJhdmVsIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL215c3FsLWxvZ28ucG5nYCwgYWx0OiBcIk15U1FMIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2V4cHJlc3MtbG9nby5wbmdgLCBhbHQ6IFwiRXhwcmVzc0pTIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2dpdGxhYi1sb2dvLnBuZ2AsIGFsdDogXCJHaXRMYWIgbG9nb1wiIH0pKSkpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFN0YWNrc1NsaWRlcjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBjdXJyZW50VXNlcjogbnVsbCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGlzQXV0aG9yOiAoKSA9PiBmYWxzZSxcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6ICgpID0+IGZhbHNlLFxuICAgIGlzQWRtaW46ICgpID0+IGZhbHNlLFxufSk7XG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBmZXRjaEN1cnJlbnRVc2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCcvYXBpL3VzZXIvY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaEN1cnJlbnRVc2VyKCk7XG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIGlzQXV0aG9yKGNvbnRlbnRBdXRob3JJZCkge1xuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gY3VycmVudFVzZXIuaWQgPT09IGNvbnRlbnRBdXRob3JJZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFVzZXIgIT09IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzQWRtaW4oKSB7XG4gICAgICAgIGlmICghY3VycmVudFVzZXIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBpc0F1dGhvcixcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICBpc0FkbWluXG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBdXRoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdmFsdWUgfSwgY2hpbGRyZW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gICAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gdXNlUmF5c0FuaW1hdGlvbihxdWVzdGlvbiwgbW9kZSkge1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXlzJyk7XG4gICAgICAgIGlmIChtb2RlID09PSAnZGlzcGxheScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChvcmlnaW5hbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbi5jb3JyZWN0Q2hvaWNlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yQ2xhc3MgPSBxdWVzdGlvbi5pc01hdGNoID09PSB0cnVlID8gJ2dyZWVuJyA6ICdyZWQnO1xuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb2xvckNsYXNzKTtcbiAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAoX2EgPSBvcmlnaW5hbEVsZW1lbnQucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluc2VydEJlZm9yZShjbG9uZWRFbGVtZW50LCBvcmlnaW5hbEVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIChfYiA9IG9yaWdpbmFsRWxlbWVudC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5zZXJ0QmVmb3JlKGNsb25lZEVsZW1lbnQsIG9yaWdpbmFsRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbicpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcXVlc3Rpb24sIG1vZGVdKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZVJheXNBbmltYXRpb247XG4iLCJleHBvcnQgY29uc3QgY29udGFpbmVyID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB5OiAxMCxcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjIsXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGl0ZW0gPSB7XG4gICAgdmlzaWJsZToge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB5OiAwLFxuICAgIH0sXG4gICAgaGlkZGVuOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6IDEwLFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFjY29yZGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWJ1dHRvbicpO1xuICAgIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWNjb3JkaW9uQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFjY29yZGlvbik7XG4gICAgfSk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldEZpbHRlcnMnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uRm9ybScpO1xuICAgIHJlc2V0QnV0dG9uID09PSBudWxsIHx8IHJlc2V0QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gZm9ybSA9PT0gbnVsbCB8fCBmb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICByYWRpb0J1dHRvbnMgPT09IG51bGwgfHwgcmFkaW9CdXR0b25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByYWRpb0J1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAocmFkaW8pIHtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBmb3JtID09PSBudWxsIHx8IGZvcm0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgIGNoZWNrYm94ZXMgPT09IG51bGwgfHwgY2hlY2tib3hlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hlY2tib3hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGVja2JveCkge1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLW1lbnUnKTtcbiAgICBjb25zdCBoZWFkZXJCb3R0b21Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJvdHRvbS1jb250YWluZXInKTtcbiAgICBsZXQgaXNNZW51T3BlbiA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgICAgICBoZWFkZXJCb3R0b21Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICBpc01lbnVPcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgICAgICBoZWFkZXJCb3R0b21Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBpc01lbnVPcGVuID0gZmFsc2U7XG4gICAgfVxuICAgIG1lbnVCdXR0b24gPT09IG51bGwgfHwgbWVudUJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKCFpc01lbnVPcGVuKSB7XG4gICAgICAgICAgICBvcGVuTWVudSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2xvc2VNZW51KCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBoZWFkZXJCb3R0b21Db250YWluZXIgPT09IG51bGwgfHwgaGVhZGVyQm90dG9tQ29udGFpbmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWFkZXJCb3R0b21Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChpc01lbnVPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbGV0ZS1jaG9pY2UnKS5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2VzdCgnLmNob2ljZS1pdGVtJykucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUFkZEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWRkX2l0ZW1fbGluaycpLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEZvcm1Ub0NvbGxlY3Rpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlQWRkQnV0dG9uU3RhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgY2hvaWNlc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hvaWNlcy1saXN0Jyk7XHJcbiAgICAgICAgaWYgKCFjaG9pY2VzTGlzdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBtYXhDaG9pY2VzID0gcGFyc2VJbnQoY2hvaWNlc0xpc3QuZGF0YXNldC5tYXhDaG9pY2VzKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hvaWNlLWl0ZW0nKS5sZW5ndGg7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRfaXRlbV9saW5rJykuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgICAgICBidG4uZGlzYWJsZWQgPSBjdXJyZW50Q291bnQgPj0gbWF4Q2hvaWNlcztcclxuXHJcbiAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudCA9IGJ0bi5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJy5tYXgtY2hvaWNlcy1tZXNzYWdlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvdW50ID49IG1heENob2ljZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmNsYXNzTmFtZSA9ICdtYXgtY2hvaWNlcy1tZXNzYWdlIHRleHQtc20gb3BhY2l0eS01MCBtdC00JztcclxuICAgICAgICAgICAgICAgICAgICBidG4ucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IGBNYXhpbXVtIG51bWJlciBvZiBjaG9pY2VzIHJlYWNoZWQuYDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRGb3JtVG9Db2xsZWN0aW9uKGUpIHtcclxuICAgICAgICBjb25zdCBjb2xsZWN0aW9uSG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLicgKyBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb2xsZWN0aW9uSG9sZGVyQ2xhc3MpO1xyXG5cclxuICAgICAgICBpZiAoIWNvbGxlY3Rpb25Ib2xkZXIgfHwgIWNvbGxlY3Rpb25Ib2xkZXIuZGF0YXNldC5wcm90b3R5cGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ29sbGVjdGlvbiBob2xkZXIgb3IgcHJvdG90eXBlIG5vdCBmb3VuZCcsIGNvbGxlY3Rpb25Ib2xkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Nob2ljZS1pdGVtJywgJ2ZsZXgnLCAnZmxleC1jb2wnLCAnbWItOCcsICdyZWxhdGl2ZScpO1xyXG5cclxuICAgICAgICBpdGVtLmlubmVySFRNTCA9IGNvbGxlY3Rpb25Ib2xkZXIuZGF0YXNldC5wcm90b3R5cGUucmVwbGFjZShcclxuICAgICAgICAgICAgL19fbmFtZV9fL2csXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25Ib2xkZXIuZGF0YXNldC5pbmRleFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHJlbW92ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbicsICdidXR0b24tYWN0aW9uJywgJ2Fic29sdXRlJywgJ2JvdHRvbS1bMTZweF0nLCAncmlnaHQtWzE2cHhdJywgJ2RlbGV0ZS1jaG9pY2UnKTtcclxuICAgICAgICByZW1vdmVCdXR0b24uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L3NwYW4+YDtcclxuXHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB1cGRhdGVBZGRCdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XHJcbiAgICAgICAgY29sbGVjdGlvbkhvbGRlci5hcHBlbmRDaGlsZChpdGVtKTtcclxuXHJcbiAgICAgICAgY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LmluZGV4Kys7XHJcblxyXG4gICAgICAgIHVwZGF0ZUFkZEJ1dHRvblN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWRkQnV0dG9uU3RhdGUoKTtcclxufSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zdCBzd2l0Y2hCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uLnN3aXRjaC1sYWJlbCcpO1xuICAgIGNvbnN0IHNjb3Jlc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zY29yZS1jb250YWluZXInKTtcbiAgICBmdW5jdGlvbiBzaG93U2NvcmVzQnlQZXJpb2QocGVyaW9kKSB7XG4gICAgICAgIHNjb3Jlc0NvbnRhaW5lci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHZpc2libGVTY29yZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuc2NvcmUtY29udGFpbmVyW2RhdGEtcGVyaW9kPVwiJHtwZXJpb2R9XCJdYCk7XG4gICAgICAgIHZpc2libGVTY29yZXMuZm9yRWFjaChzY29yZSA9PiB7XG4gICAgICAgICAgICBzY29yZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN3aXRjaEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpbmRleCkgPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2hCdXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNob3dTY29yZXNCeVBlcmlvZCgnd2VlaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QoJ21vbnRoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHNob3dTY29yZXNCeVBlcmlvZCgnYWxsLXRpbWUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgY29uc3QgYWN0aXZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaC1sYWJlbC5hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlQnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gQXJyYXkuZnJvbShzd2l0Y2hCdXR0b25zKS5pbmRleE9mKGFjdGl2ZUJ1dHRvbik7XG4gICAgICAgIGNvbnN0IHBlcmlvZHMgPSBbJ3dlZWsnLCAnbW9udGgnLCAnYWxsLXRpbWUnXTtcbiAgICAgICAgc2hvd1Njb3Jlc0J5UGVyaW9kKHBlcmlvZHNbYWN0aXZlSW5kZXhdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNob3dTY29yZXNCeVBlcmlvZCgnd2VlaycpO1xuICAgIH1cbn0pO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5jb25zdCBCQVNFX1VSTCA9ICcvYXBpJztcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21tZW50cyhxdWVzdGlvbklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vcXVlc3Rpb24vJHtxdWVzdGlvbklkfS9jb21tZW50c2ApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldExhc3RDb21tZW50cygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9jb21tZW50cy9sYXN0YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLmNvbW1lbnRzO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZENvbW1lbnQocXVlc3Rpb25JZCwgY29udGVudCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9L3F1ZXN0aW9uLyR7cXVlc3Rpb25JZH0vY29tbWVudC9hZGRgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29udGVudDogY29udGVudCB9KSxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSB5aWVsZCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTZXJ2ZXIgZXJyb3I6JywgZXJyb3JUZXh0KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2VydmVyIGVycm9yOiAke3Jlc3BvbnNlLnN0YXR1c30gJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tbWVudChjb21tZW50SWQsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9jb21tZW50LyR7Y29tbWVudElkfS9lZGl0YCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudElkOiBjb21tZW50SWQsIGNvbnRlbnQ6IGNvbnRlbnQgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8ICdFcnJvciB3aGlsZSBjb21tZW50IGVkaXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVDb21tZW50KGNvbW1lbnRJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9L2NvbW1lbnQvJHtjb21tZW50SWR9L2RlbGV0ZWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JEYXRhLmVycm9yIHx8ICdFcnJvciB3aGlsZSBjb21tZW50IGVkaXRpb24uJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgQkFTRV9VUkwgPSAnL2FwaS9xdWVzdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tUXVlc3Rpb24oKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCBhcmd1bWVudHMsIHZvaWQgMCwgZnVuY3Rpb24qIChmaWx0ZXJzID0ge30pIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBpZiAoZmlsdGVycy5kaWZmaWN1bHR5ICYmICFpc05hTihwYXJzZUZsb2F0KGZpbHRlcnMuZGlmZmljdWx0eSkpKSB7XG4gICAgICAgICAgICBwYXJhbXMuYXBwZW5kKCdkaWZmaWN1bHR5JywgZmlsdGVycy5kaWZmaWN1bHR5KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVycy5jYXRlZ29yaWVzICYmIGZpbHRlcnMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmaWx0ZXJzLmNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnY2F0ZWdvcnlbXScsIGNhdGVnb3J5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9PyR7cGFyYW1zfWApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9uKHF1ZXN0aW9uSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS8ke3F1ZXN0aW9uSWR9YCk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3VibWl0QW5zd2VycyhxdWVzdGlvbklkLCBhbnN3ZXJzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vJHtxdWVzdGlvbklkfS9jaGVja2AsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbnN3ZXJzOiBhbnN3ZXJzIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBST1VURVMgPSB7XG4gICAgSE9NRTogJy8nLFxuICAgIFFVSVo6ICcvcXVpeicsXG4gICAgRklMVEVSUzogJy9maWx0ZXJzJyxcbiAgICBMT0dJTjogJy9sb2dpbicsXG4gICAgUkVHSVNURVI6ICcvcmVnaXN0ZXInLFxuICAgIFFVRVNUSU9OOiAnL3F1ZXN0aW9uJ1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZVJvb3QiLCJBdXRoUHJvdmlkZXIiLCJRdWVzdGlvbiIsIkRlbW8iLCJBY3Rpdml0eSIsIlN0YWNrc1NsaWRlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXN0aW9uQ29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsIm1vZGUiLCJkYXRhc2V0IiwicXVlc3Rpb25JZCIsInBhcnNlSW50Iiwic2hvd0NvbW1lbnRzIiwicm9vdCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJkZW1vQ29udGFpbmVyIiwiYWN0aXZpdHlDb250YWluZXIiLCJzdGFja3NTbGlkZXJDb250YWluZXIiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsIkFycmF5IiwiZnJvbSIsInRlc3QiLCJpc0FycmF5IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJhcHBseSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udGFpbmVyIiwibW90aW9uIiwiZ2V0TGFzdENvbW1lbnRzIiwiQ29tbWVudEl0ZW0iLCJST1VURVMiLCJMb2FkaW5nIiwiX3JlZiIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRDb21tZW50cyIsIl9jYWxsZWUiLCJkYXRhIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwiY29uc29sZSIsImVycm9yIiwiRnJhZ21lbnQiLCJ1bCIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJtYXAiLCJjb21tZW50IiwiaW5kZXgiLCJrZXkiLCJjb25jYXQiLCJocmVmIiwiUVVJWiIsIk1hcmtkb3duUmVuZGVyZXIiLCJ1c2VSYXlzQW5pbWF0aW9uIiwiaXRlbSIsIkNob2ljZXMiLCJxdWVzdGlvbiIsImFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwiaGFuZGxlQW5zd2Vyc0NoYW5nZSIsImFuc3dlcklkIiwiY29ycmVjdENob2ljZXMiLCJwcmV2U2VsZWN0ZWQiLCJudW1iZXJPZkNvcnJlY3RDaG9pY2VzIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJpZCIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldEFuc3dlclN0YXR1cyIsImlzU2VsZWN0ZWQiLCJpc0NvcnJlY3QiLCJjaG9pY2VzIiwiY2hvaWNlIiwibGkiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJjb250ZW50IiwiZGVsZXRlQ29tbWVudCIsIkNvbW1lbnRVcGRhdGUiLCJzZXRRdWVzdGlvbiIsIm9uQ29tbWVudERlbGV0ZSIsIm9uQ2FuY2VsIiwiaXNEZWxldGluZyIsInNldElzRGVsZXRpbmciLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImRlbGV0ZWRDb21tZW50IiwidXBkYXRlZFF1ZXN0aW9uIiwicHJldmVudERlZmF1bHQiLCJhc3NpZ24iLCJtZXNzYWdlIiwib25DbGljayIsImRpc2FibGVkIiwiQ29tbWVudERlbGV0ZSIsInVzZUF1dGgiLCJQcm9maWxlUGljdHVyZSIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsIl9mb3JtYXREYXRlIiwiZm9ybWF0RGF0ZSIsImNyZWF0aW9uRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJmb3JtYXR0ZWRUaW1lIiwiX3VzZUF1dGgiLCJpc0F1dGhvciIsImlzQWRtaW4iLCJ1c2VyQ2FuRWRpdCIsImF1dGhvciIsImhhbmRsZUNvbW1lbnRVcGRhdGVkIiwiaGFuZGxlQ29tbWVudERlbGV0ZWQiLCJoYW5kbGVTdGFydEVkaXRpbmciLCJoYW5kbGVTdGFydERlbGV0aW5nIiwiZGF0ZU9iamVjdCIsImRhdGUiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImltYWdlIiwidXNlcm5hbWUiLCJRVUVTVElPTiIsIm9uQ29tbWVudFVwZGF0ZWQiLCJhZGRDb21tZW50IiwiTWFya2Rvd25JbmZvcyIsIkNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudCIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsIm1hcmtkb3duSW5mb3MiLCJzZXRNYXJrZG93bkluZm9zIiwiaXNBdXRoZW50aWNhdGVkIiwibmV3Q29tbWVudCIsImhhbmRsZVNob3dJbmZvcyIsInByZXZTdGF0ZSIsIm9uU3VibWl0IiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyb3dzIiwicmVxdWlyZWQiLCJzcmMiLCJhbHQiLCJMT0dJTiIsIlJFR0lTVEVSIiwidXBkYXRlQ29tbWVudCIsInNldE5ld0NvbW1lbnQiLCJ1cGRhdGVkQ29tbWVudCIsImNvbW1lbnRJbmRleCIsImZpbmRJbmRleCIsIlF1ZXN0aW9uQ29udGVudCIsImRlbW9BbnN3ZXJzMSIsImRlbW9RdWVzdGlvbjEiLCJkZW1vQW5zd2VyczIiLCJkZW1vUXVlc3Rpb24yIiwiZGVtb0Fuc3dlcnMzIiwiZGVtb1F1ZXN0aW9uMyIsImRlbW9BbnN3ZXJzNCIsImRlbW9RdWVzdGlvbjQiLCJkZW1vQW5zd2VyczUiLCJkZW1vUXVlc3Rpb241IiwiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJBdXRvcGxheSIsInF1ZXN0aW9uc0RhdGEiLCJzcGVlZCIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJtb2R1bGVzIiwiZGl2IiwiZXhpdCIsIkV4cGxhbmF0aW9uIiwiZXhwbGFuYXRpb24iLCJJbWFnZSIsIkxpbWl0UmVhY2hlZCIsIl9fcmVzdCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIlJlYWN0TWFya2Rvd24iLCJQcmlzbSIsIlN5bnRheEhpZ2hsaWdodGVyIiwib2thaWRpYSIsImNvbXBvbmVudHMiLCJjb2RlIiwiX2EiLCJjaGlsZHJlbiIsIm5vZGUiLCJzdHlsZSIsInJlZiIsInJlc3QiLCJtYXRjaCIsImV4ZWMiLCJjb2RlU3RyaW5nIiwiam9pbiIsIlN0cmluZyIsImxhbmd1YWdlIiwiUHJlVGFnIiwicmVwbGFjZSIsImltYWdlU3JjIiwiZ2V0UmFuZG9tUXVlc3Rpb24iLCJnZXRRdWVzdGlvbiIsInN1Ym1pdEFuc3dlcnMiLCJTaWRlYmFyIiwiUXVlc3Rpb25Ob3RGb3VuZCIsIkFuaW1hdGVQcmVzZW5jZSIsIl90aGlzIiwibGltaXRSZWFjaGVkIiwic2V0TGltaXRSZWFjaGVkIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJfdXNlU3RhdGUxMSIsIl91c2VTdGF0ZTEyIiwic2V0V3JhcCIsImxvYWRRdWVzdGlvbiIsInF1aXpDb250YWluZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJ1cmxGaWx0ZXJzIiwic2VhcmNoRm9yUGFyYW1zIiwic2VhcmNoUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJoYXMiLCJkaWZmaWN1bHR5IiwiZ2V0IiwiY2F0ZWdvcmllcyIsImdldEFsbCIsImhhbmRsZU5leHRRdWVzdGlvbiIsImhhbmRsZVRvZ2dsZVdyYXAiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImlzTWF0Y2giLCJvbkV4aXRDb21wbGV0ZSIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwib25OZXh0Iiwib25XcmFwIiwiaXNMb2FkaW5nIiwiY2F0ZWdvcnkiLCJmaWxsIiwiXyIsImhlaWdodENsYXNzIiwib3BhY2l0eUNsYXNzIiwiRklMVEVSUyIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwicHJldmVudENsaWNrcyIsInNpbXVsYXRlVG91Y2giLCJ0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQiLCJwYXVzZU9uTW91c2VFbnRlciIsInN0b3BPbkxhc3RTbGlkZSIsIndhaXRGb3JUcmFuc2l0aW9uIiwiYnJlYWtwb2ludHMiLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZmV0Y2hDdXJyZW50VXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29udGVudEF1dGhvcklkIiwicm9sZXMiLCJQcm92aWRlciIsInVzZUNvbnRleHQiLCJfYiIsIm9yaWdpbmFsRWxlbWVudCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJjb2xvckNsYXNzIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImhpZGRlbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwicmVxdWlyZSIsImFjY29yZGlvbkJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlQWNjb3JkaW9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidG9nZ2xlIiwiY29udGFpbnMiLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJidXR0b24iLCJyZXNldEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsInJhZGlvQnV0dG9ucyIsInJhZGlvIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwibWVudUJ1dHRvbiIsImhlYWRlckJvdHRvbUNvbnRhaW5lciIsImlzTWVudU9wZW4iLCJvcGVuTWVudSIsImNsb3NlTWVudSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xvc2VzdCIsInVwZGF0ZUFkZEJ1dHRvblN0YXRlIiwiYnRuIiwiYWRkRm9ybVRvQ29sbGVjdGlvbiIsImNob2ljZXNMaXN0IiwibWF4Q2hvaWNlcyIsImN1cnJlbnRDb3VudCIsIm1lc3NhZ2VFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0Q29udGVudCIsImNvbGxlY3Rpb25Ib2xkZXIiLCJjdXJyZW50VGFyZ2V0IiwiY29sbGVjdGlvbkhvbGRlckNsYXNzIiwiaW5uZXJIVE1MIiwicmVtb3ZlQnV0dG9uIiwic3dpdGNoQnV0dG9ucyIsInNjb3Jlc0NvbnRhaW5lciIsInNob3dTY29yZXNCeVBlcmlvZCIsInBlcmlvZCIsInZpc2libGVTY29yZXMiLCJzY29yZSIsImFjdGl2ZUJ1dHRvbiIsImFjdGl2ZUluZGV4IiwicGVyaW9kcyIsIkJBU0VfVVJMIiwiZ2V0Q29tbWVudHMiLCJlcnJvclRleHQiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsIm9rIiwidGV4dCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJjb21tZW50SWQiLCJfY2FsbGVlNCIsImVycm9yRGF0YSIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsIl9jYWxsZWU1IiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiYXJndW1lbnRzIiwiZmlsdGVycyIsInVuZGVmaW5lZCIsInBhcmFtcyIsInBhcnNlRmxvYXQiLCJhcHBlbmQiLCJIT01FIl0sInNvdXJjZVJvb3QiOiIifQ==