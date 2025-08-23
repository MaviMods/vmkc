import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Trophy, Zap, ArrowRight, Star, Target } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Users,
      title: 'Active Community',
      description: 'Join thousands of Kerala Valorant players in our vibrant Discord community',
    },
    {
      icon: Trophy,
      title: 'Tournaments',
      description: 'Participate in regular tournaments and compete for amazing prizes',
    },
    {
      icon: Zap,
      title: 'Quick Updates',
      description: 'Stay updated with the latest Valorant Mobile news and patch notes',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
              <Star className="h-4 w-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Kerala's Premier Valorant Mobile Community</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Kerala Valorant
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join the ultimate Valorant Mobile community in Kerala. Connect with fellow agents, 
              participate in tournaments, and stay updated with the latest game news.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Join Discord
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/updates"
                className="inline-flex items-center px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                Latest Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="text-cyan-400">Kerala Valorant?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Experience the best Valorant Mobile community with exclusive features and active engagement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Active Members', value: '2,500+' },
              { label: 'Tournaments', value: '50+' },
              { label: 'Prize Money', value: '₹1L+' },
              { label: 'Success Rate', value: '98%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 sm:p-12 border border-slate-700/50">
            <Target className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Join the Battle?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Become part of Kerala's most active Valorant Mobile community. Connect, compete, and conquer together!
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;