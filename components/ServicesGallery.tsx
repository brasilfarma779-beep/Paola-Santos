
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

const ServicesGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'labial' | 'rino' | 'clareamento'>('all');

  const filteredImages = activeTab === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeTab);

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-4 serif italic">Resultados que Encantam</h2>
          <div className="h-1 w-20 bg-[#E5A8A8] mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {(['all', 'labial', 'rino', 'clareamento'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-wide ${
                  activeTab === tab 
                  ? 'bg-[#E5A8A8] border-[#E5A8A8] text-white shadow-md' 
                  : 'border-gray-200 text-gray-600 hover:border-[#E5A8A8] hover:text-[#E5A8A8]'
                }`}
              >
                {tab === 'all' ? 'Ver Todos' : tab === 'labial' ? 'Lábios' : tab === 'rino' ? 'Nariz' : 'Clareamento'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer animate-in zoom-in duration-500"
            >
              <img 
                src={img.url} 
                alt={img.description} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx}/800/800`;
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium border-b border-white pb-1 serif italic">{img.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGallery;
