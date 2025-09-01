import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.name.trim() !== '' && 
           emailRegex.test(formData.email) && 
           formData.message.trim() !== '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900/10">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Tenho uma ideia incrível ou quer discutir uma oportunidade? 
            Adoraria ouvir de você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">eng.compflavianelima@yahoo.com</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">+55 (12) 98129-8002</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <MapPin className="w-6 h-6 text-red-600 dark:text-red-400" />
                  <span className="text-gray-700 dark:text-gray-300">São Paulo, Brasil</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/flaviane-lima-de-jesus-da-silva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/FlavianeLJSP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-110"
                >
                  GitHub
                </a>
                <a
                  href="https://www.instagram.com/dev__too/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Envie uma Mensagem
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Conte-me sobre seu projeto ou ideia..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg animate-fade-in">
                    <CheckCircle className="w-5 h-5" />
                    <span>Mensagem enviada com sucesso! Retornarei em breve.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg animate-fade-in">
                    <AlertCircle className="w-5 h-5" />
                    <span>Por favor, preencha todos os campos corretamente.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};