import React from 'react';
import { Send, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="контакты" className="bg-legend-dark text-legend-light pt-24 pb-12 rounded-t-[3rem]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl mb-8">
              Давайте обсудим <br/> 
              <span className="text-legend-accent italic">вашу задачу</span>
            </h2>
            <p className="text-legend-light/60 max-w-sm font-light text-lg">
              Мы готовы превратить вашу недвижимость в легендарный актив.
            </p>
          </div>
          
          <div className="flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                 <MapPin className="text-legend-accent" />
               </div>
               <div>
                 <h4 className="font-serif text-xl mb-2">Офис</h4>
                 <p className="text-legend-light/70 font-light leading-relaxed">
                   Московская обл, г Балашиха,<br/> деревня Павлино, д 67
                 </p>
               </div>
            </div>

            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                 <Send className="text-legend-accent" />
               </div>
               <div>
                 <h4 className="font-serif text-xl mb-2">Telegram</h4>
                 <a 
                   href="https://t.me/Legenda_AN" 
                   target="_blank" 
                   rel="noreferrer"
                   className="text-legend-light/70 hover:text-white transition-colors underline decoration-legend-accent/50 underline-offset-4"
                 >
                   t.me/Legenda_AN
                 </a>
               </div>
            </div>
            
             <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                 <Phone className="text-legend-accent" />
               </div>
               <div>
                 <h4 className="font-serif text-xl mb-2">Телефон</h4>
                 <p className="text-legend-light/70 font-light">
                   +7 (999) 000-00-00
                 </p>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-legend-light/40">
          <p>© {new Date().getFullYear()} Легенда. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;