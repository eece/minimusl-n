import React from 'react';
import { AboutStory } from '../../src/sections/AboutStory';
import { Mission } from '../../src/sections/Mission';
import { QualityStandards } from '../../src/sections/QualityStandards';
import { CombinedCTA } from '../../src/sections/CombinedCTA';
import { motion } from 'motion/react';
import { useData } from 'vike-react/useData';

export default function Page() {
  const data = useData() as any;
  const pageData = data?.pageData || {};
  const acf = pageData.acf || {};
  const aboutContent = acf.about_content || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Flexible Content from WordPress */}
      {aboutContent.length > 0 ? (
        aboutContent.map((layout: any, index: number) => {
          if (layout.acf_fc_layout === 'left_text_right_image') {
            return (
              <AboutStory 
                key={index}
                title={layout.baslik}
                content1={layout.paragraf}
                image={layout.gorsel}
              />
            );
          }
          if (layout.acf_fc_layout === 'right_text_left_image') {
            return (
              <section key={index} className="w-full max-w-[1200px] mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-2 md:order-2"
                >
                  <h2 className="text-3xl font-bold mb-6 text-primary">{layout.baslik}</h2>
                  <p className="text-lg leading-relaxed text-slate-700">
                    {layout.paragraf}
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-1"
                >
                  <img 
                    src={layout.gorsel} 
                    alt={layout.baslik} 
                    className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </section>
            );
          }
          return null;
        })
      ) : (
        // Fallback if no flexible content
        <AboutStory {...acf.story} />
      )}

      <Mission {...acf.mission} />
      <QualityStandards {...acf.quality_standards} />
      <CombinedCTA />
    </motion.div>
  );
}
