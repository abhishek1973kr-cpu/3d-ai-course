/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: '#07070e',
          card: 'rgba(17, 18, 35, 0.75)',
          border: 'rgba(112, 0, 255, 0.25)',
          purple: '#8b5cf6',
          violet: '#7c3aed',
          neonBlue: '#00d2ff',
          neonCyan: '#00f5d4',
          accent: '#a855f7',
          pink: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      boxShadow: {
        'neon-cyan': '0 0 25px rgba(0, 245, 212, 0.45)',
        'neon-purple': '0 0 25px rgba(139, 92, 246, 0.45)',
        'neon-blue': '0 0 25px rgba(0, 210, 255, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 245, 212, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(139, 92, 246, 0.8))' },
        }
      }
    },
  },
  plugins: [],
}

