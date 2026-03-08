import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Baby, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-4 md:px-10 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="text-primary">
            <Baby className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">MiniMüslin</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <NavLink 
            to="/"
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
            }
          >
            Koleksiyonlar
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
            }
          >
            Hakkımızda
          </NavLink>
          <NavLink 
            to="/certificates"
            className={({ isActive }) => 
              `text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'hover:text-primary'}`
            }
          >
            Sertifikalar
          </NavLink>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <a 
            href="https://wa.me/905000000000" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors flex items-center justify-center"
            title="WhatsApp Destek"
          >
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};
