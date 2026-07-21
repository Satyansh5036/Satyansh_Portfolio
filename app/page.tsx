'use client';

import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
    Search,
    MapPin,
    Clock,
    CheckCircle2,
    Award,
    Briefcase,
    GraduationCap,
    Mail,
    Linkedin,
    Phone,
    Sparkles,
    ChevronRight,
    Plus,
    Check
} from 'lucide-react';

export default function Home() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [shortlisted, setShortlisted] = useState<Record<string, boolean>>({});

    const filteredExperiences = useMemo(() => {
        return PORTFOLIO_DATA.experiences.filter((item) => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const matchesSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.companyOrScope.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const toggleShortlist = (id: string) => {
        setShortlisted(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const selectedCount = Object.values(shortlisted).filter(Boolean).length;

    return (
        <div className="min-h-screen bg-blinkit-gray text-slate-900 font-sans pb-28">
            {/* 1. Blinkit Header */}
            <header className="sticky top-0 z-40 bg-blinkit-yellow border-b border-amber-400 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="bg-blinkit-green text-white font-extrabold px-3 py-1.5 rounded-xl text-lg tracking-wider flex items-center gap-1 shadow-inner">
                            SATYANSH <span className="text-blinkit-yellow font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">PM/OPS</span>
                        </div>
                        <div className="border-l border-amber-600/30 pl-3">

                            <div className="text-xs text-slate-800 font-medium flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-blinkit-green-dark" />
                                {PORTFOLIO_DATA.header.location}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 text-xs font-semibold">
                        <a href={`mailto:${PORTFOLIO_DATA.header.email}`} className="bg-white/90 hover:bg-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition border border-amber-300">
                            <Mail className="w-3.5 h-3.5 text-blinkit-green" /> Email
                        </a>
                        <a href={PORTFOLIO_DATA.header.linkedin} target="_blank" rel="noreferrer" className="bg-white/90 hover:bg-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition border border-amber-300">
                            <Linkedin className="w-3.5 h-3.5 text-blue-600" /> LinkedIn
                        </a>
                        <a href={`tel:${PORTFOLIO_DATA.header.phone}`} className="bg-blinkit-green text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5 hover:bg-blinkit-green-dark transition shadow-sm">
                            <Phone className="w-3.5 h-3.5" /> Call Now
                        </a>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto px-4 pb-3">
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search skills, projects, metrics e.g. 'CareConnect', 'Usability', 'SQL'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white rounded-xl text-sm font-medium border border-amber-200 focus:outline-none focus:ring-2 focus:ring-blinkit-green shadow-inner"
                        />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-4 pt-6 space-y-8">

                {/* Hero Section */}
                <section className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                    <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 bg-blinkit-green-light text-blinkit-green-dark font-bold text-xs px-2.5 py-1 rounded-md border border-emerald-200">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            Speed Execution Guaranteed
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            {PORTFOLIO_DATA.header.name}
                        </h1>
                        <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                            {PORTFOLIO_DATA.header.tagline}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full lg:w-auto">
                        {PORTFOLIO_DATA.stats.map((stat, i) => (
                            <div key={i} className="bg-amber-50/60 border border-amber-200 rounded-xl p-3 text-center">
                                <div className="text-lg font-black text-blinkit-green-dark">{stat.value}</div>
                                <div className="text-xs font-semibold text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Categories */}
                <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    {['All', 'Product', 'Operations', 'Engineering', 'Internship'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${activeCategory === cat
                                ? 'bg-blinkit-green text-white shadow-md scale-105'
                                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                                }`}
                        >
                            {cat === 'All' ? '⚡ Total Experience' : cat}
                        </button>
                    ))}
                </section>

                {/* Experience Grid */}
                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-blinkit-green" />
                            Delivered Initiatives ({filteredExperiences.length})
                        </h2>
                        <span className="text-xs font-semibold text-slate-500">Ordered by impact</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredExperiences.map((item) => {
                            const isAdded = shortlisted[item.id];
                            return (
                                <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                                    {item.badge && (
                                        <div className="absolute top-3 right-3 bg-blinkit-yellow text-slate-900 font-extrabold text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider">
                                            {item.badge}
                                        </div>
                                    )}

                                    <div className="space-y-3">
                                        <div>
                                            <span className="text-[11px] font-bold text-blinkit-green uppercase tracking-wider">
                                                {item.category} • {item.companyOrScope}
                                            </span>
                                            <h3 className="font-bold text-slate-900 text-base leading-snug mt-0.5">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs font-semibold text-slate-500">{item.role} ({item.period})</p>
                                        </div>

                                        {item.impactMetric && (
                                            <div className="bg-blinkit-green-light border border-emerald-200 text-blinkit-green-dark font-extrabold text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                                                <CheckCircle2 className="w-4 h-4 text-blinkit-green flex-shrink-0" />
                                                <span>{item.impactMetric}</span>
                                            </div>
                                        )}

                                        <ul className="text-xs text-slate-600 space-y-1.5 list-disc pl-4 leading-relaxed">
                                            {item.highlights.map((h, idx) => (
                                                <li key={idx}>{h}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                                        <div className="flex flex-wrap gap-1">
                                            {item.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => toggleShortlist(item.id)}
                                            className={`w-full py-2 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 border transition ${isAdded
                                                ? 'bg-blinkit-green text-white border-blinkit-green'
                                                : 'bg-emerald-50 text-blinkit-green border-emerald-200 hover:bg-emerald-100'
                                                }`}
                                        >

                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Core Competencies */}
                <section className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                    <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-amber-500" />
                        Core Competencies & Stack Aisle
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PORTFOLIO_DATA.skills.map((group, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                                <h3 className="font-bold text-xs uppercase text-blinkit-green-dark tracking-wider mb-2">
                                    {group.category}
                                </h3>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((skill, sIdx) => (
                                        <span key={sIdx} className="bg-white text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-200">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education & Achievements */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
                        <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2 uppercase tracking-wide">
                            <GraduationCap className="w-4 h-4 text-blinkit-green" /> Education
                        </h3>
                        {PORTFOLIO_DATA.education.map((edu, eIdx) => (
                            <div key={eIdx} className="bg-amber-50/50 p-3 rounded-xl border border-amber-100">
                                <div className="font-bold text-sm text-slate-900">{edu.degree}</div>
                                <div className="text-xs text-slate-600 font-medium">{edu.institution} • {edu.year}</div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
                        <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2 uppercase tracking-wide">
                            <Award className="w-4 h-4 text-amber-500" /> Certifications & Achievements
                        </h3>
                        <div className="space-y-2">
                            {PORTFOLIO_DATA.achievements.map((ach, aIdx) => (
                                <div key={aIdx} className="flex items-center justify-between bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100 text-xs">
                                    <span className="font-bold text-slate-800">{ach.title}</span>
                                    <span className="font-semibold text-blinkit-green bg-emerald-100 px-2 py-0.5 rounded">{ach.issuer}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Floating Checkout Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-emerald-950 text-white border-t-2 border-blinkit-yellow p-3 z-50 shadow-2xl">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-blinkit-yellow text-slate-900 font-black rounded-lg px-2.5 py-1 text-xs">
                            {selectedCount > 0 ? `${selectedCount} Selected` : 'Ready to Hire'}
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-extrabold text-sm text-white">Initiate Candidate Discussion</div>
                            <div className="text-[11px] text-emerald-200">Instant response time guaranteed</div>
                        </div>
                    </div>

                    <a
                        href={`mailto:${PORTFOLIO_DATA.header.email}?subject=Interview%20Invitation%20for%20Satyansh`}
                        className="bg-blinkit-yellow hover:bg-amber-400 text-slate-900 font-extrabold text-xs px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-md"
                    >
                        <span>Proceed to Contact</span>
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}