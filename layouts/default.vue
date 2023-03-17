<template>

        
            <nav class="w-full z-[100] fixed h-20 py-3 px-6 bg-gradient-to-tr from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100 flex flex-row justify-around items-center">
                <h1 class="font-semibold text-2xl">
                    <NuxtLink to="/">
                        Angus Gaukroger
                    </NuxtLink>
                </h1>
                <div >
                    <ul class="flex flex-row justify-between items-center gap-8 font-semibold">
                        <NuxtLink to="/" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
                        <NuxtLink to="#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
                        <NuxtLink to="#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink >
                        <NuxtLink to="#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink >
                        <NuxtLink to="#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
                    </ul>
                </div>
                <a href="https://connectdorset.com" class="bg-mine-shaft-400 hover:bg-mine-shaft-300 hover:cursor-pointer px-4 py-2 rounded-xl">
                    My Business
                </a>
            </nav>
       
    
            <div class="w-full h-screen ">
                <slot />
                
            </div>
            <!-- <footer class="w-full flex flex-col items-center justify-around py-4 gap-6 pb-28 bg-gradient-to-tr from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100">
                <ul class="flex flex-row justify-between items-center gap-8 font-semibold">
                    <NuxtLink to="/" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
                    <NuxtLink to="#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
                    <NuxtLink to="#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink >
                    <NuxtLink to="#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink >
                    <NuxtLink to="#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
                </ul>
                &copy Angus Gaukroger - Connect Dorset

            </footer> -->
        
 
    
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>