import {useTemplateContent} from '../../content/cmsContent';
import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

import mainHeroImg from '../../images/package/honest-k-food/featured-honest-k-food.png';
import brandStoryImgLocal from '../../images/package/honest-k-food/overview.webp';
import detailImg1Local from '../../images/package/honest-k-food/detail-01.webp';
import detailImg2Local from '../../images/package/honest-k-food/detail-02.webp';
import labelSystemImgLocal from '../../images/package/honest-k-food/label.webp';
import packageDesignImgLocal from '../../images/package/honest-k-food/outcome.jpg';

// Images
const mainHero = mainHeroImg;
const brandStoryImg = brandStoryImgLocal;
const detailImg1 = detailImg1Local;
const labelDetail02 = detailImg2Local;
const designConceptImg = detailImg1Local;
const labelSystemImg = labelSystemImgLocal;

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1594914141221-72782069ed89?auto=format&fit=crop&q=80&w=1600';
// Using placeholders for the rest of the visual story - updated names for future replacement
const labelSystemImg1 = labelSystemImg;
const labelSystemImg2 = labelDetail02;
const packageDesignImg = packageDesignImgLocal;

const HonestKFood = () => {
  const content = useTemplateContent("honest-k-food");
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
            src={content.content["package_image_1"]} 
            alt={content.content["alt_01"]} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
          <div className="absolute inset-0 bg-black/10 z-20" />
        </div>
      </section>

      {/* 2. PROJECT INTRO & OVERVIEW SECTION */}
      <section className="pt-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Intro Information */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center pb-16">
              <div className="space-y-12">
                <span 
                  className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  {content.content["text_02"]}</span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]">
                    {content.content["text_03"]}<br />
                    {content.content["text_04"]}</h1>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left">
                  {content.content["text_05"]}<br />
                  {content.content["text_06"]}</p>
              </div>
            </div>
          </div>

          {/* Overview Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-ink/5 pt-12 pb-24">
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans">{content.content["text_07"]}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans">{content.content["text_08"]}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans whitespace-pre-line">{content.content["text_09"]}{"\n"}{content.content["text_10"]}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[10px] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans leading-relaxed">{content.content["text_11"]}{"\n"}{content.content["text_12"]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND STORY */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["package_image_2"]} 
              alt={content.content["alt_13"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_14"]}</h3>
            <div className="space-y-6 text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              <p>
                {content.content["text_15"]}<br />
                {content.content["text_16"]}<br />
                {content.content["text_17"]}</p>
              <p>
                {content.content["text_18"]}<br />
                {content.content["text_19"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 4. DESIGN CONCEPT */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["package_image_3"]} 
              alt={content.content["alt_20"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_21"]}</h3>
            <div className="space-y-6 text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              <p>
                {content.content["text_22"]}<br />
                {content.content["text_23"]}<br />
                {content.content["text_24"]}</p>
              <p>
                {content.content["text_25"]}<br />
                {content.content["text_26"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 5. LABEL SYSTEM */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={content.content["package_image_4"]} alt={content.content["alt_27"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={content.content["package_image_5"]} alt={content.content["alt_28"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_29"]}</h3>
            <p className="text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_30"]}<br />
              {content.content["text_31"]}<br />
              {content.content["text_32"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 6. PACKAGE DESIGN */}
      <Section className="px-6 md:px-12 lg:px-24 pb-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={content.content["package_image_6"]} 
              alt={content.content["alt_33"]} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-12 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_34"]}</h3>
            <p className="text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_35"]}<br />
              {content.content["text_36"]}<br />
              {content.content["text_37"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 7. FINAL OUTCOME */}
      <Section className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">{content.content["text_38"]}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                {content.content["text_39"]}<br />
                {content.content["text_40"]}</h2>
            </div>
            <p className="text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              {content.content["text_41"]}<br className="hidden md:block" />
              {content.content["text_42"]}<br className="hidden md:block" />
              {content.content["text_43"]}</p>
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

export default HonestKFood;
