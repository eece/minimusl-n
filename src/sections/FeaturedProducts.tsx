import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    id: 1,
    name: "'Sleepy Jungle' Puset Örtüsü",
    category: "%100 Pamuk Müslin",
    image: "https://cdn.dsmcdn.com/mnresize/620/920/ty1833/prod/QC_PREP/20260306/00/8fd09139-2b15-3118-bd18-1ebe29ae682f/1_org_zoom.jpg",
  },
  {
    id: 2,
    name: "'Bebe Mavi' 4 Katlı Battaniye",
    category: "Ekstra Yumuşak Doku",
    image: "https://cdn.dsmcdn.com/mnresize/620/920/ty1835/prod/QC_PREP/20260306/00/b29f0028-6092-38ef-82fb-29718953916a/1_org_zoom.jpg",
  },
  {
    id: 3,
    name: "'Sleepy Jungle' Puset Örtüsü",
    category: "%100 Pamuk Müslin",
    image: "https://cdn.dsmcdn.com/mnresize/620/920/ty1833/prod/QC_PREP/20260306/00/8fd09139-2b15-3118-bd18-1ebe29ae682f/1_org_zoom.jpg",
  },
  {
    id: 4,
    name: "'Bebe Mavi' 4 Katlı Battaniye",
    category: "Ekstra Yumuşak Doku",
    image: "https://cdn.dsmcdn.com/mnresize/620/920/ty1835/prod/QC_PREP/20260306/00/b29f0028-6092-38ef-82fb-29718953916a/1_org_zoom.jpg",
  },
];

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[1200px] px-4 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h3 className="text-3xl font-bold tracking-tight">Öne Çıkan Ürünler</h3>
            <p className="text-slate-500 mt-2">En sevilen tasarımlarımızla tanışın.</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors swiper-prev">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="p-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors swiper-next">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-32"
          style={{ '--swiper-pagination-bottom': '-1px', 'paddingBottom':'32px', '--swiper-pagination-color': '#d2b38e' }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-primary/5"
              >
                <div 
                  className="aspect-[3/4] bg-primary/10 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="p-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-lg">{product.name}</h4>
                    <p className="text-sm text-slate-500">{product.category}</p>
                  </div>
                  <button className="w-full bg-background-light border border-primary/30 hover:border-primary text-slate-900 font-bold py-3 rounded-lg transition-colors">
                    Trendyol'da İncele
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
