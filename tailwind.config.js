module.exports = {
  mode: 'jit',
  content: ['src/**/*.{ts,tsx}', 'index.html'],
  safelist: [
    'animate-flow-text-100',
    'animate-flow-text-75',
    'animate-flow-text-50',
    'animate-flow-text-25',
  ],
  theme: {
    extend: {
      animation: {
        'flow-text-100': 'flow-text 12s ease-in-out infinite',
        'flow-text-75': 'flow-text 11s ease-in-out infinite',
        'flow-text-50': 'flow-text 13s ease-in-out infinite',
        'flow-text-25': 'flow-text 10s ease-in-out infinite',
      },
      keyframes: {
        'flow-text': {
          '0%': { transform: 'translate(100%)' },
          '100%': { transform: 'translate(-100%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
