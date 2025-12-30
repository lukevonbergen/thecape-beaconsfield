/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './config/**/*.{js,ts}',
  ],
  safelist: [
    {
      pattern: /^(bg|text|border)-(primary|secondary|accent|mint|dark)-(\d{2,3})$/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        heading: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
      colors: {
        primary: '#94B087', // sage green
        secondary: '#F2C4C4', // warm pink/blush
        accent: '#F9E5A0', // soft yellow
        mint: '#D4E8D1', // light mint
        dark: '#2D2D2D', // dark text
        cream: '#FFF9F0', // warm cream background
      },
      backgroundImage: {
        'polka-dots': 'radial-gradient(circle, #F2C4C4 1px, transparent 1px)',
        'confetti': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23F2C4C4\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'3\'/%3E%3C/g%3E%3Cg fill=\'%23F9E5A0\' fill-opacity=\'0.3\'%3E%3Ccircle cx=\'37\' cy=\'17\' r=\'2\'/%3E%3C/g%3E%3Cg fill=\'%23D4E8D1\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'52\' cy=\'42\' r=\'2.5\'/%3E%3C/g%3E%3Cg fill=\'%2394B087\' fill-opacity=\'0.2\'%3E%3Ccircle cx=\'17\' cy=\'52\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
      backgroundSize: {
        'polka-sm': '20px 20px',
        'polka-md': '30px 30px',
        'polka-lg': '40px 40px',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.1)',
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
