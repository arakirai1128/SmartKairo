(this["webpackJsonpsmart-kairo"]=this["webpackJsonpsmart-kairo"]||[]).push([[0],{104:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r(2),c=r.n(n),i=r(25),s=r.n(i),o=(r(94),r(16)),u=r.n(o),l=r(40),d=r(22),b=r(21),f=r(141),j=r(136),x=r(145),h=r(140),p=r(77),v=r.n(p),O=r(67),m=r.n(O),g=r(69),C={SERVICE_UUID:"6e400001-b5a3-f393-e0a9-e50e24dcca9e",CHARACTERISTIC_UUID_RX:"6e400003-b5a3-f393-e0a9-e50e24dcca9e",CHARACTERISTIC_UUID_TX:"6e400002-b5a3-f393-e0a9-e50e24dcca9e"},k=function(){var e=Object(d.a)(u.a.mark((function e(){var t,r,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a();case 2:if(e.sent){e.next=7;break}return t="\u73fe\u5728\u306e\u30c7\u30d0\u30a4\u30b9\u306f\u3001bluetooth\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093",console.log(t),e.abrupt("return",t);case 7:return r={filters:[{services:[C.SERVICE_UUID]},{name:"SMART KAIRO"}],optionalServices:[C.SERVICE_UUID]},e.next=10,g.b(r);case 10:if("cancel"!==(a=e.sent).type){e.next=13;break}return e.abrupt("return",a.type);case 13:return n=a.device,e.abrupt("return",n.gatt);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(u.a.mark((function e(t){var r,a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=17;break}return e.next=4,t.connect();case 4:return r=e.sent,e.next=7,r.getPrimaryService(C.SERVICE_UUID);case 7:return a=e.sent,e.next=10,a.getCharacteristic(C.CHARACTERISTIC_UUID_RX);case 10:return n=e.sent,e.next=13,a.getCharacteristic(C.CHARACTERISTIC_UUID_TX);case 13:return c=e.sent,e.abrupt("return",{gatt:t,Characteristic_TX:c,Characteristic_RX:n,Server:r});case 17:console.error("Error: connected device did not have a GATT");case 18:e.next=25;break;case 20:return e.prev=20,e.t0=e.catch(0),alert("\u30c7\u30d0\u30a4\u30b9\u3068\u63a5\u7d9a\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002"),console.error("error: ".concat(e.t0)),e.abrupt("return");case 25:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),_=r(143),T=r(78);_.a.register();var I=Object(j.a)((function(e){return{root:{position:"relative",bottom:110,left:208,fontSize:22}}})),R=function(e){var t=I(),r=e.characteristic,n=e.server,i=c.a.useState(0),s=Object(b.a)(i,2),o=s[0],l=s[1],f=c.a.useState(!1),j=Object(b.a)(f,2),x=j[0],h=j[1],p=c.a.useState("on"),v=Object(b.a)(p,2),O=v[0],m=v[1],g=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,c,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,null!==r&&n){e.next=5;break}return e.abrupt("return");case 5:if(!r||!n){e.next=21;break}if(a=Math.floor(t.value),c=String(a),"on"!==(i=sessionStorage.getItem("kvs"))){e.next=15;break}return l(a),m(i),e.abrupt("return");case 15:if("off"!==i){e.next=21;break}return m(i),l(c),s=(new TextEncoder).encode(c),e.next=21,r.writeValue(s);case 21:e.next=26;break;case 23:return e.prev=23,e.t0=e.catch(0),e.abrupt("return");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(t){return e.apply(this,arguments)}}();return c.a.useEffect((function(){n&&r?h(!0):n||r||(h(!1),l(0)),"on"===O&&o>=0&&l(0)}),[O,r,n,o]),Object(a.jsxs)("div",{children:[Object(a.jsx)(T.a,{valueChanged:g,value:o,isNeedleDraggingEnabled:x,needleShape:"NeedleWithBulb",needleBrush:"DodgerBlue",needleOutline:"DodgerBlue",needleEndExtent:.475,needleStrokeThickness:1,needlePivotShape:"CircleOverlay",needlePivotBrush:"#9f9fa0",needlePivotOutline:"#9f9fa0",needlePivotWidthRatio:.2,needlePivotStrokeThickness:1,height:"410px",width:"440px",minimumValue:0,maximumValue:100,interval:10}),Object(a.jsxs)("div",{className:t.root,children:[o," ",Object(a.jsx)("span",{style:{fontSize:12},children:"%"})]})]})},w=r(146),E=r(138),X=r(139),y=r(63),N=Object(j.a)((function(){return{header:{textAlign:"center",padding:"12px 0px 5px 0px",backgroundColor:"#f0f0f0"},icon_Placement:{margin:"0px 0px 0px 20px",fontSize:50,color:"black"},num_name:{fontSize:25,textAlign:"center"}}})),A=function(e){var t=N(),r=e.Characteristic_RX,n=c.a.useState(0),i=Object(b.a)(n,2),s=i[0],o=i[1];return c.a.useEffect((function(){Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=7;break}return e.next=3,r.startNotifications();case 3:e.sent.addEventListener("characteristicvaluechanged",(function(e){var t=e.target.value,r=new TextDecoder("utf-8").decode(t);o(r)})),e.next=9;break;case 7:return o(0),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))()}),[r]),Object(a.jsx)("div",{children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(E.a,{className:t.header,title:e.title}),Object(a.jsx)(X.a,{children:Object(a.jsx)(y.a,{variant:"body2",color:"textSecondary",component:"div",children:Object(a.jsx)("div",{className:t.num_name,children:"".concat(s,"\u2103")})})})]})})},U=r(144),D=Object(j.a)((function(){return{header:{textAlign:"center",padding:"12px 0px 5px 0px",backgroundColor:"#f0f0f0"},icon_Placement:{margin:"0px 0px 0px 20px",fontSize:50,color:"black"},num_name:{fontSize:25,position:"relative",float:"right"},btnName:{textAlign:"center"}}})),P=function(e){var t=D(),r=e.characteristic_TX,n=e.server,i=c.a.useState("on"),s=Object(b.a)(i,2),o=s[0],u=s[1],l=function(e){if(r){var t=e.target.value,a=(new TextEncoder).encode(t);r.writeValue(a),u(t),sessionStorage.setItem("kvs",t)}};return c.a.useEffect((function(){if(!n){sessionStorage.setItem("kvs","on"),u("on")}}),[n]),Object(a.jsxs)(w.a,{children:[Object(a.jsx)(E.a,{className:t.header,title:e.title}),Object(a.jsx)(X.a,{children:Object(a.jsx)(y.a,{className:t.btnName,variant:"body2",color:"textSecondary",component:"div",children:n?Object(a.jsxs)("div",{children:["ON :",Object(a.jsx)(U.a,{checked:"on"===o,onChange:l,value:"on",name:"radio-button-demo",inputProps:{"aria-label":"on"}}),"OFF :",Object(a.jsx)(U.a,{checked:"off"===o,onChange:l,value:"off",name:"radio-button-demo",inputProps:{"aria-label":"off"}})]}):Object(a.jsxs)("div",{children:["ON :",Object(a.jsx)(U.a,{checked:"on"===o,value:"on",disabled:!0}),"OFF :",Object(a.jsx)(U.a,{checked:"off"===o,value:"off",disabled:!0})]})})})]})},z=Object(j.a)((function(e){return{button:{float:"right",margin:"20px 5px 0px 0px"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},buttonIcon:{margin:e.spacing(1),width:60,height:60,borderRadius:"50%"},gauge:{position:"relative",top:75,right:33},gauges:{position:"relative",top:85,left:56},tempData:{marginTop:65},Automatic:{marginTop:20,paddingBottom:20}}}));var B=function(){var e=z(),t=c.a.useState("default"),r=Object(b.a)(t,2),i=r[0],s=r[1],o=c.a.useState(0),j=Object(b.a)(o,2),p=j[0],O=j[1],g=Object(n.useState)(null),C=Object(b.a)(g,2),_=C[0],T=C[1],I=Object(n.useState)({connected:!1}),w=Object(b.a)(I,2),E=w[0],X=w[1],y=Object(n.useState)({Characteristic_TX:null,Characteristic_RX:null}),N=Object(b.a)(y,2),U=N[0],D=N[1],B=Object(n.useState)(!1),F=Object(b.a)(B,2),V=F[0],H=F[1],L=function(){var e=Object(d.a)(u.a.mark((function e(){var t,r,a,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(H(!V),0!==p){e.next=24;break}return e.next=4,k();case 4:if("cancel"!==(t=e.sent)){e.next=11;break}return console.log("cancel"),H(!1),e.abrupt("return");case 11:if("\u73fe\u5728\u306e\u30c7\u30d0\u30a4\u30b9\u306f\u3001bluetooth\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093"!==t){e.next=15;break}return alert("\u73fe\u5728\u306e\u30c7\u30d0\u30a4\u30b9\u306f\u3001bluetooth\u306b\u5bfe\u5fdc\u3057\u3066\u3044\u307e\u305b\u3093"),H(!1),e.abrupt("return");case 15:return e.next=17,S(t);case 17:r=e.sent,a=r?r.Characteristic_TX:null,n=r?r.Characteristic_RX:null,c=r?r.Server:null,a&&n&&c&&(c&&a&&n||alert("Characteristic\u306f\u3001null\nbluetooth\u901a\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f"),T(t),D(Object(l.a)(Object(l.a)({},U),{},{Characteristic_TX:a,Characteristic_RX:n})),X(c),s("primary"),O(1)),e.next=29;break;case 24:if(1!==p){e.next=29;break}if(E&&E.connected){e.next=28;break}return H(!1),e.abrupt("return");case 28:try{E.disconnect(),console.log(E),D(Object(l.a)(Object(l.a)({},U),{},{Characteristic_TX:null,Characteristic_RX:null})),s("default"),O(0)}catch(i){console.log(i)}case 29:H(!1);case 30:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){!function(){if(1===p)var e=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.connect(),!1===E.connected&&(clearInterval(t),D(Object(l.a)(Object(l.a)({},U),{},{Characteristic_TX:null,Characteristic_RX:null})),s("default"),O(0),console.log("interval\u3092\u6b62\u3081\u307e\u3059\u3002"));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=setInterval(Object(d.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e()}catch(r){console.log(r)}case 1:case"end":return t.stop()}}),t)}))),1e3)}()}),[U,p,_,E]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{className:e.backdrop,open:V,children:Object(a.jsx)(h.a,{color:"inherit"})}),Object(a.jsx)("div",{className:e.button,children:Object(a.jsx)(f.a,{variant:"contained",onClick:L,color:i,className:e.buttonIcon,children:Object(a.jsx)(v.a,{})})})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(m.a,{query:"(max-width: 767px)",children:Object(a.jsx)("div",{className:e.gauge,children:Object(a.jsx)(R,{characteristic:U.Characteristic_TX,server:E.connected})})}),Object(a.jsx)(m.a,{query:"(min-width: 768px)",children:Object(a.jsx)("div",{className:e.gauges,children:Object(a.jsx)(R,{characteristic:U.Characteristic_TX,server:E.connected})})}),Object(a.jsx)("div",{className:e.tempData,children:Object(a.jsx)(A,{Characteristic_RX:U.Characteristic_RX,title:"Temp"})}),Object(a.jsx)("div",{className:e.Automatic,children:Object(a.jsx)(P,{characteristic_TX:U.Characteristic_TX,server:E.connected,title:"auto"})})]})]})},F=r(142);var V=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(F.a,{maxWidth:"sm",children:Object(a.jsx)(B,{})})})},H=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,148)).then((function(t){var r=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),a(e),n(e),c(e),i(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(V,{})}),document.getElementById("root")),H()},94:function(e,t,r){}},[[104,1,2]]]);
//# sourceMappingURL=main.b7bdea11.chunk.js.map