(this.webpackJsonplarrymitchell=this.webpackJsonplarrymitchell||[]).push([[0],{19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAADJ0lEQVR42t1az2sTQRTeChY85BBtr9YIsQcPEQ85lFZwT94LBq+Fgl5S6KWQS65KS/o3CBvQf6OHaFpyMqc2PeWaYurFQNrVN/K2rF9mNrvJZGeSBx+EzezM+/b9mDc/HCdaHhJ2CW3Cb4KfIm4IfcIJYYd1SSxZQoXQ5U7/GIbPugidHsUl8YLQINxaQEBG6Dvh5TgSLqEn6WBIaBE8wlFK8HjMoUSfK9ZVKgUJiV+EY8Jjx5yIsWuEa9Ctx94zEhMNMOGprKFBEbo0IWYbrPudVCAmBIknjn2yxroFet6y7ncptgvuVDCo7D3Cew7qC8IXwnMIgbCbdYPUvAvmOjb81T9KMuZPIFODMNh2eLILZyeTgf1MkTUFvkICCGczkeH+zdjBg5Zha7yJmIAvoG0r9N+5Ay96holswocNowltP4Mn/UfkSIMyS4QMT1hlQpVR5mcZbiOTB5IUG2SnD9D2ENpoI3Kf8JpQ52JPVWb0uY0gtSzpZ53JBEWqmMU/cTabOZEcKzdIUDcN+J2cwjKbHDPrijG1E9kidKYoBDvcR1LRSmRL4kY+p3QRE0UuIVb59z7/50vc7ZUpIjmJJS4JJYk/48xdkrzbUbjZTIkss3+HOzoj5BMokud3wn3UFQlgZkRcCOxLnpWTSh4sM4haZ+gmsgTW8NlVJpUS6FCPmGe0EslAgLfHxEScarcNgZ9Jg4gLHZQ1VANl6NNNgwgOWtRApDjBx5maSBU6yGogkoU+qyaIrGogsmKCyMK4Fgb7/rwG+8Kk34WZEGUlSidhnWVFiaKzaDw1XTROW8a/U7z71OaF1QqjyM9+KBZWGyZXiLqWuhsTjDsXmw/GiAQJwNWwHWSciGyDbi+0QbcXY4NuKiI3Fm2ZJhEPt0z7Fm1iJ5GRTewTx55jhbgiPVbYgTipzQERPOh5Kx7i0Zs41ipYTEJ59CakAlYRNdCahSSETk2wRgXXzLYfTxec0bOTb7I9A3Et4gpy8zX749xcGAivM8Zd4ThMCVFXOHpx1i22X6ppJHF54XcHjn3XnA4m3UcTaW2bzXyuMPOsMOQxPdYh8uLZX6kUbKpaA+crAAAAAElFTkSuQmCC"},20:function(e,t,n){e.exports={icon:"style_icon__3qv_b"}},23:function(e,t,n){e.exports=n(38)},28:function(e,t,n){var a={"./first-thing.jpg":29,"./house.jpg":30,"./woman.jpg":31};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id=28},29:function(e,t,n){e.exports=n.p+"static/media/first-thing.8cacfc0a.jpg"},30:function(e,t,n){e.exports=n.p+"static/media/house.44b5280f.jpg"},31:function(e,t,n){e.exports=n.p+"static/media/woman.ca16f936.jpg"},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),i=n(17),o=n.n(i),l=n(10),u=n(9),s=n(18),m=(a=n(28)).keys().reduce((function(e,t){return Object(s.a)({},e,Object(u.a)({},t.replace("./",""),a(t)))}),{}),f=function(){return m},p=function(){var e=f(),t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(r.useMemo)((function(){return a}),[a]),o=Object(r.useMemo)((function(){return e[a]||""}),[e,a]),u=Object(r.useMemo)((function(){return Object.keys(e)}),[e]);Object(r.useEffect)((function(){c(u[0])}),[u]);var s=Object(r.useMemo)((function(){return u.findIndex((function(e){return e===a}))}),[a,u]),m=Object(r.useMemo)((function(){return u[s+1]}),[s,u]),p=Object(r.useMemo)((function(){return 0===s?u[u.length-1]:u[s-1]}),[s,u]);return[i,o,Object(r.useCallback)((function(){return c(m)}),[m]),Object(r.useCallback)((function(){return c(p)}),[p])]},E=function(){var e=p(),t=Object(l.a)(e,4),n=t[0],a=t[1],r=t[2],i=t[3];return c.a.createElement("div",null,c.a.createElement("button",{onClick:i},"previous"),c.a.createElement("img",{src:a,alt:n,style:{maxWidth:"100vw"}}),c.a.createElement("button",{onClick:r},"next"))},b=n(19),h=n.n(b),g=n(20),v=n.n(g),k=function(){return Object(r.useMemo)((function(){return[{name:"Illustrations",path:"/",component:E},{name:c.a.createElement("img",{className:v.a.icon,src:h.a,alt:"Instagram"}),path:"https://www.instagram.com/larry.mitchell/",inNavBar:!0,isExternal:!0}]}),[])},O=n(12),j=n(5),A=n(7),d=n.n(A),y=function(){var e=k();return c.a.createElement(O.a,null,c.a.createElement("div",{className:d.a.container},c.a.createElement("nav",{className:d.a.nav},c.a.createElement("h1",{className:d.a.name},"LAWRENCE MITCHELL"),c.a.createElement("ul",{className:d.a.linkList},e.filter((function(e){var t=e.isNavBar;return void 0===t||t})).map((function(e){var t=e.name,n=e.path;return e.isExternal?c.a.createElement("li",{className:d.a.link,key:n},c.a.createElement("a",{href:n},t)):c.a.createElement("li",{className:d.a.link,key:n},c.a.createElement(O.b,{to:n},t))})))),c.a.createElement(j.c,null,e.filter((function(e){var t=e.isExternal;return!(void 0!==t&&t)})).map((function(e){var t=e.component,n=e.path;return c.a.createElement(j.a,{path:n,key:n},c.a.createElement(t,null))})))))};n(37),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports={container:"style_container__3hSNO",nav:"style_nav__ev2zY",linkList:"style_linkList__1Dl3g",name:"style_name__KQHZO",link:"style_link__aWnfh"}}},[[23,1,2]]]);
//# sourceMappingURL=main.5dd97729.chunk.js.map