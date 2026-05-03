
import React from 'react';

const AboutView: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      <section className="max-w-3xl space-y-6">
        <h2 className="text-3xl font-bold">About Super Intelligent Core™</h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            Super Intelligent Core™ is not a chat tool; it is a knowledge architecture. It is built on the scientific foundation of 
            <span className="text-zinc-100 italic"> First Principles Reasoning</span> and the philosophical understanding of time-linked causality.
          </p>
          <p>
            Our approach treats intelligence as a high-fidelity system. We do not prioritize engagement or social loops. Instead, we optimize for 
            the cognitive clarity of the researcher and the strategic foresight of the leader.
          </p>
          <div className="bg-cyan-500/5 border border-cyan-500/20 p-6 rounded-2xl">
            <h4 className="text-cyan-400 font-bold mb-2">What It Is NOT</h4>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>It is NOT an entertainment platform.</li>
              <li>It is NOT a search engine based on popular consensus.</li>
              <li>It is NOT a tool for superficial automation.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-12 items-start bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
        <div className="w-24 h-24 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full shrink-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-zinc-500">MD</span>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold">Mr. Murli Dhar</h3>
            <p className="text-cyan-500 font-semibold tracking-widest text-xs uppercase">Founder & CEO</p>
          </div>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-xl">
            A credible systems thinker and scientific strategist focused on long-term knowledge architecture. Mr. Dhar believes that the primary risk of AI is not hostility, but the degradation of human critical thought. Core™ is his architectural response to preserve and expand human intelligence through rigorous collaborative AI partnership.
          </p>
          <div className="flex gap-4">
            <a href="mailto:pcmdkhub@gmail.com" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors">pcmdkhub@gmail.com</a>
            <span className="text-zinc-800">|</span>
            <a href="https://linkedin.com" className="text-xs text-zinc-500 hover:text-cyan-400 transition-colors">LinkedIn Profile</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutView;
