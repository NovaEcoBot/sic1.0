
import React from 'react';

const ResearchView: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <span className="px-2 py-1 bg-cyan-500/10 text-cyan-500 rounded text-[10px] font-bold tracking-widest uppercase">Research Mode Active</span>
        </div>
        <div className="max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold">Scientific Analysis Lab</h2>
          <p className="text-zinc-400">Collaborate with Core™ on deep knowledge creation. Use the grounding tools to verify data across multiple temporal signals.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800/50">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Prompt Engineering Lab</h3>
            <div className="space-y-4">
              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800">
                <span className="text-[10px] text-cyan-500 font-bold uppercase mb-2 block">Current Template: System Architect</span>
                <p className="text-sm text-zinc-400 font-mono">"Analyze [System X] using first-principles. Deconstruct to the following variables: [A, B, C]. Present logic as a truth table..."</p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-3 bg-cyan-500 text-zinc-950 rounded-xl text-sm font-bold hover:bg-cyan-400 transition-all">Initialize Synthesis</button>
                <button className="px-4 py-3 bg-zinc-800 rounded-xl text-zinc-300 hover:bg-zinc-700 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800/50">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Logic Verifier</h3>
            <div className="h-40 flex items-center justify-center border-2 border-dashed border-zinc-800 rounded-xl text-zinc-600">
              <span className="text-xs uppercase tracking-widest">Awaiting Premise Input...</span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-500 mb-4">Verification Sources</h3>
            <div className="space-y-3">
              {['Google Scholar', 'IEEE Xplore', 'ArXiv Delta', 'Truth DB'].map((src) => (
                <div key={src} className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">{src}</span>
                  <div className="w-12 h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-500 mb-4">Model Config</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase font-bold">Temperature</label>
                <div className="h-1 bg-zinc-800 rounded-full">
                  <div className="h-full bg-cyan-500 w-1/4"></div>
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-zinc-500 uppercase font-bold">Reasoning Tokens</label>
                <div className="h-1 bg-zinc-800 rounded-full">
                  <div className="h-full bg-cyan-500 w-3/4"></div>
                </div>
              </div>
              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked readOnly className="form-checkbox bg-zinc-800 border-zinc-700 text-cyan-500 rounded" />
                  <span className="text-[10px] text-zinc-300 uppercase font-bold">Deep Thinking Enabled</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchView;
