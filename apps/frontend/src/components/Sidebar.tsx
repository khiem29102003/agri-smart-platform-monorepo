'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Trees, BrainCircuit, Store, Settings, LogOut, Menu, X, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
  { icon: Trees, label: 'Farms & Plots', href: '/farms' },
  { icon: BrainCircuit, label: 'AI Advisor', href: '/ai-advisor' },
  { icon: Store, label: 'Marketplace', href: '/marketplace' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-background border border-border rounded-lg shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} className="text-foreground" /> : <Menu size={24} className="text-foreground" />}
      </button>

      <AnimatePresence>
        {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
          <motion.aside 
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed lg:sticky top-0 left-0 z-40 h-screen w-[280px] bg-background border-r border-border glassmorphism flex flex-col"
          >
            <div className="p-6 flex items-center space-x-3">
              <div className="bg-primary/10 p-2 rounded-xl">
                <Droplet className="text-primary" size={28} />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-emerald-400">
                  AgriSmart
                </h1>
                <p className="text-xs text-muted-foreground">Intelligent Platform</p>
              </div>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link href={item.href} key={item.label}>
                    <span
                      onClick={() => setIsOpen(false)}
                      className={\`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 \${
                        isActive 
                          ? 'bg-primary/10 text-primary font-medium' 
                          : 'text-secondary-foreground hover:bg-secondary/50 hover:text-foreground'
                      }\`}
                    >
                      <item.icon size={20} className={isActive ? 'text-primary' : 'text-slate-400'} />
                      <span>{item.label}</span>
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t border-border mt-auto">
              <button className="flex items-center space-x-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors w-full">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
      
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
