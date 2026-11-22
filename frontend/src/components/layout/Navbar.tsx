import React, { useState } from 'react';
import { ShieldCheck, Cpu, Terminal, Menu, X, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  onLaunchApp?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLaunchApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-midnight-950/75 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-9 h-9 rounded-lg bg-midnight-850 border border-cyan-400/30 flex items-center justify-center shadow-glow-cyan group-hover:border-cyan-400/60 transition-all">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                Constraint<span className="text-cyan-400">Catch</span>
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest -mt-0.5">
                Multi-Agent Safety
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300">
            <a 
              href="#problem" 
              className="px-3.5 py-1.5 rounded-md hover:text-cyan-300 hover:bg-white/[0.04] transition-colors"
            >
              Silent Failures
            </a>
            <a 
              href="#story" 
              className="px-3.5 py-1.5 rounded-md hover:text-cyan-300 hover:bg-white/[0.04] transition-colors"
            >
              The Core Principle
            </a>
            <a 
              href="#architecture" 
              className="px-3.5 py-1.5 rounded-md hover:text-cyan-300 hover:bg-white/[0.04] transition-colors"
            >
              Architecture
            </a>
            <a 
              href="#engine" 
              className="px-3.5 py-1.5 rounded-md hover:text-cyan-300 hover:bg-white/[0.04] transition-colors"
            >
              Validation Engine
            </a>
          </nav>

          {/* Right Action Items */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-midnight-850/80 border border-teal-500/30 text-teal-300 text-[11px] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
              <span>SAFETY GATE: ARMED</span>
            </div>
            <Button 
              variant="primary" 
              size="sm"
              onClick={onLaunchApp}
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Launch Studio
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-midnight-950/95 backdrop-blur-2xl px-4 pt-2 pb-6 space-y-3">
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/[0.05]"
          >
            Silent Failures
          </a>
          <a
            href="#story"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/[0.05]"
          >
            The Core Principle
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/[0.05]"
          >
            Architecture
          </a>
          <div className="pt-2">
            <Button 
              variant="primary" 
              size="md" 
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onLaunchApp) onLaunchApp();
              }}
            >
              Launch Studio
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
