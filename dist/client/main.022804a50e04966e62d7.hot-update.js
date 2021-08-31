webpackHotUpdate("main",{

/***/ "./src/shared/Header/header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ../SearchBlock/SearchBlock */ \"./src/shared/SearchBlock/SearchBlock.tsx\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ../ThreadTitle/ThreadTitle */ \"./src/shared/ThreadTitle/ThreadTitle.tsx\");\r\nvar SortBlock_1 = __webpack_require__(/*! ../SortBlock/SortBlock */ \"./src/shared/SortBlock/SortBlock.tsx\");\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nfunction Header(_a) {\r\n    var token = _a.token;\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, { token: token }),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.tsx?");

/***/ }),

/***/ "./src/shared/SearchBlock/SearchBlock.tsx":
/*!************************************************!*\
  !*** ./src/shared/SearchBlock/SearchBlock.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar SearchBlock_css_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.css */ \"./src/shared/SearchBlock/SearchBlock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/SearchBlock/UserBlock/index.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar global_1 = __webpack_require__(/*! ../../global */ \"./src/global.js\");\r\nfunction SearchBlock(_a) {\r\n    var token = _a.token;\r\n    var _b = react_1.useState({}), data = _b[0], setData = _b[1];\r\n    react_1.useEffect(function () {\r\n        axios_1.default.get(global_1.BASE_API_URL + \"v1/me\", {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (res) {\r\n            var userData = res.data;\r\n            setData({ name: userData.name, avatarImg: userData.icon_img });\r\n        })\r\n            .catch();\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: true })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/SearchBlock/SearchBlock.tsx?");

/***/ })

})