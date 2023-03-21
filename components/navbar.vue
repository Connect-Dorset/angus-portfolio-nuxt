<template>
    <nav class="w-full overflow-x-hidden z-[100] top-0 fixed h-20 py-3 px-6 bg-gradient-to-tr from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100 flex flex-row justify-around items-center">
                <div class="flex flex-col justify-center items-center h-full">
                    <h2 class="font-semibold text-xl">
                        <NuxtLink to="/">
                            Angus Gaukroger
                        </NuxtLink>
                    </h2>
                    <!-- <h3 class="text-xs">Software Developer</h3> -->
                </div>
                
                <div>
                    <ul class=" hidden md:flex flex-row justify-between items-center gap-8 font-semibold">
                        <NuxtLink to="/" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
                        <NuxtLink to="#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
                        <NuxtLink to="#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink >
                        <NuxtLink to="#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink >
                        <NuxtLink to="#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
                    </ul>
                     

                </div>
                <a href="https://connectdorset.com" class="hidden md:flex  bg-mine-shaft-400 hover:bg-mine-shaft-300 hover:cursor-pointer px-4 py-2 rounded-xl">
                    My Business
                </a>
                <button @click="navState = !navState" class="flex md:hidden text-mine-shaft-100">
                    <svg :class="navState ? 'hidden' : 'flex'" xmlns="http://www.w3.org/2000/svg" class=" h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#e6e1e3"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg :class="navState ? 'flex' : 'hidden'" class="svg-icon h-7 w-7" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>

                </button>
              
               
                
                
                
            </nav>
            <div class="h-screen w-full flex flex-col items-center">
                <ul :class="navState ? 'flex' : 'hidden'" class="mt-20 py-4 text-soft-peach-100 h-1/2 w-full fixed z-[99] md:hidden flex-col bg-mine-shaft-600 justify-between items-center gap-2 font-semibold">
                    <NuxtLink to="/" class=" hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Home</a></NuxtLink >
                    <NuxtLink to="#about" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">About</a></NuxtLink >
                    <NuxtLink to="#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Blog</a></NuxtLink >
                    <NuxtLink to="#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Projects</a></NuxtLink >
                    <NuxtLink to="#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Contact</a></NuxtLink >
                    <a href="https://connectdorset.com" class="flex mb-5 bg-mine-shaft-400 hover:bg-mine-shaft-300 hover:cursor-pointer px-4 py-2 rounded-xl">
                        My Business
                    </a>
                </ul>
                <button @click="navState = !navState" :class="navState ? 'flex' : 'hidden'" class="z-[99] h-1/2 w-full fixed top-1/2">

                </button>
            </div>
            
</template>

<script setup>
    // import {SlideUpDown} from 'vue-slide-up-down';
    var navState = ref(false);

    // function toggleNav() {
        
    //     console.log(navState)
    // }
</script>