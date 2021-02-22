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
                lineNumber: 210,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 23
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 21
          }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: img.slice(8),
            className: "h-full object-fill"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 19
          }, _this)]
        }, i, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
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
                  lineNumber: 244,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 236,
                columnNumber: 23
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 21
            }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: URL.createObjectURL(img),
              className: "h-full object-cover"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 248,
              columnNumber: 19
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 17
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }, this) : null]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRlci50c3giXSwibmFtZXMiOlsiZHJhZ0NvdW50ZXIiLCJVcGxvYWRlciIsImltYWdlcyIsInNldEltYWdlcyIsImlzRGlzYWJsZWQiLCJqb2JJZCIsInN0ckltYWdlcyIsInNldFN0ckltYWdlcyIsInN0YXR1cyIsInNob3dCdXR0b24iLCJ1c2VTdGF0ZSIsImRyYWciLCJzZXREcmFnIiwiZHJvcFJlZiIsInVzZVJlZiIsIm1hbnVhbElucHV0IiwiaGFuZGxlTWFudWFsSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVEZWxldGVJbWciLCJpbWFnZSIsImpvYl9pZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImhhbmRsZURlbGV0ZUJsb2JJbWciLCJrZXkiLCJpbmRleCIsImluZGV4T2YiLCJ0ZW1wIiwic3BsaWNlIiwidmFsaWRhdGVGaWxlcyIsImZpbGVzIiwic29tZSIsImYiLCJ0eXBlIiwiaW5jbHVkZXMiLCJhbGVydCIsImxlbmd0aCIsInN0ckxlbiIsInNwbGl0IiwiaGFuZGxlRHJhZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZURyYWdJbiIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiaGFuZGxlRHJhZ091dCIsImhhbmRsZURyb3AiLCJyZWZlcmVuY2UiLCJ0YXJnZXQiLCJjbGVhckRhdGEiLCJmYVBsdXNDaXJjbGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsInpJbmRleCIsInRleHRBbGlnbiIsImNvbG9yIiwiZm9udFNpemUiLCJtYXAiLCJpbWciLCJpIiwic2xpY2UiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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UCxDQUFXLFVBQUNDLEdBQUQsRUFBTUMsQ0FBTixFQUFZO0FBQ3RCLDhCQUNFO0FBQ0UscUJBQVMsRUFBQyx3REFEWjtBQUFBLHVCQUlHakUsTUFBTSxLQUFLLFFBQVgsZ0JBQ0M7QUFDRSx1QkFBUyxrQ0FDUEosVUFBVSxHQUNOLGdCQURNLEdBRU4sb0RBSEcsMkNBRFg7QUFBQSxxQ0FPRTtBQUNFLHVCQUFPLEVBQUUsbUJBQU07QUFDYjJCLHFDQUFtQixDQUFDeUMsR0FBRCxDQUFuQjtBQUNELGlCQUhIO0FBSUUseUJBQVMsRUFBQyxtQkFKWjtBQUtFLG9CQUFJLEVBQUMsUUFMUDtBQU1FLDhCQUFXLE9BTmI7QUFBQSx1Q0FRRTtBQUFNLGlDQUFZLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsR0FtQkcsSUF2Qk4sZUF3QkU7QUFDRSxpQkFBRyxFQUFFRyxHQUFHLENBQUNDLGVBQUosQ0FBb0JKLEdBQXBCLENBRFA7QUFFRSx1QkFBUyxFQUFDO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF4QkY7QUFBQSxhQUVPQyxDQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUErQkQsU0FoQ0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsR0FvQ0csSUE5SE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQSxrQkFERjtBQThJRDs7R0FwUHVCeEUsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXRhYmFzZS44ZjEwNmI1Mzc5ZjJlZGExZGU1MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IGZhUGx1c0NpcmNsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuXHJcbmxldCBkcmFnQ291bnRlciA9IDA7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgc2V0SW1hZ2VzOiBGdW5jdGlvbjtcclxuICBzZXRTdHJJbWFnZXM6IEZ1bmN0aW9uO1xyXG4gIGltYWdlczogQXJyYXk8RmlsZT47XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBqb2JJZDogbnVtYmVyO1xyXG4gIHN0ckltYWdlczogc3RyaW5nO1xyXG4gIHN0YXR1cz86IHN0cmluZztcclxuICBzaG93QnV0dG9uPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGxvYWRlcih7XHJcbiAgaW1hZ2VzLFxyXG4gIHNldEltYWdlcyxcclxuICBpc0Rpc2FibGVkLFxyXG4gIGpvYklkLFxyXG4gIHN0ckltYWdlcyxcclxuICBzZXRTdHJJbWFnZXMsXHJcbiAgc3RhdHVzID0gXCJDaGVja2VkIGluXCIsXHJcbiAgc2hvd0J1dHRvbiA9IHRydWUsXHJcbn06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBbZHJhZywgc2V0RHJhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgbGV0IGRyb3BSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KCk7XHJcbiAgbGV0IG1hbnVhbElucHV0ID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1hbnVhbElucHV0ID0gKCkgPT4ge1xyXG4gICAgbWFudWFsSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUltZyA9IChpbWFnZSwgam9iX2lkKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vYmlrZXJzLXRlc3QuaGVyb2t1YXBwLmNvbS9pbWFnZVwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgam9iX2lkOiBqb2JfaWQsXHJcbiAgICAgICAgaW1hZ2U6IGltYWdlLFxyXG4gICAgICAgIGltYWdlczogc3RySW1hZ2VzLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRTdHJJbWFnZXMoZGF0YVtcImltYWdlc1wiXSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7fSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEZWxldGVCbG9iSW1nID0gKGtleSkgPT4ge1xyXG4gICAgY29uc3QgaW5kZXggPSBpbWFnZXMuaW5kZXhPZihrZXkpO1xyXG4gICAgbGV0IHRlbXAgPSBbLi4uaW1hZ2VzXTtcclxuICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgIHRlbXAuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICAgIHNldEltYWdlcyh0ZW1wKTtcclxuICB9O1xyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZpbGVzID0gKGZpbGVzOiBhbnkpID0+IHtcclxuICAgIGZpbGVzID0gWy4uLmZpbGVzXTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGZpbGVzLnNvbWUoKGYpID0+ICFmLnR5cGUuaW5jbHVkZXMoXCJpbWFnZVwiKSB8fCBmLnR5cGUuaW5jbHVkZXMoXCJnaWZcIikpXHJcbiAgICApIHtcclxuICAgICAgYWxlcnQoXCJQbGVhc2Ugb25seSBkcm9wIGluIGltYWdlc1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpbWFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RyTGVuID0gc3RySW1hZ2VzID09PSBcIlwiID8gMCA6IHN0ckltYWdlcy5zcGxpdChcIixcIikubGVuZ3RoO1xyXG4gICAgICAgIGlmIChzdHJMZW4gKyBpbWFnZXMubGVuZ3RoICsgZmlsZXMubGVuZ3RoIDw9IDMpIHtcclxuICAgICAgICAgIHNldEltYWdlcyhbLi4uaW1hZ2VzLCAuLi5maWxlc10pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRJbWFnZXMoZmlsZXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmFnID0gKGUpID0+IHtcclxuICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRHJhZ0luID0gKGUpID0+IHtcclxuICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZHJhZ0NvdW50ZXIrKztcclxuICAgIGlmIChlLmRhdGFUcmFuc2Zlci5pdGVtcykge1xyXG4gICAgICBzZXREcmFnKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlRHJhZ091dCA9IChlKSA9PiB7XHJcbiAgICBpZiAoaXNEaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGRyYWdDb3VudGVyLS07XHJcbiAgICBpZiAoZHJhZ0NvdW50ZXIgPT09IDApIHtcclxuICAgICAgc2V0RHJhZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcm9wID0gKGUpID0+IHtcclxuICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgc2V0RHJhZyhmYWxzZSk7XHJcbiAgICBsZXQgcmVmZXJlbmNlOiBhbnk7XHJcbiAgICBpZiAoZS50eXBlID09IFwiZHJvcFwiKSB7XHJcbiAgICAgIHJlZmVyZW5jZSA9IGUuZGF0YVRyYW5zZmVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVmZXJlbmNlID0gZS50YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBpZiAocmVmZXJlbmNlLmZpbGVzICYmIHJlZmVyZW5jZS5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGlmIChlLnR5cGUgPT0gXCJkcm9wXCIpIHJlZmVyZW5jZS5jbGVhckRhdGEoKTtcclxuICAgICAgdmFsaWRhdGVGaWxlcyhyZWZlcmVuY2UuZmlsZXMpO1xyXG4gICAgICBkcmFnQ291bnRlciA9IDA7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge3N0YXR1cyAhPSBcIkNsb3NlZFwiICYmXHJcbiAgICAgIHNob3dCdXR0b24gJiZcclxuICAgICAgKHN0ckltYWdlcy5sZW5ndGggfHwgaW1hZ2VzLmxlbmd0aCkgPyAoXHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj17ZmFQbHVzQ2lyY2xlfVxyXG4gICAgICAgICAgc2l6ZT1cIjJ4XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIHRleHQtZ3JleVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYW51YWxJbnB1dCgpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtNzIgaW5saW5lLWJsb2NrIHJlbGF0aXZlIGJvcmRlci0yIGJvcmRlci1ibGFjayBcclxuICAgICAgYmctcGlua2lzaCBib3gtYm9yZGVyIG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktaGlkZGVuIFxyXG4gICAgICB3aGl0ZXNwYWNlLW5vd3JhcCBgfVxyXG4gICAgICAgIHJlZj17ZHJvcFJlZn1cclxuICAgICAgICBvbkRyb3A9eyhlKSA9PiBoYW5kbGVEcm9wKGUpfVxyXG4gICAgICAgIG9uRHJhZ0VudGVyPXsoZSkgPT4gaGFuZGxlRHJhZ0luKGUpfVxyXG4gICAgICAgIG9uRHJhZ0xlYXZlPXsoZSkgPT4gaGFuZGxlRHJhZ091dChlKX1cclxuICAgICAgICBvbkRyYWdPdmVyPXsoZSkgPT4gaGFuZGxlRHJhZyhlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgcmVmPXttYW51YWxJbnB1dH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMCBwb2ludGVyLWV2ZW50cy1ub25lIGhpZGRlblwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZURyb3AoZSl9XHJcbiAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAge2RyYWcgPyAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBcImRhc2hlZCBncmV5IDRweFwiLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LC44KVwiLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgIHpJbmRleDogOTk5OSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiZ3JleVwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PkRyb3AgUGhvdG8gSGVyZTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBzdGF0dXMgIT09IFwiQ2xvc2VkXCIgJiYgIXN0ckltYWdlcy5sZW5ndGggJiYgIWltYWdlcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgaWNvbj17ZmFQbHVzQ2lyY2xlfVxyXG4gICAgICAgICAgICAgIHNpemU9XCI2eFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmV5IGFic29sdXRlIHRvcC0xLzIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBjdXJzb3ItcG9pbnRlciBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU1hbnVhbElucHV0KCl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0zLzQgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgIERyYWcgYSBmaWxlIG9yIGNsaWNrIGhlcmUgdG8gVXBsb2FkIChNYXggMylcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgIHtzdHJJbWFnZXMubGVuZ3RoXHJcbiAgICAgICAgICA/IHN0ckltYWdlcy5zcGxpdChcIixcIikubWFwKChpbWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS1hdXRvIGgtZnVsbCB3LTEvNCBpbmxpbmUtYmxvY2sgbXgtMyBib3JkZXItMiByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXR1cyAhPT0gXCJDbG9zZWRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1ncmV5IHotMTAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgY3Vyc29yLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJob3ZlcjpvcGFjaXR5LTEwMCBmb2N1czpvcGFjaXR5LTEwMCBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IG9wYWNpdHktMCB3LWZ1bGwgaC1mdWxsYH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtNzAwIHRleHQtM3hsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVEZWxldGVJbWcoaW1nLCBqb2JJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPsOXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZy5zbGljZSg4KX0gY2xhc3NOYW1lPVwiaC1mdWxsIG9iamVjdC1maWxsXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAge2ltYWdlcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgZmxleC1yb3dcIj5cclxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWF1dG8gaC03MiB3LTEvNCBpbmxpbmUtYmxvY2sgbXgtMyBib3JkZXItMiByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXR1cyAhPT0gXCJDbG9zZWRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1ncmV5IHotMTAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjdXJzb3ItZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvY3VzOm9wYWNpdHktMTAwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0gYmctb3BhY2l0eS01MCBvcGFjaXR5LTAgdy1mdWxsIGgtZnVsbGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlQmxvYkltZyhpbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTcwMCB0ZXh0LTN4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChpbWcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=