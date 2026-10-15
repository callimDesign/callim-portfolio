import {Fragment} from 'react';
export function Lines({text,brClass}:{text?:string;brClass?:string}){return <>{String(text||'').split('\n').map((line,index)=><Fragment key={index}>{index>0&&<br className={brClass}/ >}{line}</Fragment>)}</>;}
