function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{yX1w:function(e,t,o){"use strict";o.r(t);var a=o("DKVz"),n=o("ofXK"),r=o("tk/3"),i=o("tyNb"),s=o("TEn/"),l=o("MT78"),c=o("IzEk"),p=o("fXoL");function f(e,t){if(1&e&&p.Nb(0,"div",2),2&e){var o=p.cc();p.ic("options",o.options)("loading",!o.mapLoaded)}}var u,h=((u=function(){function e(t){_classCallCheck(this,e),this.http=t,this.show=!0,this.mapLoaded=!1,this.defaultOptions={backgroundColor:"#404a59",geo:{roam:!1,aspectScale:.75,zoom:1.1,label:{normal:{show:!1,textStyle:{color:"#00a0c9"}},emphasis:{show:!0,textStyle:{color:"#00a0c9"}}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#404a59"},emphasis:{areaColor:"#2a333d"}}}},this.options={},this.geoCoordMap={"\u4e0a\u6d77":[121.4648,31.2891],"\u4e1c\u839e":[113.8953,22.901],"\u4e1c\u8425":[118.7073,37.5513],"\u4e2d\u5c71":[113.4229,22.478],"\u4e34\u6c7e":[111.4783,36.1615],"\u4e34\u6c82":[118.3118,35.2936],"\u4e39\u4e1c":[124.541,40.4242],"\u4e3d\u6c34":[119.5642,28.1854],"\u4e4c\u9c81\u6728\u9f50":[87.9236,43.5883],"\u4f5b\u5c71":[112.8955,23.1097],"\u4fdd\u5b9a":[115.0488,39.0948],"\u5170\u5dde":[103.5901,36.3043],"\u5305\u5934":[110.3467,41.4899],"\u5317\u4eac":[116.4551,40.2539],"\u5317\u6d77":[109.314,21.6211],"\u5357\u4eac":[118.8062,31.9208],"\u5357\u5b81":[108.479,23.1152],"\u5357\u660c":[116.0046,28.6633],"\u5357\u901a":[121.1023,32.1625],"\u53a6\u95e8":[118.1689,24.6478],"\u53f0\u5dde":[121.1353,28.6688],"\u5408\u80a5":[117.29,32.0581],"\u547c\u548c\u6d69\u7279":[111.4124,40.4901],"\u54b8\u9633":[108.4131,34.8706],"\u54c8\u5c14\u6ee8":[127.9688,45.368],"\u5510\u5c71":[118.4766,39.6826],"\u5609\u5174":[120.9155,30.6354],"\u5927\u540c":[113.7854,39.8035],"\u5927\u8fde":[122.2229,39.4409],"\u5929\u6d25":[117.4219,39.4189],"\u592a\u539f":[112.3352,37.9413],"\u5a01\u6d77":[121.9482,37.1393],"\u5b81\u6ce2":[121.5967,29.6466],"\u5b9d\u9e21":[107.1826,34.3433],"\u5bbf\u8fc1":[118.5535,33.7775],"\u5e38\u5dde":[119.4543,31.5582],"\u5e7f\u5dde":[113.5107,23.2196],"\u5eca\u574a":[116.521,39.0509],"\u5ef6\u5b89":[109.1052,36.4252],"\u5f20\u5bb6\u53e3":[115.1477,40.8527],"\u5f90\u5dde":[117.5208,34.3268],"\u5fb7\u5dde":[116.6858,37.2107],"\u60e0\u5dde":[114.6204,23.1647],"\u6210\u90fd":[103.9526,30.7617],"\u626c\u5dde":[119.4653,32.8162],"\u627f\u5fb7":[117.5757,41.4075],"\u62c9\u8428":[91.1865,30.1465],"\u65e0\u9521":[120.3442,31.5527],"\u65e5\u7167":[119.2786,35.5023],"\u6606\u660e":[102.9199,25.4663],"\u676d\u5dde":[119.5313,29.8773],"\u67a3\u5e84":[117.323,34.8926],"\u67f3\u5dde":[109.3799,24.9774],"\u682a\u6d32":[113.5327,27.0319],"\u6b66\u6c49":[114.3896,30.6628],"\u6c55\u5934":[117.1692,23.3405],"\u6c5f\u95e8":[112.6318,22.1484],"\u6c88\u9633":[123.1238,42.1216],"\u6ca7\u5dde":[116.8286,38.2104],"\u6cb3\u6e90":[114.917,23.9722],"\u6cc9\u5dde":[118.3228,25.1147],"\u6cf0\u5b89":[117.0264,36.0516],"\u6cf0\u5dde":[120.0586,32.5525],"\u6d4e\u5357":[117.1582,36.8701],"\u6d4e\u5b81":[116.8286,35.3375],"\u6d77\u53e3":[110.3893,19.8516],"\u6dc4\u535a":[118.0371,36.6064],"\u6dee\u5b89":[118.927,33.4039],"\u6df1\u5733":[114.5435,22.5439],"\u6e05\u8fdc":[112.9175,24.3292],"\u6e29\u5dde":[120.498,27.8119],"\u6e2d\u5357":[109.7864,35.0299],"\u6e56\u5dde":[119.8608,30.7782],"\u6e58\u6f6d":[112.5439,27.7075],"\u6ee8\u5dde":[117.8174,37.4963],"\u6f4d\u574a":[119.0918,36.524],"\u70df\u53f0":[120.7397,37.5128],"\u7389\u6eaa":[101.9312,23.8898],"\u73e0\u6d77":[113.7305,22.1155],"\u76d0\u57ce":[120.2234,33.5577],"\u76d8\u9526":[121.9482,41.0449],"\u77f3\u5bb6\u5e84":[114.4995,38.1006],"\u798f\u5dde":[119.4543,25.9222],"\u79e6\u7687\u5c9b":[119.2126,40.0232],"\u7ecd\u5174":[120.564,29.7565],"\u804a\u57ce":[115.9167,36.4032],"\u8087\u5e86":[112.1265,23.5822],"\u821f\u5c71":[122.2559,30.2234],"\u82cf\u5dde":[120.6519,31.3989],"\u83b1\u829c":[117.6526,36.2714],"\u83cf\u6cfd":[115.6201,35.2057],"\u8425\u53e3":[122.4316,40.4297],"\u846b\u82a6\u5c9b":[120.1575,40.578],"\u8861\u6c34":[115.8838,37.7161],"\u8862\u5dde":[118.6853,28.8666],"\u897f\u5b81":[101.4038,36.8207],"\u897f\u5b89":[109.1162,34.2004],"\u8d35\u9633":[106.6992,26.7682],"\u8fde\u4e91\u6e2f":[119.1248,34.552],"\u90a2\u53f0":[114.8071,37.2821],"\u90af\u90f8":[114.4775,36.535],"\u90d1\u5dde":[113.4668,34.6234],"\u9102\u5c14\u591a\u65af":[108.9734,39.2487],"\u91cd\u5e86":[107.7539,30.1904],"\u91d1\u534e":[120.0037,29.1028],"\u94dc\u5ddd":[109.0393,35.1947],"\u94f6\u5ddd":[106.3586,38.1775],"\u9547\u6c5f":[119.4763,31.9702],"\u957f\u6625":[125.8154,44.2584],"\u957f\u6c99":[113.0823,28.2568],"\u957f\u6cbb":[112.8625,36.4746],"\u9633\u6cc9":[113.4778,38.0951],"\u9752\u5c9b":[120.4651,36.3373],"\u97f6\u5173":[113.7964,24.7028]}}return _createClass(e,[{key:"buildSeries",value:function(e){var t=this,o=this.geoCoordMap.\u6b66\u6c49,a=[{name:"\u51fa\u53d1\u70b9",type:"effectScatter",coordinateSystem:"geo",zlevel:3,rippleEffect:{brushType:"stroke"},showEffectOn:"render",label:{normal:{show:!0,position:"left",formatter:"{b}"}},itemStyle:{normal:{color:"red"}},data:[{name:"\u6e56\u5317",value:[].concat(_toConsumableArray(o),[0])}]}];e.forEach((function(e){var n=e.name,r=e.value,i=t.geoCoordMap[n];a.push({name:"\u5408\u80a5",type:"lines",zlevel:1,effect:{show:!0,period:3,trailLength:.7,color:"#ff0000",symbolSize:3},lineStyle:{normal:{color:"#ff0000",width:0,curveness:.2}},data:[[{coord:o},{coord:i}]]},{name:"\u5408\u80a5",type:"lines",zlevel:2,effect:{show:!0,period:3,trailLength:0,symbolSize:6},lineStyle:{normal:{color:"#ff0000",width:1.5,opacity:.4,curveness:.2}},data:[[{coord:o},{coord:i}]]},{name:"\u5408\u80a5",type:"effectScatter",coordinateSystem:"geo",zlevel:2,rippleEffect:{brushType:"stroke"},label:{normal:{show:!0,position:"right",formatter:"{b}"}},itemStyle:{normal:{color:"red"}},data:[{name:n,value:[].concat(_toConsumableArray(i),[r])}]})})),this.options.series=a}},{key:"ionViewDidLeave",value:function(){this.show=!1}},{key:"ionViewWillEnter",value:function(){this.show=!0}},{key:"ngOnInit",value:function(){var e=this,t=[{name:"\u4e0a\u6d77",value:66},{name:"\u957f\u6625",value:66}];this.http.get("assets/map/china.json").pipe(Object(c.a)(1)).subscribe((function(o){e.mapLoaded=!0,Object(l.registerMap)("china",o),e.defaultOptions.geo=Object.assign(Object.assign({},e.defaultOptions.geo),{map:"china"}),e.options=Object.assign({},e.defaultOptions),e.buildSeries(t)}))}}]),e}()).\u0275fac=function(e){return new(e||u)(p.Mb(r.a))},u.\u0275cmp=p.Gb({type:u,selectors:[["app-map"]],decls:2,vars:1,consts:[["scrollX","fasle","scrollY","false"],["echarts","","class","chart",3,"options","loading",4,"ngIf"],["echarts","",1,"chart",3,"options","loading"]],template:function(e,t){1&e&&(p.Sb(0,"ion-content",0),p.qc(1,f,1,2,"div",1),p.Rb()),2&e&&(p.Cb(1),p.ic("ngIf",t.show))},directives:[s.e,n.k,a.b],styles:[".chart[_ngcontent-%COMP%]{height:100%}"]}),u);o.d(t,"MapPageModule",(function(){return b}));var d,b=((d=function e(){_classCallCheck(this,e)}).\u0275mod=p.Kb({type:d}),d.\u0275inj=p.Jb({factory:function(e){return new(e||d)},imports:[[n.c,r.b,s.p,a.a,i.h.forChild([{path:"",component:h}])]]}),d)}}]);