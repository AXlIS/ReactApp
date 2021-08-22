webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nvar MenuItemsList_1 = __webpack_require__(/*! ../../../MenuItemsList */ \"./src/shared/MenuItemsList/index.ts\");\r\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\r\nvar Text_1 = __webpack_require__(/*! ../../../Text */ \"./src/shared/Text/index.ts\");\r\nvar menuItemsData_1 = __webpack_require__(/*! ../../../MenuItemsList/menuItemsData */ \"./src/shared/MenuItemsList/menuItemsData.tsx\");\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n                react_1.default.createElement(icons_1.MenuIcon, null)), isOpen: false },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown },\r\n                react_1.default.createElement(MenuItemsList_1.MenuItemsList, { menuItems: menuItemsData_1.menuItemData, postId: '1' }),\r\n                react_1.default.createElement(\"button\", { className: menu_css_1.default.closeButton },\r\n                    react_1.default.createElement(Text_1.Text, { mobileSize: 14, size: 16, color: Text_1.EColor.grey66 }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"))))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/MenuItemsList/menuItemsData.tsx":
/*!****************************************************!*\
  !*** ./src/shared/MenuItemsList/menuItemsData.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.menuItemData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar icons_1 = __webpack_require__(/*! ../icons */ \"./src/shared/icons/index.ts\");\r\nexports.menuItemData = [\r\n    {\r\n        size: 14,\r\n        mobileSize: 12,\r\n        text: 'Комментарий',\r\n        children: [react_1.default.createElement(icons_1.CommentIcon, null)],\r\n        mobileNone: true,\r\n        divider: true,\r\n    },\r\n    {\r\n        size: 14,\r\n        mobileSize: 12,\r\n        text: 'Поделиться',\r\n        children: [react_1.default.createElement(icons_1.ShareIcon, null)],\r\n        mobileNone: true,\r\n        divider: true,\r\n    },\r\n    {\r\n        size: 14,\r\n        mobileSize: 12,\r\n        text: 'Скрыть',\r\n        children: [react_1.default.createElement(icons_1.BlockIcon, null)],\r\n        mobileNone: false,\r\n        divider: true,\r\n    },\r\n    {\r\n        size: 14,\r\n        mobileSize: 12,\r\n        text: 'Сохранить',\r\n        children: [react_1.default.createElement(icons_1.AddIcon, null)],\r\n        mobileNone: true,\r\n        divider: true,\r\n    },\r\n    {\r\n        size: 14,\r\n        mobileSize: 12,\r\n        text: 'Пожаловаться',\r\n        children: [react_1.default.createElement(icons_1.WarningIcon, null)],\r\n        mobileNone: false,\r\n        divider: false\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/shared/MenuItemsList/menuItemsData.tsx?");

/***/ })

})