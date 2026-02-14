import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="команда" className="py-24 bg-white rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 text-center">
          <span className="text-legend-accent font-medium tracking-widest uppercase text-sm mb-4 block">Наши эксперты</span>
          <h2 className="font-serif text-5xl md:text-6xl text-legend-dark">Команда</h2>
        </div>

        <div className="flex snap-x snap-mandatory overflow-x-auto pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center snap-center shrink-0 w-[80vw] sm:w-[350px] md:w-auto"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[3/4] mb-6 border border-black/5 shadow-sm">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
              </div>

              <h3 className="font-serif text-2xl text-legend-dark group-hover:text-legend-accent transition-colors duration-300">
                {member.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;