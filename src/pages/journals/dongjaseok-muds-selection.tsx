import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Common';
import { getJournalById } from './journalData';
import journalHeroImage1 from "../../images/journal/dongjaseok-muds-selection/dongjaseok-muds-selection-01.jpg";
import journalHeroImage2 from "../../images/journal/dongjaseok-muds-selection/dongjaseok-muds-selection-02.jpg";

const DongjaseokMudsSelection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = getJournalById('dongjaseok-muds-selection');

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
                alt="초록 배경의 동자석 인형 키링 패키지" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={journalHeroImage2} 
                alt="바닷가 바위 위의 동자석 인형 키링" 
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
              “나를 지켜주는 작은 수호자.{"\n"}문화유산의 의미를{"\n"}오늘의 일상으로 이어갑니다.”
            </p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80">
          <Reveal delay={0.5}>
            <p>캘리엠의 동자석 인형 키링이 2026년 국립중앙박물관 뮷즈(MU:DS) 공모 상품으로 선정되었습니다. 이번 상품은 문화유산이 가진 의미를 일상에서도 자연스럽게 전하고자 하는 마음에서 시작했습니다.</p>
          </Reveal>
          <Reveal delay={0.6}>
            <p>제주 전통 장묘문화의 어린아이 형상 석인상인 동자석은 수호와 위로의 의미를 담고 있습니다. 캘리엠은 그중 곁을 지키는 수호자의 의미에 주목해, 일상에서 함께할 수 있는 인형 키링으로 재해석했습니다.</p>
          </Reveal>
          <Reveal delay={0.7}>
            <p>개발 과정에서는 형태뿐 아니라 그 안에 담긴 마음을 표현하는 데 집중했습니다. 여러 차례 수정하며 부드러운 표정과 편안한 눈매, 손을 모은 자세로 작은 수호자의 모습을 완성했습니다.</p>
          </Reveal>
          <Reveal delay={0.8}>
            <p>패키지에도 ‘My little guardian’이라는 메시지를 담았습니다. 가방이나 파우치, 열쇠에 달아 함께하는 이 작은 수호자가 위로와 응원을 전하기를 바랍니다.</p>
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

export default DongjaseokMudsSelection;
