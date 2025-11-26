module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const countries = [
    {
        id: "us",
        flag: "us",
        name: "USA",
        code: "+1"
    },
    {
        id: "in",
        flag: "in",
        name: "India",
        code: "+91"
    },
    {
        id: "am",
        flag: "am",
        name: "Armenia",
        code: "+374"
    },
    {
        id: "za",
        flag: "za",
        name: "South Africa",
        code: "+27"
    }
];
const CountryPhoneInput = ({ paramKey = "lang" })=>{
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [dropdownOpen, setDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [selectedCountry, setSelectedCountry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const id = searchParams.get(paramKey) || "us";
        return countries.find((c)=>c.id === id) || countries[0];
    });
    const [phoneNumber, setPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const changeCountry = (country)=>{
        setSelectedCountry(country);
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set(paramKey, country.id);
        router.replace(newUrl.toString(), {
            scroll: false
        });
        setDropdownOpen(false);
    };
    const handleClickOutside = (event)=>{
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (dropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        dropdownOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "d-flex align-items-center position-relative",
        style: {
            maxWidth: "360px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dropdown me-2",
                ref: dropdownRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-light d-flex align-items-center",
                        type: "button",
                        onClick: ()=>setDropdownOpen(!dropdownOpen),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flag-icon ${selectedCountry.flag} me-2`
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: selectedCountry.name
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ms-2 text-muted",
                                children: selectedCountry.code
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    dropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "dropdown-menu show",
                        style: {
                            maxHeight: "200px",
                            overflowY: "auto"
                        },
                        children: countries.map((country)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "dropdown-item d-flex align-items-center",
                                    onClick: ()=>changeCountry(country),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `flag-icon ${country.flag} me-2`
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                            lineNumber: 81,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex-grow-1",
                                            children: country.name
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                            lineNumber: 82,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted ms-2",
                                            children: country.code
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                            lineNumber: 83,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, country.id, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "tel",
                className: "form-control",
                placeholder: "Enter phone number",
                value: phoneNumber,
                onChange: (e)=>setPhoneNumber(e.target.value),
                style: {
                    flex: 1
                }
            }, void 0, false, {
                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CountryPhoneInput;
}),
"[project]/raju-sir/EXP-I/EXP-02/public/images/profil-01.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/profil-01.a4c6e003.png");}),
"[project]/raju-sir/EXP-I/EXP-02/public/images/profil-01.png.mjs { IMAGE => \"[project]/raju-sir/EXP-I/EXP-02/public/images/profil-01.png (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$profil$2d$01$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/public/images/profil-01.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$profil$2d$01$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 134,
    height: 134,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR42gEIAff+AAMDAwJBQEBBiYaDv2FZVfZOSkj2amhnvjw8PEEDAwMCAEFBP0G1savakoF2/6B1ZP9dR0D/PTk3/5GOjdo+Pj5BAKypo768tqz/j3Nl/7CAb/97W1H/MSoo/3JtbP+dnJ2/ANPQx/bEvLD/tod2/7Z/c/+SZ1n/QzMt/2BXU/+3tbX2ANTQx/bIwbX/vZSD/72Gef+SaVn/OSwm/1hLRP+tqqn2AKyqpL/Kxbr/vq2f/7iQev9WQDX/NSki/1RFO/+Dfnq+AEBAPkGqqKDadG5n/55+aP9DNCv/MSkj/1lORto0MTBBAAMDAwIzMzNBYFpWvnpoXfY/Pj32SEdGvy0rKkEDAwMCgYKB1ncT8hkAAAAASUVORK5CYII="
};
}),
"[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/react-bootstrap/esm/FloatingLabel.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/react-bootstrap/esm/Form.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$rsuite$2f$esm$2f$DatePicker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/rsuite/esm/DatePicker/index.js [app-ssr] (ecmascript) <export default as DatePicker>");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$src$2f$components$2f$LanguageSwitcherCountryName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/src/components/LanguageSwitcherCountryName.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$profil$2d$01$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$profil$2d$01$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/raju-sir/EXP-I/EXP-02/public/images/profil-01.png.mjs { IMAGE => "[project]/raju-sir/EXP-I/EXP-02/public/images/profil-01.png (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
'use client';
;
;
;
;
;
;
;
;
;
;
const EditProfileStudent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "sec-edit-profile py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "upload-picture d-flex flex-column align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "profile-picture",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$profil$2d$01$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$public$2f$images$2f$profil$2d$01$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                            alt: ""
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 23,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "fileInput",
                                            className: "upload-btn",
                                            children: "Change Profile Picture"
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 24,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            id: "fileInput",
                                            accept: "image/*"
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "",
                                    className: "btn-view-profile",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23.1853 11.6962C23.1525 11.6222 22.3584 9.86062 20.5931 8.09531C18.2409 5.74312 15.27 4.5 12 4.5C8.72999 4.5 5.75905 5.74312 3.40687 8.09531C1.64155 9.86062 0.843741 11.625 0.814679 11.6962C0.772035 11.7922 0.75 11.896 0.75 12.0009C0.75 12.1059 0.772035 12.2097 0.814679 12.3056C0.847491 12.3797 1.64155 14.1403 3.40687 15.9056C5.75905 18.2569 8.72999 19.5 12 19.5C15.27 19.5 18.2409 18.2569 20.5931 15.9056C22.3584 14.1403 23.1525 12.3797 23.1853 12.3056C23.2279 12.2097 23.25 12.1059 23.25 12.0009C23.25 11.896 23.2279 11.7922 23.1853 11.6962ZM12 18C9.11437 18 6.59343 16.9509 4.50655 14.8828C3.65028 14.0313 2.92179 13.0603 2.34374 12C2.92164 10.9396 3.65014 9.9686 4.50655 9.11719C6.59343 7.04906 9.11437 6 12 6C14.8856 6 17.4066 7.04906 19.4934 9.11719C20.3514 9.9684 21.0815 10.9394 21.6609 12C20.985 13.2619 18.0403 18 12 18ZM12 7.5C11.11 7.5 10.2399 7.76392 9.49993 8.25839C8.7599 8.75285 8.18313 9.45566 7.84253 10.2779C7.50194 11.1002 7.41282 12.005 7.58646 12.8779C7.76009 13.7508 8.18867 14.5526 8.81801 15.182C9.44735 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4988 10.8069 16.0242 9.66303 15.1806 8.81939C14.337 7.97575 13.1931 7.50124 12 7.5ZM12 15C11.4066 15 10.8266 14.8241 10.3333 14.4944C9.83993 14.1648 9.45542 13.6962 9.22835 13.1481C9.00129 12.5999 8.94188 11.9967 9.05764 11.4147C9.17339 10.8328 9.45911 10.2982 9.87867 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.148 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.824 10.8266 15 11.4067 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15Z",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 31,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 30,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Preview Public Profile"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                    lineNumber: 29,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-md-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-edit-profile",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row gx-2 gx-md-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingInput",
                                            label: "First Name",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
                                                type: "email",
                                                placeholder: "John"
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 46,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 40,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingInput",
                                            label: "Last Name",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
                                                type: "email",
                                                placeholder: "John"
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 55,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingInput",
                                            label: "Email Address",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
                                                type: "email",
                                                placeholder: "Johnsmith1001@gmail.com"
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 64,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 card-language-selector mobile-filed position-relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-labl",
                                                    children: "Mobile "
                                                }, void 0, false, {
                                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$src$2f$components$2f$LanguageSwitcherCountryName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$rsuite$2f$esm$2f$DatePicker$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DatePicker$3e$__["DatePicker"], {
                                                placeholder: "Date of Birth",
                                                oneTap: true
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingSelectGrid",
                                            label: "Gender",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Select, {
                                                "aria-label": "Floating label select example",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Male"
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: "Female"
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 84,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 79,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 card-language-selector country-filed position-relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "form-labl",
                                                    children: "Country"
                                                }, void 0, false, {
                                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$src$2f$components$2f$LanguageSwitcherCountryName$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "dropdown-arrow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M20.0306 9.53104L12.5306 17.031C12.4609 17.1008 12.3782 17.1561 12.2871 17.1938C12.1961 17.2316 12.0985 17.251 11.9999 17.251C11.9014 17.251 11.8038 17.2316 11.7127 17.1938C11.6217 17.1561 11.539 17.1008 11.4693 17.031L3.9693 9.53104C3.82857 9.39031 3.74951 9.19944 3.74951 9.00042C3.74951 8.80139 3.82857 8.61052 3.9693 8.46979C4.11003 8.32906 4.30091 8.25 4.49993 8.25C4.69895 8.25 4.88982 8.32906 5.03055 8.46979L11.9999 15.4401L18.9693 8.46979C19.039 8.40011 19.1217 8.34483 19.2128 8.30712C19.3038 8.26941 19.4014 8.25 19.4999 8.25C19.5985 8.25 19.6961 8.26941 19.7871 8.30712C19.8781 8.34483 19.9609 8.40011 20.0306 8.46979C20.1002 8.53947 20.1555 8.6222 20.1932 8.71324C20.2309 8.80429 20.2503 8.90187 20.2503 9.00042C20.2503 9.09896 20.2309 9.19654 20.1932 9.28759C20.1555 9.37863 20.1002 9.46136 20.0306 9.53104Z",
                                                            fill: "currentColor"
                                                        }, void 0, false, {
                                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingSelectGrid",
                                            label: "City",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Select, {
                                                "aria-label": "Floating label select example",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "New York"
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: "New York"
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingSelectGrid",
                                            label: "Industry",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Select, {
                                                "aria-label": "Floating label select example",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        children: "Healthcare"
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: "Healthcare"
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 119,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 114,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingInput",
                                            label: "Headline",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
                                                type: "email",
                                                placeholder: "John"
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 131,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-md-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            controlId: "floatingTextarea2",
                                            label: "Bio",
                                            className: "mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
                                                as: "textarea",
                                                placeholder: "Leave a comment here"
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 137,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 135,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "position-relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$FloatingLabel$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        controlId: "floatingInput",
                                                        label: "Hourly Rate",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Form$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Control, {
                                                            type: "email",
                                                            placeholder: "John"
                                                        }, void 0, false, {
                                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 146,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "coins-text",
                                                        children: "Coins /Hr"
                                                    }, void 0, false, {
                                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "info-text",
                                                children: "An hourly charge of 5 EXP Coins will be deducted from each booking. We recommend setting your hourly rate 5 Coins higher than your desired earning to cover this deduction."
                                            }, void 0, false, {
                                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                        lineNumber: 144,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/EditProfileStudent.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = EditProfileStudent;
}),
"[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/raju-sir/EXP-I/EXP-02/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
const HeaderTop = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "head-toolbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "head-top",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "d-flex align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "back-box",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                className: "back-icon",
                                href: "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M21.3749 12C21.3749 12.2984 21.2564 12.5846 21.0454 12.7955C20.8344 13.0065 20.5483 13.125 20.2499 13.125H6.46866L11.2987 17.9541C11.51 18.1654 11.6287 18.4521 11.6287 18.751C11.6287 19.0499 11.51 19.3365 11.2987 19.5478C11.0873 19.7592 10.8007 19.8779 10.5018 19.8779C10.2029 19.8779 9.91625 19.7592 9.70491 19.5478L2.95491 12.7978C2.85003 12.6933 2.76681 12.5691 2.71003 12.4324C2.65325 12.2956 2.62402 12.149 2.62402 12.001C2.62402 11.8529 2.65325 11.7063 2.71003 11.5696C2.76681 11.4328 2.85003 11.3086 2.95491 11.2041L9.70491 4.4541C9.80956 4.34945 9.93379 4.26644 10.0705 4.20981C10.2072 4.15317 10.3538 4.12402 10.5018 4.12402C10.6498 4.12402 10.7963 4.15317 10.9331 4.20981C11.0698 4.26644 11.194 4.34945 11.2987 4.4541C11.4033 4.55875 11.4863 4.68298 11.543 4.81971C11.5996 4.95644 11.6287 5.10298 11.6287 5.25097C11.6287 5.39897 11.5996 5.54551 11.543 5.68224C11.4863 5.81897 11.4033 5.9432 11.2987 6.04785L6.46866 10.875H20.2499C20.5483 10.875 20.8344 10.9936 21.0454 11.2045C21.2564 11.4155 21.3749 11.7017 21.3749 12Z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                                            lineNumber: 16,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                                        lineNumber: 15,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                                    lineNumber: 14,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                                lineNumber: 13,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                            lineNumber: 12,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-grow-1 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "m-0",
                                children: "Edit Profile"
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                                lineNumber: 22,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                            lineNumber: 21,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "head-save ms-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$raju$2d$sir$2f$EXP$2d$I$2f$EXP$2d$02$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "",
                                className: "save-button",
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                    lineNumber: 11,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/raju-sir/EXP-I/EXP-02/src/components/profileflow/editprofilestudent/HeaderTop.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeaderTop;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8fda1fc7._.js.map