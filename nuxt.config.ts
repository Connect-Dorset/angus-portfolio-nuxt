// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins: [
      '~/plugins/aos.client.js'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
      ],
    tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
    },
    app: {
      head: {
        title: 'Portfolio - Angus Gaukroger',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        script: [
          {
            src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
            body: true,
            

          },
          {
            src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
            body: true,
          }
          
        ]

        // link: [
        //   {rel: stylesheet,
        //   }
        // ]

      }
    }
      
    // vite: {
    //     server: {
    //       watch: {
    //         usePolling: true
    //       }
    //     }
    //   }
})
