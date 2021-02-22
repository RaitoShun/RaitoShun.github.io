webpackHotUpdate_N_E("pages/settings",{

/***/ "./components/Login.tsx":
/*!******************************!*\
  !*** ./components/Login.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _schemas_loginSchema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schemas/loginSchema */ "./schemas/loginSchema.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Logo.tsx");


var _jsxFileName = "C:\\Users\\abith\\Desktop\\Dev\\Apps\\bikers-dashboard\\components\\Login.tsx",
    _s = $RefreshSig$();








var base64 = __webpack_require__(/*! base-64 */ "./node_modules/base-64/base64.js");

function Login(props) {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      logged = _useState[0],
      setLogged = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: _schemas_loginSchema__WEBPACK_IMPORTED_MODULE_4__["default"],
    onSubmit: function onSubmit(_ref, actions) {
      var username = _ref.username,
          password = _ref.password;
      setLogged("");
      var headers = new Headers();
      headers.append("Content-Type", "text/json");
      headers.set("Authorization", "Basic " + base64.encode(username + ":" + password));
      fetch("http://localhost:5000/login", {
        method: "get",
        headers: headers
      }).then(function (res) {
        return res.json();
      }, function (err) {
        if (err.toString() === "TypeError: Failed to fetch") {
          setLogged("Connection failed");
        }

        return err;
      }).then(function (data) {
        if (data.token) {
          props.runLogin({
            username: username,
            token: data.token,
            public_id: data.public_id
          });
          router.push("/settings");
        }
      })["catch"](function (err) {
        if (logged !== "Connection failed") setLogged("Incorrect username or password");
      });
    },
    children: function children(_ref2) {
      var errors = _ref2.errors,
          touched = _ref2.touched,
          handleSubmit = _ref2.handleSubmit;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "md:w-4/5 lg:w-1/2 md:h-auto w-full h-screen pt-20 bg-login bg-cover bg-center bg-no-repeat mx-auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "md:flex md:justify-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
            className: "md:p-6",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
              w: "full",
              h: "auto",
              color: "white",
              className: "mx-auto md:w-96"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-col items-center py-5 md:py-0 md:my-20 md:h-auto h-full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "username",
                className: "text-white",
                children: "Username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 17
              }, _this), errors.username && touched.username ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-red",
                children: errors.username
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 19
              }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                className: "login-field w-full".concat(errors.username && touched.username ? "border-2 border-red" : ""),
                name: "username"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                htmlFor: "password",
                className: "text-white mt-5",
                children: "Password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, _this), errors.password && touched.password ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-red",
                children: errors.password
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 19
              }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                className: "login-field ".concat(errors.password && touched.password ? "border-2 border-red" : ""),
                name: "password",
                type: "password"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                className: "text-red",
                children: logged
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "my-5 md:w-auto w-4/5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  onClick: function onClick() {
                    return handleSubmit();
                  },
                  isShort: true,
                  text: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(Login, "7ykr7OuGNx/zBgY929MtuAwkDY8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2dpbi50c3giXSwibmFtZXMiOlsiYmFzZTY0IiwicmVxdWlyZSIsIkxvZ2luIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2dpblNjaGVtYSIsImFjdGlvbnMiLCJoZWFkZXJzIiwiSGVhZGVycyIsImFwcGVuZCIsInNldCIsImVuY29kZSIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImpzb24iLCJlcnIiLCJ0b1N0cmluZyIsImRhdGEiLCJ0b2tlbiIsInJ1bkxvZ2luIiwicHVibGljX2lkIiwicHVzaCIsImVycm9ycyIsInRvdWNoZWQiLCJoYW5kbGVTdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsaURBQUQsQ0FBcEI7O0FBTWUsU0FBU0MsS0FBVCxDQUFlQyxLQUFmLEVBQTJDO0FBQUE7O0FBQUE7O0FBQ3hELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHdELGtCQUU1QkMsc0RBQVEsQ0FBQyxFQUFELENBRm9CO0FBQUEsTUFFakRDLE1BRmlEO0FBQUEsTUFFekNDLFNBRnlDOztBQUd4RCxzQkFDRSxxRUFBQyw2Q0FBRDtBQUNFLGlCQUFhLEVBQUU7QUFDYkMsY0FBUSxFQUFFLEVBREc7QUFFYkMsY0FBUSxFQUFFO0FBRkcsS0FEakI7QUFLRSxvQkFBZ0IsRUFBRUMsNERBTHBCO0FBTUUsWUFBUSxFQUFFLHdCQUF5QkMsT0FBekIsRUFBcUM7QUFBQSxVQUFsQ0gsUUFBa0MsUUFBbENBLFFBQWtDO0FBQUEsVUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUM3Q0YsZUFBUyxDQUFDLEVBQUQsQ0FBVDtBQUNBLFVB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Q0FBRDtBQUNFLHlCQUFTLHdCQUNQb0IsTUFBTSxDQUFDcEIsUUFBUCxJQUFtQnFCLE9BQU8sQ0FBQ3JCLFFBQTNCLEdBQ0kscUJBREosR0FFSSxFQUhHLENBRFg7QUFNRSxvQkFBSSxFQUFDLFVBTlA7QUFPRSxvQkFBSSxFQUFDO0FBUFA7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFyQkYsZUE4QkU7QUFBRyx5QkFBUyxFQUFDLFVBQWI7QUFBQSwwQkFBeUJIO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBOUJGLGVBK0JFO0FBQUsseUJBQVMsRUFBQyxzQkFBZjtBQUFBLHVDQUNFLHFFQUFDLCtDQUFEO0FBQ0UseUJBQU8sRUFBRTtBQUFBLDJCQUFNeUIsWUFBWSxFQUFsQjtBQUFBLG1CQURYO0FBRUUseUJBQU8sRUFBRSxJQUZYO0FBR0Usc0JBQUksRUFBQztBQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERDtBQUFBO0FBM0NIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1HRDs7R0F0R3VCOUIsSztVQUNQRyxxRDs7O0tBRE9ILEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuM2EyODFlZTJhMzY2YTAzZDg5MDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBGb3JtIGFzIEZvcm1pa0Zvcm0sIEZvcm1paywgRm9ybWlrUHJvcHMgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgbG9naW5TY2hlbWEgZnJvbSBcIi4uL3NjaGVtYXMvbG9naW5TY2hlbWFcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vTG9nb1wiO1xyXG5sZXQgYmFzZTY0ID0gcmVxdWlyZShcImJhc2UtNjRcIik7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHJ1bkxvZ2luPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHByb3BzOiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e3tcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgfX1cclxuICAgICAgdmFsaWRhdGlvblNjaGVtYT17bG9naW5TY2hlbWF9XHJcbiAgICAgIG9uU3VibWl0PXsoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSwgYWN0aW9ucykgPT4ge1xyXG4gICAgICAgIHNldExvZ2dlZChcIlwiKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2pzb25cIik7XHJcbiAgICAgICAgaGVhZGVycy5zZXQoXHJcbiAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIixcclxuICAgICAgICAgIFwiQmFzaWMgXCIgKyBiYXNlNjQuZW5jb2RlKHVzZXJuYW1lICsgXCI6XCIgKyBwYXNzd29yZClcclxuICAgICAgICApO1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2xvZ2luXCIsIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAocmVzKSA9PiByZXMuanNvbigpLFxyXG4gICAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGVyci50b1N0cmluZygpID09PSBcIlR5cGVFcnJvcjogRmFpbGVkIHRvIGZldGNoXCIpIHtcclxuICAgICAgICAgICAgICAgIHNldExvZ2dlZChcIkNvbm5lY3Rpb24gZmFpbGVkXCIpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS50b2tlbikge1xyXG4gICAgICAgICAgICAgIHByb3BzLnJ1bkxvZ2luKHtcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgdG9rZW46IGRhdGEudG9rZW4sXHJcbiAgICAgICAgICAgICAgICBwdWJsaWNfaWQ6IGRhdGEucHVibGljX2lkLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3NldHRpbmdzXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxvZ2dlZCAhPT0gXCJDb25uZWN0aW9uIGZhaWxlZFwiKVxyXG4gICAgICAgICAgICAgIHNldExvZ2dlZChcIkluY29ycmVjdCB1c2VybmFtZSBvciBwYXNzd29yZFwiKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgZXJyb3JzLCB0b3VjaGVkLCBoYW5kbGVTdWJtaXQgfTogRm9ybWlrUHJvcHM8YW55PikgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy00LzUgbGc6dy0xLzIgbWQ6aC1hdXRvIHctZnVsbCBoLXNjcmVlbiBwdC0yMCBiZy1sb2dpbiBiZy1jb3ZlciBiZy1jZW50ZXIgYmctbm8tcmVwZWF0IG14LWF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleCBtZDpqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8Rm9ybWlrRm9ybSBjbGFzc05hbWU9XCJtZDpwLTZcIj5cclxuICAgICAgICAgICAgICA8TG9nb1xyXG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgaD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibXgtYXV0byBtZDp3LTk2XCJ9XHJcbiAgICAgICAgICAgICAgPjwvTG9nbz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHB5LTUgbWQ6cHktMCBtZDpteS0yMCBtZDpoLWF1dG8gaC1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICBVc2VybmFtZVxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIHtlcnJvcnMudXNlcm5hbWUgJiYgdG91Y2hlZC51c2VybmFtZSA/IChcclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWRcIj57ZXJyb3JzLnVzZXJuYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGxvZ2luLWZpZWxkIHctZnVsbCR7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnVzZXJuYW1lICYmIHRvdWNoZWQudXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItMiBib3JkZXItcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5wYXNzd29yZCAmJiB0b3VjaGVkLnBhc3N3b3JkID8gKFxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXJlZFwiPntlcnJvcnMucGFzc3dvcmR9PC9wPlxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbG9naW4tZmllbGQgJHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgJiYgdG91Y2hlZC5wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci0yIGJvcmRlci1yZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmVkXCI+e2xvZ2dlZH08L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTUgbWQ6dy1hdXRvIHctNC81XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdWJtaXQoKX1cclxuICAgICAgICAgICAgICAgICAgICBpc1Nob3J0PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XCJMb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgID48L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Zvcm1pa0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==