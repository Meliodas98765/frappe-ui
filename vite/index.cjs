// CommonJS wrapper for frappe-ui vite plugin
// This allows the module to be loaded via require() during vite.config.js bundling

const { createRequire } = require('module');
const { pathToFileURL } = require('url');
const path = require('path');

// Use dynamic import to load the ESM module
const esmModulePath = path.join(__dirname, 'index.js');

let modulePromise;

function getFrappeuiPlugin() {
  if (!modulePromise) {
    modulePromise = import(pathToFileURL(esmModulePath).href).then(
      (module) => module.default
    );
  }
  return modulePromise;
}

// Export a function that returns the plugin
module.exports = function frappeuiPluginWrapper(options) {
  // Return a Vite plugin that defers to the ESM module
  return {
    name: 'frappe-ui-loader',
    async config(config, env) {
      const frappeuiPlugin = await getFrappeuiPlugin();
      const plugins = frappeuiPlugin(options);
      
      // Apply all plugins from the ESM module
      if (!config.plugins) config.plugins = [];
      config.plugins.push(...plugins);
      
      return config;
    },
  };
};

// Also support default export
module.exports.default = module.exports;
