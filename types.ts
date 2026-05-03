
export enum AIAppMode {
  SCIENTIST = 'Scientist',
  PHILOSOPHER = 'Philosopher',
  STRATEGIC_ANALYST = 'Strategic Analyst',
  RESEARCH = 'Research',
  CONTENT_CREATION = 'Content Creation',
  MENTOR = 'Mentor',
  SILENT = 'Silent Minimal'
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: number;
  mode?: AIAppMode;
  groundingUrls?: { title: string; uri: string }[];
}

export interface KnowledgeNode {
  topic: string;
  depth: number;
  lastUpdated: number;
}

export interface UserStats {
  learningDepth: number;
  thinkingPatterns: string[];
  knowledgeGaps: string[];
  explorationScore: number;
}
