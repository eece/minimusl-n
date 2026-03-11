import React from 'react';
import { ShoppingBag, Instagram } from 'lucide-react';
import { useData } from 'vike-react/useData';

interface CombinedCTAProps {
  title?: string;
  subtitle?: string;
  trendyolLink?: string;
  instagramLink?: string;
}

export const CombinedCTA: React.FC<CombinedCTAProps> = (props) => {
  const data = useData() as any;
  const pageData = data?.pageData || {};
  const ctaData = pageData.combinedCTA || {};

  const title = props.title || ctaData.title || "MiniMüslin Dünyasını Keşfedin";
  const subtitle = props.subtitle || ctaData.subtitle || "Ürünlerimizi Trendyol’da inceleyin, yeni koleksiyonlar için Instagram’da bizi takip edin.";
  const trendyolLink = props.trendyolLink || ctaData.trendyolLink || "https://www.trendyol.com/magaza/minimuslin";
  const instagramLink = props.instagramLink || ctaData.instagramLink || "https://www.instagram.com/minimuslin";

  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-primary/10 border border-primary/20 p-8 md:p-16 text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
              {title}
            </h3>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href={trendyolLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#f27a1a] hover:bg-[#e67216] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                <ShoppingBag className="w-6 h-6" />
                Trendyol Mağazası
              </a>
              <a 
                href={instagramLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                <Instagram className="w-6 h-6" />
                Instagram
              </a>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
