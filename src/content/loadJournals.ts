export interface CmsJournal {
 slug: string; title: string; date: string; desc: string; detailTitle?: string; detailDesc?: string;
 image: string; leftImage: string; rightImage: string; leftAlt: string; rightAlt: string; quote: string; paragraphs: string[];
}
const files=import.meta.glob('./journals/*.json',{eager:true,import:'default'}) as Record<string,CmsJournal>;
export const cmsJournals=Object.entries(files).map(([path,data])=>({...data,id:data.slug||path.split('/').pop()!.replace(/\.json$/,''),link:'/journal/'+(data.slug||path.split('/').pop()!.replace(/\.json$/,''))}));