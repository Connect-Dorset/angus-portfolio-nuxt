// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: [{ src: "/plugins/aos.client.js", ssr: false, mode: "client" }],
    modules: [
        '@nuxtjs/tailwindcss',
        // '@nuxtjs/axios'
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
        title: 'Angus Gaukroger - Software Developer',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',

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

