/** 
 * * This is way to fucking hard
 * * tailwind configs are shitty
 * * Procead with caution!!!
**/

const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*", "./views/*", "./templates/*", "./assets/**/*"],
  important: true,
  // Active dark mode on class basis
  darkMode: 'class', // ! Dont touch this
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: {
    content: ["./views/**/*.ejs", "./views/**/*.ejs"],
  },

  theme: {
    fontFamily: {
     Montserrat: ["Montserrat", "sans-serif"],
     calsans: ["Cal Sans"],
     srcode: ["Source Code Pro", "monospace"],
     annon: ["Anonymous Pro", "monospace"],
     paytone: ["Paytone One", "sans-serif"],
     IBM: ["IBM Plex Mono", "monospace"]
    },
    variants: {
      extend: {
        backgroundColor: ["checked"],
        borderColor: ["checked"],
        inset: ["checked"],
        zIndex: ["hover", "active"],
      },
    },
  
    extend: {},
    keyframes: {
      "scroll": {
        to: { transform: 'translate(calc(-50% - 0.5rem))'}
      }
    },
    animation: {
      scroll: "scroll 40s linear infinite"
    }
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: "ctp",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);
      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  
  ],
  future: {
    purgeLayersByDefault: true,
  },

}

