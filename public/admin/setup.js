const localMode=['localhost','127.0.0.1','[::1]'].includes(location.hostname);
if(!window.CMS){document.body.textContent='글쓰기 도구를 불러오지 못했습니다. 인터넷 연결을 확인해 주세요.';}
else {
 CMS.init({config:{load_config_file:false,locale:'ko',backend:localMode?{name:'git-gateway'}:{name:'github',repo:'callimDesign/callim-portfolio',branch:'main',base_url:location.origin,auth_endpoint:'api/auth'},...(localMode?{local_backend:{url:'http://127.0.0.1:8082/api/v1'}}:{publish_mode:'editorial_workflow'}),media_folder:'public/media',public_folder:'/media',collections:[{
 name:'journals',label:'Journals · 저널',folder:'src/content/journals',create:true,format:'json',identifier_field:'title',slug:'{{fields.date}}-{{slug}}',
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
 const Preview=window.createClass({componentDidMount(){this.receive=e=>{if(e.origin===location.origin&&e.source===this.frame?.contentWindow&&e.data?.type==='callim-preview-ready')this.send();};window.addEventListener('message',this.receive);this.retry=setInterval(()=>this.send(),1500);},componentWillUnmount(){window.removeEventListener('message',this.receive);clearInterval(this.retry);},componentDidUpdate(){this.send();},send(){if(!this.frame)return;const post=this.props.entry.get('data').toJS();for(const field of ['image','leftImage','rightImage']){if(post[field])post[field]=String(this.props.getAsset(post[field]));}this.frame.contentWindow.postMessage({type:'callim-journal-preview',post},location.origin);},render(){return window.h('iframe',{title:'기존 홈페이지 미리보기',src:'/content-preview',ref:frame=>this.frame=frame,onLoad:()=>this.send(),style:{width:'100%',height:'1100px',border:0}});}});
 CMS.registerPreviewTemplate('journals',Preview);
}