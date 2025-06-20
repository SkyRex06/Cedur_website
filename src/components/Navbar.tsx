import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between rounded-full shadow-md px-6 py-2">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/cedur-logo.png" alt="Cedur Logo" className="h-8 w-auto" />
          </Link>

          {/* Navigation in the center */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-150 hover:bg-white hover:text-purple-700 ${
                    location.pathname === item.href
                      ? 'bg-white text-purple-700 shadow'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Auth Buttons on the right */}
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-2 py-1">
            <Link
              to="/login"
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 bg-white text-gray-700 hover:bg-gray-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors duration-150 bg-gray-900 text-white hover:bg-gray-800"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
