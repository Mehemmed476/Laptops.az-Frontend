export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0052cc',
        'primary-dark': '#003d99',
        
        // Light Mode
        'background': '#ffffff',
        'surface': '#f8f9fa',
        'text-primary': '#1d2939',
        'text-secondary': '#475467',
        'border': '#e2e8f0',

        // Dark Mode
        'dark-background': '#0d1117',
        'dark-surface': '#161b22',
        'dark-text-primary': '#e6edf3',
        'dark-text-secondary': '#8b949e',
        'dark-border': '#30363d',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'gradient-bg': 'gradient-bg 10s ease infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'gradient-bg': { 
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}