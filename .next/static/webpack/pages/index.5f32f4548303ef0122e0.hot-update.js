self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\portpolio\\portfolio_website\\src\\components\\TimeLine\\TimeLine.js",
    _this = undefined,
    _s = $RefreshSig$();





var TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

var Timeline = function Timeline() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      activeItem = _useState[0],
      setActiveItem = _useState[1];

  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var scroll = function scroll(node, left) {
    return node.scrollTo({
      left: left,
      behavior: "smooth"
    });
  };

  var handleClick = function handleClick(e, i) {
    e.preventDefault();

    if (carouselRef.current) {
      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  var handleScroll = function handleScroll() {
    if (carouselRef.current) {
      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handleResize = function handleResize() {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: "I am a highly motivated individual with one year of industrial experience as a FullStack Developer and enthusiasm to learn new skills to contribute to the success of the organizational objectives effectively and efficiently while achieving my personal goals."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
            "final": index === TOTAL_CAROUSEL_COUNT - 1,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
              index: index,
              id: "carousel__item-".concat(index),
              active: activeItem,
              onClick: function onClick(e) {
                return handleClick(e, index);
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
                children: ["".concat(item.year), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                  width: "208",
                  height: "6",
                  viewBox: "0 0 208 6",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                    fill: "url(#paint0_linear)",
                    "fill-opacity": "0.33"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 11
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                      id: "paint0_linear",
                      x1: "-4.30412e-10",
                      y1: "0.5",
                      x2: "208",
                      y2: "0.500295",
                      gradientUnits: "userSpaceOnUse",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        "stop-color": "white"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 113,
                        columnNumber: 13
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                        offset: "0.79478",
                        "stop-color": "white",
                        "stop-opacity": "0"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 13
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 12
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 11
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 9
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
                children: item.text
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 8
            }, _this)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, _this);
        })
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: function onClick(e) {
            return handleClick(e, index);
          },
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 8
          }, _this)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 7
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 3
  }, _this);
};

_s(Timeline, "qE2Y7awmqdFA9rYczLkhjQwwAdI=");

_c = Timeline;
/* harmony default export */ __webpack_exports__["default"] = (Timeline);

var _c;

$RefreshReg$(_c, "Timeline");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanMiXSwibmFtZXMiOlsiVE9UQUxfQ0FST1VTRUxfQ09VTlQiLCJUaW1lTGluZURhdGEiLCJUaW1lbGluZSIsInVzZVN0YXRlIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJjYXJvdXNlbFJlZiIsInVzZVJlZiIsInNjcm9sbCIsIm5vZGUiLCJsZWZ0Iiwic2Nyb2xsVG8iLCJiZWhhdmlvciIsImhhbmRsZUNsaWNrIiwiZSIsImkiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiTWF0aCIsImZsb29yIiwic2Nyb2xsV2lkdGgiLCJoYW5kbGVTY3JvbGwiLCJpbmRleCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFXQTtBQU1BO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2NDLCtDQUFRLENBQUMsQ0FBRCxDQUR0QjtBQUFBLE1BQ2ZDLFVBRGU7QUFBQSxNQUNIQyxhQURHOztBQUV0QixNQUFNQyxXQUFXLEdBQUdDLDZDQUFNLEVBQTFCOztBQUVBLE1BQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBT0MsSUFBUCxFQUFnQjtBQUM5QixXQUFPRCxJQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRCxVQUFJLEVBQUpBLElBQUY7QUFBUUUsY0FBUSxFQUFFO0FBQWxCLEtBQWQsQ0FBUDtBQUNBLEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEVBQVU7QUFD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NDU0ODMwM2VmMDEyMmUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG5cdENhcm91c2VsQnV0dG9uLFxyXG5cdENhcm91c2VsQnV0dG9uRG90LFxyXG5cdENhcm91c2VsQnV0dG9ucyxcclxuXHRDYXJvdXNlbENvbnRhaW5lcixcclxuXHRDYXJvdXNlbEl0ZW0sXHJcblx0Q2Fyb3VzZWxJdGVtSW1nLFxyXG5cdENhcm91c2VsSXRlbVRleHQsXHJcblx0Q2Fyb3VzZWxJdGVtVGl0bGUsXHJcblx0Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlLFxyXG59IGZyb20gXCIuL1RpbWVMaW5lU3R5bGVzXCI7XHJcbmltcG9ydCB7XHJcblx0U2VjdGlvbixcclxuXHRTZWN0aW9uRGl2aWRlcixcclxuXHRTZWN0aW9uVGV4dCxcclxuXHRTZWN0aW9uVGl0bGUsXHJcbn0gZnJvbSBcIi4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IFRpbWVMaW5lRGF0YSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XHJcblxyXG5jb25zdCBUT1RBTF9DQVJPVVNFTF9DT1VOVCA9IFRpbWVMaW5lRGF0YS5sZW5ndGg7XHJcblxyXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcclxuXHRjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZSgwKTtcclxuXHRjb25zdCBjYXJvdXNlbFJlZiA9IHVzZVJlZigpO1xyXG5cclxuXHRjb25zdCBzY3JvbGwgPSAobm9kZSwgbGVmdCkgPT4ge1xyXG5cdFx0cmV0dXJuIG5vZGUuc2Nyb2xsVG8oeyBsZWZ0LCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcclxuXHRcdFx0Y29uc3Qgc2Nyb2xsTGVmdCA9IE1hdGguZmxvb3IoXHJcblx0XHRcdFx0Y2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNyAqIChpIC8gVGltZUxpbmVEYXRhLmxlbmd0aClcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcblx0XHRpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG5cdFx0XHRjb25zdCBpbmRleCA9IE1hdGgucm91bmQoXHJcblx0XHRcdFx0KGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvXHJcblx0XHRcdFx0XHQoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxXaWR0aCAqIDAuNykpICpcclxuXHRcdFx0XHRcdFRpbWVMaW5lRGF0YS5sZW5ndGhcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8vIHNuYXAgYmFjayB0byBiZWdpbm5pbmcgb2Ygc2Nyb2xsIHdoZW4gd2luZG93IGlzIHJlc2l6ZWRcclxuXHQvLyBhdm9pZHMgYSBidWcgd2hlcmUgY29udGVudCBpcyBjb3ZlcmVkIHVwIGlmIGNvbWluZyBmcm9tIHNtYWxsZXIgc2NyZWVuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcclxuXHRcdFx0c2Nyb2xsKGNhcm91c2VsUmVmLmN1cnJlbnQsIDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxTZWN0aW9uIGlkPVwiYWJvdXRcIj5cclxuXHRcdFx0PFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxyXG5cdFx0XHQ8U2VjdGlvblRleHQ+XHJcblx0XHRcdFx0SSBhbSBhIGhpZ2hseSBtb3RpdmF0ZWQgaW5kaXZpZHVhbCB3aXRoIG9uZSB5ZWFyIG9mIGluZHVzdHJpYWxcclxuXHRcdFx0XHRleHBlcmllbmNlIGFzIGEgRnVsbFN0YWNrIERldmVsb3BlciBhbmQgZW50aHVzaWFzbSB0byBsZWFybiBuZXcgc2tpbGxzXHJcblx0XHRcdFx0dG8gY29udHJpYnV0ZSB0byB0aGUgc3VjY2VzcyBvZiB0aGUgb3JnYW5pemF0aW9uYWwgb2JqZWN0aXZlc1xyXG5cdFx0XHRcdGVmZmVjdGl2ZWx5IGFuZCBlZmZpY2llbnRseSB3aGlsZSBhY2hpZXZpbmcgbXkgcGVyc29uYWwgZ29hbHMuXHJcblx0XHRcdDwvU2VjdGlvblRleHQ+XHJcblx0XHRcdDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0e1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PENhcm91c2VsSXRlbVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5kZXg9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XHJcblx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEl0ZW1UaXRsZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e2Ake2l0ZW0ueWVhcn1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxJdGVtSW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9XCIyMDhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjZcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZpbGw9XCJub25lXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwYXRoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRmaWxsLW9wYWNpdHk9XCIwLjMzXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkZWZzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpbmVhckdyYWRpZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicGFpbnQwX2xpbmVhclwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHgxPVwiLTQuMzA0MTJlLTEwXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eTE9XCIwLjVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR4Mj1cIjIwOFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHkyPVwiMC41MDAyOTVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3RvcFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldD1cIjAuNzk0NzhcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0b3AtY29sb3I9XCJ3aGl0ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RvcC1vcGFjaXR5PVwiMFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpbmVhckdyYWRpZW50PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGVmcz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9DYXJvdXNlbEl0ZW1JbWc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Nhcm91c2VsSXRlbVRpdGxlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XHJcblx0XHRcdFx0XHRcdFx0PC9DYXJvdXNlbEl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdDwvQ2Fyb3VzZWxDb250YWluZXI+XHJcblx0XHRcdDxDYXJvdXNlbEJ1dHRvbnM+XHJcblx0XHRcdFx0e1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8Q2Fyb3VzZWxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRcdGluZGV4PXtpbmRleH1cclxuXHRcdFx0XHRcdFx0XHRhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XHJcblx0XHRcdFx0XHRcdDwvQ2Fyb3VzZWxCdXR0b24+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pfVxyXG5cdFx0XHQ8L0Nhcm91c2VsQnV0dG9ucz5cclxuXHRcdFx0PFNlY3Rpb25EaXZpZGVyIC8+XHJcblx0XHQ8L1NlY3Rpb24+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9