import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Play, Calendar, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryItems, setGalleryItems] = useState<any[]>([]);

  const categories = ['All', 'Tournaments', 'Community', 'Gameplay', 'Events'];

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/gallery`)
      .then(res => res.json())
      .then(data => setGalleryItems(data))
      .catch(err => console.error("Failed to load gallery:", err));
  }, []);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (id: string) => setSelectedImage(id);
  const closeModal = () => setSelectedImage(null);

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full border border-red-500/30 mb-6">
          <ImageIcon className="h-4 w-4 text-red-400 mr-2" />
          <span className="text-red-400 text-sm font-medium">Community Memories</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Community <span className="text-red-400">Gallery</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Choose a category and explore our best moments!
        </p>
      </div>

      {/* Category Selection Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/50'
                : 'bg-gray-800/50 text-gray-300 border border-gray-700 hover:border-red-500/50 hover:text-red-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => openModal(item.id)}
            className="group relative bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all cursor-pointer"
          >
            <div className="relative h-64 overflow-hidden">
              <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
              )}
            </div>
            <div className="p-4">
              <span className="text-xs text-cyan-400">{item.category}</span>
              <span className="text-xs text-red-400">{item.category}</span>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-gray-800 p-6 rounded-xl max-w-3xl w-full relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-white">
              <X className="h-6 w-6" />
            </button>
            <img src={selectedItem.src} alt={selectedItem.title} className="w-full h-auto" />
            <h3 className="text-white font-bold mt-4">{selectedItem.title}</h3>
            <p className="text-gray-300">{selectedItem.description}</p>
            <div className="flex items-center text-gray-400 text-sm mt-2">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(selectedItem.date).toLocaleDateString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
