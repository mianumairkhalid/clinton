/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      'sukhumvit': ['Sukhumvit Set', 'sans-serif'],
      'graphik': ['GraphikTH Set', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        'grey-common': '#F3F3F3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
