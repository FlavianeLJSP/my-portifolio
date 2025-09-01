export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'languages' | 'frameworks' | 'tools' | 'soft';
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}