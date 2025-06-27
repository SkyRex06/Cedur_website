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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm w-full px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 font-bold text-2xl md:text-3xl text-gray-900">
        <img src="/cedur-logo.png" alt="Cedur Logo" className="h-10 w-auto md:h-12" />
      </Link>
      {/* Navigation */}
      <div className="hidden md:flex flex-1 items-center justify-center">
        <div className="flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`px-2 py-1 text-sm md:text-base font-medium transition-colors duration-150 rounded hover:text-purple-700 hover:bg-gray-100 ${
                location.pathname === item.href
                  ? 'text-purple-700 font-semibold'
                  : 'text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Auth Buttons */}
      <div className="hidden md:flex items-center space-x-2">
        <Link
          to="/login"
          className="px-4 py-2 text-xs md:text-sm rounded-full font-medium bg-white text-gray-900 hover:bg-gray-100 transition-colors duration-150"
        >
          Sign In
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 text-xs md:text-sm rounded-full font-medium bg-purple-700 text-white hover:bg-purple-800 transition-colors duration-150"
        >
          Sign Up
        </Link>
      </div>
      {/* Hamburger for mobile */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg p-4 flex flex-col items-center space-y-2 z-50">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-center px-4 py-2 rounded text-base font-medium transition-colors duration-150 hover:text-purple-700 hover:bg-gray-100 ${
                location.pathname === item.href
                  ? 'text-purple-700 font-semibold'
                  : 'text-gray-900'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col w-full gap-2 mt-2">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 rounded-full text-base font-medium bg-white text-gray-900 hover:bg-gray-100 text-center"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="w-full px-4 py-2 rounded-full text-base font-medium bg-purple-700 text-white hover:bg-purple-800 text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
