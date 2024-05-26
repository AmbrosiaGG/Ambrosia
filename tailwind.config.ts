/**
 * * This is way to fucking hard
 * * tailwind configs are shitty
 * * Procead with caution!!!
 **/

const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./views/**/*",
    "./views/*",
    "./templates/*",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
  ],
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  theme: {
    extend: {
      animation: {
        gradient: "gradient 8s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        slide: {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
      },
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
      calsans: ["Cal Sans"],
      srcode: ["Source Code Pro", "monospace"],
      annon: ["Anonymous Pro", "monospace"],
      paytone: ["Paytone One", "sans-serif"],
      IBM: ["IBM Plex Mono", "monospace"],
      BBHL: ["Baloo Bhai 2", "sans-serif"],
    },
    variants: {
      extend: {
        backgroundColor: ["checked"],
        borderColor: ["checked"],
        inset: ["checked"],
        zIndex: ["hover", "active"],
      },
    },
  },
  plugins: [
    require("preline/plugin"),
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: "ctp",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
  ]
};
