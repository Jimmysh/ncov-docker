(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{xfvH:function(e,a,n){"use strict";n.r(a);var i=n("DKVz"),t=n("ofXK"),m=n("tk/3"),o=n("tyNb"),s=n("TEn/"),r=n("mrSG"),h=n("MT78"),c=n("IzEk"),l=n("Yoe/"),p=n("fXoL"),d=n("R7Hv");let g=(()=>{class e{constructor(e,a,n){this.dataService=e,this.http=a,this.loadingController=n,this.area="\u5168\u56fd",this.barHeight=500,this.areas=[{name:"\u5168\u56fd",enName:"china"},{name:"\u5317\u4eac\u5e02",enName:"beijing"},{name:"\u4e0a\u6d77\u5e02",enName:"shanghai"},{name:"\u5e7f\u4e1c\u7701",enName:"guangdong"},{name:"\u4e91\u5357\u7701",enName:"yunnan"},{name:"\u5409\u6797\u7701",enName:"jilin"},{name:"\u56db\u5ddd\u7701",enName:"sichuan"},{name:"\u5929\u6d25\u5e02",enName:"tianjin"},{name:"\u5b89\u5fbd\u7701",enName:"anhui"},{name:"\u5c71\u4e1c\u7701",enName:"shandong"},{name:"\u5c71\u897f\u7701",enName:"shanxi"},{name:"\u6c5f\u82cf\u7701",enName:"jiangsu"},{name:"\u6c5f\u897f\u7701",enName:"jiangxi"},{name:"\u6cb3\u5317\u7701",enName:"hebei"},{name:"\u6cb3\u5357\u7701",enName:"henan"},{name:"\u6d59\u6c5f\u7701",enName:"zhejiang"},{name:"\u6d77\u5357\u7701",enName:"hainan"},{name:"\u6e56\u5317\u7701",enName:"hubei"},{name:"\u6e56\u5357\u7701",enName:"hunan"},{name:"\u7518\u8083\u7701",enName:"gansu"},{name:"\u798f\u5efa\u7701",enName:"fujian"},{name:"\u8d35\u5dde\u7701",enName:"guizhou"},{name:"\u8fbd\u5b81\u7701",enName:"liaoning"},{name:"\u91cd\u5e86\u5e02",enName:"chongqing"},{name:"\u9655\u897f\u7701",enName:"shanxi1"},{name:"\u9752\u6d77\u7701",enName:"qinghai"},{name:"\u9ed1\u9f99\u6c5f\u7701",enName:"heilongjiang"},{name:"\u897f\u85cf\u81ea\u6cbb\u533a",enName:"xizang"},{name:"\u5185\u8499\u53e4\u81ea\u6cbb\u533a",enName:"neimenggu"},{name:"\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",enName:"ningxia"},{name:"\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",enName:"guangxi"},{name:"\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a",enName:"xinjiang"},{name:"\u9999\u6e2f",enName:"xianggang"},{name:"\u6fb3\u95e8",enName:"aomen"},{name:"\u53f0\u6e7e",enName:"taiwan"}],this.mapLoaded=!1,this.options={},this.barOptions={}}ngOnInit(){this.changeArea()}presentLoadingWithOptions(){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this.loadingController.create({message:"\u62fc\u547d\u52a0\u8f7d\u4e2d...",translucent:!0});return yield e.present()}))}displayMap(e,a="china",n="\u5168\u56fd"){this.http.get(`assets/map/${a}.json`).pipe(Object(c.a)(1)).subscribe(n=>{const i=Object(l.a)(e,n);this.mapLoaded=!0,this.loadingController.dismiss(),h.registerMap(a,n),this.options={title:{},zoom:1.2,tooltip:{trigger:"item",formatter:e=>`${e.name}<br/>\u786e\u8bca\uff1a${e.value||0} \u4eba`},toolbox:{show:!1,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},visualMap:{show:!1,color:["#d94e5d","#eac736","#50a3ba"],pieces:[{min:1001,color:"#731919"},{min:500,max:1e3,color:"red"},{min:100,max:499,color:"#e26061"},{min:10,max:99,color:"#f08f7f"},{min:1,max:9,color:"#ffb86a"},{value:0,color:"#eee"}]},series:[{name:"\u5168\u56fd",type:"map",mapType:a,itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:e,nameMap:i}]}})}onChangeArea(e){this.changeArea(e.detail.value)}changeArea(e="\u5168\u56fd"){return Object(r.a)(this,void 0,void 0,(function*(){yield this.presentLoadingWithOptions(),this.area=e;const a=this.areas.find(a=>a.name===e);this.dataService.area(this.area).pipe(Object(c.a)(1)).subscribe(e=>{if(this.data=e,"\u5168\u56fd"===e.provinceName){const e=this.data.cities.map(e=>({name:e.provinceShortName,value:e.confirmedCount}));this.displayMap(e)}else{const n=e.cities.map(e=>({name:e.cityName,value:e.confirmedCount}));this.displayMap(n,`province/${a.enName}`,a.name)}})}))}}return e.\u0275fac=function(a){return new(a||e)(p.Mb(d.a),p.Mb(m.a),p.Mb(s.r))},e.\u0275cmp=p.Gb({type:e,selectors:[["app-om"]],decls:2,vars:2,consts:[["echarts","",1,"demo-chart",3,"options","loading"]],template:function(e,a){1&e&&(p.Sb(0,"ion-content"),p.Nb(1,"div",0),p.Rb()),2&e&&(p.Cb(1),p.ic("options",a.options)("loading",!a.mapLoaded))},directives:[s.e,i.b],styles:[".demo-chart[_ngcontent-%COMP%]{width:100%;height:100%}"]}),e})();n.d(a,"OmPageModule",(function(){return u}));let u=(()=>{class e{}return e.\u0275mod=p.Kb({type:e}),e.\u0275inj=p.Jb({factory:function(a){return new(a||e)},imports:[[t.c,m.b,s.p,i.a,o.h.forChild([{path:"",component:g}])]]}),e})()}}]);