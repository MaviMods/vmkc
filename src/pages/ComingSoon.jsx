import React from "react";
import { Zap } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6 text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600/20 to-white/20 rounded-full border border-red-600/30 mb-8">
        <Zap className="h-4 w-4 text-red-500 mr-2" />
        <span className="text-red-500 text-sm font-medium">Valorant Mobile Kerala</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
        Coming <span className="text-red-500">Soon</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-12">
        This page is under construction. We’re preparing something exciting 
        for the Valorant Mobile Kerala community — stay tuned!
      </p>

      {/* Discord Button */}
      <a
        href="https://discord.gg/keralaval"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-gradient-to-r from-red-600 to-white text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300"
      >
        Join Our Discord
      </a>
    </div>
  );
};

export default ComingSoon;
