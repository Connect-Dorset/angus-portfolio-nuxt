<template>
    <div class="absolute top-0 w-full h-auto flex flex-col justify-start items-center gap-3 px-5 pt-28 pb-20 bg-soft-peach-50">
        <h1 class="text-4xl font-bold text-mine-shaft-800">Travel Sections</h1>
        <div v-for="item in blogData" class="mt-3 w-full h-full flex flex-col justify-start items-center gap-4">
            <!-- Make Dynamic -->
            <Blogsectionbubble :title="item.name" :description="item.description" :image="item.image" :category="item.category" :date="item.date" :link="item.link" />
           
        
        </div>
     </div>
</template>

<script setup>
var blogData = [
      {name: "Travel Stories", description: "Tales from the road, surprises and amazing people.", image: "https://store.brth.uk/angus-port/GlacierNearHuarazPeru.jpg", link: "/blog/travel/stories", category: "Travel", date: "03/2023"},
      {name: "Colombia", description: "Coffee, salsa, Carribean Coast, mountains.. This country has it all.", image: "https://store.brth.uk/angus-port/ValleDeCocuraLandscape.jpg", link: "/blog/travel/colombia", category: "Travel", date: "06/2022"},
      {name: "Perú", description: "Land of the Incas, incredible food and all types of diverse landscapes.", image: "https://store.brth.uk/angus-port/Cajamarca.jpg", link: "/blog/travel/peru", category: "Travel", date: "07/2022"},
      {name: "Ecuador", description: "A small, but super diverse country that I wish I had more time in!", image: "https://store.brth.uk/angus-port/cuenca.jpg", link: "/blog/travel/ecuador", category: "Travel", date: "08/2022"},
      {name: "Spain", description: "My favourite country that I've visited in Europe so far!", image: "https://store.brth.uk/angus-port/Barcelona.jpg", link: "/blog/travel/spain", category: "Travel", date: "03/2022"},
    ]
</script>

<style scoped>

</style>