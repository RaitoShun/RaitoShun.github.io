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

  console.log(strImages);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRlci50c3giXSwibmFtZXMiOlsiZHJhZ0NvdW50ZXIiLCJVcGxvYWRlciIsImltYWdlcyIsInNldEltYWdlcyIsImlzRGlzYWJsZWQiLCJqb2JJZCIsInN0ckltYWdlcyIsInNldFN0ckltYWdlcyIsInN0YXR1cyIsInNob3dCdXR0b24iLCJ1c2VTdGF0ZSIsImRyYWciLCJzZXREcmFnIiwiZHJvcFJlZiIsInVzZVJlZiIsIm1hbnVhbElucHV0IiwiaGFuZGxlTWFudWFsSW5wdXQiLCJjdXJyZW50IiwiY2xpY2siLCJoYW5kbGVEZWxldGVJbWciLCJpbWFnZSIsImpvYl9pZCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImhhbmRsZURlbGV0ZUJsb2JJbWciLCJrZXkiLCJpbmRleCIsImluZGV4T2YiLCJ0ZW1wIiwic3BsaWNlIiwidmFsaWRhdGVGaWxlcyIsImZpbGVzIiwic29tZSIsImYiLCJ0eXBlIiwiaW5jbHVkZXMiLCJhbGVydCIsImxlbmd0aCIsInN0ckxlbiIsInNwbGl0IiwiaGFuZGxlRHJhZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsImhhbmRsZURyYWdJbiIsImRhdGFUcmFuc2ZlciIsIml0ZW1zIiwiaGFuZGxlRHJhZ091dCIsImhhbmRsZURyb3AiLCJyZWZlcmVuY2UiLCJ0YXJnZXQiLCJjbGVhckRhdGEiLCJjb25zb2xlIiwibG9nIiwiZmFQbHVzQ2lyY2xlIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJ6SW5kZXgiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImZvbnRTaXplIiwibWFwIiwiaW1nIiwiaSIsInNsaWNlIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIl0sIm1hcHBpbmdzIjoiOzs7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QVAsZ0JBQ0M7QUFBSyxpQkFBUyxFQUFDLDhCQUFmO0FBQUEsa0JBQ0cxQyxNQUFNLENBQUN1RSxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDdEIsOEJBQ0U7QUFDRSxxQkFBUyxFQUFDLHdEQURaO0FBQUEsdUJBSUduRSxNQUFNLEtBQUssUUFBWCxnQkFDQztBQUNFLHVCQUFTLGtDQUNQSixVQUFVLEdBQ04sZ0JBRE0sR0FFTixvREFIRywyQ0FEWDtBQUFBLHFDQU9FO0FBQ0UsdUJBQU8sRUFBRSxtQkFBTTtBQUNiMkIscUNBQW1CLENBQUMyQyxHQUFELENBQW5CO0FBQ0QsaUJBSEg7QUFJRSx5QkFBUyxFQUFDLG1CQUpaO0FBS0Usb0JBQUksRUFBQyxRQUxQO0FBTUUsOEJBQVcsT0FOYjtBQUFBLHVDQVFFO0FBQU0saUNBQVksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxHQW1CRyxJQXZCTixlQXdCRTtBQUNFLGlCQUFHLEVBQUVHLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkosR0FBcEIsQ0FEUDtBQUVFLHVCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXhCRjtBQUFBLGFBRU9DLENBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQStCRCxTQWhDQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxHQW9DRyxJQWpJTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBLGtCQURGO0FBaUpEOztHQXhQdUIxRSxROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RhdGFiYXNlLjgzZGJhZWQ4MDgzY2ZiZTUyZjY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgZmFQbHVzQ2lyY2xlIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5cclxubGV0IGRyYWdDb3VudGVyID0gMDtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBzZXRJbWFnZXM6IEZ1bmN0aW9uO1xyXG4gIHNldFN0ckltYWdlczogRnVuY3Rpb247XHJcbiAgaW1hZ2VzOiBBcnJheTxGaWxlPjtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIGpvYklkOiBudW1iZXI7XHJcbiAgc3RySW1hZ2VzOiBzdHJpbmc7XHJcbiAgc3RhdHVzPzogc3RyaW5nO1xyXG4gIHNob3dCdXR0b24/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVwbG9hZGVyKHtcclxuICBpbWFnZXMsXHJcbiAgc2V0SW1hZ2VzLFxyXG4gIGlzRGlzYWJsZWQsXHJcbiAgam9iSWQsXHJcbiAgc3RySW1hZ2VzLFxyXG4gIHNldFN0ckltYWdlcyxcclxuICBzdGF0dXMgPSBcIkNoZWNrZWQgaW5cIixcclxuICBzaG93QnV0dG9uID0gdHJ1ZSxcclxufTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IFtkcmFnLCBzZXREcmFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBsZXQgZHJvcFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4oKTtcclxuICBsZXQgbWFudWFsSW5wdXQgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTWFudWFsSW5wdXQgPSAoKSA9PiB7XHJcbiAgICBtYW51YWxJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlSW1nID0gKGltYWdlLCBqb2JfaWQpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9iaWtlcnMtdGVzdC5oZXJva3VhcHAuY29tL2ltYWdlXCIsIHtcclxuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBqb2JfaWQ6IGpvYl9pZCxcclxuICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgaW1hZ2VzOiBzdHJJbWFnZXMsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFN0ckltYWdlcyhkYXRhW1wiaW1hZ2VzXCJdKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHt9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZUJsb2JJbWcgPSAoa2V5KSA9PiB7XHJcbiAgICBjb25zdCBpbmRleCA9IGltYWdlcy5pbmRleE9mKGtleSk7XHJcbiAgICBsZXQgdGVtcCA9IFsuLi5pbWFnZXNdO1xyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGVtcC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gICAgc2V0SW1hZ2VzKHRlbXApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlRmlsZXMgPSAoZmlsZXM6IGFueSkgPT4ge1xyXG4gICAgZmlsZXMgPSBbLi4uZmlsZXNdO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgZmlsZXMuc29tZSgoZikgPT4gIWYudHlwZS5pbmNsdWRlcyhcImltYWdlXCIpIHx8IGYudHlwZS5pbmNsdWRlcyhcImdpZlwiKSlcclxuICAgICkge1xyXG4gICAgICBhbGVydChcIlBsZWFzZSBvbmx5IGRyb3AgaW4gaW1hZ2VzXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGltYWdlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBzdHJMZW4gPSBzdHJJbWFnZXMgPT09IFwiXCIgPyAwIDogc3RySW1hZ2VzLnNwbGl0KFwiLFwiKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHN0ckxlbiArIGltYWdlcy5sZW5ndGggKyBmaWxlcy5sZW5ndGggPD0gMykge1xyXG4gICAgICAgICAgc2V0SW1hZ2VzKFsuLi5pbWFnZXMsIC4uLmZpbGVzXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEltYWdlcyhmaWxlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyYWcgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmFnSW4gPSAoZSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBkcmFnQ291bnRlcisrO1xyXG4gICAgaWYgKGUuZGF0YVRyYW5zZmVyLml0ZW1zKSB7XHJcbiAgICAgIHNldERyYWcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmFnT3V0ID0gKGUpID0+IHtcclxuICAgIGlmIChpc0Rpc2FibGVkKSByZXR1cm47XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgZHJhZ0NvdW50ZXItLTtcclxuICAgIGlmIChkcmFnQ291bnRlciA9PT0gMCkge1xyXG4gICAgICBzZXREcmFnKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZURyb3AgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBzZXREcmFnKGZhbHNlKTtcclxuICAgIGxldCByZWZlcmVuY2U6IGFueTtcclxuICAgIGlmIChlLnR5cGUgPT0gXCJkcm9wXCIpIHtcclxuICAgICAgcmVmZXJlbmNlID0gZS5kYXRhVHJhbnNmZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWZlcmVuY2UgPSBlLnRhcmdldDtcclxuICAgIH1cclxuICAgIGlmIChyZWZlcmVuY2UuZmlsZXMgJiYgcmVmZXJlbmNlLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKGUudHlwZSA9PSBcImRyb3BcIikgcmVmZXJlbmNlLmNsZWFyRGF0YSgpO1xyXG4gICAgICB2YWxpZGF0ZUZpbGVzKHJlZmVyZW5jZS5maWxlcyk7XHJcbiAgICAgIGRyYWdDb3VudGVyID0gMDtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnNvbGUubG9nKHN0ckltYWdlcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtzdGF0dXMgIT0gXCJDbG9zZWRcIiAmJlxyXG4gICAgICBzaG93QnV0dG9uICYmXHJcbiAgICAgIChzdHJJbWFnZXMubGVuZ3RoIHx8IGltYWdlcy5sZW5ndGgpID8gKFxyXG4gICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgIGljb249e2ZhUGx1c0NpcmNsZX1cclxuICAgICAgICAgIHNpemU9XCIyeFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWdyZXlcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTWFudWFsSW5wdXQoKX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBoLTcyIGlubGluZS1ibG9jayByZWxhdGl2ZSBib3JkZXItMiBib3JkZXItYmxhY2sgXHJcbiAgICAgIGJnLXBpbmtpc2ggYm94LWJvcmRlciBvdmVyZmxvdy14LWhpZGRlbiBvdmVyZmxvdy15LWhpZGRlbiBcclxuICAgICAgd2hpdGVzcGFjZS1ub3dyYXAgYH1cclxuICAgICAgICByZWY9e2Ryb3BSZWZ9XHJcbiAgICAgICAgb25Ecm9wPXsoZSkgPT4gaGFuZGxlRHJvcChlKX1cclxuICAgICAgICBvbkRyYWdFbnRlcj17KGUpID0+IGhhbmRsZURyYWdJbihlKX1cclxuICAgICAgICBvbkRyYWdMZWF2ZT17KGUpID0+IGhhbmRsZURyYWdPdXQoZSl9XHJcbiAgICAgICAgb25EcmFnT3Zlcj17KGUpID0+IGhhbmRsZURyYWcoZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIHJlZj17bWFudWFsSW5wdXR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTAgcG9pbnRlci1ldmVudHMtbm9uZSBoaWRkZW5cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVEcm9wKGUpfVxyXG4gICAgICAgID48L2lucHV0PlxyXG4gICAgICAgIHtkcmFnID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogXCJkYXNoZWQgZ3JleSA0cHhcIixcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTUsMjU1LDI1NSwuOClcIixcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICByaWdodDogMCxcclxuICAgICAgICAgICAgICB6SW5kZXg6IDk5OTksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgICAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcImdyZXlcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj5Ecm9wIFBob3RvIEhlcmU8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogc3RhdHVzICE9PSBcIkNsb3NlZFwiICYmICFzdHJJbWFnZXMubGVuZ3RoICYmICFpbWFnZXMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIGljb249e2ZhUGx1c0NpcmNsZX1cclxuICAgICAgICAgICAgICBzaXplPVwiNnhcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JleSBhYnNvbHV0ZSB0b3AtMS8yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgY3Vyc29yLXBvaW50ZXIgXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVNYW51YWxJbnB1dCgpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMy80IGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIC10cmFuc2xhdGUteS0xLzIgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgICAgICAgICBEcmFnIGEgZmlsZSBvciBjbGljayBoZXJlIHRvIFVwbG9hZCAoTWF4IDMpXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICB7c3RySW1hZ2VzLmxlbmd0aFxyXG4gICAgICAgICAgPyBzdHJJbWFnZXMuc3BsaXQoXCIsXCIpLm1hcCgoaW1nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXktYXV0byBoLWZ1bGwgdy0xLzQgaW5saW5lLWJsb2NrIG14LTMgYm9yZGVyLTIgcmVsYXRpdmVcIlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtzdGF0dXMgIT09IFwiQ2xvc2VkXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYmctZ3JleSB6LTEwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiIGN1cnNvci1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiaG92ZXI6b3BhY2l0eS0xMDAgZm9jdXM6b3BhY2l0eS0xMDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfSBvcGFjaXR5LTAgdy1mdWxsIGgtZnVsbGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTcwMCB0ZXh0LTN4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlSW1nKGltZywgam9iSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiaHR0cHM6Ly9iaWtlcnMtdGVzdC5oZXJva3VhcHAuY29tXCIgKyBpbWcuc2xpY2UoOCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIG9iamVjdC1maWxsXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IG51bGx9XHJcbiAgICAgICAge2ltYWdlcy5sZW5ndGggPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1hcm91bmQgZmxleC1yb3dcIj5cclxuICAgICAgICAgICAge2ltYWdlcy5tYXAoKGltZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LWF1dG8gaC03MiB3LTEvNCBpbmxpbmUtYmxvY2sgbXgtMyBib3JkZXItMiByZWxhdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3N0YXR1cyAhPT0gXCJDbG9zZWRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBiZy1ncmV5IHotMTAgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjdXJzb3ItZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZvY3VzOm9wYWNpdHktMTAwIGhvdmVyOm9wYWNpdHktMTAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIH0gYmctb3BhY2l0eS01MCBvcGFjaXR5LTAgdy1mdWxsIGgtZnVsbGB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlQmxvYkltZyhpbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LTcwMCB0ZXh0LTN4bFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj7Dlzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17VVJMLmNyZWF0ZU9iamVjdFVSTChpbWcpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=