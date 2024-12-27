/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["var(--font-barlow-con)"],
        barlowCon: ["var(--font-barlow-con)"],
        bellefair: ["var(--font-bellefair)"],
      },
      colors: {
        white: ["var(--White)"],
        darkBlue: ["var(--Dark-blue)"],
        lightBlue: ["var(--Light-blue)"],
        gray: ["var(--Gray)"],
      },
      fontSize: {
        xxxSmall: ["var(--XXX-small)"],
        xxSmall: ["var(--XX-small)"],
        xSmall: ["var(--X-small)"],
        small: ["var(--Small)"],
        medium: ["var(--Medium)"],
        xMedium: ["var(--X-medium)"],
        xxMedium: ["var(--XX-medium)"],
        xxxMedium: ["var(--XXX-medium)"],
        xxxxMedium: ["var(--XXXX-medium)"],
        large: ["var(--Large)"],
        xLarge: ["var(--X-large)"],
        xxLarge: ["var(--XX-large)"],
        xxxLarge: ["var(--XXX-Large)"],
      },

      // lineHeight: {},
      // letterSpacing: {},
      width: {
        small: ["var(--XX-small)"],
      },
      height: {
        small: ["var(--XX-small)"],
      },
    },
  },
  plugins: [],
};
