import React, { useState } from "react";
import { Card } from "../ui/card";
import { GraduationCap, Target, BookOpen } from "lucide-react";

const useLanguage = () => {
  const [language] = useState('pt');
  return { language };
};

const translations = {
  pt: {
    title: "Sobre Mim",
    subtitle: "Minha Jornada em Segurança Cibernética",
    journey: {
      title: "Jornada Acadêmica",
      description: "Atualmente cursando Segurança Cibernética, focado em desenvolver conhecimentos sólidos em proteção digital, análise de vulnerabilidades e resposta a incidentes. Cada dia de estudo me aproxima mais do meu objetivo de me tornar um profissional completo na área."
    },
    objective: {
      title: "Objetivo Profissional", 
      description: "Busco uma oportunidade de estágio ou posição júnior em segurança cibernética onde possa aplicar meus conhecimentos teóricos na prática, contribuir com soluções inovadoras e crescer junto a uma equipe experiente."
    },
    passion: {
      title: "Paixão por Tecnologia",
      description: "Fascinado pelo mundo da segurança digital, dedico tempo estudando as mais recentes ameaças, técnicas de proteção e ferramentas de análise. Acredito que a curiosidade e a atualização constante são fundamentais nesta área."
    }
  },
  en: {
    title: "About Me",
    subtitle: "My Cybersecurity Journey", 
    journey: {
      title: "Academic Journey",
      description: "Currently studying Cybersecurity, focused on developing solid knowledge in digital protection, vulnerability analysis and incident response. Each day of study brings me closer to my goal of becoming a complete professional in the field."
    },
    objective: {
      title: "Professional Objective",
      description: "I'm looking for an internship or junior position opportunity in cybersecurity where I can apply my theoretical knowledge in practice, contribute with innovative solutions and grow alongside an experienced team."
    },
    passion: {
      title: "Passion for Technology", 
      description: "Fascinated by the world of digital security, I dedicate time studying the latest threats, protection techniques and analysis tools. I believe that curiosity and constant updating are fundamental in this area."
    }
  }
};

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const cards = [
    {
      icon: GraduationCap,
      title: t.journey.title,
      description: t.journey.description
    },
    {
      icon: Target,
      title: t.objective.title,
      description: t.objective.description
    },
    {
      icon: BookOpen,
      title: t.passion.title, 
      description: t.passion.description
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="bg-gray-900 border-green-500/30 p-8 hover:shadow-lg hover:shadow-green-500/20 group transition-all duration-300">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
                  <card.icon className="w-8 h-8 text-green-400" />
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{card.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}