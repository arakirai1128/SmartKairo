(this["webpackJsonpsmart-kairo"]=this["webpackJsonpsmart-kairo"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var r=a(8),n=a(2),c=a.n(n),i=a(25),s=a.n(i),o=(a(94),a(16)),u=a.n(o),l=a(40),d=a(22),b=a(21),j=a(142),x=a(137),h=a(146),f=a(141),p=a(77),v=a.n(p),O=a(67),m=a.n(O),g=a(69),C={SERVICE_UUID:"6e400001-b5a3-f393-e0a9-e50e24dcca9e",CHARACTERISTIC_UUID_RX:"6e400003-b5a3-f393-e0a9-e50e24dcca9e",CHARACTERISTIC_UUID_TX:"6e400002-b5a3-f393-e0a9-e50e24dcca9e"},k=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a();case 2:if(e.sent){e.next=7;break}return t="\u73fe\u5728\u306e\u30c7\u30d0\u30a4\u30b9\u306f\u3001bluetooth\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093",console.log(t),e.abrupt("return",t);case 7:return a={filters:[{services:[C.SERVICE_UUID]},{name:"SMART KAIRO"}],optionalServices:[C.SERVICE_UUID]},e.next=10,g.b(a);case 10:if("cancel"!==(r=e.sent).type){e.next=13;break}return e.abrupt("return",r.type);case 13:return n=r.device,e.abrupt("return",n.gatt);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,r,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=17;break}return e.next=4,t.connect();case 4:return a=e.sent,e.next=7,a.getPrimaryService(C.SERVICE_UUID);case 7:return r=e.sent,e.next=10,r.getCharacteristic(C.CHARACTERISTIC_UUID_RX);case 10:return n=e.sent,e.next=13,r.getCharacteristic(C.CHARACTERISTIC_UUID_TX);case 13:return c=e.sent,e.abrupt("return",{gatt:t,Characteristic_TX:c,Characteristic_RX:n,Server:a});case 17:console.error("Error: connected device did not have a GATT");case 18:e.next=25;break;case 20:return e.prev=20,e.t0=e.catch(0),alert("\u30c7\u30d0\u30a4\u30b9\u3068\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),console.error("error: ".concat(e.t0)),e.abrupt("return");case 25:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),_=a(144),T=a(78);_.a.register();var I=Object(x.a)((function(e){return{root:{position:"relative",bottom:120,left:209,fontSize:27}}})),R=function(e){var t=I(),a=e.characteristic,n=e.server,i=c.a.useState(0),s=Object(b.a)(i,2),o=s[0],l=s[1],j=c.a.useState(!1),x=Object(b.a)(j,2),h=x[0],f=x[1],p=c.a.useState("-1"),v=Object(b.a)(p,2),O=v[0],m=v[1],g=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,c,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==a&&n){e.next=5;break}return e.abrupt("return");case 5:if(!a||!n){e.next=21;break}if(r=Math.floor(t.value),c=String(r),"-1"!==(i=sessionStorage.getItem("auto"))){e.next=15;break}return l(r),m(i),e.abrupt("return");case 15:if("0"!==i){e.next=21;break}return m(i),l(c),s=(new TextEncoder).encode(c),e.next=21,a.writeValue(s);case 21:e.next=26;break;case 23:return e.prev=23,e.t0=e.catch(0),e.abrupt("return");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}();return c.a.useEffect((function(){n&&a?f(!0):n||a||(f(!1),l(0)),"-1"===O&&o>=0&&l(0)}),[O,a,n,o]),Object(r.jsxs)("div",{children:[Object(r.jsx)(T.a,{valueChanged:g,value:o,isNeedleDraggingEnabled:h,needleShape:"NeedleWithBulb",needleBrush:"DodgerBlue",needleOutline:"DodgerBlue",needleEndExtent:.475,needleStrokeThickness:1,needlePivotShape:"CircleOverlay",needlePivotBrush:"#9f9fa0",needlePivotOutline:"#9f9fa0",needlePivotWidthRatio:.2,needlePivotStrokeThickness:1,height:"410px",width:"440px",minimumValue:0,maximumValue:100,interval:10}),Object(r.jsxs)("div",{className:t.root,children:[o," ",Object(r.jsx)("span",{style:{fontSize:12},children:"%"})]})]})},w=a(147),E=a(139),X=a(140),y=a(63),N=Object(x.a)((function(){return{header:{textAlign:"center",padding:"12px 0px 5px 0px",backgroundColor:"#f0f0f0"},icon_Placement:{margin:"0px 0px 0px 20px",fontSize:50,color:"black"},num_name:{fontSize:25,textAlign:"center"}}})),A=function(e){var t=N(),a=e.Characteristic_RX,n=c.a.useState(0),i=Object(b.a)(n,2),s=i[0],o=i[1];return c.a.useEffect((function(){Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,a.startNotifications();case 3:e.sent.addEventListener("characteristicvaluechanged",(function(e){var t=e.target.value,a=new TextDecoder("utf-8").decode(t);o(a)})),e.next=9;break;case 7:return o(0),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))()}),[a]),Object(r.jsx)("div",{children:Object(r.jsxs)(w.a,{children:[Object(r.jsx)(E.a,{className:t.header,title:e.title}),Object(r.jsx)(X.a,{children:Object(r.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"div",children:Object(r.jsx)("div",{className:t.num_name,children:"".concat(s,"\u2103")})})})]})})},U=a(145),D=Object(x.a)((function(){return{header:{textAlign:"center",padding:"12px 0px 5px 0px",backgroundColor:"#f0f0f0"},icon_Placement:{margin:"0px 0px 0px 20px",fontSize:50,color:"black"},num_name:{fontSize:25,position:"relative",float:"right"},btnName:{textAlign:"center"}}})),P=function(e){var t=D(),a=e.characteristic_TX,n=e.server,i=c.a.useState("-1"),s=Object(b.a)(i,2),o=s[0],u=s[1],l=function(e){if(a)try{var t=e.target.value;if("-1"===t){var r=(new TextEncoder).encode(t);a.writeValue(r),u(t),sessionStorage.setItem("auto",t)}else u(t),sessionStorage.setItem("auto",t)}catch(n){console.error(n)}};return c.a.useEffect((function(){if(!n){sessionStorage.setItem("auto","-1"),u("-1")}}),[n]),Object(r.jsxs)(w.a,{children:[Object(r.jsx)(E.a,{className:t.header,title:e.title}),Object(r.jsx)(X.a,{children:Object(r.jsx)(y.a,{className:t.btnName,variant:"body2",color:"textSecondary",component:"div",children:n?Object(r.jsxs)("div",{children:["ON :",Object(r.jsx)(U.a,{checked:"-1"===o,onChange:l,value:"-1",name:"radio-button-demo",inputProps:{"aria-label":"-1"}}),"OFF :",Object(r.jsx)(U.a,{checked:"0"===o,onChange:l,value:"0",name:"radio-button-demo",inputProps:{"aria-label":"0"}})]}):Object(r.jsxs)("div",{children:["ON :",Object(r.jsx)(U.a,{checked:"-1"===o,value:"-1",disabled:!0}),"OFF :",Object(r.jsx)(U.a,{checked:"0"===o,value:"off",disabled:!0})]})})})]})},z=Object(x.a)((function(e){return{button:{float:"right",margin:"20px 5px 0px 0px"},backdrop:{textAlign:"center",zIndex:e.zIndex.drawer+1,color:"#fff"},buttonIcon:{margin:e.spacing(1),width:60,height:60,borderRadius:"50%"},gauge:{position:"relative",top:75,right:40},gauges:{position:"relative",top:85,left:56},tempData:{marginTop:50},Automatic:{marginTop:20,paddingBottom:20}}}));var B=function(){var e=z(),t=c.a.useState("default"),a=Object(b.a)(t,2),i=a[0],s=a[1],o=c.a.useState(0),x=Object(b.a)(o,2),p=x[0],O=x[1],g=Object(n.useState)(null),C=Object(b.a)(g,2),_=C[0],T=C[1],I=Object(n.useState)({connected:!1}),w=Object(b.a)(I,2),E=w[0],X=w[1],y=Object(n.useState)({Characteristic_TX:null,Characteristic_RX:null}),N=Object(b.a)(y,2),U=N[0],D=N[1],B=Object(n.useState)(!1),F=Object(b.a)(B,2),V=F[0],H=F[1],L=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a,r,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H(!V),0!==p){e.next=24;break}return e.next=4,k();case 4:if("cancel"!==(t=e.sent)){e.next=11;break}return console.log("cancel"),H(!1),e.abrupt("return");case 11:if("\u73fe\u5728\u306e\u30c7\u30d0\u30a4\u30b9\u306f\u3001bluetooth\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093"!==t){e.next=15;break}return alert("\u73fe\u5728\u306e\u30c7\u30d0\u30a4\u30b9\u306f\u3001bluetooth\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093"),H(!1),e.abrupt("return");case 15:return e.next=17,S(t);case 17:a=e.sent,r=a?a.Characteristic_TX:null,n=a?a.Characteristic_RX:null,c=a?a.Server:null,r&&n&&c?(c&&r&&n||alert("Characteristic\u306f\u3001null\nbluetooth\u901a\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"),T(t),D(Object(l.a)(Object(l.a)({},U),{},{Characteristic_TX:r,Characteristic_RX:n})),X(c),s("primary"),O(1)):alert("\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),e.next=30;break;case 24:if(1!==p){e.next=30;break}if(E&&E.connected){e.next=29;break}return console.log("\u63a5\u7d9a\u304c\u3055\u308c\u3066\u3044\u306a\u3044\u306e\u3067disconnect\u3067\u304d\u306a\u3044"),H(!1),e.abrupt("return");case 29:try{E.disconnect(),D(Object(l.a)(Object(l.a)({},U),{},{Characteristic_TX:null,Characteristic_RX:null})),s("default"),O(0)}catch(i){console.log(i)}case 30:H(!1);case 31:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){!function(){if(1===p)var e=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.connect(),!1===E.connected&&(clearInterval(t),D(Object(l.a)(Object(l.a)({},U),{},{Characteristic_TX:null,Characteristic_RX:null})),s("default"),O(0),console.log("interval\u3092\u6b62\u3081\u307e\u3059\u3002"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=setInterval(Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e()}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)}))),1e3)}()}),[U,p,_,E]),Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(h.a,{className:e.backdrop,open:V,children:Object(r.jsx)(f.a,{color:"inherit"})}),Object(r.jsx)("div",{className:e.button,children:Object(r.jsx)(j.a,{variant:"contained",onClick:L,color:i,className:e.buttonIcon,children:Object(r.jsx)(v.a,{})})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(m.a,{query:"(max-width: 767px)",children:Object(r.jsx)("div",{className:e.gauge,children:Object(r.jsx)(R,{characteristic:U.Characteristic_TX,server:E.connected})})}),Object(r.jsx)(m.a,{query:"(min-width: 768px)",children:Object(r.jsx)("div",{className:e.gauges,children:Object(r.jsx)(R,{characteristic:U.Characteristic_TX,server:E.connected})})}),Object(r.jsx)("div",{className:e.tempData,children:Object(r.jsx)(A,{Characteristic_RX:U.Characteristic_RX,title:"Temp"})}),Object(r.jsx)("div",{className:e.Automatic,children:Object(r.jsx)(P,{characteristic_TX:U.Characteristic_TX,server:E.connected,title:"auto"})})]})]})},F=a(143);a(104);var V=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(F.a,{maxWidth:"sm",children:Object(r.jsx)(B,{})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,149)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(V,{})}),document.getElementById("root")),H()},94:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.e60f4a6e.chunk.js.map