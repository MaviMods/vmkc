import React, { useState } from 'react';
import {
  MessageCircle, Mail, MapPin, Send,
  Disc as Discord, Instagram, Twitter
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    discordUsername: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setPopup(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Something went wrong');
      }

      setPopup({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', discordUsername: '', subject: '', message: '' });
    } catch (err: any) {
      setPopup({ type: 'error', message: `Failed to send: ${err.message}` });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const subjects = [
    'General Inquiry',
    'Tournament Registration',
    'Technical Support',
    'Partnership Proposal',
    'Bug Report',
    'Feedback & Suggestions'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-8">
            <MessageCircle className="h-4 w-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact <span className="text-cyan-400">Our Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Have questions, feedback, or need support? We're here to help!
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto bg-slate-800/30 p-8 rounded-xl border border-slate-700/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Discord Username</label>
              <input
                type="text"
                name="discordUsername"
                value={formData.discordUsername}
                onChange={handleChange}
                required
                placeholder="e.g. mavi_dev"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
              >
                <option value="">Select a subject</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold disabled:opacity-50"
            >
              <Send className="h-5 w-5 mr-2" />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Popup Modal */}
      {popup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-slate-800 p-6 rounded-xl max-w-sm w-full border border-slate-700 text-center">
            <h2 className={`text-xl font-bold mb-4 ${popup.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {popup.type === 'success' ? '✅ Success!' : '❌ Error'}
            </h2>
            <p className="text-gray-300 mb-6">{popup.message}</p>

            {popup.type === 'success' && (
              <a
                href="https://discord.gg/keralaval"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
              >
                Join our Discord
              </a>
            )}

            <button
              onClick={() => setPopup(null)}
              className="mt-4 block w-full px-4 py-2 rounded-lg bg-slate-700 text-gray-300 hover:bg-slate-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;