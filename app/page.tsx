'use client';

import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import {
    Search,
    MapPin,
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

const NAV_ITEMS = [
    { id: 'work', label: 'Work', deva: 'काम' },
    { id: 'case-studies', label: 'Case studies', deva: 'अध्ययन' },
    { id: 'writing', label: 'Writing', deva: 'लेखन' },
    { id: 'skills', label: 'Skills', deva: 'हुनर' },
    { id: 'certificates', label: 'Certificates', deva: 'सनद' },
    { id: 'about', label: 'About', deva: 'परिचय' },
];

export default function Home() {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredExperiences = useMemo(() => {
        return PORTFOLIO_DATA.experiences.filter((item) => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const matchesSearch =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.companyOrScope.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const visibleCaseStudies = useMemo(() => {
        return PORTFOLIO_DATA.caseStudies.filter(
            (item) => item.category && item.category.trim() !== ''
        );
    }, []);

    const readMoreCaseStudy = useMemo(() => {
        return PORTFOLIO_DATA.caseStudies.find(
            (item) => item.title === 'READ MORE' || !item.category || item.category.trim() === ''
        );
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-sans pb-28">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-line shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
                    {/* Top Row: Brand, Location, Quick Actions, Connect */}
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <div
                                className="bg-secondary text-white font-extrabold px-3 py-1.5 rounded-xl text-lg tracking-wider flex items-center gap-2 cursor-pointer shadow-sm"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            >
                                <img src="/rook.png" alt="Rook" className="w-8 h-8 rounded-lg object-cover" />
                                <span>SATYANSH</span>
                                <span className="bg-primary text-secondary font-bold text-xs px-1.5 py-0.5 rounded">PM/OPS</span>
                            </div>
                            <div className="border-l border-line pl-3 hidden sm:block">
                                <div className="text-xs text-muted font-medium flex items-center gap-1">
                                    <MapPin className="w-3 h-3 text-secondary" />
                                    {PORTFOLIO_DATA.header.location}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold">
                            <a
                                href={`mailto:${PORTFOLIO_DATA.header.email}`}
                                className="bg-surface hover:bg-secondary-tint/50 text-foreground px-2.5 sm:px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition border border-line"
                            >
                                <Mail className="w-3.5 h-3.5 text-secondary" />
                                <span className="hidden sm:inline">Email</span>
                            </a>
                            <a
                                href={PORTFOLIO_DATA.header.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-surface hover:bg-secondary-tint/50 text-foreground px-2.5 sm:px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition border border-line"
                            >
                                <Linkedin className="w-3.5 h-3.5 text-secondary" />
                                <span className="hidden sm:inline">LinkedIn</span>
                            </a>
                            <a
                                href={`tel:${PORTFOLIO_DATA.header.phone}`}
                                className="bg-primary hover:bg-primary-hover text-secondary font-bold px-2.5 sm:px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition shadow-sm"
                            >
                                <Phone className="w-3.5 h-3.5 text-secondary" />
                                <span>Call</span>
                            </a>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="bg-secondary hover:bg-secondary-hover text-white font-bold px-3 py-1.5 rounded-lg transition shadow-sm"
                            >
                                Connect
                            </button>
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search skills, projects, metrics e.g. 'CareConnect', 'Usability'..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 bg-background text-foreground placeholder:text-muted rounded-xl text-sm font-medium border border-line focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        />
                    </div>

                    {/* Navigation with English + Devanagari */}
                    <nav className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none pt-0.5">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="flex flex-col items-center whitespace-nowrap hover:text-foreground transition-colors group flex-shrink-0"
                            >
                                <span className="text-xs font-bold text-muted group-hover:text-foreground group-hover:underline decoration-primary decoration-2 underline-offset-4">
                                    {item.label}
                                </span>
                                <span className="font-deva text-[10px] text-muted leading-tight">
                                    {item.deva}
                                </span>
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 pt-6 space-y-8">
                {/* HERO SECTION */}
                <section
                    id="about"
                    className="stitch ridge bg-surface/90 border border-line rounded-2xl p-6 md:p-8 pb-16 md:pb-20 shadow-card relative overflow-hidden scroll-mt-40"
                >
                    {/* Watermark */}
                    <div
                        className="font-deva text-[9rem] md:text-[13rem] text-secondary/5 absolute right-4 bottom-2 select-none pointer-events-none leading-none z-0"
                        aria-hidden="true"
                    >
                        लखनऊ
                    </div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column (60%) */}
                        <div className="lg:col-span-7 space-y-4">
                            <div className="text-maroon text-[11px] font-bold uppercase tracking-widest">
                                आदाब · LUCKNOW
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground tracking-tight flex flex-wrap items-baseline gap-3">
                                <span>{PORTFOLIO_DATA.header.name}</span>
                                <span className="font-deva text-2xl md:text-3xl font-normal text-muted">सत्यांश</span>
                            </h1>

                            <p className="text-muted font-medium text-sm md:text-base leading-relaxed">
                                {PORTFOLIO_DATA.header.tagline}
                            </p>

                            <p className="text-muted font-medium text-sm md:text-base leading-relaxed">
                                {PORTFOLIO_DATA.header.quote}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    onClick={() => scrollToSection('work')}
                                    className="bg-secondary hover:bg-secondary-hover text-white px-5 py-2.5 rounded-xl font-bold text-xs transition shadow-sm"
                                >
                                    View selected work
                                </button>
                                <button
                                    onClick={() => scrollToSection('case-studies')}
                                    className="border border-line bg-surface hover:bg-secondary-tint/50 text-foreground px-5 py-2.5 rounded-xl font-bold text-xs transition"
                                >
                                    Read the analysis
                                </button>
                            </div>
                        </div>

                        {/* Right Column (40%) */}
                        <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-5">
                            <div className="flex flex-col items-center gap-1.5">
                                <img
                                    src="/rook.png"
                                    alt="Satyansh"
                                    className="arch w-24 h-32 md:w-28 md:h-36 object-cover border-2 border-primary shadow-sm"
                                />
                                <span className="text-[11px] text-muted font-medium">Lucknow · 26.85°N 80.95°E</span>
                            </div>

                            {/* Status Card in Ledger Style */}
                            <div className="bg-background/80 rounded-xl p-3.5 border border-line space-y-2 text-xs w-full max-w-md">
                                <div className="flex justify-between items-baseline gap-2">
                                    <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">Base</span>
                                    <span className="font-semibold text-foreground text-right">Lucknow, 26.85°N 80.95°E</span>
                                </div>
                                <div className="flex justify-between items-baseline gap-2">
                                    <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">Status</span>
                                    <span className="font-semibold text-foreground text-right">Open to PM and Ops roles</span>
                                </div>
                                <div className="flex justify-between items-baseline gap-2">
                                    <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">Core</span>
                                    <span className="font-semibold text-foreground text-right">Product, Operations, Engineering</span>
                                </div>
                            </div>

                            {/* 2x2 Stats Grid */}
                            <div className="grid grid-cols-2 gap-2.5 w-full max-w-md">
                                {PORTFOLIO_DATA.stats.map((stat, i) => (
                                    <div key={i} className="bg-background/90 border border-line rounded-xl p-3 text-center">
                                        <div className="text-lg md:text-xl font-bold font-serif text-secondary">{stat.value}</div>
                                        <div className="text-xs font-semibold text-muted">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative Arcade Divider */}
                <div className="arcade" aria-hidden="true" />

                {/* WORK SECTION */}
                <section id="work" className="space-y-4 scroll-mt-40">
                    <div className="rule-double pb-2 flex items-center justify-between">
                        <h2 className="text-lg font-bold font-serif text-foreground flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-secondary" />
                            Delivered Initiatives ({filteredExperiences.length})
                        </h2>
                        <span className="font-deva text-sm text-muted">काम</span>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                        {['All', 'Product', 'Operations', 'Engineering', 'Internship'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                                    activeCategory === cat
                                        ? 'bg-secondary text-white shadow-card scale-105'
                                        : 'bg-surface text-muted hover:text-foreground hover:bg-secondary-tint/50 border border-line'
                                }`}
                            >
                                {cat === 'All' ? 'Overview' : cat}
                            </button>
                        ))}
                    </div>

                    {/* Work Spec Sheet Cards */}
                    <div className="space-y-5">
                        {filteredExperiences.map((item, idx) => (
                            <div
                                key={item.id}
                                className="stitch border border-line rounded-2xl bg-surface/90 p-5 md:p-6 space-y-4 shadow-card"
                            >
                                {/* Top Row: Index + Title + Badge */}
                                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-3">
                                    <div className="space-y-1">
                                        <div className="text-maroon text-[11px] font-bold uppercase tracking-widest">
                                            {String(idx + 1).padStart(2, '0')} //
                                        </div>
                                        <h3 className="font-bold font-serif text-foreground text-lg md:text-xl leading-snug">
                                            {item.title}
                                        </h3>
                                    </div>

                                    {item.badge && (
                                        <div className="bg-primary text-secondary font-extrabold text-[10px] px-2.5 py-1 rounded-md uppercase tracking-wider">
                                            {item.badge}
                                        </div>
                                    )}
                                </div>

                                {/* Body in Two Columns on md+ */}
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                                    {/* Left: Highlights List */}
                                    <div className="md:col-span-7">
                                        <ul className="text-xs text-muted space-y-2 list-disc pl-4 leading-relaxed">
                                            {item.highlights.map((h, hIdx) => (
                                                <li key={hIdx}>{h}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Right: Spec Ledger + Tags + CTA */}
                                    <div className="md:col-span-5 space-y-3">
                                        <div className="bg-background/80 rounded-xl p-3.5 border border-line space-y-2 text-xs">
                                            <div className="flex justify-between items-baseline gap-2">
                                                <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">Role</span>
                                                <span className="font-semibold text-foreground text-right">{item.role}</span>
                                            </div>
                                            <div className="flex justify-between items-baseline gap-2">
                                                <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">Scope</span>
                                                <span className="font-semibold text-foreground text-right">{item.companyOrScope}</span>
                                            </div>
                                            <div className="flex justify-between items-baseline gap-2">
                                                <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">Period</span>
                                                <span className="font-medium text-muted text-right">{item.period}</span>
                                            </div>
                                            {item.impactMetric && (
                                                <div className="flex justify-between items-baseline gap-2 pt-1 border-t border-line/60">
                                                    <span className="text-[10px] font-bold text-maroon uppercase tracking-wider">Impact</span>
                                                    <span className="font-bold text-secondary text-right">{item.impactMetric}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {item.tags.filter((t) => t && t.trim()).map((tag, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="bg-background text-muted border border-line text-[10px] font-medium px-2 py-0.5 rounded"
                                                >
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={`mailto:${PORTFOLIO_DATA.header.email}?subject=Question regarding: ${item.title}`}
                                            className="w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-secondary bg-secondary text-white hover:bg-secondary-hover transition shadow-sm"
                                        >
                                            <Mail className="w-4 h-4 text-white" /> Discuss this Initiative
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Decorative Arcade Divider */}
                <div className="arcade" aria-hidden="true" />

                {/* CASE STUDIES SECTION */}
                <section id="case-studies" className="space-y-4 scroll-mt-40">
                    <div className="rule-double pb-2 flex items-center justify-between">
                        <h2 className="text-lg font-bold font-serif text-foreground flex items-center gap-2">
                            <FileText className="w-5 h-5 text-secondary" />
                            Case Studies
                        </h2>
                        <span className="font-deva text-sm text-muted">अध्ययन</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {visibleCaseStudies.map((item, idx) => (
                            <div
                                key={item.id}
                                className="stitch border border-line rounded-2xl bg-surface/90 p-5 md:p-6 flex flex-col justify-between shadow-card space-y-4"
                            >
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <span className="text-maroon text-[11px] font-bold uppercase tracking-widest">
                                            {String(idx + 1).padStart(2, '0')} //
                                        </span>
                                        <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                    </div>
                                    <h3 className="font-bold font-serif text-foreground text-base md:text-lg leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-medium text-muted leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-line space-y-3">
                                    <div className="flex flex-wrap gap-1">
                                        {item.tags.filter((t) => t && t.trim()).map((tag, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="bg-background text-muted border border-line text-[10px] font-medium px-2 py-0.5 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <a
                                            href={item.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-line bg-background text-foreground hover:bg-secondary-tint/50 transition"
                                        >
                                            Read the analysis <ExternalLink className="w-3.5 h-3.5 text-muted" />
                                        </a>
                                        {item.pdfUrlAudio && (
                                            <a
                                                href={item.pdfUrlAudio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-line bg-background text-foreground hover:bg-secondary-tint/50 transition"
                                            >
                                                Hear the analysis <ExternalLink className="w-3.5 h-3.5 text-muted" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {readMoreCaseStudy && (
                        <div className="pt-2 text-center">
                            <a
                                href={readMoreCaseStudy.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-secondary hover:underline"
                            >
                                Browse all case studies &gt;
                            </a>
                        </div>
                    )}
                </section>

                {/* Decorative Arcade Divider */}
                <div className="arcade" aria-hidden="true" />

                {/* DUAL STREAM: WRITING & PRODUCT TEARDOWNS */}
                <section id="writing" className="space-y-4 scroll-mt-40">
                    <div className="rule-double pb-2 flex items-center justify-between">
                        <h2 className="text-lg font-bold font-serif text-foreground flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-secondary" />
                            Writing & Teardowns
                        </h2>
                        <span className="font-deva text-sm text-muted">लेखन</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        {/* Left Column: Writing */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b border-line">
                                <span className="text-maroon text-[11px] font-bold uppercase tracking-widest">
                                    Essays & Publications
                                </span>
                                <span className="text-xs text-muted font-medium">
                                    ({PORTFOLIO_DATA.writings.length})
                                </span>
                            </div>

                            <div className="space-y-4">
                                {PORTFOLIO_DATA.writings.map((writing, idx) => (
                                    <div
                                        key={writing.id}
                                        className="stitch border border-line rounded-2xl bg-surface/90 p-4 md:p-5 space-y-2.5 shadow-card"
                                    >
                                        <div className="flex items-center justify-between text-[10px]">
                                            <span className="text-maroon text-[11px] font-bold uppercase tracking-widest">
                                                W{String(idx + 1).padStart(2, '0')} //
                                            </span>
                                            <div className="flex items-center gap-2 text-muted">
                                                <span className="bg-background border border-line px-2 py-0.5 rounded font-semibold text-secondary">
                                                    {writing.platform}
                                                </span>
                                                <span>{writing.date} • {writing.readTime}</span>
                                            </div>
                                        </div>

                                        <h3 className="font-bold font-serif text-foreground text-sm md:text-base leading-snug">
                                            {writing.title}
                                        </h3>

                                        <p className="text-xs text-muted leading-relaxed">
                                            {writing.description}
                                        </p>

                                        <a
                                            href={writing.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline pt-1"
                                        >
                                            Read on {writing.platform} <ExternalLink className="w-3.5 h-3.5 text-muted" />
                                        </a>
                                    </div>
                                ))}

                                <a
                                    href={PORTFOLIO_DATA.header.medium}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center text-xs font-bold text-secondary hover:underline pt-2"
                                >
                                    See all writing &gt;
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Product Teardowns */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between pb-2 border-b border-line">
                                <span className="text-maroon text-[11px] font-bold uppercase tracking-widest">
                                    Product Teardowns
                                </span>
                                <span className="text-xs text-muted font-medium">
                                    ({PORTFOLIO_DATA.productTeardowns.length})
                                </span>
                            </div>

                            <div className="space-y-4">
                                {PORTFOLIO_DATA.productTeardowns.map((teardown, idx) => (
                                    <div
                                        key={teardown.id}
                                        className="stitch border border-line rounded-2xl bg-surface/90 p-4 md:p-5 space-y-2.5 shadow-card"
                                    >
                                        <div className="flex items-center justify-between text-[10px]">
                                            <span className="text-maroon text-[11px] font-bold uppercase tracking-widest">
                                                T{String(idx + 1).padStart(2, '0')} //
                                            </span>
                                            <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">
                                                {teardown.category}
                                            </span>
                                        </div>

                                        <h3 className="font-bold font-serif text-foreground text-sm md:text-base leading-snug">
                                            {teardown.title}
                                        </h3>

                                        <p className="text-xs text-muted leading-relaxed">
                                            {teardown.description}
                                        </p>

                                        <div className="flex flex-wrap gap-1 pt-1">
                                            {teardown.tags.filter((t) => t && t.trim()).map((tag, tIdx) => (
                                                <span
                                                    key={tIdx}
                                                    className="bg-background text-muted border border-line text-[10px] font-medium px-2 py-0.5 rounded"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex flex-col gap-1.5 pt-1">
                                            <a
                                                href={teardown.pdfUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline"
                                            >
                                                Read the teardown <ExternalLink className="w-3.5 h-3.5 text-muted" />
                                            </a>
                                            {teardown.pdfUrlAudio && (
                                                <a
                                                    href={teardown.pdfUrlAudio}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:underline"
                                                >
                                                    Hear the teardown <ExternalLink className="w-3.5 h-3.5 text-muted" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative Arcade Divider */}
                <div className="arcade" aria-hidden="true" />

                {/* SKILLS SECTION */}
                <section id="skills" className="space-y-4 scroll-mt-40">
                    <div className="rule-double pb-2 flex items-center justify-between">
                        <h2 className="text-lg font-bold font-serif text-foreground flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-secondary" />
                            Core Competencies & Stack
                        </h2>
                        <span className="font-deva text-sm text-muted">हुनर</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PORTFOLIO_DATA.skills.map((group, idx) => (
                            <div
                                key={idx}
                                className="stitch border border-line rounded-2xl bg-surface/90 p-4 md:p-5 space-y-3 shadow-card"
                            >
                                <h3 className="text-maroon text-[11px] font-bold uppercase tracking-wider">
                                    0{idx + 1} / {group.category.toUpperCase()}
                                </h3>

                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="bg-background text-foreground text-xs font-semibold px-2.5 py-1 rounded-lg border border-line"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Decorative Arcade Divider */}
                <div className="arcade" aria-hidden="true" />

                {/* CERTIFICATES & EDUCATION SECTION */}
                <section id="certificates" className="space-y-4 scroll-mt-40">
                    <div className="rule-double pb-2 flex items-center justify-between">
                        <h2 className="text-lg font-bold font-serif text-foreground flex items-center gap-2">
                            <Award className="w-5 h-5 text-secondary" />
                            Credentials & Background
                        </h2>
                        <span className="font-deva text-sm text-muted">सनद</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Education */}
                        <div className="stitch border border-line rounded-2xl bg-surface/90 p-5 md:p-6 space-y-3 shadow-card">
                            <h3 className="font-bold text-sm text-foreground flex items-center gap-2 uppercase tracking-wide">
                                <GraduationCap className="w-4 h-4 text-secondary" /> Education
                            </h3>
                            {PORTFOLIO_DATA.education.map((edu, eIdx) => (
                                <div key={eIdx} className="bg-background/80 p-3.5 rounded-xl border border-line">
                                    <div className="font-bold font-serif text-sm text-foreground">{edu.degree}</div>
                                    <div className="text-xs text-muted font-medium mt-0.5">{edu.institution} • {edu.year}</div>
                                </div>
                            ))}
                        </div>

                        {/* Certificates */}
                        <div className="stitch border border-line rounded-2xl bg-surface/90 p-5 md:p-6 space-y-3 shadow-card">
                            <h3 className="font-bold text-sm text-foreground flex items-center gap-2 uppercase tracking-wide">
                                <Award className="w-4 h-4 text-secondary" /> Verified, not just claimed.
                            </h3>

                            <div className="space-y-2.5">
                                {PORTFOLIO_DATA.certifications.map((cert) => (
                                    <div key={cert.id} className="bg-background/80 p-3.5 rounded-xl border border-line flex flex-col gap-2">
                                        <div>
                                            <div className="font-bold font-serif text-sm text-foreground">{cert.title}</div>
                                            <div className="text-xs text-muted font-medium mt-0.5">{cert.issuer} • {cert.year}</div>
                                        </div>
                                        <div className="flex gap-4 text-xs font-bold pt-1">
                                            <a
                                                href={cert.certificateUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-secondary hover:underline flex items-center gap-1"
                                            >
                                                View certificate <ExternalLink className="w-3 h-3" />
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative Arcade Divider */}
                <div className="arcade" aria-hidden="true" />

                {/* CLOSING CONTACT SECTION */}
                <section
                    id="contact"
                    className="jaali ridge-light bg-secondary text-white rounded-2xl p-8 md:p-12 pb-16 md:pb-20 border border-line space-y-6 text-center scroll-mt-40 shadow-card relative overflow-hidden"
                >
                    {/* Top Arcade Border */}
                    <div className="arcade-light -mx-8 -mt-8 md:-mx-12 md:-mt-12 rounded-t-2xl mb-4" aria-hidden="true" />

                    <div className="space-y-2 max-w-xl mx-auto">
                        <div className="font-deva text-xs text-secondary-tint/70">संपर्क</div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-tight">
                            पहले आप. Let&apos;s talk.
                        </h2>
                        <p className="text-sm md:text-base text-secondary-tint/90 leading-relaxed">
                            Open to full time PM and Ops roles.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <a
                            href={`mailto:${PORTFOLIO_DATA.header.email}?subject=Hello%20from%20Portfolio`}
                            className="bg-primary hover:bg-primary-hover text-secondary font-bold text-sm px-6 py-2.5 rounded-xl transition inline-flex items-center gap-2 shadow-sm"
                        >
                            <Mail className="w-4 h-4 text-secondary" /> Email
                        </a>
                        <a
                            href={PORTFOLIO_DATA.header.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="border border-white/30 hover:border-white hover:bg-white/10 text-white font-bold text-sm px-6 py-2.5 rounded-xl transition inline-flex items-center gap-2"
                        >
                            <Linkedin className="w-4 h-4 text-white" /> LinkedIn
                        </a>
                    </div>

                    <div className="pt-6 border-t border-white/10 text-[11px] text-white/60">
                        © 2026 Satyansh · Made in Lucknow · 26.85°N 80.95°E
                    </div>
                </section>
            </main>

            {/* Floating hire bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md text-foreground border-t border-line p-3 z-50 shadow-2xl">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="bg-secondary-tint text-secondary border border-line font-black rounded-lg px-2.5 py-1 text-xs uppercase">
                            Available to Join
                        </div>
                        <div className="hidden sm:block">
                            <div className="font-extrabold text-sm text-foreground">Looking for PM & Ops Opportunities</div>
                            <div className="text-[11px] text-muted">Open to full-time roles</div>
                        </div>
                    </div>

                    <a
                        href={`mailto:${PORTFOLIO_DATA.header.email}?subject=Interview%20Invitation%20for%20Satyansh`}
                        className="bg-primary hover:bg-primary-hover text-secondary font-extrabold text-xs px-6 py-2.5 rounded-xl transition flex items-center gap-1.5 shadow-md"
                    >
                        <span>Contact to Hire</span>
                        <ChevronRight className="w-4 h-4 text-secondary" />
                    </a>
                </div>
            </div>
        </div>
    );
}
