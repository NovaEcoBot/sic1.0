
import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="space-y-12 pb-20">
      <div className="max-w-2xl space-y-4">
        <h2 className="text-3xl font-bold">Contact Global Intelligence Node</h2>
        <p className="text-zinc-400">Formal inquiries only. Please select the appropriate channel for prioritized processing.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "General Inquiry", email: "superintelligentcore@hotmail.com", desc: "Non-critical updates and general community feedback." },
          { title: "Research & Collaboration", email: "pcmdkhub@gmail.com", desc: "Academic partnerships, data science projects, and peer reviews." },
          { title: "Partnership & Strategy", email: "superintelligentcore@gmail.com", desc: "Enterprise licensing, API architecture, and institutional alignment." },
          { title: "Technical Support", email: "support@sicore.ai", desc: "Critical node failures and system configuration assistance." }
        ].map((cat, i) => (
          <div key={i} className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-all group">
            <h3 className="font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">{cat.title}</h3>
            <p className="text-xs text-zinc-500 mt-2 mb-4">{cat.desc}</p>
            <a href={`mailto:${cat.email}`} className="text-sm mono text-zinc-400 hover:text-white underline decoration-zinc-700 underline-offset-4">{cat.email}</a>
          </div>
        ))}
      </div>

      <div className="p-8 bg-zinc-800/20 border border-zinc-800 rounded-3xl">
        <h3 className="text-lg font-bold mb-6">Digital Presence</h3>
        <div className="flex flex-wrap gap-4">
          {['LinkedIn', 'X (Twitter)', 'YouTube', 'TikTok', 'Google Trends'].map((platform) => (
            <button key={platform} className="px-6 py-2 bg-zinc-900 border border-zinc-700 rounded-full text-xs hover:bg-zinc-800 transition-all">
              {platform}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
