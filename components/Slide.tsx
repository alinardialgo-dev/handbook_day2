
import React from 'react';
import { SlideContent } from '../types';
import { getIcon } from '../constants';

interface SlideProps {
  content: SlideContent;
}

const Slide: React.FC<SlideProps> = ({ content }) => {
  const getBgColor = (category: string) => {
    switch (category) {
      case 'intro': return 'border-blue-500 bg-blue-50/50';
      case 'problem': return 'border-red-500 bg-red-50/50';
      case 'solution': return 'border-emerald-500 bg-emerald-50/50';
      case 'coding': return 'border-orange-500 bg-orange-50/50';
      case 'math': return 'border-indigo-500 bg-indigo-50/50';
      case 'closing': return 'border-slate-500 bg-slate-50/50';
      default: return 'border-slate-200 bg-white';
    }
  };

  const getBadgeColor = (category: string) => {
    switch (category) {
      case 'intro': return 'bg-blue-100 text-blue-700';
      case 'problem': return 'bg-red-100 text-red-700';
      case 'solution': return 'bg-emerald-100 text-emerald-700';
      case 'coding': return 'bg-orange-100 text-orange-700';
      case 'math': return 'bg-indigo-100 text-indigo-700';
      case 'closing': return 'bg-slate-100 text-slate-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto min-h-[500px] p-8 md:p-12 rounded-3xl border-2 transition-all duration-500 shadow-xl bg-white ${getBgColor(content.category)}`}>
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 inline-block ${getBadgeColor(content.category)}`}>
            {content.category.replace('-', ' ')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2 leading-tight">
            {content.title}
          </h2>
          {content.subtitle && (
            <p className="text-lg text-slate-500 font-medium">
              {content.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 flex-grow">
          {content.points.map((point, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/60 transition-colors group"
            >
              <div className={`p-3 rounded-xl transition-colors ${getBadgeColor(content.category)} group-hover:scale-110 duration-200`}>
                {getIcon(point.icon)}
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-lg mb-1">{point.label}</h4>
                {point.description && (
                  <p className="text-slate-600 text-base leading-relaxed">
                    {point.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
