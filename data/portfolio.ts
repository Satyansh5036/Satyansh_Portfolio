import { PortfolioData } from '@/types/portfolio';

export const PORTFOLIO_DATA: PortfolioData = {
    header: {
        name: "Satyansh",
        tagline: "Project Management • Operations Leadership • Software Engineering",
        quote: "Even as the spring arrives, when the world shines green, and everything turns warm, The small river never forgets the cold winter.",
        location: "Lucknow, IN / Remote",

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
            badge: "Efficient",
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
        }, {
            id: "exp-5",
            title: "Product Intern",
            role: "Product Intern",
            companyOrScope: "ClickPost",
            period: "Nov 2025 - Dec 2025",
            category: "Internship",
            badge: "",
            impactMetric: "",
            highlights: [
                "Drafted PRDs and wireframes with engineering and design and defined success metrics for Control Tower, driving transparency for the clients on their post-purchase experience of the customers",
                "Analysed courier performance / SLA breaches / RTO / NDR data using Databricks across different brands",
                "Worked cross functionally with product, design, and business teams to improve workflow usability and operational efficiency"
            ],
            tags: ["Control Tower"]
        }
    ],
    caseStudies: [
        {
            id: "cs-1",
            title: "Amazon: From Market Leader to Global Dominator",
            category: "Business • Strategy",
            description: "Should the world’s largest streaming platform (by market share) accelerate investment to capture $400B+ in untapped market opportunities, or maintain current trajectory?",
            tags: ["Root-cause analysis", "Hypothesis elimination", "Prioritization scoring"],
            pdfUrl: "https://drive.google.com/file/d/1X-sr6idMOLLsJOObBhI-MKVT8acpSeG_/view?usp=sharing"
        },
        {
            id: "cs-2",
            title: "CRED: The Promise That Pays Later",
            category: "Fintech • Engagenement • Funnel Diagnosis",
            description: "A complex flow is frustrating. A zero-value first week is what actually drives churn.",
            tags: [" Bottleneck analysis", "Journey mapping", "Experiment plan"],
            pdfUrl: "https://drive.google.com/file/d/1Pyf5LvFMpTYNDU5Dy4ZnnQCMxRyYuiSp/view?usp=drive_link",
            pdfUrlAudio: "https://drive.google.com/file/d/1gYK0QQbW6AbdkxzcSrRhGdJVyKxlTV_N/view?usp=sharing"
        },
        {
            id: "cs-3",
            title: "READ MORE",
            category: "",
            description: "",
            tags: [""],
            pdfUrl: "https://drive.google.com/drive/folders/15kRPZK8SnXc1rtcCnJBsx5xD-ghaCek9"
        }
    ],
    productTeardowns: [
        {
            id: "pt-1",
            title: "Applyo: The Gap Between Unified UX and Candidate Trust",
            category: "Ed-Tech • Product design",
            description: "Designing for the document you forgot after sending your MBA app",
            tags: ["Journey mapping", "Constraint framing", "Tradeoff analysis"],
            pdfUrl: "https://drive.google.com/file/d/1OGooRZaCm4fWVc8f7J3FN-h8NRQ1L2Ol/view?usp=sharing"
        },
        {
            id: "pt-2",
            title: "Lost in the Aisles: Teardown of the Picklist UX Problem",
            category: "Q-Commerce • Product design",
            description: "Unpacking route inefficiencies, pick errors, and the UX fixes needed for fast fulfillment.",
            tags: ["Persona design", "Needs mapping", "Prioritization"],
            pdfUrl: "https://drive.google.com/file/d/1nxL1PDLZPWsViVtCh2PTR-mUWxPpg-WW/view?usp=drive_link"
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