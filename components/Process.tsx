import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="процесс" className="py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-legend-accent font-medium tracking-widest uppercase text-sm mb-2 block">Алгоритм успеха</span>
            <h2 className="font-serif text-5xl md:text-6xl text-legend-dark">Как мы работаем</h2>
          </div>
          <p className="md:max-w-md text-legend-dark/60 mt-6 md:mt-0">
            Прозрачный и понятный процесс от первого звонка до получения ключей и документов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, index) => {
             const Icon = step.icon;
             return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-legend-accent/30 hover:shadow-2xl hover:shadow-legend-dark/5 transition-all duration-500 min-h-[320px] flex flex-col justify-between"
              >
                <div className="absolute top-8 right-8 text-6xl font-serif text-legend-light font-bold opacity-0 group-hover:opacity-100 group-hover:text-legend-accent/10 transition-all duration-500 scale-150 origin-top-right">
                  {step.id}
                </div>

                <div>
                  <div className="w-12 h-12 bg-legend-light rounded-full flex items-center justify-center mb-6 text-legend-dark group-hover:bg-legend-dark group-hover:text-legend-accent transition-colors duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-2xl mb-4 text-legend-dark">{step.title}</h3>
                </div>
                
                <p className="text-legend-dark/60 text-sm leading-relaxed border-t border-gray-100 pt-6">
                  {step.description}
                </p>
              </motion.div>
             );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;