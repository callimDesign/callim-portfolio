import {Lines} from '../../components/ContentLines';
import {PortfolioSections} from '../PortfolioSections';
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
            src={content.heroMobileImage || content.heroImage} 
            alt={"Goyang International Flower Exhibition Tea Hero Mobile"} 
            className="md:hidden w-full h-full object-cover object-center"
          />
          <img 
            src={content.heroImage} 
            alt={"Goyang International Flower Exhibition Tea Hero"} 
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
                  className="text-[calc(10px+5pt)] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-ink inline-block opacity-60"
                >
                  {"Project Design Portfolio"}</span>
                
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-maruburi tracking-tight text-brand-ink leading-[1.2]"><Lines text={content.detailTitle}/></h1>
                  <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-40">
                    {"GOYANG FLOWER TEA BAG SET"}</p>
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

      {/* PROJECT MESSAGE */}
      <PortfolioSections blocks={content.sections || []} />



      {/* FINAL MESSAGE */}
      <Section className="py-16 md:py-32 px-6 md:px-12 lg:px-24 border-t border-brand-ink/5 text-center text-brand-ink">
        <Reveal>
          <div className="space-y-7 md:space-y-12">
            <div className="space-y-4">
              <span className="text-[calc(10px+5pt)] font-bold tracking-[0.4em] uppercase opacity-30">{"Final Message"}</span>
              <h2 className="text-3xl md:text-5xl font-maruburi leading-tight"><Lines text={content.conclusionTitle}/></h2>
            </div>
            <div className="space-y-6 text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed max-w-2xl mx-auto opacity-70">
              <p>{"고양시의 대표적인 풍경과 이야기를 따뜻한 일러스트와 서정적인 색감으로 한 잔의 밀크티에 담아냈습니다."}</p>
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

export default GoyangFlowerTea;
