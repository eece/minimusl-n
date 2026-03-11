import React from 'react';
import { Baby, Mail, MapPin, Instagram, Facebook, Twitter, MessageCircle, Phone } from 'lucide-react';

interface FooterProps {
  widget1?: {
    logo?: string;
    metin?: string;
    paragraf?: string;
    sosyal_medyalar?: Array<{ icon: string; link: string }>;
  };
  widget2?: Array<{ link_text: string; link_url: string }>;
  widget3?: Array<{ icon: string; link: string }>;
  kaliteStandartlarimiz?: string;
  minimuslinDunyasiniKesfedin?: string;
}

export const Footer: React.FC<FooterProps> = ({
  widget1 = {
    logo: "",
    metin: "MiniMüslin",
    paragraf: "Bebekleriniz için en doğal ve en yumuşak müslin ürünleri tasarlıyoruz.",
    sosyal_medyalar: [
      { icon: "Instagram", link: "https://instagram.com/minimuslin" }
    ]
  },
  widget2 = [
    { link_text: "Koleksiyonlar", link_url: "/" },
    { link_text: "Hakkımızda", link_url: "/about" },
    { link_text: "Sertifikalar", link_url: "/certificates" }
  ],
  widget3 = [
    { icon: "Mail", link: "hello@minimuslin.com" },
    { icon: "MapPin", link: "İstanbul, Türkiye" },
    { icon: "Phone", link: "+90 500 000 00 00" }
  ],
  kaliteStandartlarimiz = "Kalite Standartlarımız",
  minimuslinDunyasiniKesfedin = "MiniMüslin Dünyasını Keşfedin"
}) => {
  return (
    <footer className="bg-background-light border-t border-primary/10 py-12">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-3 text-primary hover:opacity-80 transition-opacity">
              {widget1.logo ? (
                <img src={widget1.logo} alt={widget1.metin} className="h-10 w-auto object-contain" referrerPolicy="no-referrer" />
              ) : (
                <Baby className="w-8 h-8" />
              )}
              <h1 className="text-xl font-bold text-slate-900">{widget1.metin}</h1>
            </a>
            <p className="text-sm text-slate-500">
              {widget1.paragraf}
            </p>
            <div className="flex gap-4">
              {widget1.sosyal_medyalar?.map((social, idx) => (
                <a key={idx} href={social.link} className="text-primary hover:opacity-70 transition-opacity">
                  {social.icon === 'Instagram' && <Instagram className="w-5 h-5" />}
                  {social.icon === 'Facebook' && <Facebook className="w-5 h-5" />}
                  {social.icon === 'Twitter' && <Twitter className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Kurumsal</h5>
            <ul className="space-y-2 text-sm text-slate-500">
              {widget2.map((item, idx) => (
                <li key={idx}><a className="hover:text-primary transition-colors" href={item.link_url}>{item.link_text}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold mb-4">Bize Ulaşın</h5>
            <ul className="space-y-3 text-sm text-slate-500">
              {widget3.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  {item.icon === 'Mail' && <Mail className="w-4 h-4 text-primary" />}
                  {item.icon === 'MapPin' && <MapPin className="w-4 h-4 text-primary" />}
                  {item.icon === 'Phone' && <Phone className="w-4 h-4 text-primary" />}
                  <span>{item.link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-slate-400">
          © 2026 {widget1.metin}. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
};
