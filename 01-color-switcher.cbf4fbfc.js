const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;function n(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{a||(a=setInterval(n,1e3))})),e.addEventListener("click",(()=>{a=clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.cbf4fbfc.js.map
