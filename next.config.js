
/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const path = require("path");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    disable: false
  },
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  images: {
    domains: [
      "fakestoreapi.com",
      "api.lorem.space",
      "picsum.photos",
      "placeimg.com",
      "encrypted-tbn0.gstatic.com",
      
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  productionBrowserSourceMaps: true,
  swcMinify: false,
  compress: true,
  optimizeFonts: true,
  devIndicators: {
    autoPrerender: false,
    buildActivityPosition: "bottom-right"
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
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
  env: {
    //NEXT_APP_BASE_URL: process.env.NEXT_APP_BASE_URL,
    
  }
});









