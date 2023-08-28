self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "GlobalComponents__Section",
  componentId: "sc-6qzy6y-0"
})(["display:", ";flex-direction:", ";padding:", ";margin:0 auto;max-width:1040px;box-sizing:content-box;position:relative;overflow:hidden;grid-template-columns:1fr 1fr;@media ", "{padding:24px 48px 0;flex-direction:column;}@media ", "{padding:", ";width:calc(100vw - 32px);flex-direction:column;}"], function (props) {
  return props.grid ? "grid" : "flex";
}, function (props) {
  return props.row ? "row" : "column";
}, function (props) {
  return props.nopadding ? "0" : "32px 48px 0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.nopadding ? "0" : "16px 16px 0";
});
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h2.withConfig({
  displayName: "GlobalComponents__SectionTitle",
  componentId: "sc-6qzy6y-1"
})(["font-weight:800;font-size:", ";line-height:", ";width:max-content;max-width:100%;background:linear-gradient( 121.57deg,#ffffff 18.77%,rgba(255,255,255,0.66) 60.15% );-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:16px;padding:", ";@media ", "{font-size:", ";line-height:", ";margin-bottom:12px;padding:", ";}@media ", "{font-size:32px;line-height:40px;font-size:", ";line-height:", ";margin-bottom:8px;padding:", ";max-width:100%;}"], function (props) {
  return props.main ? "65px" : "56px";
}, function (props) {
  return props.main ? "72px" : "56px";
}, function (props) {
  return props.main ? "58px 0 16px" : "0";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "56px" : "48px";
}, function (props) {
  return props.main ? "40px 0 12px" : "0";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (props) {
  return props.main ? "28px" : "32px";
}, function (props) {
  return props.main ? "32px" : "40px";
}, function (props) {
  return props.main ? "16px 0 8px" : "0";
});
var SectionText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionText",
  componentId: "sc-6qzy6y-2"
})(["max-width:800px;font-size:24px;line-height:40px;font-weight:300;padding-bottom:3.6rem;color:rgba(255,255,255,0.5);@media ", "{max-width:670px;font-size:20px;line-height:32px;padding-bottom:24px;}@media ", "{font-size:16px;line-height:24px;padding-bottom:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionDivider = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__SectionDivider",
  componentId: "sc-6qzy6y-3"
})(["width:64px;height:6px;border-radius:10px;background-color:#fff;background:", ";margin:", ";@media ", "{width:48px;height:4px;}@media ", "{width:32px;height:2px;}"], function (props) {
  return props.colorAlt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (props) {
  return props.divider ? "4rem 0" : "";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SectionSubText = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "GlobalComponents__SectionSubText",
  componentId: "sc-6qzy6y-4"
})(["max-width:800px;font-weight:300;font-size:18px;line-height:32px;color:rgba(255,255,255,0.75);@media ", "{max-width:672px;font-size:16px;line-height:25px;}@media ", "{font-size:14px;line-height:22px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var SecondaryBtn = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__SecondaryBtn",
  componentId: "sc-6qzy6y-5"
})(["color:#fff;background:none;border:1px solid rgba(255,255,255,0.33);box-sizing:border-box;border-radius:999px;padding:16px 24px;font-weight:600;font-size:18px;line-height:16px;width:fit-content;margin-top:32px;margin-bottom:80px;cursor:pointer;transition:0.4s ease;&:focus{outline:none;}&:hover{color:#0f1624;background:#fff;border:1px solid #fff;}&:active{background:#e0e4eb;border:1px solid #304169;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{margin-top:24px;margin-bottom:64px;padding:16px 24px;width:fit-content;font-size:20px;line-height:20px;}@media ", "{margin-top:16px;margin-bottom:40px;padding:8px 16px;width:100%;font-size:14px;line-height:16px;}"], function (props) {
  return props.theme.breakpoints.md;
}, function (props) {
  return props.theme.breakpoints.sm;
});
var ButtonBack = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__ButtonBack",
  componentId: "sc-6qzy6y-6"
})(["width:", ";height:", ";border-radius:50px;font-size:", ";font-weight:600;display:flex;align-items:center;justify-content:center;margin:", ";color:#fff;background:", ";cursor:pointer;transition:0.5s ease;position:relative;overflow:hidden;opacity:", ";@media ", "{width:", ";height:", ";font-size:", ";margin-bottom:", ";}@media ", "{width:100%;height:32px;font-size:14px;margin-bottom:", ";}"], function (_ref) {
  var alt = _ref.alt;
  return alt ? "150px" : "262px";
}, function (_ref2) {
  var alt = _ref2.alt;
  return alt ? "52px" : "64px";
}, function (_ref3) {
  var alt = _ref3.alt;
  return alt ? "20px" : "24px";
}, function (_ref4) {
  var alt = _ref4.alt,
      form = _ref4.form;
  return alt || form ? "0" : "0 0 80px";
}, function (_ref5) {
  var alt = _ref5.alt;
  return alt ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)" : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)";
}, function (_ref6) {
  var disabled = _ref6.disabled;
  return disabled ? ".5" : "1";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref7) {
  var alt = _ref7.alt;
  return alt ? "150px" : "184px";
}, function (_ref8) {
  var alt = _ref8.alt;
  return alt ? "52px" : "48px";
}, function (_ref9) {
  var alt = _ref9.alt;
  return alt ? "20px" : "16px";
}, function (_ref10) {
  var alt = _ref10.alt;
  return alt ? "0" : "64px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref11) {
  var alt = _ref11.alt;
  return alt ? "0" : "32px";
});
var ButtonFront = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.button.withConfig({
  displayName: "GlobalComponents__ButtonFront",
  componentId: "sc-6qzy6y-7"
})(["border:none;border-radius:50px;color:#fff;display:flex;position:absolute;top:0;left:0;width:100%;height:100%;background:", ";opacity:", ";transition:0.4s ease;font-size:", ";font-weight:600;align-items:center;justify-content:center;cursor:pointer;box-shadow:", ";&:hover{opacity:0;}&:focus{outline:none;}&:active{opacity:1;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}&:disabled{background:linear-gradient(270deg,#00dbd8 0%,#b133ff 100%);opacity:0.5;box-shadow:inset 0px 2px 1px rgba(46,49,55,0.15),inset 0px 0px 4px rgba(20,20,55,0.3);}@media ", "{font-size:", ";}@media ", "{font-size:14px;}"], function (_ref12) {
  var alt = _ref12.alt;
  return alt ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)" : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)";
}, function (_ref13) {
  var disabled = _ref13.disabled;
  return disabled ? ".5" : "1";
}, function (_ref14) {
  var alt = _ref14.alt;
  return alt ? "20px" : "24px";
}, function (_ref15) {
  var disabled = _ref15.disabled;
  return disabled ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)" : "none";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref16) {
  var alt = _ref16.alt;
  return alt ? "20px" : "16px";
}, function (props) {
  return props.theme.breakpoints.sm;
});
var LinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkContainer",
  componentId: "sc-6qzy6y-8"
})(["margin-left:", ";transition:0.3s ease;justify-content:center;border-radius:50px;padding:8px;&:hover{background-color:#212d45;transform:scale(1.2);cursor:pointer;}@media ", "{margin-left:", ";}@media ", "{margin-left:", ";}"], function (_ref17) {
  var large = _ref17.large;
  return large ? "24px" : "16px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref18) {
  var large = _ref18.large;
  return large ? "16px" : "8px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref19) {
  var large = _ref19.large;
  return large ? "0" : "8px";
});
var LinkIconImg = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "GlobalComponents__LinkIconImg",
  componentId: "sc-6qzy6y-9"
})(["display:flex;height:", ";@media ", "{height:", ";}@media ", "{height:", ";}"], function (_ref20) {
  var large = _ref20.large;
  return large ? "32px" : "24px";
}, function (props) {
  return props.theme.breakpoints.md;
}, function (_ref21) {
  var nav = _ref21.nav;
  return nav ? "16px" : "24px";
}, function (props) {
  return props.theme.breakpoints.sm;
}, function (_ref22) {
  var large = _ref22.large;
  return large ? "32px" : "16px";
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlNlY3Rpb24iLCJzdHlsZWQiLCJwcm9wcyIsImdyaWQiLCJyb3ciLCJub3BhZGRpbmciLCJ0aGVtZSIsImJyZWFrcG9pbnRzIiwibWQiLCJzbSIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiYWx0IiwiZm9ybSIsImRpc2FibGVkIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxPQUFPLEdBQUdDLHlFQUFIO0FBQUE7QUFBQTtBQUFBLDZTQUNSLFVBQUNDLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLElBQU4sR0FBYSxNQUFiLEdBQXNCLE1BQWxDO0FBQUEsQ0FEUSxFQUVELFVBQUNELEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNFLEdBQU4sR0FBWSxLQUFaLEdBQW9CLFFBQWhDO0FBQUEsQ0FGQyxFQUdSLFVBQUNGLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0IsYUFBcEM7QUFBQSxDQUhRLEVBV1YsVUFBQ0gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCQyxFQUFuQztBQUFBLENBWFUsRUFnQlYsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0ksS0FBTixDQUFZQyxXQUFaLENBQXdCRSxFQUFuQztBQUFBLENBaEJVLEVBaUJQLFVBQUNQLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNHLFNBQU4sR0FBa0IsR0FBbEIs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QUdlLEtBQUgsVUFBR0EsS0FBSDtBQUFBLFNBQWdCQSxLQUFLLEdBQUcsTUFBSCxHQUFZLE1BQWpDO0FBQUEsQ0FUWSxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yYjFlMzYyMWQzMjJiYzRiZDFkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcblx0ZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIil9O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gKHByb3BzLnJvdyA/IFwicm93XCIgOiBcImNvbHVtblwiKX07XHJcblx0cGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMzJweCA0OHB4IDBcIil9O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1heC13aWR0aDogMTA0MHB4O1xyXG5cdGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuXHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0cGFkZGluZzogMjRweCA0OHB4IDA7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0cGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5ub3BhZGRpbmcgPyBcIjBcIiA6IFwiMTZweCAxNnB4IDBcIil9O1xyXG5cclxuXHRcdHdpZHRoOiBjYWxjKDEwMHZ3IC0gMzJweCk7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXHJcblx0Zm9udC13ZWlnaHQ6IDgwMDtcclxuXHRmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNjVweFwiIDogXCI1NnB4XCIpfTtcclxuXHRsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI3MnB4XCIgOiBcIjU2cHhcIil9O1xyXG5cdHdpZHRoOiBtYXgtY29udGVudDtcclxuXHRtYXgtd2lkdGg6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG5cdFx0MTIxLjU3ZGVnLFxyXG5cdFx0I2ZmZmZmZiAxOC43NyUsXHJcblx0XHRyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDYwLjE1JVxyXG5cdCk7XHJcblx0LXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcblx0LXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0cGFkZGluZzogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1OHB4IDAgMTZweFwiIDogXCIwXCIpfTtcclxuXHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0Zm9udC1zaXplOiAkeyhwcm9wcykgPT4gKHByb3BzLm1haW4gPyBcIjU2cHhcIiA6IFwiNDhweFwiKX07XHJcblx0XHRsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCI1NnB4XCIgOiBcIjQ4cHhcIil9O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHRcdHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiNDBweCAwIDEycHhcIiA6IFwiMFwiKX07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRmb250LXNpemU6IDMycHg7XHJcblx0XHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRcdGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5tYWluID8gXCIyOHB4XCIgOiBcIjMycHhcIil9O1xyXG5cdFx0bGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMzJweFwiIDogXCI0MHB4XCIpfTtcclxuXHRcdG1hcmdpbi1ib3R0b206IDhweDtcclxuXHRcdHBhZGRpbmc6ICR7KHByb3BzKSA9PiAocHJvcHMubWFpbiA/IFwiMTZweCAwIDhweFwiIDogXCIwXCIpfTtcclxuXHRcdG1heC13aWR0aDogMTAwJTtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRleHQgPSBzdHlsZWQucGBcclxuXHRtYXgtd2lkdGg6IDgwMHB4O1xyXG5cdGZvbnQtc2l6ZTogMjRweDtcclxuXHRsaW5lLWhlaWdodDogNDBweDtcclxuXHRmb250LXdlaWdodDogMzAwO1xyXG5cdHBhZGRpbmctYm90dG9tOiAzLjZyZW07XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuXHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0bWF4LXdpZHRoOiA2NzBweDtcclxuXHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDI0cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjRweDtcclxuXHRcdHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGl2aWRlciA9IHN0eWxlZC5kaXZgXHJcblx0d2lkdGg6IDY0cHg7XHJcblx0aGVpZ2h0OiA2cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PlxyXG5cdFx0cHJvcHMuY29sb3JBbHRcclxuXHRcdFx0PyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNGNDY3MzcgMCUsICM5NDVERDYgMTAwJSlcIlxyXG5cdFx0XHQ6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzEzQURDNyAwJSwgIzk0NURENiAxMDAlKVwifTtcclxuXHJcblx0bWFyZ2luOiAkeyhwcm9wcykgPT4gKHByb3BzLmRpdmlkZXIgPyBcIjRyZW0gMFwiIDogXCJcIil9O1xyXG5cclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcblx0XHR3aWR0aDogNDhweDtcclxuXHRcdGhlaWdodDogNHB4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0d2lkdGg6IDMycHg7XHJcblx0XHRoZWlnaHQ6IDJweDtcclxuXHR9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxyXG5cdG1heC13aWR0aDogODAwcHg7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRmb250LXNpemU6IDE4cHg7XHJcblx0bGluZS1oZWlnaHQ6IDMycHg7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdG1heC13aWR0aDogNjcycHg7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjVweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXHJcblx0Y29sb3I6ICNmZmY7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0cGFkZGluZzogMTZweCAyNHB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cdHdpZHRoOiBmaXQtY29udGVudDtcclxuXHRtYXJnaW4tdG9wOiAzMnB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuXHQmOmZvY3VzIHtcclxuXHRcdG91dGxpbmU6IG5vbmU7XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdGNvbG9yOiAjMGYxNjI0O1xyXG5cdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0fVxyXG5cclxuXHQmOmFjdGl2ZSB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZTBlNGViO1xyXG5cdFx0Ym9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcblx0XHRcdGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdG1hcmdpbi10b3A6IDI0cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG5cdFx0cGFkZGluZzogMTZweCAyNHB4O1xyXG5cdFx0d2lkdGg6IGZpdC1jb250ZW50O1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRtYXJnaW4tdG9wOiAxNnB4O1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHRcdHBhZGRpbmc6IDhweCAxNnB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMTZweDtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQmFjayA9IHN0eWxlZC5kaXZgXHJcblx0d2lkdGg6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjE1MHB4XCIgOiBcIjI2MnB4XCIpfTtcclxuXHRoZWlnaHQ6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjUycHhcIiA6IFwiNjRweFwiKX07XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjIwcHhcIiA6IFwiMjRweFwiKX07XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luOiAkeyh7IGFsdCwgZm9ybSB9KSA9PiAoYWx0IHx8IGZvcm0gPyBcIjBcIiA6IFwiMCAwIDgwcHhcIil9O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+XHJcblx0XHRhbHRcclxuXHRcdFx0PyBcImxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmZjYyMmUgMCUsICNCMTMzRkYgMTAwJSlcIlxyXG5cdFx0XHQ6IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKVwifTtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCIuNVwiIDogXCIxXCIpfTtcclxuXHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0d2lkdGg6ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjE1MHB4XCIgOiBcIjE4NHB4XCIpfTtcclxuXHRcdGhlaWdodDogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiNTJweFwiIDogXCI0OHB4XCIpfTtcclxuXHRcdGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcclxuXHRcdG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiNjRweFwiKX07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGhlaWdodDogMzJweDtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdG1hcmdpbi1ib3R0b206ICR7KHsgYWx0IH0pID0+IChhbHQgPyBcIjBcIiA6IFwiMzJweFwiKX07XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbkZyb250ID0gc3R5bGVkLmJ1dHRvbmBcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZDogJHsoeyBhbHQgfSkgPT5cclxuXHRcdGFsdFxyXG5cdFx0XHQ/IFwibGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKVwiXHJcblx0XHRcdDogXCJsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpXCJ9O1xyXG5cdG9wYWNpdHk6ICR7KHsgZGlzYWJsZWQgfSkgPT4gKGRpc2FibGVkID8gXCIuNVwiIDogXCIxXCIpfTtcclxuXHR0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcblx0Zm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiAoYWx0ID8gXCIyMHB4XCIgOiBcIjI0cHhcIil9O1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym94LXNoYWRvdzogJHsoeyBkaXNhYmxlZCB9KSA9PlxyXG5cdFx0ZGlzYWJsZWRcclxuXHRcdFx0PyBcImluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKVwiXHJcblx0XHRcdDogXCJub25lXCJ9O1xyXG5cclxuXHQmOmhvdmVyIHtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cdCY6Zm9jdXMge1xyXG5cdFx0b3V0bGluZTogbm9uZTtcclxuXHR9XHJcblx0JjphY3RpdmUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcblx0XHRcdGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuXHR9XHJcblxyXG5cdCY6ZGlzYWJsZWQge1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwZGJkOCAwJSwgI2IxMzNmZiAxMDAlKTtcclxuXHRcdG9wYWNpdHk6IDAuNTtcclxuXHRcdGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksXHJcblx0XHRcdGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuXHRcdGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gKGFsdCA/IFwiMjBweFwiIDogXCIxNnB4XCIpfTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblx0bWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIyNHB4XCIgOiBcIjE2cHhcIil9O1xyXG5cdHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdHBhZGRpbmc6IDhweDtcclxuXHJcblx0Jjpob3ZlciB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0bWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIxNnB4XCIgOiBcIjhweFwiKX07XHJcblx0fVxyXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdG1hcmdpbi1sZWZ0OiAkeyh7IGxhcmdlIH0pID0+IChsYXJnZSA/IFwiMFwiIDogXCI4cHhcIil9O1xyXG5cdH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjI0cHhcIil9O1xyXG5cclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcblx0XHRoZWlnaHQ6ICR7KHsgbmF2IH0pID0+IChuYXYgPyBcIjE2cHhcIiA6IFwiMjRweFwiKX07XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRoZWlnaHQ6ICR7KHsgbGFyZ2UgfSkgPT4gKGxhcmdlID8gXCIzMnB4XCIgOiBcIjE2cHhcIil9O1xyXG5cdH1cclxuYDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==