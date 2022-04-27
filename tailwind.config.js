module.exports = {
  mode: 'jit',
  content: ['src/**/*.{ts,tsx}', 'index.html'],
  safelist: [
    'animate-flow-text-4',
    'animate-flow-text-3',
    'animate-flow-text-2',
    'animate-flow-text-1',
  ],
  theme: {
    extend: {
      animation: {
        'flow-text-4': 'flow-text 8s linear infinite',
        'flow-text-3': 'flow-text 7s linear infinite',
        'flow-text-2': 'flow-text 6s linear infinite',
        'flow-text-1': 'flow-text 5s linear infinite',
      },
      keyframes: {
        'flow-text': {
          '0%': { transform: 'translate(110%)' },
          '100%': { transform: 'translate(-150%)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
