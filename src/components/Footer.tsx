import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 items-start">
          {/* Brand */}
          <div className="flex flex-col items-start md:items-start md:col-span-1 mb-8 md:mb-0">
            <img src="/whilte-cedur.png" alt="Cedur Logo" className="w-48 mb-2" />
            <div className="text-lg font-medium text-white mb-2">Outthink | Outwork | Outlast</div>
          </div>

          {/* Our Services */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">People Platform</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Payroll</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">HR</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Time and Attendance</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Hiring and Onboarding</Link></li>
            </ul>
            
          </div>

          {/* Company */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/policy" className="text-gray-400 hover:text-white transition-colors">User Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Connect with us */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect with us</h3>
            <div className="mb-4 text-left">
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <span className="material-icons text-lg align-middle">call</span>
                <span>For Help: 011-4345-1244</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <span className="material-icons text-lg align-middle">call</span>
                <span>For Sales: +91-85959 21201</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <span className="material-icons text-lg align-middle">mail</span>
                <span>info@cedurnow.com</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="https://api.whatsapp.com/send/?phone=918595921201&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <img src="/whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/company/cedurenterprises/" target="_blank" rel="noopener noreferrer">
                <img src="/linkdin.png" alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com/cedurhq/?hl=en" target="_blank" rel="noopener noreferrer">
                <img src="/insta.png" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="https://www.youtube.com/channel/UClXPP-MfOO-PPzMnP6PidOw" target="_blank" rel="noopener noreferrer">
                <img src="/yt.png" alt="YouTube" className="w-8 h-8" />
              </a>
              <a href="https://x.com/CedurHQ" target="_blank" rel="noopener noreferrer">
                <img src="/x.png" alt="X" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Cedur Enterprises Private Limited, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
