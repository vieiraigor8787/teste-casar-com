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
        primary: 'var(--primary)',
        primaryLight: 'var(--primaryLight)',
        primaryDark: 'var(--primaryDark)',
        placeholderText: 'var(--placeholderText)',
        greyNeutral: 'var(--greyNeutral)',
        greyDark: 'var(--greyDark)',
        greySecondary: 'var(--greySecondary)',
        background: 'var(--white)',
        backgroundMatte: 'var(--backgroundMatte)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        danger: 'var(--danger)',
      },
      fontSize: {
        xl: '21px',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}
export default config
