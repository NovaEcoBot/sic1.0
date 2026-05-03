
import React from 'react';

const TrendsView: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      <header className="space-y-4">
        <h2 className="text-3xl font-bold text-zinc-100">Signal & Narrative Analysis</h2>
        <p className="text-zinc-400 max-w-2xl">
          Identifying weak signals and emerging narratives by cross-analyzing global behavioral patterns. 
          The core separates human noise from structural shifts.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500">Active Narratives</h3>
            <span className="text-[10px] text-zinc-500 mono">Live Delta: +0.42</span>
          </div>
          <div className="space-y-4">
            {[
              { label: "Decentralized Science (DeSci)", strength: "High", trend: "Upward" },
              { label: "Cognitive Sovereignty", strength: "Emerging", trend: "Accelerating" },
              { label: "Post-LLM Rigor", strength: "Weak", trend: "Inflection Point" }
            ].map((n, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-zinc-950/50 border border-zinc-800 rounded-xl">
                <div>
                  <p className="text-sm font-semibold">{n.label}</p>
                  <p className="text-[10px] text-zinc-500">{n.strength} • {n.trend}</p>
                </div>
                <div className="w-16 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: i === 0 ? '80%' : i === 1 ? '40%' : '15%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-500">Structural Weak Signals</h3>
          <div className="space-y-6">
            <div className="p-4 bg-zinc-950/30 border-l-2 border-cyan-500">
              <h4 className="text-xs font-bold text-zinc-300">Bio-Digital Convergence</h4>
              <p className="text-xs text-zinc-500 mt-2">Increasing overlap between neural feedback loops and interface architecture. HYPOTHESIS: Standard screens will phase out by 2028.</p>
            </div>
            <div className="p-4 bg-zinc-950/30 border-l-2 border-emerald-500">
              <h4 className="text-xs font-bold text-zinc-300">Truth Scarcity Premiums</h4>
              <p className="text-xs text-zinc-500 mt-2">Rising value of verified, hand-signed human data. FACT: Synthetic data is beginning to collapse model logic (Model Collapse Syndrome).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsView;
