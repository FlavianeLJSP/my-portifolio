import React from 'react';
import { ProjectCarousel } from './ProjectCarousel';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meus Projetos Recentes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Aqui estão alguns dos projetos que mais me orgulho de ter desenvolvido. 
            Cada um representa uma jornada única de aprendizado e inovação.
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
};