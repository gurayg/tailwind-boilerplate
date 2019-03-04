const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
var atImport = require("postcss-import");

module.exports = ctx => ({
  // plugins: {
  //   "tailwindcss" : './tailwind.js',
  //   cssnano: ctx.env === 'production' ? {preset: 'default'} : false,
  //   autoprefixer: ctx.env === 'production' ? {} : false,
  // }
  plugins: [
    atImport,
    tailwindcss("./tailwind.js"),
    ctx.env === "production" ? cssnano({ preset: "default" }) : false,
    ctx.env === "production" ? purgecss({content: ["**/*.html"] }) : false,
    autoprefixer
  ]
});
