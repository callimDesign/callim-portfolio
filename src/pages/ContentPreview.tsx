import {useEffect,useState} from 'react';
import CmsJournalDetail from './journals/CmsJournalDetail';
import type {CmsJournal} from '../content/loadJournals';
export default function ContentPreview(){
 const [post,setPost]=useState<Partial<CmsJournal>|null>(null);
 useEffect(()=>{const receive=(event:MessageEvent)=>{if(event.origin!==location.origin||(event.source!==window.parent&&event.source!==window.top)||event.data?.type!=='callim-journal-preview')return;setPost(event.data.post);};window.addEventListener('message',receive);window.top?.postMessage({type:'callim-preview-ready'},location.origin);return()=>window.removeEventListener('message',receive);},[]);
 return post?<CmsJournalDetail previewPost={post}/>:<p>관리자 입력 내용을 기다리는 미리보기입니다. 저장하거나 게시하지 않습니다.</p>;
}