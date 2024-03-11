const btf={debounce:(e,t=0,n=!1)=>{let o;return(...i)=>{const a=n&&!o;clearTimeout(o),o=setTimeout((()=>{o=null,n||e(...i)}),t),a&&e(...i)}},throttle:function(e,t,n={}){let o,i,a,l=0;const s=()=>{l=!1===n.leading?0:(new Date).getTime(),o=null,e.apply(i,a),o||(i=a=null)};return(...d)=>{const r=(new Date).getTime();l||!1!==n.leading||(l=r);const c=t-(r-l);i=this,a=d,c<=0||c>t?(o&&(clearTimeout(o),o=null),l=r,e.apply(i,a),o||(i=a=null)):o||!1===n.trailing||(o=setTimeout(s,c))}},sidebarPaddingR:()=>{const e=window.innerWidth,t=document.body.clientWidth;e!==t&&(document.body.style.paddingRight=e-t+"px")},snackbarShow:(e,t=!1,n=2e3)=>{const{position:o,bgLight:i,bgDark:a}=GLOBAL_CONFIG.Snackbar,l="light"===document.documentElement.getAttribute("data-theme")?i:a;Snackbar.show({text:e,backgroundColor:l,showAction:t,duration:n,pos:o,customClass:"snackbar-css"})},diffDate:(e,t=!1)=>{const n=new Date,o=new Date(e),i=n.getTime()-o.getTime(),a=36e5,l=24*a,{dateSuffix:s}=GLOBAL_CONFIG;if(!t)return parseInt(i/l);const d=i/2592e6,r=i/l,c=i/a,m=i/6e4;return d>12?o.toISOString().slice(0,10):d>=1?`${parseInt(d)} ${s.month}`:r>=1?`${parseInt(r)} ${s.day}`:c>=1?`${parseInt(c)} ${s.hour}`:m>=1?`${parseInt(m)} ${s.min}`:s.just},loadComment:(e,t)=>{if("IntersectionObserver"in window){const n=new IntersectionObserver((e=>{e[0].isIntersecting&&(t(),n.disconnect())}),{threshold:[0]});n.observe(e)}else t()},scrollToDest:(e,t=500)=>{const n=window.pageYOffset,o=document.getElementById("page-header").classList.contains("fixed");if((n>e||o)&&(e-=70),"scrollBehavior"in document.documentElement.style)return void window.scrollTo({top:e,behavior:"smooth"});let i=null;e=+e,window.requestAnimationFrame((function o(a){i=i||a;const l=a-i;n<e?window.scrollTo(0,(e-n)*l/t+n):window.scrollTo(0,n-(n-e)*l/t),l<t?window.requestAnimationFrame(o):window.scrollTo(0,e)}))},animateIn:(e,t)=>{e.style.display="block",e.style.animation=t},animateOut:(e,t)=>{e.addEventListener("animationend",(function t(){e.style.display="",e.style.animation="",e.removeEventListener("animationend",t)})),e.style.animation=t},wrap:(e,t,n)=>{const o=document.createElement(t);for(const[e,t]of Object.entries(n))o.setAttribute(e,t);e.parentNode.insertBefore(o,e),o.appendChild(e)},isHidden:e=>0===e.offsetHeight&&0===e.offsetWidth,getEleTop:e=>{let t=e.offsetTop,n=e.offsetParent;for(;null!==n;)t+=n.offsetTop,n=n.offsetParent;return t},loadLightbox:e=>{const t=GLOBAL_CONFIG.lightbox;"mediumZoom"===t&&mediumZoom(e,{background:"var(--zoom-bg)"}),"fancybox"===t&&(Array.from(e).forEach((e=>{if("A"!==e.parentNode.tagName){const t=e.dataset.lazySrc||e.src;btf.wrap(e,"a",{href:t,"data-fancybox":"gallery","data-caption":e.title||e.alt||"","data-thumb":t})}})),window.fancyboxRun||(Fancybox.bind("[data-fancybox]",{Hash:!1,Thumbs:{showOnStart:!1},Images:{Panzoom:{maxScale:4}},Carousel:{transition:"slide"},Toolbar:{display:{left:["infobar"],middle:["zoomIn","zoomOut","toggle1to1","rotateCCW","rotateCW","flipX","flipY"],right:["slideshow","thumbs","close"]}}}),window.fancyboxRun=!0))},setLoading:{add:e=>{e.insertAdjacentHTML("afterend",'\n        <div class="loading-container">\n          <div class="loading-item">\n            <div></div><div></div><div></div><div></div><div></div>\n          </div>\n        </div>\n      ')},remove:e=>{e.nextElementSibling.remove()}},updateAnchor:e=>{if(e!==window.location.hash){e||(e=location.pathname);const t=GLOBAL_CONFIG_SITE.title;window.history.replaceState({url:location.href,title:t},t,e)}},getScrollPercent:(e,t)=>{const n=t.clientHeight,o=document.documentElement.clientHeight,i=n>o?n-o:document.documentElement.scrollHeight-o,a=Math.round(100*((e-t.offsetTop)/i));return a>100?100:a<=0?0:a},addGlobalFn:(e,t,n=!1,o=window)=>{const i=o.globalFn||{},a=i[e]||{};n&&a[n]||(a[n=n||Object.keys(a).length]=t,i[e]=a,o.globalFn=i)},addEventListenerPjax:(e,t,n,o=!1)=>{e.addEventListener(t,n,o),btf.addGlobalFn("pjax",(()=>{e.removeEventListener(t,n,o)}))},removeGlobalFnEvent:(e,t=window)=>{const{globalFn:n={}}=t,o=n[e]||{},i=Object.keys(o);i.length&&(i.forEach((e=>{o[e]()})),delete t.globalFn[e])}};