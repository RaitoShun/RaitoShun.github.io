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
    fetch("https://bikers-test.herokuapp.com/job/" + jobCard.job_number, {
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
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("https://bikers-test.herokuapp.com/job", fd, {
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
        axios__WEBPACK_IMPORTED_MODULE_12___default.a.put("https://bikers-test.herokuapp.com/job/" + jobCard.job_number, fd, {
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
            lineNumber: 147,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
          lineNumber: 158,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "w-full  xl:w-2/3 md:w-4/5 sm:w-full mx-auto",
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
                  lineNumber: 179,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, _this), jobCard && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "w-auto flex flex-col justify-evenly px-1 text-center",
                  children: ["Job Number:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: " inline-block border-2",
                    children: jobCard.job_number
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 186,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "w-auto flex flex-col justify-evenly px-1 text-center",
                  children: ["Date Received:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "inline-block border-2",
                    children: jobCard.date_received
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 190,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "form-input-group",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-section",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  title: "Customer Information"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
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
                  lineNumber: 203,
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
                  lineNumber: 213,
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
                  lineNumber: 222,
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
                  lineNumber: 232,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "form-section",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  title: "Bike Information"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
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
                      lineNumber: 247,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 246,
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
                      lineNumber: 258,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 257,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 245,
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
                  lineNumber: 271,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  fieldType: "form-field",
                  disabled: checkClosed(),
                  isDisabled: checkClosed(),
                  label: "Registration Number",
                  name: "registration_number"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 281,
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
                  lineNumber: 288,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "my-4 lg:mx-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                classes: "text-center",
                title: "Customer Instructions"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TextArea__WEBPACK_IMPORTED_MODULE_13__["default"], {
                name: "customer_instructions",
                checkClosed: checkClosed
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "my-4 lg:mx-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                classes: "text-center",
                title: "Photos"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 313,
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
                lineNumber: 314,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 312,
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
                    lineNumber: 328,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "quote_date",
                    children: "Quote Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 335,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatePicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    checkClosed: checkClosed,
                    name: "quote_date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 337,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 327,
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
                    lineNumber: 340,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "invoice_date",
                    children: "Invoice Date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 347,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatePicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    checkClosed: checkClosed,
                    name: "invoice_date"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 339,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 326,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "my-4 lg:mx-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FormHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
                  classes: "text-center",
                  title: "Comments"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 356,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_TextArea__WEBPACK_IMPORTED_MODULE_13__["default"], {
                  name: "comments",
                  checkClosed: checkClosed
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 361,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 355,
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
                    lineNumber: 365,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatePicker__WEBPACK_IMPORTED_MODULE_14__["default"], {
                    checkClosed: checkClosed,
                    name: "collected"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 367,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 364,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "form-section pb-24",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                    htmlFor: "status",
                    children: "Status"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 370,
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
                      lineNumber: 378,
                      columnNumber: 27
                    }, _this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Checked In",
                      children: "Checked In"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 382,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Technician Assessing",
                      children: "Technician Assessing"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 383,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Quote Submitted",
                      children: "Quote Submitted"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 386,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Parts In Order",
                      children: "Parts In Order"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 387,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Work In Progress",
                      children: "Work In Progress"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 388,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
                      value: "Awaiting Collection",
                      children: "Awaiting Collection"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 391,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 371,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 369,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 363,
                columnNumber: 19
              }, _this)]
            }, void 0, true) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "lg:left-3/4 right-0 top-4/4 md:w-auto w-1/2 absolute my-16 pb-6",
          children: [(!jobCard || jobCard.status !== "Closed") && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: jobCard ? "Save New Details" : "Save New Job",
            onClick: function onClick() {
              return handleSubmit();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 403,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Print Job",
            onClick: function onClick() {
              return handlePrint();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 409,
            columnNumber: 13
          }, _this), (!jobCard || jobCard.status !== "Closed") && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Close Job",
            onClick: function onClick() {
              return handleClose();
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 401,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtLnRzeCJdLCJuYW1lcyI6WyJkZWZhdWx0UHJvcHMiLCJjdXN0b21lcl9uYW1lX2FuZF9zdXJuYW1lIiwiY29udGFjdF9wZXJzb24iLCJjb250YWN0X251bWJlciIsImVtYWlsX2FkZHJlc3MiLCJraWxvbWV0ZXJzIiwiaG91cnMiLCJ2aW5fbnVtYmVyIiwicmVnaXN0cmF0aW9uX251bWJlciIsIm1ha2VfYW5kX21vZGVsIiwiY3VzdG9tZXJfaW5zdHJ1Y3Rpb25zIiwicXVvdGVfbnVtYmVyIiwicXVvdGVfZGF0ZSIsImludm9pY2VfbnVtYmVyIiwiaW52b2ljZV9kYXRlIiwiY29tbWVudHMiLCJjb2xsZWN0ZWQiLCJzdGF0dXMiLCJGb3JtIiwiam9iQ2FyZCIsImNvbXBvbmVudFRvUHJpbnQiLCJ1c2VSZWYiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwic2V0VG9nZ2xlTW9kYWwiLCJtb2RhbE1zZyIsInNldE1vZGFsTXNnIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwicGhvdG9zIiwic3RySW1hZ2VzIiwic2V0U3RySW1hZ2VzIiwiaGFuZGxlUHJpbnQiLCJ1c2VSZWFjdFRvUHJpbnQiLCJjb250ZW50IiwiY3VycmVudCIsImNoZWNrQ2xvc2VkIiwiaGFuZGxlQ2xvc2UiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJqb2JfbnVtYmVyIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwiQWNjZXB0IiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwicHVzaCIsImVyciIsImZvcm1TY2hlbWEiLCJ2YWx1ZXMiLCJhY3Rpb25zIiwiZmQiLCJGb3JtRGF0YSIsImZvckVhY2giLCJpbWciLCJhcHBlbmQiLCJheGlvcyIsInBvc3QiLCJwdXQiLCJ0b3VjaGVkIiwiZXJyb3JzIiwiaGFuZGxlU3VibWl0Iiwib3ZlcmxheSIsInBvc2l0aW9u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RDs7O0tBUEVqQixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2RhdGFiYXNlLjE4NWQ5NmY5YzYxNWI1OWQ0NTY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGaWVsZCwgRm9ybSBhcyBGb3JtaWtGb3JtLCBGb3JtaWssIEZvcm1pa1Byb3BzIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJlYWN0VG9QcmludCB9IGZyb20gXCJyZWFjdC10by1wcmludFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xyXG5pbXBvcnQgRm9ybUhlYWRlciBmcm9tIFwiLi9Gb3JtSGVhZGVyXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcclxuaW1wb3J0IFVwbG9hZGVyIGZyb20gXCIuL1VwbG9hZGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBKb2JDYXJkIH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IGZvcm1TY2hlbWEgZnJvbSBcIi4uL3NjaGVtYXMvZm9ybVNjaGVtYVwiO1xyXG5pbXBvcnQgRm9ybUZpZWxkIGZyb20gXCIuL0Zvcm1GaWVsZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi9UZXh0QXJlYVwiO1xyXG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tIFwiLi9EYXRlUGlja2VyXCI7XHJcbmltcG9ydCBQcmludEZvcm0gZnJvbSBcIi4vUHJpbnRGb3JtXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgY3VzdG9tZXJfbmFtZV9hbmRfc3VybmFtZTogXCJcIixcclxuICBjb250YWN0X3BlcnNvbjogXCJcIixcclxuICBjb250YWN0X251bWJlcjogXCJcIixcclxuICBlbWFpbF9hZGRyZXNzOiBcIlwiLFxyXG4gIGtpbG9tZXRlcnM6IFwiXCIsXHJcbiAgaG91cnM6IFwiXCIsXHJcbiAgdmluX251bWJlcjogXCJcIixcclxuICByZWdpc3RyYXRpb25fbnVtYmVyOiBcIlwiLFxyXG4gIG1ha2VfYW5kX21vZGVsOiBcIlwiLFxyXG4gIGN1c3RvbWVyX2luc3RydWN0aW9uczogXCJcIixcclxuICBxdW90ZV9udW1iZXI6IFwiXCIsXHJcbiAgcXVvdGVfZGF0ZTogXCJcIixcclxuICBpbnZvaWNlX251bWJlcjogXCJcIixcclxuICBpbnZvaWNlX2RhdGU6IFwiXCIsXHJcbiAgY29tbWVudHM6IFwiXCIsXHJcbiAgY29sbGVjdGVkOiBcIlwiLFxyXG4gIHN0YXR1czogXCJcIixcclxufTtcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBqb2JDYXJkPzogSm9iQ2FyZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSh7IGpvYkNhcmQgfTogUHJvcHMpOiBSZWFjdEVsZW1lbnQge1xyXG4gIGNvbnN0IGNvbXBvbmVudFRvUHJpbnQgPSB1c2VSZWYoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdG9nZ2xlTW9kYWwsIHNldFRvZ2dsZU1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbW9kYWxNc2csIHNldE1vZGFsTXNnXSA9IHVzZVN0YXRlKFwiUG9zdGluZy4uLlwiKTtcclxuICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtzdHJJbWFnZXMsIHNldFN0ckltYWdlc10gPSB1c2VTdGF0ZShqb2JDYXJkID8gam9iQ2FyZC5waG90b3MgOiBcIlwiKTtcclxuICBjb25zdCBoYW5kbGVQcmludCA9IHVzZVJlYWN0VG9QcmludCh7XHJcbiAgICBjb250ZW50OiAoKSA9PiBjb21wb25lbnRUb1ByaW50LmN1cnJlbnQsXHJcbiAgfSk7XHJcbiAgY29uc3QgY2hlY2tDbG9zZWQgPSAoKSA9PlxyXG4gICAgam9iQ2FyZCAmJiBqb2JDYXJkLnN0YXR1cyA9PT0gXCJDbG9zZWRcIiA/IHRydWUgOiBmYWxzZTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRUb2dnbGVNb2RhbCh0cnVlKTtcclxuICAgICAgc2V0TW9kYWxNc2coXCJDbG9zaW5nIEpvYi4uLlwiKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIGZldGNoKFwiaHR0cHM6Ly9iaWtlcnMtdGVzdC5oZXJva3VhcHAuY29tL2pvYi9cIiArIGpvYkNhcmQuam9iX251bWJlciwge1xyXG4gICAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzOiBcIkNsb3NlZFwiIH0pLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxNc2coXCJDbG9zZWQhXCIpO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHNldFRvZ2dsZU1vZGFsKGZhbHNlKTtcclxuICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICAgICAgICB9LCAxMjAwKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBzZXRNb2RhbE1zZyhcIkZhaWxlZCB0byBDbG9zZSBKb2JcIik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUb2dnbGVNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybWlrXHJcbiAgICAgIHZhbGlkYXRpb25TY2hlbWE9e2Zvcm1TY2hlbWF9XHJcbiAgICAgIGluaXRpYWxWYWx1ZXM9e2pvYkNhcmQgPyBqb2JDYXJkIDogZGVmYXVsdFByb3BzfVxyXG4gICAgICBvblN1Ym1pdD17KHZhbHVlcywgYWN0aW9ucykgPT4ge1xyXG4gICAgICAgIHNldE1vZGFsTXNnKFwiUG9zdGluZyBKb2IuLlwiKTtcclxuICAgICAgICBzZXRUb2dnbGVNb2RhbCh0cnVlKTtcclxuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWc6IEZpbGUpID0+IHtcclxuICAgICAgICAgIGZkLmFwcGVuZChcImltYWdlXCIsIGltZyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZmQuYXBwZW5kKFwianNvbi1kYXRhXCIsIEpTT04uc3RyaW5naWZ5KHZhbHVlcykpO1xyXG4gICAgICAgIGlmICgham9iQ2FyZCkge1xyXG4gICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLnBvc3QoXCJodHRwczovL2Jpa2Vycy10ZXN0Lmhlcm9rdWFwcC5jb20vam9iXCIsIGZkLCB7XHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICBzZXRNb2RhbE1zZyhcIlBvc3RlZCEgUmVkaXJlY3RpbmcuLi5cIik7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWxNc2coXCJGYWlsZWQgdG8gUG9zdCBKb2IuXCIpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9nZ2xlTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0sIDEyMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLnB1dChcclxuICAgICAgICAgICAgICBcImh0dHBzOi8vYmlrZXJzLXRlc3QuaGVyb2t1YXBwLmNvbS9qb2IvXCIgKyBqb2JDYXJkLmpvYl9udW1iZXIsXHJcbiAgICAgICAgICAgICAgZmQsXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgICAgICAgICAgQWNjZXB0OiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICBzZXRNb2RhbE1zZyhcIlBvc3RlZCEgUmVkaXJlY3RpbmcuLi5cIik7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICAgICAgICAgICAgfSwgMTIwMCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0TW9kYWxNc2coXCJGYWlsZWQgdG8gUG9zdCBKb2IuXCIpO1xyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VG9nZ2xlTW9kYWwoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIH0sIDEyMDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHsoeyB0b3VjaGVkLCBlcnJvcnMsIGhhbmRsZVN1Ym1pdCwgdmFsdWVzIH06IEZvcm1pa1Byb3BzPGFueT4pID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW5cIj5cclxuICAgICAgICAgICAgPFByaW50Rm9ybVxyXG4gICAgICAgICAgICAgIGZvcm1pa1Byb3BzPXt7IHRvdWNoZWQsIGVycm9ycywgaGFuZGxlU3VibWl0LCB2YWx1ZXMgfX1cclxuICAgICAgICAgICAgICBjb21wb25lbnRUb1ByaW50PXtjb21wb25lbnRUb1ByaW50fVxyXG4gICAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxyXG4gICAgICAgICAgICAgIHNldEltYWdlcz17c2V0SW1hZ2VzfVxyXG4gICAgICAgICAgICAgIHNldFN0ckltYWdlcz17c2V0U3RySW1hZ2VzfVxyXG4gICAgICAgICAgICAgIHN0ckltYWdlcz17c3RySW1hZ2VzfVxyXG4gICAgICAgICAgICAgIGpvYkNhcmQ9e2pvYkNhcmR9XHJcbiAgICAgICAgICAgID48L1ByaW50Rm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICBpc09wZW49e3RvZ2dsZU1vZGFsfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1tb2RhbCBcclxuICAgICAgICAgICAgdGV4dC13aGl0ZSB3LTk2IGgtMjQgdGV4dC1jZW50ZXIgdGV4dC0yeGwgYmctY292ZXIgYmctY2VudGVyIGJnLW5vLXJlcGVhdCBwdC04IFxyXG4gICAgICAgICAgICBhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB0b3AtMS8yIC10cmFuc2xhdGUteS0xLzJcIlxyXG4gICAgICAgICAgICBhcmlhSGlkZUFwcD17dHJ1ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwdndcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgICAgekluZGV4OiAzMCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7bW9kYWxNc2d9XHJcbiAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgIHhsOnctMi8zIG1kOnctNC81IHNtOnctZnVsbCBteC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxGb3JtaWtGb3JtIGNsYXNzTmFtZT1cInAtNiB6LTAgdy1mdWxsIGgtYXV0byBiZy1kZXRhaWxzIGJnLWNvdmVyIGJnLWNlbnRlciBiZy1uby1yZXBlYXQgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbXktNVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiZmxleCBmbGV4LWNvbFwifT5cclxuICAgICAgICAgICAgICAgICAgPExvZ28gdz1cIjQwXCIgaD1cImF1dG9cIiBjb2xvcj1cImJsdWVcIj48L0xvZ28+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7am9iQ2FyZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWF1dG8gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBweC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBKb2IgTnVtYmVyOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaW5saW5lLWJsb2NrIGJvcmRlci0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtqb2JDYXJkLmpvYl9udW1iZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctYXV0byBmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5IHB4LTEgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIERhdGUgUmVjZWl2ZWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1ibG9jayBib3JkZXItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7am9iQ2FyZC5kYXRlX3JlY2VpdmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUhlYWRlciB0aXRsZT1cIkN1c3RvbWVyIEluZm9ybWF0aW9uXCI+PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3VzdG9tZXIgTmFtZSBhbmQgU3VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbWVyX25hbWVfYW5kX3N1cm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGFjdCBQZXJzb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0X3BlcnNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGFjdCBOdW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb250YWN0X251bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGU9e1wiZm9ybS1maWVsZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxfYWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZD17dG91Y2hlZH1cclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1IZWFkZXIgdGl0bGU9XCJCaWtlIEluZm9ybWF0aW9uXCI+PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctMS8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVHlwZT17XCJmb3JtLWZpZWxkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiS2lsb21ldGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJraWxvbWV0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlcy5ob3VycyB8fCBjaGVja0Nsb3NlZCgpID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuaG91cnMgfHwgY2hlY2tDbG9zZWQoKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1sLWF1dG8gdy0xLzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJIb3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJob3Vyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5raWxvbWV0ZXJzIHx8IGNoZWNrQ2xvc2VkKCkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzLmtpbG9tZXRlcnMgfHwgY2hlY2tDbG9zZWQoKSA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVmluIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInZpbl9udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzPXtlcnJvcnN9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgPjwvRm9ybUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVnaXN0cmF0aW9uIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJlZ2lzdHJhdGlvbl9udW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGU9e1wiZm9ybS1maWVsZFwifVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNYWtlIGFuZCBNb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1ha2VfYW5kX21vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9ycz17ZXJyb3JzfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoZWQ9e3RvdWNoZWR9XHJcbiAgICAgICAgICAgICAgICAgID48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTQgbGc6bXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1IZWFkZXJcclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cInRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDdXN0b21lciBJbnN0cnVjdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgPjwvRm9ybUhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGV4dEFyZWFcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImN1c3RvbWVyX2luc3RydWN0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNoZWNrQ2xvc2VkPXtjaGVja0Nsb3NlZH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS00IGxnOm14LTNcIj5cclxuICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyIGNsYXNzZXM9XCJ0ZXh0LWNlbnRlclwiIHRpdGxlPVwiUGhvdG9zXCI+PC9Gb3JtSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPFVwbG9hZGVyXHJcbiAgICAgICAgICAgICAgICAgIGpvYklkPXtqb2JDYXJkID8gam9iQ2FyZC5qb2JfbnVtYmVyIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgc3RySW1hZ2VzPXtzdHJJbWFnZXN9XHJcbiAgICAgICAgICAgICAgICAgIHNldFN0ckltYWdlcz17c2V0U3RySW1hZ2VzfVxyXG4gICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cclxuICAgICAgICAgICAgICAgICAgc3RhdHVzPXtqb2JDYXJkID8gam9iQ2FyZC5zdGF0dXMgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICBzZXRJbWFnZXM9e3NldEltYWdlc31cclxuICAgICAgICAgICAgICAgID48L1VwbG9hZGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIHtqb2JDYXJkID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUeXBlPXtcImZvcm0tZmllbGRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2NoZWNrQ2xvc2VkKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUXVvdGUgTnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInF1b3RlX251bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInF1b3RlX2RhdGVcIj5RdW90ZSBEYXRlPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlciBjaGVja0Nsb3NlZD17Y2hlY2tDbG9zZWR9IG5hbWU9XCJxdW90ZV9kYXRlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFR5cGU9e1wiZm9ybS1maWVsZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y2hlY2tDbG9zZWQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbnZvaWNlIE51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnZvaWNlX251bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImludm9pY2VfZGF0ZVwiPkludm9pY2UgRGF0ZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tDbG9zZWQ9e2NoZWNrQ2xvc2VkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW52b2ljZV9kYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTQgbGc6bXgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtSGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzPVwidGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21tZW50c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvRm9ybUhlYWRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhIG5hbWU9XCJjb21tZW50c1wiIGNoZWNrQ2xvc2VkPXtjaGVja0Nsb3NlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbGxlY3RlZFwiPkNvbGxlY3Rpb24gRGF0ZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXIgY2hlY2tDbG9zZWQ9e2NoZWNrQ2xvc2VkfSBuYW1lPVwiY29sbGVjdGVkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tc2VjdGlvbiBwYi0yNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzdGF0dXNcIj5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtjaGVja0Nsb3NlZCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tZmllbGQgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtqb2JDYXJkLnN0YXR1cyA9PT0gXCJDbG9zZWRcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2xvc2VkXCI+Q2xvc2VkPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ2hlY2tlZCBJblwiPkNoZWNrZWQgSW48L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRlY2huaWNpYW4gQXNzZXNzaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVGVjaG5pY2lhbiBBc3Nlc3NpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJRdW90ZSBTdWJtaXR0ZWRcIj5RdW90ZSBTdWJtaXR0ZWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlBhcnRzIEluIE9yZGVyXCI+UGFydHMgSW4gT3JkZXI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIldvcmsgSW4gUHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBXb3JrIEluIFByb2dyZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQXdhaXRpbmcgQ29sbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEF3YWl0aW5nIENvbGxlY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L0Zvcm1pa0Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bGVmdC0zLzQgcmlnaHQtMCB0b3AtNC80IG1kOnctYXV0byB3LTEvMiBhYnNvbHV0ZSBteS0xNiBwYi02XCI+XHJcbiAgICAgICAgICAgIHsoIWpvYkNhcmQgfHwgam9iQ2FyZC5zdGF0dXMgIT09IFwiQ2xvc2VkXCIpICYmIChcclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0ZXh0PXtqb2JDYXJkID8gXCJTYXZlIE5ldyBEZXRhaWxzXCIgOiBcIlNhdmUgTmV3IEpvYlwifVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiUHJpbnQgSm9iXCIgb25DbGljaz17KCkgPT4gaGFuZGxlUHJpbnQoKX0+PC9CdXR0b24+XHJcblxyXG4gICAgICAgICAgICB7KCFqb2JDYXJkIHx8IGpvYkNhcmQuc3RhdHVzICE9PSBcIkNsb3NlZFwiKSAmJiAoXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVwiQ2xvc2UgSm9iXCIgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xvc2UoKX0+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvRm9ybWlrPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==