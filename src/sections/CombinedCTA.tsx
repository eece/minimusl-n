import React from 'react';
import { ShoppingBag, Instagram } from 'lucide-react';

export const CombinedCTA: React.FC = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-primary/10 border border-primary/20 p-8 md:p-16 text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
              MiniMüslin Dünyasını Keşfedin
            </h3>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Ürünlerimizi Trendyol’da inceleyin, yeni koleksiyonlar için Instagram’da bizi takip edin.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a 
                href="https://www.trendyol.com/magaza/minimuslin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#f27a1a] hover:bg-[#e67216] text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
              >
                <ShoppingBag className="w-6 h-6" />
                Trendyol Mağazası
              </a>
              <a 
                href="https://www.instagram.com/minimuslin" 
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
