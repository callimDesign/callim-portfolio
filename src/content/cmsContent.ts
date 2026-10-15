import {useParams} from 'react-router-dom';
const files=import.meta.glob(['./portfolio/**/*.json','./journals/**/*.json','./products/*.json'],{eager:true,import:'default'}) as Record<string,any>;
export const entries=Object.entries(files).map(([p,d])=>({...d,...(d.layout?.[0]?.type==='journal-default'?d.layout[0]:{}),template:d.layout?.[0]?.type||d.template,content:d._legacy||d.layout?.[0]||d.content,id:d.id??p.split('/').pop()!.replace(/\.json$/,''),kind:p.split('/')[1]}));
export const allJournals=entries.filter(x=>x.kind==='journals').sort((a,b)=>b.date.localeCompare(a.date)).map(x=>({...x,link:x.link||'/journal/'+x.id}));
export const cmsProducts=entries.filter(x=>x.kind==='products');
export function portfolioList(category:string,original:any[]){const current=entries.filter(x=>x.kind==='portfolio'&&x.category===category);const seen=new Set<string>();const result=original.map(item=>{const id=(item.slug||item.link||'').split('/').pop();const entry=current.find(x=>x.id===id);if(entry){seen.add(id);return {...item,...entry,id:item.id,slug:entry.route,link:entry.route};}return item.isPlaceholder?item:null;}).filter(Boolean);return [...result,...current.filter(x=>!seen.has(x.id)).map(x=>({...x,slug:'/portfolio/'+x.id,link:'/portfolio/'+x.id}))];}
export let previewContent:any=null;
export function setPreviewContent(value:any){const block=value?.layout?.[0];const template=block?.type||value?.template;const base=entries.find(x=>x.template===template);previewContent=value?{...base,...value,...(template==='journal-default'?block:{}),template,content:{...base?.content,...value._legacy,...block,...value.content}}:null;}
export function useTemplateContent(template:string){const {slug}=useParams();return previewContent||entries.find(x=>x.id===(slug||template));}
