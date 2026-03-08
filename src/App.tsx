import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { FeaturedProducts } from './sections/FeaturedProducts';
import { QualityStandards } from './sections/QualityStandards';
import { TrendyolCTA } from './sections/TrendyolCTA';
import { InstagramCTA } from './sections/InstagramCTA';
import { AboutStory } from './sections/AboutStory';
import { Mission } from './sections/Mission';
import { Certificates } from './sections/Certificates';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'certificates'>('home');

  return (
    <div className="min-h-screen flex flex-col bg-background-light">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero />
              <FeaturedProducts />
              <QualityStandards />
              <TrendyolCTA />
              <InstagramCTA />
            </motion.div>
          )}
          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AboutStory />
              <Mission />
              <QualityStandards />
              <TrendyolCTA />
              <InstagramCTA />
            </motion.div>
          )}
          {currentPage === 'certificates' && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Certificates />
              <TrendyolCTA />
              <InstagramCTA />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
