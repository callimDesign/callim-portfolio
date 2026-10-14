import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Common';
import { getJournalById } from './journalData';
import journalHeroImage1 from "../../images/journal/dongjaseok-museum/dongjaseok-museum-01.jpg";
import journalHeroImage2 from "../../images/journal/dongjaseok-museum/dongjaseok-museum-02.jpg";

const DongjaseokMuseum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = getJournalById('dongjaseok-museum');

  if (!journal) {
    return null;
  }

  return (
    <div className="bg-brand-bg min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-48 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <Reveal>
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40">Journal</span>
            <h1 className="text-4xl md:text-5xl serif-kor leading-tight text-brand-ink/90 whitespace-pre-line">
              {journal.detailTitle || journal.title}
            </h1>
            <div className="flex items-center gap-4 text-xs font-bold opacity-30">
              <span>{journal.date}</span>
              <div className="w-8 h-px bg-brand-ink/20" />
              <span>By Calli-M</span>
            </div>
            <p className="text-lg opacity-70 serif-kor leading-relaxed max-w-2xl whitespace-pre-line">
              {journal.detailDesc || journal.desc}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Image Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal delay={0.2}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage1} 
                alt="국립중앙박물관에 전시된 동자석 인형 키링" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage2} 
                alt="국립중앙박물관 상품관에 진열된 동자석 인형 키링 패키지" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <Reveal delay={0.4}>
            <p className="text-brand-accent serif-kor text-xl md:text-2xl leading-relaxed italic whitespace-pre-line">
              “제주의 작은 수호자를{"\n"}일상에 함께하는 디자인으로.{"\n"}우리의 문화와 이야기를 전합니다.”
            </p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80">
          <Reveal delay={0.5}>
            <p>2026 뮷즈 공모에 선정된 캘리엠의 동자석 인형 키링을 만나기 위해 국립중앙박물관을 방문했습니다. 직접 기획하고 디자인한 상품이 관람객들을 만나는 현장을 확인하는 특별한 시간이었습니다.</p>
          </Reveal>
          <Reveal delay={0.6}>
            <p>박물관과 상품관은 많은 국내외 방문객으로 활기를 띠고 있었습니다. 문화유산을 새롭게 해석한 상품을 살펴보고 고르는 사람들의 모습에서, 뮷즈가 박물관 관람의 또 다른 즐거움으로 자리 잡고 있음을 느꼈습니다.</p>
          </Reveal>
          <Reveal delay={0.7}>
            <p>다양한 상품 사이에 진열된 동자석 인형 키링을 마주하니 공모 선정 당시와는 또 다른 기쁨이 다가왔습니다. 많은 사람들이 문화를 즐기는 현장에 캘리엠의 디자인도 함께하고 있다는 사실이 반갑고 감사했습니다.</p>
          </Reveal>
          <Reveal delay={0.8}>
            <p>동자석 인형 키링은 제주 동자석을 모티프로 탄생했습니다. 위로와 수호의 의미를 담아, 어디서든 곁에 둘 수 있는 작은 인형 키링으로 재해석했습니다. 앞으로도 우리의 문화와 이야기를 캘리엠만의 감성으로 전하는 디자인을 이어가겠습니다.</p>
          </Reveal>
        </div>
      </section>

      {/* Footer / Back Button */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <Link 
            to="/journals" 
            className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] hover:gap-6 transition-all border-b border-brand-ink/30 pb-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Journals
          </Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default DongjaseokMuseum;
