import React from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

interface CertificateSection {
  title: string;
  description: string;
  listItems: string[];
  icon: string;
}

interface CertificatesProps {
  title?: string;
  description?: string;
  [key: string]: any; // To allow section1, section2, etc.
}

const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.ShieldCheck;
  return <IconComponent className={className} />;
};

export const Certificates: React.FC<CertificatesProps> = (props) => {
  const {
    title = "Sertifikalarımız ve Kalite Standartlarımız",
    description = "MiniMüslin olarak, bebeklerinizin sağlığı için en yüksek kalite ve güvenlik standartlarını benimsiyoruz."
  } = props;

  // Extract sections from section1 to section10
  const sections: CertificateSection[] = [];
  for (let i = 1; i <= 10; i++) {
    const section = props[`section${i}`];
    if (section && section.title) {
      sections.push({
        title: section.title,
        description: section.description || '',
        listItems: Array.isArray(section.listItems) ? section.listItems : [],
        icon: section.icon || 'ShieldCheck'
      });
    }
  }

  return (
    <div className="w-full">
      <section className="py-16 bg-background-light text-center">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </section>

      {sections.map((cert, index) => (
        <section key={index} className={`py-20 ${index % 2 === 1 ? 'bg-primary/5' : 'bg-white'}`}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-10">
            <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 space-y-6"
              >
                <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary">
                  <DynamicIcon name={cert.icon} className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold">{cert.title}</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {cert.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cert.listItems.map((detail, i) => (
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
                  <DynamicIcon name={cert.icon} className="w-full h-full text-primary/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

