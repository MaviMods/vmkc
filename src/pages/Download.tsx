import React, { useEffect, useState } from 'react';
import { Download as DownloadIcon, Smartphone, Monitor, Gamepad2, Shield, Star } from 'lucide-react';

const FILE_ID = "17ZqUANk4XbSIXiBGEaLeppCf251J-E_R"; // your Drive file ID
const API_KEY = "AIzaSyCEMNTh5tBoDgMVLvfw2fwg_1PeLayFIFY"; // replace with your Drive API key

const Download = () => {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/drive/v3/files/${FILE_ID}?fields=name,size,mimeType,modifiedTime&key=${API_KEY}`
        );
        const data = await res.json();
        setFileData({
          name: data.name,
          size: (data.size / (1024 * 1024 * 1024)).toFixed(2) + " GB",
          version: data.modifiedTime.split("T")[0], // use modified date as version
          requirements: "Android 6.0+", // still manual
          link: `https://drive.google.com/uc?export=download&id=${FILE_ID}`,
        });
      } catch (err) {
        console.error("Error fetching file info:", err);
      }
    };

    fetchFileData();
  }, []);

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
          <div
            className="relative bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                RECOMMENDED
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex p-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg mb-4">
                <Smartphone className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Android</h3>
              <p className="text-gray-400">Get the latest APK for your Android device</p>
            </div>

            {fileData ? (
              <>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-300">File:</span>
                    <span className="text-cyan-400 font-medium">{fileData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Size:</span>
                    <span className="text-cyan-400 font-medium">{fileData.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Version:</span>
                    <span className="text-cyan-400 font-medium">{fileData.version}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-700">
                    <p className="text-sm text-gray-400 mb-2">Requirements:</p>
                    <p className="text-xs text-gray-500">{fileData.requirements}</p>
                  </div>
                </div>

                <a
                  href={fileData.link}
                  download
                  className="block text-center w-full py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
                >
                  <DownloadIcon className="h-5 w-5 inline mr-2" />
                  Download Now
                </a>
              </>
            ) : (
              <p className="text-gray-400 text-center">Loading file info...</p>
            )}
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
