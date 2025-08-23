import React from 'react';
import { Calendar, Zap, Download, ExternalLink, Clock, TrendingUp } from 'lucide-react';

const Updates = () => {
  const updates = [
    {
      id: 1,
      title: 'Episode 8 Act 1 - New Agent Harbor',
      date: '2024-01-15',
      type: 'Major Update',
      description: 'Introducing Harbor, the water-based Controller agent with powerful defensive capabilities. New battle pass, skins, and map changes included.',
      features: [
        'New Agent: Harbor with water-based abilities',
        'Updated Pearl map with additional cover points',
        'New weapon skin collection: Spectrum 2.0',
        'Ranked system improvements'
      ],
      image: 'https://images.pexels.com/photos/7915215/pexels-photo-7915215.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Game Update'
    },
    {
      id: 2,
      title: 'Kerala Valorant Tournament #5',
      date: '2024-01-10',
      type: 'Community Event',
      description: 'Registration is now open for our biggest tournament yet! Prize pool of ₹25,000 and exclusive in-game rewards.',
      features: [
        '₹25,000 total prize pool',
        'Open to all skill levels',
        'Team and solo registration available',
        'Live streaming on Twitch'
      ],
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Tournament'
    },
    {
      id: 3,
      title: 'Patch 7.12 - Balance Changes',
      date: '2024-01-08',
      type: 'Balance Update',
      description: 'Significant balance changes to multiple agents and weapons. Jett nerfs, Sage buffs, and Vandal adjustments.',
      features: [
        'Jett dash cooldown increased to 12 seconds',
        'Sage healing orb now heals for 60 HP',
        'Vandal first shot accuracy improved',
        'Phoenix abilities duration increased'
      ],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Balance'
    },
    {
      id: 4,
      title: 'Discord Server Milestones',
      date: '2024-01-05',
      type: 'Community Update',
      description: 'We\'ve reached 2,500 members! New channels, bots, and exclusive perks for active members.',
      features: [
        'New voice channels for ranked games',
        'Custom Discord bot with Valorant stats',
        'Exclusive roles for tournament winners',
        'Weekly community events scheduled'
      ],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Community'
    }
  ];

  const categories = ['All', 'Game Update', 'Tournament', 'Balance', 'Community'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredUpdates = selectedCategory === 'All' 
    ? updates 
    : updates.filter(update => update.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Game Update': 'from-cyan-500 to-blue-500',
      'Tournament': 'from-yellow-500 to-orange-500',
      'Balance': 'from-purple-500 to-pink-500',
      'Community': 'from-green-500 to-teal-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
            <Zap className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Latest News & Updates</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Valorant <span className="text-cyan-400">Updates</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Stay up to date with the latest Valorant Mobile patches, community tournaments, 
            and Kerala server news. Never miss an important update!
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: TrendingUp, label: 'Latest Patch', value: '7.12' },
            { icon: Calendar, label: 'Last Update', value: '2 days ago' },
            { icon: Clock, label: 'Next Event', value: '5 days' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 flex items-center space-x-4"
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                <stat.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
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

        {/* Updates List */}
        <div className="space-y-8">
          {filteredUpdates.map((update) => (
            <div
              key={update.id}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/3">
                  <div className="h-64 lg:h-full overflow-hidden">
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(update.category)}`}>
                      {update.type}
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(update.date).toLocaleDateString()}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {update.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {update.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {update.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-1.5 w-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Full Update
                    </button>
                    {update.category === 'Game Update' && (
                      <button className="inline-flex items-center px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                        <Download className="h-4 w-4 mr-2" />
                        Download Update
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 sm:p-12 border border-slate-700/50 text-center">
            <Zap className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss an Update
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our Discord server to get instant notifications about new updates, patches, 
              and community events directly in your feed.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Join Discord for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;