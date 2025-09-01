import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import { projects } from '../data/portfolio';

export const ProjectCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src={currentProject.image}
              alt={currentProject.title}
              className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {currentProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {currentProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={currentProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Projeto
              </a>
              <a
                href={currentProject.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-4 h-4" />
                Código Fonte
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevProject}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Projeto anterior"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>
      
      <button
        onClick={nextProject}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Próximo projeto"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
            }`}
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};