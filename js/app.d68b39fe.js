(function(){"use strict";var e={4087:function(e,n,r){var t=r(9242),o=r(3396),c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJkAAACZCAYAAAA8XJi6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAATNSURBVHhe7drbbhw3EEVRKf//z0k6sACiMmLN6eIej4y9XmygedcBuyD159//+pBAf/36V8IYMuEMmXCGTDhDJpwhE86QCWfIhDNkwhky4QyZcNHfLj8/P3/9jzf5k2pdJ/nn2e5Murm7ta7Pd89e4e45epMJZ8iEu/26vHt1fqd7baySto+kr5l1/HTuyVyXtf/u2SU9h86p8b3JhDNkwhky4Y7VZCdrj0sy/smxHqn9V91Y07lXr95nN/6zvMmEM2TCGTLhfmRNlvY9KVnnM5L+6b5Pr6U+f5Y3mXCGTDhDJtyPqcl2urnTuZK1vNPc3VidyVp2vMmEM2TCGTLhfuT3ZJ20Vunm2u17OlfyPO07dWp8bzLhDJlwhky42zUZbVd/7J5dyOfvPDetzv8sbzLhDJlwhky4qCZ7F9M6p0pqm+lYaf8f+OP5H28y4QyZcIZMOKwmS2uTpH1SQ11ObrGrmaY11bT/TnLGJ3mTCWfIhLv9unz1a2Ftn7R9ZNp/Z3oO1Tped2bputO13uVNJpwhE86QCffbarIqGW86d1rbJOPXvh1y7q7vdK3P8iYTzpAJZ8iEwz6/vvv+PuGd6qKqG2vXf9L3hLs/U28y4QyZcIZMuNs1Wfp+7uqcpJ5I+3Zr7da2Svcx2Wd1cqzLyXPZ8SYTzpAJZ8iEO/Z7stPv92SurjaZzDWVrnWn20dqem7P8iYTzpAJZ8iEe1lNVpH1QB37VG3xCD3XyTOvXnVO3mTCGTLhDJlwt7/xnyLrgW7sXZ1zSdp3bdN9JXNV6dzdOVTpXr54kwlnyIQzZMJh35Ol7/vOOt+0luhql934SdtLd07Vbm2n56q6c7nLm0w4QybcsT8rVaeu2i/r3N3YyTofSdbevWJOPu/6ptLxavtneZMJZ8iEM2TCHfuz0vR9nvSvbevY6fPObu7q9Fpq+510X6lkLStvMuEMmXCGTDjs8+uTtcZlHa/re7o2WeerY3f7JtdKn0M3/rO8yYQzZMIZMuGw35PVYcn6IK2DOtO1rg4d70PdOrufQfr8Lm8y4QyZcIZMuLf5/Hry/k9rjWqyl+lcydrTuapunxRvMuEMmXCGTDisJqum9UPSv1tbHStpT++72s3XjZ2eQyfd+xdvMuEMmXCGTLhjNVl9v999f39nUttM15LMPT2X3VyTvpdubZ275+hNJpwhE86QCXfsG/9UVx8k7/+0Funs1pKuc9r+pPQcTvEmE86QCXfs82va7jWSbqF7JU2OZPq6q3Ov49H7rO0n57DyJhPOkAlnyIT7bb/C6HT1ws60ltjN1a0rfV6Rc1fdWk7xJhPOkAlnyIR72efXnbR2WaW1Sff8pJNzpWc+3Vc633e8yYQzZMIZMuGwz687Xf/p+Kt0rmoy9ztJ99m1f5Y3mXCGTDhDJtwfWZOdXltiuo+kfde220e6lru8yYQzZMIZMuF+TE226tomY126ta/9p/uskr10Y1XJvi5p+2d5kwlnyIQzZML9Ed+Tpaja4xkn9zkdqzuH6u5avcmEM2TCGTLhbtdktN2yTq+jzpXUOtO1dHOvgh/Vf5J9kLzJhDNkwhky4aKaTLrDm0w4QyacIRPOkAlnyIQzZMIZMuEMmXCGTDhDJpwhE86QCfbx8Q9KVbyxbDxX4AAAAABJRU5ErkJggg==",u=r(8009),a=r.n(u),l=r(4870);const i=e=>((0,o.dD)("data-v-0c0ce2e7"),e=e(),(0,o.Cn)(),e),d={class:"container mt-5"},s={class:"row justify-content-center"},f={class:"col-md-6"},v={class:"card"},p=i((()=>(0,o._)("div",{class:"card-header"}," QR Code Generator ",-1))),h={class:"card-body"},y={class:"form-group"},m=i((()=>(0,o._)("label",{for:"qrContent"},"QR Code Content:",-1))),b={class:"mt-3",id:"qrcode"},A=["src"];var g={__name:"qrCodeForm",setup(e){const n=(0,l.iH)(""),r=(0,l.iH)(null);function c(){try{const e=a()(0,"H");e.addData(n.value),e.make(),r.value=e.createDataURL(10,0)}catch(e){console.error("Error generating QR code:",e.message)}}function u(){if(r.value){const e=document.createElement("a");e.href=r.value,e.download="qrcode.png",document.body.appendChild(e),e.click(),document.body.removeChild(e)}}return(e,a)=>((0,o.wg)(),(0,o.iD)("div",d,[(0,o._)("div",s,[(0,o._)("div",f,[(0,o._)("div",v,[p,(0,o._)("div",h,[(0,o._)("form",null,[(0,o._)("div",y,[m,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control","onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),placeholder:"Enter URL for QR code"},null,512),[[t.nr,n.value]])]),(0,o._)("button",{type:"button",class:"btn btn-primary mt-2",onClick:c}," Generate QR Code ")]),r.value?((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-success mt-2",onClick:u}," Download QR Code ")):(0,o.kq)("",!0),(0,o._)("div",b,[r.value?((0,o.wg)(),(0,o.iD)("img",{key:0,src:r.value,alt:"QR Code",style:{height:"200px",width:"200px"}},null,8,A)):(0,o.kq)("",!0)])])])])])]))}},w=r(89);const O=(0,w.Z)(g,[["__scopeId","data-v-0c0ce2e7"]]);var T=O;const k=(0,o._)("img",{alt:"QRCode GENERATOR LOGO",src:c,style:{height:"100px",width:"100px"}},null,-1),C=(0,o._)("h1",null,"QR Code GENERATOR App build by John Francis Astillero",-1);var Z={__name:"App",setup(e){return(e,n)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[k,C,(0,o.Wm)(T)],64))}};const J=Z;var M=J,Q=r(5431);(0,Q.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),(0,t.ri)(M).mount("#app")}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var c=n[t]={exports:{}};return e[t].call(c.exports,c,c.exports,r),c.exports}r.m=e,function(){var e=[];r.O=function(n,t,o,c){if(!t){var u=1/0;for(d=0;d<e.length;d++){t=e[d][0],o=e[d][1],c=e[d][2];for(var a=!0,l=0;l<t.length;l++)(!1&c||u>=c)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(a=!1,c<u&&(u=c));if(a){e.splice(d--,1);var i=o();void 0!==i&&(n=i)}}return n}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[t,o,c]}}(),function(){r.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(n,{a:n}),n}}(),function(){r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,c,u=t[0],a=t[1],l=t[2],i=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var d=l(r)}for(n&&n(t);i<u.length;i++)c=u[i],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(d)},t=self["webpackChunkqrcode_generator"]=self["webpackChunkqrcode_generator"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=r.O(void 0,[998],(function(){return r(4087)}));t=r.O(t)})();
//# sourceMappingURL=app.d68b39fe.js.map