import {Lines} from '../../components/ContentLines';
import {PortfolioSections} from '../PortfolioSections';
import {useTemplateContent} from '../../content/cmsContent';
import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

import heroImg from '../../images/branding/limewood/featured.webp';
import brandPhilosophyImg from '../../images/branding/limewood/overview.webp';
import brandAnalysisImg from '../../images/branding/limewood/block.webp';
import biRenewalImg from '../../images/branding/limewood/detail-01.webp';
import guidelineImg from '../../images/branding/limewood/detail-02.webp';
import application01Img from '../../images/branding/limewood/mockup-01.webp';
import application02Img from '../../images/branding/limewood/mockup-02.webp';

// Image imports (Prepared as requested, using placeholders if files are missing)
// import finalImg from '../../images/branding/limewood/detail-01.webp';

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=1600';

const BrandRenewal = () => {
  const content = useTemplateContent("brand-renewal");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content) return null;
  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 font-sans">
      <Navigation />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={content.heroImage} 
            alt={"LIMEWOOD BRAND IDENTITY Hero"} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <Reveal>
            <div className="space-y-6 text-white">
              <span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase opacity-70 block">
                {"BRAND RENEWAL PROJECT"}</span>
              <h1 className="text-4xl md:text-7xl font-maruburi font-medium leading-tight tracking-tight"><Lines text={content.detailTitle}/></h1>
              <p className="text-base md:text-xl font-light opacity-80 max-w-2xl mx-auto"><Lines text={content.detailDesc} brClass="hidden md:block"/></p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-ink/5 pt-12 pb-24">
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base">{content.client}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base">{content.detailCategory}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base whitespace-pre-line"><Lines text={content.scope}/></p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base leading-relaxed"><Lines text={content.keywords}/></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PHILOSOPHY */}
      <PortfolioSections blocks={content.sections || []} />

      {/* 8. FINAL RESULT */}
      <Section className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[calc(10px+5pt)] font-bold tracking-[0.4em] uppercase opacity-30">{"Final Result"}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight"><Lines text={content.conclusionTitle}/></h2>
            </div>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-70"><Lines text={content.closingText}/></p>
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

export default BrandRenewal;
