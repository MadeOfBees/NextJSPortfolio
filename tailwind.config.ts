import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '720px',
      lg: '1080px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        satoshi: [`var(--font-satoshi)`],
      },
    },
  },
}
export default config
