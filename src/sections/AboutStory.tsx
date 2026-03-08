import React from 'react';
import { motion } from 'motion/react';

export const AboutStory: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-2 md:order-1"
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">Hikayemiz</h2>
        <p className="text-lg leading-relaxed mb-6 text-slate-700">
          MiniMüslin, en saf kumaşları arayan bir ebeveynin hayaliyle başladı. Her dokunuşun bir annenin kucağı kadar yumuşak olduğu bir dünya yaratmak istedik.
        </p>
        <p className="text-lg leading-relaxed text-slate-700">
          Sentetik karışımlardan ve sert boyalardan uzak durarak, en iyi GOTS sertifikalı organik pamuk üreticilerini bulmak için yola çıktık. Kendi bebeğimiz için küçük bir proje olarak başlayan bu yolculuk, saflığı tüm ailelerle paylaşma misyonuna dönüştü.
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="order-1 md:order-2"
      >
        <img 
          src="https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=800" 
          alt="Mother holding baby" 
          className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};
