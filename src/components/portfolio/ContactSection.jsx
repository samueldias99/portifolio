import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react";
import { SendEmail } from "../../integrations/Core";

const useLanguage = () => {
  const [language] = useState('pt');
  return { language };
};

const translations = {
  pt: {
    title: "Entre em Contato",
    subtitle: "Vamos Conectar e Construir o Futuro da Segurança Digital",
    form: {
      name: "Seu Nome",
      email: "Seu E-mail", 
      subject: "Assunto",
      message: "Sua Mensagem",
      send: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada com sucesso!",
      error: "Erro ao enviar mensagem. Tente novamente."
    },
    social: {
      email: "samueldias@email.com",
      linkedin: "linkedin.com/in/samuel-dias48",
      github: "github.com/samueldias99",
      whatsapp: "WhatsApp: +55 (98) 4475-8977"
    },
    directContact: "Contato Direto"
  },
  en: {
    title: "Get in Touch", 
    subtitle: "Let's Connect and Build the Future of Digital Security",
    form: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject", 
      message: "Your Message",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message. Please try again."
    },
    social: {
      email: "samueldias@email.com",
      linkedin: "linkedin.com/in/samuel-dias48", 
      github: "github.com/samueldias99",
      whatsapp: "WhatsApp: +55 (98) 4475-8977"
    },
    directContact: "Direct Contact"
  }
};

export default function ContactSection() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const t = translations[language];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await SendEmail({
        to: "samueldias@email.com",
        subject: `Contato do Portfólio: ${formData.subject}`,
        body: `
          Nome: ${formData.name}
          Email: ${formData.email}
          Assunto: ${formData.subject}
          
          Mensagem:
          ${formData.message}
        `
      });
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    
    // Clear status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: t.social.email,
      href: `mailto:${t.social.email}`,
      color: "text-red-400"
    },
    {
      icon: Linkedin, 
      label: t.social.linkedin,
      href: `https://${t.social.linkedin}`,
      color: "text-blue-400"
    },
    {
      icon: Github,
      label: t.social.github, 
      href: `https://${t.social.github}`,
      color: "text-gray-400"
    },
    {
      icon: MessageCircle,
      label: t.social.whatsapp,
      href: "https://wa.me/5598447589977",
      color: "text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gray-900 border-green-500/30 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input
                    placeholder={t.form.name}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="bg-black/50 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Input
                    type="email" 
                    placeholder={t.form.email}
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="bg-black/50 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Input
                  placeholder={t.form.subject}
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  required
                  className="bg-black/50 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400"
                />
              </div>
              
              <div className="space-y-2">
                <Textarea
                  placeholder={t.form.message}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                  rows={6}
                  className="bg-black/50 border-green-500/30 text-white placeholder:text-gray-400 focus:border-green-400 resize-none"
                />
              </div>
              
              {submitStatus && (
                <div className={`flex items-center space-x-2 p-3 rounded-lg ${
                  submitStatus === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">
                    {submitStatus === 'success' ? t.form.success : t.form.error}
                  </span>
                </div>
              )}
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-black hover:bg-green-400 font-semibold py-3 rounded-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                    {t.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    {t.form.send}
                  </>
                )}
              </Button>
            </form>
          </Card>
          
          {/* Direct Contact */}
          <div className="space-y-8">
            <Card className="bg-gray-900 border-green-500/30 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">{t.directContact}</h3>
              
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-colors duration-200 group"
                  >
                    <div className={`w-12 h-12 ${link.color} bg-opacity-20 rounded-xl flex items-center justify-center group-hover:bg-opacity-30 transition-colors duration-200`}>
                      <link.icon className={`w-6 h-6 ${link.color}`} />
                    </div>
                    <div>
                      <p className="text-white font-medium">{link.label}</p>
                      <p className="text-gray-400 text-sm">{language === 'pt' ? 'Clique para acessar' : 'Click to access'}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}