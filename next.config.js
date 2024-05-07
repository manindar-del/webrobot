const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  plugins: {
    "postcss-modules": {
      generateScopedName: (name, filename, css) => {
        // Converti kebab-case in camelCase
        const camelCaseName = name.replace(/-([a-z])/g, (g) =>
          g[1].toUpperCase()
        );

        // Puoi aggiungere ulteriori logiche qui se necessario
        return camelCaseName;
      },
    },
    // Altri plugin PostCSS che potresti utilizzare
  },
};
