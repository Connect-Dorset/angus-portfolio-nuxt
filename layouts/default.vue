<template>
    <!-- <Loader @complete="loaded=true" /> -->

    <div  class="scroll-smooth">
        <Navbar />

        <main class="w-full h-screen mx-auto">
            <slot />
            <Footer />
        </main>
    </div>
    
</template>

<script setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://store.brth.uk/angus-port/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: 'https://store.brth.uk/angus-port/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: 'https://store.brth.uk/angus-port/apple-touch-icon.png' },
    { rel: 'manifest', href: 'https://store.brth.uk/angus-port/site.webmanifest' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://store.brth.uk/angus-port/android-chrome-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '512x512', href: 'https://store.brth.uk/angus-port/newfav.png' },
    // { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
  ],
  meta: [

  ],
  });
definePageMeta({
    layout: 'default'
})
var loaded = ref(false);

</script>

<style lang="scss" scoped>

</style>