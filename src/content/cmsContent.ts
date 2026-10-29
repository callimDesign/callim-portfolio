import {comparePublished} from './authoring.mjs';
import {useParams} from 'react-router-dom';
const files=import.meta.glob(['./portfolio/**/*.json','./journals/**/*.json','./products/*.json'],{eager:true,import:'default'}) as Record<string,any>;
export const entries=Object.entries(files).map(([p,d])=>({...d,...(d.layout?.[0]?.type==='journal-default'?d.layout[0]:{}),template:d.layout?.[0]?.type||d.template,content:d._legacy||d.layout?.[0]||d.content,id:d.id??p.split('/').pop()!.replace(/\.json$/,''),kind:p.split('/')[1]}));
export const allJournals=entries.filter(x=>x.kind==='journals').sort((a,b)=>{
  const byDate=String(b.date||'').localeCompare(String(a.date||''));
  return byDate||comparePublished(a,b);
}).map(x=>({...x,link:x.link||'/journal/'+x.id}));
export const cmsProducts=entries.filter(x=>x.kind==='products').sort(comparePublished);
export function portfolioList(category:string,original:any[]){const current=entries.filter(x=>x.kind==='portfolio'&&x.category===category).sort(comparePublished).map((x,index)=>({...x,isFeatured:index===0,slug:x.route||'/portfolio/'+x.id,link:x.route||'/portfolio/'+x.id}));return [...current,...original.filter(x=>x.isPlaceholder)];}
export let previewContent:any=null;
export function setPreviewContent(value:any){const block=value?.layout?.[0];const template=block?.type||value?.template;const base=entries.find(x=>x.template===template);previewContent=value?{...base,...value,...(template==='journal-default'?block:{}),template,content:{...base?.content,...value._legacy,...block,...value.content}}:null;}
export function useTemplateContent(template:string){const {slug}=useParams();return previewContent||entries.find(x=>x.id===(slug||template));}
