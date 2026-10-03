export type CategoryType = 'Product' | 'Operations' | 'Engineering' | 'Internship';

export interface ProjectOrExperience {
    id: string;
    title: string;
    role: string;
    companyOrScope: string;
    period: string;
    category: CategoryType;
    badge?: string;
    impactMetric?: string;
    highlights: string[];
    tags: string[];
    featured?: boolean;
}

export interface CaseStudy {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    pdfUrl: string;
    pdfUrlAudio?: string;
}

export interface ProductTeardown {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    pdfUrl: string;
    pdfUrlAudio?: string;
}

export interface Writing {
    id: string;
    title: string;
    platform: string;
    date: string;
    readTime: string;
    description: string;
    url: string;
}

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    year: string;
    certificateUrl: string;
    verifyUrl: string;
}

export interface SkillGroup {
    category: string;
    items: string[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    year: string;
}

export interface AchievementItem {
    title: string;
    issuer: string;
}

export interface PortfolioData {
    header: {
        name: string;
        tagline: string;
        quote: string;
        location: string;
        slaSubtext: string;
        email: string;
        phone: string;
        linkedin: string;
        medium: string;
        github: string;
    };
    stats: Array<{ label: string; value: string }>;
    skills: SkillGroup[];
    experiences: ProjectOrExperience[];
    caseStudies: CaseStudy[];
    productTeardowns: ProductTeardown[];
    writings: Writing[];
    certifications: Certification[];
    education: EducationItem[];
    achievements: AchievementItem[];
}