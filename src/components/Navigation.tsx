import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from './assets/logo.png'; // ⬅️ put your logo file in src/assets

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/staff', label: 'Staff' },
    { path: '/comingsoon', label: 'Updates' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/download', label: 'Download' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="relative z-50 bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={logo}
              alt="VMKC Logo"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-white font-bold hidden sm:inline-block">
              VMKC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === item.path
                      ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-slate-800 transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-slate-900/98 backdrop-blur-sm border-b border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-cyan-400 bg-cyan-500/10 border-l-4 border-cyan-500'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
