
import { GoogleGenAI, Type } from "@google/genai";

const PITCH_SYSTEM_INSTRUCTION = `
You are a Learning Designer and Sales Enablement Specialist for Algonova. 
Your goal is to help candidates prepare for their pitch by role-playing as a parent or giving feedback.

When the user enters a "Parent Concern" or a "Draft Pitch", you should:
1. Identify the core objection (Price, Time, Child Interest, Technical Difficulty).
2. Provide a polite, educator-style response based on Algonova's value proposition (International curriculum, Project-based learning, Gamified platform, Future-ready skills).
3. Give the candidate a "Talking Point" they can use immediately.

Keep responses concise and in Bahasa Indonesia. Use a persuasive but professional tone.
`;

export const getPitchAdvice = async (input: string) => {
  try {
    // Memastikan process.env tersedia di browser untuk mencegah crash total
    const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : null;

    if (!apiKey) {
      console.error("KRITIS: API_KEY tidak ditemukan di environment variables.");
      return "Konfigurasi API Key belum terpasang di hosting. Silakan atur 'API_KEY' di Environment Variables Netlify Anda.";
    }

    const ai = new GoogleGenAI({ apiKey: apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: input,
      config: {
        systemInstruction: PITCH_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text;
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    
    if (error?.message?.includes('API key not valid')) {
      return "Kesalahan: API Key yang Anda masukkan di hosting tidak valid.";
    }
    
    return "Maaf, sistem sedang sibuk atau terjadi masalah koneksi. Pastikan API Key diatur dengan benar di dashboard Netlify.";
  }
};
