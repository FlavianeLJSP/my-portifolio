import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Olá, sou Flaviane Lima
            </h2>
            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Olá! Me chamo Flaviane Lima De Pina, sou estudante de Engenharia
                da Computação pela UNIVESP, atualmente no 7º semestre. Estudo e
                pratico tecnologia há mais de 5 anos, desde que iniciei cursos
                livres por conta própria e descobri minha paixão por
                desenvolvimento e inovação. Ao longo dessa jornada, venho me
                especializando em tecnologias modernas como React, Node.js,
                Python, JavaScript, HTML, CSS e frameworks como Django. Tenho
                grande interesse por desenvolvimento web, backend, automação,
                software embarcado, Inteligência Artificial e Engenharia de
                Prompt. Sou autodidata, curiosa e determinada. Gosto de resolver
                problemas, trabalhar em equipe e estou sempre buscando aprender
                algo novo. Acredito que a melhor tecnologia é aquela que resolve
                problemas reais de forma elegante, acessível e com foco no
                usuário.
              </p>
              <p>
                Quando não estou codando, gosto de explorar novas ferramentas,
                estudar tendências da área, contribuir com projetos open-source
                e compartilhar conhecimento com a comunidade. Minha missão é
                criar soluções digitais que funcionem bem e proporcionem
                experiências excepcionais para quem as utiliza. Também estudo
                inglês com foco técnico e já consigo compreender bem
                documentações, artigos e me comunicar em situações básicas da
                área. Estou em constante evolução para atuar com mais segurança
                em ambientes onde o idioma é necessário.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    50+
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Projetos Concluídos
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    5+
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Anos de Experiência
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
                    100%
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Satisfação Cliente
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                  <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                    24/7
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Suporte Dedicado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
