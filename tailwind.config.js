module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-red': '#e01b2f',
        'brand-orange': '#ff6c00',
        'dark': '#1c242e',
        'dark-accent': '#0e1823'
      },
      maxWidth: {
        content: '1250px'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0%',
            bottom: 0
          },
          '70%': {
            opacity: '100%',
          },
          '100%': {
            opacity: '100%',
            bottom: 0
          }
        },
        'slide-in-from-right': {
          '0%': {
            transform: 'translateX(100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'slide-out-to-right': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      },
      animation: {
        'fade-in': 'fade-in .3s linear forwards',
        'slide-in-from-right': 'slide-in-from-right .2s ease-out forwards',
        'slide-out-to-right': 'slide-out-to-right .2s ease-out forwards',
      }
    },
  },
  plugins: [],
}