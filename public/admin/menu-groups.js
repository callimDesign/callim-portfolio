function installMenuGroups(){
 const style=document.createElement('style');
 style.textContent=`.callim-portfolio-item{padding-left:28px!important}.callim-portfolio-heading{display:block;position:relative;padding:16px 12px 8px;font-weight:700;color:#28343a;pointer-events:none}.callim-journals-item{margin-top:12px!important;font-weight:700}`;
 document.head.appendChild(style);
 const update=()=>{for(const name of ['branding','package','project','products','journals']){for(const link of document.querySelectorAll('a[href]')){if(link.getAttribute('href')!==('#/collections/'+name))continue;link.classList.add(name==='journals'?'callim-journals-item':'callim-portfolio-item');if(name==='branding'&&!link.previousElementSibling?.classList.contains('callim-portfolio-heading')){const heading=document.createElement('div');heading.className='callim-portfolio-heading';heading.textContent='Portfolio';link.before(heading);}}}};
 new MutationObserver(update).observe(document.body,{childList:true,subtree:true});update();
}
