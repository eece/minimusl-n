import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

const certificates = [
  {
    id: 'oeko-tex',
    title: 'OEKO-TEX Standard 100',
    description: 'Dünyanın en bilinen tekstil etiketlerinden biri olan OEKO-TEX Standard 100, ürünlerimizin her bir bileşeninin zararlı maddeler için test edildiğini ve bu nedenle ekolojik olarak güvenli olduğunu garanti eder.',
    details: [
      'Zararlı kimyasallar içermez',
      'Bebek cildi için güvenlidir',
      'Uluslararası standartlara uygundur',
      'Sürdürülebilir üretim süreçleri'
    ],
    icon: ShieldCheck,
    bgColor: 'bg-white'
  },
  {
    id: 'gots',
    title: 'GOTS (Global Organic Textile Standard)',
    description: 'GOTS, ham maddenin hasadından, çevresel ve sosyal sorumluluk sahibi üretime ve etiketlemeye kadar tekstil ürünlerinin organik statüsünü garanti eden, dünya çapında lider tekstil işleme standardıdır.',
    details: [
      '%100 Organik pamuk kullanımı',
      'Çevresel sürdürülebilirlik',
      'Adil çalışma koşulları',
      'İzlenebilir tedarik zinciri'
    ],
    icon: Award,
    bgColor: 'bg-primary/5'
  },
  {
    id: 'iso-9001',
    title: 'ISO 9001 Kalite Yönetimi',
    description: 'Üretim süreçlerimizin her aşamasında kaliteyi ön planda tutuyoruz. ISO 9001 sertifikamız, müşteri memnuniyetini artırmak ve sürekli iyileştirme sağlamak için kurduğumuz sistemin bir kanıtıdır.',
    details: [
      'Sürekli iyileştirme prensibi',
      'Müşteri odaklı yaklaşım',
      'Standartlaştırılmış üretim',
      'Yüksek verimlilik ve kalite'
    ],
    icon: CheckCircle,
    bgColor: 'bg-white'
  }
];

export const Certificates: React.FC = () => {
  return (
    <div className="w-full">
      <section className="py-16 bg-background-light text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            Sertifikalarımız ve Kalite Standartlarımız
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            MiniMüslin olarak, bebeklerinizin sağlığı için en yüksek kalite ve güvenlik standartlarını benimsiyoruz.
          </motion.p>
        </div>
      </section>

      {certificates.map((cert, index) => (
        <section key={cert.id} className={`py-20 ${cert.bgColor}`}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                  <cert.icon className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold">{cert.title}</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {cert.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cert.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full max-w-md"
              >
                <div className="aspect-square rounded-3xl bg-primary/5 border border-primary/10 flex items-center justify-center p-12">
                  <cert.icon className="w-full h-full text-primary/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};
