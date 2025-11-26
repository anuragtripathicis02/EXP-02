(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/raju-sir/EXP-I/EXP-02/public/images/email-img.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/email-img.1bfce537.png");}),
"[project]/raju-sir/EXP-I/EXP-02/public/images/email-img.png.mjs { IMAGE => \"[project]/raju-sir/EXP-I/EXP-02/public/images/email-img.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$email$2d$img$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/public/images/email-img.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$email$2d$img$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 250,
    height: 276,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA80lEQVR42gHoABf/ABcWFRVxb2l2mZaPsLWyrNSRkZTsXF1gmQ4PDxsAT0o+VaWWdvZoZWP/xMTG/7S0uPzf3+Hxfn6AnQBcSBp7vo8k/aiEMv+rqKP/wcHF//Pz9P/AwMLRAJV4NsjJlyX/soou/9XQxv/s7e7/7e3u/8vLzOsA0cm28ce4mf+4oGr/0s3E/9zc3f/Ozcr6kY+LqgC4t7bX8vLz/87MzP/g29L/0c7K/IiGgpoYFxYWAFpbXoiFhYa+xMG589bRxdqenZvBLi4vQQAAAAAAAAABBAwMDBZDQkBZLy4rLkxMTm0mJig5AAAAAABzgcgjTRPZAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$email$2d$img$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$email$2d$img$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/raju-sir/EXP-I/EXP-02/public/images/email-img.png.mjs { IMAGE => "[project]/raju-sir/EXP-I/EXP-02/public/images/email-img.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
const VerifyeMail = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "7843d35e38b73bc3ccb7b8ee6296d5aae046f801d98467767f247f3727e191f9") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7843d35e38b73bc3ccb7b8ee6296d5aae046f801d98467767f247f3727e191f9";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Verify email"
        }, void 0, false, {
            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-start",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mb-40",
                    children: [
                        "We’ve sent a confirmation link to your registered email: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                            children: "da****ph@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                            lineNumber: 25,
                            columnNumber: 120
                        }, ("TURBOPACK compile-time value", void 0)),
                        "  Please check your inbox and click the link to verify your account."
                    ]
                }, void 0, true, {
                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                    lineNumber: 25,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
            lineNumber: 25,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "figure-box-img mb-40",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$email$2d$img$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$email$2d$img$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                alt: ""
            }, void 0, false, {
                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                lineNumber: 32,
                columnNumber: 48
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sec-email p-50 bg-img position-relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container position-relative z-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mx-540 text-center",
                        children: [
                            t1,
                            t2,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "",
                                    className: "link-underline-text my-inbox",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "25",
                                            height: "24",
                                            viewBox: "0 0 25 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M10.25 14.25C10.25 14.4489 10.171 14.6397 10.0303 14.7803C9.88968 14.921 9.69891 15 9.5 15H5.75C5.55109 15 5.36032 14.921 5.21967 14.7803C5.07902 14.6397 5 14.4489 5 14.25C5 14.0511 5.07902 13.8603 5.21967 13.7197C5.36032 13.579 5.55109 13.5 5.75 13.5H9.5C9.69891 13.5 9.88968 13.579 10.0303 13.7197C10.171 13.8603 10.25 14.0511 10.25 14.25ZM23 10.875V16.5C23 16.8978 22.842 17.2794 22.5607 17.5607C22.2794 17.842 21.8978 18 21.5 18H13.25V21C13.25 21.1989 13.171 21.3897 13.0303 21.5303C12.8897 21.671 12.6989 21.75 12.5 21.75C12.3011 21.75 12.1103 21.671 11.9697 21.5303C11.829 21.3897 11.75 21.1989 11.75 21V18H3.5C3.10218 18 2.72064 17.842 2.43934 17.5607C2.15804 17.2794 2 16.8978 2 16.5V10.875C2.00174 9.38369 2.59493 7.95396 3.64944 6.89944C4.70396 5.84493 6.13369 5.25174 7.625 5.25H14.75V2.25C14.75 2.05109 14.829 1.86032 14.9697 1.71967C15.1103 1.57902 15.3011 1.5 15.5 1.5H18.5C18.6989 1.5 18.8897 1.57902 19.0303 1.71967C19.171 1.86032 19.25 2.05109 19.25 2.25C19.25 2.44891 19.171 2.63968 19.0303 2.78033C18.8897 2.92098 18.6989 3 18.5 3H16.25V5.25H17.375C18.8663 5.25174 20.296 5.84493 21.3506 6.89944C22.4051 7.95396 22.9983 9.38369 23 10.875ZM11.75 16.5V10.875C11.75 9.78098 11.3154 8.73177 10.5418 7.95818C9.76823 7.1846 8.71902 6.75 7.625 6.75C6.53098 6.75 5.48177 7.1846 4.70818 7.95818C3.9346 8.73177 3.5 9.78098 3.5 10.875V16.5H11.75ZM21.5 10.875C21.4988 9.78136 21.0638 8.73287 20.2904 7.95955C19.5171 7.18624 18.4686 6.75124 17.375 6.75H16.25V13.5C16.25 13.6989 16.171 13.8897 16.0303 14.0303C15.8897 14.171 15.6989 14.25 15.5 14.25C15.3011 14.25 15.1103 14.171 14.9697 14.0303C14.829 13.8897 14.75 13.6989 14.75 13.5V6.75H11.4453C12.0146 7.27571 12.4689 7.91363 12.7795 8.62357C13.0901 9.33352 13.2503 10.1001 13.25 10.875V16.5H21.5V10.875Z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                                                lineNumber: 39,
                                                columnNumber: 280
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                                            lineNumber: 39,
                                            columnNumber: 220
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Open my inbox"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                                    lineNumber: 39,
                                    columnNumber: 165
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                                lineNumber: 39,
                                columnNumber: 162
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                        lineNumber: 39,
                        columnNumber: 118
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                    lineNumber: 39,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/VerifyeMail.tsx",
                lineNumber: 39,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
};
_c = VerifyeMail;
const __TURBOPACK__default__export__ = VerifyeMail;
var _c;
__turbopack_context__.k.register(_c, "VerifyeMail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
const HeaderTop = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "849ea50636318a3d5b2052ab8752d32fa291465353ad8c8e61b2202c157c6603") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "849ea50636318a3d5b2052ab8752d32fa291465353ad8c8e61b2202c157c6603";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "head-toolbar",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "head-top",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "back-box",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "back-icon",
                            href: "/authentication/signin",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "icon",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M21.3749 12C21.3749 12.2984 21.2564 12.5846 21.0454 12.7955C20.8344 13.0065 20.5483 13.125 20.2499 13.125H6.46866L11.2987 17.9541C11.51 18.1654 11.6287 18.4521 11.6287 18.751C11.6287 19.0499 11.51 19.3365 11.2987 19.5478C11.0873 19.7592 10.8007 19.8779 10.5018 19.8779C10.2029 19.8779 9.91625 19.7592 9.70491 19.5478L2.95491 12.7978C2.85003 12.6933 2.76681 12.5691 2.71003 12.4324C2.65325 12.2956 2.62402 12.149 2.62402 12.001C2.62402 11.8529 2.65325 11.7063 2.71003 11.5696C2.76681 11.4328 2.85003 11.3086 2.95491 11.2041L9.70491 4.4541C9.80956 4.34945 9.93379 4.26644 10.0705 4.20981C10.2072 4.15317 10.3538 4.12402 10.5018 4.12402C10.6498 4.12402 10.7963 4.15317 10.9331 4.20981C11.0698 4.26644 11.194 4.34945 11.2987 4.4541C11.4033 4.55875 11.4863 4.68298 11.543 4.81971C11.5996 4.95644 11.6287 5.10298 11.6287 5.25097C11.6287 5.39897 11.5996 5.54551 11.543 5.68224C11.4863 5.81897 11.4033 5.9432 11.2987 6.04785L6.46866 10.875H20.2499C20.5483 10.875 20.8344 10.9936 21.0454 11.2045C21.2564 11.4155 21.3749 11.7017 21.3749 12Z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
                                        lineNumber: 17,
                                        columnNumber: 260
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
                                    lineNumber: 17,
                                    columnNumber: 200
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
                                lineNumber: 17,
                                columnNumber: 177
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
                            lineNumber: 17,
                            columnNumber: 119
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
                        lineNumber: 17,
                        columnNumber: 93
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
                    lineNumber: 17,
                    columnNumber: 66
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
                lineNumber: 17,
                columnNumber: 40
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/authentication/verifyemail/HeaderTop.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = HeaderTop;
const __TURBOPACK__default__export__ = HeaderTop;
var _c;
__turbopack_context__.k.register(_c, "HeaderTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=raju-sir_EXP-I_EXP-02_6ac24765._.js.map