self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var Img = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.img.withConfig({
  displayName: "ProjectsStyles__Img",
  componentId: "l76idc-0"
})(["width:100%;height:100%;object-fit:cover;overflow:hidden;"]);
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.section.withConfig({
  displayName: "ProjectsStyles__GridContainer",
  componentId: "l76idc-1"
})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(400px,1fr));padding:3rem;place-items:center;column-gap:2rem;row-gap:3rem;@media ", "{display:flex;flex-direction:column;padding:2rem;padding-bottom:0;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__BlogCard",
  componentId: "l76idc-2"
})(["border-radius:10px;box-shadow:3px 3px 20px rgba(80,78,78,0.5);text-align:center;width:400px;@media ", "{width:100%;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var TitleContent = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__TitleContent",
  componentId: "l76idc-3"
})(["text-align:center;z-index:20;width:100%;"]);
var HeaderThree = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.h3.withConfig({
  displayName: "ProjectsStyles__HeaderThree",
  componentId: "l76idc-4"
})(["font-weight:500;letter-spacing:2px;color:#9cc9e3;padding:0.5rem 0;font-size:", ";"], function (props) {
  return props.title ? "3rem" : "2rem";
});
var Hr = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.hr.withConfig({
  displayName: "ProjectsStyles__Hr",
  componentId: "l76idc-5"
})(["width:50px;height:3px;margin:20px auto;border:0;background:#d0bb57;"]);
var Intro = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.div.withConfig({
  displayName: "ProjectsStyles__Intro",
  componentId: "l76idc-6"
})(["width:170px;margin:0 auto;color:#dce3e7;font-family:\"Droid Serif\",serif;font-size:13px;font-style:italic;line-height:18px;"]);
var CardInfo = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.p.withConfig({
  displayName: "ProjectsStyles__CardInfo",
  componentId: "l76idc-7"
})(["width:100%;padding:0 50px;color:#e4e6e7;font-style:2rem;line-height:24px;text-align:justify;@media ", "{padding:0.3rem;}"], function (props) {
  return props.theme.breakpoints.sm;
});
var UtilityList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__UtilityList",
  componentId: "l76idc-8"
})(["list-style-type:none;padding:0;display:flex;justify-content:space-around;margin:2.5rem 0;"]);
var ExternalLinks = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.a.withConfig({
  displayName: "ProjectsStyles__ExternalLinks",
  componentId: "l76idc-9"
})(["color:#d4c0c0;font-size:1.6rem;padding:1rem 1.5rem;background:#6b3030;border-radius:15px;transition:0.5s;&:hover{background:#801414;}"]);
var TagList = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.ul.withConfig({
  displayName: "ProjectsStyles__TagList",
  componentId: "l76idc-10"
})(["display:flex;", " padding:2rem;"], ""
/* justify-content: space-around; */
);
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_0__.default.li.withConfig({
  displayName: "ProjectsStyles__Tag",
  componentId: "l76idc-11"
})(["color:#d8bfbf;font-size:1.5rem;"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHNTdHlsZXMuanMiXSwibmFtZXMiOlsiSW1nIiwic3R5bGVkIiwiR3JpZENvbnRhaW5lciIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsInNtIiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsInRpdGxlIiwiSHIiLCJJbnRybyIsIkNhcmRJbmZvIiwiVXRpbGl0eUxpc3QiLCJFeHRlcm5hbExpbmtzIiwiVGFnTGlzdCIsIlRhZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLEdBQUcsR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsZ0VBQVQ7QUFPQSxJQUFNQyxhQUFhLEdBQUdELHlFQUFIO0FBQUE7QUFBQTtBQUFBLDJOQU9oQixVQUFDRSxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFdBQVosQ0FBd0JDLEVBQW5DO0FBQUEsQ0FQZ0IsQ0FBbkI7QUFjQSxJQUFNQyxRQUFRLEdBQUdOLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDZIQUtYLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQUxXLENBQWQ7QUFTQSxJQUFNRSxZQUFZLEdBQUdQLHFFQUFIO0FBQUE7QUFBQTtBQUFBLGdEQUFsQjtBQU1BLElBQU1RLFdBQVcsR0FBR1Isb0VBQUg7QUFBQTtBQUFBO0FBQUEsMEZBS1YsVUFBQ0UsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ08sS0FBTixHQUFjLE1BQWQsR0FBdUIsTUFBbkM7QUFBQSxDQUxVLENBQWpCO0FBUUEsSUFBTUMsRUFBRSxHQUFHVixvRUFBSDtBQUFBO0FBQUE7QUFBQSwyRUFBUjtBQVFBLElBQU1XLEtBQUssR0FBR1gscUVBQUg7QUFBQTtBQUFBO0FBQUEsb0lBQVg7QUFVQSxJQUFNWSxRQUFRLEdBQUdaLG1FQUFIO0FBQUE7QUFBQTtBQUFBLGlJQU9YLFVBQUNFLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsV0FBWixDQUF3QkMsRUFBbkM7QUFBQSxDQVBXLENBQWQ7QUFZQSxJQUFNUSxXQUFXLEdBQUdiLG9FQUFIO0FBQUE7QUFBQTtBQUFBLGlHQUFqQjtBQVFBLElBQU1jLGFBQWEsR0FBR2QsbUVBQUg7QUFBQTtBQUFBO0FBQUEsNklBQW5CO0FBWUEsSUFBTWUsT0FBTyxHQUFHZixvRUFBSDtBQUFBO0FBQUE7QUFBQSx3Q0FFakI7QUFBRztBQUZjLENBQWI7QUFLQSxJQUFNZ0IsR0FBRyxHQUFHaEIsb0VBQUg7QUFBQTtBQUFBO0FBQUEsdUNBQVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTcwNThmZGJjMDBhODFlYjY3NDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcblx0ZGlzcGxheTogZ3JpZDtcclxuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg0MDBweCwgMWZyKSk7XHJcblx0cGFkZGluZzogM3JlbTtcclxuXHRwbGFjZS1pdGVtczogY2VudGVyO1xyXG5cdGNvbHVtbi1nYXA6IDJyZW07XHJcblx0cm93LWdhcDogM3JlbTtcclxuXHRAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdHBhZGRpbmc6IDJyZW07XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMDtcclxuXHR9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRib3gtc2hhZG93OiAzcHggM3B4IDIwcHggcmdiYSg4MCwgNzgsIDc4LCAwLjUpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogNDAwcHg7XHJcblx0QG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ei1pbmRleDogMjA7XHJcblx0d2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyVGhyZWUgPSBzdHlsZWQuaDNgXHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cdGNvbG9yOiAjOWNjOWUzO1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAwO1xyXG5cdGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy50aXRsZSA/IFwiM3JlbVwiIDogXCIycmVtXCIpfTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBIciA9IHN0eWxlZC5ocmBcclxuXHR3aWR0aDogNTBweDtcclxuXHRoZWlnaHQ6IDNweDtcclxuXHRtYXJnaW46IDIwcHggYXV0bztcclxuXHRib3JkZXI6IDA7XHJcblx0YmFja2dyb3VuZDogI2QwYmI1NztcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbnRybyA9IHN0eWxlZC5kaXZgXHJcblx0d2lkdGg6IDE3MHB4O1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdGNvbG9yOiAjZGNlM2U3O1xyXG5cdGZvbnQtZmFtaWx5OiBcIkRyb2lkIFNlcmlmXCIsIHNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTNweDtcclxuXHRmb250LXN0eWxlOiBpdGFsaWM7XHJcblx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAwIDUwcHg7XHJcblx0Y29sb3I6ICNlNGU2ZTc7XHJcblx0Zm9udC1zdHlsZTogMnJlbTtcclxuXHRsaW5lLWhlaWdodDogMjRweDtcclxuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cdEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdHBhZGRpbmc6IDAuM3JlbTtcclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgVXRpbGl0eUxpc3QgPSBzdHlsZWQudWxgXHJcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRtYXJnaW46IDIuNXJlbSAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEV4dGVybmFsTGlua3MgPSBzdHlsZWQuYWBcclxuXHRjb2xvcjogI2Q0YzBjMDtcclxuXHRmb250LXNpemU6IDEuNnJlbTtcclxuXHRwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxuXHRiYWNrZ3JvdW5kOiAjNmIzMDMwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0dHJhbnNpdGlvbjogMC41cztcclxuXHQmOmhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQ6ICM4MDE0MTQ7XHJcblx0fVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXHJcblx0ZGlzcGxheTogZmxleDtcclxuXHQke1wiXCIgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7ICovfVxyXG5cdHBhZGRpbmc6IDJyZW07XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcblx0Y29sb3I6ICNkOGJmYmY7XHJcblx0Zm9udC1zaXplOiAxLjVyZW07XHJcbmA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=