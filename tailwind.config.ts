import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "720px",
      lg: "1080px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        'atl': "url('/bees-portfolio/images/atl.jpg')",
        'MadeOfBees': "url('/bees-portfolio/images/MadeOfBees.png')",
        'ReactJack': "url('/bees-portfolio/images/ReactJack.png')",
        'Rouletteo': "url('/bees-portfolio/images/Rouletteo.png')",
        'ShutTheBox': "url('/bees-portfolio/images/ShutTheBox.png')",
        'SQLStore': "url('/bees-portfolio/images/SQLStore.png')",
        'DailySudoku': "url('/bees-portfolio/images/DailySudoku.png')",
        'thisPortfolio': "url('/bees-portfolio/images/thisPortfolio.png')",
        'TSTetris': "url('/bees-portfolio/images/TSTetris.png')",
      },
      fontFamily: {
        satoshi: [`var(--font-satoshi)`],
      },
    },
  },
};
export default config;
