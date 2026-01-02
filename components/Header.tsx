
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
            P
          </div>
          <span className="text-xl font-bold tracking-tight hidden sm:block">Paarth Thakran</span>
        </div>
        
        <ul className="flex items-center space-x-1 sm:space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                  activeSection === item.href.substring(1) ? 'text-indigo-400' : 'text-gray-400'
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#"
            className="px-5 py-2.5 bg-gray-100 text-gray-900 rounded-full font-semibold text-sm hover:bg-white transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
};
