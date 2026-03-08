import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="px-4 py-6 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[500px] overflow-hidden rounded-xl flex items-center justify-center p-8 text-center bg-cover bg-center"
          style={{ 
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200')" 
          }}
        >
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Doğal ve Yumuşak Dokunuş
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-normal">
              Bebeğiniz için OEKO-TEX sertifikalı, %100 pamuklu müslin ürünler.
            </p>
            <button className="bg-primary hover:bg-primary/90 text-background-dark px-8 py-4 rounded-xl font-bold text-lg transition-transform active:scale-95 shadow-lg">
              Hemen Keşfet
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
