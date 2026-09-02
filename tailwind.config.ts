import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#05070c',
        panel: '#0d111a',
        panel2: '#111722',
        text: '#f5f7fb',
        muted: '#98a1b3',
        accentRed: '#ff3b46',
        accentBlue: '#3d7cff',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.09)',
      },
    },
  },
  plugins: [],
};

export default config;
