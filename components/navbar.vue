<template>
    <nav class="w-screen overflow-x-hidden z-[100] top-0 fixed h-20 py-3 px-6 bg-gradient-to-tr from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100 flex flex-row justify-around items-center">
                <h2 class="font-semibold text-xl">
                    <NuxtLink to="/">
                        Angus Gaukroger
                    </NuxtLink>
                </h2>
                <div>
                    <ul class=" hidden md:flex flex-row justify-between items-center gap-8 font-semibold">
                        <NuxtLink to="/" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
                        <NuxtLink to="#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
                        <NuxtLink to="#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink >
                        <NuxtLink to="#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink >
                        <NuxtLink to="#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
                    </ul>
                     

                </div>
                <a href="https://connectdorset.com" class="hidden md:flex bg-mine-shaft-400 hover:bg-mine-shaft-300 hover:cursor-pointer px-4 py-2 rounded-xl">
                    My Business
                </a>
                <button @click="toggleNav" class="flex md:hidden text-mine-shaft-100">
                    <svg v-show="navState == true" xmlns="http://www.w3.org/2000/svg" class=" h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#e6e1e3"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-show="navState == false" class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>

                </button>
                <!-- <slide-up-down v-model="navState">
                    <ul class=" hidden md:flex flex-row bg-black justify-between items-center gap-8 font-semibold">
                        <NuxtLink to="/" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
                        <NuxtLink to="#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
                        <NuxtLink to="#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink >
                        <NuxtLink to="#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink >
                        <NuxtLink to="#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
                    </ul>
                </slide-up-down> -->
                
                
            </nav>
</template>

<script setup>
    // import {SlideUpDown} from 'vue-slide-up-down';
    var navState = ref(false);

    function toggleNav() {
        navState = !navState;
        console.log(navState)
    }
</script>