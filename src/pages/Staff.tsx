import React from 'react';
import { Crown, Shield, Star, Users, MessageSquare, Award } from 'lucide-react';

const Staff = () => {
  const staffMembers = [
    {
      name: 'Arjun Nair',
      role: 'Server Owner',
      icon: Crown,
      description: 'Founder and leader of Kerala Valorant community. Immortal rank player with 3+ years of experience.',
      specialties: ['Community Management', 'Tournament Organization', 'Strategic Planning'],
      rank: 'Immortal 2',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      name: 'Priya Menon',
      role: 'Head Administrator',
      icon: Shield,
      description: 'Experienced administrator ensuring smooth server operations and maintaining community standards.',
      specialties: ['Moderation', 'Event Coordination', 'Member Support'],
      rank: 'Ascendant 3',
      color: 'from-red-400 to-pink-400'
    },
    {
      name: 'Karthik Kumar',
      role: 'Tournament Manager',
      icon: Award,
      description: 'Manages all competitive events and tournaments. Professional esports background.',
      specialties: ['Tournament Brackets', 'Prize Distribution', 'Competition Rules'],
      rank: 'Immortal 1',
      color: 'from-purple-400 to-indigo-400'
    },
    {
      name: 'Sneha Raj',
      role: 'Community Moderator',
      icon: Star,
      description: 'Dedicated moderator focused on maintaining positive community environment.',
      specialties: ['Chat Moderation', 'Conflict Resolution', 'New Member Guidance'],
      rank: 'Diamond 3',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      name: 'Rohit Pillai',
      role: 'Event Coordinator',
      icon: Users,
      description: 'Organizes community events, custom games, and social activities.',
      specialties: ['Event Planning', 'Custom Games', 'Community Engagement'],
      rank: 'Ascendant 1',
      color: 'from-green-400 to-teal-400'
    },
    {
      name: 'Lakshmi Krishnan',
      role: 'Content Manager',
      icon: MessageSquare,
      description: 'Manages social media, announcements, and community content creation.',
      specialties: ['Content Creation', 'Social Media', 'News Updates'],
      rank: 'Diamond 2',
      color: 'from-pink-400 to-rose-400'
    }
  ];

  const roles = [
    { name: 'Server Owner', count: 1, color: 'text-yellow-400' },
    { name: 'Administrators', count: 2, color: 'text-red-400' },
    { name: 'Moderators', count: 8, color: 'text-cyan-400' },
    { name: 'Event Staff', count: 5, color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
            <Shield className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Meet Our Team</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Discord <span className="text-cyan-400">Staff Team</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Our dedicated team of professionals ensures the Kerala Valorant community remains 
            the best place for players to connect, compete, and grow together.
          </p>
        </div>

        {/* Staff Roles Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
            >
              <div className={`text-3xl font-bold ${role.color} mb-2`}>{role.count}</div>
              <div className="text-gray-300 text-sm">{role.name}</div>
            </div>
          ))}
        </div>

        {/* Staff Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Role Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-r ${member.color} rounded-xl shadow-lg`}>
                  <member.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Member Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-400 font-medium">{member.role}</span>
                  <span className="text-sm bg-gradient-to-r from-slate-700 to-slate-600 px-3 py-1 rounded-full text-gray-300">
                    {member.rank}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.description}</p>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-cyan-400 text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Staff Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 sm:p-12 border border-slate-700/50 text-center">
            <MessageSquare className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help from Our Team?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our staff team is always ready to help! Reach out to us on Discord for any questions, 
              suggestions, or assistance you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                Join Discord
              </button>
              <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-gray-300 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                View Rules
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;