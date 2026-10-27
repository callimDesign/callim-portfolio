import {Hero} from './Home';
import {useEffect,useState} from 'react';
import TemplateDetail from './TemplateDetail';
import Product from './Product';
import {setPreviewContent} from '../content/cmsContent';
export default function ContentPreview(){const [post,setPost]=useState<any>(null);useEffect(()=>{const receive=(event:MessageEvent)=>{if(event.origin!==location.origin||(event.source!==window.parent&&event.source!==window.top)||event.data?.type!=='callim-journal-preview')return;setPreviewContent(event.data.post);setPost(event.data.post);};window.addEventListener('message',receive);window.top?.postMessage({type:'callim-preview-ready'},location.origin);return()=>{window.removeEventListener('message',receive);setPreviewContent(null);};},[]);return !post?<p>입력 내용을 기다리고 있습니다.</p>:post.template==='home-hero'?<Hero settings={post}/>:post.storeUrl?<Product key={JSON.stringify(post)} previewProduct={post}/>:<TemplateDetail key={post.template||'journal'}/>;}
