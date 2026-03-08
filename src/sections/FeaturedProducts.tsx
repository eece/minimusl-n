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
    image: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "'Bebe Mavi' 4 Katlı Battaniye",
    category: "Ekstra Yumuşak Doku",
    image: "https://images.unsplash.com/photo-1544126592-807daa2b567b?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "'Mint Bunny' Emzirme Örtüsü",
    category: "Konforlu Tasarım",
    image: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "'Soft Sand' Kundak Seti",
    category: "Doğal Boyama",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
  }
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
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
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
