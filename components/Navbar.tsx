import React, { useState, useEffect } from 'react';
import { Moon, Sun, Languages, Menu, X, Mail } from 'lucide-react';
import { Language } from '../types';
import { socialLinks } from '../data';
import ContactModal from './ContactModal';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  content: any;
  onNavigateHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, darkMode, toggleDarkMode, content, onNavigateHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigateHome();
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'experience', label: content.nav.experience },
    { id: 'publications', label: content.nav.publications },
    { id: 'patents', label: content.nav.patents },
    { id: 'awards', label: content.nav.awards },
    { id: 'gallery', label: content.nav.gallery },
    { id: 'skills', label: content.nav.skills },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity z-50"
            onClick={onNavigateHome}
          >
            <span className="text-xl font-bold tracking-tight">
              Chengbang Lu
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={onNavigateHome}
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {content.nav.home}
            </button>
            
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
            
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-700 mx-2"></div>

            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            
            <button 
              onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
              className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xs font-semibold"
            >
              <Languages size={18} />
              <span>{lang.toUpperCase()}</span>
            </button>

            <button 
              onClick={() => setContactModalOpen(true)}
              className="ml-4 px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
            >
              <Mail size={16} />
              <span>{content.nav.contact}</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center space-x-4 z-50">
             <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen glass z-40 flex flex-col items-center justify-center space-y-8 animate-fadeIn">
            <button onClick={onNavigateHome} className="text-2xl font-medium">{content.nav.home}</button>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-medium"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => { setContactModalOpen(true); setMobileMenuOpen(false); }} className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {content.nav.contact}
            </button>
            <button 
              onClick={() => { setLang(lang === 'en' ? 'zh' : 'en'); setMobileMenuOpen(false); }}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full"
            >
              <Languages size={20} />
              <span>Switch to {lang === 'en' ? 'Chinese' : 'English'}</span>
            </button>
          </div>
        )}
      </nav>

      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        links={socialLinks} 
      />
    </>
  );
};

export default Navbar;