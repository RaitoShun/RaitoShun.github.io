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

  console.log("https://bikers-test.herokuapp.com/photos/" + strImages.slice(8));
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
      lineNumber: 124,
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
        lineNumber: 141,
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
            lineNumber: 171,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
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
          lineNumber: 176,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer",
          children: "Drag a file or click here to Upload (Max 3)"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 13
        }, this)]
      }, void 0, true) : null, strImages.length ? strImages.split(",").map(function (img, i) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "my-auto h-full w-1/4 inline-block mx-3 border-2 relative",
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
                lineNumber: 211,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 23
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 21
          }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "https://bikers-test.herokuapp.com" + img.slice(8),
            className: "h-full object-fill"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 19
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 17
        }, _this);
      }) : null, images.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "flex justify-around flex-row",
        children: images.map(function (img, i) {
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
                  lineNumber: 248,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 240,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 233,
              columnNumber: 21
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: URL.createObjectURL(img),
              className: "h-full object-cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 252,
              columnNumber: 19
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRlci50c3giXSwibmFtZXMiOlsiZHJhZ0NvdW50ZXIiLCJVcGxvYWRlciIsImltYWdlcyIsInNldEltYWdlcyIsImlzRGlzYWJsZWQiLCJqb2JJZCIsInN0ckltYWdlcyIsInNldFN0ckltYWdlcyIsInN0YXR1cyIsInNob3dCdXR0b24iLCJ1c2VTdGF0ZSIsImRyYWciLCJzZXREcmFnIiwiZHJvcFJlZiIsInVzZVJlZiIsIm1hbnVhbElucHV0IiwiaGFuZGxlTWFudWFsSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVEZWxldGVJbWciLCJpbWFnZSIsImpvYl9pZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImhhbmRsZURlbGV0ZUJsb2JJbWciLCJrZXkiLCJpbmRleCIsImluZGV4T2YiLCJ0ZW1wIiwic3BsaWNlIiwidmFsaWRhdGVGaWxlcyIsImZpbGVzIiwic29tZSIsImYiLCJ0eXBlIiwiaW5jbHVkZXMiLCJhbGVydCIsImxlbmd0aCIsInN0ckxlbiIsInNwbGl0IiwiaGFuZGxlRHJhZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZURyYWdJbiIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiaGFuZGxlRHJhZ091dCIsImhhbmRsZURyb3AiLCJyZWZlcmVuY2UiLCJ0YXJnZXQiLCJjbGVhckRhdGEiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJmYVBsdXNDaXJjbGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsInRleHRBbGlnbiIsImNvbG9yIiwiZm9udFNpemUiLCJtYXAiLCJpbWciLCJpIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOzs7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QURILEdBbUNHLElBNUZOLEVBNkZHMUUsTUFBTSxDQUFDMEMsTUFBUCxnQkFDQztBQUFLLGlCQUFTLEVBQUMsOEJBQWY7QUFBQSxrQkFDRzFDLE1BQU0sQ0FBQ3dFLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU1DLENBQU4sRUFBWTtBQUN0Qiw4QkFDRTtBQUNFLHFCQUFTLEVBQUMsd0RBRFo7QUFBQSx1QkFJR3BFLE1BQU0sS0FBSyxRQUFYLGdCQUNDO0FBQ0UsdUJBQVMsa0NBQ1BKLFVBQVUsR0FDTixnQkFETSxHQUVOLG9EQUhHLDJDQURYO0FBQUEscUNBT0U7QUFDRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2IyQixxQ0FBbUIsQ0FBQzRDLEdBQUQsQ0FBbkI7QUFDRCxpQkFISDtBQUlFLHlCQUFTLEVBQUMsbUJBSlo7QUFLRSxvQkFBSSxFQUFDLFFBTFA7QUFNRSw4QkFBVyxPQU5iO0FBQUEsdUNBUUU7QUFBTSxpQ0FBWSxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEdBbUJHLElBdkJOLGVBd0JFO0FBQ0UsaUJBQUcsRUFBRUUsR0FBRyxDQUFDQyxlQUFKLENBQW9CSCxHQUFwQixDQURQO0FBRUUsdUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBeEJGO0FBQUEsYUFFT0MsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBK0JELFNBaENBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEdBb0NHLElBaklOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUEsa0JBREY7QUFpSkQ7O0dBeFB1QjNFLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGF0YWJhc2UuY2FjYzU0OTQ3MWJhNGFkZGVkZWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBmYVBsdXNDaXJjbGUgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XHJcblxyXG5sZXQgZHJhZ0NvdW50ZXIgPSAwO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHNldEltYWdlczogRnVuY3Rpb247XHJcbiAgc2V0U3RySW1hZ2VzOiBGdW5jdGlvbjtcclxuICBpbWFnZXM6IEFycmF5PEZpbGU+O1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgam9iSWQ6IG51bWJlcjtcclxuICBzdHJJbWFnZXM6IHN0cmluZztcclxuICBzdGF0dXM/OiBzdHJpbmc7XHJcbiAgc2hvd0J1dHRvbj86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXBsb2FkZXIoe1xyXG4gIGltYWdlcyxcclxuICBzZXRJbWFnZXMsXHJcbiAgaXNEaXNhYmxlZCxcclxuICBqb2JJZCxcclxuICBzdHJJbWFnZXMsXHJcbiAgc2V0U3RySW1hZ2VzLFxyXG4gIHN0YXR1cyA9IFwiQ2hlY2tlZCBpblwiLFxyXG4gIHNob3dCdXR0b24gPSB0cnVlLFxyXG59OiBQcm9wcyk6IFJlYWN0RWxlbWVudCB7XHJcbiAgY29uc3QgW2RyYWcsIHNldERyYWddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGxldCBkcm9wUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xyXG4gIGxldCBtYW51YWxJbnB1dCA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVNYW51YWxJbnB1dCA9ICgpID0+IHtcclxuICAgIG1hbnVhbElucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGVJbWcgPSAoaW1hZ2UsIGpvYl9pZCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb20vaW1hZ2VcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgIGpvYl9pZDogam9iX2lkLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSxcclxuICAgICAgICBpbWFnZXM6IHN0ckltYWdlcyxcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0U3RySW1hZ2VzKGRhdGFbXCJpbWFnZXNcIl0pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge30pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlQmxvYkltZyA9IChrZXkpID0+IHtcclxuICAgIGNvbnN0IGluZGV4ID0gaW1hZ2VzLmluZGV4T2Yoa2V5KTtcclxuICAgIGxldCB0ZW1wID0gWy4uLmltYWdlc107XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0ZW1wLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgICBzZXRJbWFnZXModGVtcCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGaWxlcyA9IChmaWxlczogYW55KSA9PiB7XHJcbiAgICBmaWxlcyA9IFsuLi5maWxlc107XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBmaWxlcy5zb21lKChmKSA9PiAhZi50eXBlLmluY2x1ZGVzKFwiaW1hZ2VcIikgfHwgZi50eXBlLmluY2x1ZGVzKFwiZ2lmXCIpKVxyXG4gICAgKSB7XHJcbiAgICAgIGFsZXJ0KFwiUGxlYXNlIG9ubHkgZHJvcCBpbiBpbWFnZXNcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoaW1hZ2VzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHN0ckxlbiA9IHN0ckltYWdlcyA9PT0gXCJcIiA/IDAgOiBzdHJJbWFnZXMuc3BsaXQoXCIsXCIpLmxlbmd0aDtcclxuICAgICAgICBpZiAoc3RyTGVuICsgaW1hZ2VzLmxlbmd0aCArIGZpbGVzLmxlbmd0aCA8PSAzKSB7XHJcbiAgICAgICAgICBzZXRJbWFnZXMoWy4uLmltYWdlcywgLi4uZmlsZXNdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SW1hZ2VzKGZpbGVzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRHJhZyA9IChlKSA9PiB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyYWdJbiA9IChlKSA9PiB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRyYWdDb3VudGVyKys7XHJcbiAgICBpZiAoZS5kYXRhVHJhbnNmZXIuaXRlbXMpIHtcclxuICAgICAgc2V0RHJhZyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyYWdPdXQgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkcmFnQ291bnRlci0tO1xyXG4gICAgaWYgKGRyYWdDb3VudGVyID09PSAwKSB7XHJcbiAgICAgIHNldERyYWcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRHJvcCA9IChlKSA9PiB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHNldERyYWcoZmFsc2UpO1xyXG4gICAgbGV0IHJlZmVyZW5jZTogYW55O1xyXG4gICAgaWYgKGUudHlwZSA9PSBcImRyb3BcIikge1xyXG4gICAgICByZWZlcmVuY2UgPSBlLmRhdGFUcmFuc2ZlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlZmVyZW5jZSA9IGUudGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgaWYgKHJlZmVyZW5jZS5maWxlcyAmJiByZWZlcmVuY2UuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAoZS50eXBlID09IFwiZHJvcFwiKSByZWZlcmVuY2UuY2xlYXJEYXRhKCk7XHJcbiAgICAgIHZhbGlkYXRlRmlsZXMocmVmZXJlbmNlLmZpbGVzKTtcclxuICAgICAgZHJhZ0NvdW50ZXIgPSAwO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coXCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb20vcGhvdG9zL1wiICsgc3RySW1hZ2VzLnNsaWNlKDgpKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3N0YXR1cyAhPSBcIkNsb3NlZFwiICYmXHJcbiAgICAgIHNob3dCdXR0b24gJiZcclxuICAgICAgKHN0ckltYWdlcy5sZW5ndGggfHwgaW1hZ2VzLmxlbmd0aCkgPyAoXHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj17ZmFQbHVzQ2lyY2xlfVxyXG4gICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtZ3JleVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYW51YWxJbnB1dCgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtNzIgaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvcmRlci0yIGJvcmRlci1ibGFjayBcclxuICAgICAgYmctcGlua2lzaCBib3gtYm9yZGVyIG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktaGlkZGVuIFxyXG4gICAgICB3aGl0ZXNwYWNlLW5vd3JhcCBgfVxyXG4gICAgICAgIHJlZj17ZHJvcFJlZn1cclxuICAgICAgICBvbkRyb3A9eyhlKSA9PiBoYW5kbGVEcm9wKGUpfVxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXsoZSkgPT4gaGFuZGxlRHJhZ0luKGUpfVxyXG4gICAgICAgIG9uRHJhZ0xlYXZlPXsoZSkgPT4gaGFuZGxlRHJhZ091dChlKX1cclxuICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gaGFuZGxlRHJhZyhlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgcmVmPXttYW51YWxJbnB1dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lIGhpZGRlblwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZURyb3AoZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAge2RyYWcgPyAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcImRhc2hlZCBncmV5IDRweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LC44KVwiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PkRyb3AgUGhvdG8gSGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBzdGF0dXMgIT09IFwiQ2xvc2VkXCIgJiYgIXN0ckltYWdlcy5sZW5ndGggJiYgIWltYWdlcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzQ2lyY2xlfVxyXG4gICAgICAgICAgICAgIHNpemU9XCI2eFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmV5IGFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBjdXJzb3ItcG9pbnRlciBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1hbnVhbElucHV0KCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zLzQgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgIERyYWcgYSBmaWxlIG9yIGNsaWNrIGhlcmUgdG8gVXBsb2FkIChNYXggMylcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgIHtzdHJJbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgICA/IHN0ckltYWdlcy5zcGxpdChcIixcIikubWFwKChpbWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS1hdXRvIGgtZnVsbCB3LTEvNCBpbmxpbmUtYmxvY2sgbXgtMyBib3JkZXItMiByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXR1cyAhPT0gXCJDbG9zZWRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1ncmV5IHotMTAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgY3Vyc29yLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJob3ZlcjpvcGFjaXR5LTEwMCBmb2N1czpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IG9wYWNpdHktMCB3LWZ1bGwgaC1mdWxsYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNzAwIHRleHQtM3hsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVJbWcoaW1nLCBqb2JJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb21cIiArIGltZy5zbGljZSg4KX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLWZ1bGwgb2JqZWN0LWZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogbnVsbH1cclxuICAgICAgICB7aW1hZ2VzLmxlbmd0aCA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWFyb3VuZCBmbGV4LXJvd1wiPlxyXG4gICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktYXV0byBoLTcyIHctMS80IGlubGluZS1ibG9jayBteC0zIGJvcmRlci0yIHJlbGF0aXZlXCJcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7c3RhdHVzICE9PSBcIkNsb3NlZFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGJnLWdyZXkgei0xMCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImN1cnNvci1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9jdXM6b3BhY2l0eS0xMDAgaG92ZXI6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBiZy1vcGFjaXR5LTUwIG9wYWNpdHktMCB3LWZ1bGwgaC1mdWxsYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVCbG9iSW1nKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNzAwIHRleHQtM3hsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtVUkwuY3JlYXRlT2JqZWN0VVJMKGltZyl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIG9iamVjdC1jb3ZlclwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==