
import React from 'react';
import { NAVIGATION_ITEMS } from '../constants.tsx';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-20 md:w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col">
      <div className="p-6 border-b border-zinc-800 flex items-center gap-3">
        <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center shrink-0">
          <span className="text-zinc-950 font-bold text-xl">S</span>
        </div>
        <span className="hidden md:block font-bold tracking-tighter text-lg">
          CORE <span className="text-cyan-500">™</span>
        </span>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-4 space-y-1">
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
              activeTab === item.id 
                ? 'bg-zinc-900 text-cyan-500 border-r-2 border-cyan-500' 
                : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
            </svg>
            <span className="hidden md:block text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="hidden md:flex items-center gap-3 p-2 bg-zinc-900 rounded-lg">
          <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold">Scientific Mode</span>
            <span className="text-[10px] text-zinc-500">2026 Ready</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
