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
          className: "w-32 md:mx-24 xl:mx-64",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gudHN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicXVlcnlKb2JzIiwic2V0UXVlcnlKb2JzIiwiZmlsdGVyIiwib3JkZXIiLCJzZWFyY2hQYXJhbSIsInF1ZXJ5T2JqZWN0Iiwic2V0UXVlcnlPYmplY3QiLCJwYWdpbmF0ZWQiLCJzZXRQYWdpbmF0ZWQiLCJlcnJvcmluZyIsInNldEVycm9yaW5nIiwiY3VycmVudEpvYiIsInNldEN1cnJlbnRKb2IiLCJoYW5kbGVLZXlwcmVzcyIsImUiLCJjaGFyQ29kZSIsInNlYXJjaERCIiwicGFnaW5hdGUiLCJsZW5ndGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJqb2JzIiwiZXJyIiwibmV3T2JqIiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsInNvcnQiLCJhIiwiYiIsInN0YXR1cyIsIm1hcCIsImpvYiIsImpvYl9udW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFJbERDLHNEQUFRLENBQUMsRUFBRCxDQUowQztBQUFBLE1BQy9DQyxTQUQrQztBQUFBLE1BQ3BDQyxZQURvQzs7QUFBQSxtQkFLbEJGLHNEQUFRLENBQUM7QUFDM0NHLFVBQU0sRUFBRSxZQURtQztBQUUzQ0MsU0FBSyxFQUFFLEtBRm9DO0FBRzNDQyxlQUFXLEVBQUU7QUFIOEIsR0FBRCxDQUxVO0FBQUEsTUFLakRDLFdBTGlEO0FBQUEsTUFLcENDLGNBTG9DOztBQUFBLG1CQVVwQlAsc0RBQVEsQ0FBQyxDQUFELENBVlk7QUFBQSxNQVUvQ1EsU0FWK0M7QUFBQSxNQVVwQ0MsWUFWb0M7O0FB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O0FBQUEsdUJBQU01QixhQUFhLENBQUM0QixHQUFELENBQW5CO0FBQUE7QUFIZCxlQUNPQSxHQUFHLENBQUNDLFVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQU9ELFdBWEY7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEdBc0JHO0FBdkJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkEyQkM7QUFDRSxpQkFBUywwRUFEWDtBQUFBLCtCQUdFO0FBQ0UsbUJBQVMsRUFBQyxtS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3R0o7QUFBQSxvQkFERCxnQkE0SEM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRSx3QkFBaEI7QUFBQSxpQ0FDRSxxRUFBQywrQ0FBRDtBQUNFLG1CQUFPLEVBQUUsbUJBQU07QUFDYjdCLDJCQUFhLENBQUMsSUFBRCxDQUFiO0FBQ0FJLHNCQUFRO0FBQ1QsYUFKSDtBQUtFLGdCQUFJLEVBQUUsSUFMUjtBQU1FLG1CQUFPLEVBQUUsSUFOWDtBQU9FLGdCQUFJLEVBQUM7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVlFLHFFQUFDLDZDQUFEO0FBQU0saUJBQU8sRUFBRUw7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBN0hKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlKRDs7R0E5THVCYixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RhdGFiYXNlLmMwYmE2OWE4ZWVhM2ViNzJmZmU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtcclxuICBEaXNwYXRjaCxcclxuICBSZWFjdEVsZW1lbnQsXHJcbiAgU2V0U3RhdGVBY3Rpb24sXHJcbiAgdXNlRWZmZWN0LFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbGVyXCI7XHJcbmltcG9ydCB7IEpvYkNhcmQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IERCSXRlbSBmcm9tIFwiLi9EQkl0ZW1cIjtcclxuaW1wb3J0IEZvcm0gZnJvbSBcIi4vRm9ybVwiO1xyXG5pbnRlcmZhY2UgUHJvcHMge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCh7fTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtxdWVyeUpvYnMsIHNldFF1ZXJ5Sm9ic106IFtcclxuICAgIEFycmF5PEpvYkNhcmQ+LFxyXG4gICAgRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248YW55W10+PlxyXG4gIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IFtxdWVyeU9iamVjdCwgc2V0UXVlcnlPYmplY3RdID0gdXNlU3RhdGUoe1xyXG4gICAgZmlsdGVyOiBcImpvYl9udW1iZXJcIixcclxuICAgIG9yZGVyOiBcIkFTQ1wiLFxyXG4gICAgc2VhcmNoUGFyYW06IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3QgW3BhZ2luYXRlZCwgc2V0UGFnaW5hdGVkXSA9IHVzZVN0YXRlKDUpO1xyXG4gIGNvbnN0IFtlcnJvcmluZywgc2V0RXJyb3JpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjdXJyZW50Sm9iLCBzZXRDdXJyZW50Sm9iXSA9IHVzZVN0YXRlPEpvYkNhcmQgfCBudWxsPigpO1xyXG4gIGNvbnN0IGhhbmRsZUtleXByZXNzID0gKGUpID0+IHtcclxuICAgIGlmIChlLmNoYXJDb2RlID09PSAxMykge1xyXG4gICAgICBzZWFyY2hEQigpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgZnVuY3Rpb24gcGFnaW5hdGUoKSB7XHJcbiAgICBpZiAocGFnaW5hdGVkICE9PSBxdWVyeUpvYnMubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChxdWVyeUpvYnMubGVuZ3RoID4gcGFnaW5hdGVkICsgMykge1xyXG4gICAgICAgIHNldFBhZ2luYXRlZChwYWdpbmF0ZWQgKyAzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRQYWdpbmF0ZWQocXVlcnlKb2JzLmxlbmd0aCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gc2VhcmNoREIoKSB7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vYmlrZXJzLXRlc3QuaGVyb2t1YXBwLmNvbS9qb2JcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBwYXJhbXM6IEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqZWN0KSxcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHsgam9icyB9KSA9PiB7XHJcbiAgICAgICAgc2V0UXVlcnlKb2JzKGpvYnMpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldEVycm9yaW5nKHRydWUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7IWN1cnJlbnRKb2IgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbGVmdC0yLzQgdHJhbnNmb3JtICAtdHJhbnNsYXRlLXgtMi80ICR7XHJcbiAgICAgICAgICAgICAgcXVlcnlKb2JzLmxlbmd0aCB8fCBlcnJvcmluZ1xyXG4gICAgICAgICAgICAgICAgPyBcImxnOnRvcC0yMCB0b3AtMzJcIlxyXG4gICAgICAgICAgICAgICAgOiBcInRvcC0yLzQgLXRyYW5zbGF0ZS15LTIvNFwiXHJcbiAgICAgICAgICAgIH0gYH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1jZW50ZXIgZmxleC1jb2xcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBwYi0yIGp1c3RpZnktYmV0d2VlbiBcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtbGVmdCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6cHItMiB0ZXh0LXdoaXRlXCI+U2VhcmNoIGJ5OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJKb2IgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3T2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW06IHF1ZXJ5T2JqZWN0LnNlYXJjaFBhcmFtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBxdWVyeU9iamVjdC5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnlPYmplY3QobmV3T2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImpvYl9udW1iZXJcIj5Kb2IgTnVtYmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidmluX251bWJlclwiPlZJTiBOdW1iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjdXN0b21lcl9uYW1lX2FuZF9zdXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVyIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNvbnRhY3RfbnVtYmVyXCI+Q29udGFjdCBOdW1iZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdGV4dC1sZWZ0IGZsZXgtY29sIG1kOmZsZXgtcm93IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtZDpwci0yIHRleHQtd2hpdGVcIj5Tb3J0OjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9yZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3T2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcXVlcnlPYmplY3QuZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtOiBxdWVyeU9iamVjdC5zZWFyY2hQYXJhbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5T2JqZWN0KG5ld09iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJBU0NcIj5Bc2NlbmRpbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJERVNDXCI+RGVjZW5kaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTY0IG1kOnctOTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXtoYW5kbGVLZXlwcmVzc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjogcXVlcnlPYmplY3QuZmlsdGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbTogZS50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiBxdWVyeU9iamVjdC5vcmRlcixcclxuICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeU9iamVjdChuZXdPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zMiBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgaXNTaG9ydD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeU9iamVjdC5zZWFyY2hQYXJhbSA9PT0gXCJcIiA/IFwiU2VhcmNoIEFsbFwiIDogXCJTZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hEQigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7IWVycm9yaW5nID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOnB0LTQwIHB0LTY0XCI+XHJcbiAgICAgICAgICAgICAge3F1ZXJ5Sm9icy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcclxuICAgICAgICAgICAgICAgICAgcGFnZVN0YXJ0PXswfVxyXG4gICAgICAgICAgICAgICAgICBsb2FkTW9yZT17cGFnaW5hdGV9XHJcbiAgICAgICAgICAgICAgICAgIGhhc01vcmU9e3BhZ2luYXRlZCArIDEgPCBxdWVyeUpvYnMubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICBsb2FkZXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+TG9hZGluZy4uLjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3F1ZXJ5Sm9ic1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBwYWdpbmF0ZWQgKyAxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoYS5zdGF0dXMgPT0gXCJDbG9zZWRcIiA/IDEgOiAtMSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoam9iKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8REJJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtqb2Iuam9iX251bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBqb2JDYXJkPXtqb2J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRm9ybT17KCkgPT4gc2V0Q3VycmVudEpvYihqb2IpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9EQkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9JbmZpbml0ZVNjcm9sbD5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgbGVmdC0yLzQgdG9wLTIvNCB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTIvNCAgLXRyYW5zbGF0ZS15LTIvNGB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbW9kYWwgXHJcbiAgICAgICAgICAgIHRleHQtcmVkIHctOTYgaC0yNCB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCBiZy1jb3ZlciBiZy1jZW50ZXIgYmctbm8tcmVwZWF0IHB0LTggXHJcbiAgICAgICAgICAgIGFic29sdXRlIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHRvcC0xLzIgLXRyYW5zbGF0ZS15LTEvMlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ2Fubm90IGZldGNoIEpvYnNcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMCBsZzpwdC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInctMzIgbWQ6bXgtMjQgeGw6bXgtNjRcIn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Sm9iKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hEQigpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBpc1Nob3J0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGpvYkNhcmQ9e2N1cnJlbnRKb2J9PjwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9