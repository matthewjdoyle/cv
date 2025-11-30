/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', ...fontFamily.sans],
        display: ['var(--font-outfit)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['1rem', { lineHeight: '1.7', letterSpacing: '0' }],
        'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
        '3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 1px 3px var(--tw-shadow-color)',
        md: '0 2px 8px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      animation: {
        'orbit-slow': 'orbit 35s linear infinite',
        'orbit-medium': 'orbit 25s linear infinite',
        'orbit-fast': 'orbit 18s linear infinite',
        'orbit-reverse': 'orbit-reverse 40s linear infinite',
        'orbit-elliptical': 'orbit-ellipse 30s linear infinite',
        'orbit-ellipse-reverse': 'orbit-ellipse-reverse 30s linear infinite',
        'counter-rotate': 'counter-rotate 30s linear infinite',
        'counter-rotate-reverse': 'counter-rotate-reverse 30s linear infinite',
        'pulse-star': 'pulse-star 3s ease-in-out infinite',
        'pulse-corona': 'pulse-corona 3s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'expand-to-orbit': 'expand-to-orbit 1s cubic-bezier(0.65, 0, 0.35, 1) forwards',
        'satellite-glow': 'satellite-glow 3s ease-in-out infinite',
        'solar-panel-shimmer': 'solar-panel-shimmer 4s ease-in-out infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'orbit-ellipse': {
          '0%': { transform: 'scaleX(1.6) scaleY(0.7) rotate(0deg)' },
          '100%': { transform: 'scaleX(1.6) scaleY(0.7) rotate(360deg)' },
        },
        'orbit-ellipse-reverse': {
          '0%': { transform: 'scaleX(1.6) scaleY(0.7) rotate(360deg)' },
          '100%': { transform: 'scaleX(1.6) scaleY(0.7) rotate(0deg)' },
        },
        'counter-rotate': {
          '0%': { transform: 'rotate(0deg) scaleX(1) scaleY(1)' },
          '100%': { transform: 'rotate(-360deg) scaleX(1) scaleY(1)' },
        },
        'counter-rotate-reverse': {
          '0%': { transform: 'rotate(0deg) scaleX(1) scaleY(1)' },
          '100%': { transform: 'rotate(360deg) scaleX(1) scaleY(1)' },
        },
        'expand-to-orbit': {
          '0%': { transform: 'translateX(var(--start-offset-x, 0)) translateY(var(--start-offset-y, 0)) scale(0)' },
          '100%': { transform: 'translateX(-50%) translateY(0) scale(1)' },
        },
        'pulse-star': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow:
              '0 0 50px rgba(74, 144, 226, 0.8), 0 0 100px rgba(74, 144, 226, 0.6), 0 0 150px rgba(74, 144, 226, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.5)',
          },
          '50%': {
            transform: 'scale(1)',
            boxShadow:
              '0 0 60px rgba(74, 144, 226, 0.9), 0 0 120px rgba(74, 144, 226, 0.7), 0 0 180px rgba(74, 144, 226, 0.5), inset 0 0 35px rgba(255, 255, 255, 0.6)',
          },
        },
        'pulse-corona': {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: 0.6
          },
          '50%': { 
            transform: 'scale(1.2)',
            opacity: 0.9
          },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%': { filter: 'brightness(1) saturate(1)' },
          '100%': { filter: 'brightness(1.2) saturate(1.3)' },
        },
        'orbit-elliptical': {
          '0%': { transform: 'rotate(0deg) translateX(0) scaleX(0.625) scaleY(1.43)' },
          '100%': { transform: 'rotate(360deg) translateX(0) scaleX(0.625) scaleY(1.43)' },
        },
        'orbit-ellipse-reverse': {
          '0%': { transform: 'rotate(0deg) translateX(0) scaleX(0.625) scaleY(1.43)' },
          '100%': { transform: 'rotate(-360deg) translateX(0) scaleX(0.625) scaleY(1.43)' },
        },
        'satellite-glow': {
          '0%, 100%': { 
            filter: 'drop-shadow(0 0 8px rgba(74, 144, 226, 0.6)) drop-shadow(0 0 16px rgba(74, 144, 226, 0.3))',
          },
          '50%': { 
            filter: 'drop-shadow(0 0 12px rgba(74, 144, 226, 0.8)) drop-shadow(0 0 24px rgba(74, 144, 226, 0.5))',
          },
        },
        'solar-panel-shimmer': {
          '0%, 100%': { opacity: 0.85 },
          '50%': { opacity: 1 },
        },
      },
      colors: {
        'star-gold': '#FFD700',
        'deep-space': '#0a0a0a',
        'cosmic-blue': '#1e3a8a',
        'nebula-purple': '#6366f1',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );
    }),
  ],
}
