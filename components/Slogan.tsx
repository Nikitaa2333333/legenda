import React from 'react';
import { motion } from 'framer-motion';

const Slogan: React.FC = () => {
  return (
    <section className="py-24 md:py-40 bg-legend-dark text-legend-light overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <span className="block text-legend-accent text-sm md:text-base uppercase tracking-[0.3em] mb-8">
            Наша миссия
          </span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-5xl mx-auto">
            «Вы пишете свою историю, <br className="hidden md:block"/>
            <span className="text-legend-light/50">Мы превращаем ее в </span>
            <span className="text-legend-accent italic">Легенду!</span>»
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Slogan;