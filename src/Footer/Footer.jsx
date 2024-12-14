import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social Media Icons
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-black text-white py-8 font-poppins">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center">
        {/* Navbar Items */}
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 text-center lg:text-left">
          <Link to="/" className="hover:text-blue-400">C2C CTF 2025</Link>
          <Link to="/history" className="hover:text-blue-400">History</Link>
          <Link to="/organizers" className="hover:text-blue-400">Organizers</Link>
          <Link to="/rules" className="hover:text-blue-400">Rules</Link>
          <Link to="/sponsors" className="hover:text-blue-400">Sponsors</Link>
          <Link to="/winners" className="hover:text-blue-400">Winners</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-4  border-t-slate-200">
        <p className="text-sm">&copy; {new Date().getFullYear()} C2C CTF 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
