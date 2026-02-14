import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#f7f5f2] py-4 shadow-md' : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-legend-dark rounded-full flex items-center justify-center">
            <span className="text-legend-light font-serif font-bold text-xl">Л</span>
          </div>
          <span className="font-serif text-2xl font-bold tracking-tight text-legend-dark">
            ЛЕГЕНДА
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['О нас', 'Процесс', 'Команда', 'Объекты', 'Контакты'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-legend-dark/80 hover:text-legend-accent transition-colors font-medium text-sm tracking-wide"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <a
          href="#contact"
          className={`hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full transition-all duration-300 border border-legend-dark text-legend-dark hover:bg-legend-dark hover:text-white font-medium text-sm`}
        >
          Связаться
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-legend-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 bg-legend-light z-40 p-6 flex flex-col gap-6 md:hidden h-screen overflow-y-auto pb-32">
          {['О нас', 'Процесс', 'Команда', 'Объекты', 'Контакты'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif text-legend-dark hover:text-legend-accent"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-4 w-full py-4 rounded-full border border-legend-dark text-legend-dark text-center font-medium text-lg hover:bg-legend-dark hover:text-white transition-colors"
          >
            Связаться
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;