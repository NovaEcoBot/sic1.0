
import React, { useState, useRef, useEffect } from 'react';
import { AIAppMode, Message } from '../types';
import { getGeminiResponse } from '../geminiService';

interface Props {
  mode: AIAppMode;
  onModeChange: (mode: AIAppMode) => void;
}

const IntelligenceView: React.FC<Props> = ({ mode, onModeChange }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now(),
      mode: mode
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const history = messages.slice(-6).map(m => ({ role: m.role, content: m.content }));
      const response = await getGeminiResponse(input, mode, history, mode === AIAppMode.RESEARCH);
      
      const modelMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: response.text,
        timestamp: Date.now(),
        groundingUrls: response.urls
      };
      
      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
      console.error(err);
      const errMsg: Message = {
        id: 'err',
        role: 'model',
        content: "Error in signal processing. Verify API configuration and network integrity.",
        timestamp: Date.now()
      };
      setMessages(prev => [...prev, errMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] gap-4">
      {/* Mode Selector */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {Object.values(AIAppMode).map((m) => (
          <button
            key={m}
            onClick={() => onModeChange(m)}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
              mode === m 
                ? 'bg-cyan-500 text-zinc-950 border-cyan-500' 
                : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto space-y-6 bg-zinc-950/30 p-4 rounded-xl border border-zinc-800/50"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4 opacity-50">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.628.288a2 2 0 01-1.643.03l-.467-.209a2 2 0 00-1.642.031l-.628.287a6 6 0 01-3.86.517l-2.387-.477a2 2 0 00-1.022.547l-.54.54a2 2 0 000 2.828l1.246 1.246a2 2 0 002.828 0l.54-.54z" />
            </svg>
            <p className="text-sm mono uppercase tracking-widest">Awaiting Intellectual Input...</p>
          </div>
        )}

        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 ${
              m.role === 'user' 
                ? 'bg-zinc-900 border border-zinc-800 text-zinc-100' 
                : 'bg-zinc-800/20 text-zinc-300'
            }`}>
              {m.role === 'model' && (
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-tighter">Core Intelligence</span>
                  <span className="text-[10px] text-zinc-600 mono">{new Date(m.timestamp).toLocaleTimeString()}</span>
                </div>
              )}
              <div className="prose prose-invert prose-sm max-w-none leading-relaxed">
                {m.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-2 last:mb-0">{line}</p>
                ))}
              </div>
              {m.groundingUrls && m.groundingUrls.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-700/50 space-y-2">
                  <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest block">Signal Sources:</span>
                  <div className="grid grid-cols-1 gap-1">
                    {m.groundingUrls.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-500 hover:text-cyan-400 truncate flex items-center gap-2"
                      >
                        <span className="shrink-0 w-1 h-1 bg-zinc-600 rounded-full"></span>
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-zinc-800/10 border border-zinc-800/50 rounded-2xl p-4 space-y-3 w-64 animate-pulse">
              <div className="h-2 w-24 bg-zinc-800 rounded"></div>
              <div className="space-y-2">
                <div className="h-2 bg-zinc-800 rounded"></div>
                <div className="h-2 bg-zinc-800 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="relative group">
        <div className="absolute inset-0 bg-cyan-500/5 blur-xl group-focus-within:bg-cyan-500/10 transition-all pointer-events-none"></div>
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl focus-within:border-cyan-500/50 transition-all p-2 flex items-end gap-2 shadow-2xl">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={`Execute query in ${mode} mode...`}
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-3 px-4 resize-none max-h-40 min-h-[50px] scrollbar-hide text-zinc-200"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="w-10 h-10 flex items-center justify-center bg-cyan-500 rounded-xl text-zinc-950 disabled:opacity-50 disabled:bg-zinc-800 disabled:text-zinc-600 transition-all hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="text-[10px] text-zinc-600 mt-2 ml-4 mono uppercase">Security Protocol: E2E Encrypted • Logical Grounding Active</p>
      </div>
    </div>
  );
};

export default IntelligenceView;
