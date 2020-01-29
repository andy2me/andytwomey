export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "Andy Twomey – SaaS Marketing Nerd!",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          process.env.npm_package_description ||
          "Welcome, I'm Andy Twomey, a SaaS marketing nerd. You'll find me geeking out on how teams can unlock growth with smarter marketing."
      }
    ],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Barlow:400,500,600,700&display=swap"
      },
      { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon-96x96.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png"
      }
    ],
    script: [
      {
        innerHTML:
          '{ window.prismic = { endpoint: "https://andytwomey.prismic.io/api/v2"} }'
      },
      { src: "//static.cdn.prismic.io/prismic.min.js" }
    ],
    __dangerouslyDisableSanitizers: ["script"]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#5f00ff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/link-resolver.js", "~/plugins/prismic-vue.js"],
  // plugins: ["~/plugins/prismic-vue.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/axios",
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-50142892-1"
      }
    ]
  ],
  purgeCSS: {
    whitelist: ["squiggle"],
    whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [["@nuxtjs/google-tag-manager", { id: "GTM-XXXXXXX" }]],
  /*
   ** Build configuration
   */
  build: {
    html: { minify: { collapseWhitespace: true } },
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        "postcss-easings": {},
        "postcss-for": {},
        "postcss-nested": {}
      }
    },
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    }
  }
};
