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
    ExternalLink,
    FileText
} from 'lucide-react';

export default function Home() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [docsTab, setDocsTab] = useState<'case-studies' | 'teardowns'>('case-studies');

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

    // Smooth scroll for the new top navigation
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-blinkit-gray text-slate-900 font-sans pb-28">
            {/* 1. Blinkit Header */}
            <header className="sticky top-0 z-40 bg-blinkit-yellow border-b border-amber-400 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="bg-blinkit-green text-white font-extrabold px-3 py-1.5 rounded-xl text-lg tracking-wider flex items-center gap-1 shadow-inner cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                            SATYANSH <span className="text-blinkit-yellow font-bold text-xs bg-emerald-950 px-1.5 py-0.5 rounded">PM/OPS</span>
                        </div>
                        <div className="border-l border-amber-600/30 pl-3 hidden sm:block">

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

                {/* Search Bar */}
                <div className="max-w-6xl mx-auto px-4 pb-2">
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search skills, projects, metrics e.g. 'CareConnect', 'Usability'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-white rounded-xl text-sm font-medium border border-amber-200 focus:outline-none focus:ring-2 focus:ring-blinkit-green shadow-inner"
                        />
                    </div>
                </div>

                {/* NEW: Anchor Navigation Menu */}
                <div className="max-w-6xl mx-auto px-4 pb-3 pt-1">
                    <nav className="flex items-center gap-5 overflow-x-auto scrollbar-none text-sm font-bold text-slate-800">
                        {['Work', 'Case studies', 'Writing', 'Certificates', 'Skills', 'About'].map((item) => {
                            const sectionId = item.toLowerCase().replace(' ', '-');
                            return (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(sectionId)}
                                    className="whitespace-nowrap hover:text-blinkit-green-dark transition-colors"
                                >
                                    {item}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 pt-6 space-y-8">

                {/* Hero Section */}
                <section id="about" className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 scroll-mt-40">
                    <div className="space-y-2 max-w-2xl">
                        <div className="inline-flex items-center gap-1.5 bg-blinkit-green-light text-blinkit-green-dark font-bold text-xs px-2.5 py-1 rounded-md border border-emerald-200">
                            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            Speedy Execution Guaranteed
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                            {PORTFOLIO_DATA.header.name}
                        </h1>
                        <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                            {PORTFOLIO_DATA.header.tagline}
                        </p>
                        <p className="text-pink-400 font-medium text-sm md:text-base leading-relaxed italic">
                            "{PORTFOLIO_DATA.header.quote}"
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

                {/* Categories (Original Blinkit Pills) */}
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
                            {cat === 'All' ? '⚡ OverView' : cat}
                        </button>
                    ))}
                </section>

                {/* WORK SECTION */}
                <section id="work" className="space-y-4 scroll-mt-40">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-blinkit-green" />
                            Delivered Initiatives ({filteredExperiences.length})
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredExperiences.map((item) => (
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

                                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3">
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Restored Recruiter-Friendly Direct Contact CTA */}
                                    <a
                                        href={`mailto:${PORTFOLIO_DATA.header.email}?subject=Question regarding: ${item.title}`}
                                        className="w-full py-2 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 border border-emerald-200 bg-emerald-50 text-blinkit-green hover:bg-emerald-100 transition"
                                    >
                                        <Mail className="w-4 h-4" /> Discuss this Initiative
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CASE STUDIES & PRODUCT TEARDOWNS SECTION */}
                <section id="case-studies" className="space-y-4 scroll-mt-40">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                            <FileText className="w-5 h-5 text-blinkit-yellow" />
                            Case Studies & Product Teardowns
                        </h2>

                        {/* Toggle Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                            <button
                                onClick={() => setDocsTab('case-studies')}
                                className={`px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${docsTab === 'case-studies'
                                    ? 'bg-slate-800 text-white shadow-md'
                                    : 'bg-white text-slate-700 border border-slate-200'
                                    }`}
                            >
                                Case Studies
                            </button>
                            <button
                                onClick={() => setDocsTab('teardowns')}
                                className={`px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${docsTab === 'teardowns'
                                    ? 'bg-slate-800 text-white shadow-md'
                                    : 'bg-white text-slate-700 border border-slate-200'
                                    }`}
                            >
                                Product Teardowns
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {(docsTab === 'case-studies' ? PORTFOLIO_DATA.caseStudies : PORTFOLIO_DATA.productTeardowns).map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold text-blinkit-green uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <h3 className="font-bold text-slate-900 text-base leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-medium text-slate-600">{item.description}</p>
                                </div>

                                <div className="pt-4 mt-4 border-t border-slate-100 flex flex-col gap-3">
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.map((tag, tIdx) => (
                                            <span key={tIdx} className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={item.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full py-2 px-3 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition"
                                    >
                                        Read the analysis <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WRITING SECTION */}
                <section id="writing" className="space-y-4 scroll-mt-40">
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4">
                        <div className="text-center space-y-1 py-2">
                            <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Writing</span>
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                                Thinking out <span className="text-blue-600">loud.</span>
                            </h2>
                            <p className="text-slate-600 text-xs font-medium max-w-lg mx-auto mt-2">
                                Essays on building AI products, the engineer-to-PM path, and reading a system like it's trying to tell you something.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {PORTFOLIO_DATA.writings.map((writing) => (
                                <a
                                    key={writing.id}
                                    href={writing.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block bg-slate-50 rounded-xl border border-slate-200 p-4 hover:shadow-sm transition"
                                >
                                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-500 mb-2">
                                        <span className="bg-white border border-slate-200 px-2 py-0.5 rounded-md text-slate-700">{writing.platform}</span>
                                        <span>{writing.date} • {writing.readTime}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm mb-1 flex items-center justify-between">
                                        {writing.title} <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                                    </h3>
                                    <p className="text-slate-600 text-xs">{writing.description}</p>
                                </a>
                            ))}

                            <a
                                href={PORTFOLIO_DATA.header.medium}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-center text-xs font-extrabold text-blue-600 hover:underline pt-2"
                            >
                                See all writing &gt;
                            </a>
                        </div>
                    </div>
                </section>

                {/* CORE COMPETENCIES */}
                <section id="skills" className="bg-white rounded-2xl p-6 border border-slate-200 space-y-4 scroll-mt-40">
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

                {/* EDUCATION & CERTIFICATES */}
                <section id="certificates" className="grid grid-cols-1 md:grid-cols-2 gap-4 scroll-mt-40">
                    {/* Education */}
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

                    {/* Certificates */}
                    <div className="bg-white rounded-2xl p-5 border border-slate-200 space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="font-extrabold text-sm text-slate-900 flex items-center gap-2 uppercase tracking-wide">
                                <Award className="w-4 h-4 text-amber-500" /> Verified, not just claimed.
                            </h3>
                        </div>

                        <div className="space-y-2">
                            {PORTFOLIO_DATA.certifications.map((cert) => (
                                <div key={cert.id} className="bg-emerald-50/40 p-3 rounded-xl border border-emerald-100 flex flex-col gap-2">
                                    <div>
                                        <div className="font-bold text-sm text-slate-900">{cert.title}</div>
                                        <div className="text-xs text-slate-600 font-medium">{cert.issuer} • {cert.year}</div>
                                    </div>
                                    <div className="flex gap-4 text-xs font-extrabold pt-1">
                                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="text-blinkit-green hover:underline flex items-center gap-1">
                                            View certificate <ExternalLink className="w-3 h-3" />
                                        </a>

                                    </div>
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
                        <div className="bg-blinkit-yellow text-slate-900 font-black rounded-lg px-2.5 py-1 text-xs uppercase">
                            Available to Join
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-extrabold text-sm text-white">Looking for PM & Ops Opportunities</div>
                            <div className="text-[11px] text-emerald-200">Open to full-time roles and rapid deployments</div>
                        </div>
                    </div>

                    <a
                        href={`mailto:${PORTFOLIO_DATA.header.email}?subject=Interview%20Invitation%20for%20Satyansh`}
                        className="bg-blinkit-yellow hover:bg-amber-400 text-slate-900 font-extrabold text-xs px-6 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-md"
                    >
                        <span>Contact to Hire</span>
                        <ChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    );
}