import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Staff from './pages/Staff';
import Updates from './pages/Updates';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Download from './pages/Download';
import ComingSoon from './pages/ComingSoon';
import DiscordRedirect from './redirect/DiscordRedirect';
import InstagramRedirect from './redirect/InstagramRedirect';
import TwitterRedirect from './redirect/TwitterRedirect';
import WhatsappRedirect from './redirect/WhatsappRedirect';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/download" element={<Download />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/discord" element={<DiscordRedirect />} />
          <Route path="/instagram" element={<InstagramRedirect />} />
          <Route path="/twitter" element={<TwitterRedirect />} />
          <Route path="/whatsapp" element={<WhatsappRedirect />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
