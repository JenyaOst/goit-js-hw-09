function e(e,t){return new Promise(((o,n)=>{const l=Math.random()>.3;setTimeout((()=>{l?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const o=t.target;let n=Number(o.elements.delay.value),l=Number(o.elements.step.value),s=Number(o.elements.amount.value);for(let t=1;t<=s;t+=1)e(t,n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),n+=l}));
//# sourceMappingURL=03-promises.af8de3c5.js.map
