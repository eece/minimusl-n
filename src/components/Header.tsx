import React, { useState, useEffect } from 'react';
import { ShoppingBag, Baby, MessageCircle, Menu, X, Instagram, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  logoText?: string;
  navLinks?: Array<{ name: string; href: string }>;
  shopLink?: string;
  whatsappNumber?: string;
  whatsappLink?: string;
  email?: string;
  instagramLink?: string;
}

export const Header: React.FC<HeaderProps> = ({
  logoText = "MiniMüslin",
  navLinks = [
    { name: 'Koleksiyonlar', href: './' },
    { name: 'Hakkımızda', href: './about' },
    { name: 'Sertifikalar', href: './certificates' },
  ],
  shopLink = "https://www.shopier.com/minimuslin",
  whatsappNumber = "+90 500 000 00 00",
  whatsappLink = "https://wa.me/905000000000",
  email = "info@minimuslin.com",
  instagramLink = "https://instagram.com/minimuslin"
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Disable scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-4 md:px-10 py-4">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between">
          <a 
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="text-primary">
              <Baby className="w-8 h-8" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">{logoText}</h1>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors items-center justify-center"
              title="WhatsApp Destek"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-primary/10 rounded-full transition-colors text-slate-900"
              aria-label="Menüyü Aç/Kapat"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu - Moved outside header to avoid backdrop-filter clipping */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col p-8 md:hidden overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3 text-primary">
                <Baby className="w-8 h-8" />
                <span className="text-xl font-bold text-slate-900">{logoText}</span>
              </div>
              <button 
                onClick={toggleMenu}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-900"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 mb-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold text-slate-900 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={shopLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-primary hover:opacity-80 transition-opacity"
              >
                Mağaza
              </a>
            </nav>

            <div className="mt-auto space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">İletişim</h3>
                <div className="space-y-3">
                  <a href={`tel:${whatsappNumber.replace(/\s/g, '')}`} className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors">
                    <Phone className="w-5 h-5" />
                    <span>{whatsappNumber}</span>
                  </a>
                  <a href={`mailto:${email}`} className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                    <span>{email}</span>
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <a 
                  href={instagramLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 hover:bg-primary/10 text-primary rounded-full transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
