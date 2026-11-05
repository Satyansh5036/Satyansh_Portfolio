/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#F8F4EA',
                surface: '#FFFFFF',
                line: '#E2DAC6',
                foreground: '#121A33',
                muted: '#5B6378',
                primary: {
                    DEFAULT: '#D8A04A',
                    hover: '#C48D3A',
                },
                secondary: {
                    DEFAULT: '#1E2B52',
                    hover: '#162040',
                    tint: '#E8EBF4',
                },
                sandstone: '#E9DCC0',
                maroon: '#6E1B2B',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
                deva: ['var(--font-deva)', 'serif'],
            },
            boxShadow: {
                card: '0 1px 2px rgba(18,26,51,0.06), 0 8px 24px rgba(18,26,51,0.06)',
            },
        },
    },
    plugins: [],
};
