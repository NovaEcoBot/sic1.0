
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { subject: 'Scientific Rigor', A: 120, fullMark: 150 },
  { subject: 'Systems Thinking', A: 98, fullMark: 150 },
  { subject: 'Reflexive Logic', A: 86, fullMark: 150 },
  { subject: 'Signal Sensitivity', A: 99, fullMark: 150 },
  { subject: 'Foundational Truths', A: 85, fullMark: 150 },
  { subject: 'Temporal Strategy', A: 65, fullMark: 150 },
];

const activityData = [
  { name: 'Mon', count: 12 },
  { name: 'Tue', count: 18 },
  { name: 'Wed', count: 45 },
  { name: 'Thu', count: 32 },
  { name: 'Fri', count: 56 },
  { name: 'Sat', count: 15 },
  { name: 'Sun', count: 10 },
];

const DashboardView: React.FC = () => {
  return (
    <div className="space-y-8 pb-20">
      <header className="space-y-2">
        <h2 className="text-3xl font-bold">Cognitive Growth Metrics</h2>
        <p className="text-zinc-500 text-sm uppercase tracking-widest mono">Tracking Intellectual Evolution • Last Sync: 2m ago</p>
      </header>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-500">Intelligence Profile</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#27272a" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#71717a', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Cognitive Score"
                  dataKey="A"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-3xl space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-emerald-500">Query Intensity</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#71717a', fontSize: 10 }} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                />
                <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: "Active Nodes", val: "4,208", delta: "+12%" },
          { label: "Knowledge Depth", val: "Lvl 4.2", delta: "Growth: Stable" },
          { label: "Signal Latency", val: "12ms", delta: "Optimal" }
        ].map((stat, i) => (
          <div key={i} className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
            <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">{stat.label}</p>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold">{stat.val}</span>
              <span className="text-[10px] text-emerald-500 font-bold bg-emerald-500/10 px-2 py-1 rounded">{stat.delta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardView;
