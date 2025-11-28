import React, { useState } from 'react';
import { generateStudyPlan } from '../services/geminiService';
import { GradeLevel, Subject, StudyPlanResponse } from '../types';
import { Sparkles, ArrowRight, BookOpen, Clock, Loader2, TrendingUp, Dna, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const AIPlanner: React.FC = () => {
  const [grade, setGrade] = useState<GradeLevel>(GradeLevel.Class12);
  const [subject, setSubject] = useState<Subject>(Subject.Biology);
  const [goals, setGoals] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<StudyPlanResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goals.trim()) return;
    
    setLoading(true);
    setPlan(null);
    try {
      const data = await generateStudyPlan(grade, subject, goals);
      setPlan(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const improvementData = plan ? [
    { name: 'Current', score: 450 },
    { name: 'Week 2', score: 450 + (plan.projectedImprovement * 3) }, // Rough scaling for NEET score
    { name: 'Week 4', score: 450 + (plan.projectedImprovement * 7) },
  ] : [];

  return (
    <section className="py-20 bg-gradient-to-br from-[#064e3b] to-[#022c22] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Input Section */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-green-300">
              <Dna className="w-6 h-6" />
              <span className="font-bold tracking-wider uppercase text-sm">AI NEET Strategist</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Get Your Personalized <span className="text-green-400">NEET Biology</span> <br/> Roadmap
            </h2>
            <p className="text-green-100 mb-8 text-lg">
              Struggling with Genetics or Plant Physiology? Tell our AI about your weak areas, and we'll build a strategy aligned with Dr. Anshuman's teaching method.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-green-200 mb-2">Class / Target</label>
                  <select 
                    value={grade} 
                    onChange={(e) => setGrade(e.target.value as GradeLevel)}
                    className="w-full bg-[#065f46] border border-green-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-400 outline-none"
                  >
                    {Object.values(GradeLevel).map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-green-200 mb-2">Subject</label>
                  <select 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value as Subject)}
                    className="w-full bg-[#065f46] border border-green-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-green-400 outline-none"
                  >
                    {Object.values(Subject).map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-green-200 mb-2">Weak Topic (e.g., Human Reproduction, Ecology)</label>
                <textarea 
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder="I find it hard to remember examples in Morphology of Flowering Plants..."
                  className="w-full bg-[#065f46] border border-green-700 rounded-lg px-4 py-3 text-white h-24 resize-none focus:ring-2 focus:ring-green-400 outline-none placeholder-green-300/50"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                {loading ? 'Analyzing Pattern...' : 'Generate Success Plan'}
              </button>
            </form>
          </div>

          {/* Result Section */}
          <div className="relative min-h-[500px]">
            {!plan && !loading && (
              <div className="absolute inset-0 rounded-2xl border border-green-400/30 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                     <Target className="w-10 h-10 text-green-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Ready to Score 650+?</h3>
                <p className="text-green-200 max-w-sm">
                  Fill in your details to get a personalized biology strategy designed by Dr. Anshuman.
                </p>
              </div>
            )}

            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                 <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                 <p className="text-green-300 animate-pulse font-medium">Consulting AI Knowledge Base...</p>
              </div>
            )}

            {plan && (
              <div className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
                <div className="bg-green-50 p-6 border-b border-green-100 flex justify-between items-center">
                   <div>
                    <h3 className="font-bold text-xl text-gray-800">Soching Success Roadmap</h3>
                    <p className="text-sm text-gray-600">{plan.studentLevel} • {plan.subject}</p>
                   </div>
                   <div className="bg-emerald-100 px-3 py-1 rounded-full flex items-center gap-1 text-emerald-700 text-xs font-bold">
                      <TrendingUp className="w-3 h-3" /> +{plan.projectedImprovement}% Efficiency
                   </div>
                </div>

                <div className="p-6 space-y-4 max-h-[500px] overflow-y-auto">
                    {/* Projection Chart */}
                    <div className="h-40 w-full mb-6 bg-white rounded-lg p-2 border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-2">Projected Score Growth</p>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={improvementData}>
                                <XAxis dataKey="name" fontSize={10} tickLine={false} axisLine={false} />
                                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                                <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                                    {improvementData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 2 ? '#22c55e' : '#cbd5e1'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Timeline */}
                  {plan.roadmap.map((week, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm shrink-0">
                          {week.weekNumber}
                        </div>
                        {idx !== plan.roadmap.length - 1 && <div className="w-0.5 h-full bg-gray-200 my-1"></div>}
                      </div>
                      <div className="pb-6">
                        <h4 className="font-bold text-gray-800 text-lg mb-1">{week.focusArea}</h4>
                        <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
                            <Clock className="w-3 h-3" /> {week.hoursEstimated} Hours/Week
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {week.topics.map((topic, i) => (
                            <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600 font-medium">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="pt-4 border-t border-gray-100">
                    <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                        Get Full Plan from Dr. Anshuman <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlanner;