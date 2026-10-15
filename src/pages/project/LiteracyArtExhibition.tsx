import {Lines} from '../../components/ContentLines';
import {PortfolioSections} from '../PortfolioSections';
import {useTemplateContent} from '../../content/cmsContent';
import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

// Images
import heroPoster from '../../images/project/literacy-art-exhibition/featured.webp';
import heroPosterMobile from '../../images/project/literacy-art-exhibition/featured_mobile.webp';
import posterHorizontal from '../../images/project/literacy-art-exhibition/poster-horizontal.webp';
import posterVertical from '../../images/project/literacy-art-exhibition/poster-vertical.webp';
import calendarGrid from '../../images/project/literacy-art-exhibition/calendar-grid.webp';
import calendarDetail01 from '../../images/project/literacy-art-exhibition/calendar-detail-01.webp';
import calendarDetail02 from '../../images/project/literacy-art-exhibition/calendar-detail-02.webp';


const LiteracyArtExhibition = () => {
  const content = useTemplateContent("literacy-art-exhibition");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content) return null;
  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 font-sans">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative h-[78vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={content.heroMobileImage || content.heroImage} 
            alt={"Literacy Art Exhibition Hero Mobile"} 
            className="md:hidden w-full h-full object-cover object-center"
          />
          <img 
            src={content.heroImage} 
            alt={"Literacy Art Exhibition Hero"} 
            className="hidden md:block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 z-20" />
        </div>
      </section>

      {/* 2. PROJECT INTRO & OVERVIEW SECTION */}
      <section className="pt-10 md:pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Intro Information */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center pb-8 md:pb-16">
              <div className="space-y-12">
                <span 
                  className="text-[calc(10px+5pt)] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  {"Project Design Portfolio"}</span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]"><Lines text={content.detailTitle}/></h1>
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-40">
                    {"LITERACY ART EXHIBITION"}</p>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left"><Lines text={content.detailDesc}/></p>
              </div>
            </div>
          </Reveal>

          {/* Overview Info Bar */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 border-t border-brand-ink/5 pt-8 pb-8 md:pt-12 md:pb-24">
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans font-medium">{content.client}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans font-medium">{content.detailCategory}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans font-medium whitespace-pre-line"><Lines text={content.scope}/></p>
              </div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans font-medium leading-relaxed"><Lines text={content.keywords}/></p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PROJECT MESSAGE */}
      <PortfolioSections blocks={content.sections || []} />

      {/* 7. FINAL MESSAGE */}
      <Section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center text-brand-ink">
        <Reveal>
          <div className="space-y-7 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[calc(10px+5pt)] font-bold tracking-[0.4em] uppercase opacity-30">{"Final Message"}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight"><Lines text={content.conclusionTitle}/></h2>
            </div>
            <div className="space-y-6 text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              <p>{"배움에는 나이가 없고, 한 사람의 이야기는 언제든 다시 시작될 수 있습니다."}</p>
              <p><Lines text={content.closingText}/></p>
            </div>
            <div className="pt-8">
              <div className="w-1 h-24 bg-brand-accent/20 mx-auto" />
            </div>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </div>
  );
};

export default LiteracyArtExhibition;
