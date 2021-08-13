webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar layout_1 = __webpack_require__(/*! ./shared/Layout/layout */ \"./src/shared/Layout/layout.tsx\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar header_1 = __webpack_require__(/*! ./shared/Header/header */ \"./src/shared/Header/header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.tsx\");\r\nvar Text_1 = __webpack_require__(/*! ./shared/Text */ \"./src/shared/Text/index.ts\");\r\nvar generateRandomIndex_1 = __webpack_require__(/*! ./utils/react/generateRandomIndex */ \"./src/utils/react/generateRandomIndex.ts\");\r\nvar LIST = [\r\n    { text: 'some value' },\r\n    { text: 'second some value' },\r\n    { text: 'this some value too' }\r\n].map(generateRandomIndex_1.generateId);\r\nfunction AppComponent() {\r\n    // const [list,  setList] = React.useState(LIST)\r\n    //\r\n    // const handleItemClick = (id: string | undefined) => {\r\n    //   setList(list.filter((item) => item.id != id));\r\n    // }\r\n    //\r\n    // const handleAdd = () => {\r\n    //   setList(list.concat(generateId({text: generateRandomString()})))\r\n    // }\r\n    return (react_1.default.createElement(layout_1.Layout, null,\r\n        react_1.default.createElement(header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardsList_1.CardsList, null),\r\n            react_1.default.createElement(Text_1.Text, { A: true, size: 20, mobileSize: 28, color: Text_1.EColor.green }, \"\\u0422\\u0438\\u043F\\u043E \\u0442\\u0435\\u043A\\u0441\\u0442\"))));\r\n}\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/client/index.jsx":
/*!******************************!*\
  !*** ./src/client/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar React = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar ReactDOM = __importStar(__webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nwindow.addEventListener('load', function () {\r\n    ReactDOM.hydrate(React.createElement(App_1.App, null), document.getElementById('react_root')); //render\r\n});\r\n\n\n//# sourceURL=webpack:///./src/client/index.jsx?");

/***/ })

})