<template>
    <nav class="w-full overflow-x-hidden z-[99] top-0 fixed h-20 py-3 px-6 bg-gradient-to-tr from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100 flex flex-row justify-around items-center">
                <NuxtLink to="/#home" class="flex flex-row justify-center items-center h-full gap-2 ">
                    <img class="w-9 scale-100 border-2 border-soft-peach-100 rounded-full" src="https://store.brth.uk/angus-port/bogota.jpg" />
                    <h2 class="font-semibold text-lg " @mouseover="blogDropdown = true">
                       
                            Angus Gaukroger
                        
                    </h2>
                    <!-- <h3 class="text-xs">Software Developer</h3> -->
                </NuxtLink>
                
                <div class="mr-8">
                    <ul class=" hidden md:flex flex-row justify-between items-center gap-8 font-semibold">
                        <NuxtLink @mouseover="blogDropdown = true" to="/#home" class="hover:text-mine-shaft-300 hover:cursor-pointer">Home</NuxtLink >
                        <NuxtLink @mouseover="blogDropdown = true" to="/#about" class="hover:text-mine-shaft-300 hover:cursor-pointer">About</NuxtLink >
             
                        <!-- <NuxtLink @mouseover="blogDropdown = false" to="/#blog"   class=" hover:text-mine-shaft-300 hover:cursor-pointer">Blog</NuxtLink > -->
               
                        <!-- <NuxtLink @mouseover="blogDropdown = true" to="/#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer">Projects</NuxtLink > -->
                        <NuxtLink @mouseover="blogDropdown = true" to="/#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer">Contact</NuxtLink >
                    </ul>
                     

                </div>
                <NuxtLink mouseover="blogDropdown = true" to="/#contact" class="hidden md:flex  bg-mine-shaft-400 hover:bg-mine-shaft-300 hover:cursor-pointer px-4 py-2 rounded-xl">
                   Get In Touch Now!
                </NuxtLink>
                <button @click="navState = !navState" class="flex md:hidden text-mine-shaft-100 mr-4">
                    <svg :class="navState ? 'hidden' : 'flex'" xmlns="http://www.w3.org/2000/svg" class=" h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="#e6e1e3"
                    stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg :class="navState ? 'flex' : 'hidden'" class="svg-icon h-7 w-7" style="vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"  /></svg>

                </button>
              
               
                
                
                
            </nav>
            <!-- Blog Dropdown -->
            <!-- <div   :class="blogDropdown ? 'hidden' : 'flex top-20'" class="fixed left-6 top-0 w-full flex flex-row justify-center   text-soft-peach-100  h-40  z-[100]">
                <ul @mouseover="blogDropdown=false" @mouseleave="blogDropdown=true" class=" w-28 px-3 h-full flex flex-col items-start justify-evenly bg-mine-shaft-600 border-mine-shaft-300   border-l-2 border-b-2 border-r-2 rounded-b-xl">
                    <NuxtLink @click="blogDropdown=true" to="/blog/travel" class="hover:text-mine-shaft-300 hover:cursor-pointer">Travel</NuxtLink >
                    <NuxtLink @click="blogDropdown=true" to="/blog/lifestyle" class="hover:text-mine-shaft-300 hover:cursor-pointer">Lifestyle</NuxtLink >
                    <NuxtLink @click="blogDropdown=true" to="/blog/software" class="hover:text-mine-shaft-300 hover:cursor-pointer">Software</NuxtLink >
                    <NuxtLink @click="blogDropdown=true" to="/blog/fitness" class="hover:text-mine-shaft-300 hover:cursor-pointer">Fitness</NuxtLink >
                </ul>
            </div> -->
            <div class="h-screen w-full md:hidden flex flex-col items-center">
                <ul :class="navState ? 'flex' : 'hidden'" class="mt-20 py-4 text-soft-peach-100 h-1/2 w-full fixed z-[99] md:hidden flex-col bg-mine-shaft-600 justify-between items-center gap-2 font-semibold">
                    <NuxtLink to="/#home" class=" hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Home</a></NuxtLink >
                    <NuxtLink to="/#about" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">About</a></NuxtLink >
                    <!-- <NuxtLink to="/#blog" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Blog</a></NuxtLink > -->
                    <!-- <NuxtLink to="/#projects" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Projects</a></NuxtLink > -->
                    <NuxtLink to="/#contact" class="hover:text-mine-shaft-300 hover:cursor-pointer"><a @click="navState = !navState">Contact</a></NuxtLink >
                    <!-- <button>
                        <a href="https://connectdorset.com" class="flex mb-5 bg-mine-shaft-400 hover:bg-mine-shaft-300 hover:cursor-pointer px-4 py-2 rounded-xl">
                       Connect Dorset
                    </a>
                    </button> -->
                        
                </ul>
                <button @click="navState = !navState" :class="navState ? 'flex' : 'hidden'" class="z-[99] h-1/2 w-full fixed top-1/2">

                </button>
            </div>
            
</template>

<script setup>
    var navState = ref(false);
    var blogDropdown = ref(true);


</script>