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

  const contactMethods = [
    {
      icon: Discord,
      title: 'Discord Server',
      description: 'Join our community',
      value: 'discord',
      action: 'Join Now',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      value: 'support@keralaval.com',
      action: 'Send Email',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow our updates',
      value: 'instagram',
      action: 'Follow Us',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Twitter,
      title: 'Twitter',
      description: 'Latest news & updates',
      value: 'twitter',
      action: 'Follow Us',
      color: 'from-blue-500 to-cyan-500'
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            
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

          {/* Contact Methods + Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
            
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-gradient-to-r ${method.color} rounded-lg shadow-lg`}>
                    <method.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">{method.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                  </div>
                  <a
                    href={method.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-300 text-sm font-medium hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                  >
                    {method.action}
                  </a>
                </div>
              </div>
            ))}

            {/* Location Info */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Kerala, India<br />
                    Serving all districts and major cities<br />
                    Online community - Join from anywhere!
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-lg font-semibold text-white mb-3">Response Times</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Discord Messages:</span>
                  <span className="text-cyan-400 font-medium">5-15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Email Support:</span>
                  <span className="text-cyan-400 font-medium">2-4 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">General Inquiries:</span>
                  <span className="text-cyan-400 font-medium">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 sm:p-12 border border-slate-700/50">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: 'How do I join the Discord server?',
                  answer: 'Click on any "Join Discord" button or use our invite link: discord.gg/keralaval'
                },
                {
                  question: 'Can I participate in tournaments?',
                  answer: 'Yes! All skill levels are welcome. Check our Updates page for upcoming tournaments.'
                },
                {
                  question: 'Do you offer coaching services?',
                  answer: 'We have experienced players who provide tips and guidance in our coaching channels.'
                },
                {
                  question: 'Is the community only for Kerala players?',
                  answer: 'While focused on Kerala, players from other regions are welcome to join and participate!'
                }
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
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
                href="https://discord.gg/HwZKKJ4CWf"
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
