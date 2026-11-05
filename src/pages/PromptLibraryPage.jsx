import React, { useState } from 'react';
import { useCourse } from '../context/CourseContext';
import { PROMPTS_DATABASE, PROMPT_CATEGORIES } from '../data/promptLibrary';
import { 
  Search, 
  Copy, 
  Check, 
  Sparkles, 
  Terminal, 
  Sliders, 
  ArrowRight,
  Lock,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function PromptLibraryPage({ onNavigate }) {
  const { showToast, currentUser, openLockModal } = useCourse();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  // Interactive Prompt Builder state
  const [builderSubject, setBuilderSubject] = useState("Armored Cybernetic Paladin");
  const [builderPose, setBuilderPose] = useState("Symmetrical A-pose with limb clearance");
  const [builderLighting, setBuilderLighting] = useState("Dramatic cyan and magenta rim lighting");
  const [builderRender, setBuilderRender] = useState("Unreal Engine 5, Octane render, 8k");
  const [builderRatio, setBuilderRatio] = useState("--ar 16:9");

  const generatedCustomPrompt = `Full-body 3D character asset of a ${builderSubject}, ${builderPose}, ${builderLighting}, isolated on solid studio background, ${builderRender} ${builderRatio}`;

  const handleCopy = (text, id) => {
    if (!currentUser?.isPaid) {
      openLockModal('AI Prompt Library');
      return;
    }
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    showToast('Prompt copied to clipboard!', 'success');
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredPrompts = PROMPTS_DATABASE.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold uppercase">
          <Terminal className="w-4 h-4" />
          <span>PRODUCTION-CALIBRATED ASSETS</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-display font-black text-white">
          3D AI Studio Prompt Library
        </h1>

        <p className="text-sm sm:text-base text-slate-400">
          Search, filter, and 1-click copy over 30 original prompts tested for Meshy AI 3D meshes, Midjourney / Flux concepts, and Runway Gen-3 video motions.
        </p>

        {/* Locked Alert Banner for Unpaid Users */}
        {!currentUser?.isPaid && (
          <div className="mt-4 p-5 rounded-2xl bg-gradient-to-r from-red-950/50 via-purple-950/50 to-cyan-950/50 border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-950 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-white text-sm block">Prompts Locked for Unregistered Users</strong>
                <span className="text-xs text-slate-300">
                  Pay ₹9 once to reveal all 30+ production formulas with 1-click copy enabled.
                </span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('checkout')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-display font-black text-xs text-black bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-neon-cyan flex items-center justify-center gap-2 shrink-0 cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-black" />
              <span>UNLOCK FOR ₹9 ONLY</span>
            </button>
          </div>
        )}
      </div>

      {/* Interactive AI Prompt Customizer & Builder Studio */}
      {currentUser?.isPaid && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#11132b] to-[#0a0b18] border border-cyan-500/30 shadow-2xl space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-400/20 text-cyan-300 border border-cyan-400/50 flex items-center justify-center">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-white">
                Interactive 3D Prompt Builder Studio
              </h3>
              <p className="text-xs text-slate-400">Customize tokens and generate your personalized formula prompt live</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="text-[11px] font-mono text-cyan-300 block mb-1">Character Subject</label>
              <select
                value={builderSubject}
                onChange={(e) => setBuilderSubject(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Armored Cybernetic Paladin">Armored Cybernetic Paladin</option>
                <option value="Bioluminescent Forest Golem">Bioluminescent Forest Golem</option>
                <option value="Steampunk Clockwork Aviator">Steampunk Clockwork Aviator</option>
                <option value="Obsidian Dragon Hatchling">Obsidian Dragon Hatchling</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-mono text-cyan-300 block mb-1">Mesh Pose & Staging</label>
              <select
                value={builderPose}
                onChange={(e) => setBuilderPose(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Symmetrical A-pose with limb clearance">Symmetrical A-pose (Meshy Ready)</option>
                <option value="T-pose with neutral finger spread">Standard T-Pose (Rig Ready)</option>
                <option value="Low crouch dynamic combat stance">Dynamic Combat Stance</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-mono text-cyan-300 block mb-1">Cinematic Lighting</label>
              <select
                value={builderLighting}
                onChange={(e) => setBuilderLighting(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="Dramatic cyan and magenta rim lighting">Cyan + Magenta Dual Rim</option>
                <option value="Studio softbox 3-point lighting setup">Studio Softbox Neutral</option>
                <option value="Golden hour volumetric haze">Golden Hour Volumetric</option>
              </select>
            </div>

            <div>
              <label className="text-[11px] font-mono text-cyan-300 block mb-1">Aspect Ratio</label>
              <select
                value={builderRatio}
                onChange={(e) => setBuilderRatio(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-black/60 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-cyan-400"
              >
                <option value="--ar 16:9">16:9 (Cinematic Horizontal)</option>
                <option value="--ar 9:16">9:16 (Reels / Shorts)</option>
                <option value="--ar 1:1">1:1 (Square 3D Asset)</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/70 border border-cyan-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-cyan-200 leading-relaxed overflow-x-auto w-full">
              {generatedCustomPrompt}
            </div>
            <button
              onClick={() => handleCopy(generatedCustomPrompt, 'builder')}
              className="px-5 py-2.5 rounded-xl font-display font-bold text-xs cyber-btn-primary flex items-center gap-2 shrink-0 cursor-pointer"
            >
              {copiedId === 'builder' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copiedId === 'builder' ? 'Copied!' : 'Copy Built Formula'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Category Filter Buttons & Search Bar */}
      <div className="space-y-4">
        <div className="relative max-w-xl mx-auto">
          <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search prompt titles, categories (e.g. 'Dragon', 'Anamorphic', 'I2V')..."
            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 shadow-inner"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {PROMPT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'cyber-btn-primary shadow-neon-cyan'
                    : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count & Prompts Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-2">
          <span>Showing {filteredPrompts.length} of {PROMPTS_DATABASE.length} prompts</span>
          <span className="text-cyan-400 font-mono">Category: {selectedCategory}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPrompts.map((item) => {
            const isUnlocked = currentUser?.isPaid === true;

            return (
              <div 
                key={item.id}
                className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800/40 uppercase font-semibold">
                        {item.category}
                      </span>
                      <h3 className="font-display font-bold text-base text-white mt-1.5 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopy(item.prompt, item.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                        isUnlocked 
                          ? 'bg-cyan-950 hover:bg-cyan-500 hover:text-black border border-cyan-800 text-cyan-300 cursor-pointer' 
                          : 'bg-red-950/80 border border-red-500/40 text-red-300 cursor-pointer'
                      }`}
                      title={isUnlocked ? "Copy to Clipboard" : "Pay ₹9 to Unlock"}
                    >
                      {isUnlocked ? (
                        copiedId === item.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )
                      ) : (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>Locked</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Prompt Text Box (Blurred if unpaid) */}
                  {isUnlocked ? (
                    <div className="p-3.5 rounded-xl bg-black/70 border border-slate-800/80 font-mono text-xs text-slate-200 leading-relaxed select-all my-3">
                      {item.prompt}
                    </div>
                  ) : (
                    <div 
                      onClick={() => openLockModal(`Prompt: ${item.title}`)}
                      className="p-4 rounded-xl bg-black/90 border border-red-500/20 text-center my-3 relative overflow-hidden cursor-pointer group-hover:border-red-500/40 transition-colors"
                    >
                      <div className="filter blur-[4px] select-none text-slate-500 text-xs font-mono pointer-events-none">
                        Full-body 3D asset prompt calibrated with 8k Octane shaders, limb clearance and volumetric cinematic lighting formulas...
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
                        <span className="text-[11px] font-mono font-bold text-amber-300 flex items-center gap-1.5 bg-black/80 px-3 py-1 rounded-lg border border-amber-500/30">
                          <Lock className="w-3.5 h-3.5 text-amber-400" /> Unlock with ₹9 Course Pass
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Explanation */}
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <strong className="text-slate-300 font-medium">Why it works: </strong> 
                    {item.explanation}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
