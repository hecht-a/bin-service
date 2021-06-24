const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");
const tailwind = require("tailwindcss");

module.exports = {
  plugins: [tailwind("tailwind.config.js"), autoprefixer(), postcssImport()],
};
