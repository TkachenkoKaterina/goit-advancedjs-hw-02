import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l}from"./assets/vendor-69b9e915.js";const s={form:document.querySelector("form"),btnCreat:document.querySelector("form button")};s.form.addEventListener("submit",u);function u(e){e.preventDefault(),s.btnCreat.disabled=!0;const t=parseInt(s.form.elements.delay.value),n=parseInt(s.form.elements.step.value),o=parseInt(s.form.elements.amount.value);f(o,t,n)}function c(e,t){return new Promise((n,o)=>{const r=Math.random()>.3;setTimeout(()=>{r?n({position:e,delay:t}):o({position:e,delay:t})},t)})}function f(e,t,n){let o=0;for(let r=1;r<=e;r++){const a=t+(r-1)*n;c(r,a).then(({position:i,delay:m})=>{l.success({title:"Fulfilled",message:`🤩Fulfilled promise ${i} in ${m}ms`,position:"topRight",timeout:2e3})}).catch(({position:i,delay:m})=>{l.error({title:"Rejected",message:`😈Rejected promise ${i} in ${m}ms`,position:"topRight",timeout:2e3})}).finally(()=>{o+=1,o===e&&(s.btnCreat.disabled=!1)})}}
//# sourceMappingURL=commonHelpers3.js.map
