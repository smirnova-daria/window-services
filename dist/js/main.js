(()=>{"use strict";const e=({timing:e,draw:t,duration:o})=>{let l=performance.now();requestAnimationFrame((function n(r){let c=(r-l)/o;c>1&&(c=1);let a=e(c);t(a),c<1&&requestAnimationFrame(n)}))},t=({elementSelector:t,modalSelector:o,overlaySelector:l,closeSelector:n,animationDuration:r=300})=>{try{const c=document.querySelectorAll(t),a=document.querySelector(o),s=document.querySelector(l),i=a.querySelector(n),m=t=>{t.preventDefault(),a.style.display="block",s.style.display="block",e({duration:r,timing:e=>e,draw(e){a.style.opacity=e}})},u=()=>{e({duration:r,timing:e=>e,draw(e){a.style.opacity=1-e}}),setTimeout((()=>{a.style.display="none",s.style.display="none"}),r)};c.forEach((e=>{e.addEventListener("click",m)})),i.addEventListener("click",u)}catch(e){console.log(e.message)}};t({elementSelector:".callback",modalSelector:".header-modal",overlaySelector:".overlay",closeSelector:".header-modal__close"}),t({elementSelector:".measurer-call",modalSelector:".services-modal",overlaySelector:".overlay",closeSelector:".services-modal__close"}),(e=>{const t=document.querySelectorAll(".count_1 span"),o=document.querySelectorAll(".count_2 span"),l=document.querySelectorAll(".count_3 span"),n=document.querySelectorAll(".count_4 span");let r;const c=()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();for(let e=0;e<t.length;e++)try{t[e].textContent=c.days<10?"0"+c.days:c.days,o[e].textContent=c.hours<10?"0"+c.hours:c.hours,l[e].textContent=c.minutes<10?"0"+c.minutes:c.minutes,n[e].textContent=c.seconds<10?"0"+c.seconds:c.seconds}catch(e){console.log(e.message)}if(c.timeRemaining<=0){clearInterval(r);for(let e=0;e<t.length;e++)try{t[e].textContent="00",o[e].textContent="00",l[e].textContent="00",n[e].textContent="00"}catch(e){console.log(e.message)}}};c(),r=setInterval(c,500)})("20 may 2022 21:00")})();