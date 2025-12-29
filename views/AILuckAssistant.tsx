
import React, { useState } from 'react';
import { getLuckyNumbers } from '../services/geminiService';
import { PredictionResult } from '../types';

const AILuckAssistant: React.FC = () => {
  const [vibe, setVibe] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vibe.trim()) return;

    setLoading(true);
    try {
      const data = await getLuckyNumbers(vibe);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Cosmic link lost. Realigning vibes...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[800px] mx-auto space-y-12 animate-in fade-in duration-500">
      <header className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-primary/10 border border-primary/20 mb-4">
          <span className="material-symbols-outlined text-4xl text-primary">auto_awesome</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter">AI Luck Engine</h1>
        <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
          Manifest your fortune. Enter your thoughts, dreams, or a feeling, and our quantum AI will extract your winning numbers.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="bg-card-dark p-10 rounded-3xl border border-green-900/30 shadow-2xl space-y-8">
        <div className="space-y-3">
          <label className="text-xs font-black text-gray-500 uppercase tracking-widest">The Vibration Input</label>
          <textarea
            value={vibe}
            onChange={(e) => setVibe(e.target.value)}
            placeholder="Tell us what's on your mind... e.g., 'Feeling electric after the rain'"
            className="w-full h-40 bg-background-dark/50 border border-white/5 rounded-2xl p-6 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none placeholder:text-gray-700"
            required
          />
        </div>
        <button
          disabled={loading || !vibe.trim()}
          className="w-full h-16 bg-primary text-black font-black rounded-2xl flex items-center justify-center gap-3 disabled:opacity-50 hover:bg-green-400 transition-all shadow-[0_4px_30px_rgba(19,236,19,0.3)]"
        >
          {loading ? (
            <div className="flex items-center gap-3">
              <div className="h-6 w-6 border-3 border-black/30 border-t-black rounded-full animate-spin" />
              Manifesting Patterns...
            </div>
          ) : (
            <>
              <span className="material-symbols-outlined">auto_fix_high</span>
              GENERATE NUMBERS
            </>
          )}
        </button>
      </form>

      {result && (
        <div className="bg-gradient-to-br from-primary/20 via-card-dark to-card-dark p-10 rounded-3xl border border-primary/30 animate-in zoom-in duration-500 shadow-2xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-black text-white">Your Prediction</h2>
            <div className="px-5 py-2 bg-primary/20 rounded-xl border border-primary/30">
              <span className="text-xs font-black text-primary uppercase tracking-widest">Luck Potency: {result.luckScore}%</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {result.luckyNumbers.map((num, idx) => (
              <div 
                key={idx} 
                className="w-20 h-20 flex items-center justify-center rounded-2xl bg-white text-black text-3xl font-black shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-2 transition-transform cursor-default"
              >
                {num}
              </div>
            ))}
          </div>

          <div className="p-8 bg-black/40 rounded-2xl border border-white/5 space-y-2">
            <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Quantum Insight</p>
            <p className="text-gray-300 italic leading-relaxed text-lg">"{result.reasoning}"</p>
          </div>

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => alert("Numbers synced to cart!")}
              className="px-10 py-5 bg-white text-black font-black rounded-2xl hover:bg-gray-200 transition-all flex items-center gap-3 uppercase tracking-widest"
            >
              <span className="material-symbols-outlined">confirmation_number</span>
              Play These Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AILuckAssistant;
