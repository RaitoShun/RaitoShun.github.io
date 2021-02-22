webpackHotUpdate_N_E("pages/settings",{

/***/ "./components/Register.tsx":
/*!*********************************!*\
  !*** ./components/Register.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var json_to_csv_export__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! json-to-csv-export */ "./node_modules/json-to-csv-export/dist/index.js");
/* harmony import */ var json_to_csv_export__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(json_to_csv_export__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _schemas_registerSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../schemas/registerSchema */ "./schemas/registerSchema.ts");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormField */ "./components/FormField.tsx");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Users\\abith\\Desktop\\Dev\\Apps\\bikers-dashboard\\components\\Register.tsx",
    _s = $RefreshSig$();









var base64 = __webpack_require__(/*! base-64 */ "./node_modules/base-64/base64.js");

function Register(_ref) {
  _s();

  var _this = this;

  var user = _ref.user,
      runLogin = _ref.runLogin,
      runLogout = _ref.runLogout;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      toggleModal = _useState[0],
      setToggleModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      modalMessage = _useState2[0],
      setModalMessage = _useState2[1];

  var handleChange = function handleChange(_ref2) {
    var username = _ref2.username,
        password = _ref2.password;
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", user.token);
    setModalMessage("Changing...");
    setToggleModal(true);
    fetch("https://bikers-test.herokuapp.com/user/" + user.public_id, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setModalMessage("Account Credentials changed.");
      setTimeout(function () {
        setToggleModal(false);
      }, 1200);
    })["catch"](function (err) {
      setModalMessage("Request Failed");
      setTimeout(function () {
        setToggleModal(false);
      }, 1200);
    });
  };

  var handleAdmin = function handleAdmin(_ref3) {
    var username = _ref3.username,
        password = _ref3.password;
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", user.token);
    setModalMessage("Creating...");
    setToggleModal(true);
    fetch("https://bikers-test.herokuapp.com/user", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setModalMessage("Account Created.");
      setTimeout(function () {
        setToggleModal(false);
      }, 1200);
    })["catch"](function (err) {
      setModalMessage("Request Failed");
      setTimeout(function () {
        setToggleModal(false);
      }, 1200);
    });
  };

  var handleDelete = function handleDelete() {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-access-token", user.token);
    setModalMessage("Deleting...");
    setToggleModal(true);
    fetch("https://bikers-test.herokuapp.com/user/" + user.public_id, {
      method: "DELETE",
      headers: headers
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.message === "The last admin cannot be deleted") {
        setModalMessage(data.message);
        setTimeout(function () {
          setToggleModal(false);
        }, 1200);
      } else {
        setModalMessage("Deleted. Logging out...");
        setTimeout(function () {
          runLogout();
        }, 1200);
      }
    })["catch"](function (err) {
      setModalMessage("Request Failed");
      setTimeout(function () {
        setToggleModal(false);
      }, 1200);
    });
  };

  var handleCSV = function handleCSV() {
    setToggleModal(true);
    setModalMessage("Starting Download...");
    fetch("https://bikers-test.herokuapp.com/job", {
      method: "get",
      headers: {
        params: JSON.stringify({
          filter: "all"
        }),
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (_ref4) {
      var jobs = _ref4.jobs;
      json_to_csv_export__WEBPACK_IMPORTED_MODULE_4___default()(jobs, "export.csv");
      setToggleModal(false);
    })["catch"](function (err) {
      setModalMessage("Request Failed");
      setTimeout(function () {
        setToggleModal(false);
      }, 1200);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      currentUsername: user.username,
      newUserName: "",
      newCurrentPass: "",
      confirmCurrentPass: "",
      newUserPass: "",
      confirmNewUserPass: ""
    },
    validationSchema: _schemas_registerSchema__WEBPACK_IMPORTED_MODULE_5__["default"],
    onSubmit: function onSubmit(values, actions) {},
    children: function children(_ref5) {
      var errors = _ref5.errors,
          touched = _ref5.touched,
          handleSubmit = _ref5.handleSubmit,
          values = _ref5.values;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_7___default.a, {
          isOpen: toggleModal,
          className: "bg-modal \r text-white w-96 h-24 text-center text-2xl bg-cover bg-center bg-no-repeat pt-8 \r absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2",
          ariaHideApp: true,
          style: {
            overlay: {
              position: "fixed",
              width: "100vw",
              height: "100vh",
              zIndex: 30
            }
          },
          children: modalMessage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "xl:mt-0 bg-menublue md:w-4/5 w-full md:mx-auto py-20",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "flex lg:flex-row flex-col justify-around text-white w-full relative",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
              className: "lg:mx-0 mx-auto md:pb-0 pb-20",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "text-3xl mb-10",
                children: ["My ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 22
                }, _this), "Account"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex flex-col w-full border-white",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  fieldType: "register-field",
                  label: "Change Username",
                  name: "currentUsername",
                  touched: touched,
                  errors: errors,
                  color: "white"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  fieldType: "register-field",
                  label: "New Password",
                  name: "newCurrentPass",
                  type: "password",
                  touched: touched,
                  errors: errors,
                  color: "white"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 179,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  fieldType: "register-field",
                  label: "Confirm New Password",
                  name: "confirmCurrentPass",
                  type: "password",
                  touched: touched,
                  errors: errors,
                  color: "white"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 188,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "my-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onClick: function onClick() {
                      runLogin({
                        token: user.token,
                        public_id: user.public_id,
                        username: values.currentUsername
                      });
                      handleChange({
                        username: values.currentUsername,
                        password: values.confirmCurrentPass
                      });
                    },
                    text: "Change Account Credentials"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onClick: function onClick() {
                      runLogout();
                    },
                    text: "Sign Out"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onClick: function onClick() {
                      handleDelete();
                    },
                    text: "Delete My Account"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 218,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 166,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "\r lg:absolute bg-white lg:w-1 lg:h-4/5 lg:my-0 lg:mx-0 w-2/3 h-1 top-1/2 transform\r -translate-y-1/2 rounded mx-auto box-border"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 227,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
              className: "lg:mx-0 mx-auto pt-20 md:pt-0 ",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "text-3xl mb-10",
                children: ["Create a New", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 31
                }, _this), " Administrator"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 233,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  fieldType: "register-field",
                  label: "Username",
                  name: "newUserName",
                  color: "white"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 237,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  fieldType: "register-field",
                  label: "Password",
                  name: "newUserPass",
                  color: "white"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 243,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  fieldType: "register-field",
                  label: "Confirm Password",
                  name: "ConfirmNewUserPass",
                  color: "white"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "my-5",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onClick: function onClick() {
                      handleAdmin({
                        username: values.newUserName,
                        password: values.confirmNewUserPass
                      });
                    },
                    text: "Create New Admin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 256,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    onClick: function onClick() {
                      handleCSV();
                    },
                    text: "Download New CSV"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 265,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 255,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 232,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 133,
    columnNumber: 5
  }, this);
}

_s(Register, "Ua7tgb+Rn/K5FGkQDFng/Jid0q0=");

_c = Register;

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWdpc3Rlci50c3giXSwibmFtZXMiOlsiYmFzZTY0IiwicmVxdWlyZSIsIlJlZ2lzdGVyIiwidXNlciIsInJ1bkxvZ2luIiwicnVuTG9nb3V0IiwidXNlU3RhdGUiLCJ0b2dnbGVNb2RhbCIsInNldFRvZ2dsZU1vZGFsIiwibW9kYWxNZXNzYWdlIiwic2V0TW9kYWxNZXNzYWdlIiwiaGFuZGxlQ2hhbmdlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImhlYWRlcnMiLCJIZWFkZXJzIiwiYXBwZW5kIiwidG9rZW4iLCJmZXRjaCIsInB1YmxpY19pZCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2V0VGltZW91dCIsImVyciIsImhhbmRsZUFkbWluIiwiaGFuZGxlRGVsZXRlIiwibWVzc2FnZSIsImhhbmRsZUNTViIsInBhcmFtcyIsImZpbHRlciIsIkFjY2VwdCIsImpvYnMiLCJjc3ZEb3dubG9hZCIsImN1cnJlbnRVc2VybmFtZSIsIm5ld1VzZXJOYW1lIiwibmV3Q3VycmVudFBhc3MiLCJjb25maXJtQ3VycmVudFBhc3MiLCJuZXdVc2VyUGFzcyIsImNvbmZpcm1OZXdVc2VyUGFzcyIsInJlZ2lzdGVyU2NoZW1hIiwidmFsdWVzIiwiYWN0aW9ucyIsImVycm9ycyIsInRvdWNoZWQiLCJoYW5kbGVTdWJtaXQiLCJvdmVybGF5IiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsInpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLGlEQUFELENBQXBCOztBQVFlLFNBQVNDLFFBQVQsT0FJUztBQUFBOztBQUFBOztBQUFBLE1BSHRCQyxJQUdzQixRQUh0QkEsSUFHc0I7QUFB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TSxDQUFDTixXQURQO0FBRVYzQixnQ0FBUSxFQUFFaUMsTUFBTSxDQUFDRjtBQUZQLHVCQUFELENBQVg7QUFJRCxxQkFOSDtBQU9FLHdCQUFJLEVBQUM7QUFQUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLGVBVUUscUVBQUMsK0NBQUQ7QUFDRSwyQkFBTyxFQUFFLG1CQUFNO0FBQ2JYLCtCQUFTO0FBQ1YscUJBSEg7QUFJRSx3QkFBSSxFQUFDO0FBSlA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGO0FBQUEsc0JBREQ7QUFBQTtBQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9KRDs7R0F4UXVCL0IsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy5mMWFkNzA2MTViN2RlOTY2MzMyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIEZvcm0gYXMgRm9ybWlrRm9ybSwgRm9ybWlrLCBGb3JtaWtQcm9wcyB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IGNzdkRvd25sb2FkIGZyb20gXCJqc29uLXRvLWNzdi1leHBvcnRcIjtcclxuaW1wb3J0IHJlZ2lzdGVyU2NoZW1hIGZyb20gXCIuLi9zY2hlbWFzL3JlZ2lzdGVyU2NoZW1hXCI7XHJcbmltcG9ydCBGb3JtRmllbGQgZnJvbSBcIi4vRm9ybUZpZWxkXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxubGV0IGJhc2U2NCA9IHJlcXVpcmUoXCJiYXNlLTY0XCIpO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB1c2VyPzogeyB1c2VybmFtZTogc3RyaW5nOyB0b2tlbjogc3RyaW5nOyBwdWJsaWNfaWQ6IHN0cmluZyB9O1xyXG4gIHJ1bkxvZ2luPzogRnVuY3Rpb247XHJcbiAgcnVuTG9nb3V0PzogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKHtcclxuICB1c2VyLFxyXG4gIHJ1bkxvZ2luLFxyXG4gIHJ1bkxvZ291dCxcclxufTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFt0b2dnbGVNb2RhbCwgc2V0VG9nZ2xlTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttb2RhbE1lc3NhZ2UsIHNldE1vZGFsTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgaGVhZGVycy5hcHBlbmQoXCJ4LWFjY2Vzcy10b2tlblwiLCB1c2VyLnRva2VuKTtcclxuXHJcbiAgICBzZXRNb2RhbE1lc3NhZ2UoXCJDaGFuZ2luZy4uLlwiKTtcclxuICAgIHNldFRvZ2dsZU1vZGFsKHRydWUpO1xyXG4gICAgZmV0Y2goXCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb20vdXNlci9cIiArIHVzZXIucHVibGljX2lkLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsTWVzc2FnZShcIkFjY291bnQgQ3JlZGVudGlhbHMgY2hhbmdlZC5cIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUb2dnbGVNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxNZXNzYWdlKFwiUmVxdWVzdCBGYWlsZWRcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUb2dnbGVNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkbWluID0gKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pID0+IHtcclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKFwieC1hY2Nlc3MtdG9rZW5cIiwgdXNlci50b2tlbik7XHJcbiAgICBzZXRNb2RhbE1lc3NhZ2UoXCJDcmVhdGluZy4uLlwiKTtcclxuICAgIHNldFRvZ2dsZU1vZGFsKHRydWUpO1xyXG4gICAgZmV0Y2goXCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb20vdXNlclwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRNb2RhbE1lc3NhZ2UoXCJBY2NvdW50IENyZWF0ZWQuXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VG9nZ2xlTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0sIDEyMDApO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsTWVzc2FnZShcIlJlcXVlc3QgRmFpbGVkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VG9nZ2xlTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0sIDEyMDApO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoKSA9PiB7XHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICBoZWFkZXJzLmFwcGVuZChcIngtYWNjZXNzLXRva2VuXCIsIHVzZXIudG9rZW4pO1xyXG4gICAgc2V0TW9kYWxNZXNzYWdlKFwiRGVsZXRpbmcuLi5cIik7XHJcbiAgICBzZXRUb2dnbGVNb2RhbCh0cnVlKTtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9iaWtlcnMtdGVzdC5oZXJva3VhcHAuY29tL3VzZXIvXCIgKyB1c2VyLnB1YmxpY19pZCwge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLm1lc3NhZ2UgPT09IFwiVGhlIGxhc3QgYWRtaW4gY2Fubm90IGJlIGRlbGV0ZWRcIikge1xyXG4gICAgICAgICAgc2V0TW9kYWxNZXNzYWdlKGRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0VG9nZ2xlTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldE1vZGFsTWVzc2FnZShcIkRlbGV0ZWQuIExvZ2dpbmcgb3V0Li4uXCIpO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJ1bkxvZ291dCgpO1xyXG4gICAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsTWVzc2FnZShcIlJlcXVlc3QgRmFpbGVkXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VG9nZ2xlTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgIH0sIDEyMDApO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDU1YgPSAoKSA9PiB7XHJcbiAgICBzZXRUb2dnbGVNb2RhbCh0cnVlKTtcclxuICAgIHNldE1vZGFsTWVzc2FnZShcIlN0YXJ0aW5nIERvd25sb2FkLi4uXCIpO1xyXG4gICAgZmV0Y2goXCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb20vam9iXCIsIHtcclxuICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgcGFyYW1zOiBKU09OLnN0cmluZ2lmeSh7IGZpbHRlcjogXCJhbGxcIiB9KSxcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKHsgam9icyB9KSA9PiB7XHJcbiAgICAgICAgY3N2RG93bmxvYWQoam9icywgXCJleHBvcnQuY3N2XCIpO1xyXG4gICAgICAgIHNldFRvZ2dsZU1vZGFsKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRNb2RhbE1lc3NhZ2UoXCJSZXF1ZXN0IEZhaWxlZFwiKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldFRvZ2dsZU1vZGFsKGZhbHNlKTtcclxuICAgICAgICB9LCAxMjAwKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtaWtcclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIGN1cnJlbnRVc2VybmFtZTogdXNlci51c2VybmFtZSxcclxuICAgICAgICBuZXdVc2VyTmFtZTogXCJcIixcclxuICAgICAgICBuZXdDdXJyZW50UGFzczogXCJcIixcclxuICAgICAgICBjb25maXJtQ3VycmVudFBhc3M6IFwiXCIsXHJcbiAgICAgICAgbmV3VXNlclBhc3M6IFwiXCIsXHJcbiAgICAgICAgY29uZmlybU5ld1VzZXJQYXNzOiBcIlwiLFxyXG4gICAgICB9fVxyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtyZWdpc3RlclNjaGVtYX1cclxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IHt9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgZXJyb3JzLCB0b3VjaGVkLCBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9OiBGb3JtaWtQcm9wczxhbnk+KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49e3RvZ2dsZU1vZGFsfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1tb2RhbCBcclxuICAgICAgICAgICAgdGV4dC13aGl0ZSB3LTk2IGgtMjQgdGV4dC1jZW50ZXIgdGV4dC0yeGwgYmctY292ZXIgYmctY2VudGVyIGJnLW5vLXJlcGVhdCBwdC04IFxyXG4gICAgICAgICAgICBhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJcIlxyXG4gICAgICAgICAgICBhcmlhSGlkZUFwcD17dHJ1ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiAzMCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bW9kYWxNZXNzYWdlfVxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwieGw6bXQtMCBiZy1tZW51Ymx1ZSBtZDp3LTQvNSB3LWZ1bGwgbWQ6bXgtYXV0byBweS0yMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbGc6ZmxleC1yb3cgZmxleC1jb2wganVzdGlmeS1hcm91bmQgdGV4dC13aGl0ZSB3LWZ1bGwgcmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICA8Rm9ybWlrRm9ybSBjbGFzc05hbWU9XCJsZzpteC0wIG14LWF1dG8gbWQ6cGItMCBwYi0yMFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIE15IDxicj48L2JyPkFjY291bnRcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGJvcmRlci13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcInJlZ2lzdGVyLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDaGFuZ2UgVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXJyZW50VXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcInJlZ2lzdGVyLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdDdXJyZW50UGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgID48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJyZWdpc3Rlci1maWVsZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBOZXcgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtQ3VycmVudFBhc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVuTG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiB1c2VyLnRva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpY19pZDogdXNlci5wdWJsaWNfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHZhbHVlcy5jdXJyZW50VXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB2YWx1ZXMuY3VycmVudFVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB2YWx1ZXMuY29uZmlybUN1cnJlbnRQYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQ2hhbmdlIEFjY291bnQgQ3JlZGVudGlhbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bkxvZ291dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJTaWduIE91dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkRlbGV0ZSBNeSBBY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtaWtGb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlxyXG4gICAgICAgICAgICAgIGxnOmFic29sdXRlIGJnLXdoaXRlIGxnOnctMSBsZzpoLTQvNSBsZzpteS0wIGxnOm14LTAgdy0yLzMgaC0xIHRvcC0xLzIgdHJhbnNmb3JtXHJcbiAgICAgICAgICAgICAgLXRyYW5zbGF0ZS15LTEvMiByb3VuZGVkIG14LWF1dG8gYm94LWJvcmRlclwiXHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGb3JtaWtGb3JtIGNsYXNzTmFtZT1cImxnOm14LTAgbXgtYXV0byBwdC0yMCBtZDpwdC0wIFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgIENyZWF0ZSBhIE5ldzxicj48L2JyPiBBZG1pbmlzdHJhdG9yXHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGU9e1wicmVnaXN0ZXItZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3VXNlck5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtcIndoaXRlXCJ9XHJcbiAgICAgICAgICAgICAgICAgID48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJyZWdpc3Rlci1maWVsZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdVc2VyUGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e1wid2hpdGVcIn1cclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcInJlZ2lzdGVyLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb25maXJtIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiQ29uZmlybU5ld1VzZXJQYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17XCJ3aGl0ZVwifVxyXG4gICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRtaW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB2YWx1ZXMubmV3VXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHZhbHVlcy5jb25maXJtTmV3VXNlclBhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJDcmVhdGUgTmV3IEFkbWluXCJcclxuICAgICAgICAgICAgICAgICAgICA+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDU1YoKTtcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiRG93bmxvYWQgTmV3IENTVlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvRm9ybWlrRm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==