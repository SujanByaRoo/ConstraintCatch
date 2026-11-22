/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#06080F', // Root background
          900: '#0A0E17', // Base canvas
          850: '#0E1422', // Primary card surface
          800: '#141D30', // Elevated panel
          700: '#1E2B45', // Interactive surface
          600: '#2A3C5E', // Subtle borders
        },
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
        },
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        coral: {
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
        'clay': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.1), 0 8px 24px -4px rgba(0, 0, 0, 0.5)',
        'glow-cyan': '0 0 20px -5px rgba(34, 211, 238, 0.3)',
        'glow-violet': '0 0 20px -5px rgba(139, 92, 246, 0.3)',
        'glow-coral': '0 0 20px -5px rgba(239, 68, 68, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
