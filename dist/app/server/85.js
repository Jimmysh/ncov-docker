exports.ids=[85],exports.modules={wHD8:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_img",(function(){return Img}));var _core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("54nT");__webpack_require__("AfW+");const Img=class{constructor(hostRef){Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.k)(this,hostRef),this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.ionImgWillLoad=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionImgDidLoad",7),this.ionError=Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.e)(this,"ionError",7)}srcChanged(){this.addIO()}componentDidLoad(){this.addIO()}addIO(){void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(data=>{data[0].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.a,{class:Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.d)(this)},Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.i)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))}get el(){return Object(_core_80bde1aa_js__WEBPACK_IMPORTED_MODULE_0__.f)(this)}static get watchers(){return{src:["srcChanged"]}}static get style(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"}}}};