function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _get(t,e,n){return(_get="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=_superPropBase(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function _superPropBase(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_getPrototypeOf(t)););return t}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+0xr":function(t,e,n){"use strict";var r=n("fXoL");function o(t){return null!=t&&"false"!=="".concat(t)}var i=n("HDdC"),s=n("LRne"),a=n("XNiG");function c(t){return t&&"function"==typeof t.connect}var l,u,h,f=n("ofXK"),d=new r.r("cdk-dir-doc",{providedIn:"root",factory:function(){return Object(r.V)(f.d)}}),_=((h=function(){function t(e){if(_classCallCheck(this,t),this.value="ltr",this.change=new r.o,e){var n=e.documentElement?e.documentElement.dir:null,o=(e.body?e.body.dir:null)||n;this.value="ltr"===o||"rtl"===o?o:"ltr"}}return _createClass(t,[{key:"ngOnDestroy",value:function(){this.change.complete()}}]),t}()).\u0275fac=function(t){return new(t||h)(r.Wb(d,8))},h.\u0275prov=Object(r.Ib)({factory:function(){return new h(Object(r.Wb)(d,8))},token:h,providedIn:"root"}),h),y=((u=function t(){_classCallCheck(this,t)}).\u0275mod=r.Kb({type:u}),u.\u0275inj=r.Jb({factory:function(t){return new(t||u)}}),u);try{l="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(re){l=!1}var p,m=((p=function t(e){_classCallCheck(this,t),this._platformId=e,this.isBrowser=this._platformId?Object(f.p)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!l)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}).\u0275fac=function(t){return new(t||p)(r.Wb(r.C,8))},p.\u0275prov=Object(r.Ib)({factory:function(){return new p(Object(r.Wb)(r.C,8))},token:p,providedIn:"root"}),p),w=n("2Vo4"),k=n("l7GE"),b=n("ZUHj");function C(t){return function(e){return e.lift(new v(t))}}var v=function(){function t(e){_classCallCheck(this,t),this.notifier=e}return _createClass(t,[{key:"call",value:function(t,e){var n=new g(t),r=Object(b.a)(n,this.notifier);return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n}}]),t}(),g=function(t){function e(t){var n;return _classCallCheck(this,e),(n=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).seenValue=!1,n}return _inherits(e,t),_createClass(e,[{key:"notifyNext",value:function(t,e,n,r,o){this.seenValue=!0,this.complete()}},{key:"notifyComplete",value:function(){}}]),e}(k.a),R=[[["caption"]]],D=["caption"];function S(t){return function(t){function e(){var t,n;_classCallCheck(this,e);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=_possibleConstructorReturn(this,(t=_getPrototypeOf(e)).call.apply(t,[this].concat(o))))._sticky=!1,n._hasStickyChanged=!1,n}return _inherits(e,t),_createClass(e,[{key:"hasStickyChanged",value:function(){var t=this._hasStickyChanged;return this._hasStickyChanged=!1,t}},{key:"resetStickyChanged",value:function(){this._hasStickyChanged=!1}},{key:"sticky",get:function(){return this._sticky},set:function(t){var e=this._sticky;this._sticky=o(t),this._hasStickyChanged=e!==this._sticky}}]),e}(t)}var O,E,x,A,M,H,P,I,T,B,F,N,j,z=((x=function t(e){_classCallCheck(this,t),this.template=e}).\u0275fac=function(t){return new(t||x)(r.Mb(r.M))},x.\u0275dir=r.Hb({type:x,selectors:[["","cdkCellDef",""]]}),x),W=((E=function t(e){_classCallCheck(this,t),this.template=e}).\u0275fac=function(t){return new(t||E)(r.Mb(r.M))},E.\u0275dir=r.Hb({type:E,selectors:[["","cdkHeaderCellDef",""]]}),E),L=((O=function t(e){_classCallCheck(this,t),this.template=e}).\u0275fac=function(t){return new(t||O)(r.Mb(r.M))},O.\u0275dir=r.Hb({type:O,selectors:[["","cdkFooterCellDef",""]]}),O),G=S((function t(){_classCallCheck(this,t)})),U=((A=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments)))._stickyEnd=!1,t}return _inherits(e,t),_createClass(e,[{key:"name",get:function(){return this._name},set:function(t){t&&(this._name=t,this.cssClassFriendlyName=t.replace(/[^a-z0-9_-]/gi,"-"))}},{key:"stickyEnd",get:function(){return this._stickyEnd},set:function(t){var e=this._stickyEnd;this._stickyEnd=o(t),this._hasStickyChanged=e!==this._stickyEnd}}]),e}(G)).\u0275fac=function(t){return K(t||A)},A.\u0275dir=r.Hb({type:A,selectors:[["","cdkColumnDef",""]],contentQueries:function(t,e,n){var o;1&t&&(r.Fb(n,z,!0),r.Fb(n,W,!0),r.Fb(n,L,!0)),2&t&&(r.kc(o=r.bc())&&(e.cell=o.first),r.kc(o=r.bc())&&(e.headerCell=o.first),r.kc(o=r.bc())&&(e.footerCell=o.first))},inputs:{sticky:"sticky",name:["cdkColumnDef","name"],stickyEnd:"stickyEnd"},features:[r.Bb([{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:A}]),r.zb]}),A),K=r.Ub(U),V=function t(e,n){_classCallCheck(this,t),n.nativeElement.classList.add("cdk-column-".concat(e.cssClassFriendlyName))},J=((P=function(t){function e(t,n){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n))}return _inherits(e,t),e}(V)).\u0275fac=function(t){return new(t||P)(r.Mb(U),r.Mb(r.l))},P.\u0275dir=r.Hb({type:P,selectors:[["cdk-header-cell"],["th","cdk-header-cell",""]],hostAttrs:["role","columnheader",1,"cdk-header-cell"],features:[r.zb]}),P),X=((H=function(t){function e(t,n){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n))}return _inherits(e,t),e}(V)).\u0275fac=function(t){return new(t||H)(r.Mb(U),r.Mb(r.l))},H.\u0275dir=r.Hb({type:H,selectors:[["cdk-cell"],["td","cdk-cell",""]],hostAttrs:["role","gridcell",1,"cdk-cell"],features:[r.zb]}),H),Z=((M=function(){function t(e,n){_classCallCheck(this,t),this.template=e,this._differs=n}return _createClass(t,[{key:"ngOnChanges",value:function(t){if(!this._columnsDiffer){var e=t.columns&&t.columns.currentValue||[];this._columnsDiffer=this._differs.find(e).create(),this._columnsDiffer.diff(e)}}},{key:"getColumnsDiff",value:function(){return this._columnsDiffer.diff(this.columns)}},{key:"extractCellTemplate",value:function(t){return this instanceof Q?t.headerCell.template:this instanceof Y?t.footerCell.template:t.cell.template}}]),t}()).\u0275fac=function(t){r.Zb()},M.\u0275dir=r.Hb({type:M,features:[r.Ab()]}),M),q=S(function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(Z)),Q=((I=function(t){function e(t,n){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n))}return _inherits(e,t),_createClass(e,[{key:"ngOnChanges",value:function(t){_get(_getPrototypeOf(e.prototype),"ngOnChanges",this).call(this,t)}}]),e}(q)).\u0275fac=function(t){return new(t||I)(r.Mb(r.M),r.Mb(r.t))},I.\u0275dir=r.Hb({type:I,selectors:[["","cdkHeaderRowDef",""]],inputs:{columns:["cdkHeaderRowDef","columns"],sticky:["cdkHeaderRowDefSticky","sticky"]},features:[r.zb,r.Ab()]}),I),$=S(function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(Z)),Y=((j=function(t){function e(t,n){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n))}return _inherits(e,t),_createClass(e,[{key:"ngOnChanges",value:function(t){_get(_getPrototypeOf(e.prototype),"ngOnChanges",this).call(this,t)}}]),e}($)).\u0275fac=function(t){return new(t||j)(r.Mb(r.M),r.Mb(r.t))},j.\u0275dir=r.Hb({type:j,selectors:[["","cdkFooterRowDef",""]],inputs:{columns:["cdkFooterRowDef","columns"],sticky:["cdkFooterRowDefSticky","sticky"]},features:[r.zb,r.Ab()]}),j),tt=((N=function(t){function e(t,n){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n))}return _inherits(e,t),e}(Z)).\u0275fac=function(t){return new(t||N)(r.Mb(r.M),r.Mb(r.t))},N.\u0275dir=r.Hb({type:N,selectors:[["","cdkRowDef",""]],inputs:{columns:["cdkRowDefColumns","columns"],when:["cdkRowDefWhen","when"]},features:[r.zb]}),N),et=((F=function(){function t(e){_classCallCheck(this,t),this._viewContainer=e,t.mostRecentCellOutlet=this}return _createClass(t,[{key:"ngOnDestroy",value:function(){t.mostRecentCellOutlet===this&&(t.mostRecentCellOutlet=null)}}]),t}()).\u0275fac=function(t){return new(t||F)(r.Mb(r.P))},F.\u0275dir=r.Hb({type:F,selectors:[["","cdkCellOutlet",""]]}),F.mostRecentCellOutlet=null,F),nt=((B=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||B)},B.\u0275cmp=r.Gb({type:B,selectors:[["cdk-header-row"],["tr","cdk-header-row",""]],hostAttrs:["role","row",1,"cdk-header-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Ob(0,0)},directives:[et],encapsulation:2}),B),rt=((T=function t(){_classCallCheck(this,t)}).\u0275fac=function(t){return new(t||T)},T.\u0275cmp=r.Gb({type:T,selectors:[["cdk-row"],["tr","cdk-row",""]],hostAttrs:["role","row",1,"cdk-row"],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Ob(0,0)},directives:[et],encapsulation:2}),T),ot=["top","bottom","left","right"],it=function(){function t(e,n,r){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];_classCallCheck(this,t),this._isNativeHtmlTable=e,this._stickCellCss=n,this.direction=r,this._isBrowser=o}return _createClass(t,[{key:"clearStickyPositioning",value:function(t,e){var n=!0,r=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var a=i.value;if(a.nodeType===a.ELEMENT_NODE){this._removeStickyStyle(a,e);for(var c=0;c<a.children.length;c++)this._removeStickyStyle(a.children[c],e)}}}catch(l){r=!0,o=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}}},{key:"updateStickyColumns",value:function(t,e,n){var r=e.some((function(t){return t}))||n.some((function(t){return t}));if(t.length&&r&&this._isBrowser){var o=t[0],i=o.children.length,s=this._getCellWidths(o),a=this._getStickyStartColumnPositions(s,e),c=this._getStickyEndColumnPositions(s,n),l="rtl"===this.direction,u=!0,h=!1,f=void 0;try{for(var d,_=t[Symbol.iterator]();!(u=(d=_.next()).done);u=!0)for(var y=d.value,p=0;p<i;p++){var m=y.children[p];e[p]&&this._addStickyStyle(m,l?"right":"left",a[p]),n[p]&&this._addStickyStyle(m,l?"left":"right",c[p])}}catch(w){h=!0,f=w}finally{try{u||null==_.return||_.return()}finally{if(h)throw f}}}}},{key:"stickRows",value:function(t,e,n){if(this._isBrowser)for(var r="bottom"===n?t.reverse():t,o=0,i=0;i<r.length;i++)if(e[i]){var s=r[i];if(this._isNativeHtmlTable)for(var a=0;a<s.children.length;a++)this._addStickyStyle(s.children[a],n,o);else this._addStickyStyle(s,n,o);if(i===r.length-1)return;o+=s.getBoundingClientRect().height}}},{key:"updateStickyFooterContainer",value:function(t,e){if(this._isNativeHtmlTable){var n=t.querySelector("tfoot");e.some((function(t){return!t}))?this._removeStickyStyle(n,["bottom"]):this._addStickyStyle(n,"bottom",0)}}},{key:"_removeStickyStyle",value:function(t,e){var n=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var a=i.value;t.style[a]=""}}catch(c){r=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}t.style.zIndex=this._getCalculatedZIndex(t),ot.some((function(e){return!!t.style[e]}))||(t.style.position="",t.classList.remove(this._stickCellCss))}},{key:"_addStickyStyle",value:function(t,e,n){t.classList.add(this._stickCellCss),t.style[e]="".concat(n,"px"),t.style.cssText+="position: -webkit-sticky; position: sticky; ",t.style.zIndex=this._getCalculatedZIndex(t)}},{key:"_getCalculatedZIndex",value:function(t){var e={top:100,bottom:10,left:1,right:1},n=0,r=!0,o=!1,i=void 0;try{for(var s,a=ot[Symbol.iterator]();!(r=(s=a.next()).done);r=!0){var c=s.value;t.style[c]&&(n+=e[c])}}catch(l){o=!0,i=l}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n?"".concat(n):""}},{key:"_getCellWidths",value:function(t){for(var e=[],n=t.children,r=0;r<n.length;r++)e.push(n[r].getBoundingClientRect().width);return e}},{key:"_getStickyStartColumnPositions",value:function(t,e){for(var n=[],r=0,o=0;o<t.length;o++)e[o]&&(n[o]=r,r+=t[o]);return n}},{key:"_getStickyEndColumnPositions",value:function(t,e){for(var n=[],r=0,o=t.length;o>0;o--)e[o]&&(n[o]=r,r+=t[o]);return n}}]),t}();function st(t){return Error('Could not find column with id "'.concat(t,'".'))}var at,ct,lt,ut,ht=((ut=function t(e,n){_classCallCheck(this,t),this.viewContainer=e,this.elementRef=n}).\u0275fac=function(t){return new(t||ut)(r.Mb(r.P),r.Mb(r.l))},ut.\u0275dir=r.Hb({type:ut,selectors:[["","rowOutlet",""]]}),ut),ft=((lt=function t(e,n){_classCallCheck(this,t),this.viewContainer=e,this.elementRef=n}).\u0275fac=function(t){return new(t||lt)(r.Mb(r.P),r.Mb(r.l))},lt.\u0275dir=r.Hb({type:lt,selectors:[["","headerRowOutlet",""]]}),lt),dt=((ct=function t(e,n){_classCallCheck(this,t),this.viewContainer=e,this.elementRef=n}).\u0275fac=function(t){return new(t||ct)(r.Mb(r.P),r.Mb(r.l))},ct.\u0275dir=r.Hb({type:ct,selectors:[["","footerRowOutlet",""]]}),ct),_t=((at=function(){function t(e,n,r,o,i,s,c){_classCallCheck(this,t),this._differs=e,this._changeDetectorRef=n,this._elementRef=r,this._dir=i,this._platform=c,this._onDestroy=new a.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this._multiTemplateDataRows=!1,this.viewChange=new w.a({start:0,end:Number.MAX_VALUE}),o||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=s,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((function(e,n){return t.trackBy?t.trackBy(n.dataIndex,n.data):n}))}},{key:"ngAfterContentChecked",value:function(){if(this._cacheRowDefs(),this._cacheColumnDefs(),!this._headerRowDefs.length&&!this._footerRowDefs.length&&!this._rowDefs.length)throw Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");this._renderUpdatedColumns(),this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription&&this._observeRenderChanges(),this._checkStickyStates()}},{key:"ngOnDestroy",value:function(){this._rowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),c(this.dataSource)&&this.dataSource.disconnect(this)}},{key:"renderRows",value:function(){var t=this;this._renderRows=this._getAllRenderRows();var e=this._dataDiffer.diff(this._renderRows);if(e){var n=this._rowOutlet.viewContainer;e.forEachOperation((function(e,r,o){if(null==e.previousIndex)t._insertRow(e.item,o);else if(null==o)n.remove(r);else{var i=n.get(r);n.move(i,o)}})),this._updateRowIndexContext(),e.forEachIdentityChange((function(t){n.get(t.currentIndex).context.$implicit=t.item.data})),this.updateStickyColumnStyles()}}},{key:"setHeaderRowDef",value:function(t){this._customHeaderRowDefs=new Set([t]),this._headerRowDefChanged=!0}},{key:"setFooterRowDef",value:function(t){this._customFooterRowDefs=new Set([t]),this._footerRowDefChanged=!0}},{key:"addColumnDef",value:function(t){this._customColumnDefs.add(t)}},{key:"removeColumnDef",value:function(t){this._customColumnDefs.delete(t)}},{key:"addRowDef",value:function(t){this._customRowDefs.add(t)}},{key:"removeRowDef",value:function(t){this._customRowDefs.delete(t)}},{key:"addHeaderRowDef",value:function(t){this._customHeaderRowDefs.add(t),this._headerRowDefChanged=!0}},{key:"removeHeaderRowDef",value:function(t){this._customHeaderRowDefs.delete(t),this._headerRowDefChanged=!0}},{key:"addFooterRowDef",value:function(t){this._customFooterRowDefs.add(t),this._footerRowDefChanged=!0}},{key:"removeFooterRowDef",value:function(t){this._customFooterRowDefs.delete(t),this._footerRowDefChanged=!0}},{key:"updateStickyHeaderRowStyles",value:function(){var t=this._getRenderedRows(this._headerRowOutlet),e=this._elementRef.nativeElement.querySelector("thead");e&&(e.style.display=t.length?"":"none");var n=this._headerRowDefs.map((function(t){return t.sticky}));this._stickyStyler.clearStickyPositioning(t,["top"]),this._stickyStyler.stickRows(t,n,"top"),this._headerRowDefs.forEach((function(t){return t.resetStickyChanged()}))}},{key:"updateStickyFooterRowStyles",value:function(){var t=this._getRenderedRows(this._footerRowOutlet),e=this._elementRef.nativeElement.querySelector("tfoot");e&&(e.style.display=t.length?"":"none");var n=this._footerRowDefs.map((function(t){return t.sticky}));this._stickyStyler.clearStickyPositioning(t,["bottom"]),this._stickyStyler.stickRows(t,n,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,n),this._footerRowDefs.forEach((function(t){return t.resetStickyChanged()}))}},{key:"updateStickyColumnStyles",value:function(){var t=this,e=this._getRenderedRows(this._headerRowOutlet),n=this._getRenderedRows(this._rowOutlet),r=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([].concat(_toConsumableArray(e),_toConsumableArray(n),_toConsumableArray(r)),["left","right"]),e.forEach((function(e,n){t._addStickyColumnStyles([e],t._headerRowDefs[n])})),this._rowDefs.forEach((function(e){for(var r=[],o=0;o<n.length;o++)t._renderRows[o].rowDef===e&&r.push(n[o]);t._addStickyColumnStyles(r,e)})),r.forEach((function(e,n){t._addStickyColumnStyles([e],t._footerRowDefs[n])})),Array.from(this._columnDefsByName.values()).forEach((function(t){return t.resetStickyChanged()}))}},{key:"_getAllRenderRows",value:function(){var t=[],e=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(var n=0;n<this._data.length;n++){var r=this._data[n],o=this._getRenderRowsForData(r,n,e.get(r));this._cachedRenderRowsMap.has(r)||this._cachedRenderRowsMap.set(r,new WeakMap);for(var i=0;i<o.length;i++){var s=o[i],a=this._cachedRenderRowsMap.get(s.data);a.has(s.rowDef)?a.get(s.rowDef).push(s):a.set(s.rowDef,[s]),t.push(s)}}return t}},{key:"_getRenderRowsForData",value:function(t,e,n){return this._getRowDefs(t,e).map((function(r){var o=n&&n.has(r)?n.get(r):[];if(o.length){var i=o.shift();return i.dataIndex=e,i}return{data:t,rowDef:r,dataIndex:e}}))}},{key:"_cacheColumnDefs",value:function(){var t=this;this._columnDefsByName.clear(),yt(this._contentColumnDefs,this._customColumnDefs).forEach((function(e){if(t._columnDefsByName.has(e.name))throw Error('Duplicate column definition name provided: "'.concat(e.name,'".'));t._columnDefsByName.set(e.name,e)}))}},{key:"_cacheRowDefs",value:function(){this._headerRowDefs=yt(this._contentHeaderRowDefs,this._customHeaderRowDefs),this._footerRowDefs=yt(this._contentFooterRowDefs,this._customFooterRowDefs),this._rowDefs=yt(this._contentRowDefs,this._customRowDefs);var t=this._rowDefs.filter((function(t){return!t.when}));if(!this.multiTemplateDataRows&&t.length>1)throw Error("There can only be one default row without a when predicate function.");this._defaultRowDef=t[0]}},{key:"_renderUpdatedColumns",value:function(){var t=function(t,e){return t||!!e.getColumnsDiff()};this._rowDefs.reduce(t,!1)&&this._forceRenderDataRows(),this._headerRowDefs.reduce(t,!1)&&this._forceRenderHeaderRows(),this._footerRowDefs.reduce(t,!1)&&this._forceRenderFooterRows()}},{key:"_switchDataSource",value:function(t){this._data=[],c(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),t||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=t}},{key:"_observeRenderChanges",value:function(){var t=this;if(this.dataSource){var e;if(c(this.dataSource)?e=this.dataSource.connect(this):this.dataSource instanceof i.a?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Object(s.a)(this.dataSource)),void 0===e)throw Error("Provided data source did not match an array, Observable, or DataSource");this._renderChangeSubscription=e.pipe(C(this._onDestroy)).subscribe((function(e){t._data=e||[],t.renderRows()}))}}},{key:"_forceRenderHeaderRows",value:function(){var t=this;this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((function(e,n){return t._renderRow(t._headerRowOutlet,e,n)})),this.updateStickyHeaderRowStyles(),this.updateStickyColumnStyles()}},{key:"_forceRenderFooterRows",value:function(){var t=this;this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((function(e,n){return t._renderRow(t._footerRowOutlet,e,n)})),this.updateStickyFooterRowStyles(),this.updateStickyColumnStyles()}},{key:"_addStickyColumnStyles",value:function(t,e){var n=this,r=Array.from(e.columns||[]).map((function(t){var e=n._columnDefsByName.get(t);if(!e)throw st(t);return e})),o=r.map((function(t){return t.sticky})),i=r.map((function(t){return t.stickyEnd}));this._stickyStyler.updateStickyColumns(t,o,i)}},{key:"_getRenderedRows",value:function(t){for(var e=[],n=0;n<t.viewContainer.length;n++){var r=t.viewContainer.get(n);e.push(r.rootNodes[0])}return e}},{key:"_getRowDefs",value:function(t,e){if(1==this._rowDefs.length)return[this._rowDefs[0]];var n=[];if(this.multiTemplateDataRows)n=this._rowDefs.filter((function(n){return!n.when||n.when(e,t)}));else{var r=this._rowDefs.find((function(n){return n.when&&n.when(e,t)}))||this._defaultRowDef;r&&n.push(r)}if(!n.length)throw function(t){return Error("Could not find a matching row definition for the"+"provided row data: ".concat(JSON.stringify(t)))}(t);return n}},{key:"_insertRow",value:function(t,e){this._renderRow(this._rowOutlet,t.rowDef,e,{$implicit:t.data})}},{key:"_renderRow",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t.viewContainer.createEmbeddedView(e.template,r,n);var o=!0,i=!1,s=void 0;try{for(var a,c=this._getCellTemplates(e)[Symbol.iterator]();!(o=(a=c.next()).done);o=!0){var l=a.value;et.mostRecentCellOutlet&&et.mostRecentCellOutlet._viewContainer.createEmbeddedView(l,r)}}catch(u){i=!0,s=u}finally{try{o||null==c.return||c.return()}finally{if(i)throw s}}this._changeDetectorRef.markForCheck()}},{key:"_updateRowIndexContext",value:function(){for(var t=this._rowOutlet.viewContainer,e=0,n=t.length;e<n;e++){var r=t.get(e).context;r.count=n,r.first=0===e,r.last=e===n-1,r.even=e%2==0,r.odd=!r.even,this.multiTemplateDataRows?(r.dataIndex=this._renderRows[e].dataIndex,r.renderIndex=e):r.index=this._renderRows[e].dataIndex}}},{key:"_getCellTemplates",value:function(t){var e=this;return t&&t.columns?Array.from(t.columns,(function(n){var r=e._columnDefsByName.get(n);if(!r)throw st(n);return t.extractCellTemplate(r)})):[]}},{key:"_applyNativeTableSections",value:function(){for(var t=this._document.createDocumentFragment(),e=0,n=[{tag:"thead",outlet:this._headerRowOutlet},{tag:"tbody",outlet:this._rowOutlet},{tag:"tfoot",outlet:this._footerRowOutlet}];e<n.length;e++){var r=n[e],o=this._document.createElement(r.tag);o.setAttribute("role","rowgroup"),o.appendChild(r.outlet.elementRef.nativeElement),t.appendChild(o)}this._elementRef.nativeElement.appendChild(t)}},{key:"_forceRenderDataRows",value:function(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows(),this.updateStickyColumnStyles()}},{key:"_checkStickyStates",value:function(){var t=function(t,e){return t||e.hasStickyChanged()};this._headerRowDefs.reduce(t,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(t,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(t,!1)&&this.updateStickyColumnStyles()}},{key:"_setupStickyStyler",value:function(){var t=this;this._stickyStyler=new it(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._platform.isBrowser),(this._dir?this._dir.change:Object(s.a)()).pipe(C(this._onDestroy)).subscribe((function(e){t._stickyStyler.direction=e,t.updateStickyColumnStyles()}))}},{key:"trackBy",get:function(){return this._trackByFn},set:function(t){Object(r.W)()&&null!=t&&"function"!=typeof t&&console&&console.warn&&console.warn("trackBy must be a function, but received ".concat(JSON.stringify(t),".")),this._trackByFn=t}},{key:"dataSource",get:function(){return this._dataSource},set:function(t){this._dataSource!==t&&this._switchDataSource(t)}},{key:"multiTemplateDataRows",get:function(){return this._multiTemplateDataRows},set:function(t){this._multiTemplateDataRows=o(t),this._rowOutlet&&this._rowOutlet.viewContainer.length&&this._forceRenderDataRows()}}]),t}()).\u0275fac=function(t){return new(t||at)(r.Mb(r.t),r.Mb(r.h),r.Mb(r.l),r.Xb("role"),r.Mb(_,8),r.Mb(f.d),r.Mb(m))},at.\u0275cmp=r.Gb({type:at,selectors:[["cdk-table"],["table","cdk-table",""]],contentQueries:function(t,e,n){var o;1&t&&(r.Fb(n,U,!0),r.Fb(n,tt,!0),r.Fb(n,Q,!0),r.Fb(n,Y,!0)),2&t&&(r.kc(o=r.bc())&&(e._contentColumnDefs=o),r.kc(o=r.bc())&&(e._contentRowDefs=o),r.kc(o=r.bc())&&(e._contentHeaderRowDefs=o),r.kc(o=r.bc())&&(e._contentFooterRowDefs=o))},viewQuery:function(t,e){var n;1&t&&(r.oc(ht,!0),r.oc(ft,!0),r.oc(dt,!0)),2&t&&(r.kc(n=r.bc())&&(e._rowOutlet=n.first),r.kc(n=r.bc())&&(e._headerRowOutlet=n.first),r.kc(n=r.bc())&&(e._footerRowOutlet=n.first))},hostAttrs:[1,"cdk-table"],inputs:{trackBy:"trackBy",dataSource:"dataSource",multiTemplateDataRows:"multiTemplateDataRows"},exportAs:["cdkTable"],ngContentSelectors:D,decls:4,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(r.hc(R),r.gc(0),r.Ob(1,0),r.Ob(2,1),r.Ob(3,2))},directives:[ft,ht,dt],encapsulation:2}),at);function yt(t,e){return t.toArray().concat(Array.from(e))}var pt,mt=((pt=function t(){_classCallCheck(this,t)}).\u0275mod=r.Kb({type:pt}),pt.\u0275inj=r.Jb({factory:function(t){return new(t||pt)},imports:[[f.c]]}),pt);n("quSY"),n("vkgz"),n("Kj3r"),n("pLZG"),n("lJxs"),n("IzEk");var wt,kt=((wt=function(){function t(e,n){_classCallCheck(this,t),this._platform=e,this._document=n}return _createClass(t,[{key:"getHighContrastMode",value:function(){if(!this._platform.isBrowser)return 0;var t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);var e=(this._document.defaultView.getComputedStyle(t).backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),e){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}},{key:"_applyBodyHighContrastModeCssClasses",value:function(){if(this._platform.isBrowser&&this._document.body){var t=this._document.body.classList;t.remove("cdk-high-contrast-active"),t.remove("cdk-high-contrast-black-on-white"),t.remove("cdk-high-contrast-white-on-black");var e=this.getHighContrastMode();1===e?(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-black-on-white")):2===e&&(t.add("cdk-high-contrast-active"),t.add("cdk-high-contrast-white-on-black"))}}}]),t}()).\u0275fac=function(t){return new(t||wt)(r.Wb(m),r.Wb(f.d))},wt.\u0275prov=Object(r.Ib)({factory:function(){return new wt(Object(r.Wb)(m),Object(r.Wb)(f.d))},token:wt,providedIn:"root"}),wt),bt=new r.O("9.0.0");n("jhN1"),n("JX91"),n("R1ws");var Ct,vt=new r.O("9.0.0"),gt=new r.r("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}}),Rt=((Ct=function(){function t(e,n){_classCallCheck(this,t),this._hasDoneGlobalChecks=!1,this._document="object"==typeof document&&document?document:null,this._window="object"==typeof window&&window?window:null,e._applyBodyHighContrastModeCssClasses(),this._sanityChecks=n,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}return _createClass(t,[{key:"_checksAreEnabled",value:function(){return Object(r.W)()&&!this._isTestEnv()}},{key:"_isTestEnv",value:function(){var t=this._window;return t&&(t.__karma__||t.jasmine)}},{key:"_checkDoctypeIsDefined",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.doctype)&&this._document&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}},{key:"_checkThemeIsPresent",value:function(){if(this._checksAreEnabled()&&!1!==this._sanityChecks&&this._sanityChecks.theme&&this._document&&this._document.body&&"function"==typeof getComputedStyle){var t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);var e=getComputedStyle(t);e&&"none"!==e.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}}},{key:"_checkCdkVersionMatch",value:function(){this._checksAreEnabled()&&(!0===this._sanityChecks||this._sanityChecks.version)&&vt.full!==bt.full&&console.warn("The Angular Material version ("+vt.full+") does not match the Angular CDK version ("+bt.full+").\nPlease ensure the versions of these two packages exactly match.")}}]),t}()).\u0275mod=r.Kb({type:Ct}),Ct.\u0275inj=r.Jb({factory:function(t){return new(t||Ct)(r.Wb(kt),r.Wb(gt,8))},imports:[[y],y]}),Ct);try{"undefined"!=typeof Intl}catch(re){!1}n("VRyK"),n("itXk"),n.d(e,"a",(function(){return Jt})),n.d(e,"b",(function(){return zt})),n.d(e,"c",(function(){return Ut})),n.d(e,"d",(function(){return Vt})),n.d(e,"e",(function(){return Lt})),n.d(e,"f",(function(){return $t})),n.d(e,"g",(function(){return Xt})),n.d(e,"h",(function(){return te})),n.d(e,"i",(function(){return qt})),n.d(e,"j",(function(){return Nt})),n.d(e,"k",(function(){return ne}));var Dt,St,Ot,Et,xt,At,Mt,Ht,Pt,It,Tt,Bt=[[["caption"]]],Ft=["caption"],Nt=((Dt=function(t){function e(){var t;return _classCallCheck(this,e),(t=_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))).stickyCssClass="mat-table-sticky",t}return _inherits(e,t),e}(_t)).\u0275fac=function(t){return jt(t||Dt)},Dt.\u0275cmp=r.Gb({type:Dt,selectors:[["mat-table"],["table","mat-table",""]],hostAttrs:[1,"mat-table"],exportAs:["matTable"],features:[r.Bb([{provide:_t,useExisting:Dt}]),r.zb],ngContentSelectors:Ft,decls:4,vars:0,consts:[["headerRowOutlet",""],["rowOutlet",""],["footerRowOutlet",""]],template:function(t,e){1&t&&(r.hc(Bt),r.gc(0),r.Ob(1,0),r.Ob(2,1),r.Ob(3,2))},directives:[ft,ht,dt],styles:['mat-table{display:block}mat-header-row{min-height:56px}mat-row,mat-footer-row{min-height:48px}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-row::after,mat-header-row::after,mat-footer-row::after{display:inline-block;min-height:inherit;content:""}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type,[dir=rtl] mat-header-cell:first-of-type,[dir=rtl] mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type,[dir=rtl] mat-header-cell:last-of-type,[dir=rtl] mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}table.mat-table{border-spacing:0}tr.mat-header-row{height:56px}tr.mat-row,tr.mat-footer-row{height:48px}th.mat-header-cell{text-align:left}[dir=rtl] th.mat-header-cell{text-align:right}th.mat-header-cell,td.mat-cell,td.mat-footer-cell{padding:0;border-bottom-width:1px;border-bottom-style:solid}th.mat-header-cell:first-of-type,td.mat-cell:first-of-type,td.mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] th.mat-header-cell:first-of-type,[dir=rtl] td.mat-cell:first-of-type,[dir=rtl] td.mat-footer-cell:first-of-type{padding-left:0;padding-right:24px}th.mat-header-cell:last-of-type,td.mat-cell:last-of-type,td.mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] th.mat-header-cell:last-of-type,[dir=rtl] td.mat-cell:last-of-type,[dir=rtl] td.mat-footer-cell:last-of-type{padding-right:0;padding-left:24px}\n'],encapsulation:2}),Dt),jt=r.Ub(Nt),zt=((St=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(z)).\u0275fac=function(t){return Wt(t||St)},St.\u0275dir=r.Hb({type:St,selectors:[["","matCellDef",""]],features:[r.Bb([{provide:z,useExisting:St}]),r.zb]}),St),Wt=r.Ub(zt),Lt=((Ot=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(W)).\u0275fac=function(t){return Gt(t||Ot)},Ot.\u0275dir=r.Hb({type:Ot,selectors:[["","matHeaderCellDef",""]],features:[r.Bb([{provide:W,useExisting:Ot}]),r.zb]}),Ot),Gt=r.Ub(Lt),Ut=((Et=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(U)).\u0275fac=function(t){return Kt(t||Et)},Et.\u0275dir=r.Hb({type:Et,selectors:[["","matColumnDef",""]],inputs:{sticky:"sticky",name:["matColumnDef","name"]},features:[r.Bb([{provide:U,useExisting:Et},{provide:"MAT_SORT_HEADER_COLUMN_DEF",useExisting:Et}]),r.zb]}),Et),Kt=r.Ub(Ut),Vt=((Mt=function(t){function e(t,n){var r;return _classCallCheck(this,e),r=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n)),n.nativeElement.classList.add("mat-column-".concat(t.cssClassFriendlyName)),r}return _inherits(e,t),e}(J)).\u0275fac=function(t){return new(t||Mt)(r.Mb(U),r.Mb(r.l))},Mt.\u0275dir=r.Hb({type:Mt,selectors:[["mat-header-cell"],["th","mat-header-cell",""]],hostAttrs:["role","columnheader",1,"mat-header-cell"],features:[r.zb]}),Mt),Jt=((At=function(t){function e(t,n){var r;return _classCallCheck(this,e),r=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t,n)),n.nativeElement.classList.add("mat-column-".concat(t.cssClassFriendlyName)),r}return _inherits(e,t),e}(X)).\u0275fac=function(t){return new(t||At)(r.Mb(U),r.Mb(r.l))},At.\u0275dir=r.Hb({type:At,selectors:[["mat-cell"],["td","mat-cell",""]],hostAttrs:["role","gridcell",1,"mat-cell"],features:[r.zb]}),At),Xt=((xt=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(Q)).\u0275fac=function(t){return Zt(t||xt)},xt.\u0275dir=r.Hb({type:xt,selectors:[["","matHeaderRowDef",""]],inputs:{columns:["matHeaderRowDef","columns"],sticky:["matHeaderRowDefSticky","sticky"]},features:[r.Bb([{provide:Q,useExisting:xt}]),r.zb]}),xt),Zt=r.Ub(Xt),qt=((Ht=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(tt)).\u0275fac=function(t){return Qt(t||Ht)},Ht.\u0275dir=r.Hb({type:Ht,selectors:[["","matRowDef",""]],inputs:{columns:["matRowDefColumns","columns"],when:["matRowDefWhen","when"]},features:[r.Bb([{provide:tt,useExisting:Ht}]),r.zb]}),Ht),Qt=r.Ub(qt),$t=((Pt=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(nt)).\u0275fac=function(t){return Yt(t||Pt)},Pt.\u0275cmp=r.Gb({type:Pt,selectors:[["mat-header-row"],["tr","mat-header-row",""]],hostAttrs:["role","row",1,"mat-header-row"],exportAs:["matHeaderRow"],features:[r.Bb([{provide:nt,useExisting:Pt}]),r.zb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Ob(0,0)},directives:[et],encapsulation:2}),Pt),Yt=r.Ub($t),te=((It=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,_getPrototypeOf(e).apply(this,arguments))}return _inherits(e,t),e}(rt)).\u0275fac=function(t){return ee(t||It)},It.\u0275cmp=r.Gb({type:It,selectors:[["mat-row"],["tr","mat-row",""]],hostAttrs:["role","row",1,"mat-row"],exportAs:["matRow"],features:[r.Bb([{provide:rt,useExisting:It}]),r.zb],decls:1,vars:0,consts:[["cdkCellOutlet",""]],template:function(t,e){1&t&&r.Ob(0,0)},directives:[et],encapsulation:2}),It),ee=r.Ub(te),ne=((Tt=function t(){_classCallCheck(this,t)}).\u0275mod=r.Kb({type:Tt}),Tt.\u0275inj=r.Jb({factory:function(t){return new(t||Tt)},imports:[[mt,f.c,Rt]]}),Tt)}}]);