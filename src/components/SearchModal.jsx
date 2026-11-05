import React, { useState, useEffect, useRef } from 'react';
import { useCourse } from '../context/CourseContext';
import { ALL_LESSONS } from '../data/courseData';
import { PROMPTS_DATABASE } from '../data/promptLibrary';
import { Search, X, BookOpen, Sparkles, Box, ArrowRight, CornerDownLeft } from 'lucide-react';

export default function SearchModal({ onNavigate }) {
  const { isSearchOpen, setIsSearchOpen, setCurrentLessonId } = useCourse();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Filter lessons
  const filteredLessons = cleanQuery ? ALL_LESSONS.filter(l => 
    l.title.toLowerCase().includes(cleanQuery) ||
    l.hindiExplanation.toLowerCase().includes(cleanQuery) ||
    l.summary.toLowerCase().includes(cleanQuery) ||
    l.moduleName.toLowerCase().includes(cleanQuery)
  ).slice(0, 5) : [];

  // Filter prompts
  const filteredPrompts = cleanQuery ? PROMPTS_DATABASE.filter(p =>
    p.title.toLowerCase().includes(cleanQuery) ||
    p.prompt.toLowerCase().includes(cleanQuery) ||
    p.category.toLowerCase().includes(cleanQuery)
  ).slice(0, 4) : [];

  const handleSelectLesson = (lessonId) => {
    setCurrentLessonId(lessonId);
    setIsSearchOpen(false);
    onNavigate('learn');
  };

  const handleSelectPrompt = () => {
    setIsSearchOpen(false);
    onNavigate('prompts');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md">
      <div 
        className="w-full max-w-2xl bg-[#0d0e1c] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-purple-500/20 bg-[#121428]/80">
          <Search className="w-5 h-5 text-cyan-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 72 lessons, AI prompts, 3D workflows, Blender shortcuts..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none text-base"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-200 p-1 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-xs text-slate-400 bg-white/5 border border-white/10 rounded">
            ESC
          </kbd>
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="sm:hidden text-slate-400 ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {!query && (
            <div className="text-center py-8">
              <Sparkles className="w-8 h-8 text-cyan-400/50 mx-auto mb-2 animate-pulse" />
              <p className="text-slate-300 font-medium">Quick Discovery Search</p>
              <p className="text-xs text-slate-500 mt-1">Type keywords like "Meshy", "Keyframe", "Negative Prompt", "Mixamo", or "Lighting"</p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Blender Lighting', 'Meshy AI 3D', 'Negative Prompts', 'Cinematic Camera', 'CapCut SFX'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-purple-950/40 border border-purple-500/30 text-purple-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query && filteredLessons.length === 0 && filteredPrompts.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p>No results found for "<span className="text-cyan-400">{query}</span>"</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for broader keywords like "Blender", "Mesh", "Camera", or "Render"</p>
            </div>
          )}

          {/* Lessons Matches */}
          {filteredLessons.length > 0 && (
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Course Lessons ({filteredLessons.length})</span>
              </div>
              <div className="space-y-2">
                {filteredLessons.map(lesson => (
                  <div
                    key={lesson.id}
                    onClick={() => handleSelectLesson(lesson.id)}
                    className="group flex items-start justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 cursor-pointer transition-all"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                          {lesson.moduleName.split(':')[0]}
                        </span>
                        <span className="text-xs text-slate-400">{lesson.duration}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {lesson.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {lesson.summary}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all shrink-0 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Prompt Matches */}
          {filteredPrompts.length > 0 && (
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AI Prompt Library ({filteredPrompts.length})</span>
              </div>
              <div className="space-y-2">
                {filteredPrompts.map(prompt => (
                  <div
                    key={prompt.id}
                    onClick={handleSelectPrompt}
                    className="group p-3 rounded-xl bg-purple-950/20 border border-purple-900/40 hover:border-purple-500/60 cursor-pointer transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium text-purple-200 group-hover:text-purple-300">
                        {prompt.title}
                      </h4>
                      <span className="text-[10px] text-purple-400">{prompt.category}</span>
                    </div>
                    <p className="text-xs text-slate-300 font-mono bg-black/40 p-2 rounded line-clamp-2 border border-white/5">
                      {prompt.prompt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-[#080914] border-t border-purple-500/20 flex items-center justify-between text-xs text-slate-400">
          <span>72 Comprehensive Lessons across 12 Modules</span>
          <div className="flex items-center gap-1.5">
            <span>Press</span>
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px]">ESC</kbd>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}

