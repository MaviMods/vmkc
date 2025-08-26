import React from 'react';
import { Download as DownloadIcon, Smartphone, Monitor, Gamepad2, Shield, Star, CheckCircle } from 'lucide-react';

const Download = () => {
  const downloadOptions = [
    {
      platform: 'Android',
      icon: Smartphone,
      description: 'Get the latest APK for your Android device',
      version: '1.0.0',
      size: '1.8 GB',
      requirements: 'Android 6.0+',
      downloadLink: 'https://mega.nz/file/LRMWFKCD#Ml8PHB_c62m4Q5MiWUQl6fH21Eg7lBBRQTreXl-Er20',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    {
      platform: 'iOS',
      icon: Smartphone,
      description: 'Download from App Store for iOS devices',
      version: '5.12.0',
      size: '2.3 GB',
      requirements: 'iOS 12.0+, iPhone 6s or newer',
      downloadLink: '#',
      featured: false,
      color: 'from-blue-500 to-indigo-500'
    }
  ];


  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'All downloads are verified and malware-free'
    },
    {
      icon: Star,
      title: 'Latest Version',
      description: 'Always up-to-date with official releases'
    },
    {
      icon: Gamepad2,
      title: 'Optimized',
      description: 'Best settings and configurations included'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
            <DownloadIcon className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Get the Game</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Download <span className="text-cyan-400">Valorant Mobile</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Get the latest version of Valorant Mobile and join the Valorant Mobile Kerala community. 
            Choose your platform and start your tactical shooter journey today!
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg inline-flex mb-4">
                <feature.icon className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Download Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {downloadOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:shadow-lg ${
                option.featured 
                  ? 'border-cyan-500/50 hover:shadow-cyan-500/20' 
                  : 'border-slate-700/50 hover:border-cyan-500/50 hover:shadow-cyan-500/10'
              }`}
            >
              {option.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-r ${option.color} rounded-xl shadow-lg mb-4`}>
                  <option.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{option.platform}</h3>
                <p className="text-gray-400">{option.description}</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-300">Version:</span>
                  <span className="text-cyan-400 font-medium">{option.version}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Size:</span>
                  <span className="text-cyan-400 font-medium">{option.size}</span>
                </div>
                <div className="pt-2 border-t border-slate-700">
                  <p className="text-sm text-gray-400 mb-2">Requirements:</p>
                  <p className="text-xs text-gray-500">{option.requirements}</p>
                </div>
              </div>

              <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] ${
                option.featured
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                  : 'bg-slate-700/50 border border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
              }`}>
                <DownloadIcon className="h-5 w-5 inline mr-2" />
                Download Now
              </button>
            </div>
          ))}
        </div>

        {/* Installation Guide */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 sm:p-12 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Installation <span className="text-cyan-400">Guide</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Android Installation</h3>
                <ol className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                    Enable "Unknown Sources" in your security settings
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                    Download the APK file from the official source
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                    Tap the APK file and follow installation prompts
                  </li>
                  <li className="flex items-start">
                    <span className="bg-cyan-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">4</span>
                    Launch the game and complete the setup
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-slate-700/50">
            <Monitor className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help with Installation?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our community is here to help! Join our Discord server for step-by-step assistance 
              and troubleshooting support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                Get Help on Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
