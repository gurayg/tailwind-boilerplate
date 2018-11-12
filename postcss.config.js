const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

module.exports = ctx => ({
  // plugins: {
  //   "tailwindcss" : './tailwind.js',
  //   cssnano: ctx.env === 'production' ? {preset: 'default'} : false,
  //   autoprefixer: ctx.env === 'production' ? {} : false,
  // }
  plugins: [
    tailwindcss("./tailwind.js"),
    ctx.env === "production" ? cssnano({ preset: "default" }) : false,
    ctx.env === "production" ? purgecss({content: ["**/*.html"] }) : false,
    autoprefixer
  ]
});
