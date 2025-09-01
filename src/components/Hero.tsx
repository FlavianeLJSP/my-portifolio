import React from 'react';
import { Download, ChevronDown } from 'lucide-react';
import avatarImg from './imagens/avatar.png';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob [animation-delay:2s]"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob [animation-delay:4s]"></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Olá, sou{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Flaviane Lima
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg">
                Desenvolvedor Full-Stack apaixonado por criar experiências digitais incríveis e interfaces intuitivas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Ver Projetos
              </button>
              <a
                href="/cv.pdf"
                download
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Baixar CV
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end animate-fade-in-up [animation-delay:0.5s]">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full shadow-2xl overflow-hidden">
                <img
                  src={avatarImg}
                  alt="Foto de Flaviane Lima"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </section>
  );
};