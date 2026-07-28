import { PortfolioData } from '@/types/portfolio'; // Assuming you have updated types to include these, or you can remove the strict typing if it complains

export const PORTFOLIO_DATA = {
    header: {
        name: "Satyansh",
        tagline: "Project Management • Operations Leadership • Software Engineering",
        location: "Lucknow, IN / Remote",
        deliveryTime: "10 mins",
        slaSubtext: "Ready to deploy on high-impact product & ops teams",
        email: "satyansh.g16@gmail.com",
        phone: "+91 8954471993",
        linkedin: "https://linkedin.com",
        medium: "https://medium.com/@satyanshsrivastava-37413",
        github: "https://github.com",
    },
    stats: [
        { label: "Usability Boost", value: "+15%" },
        { label: "Engineering Hours Saved", value: "10 hrs/wk" },
        { label: "Staff Trained", value: "40+" },
        { label: "Support Tickets Cut", value: "-25%" },
    ],
    skills: [
        { category: "Product & Growth", items: ["Product Scope", "User Research", "Agile/Scrum", "Usability Testing", "Funnel Analytics"] },
        { category: "Analytics & Tools", items: ["Amplitude", "Mixpanel", "SQL", "Excel", "Figma", "Jira", "Notion"] },
        { category: "Engineering", items: ["React", "Next.js", "Frontend Architecture", "Low-Code Frameworks"] },
        { category: "Operations", items: ["ERP Implementation", "SLA Tracking", "Vendor Management", "Stakeholder Alignment"] },
    ],
    experiences: [
        {
            id: "exp-1",
            title: "CareConnect & Voice Product Initiatives",
            role: "Self-Directed Independent Product Builder",
            companyOrScope: "Independent",
            period: "Jan 2026 - Present",
            category: "Product",
            badge: "Trending Launch",
            impactMetric: "3 Core Workstreams Delivered",
            highlights: [
                "Owned full project lifecycle across 3 independent initiatives with no initial playbook or team.",
                "Coordinated end-to-end delivery of CareConnect healthcare platform spanning medication tracking and caregiver coordination.",
                "Ran structured testing cycles for voice-based AI initiatives, tracking edge cases for go/no-go decisions."
            ],
            tags: ["Product Strategy", "Healthcare MVP", "Voice AI Testing", "Zero-to-One"]
        },
        {
            id: "exp-2",
            title: "Onboarding & Workflow Optimization",
            role: "Associate Product Manager",
            companyOrScope: "Talentlo",
            period: "Jun 2025 - Dec 2025",
            category: "Product",
            badge: "Bestseller",
            impactMetric: "+15% Completion Rate",
            highlights: [
                "Owned onboarding workflows end-to-end, tracking activation and completion metrics against timelines.",
                "Ran 25+ usability sessions and workflow experiments to improve completion rate by ~15%.",
                "Coordinated with business and engineering stakeholders to sequence workflow improvements using funnel data."
            ],
            tags: ["Funnel Analytics", "Usability Testing", "A/B Testing", "Mixpanel"]
        },
        {
            id: "exp-3",
            title: "ERP Implementation & Staff Deployment",
            role: "ERP Implementation Support",
            companyOrScope: "Mediversal Healthcare",
            period: "Apr 2025 - May 2025",
            category: "Internship",
            badge: "High Efficiency",
            impactMetric: "-25% Support Tickets",
            highlights: [
                "Coordinated ERP rollout across 4 operational departments, managing timeline, scope, and alignment.",
                "Tracked SLAs and managed process escalation throughout deployment, ensuring on-time delivery.",
                "Trained 40+ staff on new workflows, reducing support tickets by 25% and boosting reporting efficiency by 30%."
            ],
            tags: ["ERP Rollout", "Change Management", "SLA Tracking", "Operations"]
        },
        {
            id: "exp-4",
            title: "Operations & Customer Research Turnaround",
            role: "Chief of Staff",
            companyOrScope: "Awadhesh RO Water Plant",
            period: "Jan 2022 - Apr 2024",
            category: "Operations",
            badge: "Ops Turnaround",
            impactMetric: "+20% Customer CSAT",
            highlights: [
                "Led customer research initiative across 100+ users to translate service gaps into operational fixes.",
                "Stood up operations tracking and vendor coordination processes, improving project delivery reliability.",
                "Supported executive decision-making using structured demand and operations data reporting."
            ],
            tags: ["Operations Strategy", "Customer Research", "Vendor Management", "KPI Tracking"]
        }
    ],
    caseStudies: [
        {
            id: "cs-1",
            title: "Netflix: the metric fell, but nobody stopped watching",
            category: "Streaming • Metrics & experimentation",
            description: "A root-cause analysis of a 10% drop in Average View Duration in two weeks.",
            tags: ["Root-cause analysis", "Hypothesis elimination", "Prioritization scoring"],
            pdfUrl: "/pdfs/netflix.pdf"
        },
        {
            id: "cs-2",
            title: "Flipkart: the return that costs twice",
            category: "E-commerce • Marketplace ops",
            description: "A slow refund is annoying. A silent one is what actually breaks trust.",
            tags: ["Root-cause framing", "Journey mapping", "Competitor analysis"],
            pdfUrl: "/pdfs/flipkart.pdf"
        }
    ],
    productTeardowns: [
        {
            id: "pt-1",
            title: "Zepto: adding to an order that's already on its way",
            category: "Quick commerce • Product design",
            description: "A teardown of the moment you remember one more thing after checkout.",
            tags: ["Journey mapping", "Operational constraint framing", "Tradeoff analysis"],
            pdfUrl: "/pdfs/zepto.pdf"
        },
        {
            id: "pt-2",
            title: "WhatsApp: designing for the groups inside your groups",
            category: "Messaging • Product design",
            description: "How to grow connection on WhatsApp without turning it into a social network.",
            tags: ["Persona design", "Needs mapping", "Prioritization"],
            pdfUrl: "/pdfs/whatsapp.pdf"
        }
    ],
    writings: [
        {
            id: "wr-1",
            title: 'Amazon’s 2-Pizza Teams: The Secret to Scaling Innovation',
            platform: "Medium",
            date: "Sept 2025",
            readTime: "3 min",
            description: "In the early days of Amazon, Jeff Bezos popularized a rule that fundamentally shaped the company’s organizational culture:",
            url: "https://medium.com/@satyanshsrivastava-37413/amazons-2-pizza-teams-the-secret-to-scaling-innovation-91e31fe07251"
        }
    ],
    certifications: [
        {
            id: "cert-1",
            title: "AI Product Management Fellowship",
            issuer: "NextLeap",
            year: "2026",
            certificateUrl: "https://assets.nextleap.app/certificate/Cohort-32-60242223c2abd227f9f2febec9230ddd.pdf",
            verifyUrl: "https://credential.net/"
        }
    ],
    education: [
        {
            degree: "B.Tech in Computer Science & Engineering",
            institution: "UPES, Dehradun",
            year: "Graduated 2020"
        }
    ],
    achievements: [
        { title: "Winner - Product Manager Fellowship", issuer: "NextLeap" },
        { title: "Top 10 (#7) - PML December Challenge", issuer: "Prodalytics, IIM Indore" }
    ]
};