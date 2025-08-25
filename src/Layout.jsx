import React, { createContext, useContext, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "./components/ui/sheet";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "Habilidades", 
      tryhackme: "TryHackMe",
      courses: "Cursos",
      contact: "Contato"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      tryhackme: "TryHackMe", 
      courses: "Courses",
      contact: "Contact"
    }
  }
};

export default function Layout({ children }) {
  const [language, setLanguage] = useState('pt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const t = translations[language];
  
  const toggleLanguage = () => {
    setLanguage(lang => lang === 'pt' ? 'en' : 'pt');
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'tryhackme', label: t.nav.tryhackme },
    { id: 'courses', label: t.nav.courses },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <style>
        {`
          :root {
            --neon-green: #00ff41;
            --dark-bg: #0a0a0a;
            --card-bg: #111111;
            --border-color: #1a1a1a;
            --text-primary: #ffffff;
            --text-secondary: #a1a1aa;
          }
          
          body {
            background: var(--dark-bg);
            color: var(--text-primary);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            scroll-behavior: smooth;
          }
          
          .glow {
            box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
          }
          
          .text-glow {
            text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
          }
          
          .border-glow {
            border: 1px solid rgba(0, 255, 65, 0.3);
          }
          
          .bg-gradient-cyber {
            background: linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%);
          }
          
          .hover-glow:hover {
            box-shadow: 0 0 25px rgba(0, 255, 65, 0.4);
            transform: translateY(-2px);
            transition: all 0.3s ease;
          }
        `}
      </style>
      
      <div className="min-h-screen bg-gradient-cyber">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-glow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-bold text-glow">CyberSec</span>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-text-secondary hover:text-neon-green transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Language Toggle & Mobile Menu */}
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-neon-green hover:bg-neon-green/10"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  {language.toUpperCase()}
                </Button>
                
                {/* Mobile Menu */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="ghost" size="sm">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="bg-black border-neon-green/30">
                    <div className="flex flex-col space-y-6 mt-8">
                      {navItems.map(item => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="text-left text-lg text-text-secondary hover:text-neon-green transition-colors duration-200"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-black border-t border-glow mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-text-secondary">
                © 2024 CyberSec Portfolio. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
}