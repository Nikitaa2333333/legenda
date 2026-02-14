import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROPERTIES } from '../constants';

const Properties: React.FC = () => {
  return (
    <section id="объекты" className="py-24 bg-legend-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-5xl md:text-6xl text-legend-dark">
            Наши объекты <span className="text-legend-accent text-6xl">.</span>
          </h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-legend-dark border-b border-legend-dark pb-1 hover:text-legend-accent hover:border-legend-accent transition-colors">
            Смотреть каталог <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {PROPERTIES.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden rounded-[2rem] mb-6 border border-black/5 shadow-sm">
                <div className="absolute top-4 left-4 bg-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider z-10 shadow-md text-legend-dark">
                  {prop.tag}
                </div>
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-legend-dark mb-1 group-hover:text-legend-accent transition-colors leading-tight">
                    {prop.title}
                  </h3>
                  <p className="text-legend-dark/60 font-light">{prop.specs}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-medium text-lg text-legend-dark whitespace-nowrap">{prop.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <a href="#" className="inline-flex items-center gap-2 text-legend-dark font-medium">
            Смотреть весь каталог <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Properties;