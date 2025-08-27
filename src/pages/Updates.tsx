import React, { useEffect, useState } from "react";
import { Calendar, Zap, ExternalLink } from "lucide-react";

const Updates = () => {
  const [updates, setUpdates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/updates`)
      .then(res => res.json())
      .then(data => {
        setUpdates(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-gray-400">Loading updates...</div>;
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <Zap className="h-10 w-10 text-red-400 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white">Community Updates</h1>
        <p className="text-gray-400 mt-2">Fetched directly from our Discord server 🚀</p>
      </div>

      <div className="space-y-8">
        {updates.map(update => (
          <div
            key={update.id}
            className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-red-500/50 transition"
          >
            {/* Author */}
            <div className="flex items-center mb-4">
              <img
                src={update.author.avatar}
                alt={update.author.username}
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <p className="text-white font-semibold">{update.author.username}</p>
                <p className="text-gray-400 text-xs flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(update.timestamp).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="text-gray-200 whitespace-pre-wrap mb-4">{update.content}</p>

            {/* Attachments (images, files) */}
            {update.attachments.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {update.attachments.map((url: string, i: number) => (
                  <img key={i} src={url} alt="attachment" className="rounded-lg border border-slate-700" />
                ))}
              </div>
            )}

            {/* Embeds */}
            {update.embeds.length > 0 && (
              <div className="space-y-4">
                {update.embeds.map((embed: any, i: number) => (
                  <div
                    key={i}
                    className="bg-gray-900/50 p-4 rounded-lg border border-gray-700"
                  >
                    {embed.title && (
                      <h3 className="text-lg font-bold text-cyan-400 mb-2">
                      <h3 className="text-lg font-bold text-red-400 mb-2">
                        {embed.title}
                      </h3>
                    )}
                    {embed.description && (
                      <p className="text-gray-300">{embed.description}</p>
                    )}
                    {embed.url && (
                      <a
                        href={embed.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-red-400 hover:underline"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Open Link
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
