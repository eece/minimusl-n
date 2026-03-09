import React from 'react';
import { Hero } from '../../src/sections/Hero';
import { FeaturedProducts } from '../../src/sections/FeaturedProducts';
import { QualityStandards } from '../../src/sections/QualityStandards';
import { CombinedCTA } from '../../src/sections/CombinedCTA';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <FeaturedProducts />
      <QualityStandards />
      <CombinedCTA />
    </motion.div>
  );
}
