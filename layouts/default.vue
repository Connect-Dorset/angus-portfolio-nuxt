<template>
    <div class="scroll-smooth">
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
</script>

<style lang="scss" scoped>

</style>