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
/* harmony import */ var _components_Question_Question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Question/Question */ "./assets/components/Question/Question.tsx");
/* harmony import */ var _components_Demo_Demo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Demo/Demo */ "./assets/components/Demo/Demo.tsx");
/* harmony import */ var _components_Sections_Activity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Sections/Activity */ "./assets/components/Sections/Activity.tsx");
/* harmony import */ var _components_Sections_StacksSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Sections/StacksSlider */ "./assets/components/Sections/StacksSlider.tsx");
/* harmony import */ var _components_Share_Share__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Share/Share */ "./assets/components/Share/Share.tsx");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/filters */ "./assets/scripts/filters.ts");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scripts_filters__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scripts_switches__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/switches */ "./assets/scripts/switches.ts");
/* harmony import */ var _scripts_switches__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scripts_switches__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scripts_question_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/question-form */ "./assets/scripts/question-form.js");
/* harmony import */ var _scripts_question_form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scripts_question_form__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scripts_question_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/question-autocomplete */ "./assets/scripts/question-autocomplete.ts");
/* harmony import */ var _scripts_question_autocomplete__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scripts_question_autocomplete__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scripts/menu */ "./assets/scripts/menu.ts");
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scripts_accordion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scripts/accordion */ "./assets/scripts/accordion.ts");
/* harmony import */ var _scripts_accordion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scripts_accordion__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scripts_textarea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scripts/textarea */ "./assets/scripts/textarea.ts");
/* harmony import */ var _scripts_textarea__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scripts_textarea__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scripts_appear_on_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scripts/appear-on-scroll */ "./assets/scripts/appear-on-scroll.ts");
/* harmony import */ var _scripts_appear_on_scroll__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scripts_appear_on_scroll__WEBPACK_IMPORTED_MODULE_17__);


















document.addEventListener('DOMContentLoaded', function () {
  var questionContainer = document.querySelector('#quiz-container');
  if (questionContainer) {
    var mode = questionContainer.dataset.mode || 'quiz';
    var questionId = parseInt(questionContainer.dataset.questionId || '0');
    var showComments = questionContainer.dataset.showComments !== 'false';
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(questionContainer);
    root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Question_Question__WEBPACK_IMPORTED_MODULE_4__["default"], {
      mode: mode,
      questionId: questionId,
      showComments: showComments
    })));
  }
  var demoContainer = document.querySelector('#demo-container');
  if (demoContainer) {
    var _root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(demoContainer);
    _root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Demo_Demo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      mode: 'display'
    }));
  }
  var shareContainer = document.querySelector('#share-container');
  if (shareContainer) {
    var _questionId = parseInt(shareContainer.dataset.questionId || '0');
    var _mode = shareContainer.dataset.mode || 'display';
    var _root2 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(shareContainer);
    _root2.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Share_Share__WEBPACK_IMPORTED_MODULE_8__["default"], {
      questionId: _questionId,
      mode: _mode
    }));
  }
  var activityContainer = document.querySelector('#activity-container');
  if (activityContainer) {
    var _mode2 = activityContainer.dataset.mode || 'display';
    var _root3 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(activityContainer);
    _root3.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Sections_Activity__WEBPACK_IMPORTED_MODULE_6__["default"], {
      mode: _mode2
    }));
  }
  var stacksSliderContainer = document.querySelector('#stacks-slider-container');
  if (stacksSliderContainer) {
    var _root4 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot)(stacksSliderContainer);
    _root4.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_Sections_StacksSlider__WEBPACK_IMPORTED_MODULE_7__["default"], null));
  }
});

/***/ }),

/***/ "./assets/components/Banner/Banner.tsx":
/*!*********************************************!*\
  !*** ./assets/components/Banner/Banner.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Banner: () => (/* binding */ Banner),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







function Banner(_ref) {
  var _ref$color = _ref.color,
    color = _ref$color === void 0 ? '' : _ref$color;
  var particles = Array.from({
    length: 50
  }, function (_, index) {
    return index + 1;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("section", {
    className: "rays ".concat(color)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: 'glow'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: 'hero'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
    className: "particles"
  }, particles.map(function (index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      key: index,
      className: "circle-container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("div", {
      className: "circle"
    }));
  })));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

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
/* harmony import */ var _Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Markdown/MarkdownRenderer */ "./assets/components/Markdown/MarkdownRenderer.tsx");
/* harmony import */ var _CommentUpdate__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./CommentUpdate */ "./assets/components/Comment/CommentUpdate.tsx");
/* harmony import */ var _CommentDelete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./CommentDelete */ "./assets/components/Comment/CommentDelete.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../context/AuthContext */ "./assets/context/AuthContext.tsx");
/* harmony import */ var _ProfilePicture__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ProfilePicture */ "./assets/components/Comment/ProfilePicture.tsx");
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20___default().createElement(_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_21__.MarkdownRenderer, {
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
/* harmony import */ var _Markdown_MarkdownInfos__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../Markdown/MarkdownInfos */ "./assets/components/Markdown/MarkdownInfos.tsx");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../utils/routes */ "./assets/utils/routes.ts");
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
    className: "form code-editor",
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
  }, isSubmitting ? 'Sending' : 'Send')))), markdownInfos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement(_Markdown_MarkdownInfos__WEBPACK_IMPORTED_MODULE_36__["default"], null))) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "glass box flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("h2", {
    className: 'small-title'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("span", {
    className: "material-icons"
  }, "chat_bubble"), "Wanna join the conversation ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("p", null, "Please login or register !")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_37__.ROUTES.LOGIN,
    className: "button button-tertiary"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_32___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_37__.ROUTES.REGISTER,
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
/* harmony import */ var _Markdown_MarkdownInfos__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../Markdown/MarkdownInfos */ "./assets/components/Markdown/MarkdownInfos.tsx");
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
  }, isSubmitting ? 'Updating' : 'Save')))), markdownInfos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_31___default().createElement(_Markdown_MarkdownInfos__WEBPACK_IMPORTED_MODULE_33__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentUpdate);

/***/ }),

/***/ "./assets/components/Comment/ProfilePicture.tsx":
/*!******************************************************!*\
  !*** ./assets/components/Comment/ProfilePicture.tsx ***!
  \******************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePicture);

/***/ }),

/***/ "./assets/components/Demo/Demo.tsx":
/*!*****************************************!*\
  !*** ./assets/components/Demo/Demo.tsx ***!
  \*****************************************/
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
/* harmony import */ var _Question_QuestionContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Question/QuestionContent */ "./assets/components/Question/QuestionContent.tsx");
/* harmony import */ var _Question_Choices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Question/Choices */ "./assets/components/Question/Choices.tsx");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _demoQuestion1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demoQuestion1 */ "./assets/components/Demo/demoQuestion1.ts");
/* harmony import */ var _demoQuestion2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demoQuestion2 */ "./assets/components/Demo/demoQuestion2.ts");
/* harmony import */ var _demoQuestion3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demoQuestion3 */ "./assets/components/Demo/demoQuestion3.ts");
/* harmony import */ var _demoQuestion4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demoQuestion4 */ "./assets/components/Demo/demoQuestion4.ts");
/* harmony import */ var _demoQuestion5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demoQuestion5 */ "./assets/components/Demo/demoQuestion5.ts");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");














function Demo(_ref) {
  var mode = _ref.mode;
  var questionsData = [{
    question: _demoQuestion1__WEBPACK_IMPORTED_MODULE_6__.demoQuestion1,
    answers: _demoQuestion1__WEBPACK_IMPORTED_MODULE_6__.demoAnswers1
  }, {
    question: _demoQuestion2__WEBPACK_IMPORTED_MODULE_7__.demoQuestion2,
    answers: _demoQuestion2__WEBPACK_IMPORTED_MODULE_7__.demoAnswers2
  }, {
    question: _demoQuestion3__WEBPACK_IMPORTED_MODULE_8__.demoQuestion3,
    answers: _demoQuestion3__WEBPACK_IMPORTED_MODULE_8__.demoAnswers3
  }, {
    question: _demoQuestion4__WEBPACK_IMPORTED_MODULE_9__.demoQuestion4,
    answers: _demoQuestion4__WEBPACK_IMPORTED_MODULE_9__.demoAnswers4
  }, {
    question: _demoQuestion5__WEBPACK_IMPORTED_MODULE_10__.demoQuestion5,
    answers: _demoQuestion5__WEBPACK_IMPORTED_MODULE_10__.demoAnswers5
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Question_QuestionContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
      question: data.question,
      mode: mode
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_4__["default"], {
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

/***/ "./assets/components/Markdown/MarkdownInfos.tsx":
/*!******************************************************!*\
  !*** ./assets/components/Markdown/MarkdownInfos.tsx ***!
  \******************************************************/
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

/***/ "./assets/components/Markdown/MarkdownRenderer.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/Markdown/MarkdownRenderer.tsx ***!
  \*********************************************************/
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

/***/ "./assets/components/Question/Choices.tsx":
/*!************************************************!*\
  !*** ./assets/components/Question/Choices.tsx ***!
  \************************************************/
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
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../Markdown/MarkdownRenderer */ "./assets/components/Markdown/MarkdownRenderer.tsx");
/* harmony import */ var _hook_RaysAnimation__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../hook/RaysAnimation */ "./assets/hook/RaysAnimation.tsx");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _scripts_shuffle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../scripts/shuffle */ "./assets/scripts/shuffle.ts");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }


























function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






function Choices(_ref) {
  var mode = _ref.mode,
    question = _ref.question,
    answers = _ref.answers,
    setAnswers = _ref.setAnswers;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_26__.useState)(function () {
      return (0,_scripts_shuffle__WEBPACK_IMPORTED_MODULE_30__["default"])(question.choices);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    shuffledChoices = _useState2[0],
    setShuffledChoices = _useState2[1];
  (0,_hook_RaysAnimation__WEBPACK_IMPORTED_MODULE_28__["default"])(question, mode);
  function handleAnswersChange(answerId) {
    if (question.correctChoices || !setAnswers) {
      return;
    }
    setAnswers(function (prevSelected) {
      if (question.numberOfCorrectChoices === 1) {
        return [answerId];
      }
      var isCurrentlySelected = prevSelected.includes(answerId);
      return isCurrentlySelected ? prevSelected.filter(function (id) {
        return id !== answerId;
      }) : [].concat(_toConsumableArray(prevSelected), [answerId]);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_31__.motion.ul, {
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_29__.container,
    initial: "hidden",
    animate: "visible",
    className: "choices-container flex flex-col gap-spacing-primary ".concat(question.numberOfCorrectChoices > 1 && 'multiple-choices')
  }, shuffledChoices.map(function (choice, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_31__.motion.li, {
      variants: _motion_animations__WEBPACK_IMPORTED_MODULE_29__.item,
      key: "choice-".concat(choice.id),
      className: "choice-option glass"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("fieldset", {
      className: "checkbox-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("input", {
      type: "".concat(question.numberOfCorrectChoices > 1 ? 'checkbox' : 'radio'),
      id: "choice-".concat(index),
      name: "choice",
      value: choice.id,
      checked: answers.includes(choice.id),
      onChange: function onChange() {
        return handleAnswersChange(choice.id);
      },
      className: "checkbox-input ".concat(getAnswerStatus(choice.id), " ").concat(answers.includes(choice.id) ? 'checked' : '')
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
      className: "checkbox-tile box"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement("span", {
      className: "checkbox-label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_26___default().createElement(_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_27__.MarkdownRenderer, {
      content: choice.content
    }))))));
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Choices);

/***/ }),

/***/ "./assets/components/Question/Explanation.tsx":
/*!****************************************************!*\
  !*** ./assets/components/Question/Explanation.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Markdown/MarkdownRenderer */ "./assets/components/Markdown/MarkdownRenderer.tsx");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");




function Explanation(_ref) {
  var question = _ref.question,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'display' : _ref$mode;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(motion_react__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    variants: _motion_animations__WEBPACK_IMPORTED_MODULE_2__.item,
    className: "question-bottom-container mt-4 flex flex-col gap-spacing-secondary"
  }, mode === 'game' ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold"
  }, question.isMatch ? 'Correct !' : 'Incorrect...', " Here's an explanation")) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "text-lg font-semibold"
  }, "Explanation")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_1__.MarkdownRenderer, {
    content: question.explanation
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Explanation);

/***/ }),

/***/ "./assets/components/Question/Question.tsx":
/*!*************************************************!*\
  !*** ./assets/components/Question/Question.tsx ***!
  \*************************************************/
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
/* harmony import */ var _services_questionsApi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../services/questionsApi */ "./assets/services/questionsApi.ts");
/* harmony import */ var _Choices__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Choices */ "./assets/components/Question/Choices.tsx");
/* harmony import */ var _Comment_CommentList__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../Comment/CommentList */ "./assets/components/Comment/CommentList.tsx");
/* harmony import */ var _Sections_LimitReached__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../Sections/LimitReached */ "./assets/components/Sections/LimitReached.tsx");
/* harmony import */ var _Sections_Loading__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../Sections/Loading */ "./assets/components/Sections/Loading.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Sidebar */ "./assets/components/Question/Sidebar.tsx");
/* harmony import */ var _Sections_QuestionNotFound__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../Sections/QuestionNotFound */ "./assets/components/Sections/QuestionNotFound.tsx");
/* harmony import */ var _QuestionContent__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./QuestionContent */ "./assets/components/Question/QuestionContent.tsx");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/components/AnimatePresence/index.mjs");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../motion/animations */ "./assets/motion/animations.ts");
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
              window.scrollTo({
                top: 0
              });
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
  if (limitReached) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Sections_LimitReached__WEBPACK_IMPORTED_MODULE_39__["default"], null);
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Sections_Loading__WEBPACK_IMPORTED_MODULE_40__["default"], null);
  if (!question) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Sections_QuestionNotFound__WEBPACK_IMPORTED_MODULE_42__["default"], null);
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
    isLoading: loading,
    question: question
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement("div", {
    className: "flex flex-col gap-spacing-primary mb-spacing-large-secondary xl:mb-0"
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

/***/ "./assets/components/Question/QuestionContent.tsx":
/*!********************************************************!*\
  !*** ./assets/components/Question/QuestionContent.tsx ***!
  \********************************************************/
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
/* harmony import */ var _Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Markdown/MarkdownRenderer */ "./assets/components/Markdown/MarkdownRenderer.tsx");
/* harmony import */ var _QuestionImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./QuestionImage */ "./assets/components/Question/QuestionImage.tsx");
/* harmony import */ var _Explanation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Explanation */ "./assets/components/Question/Explanation.tsx");











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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_Markdown_MarkdownRenderer__WEBPACK_IMPORTED_MODULE_8__.MarkdownRenderer, {
    content: question.content
  })), question.numberOfCorrectChoices > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement("p", {
    className: 'opacity-50 text-sm mt-4'
  }, "Multiple choices possible."), question.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_QuestionImage__WEBPACK_IMPORTED_MODULE_9__["default"], {
    image: question.image
  }), question.correctChoices && question.explanation && mode !== 'share' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default().createElement(_Explanation__WEBPACK_IMPORTED_MODULE_10__["default"], {
    question: question,
    mode: mode
  }));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionContent);

/***/ }),

/***/ "./assets/components/Question/QuestionImage.tsx":
/*!******************************************************!*\
  !*** ./assets/components/Question/QuestionImage.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function QuestionImage(_ref) {
  var image = _ref.image;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/uploads/images/questions/".concat(image),
    className: "mt-4 max-w-full rounded-radius-secondary mx-auto",
    alt: ""
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionImage);

/***/ }),

/***/ "./assets/components/Question/Sidebar.tsx":
/*!************************************************!*\
  !*** ./assets/components/Question/Sidebar.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/routes */ "./assets/utils/routes.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/AuthContext */ "./assets/context/AuthContext.tsx");




function Sidebar(_ref) {
  var onNext = _ref.onNext,
    onWrap = _ref.onWrap,
    wrap = _ref.wrap,
    isLoading = _ref.isLoading,
    question = _ref.question;
  var _useAuth = (0,_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__.useAuth)(),
    isAdmin = _useAuth.isAdmin;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "xl:sticky top-spacing-primary z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("aside", {
    className: "absolute glass box bg-dark-grey-secondary bottom-0 xl:bottom-auto xl:mt-0 xl:-left-spacing-primary xl:-translate-x-full -translate-y-[12px] sm:-translate-y-[30px] xl:translate-y-0 p-2 z-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: "buttons-container xl:flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "button button-action",
    onClick: onNext,
    disabled: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "material-icons"
  }, "autorenew")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.FILTERS,
    className: "button button-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "material-icons"
  }, "tune")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("button", {
    className: "button button-action",
    onClick: onWrap
  }, wrap ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "material-icons"
  }, "start")) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "material-icons"
  }, "keyboard_return"))), isAdmin() && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("a", {
    href: "".concat(_utils_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES.QUESTION, "/").concat(question.id, "/edit"),
    className: "button button-action bg-very-dark-grey-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: "material-icons"
  }, "edit"))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./assets/components/Sections/Activity.tsx":
/*!*************************************************!*\
  !*** ./assets/components/Sections/Activity.tsx ***!
  \*************************************************/
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
/* harmony import */ var _motion_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../motion/animations */ "./assets/motion/animations.ts");
/* harmony import */ var motion_react__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! motion/react */ "./node_modules/motion/dist/es/framer-motion/dist/es/render/components/motion/proxy.mjs");
/* harmony import */ var _services_commentsApi__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../services/commentsApi */ "./assets/services/commentsApi.ts");
/* harmony import */ var _Comment_CommentItem__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../Comment/CommentItem */ "./assets/components/Comment/CommentItem.tsx");
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../utils/routes */ "./assets/utils/routes.ts");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Loading */ "./assets/components/Sections/Loading.tsx");
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Activity);

/***/ }),

/***/ "./assets/components/Sections/LimitReached.tsx":
/*!*****************************************************!*\
  !*** ./assets/components/Sections/LimitReached.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/routes */ "./assets/utils/routes.ts");


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
  }, "warning"), "You've reached the question limit for today"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Please login or register to continue to play and save your progression.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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

/***/ "./assets/components/Sections/Loading.tsx":
/*!************************************************!*\
  !*** ./assets/components/Sections/Loading.tsx ***!
  \************************************************/
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

/***/ "./assets/components/Sections/QuestionNotFound.tsx":
/*!*********************************************************!*\
  !*** ./assets/components/Sections/QuestionNotFound.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/routes */ "./assets/utils/routes.ts");


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
  }, "warning"), "No question found"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Try again later or with different filters.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _utils_routes__WEBPACK_IMPORTED_MODULE_1__.ROUTES.FILTERS,
    className: "button button-primary"
  }, "Filters"))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionNotFound);

/***/ }),

/***/ "./assets/components/Sections/StacksSlider.tsx":
/*!*****************************************************!*\
  !*** ./assets/components/Sections/StacksSlider.tsx ***!
  \*****************************************************/
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
    spaceBetween: 50,
    speed: 8000,
    allowTouchMove: false,
    preventClicks: true,
    simulateTouch: false,
    touchStartPreventDefault: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
      stopOnLastSlide: false,
      waitForTransition: true
    },
    slidesPerView: 'auto',
    freeMode: true,
    breakpoints: {
      641: {
        spaceBetween: 80
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

/***/ "./assets/components/Share/Share.tsx":
/*!*******************************************!*\
  !*** ./assets/components/Share/Share.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Share: () => (/* binding */ Share),
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
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _Question_QuestionContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../Question/QuestionContent */ "./assets/components/Question/QuestionContent.tsx");
/* harmony import */ var _Question_Choices__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../Question/Choices */ "./assets/components/Question/Choices.tsx");
/* harmony import */ var _services_questionsApi__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../services/questionsApi */ "./assets/services/questionsApi.ts");
/* harmony import */ var _Question_Explanation__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../Question/Explanation */ "./assets/components/Question/Explanation.tsx");
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../Banner/Banner */ "./assets/components/Banner/Banner.tsx");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/es/index.js");
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







function Share(_ref) {
  var questionId = _ref.questionId,
    mode = _ref.mode;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    question = _useState4[0],
    setQuestion = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_29__.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    answers = _useState6[0],
    setAnswers = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    loadQuestion();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_29__.useEffect)(function () {
    console.log(question);
  }, [question]);
  function Header() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
      className: "flex absolute w-full p-spacing-primary gap-4 items-center font-bold text-xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("img", {
      src: "/images/logos/quizstack-logo.png",
      className: "h-8",
      alt: "Quizstack logo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("h2", null, "Quizstack"));
  }
  function Footer() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
      className: "flex absolute bottom-0 justify-end w-full p-spacing-primary gap-4 items-center font-bold text-xl"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("img", {
      src: "/images/pictos/arrow-forward.png",
      className: "h-6",
      alt: "Forward picto"
    })));
  }
  function Screenshot(_ref2) {
    var onClick = _ref2.onClick;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
      className: "buttons-container mb-spacing-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("button", {
      onClick: onClick,
      className: "button button-tertiary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("span", {
      className: "material-icons"
    }, "photo_camera"))));
  }
  var liRefs = (0,react__WEBPACK_IMPORTED_MODULE_29__.useRef)([]);
  var setLiRef = function setLiRef(el, index) {
    liRefs.current[index] = el;
  };
  function captureScreenshot(index) {
    var currentLi = liRefs.current[index];
    if (currentLi) {
      var elementToCapture = currentLi.querySelector('.screenbox');
      console.log(elementToCapture);
      if (elementToCapture) {
        html_to_image__WEBPACK_IMPORTED_MODULE_35__.toJpeg(elementToCapture, {
          quality: 0.90,
          pixelRatio: 2,
          cacheBust: true,
          skipFonts: false
        }).then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'screenshot.jpeg';
          link.href = dataUrl;
          link.click();
        });
      }
    }
  }
  function loadQuestion() {
    return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            setAnswers([]);
            _context.prev = 2;
            _context.next = 5;
            return (0,_services_questionsApi__WEBPACK_IMPORTED_MODULE_32__.getQuestion)(questionId);
          case 5:
            data = _context.sent;
            setQuestion(data);
            _context.next = 12;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            console.error('Error loading question:', _context.t0);
          case 12:
            _context.prev = 12;
            setLoading(false);
            return _context.finish(12);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 9, 12, 15]]);
    }));
  }
  return question && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement((react__WEBPACK_IMPORTED_MODULE_29___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("ul", {
    className: "flex flex-col gap-spacing-large-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(0);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_34__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Question_QuestionContent__WEBPACK_IMPORTED_MODULE_30__["default"], {
    question: question,
    mode: mode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(1);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_34__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_31__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(2);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_34__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_31__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 3);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(3);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_34__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "glass box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Question_Explanation__WEBPACK_IMPORTED_MODULE_33__["default"], {
    question: question
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 4);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(4);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_34__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "discover flex gap-spacing-primary flex-col h-full w-full max-w-[350px] pt-spacing-large-secondary pl-spacing-large-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "flex w-full gap-4 items-center font-bold text-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("img", {
    src: "/images/logos/quizstack-logo.png",
    className: "h-11",
    alt: "Quizstack logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("h2", {
    className: "text-4xl"
  }, "Quizstack")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("h2", {
    className: "text-xl gradient-title font-semibold"
  }, "Learn web development through interactive quiz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "buttons-container justify-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("a", {
    className: "button button-primary",
    href: "{{ path('quiz') }}"
  }, "Play"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "demo flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Question_QuestionContent__WEBPACK_IMPORTED_MODULE_30__["default"], {
    question: question,
    mode: mode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_31__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))))));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share);

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
    if (mode === 'display' || mode === 'share') return;
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

/***/ "./assets/scripts/appear-on-scroll.ts":
/*!********************************************!*\
  !*** ./assets/scripts/appear-on-scroll.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function appearOnScroll() {
  var counter = 0;
  addEventListener("scroll", function () {
    showItems(counter);
  });
  addEventListener("load", function () {
    showItems(counter);
  });
}
function showItems(counter) {
  var hiddenItems = document.querySelectorAll('.fade-in-up:not(.show)');
  hiddenItems.forEach(function (item) {
    if (checkVisible(item)) {
      item.style.transitionDelay = counter * 0.2 + 0.2 + "s";
      item.classList.add('show');
      counter++;
      setTimeout(function () {
        counter--;
      }, counter * 0.1 * 1000 + 400);
    }
  });
}
function checkVisible(item) {
  var rect = item.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}
appearOnScroll();

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
  var overlay = document.querySelector('#overlay');
  var isMenuOpen = false;
  function openMenu() {
    headerBottomContainer.classList.add('visible');
    overlay.classList.add('visible');
    isMenuOpen = true;
  }
  function closeMenu() {
    headerBottomContainer.classList.remove('visible');
    overlay.classList.remove('visible');
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
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && isMenuOpen) {
      closeMenu();
    }
  });
});

/***/ }),

/***/ "./assets/scripts/question-autocomplete.ts":
/*!*************************************************!*\
  !*** ./assets/scripts/question-autocomplete.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
__webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
__webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function parseSimpleYaml(yamlContent) {
  var lines = yamlContent.trim().split('\n');
  var question = {};
  var currentKey = null;
  var currentValue = '';
  var inMultilineValue = false;
  var answers = [];
  var currentAnswer = {};
  var inAnswers = false;
  var inAnswerMultiline = false;
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (!line.trim()) continue;
    if (line.match(/^-\s+question:/)) {
      currentKey = 'question';
      if (line.includes('|')) {
        inMultilineValue = true;
        currentValue = '';
      } else {
        currentValue = line.replace(/^-\s+question:\s*/, '');
        inMultilineValue = false;
      }
      continue;
    }
    if (line.match(/^\s+(explanation|difficulty|category):/)) {
      if (currentKey && !inAnswers) {
        question[currentKey] = currentValue.trim();
      }
      var match = line.match(/^\s+(explanation|difficulty|category):\s*(.*)/);
      if (match) {
        currentKey = match[1];
        if (currentKey === 'explanation' && match[2].includes('|')) {
          inMultilineValue = true;
          currentValue = '';
        } else {
          currentValue = match[2];
          inMultilineValue = false;
        }
      }
      continue;
    }
    if (line.match(/^\s+answers:/)) {
      if (currentKey && !inAnswers) {
        question[currentKey] = currentValue.trim();
      }
      inAnswers = true;
      continue;
    }
    if (inAnswers && line.match(/^\s+-\s+answer_content:/)) {
      if (currentAnswer.answer_content) {
        answers.push(currentAnswer);
      }
      currentAnswer = {};
      if (line.includes('|')) {
        inAnswerMultiline = true;
        currentAnswer.answer_content = '';
      } else {
        inAnswerMultiline = false;
        currentAnswer.answer_content = line.replace(/^\s+-\s+answer_content:\s*/, '');
      }
      continue;
    }
    if (inAnswers && line.match(/^\s+correct_answer:/)) {
      var value = line.replace(/^\s+correct_answer:\s*/, '');
      currentAnswer.correct_answer = value === 'true';
      inAnswerMultiline = false;
      continue;
    }
    if (inMultilineValue && line.match(/^\s{4,}/)) {
      currentValue += (currentValue ? '\n' : '') + line.replace(/^\s{4}/, '');
      continue;
    }
    if (inAnswerMultiline && line.match(/^\s{6,}/)) {
      var content = line.replace(/^\s{6}/, '');
      currentAnswer.answer_content += (currentAnswer.answer_content ? '\n' : '') + content;
      continue;
    }
    if (inMultilineValue && !line.match(/^\s{4,}/)) {
      inMultilineValue = false;
      if (currentKey && !inAnswers) {
        question[currentKey] = currentValue.trim();
      }
    }
    if (inAnswerMultiline && !line.match(/^\s{6,}/)) {
      inAnswerMultiline = false;
    }
  }
  if (currentKey && !inAnswers) {
    question[currentKey] = currentValue.trim();
  }
  if (currentAnswer.answer_content) {
    answers.push(currentAnswer);
  }
  question.answers = answers;
  return question;
}
function cleanIndentation(text) {
  var tabsToRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  if (!text) return text;
  return text.split('\n').map(function (line) {
    var cleanedLine = line;
    for (var i = 0; i < tabsToRemove; i++) {
      if (cleanedLine.startsWith('\t')) {
        cleanedLine = cleanedLine.substring(1);
      } else if (cleanedLine.startsWith('  ')) {
        cleanedLine = cleanedLine.substring(2);
      } else {
        break;
      }
    }
    return cleanedLine;
  }).join('\n');
}
function addChoicesToForm(numberOfChoices) {
  var addButton = document.querySelector('.add_item_link');
  if (!addButton) {
    console.error('Add choice button not found');
    return false;
  }
  var wasDisabled = addButton.disabled;
  if (wasDisabled) {
    addButton.disabled = false;
  }
  for (var i = 0; i < numberOfChoices; i++) {
    addButton.click();
    var start = Date.now();
    while (Date.now() - start < 10) {
      // Small delay
    }
  }
  if (wasDisabled) {
    addButton.disabled = true;
  }
  return true;
}
function handleFileSelection(event) {
  var _a;
  var target = event.target;
  var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
  if (!file) {
    return;
  }
  if (!file.name.match(/\.(yml|yaml)$/i)) {
    showMessage('Please select a YAML file.', true);
    return;
  }
  var reader = new FileReader();
  reader.onload = function (event) {
    var _a;
    try {
      var yamlContent = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
      var questionData = parseSimpleYaml(yamlContent);
      if (!questionData.question) {
        showMessage('No question found in the YAML content.', true);
        return;
      }
      var numberOfChoices = questionData.answers ? questionData.answers.length : 4;
      var choicesAdded = addChoicesToForm(numberOfChoices);
      if (!choicesAdded) {
        showMessage('Failed to add choice fields to the form.', true);
        return;
      }
      setTimeout(function () {
        var success = injectIntoForm(questionData);
        if (success) {
          showMessage("File successfully loaded : ".concat(numberOfChoices, " choices added."));
        } else {
          showMessage('Failed to inject data into form. Please check the console for errors.', true);
        }
      }, 100);
    } catch (error) {
      console.error('Error processing file:', error);
      showMessage('Error processing file: ' + error.message, true);
    }
  };
  reader.onerror = function () {
    showMessage('Error reading the selected file.', true);
  };
  reader.readAsText(file);
}
function injectIntoForm(questionData) {
  try {
    var contentField = document.querySelector('#question_form_content');
    if (contentField && questionData.question) {
      contentField.value = questionData.question;
    }
    var explanationField = document.querySelector('#question_form_explanation');
    if (explanationField && questionData.explanation) {
      explanationField.value = questionData.explanation;
    }
    if (questionData.difficulty) {
      var difficultyRadio = document.querySelector("#question_form_difficulty_".concat(questionData.difficulty - 1));
      if (difficultyRadio) {
        difficultyRadio.checked = true;
      }
    }
    var statusRadio = document.querySelector('#question_form_status');
    if (statusRadio) {
      statusRadio.checked = true;
    }
    if (questionData.answers && Array.isArray(questionData.answers)) {
      questionData.answers.forEach(function (answer, index) {
        var choiceContentField = document.querySelector("#question_form_choice_".concat(index, "_content"));
        if (choiceContentField && answer.answer_content) {
          var cleanedContent = cleanIndentation(answer.answer_content, 2);
          choiceContentField.value = cleanedContent;
        }
        var choiceCorrectField = document.querySelector("#question_form_choice_".concat(index, "_correct"));
        if (choiceCorrectField && answer.correct_answer !== undefined) {
          choiceCorrectField.checked = answer.correct_answer;
        }
      });
    }
    return true;
  } catch (error) {
    console.error('Error injecting data into form:', error);
    return false;
  }
}
function showMessage(message) {
  var isError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var errorDiv = document.querySelector('#errorMessage');
  var successDiv = document.querySelector('#successMessage');
  if (isError) {
    if (errorDiv) {
      errorDiv.textContent = message;
      errorDiv.style.display = 'block';
    }
    if (successDiv) {
      successDiv.style.display = 'none';
    }
  } else {
    if (successDiv) {
      successDiv.textContent = message;
      successDiv.style.display = 'block';
    }
    if (errorDiv) {
      errorDiv.style.display = 'none';
    }
  }
}
function handleInject() {
  showMessage('Please use "Load & Inject" button to load a YAML file.', true);
}
document.addEventListener('DOMContentLoaded', function () {
  var fileInput = document.querySelector('#yamlFileInput');
  if (fileInput) {
    fileInput.addEventListener('change', handleFileSelection);
  }
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

/***/ "./assets/scripts/shuffle.ts":
/*!***********************************!*\
  !*** ./assets/scripts/shuffle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shuffle)
/* harmony export */ });
function shuffle(items) {
  for (var i = items.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [items[j], items[i]];
    items[i] = _ref[0];
    items[j] = _ref[1];
  }
  return items;
}

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
        showScoresByPeriod('all-time');
      } else if (index === 1) {
        showScoresByPeriod('month');
      } else if (index === 2) {
        showScoresByPeriod('week');
      }
    });
  });
  var activeButton = document.querySelector('.switch-label.active');
  if (activeButton) {
    var activeIndex = Array.from(switchButtons).indexOf(activeButton);
    var periods = ['all-time', 'month', 'week'];
    showScoresByPeriod(periods[activeIndex]);
  } else {
    showScoresByPeriod('all-time');
  }
});

/***/ }),

/***/ "./assets/scripts/textarea.ts":
/*!************************************!*\
  !*** ./assets/scripts/textarea.ts ***!
  \************************************/
/***/ (() => {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('keydown', function (e) {
    var target = e.target;
    if (target.tagName === 'TEXTAREA' && target.classList.contains('code-editor') && e.key === 'Tab') {
      e.preventDefault();
      var textarea = target;
      var start = textarea.selectionStart;
      var end = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, start) + '\t' + textarea.value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  });
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

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
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
  QUIZ: '/web-development-quiz',
  FILTERS: '/filters',
  LOGIN: '/login',
  REGISTER: '/register',
  QUESTION: '/question'
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_html-to-image_es_index_js-node_modules_react-dom_client_js-node_modules_-609a9e"], () => (__webpack_exec__("./assets/app.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OVosbUJBQUEsR0FBQXVCLElBQUEsVUFBQWtWLFVBQUFDLFNBQUE7TUFBQSxrQkFBQUEsU0FBQSxDQUFBOVEsSUFBQSxHQUFBOFEsU0FBQSxDQUFBeFMsSUFBQTtRQUFBO1VBQUF3UyxTQUFBLENBQUF4UyxJQUFBO1VBQ2xCLE9BQU02VixLQUFLLElBQUFsYSxNQUFBLENBQUlxakIsUUFBUSxPQUFBcmpCLE1BQUEsQ0FBSXRCLFVBQVUsYUFBVTtZQUM1RGtGLE1BQU0sRUFBRSxNQUFNO1lBQ2Q0ZixPQUFPLEVBQUU7Y0FDTCxjQUFjLEVBQUU7WUFDcEIsQ0FBQztZQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2NBQUU1VCxPQUFPLEVBQUVBO1lBQVEsQ0FBQztVQUM3QyxDQUFDLENBQUM7UUFBQTtVQU5Ja0ssUUFBUSxHQUFBcEQsU0FBQSxDQUFBOVMsSUFBQTtVQUFBLE9BQUE4UyxTQUFBLENBQUEzUyxNQUFBLFdBT1ArVixRQUFRLENBQUNFLElBQUksQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUF0RCxTQUFBLENBQUEzUSxJQUFBO01BQUE7SUFBQSxHQUFBeVEsUUFBQTtFQUFBLENBQ3pCLEVBQUM7QUFDTjs7Ozs7Ozs7Ozs7O0FDMUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTTFNLE1BQU0sR0FBRztFQUNsQjJhLElBQUksRUFBRSxHQUFHO0VBQ1RsTixJQUFJLEVBQUUsdUJBQXVCO0VBQzdCSixPQUFPLEVBQUUsVUFBVTtFQUNuQi9JLEtBQUssRUFBRSxRQUFRO0VBQ2ZDLFFBQVEsRUFBRSxXQUFXO0VBQ3JCaEMsUUFBUSxFQUFFO0FBQ2QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9hcHAudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0Jhbm5lci9CYW5uZXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudERlbGV0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50SXRlbS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50TGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50VXBkYXRlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50L1Byb2ZpbGVQaWN0dXJlLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL0RlbW8udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbW8vZGVtb1F1ZXN0aW9uMS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbjIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVtby9kZW1vUXVlc3Rpb24zLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0RlbW8vZGVtb1F1ZXN0aW9uNC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbjUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFya2Rvd24vTWFya2Rvd25JbmZvcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvTWFya2Rvd24vTWFya2Rvd25SZW5kZXJlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUXVlc3Rpb24vQ2hvaWNlcy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUXVlc3Rpb24vRXhwbGFuYXRpb24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1ZXN0aW9uL1F1ZXN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbkNvbnRlbnQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1ZXN0aW9uL1F1ZXN0aW9uSW1hZ2UudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1ZXN0aW9uL1NpZGViYXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlY3Rpb25zL0FjdGl2aXR5LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TZWN0aW9ucy9MaW1pdFJlYWNoZWQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlY3Rpb25zL0xvYWRpbmcudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlY3Rpb25zL1F1ZXN0aW9uTm90Rm91bmQudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlY3Rpb25zL1N0YWNrc1NsaWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2hhcmUvU2hhcmUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9vay9SYXlzQW5pbWF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW90aW9uL2FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvYWNjb3JkaW9uLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2FwcGVhci1vbi1zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tZW51LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3F1ZXN0aW9uLWF1dG9jb21wbGV0ZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9xdWVzdGlvbi1mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NodWZmbGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc3dpdGNoZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL2NvbW1lbnRzQXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9xdWVzdGlvbnNBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlscy9yb3V0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb25cIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NvbXBvbmVudHMvRGVtby9EZW1vXCI7XG5pbXBvcnQgQWN0aXZpdHkgZnJvbSBcIi4vY29tcG9uZW50cy9TZWN0aW9ucy9BY3Rpdml0eVwiO1xuaW1wb3J0IFN0YWNrc1NsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL1NlY3Rpb25zL1N0YWNrc1NsaWRlclwiO1xuaW1wb3J0IFNoYXJlIGZyb20gXCIuL2NvbXBvbmVudHMvU2hhcmUvU2hhcmVcIjtcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZmlsdGVycyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9zd2l0Y2hlcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9xdWVzdGlvbi1mb3JtJztcbmltcG9ydCAnLi9zY3JpcHRzL3F1ZXN0aW9uLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9tZW51JztcbmltcG9ydCAnLi9zY3JpcHRzL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vc2NyaXB0cy90ZXh0YXJlYSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9hcHBlYXItb24tc2Nyb2xsJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpei1jb250YWluZXInKTtcbiAgICBpZiAocXVlc3Rpb25Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHF1ZXN0aW9uQ29udGFpbmVyLmRhdGFzZXQubW9kZSB8fCAncXVpeic7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSWQgPSBwYXJzZUludChxdWVzdGlvbkNvbnRhaW5lci5kYXRhc2V0LnF1ZXN0aW9uSWQgfHwgJzAnKTtcbiAgICAgICAgY29uc3Qgc2hvd0NvbW1lbnRzID0gcXVlc3Rpb25Db250YWluZXIuZGF0YXNldC5zaG93Q29tbWVudHMgIT09ICdmYWxzZSc7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHF1ZXN0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBdXRoUHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uLCB7IG1vZGU6IG1vZGUsIHF1ZXN0aW9uSWQ6IHF1ZXN0aW9uSWQsIHNob3dDb21tZW50czogc2hvd0NvbW1lbnRzIH0pKSk7XG4gICAgfVxuICAgIGNvbnN0IGRlbW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVtby1jb250YWluZXInKTtcbiAgICBpZiAoZGVtb0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChkZW1vQ29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChEZW1vLCB7IG1vZGU6ICdkaXNwbGF5JyB9KSk7XG4gICAgfVxuICAgIGNvbnN0IHNoYXJlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NoYXJlLWNvbnRhaW5lcicpO1xuICAgIGlmIChzaGFyZUNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBxdWVzdGlvbklkID0gcGFyc2VJbnQoc2hhcmVDb250YWluZXIuZGF0YXNldC5xdWVzdGlvbklkIHx8ICcwJyk7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBzaGFyZUNvbnRhaW5lci5kYXRhc2V0Lm1vZGUgfHwgJ2Rpc3BsYXknO1xuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChzaGFyZUNvbnRhaW5lcik7XG4gICAgICAgIHJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2hhcmUsIHsgcXVlc3Rpb25JZDogcXVlc3Rpb25JZCwgbW9kZTogbW9kZSB9KSk7XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2aXR5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2aXR5LWNvbnRhaW5lcicpO1xuICAgIGlmIChhY3Rpdml0eUNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCBtb2RlID0gYWN0aXZpdHlDb250YWluZXIuZGF0YXNldC5tb2RlIHx8ICdkaXNwbGF5JztcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoYWN0aXZpdHlDb250YWluZXIpO1xuICAgICAgICByb290LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KEFjdGl2aXR5LCB7IG1vZGU6IG1vZGUgfSkpO1xuICAgIH1cbiAgICBjb25zdCBzdGFja3NTbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhY2tzLXNsaWRlci1jb250YWluZXInKTtcbiAgICBpZiAoc3RhY2tzU2xpZGVyQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHN0YWNrc1NsaWRlckNvbnRhaW5lcik7XG4gICAgICAgIHJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3RhY2tzU2xpZGVyLCBudWxsKSk7XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGZ1bmN0aW9uIEJhbm5lcih7IGNvbG9yID0gJycgfSkge1xuICAgIGNvbnN0IHBhcnRpY2xlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDUwIH0sIChfLCBpbmRleCkgPT4gaW5kZXggKyAxKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIHsgY2xhc3NOYW1lOiBgcmF5cyAke2NvbG9yfWAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdnbG93JyB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdoZXJvJyB9KSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFydGljbGVzXCIgfSwgcGFydGljbGVzLm1hcCgoaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiBpbmRleCwgY2xhc3NOYW1lOiBcImNpcmNsZS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjaXJjbGVcIiB9KSkpKSkpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZGVsZXRlQ29tbWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tZW50c0FwaVwiO1xuZnVuY3Rpb24gQ29tbWVudFVwZGF0ZSh7IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbiwgY29tbWVudCwgb25Db21tZW50RGVsZXRlLCBvbkNhbmNlbCB9KSB7XG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlZENvbW1lbnQgPSB5aWVsZCBkZWxldGVDb21tZW50KGNvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVzdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cyA9IHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cy5maWx0ZXIoYyA9PiBjLmlkICE9PSBjb21tZW50LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UXVlc3Rpb24odXBkYXRlZFF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Db21tZW50RGVsZXRlKGRlbGV0ZWRDb21tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiRG8geW91IHdhbnQgdG8gcmVtb3ZlIHRoaXMgY29tbWVudCA/XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2J1dHRvbnMtY29udGFpbmVyJyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeVwiLCBvbkNsaWNrOiBvbkNhbmNlbCwgZGlzYWJsZWQ6IGlzRGVsZXRpbmcgfSwgXCJDYW5jZWxcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLXJlZFwiLCBkaXNhYmxlZDogaXNEZWxldGluZywgb25DbGljazogaGFuZGxlU3VibWl0IH0sIGlzRGVsZXRpbmcgPyAnRGVsZXRpbmcnIDogJ0RlbGV0ZScpKSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRVcGRhdGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSBcIi4uL01hcmtkb3duL01hcmtkb3duUmVuZGVyZXJcIjtcbmltcG9ydCBDb21tZW50VXBkYXRlIGZyb20gXCIuL0NvbW1lbnRVcGRhdGVcIjtcbmltcG9ydCBDb21tZW50RGVsZXRlIGZyb20gXCIuL0NvbW1lbnREZWxldGVcIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IFByb2ZpbGVQaWN0dXJlIGZyb20gXCIuL1Byb2ZpbGVQaWN0dXJlXCI7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVzXCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uLy4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5mdW5jdGlvbiBDb21tZW50SXRlbSh7IGNvbW1lbnQsIGluZGV4LCBzZXRRdWVzdGlvbiwgcXVlc3Rpb24sIG1vZGUsIH0pIHtcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtpc0RlbGV0aW5nLCBzZXRJc0RlbGV0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB7IGZvcm1hdHRlZERhdGUsIGZvcm1hdHRlZFRpbWUgfSA9IGZvcm1hdERhdGUoY29tbWVudC5jcmVhdGlvbkRhdGUpO1xuICAgIGNvbnN0IHsgaXNBdXRob3IsIGlzQWRtaW4gfSA9IHVzZUF1dGgoKTtcbiAgICBjb25zdCB1c2VyQ2FuRWRpdCA9IGlzQXV0aG9yKGNvbW1lbnQuYXV0aG9yLmlkKSB8fCBpc0FkbWluKCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ29tbWVudFVwZGF0ZWQoKSB7XG4gICAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbW1lbnREZWxldGVkKCkge1xuICAgICAgICBzZXRJc0RlbGV0aW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhcnRFZGl0aW5nKCkge1xuICAgICAgICBzZXRJc0VkaXRpbmcodHJ1ZSk7XG4gICAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydERlbGV0aW5nKCkge1xuICAgICAgICBzZXRJc0RlbGV0aW5nKHRydWUpO1xuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVPYmplY3QpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVPYmplY3QuZGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmb3JtYXR0ZWREYXRlOiBgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gLFxuICAgICAgICAgICAgZm9ybWF0dGVkVGltZTogYCR7aG91cnN9OiR7bWludXRlc31gXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgaW5kZXggIT09IDAgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImhyXCIsIHsgY2xhc3NOYW1lOiBcImgtWzJweF0gYmctd2hpdGUvMTAgYm9yZGVyLTBcIiB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChtb3Rpb24ubGksIHsgdmFyaWFudHM6IGl0ZW0sIGNsYXNzTmFtZTogYHB5LTggZmlyc3Q6cHQtMCBsYXN0OnBiLTAgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5YCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50LWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXNlY29uZGFyeVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50LWhlYWRlci1jb250YWluZXIgZmxleCBmbGV4LXdyYXAgZ2FwLTQgaXRlbXMtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ1c2VyLWluZm9zLWNvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBnYXAtc3BhY2luZy1zZWNvbmRhcnkgaXRlbXMtY2VudGVyIGdyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChQcm9maWxlUGljdHVyZSwgeyBpbWFnZTogY29tbWVudC5hdXRob3IuaW1hZ2UgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCBmbGV4LWNvbCBnYXAtMmAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBjb21tZW50LmF1dGhvci51c2VybmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJkYXRlLWNvbnRhaW5lciBmbGV4IGdhcC00ICBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IGNsYXNzTmFtZTogJ2ZsZXggaXRlbXMtY2VudGVyIG11dGVkJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnMgbXItMiBtZC0xNFwiIH0sIFwiY2FsZW5kYXJfdG9kYXlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBmb3JtYXR0ZWREYXRlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiAnZmxleCBpdGVtcy1jZW50ZXIgbXV0ZWQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29ucyBtci0yIG1kLTE0XCIgfSwgXCJzY2hlZHVsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGZvcm1hdHRlZFRpbWUpKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lciBncm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJDYW5FZGl0ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiwgb25DbGljazogKCkgPT4gaGFuZGxlU3RhcnRFZGl0aW5nKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImVkaXRcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiwgb25DbGljazogKCkgPT4gaGFuZGxlU3RhcnREZWxldGluZygpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJkZWxldGVcIikpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlID09PSAnZGlzcGxheScgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBgJHtST1VURVMuUVVFU1RJT059LyR7Y29tbWVudC5xdWVzdGlvbklkfWAsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJ2aXNpYmlsaXR5XCIpKSkpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb21tZW50LWJvZHktY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IGNvbW1lbnQuY29udGVudCB9KSkpLFxuICAgICAgICAgICAgaXNFZGl0aW5nICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50VXBkYXRlLCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgc2V0UXVlc3Rpb246IHNldFF1ZXN0aW9uLCBjb21tZW50OiBjb21tZW50LCBvbkNvbW1lbnRVcGRhdGVkOiBoYW5kbGVDb21tZW50VXBkYXRlZCwgb25DYW5jZWw6ICgpID0+IHNldElzRWRpdGluZyhmYWxzZSkgfSksXG4gICAgICAgICAgICBpc0RlbGV0aW5nICYmXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50RGVsZXRlLCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgc2V0UXVlc3Rpb246IHNldFF1ZXN0aW9uLCBjb21tZW50OiBjb21tZW50LCBvbkNvbW1lbnREZWxldGU6IGhhbmRsZUNvbW1lbnREZWxldGVkLCBvbkNhbmNlbDogKCkgPT4gc2V0SXNEZWxldGluZyhmYWxzZSkgfSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50SXRlbTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYWRkQ29tbWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tZW50c0FwaVwiO1xuaW1wb3J0IENvbW1lbnRJdGVtIGZyb20gXCIuL0NvbW1lbnRJdGVtXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCBNYXJrZG93bkluZm9zIGZyb20gXCIuLi9NYXJrZG93bi9NYXJrZG93bkluZm9zXCI7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVzXCI7XG5mdW5jdGlvbiBDb21tZW50TGlzdCh7IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbiB9KSB7XG4gICAgY29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21hcmtkb3duSW5mb3MsIHNldE1hcmtkb3duSW5mb3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VBdXRoKCk7XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICAgICAgc2V0U3VjY2VzcyhmYWxzZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSB5aWVsZCBhZGRDb21tZW50KHF1ZXN0aW9uLmlkLCBjb21tZW50KTtcbiAgICAgICAgICAgICAgICBpZiAobmV3Q29tbWVudCAmJiBuZXdDb21tZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVzdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cy5wdXNoKG5ld0NvbW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih1cGRhdGVkUXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBzZXRDb21tZW50KCcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGFkZCBjb21tZW50OiAnICsgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcignRmFpbGVkIHRvIGFkZCBjb21tZW50OiAnICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93SW5mb3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldE1hcmtkb3duSW5mb3MocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICAgIH1cbiAgICA7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2Utc2VwYXJhdG9yLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6ICd0aXRsZScgfSwgXCJDb21tZW50c1wiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogJ2NvbW1lbnRzLWNvbnRhaW5lciBmbGV4IGZsZXgtY29sIGdsYXNzIGJveCBiZy1kYXJrLWdyZXktc2Vjb25kYXJ5JyB9LCBxdWVzdGlvbi5jb21tZW50cy5sZW5ndGggPiAwID8gKHF1ZXN0aW9uLmNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1lbnRJdGVtLCB7IGNvbW1lbnQ6IGNvbW1lbnQsIGluZGV4OiBpbmRleCwgcXVlc3Rpb246IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbjogc2V0UXVlc3Rpb24sIGtleTogYGNvbW1lbnQtJHtpbmRleH1gIH0pKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiVGhlcmUncyBubyBkaXNjdXNzaW9uIGFib3V0IHRoaXMgcXVlc3Rpb24uLi5cIikpKSxcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkKCkgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWNvbnRhaW5lciBnYXAtNCBnbGFzcyBib3ggYmctZGFyay1ncmV5LXNlY29uZGFyeVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IFwic21hbGwtdGl0bGVcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJjaGF0X2J1YmJsZVwiKSxcbiAgICAgICAgICAgICAgICBcIkpvaW4gdGhlIGNvbnZlcnNhdGlvblwiKSxcbiAgICAgICAgICAgIHN1Y2Nlc3MgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1zdWNjZXNzXCIgfSwgXCJDb21tZW50IGFkZCB3aXRoIHN1Y2Nlc3MgIVwiKSxcbiAgICAgICAgICAgIGVycm9yICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgfSwgZXJyb3IpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7IGNsYXNzTmFtZTogXCJmb3JtIGNvZGUtZWRpdG9yXCIsIHZhbHVlOiBjb21tZW50LCBvbkNoYW5nZTogKGUpID0+IHNldENvbW1lbnQoZS50YXJnZXQudmFsdWUpLCBwbGFjZWhvbGRlcjogXCJZb3VyIGNvbW1lbnQuLi5cIiwgcm93czogNCwgcmVxdWlyZWQ6IHRydWUgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ib3R0b20tY29udGFpbmVyIGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gZmxleCBnYXAtNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogYGZsZXggaXRlbXMtY2VudGVyIG9wYWNpdHktNTBgLCBvbkNsaWNrOiBoYW5kbGVTaG93SW5mb3MgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcIi9pbWFnZXMvbG9nb3MvbWFya2Rvd24tbG9nby5wbmdcIiwgYWx0OiBcIk1hcmtkb3duIGxvZ29cIiwgY2xhc3NOYW1lOiBcImgtNSBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJrZG93biBpbmZvc1wiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXIgZ3Jvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIH0sIGlzU3VibWl0dGluZyA/ICdTZW5kaW5nJyA6ICdTZW5kJykpKSksXG4gICAgICAgICAgICBtYXJrZG93bkluZm9zICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd25JbmZvcywgbnVsbCkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogJ3NtYWxsLXRpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiY2hhdF9idWJibGVcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiV2FubmEgam9pbiB0aGUgY29udmVyc2F0aW9uID9cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJQbGVhc2UgbG9naW4gb3IgcmVnaXN0ZXIgIVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5MT0dJTiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tdGVydGlhcnlcIiB9LCBcIkxvZ2luXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLlJFR0lTVEVSLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgfSwgXCJSZWdpc3RlclwiKSkpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudExpc3Q7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVwZGF0ZUNvbW1lbnQgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbWVudHNBcGlcIjtcbmltcG9ydCBNYXJrZG93bkluZm9zIGZyb20gXCIuLi9NYXJrZG93bi9NYXJrZG93bkluZm9zXCI7XG5mdW5jdGlvbiBDb21tZW50VXBkYXRlKHsgcXVlc3Rpb24sIHNldFF1ZXN0aW9uLCBjb21tZW50LCBvbkNvbW1lbnRVcGRhdGVkLCBvbkNhbmNlbCB9KSB7XG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtuZXdDb21tZW50LCBzZXROZXdDb21tZW50XSA9IHVzZVN0YXRlKGNvbW1lbnQuY29udGVudCk7XG4gICAgY29uc3QgW21hcmtkb3duSW5mb3MsIHNldE1hcmtkb3duSW5mb3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZXRJc1N1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRFcnJvcihudWxsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZENvbW1lbnQgPSB5aWVsZCB1cGRhdGVDb21tZW50KGNvbW1lbnQuaWQsIG5ld0NvbW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkQ29tbWVudCAmJiB1cGRhdGVkQ29tbWVudC5pZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkUXVlc3Rpb24gPSBPYmplY3QuYXNzaWduKHt9LCBxdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50SW5kZXggPSB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMuZmluZEluZGV4KGMgPT4gYy5pZCA9PT0gdXBkYXRlZENvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzW2NvbW1lbnRJbmRleF0gPSB1cGRhdGVkQ29tbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cy5wdXNoKHVwZGF0ZWRDb21tZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih1cGRhdGVkUXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNvbW1lbnRVcGRhdGVkKHVwZGF0ZWRDb21tZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldElzU3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTaG93SW5mb3MoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldE1hcmtkb3duSW5mb3MocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICAgIH1cbiAgICA7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udGFpbmVyXCIgfSxcbiAgICAgICAgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiB9LCBlcnJvciksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwICB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7IGNsYXNzTmFtZTogXCJmb3JtXCIsIHZhbHVlOiBuZXdDb21tZW50LCBvbkNoYW5nZTogKGUpID0+IHNldE5ld0NvbW1lbnQoZS50YXJnZXQudmFsdWUpLCByb3dzOiAzLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tYm90dG9tLWNvbnRhaW5lciBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuIGZsZXggZ2FwLTRcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS01MGAsIG9uQ2xpY2s6IGhhbmRsZVNob3dJbmZvcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogXCIvaW1hZ2VzL2xvZ29zL21hcmtkb3duLWxvZ28ucG5nXCIsIGFsdDogXCJNYXJrZG93biBsb2dvXCIsIGNsYXNzTmFtZTogXCJoLTUgbXItMlwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJNYXJrZG93biBpbmZvc1wiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2J1dHRvbnMtY29udGFpbmVyIGdyb3cnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ0bi10ZXJ0aWFyeVwiLCBvbkNsaWNrOiBvbkNhbmNlbCwgZGlzYWJsZWQ6IGlzU3VibWl0dGluZyB9LCBcIkNhbmNlbFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiwgZGlzYWJsZWQ6IGlzU3VibWl0dGluZyB9LCBpc1N1Ym1pdHRpbmcgPyAnVXBkYXRpbmcnIDogJ1NhdmUnKSkpKSxcbiAgICAgICAgbWFya2Rvd25JbmZvcyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duSW5mb3MsIG51bGwpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50VXBkYXRlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIFByb2ZpbGVQaWN0dXJlKHsgaW1hZ2UgfSkge1xuICAgIGNvbnN0IGltYWdlU3JjID0gaW1hZ2VcbiAgICAgICAgPyBgL3VwbG9hZHMvaW1hZ2VzL3VzZXJzLyR7aW1hZ2V9YFxuICAgICAgICA6IGAvaW1hZ2VzL2xvZ29zL3Byb2ZpbGUtcGljdHVyZS5wbmdgO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IGNsYXNzTmFtZTogYGFzcGVjdC1zcXVhcmUgcm91bmRlZC1mdWxsIHctMTIgeGw6dy0xMiBvYmplY3QtY292ZXIgYm9yZGVyLWxpZ2h0LWdyZXktc2Vjb25kYXJ5IGJvcmRlci0yYCwgc3JjOiBpbWFnZVNyYywgYWx0OiBcIlByb2ZpbGUgcGljdHVyZVwiIH0pKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQaWN0dXJlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBRdWVzdGlvbkNvbnRlbnQgZnJvbSBcIi4uL1F1ZXN0aW9uL1F1ZXN0aW9uQ29udGVudFwiO1xuaW1wb3J0IENob2ljZXMgZnJvbSBcIi4uL1F1ZXN0aW9uL0Nob2ljZXNcIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzMSwgZGVtb1F1ZXN0aW9uMSB9IGZyb20gXCIuL2RlbW9RdWVzdGlvbjFcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzMiwgZGVtb1F1ZXN0aW9uMiB9IGZyb20gXCIuL2RlbW9RdWVzdGlvbjJcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzMywgZGVtb1F1ZXN0aW9uMyB9IGZyb20gXCIuL2RlbW9RdWVzdGlvbjNcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzNCwgZGVtb1F1ZXN0aW9uNCB9IGZyb20gXCIuL2RlbW9RdWVzdGlvbjRcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzNSwgZGVtb1F1ZXN0aW9uNSB9IGZyb20gXCIuL2RlbW9RdWVzdGlvbjVcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbmV4cG9ydCBmdW5jdGlvbiBEZW1vKHsgbW9kZSB9KSB7XG4gICAgY29uc3QgcXVlc3Rpb25zRGF0YSA9IFtcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uMSwgYW5zd2VyczogZGVtb0Fuc3dlcnMxIH0sXG4gICAgICAgIHsgcXVlc3Rpb246IGRlbW9RdWVzdGlvbjIsIGFuc3dlcnM6IGRlbW9BbnN3ZXJzMiB9LFxuICAgICAgICB7IHF1ZXN0aW9uOiBkZW1vUXVlc3Rpb24zLCBhbnN3ZXJzOiBkZW1vQW5zd2VyczMgfSxcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uNCwgYW5zd2VyczogZGVtb0Fuc3dlcnM0IH0sXG4gICAgICAgIHsgcXVlc3Rpb246IGRlbW9RdWVzdGlvbjUsIGFuc3dlcnM6IGRlbW9BbnN3ZXJzNSB9XG4gICAgXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyLCB7IHNwZWVkOiAxMDAwLCBzbGlkZXNQZXJWaWV3OiAxLCBsb29wOiB0cnVlLCBjZW50ZXJlZFNsaWRlczogdHJ1ZSwgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgICAgICBkZWxheTogNTAwMCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICB9LCBtb2R1bGVzOiBbQXV0b3BsYXldLCBjbGFzc05hbWU6IGAtbS1zcGFjaW5nLXByaW1hcnlgIH0sIHF1ZXN0aW9uc0RhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIHsga2V5OiBkYXRhLnF1ZXN0aW9uLmlkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi5kaXYsIHsga2V5OiBkYXRhLnF1ZXN0aW9uLmlkLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgZXhpdDogXCJoaWRkZW5cIiwgdmFyaWFudHM6IGl0ZW0sIGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeSBtLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBkYXRhLnF1ZXN0aW9uLCBtb2RlOiBtb2RlIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IGRhdGEucXVlc3Rpb24sIGFuc3dlcnM6IGRhdGEuYW5zd2VycyB9KSkpKSkpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgRGVtbztcbiIsImV4cG9ydCBjb25zdCBkZW1vUXVlc3Rpb24xID0ge1xuICAgIFwiaWRcIjogMjc1LFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogNzAxLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSFRNTFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTg4LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiVGhlIGlucHV0IGlzIG1pc3NpbmcgYSBwcm9wZXIgbGFiZWwsIHdoaWNoIG1ha2VzIGl0IGluYWNjZXNzaWJsZSB0byBzY3JlZW4gcmVhZGVyIHVzZXJzLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTg2LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiVGhlIHN1Ym1pdCBidXR0b24gZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGFyaWEtbGFiZWwgYXR0cmlidXRlLlwiXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgaXMgdGhlIGFjY2Vzc2liaWxpdHkgaXNzdWUgd2l0aCB0aGUgZm9sbG93aW5nIGZvcm0gZWxlbWVudCA/XFxuXCIgK1xuICAgICAgICBcImBgYGh0bWxcXG5cIiArXG4gICAgICAgIFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIGVtYWlsXFxcIj5cXG5cIiArXG4gICAgICAgIFwiPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcblwiICtcbiAgICAgICAgXCJgYGBcIixcbiAgICBcImRpZmZpY3VsdHlcIjogMSxcbiAgICBcIm51bWJlck9mQ29ycmVjdENob2ljZXNcIjogMSxcbiAgICBcImNvcnJlY3RDaG9pY2VzXCI6IFtcbiAgICAgICAgMTg4XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBkZW1vQW5zd2VyczEgPSBbXG4gICAgMTg4XG5dO1xuIiwiZXhwb3J0IGNvbnN0IGRlbW9RdWVzdGlvbjIgPSB7XG4gICAgXCJpZFwiOiAyNzMsXG4gICAgXCJjYXRlZ29yaWVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiA3MjEsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDU1NcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNob2ljZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3NyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcImBgYGNzc1xcclxcbnAge1xcciB0ZXh0LXN0eWxlOiBib2xkOyBcXHJ9XFxyYGBgXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxNzgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgYGBjc3NcXHJcXG5wIHtcXHIgZm9udC13ZWlnaHQ6IGJvbGQ7IFxccn1cXHJgYGBcIlxuICAgICAgICB9LFxuICAgIF0sXG4gICAgXCJjb21tZW50c1wiOiBbXSxcbiAgICBcImNvbnRlbnRcIjogXCJXaGF0IGlzIHRoZSBjb3JyZWN0IENTUyBzeW50YXggZm9yIG1ha2luZyBhbGwgcGFyYWdyYXBoIGVsZW1lbnRzIGJvbGQgP1wiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAxLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAyLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4MVxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnMyID0gW1xuICAgIDE3NyxcbiAgICAxODBcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uMyA9IHtcbiAgICBcImlkXCI6IDI3MixcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcwNCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphdmFTY3JpcHRcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNob2ljZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3MyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcImBbMSwgMiwgMywgNCwgNV1gXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxNzQsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgWzIsIDQsIDYsIDgsIDEwXWBcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgd2lsbCBiZSB0aGUgb3V0cHV0IG9mIHRoZSBmb2xsb3dpbmcgY29kZSA/XFxuXCIgK1xuICAgICAgICBcImBgYGphdmFzY3JpcHRcXG5cIiArXG4gICAgICAgIFwiY29uc3QgbnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1XTtcXG5cIiArXG4gICAgICAgIFwiY29uc3QgZG91YmxlZCA9IG51bWJlcnMubWFwKG51bSA9PiBudW0gKiAyKTtcXG5cIiArXG4gICAgICAgIFwiY29uc29sZS5sb2coZG91YmxlZCk7XFxuXCIgK1xuICAgICAgICBcImBgYFwiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAxLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAxLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAxNzRcbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGRlbW9BbnN3ZXJzMyA9IFtcbiAgICAxNzRcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uNCA9IHtcbiAgICBcImlkXCI6IDI3OSxcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcwMyxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlBIUFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA0LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIwNSxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlJldHVybnMgXFxcIkhFTExPIFdPUkxEXFxcIlwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY29tbWVudHNcIjogW10sXG4gICAgXCJjb250ZW50XCI6IFwiV2hhdCBkb2VzIHRoaXMgUEhQIGZ1bmN0aW9uIGRvP1xcclxcbmBgYHBocFxcclxcbmZ1bmN0aW9uIHByb2Nlc3MoJHN0cikge1xcclxcbiAgICByZXR1cm4gdWN3b3JkcyhzdHJ0b2xvd2VyKCRzdHIpKTtcXHJcXG59XFxyXFxuZWNobyBwcm9jZXNzKFxcXCJIRUxMTyB3b3JsZFxcXCIpO1xcclxcbmBgYFwiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAyLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAxLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAyMDRcbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGRlbW9BbnN3ZXJzNCA9IFtcbiAgICAyMDRcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uNSA9IHtcbiAgICBcImlkXCI6IDI4MCxcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcyMyxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNRTFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA3LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiUmV0dXJucyB0aGUgNSBtb3N0IGV4cGVuc2l2ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA2LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiUmV0dXJucyB0aGUgNSBjaGVhcGVzdCBwcm9kdWN0c1wiXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgZG9lcyB0aGlzIFNRTCBxdWVyeSBkbz9cXHJcXG5gYGBzcWxcXHJcXG5TRUxFQ1QgbmFtZSwgcHJpY2UgXFxyXFxuRlJPTSBwcm9kdWN0cyBcXHJcXG5PUkRFUiBCWSBwcmljZSBERVNDIFxcclxcbkxJTUlUIDU7XFxyXFxuYGBgXCIsXG4gICAgXCJkaWZmaWN1bHR5XCI6IDEsXG4gICAgXCJudW1iZXJPZkNvcnJlY3RDaG9pY2VzXCI6IDEsXG4gICAgXCJjb3JyZWN0Q2hvaWNlc1wiOiBbXG4gICAgICAgIDIwNlxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnM1ID0gW1xuICAgIDIwN1xuXTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBNYXJrZG93bkluZm9zKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBgbWFya2Rvd24taW5mbyBib3ggYmctdmVyeS1kYXJrLWdyZXktcHJpbWFyeSByb3VuZGVkLXJhZGl1cy1zZWNvbmRhcnlgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImAgLi4uIGBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGBtdXRlZCBtbC0yYCB9LCBcIklubGluZSBjb2RlXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImBgYGphdmFzY3JpcHQgLi4uIGBgYFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiQ29kZSBibG9ja1wiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCIqIC4uLiAqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJJdGFsaWNcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiKiogLi4uICoqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJCb2xkXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcIlsgLi4uIF0oaHR0cHM6Ly91cmwuY29tKVwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiTGlua1wiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCItIC4uLlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiVW5vcmRlcmVkIGxpc3RcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiMS4gLi4uXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJPcmRlcmVkIGxpc3RcIikpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25JbmZvcztcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyBva2FpZGlhIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc21cIjtcbmV4cG9ydCBmdW5jdGlvbiBNYXJrZG93blJlbmRlcmVyKHsgY29udGVudCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TWFya2Rvd24sIHsgY29tcG9uZW50czoge1xuICAgICAgICAgICAgY29kZShfYSkge1xuICAgICAgICAgICAgICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG5vZGUsIHN0eWxlLCByZWYgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcIm5vZGVcIiwgXCJzdHlsZVwiLCBcInJlZlwiXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvbGFuZ3VhZ2UtKFxcdyspLy5leGVjKGNsYXNzTmFtZSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlU3RyaW5nID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKFwiXCIpIDogU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChTeW50YXhIaWdobGlnaHRlciwgT2JqZWN0LmFzc2lnbih7IGxhbmd1YWdlOiBtYXRjaFsxXSwgUHJlVGFnOiBcImRpdlwiLCBzdHlsZTogb2thaWRpYSwgY2xhc3NOYW1lOiBcImNvZGUtd3JhcHBlclwiIH0sIHJlc3QpLCBjb2RlU3RyaW5nLnJlcGxhY2UoL1xcbiQvLCBcIlwiKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCByZXN0KSwgY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gfSwgY29udGVudCkpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFya2Rvd25SZW5kZXJlciB9IGZyb20gXCIuLi9NYXJrZG93bi9NYXJrZG93blJlbmRlcmVyXCI7XG5pbXBvcnQgdXNlUmF5c0FuaW1hdGlvbiBmcm9tIFwiLi4vLi4vaG9vay9SYXlzQW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBjb250YWluZXIsIGl0ZW0gfSBmcm9tIFwiLi4vLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzaHVmZmxlIGZyb20gXCIuLi8uLi9zY3JpcHRzL3NodWZmbGVcIjtcbmZ1bmN0aW9uIENob2ljZXMoeyBtb2RlLCBxdWVzdGlvbiwgYW5zd2Vycywgc2V0QW5zd2VycyB9KSB7XG4gICAgY29uc3QgW3NodWZmbGVkQ2hvaWNlcywgc2V0U2h1ZmZsZWRDaG9pY2VzXSA9IHVzZVN0YXRlKCgpID0+IHNodWZmbGUocXVlc3Rpb24uY2hvaWNlcykpO1xuICAgIHVzZVJheXNBbmltYXRpb24ocXVlc3Rpb24sIG1vZGUpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUFuc3dlcnNDaGFuZ2UoYW5zd2VySWQpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzIHx8ICFzZXRBbnN3ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0QW5zd2VycyhwcmV2U2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uLm51bWJlck9mQ29ycmVjdENob2ljZXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2Fuc3dlcklkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudGx5U2VsZWN0ZWQgPSBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoYW5zd2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ3VycmVudGx5U2VsZWN0ZWRcbiAgICAgICAgICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoaWQgPT4gaWQgIT09IGFuc3dlcklkKVxuICAgICAgICAgICAgICAgIDogWy4uLnByZXZTZWxlY3RlZCwgYW5zd2VySWRdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QW5zd2VyU3RhdHVzKGFuc3dlcklkKSB7XG4gICAgICAgIGlmICghcXVlc3Rpb24uY29ycmVjdENob2ljZXMpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBhbnN3ZXJzLmluY2x1ZGVzKGFuc3dlcklkKTtcbiAgICAgICAgY29uc3QgaXNDb3JyZWN0ID0gcXVlc3Rpb24uY29ycmVjdENob2ljZXMuaW5jbHVkZXMoYW5zd2VySWQpO1xuICAgICAgICBpZiAoaXNDb3JyZWN0KVxuICAgICAgICAgICAgcmV0dXJuICdjb3JyZWN0JztcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gJ2luY29ycmVjdCc7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi51bCwgeyB2YXJpYW50czogY29udGFpbmVyLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgY2xhc3NOYW1lOiBgY2hvaWNlcy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5ICR7cXVlc3Rpb24ubnVtYmVyT2ZDb3JyZWN0Q2hvaWNlcyA+IDEgJiYgJ211bHRpcGxlLWNob2ljZXMnfWAgfSwgc2h1ZmZsZWRDaG9pY2VzLm1hcCgoY2hvaWNlLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmxpLCB7IHZhcmlhbnRzOiBpdGVtLCBrZXk6IGBjaG9pY2UtJHtjaG9pY2UuaWR9YCwgY2xhc3NOYW1lOiBgY2hvaWNlLW9wdGlvbiBnbGFzc2AgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIsIHsgY2xhc3NOYW1lOiBgY2hlY2tib3gtZ3JvdXBgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBgJHtxdWVzdGlvbi5udW1iZXJPZkNvcnJlY3RDaG9pY2VzID4gMSA/ICdjaGVja2JveCcgOiAncmFkaW8nfWAsIGlkOiBgY2hvaWNlLSR7aW5kZXh9YCwgbmFtZTogXCJjaG9pY2VcIiwgdmFsdWU6IGNob2ljZS5pZCwgY2hlY2tlZDogYW5zd2Vycy5pbmNsdWRlcyhjaG9pY2UuaWQpLCBvbkNoYW5nZTogKCkgPT4gaGFuZGxlQW5zd2Vyc0NoYW5nZShjaG9pY2UuaWQpLCBjbGFzc05hbWU6IGBjaGVja2JveC1pbnB1dCAke2dldEFuc3dlclN0YXR1cyhjaG9pY2UuaWQpfSAke2Fuc3dlcnMuaW5jbHVkZXMoY2hvaWNlLmlkKSA/ICdjaGVja2VkJyA6ICcnfWAgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiY2hlY2tib3gtdGlsZSBib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJjaGVja2JveC1sYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duUmVuZGVyZXIsIHsgY29udGVudDogY2hvaWNlLmNvbnRlbnQgfSkpKSkpKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBDaG9pY2VzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tIFwiLi4vTWFya2Rvd24vTWFya2Rvd25SZW5kZXJlclwiO1xuaW1wb3J0IHsgaXRlbSB9IGZyb20gXCIuLi8uLi9tb3Rpb24vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuZnVuY3Rpb24gRXhwbGFuYXRpb24oeyBxdWVzdGlvbiwgbW9kZSA9ICdkaXNwbGF5JyB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi5kaXYsIHsgdmFyaWFudHM6IGl0ZW0sIGNsYXNzTmFtZTogYHF1ZXN0aW9uLWJvdHRvbS1jb250YWluZXIgbXQtNCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXNlY29uZGFyeWAgfSxcbiAgICAgICAgbW9kZSA9PT0gJ2dhbWUnID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IGNsYXNzTmFtZTogYHRleHQtbGcgZm9udC1zZW1pYm9sZGAgfSxcbiAgICAgICAgICAgIHF1ZXN0aW9uLmlzTWF0Y2ggPyAnQ29ycmVjdCAhJyA6ICdJbmNvcnJlY3QuLi4nLFxuICAgICAgICAgICAgXCIgSGVyZSdzIGFuIGV4cGxhbmF0aW9uXCIpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBjbGFzc05hbWU6IGB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRgIH0sIFwiRXhwbGFuYXRpb25cIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duUmVuZGVyZXIsIHsgY29udGVudDogcXVlc3Rpb24uZXhwbGFuYXRpb24gfSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEV4cGxhbmF0aW9uO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFJhbmRvbVF1ZXN0aW9uLCBnZXRRdWVzdGlvbiwgc3VibWl0QW5zd2VycyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9xdWVzdGlvbnNBcGlcIjtcbmltcG9ydCBDaG9pY2VzIGZyb20gXCIuL0Nob2ljZXNcIjtcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi4vQ29tbWVudC9Db21tZW50TGlzdFwiO1xuaW1wb3J0IExpbWl0UmVhY2hlZCBmcm9tIFwiLi4vU2VjdGlvbnMvTGltaXRSZWFjaGVkXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vU2VjdGlvbnMvTG9hZGluZ1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xuaW1wb3J0IFF1ZXN0aW9uTm90Rm91bmQgZnJvbSBcIi4uL1NlY3Rpb25zL1F1ZXN0aW9uTm90Rm91bmRcIjtcbmltcG9ydCBRdWVzdGlvbkNvbnRlbnQgZnJvbSBcIi4vUXVlc3Rpb25Db250ZW50XCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmZ1bmN0aW9uIFF1ZXN0aW9uKHsgbW9kZSwgcXVlc3Rpb25JZCwgc2hvd0NvbW1lbnRzIH0pIHtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbcXVlc3Rpb24sIHNldFF1ZXN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFthbnN3ZXJzLCBzZXRBbnN3ZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbGltaXRSZWFjaGVkLCBzZXRMaW1pdFJlYWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFt3cmFwLCBzZXRXcmFwXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsb2FkUXVlc3Rpb24oKTtcbiAgICB9LCBbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcXVpekNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWl6LWNvbnRhaW5lcicpO1xuICAgICAgICBpZiAocXVpekNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWYgKHdyYXApIHtcbiAgICAgICAgICAgICAgICBxdWl6Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dyYXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1aXpDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnd3JhcCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW3dyYXBdKTtcbiAgICBmdW5jdGlvbiBsb2FkUXVlc3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0QW5zd2VycyhbXSk7XG4gICAgICAgICAgICBjb25zdCB1cmxGaWx0ZXJzID0gc2VhcmNoRm9yUGFyYW1zKCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgIGlmIChtb2RlID09PSAnZGlzcGxheScgJiYgcXVlc3Rpb25JZCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHlpZWxkIGdldFF1ZXN0aW9uKHF1ZXN0aW9uSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHlpZWxkIGdldFJhbmRvbVF1ZXN0aW9uKHVybEZpbHRlcnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJ2xpbWl0UmVhY2hlZCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMaW1pdFJlYWNoZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoJ2lkJyBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgcXVlc3Rpb246JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZWFyY2hGb3JQYXJhbXMoKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IHVybEZpbHRlcnMgPSB7fTtcbiAgICAgICAgaWYgKHNlYXJjaFBhcmFtcy5oYXMoJ2RpZmZpY3VsdHknKSkge1xuICAgICAgICAgICAgdXJsRmlsdGVycy5kaWZmaWN1bHR5ID0gc2VhcmNoUGFyYW1zLmdldCgnZGlmZmljdWx0eScpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzKCdjYXRlZ29yeVtdJykpIHtcbiAgICAgICAgICAgIHVybEZpbHRlcnMuY2F0ZWdvcmllcyA9IHNlYXJjaFBhcmFtcy5nZXRBbGwoJ2NhdGVnb3J5W10nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXJsRmlsdGVycztcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlTmV4dFF1ZXN0aW9uKCkge1xuICAgICAgICBzZXRWaXNpYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlV3JhcCgpIHtcbiAgICAgICAgc2V0V3JhcCh3cmFwID0+ICF3cmFwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBzdWJtaXRBbnN3ZXJzKHF1ZXN0aW9uID09PSBudWxsIHx8IHF1ZXN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBxdWVzdGlvbi5pZCwgYW5zd2Vycyk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcXVlc3Rpb24pLCB7IGNvcnJlY3RDaG9pY2VzOiByZXN1bHQuY29ycmVjdENob2ljZXMsIGlzTWF0Y2g6IHJlc3VsdC5pc01hdGNoIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdWJtaXR0aW5nIGFuc3dlcnMgOiAnLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobGltaXRSZWFjaGVkKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaW1pdFJlYWNoZWQsIG51bGwpO1xuICAgIGlmIChsb2FkaW5nKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMb2FkaW5nLCBudWxsKTtcbiAgICBpZiAoIXF1ZXN0aW9uKVxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbk5vdEZvdW5kLCBudWxsKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBbmltYXRlUHJlc2VuY2UsIHsgbW9kZTogJ3dhaXQnLCBvbkV4aXRDb21wbGV0ZTogKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGxvYWRRdWVzdGlvbigpO1xuICAgICAgICAgICAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICAgICAgICB9KSB9LCB2aXNpYmxlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi5kaXYsIHsga2V5OiBxdWVzdGlvbi5pZCwgaW5pdGlhbDogXCJoaWRkZW5cIiwgYW5pbWF0ZTogXCJ2aXNpYmxlXCIsIGV4aXQ6IFwiaGlkZGVuXCIsIHZhcmlhbnRzOiBpdGVtLCBjbGFzc05hbWU6IFwiZmxleCBmbGV4LWNvbCByZWxhdGl2ZVwiIH0sXG4gICAgICAgICAgICBtb2RlID09PSAnZ2FtZScgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNpZGViYXIsIHsgb25OZXh0OiBoYW5kbGVOZXh0UXVlc3Rpb24sIG9uV3JhcDogaGFuZGxlVG9nZ2xlV3JhcCwgd3JhcDogd3JhcCwgaXNMb2FkaW5nOiBsb2FkaW5nLCBxdWVzdGlvbjogcXVlc3Rpb24gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeSBtYi1zcGFjaW5nLWxhcmdlLXNlY29uZGFyeSB4bDptYi0wXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uQ29udGVudCwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIG1vZGU6IG1vZGUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaG9pY2VzLCB7IG1vZGU6IG1vZGUsIHF1ZXN0aW9uOiBxdWVzdGlvbiwgYW5zd2VyczogYW5zd2Vycywgc2V0QW5zd2Vyczogc2V0QW5zd2VycyB9KSxcbiAgICAgICAgICAgICAgICBtb2RlID09PSAnZ2FtZScgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6ICdidXR0b25zLWNvbnRhaW5lcicgfSwgcXVlc3Rpb24uY29ycmVjdENob2ljZXMgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogYGJ1dHRvbiBidXR0b24tdGVydGlhcnlgLCBvbkNsaWNrOiBoYW5kbGVOZXh0UXVlc3Rpb24gfSwgXCJOZXh0IHF1ZXN0aW9uXCIpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiAnYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeScsIG9uQ2xpY2s6IGhhbmRsZVN1Ym1pdCB9LCBcIlZhbGlkYXRlXCIpKSkpKSkpKSxcbiAgICAgICAgcXVlc3Rpb24uY29ycmVjdENob2ljZXMgJiYgc2hvd0NvbW1lbnRzICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1lbnRMaXN0LCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgc2V0UXVlc3Rpb246IHNldFF1ZXN0aW9uIH0pKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFya2Rvd25SZW5kZXJlciB9IGZyb20gXCIuLi9NYXJrZG93bi9NYXJrZG93blJlbmRlcmVyXCI7XG5pbXBvcnQgUXVlc3Rpb25JbWFnZSBmcm9tIFwiLi9RdWVzdGlvbkltYWdlXCI7XG5pbXBvcnQgRXhwbGFuYXRpb24gZnJvbSBcIi4vRXhwbGFuYXRpb25cIjtcbmZ1bmN0aW9uIFF1ZXN0aW9uQ29udGVudCh7IHF1ZXN0aW9uLCBtb2RlIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2xhc3MgYm94XCIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJxdWVzdGlvbi1oZWFkZXItY29udGFpbmVyIGZsZXggZ2FwLTgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBtYi00XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7IGNsYXNzTmFtZTogYHRhZ3MtY29udGFpbmVyIGdyb3ctMWAgfSwgcXVlc3Rpb24uY2F0ZWdvcmllcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IGtleTogYGNhdGVnb3J5LSR7aW5kZXh9YCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgdGFnIHRhZy1zbWFsbGAgfSwgY2F0ZWdvcnkubmFtZSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggaXRlbXMtZW5kIGdhcC0xYCB9LCBBcnJheSgzKS5maWxsKG51bGwpLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHRDbGFzcyA9IGluZGV4ID09PSAwID8gJ2gtMycgOiBpbmRleCA9PT0gMSA/ICdoLTQnIDogJ2gtNSc7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eUNsYXNzID0gaW5kZXggPCAocXVlc3Rpb24gPT09IG51bGwgfHwgcXVlc3Rpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHF1ZXN0aW9uLmRpZmZpY3VsdHkpID8gJ29wYWNpdHktMTAwJyA6ICdvcGFjaXR5LTUwJztcbiAgICAgICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgcm91bmRlZC1zbSB3LTEuNSBiZy13aGl0ZS83NSAke2hlaWdodENsYXNzfSAke29wYWNpdHlDbGFzc31gLCBrZXk6IGluZGV4IH0pKTtcbiAgICAgICAgICAgIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBxdWVzdGlvbi1jb250ZW50LWNvbnRhaW5lciBtdC00IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctc2Vjb25kYXJ5YCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IHF1ZXN0aW9uLmNvbnRlbnQgfSkpLFxuICAgICAgICBxdWVzdGlvbi5udW1iZXJPZkNvcnJlY3RDaG9pY2VzID4gMSAmJlxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6ICdvcGFjaXR5LTUwIHRleHQtc20gbXQtNCcgfSwgXCJNdWx0aXBsZSBjaG9pY2VzIHBvc3NpYmxlLlwiKSxcbiAgICAgICAgcXVlc3Rpb24uaW1hZ2UgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbkltYWdlLCB7IGltYWdlOiBxdWVzdGlvbi5pbWFnZSB9KSxcbiAgICAgICAgcXVlc3Rpb24uY29ycmVjdENob2ljZXMgJiYgcXVlc3Rpb24uZXhwbGFuYXRpb24gJiYgKG1vZGUgIT09ICdzaGFyZScpICYmXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEV4cGxhbmF0aW9uLCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgbW9kZTogbW9kZSB9KSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25Db250ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIFF1ZXN0aW9uSW1hZ2UoeyBpbWFnZSB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL3VwbG9hZHMvaW1hZ2VzL3F1ZXN0aW9ucy8ke2ltYWdlfWAsIGNsYXNzTmFtZTogYG10LTQgbWF4LXctZnVsbCByb3VuZGVkLXJhZGl1cy1zZWNvbmRhcnkgbXgtYXV0b2AsIGFsdDogXCJcIiB9KSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25JbWFnZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVzXCI7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmZ1bmN0aW9uIFNpZGViYXIoeyBvbk5leHQsIG9uV3JhcCwgd3JhcCwgaXNMb2FkaW5nLCBxdWVzdGlvbiB9KSB7XG4gICAgY29uc3QgeyBpc0FkbWluIH0gPSB1c2VBdXRoKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgeGw6c3RpY2t5IHRvcC1zcGFjaW5nLXByaW1hcnkgei0xMGAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFzaWRlXCIsIHsgY2xhc3NOYW1lOiBgYWJzb2x1dGUgZ2xhc3MgYm94IGJnLWRhcmstZ3JleS1zZWNvbmRhcnkgYm90dG9tLTAgeGw6Ym90dG9tLWF1dG8geGw6bXQtMCB4bDotbGVmdC1zcGFjaW5nLXByaW1hcnkgeGw6LXRyYW5zbGF0ZS14LWZ1bGwgLXRyYW5zbGF0ZS15LVsxMnB4XSBzbTotdHJhbnNsYXRlLXktWzMwcHhdIHhsOnRyYW5zbGF0ZS15LTAgcC0yIHotMTBgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyIHhsOmZsZXgtY29sIGdhcC0yXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uXCIsIG9uQ2xpY2s6IG9uTmV4dCwgZGlzYWJsZWQ6IGlzTG9hZGluZyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiYXV0b3JlbmV3XCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5GSUxURVJTLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwidHVuZVwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiLCBvbkNsaWNrOiBvbldyYXAgfSwgd3JhcCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwic3RhcnRcIikpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJrZXlib2FyZF9yZXR1cm5cIikpKSxcbiAgICAgICAgICAgICAgICBpc0FkbWluKCkgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogYCR7Uk9VVEVTLlFVRVNUSU9OfS8ke3F1ZXN0aW9uLmlkfS9lZGl0YCwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uIGJnLXZlcnktZGFyay1ncmV5LXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiZWRpdFwiKSkpKSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBnZXRMYXN0Q29tbWVudHMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvY29tbWVudHNBcGlcIjtcbmltcG9ydCBDb21tZW50SXRlbSBmcm9tIFwiLi4vQ29tbWVudC9Db21tZW50SXRlbVwiO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlc1wiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4vTG9hZGluZ1wiO1xuZXhwb3J0IGZ1bmN0aW9uIEFjdGl2aXR5KHsgbW9kZSB9KSB7XG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZENvbW1lbnRzKCk7XG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIGxvYWRDb21tZW50cygpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB5aWVsZCBnZXRMYXN0Q29tbWVudHMoKTtcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgY29tbWVudHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjb21tZW50cyAmJiBjb21tZW50cy5sZW5ndGggPiAwID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLnVsLCB7IHZhcmlhbnRzOiBjb250YWluZXIsIGluaXRpYWw6IFwiaGlkZGVuXCIsIGFuaW1hdGU6IFwidmlzaWJsZVwiLCBjbGFzc05hbWU6ICdjb21tZW50cy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBnbGFzcyBib3ggYmctZGFyay1ncmV5LXNlY29uZGFyeScgfSwgY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudEl0ZW0sIHsgbW9kZTogbW9kZSwgY29tbWVudDogY29tbWVudCwgaW5kZXg6IGluZGV4LCBrZXk6IGBjb21tZW50LSR7aW5kZXh9YCB9KSkpKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2xhc3MgYm94IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgc21hbGwtdGl0bGVgIH0sIFwiVGhlcmUncyBubyBjb21tZW50IHRvIHNob3dcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJZb3UgY2FuIGFkZCBjb21tZW50cyBhZnRlciBhbnN3ZXJpbmcgcXVlc3Rpb25zICFcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuUVVJWiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIH0sIFwiUGxheVwiKSkpKSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEFjdGl2aXR5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXNcIjtcbmZ1bmN0aW9uIExpbWl0UmVhY2hlZCgpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1oZWFkZXItY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJiaWctdGl0bGUgZ3Jvd1wiIH0sIFwiTGltaXQgcmVhY2hlZCAhXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnbGFzcyBib3ggZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IGBzbWFsbC10aXRsZWAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcIndhcm5pbmdcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiWW91J3ZlIHJlYWNoZWQgdGhlIHF1ZXN0aW9uIGxpbWl0IGZvciB0b2RheVwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlBsZWFzZSBsb2dpbiBvciByZWdpc3RlciB0byBjb250aW51ZSB0byBwbGF5IGFuZCBzYXZlIHlvdXIgcHJvZ3Jlc3Npb24uXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLkxPR0lOLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeVwiIH0sIFwiTG9naW5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuUkVHSVNURVIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiB9LCBcIlJlZ2lzdGVyXCIpKSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExpbWl0UmVhY2hlZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBMb2FkaW5nKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCkpO1xufVxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVzXCI7XG5mdW5jdGlvbiBRdWVzdGlvbk5vdEZvdW5kKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLWhlYWRlci1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgY2xhc3NOYW1lOiBcImJpZy10aXRsZSBncm93XCIgfSwgXCJRdWVzdGlvbiBub3QgZm91bmRcIikpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogJ3NtYWxsLXRpdGxlJyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwid2FybmluZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJObyBxdWVzdGlvbiBmb3VuZFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlRyeSBhZ2FpbiBsYXRlciBvciB3aXRoIGRpZmZlcmVudCBmaWx0ZXJzLlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5GSUxURVJTLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgfSwgXCJGaWx0ZXJzXCIpKSkpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uTm90Rm91bmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCB7IEF1dG9wbGF5IH0gZnJvbSAnc3dpcGVyL21vZHVsZXMnO1xuZnVuY3Rpb24gU3RhY2tzU2xpZGVyKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXIsIHsgbW9kdWxlczogW0F1dG9wbGF5XSwgc3BhY2VCZXR3ZWVuOiA1MCwgc3BlZWQ6IDgwMDAsIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSwgcHJldmVudENsaWNrczogdHJ1ZSwgc2ltdWxhdGVUb3VjaDogZmFsc2UsIHRvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdDogdHJ1ZSwgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgICAgICBkZWxheTogMTAwMCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgcGF1c2VPbk1vdXNlRW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0b3BPbkxhc3RTbGlkZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgd2FpdEZvclRyYW5zaXRpb246IHRydWUsXG4gICAgICAgICAgICB9LCBzbGlkZXNQZXJWaWV3OiAnYXV0bycsIGZyZWVNb2RlOiB0cnVlLCBicmVha3BvaW50czoge1xuICAgICAgICAgICAgICAgIDY0MToge1xuICAgICAgICAgICAgICAgICAgICBzcGFjZUJldHdlZW46IDgwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2NzczMtbG9nby5wbmdgLCBhbHQ6IFwiQ1NTIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2phdmFzY3JpcHQtbG9nby5wbmdgLCBhbHQ6IFwiSmF2YVNjcmlwdCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9kb2NrZXItbG9nby5wbmdgLCBhbHQ6IFwiRG9ja2VyIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL25leHQtanMtbG9nby5wbmdgLCBhbHQ6IFwiTmV4dC5qcyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9yZWFjdC1sb2dvLnBuZ2AsIGFsdDogXCJSZWFjdCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9odG1sLWxvZ28ucG5nYCwgYWx0OiBcIkhUTUwgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3Mvc2Fzcy1sb2dvLnBuZ2AsIGFsdDogXCJTYXNzIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3N5bWZvbnktbG9nby0yLnBuZ2AsIGFsdDogXCJTeW1mb255IGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3RhaWx3aW5kY3NzLWxvZ28ucG5nYCwgYWx0OiBcIlRhaWx3aW5kQ1NTIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3Z1ZS1qcy1sb2dvLnBuZ2AsIGFsdDogXCJWdWUuanMgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3Mvd29yZHByZXNzLWxvZ28ucG5nYCwgYWx0OiBcIldvcmRwcmVzcyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9weXRob24tbG9nby5wbmdgLCBhbHQ6IFwiUHl0aG9uIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2dpdC1sb2dvLnBuZ2AsIGFsdDogXCJHaXQgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3Mvbm9kZS1qcy1sb2dvLnBuZ2AsIGFsdDogXCJOb2RlLmpzIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3BocC1sb2dvLnBuZ2AsIGFsdDogXCJQSFAgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvdHlwZXNjcmlwdC1sb2dvLnBuZ2AsIGFsdDogXCJUeXBlU2NyaXB0IGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2RqYW5nby1sb2dvLnBuZ2AsIGFsdDogXCJEamFuZ28gbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvYW5ndWxhci1sb2dvLnBuZ2AsIGFsdDogXCJBbmd1bGFyIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3R3aWctbG9nby5wbmdgLCBhbHQ6IFwiVHdpZyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9naXRodWItbG9nby5wbmdgLCBhbHQ6IFwiR2l0SHViIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2xhcmF2ZWwtbG9nby5wbmdgLCBhbHQ6IFwiTGFyYXZlbCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9teXNxbC1sb2dvLnBuZ2AsIGFsdDogXCJNeVNRTCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9leHByZXNzLWxvZ28ucG5nYCwgYWx0OiBcIkV4cHJlc3NKUyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9naXRsYWItbG9nby5wbmdgLCBhbHQ6IFwiR2l0TGFiIGxvZ29cIiB9KSkpKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBTdGFja3NTbGlkZXI7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUXVlc3Rpb25Db250ZW50IGZyb20gXCIuLi9RdWVzdGlvbi9RdWVzdGlvbkNvbnRlbnRcIjtcbmltcG9ydCBDaG9pY2VzIGZyb20gXCIuLi9RdWVzdGlvbi9DaG9pY2VzXCI7XG5pbXBvcnQgeyBnZXRRdWVzdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9xdWVzdGlvbnNBcGlcIjtcbmltcG9ydCBFeHBsYW5hdGlvbiBmcm9tIFwiLi4vUXVlc3Rpb24vRXhwbGFuYXRpb25cIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL0Jhbm5lci9CYW5uZXJcIjtcbmltcG9ydCAqIGFzIGh0bWxUb0ltYWdlIGZyb20gJ2h0bWwtdG8taW1hZ2UnO1xuZXhwb3J0IGZ1bmN0aW9uIFNoYXJlKHsgcXVlc3Rpb25JZCwgbW9kZSB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZFF1ZXN0aW9uKCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHF1ZXN0aW9uKTtcbiAgICB9LCBbcXVlc3Rpb25dKTtcbiAgICBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggYWJzb2x1dGUgdy1mdWxsIHAtc3BhY2luZy1wcmltYXJ5IGdhcC00IGl0ZW1zLWNlbnRlciBmb250LWJvbGQgdGV4dC14bGAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3F1aXpzdGFjay1sb2dvLnBuZ2AsIGNsYXNzTmFtZTogYGgtOGAsIGFsdDogXCJRdWl6c3RhY2sgbG9nb1wiIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIG51bGwsIFwiUXVpenN0YWNrXCIpKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggYWJzb2x1dGUgYm90dG9tLTAganVzdGlmeS1lbmQgdy1mdWxsIHAtc3BhY2luZy1wcmltYXJ5IGdhcC00IGl0ZW1zLWNlbnRlciBmb250LWJvbGQgdGV4dC14bGAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9waWN0b3MvYXJyb3ctZm9yd2FyZC5wbmdgLCBjbGFzc05hbWU6IGBoLTZgLCBhbHQ6IFwiRm9yd2FyZCBwaWN0b1wiIH0pKSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBTY3JlZW5zaG90KHsgb25DbGljayB9KSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXIgbWItc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25DbGljaywgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tdGVydGlhcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwicGhvdG9fY2FtZXJhXCIpKSkpKTtcbiAgICB9XG4gICAgY29uc3QgbGlSZWZzID0gdXNlUmVmKFtdKTtcbiAgICBjb25zdCBzZXRMaVJlZiA9IChlbCwgaW5kZXgpID0+IHtcbiAgICAgICAgbGlSZWZzLmN1cnJlbnRbaW5kZXhdID0gZWw7XG4gICAgfTtcbiAgICBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuc2hvdChpbmRleCkge1xuICAgICAgICBjb25zdCBjdXJyZW50TGkgPSBsaVJlZnMuY3VycmVudFtpbmRleF07XG4gICAgICAgIGlmIChjdXJyZW50TGkpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb0NhcHR1cmUgPSBjdXJyZW50TGkucXVlcnlTZWxlY3RvcignLnNjcmVlbmJveCcpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudFRvQ2FwdHVyZSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvQ2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIGh0bWxUb0ltYWdlXG4gICAgICAgICAgICAgICAgICAgIC50b0pwZWcoZWxlbWVudFRvQ2FwdHVyZSwge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAwLjkwLFxuICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvOiAyLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZUJ1c3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNraXBGb250czogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGFVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSAnc2NyZWVuc2hvdC5qcGVnJztcbiAgICAgICAgICAgICAgICAgICAgbGluay5ocmVmID0gZGF0YVVybDtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRRdWVzdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRBbnN3ZXJzKFtdKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHlpZWxkIGdldFF1ZXN0aW9uKHF1ZXN0aW9uSWQpO1xuICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBxdWVzdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVzdGlvbiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1sYXJnZS1zZWNvbmRhcnlgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyByZWY6IGVsID0+IHNldExpUmVmKGVsLCAwKSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NyZWVuc2hvdCwgeyBvbkNsaWNrOiAoKSA9PiBjYXB0dXJlU2NyZWVuc2hvdCgwKSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNjcmVlbmJveCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIG91dGxpbmUgb3V0bGluZS0yIG91dGxpbmUtWyNmZmZmZmYxYV1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhbm5lciwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBmbGV4IGZsZXgtY29sIGgtZnVsbGAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiem9vbSBncm93IGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeSBtLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbkNvbnRlbnQsIHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBtb2RlOiBtb2RlIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94LW5vaXNlLXRleHR1cmVcIiB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHJlZjogZWwgPT4gc2V0TGlSZWYoZWwsIDEpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JlZW5zaG90LCB7IG9uQ2xpY2s6ICgpID0+IGNhcHR1cmVTY3JlZW5zaG90KDEpIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGFzcGVjdC1zcXVhcmUgb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1bI2ZmZmZmZjFhXVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFubmVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ6b29tIGdyb3cganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5IG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXJzOiBhbnN3ZXJzLCBzZXRBbnN3ZXJzOiBzZXRBbnN3ZXJzIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94LW5vaXNlLXRleHR1cmVcIiB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHJlZjogZWwgPT4gc2V0TGlSZWYoZWwsIDIpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JlZW5zaG90LCB7IG9uQ2xpY2s6ICgpID0+IGNhcHR1cmVTY3JlZW5zaG90KDIpIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2hvdy1hbnN3ZXJzIHNjcmVlbmJveCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIG91dGxpbmUgb3V0bGluZS0yIG91dGxpbmUtWyNmZmZmZmYxYV1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhbm5lciwgeyBjb2xvcjogJ2dyZWVuJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ6b29tIGdyb3cganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5IG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXJzOiBhbnN3ZXJzLCBzZXRBbnN3ZXJzOiBzZXRBbnN3ZXJzIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94LW5vaXNlLXRleHR1cmVcIiB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHJlZjogZWwgPT4gc2V0TGlSZWYoZWwsIDMpIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JlZW5zaG90LCB7IG9uQ2xpY2s6ICgpID0+IGNhcHR1cmVTY3JlZW5zaG90KDMpIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2hvdy1hbnN3ZXJzIHNjcmVlbmJveCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIG91dGxpbmUgb3V0bGluZS0yIG91dGxpbmUtWyNmZmZmZmYxYV1cIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhbm5lciwgeyBjb2xvcjogJ2dyZWVuJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ6b29tIGdyb3cganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5IG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXhwbGFuYXRpb24sIHsgcXVlc3Rpb246IHF1ZXN0aW9uIH0pKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3RlciwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNjcmVlbmJveC1ub2lzZS10ZXh0dXJlXCIgfSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyByZWY6IGVsID0+IHNldExpUmVmKGVsLCA0KSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NyZWVuc2hvdCwgeyBvbkNsaWNrOiAoKSA9PiBjYXB0dXJlU2NyZWVuc2hvdCg0KSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNob3ctYW5zd2VycyBzY3JlZW5ib3ggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgYXNwZWN0LXNxdWFyZSBvdXRsaW5lIG91dGxpbmUtMiBvdXRsaW5lLVsjZmZmZmZmMWFdXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYW5uZXIsIHsgY29sb3I6ICdncmVlbicgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBmbGV4IGZsZXgtY29sIGgtZnVsbGAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiem9vbSBncm93IGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2wgbS1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBkaXNjb3ZlciBmbGV4IGdhcC1zcGFjaW5nLXByaW1hcnkgZmxleC1jb2wgaC1mdWxsIHctZnVsbCBtYXgtdy1bMzUwcHhdIHB0LXNwYWNpbmctbGFyZ2Utc2Vjb25kYXJ5IHBsLXNwYWNpbmctbGFyZ2Utc2Vjb25kYXJ5YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCB3LWZ1bGwgZ2FwLTQgaXRlbXMtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXhsYCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvcXVpenN0YWNrLWxvZ28ucG5nYCwgY2xhc3NOYW1lOiBgaC0xMWAsIGFsdDogXCJRdWl6c3RhY2sgbG9nb1wiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgdGV4dC00eGxgIH0sIFwiUXVpenN0YWNrXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgdGV4dC14bCBncmFkaWVudC10aXRsZSBmb250LXNlbWlib2xkYCB9LCBcIkxlYXJuIHdlYiBkZXZlbG9wbWVudCB0aHJvdWdoIGludGVyYWN0aXZlIHF1aXpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXIganVzdGlmeS1zdGFydFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiwgaHJlZjogXCJ7eyBwYXRoKCdxdWl6JykgfX1cIiB9LCBcIlBsYXlcIikpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZGVtbyBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgbW9kZTogbW9kZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaG9pY2VzLCB7IG1vZGU6IG1vZGUsIHF1ZXN0aW9uOiBxdWVzdGlvbiwgYW5zd2VyczogYW5zd2Vycywgc2V0QW5zd2Vyczogc2V0QW5zd2VycyB9KSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzY3JlZW5ib3gtbm9pc2UtdGV4dHVyZVwiIH0pKSkpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgU2hhcmU7XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gICAgY3VycmVudFVzZXI6IG51bGwsXG4gICAgbG9hZGluZzogdHJ1ZSxcbiAgICBlcnJvcjogbnVsbCxcbiAgICBpc0F1dGhvcjogKCkgPT4gZmFsc2UsXG4gICAgaXNBdXRoZW50aWNhdGVkOiAoKSA9PiBmYWxzZSxcbiAgICBpc0FkbWluOiAoKSA9PiBmYWxzZSxcbn0pO1xuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gZmV0Y2hDdXJyZW50VXNlcigpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCgnL2FwaS91c2VyL2N1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRVc2VyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZGF0YS5lcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKGVyciBpbnN0YW5jZW9mIEVycm9yID8gZXJyLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hDdXJyZW50VXNlcigpO1xuICAgIH0sIFtdKTtcbiAgICBmdW5jdGlvbiBpc0F1dGhvcihjb250ZW50QXV0aG9ySWQpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50VXNlcilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyLmlkID09PSBjb250ZW50QXV0aG9ySWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzQXV0aGVudGljYXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyICE9PSBudWxsO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc0FkbWluKCkge1xuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gY3VycmVudFVzZXIucm9sZXMuaW5jbHVkZXMoJ1JPTEVfQURNSU4nKTtcbiAgICB9XG4gICAgY29uc3QgdmFsdWUgPSB7XG4gICAgICAgIGN1cnJlbnRVc2VyLFxuICAgICAgICBsb2FkaW5nLFxuICAgICAgICBlcnJvcixcbiAgICAgICAgaXNBdXRob3IsXG4gICAgICAgIGlzQXV0aGVudGljYXRlZCxcbiAgICAgICAgaXNBZG1pblxuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXV0aENvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHZhbHVlIH0sIGNoaWxkcmVuKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICAgIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmZ1bmN0aW9uIHVzZVJheXNBbmltYXRpb24ocXVlc3Rpb24sIG1vZGUpIHtcbiAgICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF5cycpO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ2Rpc3BsYXknIHx8IG1vZGUgPT09ICdzaGFyZScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmIChvcmlnaW5hbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChxdWVzdGlvbi5jb3JyZWN0Q2hvaWNlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yQ2xhc3MgPSBxdWVzdGlvbi5pc01hdGNoID09PSB0cnVlID8gJ2dyZWVuJyA6ICdyZWQnO1xuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb2xvckNsYXNzKTtcbiAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAoX2EgPSBvcmlnaW5hbEVsZW1lbnQucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmluc2VydEJlZm9yZShjbG9uZWRFbGVtZW50LCBvcmlnaW5hbEVsZW1lbnQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsb25lZEVsZW1lbnQgPSBvcmlnaW5hbEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIChfYiA9IG9yaWdpbmFsRWxlbWVudC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuaW5zZXJ0QmVmb3JlKGNsb25lZEVsZW1lbnQsIG9yaWdpbmFsRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdncmVlbicpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbcXVlc3Rpb24sIG1vZGVdKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZVJheXNBbmltYXRpb247XG4iLCJleHBvcnQgY29uc3QgY29udGFpbmVyID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB5OiAxMCxcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjIsXG4gICAgICAgIH1cbiAgICB9XG59O1xuZXhwb3J0IGNvbnN0IGl0ZW0gPSB7XG4gICAgdmlzaWJsZToge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB5OiAwLFxuICAgIH0sXG4gICAgaGlkZGVuOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6IDEwLFxuICAgIH0sXG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGFjY29yZGlvbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uLWJ1dHRvbicpO1xuICAgIGZ1bmN0aW9uIHRvZ2dsZUFjY29yZGlvbigpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuJykpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSAnMCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWNjb3JkaW9uQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUFjY29yZGlvbik7XG4gICAgfSk7XG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gYXBwZWFyT25TY3JvbGwoKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93SXRlbXMoY291bnRlcik7XG4gICAgfSk7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzaG93SXRlbXMoY291bnRlcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzaG93SXRlbXMoY291bnRlcikge1xuICAgIGxldCBoaWRkZW5JdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYWRlLWluLXVwOm5vdCguc2hvdyknKTtcbiAgICBoaWRkZW5JdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChjaGVja1Zpc2libGUoaXRlbSkpIHtcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gKGNvdW50ZXIgKiAwLjIpICsgMC4yICsgXCJzXCI7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvdW50ZXItLTtcbiAgICAgICAgICAgIH0sICgoY291bnRlciAqIDAuMSkgKiAxMDAwKSArIDQwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNoZWNrVmlzaWJsZShpdGVtKSB7XG4gICAgbGV0IHJlY3QgPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCB2aWV3SGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICByZXR1cm4gIShyZWN0LmJvdHRvbSA8IDAgfHwgcmVjdC50b3AgLSB2aWV3SGVpZ2h0ID49IDApO1xufVxuYXBwZWFyT25TY3JvbGwoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldEZpbHRlcnMnKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXN0aW9uRm9ybScpO1xuICAgIHJlc2V0QnV0dG9uID09PSBudWxsIHx8IHJlc2V0QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gZm9ybSA9PT0gbnVsbCB8fCBmb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpO1xuICAgICAgICByYWRpb0J1dHRvbnMgPT09IG51bGwgfHwgcmFkaW9CdXR0b25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByYWRpb0J1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAocmFkaW8pIHtcbiAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBmb3JtID09PSBudWxsIHx8IGZvcm0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgIGNoZWNrYm94ZXMgPT09IG51bGwgfHwgY2hlY2tib3hlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2hlY2tib3hlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGVja2JveCkge1xuICAgICAgICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uLW1lbnUnKTtcbiAgICBjb25zdCBoZWFkZXJCb3R0b21Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyLWJvdHRvbS1jb250YWluZXInKTtcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcbiAgICBsZXQgaXNNZW51T3BlbiA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIG9wZW5NZW51KCkge1xuICAgICAgICBoZWFkZXJCb3R0b21Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgaXNNZW51T3BlbiA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcbiAgICAgICAgaGVhZGVyQm90dG9tQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIGlzTWVudU9wZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgbWVudUJ1dHRvbiA9PT0gbnVsbCB8fCBtZW51QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIWlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgIG9wZW5NZW51KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGhlYWRlckJvdHRvbUNvbnRhaW5lciA9PT0gbnVsbCB8fCBoZWFkZXJCb3R0b21Db250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlckJvdHRvbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiBpc01lbnVPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHBhcnNlU2ltcGxlWWFtbCh5YW1sQ29udGVudCkge1xuICAgIGNvbnN0IGxpbmVzID0geWFtbENvbnRlbnQudHJpbSgpLnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCBxdWVzdGlvbiA9IHt9O1xuICAgIGxldCBjdXJyZW50S2V5ID0gbnVsbDtcbiAgICBsZXQgY3VycmVudFZhbHVlID0gJyc7XG4gICAgbGV0IGluTXVsdGlsaW5lVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgYW5zd2VycyA9IFtdO1xuICAgIGxldCBjdXJyZW50QW5zd2VyID0ge307XG4gICAgbGV0IGluQW5zd2VycyA9IGZhbHNlO1xuICAgIGxldCBpbkFuc3dlck11bHRpbGluZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgaWYgKCFsaW5lLnRyaW0oKSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAobGluZS5tYXRjaCgvXi1cXHMrcXVlc3Rpb246LykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRLZXkgPSAncXVlc3Rpb24nO1xuICAgICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoJ3wnKSkge1xuICAgICAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0gbGluZS5yZXBsYWNlKC9eLVxccytxdWVzdGlvbjpcXHMqLywgJycpO1xuICAgICAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lLm1hdGNoKC9eXFxzKyhleHBsYW5hdGlvbnxkaWZmaWN1bHR5fGNhdGVnb3J5KTovKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRLZXkgJiYgIWluQW5zd2Vycykge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uW2N1cnJlbnRLZXldID0gY3VycmVudFZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlxccysoZXhwbGFuYXRpb258ZGlmZmljdWx0eXxjYXRlZ29yeSk6XFxzKiguKikvKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRLZXkgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEtleSA9PT0gJ2V4cGxhbmF0aW9uJyAmJiBtYXRjaFsyXS5pbmNsdWRlcygnfCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IG1hdGNoWzJdO1xuICAgICAgICAgICAgICAgICAgICBpbk11bHRpbGluZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUubWF0Y2goL15cXHMrYW5zd2VyczovKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRLZXkgJiYgIWluQW5zd2Vycykge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uW2N1cnJlbnRLZXldID0gY3VycmVudFZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluQW5zd2VycyA9IHRydWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5BbnN3ZXJzICYmIGxpbmUubWF0Y2goL15cXHMrLVxccythbnN3ZXJfY29udGVudDovKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBbnN3ZXIuYW5zd2VyX2NvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXJzLnB1c2goY3VycmVudEFuc3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50QW5zd2VyID0ge307XG4gICAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcygnfCcpKSB7XG4gICAgICAgICAgICAgICAgaW5BbnN3ZXJNdWx0aWxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBbnN3ZXIuYW5zd2VyX2NvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluQW5zd2VyTXVsdGlsaW5lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY3VycmVudEFuc3dlci5hbnN3ZXJfY29udGVudCA9IGxpbmUucmVwbGFjZSgvXlxccystXFxzK2Fuc3dlcl9jb250ZW50OlxccyovLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5BbnN3ZXJzICYmIGxpbmUubWF0Y2goL15cXHMrY29ycmVjdF9hbnN3ZXI6LykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZS5yZXBsYWNlKC9eXFxzK2NvcnJlY3RfYW5zd2VyOlxccyovLCAnJyk7XG4gICAgICAgICAgICBjdXJyZW50QW5zd2VyLmNvcnJlY3RfYW5zd2VyID0gdmFsdWUgPT09ICd0cnVlJztcbiAgICAgICAgICAgIGluQW5zd2VyTXVsdGlsaW5lID0gZmFsc2U7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5NdWx0aWxpbmVWYWx1ZSAmJiBsaW5lLm1hdGNoKC9eXFxzezQsfS8pKSB7XG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gKGN1cnJlbnRWYWx1ZSA/ICdcXG4nIDogJycpICsgbGluZS5yZXBsYWNlKC9eXFxzezR9LywgJycpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluQW5zd2VyTXVsdGlsaW5lICYmIGxpbmUubWF0Y2goL15cXHN7Nix9LykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBsaW5lLnJlcGxhY2UoL15cXHN7Nn0vLCAnJyk7XG4gICAgICAgICAgICBjdXJyZW50QW5zd2VyLmFuc3dlcl9jb250ZW50ICs9IChjdXJyZW50QW5zd2VyLmFuc3dlcl9jb250ZW50ID8gJ1xcbicgOiAnJykgKyBjb250ZW50O1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluTXVsdGlsaW5lVmFsdWUgJiYgIWxpbmUubWF0Y2goL15cXHN7NCx9LykpIHtcbiAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50S2V5ICYmICFpbkFuc3dlcnMpIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvbltjdXJyZW50S2V5XSA9IGN1cnJlbnRWYWx1ZS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluQW5zd2VyTXVsdGlsaW5lICYmICFsaW5lLm1hdGNoKC9eXFxzezYsfS8pKSB7XG4gICAgICAgICAgICBpbkFuc3dlck11bHRpbGluZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50S2V5ICYmICFpbkFuc3dlcnMpIHtcbiAgICAgICAgcXVlc3Rpb25bY3VycmVudEtleV0gPSBjdXJyZW50VmFsdWUudHJpbSgpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEFuc3dlci5hbnN3ZXJfY29udGVudCkge1xuICAgICAgICBhbnN3ZXJzLnB1c2goY3VycmVudEFuc3dlcik7XG4gICAgfVxuICAgIHF1ZXN0aW9uLmFuc3dlcnMgPSBhbnN3ZXJzO1xuICAgIHJldHVybiBxdWVzdGlvbjtcbn1cbmZ1bmN0aW9uIGNsZWFuSW5kZW50YXRpb24odGV4dCwgdGFic1RvUmVtb3ZlID0gMikge1xuICAgIGlmICghdGV4dClcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICBsZXQgY2xlYW5lZExpbmUgPSBsaW5lO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNUb1JlbW92ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2xlYW5lZExpbmUuc3RhcnRzV2l0aCgnXFx0JykpIHtcbiAgICAgICAgICAgICAgICBjbGVhbmVkTGluZSA9IGNsZWFuZWRMaW5lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNsZWFuZWRMaW5lLnN0YXJ0c1dpdGgoJyAgJykpIHtcbiAgICAgICAgICAgICAgICBjbGVhbmVkTGluZSA9IGNsZWFuZWRMaW5lLnN1YnN0cmluZygyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhbmVkTGluZTtcbiAgICB9KS5qb2luKCdcXG4nKTtcbn1cbmZ1bmN0aW9uIGFkZENob2ljZXNUb0Zvcm0obnVtYmVyT2ZDaG9pY2VzKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9pdGVtX2xpbmsnKTtcbiAgICBpZiAoIWFkZEJ1dHRvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBZGQgY2hvaWNlIGJ1dHRvbiBub3QgZm91bmQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB3YXNEaXNhYmxlZCA9IGFkZEJ1dHRvbi5kaXNhYmxlZDtcbiAgICBpZiAod2FzRGlzYWJsZWQpIHtcbiAgICAgICAgYWRkQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZDaG9pY2VzOyBpKyspIHtcbiAgICAgICAgYWRkQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgd2hpbGUgKERhdGUubm93KCkgLSBzdGFydCA8IDEwKSB7XG4gICAgICAgICAgICAvLyBTbWFsbCBkZWxheVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh3YXNEaXNhYmxlZCkge1xuICAgICAgICBhZGRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUZpbGVTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGZpbGUgPSAoX2EgPSB0YXJnZXQuZmlsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWZpbGUubmFtZS5tYXRjaCgvXFwuKHltbHx5YW1sKSQvaSkpIHtcbiAgICAgICAgc2hvd01lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSBZQU1MIGZpbGUuJywgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHlhbWxDb250ZW50ID0gKF9hID0gZXZlbnQudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25EYXRhID0gcGFyc2VTaW1wbGVZYW1sKHlhbWxDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb25EYXRhLnF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ05vIHF1ZXN0aW9uIGZvdW5kIGluIHRoZSBZQU1MIGNvbnRlbnQuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZDaG9pY2VzID0gcXVlc3Rpb25EYXRhLmFuc3dlcnMgPyBxdWVzdGlvbkRhdGEuYW5zd2Vycy5sZW5ndGggOiA0O1xuICAgICAgICAgICAgY29uc3QgY2hvaWNlc0FkZGVkID0gYWRkQ2hvaWNlc1RvRm9ybShudW1iZXJPZkNob2ljZXMpO1xuICAgICAgICAgICAgaWYgKCFjaG9pY2VzQWRkZWQpIHtcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgnRmFpbGVkIHRvIGFkZCBjaG9pY2UgZmllbGRzIHRvIHRoZSBmb3JtLicsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBpbmplY3RJbnRvRm9ybShxdWVzdGlvbkRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKGBGaWxlIHN1Y2Nlc3NmdWxseSBsb2FkZWQgOiAke251bWJlck9mQ2hvaWNlc30gY2hvaWNlcyBhZGRlZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCdGYWlsZWQgdG8gaW5qZWN0IGRhdGEgaW50byBmb3JtLiBQbGVhc2UgY2hlY2sgdGhlIGNvbnNvbGUgZm9yIGVycm9ycy4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBmaWxlOicsIGVycm9yKTtcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKCdFcnJvciBwcm9jZXNzaW5nIGZpbGU6ICcgKyBlcnJvci5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dNZXNzYWdlKCdFcnJvciByZWFkaW5nIHRoZSBzZWxlY3RlZCBmaWxlLicsIHRydWUpO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG59XG5mdW5jdGlvbiBpbmplY3RJbnRvRm9ybShxdWVzdGlvbkRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250ZW50RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVlc3Rpb25fZm9ybV9jb250ZW50Jyk7XG4gICAgICAgIGlmIChjb250ZW50RmllbGQgJiYgcXVlc3Rpb25EYXRhLnF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBjb250ZW50RmllbGQudmFsdWUgPSBxdWVzdGlvbkRhdGEucXVlc3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXhwbGFuYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWVzdGlvbl9mb3JtX2V4cGxhbmF0aW9uJyk7XG4gICAgICAgIGlmIChleHBsYW5hdGlvbkZpZWxkICYmIHF1ZXN0aW9uRGF0YS5leHBsYW5hdGlvbikge1xuICAgICAgICAgICAgZXhwbGFuYXRpb25GaWVsZC52YWx1ZSA9IHF1ZXN0aW9uRGF0YS5leHBsYW5hdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlc3Rpb25EYXRhLmRpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHlSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNxdWVzdGlvbl9mb3JtX2RpZmZpY3VsdHlfJHtxdWVzdGlvbkRhdGEuZGlmZmljdWx0eSAtIDF9YCk7XG4gICAgICAgICAgICBpZiAoZGlmZmljdWx0eVJhZGlvKSB7XG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eVJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1c1JhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1ZXN0aW9uX2Zvcm1fc3RhdHVzJyk7XG4gICAgICAgIGlmIChzdGF0dXNSYWRpbykge1xuICAgICAgICAgICAgc3RhdHVzUmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5hbnN3ZXJzICYmIEFycmF5LmlzQXJyYXkocXVlc3Rpb25EYXRhLmFuc3dlcnMpKSB7XG4gICAgICAgICAgICBxdWVzdGlvbkRhdGEuYW5zd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChhbnN3ZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlQ29udGVudEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3F1ZXN0aW9uX2Zvcm1fY2hvaWNlXyR7aW5kZXh9X2NvbnRlbnRgKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hvaWNlQ29udGVudEZpZWxkICYmIGFuc3dlci5hbnN3ZXJfY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkQ29udGVudCA9IGNsZWFuSW5kZW50YXRpb24oYW5zd2VyLmFuc3dlcl9jb250ZW50LCAyKTtcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlQ29udGVudEZpZWxkLnZhbHVlID0gY2xlYW5lZENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZUNvcnJlY3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNxdWVzdGlvbl9mb3JtX2Nob2ljZV8ke2luZGV4fV9jb3JyZWN0YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNob2ljZUNvcnJlY3RGaWVsZCAmJiBhbnN3ZXIuY29ycmVjdF9hbnN3ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaG9pY2VDb3JyZWN0RmllbGQuY2hlY2tlZCA9IGFuc3dlci5jb3JyZWN0X2Fuc3dlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluamVjdGluZyBkYXRhIGludG8gZm9ybTonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93TWVzc2FnZShtZXNzYWdlLCBpc0Vycm9yID0gZmFsc2UpIHtcbiAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvck1lc3NhZ2UnKTtcbiAgICBjb25zdCBzdWNjZXNzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Y2Nlc3NNZXNzYWdlJyk7XG4gICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yRGl2KSB7XG4gICAgICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VjY2Vzc0Rpdikge1xuICAgICAgICAgICAgc3VjY2Vzc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoc3VjY2Vzc0Rpdikge1xuICAgICAgICAgICAgc3VjY2Vzc0Rpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICBzdWNjZXNzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvckRpdikge1xuICAgICAgICAgICAgZXJyb3JEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUluamVjdCgpIHtcbiAgICBzaG93TWVzc2FnZSgnUGxlYXNlIHVzZSBcIkxvYWQgJiBJbmplY3RcIiBidXR0b24gdG8gbG9hZCBhIFlBTUwgZmlsZS4nLCB0cnVlKTtcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3lhbWxGaWxlSW5wdXQnKTtcbiAgICBpZiAoZmlsZUlucHV0KSB7XG4gICAgICAgIGZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVGaWxlU2VsZWN0aW9uKTtcbiAgICB9XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWNob2ljZScpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZXN0KCcuY2hvaWNlLWl0ZW0nKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdXBkYXRlQWRkQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRfaXRlbV9saW5rJykuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRm9ybVRvQ29sbGVjdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVBZGRCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjaG9pY2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9pY2VzLWxpc3QnKTtcclxuICAgICAgICBpZiAoIWNob2ljZXNMaXN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1heENob2ljZXMgPSBwYXJzZUludChjaG9pY2VzTGlzdC5kYXRhc2V0Lm1heENob2ljZXMpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2UtaXRlbScpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZF9pdGVtX2xpbmsnKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGN1cnJlbnRDb3VudCA+PSBtYXhDaG9pY2VzO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLm1heC1jaG9pY2VzLW1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q291bnQgPj0gbWF4Q2hvaWNlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21heC1jaG9pY2VzLW1lc3NhZ2UgdGV4dC1zbSBvcGFjaXR5LTUwIG10LTQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gYE1heGltdW0gbnVtYmVyIG9mIGNob2ljZXMgcmVhY2hlZC5gO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEZvcm1Ub0NvbGxlY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25Ib2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbGxlY3Rpb25Ib2xkZXJDbGFzcyk7XHJcblxyXG4gICAgICAgIGlmICghY29sbGVjdGlvbkhvbGRlciB8fCAhY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LnByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb2xsZWN0aW9uIGhvbGRlciBvciBwcm90b3R5cGUgbm90IGZvdW5kJywgY29sbGVjdGlvbkhvbGRlcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2hvaWNlLWl0ZW0nLCAnZmxleCcsICdmbGV4LWNvbCcsICdtYi04JywgJ3JlbGF0aXZlJyk7XHJcblxyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LnByb3RvdHlwZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAvX19uYW1lX18vZyxcclxuICAgICAgICAgICAgY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LmluZGV4XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2J1dHRvbi1hY3Rpb24nLCAnYWJzb2x1dGUnLCAnYm90dG9tLVsxNnB4XScsICdyaWdodC1bMTZweF0nLCAnZGVsZXRlLWNob2ljZScpO1xyXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvc3Bhbj5gO1xyXG5cclxuICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUFkZEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcclxuICAgICAgICBjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG5cclxuICAgICAgICBjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQuaW5kZXgrKztcclxuXHJcbiAgICAgICAgdXBkYXRlQWRkQnV0dG9uU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBZGRCdXR0b25TdGF0ZSgpO1xyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2h1ZmZsZShpdGVtcykge1xuICAgIGZvciAobGV0IGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgW2l0ZW1zW2ldLCBpdGVtc1tqXV0gPSBbaXRlbXNbal0sIGl0ZW1zW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHN3aXRjaEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uc3dpdGNoLWxhYmVsJyk7XG4gICAgY29uc3Qgc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlLWNvbnRhaW5lcicpO1xuICAgIGZ1bmN0aW9uIHNob3dTY29yZXNCeVBlcmlvZChwZXJpb2QpIHtcbiAgICAgICAgc2NvcmVzQ29udGFpbmVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmlzaWJsZVNjb3JlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5zY29yZS1jb250YWluZXJbZGF0YS1wZXJpb2Q9XCIke3BlcmlvZH1cIl1gKTtcbiAgICAgICAgdmlzaWJsZVNjb3Jlcy5mb3JFYWNoKHNjb3JlID0+IHtcbiAgICAgICAgICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3dpdGNoQnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaEJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2hvd1Njb3Jlc0J5UGVyaW9kKCdhbGwtdGltZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QoJ21vbnRoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHNob3dTY29yZXNCeVBlcmlvZCgnd2VlaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWxhYmVsLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVCdXR0b24pIHtcbiAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSBBcnJheS5mcm9tKHN3aXRjaEJ1dHRvbnMpLmluZGV4T2YoYWN0aXZlQnV0dG9uKTtcbiAgICAgICAgY29uc3QgcGVyaW9kcyA9IFsnYWxsLXRpbWUnLCAnbW9udGgnLCAnd2VlayddO1xuICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QocGVyaW9kc1thY3RpdmVJbmRleF0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2hvd1Njb3Jlc0J5UGVyaW9kKCdhbGwtdGltZScpO1xuICAgIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnICYmXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2RlLWVkaXRvcicpICYmIGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSB0YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgZW5kID0gdGV4dGFyZWEuc2VsZWN0aW9uRW5kO1xuICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSB0ZXh0YXJlYS52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgJ1xcdCcgKyB0ZXh0YXJlYS52YWx1ZS5zdWJzdHJpbmcoZW5kKTtcbiAgICAgICAgICAgIHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0ID0gdGV4dGFyZWEuc2VsZWN0aW9uRW5kID0gc3RhcnQgKyAxO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgQkFTRV9VUkwgPSAnL2FwaSc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbWVudHMocXVlc3Rpb25JZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9L3F1ZXN0aW9uLyR7cXVlc3Rpb25JZH0vY29tbWVudHNgKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0Q29tbWVudHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vY29tbWVudHMvbGFzdGApO1xuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5jb21tZW50cztcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tZW50KHF1ZXN0aW9uSWQsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9xdWVzdGlvbi8ke3F1ZXN0aW9uSWR9L2NvbW1lbnQvYWRkYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbnRlbnQ6IGNvbnRlbnQgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0geWllbGQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2VydmVyIGVycm9yOicsIGVycm9yVGV4dCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1lbnQoY29tbWVudElkLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vY29tbWVudC8ke2NvbW1lbnRJZH0vZWRpdGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnRJZDogY29tbWVudElkLCBjb250ZW50OiBjb250ZW50IH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRXJyb3Igd2hpbGUgY29tbWVudCBlZGl0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tbWVudChjb21tZW50SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9jb21tZW50LyR7Y29tbWVudElkfS9kZWxldGVgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRXJyb3Igd2hpbGUgY29tbWVudCBlZGl0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IEJBU0VfVVJMID0gJy9hcGkvcXVlc3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVF1ZXN0aW9uKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAoZmlsdGVycyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKGZpbHRlcnMuZGlmZmljdWx0eSAmJiAhaXNOYU4ocGFyc2VGbG9hdChmaWx0ZXJzLmRpZmZpY3VsdHkpKSkge1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnZGlmZmljdWx0eScsIGZpbHRlcnMuZGlmZmljdWx0eSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcnMuY2F0ZWdvcmllcyAmJiBmaWx0ZXJzLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsdGVycy5jYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2NhdGVnb3J5W10nLCBjYXRlZ29yeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfT8ke3BhcmFtc31gKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbihxdWVzdGlvbklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vJHtxdWVzdGlvbklkfWApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdEFuc3dlcnMocXVlc3Rpb25JZCwgYW5zd2Vycykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9LyR7cXVlc3Rpb25JZH0vY2hlY2tgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW5zd2VyczogYW5zd2VycyB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xuICAgIEhPTUU6ICcvJyxcbiAgICBRVUlaOiAnL3dlYi1kZXZlbG9wbWVudC1xdWl6JyxcbiAgICBGSUxURVJTOiAnL2ZpbHRlcnMnLFxuICAgIExPR0lOOiAnL2xvZ2luJyxcbiAgICBSRUdJU1RFUjogJy9yZWdpc3RlcicsXG4gICAgUVVFU1RJT046ICcvcXVlc3Rpb24nXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkF1dGhQcm92aWRlciIsIlF1ZXN0aW9uIiwiRGVtbyIsIkFjdGl2aXR5IiwiU3RhY2tzU2xpZGVyIiwiU2hhcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVzdGlvbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RlIiwiZGF0YXNldCIsInF1ZXN0aW9uSWQiLCJwYXJzZUludCIsInNob3dDb21tZW50cyIsInJvb3QiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZGVtb0NvbnRhaW5lciIsInNoYXJlQ29udGFpbmVyIiwiYWN0aXZpdHlDb250YWluZXIiLCJzdGFja3NTbGlkZXJDb250YWluZXIiLCJCYW5uZXIiLCJfcmVmIiwiX3JlZiRjb2xvciIsImNvbG9yIiwicGFydGljbGVzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImluZGV4IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJjb25jYXQiLCJtYXAiLCJrZXkiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInRlc3QiLCJpc0FycmF5IiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJhcHBseSIsInVzZVN0YXRlIiwiZGVsZXRlQ29tbWVudCIsIkNvbW1lbnRVcGRhdGUiLCJxdWVzdGlvbiIsInNldFF1ZXN0aW9uIiwiY29tbWVudCIsIm9uQ29tbWVudERlbGV0ZSIsIm9uQ2FuY2VsIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsImlzRGVsZXRpbmciLCJzZXRJc0RlbGV0aW5nIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiX2NhbGxlZSIsImRlbGV0ZWRDb21tZW50IiwidXBkYXRlZFF1ZXN0aW9uIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJhc3NpZ24iLCJjb21tZW50cyIsImZpbHRlciIsInQwIiwibWVzc2FnZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsIk1hcmtkb3duUmVuZGVyZXIiLCJDb21tZW50RGVsZXRlIiwidXNlQXV0aCIsIlByb2ZpbGVQaWN0dXJlIiwiUk9VVEVTIiwiaXRlbSIsIm1vdGlvbiIsIkNvbW1lbnRJdGVtIiwiaXNFZGl0aW5nIiwic2V0SXNFZGl0aW5nIiwiX2Zvcm1hdERhdGUiLCJmb3JtYXREYXRlIiwiY3JlYXRpb25EYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImZvcm1hdHRlZFRpbWUiLCJfdXNlQXV0aCIsImlzQXV0aG9yIiwiaXNBZG1pbiIsInVzZXJDYW5FZGl0IiwiYXV0aG9yIiwiaGFuZGxlQ29tbWVudFVwZGF0ZWQiLCJoYW5kbGVDb21tZW50RGVsZXRlZCIsImhhbmRsZVN0YXJ0RWRpdGluZyIsImhhbmRsZVN0YXJ0RGVsZXRpbmciLCJkYXRlT2JqZWN0IiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiaG91cnMiLCJnZXRIb3VycyIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwibGkiLCJ2YXJpYW50cyIsImltYWdlIiwidXNlcm5hbWUiLCJocmVmIiwiUVVFU1RJT04iLCJjb250ZW50Iiwib25Db21tZW50VXBkYXRlZCIsImFkZENvbW1lbnQiLCJNYXJrZG93bkluZm9zIiwiQ29tbWVudExpc3QiLCJzZXRDb21tZW50IiwiaXNTdWJtaXR0aW5nIiwic2V0SXNTdWJtaXR0aW5nIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiX3VzZVN0YXRlOSIsIl91c2VTdGF0ZTEwIiwibWFya2Rvd25JbmZvcyIsInNldE1hcmtkb3duSW5mb3MiLCJpc0F1dGhlbnRpY2F0ZWQiLCJuZXdDb21tZW50IiwiaGFuZGxlU2hvd0luZm9zIiwicHJldlN0YXRlIiwib25TdWJtaXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicm93cyIsInJlcXVpcmVkIiwic3JjIiwiYWx0IiwiTE9HSU4iLCJSRUdJU1RFUiIsInVwZGF0ZUNvbW1lbnQiLCJzZXROZXdDb21tZW50IiwidXBkYXRlZENvbW1lbnQiLCJjb21tZW50SW5kZXgiLCJmaW5kSW5kZXgiLCJpbWFnZVNyYyIsIlF1ZXN0aW9uQ29udGVudCIsIkNob2ljZXMiLCJkZW1vQW5zd2VyczEiLCJkZW1vUXVlc3Rpb24xIiwiZGVtb0Fuc3dlcnMyIiwiZGVtb1F1ZXN0aW9uMiIsImRlbW9BbnN3ZXJzMyIsImRlbW9RdWVzdGlvbjMiLCJkZW1vQW5zd2VyczQiLCJkZW1vUXVlc3Rpb240IiwiZGVtb0Fuc3dlcnM1IiwiZGVtb1F1ZXN0aW9uNSIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiQXV0b3BsYXkiLCJxdWVzdGlvbnNEYXRhIiwiYW5zd2VycyIsInNwZWVkIiwic2xpZGVzUGVyVmlldyIsImxvb3AiLCJjZW50ZXJlZFNsaWRlcyIsImF1dG9wbGF5IiwiZGVsYXkiLCJkaXNhYmxlT25JbnRlcmFjdGlvbiIsIm1vZHVsZXMiLCJkYXRhIiwiZGl2IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwiX19yZXN0IiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiUmVhY3RNYXJrZG93biIsIlByaXNtIiwiU3ludGF4SGlnaGxpZ2h0ZXIiLCJva2FpZGlhIiwiY29tcG9uZW50cyIsImNvZGUiLCJfYSIsImNoaWxkcmVuIiwibm9kZSIsInN0eWxlIiwicmVmIiwicmVzdCIsIm1hdGNoIiwiZXhlYyIsImNvZGVTdHJpbmciLCJqb2luIiwiU3RyaW5nIiwibGFuZ3VhZ2UiLCJQcmVUYWciLCJyZXBsYWNlIiwidXNlUmF5c0FuaW1hdGlvbiIsImNvbnRhaW5lciIsInNodWZmbGUiLCJzZXRBbnN3ZXJzIiwiY2hvaWNlcyIsInNodWZmbGVkQ2hvaWNlcyIsInNldFNodWZmbGVkQ2hvaWNlcyIsImhhbmRsZUFuc3dlcnNDaGFuZ2UiLCJhbnN3ZXJJZCIsImNvcnJlY3RDaG9pY2VzIiwicHJldlNlbGVjdGVkIiwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlcyIsImlzQ3VycmVudGx5U2VsZWN0ZWQiLCJpbmNsdWRlcyIsIl90b0NvbnN1bWFibGVBcnJheSIsImdldEFuc3dlclN0YXR1cyIsImlzU2VsZWN0ZWQiLCJpc0NvcnJlY3QiLCJ1bCIsImNob2ljZSIsImNoZWNrZWQiLCJFeHBsYW5hdGlvbiIsIl9yZWYkbW9kZSIsImlzTWF0Y2giLCJleHBsYW5hdGlvbiIsInVzZUVmZmVjdCIsImdldFJhbmRvbVF1ZXN0aW9uIiwiZ2V0UXVlc3Rpb24iLCJzdWJtaXRBbnN3ZXJzIiwiTGltaXRSZWFjaGVkIiwiTG9hZGluZyIsIlNpZGViYXIiLCJRdWVzdGlvbk5vdEZvdW5kIiwiQW5pbWF0ZVByZXNlbmNlIiwiX3RoaXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxpbWl0UmVhY2hlZCIsInNldExpbWl0UmVhY2hlZCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInNldFdyYXAiLCJsb2FkUXVlc3Rpb24iLCJxdWl6Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidXJsRmlsdGVycyIsInNlYXJjaEZvclBhcmFtcyIsImNvbnNvbGUiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsImRpZmZpY3VsdHkiLCJnZXQiLCJjYXRlZ29yaWVzIiwiZ2V0QWxsIiwiaGFuZGxlTmV4dFF1ZXN0aW9uIiwiaGFuZGxlVG9nZ2xlV3JhcCIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2Nyb2xsVG8iLCJ0b3AiLCJvbkV4aXRDb21wbGV0ZSIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwib25OZXh0Iiwib25XcmFwIiwiaXNMb2FkaW5nIiwiUXVlc3Rpb25JbWFnZSIsImNhdGVnb3J5IiwiZmlsbCIsImhlaWdodENsYXNzIiwib3BhY2l0eUNsYXNzIiwiRklMVEVSUyIsImdldExhc3RDb21tZW50cyIsInNldENvbW1lbnRzIiwibG9hZENvbW1lbnRzIiwiUVVJWiIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwicHJldmVudENsaWNrcyIsInNpbXVsYXRlVG91Y2giLCJ0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQiLCJwYXVzZU9uTW91c2VFbnRlciIsInN0b3BPbkxhc3RTbGlkZSIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZnJlZU1vZGUiLCJicmVha3BvaW50cyIsInVzZVJlZiIsImh0bWxUb0ltYWdlIiwibG9nIiwiSGVhZGVyIiwiRm9vdGVyIiwiU2NyZWVuc2hvdCIsIl9yZWYyIiwibGlSZWZzIiwic2V0TGlSZWYiLCJlbCIsImN1cnJlbnQiLCJjYXB0dXJlU2NyZWVuc2hvdCIsImN1cnJlbnRMaSIsImVsZW1lbnRUb0NhcHR1cmUiLCJ0b0pwZWciLCJxdWFsaXR5IiwicGl4ZWxSYXRpbyIsImNhY2hlQnVzdCIsInNraXBGb250cyIsImRhdGFVcmwiLCJsaW5rIiwiZG93bmxvYWQiLCJjbGljayIsImNyZWF0ZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJmZXRjaEN1cnJlbnRVc2VyIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJjb250ZW50QXV0aG9ySWQiLCJyb2xlcyIsIlByb3ZpZGVyIiwidXNlQ29udGV4dCIsIl9iIiwib3JpZ2luYWxFbGVtZW50IiwiY2xvbmVkRWxlbWVudCIsImNsb25lTm9kZSIsImNvbG9yQ2xhc3MiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiaGlkZGVuIiwib3BhY2l0eSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJyZXF1aXJlIiwiYWNjb3JkaW9uQnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGVBY2NvcmRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b2dnbGUiLCJjb250YWlucyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImJ1dHRvbiIsImFwcGVhck9uU2Nyb2xsIiwiY291bnRlciIsInNob3dJdGVtcyIsImhpZGRlbkl0ZW1zIiwiY2hlY2tWaXNpYmxlIiwidHJhbnNpdGlvbkRlbGF5IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdIZWlnaHQiLCJNYXRoIiwibWF4IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJyZXNldEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsInJhZGlvQnV0dG9ucyIsInJhZGlvIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwibWVudUJ1dHRvbiIsImhlYWRlckJvdHRvbUNvbnRhaW5lciIsIm92ZXJsYXkiLCJpc01lbnVPcGVuIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlU2ltcGxlWWFtbCIsInlhbWxDb250ZW50IiwibGluZXMiLCJ0cmltIiwic3BsaXQiLCJjdXJyZW50S2V5IiwiY3VycmVudFZhbHVlIiwiaW5NdWx0aWxpbmVWYWx1ZSIsImN1cnJlbnRBbnN3ZXIiLCJpbkFuc3dlcnMiLCJpbkFuc3dlck11bHRpbGluZSIsImxpbmUiLCJhbnN3ZXJfY29udGVudCIsImNvcnJlY3RfYW5zd2VyIiwiY2xlYW5JbmRlbnRhdGlvbiIsInRleHQiLCJ0YWJzVG9SZW1vdmUiLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJjbGVhbmVkTGluZSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJhZGRDaG9pY2VzVG9Gb3JtIiwibnVtYmVyT2ZDaG9pY2VzIiwiYWRkQnV0dG9uIiwid2FzRGlzYWJsZWQiLCJzdGFydCIsIm5vdyIsImhhbmRsZUZpbGVTZWxlY3Rpb24iLCJmaWxlIiwiZmlsZXMiLCJzaG93TWVzc2FnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJxdWVzdGlvbkRhdGEiLCJjaG9pY2VzQWRkZWQiLCJpbmplY3RJbnRvRm9ybSIsIm9uZXJyb3IiLCJyZWFkQXNUZXh0IiwiY29udGVudEZpZWxkIiwiZXhwbGFuYXRpb25GaWVsZCIsImRpZmZpY3VsdHlSYWRpbyIsInN0YXR1c1JhZGlvIiwiYW5zd2VyIiwiY2hvaWNlQ29udGVudEZpZWxkIiwiY2xlYW5lZENvbnRlbnQiLCJjaG9pY2VDb3JyZWN0RmllbGQiLCJpc0Vycm9yIiwiZXJyb3JEaXYiLCJzdWNjZXNzRGl2IiwidGV4dENvbnRlbnQiLCJkaXNwbGF5IiwiaGFuZGxlSW5qZWN0IiwiZmlsZUlucHV0IiwiY2xvc2VzdCIsInVwZGF0ZUFkZEJ1dHRvblN0YXRlIiwiYnRuIiwiYWRkRm9ybVRvQ29sbGVjdGlvbiIsImNob2ljZXNMaXN0IiwibWF4Q2hvaWNlcyIsImN1cnJlbnRDb3VudCIsIm1lc3NhZ2VFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb2xsZWN0aW9uSG9sZGVyIiwiY3VycmVudFRhcmdldCIsImNvbGxlY3Rpb25Ib2xkZXJDbGFzcyIsImlubmVySFRNTCIsInJlbW92ZUJ1dHRvbiIsIml0ZW1zIiwiaiIsImZsb29yIiwicmFuZG9tIiwic3dpdGNoQnV0dG9ucyIsInNjb3Jlc0NvbnRhaW5lciIsInNob3dTY29yZXNCeVBlcmlvZCIsInBlcmlvZCIsInZpc2libGVTY29yZXMiLCJzY29yZSIsImFjdGl2ZUJ1dHRvbiIsImFjdGl2ZUluZGV4IiwicGVyaW9kcyIsInRhZ05hbWUiLCJ0ZXh0YXJlYSIsInNlbGVjdGlvblN0YXJ0IiwiZW5kIiwic2VsZWN0aW9uRW5kIiwiQkFTRV9VUkwiLCJnZXRDb21tZW50cyIsImVycm9yVGV4dCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiY29tbWVudElkIiwiX2NhbGxlZTQiLCJlcnJvckRhdGEiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImZpbHRlcnMiLCJwYXJhbXMiLCJwYXJzZUZsb2F0IiwiYXBwZW5kIiwiSE9NRSJdLCJzb3VyY2VSb290IjoiIn0=