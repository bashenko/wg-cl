import type { Config } from "tailwindcss";

// Define your theme directly in the config file
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        'wgs-blue': '#00b5d4',
        'Text-Black': '#393d42',
        blue: {
          '1': '#00e0ff',
          '2': '#00c7f0',
          '3': '#00a6d6',
          '4': '#008cc2',
          '5': '#006ea8',
          '6': '#235d9e',
          '7': '#0C2643',
        },
        green: {
          '1': '#4adec7',
          '2': '#00a699',
          '3': '#007d59',
          '4': '#004f3d',
        },
        purple: {
          '1': '#ccc9ed',
          '2': '#9487e5',
          '3': '#7054cc',
          '4': '#57389c',
        },
        yellow: {
          '1': '#ffdb7a',
          '2': '#edba00',
          '3': '#b07d24',
          '4': '#995c30',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        xs: '0.6875rem',
        sm: '0.8125rem',
        base: '1rem',
        lg: '1.1875rem',
        xl: '1.4375rem',
        '2xl': '1.5rem',
        '3xl': '2.0625rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      fontFamily: {
        'certo-sans': ['Certo Sans', 'sans-serif'],
        logical: ['Logical', 'sans-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
        heavy: '900',
      },
      borderRadius: {
        'rounded-0': '0rem',
        'rounded-1': '0.25rem',
        'rounded-2': '1.125rem',
        'rounded-3': '2.9375rem',
      },
    },
  },
  plugins: [],
};

export default config;