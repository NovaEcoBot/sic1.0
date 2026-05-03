
import React from 'react';

const VaultView: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl font-bold">Knowledge Vault</h2>
        <div className="text-right">
          <p className="text-[10px] text-zinc-500 mono">TOTAL ARCHIVE: 14.8 TB</p>
          <p className="text-[10px] text-emerald-500 mono">INTEGRITY: 100%</p>
        </div>
      </div>

      <div className="relative group">
        <input 
          type="text" 
          placeholder="Query Archive..."
          className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 px-12 focus:outline-none focus:border-cyan-500 text-sm transition-all"
        />
        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {['Scientific Papers', 'Personal Synthesis', 'System Models', 'Temporal Logs', 'Strategic Blueprints', 'Truth Tables', 'Core Logic', 'Foundational Ethics'].map((folder) => (
          <div key={folder} className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer group">
            <div className="w-10 h-10 bg-zinc-800 rounded-lg mb-3 flex items-center justify-center group-hover:text-cyan-500 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
            </div>
            <p className="text-sm font-medium">{folder}</p>
            <p className="text-[10px] text-zinc-600 mt-1">428 Items • 1.2 GB</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900/50 border border-dashed border-zinc-700 p-12 rounded-3xl flex flex-col items-center justify-center text-zinc-500 space-y-4">
        <svg className="w-12 h-12 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
        <p className="text-sm font-medium">Drag-and-drop research assets for autonomous indexing.</p>
        <button className="px-6 py-2 bg-zinc-800 rounded-full text-xs text-zinc-300 hover:bg-zinc-700 transition-all">Select Source</button>
      </div>
    </div>
  );
};

export default VaultView;
