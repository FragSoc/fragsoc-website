'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { URLS, TEXT } from '@/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsAboutDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsAboutDropdownOpen(false);
    }, 300); // 300ms delay before closing
    setDropdownTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  return (
    <header className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo.png"
              alt="FragSoc Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">FragSoc</h1>
              <p className="text-sm text-gray-400">University of York's Gaming and Esports Society</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">
              Home
            </Link>
            
            {/* About Us Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-lg flex items-center">
                About Us
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {isAboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-gray-900 border border-gray-700 rounded-lg shadow-lg py-3 z-50">
                  <a
                    href="/about#lan-events"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    LAN Events
                  </a>
                  <a
                    href="/about#socials"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    Socials
                  </a>
                  <a
                    href="/about#twitch-streaming"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    Twitch Streaming
                  </a>
                  <Link
                    href="/committee"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    Committee
                  </Link>
                  <Link
                    href="/faq"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/fanart"
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
                  >
                    Fanart
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/esports" className="text-gray-300 hover:text-white transition-colors text-lg">
              Esports
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-lg">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <Link
            href={URLS.YORKSU_FRAGSOC}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors font-semibold"
          >
            {TEXT.MEMBERSHIP_GET}
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-gray-800 pt-6">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile About Us Collapsible Section */}
              <div>
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-white transition-colors text-lg py-2"
                >
                  About Us
                  <svg 
                    className={`w-4 h-4 transform transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isMobileAboutOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    <Link
                      href="/about"
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About FragSoc
                    </Link>
                    <a 
                      href="/about#lan-events" 
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      LAN Events
                    </a>
                    <a 
                      href="/about#socials" 
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Socials
                    </a>
                    <a 
                      href="/about#twitch-streaming" 
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Twitch Streaming
                    </a>
                    <Link 
                      href="/committee" 
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Committee
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      FAQ
                    </Link>
                    <Link 
                      href="/fanart" 
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Fanart
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                href="/esports" 
                className="text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Esports
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-white transition-colors text-lg py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href={URLS.YORKSU_FRAGSOC}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors font-semibold text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                {TEXT.MEMBERSHIP_GET}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
