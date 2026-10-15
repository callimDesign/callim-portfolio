import {Lines} from '../../components/ContentLines';
import {PortfolioSections} from '../PortfolioSections';
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
            src={content.heroImage} 
            alt={"HONEST K FOOD Hero"} 
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
                  className="text-[calc(10px+5pt)] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  {"Package Design Portfolio"}</span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]"><Lines text={content.detailTitle}/></h1>
                </div>
              </div>

              <div>
                <p className="text-base md:text-lg font-sans font-light text-brand-ink/70 leading-relaxed max-w-lg text-left"><Lines text={content.detailDesc}/></p>
              </div>
            </div>
          </div>

          {/* Overview Info Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-t border-brand-ink/5 pt-12 pb-24">
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Client</span>
                <p className="text-sm md:text-base font-sans">{content.client}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Category</span>
                <p className="text-sm md:text-base font-sans">{content.detailCategory}</p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Scope</span>
                <p className="text-sm md:text-base font-sans whitespace-pre-line"><Lines text={content.scope}/></p>
              </div>
            </div>
            <div>
              <div className="space-y-2">
                <span className="text-[calc(10px+5pt)] font-bold tracking-widest opacity-30 uppercase">Keywords</span>
                <p className="text-sm md:text-base font-sans leading-relaxed"><Lines text={content.keywords}/></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BRAND STORY */}
      <PortfolioSections blocks={content.sections || []} />

      {/* 7. FINAL OUTCOME */}
      <Section className="py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center">
        <Reveal>
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[calc(10px+5pt)] font-bold tracking-[0.4em] uppercase opacity-30">{"Final Outcome"}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight"><Lines text={content.conclusionTitle}/></h2>
            </div>
            <p className="text-base md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70"><Lines text={content.closingText}/></p>
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
