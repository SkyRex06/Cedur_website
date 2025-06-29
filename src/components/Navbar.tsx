import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { toast } from './ui/sonner';
import { Dialog } from '@headlessui/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('expiresAt');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setUser(null);
    setShowLogoutModal(false);
    navigate('/');
    toast.success('You have been logged out.');
  };

  const cancelLogout = () => setShowLogoutModal(false);

  React.useEffect(() => {
    // Check for token/user in localStorage or sessionStorage
    let userData = null;
    let token = null;
    let expiresAt = null;
    if (localStorage.getItem('token') && localStorage.getItem('user')) {
      token = localStorage.getItem('token');
      userData = localStorage.getItem('user');
      expiresAt = localStorage.getItem('expiresAt');
      if (expiresAt && Date.now() > Number(expiresAt)) {
        // Token expired, clear storage
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('expiresAt');
        userData = null;
        token = null;
      }
    }
    if (!userData && sessionStorage.getItem('token') && sessionStorage.getItem('user')) {
      token = sessionStorage.getItem('token');
      userData = sessionStorage.getItem('user');
    }
    if (userData && token) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
  }, []);

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
      {/* Auth/User Buttons */}
      <div className="hidden md:flex items-center space-x-2">
        {user ? (
          <div className="relative group">
            <button className="focus:outline-none" tabIndex={0}>
              <Avatar>
                <AvatarImage src={user.avatar || undefined} alt={user.firstName || 'User'} />
                <AvatarFallback>{user.firstName ? user.firstName[0] : 'U'}</AvatarFallback>
              </Avatar>
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 pointer-events-none group-focus-within:pointer-events-auto group-hover:pointer-events-auto transition-opacity duration-150">
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 text-sm font-medium"
                onClick={() => navigate('/dashboard')}
              >
                Dashboard
              </button>
              <button
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 text-sm font-medium"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
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
            {user ? (
              <>
                <button
                  className="w-full px-4 py-2 rounded-full text-base font-medium bg-white text-gray-900 hover:bg-gray-100 text-center"
                  onClick={() => { setIsOpen(false); navigate('/dashboard'); }}
                >
                  Dashboard
                </button>
                <button
                  className="w-full px-4 py-2 rounded-full text-base font-medium bg-purple-50 text-purple-700 hover:bg-purple-100 text-center"
                  onClick={() => { setIsOpen(false); handleLogout(); }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      <Dialog open={showLogoutModal} onClose={cancelLogout} className="fixed z-50 inset-0 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-40" aria-hidden="true" />
        <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full mx-auto z-50">
          <Dialog.Title className="text-lg font-bold mb-4 text-gray-900">Are you sure you want to logout?</Dialog.Title>
          <div className="flex gap-4 justify-end">
            <button
              className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-medium hover:bg-gray-200"
              onClick={cancelLogout}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-purple-700 text-white font-medium hover:bg-purple-800"
              onClick={confirmLogout}
            >
              Yes, Logout
            </button>
          </div>
        </div>
      </Dialog>
    </nav>
  );
};

export default Navbar;
