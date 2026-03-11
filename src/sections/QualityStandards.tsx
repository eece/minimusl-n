import React from 'react';
import * as LucideIcons from 'lucide-react';
import { useData } from 'vike-react/useData';

interface QualityItem {
  icon: string;
  title: string;
  content: string;
}

interface QualityStandardsProps {
  title?: string;
  subtitle?: string;
  items?: QualityItem[];
}

const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.ShieldCheck;
  return <IconComponent className={className} />;
};

export const QualityStandards: React.FC<QualityStandardsProps> = (props) => {
  const data = useData() as any;
  const pageData = data?.pageData || {};
  const acf = pageData.acf || {};
  const qualityData = acf.quality_standards || pageData.qualityStandards || {};

  const title = props.title || qualityData.title || "Kalite Standartlarımız";
  const subtitle = props.subtitle || qualityData.subtitle || "MiniMüslin olarak bebeğinizin sağlığını her şeyin önünde tutuyoruz.";
  const items = props.items || qualityData.items || [
    {
      icon: "ShieldCheck",
      title: "OEKO-TEX Sertifikalı",
      content: "Uluslararası güvenlik standartlarına uygun, kimyasal içermeyen üretim."
    },
    {
      icon: "Leaf",
      title: "%100 Pamuk",
      content: "En yumuşak dokunuş için özenle seçilmiş, tamamen doğal saf pamuk."
    },
    {
      icon: "Wind",
      title: "Nefes Alan Doku",
      content: "Terlemeyi önleyen ve ısıyı dengeleyen özel nefes alabilir dokuma yapısı."
    }
  ];

  return (
    <section className="py-16 bg-primary/5">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-slate-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div key={index} className="p-8 bg-white rounded-xl border border-primary/10 shadow-sm text-center space-y-4 hover:shadow-md transition-shadow">
              <div className="text-primary flex justify-center">
                <DynamicIcon name={item.icon} className="w-12 h-12" />
              </div>
              <h4 className="font-bold text-xl text-primary">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
