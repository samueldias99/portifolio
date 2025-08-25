import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Award } from "lucide-react";

const useLanguage = () => {
  const [language] = useState('pt');
  return { language };
};

const translations = {
  pt: {
    title: "Cursos Concluídos",
    subtitle: "Certificações e Especializações",
    viewCertificate: "Ver Certificado",
    completed: "Concluído",
    courses: [
      {
        name: "Python para Hackers",
        institution: "CyberSec Academy",
        date: "Dezembro 2023",
        duration: "40 horas",
        description: "Programação Python aplicada à segurança cibernética, desenvolvimento de ferramentas de pentest e automação.",
        skills: ["Python", "Automação", "Pentest", "Scripts"]
      },
      {
        name: "Redes para Segurança da Informação", 
        institution: "TechSec Institute",
        date: "Janeiro 2024",
        duration: "60 horas", 
        description: "Fundamentos de redes, protocolos de segurança, análise de tráfego e configuração de firewalls.",
        skills: ["Redes", "TCP/IP", "Firewall", "Wireshark"]
      },
      {
        name: "Deep Web e Dark Web",
        institution: "Digital Forensics Lab",
        date: "Fevereiro 2024", 
        duration: "30 horas",
        description: "Exploração segura da deep web, ferramentas de anonimato, investigação digital e OSINT.",
        skills: ["OSINT", "Tor", "Investigação", "Anonimato"]
      },
      {
        name: "Introdução à Segurança da Informação",
        institution: "InfoSec Certified",
        date: "Março 2024",
        duration: "50 horas",
        description: "Conceitos fundamentais de segurança, gestão de riscos, políticas de segurança e compliance.",
        skills: ["Governança", "ISO 27001", "Riscos", "Compliance"]
      }
    ]
  },
  en: {
    title: "Completed Courses",
    subtitle: "Certifications and Specializations", 
    viewCertificate: "View Certificate",
    completed: "Completed",
    courses: [
      {
        name: "Python for Hackers",
        institution: "CyberSec Academy", 
        date: "December 2023",
        duration: "40 hours",
        description: "Python programming applied to cybersecurity, pentest tools development and automation.",
        skills: ["Python", "Automation", "Pentest", "Scripts"]
      },
      {
        name: "Networks for Information Security",
        institution: "TechSec Institute",
        date: "January 2024", 
        duration: "60 hours",
        description: "Network fundamentals, security protocols, traffic analysis and firewall configuration.",
        skills: ["Networks", "TCP/IP", "Firewall", "Wireshark"]
      },
      {
        name: "Deep Web and Dark Web",
        institution: "Digital Forensics Lab",
        date: "February 2024",
        duration: "30 hours", 
        description: "Safe deep web exploration, anonymity tools, digital investigation and OSINT.",
        skills: ["OSINT", "Tor", "Investigation", "Anonymity"]
      },
      {
        name: "Introduction to Information Security",
        institution: "InfoSec Certified",
        date: "March 2024",
        duration: "50 hours",
        description: "Security fundamentals, risk management, security policies and compliance.",
        skills: ["Governance", "ISO 27001", "Risks", "Compliance"]
      }
    ]
  }
};

export default function CoursesSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {t.courses.map((course, index) => (
            <Card key={index} className="bg-gray-900 border-green-500/30 p-8 hover:shadow-lg hover:shadow-green-500/20 group transition-all duration-300">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-green-400 transition-colors duration-200">
                      {course.name}
                    </h3>
                    <p className="text-gray-400 font-medium">{course.institution}</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    <Award className="w-3 h-3 mr-1" />
                    {t.completed}
                  </Badge>
                </div>
                
                {/* Course Info */}
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{course.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed">{course.description}</p>
                
                {/* Skills */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-white">
                    {language === 'pt' ? 'Habilidades:' : 'Skills:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {course.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline" 
                        className="border-green-500/30 text-green-400 hover:bg-green-500/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Certificate Button */}
                <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium transition-colors duration-200 group-hover:translate-x-1">
                  <span>{t.viewCertificate}</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}