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
            src={content.content["image_01"]} 
            alt={content.content["alt_02"]} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 z-10" />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-6">
          <Reveal>
            <div className="space-y-6 text-white">
              <span className="text-xs md:text-sm font-bold tracking-[0.5em] uppercase opacity-70 block">
                {content.content["text_03"]}</span>
              <h1 className="text-4xl md:text-7xl font-maruburi font-medium leading-tight tracking-tight">
                {content.content["text_04"]}<br /> {content.content["text_05"]}</h1>
              <p className="text-base md:text-xl font-light opacity-80 max-w-2xl mx-auto">
                {content.content["text_06"]}<br className="hidden md:block" />
                {content.content["text_07"]}</p>
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
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base">{content.content["text_08"]}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base">{content.content["text_09"]}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base whitespace-pre-line">{content.content["text_10"]}{"\n"}{content.content["text_11"]}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base leading-relaxed">{content.content["text_12"]}{"\n"}{content.content["text_13"]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND PHILOSOPHY */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["image_14"]} 
              alt={content.content["alt_15"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              {content.content["text_16"]}</h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                {content.content["text_17"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4. BRAND ANALYSIS */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["image_18"]} 
              alt={content.content["alt_19"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              {content.content["text_20"]}</h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                {content.content["text_21"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 5. BI / CI RENEWAL */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["image_22"]} 
              alt={content.content["alt_23"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              {content.content["text_24"]}</h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                {content.content["text_25"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 6. BRAND GUIDELINE */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["image_26"]} 
              alt={content.content["alt_27"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              {content.content["text_28"]}</h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              <p>
                {content.content["text_29"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 7. APPLICATION DESIGN */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_30"]} alt={content.content["alt_31"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_32"]} alt={content.content["alt_33"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug">
              {content.content["text_34"]}</h2>
            <p className="text-base md:text-lg font-light leading-relaxed opacity-70">
             {content.content["text_35"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 8. FINAL RESULT */}
      <Section className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">{content.content["text_36"]}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                {content.content["text_37"]}</h2>
            </div>
            <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              {content.content["text_38"]}</p>
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
