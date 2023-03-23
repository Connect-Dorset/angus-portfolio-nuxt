// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/**' : {static: true},
    // Static page generated on-demand, revalidates in background
    '/blog/**': { swr: true },
    // Static page generated on-demand once
    // '/articles/**': { static: true },


    // Add cors headers
    '/api/v1/**': { cors: true },

  },
  plugins: [{ src: "/plugins/aos.client.js", ssr: false, mode: "client" }],
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxtjs/plausible'
      // '@nuxtjs/axios'
    ],
     
    tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
    },

    // plausible: {
    //   domain: 'stats.connectdorset.com'
    // },
    
    app: {
      head: {
        title: 'Angus Gaukroger - Software Developer',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',

        // link: [
        //   {rel: stylesheet,
        //   }
        // ]

      }
    },

    
    // vite: {
    //     server: {
    //       watch: {
    //         usePolling: true
    //       }
    //     }
    //   }
})

