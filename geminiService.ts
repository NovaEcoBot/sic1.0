
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { AIAppMode } from "./types";
import { SYSTEM_INSTRUCTIONS } from "./constants";

export const getGeminiResponse = async (
  prompt: string,
  mode: AIAppMode,
  history: { role: 'user' | 'model', content: string }[] = [],
  useSearch: boolean = false
) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const contents = [
    ...history.map(h => ({
      role: h.role,
      parts: [{ text: h.content }]
    })),
    {
      role: 'user',
      parts: [{ text: prompt }]
    }
  ];

  try {
    const config: any = {
      systemInstruction: SYSTEM_INSTRUCTIONS[mode],
      thinkingConfig: { thinkingBudget: mode === AIAppMode.SCIENTIST ? 32768 : 10000 },
    };

    if (useSearch) {
      config.tools = [{ googleSearch: {} }];
    }

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: contents as any,
      config: config
    });

    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const urls = groundingChunks
      .filter((chunk: any) => chunk.web)
      .map((chunk: any) => ({
        title: chunk.web.title,
        uri: chunk.web.uri
      }));

    return {
      text: response.text || "Unexpected empty response from intelligence core.",
      urls: urls
    };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
