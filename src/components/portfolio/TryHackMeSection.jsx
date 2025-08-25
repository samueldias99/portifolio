import React, { useState } from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Trophy, Target, Zap, Award } from "lucide-react";

const useLanguage = () => {
  const [language] = useState('pt');
  return { language };
};

const translations = {
  pt: {
    title: "Progresso TryHackMe",
    subtitle: "Jornada de Aprendizado Prático",
    stats: {
      rank: "Ranking Atual",
      streak: "Dias Consecutivos",
      rooms: "Salas Concluídas",
      points: "Pontos Totais"
    },
    achievements: "Conquistas Recentes",
    badges: [
      { name: "7 Day Streak", color: "bg-green-500" },
      { name: "Beginner", color: "bg-blue-500" },
      { name: "Pentester", color: "bg-purple-500" },
      { name: "Web Application Hacker", color: "bg-red-500" }
    ]
  },
  en: {
    title: "TryHackMe Progress",
    subtitle: "Practical Learning Journey", 
    stats: {
      rank: "Current Rank",
      streak: "Day Streak", 
      rooms: "Rooms Completed",
      points: "Total Points"
    },
    achievements: "Recent Achievements",
    badges: [
      { name: "7 Day Streak", color: "bg-green-500" },
      { name: "Beginner", color: "bg-blue-500" },
      { name: "Pentester", color: "bg-purple-500" },
      { name: "Web Application Hacker", color: "bg-red-500" }
    ]
  }
};

export default function TryHackMeSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const stats = [
    {
      icon: Trophy,
      label: t.stats.rank,
      value: "#2,847",
      progress: 68
    },
    {
      icon: Zap,
      label: t.stats.streak, 
      value: "15",
      progress: 15
    },
    {
      icon: Target,
      label: t.stats.rooms,
      value: "23",
      progress: 77
    },
    {
      icon: Award,
      label: t.stats.points,
      value: "1,240",
      progress: 62
    }
  ];

  return (
    <section id="tryhackme" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gray-900 border-green-500/30 p-6 hover:shadow-lg hover:shadow-green-500/20 text-center transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="w-8 h-8 text-green-400" />
                </div>
                
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
                
                <div className="space-y-2">
                  <Progress value={stat.progress} className="h-2" />
                  <p className="text-green-400 text-xs font-medium">{stat.progress}%</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card className="bg-gray-900 border-green-500/30 p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center text-white">{t.achievements}</h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {t.badges.map((badge, index) => (
                <Badge 
                  key={index}
                  className={`${badge.color} text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200`}
                >
                  <Award className="w-4 h-4 mr-2" />
                  {badge.name}
                </Badge>
              ))}
            </div>
            
            <div className="text-center">
              <button 
                onClick={() => window.open('https://tryhackme.com/p/samuel.dias.rosa99', '_blank')}
                className="text-green-400 hover:text-green-300 font-medium inline-flex items-center space-x-2 transition-colors duration-200"
              >
                <span>{language === 'pt' ? 'Ver Perfil Completo' : 'View Full Profile'}</span>
                <Trophy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}