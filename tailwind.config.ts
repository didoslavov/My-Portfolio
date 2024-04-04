import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        extend: {},
        colors: {
            timberwolf: '#CDCDC3',
            'sheen-gold': '#CAA45D',
            'harvest-gold': '#CC922F',
            'prussian-blue': '#1E3957',
            'oxford-blue': '#0A2749',
            'rich-black': '#0F1F2F',
        },
    },
    plugins: [],
};
export default config;
