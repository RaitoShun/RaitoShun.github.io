webpackHotUpdate_N_E("pages/database",{

/***/ "./components/Uploader.tsx":
/*!*********************************!*\
  !*** ./components/Uploader.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uploader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_abith_Desktop_Dev_Apps_bikers_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




var _jsxFileName = "C:\\Users\\abith\\Desktop\\Dev\\Apps\\bikers-dashboard\\components\\Uploader.tsx",
    _s = $RefreshSig$();




var dragCounter = 0;
function Uploader(_ref) {
  _s();

  var _this = this;

  var images = _ref.images,
      setImages = _ref.setImages,
      isDisabled = _ref.isDisabled,
      jobId = _ref.jobId,
      strImages = _ref.strImages,
      setStrImages = _ref.setStrImages,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? "Checked in" : _ref$status,
      _ref$showButton = _ref.showButton,
      showButton = _ref$showButton === void 0 ? true : _ref$showButton;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      drag = _useState[0],
      setDrag = _useState[1];

  var dropRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var manualInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleManualInput = function handleManualInput() {
    manualInput.current.click();
  };

  var handleDeleteImg = function handleDeleteImg(image, job_id) {
    fetch("https://bikers-test.herokuapp.com/image", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        job_id: job_id,
        image: image,
        images: strImages
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setStrImages(data["images"]);
    })["catch"](function (err) {});
  };

  var handleDeleteBlobImg = function handleDeleteBlobImg(key) {
    var index = images.indexOf(key);

    var temp = Object(C_Users_abith_Desktop_Dev_Apps_bikers_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(images);

    if (index > -1) {
      temp.splice(index, 1);
    }

    setImages(temp);
  };

  var validateFiles = function validateFiles(files) {
    files = Object(C_Users_abith_Desktop_Dev_Apps_bikers_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(files);

    if (files.some(function (f) {
      return !f.type.includes("image") || f.type.includes("gif");
    })) {
      alert("Please only drop in images");
    } else {
      if (images.length) {
        var strLen = strImages === "" ? 0 : strImages.split(",").length;

        if (strLen + images.length + files.length <= 3) {
          setImages([].concat(Object(C_Users_abith_Desktop_Dev_Apps_bikers_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(images), Object(C_Users_abith_Desktop_Dev_Apps_bikers_dashboard_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(files)));
        }
      } else {
        setImages(files);
      }
    }
  };

  var handleDrag = function handleDrag(e) {
    if (isDisabled) return;
    e.preventDefault();
    e.stopPropagation();
  };

  var handleDragIn = function handleDragIn(e) {
    if (isDisabled) return;
    e.preventDefault();
    e.stopPropagation();
    dragCounter++;

    if (e.dataTransfer.items) {
      setDrag(true);
    }
  };

  var handleDragOut = function handleDragOut(e) {
    if (isDisabled) return;
    e.preventDefault();
    e.stopPropagation();
    dragCounter--;

    if (dragCounter === 0) {
      setDrag(false);
    }
  };

  var handleDrop = function handleDrop(e) {
    if (isDisabled) return;
    e.preventDefault();
    e.stopPropagation();
    setDrag(false);
    var reference;

    if (e.type == "drop") {
      reference = e.dataTransfer;
    } else {
      reference = e.target;
    }

    if (reference.files && reference.files.length > 0) {
      if (e.type == "drop") reference.clearData();
      validateFiles(reference.files);
      dragCounter = 0;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [status != "Closed" && showButton && (strImages.length || images.length) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
      size: "2x",
      className: "cursor-pointer text-grey",
      onClick: function onClick() {
        return handleManualInput();
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "w-full h-72 inline-block relative border-2 border-black \n      bg-pinkish box-border overflow-x-hidden overflow-y-hidden \n      whitespace-nowrap ",
      ref: dropRef,
      onDrop: function onDrop(e) {
        return handleDrop(e);
      },
      onDragEnter: function onDragEnter(e) {
        return handleDragIn(e);
      },
      onDragLeave: function onDragLeave(e) {
        return handleDragOut(e);
      },
      onDragOver: function onDragOver(e) {
        return handleDrag(e);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "file",
        ref: manualInput,
        className: "opacity-0 pointer-events-none hidden",
        onChange: function onChange(e) {
          return handleDrop(e);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), drag ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          border: "dashed grey 4px",
          backgroundColor: "rgba(255,255,255,.8)",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            position: "absolute",
            top: "50%",
            right: 0,
            left: 0,
            textAlign: "center",
            color: "grey",
            fontSize: 36
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: "Drop Photo Here"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }, this) : status !== "Closed" && !strImages.length && !images.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlusCircle"],
          size: "6x",
          className: "text-grey absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ",
          onClick: function onClick() {
            return handleManualInput();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer",
          children: "Drag a file or click here to Upload (Max 3)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }, this)]
      }, void 0, true) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-around flex-row",
        children: [strImages.length ? strImages.split(",").map(function (img, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "my-auto h-72 w-1/4 inline-block mx-3 border-2 relative",
            children: [status !== "Closed" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "absolute bg-grey z-10 ".concat(isDisabled ? " cursor-default" : "hover:opacity-100 focus:opacity-100 cursor-pointer", " opacity-0 w-full h-full"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                className: "text-700 text-3xl",
                type: "button",
                "aria-label": "Close",
                onClick: function onClick() {
                  handleDeleteImg(img, jobId);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 27
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 23
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "https://bikers-test.herokuapp.com/static/" + img.slice(8),
              className: "h-full object-cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 21
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 19
          }, _this);
        }) : null, images.length ? images.map(function (img, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "my-auto h-72 w-1/4 inline-block mx-3 border-2 relative",
            children: [status !== "Closed" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "absolute bg-grey z-10 ".concat(isDisabled ? "cursor-default" : "focus:opacity-100 hover:opacity-100 cursor-pointer", " bg-opacity-50 opacity-0 w-full h-full"),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                onClick: function onClick() {
                  handleDeleteBlobImg(img);
                },
                className: "text-700 text-3xl",
                type: "button",
                "aria-label": "Close",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  "aria-hidden": "true",
                  children: "\xD7"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 249,
                  columnNumber: 27
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 23
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: URL.createObjectURL(img),
              className: "h-full object-cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 21
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 19
          }, _this);
        }) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Uploader, "P6s49NpFe996o04gs5LIDjIjjl0=");

_c = Uploader;

var _c;

$RefreshReg$(_c, "Uploader");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRlci50c3giXSwibmFtZXMiOlsiZHJhZ0NvdW50ZXIiLCJVcGxvYWRlciIsImltYWdlcyIsInNldEltYWdlcyIsImlzRGlzYWJsZWQiLCJqb2JJZCIsInN0ckltYWdlcyIsInNldFN0ckltYWdlcyIsInN0YXR1cyIsInNob3dCdXR0b24iLCJ1c2VTdGF0ZSIsImRyYWciLCJzZXREcmFnIiwiZHJvcFJlZiIsInVzZVJlZiIsIm1hbnVhbElucHV0IiwiaGFuZGxlTWFudWFsSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVEZWxldGVJbWciLCJpbWFnZSIsImpvYl9pZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImhhbmRsZURlbGV0ZUJsb2JJbWciLCJrZXkiLCJpbmRleCIsImluZGV4T2YiLCJ0ZW1wIiwic3BsaWNlIiwidmFsaWRhdGVGaWxlcyIsImZpbGVzIiwic29tZSIsImYiLCJ0eXBlIiwiaW5jbHVkZXMiLCJhbGVydCIsImxlbmd0aCIsInN0ckxlbiIsInNwbGl0IiwiaGFuZGxlRHJhZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZURyYWdJbiIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiaGFuZGxlRHJhZ091dCIsImhhbmRsZURyb3AiLCJyZWZlcmVuY2UiLCJ0YXJnZXQiLCJjbGVhckRhdGEiLCJmYVBsdXNDaXJjbGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsInRleHRBbGlnbiIsImNvbG9yIiwiZm9udFNpemUiLCJtYXAiLCJpbWciLCJpIiwic2xpY2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsV0FBVyxHQUFHLENBQWxCO0FBV2UsU0FBU0MsUUFBVCxPQVNTO0FBQUE7O0FBQUE7O0FBQUEsTUFSdEJDLE1BUXNCLFFBUnRCQSxNQVFzQjtBQUFBLE1BUHRCQyxTQU9zQixRQVB0QkEsU0FPc0I7QUFBQSxNQU50QkMsVUFNc0IsUUFOdEJBLFVBTXNCO0FBQUEsTUFMdEJDLEtBS3NCLFFBTHRCQSxLQUtzQjtBQUFBLE1BSnRCQyxTQUlzQixRQUp0QkEsU0FJc0I7QUFBQSxNQUh0QkMsWUFHc0IsUUFIdEJBLFlBR3NCO0FBQUEseUJBRnRCQyxNQUVzQjtBQUFBLE1BRnRCQSxNQUVzQiw0QkFGYixZQUVhO0FBQUEsNkJBRHRCQyxVQUNzQjtBQUFBLE1BRHRCQSxVQUNzQixnQ0FEVCxJQUNTOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUV0QixNQUFJQyxPQUFPLEdBQUdDLG9EQUFNLEVBQXBCO0FBQ0EsTUFBSUMsV0FBVyxHQUFHRCxvREFBTSxFQUF4Qjs7QUFFQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDOUJELGVBQVcsQ0FBQ0UsT0FBWixDQUFvQkMsS0FBcEI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ3pDQyxTQUFLLENBQUMseUNBQUQsRUFBNEM7QUFDL0NDLFlBQU0sRUFBRSxRQUR1QztBQUUvQ0MsYUFBTyxFQUFFO0FBQ1BDLGNBQU0sRUFBRSxrQkFERDtBQUVQLHdCQUFnQixrQkFGVDtBQUdQSixjQUFNLEVBQUVBLE1BSEQ7QUFJUEQsYUFBSyxFQUFFQSxLQUpBO0FBS1BsQixjQUFNLEVBQUVJO0FBTEQ7QUFGc0MsS0FBNUMsQ0FBTCxDQVVHb0IsSUFWSCxDQVVRLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBVlIsRUFXR0YsSUFYSCxDQVdRLFVBQUNHLElBQUQsRUFBVTtBQUNkdEIsa0JBQVksQ0FBQ3NCLElBQUksQ0FBQyxRQUFELENBQUwsQ0FBWjtBQUNELEtBYkgsV0FjUyxVQUFDQyxHQUFELEVBQVMsQ0FBRSxDQWRwQjtBQWVELEdBaEJEOztBQWlCQSxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEdBQUQsRUFBUztBQUNuQyxRQUFNQyxLQUFLLEdBQUcvQixNQUFNLENBQUNnQyxPQUFQLENBQWVGLEdBQWYsQ0FBZDs7QUFDQSxRQUFJRyxJQUFJLEdBQUcseUpBQUlqQyxNQUFQLENBQVI7O0FBQ0EsUUFBSStCLEtBQUssR0FBRyxDQUFDLENBQWIsRUFBZ0I7QUFDZEUsVUFBSSxDQUFDQyxNQUFMLENBQVlILEtBQVosRUFBbUIsQ0FBbkI7QUFDRDs7QUFDRDlCLGFBQVMsQ0FBQ2dDLElBQUQsQ0FBVDtBQUNELEdBUEQ7O0FBU0EsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxLQUFELEVBQWdCO0FBQ3BDQSxTQUFLLEdBQUcseUpBQUlBLEtBQVAsQ0FBTDs7QUFFQSxRQUNFQSxLQUFLLENBQUNDLElBQU4sQ0FBVyxVQUFDQyxDQUFEO0FBQUEsYUFBTyxDQUFDQSxDQUFDLENBQUNDLElBQUYsQ0FBT0MsUUFBUCxDQUFnQixPQUFoQixDQUFELElBQTZCRixDQUFDLENBQUNDLElBQUYsQ0FBT0MsUUFBUCxDQUFnQixLQUFoQixDQUFwQztBQUFBLEtBQVgsQ0FERixFQUVFO0FBQ0FDLFdBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0QsS0FKRCxNQUlPO0FBQ0wsVUFBSXpDLE1BQU0sQ0FBQzBDLE1BQVgsRUFBbUI7QUFDakIsWUFBTUMsTUFBTSxHQUFHdkMsU0FBUyxLQUFLLEVBQWQsR0FBbUIsQ0FBbkIsR0FBdUJBLFNBQVMsQ0FBQ3dDLEtBQVYsQ0FBZ0IsR0FBaEIsRUFBcUJGLE1BQTNEOztBQUNBLFlBQUlDLE1BQU0sR0FBRzNDLE1BQU0sQ0FBQzBDLE1BQWhCLEdBQXlCTixLQUFLLENBQUNNLE1BQS9CLElBQXlDLENBQTdDLEVBQWdEO0FBQzlDekMsbUJBQVMsb0tBQUtELE1BQUwsNEpBQWdCb0MsS0FBaEIsR0FBVDtBQUNEO0FBQ0YsT0FMRCxNQUtPO0FBQ0xuQyxpQkFBUyxDQUFDbUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRjtBQUNGLEdBakJEOztBQWtCQSxNQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDeEIsUUFBSTVDLFVBQUosRUFBZ0I7QUFDaEI0QyxLQUFDLENBQUNDLGNBQUY7QUFDQUQsS0FBQyxDQUFDRSxlQUFGO0FBQ0QsR0FKRDs7QUFLQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDSCxDQUFELEVBQU87QUFDMUIsUUFBSTVDLFVBQUosRUFBZ0I7QUFDaEI0QyxLQUFDLENBQUNDLGNBQUY7QUFDQUQsS0FBQyxDQUFDRSxlQUFGO0FBQ0FsRCxlQUFXOztBQUNYLFFBQUlnRCxDQUFDLENBQUNJLFlBQUYsQ0FBZUMsS0FBbkIsRUFBMEI7QUFDeEJ6QyxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7QUFDRixHQVJEOztBQVNBLE1BQU0wQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNOLENBQUQsRUFBTztBQUMzQixRQUFJNUMsVUFBSixFQUFnQjtBQUNoQjRDLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBRCxLQUFDLENBQUNFLGVBQUY7QUFDQWxELGVBQVc7O0FBQ1gsUUFBSUEsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ3JCWSxhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0Q7QUFDRixHQVJEOztBQVNBLE1BQU0yQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDUCxDQUFELEVBQU87QUFDeEIsUUFBSTVDLFVBQUosRUFBZ0I7QUFDaEI0QyxLQUFDLENBQUNDLGNBQUY7QUFDQUQsS0FBQyxDQUFDRSxlQUFGO0FBQ0F0QyxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0EsUUFBSTRDLFNBQUo7O0FBQ0EsUUFBSVIsQ0FBQyxDQUFDUCxJQUFGLElBQVUsTUFBZCxFQUFzQjtBQUNwQmUsZUFBUyxHQUFHUixDQUFDLENBQUNJLFlBQWQ7QUFDRCxLQUZELE1BRU87QUFDTEksZUFBUyxHQUFHUixDQUFDLENBQUNTLE1BQWQ7QUFDRDs7QUFDRCxRQUFJRCxTQUFTLENBQUNsQixLQUFWLElBQW1Ca0IsU0FBUyxDQUFDbEIsS0FBVixDQUFnQk0sTUFBaEIsR0FBeUIsQ0FBaEQsRUFBbUQ7QUFDakQsVUFBSUksQ0FBQyxDQUFDUCxJQUFGLElBQVUsTUFBZCxFQUFzQmUsU0FBUyxDQUFDRSxTQUFWO0FBQ3RCckIsbUJBQWEsQ0FBQ21CLFNBQVMsQ0FBQ2xCLEtBQVgsQ0FBYjtBQUNBdEMsaUJBQVcsR0FBRyxDQUFkO0FBQ0Q7QUFDRixHQWhCRDs7QUFpQkEsc0JBQ0U7QUFBQSxlQUNHUSxNQUFNLElBQUksUUFBVixJQUNEQyxVQURDLEtBRUFILFNBQVMsQ0FBQ3NDLE1BQVYsSUFBb0IxQyxNQUFNLENBQUMwQyxNQUYzQixpQkFHQyxxRUFBQyw4RUFBRDtBQUNFLFVBQUksRUFBRWUsOEVBRFI7QUFFRSxVQUFJLEVBQUMsSUFGUDtBQUdFLGVBQVMsRUFBQywwQkFIWjtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU0zQyxpQkFBaUIsRUFBdkI7QUFBQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRCxHQVNHLElBVk4sZUFXRTtBQUNFLGVBQVMsd0pBRFg7QUFJRSxTQUFHLEVBQUVILE9BSlA7QUFLRSxZQUFNLEVBQUUsZ0JBQUNtQyxDQUFEO0FBQUEsZUFBT08sVUFBVSxDQUFDUCxDQUFELENBQWpCO0FBQUEsT0FMVjtBQU1FLGlCQUFXLEVBQUUscUJBQUNBLENBQUQ7QUFBQSxlQUFPRyxZQUFZLENBQUNILENBQUQsQ0FBbkI7QUFBQSxPQU5mO0FBT0UsaUJBQVcsRUFBRSxxQkFBQ0EsQ0FBRDtBQUFBLGVBQU9NLGFBQWEsQ0FBQ04sQ0FBRCxDQUFwQjtBQUFBLE9BUGY7QUFRRSxnQkFBVSxFQUFFLG9CQUFDQSxDQUFEO0FBQUEsZUFBT0QsVUFBVSxDQUFDQyxDQUFELENBQWpCO0FBQUEsT0FSZDtBQUFBLDhCQVVFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxXQUFHLEVBQUVqQyxXQUZQO0FBR0UsaUJBQVMsRUFBQyxzQ0FIWjtBQUlFLGdCQUFRLEVBQUUsa0JBQUNpQyxDQUFEO0FBQUEsaUJBQU9PLFVBQVUsQ0FBQ1AsQ0FBRCxDQUFqQjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLEVBZ0JHckMsSUFBSSxnQkFDSDtBQUNFLGFBQUssRUFBRTtBQUNMaUQsZ0JBQU0sRUFBRSxpQkFESDtBQUVMQyx5QkFBZSxFQUFFLHNCQUZaO0FBR0xDLGtCQUFRLEVBQUUsVUFITDtBQUlMQyxhQUFHLEVBQUUsQ0FKQTtBQUtMQyxnQkFBTSxFQUFFLENBTEg7QUFNTEMsY0FBSSxFQUFFLENBTkQ7QUFPTEMsZUFBSyxFQUFFLENBUEY7QUFRTEMsZ0JBQU0sRUFBRTtBQVJILFNBRFQ7QUFBQSwrQkFZRTtBQUNFLGVBQUssRUFBRTtBQUNMTCxvQkFBUSxFQUFFLFVBREw7QUFFTEMsZUFBRyxFQUFFLEtBRkE7QUFHTEcsaUJBQUssRUFBRSxDQUhGO0FBSUxELGdCQUFJLEVBQUUsQ0FKRDtBQUtMRyxxQkFBUyxFQUFFLFFBTE47QUFNTEMsaUJBQUssRUFBRSxNQU5GO0FBT0xDLG9CQUFRLEVBQUU7QUFQTCxXQURUO0FBQUEsaUNBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURHLEdBMkJEOUQsTUFBTSxLQUFLLFFBQVgsSUFBdUIsQ0FBQ0YsU0FBUyxDQUFDc0MsTUFBbEMsSUFBNEMsQ0FBQzFDLE1BQU0sQ0FBQzBDLE1BQXBELGdCQUNGO0FBQUEsZ0NBQ0UscUVBQUMsOEVBQUQ7QUFDRSxjQUFJLEVBQUVlLDhFQURSO0FBRUUsY0FBSSxFQUFDLElBRlA7QUFHRSxtQkFBUyxFQUFDLGlHQUhaO0FBSUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNM0MsaUJBQWlCLEVBQXZCO0FBQUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBT0U7QUFBRyxtQkFBUyxFQUFDLHNGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUEsc0JBREUsR0FZQSxJQXZETixlQXdERTtBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSxtQkFDR1YsU0FBUyxDQUFDc0MsTUFBVixHQUNHdEMsU0FBUyxDQUFDd0MsS0FBVixDQUFnQixHQUFoQixFQUFxQnlCLEdBQXJCLENBQXlCLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ25DLDhCQUNFO0FBQ0UscUJBQVMsRUFBQyx3REFEWjtBQUFBLHVCQUlHakUsTUFBTSxLQUFLLFFBQVgsZ0JBQ0M7QUFDRSx1QkFBUyxrQ0FDUEosVUFBVSxHQUNOLGlCQURNLEdBRU4sb0RBSEcsNkJBRFg7QUFBQSxxQ0FPRTtBQUNFLHlCQUFTLEVBQUMsbUJBRFo7QUFFRSxvQkFBSSxFQUFDLFFBRlA7QUFHRSw4QkFBVyxPQUhiO0FBSUUsdUJBQU8sRUFBRSxtQkFBTTtBQUNiZSxpQ0FBZSxDQUFDcUQsR0FBRCxFQUFNbkUsS0FBTixDQUFmO0FBQ0QsaUJBTkg7QUFBQSx1Q0FRRTtBQUFNLGlDQUFZLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsR0FtQkcsSUF2Qk4sZUF5QkU7QUFDRSxpQkFBRyxFQUNELDhDQUNBbUUsR0FBRyxDQUFDRSxLQUFKLENBQVUsQ0FBVixDQUhKO0FBS0UsdUJBQVMsRUFBQztBQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJGO0FBQUEsYUFFT0QsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBbUNELFNBcENELENBREgsR0FzQ0csSUF2Q04sRUF3Q0d2RSxNQUFNLENBQUMwQyxNQUFQLEdBQ0cxQyxNQUFNLENBQUNxRSxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDckIsOEJBQ0U7QUFDRSxxQkFBUyxFQUFDLHdEQURaO0FBQUEsdUJBSUdqRSxNQUFNLEtBQUssUUFBWCxnQkFDQztBQUNFLHVCQUFTLGtDQUNQSixVQUFVLEdBQ04sZ0JBRE0sR0FFTixvREFIRywyQ0FEWDtBQUFBLHFDQU9FO0FBQ0UsdUJBQU8sRUFBRSxtQkFBTTtBQUNiMkIscUNBQW1CLENBQUN5QyxHQUFELENBQW5CO0FBQ0QsaUJBSEg7QUFJRSx5QkFBUyxFQUFDLG1CQUpaO0FBS0Usb0JBQUksRUFBQyxRQUxQO0FBTUUsOEJBQVcsT0FOYjtBQUFBLHVDQVFFO0FBQU0saUNBQVksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxHQW1CRyxJQXZCTixlQXdCRTtBQUNFLGlCQUFHLEVBQUVHLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkosR0FBcEIsQ0FEUDtBQUVFLHVCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhCRjtBQUFBLGFBRU9DLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQStCRCxTQWhDRCxDQURILEdBa0NHLElBMUVOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBLGtCQURGO0FBbUpEOztHQXpQdUJ4RSxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RhdGFiYXNlLjllYzljNzdmMmM3MzY4NjZlMzQ1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFQbHVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxubGV0IGRyYWdDb3VudGVyID0gMDtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBzZXRJbWFnZXM6IEZ1bmN0aW9uO1xyXG4gIHNldFN0ckltYWdlczogRnVuY3Rpb247XHJcbiAgaW1hZ2VzOiBBcnJheTxGaWxlPjtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIGpvYklkOiBudW1iZXI7XHJcbiAgc3RySW1hZ2VzOiBzdHJpbmc7XHJcbiAgc3RhdHVzPzogc3RyaW5nO1xyXG4gIHNob3dCdXR0b24/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKHtcclxuICBpbWFnZXMsXHJcbiAgc2V0SW1hZ2VzLFxyXG4gIGlzRGlzYWJsZWQsXHJcbiAgam9iSWQsXHJcbiAgc3RySW1hZ2VzLFxyXG4gIHNldFN0ckltYWdlcyxcclxuICBzdGF0dXMgPSBcIkNoZWNrZWQgaW5cIixcclxuICBzaG93QnV0dG9uID0gdHJ1ZSxcclxufTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtkcmFnLCBzZXREcmFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgZHJvcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBsZXQgbWFudWFsSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWFudWFsSW5wdXQgPSAoKSA9PiB7XHJcbiAgICBtYW51YWxJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlSW1nID0gKGltYWdlLCBqb2JfaWQpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9iaWtlcnMtdGVzdC5oZXJva3VhcHAuY29tL2ltYWdlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBqb2JfaWQ6IGpvYl9pZCxcclxuICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgaW1hZ2VzOiBzdHJJbWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFN0ckltYWdlcyhkYXRhW1wiaW1hZ2VzXCJdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUJsb2JJbWcgPSAoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IGltYWdlcy5pbmRleE9mKGtleSk7XHJcbiAgICBsZXQgdGVtcCA9IFsuLi5pbWFnZXNdO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGVtcC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgc2V0SW1hZ2VzKHRlbXApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlRmlsZXMgPSAoZmlsZXM6IGFueSkgPT4ge1xyXG4gICAgZmlsZXMgPSBbLi4uZmlsZXNdO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgZmlsZXMuc29tZSgoZikgPT4gIWYudHlwZS5pbmNsdWRlcyhcImltYWdlXCIpIHx8IGYudHlwZS5pbmNsdWRlcyhcImdpZlwiKSlcclxuICAgICkge1xyXG4gICAgICBhbGVydChcIlBsZWFzZSBvbmx5IGRyb3AgaW4gaW1hZ2VzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBzdHJMZW4gPSBzdHJJbWFnZXMgPT09IFwiXCIgPyAwIDogc3RySW1hZ2VzLnNwbGl0KFwiLFwiKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHN0ckxlbiArIGltYWdlcy5sZW5ndGggKyBmaWxlcy5sZW5ndGggPD0gMykge1xyXG4gICAgICAgICAgc2V0SW1hZ2VzKFsuLi5pbWFnZXMsIC4uLmZpbGVzXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEltYWdlcyhmaWxlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmFnSW4gPSAoZSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkcmFnQ291bnRlcisrO1xyXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XHJcbiAgICAgIHNldERyYWcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmFnT3V0ID0gKGUpID0+IHtcclxuICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZHJhZ0NvdW50ZXItLTtcclxuICAgIGlmIChkcmFnQ291bnRlciA9PT0gMCkge1xyXG4gICAgICBzZXREcmFnKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBzZXREcmFnKGZhbHNlKTtcclxuICAgIGxldCByZWZlcmVuY2U6IGFueTtcclxuICAgIGlmIChlLnR5cGUgPT0gXCJkcm9wXCIpIHtcclxuICAgICAgcmVmZXJlbmNlID0gZS5kYXRhVHJhbnNmZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWZlcmVuY2UgPSBlLnRhcmdldDtcclxuICAgIH1cclxuICAgIGlmIChyZWZlcmVuY2UuZmlsZXMgJiYgcmVmZXJlbmNlLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKGUudHlwZSA9PSBcImRyb3BcIikgcmVmZXJlbmNlLmNsZWFyRGF0YSgpO1xyXG4gICAgICB2YWxpZGF0ZUZpbGVzKHJlZmVyZW5jZS5maWxlcyk7XHJcbiAgICAgIGRyYWdDb3VudGVyID0gMDtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7c3RhdHVzICE9IFwiQ2xvc2VkXCIgJiZcclxuICAgICAgc2hvd0J1dHRvbiAmJlxyXG4gICAgICAoc3RySW1hZ2VzLmxlbmd0aCB8fCBpbWFnZXMubGVuZ3RoKSA/IChcclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICBpY29uPXtmYVBsdXNDaXJjbGV9XHJcbiAgICAgICAgICBzaXplPVwiMnhcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1ncmV5XCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1hbnVhbElucHV0KCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgaC03MiBpbmxpbmUtYmxvY2sgcmVsYXRpdmUgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIFxyXG4gICAgICBiZy1waW5raXNoIGJveC1ib3JkZXIgb3ZlcmZsb3cteC1oaWRkZW4gb3ZlcmZsb3cteS1oaWRkZW4gXHJcbiAgICAgIHdoaXRlc3BhY2Utbm93cmFwIGB9XHJcbiAgICAgICAgcmVmPXtkcm9wUmVmfVxyXG4gICAgICAgIG9uRHJvcD17KGUpID0+IGhhbmRsZURyb3AoZSl9XHJcbiAgICAgICAgb25EcmFnRW50ZXI9eyhlKSA9PiBoYW5kbGVEcmFnSW4oZSl9XHJcbiAgICAgICAgb25EcmFnTGVhdmU9eyhlKSA9PiBoYW5kbGVEcmFnT3V0KGUpfVxyXG4gICAgICAgIG9uRHJhZ092ZXI9eyhlKSA9PiBoYW5kbGVEcmFnKGUpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICByZWY9e21hbnVhbElucHV0fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS0wIHBvaW50ZXItZXZlbnRzLW5vbmUgaGlkZGVuXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlRHJvcChlKX1cclxuICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICB7ZHJhZyA/IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBib3JkZXI6IFwiZGFzaGVkIGdyZXkgNHB4XCIsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjU1LDI1NSwyNTUsLjgpXCIsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgekluZGV4OiA5OTk5LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJncmV5XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXY+RHJvcCBQaG90byBIZXJlPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IHN0YXR1cyAhPT0gXCJDbG9zZWRcIiAmJiAhc3RySW1hZ2VzLmxlbmd0aCAmJiAhaW1hZ2VzLmxlbmd0aCA/IChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICBpY29uPXtmYVBsdXNDaXJjbGV9XHJcbiAgICAgICAgICAgICAgc2l6ZT1cIjZ4XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZXkgYWJzb2x1dGUgdG9wLTEvMiBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIGN1cnNvci1wb2ludGVyIFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWFudWFsSW5wdXQoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTMvNCBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiAtdHJhbnNsYXRlLXktMS8yIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICAgICAgRHJhZyBhIGZpbGUgb3IgY2xpY2sgaGVyZSB0byBVcGxvYWQgKE1heCAzKVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgZmxleC1yb3dcIj5cclxuICAgICAgICAgIHtzdHJJbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgICAgID8gc3RySW1hZ2VzLnNwbGl0KFwiLFwiKS5tYXAoKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWF1dG8gaC03MiB3LTEvNCBpbmxpbmUtYmxvY2sgbXgtMyBib3JkZXItMiByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3N0YXR1cyAhPT0gXCJDbG9zZWRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctZ3JleSB6LTEwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIiBjdXJzb3ItZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaG92ZXI6b3BhY2l0eS0xMDAgZm9jdXM6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IG9wYWNpdHktMCB3LWZ1bGwgaC1mdWxsYH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNzAwIHRleHQtM3hsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZUltZyhpbWcsIGpvYklkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9iaWtlcnMtdGVzdC5oZXJva3VhcHAuY29tL3N0YXRpYy9cIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zbGljZSg4KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICAgIHtpbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgICAgID8gaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktYXV0byBoLTcyIHctMS80IGlubGluZS1ibG9jayBteC0zIGJvcmRlci0yIHJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzICE9PSBcIkNsb3NlZFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1ncmV5IHotMTAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiY3Vyc29yLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvY3VzOm9wYWNpdHktMTAwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBiZy1vcGFjaXR5LTUwIG9wYWNpdHktMCB3LWZ1bGwgaC1mdWxsYH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZUJsb2JJbWcoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNzAwIHRleHQtM3hsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+w5c8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGltZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==