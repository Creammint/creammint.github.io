function setMask(){return null!=document.getElementsByClassName("rmMask")[0]?document.getElementsByClassName("rmMask")[0]:(mask=document.createElement("div"),mask.className="rmMask",mask.style.width=window.innerWidth+"px",mask.style.height=window.innerHeight+"px",mask.style.background="#fff",mask.style.opacity=".0",mask.style.position="fixed",mask.style.top="0",mask.style.left="0",mask.style.zIndex=998,document.body.appendChild(mask),document.getElementById("rightMenu").style.zIndex=19198,mask)}function insertAtCursor(e,t){if(document.selection)e.focus(),sel=document.selection.createRange(),sel.text=t,sel.select();else if(e.selectionStart||"0"==e.selectionStart){var o=e.selectionStart,n=e.selectionEnd,s=e.scrollTop;e.value=e.value.substring(0,o)+t+e.value.substring(n,e.value.length),s>0&&(e.scrollTop=s),e.focus(),e.selectionStart=o+t.length,e.selectionEnd=o+t.length}else e.value+=t,e.focus()}let rmf={};function popupMenu(){window.oncontextmenu=function(e){if("off"==mouseMode)return!0;$(".rightMenu-group.hide").hide(),""+document.getSelection()&&$("#menu-text").show(),(document.getElementById("post")||document.getElementById("page"))&&$("#menu-post").show();var t=window.document.body;t=e.target;/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(""+window.getSelection())&&"A"!=t.tagName&&$("#menu-too").show(),"A"==t.tagName?($("#menu-to").show(),rmf.open=function(){-1==t.href.indexOf("http://")&&-1==t.href.indexOf("https://")||-1!=t.href.indexOf("yisous.xyz")?pjax.loadUrl(t.href):location.href=t.href},rmf.openWithNewTab=function(){window.open(t.href)},rmf.copyLink=function(){let e=t.href,o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("Copy"),document.body.removeChild(o),new Vue({data:function(){this.$notify({title:"哎嘿！复制成功🍬",message:"若要转载最好保留原文链接哦，给你一个大大的赞！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})}):"IMG"==t.tagName?($("#menu-img").show(),rmf.openWithNewTab=function(){window.open(t.src)},rmf.click=function(){t.click()},rmf.copyLink=function(){let e=t.src,o=document.createElement("textarea");o.value=e,document.body.appendChild(o),o.select(),document.execCommand("Copy"),document.body.removeChild(o),new Vue({data:function(){this.$notify({title:"哎嘿！复制成功🍬",message:"若要转载最好保留原文链接哦，给你一个大大的赞！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})},rmf.saveAs=function(){var e=document.createElement("a"),o=t.src,n=o.split("/")[-1];e.href=o,e.download=n,e.click(),window.URL.revokeObjectURL(o)}):"TEXTAREA"!=t.tagName&&"INPUT"!=t.tagName||($("#menu-paste").show(),rmf.paste=function(){navigator.permissions.query({name:"clipboard-read"}).then((e=>{"granted"==e.state||"prompt"==e.state?navigator.clipboard.readText().then((e=>{console.log(e),insertAtCursor(t,e)})):Snackbar.show({text:"请允许读取剪贴板！",pos:"top-center",showAction:!1})}))});let o=e.clientX+10,n=e.clientY,s=$("#rightMenu").width(),i=$("#rightMenu").height();return o+s>window.innerWidth&&(o-=s+10),n+i>window.innerHeight&&(n-=n+i-window.innerHeight),mask=setMask(),$(".rightMenu-item").click((()=>{$(".rmMask").attr("style","display: none")})),$(window).resize((()=>{rmf.showRightMenu(!1),$(".rmMask").attr("style","display: none")})),mask.onclick=()=>{$(".rmMask").attr("style","display: none")},rmf.showRightMenu(!0,n,o),$(".rmMask").attr("style","display: flex"),!1},window.addEventListener("click",(function(){rmf.showRightMenu(!1)}))}rmf.showRightMenu=function(e,t=0,o=0){let n=$("#rightMenu");n.css("top",t+"px").css("left",o+"px"),e?n.show():n.hide()},rmf.copyWordsLink=function(){let e=window.location.href,t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("Copy"),document.body.removeChild(t),new Vue({data:function(){this.$notify({title:"哎嘿！复制成功🍬",message:"若要转载最好保留原文链接哦，给你一个大大的赞！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})},rmf.switchReadMode=function(){const e=document.body;e.classList.add("read-mode");const t=document.createElement("button");t.type="button",t.className="fas fa-sign-out-alt exit-readmode",e.appendChild(t),t.addEventListener("click",(function o(){e.classList.remove("read-mode"),t.remove(),t.removeEventListener("click",o)}))},rmf.copySelect=function(){document.execCommand("Copy",!1,null),new Vue({data:function(){this.$notify({title:"哎嘿！复制成功🍬",message:"若要转载最好保留原文链接哦，给你一个大大的赞！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})},rmf.scrollToTop=function(){document.getElementsByClassName("menus_items")[1].setAttribute("style",""),document.getElementById("name-container").setAttribute("style","display:none"),btf.scrollToDest(0,500)},document.body.addEventListener("touchmove",(function(){}),{passive:!1}),navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||popupMenu();const box=document.documentElement;function addLongtabListener(e,t){let o=0;e.ontouchstart=()=>{o=0,o=setTimeout((()=>{t(),o=0}),380)},e.ontouchmove=()=>{clearTimeout(o),o=0},e.ontouchend=()=>{o&&clearTimeout(o)}}addLongtabListener(box,popupMenu),rmf.fullScreen=function(){document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},null==localStorage.getItem("mouse")&&localStorage.setItem("mouse","on");var mouseMode=localStorage.getItem("mouse");function changeMouseMode(){"on"==localStorage.getItem("mouse")?(mouseMode="off",localStorage.setItem("mouse","off"),debounce((function(){new Vue({data:function(){this.$notify({title:"切换右键模式成功🍔",message:"当前鼠标右键已恢复为系统默认！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})}),300)):(mouseMode="on",localStorage.setItem("mouse","on"),debounce((function(){new Vue({data:function(){this.$notify({title:"切换右键模式成功🍔",message:"当前鼠标右键已更换为网站指定样式！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})}),300))}