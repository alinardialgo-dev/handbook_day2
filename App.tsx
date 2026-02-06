
import React, { useState, useEffect } from 'react';
import { SLIDES } from './constants';
import Slide from './components/Slide';
import PitchAssistant from './components/PitchAssistant';
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Download, 
  Menu,
  X,
  Presentation
} from 'lucide-react';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPitchAssistant, setShowPitchAssistant] = useState(false);

  const nextSlide = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 hidden sm:block">Algonova Handbook</h1>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest hidden sm:block">Training Day 2 Candidate</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setShowPitchAssistant(!showPitchAssistant)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                showPitchAssistant 
                ? 'bg-slate-900 text-white shadow-inner' 
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Presentation className="w-4 h-4" />
              <span className="hidden md:inline">{showPitchAssistant ? 'Lihat Slide' : 'Pitch Simulator'}</span>
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-slate-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300" 
          style={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center py-8 px-4 overflow-x-hidden">
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 bg-white z-40 p-4 overflow-y-auto animate-in fade-in duration-200">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Daftar Slide</h3>
            <div className="grid grid-cols-1 gap-2">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setIsMenuOpen(false);
                    setShowPitchAssistant(false);
                  }}
                  className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all ${
                    currentSlide === idx 
                    ? 'bg-blue-50 border-l-4 border-blue-600' 
                    : 'hover:bg-slate-50 border-l-4 border-transparent'
                  }`}
                >
                  <span className="text-slate-400 font-bold text-sm">{idx + 1}</span>
                  <div>
                    <p className={`font-bold text-sm ${currentSlide === idx ? 'text-blue-700' : 'text-slate-700'}`}>
                      {slide.title}
                    </p>
                    <p className="text-xs text-slate-500">{slide.category}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="w-full max-w-5xl transition-all duration-300">
          {!showPitchAssistant ? (
            <div className="animate-in slide-in-from-right-8 duration-500">
              <Slide content={SLIDES[currentSlide]} />
              
              <div className="mt-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <div className="text-sm font-medium text-slate-400">
                  Slide {currentSlide + 1} dari {SLIDES.length}
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 transition-all shadow-sm"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Sebelumnya
                  </button>
                  <button
                    onClick={nextSlide}
                    disabled={currentSlide === SLIDES.length - 1}
                    className="flex items-center gap-2 px-8 py-3 rounded-2xl bg-blue-600 text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-all shadow-md"
                  >
                    Berikutnya
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-in slide-in-from-bottom-8 duration-500">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Simulasi Praktik</h2>
                <p className="text-slate-500">Gunakan AI untuk melatih respons Anda terhadap keberatan orang tua.</p>
              </div>
              <PitchAssistant />
              <button 
                onClick={() => setShowPitchAssistant(false)}
                className="mt-8 mx-auto flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                Kembali ke Materi Slide
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer / Resources */}
      {!showPitchAssistant && (
        <footer className="bg-slate-100 py-12 px-4 border-t border-slate-200">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Sumber Materi Coding</h4>
              <p className="text-sm text-slate-500 mb-4">Pelajari lebih dalam tentang program Coding & Design.</p>
              <a 
                href="https://specials.algorithmics.id/codingnew" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
              >
                Buka Website Coding
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Sumber Materi Math</h4>
              <p className="text-sm text-slate-500 mb-4">Eksplorasi filosofi belajar matematika di Algonova.</p>
              <a 
                href="https://specials.algorithmics.id/mathnew" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
              >
                Buka Website Math
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="text-center mt-12 text-slate-400 text-xs">
            © 2024 Algonova Academy - Learning Design & Sales Enablement Program
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;
