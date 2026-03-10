import React from 'react';
import { Baby, Mail, MapPin, Instagram, Facebook, Twitter, MessageCircle, Phone } from 'lucide-react';

interface FooterProps {
  logoText?: string;
  description?: string;
  copyright?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export const Footer: React.FC<FooterProps> = ({
  logoText = "MiniMüslin",
  description = "Bebekleriniz için en doğal ve en yumuşak müslin ürünleri tasarlıyoruz.",
  copyright = "© 2026 MiniMüslin. Tüm hakları saklıdır.",
  socialLinks = {
    instagram: "https://instagram.com/minimuslin",
    facebook: "#",
    twitter: "#"
  }
}) => {
  return (
    <footer className="bg-background-light border-t border-primary/10 py-12">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
              <Baby className="w-8 h-8" />
              <h1 className="text-xl font-bold text-slate-900">{logoText}</h1>
            </a>
            <p className="text-sm text-slate-500">
              {description}
            </p>
            <div className="flex gap-4">
              <a href={socialLinks.instagram} className="text-primary hover:opacity-70 transition-opacity"><Instagram className="w-5 h-5" /></a>
              <a href={socialLinks.facebook} className="text-primary hover:opacity-70 transition-opacity"><Facebook className="w-5 h-5" /></a>
              <a href={socialLinks.twitter} className="text-primary hover:opacity-70 transition-opacity"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Kurumsal</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a className="hover:text-primary transition-colors" href="/">Koleksiyonlar</a></li>
              <li><a className="hover:text-primary transition-colors" href="/about">Hakkımızda</a></li>
              <li><a className="hover:text-primary transition-colors" href="/certificates">Sertifikalar</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Bize Ulaşın</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> 
                <span>hello@minimuslin.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> 
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> 
                <span>+90 500 000 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <a 
                  href="https://wa.me/905000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Destek</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-slate-400">
          {copyright}
        </div>
      </div>
    </footer>
  );
};
