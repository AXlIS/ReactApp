webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/shared/SearchBlock/UserBlock/userblock.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/shared/SearchBlock/UserBlock/userblock.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".userblock__userBox--1rdcT {\\r\\n    cursor: pointer;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.userblock__userBox--1rdcT:hover span{\\r\\n    color: var(--orange);\\r\\n}\\r\\n\\r\\n.userblock__userBox--1rdcT:hover .userblock__avatarBox--3RajS {\\r\\n    box-shadow: 0 0 0 1px var(--orange);\\r\\n}\\r\\n\\r\\n.userblock__avatarBox--3RajS {\\r\\n    width: 60px;\\r\\n    height: 60px;\\r\\n    padding: 5px;\\r\\n    border-radius: 100%;\\r\\n    box-shadow: none;\\r\\n}\\r\\n\\r\\n.userblock__avatarImg--31Ypd {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    object-fit: cover;\\r\\n    border-radius: 100%;\\r\\n}\\r\\n\\r\\n.userblock__username--3jUE9 {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n@media all and (min-width: 1024px) {\\r\\n    .userblock__username--3jUE9 {\\r\\n        padding: 0 0 0 5px;\\r\\n        display: flex;\\r\\n    }\\r\\n}\\r\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"userBox\": \"userblock__userBox--1rdcT\",\n\t\"avatarBox\": \"userblock__avatarBox--3RajS\",\n\t\"avatarImg\": \"userblock__avatarImg--31Ypd\",\n\t\"username\": \"userblock__username--3jUE9\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/SearchBlock/UserBlock/userblock.css?./node_modules/css-loader/dist/cjs.js??ref--5-1");

/***/ }),

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
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar SearchBlock_css_1 = __importDefault(__webpack_require__(/*! ./SearchBlock.css */ \"./src/shared/SearchBlock/SearchBlock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/SearchBlock/UserBlock/index.ts\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar global_1 = __webpack_require__(/*! ../../global */ \"./src/global.js\");\r\nfunction SearchBlock(_a) {\r\n    var token = _a.token;\r\n    var _b = react_1.useState({}), data = _b[0], setData = _b[1];\r\n    react_1.useEffect(function () {\r\n        console.log(token);\r\n        axios_1.default.get(global_1.BASE_API_URL + \"v1/me\", {\r\n            headers: { Authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (res) {\r\n            var userData = res.data;\r\n            setData({ name: userData.name, avatarImg: userData.icon_img });\r\n        })\r\n            .catch();\r\n    }, [token]);\r\n    return (react_1.default.createElement(\"div\", { className: SearchBlock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: data.avatarImg, username: data.name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/SearchBlock/UserBlock/UserBlock.tsx":
/*!********************************************************!*\
  !*** ./src/shared/SearchBlock/UserBlock/UserBlock.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Text_1 = __webpack_require__(/*! ../../Text */ \"./src/shared/Text/index.ts\");\r\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/SearchBlock/UserBlock/userblock.css\"));\r\nvar icons_1 = __webpack_require__(/*! ../../icons */ \"./src/shared/icons/index.ts\");\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { className: userblock_css_1.default.userBox, href: 'https://www.reddit.com/api/v1/authorize?client_id=u2UPh9_FDPjrJbgN2kF8MA&response_type=code&\\n' +\r\n            'state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity' },\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userblock_css_1.default.avatarImg })\r\n            : react_1.default.createElement(icons_1.AnonIcon, null)),\r\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.username },\r\n            react_1.default.createElement(Text_1.Text, { size: 20, color: username ? Text_1.EColor.black : Text_1.EColor.grey99 }, username || 'Anonymous'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/SearchBlock/UserBlock/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/SearchBlock/UserBlock/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/SearchBlock/UserBlock/userblock.css":
/*!********************************************************!*\
  !*** ./src/shared/SearchBlock/UserBlock/userblock.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/SearchBlock/UserBlock/userblock.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\nif (true) {\n  if (!content.locals) {\n    module.hot.accept(\n      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/SearchBlock/UserBlock/userblock.css\",\n      function () {\n        var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./userblock.css */ \"./node_modules/css-loader/dist/cjs.js?!./src/shared/SearchBlock/UserBlock/userblock.css\");\n\n              newContent = newContent.__esModule ? newContent.default : newContent;\n\n              if (typeof newContent === 'string') {\n                newContent = [[module.i, newContent, '']];\n              }\n\n              update(newContent);\n      }\n    )\n  }\n\n  module.hot.dispose(function() { \n    update();\n  });\n}\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/shared/SearchBlock/UserBlock/userblock.css?");

/***/ })

})