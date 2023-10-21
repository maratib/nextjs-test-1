import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        titles: '#363636',
        'primary-bg': '#f3f3f3',
        primary: '#0acf83',
        disabled: '#d6d6d6'
      },
      boxShadow: {
        'card-shadow': '0px 0px 54px 0px rgba(0, 0, 0, 0.10)'
      }
    },
  },
  plugins: [],
}
export default config
