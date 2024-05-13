const withPWA = require('next-pwa');
const path = require('path');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  plugins: {
    'postcss-modules': {
      generateScopedName: (name, filename, css) => {
        const camelCaseName = name.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
        return camelCaseName;
      },
    },
    // Other PostCSS plugins you may use
  },
});
module.exports = {
  // Your existing configuration...
  webpack: (config, { isServer }) => {
    // Remove 'pwa' property from GenerateSW plugin configuration
    if (!isServer) {
      config.plugins = config.plugins.map((plugin) => {
        if (plugin.constructor.name === 'GenerateSW') {
          delete plugin.pwa;
        }
        return plugin;
      });
    }

    return config;
  },
};