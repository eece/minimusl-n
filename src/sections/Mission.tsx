import React from 'react';
import { Leaf, ShieldCheck, Wind } from 'lucide-react';
import { useData } from 'vike-react/useData';
import * as LucideIcons from 'lucide-react';

interface MissionItem {
  icon: string;
  title: string;
  content: string;
}

interface MissionProps {
  title?: string;
  subtitle?: string;
  items?: MissionItem[];
}

const DynamicIcon = ({ name, className }: { name: string, className?: string }) => {
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.Leaf;
  return <IconComponent className={className} />;
};

export const Mission: React.FC<MissionProps> = (props) => {
  const data = useData() as any;
  const pageData = data?.pageData || {};
  const acf = pageData.acf || {};
  const missionData = acf.mission || pageData.mission || {};

  const title = props.title || missionData.title || "Misyonumuz";
  const subtitle = props.subtitle || missionData.subtitle || "Saflığa dayalı, özenle tasarlanmış ve gelecek nesiller için sürdürülebilir bir geleceğe adanmış.";
  const items = props.items || missionData.items || [
    {
      icon: "Leaf",
      title: "Önce Saflık",
      content: "Zararlı pestisitler olmadan yetiştirilen %100 organik pamuk, yenidoğan cildine en nazik dokunuşu sağlar."
    },
    {
      icon: "ShieldCheck",
      title: "OEKO-TEX Sertifikalı",
      content: "Her iplik ve düğme, en yüksek küresel güvenlik standartlarını karşılayan zararlı maddeler için test edilir."
    },
    {
      icon: "Wind",
      title: "Nefes Alan Tasarım",
      content: "Özel müslin dokumamız havanın doğal olarak akmasını sağlayarak bebeklerin sıcaklıklarını düzenlemelerine yardımcı olur."
    }
  ];

  return (
    <section className="w-full bg-primary/5 py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-slate-600 max-w-xl mx-auto">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-primary/20 flex flex-col items-center text-center shadow-sm">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-6 text-primary">
                <DynamicIcon name={item.icon} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
