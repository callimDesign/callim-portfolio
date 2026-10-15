import CmsPortfolioDetail from './CmsPortfolioDetail';
import {useParams} from 'react-router-dom';
import {entries,previewContent} from '../content/cmsContent';
import CmsJournalDetail from './journals/CmsJournalDetail';
import BrandRenewal from "./branding/BrandRenewal";
import HonestKFood from "./package/HonestKFood";
import LiteracyArtExhibition from "./project/LiteracyArtExhibition";
import GoyangFlowerTea from "./project/GoyangFlowerTea";
import SeongbukPostcard from "./project/SeongbukPostcard";
import FamilyMonth from "./journals/familymonth";
import PrintersDay from "./journals/goyang-2025-printer's-day";
import PopupCard from "./journals/popupcard";
import Museum from "./journals/dongjaseok-museum";
import Selection from "./journals/dongjaseok-muds-selection";
import Exhibition from "./journals/exhibitionBetweenPoemAndCup";
import Voucher from "./journals/innovationVoucherBrandSupport";
const templates:Record<string,any>={"brand-renewal":BrandRenewal,"honest-k-food":HonestKFood,"literacy-art-exhibition":LiteracyArtExhibition,"goyang-flower-tea":GoyangFlowerTea,"seongbuk-postcard":SeongbukPostcard,"family-month-envelope":FamilyMonth,"goyang-2025-printer-day":PrintersDay,"popup-message-card":PopupCard,"dongjaseok-museum":Museum,"dongjaseok-muds-selection":Selection,"exhibition-between-poem-and-cup":Exhibition,"voucher-final-approval":Voucher};
export default function TemplateDetail(){const {slug}=useParams();const post=previewContent||entries.find(x=>x.id===slug);const Component=templates[post?.template];return post?.template==='portfolio-default'?<CmsPortfolioDetail post={post}/>:Component?<Component/>:post?<CmsJournalDetail previewPost={post}/>:<p>게시글을 찾을 수 없습니다.</p>;}
