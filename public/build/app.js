(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.tsx":
/*!************************!*\
  !*** ./assets/app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/AuthContext */ "./assets/context/AuthContext.tsx");
/* harmony import */ var _components_Question_Question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/Question/Question */ "./assets/components/Question/Question.tsx");
/* harmony import */ var _components_Demo_Demo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Demo/Demo */ "./assets/components/Demo/Demo.tsx");
/* harmony import */ var _components_Sections_Discussions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Sections/Discussions */ "./assets/components/Sections/Discussions.tsx");
/* harmony import */ var _components_Sections_StacksSlider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/Sections/StacksSlider */ "./assets/components/Sections/StacksSlider.tsx");
/* harmony import */ var _components_Share_Share__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Share/Share */ "./assets/components/Share/Share.tsx");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./scripts/filters */ "./assets/scripts/filters.ts");
/* harmony import */ var _scripts_filters__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scripts_filters__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scripts_switches__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./scripts/switches */ "./assets/scripts/switches.ts");
/* harmony import */ var _scripts_switches__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scripts_switches__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scripts_question_form__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./scripts/question-form */ "./assets/scripts/question-form.js");
/* harmony import */ var _scripts_question_form__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scripts_question_form__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _scripts_question_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./scripts/question-autocomplete */ "./assets/scripts/question-autocomplete.ts");
/* harmony import */ var _scripts_question_autocomplete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_scripts_question_autocomplete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./scripts/menu */ "./assets/scripts/menu.ts");
/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _scripts_accordion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scripts/accordion */ "./assets/scripts/accordion.ts");
/* harmony import */ var _scripts_accordion__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_scripts_accordion__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _scripts_textarea__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scripts/textarea */ "./assets/scripts/textarea.ts");
/* harmony import */ var _scripts_textarea__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_scripts_textarea__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _scripts_appear_on_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scripts/appear-on-scroll */ "./assets/scripts/appear-on-scroll.ts");
/* harmony import */ var _scripts_appear_on_scroll__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_scripts_appear_on_scroll__WEBPACK_IMPORTED_MODULE_22__);























document.addEventListener('DOMContentLoaded', function () {
  var questionContainer = document.querySelector('#quiz-container');
  if (questionContainer) {
    var mode = questionContainer.dataset.mode || 'quiz';
    var questionId = parseInt(questionContainer.dataset.questionId || '0');
    var showComments = questionContainer.dataset.showComments !== 'false';
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(questionContainer);
    root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__.AuthProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Question_Question__WEBPACK_IMPORTED_MODULE_9__["default"], {
      mode: mode,
      questionId: questionId,
      showComments: showComments
    })));
  }
  var demoContainer = document.querySelector('#demo-container');
  if (demoContainer) {
    var _root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(demoContainer);
    _root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Demo_Demo__WEBPACK_IMPORTED_MODULE_10__["default"], {
      mode: 'display'
    }));
  }
  var shareContainers = document.querySelectorAll('.share-container');
  shareContainers.forEach(function (shareContainer) {
    var questionId = parseInt(shareContainer.dataset.questionId || '0');
    var mode = shareContainer.dataset.mode || 'display';
    var social = shareContainer.dataset.social;
    var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(shareContainer);
    root.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Share_Share__WEBPACK_IMPORTED_MODULE_13__["default"], {
      questionId: questionId,
      mode: mode,
      social: social
    }));
  });
  var discussionsContainer = document.querySelector('#discussions-container');
  if (discussionsContainer) {
    var _mode = discussionsContainer.dataset.mode || 'display';
    var _root2 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(discussionsContainer);
    _root2.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Sections_Discussions__WEBPACK_IMPORTED_MODULE_11__["default"], {
      mode: _mode
    }));
  }
  var stacksSliderContainer = document.querySelector('#stacks-slider-container');
  if (stacksSliderContainer) {
    var _root3 = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_7__.createRoot)(stacksSliderContainer);
    _root3.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_components_Sections_StacksSlider__WEBPACK_IMPORTED_MODULE_12__["default"], null));
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
/* harmony import */ var _demoQuestions_demoQuestion1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demoQuestions/demoQuestion1 */ "./assets/components/Demo/demoQuestions/demoQuestion1.ts");
/* harmony import */ var _demoQuestions_demoQuestion2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demoQuestions/demoQuestion2 */ "./assets/components/Demo/demoQuestions/demoQuestion2.ts");
/* harmony import */ var _demoQuestions_demoQuestion3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demoQuestions/demoQuestion3 */ "./assets/components/Demo/demoQuestions/demoQuestion3.ts");
/* harmony import */ var _demoQuestions_demoQuestion4__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./demoQuestions/demoQuestion4 */ "./assets/components/Demo/demoQuestions/demoQuestion4.ts");
/* harmony import */ var _demoQuestions_demoQuestion5__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./demoQuestions/demoQuestion5 */ "./assets/components/Demo/demoQuestions/demoQuestion5.ts");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");














function Demo(_ref) {
  var mode = _ref.mode;
  var questionsData = [{
    question: _demoQuestions_demoQuestion1__WEBPACK_IMPORTED_MODULE_6__.demoQuestion1,
    answers: _demoQuestions_demoQuestion1__WEBPACK_IMPORTED_MODULE_6__.demoAnswers1
  }, {
    question: _demoQuestions_demoQuestion2__WEBPACK_IMPORTED_MODULE_7__.demoQuestion2,
    answers: _demoQuestions_demoQuestion2__WEBPACK_IMPORTED_MODULE_7__.demoAnswers2
  }, {
    question: _demoQuestions_demoQuestion3__WEBPACK_IMPORTED_MODULE_8__.demoQuestion3,
    answers: _demoQuestions_demoQuestion3__WEBPACK_IMPORTED_MODULE_8__.demoAnswers3
  }, {
    question: _demoQuestions_demoQuestion4__WEBPACK_IMPORTED_MODULE_9__.demoQuestion4,
    answers: _demoQuestions_demoQuestion4__WEBPACK_IMPORTED_MODULE_9__.demoAnswers4
  }, {
    question: _demoQuestions_demoQuestion5__WEBPACK_IMPORTED_MODULE_10__.demoQuestion5,
    answers: _demoQuestions_demoQuestion5__WEBPACK_IMPORTED_MODULE_10__.demoAnswers5
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

/***/ "./assets/components/Demo/demoQuestions/demoQuestion1.ts":
/*!***************************************************************!*\
  !*** ./assets/components/Demo/demoQuestions/demoQuestion1.ts ***!
  \***************************************************************/
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

/***/ "./assets/components/Demo/demoQuestions/demoQuestion2.ts":
/*!***************************************************************!*\
  !*** ./assets/components/Demo/demoQuestions/demoQuestion2.ts ***!
  \***************************************************************/
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

/***/ "./assets/components/Demo/demoQuestions/demoQuestion3.ts":
/*!***************************************************************!*\
  !*** ./assets/components/Demo/demoQuestions/demoQuestion3.ts ***!
  \***************************************************************/
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

/***/ "./assets/components/Demo/demoQuestions/demoQuestion4.ts":
/*!***************************************************************!*\
  !*** ./assets/components/Demo/demoQuestions/demoQuestion4.ts ***!
  \***************************************************************/
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

/***/ "./assets/components/Demo/demoQuestions/demoQuestion5.ts":
/*!***************************************************************!*\
  !*** ./assets/components/Demo/demoQuestions/demoQuestion5.ts ***!
  \***************************************************************/
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
      name: "choice",
      value: choice.id,
      checked: answers.includes(choice.id),
      onChange: function onChange() {
        return handleAnswersChange(choice.id);
      },
      className: "choice-".concat(index, " checkbox-input ").concat(getAnswerStatus(choice.id), " ").concat(answers.includes(choice.id) ? 'checked' : ''),
      tabIndex: mode === 'display' ? -1 : undefined
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement("div", {
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
  }, "Validate"))))), mode === 'game' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Sidebar__WEBPACK_IMPORTED_MODULE_41__["default"], {
    onNext: handleNextQuestion,
    onWrap: handleToggleWrap,
    wrap: wrap,
    isLoading: loading,
    question: question
  })))), question.correctChoices && showComments && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_35___default().createElement(_Comment_CommentList__WEBPACK_IMPORTED_MODULE_38__["default"], {
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
    className: "xl:sticky top-spacing-primary z-10 -order-1"
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

/***/ "./assets/components/Sections/Discussions.tsx":
/*!****************************************************!*\
  !*** ./assets/components/Sections/Discussions.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Discussions: () => (/* binding */ Discussions),
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







function Discussions(_ref) {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Discussions);

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
/* harmony import */ var _services_questionsApi__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../services/questionsApi */ "./assets/services/questionsApi.ts");
/* harmony import */ var html_to_image__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! html-to-image */ "./node_modules/html-to-image/es/index.js");
/* harmony import */ var _Social_Instagram__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Social/Instagram */ "./assets/components/Share/Social/Instagram.tsx");
/* harmony import */ var _Social_Twitter__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Social/Twitter */ "./assets/components/Share/Social/Twitter.tsx");
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
    mode = _ref.mode,
    social = _ref.social;
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
      if (elementToCapture) {
        html_to_image__WEBPACK_IMPORTED_MODULE_31__.toJpeg(elementToCapture, {
          quality: 0.90,
          pixelRatio: 2,
          cacheBust: true,
          skipFonts: false
        }).then(function (dataUrl) {
          var link = document.createElement('a');
          link.download = 'screenshot.jpeg';
          link.href = dataUrl;
          link.click();
        })["catch"](function (error) {
          console.error('Error while taking screenshot :', error);
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
            return (0,_services_questionsApi__WEBPACK_IMPORTED_MODULE_30__.getQuestion)(questionId);
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
  return question && (social === 'twitter' ? (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Social_Twitter__WEBPACK_IMPORTED_MODULE_33__["default"], {
    question: question,
    mode: mode,
    answers: answers,
    setAnswers: setAnswers,
    setLiRef: setLiRef,
    captureScreenshot: captureScreenshot,
    Header: Header,
    Footer: Footer,
    Screenshot: Screenshot
  })) : (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_29___default().createElement(_Social_Instagram__WEBPACK_IMPORTED_MODULE_32__["default"], {
    question: question,
    mode: mode,
    answers: answers,
    setAnswers: setAnswers,
    setLiRef: setLiRef,
    captureScreenshot: captureScreenshot,
    Header: Header,
    Footer: Footer,
    Screenshot: Screenshot
  })));
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Share);

/***/ }),

/***/ "./assets/components/Share/Social/Instagram.tsx":
/*!******************************************************!*\
  !*** ./assets/components/Share/Social/Instagram.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Banner/Banner */ "./assets/components/Banner/Banner.tsx");
/* harmony import */ var _Question_QuestionContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Question/QuestionContent */ "./assets/components/Question/QuestionContent.tsx");
/* harmony import */ var _Question_Choices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Question/Choices */ "./assets/components/Question/Choices.tsx");
/* harmony import */ var _Question_Explanation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Question/Explanation */ "./assets/components/Question/Explanation.tsx");





function Instagram(_ref) {
  var question = _ref.question,
    mode = _ref.mode,
    answers = _ref.answers,
    setAnswers = _ref.setAnswers,
    setLiRef = _ref.setLiRef,
    captureScreenshot = _ref.captureScreenshot,
    Header = _ref.Header,
    Footer = _ref.Footer,
    Screenshot = _ref.Screenshot;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col gap-spacing-large-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(0);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_QuestionContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    question: question,
    mode: mode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(1);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(2);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 3);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(3);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "glass box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Explanation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    question: question
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 4);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(4);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discover flex gap-spacing-primary flex-col h-full w-full max-w-[350px] pt-spacing-large-secondary pl-spacing-large-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex w-full gap-4 items-center font-bold text-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/quizstack-logo.png",
    className: "h-11",
    alt: "Quizstack logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl"
  }, "Quizstack")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl gradient-title font-semibold"
  }, "Learn web development through interactive quiz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons-container justify-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "button button-primary",
    href: "/quiz"
  }, "Play"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "demo flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_QuestionContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    question: question,
    mode: mode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instagram);

/***/ }),

/***/ "./assets/components/Share/Social/Twitter.tsx":
/*!****************************************************!*\
  !*** ./assets/components/Share/Social/Twitter.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Banner/Banner */ "./assets/components/Banner/Banner.tsx");
/* harmony import */ var _Question_QuestionContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Question/QuestionContent */ "./assets/components/Question/QuestionContent.tsx");
/* harmony import */ var _Question_Choices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Question/Choices */ "./assets/components/Question/Choices.tsx");
/* harmony import */ var _Question_Explanation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Question/Explanation */ "./assets/components/Question/Explanation.tsx");





function Twitter(_ref) {
  var question = _ref.question,
    mode = _ref.mode,
    answers = _ref.answers,
    setAnswers = _ref.setAnswers,
    setLiRef = _ref.setLiRef,
    captureScreenshot = _ref.captureScreenshot,
    Header = _ref.Header,
    Footer = _ref.Footer,
    Screenshot = _ref.Screenshot;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-col gap-spacing-large-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(0);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox flex flex-col justify-center overflow-hidden relative aspect-[3/4] outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_QuestionContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    question: question,
    mode: mode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(2);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-[3/4] outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col gap-spacing-primary m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "glass box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Explanation__WEBPACK_IMPORTED_MODULE_4__["default"], {
    question: question
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Footer, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: function ref(el) {
      return setLiRef(el, 4);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Screenshot, {
    onClick: function onClick() {
      return captureScreenshot(4);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "show-answers screenbox flex flex-col justify-center overflow-hidden relative aspect-square outline outline-2 outline-[#ffffff1a]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Banner_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: 'green'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col h-full"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "zoom grow justify-center flex flex-col m-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "discover flex gap-spacing-primary flex-col h-full w-full max-w-[350px] pt-spacing-large-secondary pl-spacing-large-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex w-full gap-4 items-center font-bold text-xl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/logos/quizstack-logo.png",
    className: "h-11",
    alt: "Quizstack logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-4xl"
  }, "Quizstack")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl gradient-title font-semibold"
  }, "Learn web development through interactive quiz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "buttons-container justify-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "button button-primary",
    href: "/quiz"
  }, "Play"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "demo flex flex-col gap-spacing-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_QuestionContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    question: question,
    mode: mode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Question_Choices__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mode: mode,
    question: question,
    answers: answers,
    setAnswers: setAnswers
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "screenbox-noise-texture"
  })))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Twitter);

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
    headerBottomContainer.removeAttribute('inert');
    overlay.classList.add('visible');
    isMenuOpen = true;
  }
  function closeMenu() {
    headerBottomContainer.classList.remove('visible');
    headerBottomContainer.setAttribute('inert', '');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEI4YSxJQUFJLEVBQUUsR0FBRztFQUNUbk4sSUFBSSxFQUFFLHVCQUF1QjtFQUM3QkosT0FBTyxFQUFFLFVBQVU7RUFDbkJqSixLQUFLLEVBQUUsUUFBUTtFQUNmQyxRQUFRLEVBQUUsV0FBVztFQUNyQmhDLFFBQVEsRUFBRTtBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9CYW5uZXIvQmFubmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnREZWxldGUudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudEl0ZW0udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudExpc3QudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudFVwZGF0ZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvQ29tbWVudC9Qcm9maWxlUGljdHVyZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvRGVtby9EZW1vLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbnMvZGVtb1F1ZXN0aW9uMS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbnMvZGVtb1F1ZXN0aW9uMi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbnMvZGVtb1F1ZXN0aW9uMy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbnMvZGVtb1F1ZXN0aW9uNC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9EZW1vL2RlbW9RdWVzdGlvbnMvZGVtb1F1ZXN0aW9uNS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXJrZG93bi9NYXJrZG93bkluZm9zLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9NYXJrZG93bi9NYXJrZG93blJlbmRlcmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWVzdGlvbi9DaG9pY2VzLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9RdWVzdGlvbi9FeHBsYW5hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb24udHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1F1ZXN0aW9uL1F1ZXN0aW9uQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb25JbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvUXVlc3Rpb24vU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VjdGlvbnMvRGlzY3Vzc2lvbnMudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL1NlY3Rpb25zL0xpbWl0UmVhY2hlZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VjdGlvbnMvTG9hZGluZy50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VjdGlvbnMvUXVlc3Rpb25Ob3RGb3VuZC50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2VjdGlvbnMvU3RhY2tzU2xpZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9TaGFyZS9TaGFyZS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2hhcmUvU29jaWFsL0luc3RhZ3JhbS50c3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvU2hhcmUvU29jaWFsL1R3aXR0ZXIudHN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250ZXh0L0F1dGhDb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaG9vay9SYXlzQW5pbWF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbW90aW9uL2FuaW1hdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvYWNjb3JkaW9uLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL2FwcGVhci1vbi1zY3JvbGwudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9tZW51LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3F1ZXN0aW9uLWF1dG9jb21wbGV0ZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9xdWVzdGlvbi1mb3JtLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NodWZmbGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvc3dpdGNoZXMudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvdGV4dGFyZWEudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NlcnZpY2VzL2NvbW1lbnRzQXBpLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zZXJ2aWNlcy9xdWVzdGlvbnNBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz8zZThhIiwid2VicGFjazovLy8uL2Fzc2V0cy91dGlscy9yb3V0ZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb25cIjtcbmltcG9ydCBEZW1vIGZyb20gXCIuL2NvbXBvbmVudHMvRGVtby9EZW1vXCI7XG5pbXBvcnQgRGlzY3Vzc2lvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9TZWN0aW9ucy9EaXNjdXNzaW9uc1wiO1xuaW1wb3J0IFN0YWNrc1NsaWRlciBmcm9tIFwiLi9jb21wb25lbnRzL1NlY3Rpb25zL1N0YWNrc1NsaWRlclwiO1xuaW1wb3J0IFNoYXJlIGZyb20gXCIuL2NvbXBvbmVudHMvU2hhcmUvU2hhcmVcIjtcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuaW1wb3J0ICcuL3NjcmlwdHMvZmlsdGVycyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9zd2l0Y2hlcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9xdWVzdGlvbi1mb3JtJztcbmltcG9ydCAnLi9zY3JpcHRzL3F1ZXN0aW9uLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9tZW51JztcbmltcG9ydCAnLi9zY3JpcHRzL2FjY29yZGlvbic7XG5pbXBvcnQgJy4vc2NyaXB0cy90ZXh0YXJlYSc7XG5pbXBvcnQgJy4vc2NyaXB0cy9hcHBlYXItb24tc2Nyb2xsJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpei1jb250YWluZXInKTtcbiAgICBpZiAocXVlc3Rpb25Db250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IHF1ZXN0aW9uQ29udGFpbmVyLmRhdGFzZXQubW9kZSB8fCAncXVpeic7XG4gICAgICAgIGNvbnN0IHF1ZXN0aW9uSWQgPSBwYXJzZUludChxdWVzdGlvbkNvbnRhaW5lci5kYXRhc2V0LnF1ZXN0aW9uSWQgfHwgJzAnKTtcbiAgICAgICAgY29uc3Qgc2hvd0NvbW1lbnRzID0gcXVlc3Rpb25Db250YWluZXIuZGF0YXNldC5zaG93Q29tbWVudHMgIT09ICdmYWxzZSc7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHF1ZXN0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChBdXRoUHJvdmlkZXIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uLCB7IG1vZGU6IG1vZGUsIHF1ZXN0aW9uSWQ6IHF1ZXN0aW9uSWQsIHNob3dDb21tZW50czogc2hvd0NvbW1lbnRzIH0pKSk7XG4gICAgfVxuICAgIGNvbnN0IGRlbW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVtby1jb250YWluZXInKTtcbiAgICBpZiAoZGVtb0NvbnRhaW5lcikge1xuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChkZW1vQ29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChEZW1vLCB7IG1vZGU6ICdkaXNwbGF5JyB9KSk7XG4gICAgfVxuICAgIGNvbnN0IHNoYXJlQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGFyZS1jb250YWluZXInKTtcbiAgICBzaGFyZUNvbnRhaW5lcnMuZm9yRWFjaCgoc2hhcmVDb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb25JZCA9IHBhcnNlSW50KHNoYXJlQ29udGFpbmVyLmRhdGFzZXQucXVlc3Rpb25JZCB8fCAnMCcpO1xuICAgICAgICBjb25zdCBtb2RlID0gc2hhcmVDb250YWluZXIuZGF0YXNldC5tb2RlIHx8ICdkaXNwbGF5JztcbiAgICAgICAgY29uc3Qgc29jaWFsID0gc2hhcmVDb250YWluZXIuZGF0YXNldC5zb2NpYWw7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KHNoYXJlQ29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChTaGFyZSwgeyBxdWVzdGlvbklkOiBxdWVzdGlvbklkLCBtb2RlOiBtb2RlLCBzb2NpYWw6IHNvY2lhbCB9KSk7XG4gICAgfSk7XG4gICAgY29uc3QgZGlzY3Vzc2lvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlzY3Vzc2lvbnMtY29udGFpbmVyJyk7XG4gICAgaWYgKGRpc2N1c3Npb25zQ29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBkaXNjdXNzaW9uc0NvbnRhaW5lci5kYXRhc2V0Lm1vZGUgfHwgJ2Rpc3BsYXknO1xuICAgICAgICBjb25zdCByb290ID0gY3JlYXRlUm9vdChkaXNjdXNzaW9uc0NvbnRhaW5lcik7XG4gICAgICAgIHJvb3QucmVuZGVyKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRGlzY3Vzc2lvbnMsIHsgbW9kZTogbW9kZSB9KSk7XG4gICAgfVxuICAgIGNvbnN0IHN0YWNrc1NsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFja3Mtc2xpZGVyLWNvbnRhaW5lcicpO1xuICAgIGlmIChzdGFja3NTbGlkZXJDb250YWluZXIpIHtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3Qoc3RhY2tzU2xpZGVyQ29udGFpbmVyKTtcbiAgICAgICAgcm9vdC5yZW5kZXIoUmVhY3QuY3JlYXRlRWxlbWVudChTdGFja3NTbGlkZXIsIG51bGwpKTtcbiAgICB9XG59KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gQmFubmVyKHsgY29sb3IgPSAnJyB9KSB7XG4gICAgY29uc3QgcGFydGljbGVzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogNTAgfSwgKF8sIGluZGV4KSA9PiBpbmRleCArIDEpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgeyBjbGFzc05hbWU6IGByYXlzICR7Y29sb3J9YCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2dsb3cnIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogJ2hlcm8nIH0pKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJwYXJ0aWNsZXNcIiB9LCBwYXJ0aWNsZXMubWFwKChpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IGluZGV4LCBjbGFzc05hbWU6IFwiY2lyY2xlLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNpcmNsZVwiIH0pKSkpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgQmFubmVyO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBkZWxldGVDb21tZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1lbnRzQXBpXCI7XG5mdW5jdGlvbiBDb21tZW50VXBkYXRlKHsgcXVlc3Rpb24sIHNldFF1ZXN0aW9uLCBjb21tZW50LCBvbkNvbW1lbnREZWxldGUsIG9uQ2FuY2VsIH0pIHtcbiAgICBjb25zdCBbaXNEZWxldGluZywgc2V0SXNEZWxldGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SXNEZWxldGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVkQ29tbWVudCA9IHlpZWxkIGRlbGV0ZUNvbW1lbnQoY29tbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzID0gdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzLmZpbHRlcihjID0+IGMuaWQgIT09IGNvbW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbih1cGRhdGVkUXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbkNvbW1lbnREZWxldGUoZGVsZXRlZENvbW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJEbyB5b3Ugd2FudCB0byByZW1vdmUgdGhpcyBjb21tZW50ID9cIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYnV0dG9ucy1jb250YWluZXInIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXRlcnRpYXJ5XCIsIG9uQ2xpY2s6IG9uQ2FuY2VsLCBkaXNhYmxlZDogaXNEZWxldGluZyB9LCBcIkNhbmNlbFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tcmVkXCIsIGRpc2FibGVkOiBpc0RlbGV0aW5nLCBvbkNsaWNrOiBoYW5kbGVTdWJtaXQgfSwgaXNEZWxldGluZyA/ICdEZWxldGluZycgOiAnRGVsZXRlJykpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFVwZGF0ZTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tIFwiLi4vTWFya2Rvd24vTWFya2Rvd25SZW5kZXJlclwiO1xuaW1wb3J0IENvbW1lbnRVcGRhdGUgZnJvbSBcIi4vQ29tbWVudFVwZGF0ZVwiO1xuaW1wb3J0IENvbW1lbnREZWxldGUgZnJvbSBcIi4vQ29tbWVudERlbGV0ZVwiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSBcIi4vUHJvZmlsZVBpY3R1cmVcIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXNcIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmZ1bmN0aW9uIENvbW1lbnRJdGVtKHsgY29tbWVudCwgaW5kZXgsIHNldFF1ZXN0aW9uLCBxdWVzdGlvbiwgbW9kZSwgfSkge1xuICAgIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2lzRGVsZXRpbmcsIHNldElzRGVsZXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHsgZm9ybWF0dGVkRGF0ZSwgZm9ybWF0dGVkVGltZSB9ID0gZm9ybWF0RGF0ZShjb21tZW50LmNyZWF0aW9uRGF0ZSk7XG4gICAgY29uc3QgeyBpc0F1dGhvciwgaXNBZG1pbiB9ID0gdXNlQXV0aCgpO1xuICAgIGNvbnN0IHVzZXJDYW5FZGl0ID0gaXNBdXRob3IoY29tbWVudC5hdXRob3IuaWQpIHx8IGlzQWRtaW4oKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVDb21tZW50VXBkYXRlZCgpIHtcbiAgICAgICAgc2V0SXNFZGl0aW5nKGZhbHNlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQ29tbWVudERlbGV0ZWQoKSB7XG4gICAgICAgIHNldElzRGVsZXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVTdGFydEVkaXRpbmcoKSB7XG4gICAgICAgIHNldElzRWRpdGluZyh0cnVlKTtcbiAgICAgICAgc2V0SXNEZWxldGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN0YXJ0RGVsZXRpbmcoKSB7XG4gICAgICAgIHNldElzRGVsZXRpbmcodHJ1ZSk7XG4gICAgICAgIHNldElzRWRpdGluZyhmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZU9iamVjdCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZU9iamVjdC5kYXRlKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xuICAgICAgICBjb25zdCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyk7XG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZvcm1hdHRlZERhdGU6IGAke2RheX0vJHttb250aH0vJHt5ZWFyfWAsXG4gICAgICAgICAgICBmb3JtYXR0ZWRUaW1lOiBgJHtob3Vyc306JHttaW51dGVzfWBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBpbmRleCAhPT0gMCAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaHJcIiwgeyBjbGFzc05hbWU6IFwiaC1bMnB4XSBiZy13aGl0ZS8xMCBib3JkZXItMFwiIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi5saSwgeyB2YXJpYW50czogaXRlbSwgY2xhc3NOYW1lOiBgcHktOCBmaXJzdDpwdC0wIGxhc3Q6cGItMCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbW1lbnQtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctc2Vjb25kYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbW1lbnQtaGVhZGVyLWNvbnRhaW5lciBmbGV4IGZsZXgtd3JhcCBnYXAtNCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInVzZXItaW5mb3MtY29udGFpbmVyIGZsZXggZmxleC13cmFwIGdhcC1zcGFjaW5nLXNlY29uZGFyeSBpdGVtcy1jZW50ZXIgZ3Jvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFByb2ZpbGVQaWN0dXJlLCB7IGltYWdlOiBjb21tZW50LmF1dGhvci5pbWFnZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBmbGV4IGZsZXgtY29sIGdhcC0yYCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIGNvbW1lbnQuYXV0aG9yLnVzZXJuYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImRhdGUtY29udGFpbmVyIGZsZXggZ2FwLTQgIGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiAnZmxleCBpdGVtcy1jZW50ZXIgbXV0ZWQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29ucyBtci0yIG1kLTE0XCIgfSwgXCJjYWxlbmRhcl90b2RheVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGZvcm1hdHRlZERhdGUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBjbGFzc05hbWU6ICdmbGV4IGl0ZW1zLWNlbnRlciBtdXRlZCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zIG1yLTIgbWQtMTRcIiB9LCBcInNjaGVkdWxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgZm9ybWF0dGVkVGltZSkpKSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyIGdyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckNhbkVkaXQgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiLCBvbkNsaWNrOiAoKSA9PiBoYW5kbGVTdGFydEVkaXRpbmcoKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwiZWRpdFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiLCBvbkNsaWNrOiAoKSA9PiBoYW5kbGVTdGFydERlbGV0aW5nKCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImRlbGV0ZVwiKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGUgPT09ICdkaXNwbGF5JyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGAke1JPVVRFUy5RVUVTVElPTn0vJHtjb21tZW50LnF1ZXN0aW9uSWR9YCwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcInZpc2liaWxpdHlcIikpKSkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbW1lbnQtYm9keS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1hcmtkb3duUmVuZGVyZXIsIHsgY29udGVudDogY29tbWVudC5jb250ZW50IH0pKSksXG4gICAgICAgICAgICBpc0VkaXRpbmcgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1lbnRVcGRhdGUsIHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbjogc2V0UXVlc3Rpb24sIGNvbW1lbnQ6IGNvbW1lbnQsIG9uQ29tbWVudFVwZGF0ZWQ6IGhhbmRsZUNvbW1lbnRVcGRhdGVkLCBvbkNhbmNlbDogKCkgPT4gc2V0SXNFZGl0aW5nKGZhbHNlKSB9KSxcbiAgICAgICAgICAgIGlzRGVsZXRpbmcgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1lbnREZWxldGUsIHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBzZXRRdWVzdGlvbjogc2V0UXVlc3Rpb24sIGNvbW1lbnQ6IGNvbW1lbnQsIG9uQ29tbWVudERlbGV0ZTogaGFuZGxlQ29tbWVudERlbGV0ZWQsIG9uQ2FuY2VsOiAoKSA9PiBzZXRJc0RlbGV0aW5nKGZhbHNlKSB9KSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRJdGVtO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBhZGRDb21tZW50IH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1lbnRzQXBpXCI7XG5pbXBvcnQgQ29tbWVudEl0ZW0gZnJvbSBcIi4vQ29tbWVudEl0ZW1cIjtcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IE1hcmtkb3duSW5mb3MgZnJvbSBcIi4uL01hcmtkb3duL01hcmtkb3duSW5mb3NcIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXNcIjtcbmZ1bmN0aW9uIENvbW1lbnRMaXN0KHsgcXVlc3Rpb24sIHNldFF1ZXN0aW9uIH0pIHtcbiAgICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2lzU3VibWl0dGluZywgc2V0SXNTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbWFya2Rvd25JbmZvcywgc2V0TWFya2Rvd25JbmZvc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUF1dGgoKTtcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICAgICAgICBzZXRTdWNjZXNzKGZhbHNlKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3Q29tbWVudCA9IHlpZWxkIGFkZENvbW1lbnQocXVlc3Rpb24uaWQsIGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChuZXdDb21tZW50ICYmIG5ld0NvbW1lbnQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZFF1ZXN0aW9uID0gT2JqZWN0LmFzc2lnbih7fSwgcXVlc3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzLnB1c2gobmV3Q29tbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHVwZGF0ZWRRdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1Y2Nlc3ModHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbW1lbnQoJycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gYWRkIGNvbW1lbnQ6ICcgKyBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEVycm9yKCdGYWlsZWQgdG8gYWRkIGNvbW1lbnQ6ICcgKyBlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3dJbmZvcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TWFya2Rvd25JbmZvcyhwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XG4gICAgfVxuICAgIDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1zZXBhcmF0b3ItY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogJ3RpdGxlJyB9LCBcIkNvbW1lbnRzXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiAnY29tbWVudHMtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2xhc3MgYm94IGJnLWRhcmstZ3JleS1zZWNvbmRhcnknIH0sIHF1ZXN0aW9uLmNvbW1lbnRzLmxlbmd0aCA+IDAgPyAocXVlc3Rpb24uY29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tbWVudEl0ZW0sIHsgY29tbWVudDogY29tbWVudCwgaW5kZXg6IGluZGV4LCBxdWVzdGlvbjogcXVlc3Rpb24sIHNldFF1ZXN0aW9uOiBzZXRRdWVzdGlvbiwga2V5OiBgY29tbWVudC0ke2luZGV4fWAgfSkpKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJUaGVyZSdzIG5vIGRpc2N1c3Npb24gYWJvdXQgdGhpcyBxdWVzdGlvbi4uLlwiKSkpLFxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQoKSA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tY29udGFpbmVyIGdhcC00IGdsYXNzIGJveCBiZy1kYXJrLWdyZXktc2Vjb25kYXJ5XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogXCJzbWFsbC10aXRsZVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImNoYXRfYnViYmxlXCIpLFxuICAgICAgICAgICAgICAgIFwiSm9pbiB0aGUgY29udmVyc2F0aW9uXCIpLFxuICAgICAgICAgICAgc3VjY2VzcyAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiB9LCBcIkNvbW1lbnQgYWRkIHdpdGggc3VjY2VzcyAhXCIpLFxuICAgICAgICAgICAgZXJyb3IgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJhbGVydCBhbGVydC1kYW5nZXJcIiB9LCBlcnJvciksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG9uU3VibWl0OiBoYW5kbGVTdWJtaXQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXAgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgY2xhc3NOYW1lOiBcImZvcm0gY29kZS1lZGl0b3JcIiwgdmFsdWU6IGNvbW1lbnQsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSksIHBsYWNlaG9sZGVyOiBcIllvdXIgY29tbWVudC4uLlwiLCByb3dzOiA0LCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWJvdHRvbS1jb250YWluZXIgZmxleC13cmFwIGp1c3RpZnktYmV0d2VlbiBmbGV4IGdhcC00XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgY2xhc3NOYW1lOiBgZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS01MGAsIG9uQ2xpY2s6IGhhbmRsZVNob3dJbmZvcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IFwiL2ltYWdlcy9sb2dvcy9tYXJrZG93bi1sb2dvLnBuZ1wiLCBhbHQ6IFwiTWFya2Rvd24gbG9nb1wiLCBjbGFzc05hbWU6IFwiaC01IG1yLTJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1hcmtkb3duIGluZm9zXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lciBncm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIsIGRpc2FibGVkOiBpc1N1Ym1pdHRpbmcgfSwgaXNTdWJtaXR0aW5nID8gJ1NlbmRpbmcnIDogJ1NlbmQnKSkpKSxcbiAgICAgICAgICAgIG1hcmtkb3duSW5mb3MgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93bkluZm9zLCBudWxsKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2xhc3MgYm94IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiAnc21hbGwtdGl0bGUnIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJjaGF0X2J1YmJsZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXCJXYW5uYSBqb2luIHRoZSBjb252ZXJzYXRpb24gP1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLCBcIlBsZWFzZSBsb2dpbiBvciByZWdpc3RlciAhXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLkxPR0lOLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeVwiIH0sIFwiTG9naW5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuUkVHSVNURVIsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiB9LCBcIlJlZ2lzdGVyXCIpKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBDb21tZW50TGlzdDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXBkYXRlQ29tbWVudCB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9jb21tZW50c0FwaVwiO1xuaW1wb3J0IE1hcmtkb3duSW5mb3MgZnJvbSBcIi4uL01hcmtkb3duL01hcmtkb3duSW5mb3NcIjtcbmZ1bmN0aW9uIENvbW1lbnRVcGRhdGUoeyBxdWVzdGlvbiwgc2V0UXVlc3Rpb24sIGNvbW1lbnQsIG9uQ29tbWVudFVwZGF0ZWQsIG9uQ2FuY2VsIH0pIHtcbiAgICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW25ld0NvbW1lbnQsIHNldE5ld0NvbW1lbnRdID0gdXNlU3RhdGUoY29tbWVudC5jb250ZW50KTtcbiAgICBjb25zdCBbbWFya2Rvd25JbmZvcywgc2V0TWFya2Rvd25JbmZvc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEVycm9yKG51bGwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ29tbWVudCA9IHlpZWxkIHVwZGF0ZUNvbW1lbnQoY29tbWVudC5pZCwgbmV3Q29tbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRDb21tZW50ICYmIHVwZGF0ZWRDb21tZW50LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRRdWVzdGlvbiA9IE9iamVjdC5hc3NpZ24oe30sIHF1ZXN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF1cGRhdGVkUXVlc3Rpb24uY29tbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRJbmRleCA9IHVwZGF0ZWRRdWVzdGlvbi5jb21tZW50cy5maW5kSW5kZXgoYyA9PiBjLmlkID09PSB1cGRhdGVkQ29tbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkUXVlc3Rpb24uY29tbWVudHNbY29tbWVudEluZGV4XSA9IHVwZGF0ZWRDb21tZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZFF1ZXN0aW9uLmNvbW1lbnRzLnB1c2godXBkYXRlZENvbW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFF1ZXN0aW9uKHVwZGF0ZWRRdWVzdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uQ29tbWVudFVwZGF0ZWQodXBkYXRlZENvbW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVNob3dJbmZvcyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0TWFya2Rvd25JbmZvcyhwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XG4gICAgfVxuICAgIDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1jb250YWluZXJcIiB9LFxuICAgICAgICBlcnJvciAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImFsZXJ0IGFsZXJ0LWRhbmdlclwiIH0sIGVycm9yKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBvblN1Ym1pdDogaGFuZGxlU3VibWl0IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXAgIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgY2xhc3NOYW1lOiBcImZvcm1cIiwgdmFsdWU6IG5ld0NvbW1lbnQsIG9uQ2hhbmdlOiAoZSkgPT4gc2V0TmV3Q29tbWVudChlLnRhcmdldC52YWx1ZSksIHJvd3M6IDMsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ib3R0b20tY29udGFpbmVyIGZsZXgtd3JhcCBqdXN0aWZ5LWJldHdlZW4gZmxleCBnYXAtNFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGBmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTUwYCwgb25DbGljazogaGFuZGxlU2hvd0luZm9zIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBcIi9pbWFnZXMvbG9nb3MvbWFya2Rvd24tbG9nby5wbmdcIiwgYWx0OiBcIk1hcmtkb3duIGxvZ29cIiwgY2xhc3NOYW1lOiBcImgtNSBtci0yXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBcIk1hcmtkb3duIGluZm9zXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYnV0dG9ucy1jb250YWluZXIgZ3JvdycgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGNsYXNzTmFtZTogXCJidXR0b24gYnRuLXRlcnRpYXJ5XCIsIG9uQ2xpY2s6IG9uQ2FuY2VsLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIH0sIFwiQ2FuY2VsXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiLCBkaXNhYmxlZDogaXNTdWJtaXR0aW5nIH0sIGlzU3VibWl0dGluZyA/ICdVcGRhdGluZycgOiAnU2F2ZScpKSkpLFxuICAgICAgICBtYXJrZG93bkluZm9zICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd25JbmZvcywgbnVsbCkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRVcGRhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gUHJvZmlsZVBpY3R1cmUoeyBpbWFnZSB9KSB7XG4gICAgY29uc3QgaW1hZ2VTcmMgPSBpbWFnZVxuICAgICAgICA/IGAvdXBsb2Fkcy9pbWFnZXMvdXNlcnMvJHtpbWFnZX1gXG4gICAgICAgIDogYC9pbWFnZXMvbG9nb3MvcHJvZmlsZS1waWN0dXJlLnBuZ2A7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgY2xhc3NOYW1lOiBgYXNwZWN0LXNxdWFyZSByb3VuZGVkLWZ1bGwgdy0xMiB4bDp3LTEyIG9iamVjdC1jb3ZlciBib3JkZXItbGlnaHQtZ3JleS1zZWNvbmRhcnkgYm9yZGVyLTJgLCBzcmM6IGltYWdlU3JjLCBhbHQ6IFwiUHJvZmlsZSBwaWN0dXJlXCIgfSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBpY3R1cmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFF1ZXN0aW9uQ29udGVudCBmcm9tIFwiLi4vUXVlc3Rpb24vUXVlc3Rpb25Db250ZW50XCI7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tIFwiLi4vUXVlc3Rpb24vQ2hvaWNlc1wiO1xuaW1wb3J0IHsgaXRlbSB9IGZyb20gXCIuLi8uLi9tb3Rpb24vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgZGVtb0Fuc3dlcnMxLCBkZW1vUXVlc3Rpb24xIH0gZnJvbSBcIi4vZGVtb1F1ZXN0aW9ucy9kZW1vUXVlc3Rpb24xXCI7XG5pbXBvcnQgeyBkZW1vQW5zd2VyczIsIGRlbW9RdWVzdGlvbjIgfSBmcm9tIFwiLi9kZW1vUXVlc3Rpb25zL2RlbW9RdWVzdGlvbjJcIjtcbmltcG9ydCB7IGRlbW9BbnN3ZXJzMywgZGVtb1F1ZXN0aW9uMyB9IGZyb20gXCIuL2RlbW9RdWVzdGlvbnMvZGVtb1F1ZXN0aW9uM1wiO1xuaW1wb3J0IHsgZGVtb0Fuc3dlcnM0LCBkZW1vUXVlc3Rpb240IH0gZnJvbSBcIi4vZGVtb1F1ZXN0aW9ucy9kZW1vUXVlc3Rpb240XCI7XG5pbXBvcnQgeyBkZW1vQW5zd2VyczUsIGRlbW9RdWVzdGlvbjUgfSBmcm9tIFwiLi9kZW1vUXVlc3Rpb25zL2RlbW9RdWVzdGlvbjVcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbmV4cG9ydCBmdW5jdGlvbiBEZW1vKHsgbW9kZSB9KSB7XG4gICAgY29uc3QgcXVlc3Rpb25zRGF0YSA9IFtcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uMSwgYW5zd2VyczogZGVtb0Fuc3dlcnMxIH0sXG4gICAgICAgIHsgcXVlc3Rpb246IGRlbW9RdWVzdGlvbjIsIGFuc3dlcnM6IGRlbW9BbnN3ZXJzMiB9LFxuICAgICAgICB7IHF1ZXN0aW9uOiBkZW1vUXVlc3Rpb24zLCBhbnN3ZXJzOiBkZW1vQW5zd2VyczMgfSxcbiAgICAgICAgeyBxdWVzdGlvbjogZGVtb1F1ZXN0aW9uNCwgYW5zd2VyczogZGVtb0Fuc3dlcnM0IH0sXG4gICAgICAgIHsgcXVlc3Rpb246IGRlbW9RdWVzdGlvbjUsIGFuc3dlcnM6IGRlbW9BbnN3ZXJzNSB9XG4gICAgXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyLCB7IHNwZWVkOiAxMDAwLCBzbGlkZXNQZXJWaWV3OiAxLCBsb29wOiB0cnVlLCBjZW50ZXJlZFNsaWRlczogdHJ1ZSwgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgICAgICBkZWxheTogNTAwMCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgICAgICAgICB9LCBtb2R1bGVzOiBbQXV0b3BsYXldLCBjbGFzc05hbWU6IGAtbS1zcGFjaW5nLXByaW1hcnlgIH0sIHF1ZXN0aW9uc0RhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIHsga2V5OiBkYXRhLnF1ZXN0aW9uLmlkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi5kaXYsIHsga2V5OiBkYXRhLnF1ZXN0aW9uLmlkLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgZXhpdDogXCJoaWRkZW5cIiwgdmFyaWFudHM6IGl0ZW0sIGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIHJlbGF0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeSBtLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBkYXRhLnF1ZXN0aW9uLCBtb2RlOiBtb2RlIH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IGRhdGEucXVlc3Rpb24sIGFuc3dlcnM6IGRhdGEuYW5zd2VycyB9KSkpKSkpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgRGVtbztcbiIsImV4cG9ydCBjb25zdCBkZW1vUXVlc3Rpb24xID0ge1xuICAgIFwiaWRcIjogMjc1LFxuICAgIFwiY2F0ZWdvcmllc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogNzAxLFxuICAgICAgICAgICAgXCJuYW1lXCI6IFwiSFRNTFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTg4LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiVGhlIGlucHV0IGlzIG1pc3NpbmcgYSBwcm9wZXIgbGFiZWwsIHdoaWNoIG1ha2VzIGl0IGluYWNjZXNzaWJsZSB0byBzY3JlZW4gcmVhZGVyIHVzZXJzLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMTg2LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiVGhlIHN1Ym1pdCBidXR0b24gZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGFyaWEtbGFiZWwgYXR0cmlidXRlLlwiXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgaXMgdGhlIGFjY2Vzc2liaWxpdHkgaXNzdWUgd2l0aCB0aGUgZm9sbG93aW5nIGZvcm0gZWxlbWVudCA/XFxuXCIgK1xuICAgICAgICBcImBgYGh0bWxcXG5cIiArXG4gICAgICAgIFwiPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciB5b3VyIGVtYWlsXFxcIj5cXG5cIiArXG4gICAgICAgIFwiPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiPlN1Ym1pdDwvYnV0dG9uPlxcblwiICtcbiAgICAgICAgXCJgYGBcIixcbiAgICBcImRpZmZpY3VsdHlcIjogMSxcbiAgICBcIm51bWJlck9mQ29ycmVjdENob2ljZXNcIjogMSxcbiAgICBcImNvcnJlY3RDaG9pY2VzXCI6IFtcbiAgICAgICAgMTg4XG4gICAgXVxufTtcbmV4cG9ydCBjb25zdCBkZW1vQW5zd2VyczEgPSBbXG4gICAgMTg4XG5dO1xuIiwiZXhwb3J0IGNvbnN0IGRlbW9RdWVzdGlvbjIgPSB7XG4gICAgXCJpZFwiOiAyNzMsXG4gICAgXCJjYXRlZ29yaWVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiA3MjEsXG4gICAgICAgICAgICBcIm5hbWVcIjogXCJDU1NcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNob2ljZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3NyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcImBgYGNzc1xcclxcbnAge1xcciB0ZXh0LXN0eWxlOiBib2xkOyBcXHJ9XFxyYGBgXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxNzgsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgYGBjc3NcXHJcXG5wIHtcXHIgZm9udC13ZWlnaHQ6IGJvbGQ7IFxccn1cXHJgYGBcIlxuICAgICAgICB9LFxuICAgIF0sXG4gICAgXCJjb21tZW50c1wiOiBbXSxcbiAgICBcImNvbnRlbnRcIjogXCJXaGF0IGlzIHRoZSBjb3JyZWN0IENTUyBzeW50YXggZm9yIG1ha2luZyBhbGwgcGFyYWdyYXBoIGVsZW1lbnRzIGJvbGQgP1wiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAxLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAyLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDE4MVxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnMyID0gW1xuICAgIDE3NyxcbiAgICAxODBcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uMyA9IHtcbiAgICBcImlkXCI6IDI3MixcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcwNCxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIkphdmFTY3JpcHRcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNob2ljZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDE3MyxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcImBbMSwgMiwgMywgNCwgNV1gXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgXCJpZFwiOiAxNzQsXG4gICAgICAgICAgICBcImNvbnRlbnRcIjogXCJgWzIsIDQsIDYsIDgsIDEwXWBcIlxuICAgICAgICB9XG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgd2lsbCBiZSB0aGUgb3V0cHV0IG9mIHRoZSBmb2xsb3dpbmcgY29kZSA/XFxuXCIgK1xuICAgICAgICBcImBgYGphdmFzY3JpcHRcXG5cIiArXG4gICAgICAgIFwiY29uc3QgbnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1XTtcXG5cIiArXG4gICAgICAgIFwiY29uc3QgZG91YmxlZCA9IG51bWJlcnMubWFwKG51bSA9PiBudW0gKiAyKTtcXG5cIiArXG4gICAgICAgIFwiY29uc29sZS5sb2coZG91YmxlZCk7XFxuXCIgK1xuICAgICAgICBcImBgYFwiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAxLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAxLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAxNzRcbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGRlbW9BbnN3ZXJzMyA9IFtcbiAgICAxNzRcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uNCA9IHtcbiAgICBcImlkXCI6IDI3OSxcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcwMyxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlBIUFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA0LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiQ2FwaXRhbGl6ZXMgdGhlIGZpcnN0IGxldHRlciBvZiBlYWNoIHdvcmRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDIwNSxcbiAgICAgICAgICAgIFwiY29udGVudFwiOiBcIlJldHVybnMgXFxcIkhFTExPIFdPUkxEXFxcIlwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY29tbWVudHNcIjogW10sXG4gICAgXCJjb250ZW50XCI6IFwiV2hhdCBkb2VzIHRoaXMgUEhQIGZ1bmN0aW9uIGRvP1xcclxcbmBgYHBocFxcclxcbmZ1bmN0aW9uIHByb2Nlc3MoJHN0cikge1xcclxcbiAgICByZXR1cm4gdWN3b3JkcyhzdHJ0b2xvd2VyKCRzdHIpKTtcXHJcXG59XFxyXFxuZWNobyBwcm9jZXNzKFxcXCJIRUxMTyB3b3JsZFxcXCIpO1xcclxcbmBgYFwiLFxuICAgIFwiZGlmZmljdWx0eVwiOiAyLFxuICAgIFwibnVtYmVyT2ZDb3JyZWN0Q2hvaWNlc1wiOiAxLFxuICAgIFwiY29ycmVjdENob2ljZXNcIjogW1xuICAgICAgICAyMDRcbiAgICBdXG59O1xuZXhwb3J0IGNvbnN0IGRlbW9BbnN3ZXJzNCA9IFtcbiAgICAyMDRcbl07XG4iLCJleHBvcnQgY29uc3QgZGVtb1F1ZXN0aW9uNSA9IHtcbiAgICBcImlkXCI6IDI4MCxcbiAgICBcImNhdGVnb3JpZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IDcyMyxcbiAgICAgICAgICAgIFwibmFtZVwiOiBcIlNRTFwiXG4gICAgICAgIH1cbiAgICBdLFxuICAgIFwiY2hvaWNlc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA3LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiUmV0dXJucyB0aGUgNSBtb3N0IGV4cGVuc2l2ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogMjA2LFxuICAgICAgICAgICAgXCJjb250ZW50XCI6IFwiUmV0dXJucyB0aGUgNSBjaGVhcGVzdCBwcm9kdWN0c1wiXG4gICAgICAgIH0sXG4gICAgXSxcbiAgICBcImNvbW1lbnRzXCI6IFtdLFxuICAgIFwiY29udGVudFwiOiBcIldoYXQgZG9lcyB0aGlzIFNRTCBxdWVyeSBkbz9cXHJcXG5gYGBzcWxcXHJcXG5TRUxFQ1QgbmFtZSwgcHJpY2UgXFxyXFxuRlJPTSBwcm9kdWN0cyBcXHJcXG5PUkRFUiBCWSBwcmljZSBERVNDIFxcclxcbkxJTUlUIDU7XFxyXFxuYGBgXCIsXG4gICAgXCJkaWZmaWN1bHR5XCI6IDEsXG4gICAgXCJudW1iZXJPZkNvcnJlY3RDaG9pY2VzXCI6IDEsXG4gICAgXCJjb3JyZWN0Q2hvaWNlc1wiOiBbXG4gICAgICAgIDIwNlxuICAgIF1cbn07XG5leHBvcnQgY29uc3QgZGVtb0Fuc3dlcnM1ID0gW1xuICAgIDIwN1xuXTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBNYXJrZG93bkluZm9zKCkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBgbWFya2Rvd24taW5mbyBib3ggYmctdmVyeS1kYXJrLWdyZXktcHJpbWFyeSByb3VuZGVkLXJhZGl1cy1zZWNvbmRhcnlgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImAgLi4uIGBcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IGBtdXRlZCBtbC0yYCB9LCBcIklubGluZSBjb2RlXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcImBgYGphdmFzY3JpcHQgLi4uIGBgYFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiQ29kZSBibG9ja1wiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCIqIC4uLiAqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJJdGFsaWNcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiKiogLi4uICoqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJCb2xkXCIpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCBudWxsLCBcIlsgLi4uIF0oaHR0cHM6Ly91cmwuY29tKVwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiTGlua1wiKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCItIC4uLlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYG11dGVkIG1sLTJgIH0sIFwiVW5vcmRlcmVkIGxpc3RcIikpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiMS4gLi4uXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBgbXV0ZWQgbWwtMmAgfSwgXCJPcmRlcmVkIGxpc3RcIikpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd25JbmZvcztcbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgUHJpc20gYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tIFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCI7XG5pbXBvcnQgeyBva2FpZGlhIH0gZnJvbSBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc21cIjtcbmV4cG9ydCBmdW5jdGlvbiBNYXJrZG93blJlbmRlcmVyKHsgY29udGVudCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0TWFya2Rvd24sIHsgY29tcG9uZW50czoge1xuICAgICAgICAgICAgY29kZShfYSkge1xuICAgICAgICAgICAgICAgIHZhciB7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG5vZGUsIHN0eWxlLCByZWYgfSA9IF9hLCByZXN0ID0gX19yZXN0KF9hLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcIm5vZGVcIiwgXCJzdHlsZVwiLCBcInJlZlwiXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSAvbGFuZ3VhZ2UtKFxcdyspLy5leGVjKGNsYXNzTmFtZSB8fCBcIlwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlU3RyaW5nID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbi5qb2luKFwiXCIpIDogU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2ggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChTeW50YXhIaWdobGlnaHRlciwgT2JqZWN0LmFzc2lnbih7IGxhbmd1YWdlOiBtYXRjaFsxXSwgUHJlVGFnOiBcImRpdlwiLCBzdHlsZTogb2thaWRpYSwgY2xhc3NOYW1lOiBcImNvZGUtd3JhcHBlclwiIH0sIHJlc3QpLCBjb2RlU3RyaW5nLnJlcGxhY2UoL1xcbiQvLCBcIlwiKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIE9iamVjdC5hc3NpZ24oeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCByZXN0KSwgY2hpbGRyZW4pKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0gfSwgY29udGVudCkpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWFya2Rvd25SZW5kZXJlciB9IGZyb20gXCIuLi9NYXJrZG93bi9NYXJrZG93blJlbmRlcmVyXCI7XG5pbXBvcnQgdXNlUmF5c0FuaW1hdGlvbiBmcm9tIFwiLi4vLi4vaG9vay9SYXlzQW5pbWF0aW9uXCI7XG5pbXBvcnQgeyBjb250YWluZXIsIGl0ZW0gfSBmcm9tIFwiLi4vLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCBzaHVmZmxlIGZyb20gXCIuLi8uLi9zY3JpcHRzL3NodWZmbGVcIjtcbmZ1bmN0aW9uIENob2ljZXMoeyBtb2RlLCBxdWVzdGlvbiwgYW5zd2Vycywgc2V0QW5zd2VycyB9KSB7XG4gICAgY29uc3QgW3NodWZmbGVkQ2hvaWNlcywgc2V0U2h1ZmZsZWRDaG9pY2VzXSA9IHVzZVN0YXRlKCgpID0+IHNodWZmbGUocXVlc3Rpb24uY2hvaWNlcykpO1xuICAgIHVzZVJheXNBbmltYXRpb24ocXVlc3Rpb24sIG1vZGUpO1xuICAgIGZ1bmN0aW9uIGhhbmRsZUFuc3dlcnNDaGFuZ2UoYW5zd2VySWQpIHtcbiAgICAgICAgaWYgKHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzIHx8ICFzZXRBbnN3ZXJzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0QW5zd2VycyhwcmV2U2VsZWN0ZWQgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uLm51bWJlck9mQ29ycmVjdENob2ljZXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2Fuc3dlcklkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudGx5U2VsZWN0ZWQgPSBwcmV2U2VsZWN0ZWQuaW5jbHVkZXMoYW5zd2VySWQpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ3VycmVudGx5U2VsZWN0ZWRcbiAgICAgICAgICAgICAgICA/IHByZXZTZWxlY3RlZC5maWx0ZXIoaWQgPT4gaWQgIT09IGFuc3dlcklkKVxuICAgICAgICAgICAgICAgIDogWy4uLnByZXZTZWxlY3RlZCwgYW5zd2VySWRdO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0QW5zd2VyU3RhdHVzKGFuc3dlcklkKSB7XG4gICAgICAgIGlmICghcXVlc3Rpb24uY29ycmVjdENob2ljZXMpXG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBhbnN3ZXJzLmluY2x1ZGVzKGFuc3dlcklkKTtcbiAgICAgICAgY29uc3QgaXNDb3JyZWN0ID0gcXVlc3Rpb24uY29ycmVjdENob2ljZXMuaW5jbHVkZXMoYW5zd2VySWQpO1xuICAgICAgICBpZiAoaXNDb3JyZWN0KVxuICAgICAgICAgICAgcmV0dXJuICdjb3JyZWN0JztcbiAgICAgICAgaWYgKGlzU2VsZWN0ZWQpXG4gICAgICAgICAgICByZXR1cm4gJ2luY29ycmVjdCc7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi51bCwgeyB2YXJpYW50czogY29udGFpbmVyLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgY2xhc3NOYW1lOiBgY2hvaWNlcy1jb250YWluZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5ICR7cXVlc3Rpb24ubnVtYmVyT2ZDb3JyZWN0Q2hvaWNlcyA+IDEgJiYgJ211bHRpcGxlLWNob2ljZXMnfWAgfSwgc2h1ZmZsZWRDaG9pY2VzLm1hcCgoY2hvaWNlLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQobW90aW9uLmxpLCB7IHZhcmlhbnRzOiBpdGVtLCBrZXk6IGBjaG9pY2UtJHtjaG9pY2UuaWR9YCwgY2xhc3NOYW1lOiBgY2hvaWNlLW9wdGlvbiBnbGFzc2AgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIsIHsgY2xhc3NOYW1lOiBgY2hlY2tib3gtZ3JvdXBgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBgJHtxdWVzdGlvbi5udW1iZXJPZkNvcnJlY3RDaG9pY2VzID4gMSA/ICdjaGVja2JveCcgOiAncmFkaW8nfWAsIG5hbWU6IFwiY2hvaWNlXCIsIHZhbHVlOiBjaG9pY2UuaWQsIGNoZWNrZWQ6IGFuc3dlcnMuaW5jbHVkZXMoY2hvaWNlLmlkKSwgb25DaGFuZ2U6ICgpID0+IGhhbmRsZUFuc3dlcnNDaGFuZ2UoY2hvaWNlLmlkKSwgY2xhc3NOYW1lOiBgY2hvaWNlLSR7aW5kZXh9IGNoZWNrYm94LWlucHV0ICR7Z2V0QW5zd2VyU3RhdHVzKGNob2ljZS5pZCl9ICR7YW5zd2Vycy5pbmNsdWRlcyhjaG9pY2UuaWQpID8gJ2NoZWNrZWQnIDogJyd9YCwgdGFiSW5kZXg6IG1vZGUgPT09ICdkaXNwbGF5JyA/IC0xIDogdW5kZWZpbmVkIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcImNoZWNrYm94LXRpbGUgYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwiY2hlY2tib3gtbGFiZWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IGNob2ljZS5jb250ZW50IH0pKSkpKSkpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgQ2hvaWNlcztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSBcIi4uL01hcmtkb3duL01hcmtkb3duUmVuZGVyZXJcIjtcbmltcG9ydCB7IGl0ZW0gfSBmcm9tIFwiLi4vLi4vbW90aW9uL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmZ1bmN0aW9uIEV4cGxhbmF0aW9uKHsgcXVlc3Rpb24sIG1vZGUgPSAnZGlzcGxheScgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChtb3Rpb24uZGl2LCB7IHZhcmlhbnRzOiBpdGVtLCBjbGFzc05hbWU6IGBxdWVzdGlvbi1ib3R0b20tY29udGFpbmVyIG10LTQgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1zZWNvbmRhcnlgIH0sXG4gICAgICAgIG1vZGUgPT09ICdnYW1lJyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBjbGFzc05hbWU6IGB0ZXh0LWxnIGZvbnQtc2VtaWJvbGRgIH0sXG4gICAgICAgICAgICBxdWVzdGlvbi5pc01hdGNoID8gJ0NvcnJlY3QgIScgOiAnSW5jb3JyZWN0Li4uJyxcbiAgICAgICAgICAgIFwiIEhlcmUncyBhbiBleHBsYW5hdGlvblwiKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgY2xhc3NOYW1lOiBgdGV4dC1sZyBmb250LXNlbWlib2xkYCB9LCBcIkV4cGxhbmF0aW9uXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNYXJrZG93blJlbmRlcmVyLCB7IGNvbnRlbnQ6IHF1ZXN0aW9uLmV4cGxhbmF0aW9uIH0pKSk7XG59XG5leHBvcnQgZGVmYXVsdCBFeHBsYW5hdGlvbjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRSYW5kb21RdWVzdGlvbiwgZ2V0UXVlc3Rpb24sIHN1Ym1pdEFuc3dlcnMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcXVlc3Rpb25zQXBpXCI7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tIFwiLi9DaG9pY2VzXCI7XG5pbXBvcnQgQ29tbWVudExpc3QgZnJvbSBcIi4uL0NvbW1lbnQvQ29tbWVudExpc3RcIjtcbmltcG9ydCBMaW1pdFJlYWNoZWQgZnJvbSBcIi4uL1NlY3Rpb25zL0xpbWl0UmVhY2hlZFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL1NlY3Rpb25zL0xvYWRpbmdcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcbmltcG9ydCBRdWVzdGlvbk5vdEZvdW5kIGZyb20gXCIuLi9TZWN0aW9ucy9RdWVzdGlvbk5vdEZvdW5kXCI7XG5pbXBvcnQgUXVlc3Rpb25Db250ZW50IGZyb20gXCIuL1F1ZXN0aW9uQ29udGVudFwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwibW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBpdGVtIH0gZnJvbSBcIi4uLy4uL21vdGlvbi9hbmltYXRpb25zXCI7XG5mdW5jdGlvbiBRdWVzdGlvbih7IG1vZGUsIHF1ZXN0aW9uSWQsIHNob3dDb21tZW50cyB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2xpbWl0UmVhY2hlZCwgc2V0TGltaXRSZWFjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbd3JhcCwgc2V0V3JhcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZFF1ZXN0aW9uKCk7XG4gICAgfSwgW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHF1aXpDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVpei1jb250YWluZXInKTtcbiAgICAgICAgaWYgKHF1aXpDb250YWluZXIpIHtcbiAgICAgICAgICAgIGlmICh3cmFwKSB7XG4gICAgICAgICAgICAgICAgcXVpekNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3cmFwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWl6Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3dyYXAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFt3cmFwXSk7XG4gICAgZnVuY3Rpb24gbG9hZFF1ZXN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEFuc3dlcnMoW10pO1xuICAgICAgICAgICAgY29uc3QgdXJsRmlsdGVycyA9IHNlYXJjaEZvclBhcmFtcygpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSA9PT0gJ2Rpc3BsYXknICYmIHF1ZXN0aW9uSWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB5aWVsZCBnZXRRdWVzdGlvbihxdWVzdGlvbklkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB5aWVsZCBnZXRSYW5kb21RdWVzdGlvbih1cmxGaWx0ZXJzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCdsaW1pdFJlYWNoZWQnIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0TGltaXRSZWFjaGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCdpZCcgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbihkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIHF1ZXN0aW9uOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2VhcmNoRm9yUGFyYW1zKCkge1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCB1cmxGaWx0ZXJzID0ge307XG4gICAgICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzKCdkaWZmaWN1bHR5JykpIHtcbiAgICAgICAgICAgIHVybEZpbHRlcnMuZGlmZmljdWx0eSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2RpZmZpY3VsdHknKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VhcmNoUGFyYW1zLmhhcygnY2F0ZWdvcnlbXScpKSB7XG4gICAgICAgICAgICB1cmxGaWx0ZXJzLmNhdGVnb3JpZXMgPSBzZWFyY2hQYXJhbXMuZ2V0QWxsKCdjYXRlZ29yeVtdJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVybEZpbHRlcnM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZU5leHRRdWVzdGlvbigpIHtcbiAgICAgICAgc2V0VmlzaWJsZShmYWxzZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVRvZ2dsZVdyYXAoKSB7XG4gICAgICAgIHNldFdyYXAod3JhcCA9PiAhd3JhcCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgc3VibWl0QW5zd2VycyhxdWVzdGlvbiA9PT0gbnVsbCB8fCBxdWVzdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcXVlc3Rpb24uaWQsIGFuc3dlcnMpO1xuICAgICAgICAgICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHF1ZXN0aW9uKSwgeyBjb3JyZWN0Q2hvaWNlczogcmVzdWx0LmNvcnJlY3RDaG9pY2VzLCBpc01hdGNoOiByZXN1bHQuaXNNYXRjaCB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc3VibWl0dGluZyBhbnN3ZXJzIDogJywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGxpbWl0UmVhY2hlZClcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGltaXRSZWFjaGVkLCBudWxsKTtcbiAgICBpZiAobG9hZGluZylcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZywgbnVsbCk7XG4gICAgaWYgKCFxdWVzdGlvbilcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Ob3RGb3VuZCwgbnVsbCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5pbWF0ZVByZXNlbmNlLCB7IG1vZGU6ICd3YWl0Jywgb25FeGl0Q29tcGxldGU6ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBsb2FkUXVlc3Rpb24oKTtcbiAgICAgICAgICAgICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAgICAgICAgICAgfSkgfSwgdmlzaWJsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChtb3Rpb24uZGl2LCB7IGtleTogcXVlc3Rpb24uaWQsIGluaXRpYWw6IFwiaGlkZGVuXCIsIGFuaW1hdGU6IFwidmlzaWJsZVwiLCBleGl0OiBcImhpZGRlblwiLCB2YXJpYW50czogaXRlbSwgY2xhc3NOYW1lOiBcImZsZXggZmxleC1jb2wgcmVsYXRpdmVcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnkgbWItc3BhY2luZy1sYXJnZS1zZWNvbmRhcnkgeGw6bWItMFwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbkNvbnRlbnQsIHsgcXVlc3Rpb246IHF1ZXN0aW9uLCBtb2RlOiBtb2RlIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hvaWNlcywgeyBtb2RlOiBtb2RlLCBxdWVzdGlvbjogcXVlc3Rpb24sIGFuc3dlcnM6IGFuc3dlcnMsIHNldEFuc3dlcnM6IHNldEFuc3dlcnMgfSksXG4gICAgICAgICAgICAgICAgbW9kZSA9PT0gJ2dhbWUnICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiAnYnV0dG9ucy1jb250YWluZXInIH0sIHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IGBidXR0b24gYnV0dG9uLXRlcnRpYXJ5YCwgb25DbGljazogaGFuZGxlTmV4dFF1ZXN0aW9uIH0sIFwiTmV4dCBxdWVzdGlvblwiKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogJ2J1dHRvbiBidXR0b24tdGVydGlhcnknLCBvbkNsaWNrOiBoYW5kbGVTdWJtaXQgfSwgXCJWYWxpZGF0ZVwiKSkpKSksXG4gICAgICAgICAgICBtb2RlID09PSAnZ2FtZScgJiZcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNpZGViYXIsIHsgb25OZXh0OiBoYW5kbGVOZXh0UXVlc3Rpb24sIG9uV3JhcDogaGFuZGxlVG9nZ2xlV3JhcCwgd3JhcDogd3JhcCwgaXNMb2FkaW5nOiBsb2FkaW5nLCBxdWVzdGlvbjogcXVlc3Rpb24gfSkpKSksXG4gICAgICAgIHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzICYmIHNob3dDb21tZW50cyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChDb21tZW50TGlzdCwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIHNldFF1ZXN0aW9uOiBzZXRRdWVzdGlvbiB9KSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1hcmtkb3duUmVuZGVyZXIgfSBmcm9tIFwiLi4vTWFya2Rvd24vTWFya2Rvd25SZW5kZXJlclwiO1xuaW1wb3J0IFF1ZXN0aW9uSW1hZ2UgZnJvbSBcIi4vUXVlc3Rpb25JbWFnZVwiO1xuaW1wb3J0IEV4cGxhbmF0aW9uIGZyb20gXCIuL0V4cGxhbmF0aW9uXCI7XG5mdW5jdGlvbiBRdWVzdGlvbkNvbnRlbnQoeyBxdWVzdGlvbiwgbW9kZSB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveFwiIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicXVlc3Rpb24taGVhZGVyLWNvbnRhaW5lciBmbGV4IGdhcC04IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItNFwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IGB0YWdzLWNvbnRhaW5lciBncm93LTFgIH0sIHF1ZXN0aW9uLmNhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyBrZXk6IGBjYXRlZ29yeS0ke2luZGV4fWAgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYHRhZyB0YWctc21hbGxgIH0sIGNhdGVnb3J5Lm5hbWUpKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBmbGV4IGl0ZW1zLWVuZCBnYXAtMWAgfSwgQXJyYXkoMykuZmlsbChudWxsKS5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0Q2xhc3MgPSBpbmRleCA9PT0gMCA/ICdoLTMnIDogaW5kZXggPT09IDEgPyAnaC00JyA6ICdoLTUnO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHlDbGFzcyA9IGluZGV4IDwgKHF1ZXN0aW9uID09PSBudWxsIHx8IHF1ZXN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBxdWVzdGlvbi5kaWZmaWN1bHR5KSA/ICdvcGFjaXR5LTEwMCcgOiAnb3BhY2l0eS01MCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogYHJvdW5kZWQtc20gdy0xLjUgYmctd2hpdGUvNzUgJHtoZWlnaHRDbGFzc30gJHtvcGFjaXR5Q2xhc3N9YCwga2V5OiBpbmRleCB9KSk7XG4gICAgICAgICAgICB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgcXVlc3Rpb24tY29udGVudC1jb250YWluZXIgbXQtNCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXNlY29uZGFyeWAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFya2Rvd25SZW5kZXJlciwgeyBjb250ZW50OiBxdWVzdGlvbi5jb250ZW50IH0pKSxcbiAgICAgICAgcXVlc3Rpb24ubnVtYmVyT2ZDb3JyZWN0Q2hvaWNlcyA+IDEgJiZcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiAnb3BhY2l0eS01MCB0ZXh0LXNtIG10LTQnIH0sIFwiTXVsdGlwbGUgY2hvaWNlcyBwb3NzaWJsZS5cIiksXG4gICAgICAgIHF1ZXN0aW9uLmltYWdlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25JbWFnZSwgeyBpbWFnZTogcXVlc3Rpb24uaW1hZ2UgfSksXG4gICAgICAgIHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzICYmIHF1ZXN0aW9uLmV4cGxhbmF0aW9uICYmIChtb2RlICE9PSAnc2hhcmUnKSAmJlxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFeHBsYW5hdGlvbiwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIG1vZGU6IG1vZGUgfSkpKTtcbn1cbjtcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5mdW5jdGlvbiBRdWVzdGlvbkltYWdlKHsgaW1hZ2UgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC91cGxvYWRzL2ltYWdlcy9xdWVzdGlvbnMvJHtpbWFnZX1gLCBjbGFzc05hbWU6IGBtdC00IG1heC13LWZ1bGwgcm91bmRlZC1yYWRpdXMtc2Vjb25kYXJ5IG14LWF1dG9gLCBhbHQ6IFwiXCIgfSkpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uSW1hZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlc1wiO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5mdW5jdGlvbiBTaWRlYmFyKHsgb25OZXh0LCBvbldyYXAsIHdyYXAsIGlzTG9hZGluZywgcXVlc3Rpb24gfSkge1xuICAgIGNvbnN0IHsgaXNBZG1pbiB9ID0gdXNlQXV0aCgpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYHhsOnN0aWNreSB0b3Atc3BhY2luZy1wcmltYXJ5IHotMTAgLW9yZGVyLTFgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhc2lkZVwiLCB7IGNsYXNzTmFtZTogYGFic29sdXRlIGdsYXNzIGJveCBiZy1kYXJrLWdyZXktc2Vjb25kYXJ5IGJvdHRvbS0wIHhsOmJvdHRvbS1hdXRvIHhsOm10LTAgeGw6LWxlZnQtc3BhY2luZy1wcmltYXJ5IHhsOi10cmFuc2xhdGUteC1mdWxsIC10cmFuc2xhdGUteS1bMTJweF0gc206LXRyYW5zbGF0ZS15LVszMHB4XSB4bDp0cmFuc2xhdGUteS0wIHAtMiB6LTEwYCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lciB4bDpmbGV4LWNvbCBnYXAtMlwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvblwiLCBvbkNsaWNrOiBvbk5leHQsIGRpc2FibGVkOiBpc0xvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImF1dG9yZW5ld1wiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuRklMVEVSUywgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tYWN0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcInR1bmVcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1hY3Rpb25cIiwgb25DbGljazogb25XcmFwIH0sIHdyYXAgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcInN0YXJ0XCIpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IGNsYXNzTmFtZTogXCJtYXRlcmlhbC1pY29uc1wiIH0sIFwia2V5Ym9hcmRfcmV0dXJuXCIpKSksXG4gICAgICAgICAgICAgICAgaXNBZG1pbigpICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGAke1JPVVRFUy5RVUVTVElPTn0vJHtxdWVzdGlvbi5pZH0vZWRpdGAsIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLWFjdGlvbiBiZy12ZXJ5LWRhcmstZ3JleS1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcImVkaXRcIikpKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9tb3Rpb24vYW5pbWF0aW9uc1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcIm1vdGlvbi9yZWFjdFwiO1xuaW1wb3J0IHsgZ2V0TGFzdENvbW1lbnRzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2NvbW1lbnRzQXBpXCI7XG5pbXBvcnQgQ29tbWVudEl0ZW0gZnJvbSBcIi4uL0NvbW1lbnQvQ29tbWVudEl0ZW1cIjtcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gXCIuLi8uLi91dGlscy9yb3V0ZXNcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuL0xvYWRpbmdcIjtcbmV4cG9ydCBmdW5jdGlvbiBEaXNjdXNzaW9ucyh7IG1vZGUgfSkge1xuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxvYWRDb21tZW50cygpO1xuICAgIH0sIFtdKTtcbiAgICBmdW5jdGlvbiBsb2FkQ29tbWVudHMoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgICAgICAgICBkYXRhID0geWllbGQgZ2V0TGFzdENvbW1lbnRzKCk7XG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGNvbW1lbnRzOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGxvYWRpbmcpXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIG51bGwpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29tbWVudHMgJiYgY29tbWVudHMubGVuZ3RoID4gMCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KG1vdGlvbi51bCwgeyB2YXJpYW50czogY29udGFpbmVyLCBpbml0aWFsOiBcImhpZGRlblwiLCBhbmltYXRlOiBcInZpc2libGVcIiwgY2xhc3NOYW1lOiAnY29tbWVudHMtY29udGFpbmVyIGZsZXggZmxleC1jb2wgZ2xhc3MgYm94IGJnLWRhcmstZ3JleS1zZWNvbmRhcnknIH0sIGNvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KENvbW1lbnRJdGVtLCB7IG1vZGU6IG1vZGUsIGNvbW1lbnQ6IGNvbW1lbnQsIGluZGV4OiBpbmRleCwga2V5OiBgY29tbWVudC0ke2luZGV4fWAgfSkpKSkpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveCBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IGNsYXNzTmFtZTogYHNtYWxsLXRpdGxlYCB9LCBcIlRoZXJlJ3Mgbm8gY29tbWVudCB0byBzaG93XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIG51bGwsIFwiWW91IGNhbiBhZGQgY29tbWVudHMgYWZ0ZXIgYW5zd2VyaW5nIHF1ZXN0aW9ucyAhXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiYnV0dG9ucy1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLlFVSVosIGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiB9LCBcIlBsYXlcIikpKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBEaXNjdXNzaW9ucztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBST1VURVMgfSBmcm9tIFwiLi4vLi4vdXRpbHMvcm91dGVzXCI7XG5mdW5jdGlvbiBMaW1pdFJlYWNoZWQoKSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInBhZ2UtaGVhZGVyLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBjbGFzc05hbWU6IFwiYmlnLXRpdGxlIGdyb3dcIiB9LCBcIkxpbWl0IHJlYWNoZWQgIVwiKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZ2xhc3MgYm94IGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgc21hbGwtdGl0bGVgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJ3YXJuaW5nXCIpLFxuICAgICAgICAgICAgICAgICAgICBcIllvdSd2ZSByZWFjaGVkIHRoZSBxdWVzdGlvbiBsaW1pdCBmb3IgdG9kYXlcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJQbGVhc2UgbG9naW4gb3IgcmVnaXN0ZXIgdG8gY29udGludWUgdG8gcGxheSBhbmQgc2F2ZSB5b3VyIHByb2dyZXNzaW9uLlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IFJPVVRFUy5MT0dJTiwgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tdGVydGlhcnlcIiB9LCBcIkxvZ2luXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogUk9VVEVTLlJFR0lTVEVSLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgfSwgXCJSZWdpc3RlclwiKSkpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBMaW1pdFJlYWNoZWQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gTG9hZGluZygpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3JvdXRlc1wiO1xuZnVuY3Rpb24gUXVlc3Rpb25Ob3RGb3VuZCgpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwicGFnZS1oZWFkZXItY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJiaWctdGl0bGUgZ3Jvd1wiIH0sIFwiUXVlc3Rpb24gbm90IGZvdW5kXCIpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnbGFzcyBib3ggZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6ICdzbWFsbC10aXRsZScgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBjbGFzc05hbWU6IFwibWF0ZXJpYWwtaWNvbnNcIiB9LCBcIndhcm5pbmdcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiTm8gcXVlc3Rpb24gZm91bmRcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgXCJUcnkgYWdhaW4gbGF0ZXIgb3Igd2l0aCBkaWZmZXJlbnQgZmlsdGVycy5cIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBST1VURVMuRklMVEVSUywgY2xhc3NOYW1lOiBcImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiIH0sIFwiRmlsdGVyc1wiKSkpKSk7XG59XG47XG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbk5vdEZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBBdXRvcGxheSB9IGZyb20gJ3N3aXBlci9tb2R1bGVzJztcbmZ1bmN0aW9uIFN0YWNrc1NsaWRlcigpIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyLCB7IG1vZHVsZXM6IFtBdXRvcGxheV0sIHNwYWNlQmV0d2VlbjogNTAsIHNwZWVkOiA4MDAwLCBhbGxvd1RvdWNoTW92ZTogZmFsc2UsIHByZXZlbnRDbGlja3M6IHRydWUsIHNpbXVsYXRlVG91Y2g6IGZhbHNlLCB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IHRydWUsIGF1dG9wbGF5OiB7XG4gICAgICAgICAgICAgICAgZGVsYXk6IDEwMDAsXG4gICAgICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhdXNlT25Nb3VzZUVudGVyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdG9wT25MYXN0U2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHdhaXRGb3JUcmFuc2l0aW9uOiB0cnVlLFxuICAgICAgICAgICAgfSwgc2xpZGVzUGVyVmlldzogJ2F1dG8nLCBmcmVlTW9kZTogdHJ1ZSwgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgICAgICA2NDE6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiA4MCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9jc3MzLWxvZ28ucG5nYCwgYWx0OiBcIkNTUyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9qYXZhc2NyaXB0LWxvZ28ucG5nYCwgYWx0OiBcIkphdmFTY3JpcHQgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvZG9ja2VyLWxvZ28ucG5nYCwgYWx0OiBcIkRvY2tlciBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9uZXh0LWpzLWxvZ28ucG5nYCwgYWx0OiBcIk5leHQuanMgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvcmVhY3QtbG9nby5wbmdgLCBhbHQ6IFwiUmVhY3QgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvaHRtbC1sb2dvLnBuZ2AsIGFsdDogXCJIVE1MIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3Nhc3MtbG9nby5wbmdgLCBhbHQ6IFwiU2FzcyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9zeW1mb255LWxvZ28tMi5wbmdgLCBhbHQ6IFwiU3ltZm9ueSBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy90YWlsd2luZGNzcy1sb2dvLnBuZ2AsIGFsdDogXCJUYWlsd2luZENTUyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy92dWUtanMtbG9nby5wbmdgLCBhbHQ6IFwiVnVlLmpzIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3dvcmRwcmVzcy1sb2dvLnBuZ2AsIGFsdDogXCJXb3JkcHJlc3MgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvcHl0aG9uLWxvZ28ucG5nYCwgYWx0OiBcIlB5dGhvbiBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9naXQtbG9nby5wbmdgLCBhbHQ6IFwiR2l0IGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL25vZGUtanMtbG9nby5wbmdgLCBhbHQ6IFwiTm9kZS5qcyBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9waHAtbG9nby5wbmdgLCBhbHQ6IFwiUEhQIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3R5cGVzY3JpcHQtbG9nby5wbmdgLCBhbHQ6IFwiVHlwZVNjcmlwdCBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9kamFuZ28tbG9nby5wbmdgLCBhbHQ6IFwiRGphbmdvIGxvZ29cIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFN3aXBlclNsaWRlLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL2FuZ3VsYXItbG9nby5wbmdgLCBhbHQ6IFwiQW5ndWxhciBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy90d2lnLWxvZ28ucG5nYCwgYWx0OiBcIlR3aWcgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvZ2l0aHViLWxvZ28ucG5nYCwgYWx0OiBcIkdpdEh1YiBsb2dvXCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTd2lwZXJTbGlkZSwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBgL2ltYWdlcy9sb2dvcy9sYXJhdmVsLWxvZ28ucG5nYCwgYWx0OiBcIkxhcmF2ZWwgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvbXlzcWwtbG9nby5wbmdgLCBhbHQ6IFwiTXlTUUwgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvZXhwcmVzcy1sb2dvLnBuZ2AsIGFsdDogXCJFeHByZXNzSlMgbG9nb1wiIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3dpcGVyU2xpZGUsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvZ2l0bGFiLWxvZ28ucG5nYCwgYWx0OiBcIkdpdExhYiBsb2dvXCIgfSkpKSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgU3RhY2tzU2xpZGVyO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0UXVlc3Rpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvcXVlc3Rpb25zQXBpXCI7XG5pbXBvcnQgKiBhcyBodG1sVG9JbWFnZSBmcm9tICdodG1sLXRvLWltYWdlJztcbmltcG9ydCBJbnN0YWdyYW0gZnJvbSBcIi4vU29jaWFsL0luc3RhZ3JhbVwiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4vU29jaWFsL1R3aXR0ZXJcIjtcbmV4cG9ydCBmdW5jdGlvbiBTaGFyZSh7IHF1ZXN0aW9uSWQsIG1vZGUsIHNvY2lhbCB9KSB7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbG9hZFF1ZXN0aW9uKCk7XG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCBhYnNvbHV0ZSB3LWZ1bGwgcC1zcGFjaW5nLXByaW1hcnkgZ2FwLTQgaXRlbXMtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXhsYCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7IHNyYzogYC9pbWFnZXMvbG9nb3MvcXVpenN0YWNrLWxvZ28ucG5nYCwgY2xhc3NOYW1lOiBgaC04YCwgYWx0OiBcIlF1aXpzdGFjayBsb2dvXCIgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgbnVsbCwgXCJRdWl6c3RhY2tcIikpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gRm9vdGVyKCkge1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCBhYnNvbHV0ZSBib3R0b20tMCBqdXN0aWZ5LWVuZCB3LWZ1bGwgcC1zcGFjaW5nLXByaW1hcnkgZ2FwLTQgaXRlbXMtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LXhsYCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL3BpY3Rvcy9hcnJvdy1mb3J3YXJkLnBuZ2AsIGNsYXNzTmFtZTogYGgtNmAsIGFsdDogXCJGb3J3YXJkIHBpY3RvXCIgfSkpKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIFNjcmVlbnNob3QoeyBvbkNsaWNrIH0pIHtcbiAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJidXR0b25zLWNvbnRhaW5lciBtYi1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvbkNsaWNrLCBjbGFzc05hbWU6IFwiYnV0dG9uIGJ1dHRvbi10ZXJ0aWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBcIm1hdGVyaWFsLWljb25zXCIgfSwgXCJwaG90b19jYW1lcmFcIikpKSkpO1xuICAgIH1cbiAgICBjb25zdCBsaVJlZnMgPSB1c2VSZWYoW10pO1xuICAgIGNvbnN0IHNldExpUmVmID0gKGVsLCBpbmRleCkgPT4ge1xuICAgICAgICBsaVJlZnMuY3VycmVudFtpbmRleF0gPSBlbDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNhcHR1cmVTY3JlZW5zaG90KGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMaSA9IGxpUmVmcy5jdXJyZW50W2luZGV4XTtcbiAgICAgICAgaWYgKGN1cnJlbnRMaSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudFRvQ2FwdHVyZSA9IGN1cnJlbnRMaS5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuYm94Jyk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudFRvQ2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIGh0bWxUb0ltYWdlXG4gICAgICAgICAgICAgICAgICAgIC50b0pwZWcoZWxlbWVudFRvQ2FwdHVyZSwge1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAwLjkwLFxuICAgICAgICAgICAgICAgICAgICBwaXhlbFJhdGlvOiAyLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZUJ1c3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNraXBGb250czogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGRhdGFVcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuZG93bmxvYWQgPSAnc2NyZWVuc2hvdC5qcGVnJztcbiAgICAgICAgICAgICAgICAgICAgbGluay5ocmVmID0gZGF0YVVybDtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgdGFraW5nIHNjcmVlbnNob3QgOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkUXVlc3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0QW5zd2VycyhbXSk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB5aWVsZCBnZXRRdWVzdGlvbihxdWVzdGlvbklkKTtcbiAgICAgICAgICAgICAgICBzZXRRdWVzdGlvbihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgcXVlc3Rpb246JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcXVlc3Rpb24gJiYgKHNvY2lhbCA9PT0gJ3R3aXR0ZXInID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVHdpdHRlciwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIG1vZGU6IG1vZGUsIGFuc3dlcnM6IGFuc3dlcnMsIHNldEFuc3dlcnM6IHNldEFuc3dlcnMsIHNldExpUmVmOiBzZXRMaVJlZiwgY2FwdHVyZVNjcmVlbnNob3Q6IGNhcHR1cmVTY3JlZW5zaG90LCBIZWFkZXI6IEhlYWRlciwgRm9vdGVyOiBGb290ZXIsIFNjcmVlbnNob3Q6IFNjcmVlbnNob3QgfSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5zdGFncmFtLCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgbW9kZTogbW9kZSwgYW5zd2VyczogYW5zd2Vycywgc2V0QW5zd2Vyczogc2V0QW5zd2Vycywgc2V0TGlSZWY6IHNldExpUmVmLCBjYXB0dXJlU2NyZWVuc2hvdDogY2FwdHVyZVNjcmVlbnNob3QsIEhlYWRlcjogSGVhZGVyLCBGb290ZXI6IEZvb3RlciwgU2NyZWVuc2hvdDogU2NyZWVuc2hvdCB9KSkpO1xufVxuO1xuZXhwb3J0IGRlZmF1bHQgU2hhcmU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vLi4vQmFubmVyL0Jhbm5lclwiO1xuaW1wb3J0IFF1ZXN0aW9uQ29udGVudCBmcm9tIFwiLi4vLi4vUXVlc3Rpb24vUXVlc3Rpb25Db250ZW50XCI7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tIFwiLi4vLi4vUXVlc3Rpb24vQ2hvaWNlc1wiO1xuaW1wb3J0IEV4cGxhbmF0aW9uIGZyb20gXCIuLi8uLi9RdWVzdGlvbi9FeHBsYW5hdGlvblwiO1xuZnVuY3Rpb24gSW5zdGFncmFtKHsgcXVlc3Rpb24sIG1vZGUsIGFuc3dlcnMsIHNldEFuc3dlcnMsIHNldExpUmVmLCBjYXB0dXJlU2NyZWVuc2hvdCwgSGVhZGVyLCBGb290ZXIsIFNjcmVlbnNob3QgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHsgY2xhc3NOYW1lOiBgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1sYXJnZS1zZWNvbmRhcnlgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHJlZjogZWwgPT4gc2V0TGlSZWYoZWwsIDApIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNjcmVlbnNob3QsIHsgb25DbGljazogKCkgPT4gY2FwdHVyZVNjcmVlbnNob3QoMCkgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNjcmVlbmJveCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIG91dGxpbmUgb3V0bGluZS0yIG91dGxpbmUtWyNmZmZmZmYxYV1cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFubmVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCBmbGV4LWNvbCBoLWZ1bGxgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ6b29tIGdyb3cganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5IG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgbW9kZTogbW9kZSB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzY3JlZW5ib3gtbm9pc2UtdGV4dHVyZVwiIH0pKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyByZWY6IGVsID0+IHNldExpUmVmKGVsLCAxKSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JlZW5zaG90LCB7IG9uQ2xpY2s6ICgpID0+IGNhcHR1cmVTY3JlZW5zaG90KDEpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzY3JlZW5ib3ggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgYXNwZWN0LXNxdWFyZSBvdXRsaW5lIG91dGxpbmUtMiBvdXRsaW5lLVsjZmZmZmZmMWFdXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhbm5lciwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiem9vbSBncm93IGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeSBtLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXJzOiBhbnN3ZXJzLCBzZXRBbnN3ZXJzOiBzZXRBbnN3ZXJzIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNjcmVlbmJveC1ub2lzZS10ZXh0dXJlXCIgfSkpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7IHJlZjogZWwgPT4gc2V0TGlSZWYoZWwsIDIpIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNjcmVlbnNob3QsIHsgb25DbGljazogKCkgPT4gY2FwdHVyZVNjcmVlbnNob3QoMikgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInNob3ctYW5zd2VycyBzY3JlZW5ib3ggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgYXNwZWN0LXNxdWFyZSBvdXRsaW5lIG91dGxpbmUtMiBvdXRsaW5lLVsjZmZmZmZmMWFdXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhbm5lciwgeyBjb2xvcjogJ2dyZWVuJyB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBgZmxleCBmbGV4LWNvbCBoLWZ1bGxgIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJ6b29tIGdyb3cganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5IG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hvaWNlcywgeyBtb2RlOiBtb2RlLCBxdWVzdGlvbjogcXVlc3Rpb24sIGFuc3dlcnM6IGFuc3dlcnMsIHNldEFuc3dlcnM6IHNldEFuc3dlcnMgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvb3RlciwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94LW5vaXNlLXRleHR1cmVcIiB9KSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgcmVmOiBlbCA9PiBzZXRMaVJlZihlbCwgMykgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NyZWVuc2hvdCwgeyBvbkNsaWNrOiAoKSA9PiBjYXB0dXJlU2NyZWVuc2hvdCgzKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2hvdy1hbnN3ZXJzIHNjcmVlbmJveCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBhc3BlY3Qtc3F1YXJlIG91dGxpbmUgb3V0bGluZS0yIG91dGxpbmUtWyNmZmZmZmYxYV1cIiB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQmFubmVyLCB7IGNvbG9yOiAnZ3JlZW4nIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBmbGV4IGZsZXgtY29sIGgtZnVsbGAgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInpvb20gZ3JvdyBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLXByaW1hcnkgbS1zcGFjaW5nLXByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJnbGFzcyBib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRXhwbGFuYXRpb24sIHsgcXVlc3Rpb246IHF1ZXN0aW9uIH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzY3JlZW5ib3gtbm9pc2UtdGV4dHVyZVwiIH0pKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyByZWY6IGVsID0+IHNldExpUmVmKGVsLCA0KSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JlZW5zaG90LCB7IG9uQ2xpY2s6ICgpID0+IGNhcHR1cmVTY3JlZW5zaG90KDQpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzaG93LWFuc3dlcnMgc2NyZWVuYm94IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGFzcGVjdC1zcXVhcmUgb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1bI2ZmZmZmZjFhXVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYW5uZXIsIHsgY29sb3I6ICdncmVlbicgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInpvb20gZ3JvdyBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sIG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBkaXNjb3ZlciBmbGV4IGdhcC1zcGFjaW5nLXByaW1hcnkgZmxleC1jb2wgaC1mdWxsIHctZnVsbCBtYXgtdy1bMzUwcHhdIHB0LXNwYWNpbmctbGFyZ2Utc2Vjb25kYXJ5IHBsLXNwYWNpbmctbGFyZ2Utc2Vjb25kYXJ5YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBmbGV4IHctZnVsbCBnYXAtNCBpdGVtcy1jZW50ZXIgZm9udC1ib2xkIHRleHQteGxgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3F1aXpzdGFjay1sb2dvLnBuZ2AsIGNsYXNzTmFtZTogYGgtMTFgLCBhbHQ6IFwiUXVpenN0YWNrIGxvZ29cIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgdGV4dC00eGxgIH0sIFwiUXVpenN0YWNrXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IGB0ZXh0LXhsIGdyYWRpZW50LXRpdGxlIGZvbnQtc2VtaWJvbGRgIH0sIFwiTGVhcm4gd2ViIGRldmVsb3BtZW50IHRocm91Z2ggaW50ZXJhY3RpdmUgcXVpelwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyIGp1c3RpZnktc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiwgaHJlZjogXCIvcXVpelwiIH0sIFwiUGxheVwiKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGRlbW8gZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgbW9kZTogbW9kZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXJzOiBhbnN3ZXJzLCBzZXRBbnN3ZXJzOiBzZXRBbnN3ZXJzIH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94LW5vaXNlLXRleHR1cmVcIiB9KSkpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgSW5zdGFncmFtO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uLy4uL0Jhbm5lci9CYW5uZXJcIjtcbmltcG9ydCBRdWVzdGlvbkNvbnRlbnQgZnJvbSBcIi4uLy4uL1F1ZXN0aW9uL1F1ZXN0aW9uQ29udGVudFwiO1xuaW1wb3J0IENob2ljZXMgZnJvbSBcIi4uLy4uL1F1ZXN0aW9uL0Nob2ljZXNcIjtcbmltcG9ydCBFeHBsYW5hdGlvbiBmcm9tIFwiLi4vLi4vUXVlc3Rpb24vRXhwbGFuYXRpb25cIjtcbmZ1bmN0aW9uIFR3aXR0ZXIoeyBxdWVzdGlvbiwgbW9kZSwgYW5zd2Vycywgc2V0QW5zd2Vycywgc2V0TGlSZWYsIGNhcHR1cmVTY3JlZW5zaG90LCBIZWFkZXIsIEZvb3RlciwgU2NyZWVuc2hvdCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidWxcIiwgeyBjbGFzc05hbWU6IGBmbGV4IGZsZXgtY29sIGdhcC1zcGFjaW5nLWxhcmdlLXNlY29uZGFyeWAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgcmVmOiBlbCA9PiBzZXRMaVJlZihlbCwgMCkgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NyZWVuc2hvdCwgeyBvbkNsaWNrOiAoKSA9PiBjYXB0dXJlU2NyZWVuc2hvdCgwKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGFzcGVjdC1bMy80XSBvdXRsaW5lIG91dGxpbmUtMiBvdXRsaW5lLVsjZmZmZmZmMWFdXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJhbm5lciwgbnVsbCksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiem9vbSBncm93IGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeSBtLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uQ29udGVudCwgeyBxdWVzdGlvbjogcXVlc3Rpb24sIG1vZGU6IG1vZGUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXJzOiBhbnN3ZXJzLCBzZXRBbnN3ZXJzOiBzZXRBbnN3ZXJzIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGb290ZXIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzY3JlZW5ib3gtbm9pc2UtdGV4dHVyZVwiIH0pKSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHsgcmVmOiBlbCA9PiBzZXRMaVJlZihlbCwgMikgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2NyZWVuc2hvdCwgeyBvbkNsaWNrOiAoKSA9PiBjYXB0dXJlU2NyZWVuc2hvdCgyKSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2hvdy1hbnN3ZXJzIHNjcmVlbmJveCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZSBhc3BlY3QtWzMvNF0gb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1bI2ZmZmZmZjFhXVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYW5uZXIsIHsgY29sb3I6ICdncmVlbicgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiem9vbSBncm93IGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2wgZ2FwLXNwYWNpbmctcHJpbWFyeSBtLXNwYWNpbmctcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImdsYXNzIGJveFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChFeHBsYW5hdGlvbiwgeyBxdWVzdGlvbjogcXVlc3Rpb24gfSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChDaG9pY2VzLCB7IG1vZGU6IG1vZGUsIHF1ZXN0aW9uOiBxdWVzdGlvbiwgYW5zd2VyczogYW5zd2Vycywgc2V0QW5zd2Vyczogc2V0QW5zd2VycyB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9vdGVyLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzY3JlZW5ib3gtbm9pc2UtdGV4dHVyZVwiIH0pKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgeyByZWY6IGVsID0+IHNldExpUmVmKGVsLCA0KSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTY3JlZW5zaG90LCB7IG9uQ2xpY2s6ICgpID0+IGNhcHR1cmVTY3JlZW5zaG90KDQpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJzaG93LWFuc3dlcnMgc2NyZWVuYm94IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlIGFzcGVjdC1zcXVhcmUgb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1bI2ZmZmZmZjFhXVwiIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCYW5uZXIsIHsgY29sb3I6ICdncmVlbicgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGZsZXggZmxleC1jb2wgaC1mdWxsYCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcInpvb20gZ3JvdyBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sIG0tc3BhY2luZy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBkaXNjb3ZlciBmbGV4IGdhcC1zcGFjaW5nLXByaW1hcnkgZmxleC1jb2wgaC1mdWxsIHctZnVsbCBtYXgtdy1bMzUwcHhdIHB0LXNwYWNpbmctbGFyZ2Utc2Vjb25kYXJ5IHBsLXNwYWNpbmctbGFyZ2Utc2Vjb25kYXJ5YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IGBmbGV4IHctZnVsbCBnYXAtNCBpdGVtcy1jZW50ZXIgZm9udC1ib2xkIHRleHQteGxgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IGAvaW1hZ2VzL2xvZ29zL3F1aXpzdGFjay1sb2dvLnBuZ2AsIGNsYXNzTmFtZTogYGgtMTFgLCBhbHQ6IFwiUXVpenN0YWNrIGxvZ29cIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBgdGV4dC00eGxgIH0sIFwiUXVpenN0YWNrXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBjbGFzc05hbWU6IGB0ZXh0LXhsIGdyYWRpZW50LXRpdGxlIGZvbnQtc2VtaWJvbGRgIH0sIFwiTGVhcm4gd2ViIGRldmVsb3BtZW50IHRocm91Z2ggaW50ZXJhY3RpdmUgcXVpelwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImJ1dHRvbnMtY29udGFpbmVyIGp1c3RpZnktc3RhcnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGNsYXNzTmFtZTogXCJidXR0b24gYnV0dG9uLXByaW1hcnlcIiwgaHJlZjogXCIvcXVpelwiIH0sIFwiUGxheVwiKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogYGRlbW8gZmxleCBmbGV4LWNvbCBnYXAtc3BhY2luZy1wcmltYXJ5YCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25Db250ZW50LCB7IHF1ZXN0aW9uOiBxdWVzdGlvbiwgbW9kZTogbW9kZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KENob2ljZXMsIHsgbW9kZTogbW9kZSwgcXVlc3Rpb246IHF1ZXN0aW9uLCBhbnN3ZXJzOiBhbnN3ZXJzLCBzZXRBbnN3ZXJzOiBzZXRBbnN3ZXJzIH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwic2NyZWVuYm94LW5vaXNlLXRleHR1cmVcIiB9KSkpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgVHdpdHRlcjtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcbiAgICBjdXJyZW50VXNlcjogbnVsbCxcbiAgICBsb2FkaW5nOiB0cnVlLFxuICAgIGVycm9yOiBudWxsLFxuICAgIGlzQXV0aG9yOiAoKSA9PiBmYWxzZSxcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6ICgpID0+IGZhbHNlLFxuICAgIGlzQWRtaW46ICgpID0+IGZhbHNlLFxufSk7XG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICAgIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBmZXRjaEN1cnJlbnRVc2VyKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCcvYXBpL3VzZXIvY3VycmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFVzZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihkYXRhLmVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRVc2VyKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50VXNlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyIGluc3RhbmNlb2YgRXJyb3IgPyBlcnIubWVzc2FnZSA6ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmZXRjaEN1cnJlbnRVc2VyKCk7XG4gICAgfSwgW10pO1xuICAgIGZ1bmN0aW9uIGlzQXV0aG9yKGNvbnRlbnRBdXRob3JJZCkge1xuICAgICAgICBpZiAoIWN1cnJlbnRVc2VyKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gY3VycmVudFVzZXIuaWQgPT09IGNvbnRlbnRBdXRob3JJZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGVkKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFVzZXIgIT09IG51bGw7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzQWRtaW4oKSB7XG4gICAgICAgIGlmICghY3VycmVudFVzZXIpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlci5yb2xlcy5pbmNsdWRlcygnUk9MRV9BRE1JTicpO1xuICAgIH1cbiAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgY3VycmVudFVzZXIsXG4gICAgICAgIGxvYWRpbmcsXG4gICAgICAgIGVycm9yLFxuICAgICAgICBpc0F1dGhvcixcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkLFxuICAgICAgICBpc0FkbWluXG4gICAgfTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChBdXRoQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogdmFsdWUgfSwgY2hpbGRyZW4pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gICAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gdXNlUmF5c0FuaW1hdGlvbihxdWVzdGlvbiwgbW9kZSkge1xuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXlzJyk7XG4gICAgICAgIGlmIChtb2RlID09PSAnZGlzcGxheScgfHwgbW9kZSA9PT0gJ3NoYXJlJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKG9yaWdpbmFsRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9uLmNvcnJlY3RDaG9pY2VzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JDbGFzcyA9IHF1ZXN0aW9uLmlzTWF0Y2ggPT09IHRydWUgPyAnZ3JlZW4nIDogJ3JlZCc7XG4gICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNvbG9yQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIChfYSA9IG9yaWdpbmFsRWxlbWVudC5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaW5zZXJ0QmVmb3JlKGNsb25lZEVsZW1lbnQsIG9yaWdpbmFsRWxlbWVudC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvbmVkRWxlbWVudCA9IG9yaWdpbmFsRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY2xvbmVkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgKF9iID0gb3JpZ2luYWxFbGVtZW50LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5pbnNlcnRCZWZvcmUoY2xvbmVkRWxlbWVudCwgb3JpZ2luYWxFbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dyZWVuJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncmVkJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtxdWVzdGlvbiwgbW9kZV0pO1xufVxuZXhwb3J0IGRlZmF1bHQgdXNlUmF5c0FuaW1hdGlvbjtcbiIsImV4cG9ydCBjb25zdCBjb250YWluZXIgPSB7XG4gICAgaGlkZGVuOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHk6IDEwLFxuICAgIH0sXG4gICAgdmlzaWJsZToge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB5OiAwLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMixcbiAgICAgICAgfVxuICAgIH1cbn07XG5leHBvcnQgY29uc3QgaXRlbSA9IHtcbiAgICB2aXNpYmxlOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHk6IDAsXG4gICAgfSxcbiAgICBoaWRkZW46IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogMTAsXG4gICAgfSxcbn07XG4iLCJcInVzZSBzdHJpY3RcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYWNjb3JkaW9uQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb24tYnV0dG9uJyk7XG4gICAgZnVuY3Rpb24gdG9nZ2xlQWNjb3JkaW9uKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgICAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ29wZW4nKSkge1xuICAgICAgICAgICAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBjb250ZW50LnNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLm1heEhlaWdodCA9ICcwJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBhY2NvcmRpb25CdXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQWNjb3JkaW9uKTtcbiAgICB9KTtcbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5mdW5jdGlvbiBhcHBlYXJPblNjcm9sbCgpIHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dJdGVtcyhjb3VudGVyKTtcbiAgICB9KTtcbiAgICBhZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dJdGVtcyhjb3VudGVyKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNob3dJdGVtcyhjb3VudGVyKSB7XG4gICAgbGV0IGhpZGRlbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhZGUtaW4tdXA6bm90KC5zaG93KScpO1xuICAgIGhpZGRlbkl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGNoZWNrVmlzaWJsZShpdGVtKSkge1xuICAgICAgICAgICAgaXRlbS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAoY291bnRlciAqIDAuMikgKyAwLjIgKyBcInNcIjtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgY291bnRlcisrO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY291bnRlci0tO1xuICAgICAgICAgICAgfSwgKChjb3VudGVyICogMC4xKSAqIDEwMDApICsgNDAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY2hlY2tWaXNpYmxlKGl0ZW0pIHtcbiAgICBsZXQgcmVjdCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHZpZXdIZWlnaHQgPSBNYXRoLm1heChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIHJldHVybiAhKHJlY3QuYm90dG9tIDwgMCB8fCByZWN0LnRvcCAtIHZpZXdIZWlnaHQgPj0gMCk7XG59XG5hcHBlYXJPblNjcm9sbCgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0RmlsdGVycycpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlc3Rpb25Gb3JtJyk7XG4gICAgcmVzZXRCdXR0b24gPT09IG51bGwgfHwgcmVzZXRCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBmb3JtID09PSBudWxsIHx8IGZvcm0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJyk7XG4gICAgICAgIHJhZGlvQnV0dG9ucyA9PT0gbnVsbCB8fCByYWRpb0J1dHRvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJhZGlvQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChyYWRpbykge1xuICAgICAgICAgICAgcmFkaW8uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IGZvcm0gPT09IG51bGwgfHwgZm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbiAgICAgICAgY2hlY2tib3hlcyA9PT0gbnVsbCB8fCBjaGVja2JveGVzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjaGVja2JveGVzLmZvckVhY2goZnVuY3Rpb24gKGNoZWNrYm94KSB7XG4gICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tbWVudScpO1xuICAgIGNvbnN0IGhlYWRlckJvdHRvbUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItYm90dG9tLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpO1xuICAgIGxldCBpc01lbnVPcGVuID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG4gICAgICAgIGhlYWRlckJvdHRvbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIGhlYWRlckJvdHRvbUNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoJ2luZXJ0Jyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICBpc01lbnVPcGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xvc2VNZW51KCkge1xuICAgICAgICBoZWFkZXJCb3R0b21Db250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICBoZWFkZXJCb3R0b21Db250YWluZXIuc2V0QXR0cmlidXRlKCdpbmVydCcsICcnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgICAgIGlzTWVudU9wZW4gPSBmYWxzZTtcbiAgICB9XG4gICAgbWVudUJ1dHRvbiA9PT0gbnVsbCB8fCBtZW51QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoIWlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgIG9wZW5NZW51KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGhlYWRlckJvdHRvbUNvbnRhaW5lciA9PT0gbnVsbCB8fCBoZWFkZXJCb3R0b21Db250YWluZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGhlYWRlckJvdHRvbUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTWVudU9wZW4pIHtcbiAgICAgICAgICAgIGNsb3NlTWVudSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiBpc01lbnVPcGVuKSB7XG4gICAgICAgICAgICBjbG9zZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbmZ1bmN0aW9uIHBhcnNlU2ltcGxlWWFtbCh5YW1sQ29udGVudCkge1xuICAgIGNvbnN0IGxpbmVzID0geWFtbENvbnRlbnQudHJpbSgpLnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCBxdWVzdGlvbiA9IHt9O1xuICAgIGxldCBjdXJyZW50S2V5ID0gbnVsbDtcbiAgICBsZXQgY3VycmVudFZhbHVlID0gJyc7XG4gICAgbGV0IGluTXVsdGlsaW5lVmFsdWUgPSBmYWxzZTtcbiAgICBsZXQgYW5zd2VycyA9IFtdO1xuICAgIGxldCBjdXJyZW50QW5zd2VyID0ge307XG4gICAgbGV0IGluQW5zd2VycyA9IGZhbHNlO1xuICAgIGxldCBpbkFuc3dlck11bHRpbGluZSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgaWYgKCFsaW5lLnRyaW0oKSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBpZiAobGluZS5tYXRjaCgvXi1cXHMrcXVlc3Rpb246LykpIHtcbiAgICAgICAgICAgIGN1cnJlbnRLZXkgPSAncXVlc3Rpb24nO1xuICAgICAgICAgICAgaWYgKGxpbmUuaW5jbHVkZXMoJ3wnKSkge1xuICAgICAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlID0gbGluZS5yZXBsYWNlKC9eLVxccytxdWVzdGlvbjpcXHMqLywgJycpO1xuICAgICAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsaW5lLm1hdGNoKC9eXFxzKyhleHBsYW5hdGlvbnxkaWZmaWN1bHR5fGNhdGVnb3J5KTovKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRLZXkgJiYgIWluQW5zd2Vycykge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uW2N1cnJlbnRLZXldID0gY3VycmVudFZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlxccysoZXhwbGFuYXRpb258ZGlmZmljdWx0eXxjYXRlZ29yeSk6XFxzKiguKikvKTtcbiAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRLZXkgPSBtYXRjaFsxXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEtleSA9PT0gJ2V4cGxhbmF0aW9uJyAmJiBtYXRjaFsyXS5pbmNsdWRlcygnfCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IG1hdGNoWzJdO1xuICAgICAgICAgICAgICAgICAgICBpbk11bHRpbGluZVZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpbmUubWF0Y2goL15cXHMrYW5zd2VyczovKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRLZXkgJiYgIWluQW5zd2Vycykge1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uW2N1cnJlbnRLZXldID0gY3VycmVudFZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGluQW5zd2VycyA9IHRydWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5BbnN3ZXJzICYmIGxpbmUubWF0Y2goL15cXHMrLVxccythbnN3ZXJfY29udGVudDovKSkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBbnN3ZXIuYW5zd2VyX2NvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBhbnN3ZXJzLnB1c2goY3VycmVudEFuc3dlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50QW5zd2VyID0ge307XG4gICAgICAgICAgICBpZiAobGluZS5pbmNsdWRlcygnfCcpKSB7XG4gICAgICAgICAgICAgICAgaW5BbnN3ZXJNdWx0aWxpbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBbnN3ZXIuYW5zd2VyX2NvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluQW5zd2VyTXVsdGlsaW5lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY3VycmVudEFuc3dlci5hbnN3ZXJfY29udGVudCA9IGxpbmUucmVwbGFjZSgvXlxccystXFxzK2Fuc3dlcl9jb250ZW50OlxccyovLCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5BbnN3ZXJzICYmIGxpbmUubWF0Y2goL15cXHMrY29ycmVjdF9hbnN3ZXI6LykpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gbGluZS5yZXBsYWNlKC9eXFxzK2NvcnJlY3RfYW5zd2VyOlxccyovLCAnJyk7XG4gICAgICAgICAgICBjdXJyZW50QW5zd2VyLmNvcnJlY3RfYW5zd2VyID0gdmFsdWUgPT09ICd0cnVlJztcbiAgICAgICAgICAgIGluQW5zd2VyTXVsdGlsaW5lID0gZmFsc2U7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5NdWx0aWxpbmVWYWx1ZSAmJiBsaW5lLm1hdGNoKC9eXFxzezQsfS8pKSB7XG4gICAgICAgICAgICBjdXJyZW50VmFsdWUgKz0gKGN1cnJlbnRWYWx1ZSA/ICdcXG4nIDogJycpICsgbGluZS5yZXBsYWNlKC9eXFxzezR9LywgJycpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluQW5zd2VyTXVsdGlsaW5lICYmIGxpbmUubWF0Y2goL15cXHN7Nix9LykpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBsaW5lLnJlcGxhY2UoL15cXHN7Nn0vLCAnJyk7XG4gICAgICAgICAgICBjdXJyZW50QW5zd2VyLmFuc3dlcl9jb250ZW50ICs9IChjdXJyZW50QW5zd2VyLmFuc3dlcl9jb250ZW50ID8gJ1xcbicgOiAnJykgKyBjb250ZW50O1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluTXVsdGlsaW5lVmFsdWUgJiYgIWxpbmUubWF0Y2goL15cXHN7NCx9LykpIHtcbiAgICAgICAgICAgIGluTXVsdGlsaW5lVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50S2V5ICYmICFpbkFuc3dlcnMpIHtcbiAgICAgICAgICAgICAgICBxdWVzdGlvbltjdXJyZW50S2V5XSA9IGN1cnJlbnRWYWx1ZS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluQW5zd2VyTXVsdGlsaW5lICYmICFsaW5lLm1hdGNoKC9eXFxzezYsfS8pKSB7XG4gICAgICAgICAgICBpbkFuc3dlck11bHRpbGluZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjdXJyZW50S2V5ICYmICFpbkFuc3dlcnMpIHtcbiAgICAgICAgcXVlc3Rpb25bY3VycmVudEtleV0gPSBjdXJyZW50VmFsdWUudHJpbSgpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudEFuc3dlci5hbnN3ZXJfY29udGVudCkge1xuICAgICAgICBhbnN3ZXJzLnB1c2goY3VycmVudEFuc3dlcik7XG4gICAgfVxuICAgIHF1ZXN0aW9uLmFuc3dlcnMgPSBhbnN3ZXJzO1xuICAgIHJldHVybiBxdWVzdGlvbjtcbn1cbmZ1bmN0aW9uIGNsZWFuSW5kZW50YXRpb24odGV4dCwgdGFic1RvUmVtb3ZlID0gMikge1xuICAgIGlmICghdGV4dClcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoJ1xcbicpLm1hcChmdW5jdGlvbiAobGluZSkge1xuICAgICAgICBsZXQgY2xlYW5lZExpbmUgPSBsaW5lO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNUb1JlbW92ZTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2xlYW5lZExpbmUuc3RhcnRzV2l0aCgnXFx0JykpIHtcbiAgICAgICAgICAgICAgICBjbGVhbmVkTGluZSA9IGNsZWFuZWRMaW5lLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNsZWFuZWRMaW5lLnN0YXJ0c1dpdGgoJyAgJykpIHtcbiAgICAgICAgICAgICAgICBjbGVhbmVkTGluZSA9IGNsZWFuZWRMaW5lLnN1YnN0cmluZygyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhbmVkTGluZTtcbiAgICB9KS5qb2luKCdcXG4nKTtcbn1cbmZ1bmN0aW9uIGFkZENob2ljZXNUb0Zvcm0obnVtYmVyT2ZDaG9pY2VzKSB7XG4gICAgY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZF9pdGVtX2xpbmsnKTtcbiAgICBpZiAoIWFkZEJ1dHRvbikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdBZGQgY2hvaWNlIGJ1dHRvbiBub3QgZm91bmQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCB3YXNEaXNhYmxlZCA9IGFkZEJ1dHRvbi5kaXNhYmxlZDtcbiAgICBpZiAod2FzRGlzYWJsZWQpIHtcbiAgICAgICAgYWRkQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZDaG9pY2VzOyBpKyspIHtcbiAgICAgICAgYWRkQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgd2hpbGUgKERhdGUubm93KCkgLSBzdGFydCA8IDEwKSB7XG4gICAgICAgICAgICAvLyBTbWFsbCBkZWxheVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh3YXNEaXNhYmxlZCkge1xuICAgICAgICBhZGRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUZpbGVTZWxlY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IGZpbGUgPSAoX2EgPSB0YXJnZXQuZmlsZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWZpbGUubmFtZS5tYXRjaCgvXFwuKHltbHx5YW1sKSQvaSkpIHtcbiAgICAgICAgc2hvd01lc3NhZ2UoJ1BsZWFzZSBzZWxlY3QgYSBZQU1MIGZpbGUuJywgdHJ1ZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHlhbWxDb250ZW50ID0gKF9hID0gZXZlbnQudGFyZ2V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVzdWx0O1xuICAgICAgICAgICAgY29uc3QgcXVlc3Rpb25EYXRhID0gcGFyc2VTaW1wbGVZYW1sKHlhbWxDb250ZW50KTtcbiAgICAgICAgICAgIGlmICghcXVlc3Rpb25EYXRhLnF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgc2hvd01lc3NhZ2UoJ05vIHF1ZXN0aW9uIGZvdW5kIGluIHRoZSBZQU1MIGNvbnRlbnQuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbnVtYmVyT2ZDaG9pY2VzID0gcXVlc3Rpb25EYXRhLmFuc3dlcnMgPyBxdWVzdGlvbkRhdGEuYW5zd2Vycy5sZW5ndGggOiA0O1xuICAgICAgICAgICAgY29uc3QgY2hvaWNlc0FkZGVkID0gYWRkQ2hvaWNlc1RvRm9ybShudW1iZXJPZkNob2ljZXMpO1xuICAgICAgICAgICAgaWYgKCFjaG9pY2VzQWRkZWQpIHtcbiAgICAgICAgICAgICAgICBzaG93TWVzc2FnZSgnRmFpbGVkIHRvIGFkZCBjaG9pY2UgZmllbGRzIHRvIHRoZSBmb3JtLicsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBpbmplY3RJbnRvRm9ybShxdWVzdGlvbkRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKGBGaWxlIHN1Y2Nlc3NmdWxseSBsb2FkZWQgOiAke251bWJlck9mQ2hvaWNlc30gY2hvaWNlcyBhZGRlZC5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZXNzYWdlKCdGYWlsZWQgdG8gaW5qZWN0IGRhdGEgaW50byBmb3JtLiBQbGVhc2UgY2hlY2sgdGhlIGNvbnNvbGUgZm9yIGVycm9ycy4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBmaWxlOicsIGVycm9yKTtcbiAgICAgICAgICAgIHNob3dNZXNzYWdlKCdFcnJvciBwcm9jZXNzaW5nIGZpbGU6ICcgKyBlcnJvci5tZXNzYWdlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNob3dNZXNzYWdlKCdFcnJvciByZWFkaW5nIHRoZSBzZWxlY3RlZCBmaWxlLicsIHRydWUpO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XG59XG5mdW5jdGlvbiBpbmplY3RJbnRvRm9ybShxdWVzdGlvbkRhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjb250ZW50RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcXVlc3Rpb25fZm9ybV9jb250ZW50Jyk7XG4gICAgICAgIGlmIChjb250ZW50RmllbGQgJiYgcXVlc3Rpb25EYXRhLnF1ZXN0aW9uKSB7XG4gICAgICAgICAgICBjb250ZW50RmllbGQudmFsdWUgPSBxdWVzdGlvbkRhdGEucXVlc3Rpb247XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXhwbGFuYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWVzdGlvbl9mb3JtX2V4cGxhbmF0aW9uJyk7XG4gICAgICAgIGlmIChleHBsYW5hdGlvbkZpZWxkICYmIHF1ZXN0aW9uRGF0YS5leHBsYW5hdGlvbikge1xuICAgICAgICAgICAgZXhwbGFuYXRpb25GaWVsZC52YWx1ZSA9IHF1ZXN0aW9uRGF0YS5leHBsYW5hdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocXVlc3Rpb25EYXRhLmRpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpZmZpY3VsdHlSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNxdWVzdGlvbl9mb3JtX2RpZmZpY3VsdHlfJHtxdWVzdGlvbkRhdGEuZGlmZmljdWx0eSAtIDF9YCk7XG4gICAgICAgICAgICBpZiAoZGlmZmljdWx0eVJhZGlvKSB7XG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eVJhZGlvLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXR1c1JhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3F1ZXN0aW9uX2Zvcm1fc3RhdHVzJyk7XG4gICAgICAgIGlmIChzdGF0dXNSYWRpbykge1xuICAgICAgICAgICAgc3RhdHVzUmFkaW8uY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHF1ZXN0aW9uRGF0YS5hbnN3ZXJzICYmIEFycmF5LmlzQXJyYXkocXVlc3Rpb25EYXRhLmFuc3dlcnMpKSB7XG4gICAgICAgICAgICBxdWVzdGlvbkRhdGEuYW5zd2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChhbnN3ZXIsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvaWNlQ29udGVudEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3F1ZXN0aW9uX2Zvcm1fY2hvaWNlXyR7aW5kZXh9X2NvbnRlbnRgKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hvaWNlQ29udGVudEZpZWxkICYmIGFuc3dlci5hbnN3ZXJfY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkQ29udGVudCA9IGNsZWFuSW5kZW50YXRpb24oYW5zd2VyLmFuc3dlcl9jb250ZW50LCAyKTtcbiAgICAgICAgICAgICAgICAgICAgY2hvaWNlQ29udGVudEZpZWxkLnZhbHVlID0gY2xlYW5lZENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNob2ljZUNvcnJlY3RGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNxdWVzdGlvbl9mb3JtX2Nob2ljZV8ke2luZGV4fV9jb3JyZWN0YCk7XG4gICAgICAgICAgICAgICAgaWYgKGNob2ljZUNvcnJlY3RGaWVsZCAmJiBhbnN3ZXIuY29ycmVjdF9hbnN3ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaG9pY2VDb3JyZWN0RmllbGQuY2hlY2tlZCA9IGFuc3dlci5jb3JyZWN0X2Fuc3dlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluamVjdGluZyBkYXRhIGludG8gZm9ybTonLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBzaG93TWVzc2FnZShtZXNzYWdlLCBpc0Vycm9yID0gZmFsc2UpIHtcbiAgICBjb25zdCBlcnJvckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvck1lc3NhZ2UnKTtcbiAgICBjb25zdCBzdWNjZXNzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Y2Nlc3NNZXNzYWdlJyk7XG4gICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgICAgaWYgKGVycm9yRGl2KSB7XG4gICAgICAgICAgICBlcnJvckRpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICBlcnJvckRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VjY2Vzc0Rpdikge1xuICAgICAgICAgICAgc3VjY2Vzc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoc3VjY2Vzc0Rpdikge1xuICAgICAgICAgICAgc3VjY2Vzc0Rpdi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgICAgICBzdWNjZXNzRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvckRpdikge1xuICAgICAgICAgICAgZXJyb3JEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUluamVjdCgpIHtcbiAgICBzaG93TWVzc2FnZSgnUGxlYXNlIHVzZSBcIkxvYWQgJiBJbmplY3RcIiBidXR0b24gdG8gbG9hZCBhIFlBTUwgZmlsZS4nLCB0cnVlKTtcbn1cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgZmlsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3lhbWxGaWxlSW5wdXQnKTtcbiAgICBpZiAoZmlsZUlucHV0KSB7XG4gICAgICAgIGZpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVGaWxlU2VsZWN0aW9uKTtcbiAgICB9XG59KTtcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLWNob2ljZScpLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZXN0KCcuY2hvaWNlLWl0ZW0nKS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdXBkYXRlQWRkQnV0dG9uU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hZGRfaXRlbV9saW5rJykuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkRm9ybVRvQ29sbGVjdGlvbik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVBZGRCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBjaG9pY2VzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaG9pY2VzLWxpc3QnKTtcclxuICAgICAgICBpZiAoIWNob2ljZXNMaXN0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IG1heENob2ljZXMgPSBwYXJzZUludChjaG9pY2VzTGlzdC5kYXRhc2V0Lm1heENob2ljZXMpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaG9pY2UtaXRlbScpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFkZF9pdGVtX2xpbmsnKS5mb3JFYWNoKGJ0biA9PiB7XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IGN1cnJlbnRDb3VudCA+PSBtYXhDaG9pY2VzO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gYnRuLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignLm1heC1jaG9pY2VzLW1lc3NhZ2UnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q291bnQgPj0gbWF4Q2hvaWNlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXNzYWdlRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY2xhc3NOYW1lID0gJ21heC1jaG9pY2VzLW1lc3NhZ2UgdGV4dC1zbSBvcGFjaXR5LTUwIG10LTQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJ0bi5wYXJlbnROb2RlLmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gYE1heGltdW0gbnVtYmVyIG9mIGNob2ljZXMgcmVhY2hlZC5gO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lc3NhZ2VFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEZvcm1Ub0NvbGxlY3Rpb24oZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb25Ib2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbGxlY3Rpb25Ib2xkZXJDbGFzcyk7XHJcblxyXG4gICAgICAgIGlmICghY29sbGVjdGlvbkhvbGRlciB8fCAhY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LnByb3RvdHlwZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb2xsZWN0aW9uIGhvbGRlciBvciBwcm90b3R5cGUgbm90IGZvdW5kJywgY29sbGVjdGlvbkhvbGRlcik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnY2hvaWNlLWl0ZW0nLCAnZmxleCcsICdmbGV4LWNvbCcsICdtYi04JywgJ3JlbGF0aXZlJyk7XHJcblxyXG4gICAgICAgIGl0ZW0uaW5uZXJIVE1MID0gY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LnByb3RvdHlwZS5yZXBsYWNlKFxyXG4gICAgICAgICAgICAvX19uYW1lX18vZyxcclxuICAgICAgICAgICAgY29sbGVjdGlvbkhvbGRlci5kYXRhc2V0LmluZGV4XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVtb3ZlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcclxuICAgICAgICByZW1vdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2J1dHRvbi1hY3Rpb24nLCAnYWJzb2x1dGUnLCAnYm90dG9tLVsxNnB4XScsICdyaWdodC1bMTZweF0nLCAnZGVsZXRlLWNob2ljZScpO1xyXG4gICAgICAgIHJlbW92ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvc3Bhbj5gO1xyXG5cclxuICAgICAgICByZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUFkZEJ1dHRvblN0YXRlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocmVtb3ZlQnV0dG9uKTtcclxuICAgICAgICBjb2xsZWN0aW9uSG9sZGVyLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG5cclxuICAgICAgICBjb2xsZWN0aW9uSG9sZGVyLmRhdGFzZXQuaW5kZXgrKztcclxuXHJcbiAgICAgICAgdXBkYXRlQWRkQnV0dG9uU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVBZGRCdXR0b25TdGF0ZSgpO1xyXG59KTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2h1ZmZsZShpdGVtcykge1xuICAgIGZvciAobGV0IGkgPSBpdGVtcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgW2l0ZW1zW2ldLCBpdGVtc1tqXV0gPSBbaXRlbXNbal0sIGl0ZW1zW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IHN3aXRjaEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uc3dpdGNoLWxhYmVsJyk7XG4gICAgY29uc3Qgc2NvcmVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNjb3JlLWNvbnRhaW5lcicpO1xuICAgIGZ1bmN0aW9uIHNob3dTY29yZXNCeVBlcmlvZChwZXJpb2QpIHtcbiAgICAgICAgc2NvcmVzQ29udGFpbmVyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgdmlzaWJsZVNjb3JlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5zY29yZS1jb250YWluZXJbZGF0YS1wZXJpb2Q9XCIke3BlcmlvZH1cIl1gKTtcbiAgICAgICAgdmlzaWJsZVNjb3Jlcy5mb3JFYWNoKHNjb3JlID0+IHtcbiAgICAgICAgICAgIHNjb3JlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3dpdGNoQnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaEJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2hvd1Njb3Jlc0J5UGVyaW9kKCdhbGwtdGltZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QoJ21vbnRoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICAgICAgICAgIHNob3dTY29yZXNCeVBlcmlvZCgnd2VlaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zdCBhY3RpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3dpdGNoLWxhYmVsLmFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVCdXR0b24pIHtcbiAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSBBcnJheS5mcm9tKHN3aXRjaEJ1dHRvbnMpLmluZGV4T2YoYWN0aXZlQnV0dG9uKTtcbiAgICAgICAgY29uc3QgcGVyaW9kcyA9IFsnYWxsLXRpbWUnLCAnbW9udGgnLCAnd2VlayddO1xuICAgICAgICBzaG93U2NvcmVzQnlQZXJpb2QocGVyaW9kc1thY3RpdmVJbmRleF0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2hvd1Njb3Jlc0J5UGVyaW9kKCdhbGwtdGltZScpO1xuICAgIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnICYmXG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2RlLWVkaXRvcicpICYmIGUua2V5ID09PSAnVGFiJykge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGV4dGFyZWEgPSB0YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBzdGFydCA9IHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgICAgICAgY29uc3QgZW5kID0gdGV4dGFyZWEuc2VsZWN0aW9uRW5kO1xuICAgICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSB0ZXh0YXJlYS52YWx1ZS5zdWJzdHJpbmcoMCwgc3RhcnQpICsgJ1xcdCcgKyB0ZXh0YXJlYS52YWx1ZS5zdWJzdHJpbmcoZW5kKTtcbiAgICAgICAgICAgIHRleHRhcmVhLnNlbGVjdGlvblN0YXJ0ID0gdGV4dGFyZWEuc2VsZWN0aW9uRW5kID0gc3RhcnQgKyAxO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuY29uc3QgQkFTRV9VUkwgPSAnL2FwaSc7XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tbWVudHMocXVlc3Rpb25JZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9L3F1ZXN0aW9uLyR7cXVlc3Rpb25JZH0vY29tbWVudHNgKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0Q29tbWVudHMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vY29tbWVudHMvbGFzdGApO1xuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5jb21tZW50cztcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRDb21tZW50KHF1ZXN0aW9uSWQsIGNvbnRlbnQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9xdWVzdGlvbi8ke3F1ZXN0aW9uSWR9L2NvbW1lbnQvYWRkYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbnRlbnQ6IGNvbnRlbnQgfSksXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JUZXh0ID0geWllbGQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU2VydmVyIGVycm9yOicsIGVycm9yVGV4dCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNlcnZlciBlcnJvcjogJHtyZXNwb25zZS5zdGF0dXN9ICR7cmVzcG9uc2Uuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbW1lbnQoY29tbWVudElkLCBjb250ZW50KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vY29tbWVudC8ke2NvbW1lbnRJZH0vZWRpdGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnRJZDogY29tbWVudElkLCBjb250ZW50OiBjb250ZW50IH0pLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRXJyb3Igd2hpbGUgY29tbWVudCBlZGl0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ29tbWVudChjb21tZW50SWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfS9jb21tZW50LyR7Y29tbWVudElkfS9kZWxldGVgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yRGF0YS5lcnJvciB8fCAnRXJyb3Igd2hpbGUgY29tbWVudCBlZGl0aW9uLicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmNvbnN0IEJBU0VfVVJMID0gJy9hcGkvcXVlc3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVF1ZXN0aW9uKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgYXJndW1lbnRzLCB2b2lkIDAsIGZ1bmN0aW9uKiAoZmlsdGVycyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgaWYgKGZpbHRlcnMuZGlmZmljdWx0eSAmJiAhaXNOYU4ocGFyc2VGbG9hdChmaWx0ZXJzLmRpZmZpY3VsdHkpKSkge1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnZGlmZmljdWx0eScsIGZpbHRlcnMuZGlmZmljdWx0eSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbHRlcnMuY2F0ZWdvcmllcyAmJiBmaWx0ZXJzLmNhdGVnb3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsdGVycy5jYXRlZ29yaWVzLmZvckVhY2goY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ2NhdGVnb3J5W10nLCBjYXRlZ29yeSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke0JBU0VfVVJMfT8ke3BhcmFtc31gKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbihxdWVzdGlvbklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtCQVNFX1VSTH0vJHtxdWVzdGlvbklkfWApO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdEFuc3dlcnMocXVlc3Rpb25JZCwgYW5zd2Vycykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7QkFTRV9VUkx9LyR7cXVlc3Rpb25JZH0vY2hlY2tgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW5zd2VyczogYW5zd2VycyB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgY29uc3QgUk9VVEVTID0ge1xuICAgIEhPTUU6ICcvJyxcbiAgICBRVUlaOiAnL3dlYi1kZXZlbG9wbWVudC1xdWl6JyxcbiAgICBGSUxURVJTOiAnL2ZpbHRlcnMnLFxuICAgIExPR0lOOiAnL2xvZ2luJyxcbiAgICBSRUdJU1RFUjogJy9yZWdpc3RlcicsXG4gICAgUVVFU1RJT046ICcvcXVlc3Rpb24nXG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlUm9vdCIsIkF1dGhQcm92aWRlciIsIlF1ZXN0aW9uIiwiRGVtbyIsIkRpc2N1c3Npb25zIiwiU3RhY2tzU2xpZGVyIiwiU2hhcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVzdGlvbkNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtb2RlIiwiZGF0YXNldCIsInF1ZXN0aW9uSWQiLCJwYXJzZUludCIsInNob3dDb21tZW50cyIsInJvb3QiLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiZGVtb0NvbnRhaW5lciIsInNoYXJlQ29udGFpbmVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwic2hhcmVDb250YWluZXIiLCJzb2NpYWwiLCJkaXNjdXNzaW9uc0NvbnRhaW5lciIsInN0YWNrc1NsaWRlckNvbnRhaW5lciIsIkJhbm5lciIsIl9yZWYiLCJfcmVmJGNvbG9yIiwiY29sb3IiLCJwYXJ0aWNsZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsImNvbmNhdCIsIm1hcCIsImtleSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJ0ZXN0IiwiaXNBcnJheSIsIl9fYXdhaXRlciIsInRoaXNBcmciLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsImFkb3B0IiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsInJlamVjdGVkIiwicmVzdWx0IiwiYXBwbHkiLCJ1c2VTdGF0ZSIsImRlbGV0ZUNvbW1lbnQiLCJDb21tZW50VXBkYXRlIiwicXVlc3Rpb24iLCJzZXRRdWVzdGlvbiIsImNvbW1lbnQiLCJvbkNvbW1lbnREZWxldGUiLCJvbkNhbmNlbCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJpc0RlbGV0aW5nIiwic2V0SXNEZWxldGluZyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsIl9jYWxsZWUiLCJkZWxldGVkQ29tbWVudCIsInVwZGF0ZWRRdWVzdGlvbiIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJwcmV2ZW50RGVmYXVsdCIsImlkIiwiYXNzaWduIiwiY29tbWVudHMiLCJmaWx0ZXIiLCJ0MCIsIm1lc3NhZ2UiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJNYXJrZG93blJlbmRlcmVyIiwiQ29tbWVudERlbGV0ZSIsInVzZUF1dGgiLCJQcm9maWxlUGljdHVyZSIsIlJPVVRFUyIsIml0ZW0iLCJtb3Rpb24iLCJDb21tZW50SXRlbSIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsIl9mb3JtYXREYXRlIiwiZm9ybWF0RGF0ZSIsImNyZWF0aW9uRGF0ZSIsImZvcm1hdHRlZERhdGUiLCJmb3JtYXR0ZWRUaW1lIiwiX3VzZUF1dGgiLCJpc0F1dGhvciIsImlzQWRtaW4iLCJ1c2VyQ2FuRWRpdCIsImF1dGhvciIsImhhbmRsZUNvbW1lbnRVcGRhdGVkIiwiaGFuZGxlQ29tbWVudERlbGV0ZWQiLCJoYW5kbGVTdGFydEVkaXRpbmciLCJoYW5kbGVTdGFydERlbGV0aW5nIiwiZGF0ZU9iamVjdCIsImRhdGUiLCJEYXRlIiwiZGF5IiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibW9udGgiLCJnZXRNb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImhvdXJzIiwiZ2V0SG91cnMiLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsImxpIiwidmFyaWFudHMiLCJpbWFnZSIsInVzZXJuYW1lIiwiaHJlZiIsIlFVRVNUSU9OIiwiY29udGVudCIsIm9uQ29tbWVudFVwZGF0ZWQiLCJhZGRDb21tZW50IiwiTWFya2Rvd25JbmZvcyIsIkNvbW1lbnRMaXN0Iiwic2V0Q29tbWVudCIsImlzU3VibWl0dGluZyIsInNldElzU3VibWl0dGluZyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2Iiwic3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsIl91c2VTdGF0ZTkiLCJfdXNlU3RhdGUxMCIsIm1hcmtkb3duSW5mb3MiLCJzZXRNYXJrZG93bkluZm9zIiwiaXNBdXRoZW50aWNhdGVkIiwibmV3Q29tbWVudCIsImhhbmRsZVNob3dJbmZvcyIsInByZXZTdGF0ZSIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsInJvd3MiLCJyZXF1aXJlZCIsInNyYyIsImFsdCIsIkxPR0lOIiwiUkVHSVNURVIiLCJ1cGRhdGVDb21tZW50Iiwic2V0TmV3Q29tbWVudCIsInVwZGF0ZWRDb21tZW50IiwiY29tbWVudEluZGV4IiwiZmluZEluZGV4IiwiaW1hZ2VTcmMiLCJRdWVzdGlvbkNvbnRlbnQiLCJDaG9pY2VzIiwiZGVtb0Fuc3dlcnMxIiwiZGVtb1F1ZXN0aW9uMSIsImRlbW9BbnN3ZXJzMiIsImRlbW9RdWVzdGlvbjIiLCJkZW1vQW5zd2VyczMiLCJkZW1vUXVlc3Rpb24zIiwiZGVtb0Fuc3dlcnM0IiwiZGVtb1F1ZXN0aW9uNCIsImRlbW9BbnN3ZXJzNSIsImRlbW9RdWVzdGlvbjUiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIkF1dG9wbGF5IiwicXVlc3Rpb25zRGF0YSIsImFuc3dlcnMiLCJzcGVlZCIsInNsaWRlc1BlclZpZXciLCJsb29wIiwiY2VudGVyZWRTbGlkZXMiLCJhdXRvcGxheSIsImRlbGF5IiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJtb2R1bGVzIiwiZGF0YSIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsIl9fcmVzdCIsImluZGV4T2YiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIlJlYWN0TWFya2Rvd24iLCJQcmlzbSIsIlN5bnRheEhpZ2hsaWdodGVyIiwib2thaWRpYSIsImNvbXBvbmVudHMiLCJjb2RlIiwiX2EiLCJjaGlsZHJlbiIsIm5vZGUiLCJzdHlsZSIsInJlZiIsInJlc3QiLCJtYXRjaCIsImV4ZWMiLCJjb2RlU3RyaW5nIiwiam9pbiIsIlN0cmluZyIsImxhbmd1YWdlIiwiUHJlVGFnIiwicmVwbGFjZSIsInVzZVJheXNBbmltYXRpb24iLCJjb250YWluZXIiLCJzaHVmZmxlIiwic2V0QW5zd2VycyIsImNob2ljZXMiLCJzaHVmZmxlZENob2ljZXMiLCJzZXRTaHVmZmxlZENob2ljZXMiLCJoYW5kbGVBbnN3ZXJzQ2hhbmdlIiwiYW5zd2VySWQiLCJjb3JyZWN0Q2hvaWNlcyIsInByZXZTZWxlY3RlZCIsIm51bWJlck9mQ29ycmVjdENob2ljZXMiLCJpc0N1cnJlbnRseVNlbGVjdGVkIiwiaW5jbHVkZXMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJnZXRBbnN3ZXJTdGF0dXMiLCJpc1NlbGVjdGVkIiwiaXNDb3JyZWN0IiwidWwiLCJjaG9pY2UiLCJjaGVja2VkIiwidGFiSW5kZXgiLCJ1bmRlZmluZWQiLCJFeHBsYW5hdGlvbiIsIl9yZWYkbW9kZSIsImlzTWF0Y2giLCJleHBsYW5hdGlvbiIsInVzZUVmZmVjdCIsImdldFJhbmRvbVF1ZXN0aW9uIiwiZ2V0UXVlc3Rpb24iLCJzdWJtaXRBbnN3ZXJzIiwiTGltaXRSZWFjaGVkIiwiTG9hZGluZyIsIlNpZGViYXIiLCJRdWVzdGlvbk5vdEZvdW5kIiwiQW5pbWF0ZVByZXNlbmNlIiwiX3RoaXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxpbWl0UmVhY2hlZCIsInNldExpbWl0UmVhY2hlZCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiX3VzZVN0YXRlMTEiLCJfdXNlU3RhdGUxMiIsInNldFdyYXAiLCJsb2FkUXVlc3Rpb24iLCJxdWl6Q29udGFpbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidXJsRmlsdGVycyIsInNlYXJjaEZvclBhcmFtcyIsImNvbnNvbGUiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImhhcyIsImRpZmZpY3VsdHkiLCJnZXQiLCJjYXRlZ29yaWVzIiwiZ2V0QWxsIiwiaGFuZGxlTmV4dFF1ZXN0aW9uIiwiaGFuZGxlVG9nZ2xlV3JhcCIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwic2Nyb2xsVG8iLCJ0b3AiLCJvbkV4aXRDb21wbGV0ZSIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwib25OZXh0Iiwib25XcmFwIiwiaXNMb2FkaW5nIiwiUXVlc3Rpb25JbWFnZSIsImNhdGVnb3J5IiwiZmlsbCIsImhlaWdodENsYXNzIiwib3BhY2l0eUNsYXNzIiwiRklMVEVSUyIsImdldExhc3RDb21tZW50cyIsInNldENvbW1lbnRzIiwibG9hZENvbW1lbnRzIiwiUVVJWiIsInNwYWNlQmV0d2VlbiIsImFsbG93VG91Y2hNb3ZlIiwicHJldmVudENsaWNrcyIsInNpbXVsYXRlVG91Y2giLCJ0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQiLCJwYXVzZU9uTW91c2VFbnRlciIsInN0b3BPbkxhc3RTbGlkZSIsIndhaXRGb3JUcmFuc2l0aW9uIiwiZnJlZU1vZGUiLCJicmVha3BvaW50cyIsInVzZVJlZiIsImh0bWxUb0ltYWdlIiwiSW5zdGFncmFtIiwiVHdpdHRlciIsIkhlYWRlciIsIkZvb3RlciIsIlNjcmVlbnNob3QiLCJfcmVmMiIsImxpUmVmcyIsInNldExpUmVmIiwiZWwiLCJjdXJyZW50IiwiY2FwdHVyZVNjcmVlbnNob3QiLCJjdXJyZW50TGkiLCJlbGVtZW50VG9DYXB0dXJlIiwidG9KcGVnIiwicXVhbGl0eSIsInBpeGVsUmF0aW8iLCJjYWNoZUJ1c3QiLCJza2lwRm9udHMiLCJkYXRhVXJsIiwibGluayIsImRvd25sb2FkIiwiY2xpY2siLCJjcmVhdGVDb250ZXh0IiwiQXV0aENvbnRleHQiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwiZmV0Y2hDdXJyZW50VXNlciIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29udGVudEF1dGhvcklkIiwicm9sZXMiLCJQcm92aWRlciIsInVzZUNvbnRleHQiLCJfYiIsIm9yaWdpbmFsRWxlbWVudCIsImNsb25lZEVsZW1lbnQiLCJjbG9uZU5vZGUiLCJjb2xvckNsYXNzIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwic2V0VGltZW91dCIsImhpZGRlbiIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwic3RhZ2dlckNoaWxkcmVuIiwicmVxdWlyZSIsImFjY29yZGlvbkJ1dHRvbnMiLCJ0b2dnbGVBY2NvcmRpb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ0b2dnbGUiLCJjb250YWlucyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImJ1dHRvbiIsImFwcGVhck9uU2Nyb2xsIiwiY291bnRlciIsInNob3dJdGVtcyIsImhpZGRlbkl0ZW1zIiwiY2hlY2tWaXNpYmxlIiwidHJhbnNpdGlvbkRlbGF5IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInZpZXdIZWlnaHQiLCJNYXRoIiwibWF4IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3R0b20iLCJyZXNldEJ1dHRvbiIsImdldEVsZW1lbnRCeUlkIiwiZm9ybSIsInJhZGlvQnV0dG9ucyIsInJhZGlvIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwibWVudUJ1dHRvbiIsImhlYWRlckJvdHRvbUNvbnRhaW5lciIsIm92ZXJsYXkiLCJpc01lbnVPcGVuIiwib3Blbk1lbnUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbG9zZU1lbnUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlU2ltcGxlWWFtbCIsInlhbWxDb250ZW50IiwibGluZXMiLCJ0cmltIiwic3BsaXQiLCJjdXJyZW50S2V5IiwiY3VycmVudFZhbHVlIiwiaW5NdWx0aWxpbmVWYWx1ZSIsImN1cnJlbnRBbnN3ZXIiLCJpbkFuc3dlcnMiLCJpbkFuc3dlck11bHRpbGluZSIsImxpbmUiLCJhbnN3ZXJfY29udGVudCIsImNvcnJlY3RfYW5zd2VyIiwiY2xlYW5JbmRlbnRhdGlvbiIsInRleHQiLCJ0YWJzVG9SZW1vdmUiLCJhcmd1bWVudHMiLCJjbGVhbmVkTGluZSIsInN0YXJ0c1dpdGgiLCJzdWJzdHJpbmciLCJhZGRDaG9pY2VzVG9Gb3JtIiwibnVtYmVyT2ZDaG9pY2VzIiwiYWRkQnV0dG9uIiwid2FzRGlzYWJsZWQiLCJzdGFydCIsIm5vdyIsImhhbmRsZUZpbGVTZWxlY3Rpb24iLCJmaWxlIiwiZmlsZXMiLCJzaG93TWVzc2FnZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJxdWVzdGlvbkRhdGEiLCJjaG9pY2VzQWRkZWQiLCJpbmplY3RJbnRvRm9ybSIsIm9uZXJyb3IiLCJyZWFkQXNUZXh0IiwiY29udGVudEZpZWxkIiwiZXhwbGFuYXRpb25GaWVsZCIsImRpZmZpY3VsdHlSYWRpbyIsInN0YXR1c1JhZGlvIiwiYW5zd2VyIiwiY2hvaWNlQ29udGVudEZpZWxkIiwiY2xlYW5lZENvbnRlbnQiLCJjaG9pY2VDb3JyZWN0RmllbGQiLCJpc0Vycm9yIiwiZXJyb3JEaXYiLCJzdWNjZXNzRGl2IiwidGV4dENvbnRlbnQiLCJkaXNwbGF5IiwiaGFuZGxlSW5qZWN0IiwiZmlsZUlucHV0IiwiY2xvc2VzdCIsInVwZGF0ZUFkZEJ1dHRvblN0YXRlIiwiYnRuIiwiYWRkRm9ybVRvQ29sbGVjdGlvbiIsImNob2ljZXNMaXN0IiwibWF4Q2hvaWNlcyIsImN1cnJlbnRDb3VudCIsIm1lc3NhZ2VFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjb2xsZWN0aW9uSG9sZGVyIiwiY3VycmVudFRhcmdldCIsImNvbGxlY3Rpb25Ib2xkZXJDbGFzcyIsImlubmVySFRNTCIsInJlbW92ZUJ1dHRvbiIsIml0ZW1zIiwiaiIsImZsb29yIiwicmFuZG9tIiwic3dpdGNoQnV0dG9ucyIsInNjb3Jlc0NvbnRhaW5lciIsInNob3dTY29yZXNCeVBlcmlvZCIsInBlcmlvZCIsInZpc2libGVTY29yZXMiLCJzY29yZSIsImFjdGl2ZUJ1dHRvbiIsImFjdGl2ZUluZGV4IiwicGVyaW9kcyIsInRhZ05hbWUiLCJ0ZXh0YXJlYSIsInNlbGVjdGlvblN0YXJ0IiwiZW5kIiwic2VsZWN0aW9uRW5kIiwiQkFTRV9VUkwiLCJnZXRDb21tZW50cyIsImVycm9yVGV4dCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNyZWRlbnRpYWxzIiwib2siLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiY29tbWVudElkIiwiX2NhbGxlZTQiLCJlcnJvckRhdGEiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsImZpbHRlcnMiLCJwYXJhbXMiLCJwYXJzZUZsb2F0IiwiYXBwZW5kIiwiSE9NRSJdLCJzb3VyY2VSb290IjoiIn0=