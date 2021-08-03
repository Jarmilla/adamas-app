(this["webpackJsonpadamas-app"]=this["webpackJsonpadamas-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),s=n.n(i),o=(n(12),n(2));n(13);function r(e){return 2*e*Math.PI/360}function l(e,t){var n=r(e.latitude),c=r(e.longitude),a=r(t.latitude),i=r(t.longitude);return 12732884*Math.asin(Math.sqrt(Math.pow(Math.sin((a-n)/2),2)+Math.cos(a)*Math.cos(n)*Math.pow(Math.sin((i-c)/2),2)))}function d(e){return e.latitude.toFixed(6)+", "+e.longitude.toFixed(6)}function j(e){return function(){var t=navigator.geolocation.watchPosition((function(t){return e(t.coords)}),(function(e){return console.log("Error:",e)}),{enableHighAccuracy:!0});return function(){return navigator.geolocation.clearWatch(t)}}}var u=n(0);var b=function(){var e={latitude:47.814303,longitude:19.9784174},t=Object(c.useState)(null),n=Object(o.a)(t,2),a=n[0],i=n[1],s=["Vas\xe1rnap","H\xe9tf\u0151","Kedd","Szerda","Cs\xfct\xf6rt\xf6k","P\xe9ntek","Szombat"],r=Object(c.useState)(null),b=Object(o.a)(r,2),h=b[0],O=b[1];return Object(c.useEffect)(j(O),[]),Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(e.latitude,"&lon=").concat(e.longitude,"&exclude=minutely,hourly&units=metric&lang=hu&appid=").concat("23c16eed06c02fd60c74cdaf0b3558f3")).then((function(e){return e.json()})).then((function(e){i(e),console.log(e)})).catch((function(e){return console.log("Error:",e)}))}),[e.latitude,e.longitude]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"F\u0151hadisz\xe1ll\xe1s"}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Koordin\xe1t\xe1k: ",d(e)]}),h?Object(u.jsxs)("li",{children:["T\xe1vols\xe1g: ",l(e,h).toFixed(0)," m (\xb1",h.accuracy.toFixed(0)," m)"," "]}):""]}),null===a||void 0===a?void 0:a.daily.slice(0,3).map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:s[new Date(1e3*e.dt).getDay()]}),Object(u.jsxs)("div",{children:["H\u0151m\xe9rs\xe9klet: ",e.temp.min.toFixed(0)," - ",e.temp.max.toFixed(0)," \xb0C"]}),Object(u.jsxs)("div",{children:["Sz\xe9lsebess\xe9g: ",e.wind_speed," m/s"]}),Object(u.jsxs)("div",{children:["Csapad\xe9k: ",e.rain?e.rain.toFixed(2):(0).toFixed(2)," mm"]}),Object(u.jsxs)("div",{children:["P\xe1ratartalom: ",e.humidity.toFixed(0),"%"]}),Object(u.jsx)("div",{children:e.weather[0].description})]},e.dt)}))]})},h=n(6),O=n.n(h);var f=function(e){var t=e.data,n=e.setChosenData,a=e.toPieceOfData,i=Object(c.useState)(""),s=Object(o.a)(i,2),r=s[0],l=s[1];return Object(u.jsxs)("div",{children:[""===r?Object(u.jsx)("h3",{children:"Scanning..."}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Scanned:"}),Object(u.jsx)("p",{children:r})]}),Object(u.jsx)(O.a,{delay:300,onError:function(e){return console.error(e)},onScan:function(e){if(null!==e){var c=JSON.parse(localStorage.getItem("scanned"))||[];c.includes(e)||(c.push(e),localStorage.setItem("scanned",JSON.stringify(c))),Object.keys(t.items).includes(e)?(n(t.items[e]),a()):l(e)}},facingMode:"environment"})]})};var x=function(e){var t=e.data,n=e.setChosenData,c=e.toPieceOfData;return Object(u.jsxs)("div",{className:"collection-of-data",children:[Object(u.jsx)("h1",{children:"\xd6sszegy\u0171jt\xf6tt Adatok"}),t&&Object.keys(t.items).filter((function(e){var t;return null===(t=JSON.parse(localStorage.getItem("scanned")))||void 0===t?void 0:t.includes(e)})).map((function(e){var a=t.items[e];return Object(u.jsx)("h2",{onClick:function(){n(a),c()},children:a.name},e)}))]})};var m=function(e){var t=e.pieceOfData,n=Object(c.useState)(null),a=Object(o.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)(j(s),[]),Object(u.jsxs)("div",{className:"piece-of-data",children:[Object(u.jsx)("h2",{className:"button-effect selected",children:t.name}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["T\xedpus: ",t.type]}),t.coordinates?Object(u.jsxs)("li",{children:["Bem\xe9rve: ",d(t.coordinates)]}):"",t.coordinates&&i?Object(u.jsxs)("li",{children:["T\xe1vols\xe1g: ",l(t.coordinates,i).toFixed(0)," m (\xb1",i.accuracy.toFixed(0)," m)"," "]}):""]}),Object(u.jsx)("ul",{children:t.description.map((function(e,t){return Object(u.jsx)("li",{children:e},t)}))})]})};var p=function(){var e=Object(c.useState)(!0),t=Object(o.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(o.a)(i,2),r=s[0],l=s[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),h=j[0],O=j[1],p=Object(c.useState)(!1),v=Object(o.a)(p,2),g=v[0],S=v[1],y=Object(c.useState)(null),F=Object(o.a)(y,2),k=F[0],C=F[1],D=function(){a(!1),O(!1),S(!0),l(!1)},M=Object(c.useState)({items:{}}),N=Object(o.a)(M,2),P=N[0],w=N[1];return Object(c.useEffect)((function(){fetch("/adamas-app/data.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then(w)}),[w]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("button",{className:"home-button button-effect ".concat(n?"selected":null),onClick:function(){a(!0),O(!1),S(!1),l(!1)},children:"Adamish SX7"}),Object(u.jsxs)("main",{children:[Object(u.jsxs)("div",{className:"decor-box",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]}),Object(u.jsxs)("article",{children:[n&&Object(u.jsx)(b,{}),r&&Object(u.jsx)(f,{data:P,setChosenData:C,toPieceOfData:D}),h&&Object(u.jsx)(x,{data:P,setChosenData:C,toPieceOfData:D}),g&&Object(u.jsx)(m,{pieceOfData:k})]})]}),Object(u.jsxs)("nav",{children:[Object(u.jsx)("button",{className:"button-effect ".concat(h?"selected":null),onClick:function(){a(!1),O(!0),S(!1),l(!1),C(null)},children:"Adatok"}),Object(u.jsx)("button",{className:"button-effect ".concat(r?"selected":null),onClick:function(){a(!1),O(!1),S(!1),l(!0),C(null)},children:"Scanner"})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),v()}},[[23,1,2]]]);
//# sourceMappingURL=main.81d58e02.chunk.js.map