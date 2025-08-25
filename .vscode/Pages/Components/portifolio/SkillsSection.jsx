import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Network, Terminal, Code, Brain } from "lucide-react";

const useLanguage = () => {
  const [language] = useState('pt');
  return { language };
};

const translations = {
  pt: {
    title: "Habilidades Técnicas",
    subtitle: "Competências em Desenvolvimento",
    skills: [
      {
        name: "Redes de Computadores",
        level: 75,
        description: "Protocolos TCP/IP, configuração de firewalls, análise de tráfego"
      },
      {
        name: "Linux",
        level: 80,
        description: "Administração de sistemas, linha de comando, hardening de servidores"
      },
      {
        name: "Python",
        level: 70,
        description: "Automação, scripts de segurança, análise de dados"
      },
      {
        name: "Inteligência Artificial",
        level: 65,
        description: "IA para desenvolvimento e automação de processos de segurança"
      }
    ]
  },
  en: {
    title: "Technical Skills", 
    subtitle: "Developing Competencies",
    skills: [
      {
        name: "Computer Networks",
        level: 75,
        description: "TCP/IP protocols, firewall configuration, traffic analysis"
      },
      {
        name: "Linux",
        level: 80, 
        description: "System administration, command line, server hardening"
      },
      {
        name: "Python",
        level: 70,
        description: "Automation, security scripts, data analysis"
      },
      {
        name: "Artificial Intelligence", 
        level: 65,
        description: "AI for development and automation of security processes"
      }
    ]
  }
};

export default function SkillsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const skillIcons = [Network, Terminal, Code, Brain];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {t.skills.map((skill, index) => {
            const IconComponent = skillIcons[index];
            return (
              <Card key={index} className="bg-gray-900 border-green-500/30 p-8 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <div className="flex items-center space-x-3 mt-2">
                        <Progress 
                          value={skill.level} 
                          className="flex-1 h-2"
                        />
                        <span className="text-green-400 font-medium text-sm">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}