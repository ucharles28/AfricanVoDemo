module.exports = {
    content: [
      './pages/**/*.{html,js}',
      './components/*.{html,js}',
      './talents-onboarding/*.{html,js}'
    ],
    media: false, // or 'media' or 'class'
    theme: {
      colors: {
        'white': '#ffffff',
        'twitter': '#1da1f2',
        'googlesignin': '#346EF1',
        'gold': '#FFBC00',
        'purple': {
          50: '#F9F4FF',
          100: '#ECDEFF',
          200: '#E0C8FF',
          250: '#E6D2FF',
          300: '#D0ACFF',
          400: '#C190FF',
          500: '#B175FF',
          600: '#874AD4',
          700: '#6C3BAA',
          800: '#512D80',
          900: '#361E55',
          1000: '#A259FF',
        },
        'gray': {
          50: '#C4C4C4',
          100: '#F3F4F6',
          150: '#CED4DA',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          550: '#828282',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
};