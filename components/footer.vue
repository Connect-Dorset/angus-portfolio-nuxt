<template>
    <div class="w-full flex flex-col items-center justify-around py-4  gap-6 pb-28 bg-gradient-to-tr from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100">
        <Socials />
    
        <ul class="w-full md:w-auto px-6 md:px-0 flex flex-row justify-between items-center gap-2 md:gap-8 font-semibold">
        <NuxtLink to="/" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
        <NuxtLink to="/#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
        <NuxtLink to="/#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink >
        <NuxtLink to="/#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink >
        <NuxtLink to="/#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
    </ul>
    &copy Angus Gaukroger - Connect Dorset

</div>
</template>

<script setup>

</script>

<style scoped>

</style>