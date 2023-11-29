import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  plugins: [
    nextui({
      themes: {
        personalizado: {
          //https://nextui.org/docs/customization/colors
          colors: {
            background: "#FFEBD6",
            foreground: "#04346D",
            primary: "#FB8000",
            secondary: "#CCFBD3",
          },
        },
      },
    }),
  ],
}
