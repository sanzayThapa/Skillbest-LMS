(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/core/common/commonSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__ = __turbopack_context__.i("[project]/node_modules/antd/es/select/index.js [app-client] (ecmascript) <export default as Select>");
"use client";
;
;
const { Option } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"];
const CustomSelect = (param)=>{
    let { options, defaultValue, value, className, placeholder, modal, onChange } = param;
    // Determine the popup container based on the `modal` prop
    const getPopupContainer = modal ? ()=>document.getElementsByClassName('modal')[0] || document.body : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$select$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Select$3e$__["Select"], {
        defaultValue: defaultValue,
        value: value,
        className: className,
        placeholder: placeholder ? placeholder : 'Select',
        style: {
            width: '100%'
        },
        getPopupContainer: getPopupContainer,
        labelInValue: true,
        onChange: onChange,
        children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Option, {
                value: option.value,
                children: option.label
            }, option.value, false, {
                fileName: "[project]/src/core/common/commonSelect.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/core/common/commonSelect.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomSelect;
const __TURBOPACK__default__export__ = CustomSelect;
var _c;
__turbopack_context__.k.register(_c, "CustomSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/core/common/selectOption/json/selectOption.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BannerSelect",
    ()=>BannerSelect,
    "BannerSelectfour",
    ()=>BannerSelectfour,
    "Category",
    ()=>Category,
    "City",
    ()=>City,
    "Country",
    ()=>Country,
    "CourseCategory",
    ()=>CourseCategory,
    "CourseLevel",
    ()=>CourseLevel,
    "CourseVideo",
    ()=>CourseVideo,
    "Gender",
    ()=>Gender,
    "Language",
    ()=>Language,
    "Payment_Method",
    ()=>Payment_Method,
    "Priority",
    ()=>Priority,
    "PrivateCourse",
    ()=>PrivateCourse,
    "State",
    ()=>State
]);
const BannerSelect = [
    {
        label: 'Angular',
        value: '1'
    },
    {
        label: 'Node Js',
        value: '2'
    },
    {
        label: 'React',
        value: '3'
    },
    {
        label: 'Python',
        value: '3'
    }
];
const BannerSelectfour = [
    {
        label: 'Development',
        value: '1'
    },
    {
        label: 'Marketing',
        value: '2'
    }
];
const CourseCategory = [
    {
        label: 'Management',
        value: '1'
    },
    {
        label: 'IT & Softwares',
        value: '2'
    },
    {
        label: 'Marketing',
        value: '3'
    },
    {
        label: 'Finance',
        value: '4'
    },
    {
        label: 'Productivity',
        value: '5'
    }
];
const CourseLevel = [
    {
        label: 'Beginner',
        value: '1'
    },
    {
        label: 'Intermediate',
        value: '2'
    },
    {
        label: 'Advanced',
        value: '3'
    },
    {
        label: 'Expert',
        value: '4'
    }
];
const Language = [
    {
        label: 'Nepali',
        value: '1'
    },
    {
        label: 'English',
        value: '2'
    },
    {
        label: 'Hindi',
        value: '3'
    }
];
const PrivateCourse = [
    {
        label: 'Private',
        value: '1'
    },
    {
        label: 'Public',
        value: '2'
    }
];
const CourseVideo = [
    {
        label: 'External URL',
        value: '1'
    },
    {
        label: 'Youtube',
        value: '2'
    },
    {
        label: 'External',
        value: '3'
    },
    {
        label: 'Vimeo',
        value: '4'
    }
];
const Category = [
    {
        label: 'Mailing Issues',
        value: '1'
    },
    {
        label: 'Language Issues',
        value: '2'
    },
    {
        label: 'Installation Error',
        value: '3'
    }
];
const Priority = [
    {
        label: 'High',
        value: '1'
    },
    {
        label: 'Low',
        value: '2'
    },
    {
        label: 'Medium',
        value: '3'
    }
];
const Gender = [
    {
        label: 'High',
        value: '1'
    },
    {
        label: 'Male',
        value: '2'
    },
    {
        label: 'Female',
        value: '3'
    }
];
const Country = [
    {
        label: 'United states of America',
        value: '1'
    },
    {
        label: 'Canada',
        value: '2'
    },
    {
        label: 'Germany',
        value: '3'
    }
];
const State = [
    {
        label: 'California',
        value: '1'
    },
    {
        label: 'New York',
        value: '2'
    },
    {
        label: 'Texas',
        value: '3'
    }
];
const City = [
    {
        label: 'Los Angeles',
        value: '1'
    },
    {
        label: 'San Diego',
        value: '2'
    },
    {
        label: 'Fresno',
        value: '3'
    }
];
const Payment_Method = [
    {
        label: 'Credit Card',
        value: '1'
    },
    {
        label: 'Debit Card',
        value: '2'
    },
    {
        label: 'Paypal',
        value: '3'
    },
    {
        label: 'Stripe',
        value: '4'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/react-bootstrap/esm/Modal.js [app-client] (ecmascript) <export default as Modal>");
;
"use client";
;
;
;
const ReactPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-player/dist/index.js [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-player/dist/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ReactPlayer;
const VideoModal = (param)=>{
    let { show, handleClose, videoUrl } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
        className: "video-modal",
        show: show,
        centered: true,
        size: "xl",
        onHide: handleClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"].Header, {
                closeButton: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"].Title, {}, void 0, false, {
                    fileName: "[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx",
                    lineNumber: 16,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$bootstrap$2f$esm$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"].Body, {
                children: videoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReactPlayer, {
                    src: videoUrl,
                    playing: true,
                    controls: true,
                    width: "100%",
                    height: "80vh",
                    onError: (e)=>console.error('ReactPlayer error:', e)
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "No video URL provided."
                }, void 0, false, {
                    fileName: "[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = VideoModal;
const __TURBOPACK__default__export__ = VideoModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReactPlayer");
__turbopack_context__.k.register(_c1, "VideoModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
;
// Create an Axios instance
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "/api/backend") || '/api/backend',
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add a request interceptor to add the user's email
api.interceptors.request.use(async (config)=>{
    var _session_user;
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSession"])();
    if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email) {
        config.headers['x-user-email'] = session.user.email;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Add a response interceptor
api.interceptors.response.use((response)=>response, (error)=>{
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/pages/Admin/courses/adminAddCourse.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$commonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/common/commonSelect.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$selectOption$2f$json$2f$selectOption$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/common/selectOption/json/selectOption.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$wysiwyg$2f$lib$2f$index$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-simple-wysiwyg/lib/index.es.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$all_routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/router/all_routes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$HomePages$2f$home$2d$one$2f$section$2f$videoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/HomePages/home-one/section/videoModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$Breadcrumb$2f$breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/core/common/Breadcrumb/breadcrumb.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
const AdminAddCourseComponent = ()=>{
    _s();
    const route = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$router$2f$all_routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["all_routes"];
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        image: false,
        video: false
    });
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newCategoryName, setNewCategoryName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newChapterTitle, setNewChapterTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVideoModal, setShowVideoModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form State
    const [courseData, setCourseData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        categoryId: "",
        level: "Beginner",
        language: "English",
        maxStudents: "0",
        isPublic: true,
        shortDescription: "",
        description: "",
        learningItems: [
            "Become a UX designer"
        ],
        requirements: [
            ""
        ],
        isFeatured: false,
        imageUrl: "",
        videoUrl: "",
        videoType: "External",
        price: "0",
        isFree: false,
        faq: [
            {
                question: "",
                answer: ""
            }
        ],
        chapters: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminAddCourseComponent.useEffect": ()=>{
            fetchCategories();
        }
    }["AdminAddCourseComponent.useEffect"], []);
    const fetchCategories = async ()=>{
        try {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/courses/meta/categories');
            setCategories(data.map((c)=>({
                    label: c.name,
                    value: c.id
                })));
        } catch (error) {
            console.error("Failed to fetch categories", error);
        }
    };
    const handleAddCategory = async ()=>{
        if (!newCategoryName) return;
        try {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/courses/meta/categories', {
                name: newCategoryName
            });
            setCategories([
                ...categories,
                {
                    label: data.name,
                    value: data.id
                }
            ]);
            setCourseData({
                ...courseData,
                categoryId: data.id
            });
            setNewCategoryName("");
        } catch (error) {
            console.error("Failed to add category", error);
        }
    };
    const handleNext = ()=>setCurrentStep(currentStep + 1);
    const handlePrev = ()=>setCurrentStep(currentStep - 1);
    const handleFileUpload = async (e, type)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file) return;
        setUploading({
            ...uploading,
            [type]: true
        });
        const formData = new FormData();
        formData.append('file', file);
        try {
            const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (type === 'image') setCourseData((prev)=>({
                    ...prev,
                    imageUrl: data.url
                }));
            else setCourseData((prev)=>({
                    ...prev,
                    videoUrl: data.url
                }));
        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed. Please try again.");
        } finally{
            setUploading({
                ...uploading,
                [type]: false
            });
        }
    };
    const handleAddChapter = ()=>{
        if (!newChapterTitle) return;
        const newChapter = {
            id: "temp-chapter-".concat(Date.now()),
            title: newChapterTitle,
            lessons: []
        };
        setCourseData({
            ...courseData,
            chapters: [
                ...courseData.chapters,
                newChapter
            ]
        });
        setNewChapterTitle("");
    };
    const handleAddLesson = (chapterId)=>{
        const lessonTitle = prompt("Enter lesson title:");
        if (!lessonTitle) return;
        const newLesson = {
            id: "temp-lesson-".concat(Date.now()),
            title: lessonTitle
        };
        const updatedChapters = courseData.chapters.map((ch)=>{
            if (ch.id === chapterId) {
                return {
                    ...ch,
                    lessons: [
                        ...ch.lessons,
                        newLesson
                    ]
                };
            }
            return ch;
        });
        setCourseData({
            ...courseData,
            chapters: updatedChapters
        });
    };
    const removeChapter = (id)=>{
        setCourseData({
            ...courseData,
            chapters: courseData.chapters.filter((ch)=>ch.id !== id)
        });
    };
    const removeLesson = (chapterId, lessonId)=>{
        const updatedChapters = courseData.chapters.map((ch)=>{
            if (ch.id === chapterId) {
                return {
                    ...ch,
                    lessons: ch.lessons.filter((l)=>l.id !== lessonId)
                };
            }
            return ch;
        });
        setCourseData({
            ...courseData,
            chapters: updatedChapters
        });
    };
    const handleSubmit = async ()=>{
        setLoading(true);
        try {
            // 1. Create Course
            const { data: course } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/courses', {
                title: courseData.title
            });
            // 2. Update Course Details
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch("/courses/".concat(course.id), {
                categoryId: courseData.categoryId,
                description: courseData.description,
                price: parseFloat(courseData.price),
                imageUrl: courseData.imageUrl,
                videoUrl: courseData.videoUrl,
                language: courseData.language,
                requirements: courseData.learningItems.concat(courseData.requirements),
                faq: courseData.faq,
                isPublished: true
            });
            // 3. Chapters & Lessons
            for (const chapter of courseData.chapters){
                const { data: newChapter } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/courses/".concat(course.id, "/chapters"), {
                    title: chapter.title
                });
                for (const lesson of chapter.lessons){
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/courses/chapters/".concat(newChapter.id, "/lessons"), {
                        title: lesson.title
                    });
                }
            }
            // Success
            alert("Course created successfully!");
            router.push('/admin/courses');
        } catch (error) {
            console.error("Failed to submit course", error);
            alert("Failed to create course");
        } finally{
            setLoading(false);
        }
    };
    // Helper to add/remove items (learning items, requirements, faq)
    const addItem = (field)=>{
        setCourseData({
            ...courseData,
            [field]: [
                ...courseData[field],
                ""
            ]
        });
    };
    const removeItem = (field, index)=>{
        setCourseData({
            ...courseData,
            [field]: courseData[field].filter((_, i)=>i !== index)
        });
    };
    const updateItem = (field, index, value)=>{
        const newItems = [
            ...courseData[field]
        ];
        newItems[index] = value;
        setCourseData({
            ...courseData,
            [field]: newItems
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$Breadcrumb$2f$breadcrumb$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: "Add New Course"
            }, void 0, false, {
                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-10 mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "add-course-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wizard",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "form-wizard-steps",
                                                id: "progressbar2",
                                                children: [
                                                    {
                                                        step: 1,
                                                        label: "Course Information"
                                                    },
                                                    {
                                                        step: 2,
                                                        label: "Course Media"
                                                    },
                                                    {
                                                        step: 3,
                                                        label: "Curriculum"
                                                    },
                                                    {
                                                        step: 4,
                                                        label: "Additional Info"
                                                    },
                                                    {
                                                        step: 5,
                                                        label: "Pricing"
                                                    }
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: currentStep === item.step ? 'progress-active' : currentStep > item.step ? 'progress-activated' : '',
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "profile-step",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "dot-active mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "number",
                                                                            children: item.step.toString().padStart(2, '0')
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                            lineNumber: 213,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "tickmark",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "fa-solid fa-check"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 214,
                                                                                columnNumber: 84
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                            lineNumber: 214,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 212,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "step-section",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 216,
                                                                        columnNumber: 83
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 216,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, item.step, false, {
                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 45
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                lineNumber: 202,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                            lineNumber: 201,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "initialization-form-set",
                                            children: [
                                                currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                    className: "form-inner wizard-form-card",
                                                    style: {
                                                        display: 'block',
                                                        visibility: 'visible',
                                                        opacity: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "title border-0 mb-3 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                children: "Basic Information"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                lineNumber: 227,
                                                                columnNumber: 86
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-12 mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "input-block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: [
                                                                                    "Course Title ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-danger",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 231,
                                                                                        columnNumber: 100
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 231,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                value: courseData.title,
                                                                                onChange: (e)=>setCourseData({
                                                                                        ...courseData,
                                                                                        title: e.target.value
                                                                                    })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 232,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-4 mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "input-block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Category"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 237,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "d-flex gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$commonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                        options: categories,
                                                                                        value: categories.find((c)=>c.value === courseData.categoryId),
                                                                                        onChange: (e)=>setCourseData({
                                                                                                ...courseData,
                                                                                                categoryId: e.value
                                                                                            }),
                                                                                        placeholder: "Select Category"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 239,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        type: "button",
                                                                                        className: "btn btn-primary btn-sm",
                                                                                        "data-bs-toggle": "modal",
                                                                                        "data-bs-target": "#add-category-modal",
                                                                                        children: "+"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 240,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 238,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-4 mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "input-block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Level"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 246,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$commonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$selectOption$2f$json$2f$selectOption$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CourseLevel"],
                                                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$selectOption$2f$json$2f$selectOption$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CourseLevel"].find((l)=>l.value === courseData.level),
                                                                                onChange: (e)=>setCourseData({
                                                                                        ...courseData,
                                                                                        level: e.value
                                                                                    }),
                                                                                placeholder: "Select"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 247,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 244,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-4 mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "input-block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Language"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 252,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$commonSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                options: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$selectOption$2f$json$2f$selectOption$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Language"],
                                                                                value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$core$2f$common$2f$selectOption$2f$json$2f$selectOption$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Language"].find((l)=>l.value === courseData.language),
                                                                                onChange: (e)=>setCourseData({
                                                                                        ...courseData,
                                                                                        language: e.value
                                                                                    }),
                                                                                placeholder: "Select"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-12 mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "input-block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Description"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 258,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "summernote",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$simple$2d$wysiwyg$2f$lib$2f$index$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    value: courseData.description,
                                                                                    onChange: (e)=>setCourseData({
                                                                                            ...courseData,
                                                                                            description: e.target.value
                                                                                        })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 260,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 259,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 257,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 256,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex justify-content-end mt-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "btn-left",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-primary",
                                                                    onClick: handleNext,
                                                                    children: [
                                                                        "Next ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "isax isax-arrow-right-3 ms-1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                            lineNumber: 267,
                                                                            columnNumber: 115
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 265,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                    className: "form-inner wizard-form-card",
                                                    style: {
                                                        display: 'block'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "title border-0 mb-3 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                children: "Course Media"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                lineNumber: 277,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-6 mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "input-block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Course Thumbnail"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 282,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "upload-img-section d-flex align-items-center justify-content-center border rounded bg-light p-4 position-relative",
                                                                                children: [
                                                                                    uploading.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "spinner-border text-primary",
                                                                                        role: "status",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                            className: "visually-hidden",
                                                                                            children: "Loading..."
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 285,
                                                                                            columnNumber: 124
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 285,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)) : courseData.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        src: courseData.imageUrl,
                                                                                        className: "img-fluid rounded mb-2",
                                                                                        style: {
                                                                                            maxHeight: '120px'
                                                                                        },
                                                                                        alt: "Thumbnail"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 287,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "upload-content text-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                                className: "isax isax-image5 text-secondary fs-24"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                lineNumber: 290,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                className: "fw-medium mb-1",
                                                                                                children: "Upload Image"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                lineNumber: 291,
                                                                                                columnNumber: 69
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 289,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "file",
                                                                                        className: "position-absolute opacity-0 w-100 h-100 cursor-pointer",
                                                                                        onChange: (e)=>handleFileUpload(e, 'image'),
                                                                                        accept: "image/*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 294,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 283,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 281,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-6 mb-3",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "input-block",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "form-label",
                                                                                children: "Video Source"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 300,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "d-flex gap-3 mb-3",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-sm ".concat(courseData.videoType === 'External' ? 'btn-primary' : 'btn-light'),
                                                                                        onClick: ()=>setCourseData({
                                                                                                ...courseData,
                                                                                                videoType: 'External'
                                                                                            }),
                                                                                        children: "YouTube Link"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 302,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                        className: "btn btn-sm ".concat(courseData.videoType === 'Local' ? 'btn-primary' : 'btn-light'),
                                                                                        onClick: ()=>setCourseData({
                                                                                                ...courseData,
                                                                                                videoType: 'Local'
                                                                                            }),
                                                                                        children: "Self Hosted"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 303,
                                                                                        columnNumber: 61
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 301,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            courseData.videoType === 'External' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                placeholder: "YouTube URL",
                                                                                value: courseData.videoUrl,
                                                                                onChange: (e)=>setCourseData({
                                                                                        ...courseData,
                                                                                        videoUrl: e.target.value
                                                                                    })
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 306,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "input-group",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "file",
                                                                                        className: "form-control",
                                                                                        onChange: (e)=>handleFileUpload(e, 'video'),
                                                                                        accept: "video/*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 309,
                                                                                        columnNumber: 65
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    uploading.video && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "input-group-text",
                                                                                        children: "Uploading..."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 310,
                                                                                        columnNumber: 85
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 308,
                                                                                columnNumber: 61
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 299,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 279,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex justify-content-between mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-light",
                                                                    onClick: handlePrev,
                                                                    children: "Prev"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-primary",
                                                                    onClick: handleNext,
                                                                    children: "Next"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 318,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                currentStep === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                    className: "form-inner wizard-form-card",
                                                    style: {
                                                        display: 'block'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "title border-0 mb-3 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                children: "Curriculum"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 86
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 326,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-12 mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "d-flex gap-2 p-3 bg-light rounded border",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "text",
                                                                                className: "form-control",
                                                                                placeholder: "Chapter Title",
                                                                                value: newChapterTitle,
                                                                                onChange: (e)=>setNewChapterTitle(e.target.value)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 330,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "btn btn-primary d-flex align-items-center gap-2",
                                                                                onClick: handleAddChapter,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                        size: 16
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 331,
                                                                                        columnNumber: 152
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " Add"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 331,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 329,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-12",
                                                                    children: courseData.chapters.map((chapter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "border rounded-3 p-3 bg-white mb-3 shadow-sm",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "d-flex justify-content-between align-items-center mb-3 border-bottom pb-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                            className: "mb-0 fw-bold",
                                                                                            children: chapter.title
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 338,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "d-flex gap-2",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    className: "btn btn-sm btn-outline-primary",
                                                                                                    onClick: ()=>handleAddLesson(chapter.id),
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                                            size: 14
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                            lineNumber: 340,
                                                                                                            columnNumber: 164
                                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                                        " Lesson"
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                    lineNumber: 340,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    className: "btn btn-sm btn-outline-danger",
                                                                                                    onClick: ()=>removeChapter(chapter.id),
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                                        size: 14
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                        lineNumber: 341,
                                                                                                        columnNumber: 161
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                    lineNumber: 341,
                                                                                                    columnNumber: 69
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 339,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 337,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "ps-3 border-start border-3 border-light",
                                                                                    children: chapter.lessons.length > 0 ? chapter.lessons.map((lesson)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                            className: "d-flex justify-content-between align-items-center mb-2 p-2 bg-light rounded",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                    className: "text-sm",
                                                                                                    children: lesson.title
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                    lineNumber: 347,
                                                                                                    columnNumber: 73
                                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                                    className: "text-danger btn btn-link p-0",
                                                                                                    onClick: ()=>removeLesson(chapter.id, lesson.id),
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                                        size: 14
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                        lineNumber: 348,
                                                                                                        columnNumber: 174
                                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                    lineNumber: 348,
                                                                                                    columnNumber: 73
                                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                                            ]
                                                                                        }, lesson.id, true, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 346,
                                                                                            columnNumber: 69
                                                                                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-muted text-sm mb-0",
                                                                                        children: "No lessons yet."
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 350,
                                                                                        columnNumber: 70
                                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 344,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, chapter.id, true, {
                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                            lineNumber: 336,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex justify-content-between mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-light",
                                                                    onClick: handlePrev,
                                                                    children: "Prev"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 357,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-primary",
                                                                    onClick: handleNext,
                                                                    children: "Next"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 358,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                currentStep === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                    className: "form-inner wizard-form-card",
                                                    style: {
                                                        display: 'block'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "title border-0 mb-3 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                children: "Additional Information"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                lineNumber: 366,
                                                                columnNumber: 86
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 366,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-6 mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-light border p-4 rounded-3 h-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                className: "mb-3",
                                                                                children: "What will students learn?"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 370,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            courseData.learningItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "d-flex gap-2 mb-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "text",
                                                                                            className: "form-control",
                                                                                            value: item,
                                                                                            onChange: (e)=>updateItem('learningItems', idx, e.target.value)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 373,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            className: "btn btn-light text-danger",
                                                                                            onClick: ()=>removeItem('learningItems', idx),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                                size: 16
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                lineNumber: 374,
                                                                                                columnNumber: 160
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 374,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 372,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "btn btn-link p-0 mt-2 text-decoration-none",
                                                                                onClick: ()=>addItem('learningItems'),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                        size: 16,
                                                                                        className: "me-1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 377,
                                                                                        columnNumber: 161
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " Add New Item"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 377,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 369,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-6 mb-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-light border p-4 rounded-3 h-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                className: "mb-3",
                                                                                children: "Requirements"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 382,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            courseData.requirements.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "d-flex gap-2 mb-2",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "text",
                                                                                            className: "form-control",
                                                                                            value: item,
                                                                                            onChange: (e)=>updateItem('requirements', idx, e.target.value)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 385,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            className: "btn btn-light text-danger",
                                                                                            onClick: ()=>removeItem('requirements', idx),
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                                                size: 16
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                                lineNumber: 386,
                                                                                                columnNumber: 159
                                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 386,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 384,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "btn btn-link p-0 mt-2 text-decoration-none",
                                                                                onClick: ()=>addItem('requirements'),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                                        size: 16,
                                                                                        className: "me-1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                        lineNumber: 389,
                                                                                        columnNumber: 160
                                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                                    " Add New Item"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 389,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 381,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 380,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "col-md-12",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "bg-light border p-3 rounded",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                                                                children: "Frequently Asked Questions"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 394,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                                            courseData.faq.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "border p-3 rounded mb-2 bg-white",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                            type: "text",
                                                                                            className: "form-control mb-2",
                                                                                            placeholder: "Question",
                                                                                            value: f.question,
                                                                                            onChange: (e)=>{
                                                                                                const newFaq = [
                                                                                                    ...courseData.faq
                                                                                                ];
                                                                                                newFaq[idx].question = e.target.value;
                                                                                                setCourseData({
                                                                                                    ...courseData,
                                                                                                    faq: newFaq
                                                                                                });
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 397,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                            className: "form-control mb-2",
                                                                                            placeholder: "Answer",
                                                                                            rows: 2,
                                                                                            value: f.answer,
                                                                                            onChange: (e)=>{
                                                                                                const newFaq = [
                                                                                                    ...courseData.faq
                                                                                                ];
                                                                                                newFaq[idx].answer = e.target.value;
                                                                                                setCourseData({
                                                                                                    ...courseData,
                                                                                                    faq: newFaq
                                                                                                });
                                                                                            }
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 402,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            className: "btn btn-sm btn-outline-danger",
                                                                                            onClick: ()=>setCourseData({
                                                                                                    ...courseData,
                                                                                                    faq: courseData.faq.filter((_, i)=>i !== idx)
                                                                                                }),
                                                                                            children: "Remove FAQ"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                            lineNumber: 407,
                                                                                            columnNumber: 65
                                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 396,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                className: "btn btn-primary btn-sm mt-2",
                                                                                onClick: ()=>setCourseData({
                                                                                        ...courseData,
                                                                                        faq: [
                                                                                            ...courseData.faq,
                                                                                            {
                                                                                                question: "",
                                                                                                answer: ""
                                                                                            }
                                                                                        ]
                                                                                    }),
                                                                                children: "+ Add FAQ"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                lineNumber: 410,
                                                                                columnNumber: 57
                                                                            }, ("TURBOPACK compile-time value", void 0))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                        lineNumber: 393,
                                                                        columnNumber: 53
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex justify-content-between mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-light",
                                                                    onClick: handlePrev,
                                                                    children: "Prev"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 415,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-primary",
                                                                    onClick: handleNext,
                                                                    children: "Next"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 416,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                currentStep === 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                    className: "form-inner wizard-form-card",
                                                    style: {
                                                        display: 'block'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "title border-0 mb-3 p-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                children: "Pricing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 86
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "row",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "col-md-12 text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-light p-5 rounded border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "form-check form-switch d-inline-block mb-4",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    className: "form-check-input",
                                                                                    type: "checkbox",
                                                                                    id: "freeCheck",
                                                                                    checked: courseData.isFree,
                                                                                    onChange: (e)=>setCourseData({
                                                                                            ...courseData,
                                                                                            isFree: e.target.checked
                                                                                        })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 429,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "form-check-label fw-bold",
                                                                                    htmlFor: "freeCheck",
                                                                                    children: "This is a free course"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 430,
                                                                                    columnNumber: 61
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                            lineNumber: 428,
                                                                            columnNumber: 57
                                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                                        !courseData.isFree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "input-block mx-auto",
                                                                            style: {
                                                                                maxWidth: '300px'
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "form-label",
                                                                                    children: "Price (USD)"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 434,
                                                                                    columnNumber: 65
                                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "number",
                                                                                    className: "form-control text-center fs-4",
                                                                                    value: courseData.price,
                                                                                    onChange: (e)=>setCourseData({
                                                                                            ...courseData,
                                                                                            price: e.target.value
                                                                                        })
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                                    lineNumber: 435,
                                                                                    columnNumber: 65
                                                                                }, ("TURBOPACK compile-time value", void 0))
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                            lineNumber: 433,
                                                                            columnNumber: 61
                                                                        }, ("TURBOPACK compile-time value", void 0))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 53
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "d-flex justify-content-between mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-light",
                                                                    onClick: handlePrev,
                                                                    children: "Prev"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 442,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "btn btn-primary",
                                                                    onClick: handleSubmit,
                                                                    children: loading ? "Creating..." : "Submit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                                    lineNumber: 443,
                                                                    columnNumber: 49
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 45
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 41
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                            lineNumber: 223,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                    lineNumber: 200,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                lineNumber: 199,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                            lineNumber: 198,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                        lineNumber: 197,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "modal fade",
                        id: "add-category-modal",
                        tabIndex: -1,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "modal-dialog modal-dialog-centered",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "modal-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-header",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                children: "Add New Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                lineNumber: 458,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn-close",
                                                "data-bs-dismiss": "modal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                lineNumber: 459,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                        lineNumber: 457,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-body",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            className: "form-control",
                                            placeholder: "Category Name",
                                            value: newCategoryName,
                                            onChange: (e)=>setNewCategoryName(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                            lineNumber: 462,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                        lineNumber: 461,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "modal-footer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn btn-light",
                                                "data-bs-dismiss": "modal",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                lineNumber: 465,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "btn btn-primary",
                                                onClick: handleAddCategory,
                                                "data-bs-dismiss": "modal",
                                                children: "Add Category"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                                lineNumber: 466,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                        lineNumber: 464,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                                lineNumber: 456,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                            lineNumber: 455,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                        lineNumber: 454,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$HomePages$2f$home$2d$one$2f$section$2f$videoModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        show: showVideoModal,
                        handleClose: ()=>setShowVideoModal(false),
                        videoUrl: courseData.videoUrl
                    }, void 0, false, {
                        fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                        lineNumber: 472,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/pages/Admin/courses/adminAddCourse.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(AdminAddCourseComponent, "82GmmO0Zh03UXXO4L8ZVrz21SYQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AdminAddCourseComponent;
const __TURBOPACK__default__export__ = AdminAddCourseComponent;
var _c;
__turbopack_context__.k.register(_c, "AdminAddCourseComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/admin/courses/new/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAddCoursePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$Admin$2f$courses$2f$adminAddCourse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/pages/Admin/courses/adminAddCourse.tsx [app-client] (ecmascript)");
"use client";
;
;
function AdminAddCoursePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$pages$2f$Admin$2f$courses$2f$adminAddCourse$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/admin/courses/new/page.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = AdminAddCoursePage;
var _c;
__turbopack_context__.k.register(_c, "AdminAddCoursePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_871ab0ed._.js.map