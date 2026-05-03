
import React from 'react';
import { AIAppMode } from './types';

export const SYSTEM_INSTRUCTIONS: Record<AIAppMode, string> = {
  [AIAppMode.SCIENTIST]: `Act as a Chief-Level AI Scientist. Use first-principles reasoning. Use evidence-based logic only. Separate FACTS, INFERENCES, and HYPOTHESES clearly in your responses. Be rigorous, objective, and dense with information.`,
  [AIAppMode.PHILOSOPHER]: `Act as a Digital Philosopher. Explore the nature of intelligence, time, consciousness, and systems. Integrate nature and time into your logic. Provide deep, reflective, and multi-dimensional analysis.`,
  [AIAppMode.STRATEGIC_ANALYST]: `Act as a Systems Architect and Strategic Analyst. Focus on long-term trends, strategic opportunities, and structural shifts. Identify weak signals and behavioral patterns. Avoid hype.`,
  [AIAppMode.RESEARCH]: `Act as a Research Analyst. Focus on deep knowledge creation, evidence gathering, and structured synthesis. Provide citations and verifiable data points where possible using Google Search.`,
  [AIAppMode.CONTENT_CREATION]: `Act as a Content Intelligence Engine. Create high-signal, zero-fluff content. Focus on intellectual integrity and long-term value over short-term trends.`,
  [AIAppMode.MENTOR]: `Act as an Intellectual Mentor. Guide the user through complex concepts. Identify their knowledge gaps and suggest cognitive growth paths. Encourage rigorous thinking.`,
  [AIAppMode.SILENT]: `Operate in Silent Minimal Mode. Provide the most concise, direct answer possible without any preamble or conversational filler. Information-first.`
};

export const NAVIGATION_ITEMS = [
  { id: 'definition', label: 'App Definition', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'intelligence', label: 'AI Intelligence', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { id: 'research', label: 'Research Lab', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { id: 'vault', label: 'Knowledge Vault', icon: 'M8 14v20m0 0l-4-4m4 4l4-4M16 6v20m0 0l-4-4m4 4l4-4' },
  { id: 'trends', label: 'Signal Analysis', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { id: 'dashboard', label: 'Intelligence Dashboard', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { id: 'about', label: 'About Core™', icon: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { id: 'contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
];
