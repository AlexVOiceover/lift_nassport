/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', // Root HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all files in src and its subfolders
  ],
  theme: {
    extend: {
      keyframes: {
        borderPulse: {
          '0%': { borderRadius: '0.3rem' },
          '50%': { borderRadius: '1.1rem' },
          '100%': { borderRadius: '0.3rem' },
        },
      },
      animation: {
        borderPulse: 'borderPulse 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
