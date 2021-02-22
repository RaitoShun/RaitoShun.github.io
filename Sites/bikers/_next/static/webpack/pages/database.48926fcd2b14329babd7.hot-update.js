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
          className: "w-4/5",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2gudHN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInVzZVN0YXRlIiwicXVlcnlKb2JzIiwic2V0UXVlcnlKb2JzIiwiZmlsdGVyIiwib3JkZXIiLCJzZWFyY2hQYXJhbSIsInF1ZXJ5T2JqZWN0Iiwic2V0UXVlcnlPYmplY3QiLCJwYWdpbmF0ZWQiLCJzZXRQYWdpbmF0ZWQiLCJlcnJvcmluZyIsInNldEVycm9yaW5nIiwiY3VycmVudEpvYiIsInNldEN1cnJlbnRKb2IiLCJoYW5kbGVLZXlwcmVzcyIsImUiLCJjaGFyQ29kZSIsInNlYXJjaERCIiwicGFnaW5hdGUiLCJsZW5ndGgiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJqb2JzIiwiZXJyIiwibmV3T2JqIiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsInNvcnQiLCJhIiwiYiIsInN0YXR1cyIsIm1hcCIsImpvYiIsImpvYl9udW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUdlLFNBQVNBLE1BQVQsT0FBeUM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrQkFJbERDLHNEQUFRLENBQUMsRUFBRCxDQUowQztBQUFBLE1BQy9DQyxTQUQrQztBQUFBLE1BQ3BDQyxZQURvQzs7QUFBQSxtQkFLbEJGLHNEQUFRLENBQUM7QUFDM0NHLFVBQU0sRUFBRSxZQURtQztBQUUzQ0MsU0FBSyxFQUFFLEtBRm9DO0FBRzNDQyxlQUFXLEVBQUU7QUFIOEIsR0FBRCxDQUxVO0FBQUEsTUFLakRDLFdBTGlEO0FBQUEsTUFLcENDLGNBTG9DOztBQUFBLG1CQVVwQlAsc0RBQVEsQ0FBQyxDQUFELENBVlk7QUFBQSxNQVUvQ1EsU0FWK0M7QUFBQSxNQVVwQ0MsWUFWb0M7O0FB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O0FBQUEsdUJBQU01QixhQUFhLENBQUM0QixHQUFELENBQW5CO0FBQUE7QUFIZCxlQUNPQSxHQUFHLENBQUNDLFVBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQU9ELFdBWEY7QUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELEdBc0JHO0FBdkJOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxnQkEyQkM7QUFDRSxpQkFBUywwRUFEWDtBQUFBLCtCQUdFO0FBQ0UsbUJBQVMsRUFBQyxtS0FEWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3R0o7QUFBQSxvQkFERCxnQkE0SEM7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxPQUFmO0FBQUEsaUNBQ0UscUVBQUMsK0NBQUQ7QUFDRSxtQkFBTyxFQUFFLG1CQUFNO0FBQ2I3QiwyQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNBSSxzQkFBUTtBQUNULGFBSkg7QUFLRSxnQkFBSSxFQUFFLElBTFI7QUFNRSxtQkFBTyxFQUFFLElBTlg7QUFPRSxnQkFBSSxFQUFDO0FBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFZRSxxRUFBQyw2Q0FBRDtBQUFNLGlCQUFPLEVBQUVMO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQTdISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpSkQ7O0dBOUx1QmIsTTs7S0FBQUEsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXRhYmFzZS40ODkyNmZjZDJiMTQzMjliYWJkNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgRGlzcGF0Y2gsXHJcbiAgUmVhY3RFbGVtZW50LFxyXG4gIFNldFN0YXRlQWN0aW9uLFxyXG4gIHVzZUVmZmVjdCxcclxuICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gXCJyZWFjdC1pbmZpbml0ZS1zY3JvbGxlclwiO1xyXG5pbXBvcnQgeyBKb2JDYXJkIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XHJcbmltcG9ydCBEQkl0ZW0gZnJvbSBcIi4vREJJdGVtXCI7XHJcbmltcG9ydCBGb3JtIGZyb20gXCIuL0Zvcm1cIjtcclxuaW50ZXJmYWNlIFByb3BzIHt9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goe306IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBbcXVlcnlKb2JzLCBzZXRRdWVyeUpvYnNdOiBbXHJcbiAgICBBcnJheTxKb2JDYXJkPixcclxuICAgIERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPGFueVtdPj5cclxuICBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGxldCBbcXVlcnlPYmplY3QsIHNldFF1ZXJ5T2JqZWN0XSA9IHVzZVN0YXRlKHtcclxuICAgIGZpbHRlcjogXCJqb2JfbnVtYmVyXCIsXHJcbiAgICBvcmRlcjogXCJBU0NcIixcclxuICAgIHNlYXJjaFBhcmFtOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IFtwYWdpbmF0ZWQsIHNldFBhZ2luYXRlZF0gPSB1c2VTdGF0ZSg1KTtcclxuICBjb25zdCBbZXJyb3JpbmcsIHNldEVycm9yaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEpvYiwgc2V0Q3VycmVudEpvYl0gPSB1c2VTdGF0ZTxKb2JDYXJkIHwgbnVsbD4oKTtcclxuICBjb25zdCBoYW5kbGVLZXlwcmVzcyA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS5jaGFyQ29kZSA9PT0gMTMpIHtcclxuICAgICAgc2VhcmNoREIoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGZ1bmN0aW9uIHBhZ2luYXRlKCkge1xyXG4gICAgaWYgKHBhZ2luYXRlZCAhPT0gcXVlcnlKb2JzLmxlbmd0aCkge1xyXG4gICAgICBpZiAocXVlcnlKb2JzLmxlbmd0aCA+IHBhZ2luYXRlZCArIDMpIHtcclxuICAgICAgICBzZXRQYWdpbmF0ZWQocGFnaW5hdGVkICsgMyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0UGFnaW5hdGVkKHF1ZXJ5Sm9icy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNlYXJjaERCKCkge1xyXG4gICAgZmV0Y2goXCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb20vam9iXCIsIHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgcGFyYW1zOiBKU09OLnN0cmluZ2lmeShxdWVyeU9iamVjdCksXHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh7IGpvYnMgfSkgPT4ge1xyXG4gICAgICAgIHNldFF1ZXJ5Sm9icyhqb2JzKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRFcnJvcmluZyh0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgeyFjdXJyZW50Sm9iID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtMi80IHRyYW5zZm9ybSAgLXRyYW5zbGF0ZS14LTIvNCAke1xyXG4gICAgICAgICAgICAgIHF1ZXJ5Sm9icy5sZW5ndGggfHwgZXJyb3JpbmdcclxuICAgICAgICAgICAgICAgID8gXCJsZzp0b3AtMjAgdG9wLTMyXCJcclxuICAgICAgICAgICAgICAgIDogXCJ0b3AtMi80IC10cmFuc2xhdGUteS0yLzRcIlxyXG4gICAgICAgICAgICB9IGB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtY2VudGVyIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgcGItMiBqdXN0aWZ5LWJldHdlZW4gXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB0ZXh0LWxlZnQgZmxleC1jb2wgbWQ6ZmxleC1yb3cgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1kOnByLTIgdGV4dC13aGl0ZVwiPlNlYXJjaCBieTo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiSm9iIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld09iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtOiBxdWVyeU9iamVjdC5zZWFyY2hQYXJhbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogcXVlcnlPYmplY3Qub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFF1ZXJ5T2JqZWN0KG5ld09iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJqb2JfbnVtYmVyXCI+Sm9iIE51bWJlcjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInZpbl9udW1iZXJcIj5WSU4gTnVtYmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY3VzdG9tZXJfbmFtZV9hbmRfc3VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDdXN0b21lciBOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjb250YWN0X251bWJlclwiPkNvbnRhY3QgTnVtYmVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHRleHQtbGVmdCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWQ6cHItMiB0ZXh0LXdoaXRlXCI+U29ydDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvcmRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld09iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHF1ZXJ5T2JqZWN0LmZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbTogcXVlcnlPYmplY3Quc2VhcmNoUGFyYW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRRdWVyeU9iamVjdChuZXdPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQVNDXCI+QXNjZW5kaW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiREVTQ1wiPkRlY2VuZGluZzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02NCBtZDp3LTk2XCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17aGFuZGxlS2V5cHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3T2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHF1ZXJ5T2JqZWN0LmZpbHRlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoUGFyYW06IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogcXVlcnlPYmplY3Qub3JkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UXVlcnlPYmplY3QobmV3T2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMzIgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGlzU2hvcnQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlPYmplY3Quc2VhcmNoUGFyYW0gPT09IFwiXCIgPyBcIlNlYXJjaCBBbGxcIiA6IFwiU2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoREIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgeyFlcnJvcmluZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpwdC00MCBwdC02NFwiPlxyXG4gICAgICAgICAgICAgIHtxdWVyeUpvYnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgICAgICAgPEluZmluaXRlU2Nyb2xsXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2VTdGFydD17MH1cclxuICAgICAgICAgICAgICAgICAgbG9hZE1vcmU9e3BhZ2luYXRlfVxyXG4gICAgICAgICAgICAgICAgICBoYXNNb3JlPXtwYWdpbmF0ZWQgKyAxIDwgcXVlcnlKb2JzLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgbG9hZGVyPXtcclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPkxvYWRpbmcuLi48L2g0PlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtxdWVyeUpvYnNcclxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgcGFnaW5hdGVkICsgMSlcclxuICAgICAgICAgICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gKGEuc3RhdHVzID09IFwiQ2xvc2VkXCIgPyAxIDogLTEpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKGpvYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERCSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17am9iLmpvYl9udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgam9iQ2FyZD17am9ifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZvcm09eygpID0+IHNldEN1cnJlbnRKb2Ioam9iKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvREJJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGxlZnQtMi80IHRvcC0yLzQgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0yLzQgIC10cmFuc2xhdGUteS0yLzRgfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLW1vZGFsIFxyXG4gICAgICAgICAgICB0ZXh0LXJlZCB3LTk2IGgtMjQgdGV4dC1jZW50ZXIgdGV4dC0yeGwgYmctY292ZXIgYmctY2VudGVyIGJnLW5vLXJlcGVhdCBwdC04IFxyXG4gICAgICAgICAgICBhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENhbm5vdCBmZXRjaCBKb2JzXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgbGc6cHQtMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNC81XCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRDdXJyZW50Sm9iKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hEQigpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGJhY2s9e3RydWV9XHJcbiAgICAgICAgICAgICAgICBpc1Nob3J0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgdGV4dD1cIkJhY2tcIlxyXG4gICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtIGpvYkNhcmQ9e2N1cnJlbnRKb2J9PjwvRm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9