// CommonJS version of tailwind preset for compatibility
const colors = require('./colors.js');
const plugin = require('./plugin.js');

module.exports = {
  theme: {
    extend: {
      colors: colors.colors,
    },
  },
  plugins: [plugin],
};
