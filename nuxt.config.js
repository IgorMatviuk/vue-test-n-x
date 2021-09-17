

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-vue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/UI.scss',
    ],

    babel:{
      "plugins": [["component", [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]],
      comments: true
    },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    { src: '~plugins/element-ui', ssr: true },
    { src: '~/plugins/vue-carousel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/bootstrap-vue',
    [
      '@nuxtjs/i18n',
      {
        locales: ['ru', 'en', 'is'],
        defaultLocale: 'ru',
        vueI18n: {
          fallbackLocale: 'ru',
          messages: {
            ru:{
              hello: 'Привет',
              lang: 'Русский'
            },
            en:{
              hello: 'Hello',
              lang: 'English'
            },
            is:{
              hello: 'Здравѣј',
              lang: 'Меджусловјанскы'
            },
          }
        }
      }
    ]
  ],
/*
  i18n: {
    locales: ['en', 'ru', 'is'],
    fallbackLocale: 'ru',
    messages: {
      en:{
        hello: 'Hello'
      },
      ru:{
        hello: 'Привет'
      },
      is:{
        hello: 'Здравѣј' 
      },
    }
  },
*/
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  serverMiddleware: {
    '/backend': '~/backend'
  },

}
