import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as s,l as c}from"./assets/vendor-78be7656.js";const a=document.querySelector("iframe"),o=new s(a),n="videoplayer-current-time";let t=0;const r=localStorage.getItem(n);r&&(t=JSON.parse(r).seconds,m());o.on("timeupdate",c(i,1e3));function i(e){localStorage.setItem(n,JSON.stringify(e)),t=e.seconds}function m(){o.setCurrentTime(t).then(e=>console.log(e)).catch(e=>console.error("Error setting current time:",e))}
//# sourceMappingURL=commonHelpers2.js.map
