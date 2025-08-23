import React from "react";
import { Zap } from "lucide-react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 text-center">
      {/* Badge */}
      <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
        <Zap className="h-4 w-4 text-cyan-400 mr-2" />
        <span className="text-cyan-400 text-sm font-medium">Kerala Valorant</span>
      </div>

      {/* Title */}
      <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6">
        Coming <span className="text-cyan-400">Soon</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mb-12">
        This page is under construction. We’re preparing something exciting 
        for the Kerala Valorant community — stay tuned!
      </p>

      {/* Discord Button */}
      <a
        href="https://discord.gg/keralaval"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
      >
        Join Our Discord
      </a>
    </div>
  );
};

export default ComingSoon;
