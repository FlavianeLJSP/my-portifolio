import React from 'react';
import { Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Code2 className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">Flaviane Lima</span>
          </div>
          
          <p className="text-gray-400">
            Desenvolvedor Full-Stack | Criando experiências digitais excepcionais
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>e muito café</span>
          </div>
          
          <div className="pt-8 border-t border-gray-800 dark:border-gray-700">
            <p className="text-sm text-gray-500">
              © 2025 Flaviane Lima. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};