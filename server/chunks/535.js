exports.id = 535;
exports.ids = [535];
exports.modules = {

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_vietnamese_display_swap_weight_500_600_700_800_900_variableName_interText___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1335);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_vietnamese_display_swap_weight_500_600_700_800_900_variableName_interText___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_vietnamese_display_swap_weight_500_600_700_800_900_variableName_interText___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_business_color_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7538);
/* harmony import */ var _styles_business_color_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_business_color_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _shared_components_layout_LayoutWebsite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1986);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1
        }
    }
});
const ConfigLayout = ({ children, getLayout })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: getLayout(children)
    });
};
function App({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_components_layout_LayoutWebsite__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: page
        }));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: (next_font_google_target_css_path_src_pages_app_tsx_import_Inter_arguments_subsets_vietnamese_display_swap_weight_500_600_700_800_900_variableName_interText___WEBPACK_IMPORTED_MODULE_6___default().className),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Website NGS"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Website NGS"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "keywords",
                        content: "C\xf4ng nghệ th\xf4ng tin, Giải ph\xe1p số"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "website"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/logo.svg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "apple-touch-icon",
                        href: "/logo.svg"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClientProvider, {
                client: queryClient,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ConfigLayout, {
                    getLayout: getLayout,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 1986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layout_LayoutWebsite)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\shared\\components\\layout\\footer\\index.tsx","import":"Bungee","arguments":[{"subsets":["latin-ext"],"display":"swap","weight":["400"]}],"variableName":"bungee"}
var target_path_src_shared_components_layout_footer_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_ = __webpack_require__(8505);
var target_path_src_shared_components_layout_footer_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_default = /*#__PURE__*/__webpack_require__.n(target_path_src_shared_components_layout_footer_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_);
;// CONCATENATED MODULE: ./src/shared/mock/footer/index.ts
const footerData = {
    contactData: {
        address: "T\xf2a 6th Element, đường Nguyễn Văn Huy\xean, phường Xu\xe2n La, quận T\xe2y Hồ, th\xe0nh phố H\xe0 Nội",
        phone: "+84 123 456 789",
        email: "support@mtv.com.vn"
    },
    service: [
        "Quản l\xfd doanh nghiệp",
        "Định gi\xe1 t\xe0i sản",
        "Gi\xe1o dụng trực tuyến",
        "Ứng dụng trong giải tr\xed"
    ],
    aboutUs: [
        "Về ch\xfang t\xf4i",
        "Tin tức",
        "Tuyển dụng"
    ],
    support: [
        "FAQ",
        "Li\xean hệ Metaverse",
        "Điều khoản sử dụng"
    ]
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/shared/components/layout/footer/info.tsx


const InforFooter = ({ title, info })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
        className: "flex flex-col justify-end items-start ",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-2xl",
                children: title
            }),
            info.map((item, inx)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                    href: "#",
                    children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                        children: item
                    })
                }, inx))
        ]
    });
};
/* harmony default export */ const info = (InforFooter);

;// CONCATENATED MODULE: ./src/shared/components/layout/footer/index.tsx




const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "w-full flex flex-col gap-5 justify-between items-center mx-auto px-16 py-10 bg-[#160A0F] text-white font-thin",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "grid grid-cols-4 gap-4 justify-start items-center align-top",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col justify-center items-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (target_path_src_shared_components_layout_footer_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_default()).className,
                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    className: "text-4xl",
                                    children: "METAVERSE"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Địa chỉ: ",
                                    footerData.contactData.address
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Số điện thoại: ",
                                    footerData.contactData.phone
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                children: [
                                    "Email: ",
                                    footerData.contactData.email
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ jsx_runtime.jsx(info, {
                            title: "Giải ph\xe1p",
                            info: footerData.service
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ jsx_runtime.jsx(info, {
                            title: "Về Metaverse",
                            info: footerData.aboutUs
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ jsx_runtime.jsx(info, {
                            title: "Hỗ trợ",
                            info: footerData.support
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "w-full flex justify-end items-center border-t-2 pt-5",
                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                    children: "Bản quyền thuộc về C\xf4ng ty Metaverse"
                })
            })
        ]
    });
};
/* harmony default export */ const footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\shared\\components\\layout\\header\\index.tsx","import":"Bungee","arguments":[{"subsets":["latin-ext"],"display":"swap","weight":["400"]}],"variableName":"bungee"}
var target_path_src_shared_components_layout_header_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_ = __webpack_require__(6411);
var target_path_src_shared_components_layout_header_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_default = /*#__PURE__*/__webpack_require__.n(target_path_src_shared_components_layout_header_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_);
;// CONCATENATED MODULE: ./src/shared/mock/menu/index.ts
const fakeMenu = [
    "Trang chủ",
    "Giải ph\xe1p",
    "Về ch\xfang t\xf4i",
    "Tin tức",
    "Tuyển dụng"
];

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/shared/components/layout/header/index.tsx





const Header = ()=>{
    const [isScrolled, setIsScrolled] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        const handleScroll = ()=>{
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 150 && !isScrolled) {
                setIsScrolled(true);
            } else if (scrollTop === 0 && isScrolled) {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        isScrolled
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: `w-full sticky top-0 z-50 flex justify-between items-center gap-5 px-5 py-5 md:px-40 transition ${isScrolled ? "bg-[#1B3864] bg-opacity-100 text-white duration-500 ease-in-out " : "absolute text-white border-b-[1px] border-opacity-50 border-slate-300 inset-0 bg-slate-900 bg-opacity-10 backdrop-filter backdrop-blur duration-500 ease-in-out"}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "flex justify-around items-center",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (target_path_src_shared_components_layout_header_index_tsx_import_Bungee_arguments_subsets_latin_ext_display_swap_weight_400_variableName_bungee_default()).className,
                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-4xl",
                        children: "METAVERSE"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex justify-center items-center gap-10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("ul", {
                        className: "justify-center items-cente gap-10 hidden lg:flex ml-10",
                        children: fakeMenu.map((item, inx)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    children: item
                                })
                            }, inx))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "bg-[white] text-black font-bold py-2 px-4 rounded cursor-pointer hidden lg:block",
                        children: "Li\xean hệ"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "block md:hidden",
                children: "..."
            })
        ]
    });
};
/* harmony default export */ const header = (Header);

;// CONCATENATED MODULE: ./src/shared/components/layout/LayoutWebsite.tsx



const LayoutWebsite = ({ children })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "min-h-screen",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(header, {}),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const layout_LayoutWebsite = (LayoutWebsite);


/***/ }),

/***/ 7538:
/***/ (() => {



/***/ }),

/***/ 108:
/***/ (() => {



/***/ })

};
;