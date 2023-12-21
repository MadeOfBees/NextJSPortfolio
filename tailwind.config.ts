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
        'atl': "url('/images/atl.jpg')",
        'MadeOfBees': "url('/images/MadeOfBees.png')",
        'myFace': "url('/images/myFace.jpg')",
        'ReactJack': "url('/images/ReactJack.png')",
        'Rouletteo': "url('/images/Rouletteo.png')",
        'ShutTheBox': "url('/images/ShutTheBox.png')",
        'SQLStore': "url('/images/SQLStore.png')",
        'DailySudoku': "url('/images/DailySudoku.png')",
        'thisPortfolio': "url('/images/thisPortfolio.png')",
        'TSTetris': "url('/images/TSTetris.png')",
      },
      fontFamily: {
        satoshi: [`var(--font-satoshi)`],
      },
    },
  },
};
export default config;
