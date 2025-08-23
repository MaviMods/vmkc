import React, { useEffect, useState } from "react";
import { Shield, Circle } from "lucide-react";

const Staff = () => {
  const [staffMembers, setStaffMembers] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/staff`)
      .then(res => res.json())
      .then(data => setStaffMembers(data))
      .catch(err => console.error("Failed to load staff:", err));
  }, []);

  const presenceColors: Record<string, string> = {
    online: "text-green-400",
    idle: "text-yellow-400",
    dnd: "text-red-500",
    offline: "text-gray-500",
  };

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
            Our staff ensures the Kerala Valorant community runs smoothly.
          </p>
        </div>

        {/* Staff Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={member.avatar}
                  alt={member.username}
                  className="w-16 h-16 rounded-full border-2 border-slate-600"
                />
                <div>
                  <h3 className="text-xl font-bold text-white">{member.username}</h3>
                  <p className="text-cyan-400 capitalize">{member.role}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Circle className={`h-4 w-4 ${presenceColors[member.presence]}`} />
                <span className="text-sm text-gray-300 capitalize">
                  {member.presence}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;
