var CountUp=function(a,n,t,e,i,r){var o=this;if(o.version=function(){return"1.9.2"},o.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(a,n,t,e){return t*(1-Math.pow(2,-10*a/e))*1024/1023+n},formattingFn:function(a){var n,t,e,i,r,s;if(a=a.toFixed(o.decimals),t=(n=(a+="").split("."))[0],e=n.length>1?o.options.decimal+n[1]:"",o.options.useGrouping){for(i="",r=0,s=t.length;r<s;++r)0!==r&&r%3==0&&(i=o.options.separator+i),i=t[s-r-1]+i;t=i}return o.options.numerals.length&&(t=t.replace(/[0-9]/g,(function(a){return o.options.numerals[+a]})),e=e.replace(/[0-9]/g,(function(a){return o.options.numerals[+a]}))),o.options.prefix+t+e+o.options.suffix},prefix:"",suffix:"",numerals:[]},r&&"object"==typeof r)for(var s in o.options)r.hasOwnProperty(s)&&null!==r[s]&&(o.options[s]=r[s]);""===o.options.separator?o.options.useGrouping=!1:o.options.separator=""+o.options.separator;for(var l=0,u=["webkit","moz","ms","o"],m=0;m<4&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[u[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[m]+"CancelAnimationFrame"]||window[u[m]+"CancelRequestAnimationFrame"];function d(a){return"number"==typeof a&&!isNaN(a)}window.requestAnimationFrame||(window.requestAnimationFrame=function(a,n){var t=(new Date).getTime(),e=Math.max(0,16-(t-l)),i=window.setTimeout((function(){a(t+e)}),e);return l=t+e,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),o.initialize=function(){return!(!o.initialized&&(o.error="",o.d="string"==typeof a?document.getElementById(a):a,o.d?(o.startVal=+n,o.endVal=+t,d(o.startVal)&&d(o.endVal)?(o.decimals=Math.max(0,e||0),o.dec=Math.pow(10,o.decimals),o.duration=1e3*+i||2e3,o.countDown=o.startVal>o.endVal,o.frameVal=o.startVal,o.initialized=!0,0):(o.error="[CountUp] startVal ("+n+") or endVal ("+t+") is not a number",1)):(o.error="[CountUp] target is null or undefined",1)))},o.printValue=function(a){var n=o.options.formattingFn(a);"INPUT"===o.d.tagName?this.d.value=n:"text"===o.d.tagName||"tspan"===o.d.tagName?this.d.textContent=n:this.d.innerHTML=n},o.count=function(a){o.startTime||(o.startTime=a),o.timestamp=a;var n=a-o.startTime;o.remaining=o.duration-n,o.frameVal=o.options.useEasing?o.countDown?o.startVal-o.options.easingFn(n,0,o.startVal-o.endVal,o.duration):o.options.easingFn(n,o.startVal,o.endVal-o.startVal,o.duration):o.countDown?o.startVal-n/o.duration*(o.startVal-o.endVal):o.startVal+n/o.duration*(o.endVal-o.startVal),o.frameVal=o.countDown?o.frameVal<o.endVal?o.endVal:o.frameVal:o.frameVal>o.endVal?o.endVal:o.frameVal,o.frameVal=Math.round(o.frameVal*o.dec)/o.dec,o.printValue(o.frameVal),n<o.duration?o.rAF=requestAnimationFrame(o.count):o.callback&&o.callback()},o.start=function(a){o.initialize()&&(o.callback=a,o.rAF=requestAnimationFrame(o.count))},o.pauseResume=function(){o.paused?(o.paused=!1,delete o.startTime,o.duration=o.remaining,o.startVal=o.frameVal,requestAnimationFrame(o.count)):(o.paused=!0,cancelAnimationFrame(o.rAF))},o.reset=function(){o.paused=!1,delete o.startTime,o.initialized=!1,o.initialize()&&(cancelAnimationFrame(o.rAF),o.printValue(o.startVal))},o.update=function(a){o.initialize()&&(d(a=+a)?(o.error="",a!==o.frameVal&&(cancelAnimationFrame(o.rAF),o.paused=!1,delete o.startTime,o.startVal=o.frameVal,o.endVal=a,o.countDown=o.startVal>o.endVal,o.rAF=requestAnimationFrame(o.count))):o.error="[CountUp] update() - new endVal is not a number: "+a)},o.initialize()&&o.printValue(o.startVal)};