import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            'sheen-gold': {
                DEFAULT: '#CAA45D',
                300: '#dfc89e',
                200: '#e5d2ae',
                100: '#eadbbe',
            },
            'raisin-black': '#291F28',
            'taupe-gray': '#958D98',
            wenge: '#605862',
            wine: {
                DEFAULT: '#7F3343',
                900: '#190a0d',
                800: '#260f14',
                700: '#33141b',
            },
            silver: {
                DEFAULT: '#BBB4B3',
                100: '#EAE9EA',
                200: '#D4D2D4',
                300: '#BFBCBF',
                400: '#A9A5A9',
            },
        },
    },
    plugins: [],
};
export default config;
