import React from 'react';
import { Hero } from '../../src/sections/Hero';
import { FeaturedProducts } from '../../src/sections/FeaturedProducts';
import { QualityStandards } from '../../src/sections/QualityStandards';
import { CombinedCTA } from '../../src/sections/CombinedCTA';
import { motion } from 'motion/react';
import { useData } from 'vike-react/useData';

export default function Page() {
  const data = useData() as any;
  const pageData = data?.pageData || {};
  const acf = pageData.acf || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero section - using fallback if not in ACF */}
      <Hero {...acf.hero} />
      
      {/* Featured Products - mapped from WordPress ACF */}
      <FeaturedProducts 
        title={acf.baslik} 
        subtitle={acf.alt_baslik} 
        products={acf.koleksiyonlar?.map((item: any, index: number) => ({
          id: index,
          name: item.baslik,
          category: item.alt_baslik,
          image: item.urun_gorseli,
          link: item.urun_linki
        }))} 
      />
      
      <QualityStandards />
      <CombinedCTA />
    </motion.div>
  );
}
