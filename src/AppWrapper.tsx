import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { FeaturedProducts } from './sections/FeaturedProducts';
import { QualityStandards } from './sections/QualityStandards';
import { CombinedCTA } from './sections/CombinedCTA';
import { AboutStory } from './sections/AboutStory';
import { Mission } from './sections/Mission';
import { Certificates } from './sections/Certificates';
import { motion, AnimatePresence } from 'motion/react';

export default function AppWrapper() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={
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
            } />
            <Route path="/about" element={
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
            } />
            <Route path="/certificates" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Certificates />
                <CombinedCTA />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
