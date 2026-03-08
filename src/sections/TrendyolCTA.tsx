import React from 'react';
import { ShoppingCart } from 'lucide-react';

export const TrendyolCTA: React.FC = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="relative overflow-hidden rounded-xl bg-orange-50 border border-orange-200 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="z-10 space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-orange-900">Trendyol Mağazamızı Ziyaret Edin</h3>
            <p className="text-lg text-orange-800/80">
              Tüm ürünlerimize Trendyol güvencesiyle ulaşabilir, avantajlı fiyatlardan yararlanabilirsiniz.
            </p>
          </div>
          <a 
            href="https://www.trendyol.com/magaza/minimuslin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="z-10 bg-[#f27a1a] hover:bg-[#e67216] text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-xl flex items-center gap-3 active:scale-95"
          >
            <ShoppingCart className="w-6 h-6" />
            Trendyol'da Alışverişe Başla
          </a>
          
          {/* Decorative shapes */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
