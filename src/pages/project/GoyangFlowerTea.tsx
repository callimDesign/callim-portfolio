import {useTemplateContent} from '../../content/cmsContent';
import { useEffect } from 'react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal, Section } from '../../components/Common';

// Images from Goyang Milktea project
import heroImg from '../../images/project/goyang-milktea/1-1.webp';
import heroImgMobile from '../../images/project/goyang-milktea/1-1 mobile.webp';

import sec1Img2 from '../../images/project/goyang-milktea/3-1.webp';
import sec1Img2Mobile from '../../images/project/goyang-milktea/3-1 mobile.webp';
import sec1Img3 from '../../images/project/goyang-milktea/3-2.webp';
import sec1Img3Mobile from '../../images/project/goyang-milktea/3-2 mobile.webp';

import sec2Img1 from '../../images/project/goyang-milktea/2-4.webp';
import sec2Img2 from '../../images/project/goyang-milktea/1-2.webp';
import sec2Img3 from '../../images/project/goyang-milktea/2-1.webp';

import sec3Img1 from '../../images/project/goyang-milktea/2-2.webp';
import sec3Img2 from '../../images/project/goyang-milktea/2-3.webp';



const GoyangFlowerTea = () => {
  const content = useTemplateContent("goyang-flower-tea");
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

      {/* PROJECT MESSAGE */}
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
                {content.content["text_19"]}</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* 02 Section 01: 3종 세트 연출컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_20"]} alt={content.content["alt_21"]} className="md:hidden w-full h-auto object-cover" />
              <img src={content.content["image_22"]} alt={content.content["alt_23"]} className="hidden md:block w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_24"]} alt={content.content["alt_25"]} className="md:hidden w-full h-auto object-cover" />
              <img src={content.content["image_26"]} alt={content.content["alt_27"]} className="hidden md:block w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_28"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_29"]}<br className="hidden md:block" />
              {content.content["text_30"]}<br className="hidden md:block" />
              {content.content["text_31"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 03 Section 02: 티백 디자인 개별컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_32"]} alt={content.content["alt_33"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_34"]} alt={content.content["alt_35"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_36"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_37"]}<br className="hidden md:block" />
              {content.content["text_38"]}<br className="hidden md:block" />
              {content.content["text_39"]}</p>
          </div>
        </Reveal>
      </Section>

      {/* 04 Section 03: 패키지 오픈컷 & 구조컷 */}
      <Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_40"]} alt={content.content["alt_41"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={content.content["image_42"]} alt={content.content["alt_43"]} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug">
              {content.content["text_44"]}</h3>
            <p className="text-[15px] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {content.content["text_45"]}<br className="hidden md:block" />
              {content.content["text_46"]}<br className="hidden md:block" />
              {content.content["text_47"]}</p>
          </div>
        </Reveal>
      </Section>



      {/* FINAL MESSAGE */}
      <Section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center text-brand-ink">
        <Reveal>
          <div className="space-y-7 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30">{content.content["text_48"]}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight">
                {content.content["text_49"]}</h2>
            </div>
            <div className="space-y-6 text-[15px] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              <p>{content.content["text_50"]}</p>
              <p>{content.content["text_51"]}</p>
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

export default GoyangFlowerTea;
