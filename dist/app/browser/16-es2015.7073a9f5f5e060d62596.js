(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"ct+p":function(n,e,a){"use strict";a.r(e);var t=a("DKVz"),i=a("ofXK"),o=a("tk/3"),c=a("tyNb"),s=a("TEn/"),r=a("mrSG"),p=a("MT78"),g=a("Yoe/"),d=a("IzEk"),l=a("fXoL"),b=a("R7Hv");function m(n,e){if(1&n&&(l.Sb(0,"ion-select-option",23),l.rc(1),l.Rb()),2&n){const n=e.$implicit;l.ic("value",n.name),l.Cb(1),l.sc(n.name)}}function h(n,e){1&n&&(l.Sb(0,"h5",7),l.rc(1,"\u5168\u56fd\u75ab\u60c5\u6570\u636e(\u542b\u6e2f\u6fb3\u53f0\uff09"),l.Rb())}function u(n,e){if(1&n&&(l.Sb(0,"h5",7),l.rc(1),l.Rb()),2&n){const n=l.cc();l.Cb(1),l.sc(n.area)}}function C(n,e){if(1&n&&(l.Sb(0,"p",24),l.rc(1,"\u8f83\u6628\u65e5+"),l.Sb(2,"span"),l.rc(3),l.Rb(),l.Rb()),2&n){const n=l.cc();l.Cb(3),l.sc(null==n.data?null:n.data.confirmedIncr)}}function f(n,e){if(1&n&&(l.Sb(0,"p",24),l.rc(1,"\u8f83\u6628\u65e5+"),l.Sb(2,"span"),l.rc(3),l.Rb(),l.Rb()),2&n){const n=l.cc();l.Cb(3),l.sc(null==n.data?null:n.data.suspectedIncr)}}function O(n,e){if(1&n&&(l.Sb(0,"p",24),l.rc(1,"\u8f83\u6628\u65e5+"),l.Sb(2,"span"),l.rc(3),l.Rb(),l.Rb()),2&n){const n=l.cc();l.Cb(3),l.sc(null==n.data?null:n.data.deadIncr)}}function M(n,e){if(1&n&&(l.Sb(0,"p",24),l.rc(1,"\u8f83\u6628\u65e5+"),l.Sb(2,"span"),l.rc(3),l.Rb(),l.Rb()),2&n){const n=l.cc();l.Cb(3),l.sc(null==n.data?null:n.data.curedIncr)}}function P(n,e){1&n&&l.Nb(0,"ion-img",27),2&n&&l.ic("src",e.$implicit)}function _(n,e){if(1&n&&(l.Sb(0,"ion-col",25),l.Sb(1,"p",17),l.Nb(2,"i"),l.rc(3,"\u75ab\u60c5\u8d8b\u52bf\u56fe"),l.Sb(4,"span",18),l.rc(5,"\u6570\u636e\u6765\u6e90\uff1a\u4e92\u8054\u7f51"),l.Rb(),l.Rb(),l.qc(6,P,1,1,"ion-img",26),l.Rb()),2&n){const n=l.cc();l.Cb(6),l.ic("ngForOf",n.data.dailyPics)}}let x=(()=>{class n{constructor(n,e,a){this.dataService=n,this.http=e,this.loadingController=a,this.area="\u5168\u56fd",this.barHeight=500,this.areas=[{name:"\u5168\u56fd",enName:"china"},{name:"\u5317\u4eac\u5e02",enName:"beijing"},{name:"\u4e0a\u6d77\u5e02",enName:"shanghai"},{name:"\u5e7f\u4e1c\u7701",enName:"guangdong"},{name:"\u4e91\u5357\u7701",enName:"yunnan"},{name:"\u5409\u6797\u7701",enName:"jilin"},{name:"\u56db\u5ddd\u7701",enName:"sichuan"},{name:"\u5929\u6d25\u5e02",enName:"tianjin"},{name:"\u5b89\u5fbd\u7701",enName:"anhui"},{name:"\u5c71\u4e1c\u7701",enName:"shandong"},{name:"\u5c71\u897f\u7701",enName:"shanxi"},{name:"\u6c5f\u82cf\u7701",enName:"jiangsu"},{name:"\u6c5f\u897f\u7701",enName:"jiangxi"},{name:"\u6cb3\u5317\u7701",enName:"hebei"},{name:"\u6cb3\u5357\u7701",enName:"henan"},{name:"\u6d59\u6c5f\u7701",enName:"zhejiang"},{name:"\u6d77\u5357\u7701",enName:"hainan"},{name:"\u6e56\u5317\u7701",enName:"hubei"},{name:"\u6e56\u5357\u7701",enName:"hunan"},{name:"\u7518\u8083\u7701",enName:"gansu"},{name:"\u798f\u5efa\u7701",enName:"fujian"},{name:"\u8d35\u5dde\u7701",enName:"guizhou"},{name:"\u8fbd\u5b81\u7701",enName:"liaoning"},{name:"\u91cd\u5e86\u5e02",enName:"chongqing"},{name:"\u9655\u897f\u7701",enName:"shanxi1"},{name:"\u9752\u6d77\u7701",enName:"qinghai"},{name:"\u9ed1\u9f99\u6c5f\u7701",enName:"heilongjiang"},{name:"\u897f\u85cf\u81ea\u6cbb\u533a",enName:"xizang"},{name:"\u5185\u8499\u53e4\u81ea\u6cbb\u533a",enName:"neimenggu"},{name:"\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",enName:"ningxia"},{name:"\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",enName:"guangxi"},{name:"\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a",enName:"xinjiang"},{name:"\u9999\u6e2f",enName:"xianggang"},{name:"\u6fb3\u95e8",enName:"aomen"},{name:"\u53f0\u6e7e",enName:"taiwan"}],this.mapLoaded=!1,this.options={},this.barOptions={}}ngOnInit(){this.changeArea(),this.getChinaBarData()}presentLoadingWithOptions(){return Object(r.a)(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:"\u62fc\u547d\u52a0\u8f7d\u4e2d...",translucent:!0});return yield n.present()}))}displayMap(n,e="china",a="\u5168\u56fd"){this.http.get(`assets/map/${e}.json`).pipe(Object(d.a)(1)).subscribe(t=>{console.log("geoJson",t);const i=Object(g.a)(n,t);this.mapLoaded=!0,this.loadingController.dismiss(),p.registerMap(e,t),this.options={title:{text:a},zoom:1.2,tooltip:{trigger:"item",formatter:n=>`${n.name}<br/>\u786e\u8bca\uff1a${n.value||0} \u4eba`},toolbox:{show:!1,orient:"vertical",left:"right",top:"center",feature:{dataView:{readOnly:!1},restore:{},saveAsImage:{}}},visualMap:{show:!0,color:["#d94e5d","#eac736","#50a3ba"],pieces:[{min:1001,color:"#731919"},{min:500,max:1e3,color:"red"},{min:100,max:499,color:"#e26061"},{min:10,max:99,color:"#f08f7f"},{min:1,max:9,color:"#ffb86a"},{value:0,color:"#eee"}]},series:[{name:"\u5168\u56fd",type:"map",mapType:e,itemStyle:{normal:{label:{show:!0}},emphasis:{label:{show:!0}}},data:n,nameMap:i}]}})}getChinaBarData(){this.http.get("https://yiqing.ahusmart.com/chinaData").pipe(Object(d.a)(1)).subscribe(n=>{this.barOptions=JSON.parse(n.bar),this.barHeight=35*this.barOptions.yAxis[0].data.length})}getProvinceBarData(n){this.http.get(`https://yiqing.ahusmart.com/data/${n}`).pipe(Object(d.a)(1)).subscribe(n=>{this.barOptions=JSON.parse(n.bar),this.barHeight=35*this.barOptions.yAxis[0].data.length})}onChangeArea(n){this.changeArea(n.detail.value)}changeArea(n="\u5168\u56fd"){return Object(r.a)(this,void 0,void 0,(function*(){yield this.presentLoadingWithOptions(),this.area=n;const e=this.areas.find(e=>e.name===n);this.dataService.area(this.area).pipe(Object(d.a)(1)).subscribe(n=>{if(this.data=n,"\u5168\u56fd"===n.provinceName){const n=this.data.cities.map(n=>({name:n.provinceShortName,value:n.confirmedCount}));this.displayMap(n),this.getChinaBarData()}else{const a=n.cities.map(n=>({name:n.cityName,value:n.confirmedCount}));this.displayMap(a,`province/${e.enName}`,e.name),this.getProvinceBarData(e.name)}})}))}}return n.\u0275fac=function(e){return new(e||n)(l.Mb(b.a),l.Mb(o.a),l.Mb(s.r))},n.\u0275cmp=l.Gb({type:n,selectors:[["app-home"]],decls:56,vars:22,consts:[["fixed","",1,"ion-no-padding"],["size","12",1,"ion-no-padding"],[1,"top-part"],[1,"top-header"],["value","\u5168\u56fd","placeholder","\u9009\u62e9","interface","popover",3,"ionChange"],[3,"value",4,"ngFor","ngForOf"],["class","ion-padding-start",4,"ngIf"],[1,"ion-padding-start"],[1,"cases"],[1,"case","confirmed"],[1,"cate-title"],[1,"total"],["class","increase",4,"ngIf"],[1,"case","suspected"],[1,"case","dead"],[1,"case","cure"],[1,"epidemic-situation"],[1,"mapTap"],[1,"mapTapTip"],["echarts","",1,"demo-chart",3,"options","loading"],["echarts","",3,"options","loading"],["fixed",""],["size","12",4,"ngIf"],[3,"value"],[1,"increase"],["size","12"],["class","ion-padding-bottom",3,"src",4,"ngFor","ngForOf"],[1,"ion-padding-bottom",3,"src"]],template:function(n,e){1&n&&(l.Sb(0,"ion-content"),l.Sb(1,"ion-grid",0),l.Sb(2,"ion-row"),l.Sb(3,"ion-col",1),l.Sb(4,"div",2),l.Sb(5,"div",3),l.Sb(6,"ion-select",4),l.ac("ionChange",(function(n){return e.onChangeArea(n)})),l.qc(7,m,2,2,"ion-select-option",5),l.Rb(),l.Rb(),l.Sb(8,"ion-card"),l.qc(9,h,2,0,"h5",6),l.qc(10,u,2,1,"h5",6),l.Sb(11,"span",7),l.rc(12),l.dc(13,"date"),l.Rb(),l.Sb(14,"div",8),l.Sb(15,"div",9),l.Sb(16,"p",10),l.rc(17,"\u786e\u8bca"),l.Rb(),l.Sb(18,"p",11),l.rc(19),l.Rb(),l.qc(20,C,4,1,"p",12),l.Rb(),l.Sb(21,"div",13),l.Sb(22,"p",10),l.rc(23,"\u7591\u4f3c"),l.Rb(),l.Sb(24,"p",11),l.rc(25),l.Rb(),l.qc(26,f,4,1,"p",12),l.Rb(),l.Sb(27,"div",14),l.Sb(28,"p",10),l.rc(29,"\u6b7b\u4ea1"),l.Rb(),l.Sb(30,"p",11),l.rc(31),l.Rb(),l.qc(32,O,4,1,"p",12),l.Rb(),l.Sb(33,"div",15),l.Sb(34,"p",10),l.rc(35,"\u6cbb\u6108"),l.Rb(),l.Sb(36,"p",11),l.rc(37),l.Rb(),l.qc(38,M,4,1,"p",12),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(39,"div",16),l.Sb(40,"p",17),l.Nb(41,"i"),l.rc(42,"\u75ab\u60c5\u5730\u56fe"),l.Sb(43,"span",18),l.rc(44,"\u6570\u636e\u6765\u6e90\uff1a\u4e92\u8054\u7f51"),l.Rb(),l.Rb(),l.Nb(45,"div",19),l.Rb(),l.Sb(46,"div",16),l.Sb(47,"p",17),l.Nb(48,"i"),l.rc(49,"\u75ab\u60c5\u7edf\u8ba1\u6570\u636e"),l.Sb(50,"span",18),l.rc(51,"\u6570\u636e\u6765\u6e90\uff1a\u4e92\u8054\u7f51"),l.Rb(),l.Rb(),l.Nb(52,"div",20),l.Rb(),l.Sb(53,"ion-grid",21),l.Sb(54,"ion-row"),l.qc(55,_,7,1,"ion-col",22),l.Rb(),l.Rb(),l.Rb()),2&n&&(l.Cb(7),l.ic("ngForOf",e.areas),l.Cb(2),l.ic("ngIf","\u5168\u56fd"===e.area),l.Cb(1),l.ic("ngIf","\u5168\u56fd"!==e.area),l.Cb(2),l.tc("\u66f4\u65b0\u81f3 ",l.fc(13,19,null==e.data?null:e.data.updateTime,"yyyy.MM.dd HH:mm:ss"),""),l.Cb(7),l.sc(null==e.data?null:e.data.confirmedCount),l.Cb(1),l.ic("ngIf",null==e.data?null:e.data.confirmedIncr),l.Cb(5),l.sc(null==e.data?null:e.data.suspectedCount),l.Cb(1),l.ic("ngIf",null==e.data?null:e.data.suspectedIncr),l.Cb(5),l.sc(null==e.data?null:e.data.deadCount),l.Cb(1),l.ic("ngIf",null==e.data?null:e.data.deadIncr),l.Cb(5),l.sc(null==e.data?null:e.data.curedCount),l.Cb(1),l.ic("ngIf",null==e.data?null:e.data.curedIncr),l.Cb(7),l.ic("options",e.options)("loading",!e.mapLoaded),l.Cb(7),l.pc("height",e.barHeight,"px"),l.ic("options",e.barOptions)("loading",!e.mapLoaded),l.Cb(3),l.ic("ngIf",null==e.data?null:e.data.dailyPics))},directives:[s.e,s.f,s.k,s.d,s.n,s.t,i.j,s.c,i.k,t.b,s.o,s.h],pipes:[i.e],styles:[".top-part[_ngcontent-%COMP%]{position:relative;background:url(/assets/images/header-bg.jpg) no-repeat;background-size:100% auto}.top-header[_ngcontent-%COMP%]{padding-top:140px;color:#fff}.top-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding:32px 0 16px 32px;display:inline-block}.top-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{padding-left:32px;margin-top:0}.active-link[_ngcontent-%COMP%]{--background:#3880ff}ion-select[_ngcontent-%COMP%]{position:absolute;top:16px;right:16px;width:120px}ion-card[_ngcontent-%COMP%]{background:hsla(0,0%,100%,.75);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}ion-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#000}ion-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#999;padding-left:10px}.cases[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start}.cases[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-weight:700}.cases[_ngcontent-%COMP%]   .confirmed[_ngcontent-%COMP%]   .increase[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .cases[_ngcontent-%COMP%]   .confirmed[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{color:#e10000}.cases[_ngcontent-%COMP%]   .suspected[_ngcontent-%COMP%]   .increase[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .cases[_ngcontent-%COMP%]   .suspected[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{color:#ffa356}.cases[_ngcontent-%COMP%]   .dead[_ngcontent-%COMP%]   .increase[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .cases[_ngcontent-%COMP%]   .dead[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{color:#222}.cases[_ngcontent-%COMP%]   .cure[_ngcontent-%COMP%]   .increase[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .cases[_ngcontent-%COMP%]   .cure[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{color:#34aa70}.case[_ngcontent-%COMP%]{text-align:center;flex:1}.case[_ngcontent-%COMP%]   .cate-title[_ngcontent-%COMP%]{font-size:12px;color:#000;font-weight:700}.case[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%]{font-size:20px;margin:10px 0}.case[_ngcontent-%COMP%]   .increase[_ngcontent-%COMP%]{font-size:12px}.notes[_ngcontent-%COMP%]{padding:0 16px;color:#333}.mapTap[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start;height:56px;margin-top:.12rem;padding:0 20px;font-weight:500;font-size:16px;line-height:56px;background:#fff;border-bottom:.005rem solid #ebebeb}.mapTap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline-block;width:8px;height:20px;margin-right:10px;vertical-align:middle;background:#4169e2}.mapTap[_ngcontent-%COMP%]   .mapTapTip[_ngcontent-%COMP%]{flex:1 1;color:#999;font-weight:400;font-size:12px;text-align:right}.epidemic-situation[_ngcontent-%COMP%]{max-width:1140px;margin:0 auto}.demo-chart[_ngcontent-%COMP%]{min-height:500px}ion-select[_ngcontent-%COMP%]{font-weight:700;background:rgba(0,0,0,.47);border-radius:10px;text-align:center;padding-right:10px}"]}),n})();a.d(e,"HomePageModule",(function(){return S}));let S=(()=>{class n{}return n.\u0275mod=l.Kb({type:n}),n.\u0275inj=l.Jb({factory:function(e){return new(e||n)},imports:[[i.c,o.b,s.p,t.a,c.h.forChild([{path:"",component:x}])]]}),n})()}}]);