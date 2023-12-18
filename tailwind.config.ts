import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        'TSTetris': "url('/images/TSTetris.png')",
        'ReactJack': "url('/images/TSTetris.png')",
        'shutTheBox': "url('/images/shutTheBox.jpg')",
        'Rouletteo': "url('/images/Rouletteo.jpg')",
        'SQLStore': "url('/images/SQLStore.jpg')",
        'Sudoku': "url('/images/Sudoku.jpg')"
      },
      fontFamily: {
        satoshi: [`var(--font-satoshi)`],
      },
    },
  },
};
export default config;
