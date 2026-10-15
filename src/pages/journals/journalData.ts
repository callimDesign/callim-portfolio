import {allJournals} from '../../content/cmsContent';
export interface JournalEntry {id:string;date:string;title:string;detailTitle?:string;desc:string;detailDesc?:string;link?:string;image:string;}
export const journalList:JournalEntry[]=allJournals;
export const getJournalById=(id:string)=>journalList.find(x=>x.id===id);
