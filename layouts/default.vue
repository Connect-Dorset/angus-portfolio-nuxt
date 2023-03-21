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
definePageMeta({
    layout: 'default'
})
var loaded = ref(false);

</script>

<style lang="scss" scoped>

</style>