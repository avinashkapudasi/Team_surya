/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFF9E6',
          100: '#FFF2CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#D4AF37', // gold
          600: '#AA8C2C',
          700: '#806921',
          800: '#554616',
          900: '#2B230B',
        },
        secondary: {
          50: '#F8E6E8',
          100: '#F1CCD2',
          200: '#E399A5',
          300: '#D56678',
          400: '#C7334B',
          500: '#C41E3A', // deep red
          600: '#9D182E',
          700: '#761223',
          800: '#4E0C17',
          900: '#27060C',
        },
        accent: {
          50: '#E6EEF9',
          100: '#CCDDF3',
          200: '#99BBE7',
          300: '#6699DB',
          400: '#3377CF',
          500: '#0047AB', // royal blue
          600: '#003989',
          700: '#002B67',
          800: '#001C44',
          900: '#000E22',
        },
        tertiary: {
          50: '#FFF0E6',
          100: '#FFE1CC',
          200: '#FFC399',
          300: '#FFA566',
          400: '#FF8633',
          500: '#FF7722', // warm orange
          600: '#CC5F1B',
          700: '#994714',
          800: '#66300E',
          900: '#331807',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2788488/pexels-photo-2788488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'texture': "url('https://images.pexels.com/photos/4585184/pexels-photo-4585184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};