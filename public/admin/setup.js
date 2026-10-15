(async()=>{
const localMode=['localhost','127.0.0.1','[::1]'].includes(location.hostname);
if(!window.CMS){document.body.textContent='글쓰기 도구를 불러오지 못했습니다. 인터넷 연결을 확인해 주세요.';}
else {
 const templates=await (await fetch('/admin/templates.json')).json();
 const baseFields=[{name:'title',label:'목록 제목',widget:'string'},{name:'desc',label:'목록 소개글',widget:'text'},{name:'image',label:'목록 썸네일',widget:'image'}];
 const templateCollections=templates.map(t=>({name:t.id,label:(t.kind==='portfolio'?'Portfolio · ':'Journals · ')+t.label,folder:'src/content/'+t.kind+'/'+t.id,create:true,format:'json',identifier_field:'title',slug:'{{slug}}',fields:[{name:'template',widget:'hidden',default:t.id},...baseFields,...(t.kind==='journals'?[{name:'date',label:'작성일',widget:'datetime',format:'YYYY.MM.DD',date_format:'YYYY.MM.DD',time_format:false},{name:'detailTitle',label:'상세 제목',widget:'text',required:false},{name:'detailDesc',label:'상세 소개글',widget:'text',required:false}]:[{name:'category',widget:'hidden',default:t.id==='brand-renewal'?'branding':t.id==='honest-k-food'?'package':'project'},{name:'year',label:'연도',widget:'number',value_type:'int'},{name:'isFeatured',label:'대표 콘텐츠',widget:'boolean',required:false,default:false}]),{name:'content',label:'상세 글·사진 · 화면 순서',widget:'object',fields:t.fields}]}));
 const productCollection={name:'products',label:'Portfolio · Products',folder:'src/content/products',create:true,format:'json',identifier_field:'title',slug:'{{slug}}',fields:[...baseFields,{name:'category',label:'분류',widget:'select',options:[{label:'카드',value:'card'},{label:'엽서',value:'postcard'},{label:'봉투',value:'envelope'},{label:'라이프스타일',value:'lifestyle'}]},{name:'year',label:'연도',widget:'number',value_type:'int'},{name:'isFeatured',label:'대표 상품',widget:'boolean',required:false,default:false},{name:'size',label:'크기',widget:'string'},{name:'keywords',label:'키워드',widget:'list'},{name:'storeUrl',label:'구매 링크',widget:'string'}]};
 CMS.init({config:{load_config_file:false,locale:'ko',backend:localMode?{name:'git-gateway'}:{name:'github',repo:'callimDesign/callim-portfolio',branch:'main',base_url:location.origin,auth_endpoint:'api/auth'},...(localMode?{local_backend:{url:'http://127.0.0.1:8082/api/v1'}}:{publish_mode:'editorial_workflow'}),media_folder:'public/media',public_folder:'/media',collections:[...templateCollections,productCollection,{
 name:'journals',label:'Journals · 저널',folder:'src/content/journals/new',create:true,format:'json',identifier_field:'title',slug:'{{fields.date}}-{{slug}}',
 description:'초안 저장 후 게시할 수 있습니다. 기존 글의 관리자 편집 이전은 준비 중입니다.',
 fields:[
 {label:'목록 제목',name:'title',widget:'string'},
 {label:'작성일',name:'date',widget:'datetime',format:'YYYY.MM.DD',date_format:'YYYY.MM.DD',time_format:false},
 {label:'목록 소개글',name:'desc',widget:'text'},
 {label:'상세 제목 · 줄바꿈 가능',name:'detailTitle',widget:'text',required:false},
 {label:'상세 소개글',name:'detailDesc',widget:'text',required:false},
 {label:'목록 썸네일',name:'image',widget:'image'},
 {label:'상세 왼쪽 사진',name:'leftImage',widget:'image'},
 {label:'왼쪽 사진 설명',name:'leftAlt',widget:'string'},
 {label:'상세 오른쪽 사진',name:'rightImage',widget:'image'},
 {label:'오른쪽 사진 설명',name:'rightAlt',widget:'string'},
 {label:'본문 옆 강조 문구',name:'quote',widget:'text'},
 {label:'본문 · 문단 순서대로',name:'paragraphs',widget:'list',field:{label:'문단',name:'text',widget:'text'}}
 ]}]}});
 const Preview=window.createClass({componentDidMount(){this.receive=e=>{if(e.origin===location.origin&&e.source===this.frame?.contentWindow&&e.data?.type==='callim-preview-ready')this.send();};window.addEventListener('message',this.receive);this.retry=setInterval(()=>this.send(),1500);},componentWillUnmount(){window.removeEventListener('message',this.receive);clearInterval(this.retry);},componentDidUpdate(){this.send();},send(){if(!this.frame)return;const post=this.props.entry.get('data').toJS();const resolve=(obj)=>{for(const key in obj){if(obj[key]&&typeof obj[key]==='object')resolve(obj[key]);else if(typeof obj[key]==='string'&&(key==='image'||key.includes('Image')||key.startsWith('image_')||key.startsWith('package_image_')))obj[key]=String(this.props.getAsset(obj[key]));}};resolve(post);this.frame.contentWindow.postMessage({type:'callim-journal-preview',post},location.origin);},render(){return window.h('iframe',{title:'기존 홈페이지 미리보기',src:'/content-preview',ref:frame=>this.frame=frame,onLoad:()=>this.send(),style:{width:'100%',height:'1100px',border:0}});}});
 CMS.registerPreviewTemplate('journals',Preview);
 for(const t of templates)CMS.registerPreviewTemplate(t.id,Preview);
 CMS.registerPreviewTemplate('products',Preview);
}
})();
