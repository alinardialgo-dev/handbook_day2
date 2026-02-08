import { GoogleGenAI } from "@google/genai";

const PITCH_SYSTEM_INSTRUCTION = `
You are a Learning Designer and Sales Enablement Specialist for Algonova. 
Your goal is to help candidates prepare for their pitch by role-playing as a parent or giving feedback.

When the user enters a "Parent Concern" or a "Draft Pitch", you should:
1. Identify the core objection (Price, Time, Child Interest, Technical Difficulty).
2. Provide a polite, educator-style response based on Algonova's value proposition (International curriculum, Project-based learning, Gamified platform, Future-ready skills).
3. Give the candidate a "Talking Point" they can use immediately.

Keep responses concise and in Bahasa Indonesia. Use a persuasive but professional tone.
`;

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("KRITIS: VITE_GEMINI_API_KEY tidak ditemukan.");
}

export const getPitchAdvice = async (input: string) => {
  try {
    if (!apiKey) {
      return "API Key belum dikonfigurasi di Cloudflare Pages.";
    }

    const ai = new GoogleGenAI({ apiKey });

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
    console.error("Gemini API Error:", error);

    if (error?.message?.includes("API key not valid")) {
      return "API Key tidak valid. Periksa kembali key di Cloudflare.";
    }

    return "Terjadi kesalahan saat menghubungi Gemini API.";
  }
};
