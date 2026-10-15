function installMenuGroups(){
 const style=document.createElement('style');
 style.textContent=`.callim-portfolio-item{padding-left:28px!important}.callim-portfolio-first{position:relative;padding-top:42px!important}.callim-portfolio-first::before{content:'Portfolio';position:absolute;top:10px;left:12px;font-weight:700;color:#28343a;pointer-events:none}.callim-journals-item{margin-top:12px!important;font-weight:700}`;
 document.head.appendChild(style);
 const update=()=>{for(const name of ['branding','package','project','products','journals']){for(const link of document.querySelectorAll('a[href]')){if(link.getAttribute('href')!==('#/collections/'+name))continue;link.classList.add(name==='journals'?'callim-journals-item':'callim-portfolio-item');if(name==='branding')link.classList.add('callim-portfolio-first');}}};
 new MutationObserver(update).observe(document.body,{childList:true,subtree:true});update();
}
