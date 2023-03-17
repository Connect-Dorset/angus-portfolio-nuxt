<template>
    <div class="scroll-smooth">
        <header>
            <nav class="w-screen z-[100] fixed h-20 py-3 px-6 bg-gradient-to-tr from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100 flex flex-row justify-around items-center overflow-x-hidden overflow-y-hidden">
                <h1 class="font-bold text-xl">Angus Gaukroger</h1>
                <div >
                    <ul class="flex flex-row justify-between items-center gap-8">
                        <NuxtLink to="#" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
                        <NuxtLink to="#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
                        <NuxtLink to="#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink >
                        <NuxtLink to="#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink >
                        <NuxtLink to="#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
                    </ul>
                </div>
                <button class="bg-mine-shaft-400 border-2 border-mine-shaft-400 px-4 py-2 rounded-xl">
                    Connect Dorset
                </button>
    
            </nav>
        </header>
    
            <div class="w-screen h-screen ">
                <slot />
            </div>
    </div>
    
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>