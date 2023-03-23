<template>
     <div class="absolute top-0 w-full h-auto flex flex-col justify-start items-center gap-3 px-5 pt-28 pb-20 bg-soft-peach-50">
         <h1 class="text-4xl font-bold text-mine-shaft-800">Travel Posts</h1>
         <div v-for="item in blogData" class="mt-3 w-full h-full flex flex-col justify-start items-center gap-4">
             <!-- Make Dynamic -->
             <Blogpostbubble :title="item.name" :description="item.description" :image="item.image" :category="item.category" :date="item.date" :link="item.link" :number="item.number" />
            
         
         </div>
      </div>
 </template>
 
 <script setup>
 var blogData = [
       {name: "I Solo Travelled South America ", description: "The Adventure Begins", image: "https://store.brth.uk/angus-port/GlacierNearHuarazPeru.jpg", link: "/blog/travel/stories/001", category: "Travel", date: "03/2022", number: "001"},
]
 </script>
 
 <style scoped>
 
 </style>