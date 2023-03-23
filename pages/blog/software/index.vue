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
      {name: "Get Started With Nuxt 3 and Tailwind CSS", description: "A basic template to get you started using this framework!", image: "https://nuxt.com/assets/design-kit/logo/icon-green.svg", link: "/blog/software/get-started-with-nuxt-and-tailwind", category: "Software", date: "03/2023"},
      {name: "Get Started With Nuxt 3 and Tailwind CSS", description: "A basic template to get you started using this framework!", image: "https://nuxt.com/assets/design-kit/logo/icon-green.svg", link: "/blog/software/get-started-with-nuxt-and-tailwind", category: "Software", date: "03/2023"},
      {name: "Get Started With Nuxt 3 and Tailwind CSS", description: "A basic template to get you started using this framework!", image: "https://nuxt.com/assets/design-kit/logo/icon-green.svg", link: "/blog/software/get-started-with-nuxt-and-tailwind", category: "Software", date: "03/2023"},
      {name: "Get Started With Nuxt 3 and Tailwind CSS", description: "A basic template to get you started using this framework!", image: "https://nuxt.com/assets/design-kit/logo/icon-green.svg", link: "/blog/software/get-started-with-nuxt-and-tailwind", category: "Software", date: "03/2023"},
   ]
</script>

<style scoped>

</style>