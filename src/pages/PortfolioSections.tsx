import {normalizeBlocks} from '../content/authoring.mjs';
import {Lines} from '../components/ContentLines';
import {Reveal,Section} from '../components/Common';
const variants:Record<string,(block:any)=>any>={"brand-renewal-0":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"brand-renewal-1":(block:any)=>(<Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug"><Lines text={block.heading}/></h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
            </div>
          </div>
        </Reveal>
      </Section>),
"brand-renewal-2":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"brand-renewal-3":(block:any)=>(<Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug"><Lines text={block.heading}/></h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
            </div>
          </div>
        </Reveal>
      </Section>),
"brand-renewal-4":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"brand-renewal-5":(block:any)=>(<Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug"><Lines text={block.heading}/></h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
            </div>
          </div>
        </Reveal>
      </Section>),
"brand-renewal-6":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"brand-renewal-7":(block:any)=>(<Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug"><Lines text={block.heading}/></h2>
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
            </div>
          </div>
        </Reveal>
      </Section>),
"brand-renewal-8":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"brand-renewal-9":(block:any)=>(<Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h2 className="text-2xl md:text-4xl font-maruburi leading-snug"><Lines text={block.heading}/></h2>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-base md:text-lg font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"honest-k-food-0":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"honest-k-food-1":(block:any)=>(<Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            <div className="space-y-6 text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
              
            </div>
          </div>
        </Reveal>
      </Section>),
"honest-k-food-2":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[21/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"honest-k-food-3":(block:any)=>(<Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            <div className="space-y-6 text-base md:text-lg font-sans font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
              
            </div>
          </div>
        </Reveal>
      </Section>),
"honest-k-food-4":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"honest-k-food-5":(block:any)=>(<Section className="py-12 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-base md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"honest-k-food-6":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 pb-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"honest-k-food-7":(block:any)=>(<Section className="py-12 md:py-12 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-base md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"literacy-art-exhibition-0":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            <div className="space-y-4 md:space-y-6 text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
              
            </div>
          </div>
        </Reveal>
      </Section>),
"literacy-art-exhibition-1":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"literacy-art-exhibition-2":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"literacy-art-exhibition-3":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden bg-brand-ink/5">
            <img 
              src={block.images?.[0]?.image} 
              alt={block.images?.[0]?.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      </Section>),
"literacy-art-exhibition-4":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"literacy-art-exhibition-5":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-square overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"literacy-art-exhibition-6":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"goyang-flower-tea-0":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            <div className="space-y-4 md:space-y-6 text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
              
            </div>
          </div>
        </Reveal>
      </Section>),
"goyang-flower-tea-1":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={block._mobileImages?.[0]?.image} alt={block._mobileImages?.[0]?.alt} className="md:hidden w-full h-auto object-cover" />
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="hidden md:block w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={block._mobileImages?.[1]?.image} alt={block._mobileImages?.[1]?.alt} className="md:hidden w-full h-auto object-cover" />
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="hidden md:block w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"goyang-flower-tea-2":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"goyang-flower-tea-3":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"goyang-flower-tea-4":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"goyang-flower-tea-5":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"goyang-flower-tea-6":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"seongbuk-postcard-0":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            <div className="space-y-4 md:space-y-6 text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70 break-keep">
              {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p><Lines text={text}/></p></span>)}
              
            </div>
          </div>
        </Reveal>
      </Section>),
"seongbuk-postcard-1":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="md:aspect-[3/4] aspect-auto overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"seongbuk-postcard-2":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70 border-b border-brand-ink/5 pb-8 md:pb-16 text-center break-keep"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"seongbuk-postcard-3":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover object-center" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"seongbuk-postcard-4":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70 border-b border-brand-ink/5 pb-8 md:pb-16 text-center break-keep"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>),
"seongbuk-postcard-5":(block:any)=>(<Section className="px-6 md:px-12 lg:px-24 !max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={0.1}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[0]?.image} alt={block.images?.[0]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="aspect-[3/4] overflow-hidden bg-brand-ink/5">
              <img src={block.images?.[1]?.image} alt={block.images?.[1]?.alt} className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </Section>),
"seongbuk-postcard-6":(block:any)=>(<Section className="py-7 md:py-24 px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-8 text-center text-brand-ink">
            <h3 className="text-2xl md:text-3xl font-maruburi leading-snug"><Lines text={block.heading}/></h3>
            {(block.paragraphs||[]).map((text:string,index:number)=><span key={index} style={{display:'contents'}}><p className="text-[calc(15px+5pt)] md:text-lg font-sans font-light leading-relaxed opacity-70 break-keep"><Lines text={text}/></p></span>)}
          </div>
        </Reveal>
      </Section>)};
const variantDefaults={"brand-renewal-0":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"brand-renewal-1":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"brand-renewal-2":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"brand-renewal-3":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"brand-renewal-4":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"brand-renewal-5":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"brand-renewal-6":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"brand-renewal-7":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"brand-renewal-8":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"brand-renewal-9":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"honest-k-food-0":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"honest-k-food-1":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"honest-k-food-2":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"honest-k-food-3":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"honest-k-food-4":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"honest-k-food-5":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"honest-k-food-6":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"honest-k-food-7":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"goyang-flower-tea-0":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"goyang-flower-tea-1":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"goyang-flower-tea-2":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"goyang-flower-tea-3":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"goyang-flower-tea-4":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"goyang-flower-tea-5":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"goyang-flower-tea-6":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"literacy-art-exhibition-0":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"literacy-art-exhibition-1":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"literacy-art-exhibition-2":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"literacy-art-exhibition-3":{"photoLayout":"one","heading":false,"images":1,"paragraphs":false},"literacy-art-exhibition-4":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"literacy-art-exhibition-5":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"literacy-art-exhibition-6":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"seongbuk-postcard-0":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"seongbuk-postcard-1":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"seongbuk-postcard-2":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"seongbuk-postcard-3":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"seongbuk-postcard-4":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true},"seongbuk-postcard-5":{"photoLayout":"two","heading":false,"images":2,"paragraphs":false},"seongbuk-postcard-6":{"photoLayout":"none","heading":true,"images":0,"paragraphs":true}} as Record<string,any>;
export function PortfolioSections({blocks}:{blocks:any[]}){return <>{normalizeBlocks(blocks).map((block,index)=><div key={index} style={{display:'contents'}}>{variants[block._variant]&&variantDefaults[block._variant]?.photoLayout===block.photoLayout&&variantDefaults[block._variant]?.images===(block.images||[]).length&&variantDefaults[block._variant]?.heading===Boolean(block.heading)&&variantDefaults[block._variant]?.paragraphs===Boolean((block.paragraphs||[]).length)?variants[block._variant](block):<>{block.photoLayout!=='none'&&<Section className="px-6 md:px-12 lg:px-24 !max-w-none"><Reveal><div className={block.photoLayout==='two'?'grid grid-cols-1 md:grid-cols-2 gap-8':''}>{(block.photoLayout==='none'?[]:block.images||[]).slice(0,block.photoLayout==='two'?2:1).map((img:any,i:number)=><div key={i} className={block.photoLayout==='two'?'aspect-square overflow-hidden bg-brand-ink/5':'aspect-[16/9] overflow-hidden bg-brand-ink/5'}><img src={img.image} alt={img.alt||''} className="w-full h-full object-cover"/></div>)}</div></Reveal></Section>}{(block.heading||(block.paragraphs||[]).length>0)&&<Section className="py-12 md:py-32 px-6 md:px-12 lg:px-24"><Reveal><div className="max-w-3xl mx-auto space-y-8 text-center"><h2 className="text-2xl md:text-4xl font-maruburi leading-snug"><Lines text={block.heading}/></h2><div className="space-y-6 text-base md:text-lg font-light leading-relaxed opacity-70">{(block.paragraphs||[]).map((text:string,i:number)=><p key={i} className="whitespace-pre-line"><Lines text={text}/></p>)}</div></div></Reveal></Section>}</>}</div>)}</>;}