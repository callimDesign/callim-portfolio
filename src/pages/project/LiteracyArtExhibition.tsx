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
            src={content.content["image_01"]} 
            alt={content.content["alt_02"]} 
            className="md:hidden w-full h-full object-cover object-center"
          />
          <img 
            src={content.content["image_03"]} 
            alt={content.content["alt_04"]} 
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
                  className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  {content.content["text_05"]}</span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]">
                    {content.content["text_06"]}<br />
                    {content.content["text_07"]}</h1>
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-40">
                    {content.content["text_08"]}</p>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left">
                  {content.content["text_09"]}<br className="hidden md:block" />
                  {content.content["text_10"]}</p>
              </div>
            </div>
          </Reveal>

          {/* Overview Info Bar */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-12 border-t border-brand-ink/5 pt-8 pb-8 md:pt-12 md:pb-24">
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans font-medium">{content.content["text_11"]}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans font-medium">{content.content["text_12"]}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans font-medium whitespace-pre-line">{content.content["text_13"]}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans font-medium leading-relaxed">{content.content["text_14"]}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PROJECT MESSAGE */}
      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_15"]}</h3>
            <div className="space-y-4 md:space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              <p>
                {content.content["text_16"]}<br className="hidden md:block" />
                {content.content["text_17"]}</p>
              <p>
                {content.content["text_18"]}<br className="hidden md:block" />
                {content.content["text_19"]}<br className="hidden md:block" />
                {content.content["text_20"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4. POSTER DESIGN SECTION */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_21"]} alt={content.content["alt_22"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_23"]} alt={content.content["alt_24"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_25"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_26"]}<br className="hidden md:block" />
              {content.content["text_27"]}<br className="hidden md:block" />
              {content.content["text_28"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 5. CALENDAR SYSTEM SECTION */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["image_29"]} 
              alt={content.content["alt_30"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_31"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_32"]}<br className="hidden md:block" />
              {content.content["text_33"]}<br className="hidden md:block" />
              {content.content["text_34"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 6. DETAIL SECTION */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_35"]} alt={content.content["alt_36"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_37"]} alt={content.content["alt_38"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_39"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_40"]}<br className="hidden md:block" />
              {content.content["text_41"]}<br className="hidden md:block" />
              {content.content["text_42"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 7. FINAL MESSAGE */}
      <Section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center text-brand-ink">
        <Reveal>
          <div className="space-y-7 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">{content.content["text_43"]}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                {content.content["text_44"]}</h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              <p>{content.content["text_45"]}</p>
              <p>{content.content["text_46"]}</p>
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
