
import React, { useState } from 'react';
import { getPitchAdvice } from '../geminiService';
import { MessageSquare, Send, Sparkles, User, UserCircle2 } from 'lucide-react';

const PitchAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    const result = await getPitchAdvice(input);
    setAdvice(result || "Gagal mendapatkan saran. Coba lagi.");
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mt-8 max-w-4xl mx-auto">
      <div className="bg-slate-900 p-4 flex items-center gap-3">
        <Sparkles className="text-orange-400 w-5 h-5" />
        <h3 className="text-white font-bold">Pitch Helper - AI Simulator</h3>
      </div>
      
      <div className="p-6">
        <p className="text-sm text-slate-500 mb-4">
          Masukkan keluhan orang tua (misal: "Harganya mahal sekali") atau draf kalimat presentasi Anda untuk mendapatkan feedback.
        </p>

        <form onSubmit={handleSubmit} className="relative mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ketik kekhawatiran orang tua di sini..."
            className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 transition-colors"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </form>

        {advice && (
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm">
              <MessageSquare className="w-4 h-4" />
              SARAN FEEDBACK:
            </div>
            <div className="text-slate-700 text-sm leading-relaxed whitespace-pre-wrap prose prose-sm max-w-none">
              {advice}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PitchAssistant;
