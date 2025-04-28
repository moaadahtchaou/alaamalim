import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { text: 'Accueil', path: '/' },
    { text: 'Rechercher', path: '/agence/rechercher-votre-bien' },
    { text: 'Services', path: '/nos-services' },
    { text: 'À Propos', path: '/qui-sommes-nous' },
    { text: 'Contact', path: '/nous-contacter' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 md:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-white text-xl font-bold tracking-wide hover:opacity-90 transition-opacity">
                Al Amal Immobilier
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className="text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          mobileOpen ? 'block' : 'hidden'
        } md:hidden fixed inset-0 z-50`}
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setMobileOpen(false)} />
        <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl">
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <span className="text-xl font-bold text-blue-600">Al Amal Immobilier</span>
          </div>
          <nav className="mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className="block px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
