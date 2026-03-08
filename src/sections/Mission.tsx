import React from 'react';
import { Leaf, ShieldCheck, Wind } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <section className="w-full bg-primary/5 py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Misyonumuz</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Saflığa dayalı, özenle tasarlanmış ve gelecek nesiller için sürdürülebilir bir geleceğe adanmış.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl border border-primary/20 flex flex-col items-center text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Önce Saflık</h3>
            <p className="text-slate-600">Zararlı pestisitler olmadan yetiştirilen %100 organik pamuk, yenidoğan cildine en nazik dokunuşu sağlar.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-primary/20 flex flex-col items-center text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">OEKO-TEX Sertifikalı</h3>
            <p className="text-slate-600">Her iplik ve düğme, en yüksek küresel güvenlik standartlarını karşılayan zararlı maddeler için test edilir.</p>
          </div>
          <div className="bg-white p-8 rounded-xl border border-primary/20 flex flex-col items-center text-center shadow-sm">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
              <Wind className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Nefes Alan Tasarım</h3>
            <p className="text-slate-600">Özel müslin dokumamız havanın doğal olarak akmasını sağlayarak bebeklerin sıcaklıklarını düzenlemelerine yardımcı olur.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
