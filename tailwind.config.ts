import type { Config } from 'tailwindcss';

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
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
    },
    plugins: [
        function addVariablesForColors({ addBase, theme }: any) {
            let allColors = flattenColorPalette(theme('colors'));
            let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

            addBase({
                ':root': newVars,
            });
        },
    ],
};
export default config;
