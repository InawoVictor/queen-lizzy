// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: "Queen Lizzy | Victor",
      meta: [
        {charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, 
        { hid: 'description', name: 'description', content: 'The Queen of England' }, 
        
      ],
    }
  },

  css: [
    'vuetify/styles',
    '~/assets/main.scss'
  ],

  alias: {
    assets: "/<rootDir>/assets",
  },

  modules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Roboto': true,
      'Space Grotesk': true,
      'Archivo': true,
    }
  },

  

  plugins: [
    "~/plugins/vuetify.ts",
  ],

 

  build: {
    transpile: ['vuetify'],
  },

})
