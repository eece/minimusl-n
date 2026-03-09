import React from 'react';
import { AboutStory } from '../../src/sections/AboutStory';
import { Mission } from '../../src/sections/Mission';
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
      <AboutStory />
      <Mission />
      <QualityStandards />
      <CombinedCTA />
    </motion.div>
  );
}
