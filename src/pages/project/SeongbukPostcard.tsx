import {useTemplateContent} from '../../content/cmsContent';
import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

// Imported real postcard assets
import postcard1 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (1).webp';
import postcard2 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (2).webp';
import postcard3 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (3).webp';
import postcard4 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (4).webp';
import postcard5 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (5).webp';
import postcard6 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (6).webp';
import postcard7 from '../../images/journal/seongbuk-dong-postcard/seongbuk-dong-postcard (7).webp';
import mobileHero from '../../images/journal/seongbuk-dong-postcard/mobile-hero.webp';

const SeongbukPostcard = () => {
  const content = useTemplateContent("seongbuk-postcard");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!content) return null;
  return (
    <div className="bg-brand-bg min-h-screen selection:bg-brand-accent/20 font-sans">
      <Navigation />

      {/* 01 HERO SECTION */}
      <section className="relative h-[78vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0">
          {/* Mobile Hero Image (mobileHero) */}
          <img 
            src={content.content["image_01"]} 
            alt={content.content["alt_02"]} 
            className="block md:hidden w-full h-full object-cover object-center"
          />
          {/* Desktop Hero Image (postcard1) */}
          <img 
            src={content.content["image_03"]} 
            alt={content.content["alt_04"]} 
            className="hidden md:block w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10 z-20" />
        </div>
      </section>

      {/* PROJECT INTRO & OVERVIEW SECTION */}
      <section className="pt-10 md:pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Intro Information */}
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center pb-8 md:pb-16">
              <div className="space-y-12">
                <span 
                  className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  {content.content["text_05"]}</span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]">
                    {content.content["text_06"]}</h1>
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-40">
                    {content.content["text_07"]}</p>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left break-keep">
                  {content.content["text_08"]}</p>
              </div>
            </div>
          </Reveal>

          {/* Overview Info Bar */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 border-t border-brand-ink/5 pt-8 pb-8 md:pt-12 md:pb-24">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans font-medium">{content.content["text_09"]}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans font-medium">{content.content["text_10"]}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans font-medium whitespace-pre-line">{content.content["text_11"]}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans font-medium leading-relaxed">{content.content["text_12"]}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECT MESSAGE */}
      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_13"]}</h3>
            <div className="space-y-4 md:space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 break-keep">
              <p>
                {content.content["text_14"]}</p>
              <p>
                {content.content["text_15"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 02 Section 01: 골목과 따뜻한 느낌의 연출컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_16"]} alt={content.content["alt_17"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_18"]} alt={content.content["alt_19"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_20"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 border-b border-brand-ink/5 pb-8 md:pb-16 text-center break-keep">
              {content.content["text_21"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 03 Section 02: 엽서 실물 느낌의 카드 연출 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_22"]} alt={content.content["alt_23"]} className="w-full h-full object-cover object-center" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_24"]} alt={content.content["alt_25"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_26"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 border-b border-brand-ink/5 pb-8 md:pb-16 text-center break-keep">
              {content.content["text_27"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 04 Section 03: 일상의 작고 따뜻한 순간들의 모음 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_28"]} alt={content.content["alt_29"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_30"]} alt={content.content["alt_31"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_32"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70 break-keep">
              {content.content["text_33"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* FINAL MESSAGE */}
      <Section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center text-brand-ink">
        <Reveal>
          <div className="space-y-7 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">{content.content["text_34"]}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                {content.content["text_35"]}</h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70 break-keep">
              <p>{content.content["text_36"]}</p>
              <p>{content.content["text_37"]}</p>
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

export default SeongbukPostcard;
