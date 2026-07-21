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
        location: string;
        deliveryTime: string;
        slaSubtext: string;
        email: string;
        phone: string;
        linkedin: string;
        github: string;
    };
    stats: Array<{ label: string; value: string }>;
    skills: SkillGroup[];
    experiences: ProjectOrExperience[];
    education: EducationItem[];
    achievements: AchievementItem[];
}