import React, { useState } from 'react';
import { Image as ImageIcon, Play, Trophy, Users, Calendar, X } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = ['All', 'Tournaments', 'Community', 'Gameplay', 'Events'];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Kerala Valorant Tournament Finals',
      description: 'Epic finals match between Team Phoenix and Team Sage',
      category: 'Tournaments',
      date: '2024-01-15'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Community Meetup Kochi',
      description: 'Amazing turnout at our first offline meetup in Kochi',
      category: 'Community',
      date: '2024-01-12'
    },
    {
      id: 3,
      type: 'video',
      src: 'https://images.pexels.com/photos/7915215/pexels-photo-7915215.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Ace Clutch Highlights',
      description: 'Best ace moments from our community members',
      category: 'Gameplay',
      date: '2024-01-10'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'New Agent Harbor Showcase',
      description: 'Community reactions to the new Controller agent',
      category: 'Events',
      date: '2024-01-08'
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Game Night',
      description: 'Fun custom games with community members',
      category: 'Community',
      date: '2024-01-05'
    },
    {
      id: 6,
      type: 'video',
      src: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Tournament Highlights Reel',
      description: 'Best moments from Tournament #4',
      category: 'Tournaments',
      date: '2024-01-03'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Team Strategy Session',
      description: 'Pro players sharing strategies with the community',
      category: 'Events',
      date: '2024-01-01'
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.pexels.com/photos/6764046/pexels-photo-6764046.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Winner Celebration',
      description: 'Champions of Kerala Cup 2024 celebrating victory',
      category: 'Tournaments',
      date: '2023-12-28'
    }
  ];

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openModal = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const selectedItem = galleryItems.find(item => item.id === selectedImage);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
            <ImageIcon className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Community Memories</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Community <span className="text-cyan-400">Gallery</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Relive the best moments from our tournaments, community events, and epic gameplay highlights. 
            See what makes Kerala Valorant community so special!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: ImageIcon, label: 'Photos', value: '500+' },
            { icon: Play, label: 'Videos', value: '50+' },
            { icon: Trophy, label: 'Tournaments', value: '25+' },
            { icon: Users, label: 'Events', value: '100+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg inline-flex mb-4">
                <stat.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-800/50 text-gray-300 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400'
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
              className="group relative bg-slate-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer"
              onClick={() => openModal(item.id)}
            >
              {/* Image/Video Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Video Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full p-4 group-hover:bg-cyan-500/20 transition-colors">
                      <Play className="h-8 w-8 text-white fill-white" />
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    item.category === 'Tournaments' ? 'bg-yellow-500/20 text-yellow-400' :
                    item.category === 'Community' ? 'bg-green-500/20 text-green-400' :
                    item.category === 'Gameplay' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {item.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="font-semibold text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 sm:p-12 border border-slate-700/50 text-center">
            <ImageIcon className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Share Your Moments
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Have amazing screenshots or videos from our community events? 
              Share them with us and they might be featured in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                Share on Discord
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                Submission Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full bg-slate-800 rounded-xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  selectedItem.category === 'Tournaments' ? 'bg-yellow-500/20 text-yellow-400' :
                  selectedItem.category === 'Community' ? 'bg-green-500/20 text-green-400' :
                  selectedItem.category === 'Gameplay' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {selectedItem.category}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(selectedItem.date).toLocaleDateString()}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
              <p className="text-gray-300">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;