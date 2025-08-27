import React, { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import io from "socket.io-client";

const roleLabels: Record<string, string> = {
  director: "Director",
  dev: "Dev",
  serveradmins: "Server Admins",
  admins: "Admin",
  staff: "Staff",
};

const roleOrder = ["director", "dev", "serveradmins", "admins", "staff"];

const Staff = () => {
  const [staffMembers, setStaffMembers] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/staff`)
      .then((res) => res.json())
      .then((data) => setStaffMembers(data));

    const socket = io(import.meta.env.VITE_API_URL);

    socket.on("staffPresenceUpdate", (update) => {
      setStaffMembers((prev) => {
        const updated = prev.map((m) =>
          m.id === update.id ? { ...m, ...update } : m
        );
        if (!updated.find((m) => m.id === update.id)) updated.push(update);

        return updated.sort((a, b) => a.roleOrder - b.roleOrder);
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full border border-red-500/30 mb-8">
            <Shield className="h-4 w-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Meet Our Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Discord <span className="text-red-400">Staff Team</span>
          </h1>
        </div>

        {/* Grouped Staff */}
        {roleOrder.map((roleKey) => {
          const group = staffMembers.filter((m) => m.role === roleKey);
          if (!group.length) return null;

          return (
            <div key={roleKey} className="mb-16">
              <h2 className="text-2xl font-bold text-red-400 mb-6 border-b border-gray-700 pb-2">
                {roleLabels[roleKey]}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {group.map((member) => (
                  <div
                    key={member.id}
                    className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition"
                  >
                    <img
                      src={member.avatar}
                      alt={member.username}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-white font-bold text-center">
                      {member.username}
                    </h3>
                    <p className="text-red-400 text-center mb-2 capitalize">
                      {roleLabels[member.role]}
                    </p>

                    <div className="flex justify-center">
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          member.presence === "online"
                            ? "bg-green-500"
                            : member.presence === "idle"
                            ? "bg-yellow-500"
                            : member.presence === "dnd"
                            ? "bg-red-500"
                            : "bg-gray-500"
                        }`}
                      ></span>
                      <span className="ml-2 text-gray-300 text-sm capitalize">
                        {member.presence}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
