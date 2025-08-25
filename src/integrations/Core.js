// Fallback implementations for missing integrations

export const InvokeLLM = async ({ prompt, response_json_schema }) => {
  console.log('InvokeLLM called with prompt:', prompt);
  console.log('Response schema:', response_json_schema);
  
  // Fallback mock data for LinkedIn posts
  return {
    posts: [
      {
        title: "Aprendizado em Cybersecurity",
        content: "Estudando técnicas avançadas de pentest e análise de vulnerabilidades em redes corporativas.",
        date: "2 dias atrás",
        likes: 15
      },
      {
        title: "Certificação Concluída",
        content: "Finalizei o curso de Python para Segurança da Informação com êxito!",
        date: "1 semana atrás", 
        likes: 23
      },
      {
        title: "Projeto de Automação",
        content: "Desenvolvendo scripts Python para automatizar tarefas de segurança e monitoramento.",
        date: "3 dias atrás",
        likes: 18
      }
    ]
  };
};

export const SendEmail = async ({ to, subject, body }) => {
  console.log('SendEmail called:');
  console.log('To:', to);
  console.log('Subject:', subject);
  console.log('Body:', body);
  
  // Simulate successful email sending
  return { success: true };
};
