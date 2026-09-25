import React from 'react';
import { Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-bg-secondary/20 pt-16 pb-8 relative mt-12 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-accent-cyan to-accent-indigo flex items-center justify-center font-bold text-bg-primary">
                M
              </div>
              <span className="text-xl font-bold tracking-tight">MatchGrid</span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs mb-6">
              The premier platform for planning, joining, and playing sports with friends and local communities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-text-secondary hover:text-accent-cyan transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Sports</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>&copy; {currentYear} MatchGrid Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
