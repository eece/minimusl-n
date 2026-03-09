import React from 'react';
import { ShoppingBag, Baby, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 backdrop-blur-md px-4 md:px-10 py-4">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <a 
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="text-primary">
            <Baby className="w-8 h-8" />
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">MiniMüslin</h1>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="./"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Koleksiyonlar
          </a>
          <a 
            href="./about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Hakkımızda
          </a>
          <a 
            href="./certificates"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Sertifikalar
          </a>
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
