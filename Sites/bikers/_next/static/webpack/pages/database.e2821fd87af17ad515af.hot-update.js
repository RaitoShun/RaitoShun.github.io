webpackHotUpdate_N_E("pages/database",{

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_abith_Desktop_Dev_Apps_bikers_dashboard_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _DBItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DBItem */ "./components/DBItem.tsx");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Form */ "./components/Form.tsx");




var _jsxFileName = "C:\\Users\\abith\\Desktop\\Dev\\Apps\\bikers-dashboard\\components\\Search.tsx",
    _s = $RefreshSig$();






function Search(_ref) {
  _s();

  var _this = this;

  Object(C_Users_abith_Desktop_Dev_Apps_bikers_dashboard_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      queryJobs = _useState[0],
      setQueryJobs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    filter: "job_number",
    order: "ASC",
    searchParam: ""
  }),
      queryObject = _useState2[0],
      setQueryObject = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(5),
      paginated = _useState3[0],
      setPaginated = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      erroring = _useState4[0],
      setErroring = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      currentJob = _useState5[0],
      setCurrentJob = _useState5[1];

  var handleKeypress = function handleKeypress(e) {
    if (e.charCode === 13) {
      searchDB();
    }
  };

  function paginate() {
    if (paginated !== queryJobs.length) {
      if (queryJobs.length > paginated + 3) {
        setPaginated(paginated + 3);
      } else {
        setPaginated(queryJobs.length);
      }
    }
  }

  function searchDB() {
    fetch("https://bikers-test.herokuapp.com/job", {
      method: "get",
      headers: {
        params: JSON.stringify(queryObject),
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (_ref2) {
      var jobs = _ref2.jobs;
      setQueryJobs(jobs);
    })["catch"](function (err) {
      setErroring(true);
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: !currentJob ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute left-2/4 transform  -translate-x-2/4 ".concat(queryJobs.length || erroring ? "lg:top-20 top-32" : "top-2/4 -translate-y-2/4", " "),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex text-center flex-col",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-row pb-2 justify-between ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex text-left flex-col md:flex-row ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "md:pr-2 text-white",
                  children: "Search by:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  name: "filter",
                  defaultValue: "Job Number",
                  onChange: function onChange(e) {
                    var newObj = {
                      filter: e.target.value,
                      searchParam: queryObject.searchParam,
                      order: queryObject.order
                    };
                    setQueryObject(newObj);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "job_number",
                    children: "Job Number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 88,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "vin_number",
                    children: "VIN Number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "customer_name_and_surname",
                    children: "Customer Name"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "contact_number",
                    children: "Contact Number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex text-left flex-col md:flex-row ",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                  className: "md:pr-2 text-white",
                  children: "Sort:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
                  name: "order",
                  onChange: function onChange(e) {
                    var newObj = {
                      filter: queryObject.filter,
                      searchParam: queryObject.searchParam,
                      order: e.target.value
                    };
                    setQueryObject(newObj);
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "ASC",
                    children: "Ascending"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 23
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                    value: "DESC",
                    children: "Decending"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "w-full mb-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                className: "w-64 md:w-96",
                type: "text",
                onKeyPress: handleKeypress,
                onChange: function onChange(e) {
                  var newObj = {
                    filter: queryObject.filter,
                    searchParam: e.target.value,
                    order: queryObject.order
                  };
                  setQueryObject(newObj);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "w-32 mx-auto",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  isShort: true,
                  text: queryObject.searchParam === "" ? "Search All" : "Search",
                  onClick: function onClick() {
                    searchDB();
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this), !erroring ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "lg:pt-40 pt-64",
        children: queryJobs.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default.a, {
          pageStart: 0,
          loadMore: paginate,
          hasMore: paginated + 1 < queryJobs.length,
          loader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
            className: "text-center text-white",
            children: "Loading..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 153,
            columnNumber: 21
          }, this),
          children: queryJobs.slice(0, paginated + 1).sort(function (a, b) {
            return a.status == "Closed" ? 1 : -1;
          }).map(function (job) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DBItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
              jobCard: job,
              handleForm: function handleForm() {
                return setCurrentJob(job);
              }
            }, job.job_number, false, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 25
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, this) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 13
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "absolute left-2/4 top-2/4 transform -translate-x-2/4  -translate-y-2/4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "bg-modal \r text-red w-96 h-24 text-center text-2xl bg-cover bg-center bg-no-repeat pt-8 \r absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2",
          children: "Cannot fetch Jobs"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 13
      }, this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pt-20 lg:pt-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "xl:w-2/3 md:w-4/5 sm:w-full mx-auto w-32",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onClick: function onClick() {
              setCurrentJob(null);
              searchDB();
            },
            back: true,
            isShort: true,
            text: "Back"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
          jobCard: currentJob
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 11
      }, this)
    }, void 0, false)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

_s(Search, "ewTl1erKYRY3ovS2e4+0vgUnD7c=");

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gudHN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicXVlcnlKb2JzIiwic2V0UXVlcnlKb2JzIiwiZmlsdGVyIiwib3JkZXIiLCJzZWFyY2hQYXJhbSIsInF1ZXJ5T2JqZWN0Iiwic2V0UXVlcnlPYmplY3QiLCJwYWdpbmF0ZWQiLCJzZXRQYWdpbmF0ZWQiLCJlcnJvcmluZyIsInNldEVycm9yaW5nIiwiY3VycmVudEpvYiIsInNldEN1cnJlbnRKb2IiLCJoYW5kbGVLZXlwcmVzcyIsImUiLCJjaGFyQ29kZSIsInNlYXJjaERCIiwicGFnaW5hdGUiLCJsZW5ndGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJqb2JzIiwiZXJyIiwibmV3T2JqIiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsInNvcnQiLCJhIiwiYiIsInN0YXR1cyIsIm1hcCIsImpvYiIsImpvYl9udW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFJbERDLHNEQUFRLENBQUMsRUFBRCxDQUowQztBQUFBLE1BQy9DQyxTQUQrQztBQUFBLE1BQ3BDQyxZQURvQzs7QUFBQSxtQkFLbEJGLHNEQUFRLENBQUM7QUFDM0NHLFVBQU0sRUFBRSxZQURtQztBQUUzQ0MsU0FBSyxFQUFFLEtBRm9DO0FBRzNDQyxlQUFXLEVBQUU7QUFIOEIsR0FBRCxDQUxVO0FBQUEsTUFLakRDLFdBTGlEO0FBQUEsTUFLcENDLGNBTG9DOztBQUFBLG1CQVVwQlAsc0RBQVEsQ0FBQyxDQUFELENBVlk7QUFBQSxNQVUvQ1EsU0FWK0M7QUFBQSxNQVVwQ0MsWUFWb0M7O0FB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O0FBQUEsdUJBQU01QixhQUFhLENBQUM0QixHQUFELENBQW5CO0FBQUE7QUFIZCxlQUNPQSxHQUFHLENBQUNDLFVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQU9ELFdBWEY7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEdBc0JHO0FBdkJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkEyQkM7QUFDRSxpQkFBUywwRUFEWDtBQUFBLCtCQUdFO0FBQ0UsbUJBQVMsRUFBQyxtS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3R0o7QUFBQSxvQkFERCxnQkE0SEM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQywwQ0FBZjtBQUFBLGlDQUNFLHFFQUFDLCtDQUFEO0FBQ0UsbUJBQU8sRUFBRSxtQkFBTTtBQUNiN0IsMkJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUksc0JBQVE7QUFDVCxhQUpIO0FBS0UsZ0JBQUksRUFBRSxJQUxSO0FBTUUsbUJBQU8sRUFBRSxJQU5YO0FBT0UsZ0JBQUksRUFBQztBQVBQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBWUUscUVBQUMsNkNBQUQ7QUFBTSxpQkFBTyxFQUFFTDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUE3SEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUpEOztHQTlMdUJiLE07O0tBQUFBLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGF0YWJhc2UuZTI4MjFmZDg3YWYxN2FkNTE1YWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xyXG4gIERpc3BhdGNoLFxyXG4gIFJlYWN0RWxlbWVudCxcclxuICBTZXRTdGF0ZUFjdGlvbixcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsZXJcIjtcclxuaW1wb3J0IHsgSm9iQ2FyZCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgREJJdGVtIGZyb20gXCIuL0RCSXRlbVwiO1xyXG5pbXBvcnQgRm9ybSBmcm9tIFwiLi9Gb3JtXCI7XHJcbmludGVyZmFjZSBQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKHt9OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgW3F1ZXJ5Sm9icywgc2V0UXVlcnlKb2JzXTogW1xyXG4gICAgQXJyYXk8Sm9iQ2FyZD4sXHJcbiAgICBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxhbnlbXT4+XHJcbiAgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBsZXQgW3F1ZXJ5T2JqZWN0LCBzZXRRdWVyeU9iamVjdF0gPSB1c2VTdGF0ZSh7XHJcbiAgICBmaWx0ZXI6IFwiam9iX251bWJlclwiLFxyXG4gICAgb3JkZXI6IFwiQVNDXCIsXHJcbiAgICBzZWFyY2hQYXJhbTogXCJcIixcclxuICB9KTtcclxuICBjb25zdCBbcGFnaW5hdGVkLCBzZXRQYWdpbmF0ZWRdID0gdXNlU3RhdGUoNSk7XHJcbiAgY29uc3QgW2Vycm9yaW5nLCBzZXRFcnJvcmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2N1cnJlbnRKb2IsIHNldEN1cnJlbnRKb2JdID0gdXNlU3RhdGU8Sm9iQ2FyZCB8IG51bGw+KCk7XHJcbiAgY29uc3QgaGFuZGxlS2V5cHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUuY2hhckNvZGUgPT09IDEzKSB7XHJcbiAgICAgIHNlYXJjaERCKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBmdW5jdGlvbiBwYWdpbmF0ZSgpIHtcclxuICAgIGlmIChwYWdpbmF0ZWQgIT09IHF1ZXJ5Sm9icy5sZW5ndGgpIHtcclxuICAgICAgaWYgKHF1ZXJ5Sm9icy5sZW5ndGggPiBwYWdpbmF0ZWQgKyAzKSB7XHJcbiAgICAgICAgc2V0UGFnaW5hdGVkKHBhZ2luYXRlZCArIDMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFBhZ2luYXRlZChxdWVyeUpvYnMubGVuZ3RoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBmdW5jdGlvbiBzZWFyY2hEQigpIHtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9iaWtlcnMtdGVzdC5oZXJva3VhcHAuY29tL2pvYlwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIHBhcmFtczogSlNPTi5zdHJpbmdpZnkocXVlcnlPYmplY3QpLFxyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoeyBqb2JzIH0pID0+IHtcclxuICAgICAgICBzZXRRdWVyeUpvYnMoam9icyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0RXJyb3JpbmcodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHshY3VycmVudEpvYiA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBsZWZ0LTIvNCB0cmFuc2Zvcm0gIC10cmFuc2xhdGUteC0yLzQgJHtcclxuICAgICAgICAgICAgICBxdWVyeUpvYnMubGVuZ3RoIHx8IGVycm9yaW5nXHJcbiAgICAgICAgICAgICAgICA/IFwibGc6dG9wLTIwIHRvcC0zMlwiXHJcbiAgICAgICAgICAgICAgICA6IFwidG9wLTIvNCAtdHJhbnNsYXRlLXktMi80XCJcclxuICAgICAgICAgICAgfSBgfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWNlbnRlciBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHBiLTIganVzdGlmeS1iZXR3ZWVuIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1sZWZ0IGZsZXgtY29sIG1kOmZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpwci0yIHRleHQtd2hpdGVcIj5TZWFyY2ggYnk6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIkpvYiBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbTogcXVlcnlPYmplY3Quc2VhcmNoUGFyYW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHF1ZXJ5T2JqZWN0Lm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeU9iamVjdChuZXdPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiam9iX251bWJlclwiPkpvYiBOdW1iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ2aW5fbnVtYmVyXCI+VklOIE51bWJlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImN1c3RvbWVyX25hbWVfYW5kX3N1cm5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VzdG9tZXIgTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29udGFjdF9udW1iZXJcIj5Db250YWN0IE51bWJlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWxlZnQgZmxleC1jb2wgbWQ6ZmxleC1yb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOnByLTIgdGV4dC13aGl0ZVwiPlNvcnQ6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3JkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBxdWVyeU9iamVjdC5maWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW06IHF1ZXJ5T2JqZWN0LnNlYXJjaFBhcmFtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnlPYmplY3QobmV3T2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFTQ1wiPkFzY2VuZGluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkRFU0NcIj5EZWNlbmRpbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNjQgbWQ6dy05NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e2hhbmRsZUtleXByZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld09iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBxdWVyeU9iamVjdC5maWx0ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IHF1ZXJ5T2JqZWN0Lm9yZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5T2JqZWN0KG5ld09iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMyIG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBpc1Nob3J0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5T2JqZWN0LnNlYXJjaFBhcmFtID09PSBcIlwiID8gXCJTZWFyY2ggQWxsXCIgOiBcIlNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaERCKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHshZXJyb3JpbmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6cHQtNDAgcHQtNjRcIj5cclxuICAgICAgICAgICAgICB7cXVlcnlKb2JzLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgIDxJbmZpbml0ZVNjcm9sbFxyXG4gICAgICAgICAgICAgICAgICBwYWdlU3RhcnQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgIGxvYWRNb3JlPXtwYWdpbmF0ZX1cclxuICAgICAgICAgICAgICAgICAgaGFzTW9yZT17cGFnaW5hdGVkICsgMSA8IHF1ZXJ5Sm9icy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgIGxvYWRlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5Mb2FkaW5nLi4uPC9oND5cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7cXVlcnlKb2JzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIHBhZ2luYXRlZCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IChhLnN0YXR1cyA9PSBcIkNsb3NlZFwiID8gMSA6IC0xKSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKChqb2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEQkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2pvYi5qb2JfbnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGpvYkNhcmQ9e2pvYn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGb3JtPXsoKSA9PiBzZXRDdXJyZW50Sm9iKGpvYil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L0RCSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBsZWZ0LTIvNCB0b3AtMi80IHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMi80ICAtdHJhbnNsYXRlLXktMi80YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1tb2RhbCBcclxuICAgICAgICAgICAgdGV4dC1yZWQgdy05NiBoLTI0IHRleHQtY2VudGVyIHRleHQtMnhsIGJnLWNvdmVyIGJnLWNlbnRlciBiZy1uby1yZXBlYXQgcHQtOCBcclxuICAgICAgICAgICAgYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDYW5ub3QgZmV0Y2ggSm9ic1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIwIGxnOnB0LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4bDp3LTIvMyBtZDp3LTQvNSBzbTp3LWZ1bGwgbXgtYXV0byB3LTMyXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Sm9iKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hEQigpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBpc1Nob3J0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGpvYkNhcmQ9e2N1cnJlbnRKb2J9PjwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9