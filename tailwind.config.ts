import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F9F5F0',
          light: '#FFFEF9',
          dark: '#F0EBE3',
        },
        charcoal: {
          DEFAULT: '#1F2937',
          light: '#374151',
          dark: '#111827',
        },
        slate: {
          DEFAULT: '#475569',
          light: '#64748B',
          dark: '#334155',
        },
        'dusty-rose': {
          DEFAULT: '#9F7B7B',
          light: '#B89595',
          dark: '#866565',
        },
        'muted-gold': {
          DEFAULT: '#B89968',
          light: '#D4B896',
          dark: '#9C7F4E',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
