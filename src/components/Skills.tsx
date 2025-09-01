import React from 'react';
import { skills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Skills: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = {
    languages: { title: 'Linguagens', color: 'blue' },
    frameworks: { title: 'Frameworks', color: 'purple' },
    tools: { title: 'Ferramentas', color: 'green' },
    soft: { title: 'Soft Skills', color: 'orange' }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades e Ferramentas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tecnologias e competências que utilizo para criar soluções excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillCategories).map(([category, config], categoryIndex) => (
            <div 
              key={category}
              className={`transition-all duration-1000 delay-${categoryIndex * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                  {config.title}
                </h3>
                <div className="space-y-3">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <div
                        key={skill.name}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-md ${getColorClasses(config.color)}`}
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};