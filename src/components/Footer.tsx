import React from 'react';
import { Heart, Code, Github, Linkedin, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Footer: React.FC = () => {
  const { userData } = useApp();

  const socialIcons = [
    { icon: Github, href: userData.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: userData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Facebook, href: userData.socialLinks.facebook, label: 'Facebook' },
    { icon: Instagram, href: userData.socialLinks.instagram, label: 'Instagram' },
    { icon: MessageCircle, href: userData.socialLinks.whatsapp, label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Kavishka Thilakarathna.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {userData.title} passionate about creating innovative solutions and building amazing digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(`#${item.toLowerCase()}`);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a
                  href="mailto:tkavishka101@gmail.com"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  info.kavishkathilakarathna@gmail.com
                </a>
              </p>
              <p className="text-gray-400"></p>
              <p className="text-gray-400">Tech Expertise for Hire – Let’s Collaborate 💼</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by Code24.LABS 🇱🇰 </span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kavishka Thilakarathna. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;