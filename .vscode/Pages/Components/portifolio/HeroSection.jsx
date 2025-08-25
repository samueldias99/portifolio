import React, { useState, useEffect, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Linkedin, ExternalLink, Shield, Terminal } from "lucide-react";
import { InvokeLLM } from "@/integrations/Core";

// Create a simple language context for this component
const LanguageContext = createContext();

const useLanguage = () => {
  const [language, setLanguage] = useState('pt');
  
  const toggleLanguage = () => {
    setLanguage(lang => lang === 'pt' ? 'en' : 'pt');
  };
  
  return { language, toggleLanguage };
};

const translations = {
  pt: {
    greeting: "Olá, eu sou",
    name: "Samuel Dias",
    role: "Estudante de Segurança Cibernética",
    description: "Sou estudante de Segurança Cibernética, apaixonado por tecnologia, redes e proteção digital.",
    linkedinButton: "Ver LinkedIn",
    recentPosts: "Posts Recentes do LinkedIn",
    loading: "Carregando posts..."
  },
  en: {
    greeting: "Hello, I'm",
    name: "Samuel Dias", 
    role: "Cybersecurity Student",
    description: "I'm a Cybersecurity student, passionate about technology, networks and digital protection.",
    linkedinButton: "View LinkedIn",
    recentPosts: "Recent LinkedIn Posts",
    loading: "Loading posts..."
  }
};

export default function HeroSection() {
  const { language } = useLanguage();
  const [linkedinPosts, setLinkedinPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const t = translations[language];

  useEffect(() => {
    loadLinkedinPosts();
  }, [language]);

  const loadLinkedinPosts = async () => {
    setLoading(true);
    try {
      const prompt = language === 'pt' 
        ? "Simule 3 posts recentes do LinkedIn de um estudante de segurança cibernética. Cada post deve ter: título, conteúdo breve (max 100 chars), data recente, e número de curtidas. Foque em temas como: aprendizado em cibersegurança, certificações, projetos, dicas de segurança."
        : "Simulate 3 recent LinkedIn posts from a cybersecurity student. Each post should have: title, brief content (max 100 chars), recent date, and number of likes. Focus on: cybersecurity learning, certifications, projects, security tips.";
        
      const result = await InvokeLLM({
        prompt,
        response_json_schema: {
          type: "object",
          properties: {
            posts: {
              type: "array",
              items: {
                type: "object", 
                properties: {
                  title: { type: "string" },
                  content: { type: "string" },
                  date: { type: "string" },
                  likes: { type: "number" }
                }
              }
            }
          }
        }
      });
      
      setLinkedinPosts(result.posts || []);
    } catch (error) {
      console.error("Error loading LinkedIn posts:", error);
    }
    setLoading(false);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-green-400 text-lg font-medium">{t.greeting}</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {t.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
                {t.role}
              </h2>
            </div>
            
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              {t.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-green-500 text-black hover:bg-green-400 font-semibold px-8 py-3 rounded-lg"
                onClick={() => window.open('https://www.linkedin.com/in/samuel-dias48/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t.linkedinButton}
              </Button>
              
              <Button 
                variant="outline" 
                className="border-green-500 text-green-500 hover:bg-green-500/10 px-8 py-3 rounded-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Terminal className="w-5 h-5 mr-2" />
                {language === 'pt' ? 'Entre em Contato' : 'Get in Touch'}
              </Button>
            </div>
          </div>
          
          {/* Right Column - LinkedIn Posts */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-green-400" />
              <h3 className="text-2xl font-semibold text-white">{t.recentPosts}</h3>
            </div>
            
            <div className="space-y-4">
              {loading ? (
                <div className="text-gray-400 text-center py-8">
                  {t.loading}
                </div>
              ) : (
                linkedinPosts.map((post, index) => (
                  <Card key={index} className="bg-gray-900 border-green-500/30 p-6 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer transition-all duration-300">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-white line-clamp-2">{post.title}</h4>
                        <ExternalLink className="w-4 h-4 text-green-400 flex-shrink-0 ml-2" />
                      </div>
                      <p className="text-gray-400 text-sm line-clamp-3">{post.content}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.likes} curtidas</span>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}