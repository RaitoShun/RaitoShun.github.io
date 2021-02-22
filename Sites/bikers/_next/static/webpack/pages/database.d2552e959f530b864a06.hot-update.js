webpackHotUpdate_N_E("pages/database",{

/***/ "./components/Form.tsx":
/*!*****************************!*\
  !*** ./components/Form.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-to-print */ "./node_modules/react-to-print/lib/index.js");
/* harmony import */ var react_to_print__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_to_print__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button */ "./components/Button.tsx");
/* harmony import */ var _FormHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormHeader */ "./components/FormHeader.tsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Logo */ "./components/Logo.tsx");
/* harmony import */ var _Uploader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Uploader */ "./components/Uploader.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _schemas_formSchema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../schemas/formSchema */ "./schemas/formSchema.ts");
/* harmony import */ var _FormField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./FormField */ "./components/FormField.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TextArea */ "./components/TextArea.tsx");
/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DatePicker */ "./components/DatePicker.tsx");
/* harmony import */ var _PrintForm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PrintForm */ "./components/PrintForm.tsx");



var _jsxFileName = "C:\\Users\\abith\\Desktop\\Dev\\Apps\\bikers-dashboard\\components\\Form.tsx",
    _s = $RefreshSig$();
















var defaultProps = {
  customer_name_and_surname: "",
  contact_person: "",
  contact_number: "",
  email_address: "",
  kilometers: "",
  hours: "",
  vin_number: "",
  registration_number: "",
  make_and_model: "",
  customer_instructions: "",
  quote_number: "",
  quote_date: "",
  invoice_number: "",
  invoice_date: "",
  comments: "",
  collected: "",
  status: ""
};
function Form(_ref) {
  _s();

  var _this = this;

  var jobCard = _ref.jobCard;
  var componentToPrint = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      toggleModal = _useState[0],
      setToggleModal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("Posting..."),
      modalMsg = _useState2[0],
      setModalMsg = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      images = _useState3[0],
      setImages = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(jobCard ? jobCard.photos : ""),
      strImages = _useState4[0],
      setStrImages = _useState4[1];

  var handlePrint = Object(react_to_print__WEBPACK_IMPORTED_MODULE_3__["useReactToPrint"])({
    content: function content() {
      return componentToPrint.current;
    }
  });

  var checkClosed = function checkClosed() {
    return jobCard && jobCard.status === "Closed" ? true : false;
  };

  var handleClose = function handleClose() {
    setTimeout(function () {
      setToggleModal(true);
      setModalMsg("Closing Job...");
    }, 1000);
    fetch("http://localhost:5000/job/" + jobCard.job_number, {
      method: "PUT",
      body: JSON.stringify({
        status: "Closed"
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      setModalMsg("Closed!");
      setTimeout(function () {
        setToggleModal(false);
        router.push("/");
      }, 1200);
    })["catch"](function (err) {
      setModalMsg("Failed to Close Job");
      setTimeout(function () {
        setToggleModal(false);
        router.push("/");
      }, 1200);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    validationSchema: _schemas_formSchema__WEBPACK_IMPORTED_MODULE_10__["default"],
    initialValues: jobCard ? jobCard : defaultProps,
    onSubmit: function onSubmit(values, actions) {
      setModalMsg("Posting Job..");
      setToggleModal(true);
      var fd = new FormData();
      images.forEach(function (img) {
        fd.append("image", img);
      });
      fd.append("json-data", JSON.stringify(values));

      if (!jobCard) {
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("http://localhost:5000/job", fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "multipart/form-data"
          }
        }).then(function (res) {
          setModalMsg("Posted! Redirecting...");
          setTimeout(function () {
            router.push("/");
          }, 1200);
        })["catch"](function (err) {
          setModalMsg("Failed to Post Job.");
          setTimeout(function () {
            setToggleModal(false);
          }, 1200);
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.put("http://localhost:5000/job/" + jobCard.job_number, fd, {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "multipart/form-data"
          }
        }).then(function (res) {
          setModalMsg("Posted! Redirecting...");
          setTimeout(function () {
            router.push("/");
          }, 1200);
        })["catch"](function (err) {
          setModalMsg("Failed to Post Job.");
          setTimeout(function () {
            setToggleModal(false);
          }, 1200);
        });
      }
    },
    children: function children(_ref2) {
      var touched = _ref2.touched,
          errors = _ref2.errors,
          handleSubmit = _ref2.handleSubmit,
          values = _ref2.values;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "hidden",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PrintForm__WEBPACK_IMPORTED_MODULE_15__["default"], {
            formikProps: {
              touched: touched,
              errors: errors,
              handleSubmit: handleSubmit,
              values: values
            },
            componentToPrint: componentToPrint,
            images: images,
            setImages: setImages,
            setStrImages: setStrImages,
            strImages: strImages,
            jobCard: jobCard
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_9___default.a, {
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
          children: modalMsg
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full  xl:w-1/2 md:w-4/5 sm:w-full mx-auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], {
            className: "p-6 z-0 w-full h-auto bg-details bg-cover bg-center bg-no-repeat mx-auto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "flex flex-row justify-between my-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex flex-col",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  w: "40",
                  h: "auto",
                  color: "blue"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, _this), jobCard && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "w-auto flex flex-col justify-evenly px-1 text-center",
                  children: ["Job Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: " inline-block border-2",
                    children: jobCard.job_number
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 182,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "w-auto flex flex-col justify-evenly px-1 text-center",
                  children: ["Date Received:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inline-block border-2",
                    children: jobCard.date_received
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-input-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-section",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  title: "Customer Information"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  isDisabled: checkClosed(),
                  disabled: checkClosed(),
                  label: "Customer Name and Surname",
                  name: "customer_name_and_surname",
                  errors: errors,
                  touched: touched,
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  isDisabled: checkClosed(),
                  disabled: checkClosed(),
                  label: "Contact Person",
                  name: "contact_person",
                  errors: errors,
                  touched: touched
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  isDisabled: checkClosed(),
                  disabled: checkClosed(),
                  label: "Contact Number",
                  name: "contact_number",
                  errors: errors,
                  touched: touched,
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 218,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  isDisabled: checkClosed(),
                  disabled: checkClosed(),
                  label: "Email Address",
                  name: "email_address",
                  errors: errors,
                  touched: touched
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 228,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-section",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  title: "Bike Information"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 240,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex flex-row justify-between",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col w-1/2",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      fieldType: "form-field",
                      label: "Kilometers",
                      name: "kilometers",
                      disabled: values.hours || checkClosed() ? true : false,
                      isDisabled: values.hours || checkClosed() ? true : false
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 243,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 242,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "flex flex-col ml-auto w-1/3",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      fieldType: "form-field",
                      label: "Hours",
                      name: "hours",
                      isDisabled: values.kilometers || checkClosed() ? true : false,
                      disabled: values.kilometers || checkClosed() ? true : false
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 241,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  disabled: checkClosed(),
                  isDisabled: checkClosed(),
                  label: "Vin Number",
                  name: "vin_number",
                  touched: touched,
                  errors: errors,
                  required: true
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 267,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  disabled: checkClosed(),
                  isDisabled: checkClosed(),
                  label: "Registration Number",
                  name: "registration_number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 277,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  disabled: checkClosed(),
                  isDisabled: checkClosed(),
                  label: "Make and Model",
                  name: "make_and_model",
                  required: true,
                  errors: errors,
                  touched: touched
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "my-4 lg:mx-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                classes: "text-center",
                title: "Customer Instructions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 298,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TextArea__WEBPACK_IMPORTED_MODULE_13__["default"], {
                name: "customer_instructions",
                checkClosed: checkClosed
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 303,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "my-4 lg:mx-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                classes: "text-center",
                title: "Photos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Uploader__WEBPACK_IMPORTED_MODULE_7__["default"], {
                jobId: jobCard ? jobCard.job_number : null,
                strImages: strImages,
                setStrImages: setStrImages,
                isDisabled: checkClosed(),
                images: images,
                status: jobCard ? jobCard.status : null,
                setImages: setImages
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 15
            }, _this), jobCard ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-input-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-section",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    fieldType: "form-field",
                    isDisabled: checkClosed(),
                    disabled: checkClosed(),
                    label: "Quote Number",
                    name: "quote_number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 324,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "quote_date",
                    children: "Quote Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 331,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatePicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    checkClosed: checkClosed,
                    name: "quote_date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 333,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 323,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-section",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    fieldType: "form-field",
                    isDisabled: checkClosed(),
                    disabled: checkClosed(),
                    label: "Invoice Number",
                    name: "invoice_number"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 336,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "invoice_date",
                    children: "Invoice Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 343,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatePicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    checkClosed: checkClosed,
                    name: "invoice_date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 345,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 335,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 322,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "my-4 lg:mx-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  classes: "text-center",
                  title: "Comments"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 352,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TextArea__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  name: "comments",
                  checkClosed: checkClosed
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 357,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 351,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-input-group",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-section",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "collected",
                    children: "Collection Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 361,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatePicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    checkClosed: checkClosed,
                    name: "collected"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 363,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 360,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-section pb-24",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "status",
                    children: "Status"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 366,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
                    disabled: checkClosed(),
                    as: "select",
                    className: "form-field ",
                    name: "status",
                    children: [jobCard.status === "Closed" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Closed",
                      children: "Closed"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 374,
                      columnNumber: 27
                    }, _this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Checked In",
                      children: "Checked In"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 378,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Technician Assessing",
                      children: "Technician Assessing"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 379,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Quote Submitted",
                      children: "Quote Submitted"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 382,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Parts In Order",
                      children: "Parts In Order"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 383,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Work In Progress",
                      children: "Work In Progress"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 384,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Awaiting Collection",
                      children: "Awaiting Collection"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 387,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 365,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 359,
                columnNumber: 19
              }, _this)]
            }, void 0, true) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lg:left-3/4 right-0 top-4/4 w-1/2 absolute my-16 pb-6",
          children: [(!jobCard || jobCard.status !== "Closed") && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: jobCard ? "Save New Details" : "Save New Job",
            onClick: function onClick() {
              return handleSubmit();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 399,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Print Job",
            onClick: function onClick() {
              return handlePrint();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 13
          }, _this), (!jobCard || jobCard.status !== "Closed") && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Close Job",
            onClick: function onClick() {
              return handleClose();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 408,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 11
        }, _this)]
      }, void 0, true);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 5
  }, this);
}

_s(Form, "A84nNbfJ83tDGn6ptWxSzOXj4Yg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], react_to_print__WEBPACK_IMPORTED_MODULE_3__["useReactToPrint"]];
});

_c = Form;

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJjdXN0b21lcl9uYW1lX2FuZF9zdXJuYW1lIiwiY29udGFjdF9wZXJzb24iLCJjb250YWN0X251bWJlciIsImVtYWlsX2FkZHJlc3MiLCJraWxvbWV0ZXJzIiwiaG91cnMiLCJ2aW5fbnVtYmVyIiwicmVnaXN0cmF0aW9uX251bWJlciIsIm1ha2VfYW5kX21vZGVsIiwiY3VzdG9tZXJfaW5zdHJ1Y3Rpb25zIiwicXVvdGVfbnVtYmVyIiwicXVvdGVfZGF0ZSIsImludm9pY2VfbnVtYmVyIiwiaW52b2ljZV9kYXRlIiwiY29tbWVudHMiLCJjb2xsZWN0ZWQiLCJzdGF0dXMiLCJGb3JtIiwiam9iQ2FyZCIsImNvbXBvbmVudFRvUHJpbnQiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwic2V0VG9nZ2xlTW9kYWwiLCJtb2RhbE1zZyIsInNldE1vZGFsTXNnIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwicGhvdG9zIiwic3RySW1hZ2VzIiwic2V0U3RySW1hZ2VzIiwiaGFuZGxlUHJpbnQiLCJ1c2VSZWFjdFRvUHJpbnQiLCJjb250ZW50IiwiY3VycmVudCIsImNoZWNrQ2xvc2VkIiwiaGFuZGxlQ2xvc2UiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJqb2JfbnVtYmVyIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicHVzaCIsImVyciIsImZvcm1TY2hlbWEiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwiZmQiLCJGb3JtRGF0YSIsImZvckVhY2giLCJpbWciLCJhcHBlbmQiLCJheGlvcyIsInBvc3QiLCJwdXQiLCJ0b3VjaGVkIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0Iiwib3ZlcmxheSIsInBvc2l0aW9u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S1ksOEQ7OztLQVBFakIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXRhYmFzZS5kMjU1MmU5NTlmNTMwYjg2NGEwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIEZvcm0gYXMgRm9ybWlrRm9ybSwgRm9ybWlrLCBGb3JtaWtQcm9wcyB9IGZyb20gXCJmb3JtaWtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWFjdFRvUHJpbnQgfSBmcm9tIFwicmVhY3QtdG8tcHJpbnRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcclxuaW1wb3J0IEZvcm1IZWFkZXIgZnJvbSBcIi4vRm9ybUhlYWRlclwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9Mb2dvXCI7XHJcbmltcG9ydCBVcGxvYWRlciBmcm9tIFwiLi9VcGxvYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSm9iQ2FyZCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBmb3JtU2NoZW1hIGZyb20gXCIuLi9zY2hlbWFzL2Zvcm1TY2hlbWFcIjtcclxuaW1wb3J0IEZvcm1GaWVsZCBmcm9tIFwiLi9Gb3JtRmllbGRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4vVGV4dEFyZWFcIjtcclxuaW1wb3J0IERhdGVQaWNrZXIgZnJvbSBcIi4vRGF0ZVBpY2tlclwiO1xyXG5pbXBvcnQgUHJpbnRGb3JtIGZyb20gXCIuL1ByaW50Rm9ybVwiO1xyXG5cclxuY29uc3QgZGVmYXVsdFByb3BzID0ge1xyXG4gIGN1c3RvbWVyX25hbWVfYW5kX3N1cm5hbWU6IFwiXCIsXHJcbiAgY29udGFjdF9wZXJzb246IFwiXCIsXHJcbiAgY29udGFjdF9udW1iZXI6IFwiXCIsXHJcbiAgZW1haWxfYWRkcmVzczogXCJcIixcclxuICBraWxvbWV0ZXJzOiBcIlwiLFxyXG4gIGhvdXJzOiBcIlwiLFxyXG4gIHZpbl9udW1iZXI6IFwiXCIsXHJcbiAgcmVnaXN0cmF0aW9uX251bWJlcjogXCJcIixcclxuICBtYWtlX2FuZF9tb2RlbDogXCJcIixcclxuICBjdXN0b21lcl9pbnN0cnVjdGlvbnM6IFwiXCIsXHJcbiAgcXVvdGVfbnVtYmVyOiBcIlwiLFxyXG4gIHF1b3RlX2RhdGU6IFwiXCIsXHJcbiAgaW52b2ljZV9udW1iZXI6IFwiXCIsXHJcbiAgaW52b2ljZV9kYXRlOiBcIlwiLFxyXG4gIGNvbW1lbnRzOiBcIlwiLFxyXG4gIGNvbGxlY3RlZDogXCJcIixcclxuICBzdGF0dXM6IFwiXCIsXHJcbn07XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgam9iQ2FyZD86IEpvYkNhcmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBqb2JDYXJkIH06IFByb3BzKTogUmVhY3RFbGVtZW50IHtcclxuICBjb25zdCBjb21wb25lbnRUb1ByaW50ID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3RvZ2dsZU1vZGFsLCBzZXRUb2dnbGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21vZGFsTXNnLCBzZXRNb2RhbE1zZ10gPSB1c2VTdGF0ZShcIlBvc3RpbmcuLi5cIik7XHJcbiAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RySW1hZ2VzLCBzZXRTdHJJbWFnZXNdID0gdXNlU3RhdGUoam9iQ2FyZCA/IGpvYkNhcmQucGhvdG9zIDogXCJcIik7XHJcbiAgY29uc3QgaGFuZGxlUHJpbnQgPSB1c2VSZWFjdFRvUHJpbnQoe1xyXG4gICAgY29udGVudDogKCkgPT4gY29tcG9uZW50VG9QcmludC5jdXJyZW50LFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNoZWNrQ2xvc2VkID0gKCkgPT5cclxuICAgIGpvYkNhcmQgJiYgam9iQ2FyZC5zdGF0dXMgPT09IFwiQ2xvc2VkXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0VG9nZ2xlTW9kYWwodHJ1ZSk7XHJcbiAgICAgIHNldE1vZGFsTXNnKFwiQ2xvc2luZyBKb2IuLi5cIik7XHJcbiAgICB9LCAxMDAwKTtcclxuXHJcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9qb2IvXCIgKyBqb2JDYXJkLmpvYl9udW1iZXIsIHtcclxuICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXR1czogXCJDbG9zZWRcIiB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsTXNnKFwiQ2xvc2VkIVwiKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUb2dnbGVNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxNc2coXCJGYWlsZWQgdG8gQ2xvc2UgSm9iXCIpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgc2V0VG9nZ2xlTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgIH0sIDEyMDApO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1pa1xyXG4gICAgICB2YWxpZGF0aW9uU2NoZW1hPXtmb3JtU2NoZW1hfVxyXG4gICAgICBpbml0aWFsVmFsdWVzPXtqb2JDYXJkID8gam9iQ2FyZCA6IGRlZmF1bHRQcm9wc31cclxuICAgICAgb25TdWJtaXQ9eyh2YWx1ZXMsIGFjdGlvbnMpID0+IHtcclxuICAgICAgICBzZXRNb2RhbE1zZyhcIlBvc3RpbmcgSm9iLi5cIik7XHJcbiAgICAgICAgc2V0VG9nZ2xlTW9kYWwodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1nOiBGaWxlKSA9PiB7XHJcbiAgICAgICAgICBmZC5hcHBlbmQoXCJpbWFnZVwiLCBpbWcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZkLmFwcGVuZChcImpzb24tZGF0YVwiLCBKU09OLnN0cmluZ2lmeSh2YWx1ZXMpKTtcclxuICAgICAgICBpZiAoIWpvYkNhcmQpIHtcclxuICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2pvYlwiLCBmZCwge1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWxNc2coXCJQb3N0ZWQhIFJlZGlyZWN0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgIH0sIDEyMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsTXNnKFwiRmFpbGVkIHRvIFBvc3QgSm9iLlwiKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRvZ2dsZU1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9LCAxMjAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5wdXQoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvam9iL1wiICsgam9iQ2FyZC5qb2JfbnVtYmVyLCBmZCwge1xyXG4gICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWxNc2coXCJQb3N0ZWQhIFJlZGlyZWN0aW5nLi4uXCIpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgICAgICAgICAgIH0sIDEyMDApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIHNldE1vZGFsTXNnKFwiRmFpbGVkIHRvIFBvc3QgSm9iLlwiKTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFRvZ2dsZU1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgICAgICB9LCAxMjAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7KHsgdG91Y2hlZCwgZXJyb3JzLCBoYW5kbGVTdWJtaXQsIHZhbHVlcyB9OiBGb3JtaWtQcm9wczxhbnk+KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIDxQcmludEZvcm1cclxuICAgICAgICAgICAgICBmb3JtaWtQcm9wcz17eyB0b3VjaGVkLCBlcnJvcnMsIGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH19XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50VG9QcmludD17Y29tcG9uZW50VG9QcmludH1cclxuICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgICAgICAgICBzZXRJbWFnZXM9e3NldEltYWdlc31cclxuICAgICAgICAgICAgICBzZXRTdHJJbWFnZXM9e3NldFN0ckltYWdlc31cclxuICAgICAgICAgICAgICBzdHJJbWFnZXM9e3N0ckltYWdlc31cclxuICAgICAgICAgICAgICBqb2JDYXJkPXtqb2JDYXJkfVxyXG4gICAgICAgICAgICA+PC9QcmludEZvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgaXNPcGVuPXt0b2dnbGVNb2RhbH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctbW9kYWwgXHJcbiAgICAgICAgICAgIHRleHQtd2hpdGUgdy05NiBoLTI0IHRleHQtY2VudGVyIHRleHQtMnhsIGJnLWNvdmVyIGJnLWNlbnRlciBiZy1uby1yZXBlYXQgcHQtOCBcclxuICAgICAgICAgICAgYWJzb2x1dGUgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yXCJcclxuICAgICAgICAgICAgYXJpYUhpZGVBcHA9e3RydWV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgIHpJbmRleDogMzAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge21vZGFsTXNnfVxyXG4gICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsICB4bDp3LTEvMiBtZDp3LTQvNSBzbTp3LWZ1bGwgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICA8Rm9ybWlrRm9ybSBjbGFzc05hbWU9XCJwLTYgei0wIHctZnVsbCBoLWF1dG8gYmctZGV0YWlscyBiZy1jb3ZlciBiZy1jZW50ZXIgYmctbm8tcmVwZWF0IG14LWF1dG9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIG15LTVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImZsZXggZmxleC1jb2xcIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxMb2dvIHc9XCI0MFwiIGg9XCJhdXRvXCIgY29sb3I9XCJibHVlXCI+PC9Mb2dvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAge2pvYkNhcmQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1hdXRvIGZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHkgcHgtMSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgSm9iIE51bWJlcjpcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGlubGluZS1ibG9jayBib3JkZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7am9iQ2FyZC5qb2JfbnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBweC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBEYXRlIFJlY2VpdmVkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYm9yZGVyLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2pvYkNhcmQuZGF0ZV9yZWNlaXZlZH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXIgdGl0bGU9XCJDdXN0b21lciBJbmZvcm1hdGlvblwiPjwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkN1c3RvbWVyIE5hbWUgYW5kIFN1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lcl9uYW1lX2FuZF9zdXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgID48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRhY3QgUGVyc29uXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdF9wZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgID48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRhY3QgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29udGFjdF9udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsX2FkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgID48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyIHRpdGxlPVwiQmlrZSBJbmZvcm1hdGlvblwiPjwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LTEvMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGU9e1wiZm9ybS1maWVsZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIktpbG9tZXRlcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwia2lsb21ldGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZXMuaG91cnMgfHwgY2hlY2tDbG9zZWQoKSA/IHRydWUgOiBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmhvdXJzIHx8IGNoZWNrQ2xvc2VkKCkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtbC1hdXRvIHctMS8zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaG91cnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMua2lsb21ldGVycyB8fCBjaGVja0Nsb3NlZCgpID8gdHJ1ZSA6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5raWxvbWV0ZXJzIHx8IGNoZWNrQ2xvc2VkKCkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlZpbiBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2aW5fbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgID48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZ2lzdHJhdGlvbiBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWdpc3RyYXRpb25fbnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWFrZSBhbmQgTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtYWtlX2FuZF9tb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnM9e2Vycm9yc31cclxuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkPXt0b3VjaGVkfVxyXG4gICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IGxnOm14LTNcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9XCJ0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ3VzdG9tZXIgSW5zdHJ1Y3Rpb25zXCJcclxuICAgICAgICAgICAgICAgID48L0Zvcm1IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRleHRBcmVhXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjdXN0b21lcl9pbnN0cnVjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICBjaGVja0Nsb3NlZD17Y2hlY2tDbG9zZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNCBsZzpteC0zXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUhlYWRlciBjbGFzc2VzPVwidGV4dC1jZW50ZXJcIiB0aXRsZT1cIlBob3Rvc1wiPjwvRm9ybUhlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxVcGxvYWRlclxyXG4gICAgICAgICAgICAgICAgICBqb2JJZD17am9iQ2FyZCA/IGpvYkNhcmQuam9iX251bWJlciA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgIHN0ckltYWdlcz17c3RySW1hZ2VzfVxyXG4gICAgICAgICAgICAgICAgICBzZXRTdHJJbWFnZXM9e3NldFN0ckltYWdlc31cclxuICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtpbWFnZXN9XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1cz17am9iQ2FyZCA/IGpvYkNhcmQuc3RhdHVzIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgc2V0SW1hZ2VzPXtzZXRJbWFnZXN9XHJcbiAgICAgICAgICAgICAgICA+PC9VcGxvYWRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7am9iQ2FyZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlF1b3RlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdW90ZV9udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJxdW90ZV9kYXRlXCI+UXVvdGUgRGF0ZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2hlY2tDbG9zZWQ9e2NoZWNrQ2xvc2VkfSBuYW1lPVwicXVvdGVfZGF0ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW52b2ljZSBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW52b2ljZV9udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbnZvaWNlX2RhdGVcIj5JbnZvaWNlIERhdGU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrQ2xvc2VkPXtjaGVja0Nsb3NlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImludm9pY2VfZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IGxnOm14LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tbWVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID48L0Zvcm1IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYSBuYW1lPVwiY29tbWVudHNcIiBjaGVja0Nsb3NlZD17Y2hlY2tDbG9zZWR9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb2xsZWN0ZWRcIj5Db2xsZWN0aW9uIERhdGU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyIGNoZWNrQ2xvc2VkPXtjaGVja0Nsb3NlZH0gbmFtZT1cImNvbGxlY3RlZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXNlY3Rpb24gcGItMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhdHVzXCI+U3RhdHVzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWZpZWxkIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7am9iQ2FyZC5zdGF0dXMgPT09IFwiQ2xvc2VkXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNsb3NlZFwiPkNsb3NlZDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNoZWNrZWQgSW5cIj5DaGVja2VkIEluPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJUZWNobmljaWFuIEFzc2Vzc2luZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRlY2huaWNpYW4gQXNzZXNzaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiUXVvdGUgU3VibWl0dGVkXCI+UXVvdGUgU3VibWl0dGVkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYXJ0cyBJbiBPcmRlclwiPlBhcnRzIEluIE9yZGVyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJXb3JrIEluIFByb2dyZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgV29yayBJbiBQcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkF3YWl0aW5nIENvbGxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBBd2FpdGluZyBDb2xsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Gb3JtaWtGb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmxlZnQtMy80IHJpZ2h0LTAgdG9wLTQvNCB3LTEvMiBhYnNvbHV0ZSBteS0xNiBwYi02XCI+XHJcbiAgICAgICAgICAgIHsoIWpvYkNhcmQgfHwgam9iQ2FyZC5zdGF0dXMgIT09IFwiQ2xvc2VkXCIpICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtqb2JDYXJkID8gXCJTYXZlIE5ldyBEZXRhaWxzXCIgOiBcIlNhdmUgTmV3IEpvYlwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUHJpbnQgSm9iXCIgb25DbGljaz17KCkgPT4gaGFuZGxlUHJpbnQoKX0+PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICB7KCFqb2JDYXJkIHx8IGpvYkNhcmQuc3RhdHVzICE9PSBcIkNsb3NlZFwiKSAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2xvc2UgSm9iXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xvc2UoKX0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==