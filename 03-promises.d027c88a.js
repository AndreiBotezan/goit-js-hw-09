var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequire7bc7=n);var r=n("iQIUW");(0,r.Notify).init({position:"center-top"});const i=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');i.addEventListener("submit",function(e){e.preventDefault();let t=Number(l.value),o=Number(u.value),n=Number(a.value);i.reset();for(let e=1;e<=n;e+=1)(function(e,t){return new Promise((o,n)=>{setTimeout(()=>{let r={position:e,delay:t};Math.random()>.3?o(r):n(r)},t)})})(e,t).then(({position:e,delay:t})=>{(0,r.Notify).success(`Fulfilled promise ${e} in ${t}ms`)}).catch(({position:e,delay:t})=>{(0,r.Notify).failure(`Rejected promise ${e} in ${t}ms`)}),t+=o});
//# sourceMappingURL=03-promises.d027c88a.js.map