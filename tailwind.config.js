/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        soft: '#f5f5f5',
        darkblue: '#091c29'
      },
      animation: {
        pulse1s: 'pulse1s 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        newbounce: 'newbounce 1s infinite',
        rebounce: 'rebounce 1s infinite',
        float: 'float 3s infinite',
        refloat: 'refloat 3s infinite',
      },
      keyframes: {
        pulse1s: {
          '25%': {
            opacity: '.1',
          },
        },
        newbounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        rebounce: {
          '0%, 100%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        float: {
          '0%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
        refloat: {
          '0%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
          '50%': {
            transform: 'translateY(0px)',
            animationTimingFunction: 'ease-in-out',
          },
          '100%': {
            transform: 'translateY(-20px)',
            animationTimingFunction: 'ease-in-out',
          },
        },
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
        2500: '2500ms',
        3000: '3000ms',
      },
      boxShadow: {
        soft: '20px 20px 35px #d0d0d0, -20px -20px 35px #ffffff',
        softBlack: '10px 10px 25px #111121, -10px -10px 25px #101020',
      },
      fontFamily: {
        dosis: ['Dosis']
      }
    },
  },
  plugins: [],
}
