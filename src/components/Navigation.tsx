import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, GraduationCap, Briefcase, Code, Mail, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';


const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isAdmin, setIsAdmin } = useApp();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              <p className="text-xl font-mono">
                   
                       </p>
                           <button
  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
  className="inline-flex items-center space-x-1 group"
>
  <span className="text-blue-400 group-hover:text-blue-300 transition">&lt;</span>
  <span className="text-white group-hover:text-blue-200 transition">Kavishka</span>
  <span className="text-blue-400 group-hover:text-blue-300 transition">/&gt;</span>
</button>


            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-slate-700/50"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => setIsAdmin(!isAdmin)}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-slate-700/50"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center space-x-2 transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
              <button
                onClick={() => setIsAdmin(!isAdmin)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center space-x-2 transition-colors duration-200"
              >
                <Settings className="w-4 h-4" />
                <span>Admin</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;