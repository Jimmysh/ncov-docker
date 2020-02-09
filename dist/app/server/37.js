exports.ids=[37],exports.modules={TpdJ:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_tab",(function(){return Tab})),__webpack_require__.d(__webpack_exports__,"ion_tabs",(function(){return Tabs}));var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("54nT"),_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("AfW+"),__webpack_require__("m9yc"));const Tab=class{constructor(hostRef){Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.loaded=!1,this.active=!1}async componentWillLoad(){this.active&&await this.setActive()}async setActive(){await this.prepareLazyLoaded(),this.active=!0}changeActive(isActive){isActive&&this.prepareLazyLoaded()}prepareLazyLoaded(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.delegate,this.el,this.component,["ion-page"])}catch(e){console.error(e)}}return Promise.resolve(void 0)}render(){const{tab:tab,active:active,component:component}=this;return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.a,{role:"tabpanel","aria-hidden":active?null:"true","aria-labelledby":`tab-button-${tab}`,class:{"ion-page":void 0===component,"tab-hidden":!active}},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null))}get el(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get watchers(){return{active:["changeActive"]}}static get style(){return":host(.tab-hidden){display:none!important}"}},Tabs=class{constructor(hostRef){Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=ev=>{const{href:href,tab:tab}=ev.detail;if(this.useRouter&&void 0!==href){const router=document.querySelector("ion-router");router&&router.push(href)}else this.select(tab)},this.ionNavWillLoad=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionTabsDidChange",3)}async componentWillLoad(){if(this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),!this.useRouter){const tabs=this.tabs;tabs.length>0&&await this.select(tabs[0])}this.ionNavWillLoad.emit()}componentWillRender(){const tabBar=this.el.querySelector("ion-tab-bar");if(tabBar){const tab=this.selectedTab?this.selectedTab.tab:void 0;tabBar.selectedTab=tab}}async select(tab){const selectedTab=getTab(this.tabs,tab);return!!this.shouldSwitch(selectedTab)&&(await this.setActive(selectedTab),await this.notifyRouter(),this.tabSwitch(),!0)}async getTab(tab){return getTab(this.tabs,tab)}getSelected(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)}async setRouteId(id){const selectedTab=getTab(this.tabs,id);return this.shouldSwitch(selectedTab)?(await this.setActive(selectedTab),{changed:!0,element:this.selectedTab,markVisible:()=>this.tabSwitch()}):{changed:!1,element:this.selectedTab}}async getRouteId(){const tabId=this.selectedTab&&this.selectedTab.tab;return void 0!==tabId?{id:tabId,element:this.selectedTab}:void 0}setActive(selectedTab){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=selectedTab,this.ionTabsWillChange.emit({tab:selectedTab.tab}),selectedTab.active=!0,Promise.resolve())}tabSwitch(){const selectedTab=this.selectedTab,leavingTab=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,selectedTab&&leavingTab!==selectedTab&&(leavingTab&&(leavingTab.active=!1),this.ionTabsDidChange.emit({tab:selectedTab.tab}))}notifyRouter(){if(this.useRouter){const router=document.querySelector("ion-router");if(router)return router.navChanged("forward")}return Promise.resolve(!1)}shouldSwitch(selectedTab){const leavingTab=this.selectedTab;return void 0!==selectedTab&&selectedTab!==leavingTab&&!this.transitioning}get tabs(){return Array.from(this.el.querySelectorAll("ion-tab"))}render(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.a,{onIonTabButtonClick:this.onTabClicked},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",{name:"top"}),Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("div",{class:"tabs-inner"},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",null)),Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("slot",{name:"bottom"}))}get el(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get style(){return":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}"}},getTab=(tabs,tab)=>{const tabEl="string"==typeof tab?tabs.find(t=>t.tab===tab):tab;return tabEl||console.error(`tab with id: "${tabEl}" does not exist`),tabEl}},m9yc:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return attachComponent})),__webpack_require__.d(__webpack_exports__,"b",(function(){return detachComponent}));const attachComponent=async(delegate,container,component,cssClasses,componentProps)=>{if(delegate)return delegate.attachViewToDom(container,component,componentProps,cssClasses);if("string"!=typeof component&&!(component instanceof HTMLElement))throw new Error("framework delegate is missing");const el="string"==typeof component?container.ownerDocument&&container.ownerDocument.createElement(component):component;return cssClasses&&cssClasses.forEach(c=>el.classList.add(c)),componentProps&&Object.assign(el,componentProps),container.appendChild(el),el.componentOnReady&&await el.componentOnReady(),el},detachComponent=(delegate,element)=>{if(element){if(delegate){const container=element.parentElement;return delegate.removeViewFromDom(container,element)}element.remove()}return Promise.resolve()}}};