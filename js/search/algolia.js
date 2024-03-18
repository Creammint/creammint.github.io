window.addEventListener("load",(()=>{const e=document.getElementById("search-mask"),t=document.querySelector("#algolia-search .search-dialog"),a=()=>{const a=document.body.style;a.width="100%",a.overflow="hidden",btf.animateIn(e,"to_show 0.5s"),btf.animateIn(t,"titleScale 0.5s"),setTimeout((()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()}),100),document.addEventListener("keydown",(function e(t){"Escape"===t.code&&(n(),document.removeEventListener("keydown",e))})),i(),window.addEventListener("resize",i)},n=()=>{const a=document.body.style;a.width="",a.overflow="",btf.animateOut(t,"search_close .5s"),btf.animateOut(e,"to_hide 0.5s"),window.removeEventListener("resize",i)},i=()=>{window.innerWidth<768&&t.style.setProperty("--search-height",window.innerHeight+"px")},s=()=>{btf.addEventListenerPjax(document.querySelector("#search-button > .search"),"click",a)},o=e=>{if(""===e)return"";const t=e.indexOf("<mark>");let a=t-30,n=t+120,i="",s="";a<=0?(a=0,n=140):i="...",n>e.length?n=e.length:s="...";return i+e.substring(a,n)+s},l=GLOBAL_CONFIG.algolia;if(!(l.appId&&l.apiKey&&l.indexName))return console.error("Algolia setting is invalid!");const r=instantsearch({indexName:l.indexName,searchClient:algoliasearch(l.appId,l.apiKey),searchFunction(e){e.state.query&&e.search()}}),c=instantsearch.widgets.configure({hitsPerPage:5}),d=instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder,showLoadingIndicator:!0}),h=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){const t=e.permalink?e.permalink:GLOBAL_CONFIG.root+e.path,a=e._highlightResult,n=a.contentStripTruncate?o(a.contentStripTruncate.value):a.contentStrip?o(a.contentStrip.value):a.content?o(a.content.value):"";return`\n          <a href="${t}" class="algolia-hit-item-link">\n          <span class="algolia-hits-item-title">${a.title.value||"no-title"}</span>\n          <p class="algolia-hit-item-content">${n}</p>\n          </a>`},empty:function(e){return'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}}}),g=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){return"<hr>"+GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}}}),u=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),p=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="fas fa-angle-double-left"></i>',last:'<i class="fas fa-angle-double-right"></i>',previous:'<i class="fas fa-angle-left"></i>',next:'<i class="fas fa-angle-right"></i>'}});r.addWidgets([c,d,h,g,u,p]),r.start(),s(),e.addEventListener("click",n),document.querySelector("#algolia-search .search-close-button").addEventListener("click",n),window.addEventListener("pjax:complete",(()=>{!btf.isHidden(e)&&n(),s()})),window.pjax&&r.on("render",(()=>{window.pjax.refresh(document.getElementById("algolia-hits"))}))}));