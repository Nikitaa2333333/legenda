import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#f7f5f2]">
      {/* Background Gradient */}
      <div className="absolute inset-0 w-full h-full">
        {/* Soft decorative gradients for 'airy' feel */}
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-legend-accent/20 rounded-full blur-[120px] opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-legend-dark/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[800px] h-[800px] bg-white/80 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >


            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-legend-dark mb-6 md:mb-8 max-w-5xl tracking-tight">
              Профессиональное <br />
              <span className="italic text-legend-accent font-light">управление</span> сделками <br />
              с недвижимостью
            </h1>

            <p className="text-base md:text-xl text-legend-dark/80 max-w-2xl leading-relaxed font-light mb-8 md:mb-12 px-4 md:px-0">
              12 лет опыта в жилом и коммерческом секторах. <br className="hidden md:block" />
              Берем на себя юридическую сложность, поиск и переговоры.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-legend-dark text-white rounded-full text-base sm:text-lg font-medium transition-all hover:bg-legend-accent hover:scale-105 shadow-xl shadow-legend-dark/20 flex items-center justify-center gap-3 w-full sm:w-auto">
              Получить консультацию
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 sm:px-8 sm:py-4 bg-white border border-legend-dark/20 text-legend-dark rounded-full text-base sm:text-lg font-medium transition-all hover:bg-[#f7f5f2] hover:border-legend-dark hover:scale-105 shadow-sm w-full sm:w-auto">
              Оценить мой объект
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;