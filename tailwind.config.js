/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './config/**/*.{js,ts}',
  ],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        lato: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        heading: ['var(--font-playfair)', 'Georgia', 'serif'],
        dancing: ['var(--font-dancing)', 'cursive'],
        accent: ['var(--font-dancing)', 'cursive'],
      },
      colors: {
        primary: '#C4653A', // warm terracotta/rust
        secondary: '#5C6B4A', // deep olive/sage
        accent: '#F5EDE0', // warm cream
        dark: '#2D2D2D', // dark text
        background: '#FFFBF7', // off-white/warm white
      },
      backgroundImage: {
        'african-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C4653A\' fill-opacity=\'0.08\'%3E%3Cpath d=\'M30 0l30 30-30 30L0 30z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      backgroundSize: {
        'pattern-sm': '30px 30px',
        'pattern-md': '60px 60px',
        'pattern-lg': '90px 90px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.1)',
        'warm': '0 4px 20px rgba(196, 101, 58, 0.15)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'scroll-left': 'scrollLeft 30s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
