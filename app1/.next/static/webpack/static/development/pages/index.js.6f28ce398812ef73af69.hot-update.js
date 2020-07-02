webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/global/layout/index.tsx":
/*!********************************************!*\
  !*** ./components/global/layout/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/breadcrumb/style */ "./node_modules/antd/lib/breadcrumb/style/index.js");
/* harmony import */ var antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/breadcrumb */ "./node_modules/antd/lib/breadcrumb/index.js");
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./head */ "./components/global/layout/head.tsx");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_12__);









 // import {CustomNProgress} from 'components';




var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a.Footer;
var MenuItem = antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
var activeClass = 'ant-menu-item-selected';

var MainLayout = function MainLayout(_ref) {
  var title = _ref.title,
      description = _ref.description,
      ogImage = _ref.ogImage,
      url = _ref.url,
      router = _ref.router,
      children = _ref.children;
  var asPath = router.asPath;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_head__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: "app1 | ".concat(title),
    description: description,
    ogImage: ogImage,
    url: url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "layout"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    theme: "dark",
    mode: "horizontal",
    defaultSelectedKeys: ['2'],
    style: {
      lineHeight: '64px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuItem, {
    key: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
    className: asPath === '/' ? activeClass : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuItem, {
    key: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
    className: asPath === '/about' ? activeClass : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/about"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "About nos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MenuItem, {
    key: uuid_v4__WEBPACK_IMPORTED_MODULE_7___default()(),
    className: asPath === '/posts' ? activeClass : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
    href: "/posts"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, "Posts"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Content, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      margin: '16px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, "List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_1___default.a.Item, null, "App")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "content-body"
  }, children)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Footer, null, "app1 @", new Date().getFullYear(), " Created by")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(recompose__WEBPACK_IMPORTED_MODULE_10__["compose"])(next_router__WEBPACK_IMPORTED_MODULE_11__["withRouter"])(MainLayout));

/***/ })

})
//# sourceMappingURL=index.js.6f28ce398812ef73af69.hot-update.js.map