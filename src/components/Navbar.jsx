import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Sports', href: '#sports' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Reports', href: '#reports' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/70 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-accent-cyan to-accent-indigo flex items-center justify-center font-bold text-bg-primary">
            M
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">MatchGrid</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-2 rounded-lg bg-accent-cyan text-bg-primary text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_15px_rgba(214,204,153,0.3)]">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-bg-secondary/95 backdrop-blur-xl border-l border-white/10 p-6 flex flex-col z-50"
          >
            <div className="flex justify-end mb-8">
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-primary">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-text-secondary hover:text-accent-cyan transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10 my-4" />
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 rounded-lg border border-white/10 text-text-primary font-medium text-center">
                Login
              </Link>
              <Link to="/signup" onClick={() => setMobileMenuOpen(false)} className="w-full py-3 rounded-lg bg-accent-cyan text-bg-primary font-bold shadow-[0_0_15px_rgba(214,204,153,0.3)] text-center">
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
