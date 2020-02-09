exports.ids=[52],exports.modules={"059i":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_checkbox",(function(){return Checkbox}));var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("54nT"),_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("AfW+"),__webpack_require__("aiEM")),_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("Dl6n");const Checkbox=class{constructor(hostRef){Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.inputId=`ion-cb-${checkboxIds++}`,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=()=>{this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionChange",7),this.ionFocus=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionFocus",7),this.ionBlur=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionBlur",7),this.ionStyle=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionStyle",7)}componentWillLoad(){this.emitStyle()}checkedChanged(isChecked){this.ionChange.emit({checked:isChecked,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{inputId:inputId,indeterminate:indeterminate,disabled:disabled,checked:checked,value:value,color:color,el:el}=this,labelId=inputId+"-lbl",mode=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.d)(this),label=Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.f)(el);label&&(label.id=labelId),Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__.a)(!0,el,this.name,checked?value:"",disabled);let path=indeterminate?Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M6 12L18 12"}):Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M5.9,12.5l3.8,3.8l8.8-8.8"});return"md"===mode&&(path=indeterminate?Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M2 12H22"}):Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("path",{d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.a,{onClick:this.onClick,role:"checkbox","aria-disabled":disabled?"true":null,"aria-checked":`${checked}`,"aria-labelledby":labelId,class:Object.assign(Object.assign({},Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.a)(color)),{[mode]:!0,"in-item":Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__.c)("ion-item",el),"checkbox-checked":checked,"checkbox-disabled":disabled,"checkbox-indeterminate":indeterminate,interactive:!0})},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("svg",{class:"checkbox-icon",viewBox:"0 0 24 24"},path),Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:this.disabled,ref:btnEl=>this.buttonEl=btnEl}))}get el(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}static get style(){return":host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-sizing:border-box;box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.23);--background:var(--ion-item-background,var(--ion-background-color,#fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}"}};let checkboxIds=0},Dl6n:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return createColorClasses})),__webpack_require__.d(__webpack_exports__,"b",(function(){return getClassMap})),__webpack_require__.d(__webpack_exports__,"c",(function(){return hostContext})),__webpack_require__.d(__webpack_exports__,"d",(function(){return openURL}));const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=color=>"string"==typeof color&&color.length>0?{"ion-color":!0,[`ion-color-${color}`]:!0}:void 0,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes){return(Array.isArray(classes)?classes:classes.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c)}return[]})(classes).forEach(c=>map[c]=!0),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction)}return!1}}};