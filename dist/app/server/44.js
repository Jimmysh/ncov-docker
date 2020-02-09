exports.ids=[44],exports.modules={Dl6n:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=color=>"string"==typeof color&&color.length>0?{"ion-color":!0,[`ion-color-${color}`]:!0}:void 0,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes){return(Array.isArray(classes)?classes:classes.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c)}return[]})(classes).forEach(c=>map[c]=!0),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction)}return!1}},hH1s:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_avatar",(function(){return Avatar})),__webpack_require__.d(__webpack_exports__,"ion_badge",(function(){return Badge})),__webpack_require__.d(__webpack_exports__,"ion_thumbnail",(function(){return Thumbnail}));var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("54nT"),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("AfW+"),__webpack_require__("Dl6n"));const Avatar=class{constructor(hostRef){Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef)}render(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.a,{class:Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.d)(this)},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null))}static get style(){return":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}"}},Badge=class{constructor(hostRef){Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef)}render(){const mode=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.d)(this);return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.a,{class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.color)),{[mode]:!0})},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null))}static get style(){return":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}"}},Thumbnail=class{constructor(hostRef){Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef)}render(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.a,{class:Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.d)(this)},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null))}static get style(){return":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"}}}};