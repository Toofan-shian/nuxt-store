// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@pinia/nuxt',
  ],
  vuetify: {
    vuetifyOptions: {
     
    },
  },
  routeRules: {
    routeRules: [
      {
        // Match requests to '/api/' and proxy them to 'http://localhost:3000'
        // This example assumes you want to proxy all requests starting with '/api/'.
        source: '/api/(.*)',
        destination: 'http://localhost:3000/api/$1',
      },
    ],
  },
  debug: false,
})
