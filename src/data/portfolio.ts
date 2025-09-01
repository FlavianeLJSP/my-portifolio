import { Project, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento integrado e painel administrativo.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://demo.example.com",
    sourceUrl: "https://github.com/username/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gestão de tarefas com interface intuitiva, colaboração em tempo real e sincronização na nuvem.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    demoUrl: "https://taskapp.example.com",
    sourceUrl: "https://github.com/username/taskapp"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard meteorológico com previsões detalhadas, mapas interativos e alertas personalizados.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Vue.js", "API Integration", "Chart.js", "PWA"],
    demoUrl: "https://weather.example.com",
    sourceUrl: "https://github.com/username/weather"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Site portfólio responsivo com animações modernas, modo escuro e formulário de contato funcional.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Tailwind", "Framer Motion", "Netlify"],
    demoUrl: "https://portfolio.example.com",
    sourceUrl: "https://github.com/username/portfolio"
  }
];

export const skills: Skill[] = [
  // Linguagens
  { name: "JavaScript", icon: "⚡", category: "languages" },
  { name: "TypeScript", icon: "📘", category: "languages" },
  { name: "Python", icon: "🐍", category: "languages" },
  { name: "Java", icon: "☕", category: "languages" },
  
  // Frameworks
  { name: "React", icon: "⚛️", category: "frameworks" },
  { name: "Vue.js", icon: "💚", category: "frameworks" },
  { name: "Node.js", icon: "🟢", category: "frameworks" },
  { name: "Next.js", icon: "🔺", category: "frameworks" },
  
  // Ferramentas
  { name: "Git", icon: "🌿", category: "tools" },
  { name: "Docker", icon: "🐳", category: "tools" },
  { name: "AWS", icon: "☁️", category: "tools" },
  { name: "Figma", icon: "🎨", category: "tools" },
  
  // Soft Skills
  { name: "Comunicação", icon: "💬", category: "soft" },
  { name: "Trabalho em Equipe", icon: "🤝", category: "soft" },
  { name: "Resolução de Problemas", icon: "🧩", category: "soft" },
  { name: "Aprendizado Contínuo", icon: "📚", category: "soft" }
];