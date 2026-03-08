import React from 'react';
import { ShieldCheck, Leaf, Wind } from 'lucide-react';

export const QualityStandards: React.FC = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-3xl font-bold mb-4">Kalite Standartlarımız</h3>
          <p className="text-slate-600">MiniMüslin olarak bebeğinizin sağlığını her şeyin önünde tutuyoruz.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white rounded-xl border border-primary/10 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="text-primary flex justify-center">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <h4 className="font-bold text-xl text-primary">OEKO-TEX Sertifikalı</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Uluslararası güvenlik standartlarına uygun, kimyasal içermeyen üretim.
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-xl border border-primary/10 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="text-primary flex justify-center">
              <Leaf className="w-12 h-12" />
            </div>
            <h4 className="font-bold text-xl text-primary">%100 Pamuk</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              En yumuşak dokunuş için özenle seçilmiş, tamamen doğal saf pamuk.
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-xl border border-primary/10 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
            <div className="text-primary flex justify-center">
              <Wind className="w-12 h-12" />
            </div>
            <h4 className="font-bold text-xl text-primary">Nefes Alan Doku</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Terlemeyi önleyen ve ısıyı dengeleyen özel nefes alabilir dokuma yapısı.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
