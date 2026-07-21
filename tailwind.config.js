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
                blinkit: {
                    yellow: '#f7c32e',
                    'yellow-hover': '#e0b028',
                    green: '#0c831f',
                    'green-dark': '#096317',
                    'green-light': '#f0fdf4',
                    gray: '#f4f6fb',
                }
            }
        },
    },
    plugins: [],
}