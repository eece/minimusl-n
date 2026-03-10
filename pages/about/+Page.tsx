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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AboutStory {...pageData.story} />
      <Mission />
      <QualityStandards />
      <CombinedCTA />
    </motion.div>
  );
}
