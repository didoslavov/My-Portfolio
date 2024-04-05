import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            'sheen-gold': '#CAA45D',
            'raisin-black': '#291F28',
            'taupe-gray': '#958D98',
            wenge: '#605862',
            wine: '#7F3343',
            silver: '#BBB4B3',
        },
    },
    plugins: [],
};
export default config;
