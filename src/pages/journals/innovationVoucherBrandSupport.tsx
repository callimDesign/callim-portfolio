import {useTemplateContent} from '../../content/cmsContent';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Navigation } from '../../components/Navigation';
import { Footer } from '../../components/Footer';
import { Reveal } from '../../components/Common';
import { getJournalById } from './journalData';
import journalHeroImage1 from "../../images/journal/innovation-voucher-brand-support/innovation-voucher-brand-support (1).webp";
import journalHeroImage2 from "../../images/journal/innovation-voucher-brand-support/innovation-voucher-brand-support (2).webp";

const InnovationVoucherBrandSupport = () => {
  const content = useTemplateContent("voucher-final-approval");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const journal = content;

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl serif-kor leading-tight text-brand-ink/90 whitespace-pre-line">
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
                src={content.content["image_01"]} 
                alt={content.content["alt_02"]} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="overflow-hidden aspect-[16/11] rounded-sm bg-brand-ink/5">
              <img 
                src={content.content["image_03"]} 
                alt={content.content["alt_04"]} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
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
              {content.content["text_05"]}{"\n"}
              {content.content["text_06"]}{"\n"}
              {content.content["text_07"]}</p>
          </Reveal>
        </div>
        <div className="md:w-2/3 space-y-8 text-sm md:text-base leading-loose opacity-80 break-keep">
          <Reveal delay={0.5}>
            <p>
              {content.content["text_08"]}<span className="font-semibold">{"<**** 디자인>"}</span>{content.content["text_09"]}</p>
          </Reveal>
          <Reveal delay={0.6}>
            <div className="space-y-2">
              <p className="font-semibold border-l-2 border-brand-accent/50 pl-3 text-brand-ink/90">
                {content.content["text_10"]}</p>
              <ul className="list-decimal list-inside pl-4 space-y-1">
                <li>{content.content["text_11"]}</li>
                <li>{content.content["text_12"]}</li>
                <li>{content.content["text_13"]}</li>
              </ul>
              <p className="pt-2">
                {content.content["text_14"]}</p>
            </div>
          </Reveal>
          <Reveal delay={0.7}>
            <p>
              {content.content["text_15"]}</p>
          </Reveal>
          <Reveal delay={0.8}>
            <div className="p-6 bg-brand-ink/5 rounded-sm space-y-3 border-l-4 border-brand-accent">
              <p className="italic font-medium text-brand-ink/85 whitespace-pre-line">
                {content.content["text_16"]}</p>
              <p className="text-xs opacity-60 text-right">{content.content["text_17"]}</p>
            </div>
          </Reveal>
          <Reveal delay={0.9}>
            <p>
              {content.content["text_18"]}</p>
          </Reveal>
          <Reveal delay={1.0}>
            <p className="font-medium text-brand-ink/90">
              {content.content["text_19"]}</p>
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
            {content.content["text_20"]}</Link>
        </Reveal>
      </section>

      <Footer />
    </div>
  );
};

export default InnovationVoucherBrandSupport;
