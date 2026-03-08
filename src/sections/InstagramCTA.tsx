import React from 'react';
import { Camera } from 'lucide-react';

export const InstagramCTA: React.FC = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="relative overflow-hidden rounded-xl bg-primary/10 border border-primary/20 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="z-10 space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">MiniMüslin Dünyasını Keşfedin</h3>
            <p className="text-lg text-slate-600">
              Yeni modellerden haberdar olmak ve ilham almak için bizi Instagram'da takip edin.
            </p>
          </div>
          <button className="z-10 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-black text-lg transition-all shadow-xl flex items-center gap-3 active:scale-95">
            <Camera className="w-6 h-6" />
            Instagram'da Takip Et
          </button>
          
          {/* Decorative shapes */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -left-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
