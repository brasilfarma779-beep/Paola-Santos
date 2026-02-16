
import React, { useState } from 'react';
import ServicesGallery from './components/ServicesGallery.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import { CONTACTS } from './constants.tsx';

const App: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen selection:bg-[#E5A8A8]/30">
      {/* Header / Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-[#FDF2F2]">
        <div className="container mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-2xl font-bold text-[#E5A8A8] tracking-tight serif italic">Paola Santos</span>
          <div className="hidden md:flex space-x-12 text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
            <a href="#about" className="hover:text-[#E5A8A8] transition-colors">Início</a>
            <a href="#gallery" className="hover:text-[#E5A8A8] transition-colors">Tratamentos</a>
            <a href="#contact" className="hover:text-[#E5A8A8] transition-colors">Agendar</a>
          </div>
          <a 
            href={CONTACTS.whatsappLink}
            target="_blank"
            className="bg-[#25D366] text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-green-600 transition-all shadow-md flex items-center gap-2"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-56 lg:pb-40 bg-white overflow-hidden" id="about">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FDF2F2] opacity-40 -skew-x-12 transform translate-x-1/4 -z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-7 lg:sticky lg:top-40 animate-in slide-in-from-left duration-1000">
              <div className="max-w-2xl">
                <h2 className="text-[#E5A8A8] uppercase tracking-[0.5em] text-[11px] font-black mb-8 border-l-4 border-[#E5A8A8] pl-4">
                  Excelência em Estética
                </h2>
                <h1 className="text-6xl md:text-8xl lg:text-[110px] text-gray-900 mb-8 leading-[0.85] serif font-medium">
                  Dra. Paola <span className="block italic text-[#E5A8A8]">Santos</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 mb-12 font-light italic serif leading-relaxed">
                  Realçando sua beleza natural através de procedimentos de alta performance e harmonização orofacial exclusiva.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-16">
                  <a 
                    href={CONTACTS.whatsappLink}
                    target="_blank"
                    className="bg-gray-900 text-white px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] hover:bg-[#E5A8A8] transition-all shadow-2xl shadow-gray-900/10 text-center"
                  >
                    Agendar Avaliação
                  </a>
                  <a 
                    href="#gallery"
                    className="bg-white text-gray-900 border border-gray-200 px-12 py-6 rounded-2xl text-xs font-black uppercase tracking-[0.3em] hover:border-[#E5A8A8] hover:text-[#E5A8A8] transition-all text-center"
                  >
                    Ver Tratamentos
                  </a>
                </div>

                <div className="flex gap-12 items-center opacity-50">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold serif text-gray-900 italic">Harmonização</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#E5A8A8]">Protocolos VIP</span>
                  </div>
                  <div className="w-[1px] h-8 bg-gray-300"></div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold serif text-gray-900 italic">Especialista</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#E5A8A8]">Membro Premium</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-10 animate-in zoom-in duration-1000">
              <div className="relative group">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#E5A8A8] opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute -inset-4 border border-[#E5A8A8]/10 rounded-[60px] transform rotate-3 transition-transform duration-700 group-hover:rotate-0"></div>
                
                <div className="relative overflow-hidden rounded-[60px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] bg-white">
                  <img 
                    src="https://i.imgur.com/dcLlHmd.jpg" 
                    alt="Dra. Paola Santos" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/40 to-transparent text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-1">Dra. Paola Santos</p>
                    <p className="text-xs opacity-80 serif italic">Transformando Vidas</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FDF2F2]/50 p-8 rounded-[40px] border border-[#E5A8A8]/10 shadow-sm backdrop-blur-sm">
                <ul className="space-y-4">
                  {[
                    "Avaliação facial individualizada",
                    "Planejamento estético estratégico",
                    "Acompanhamento pós-procedimento",
                    "Foco total na autoestima e bem-estar"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-gray-700 group/item">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-[#E5A8A8] border border-[#E5A8A8]/5 transition-transform group-hover/item:scale-110">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm md:text-base font-medium serif italic leading-tight">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E5A8A8] opacity-[0.05] rounded-full blur-2xl"></div>
                <div className="relative overflow-hidden rounded-[60px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-white/50 bg-white">
                  <img 
                    src="https://i.imgur.com/VT9781Z.jpg" 
                    alt="Procedimentos" 
                    className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ServicesGallery />

      <section className="py-32 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[#FDF2F2] rounded-[60px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-[#E5A8A8]/20">
            <div className="lg:w-1/2 bg-gray-900 p-16 text-white flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl serif mb-10 leading-tight">Sua jornada começa aqui.</h2>
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="text-[#E5A8A8] font-bold">(12) 98308-1390</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-10">
                <input 
                  type="text" 
                  className="w-full py-4 border-b border-gray-100 focus:border-[#E5A8A8] outline-none transition-all text-xl serif"
                  placeholder="Seu Nome"
                  required
                />
                <button 
                  type="submit" 
                  className="w-full py-7 bg-gray-900 text-white rounded-2xl hover:bg-[#E5A8A8] transition-all"
                >
                  {formStatus === 'idle' ? 'Enviar Solicitação' : 'Enviado! ✨'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 bg-white text-center border-t border-[#FDF2F2]">
        <p className="text-4xl font-bold text-[#E5A8A8] serif italic">Paola Santos</p>
      </footer>

      <AIAssistant />
      <WhatsAppButton />
    </div>
  );
};

export default App;
