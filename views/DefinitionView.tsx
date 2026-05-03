
import React from 'react';

const DefinitionView: React.FC = () => {
  return (
    <div className="space-y-12 pb-20 animate-in fade-in duration-700">
      <section className="space-y-6">
        <h2 className="text-4xl font-bold tracking-tight text-zinc-100">The Intelligence Mandate</h2>
        <p className="text-xl text-zinc-400 leading-relaxed max-w-3xl">
          Super Intelligent Core™ exists to solve the fragmentation of human knowledge in the age of generative noise. 
          While existing LLMs prioritize conversational convenience, Core™ prioritizes <span className="text-cyan-500">scientific rigor, cognitive depth, and systems thinking.</span>
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl space-y-4">
          <h3 className="text-lg font-semibold text-cyan-400">Problem Space</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Standard AI tools are optimized for prediction, often hallucinating or providing surface-level synthesis. This degrades long-term human intelligence. Core™ counteracts this by enforcing evidence-based reasoning and multi-modal grounding.
          </p>
        </div>
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl space-y-4">
          <h3 className="text-lg font-semibold text-emerald-400">Target Audience</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Architected for scientists, philosophers, strategic founders, and polymathic learners who require an intelligence partner that understands the nuances of time, nature, and complex system architectures.
          </p>
        </div>
      </div>

      <section className="space-y-8">
        <h3 className="text-2xl font-bold">Core Pillars</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "First Principles", desc: "Every deduction begins at the atomic truth, building upwards through logic." },
            { title: "Cognitive Integrity", desc: "No fluff. No motivational bias. Pure evidence-driven intelligence." },
            { title: "Time-Horizon Thinking", desc: "Decisions and analysis evaluated through decadal and centennial lenses." }
          ].map((pillar, i) => (
            <div key={i} className="space-y-2 border-l-2 border-zinc-800 pl-4 py-2 hover:border-cyan-500 transition-colors">
              <h4 className="font-semibold text-zinc-200">{pillar.title}</h4>
              <p className="text-xs text-zinc-500">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DefinitionView;
