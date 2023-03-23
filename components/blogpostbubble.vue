<template>
    <div class="pb-3 sm:pb-0 text-center sm:text-left sm:w-3/4 xl:w-7/12 h-auto sm:h-52 xl:h-60 sm:grid sm:grid-cols-3 sm:grid-rows-1 rounded-xl bg-mine-shaft-100 gap-y-3" >
        <!-- <div class="cols-span-1 aspect-square object-cover " style="background: url('https://store.brth.uk/angus-port/HorseRidingSalento.jpg') 50% 50% no-repeat;"></div> -->
        <img  class="w-full sm:w-5/6 h-full rounded-r-xl sm:rounded-r-none  rounded-l-xl object-cover align-self-start  aspect-square" :src="image"/>
        <div class="col-span-2 flex flex-col justify-center sm:items-start items-center text-mine-shaft-800 gap-2 px-3 py-2">
            <h1 class="text-2xl font-bold">{{title}}</h1>
            <p>{{description}}</p>
            <div class="w-full flex flex-row gap-3 justify-center sm:justify-start items-center">
                <div class="text-sm lg:text-md">
                    <strong>Category: </strong>{{ category }}
                  </div>
                  <div class="text-sm lg:text-md">
                    <strong>Date: </strong>{{date}}
                  </div>
              </div>
              <RouterLink :to="link" class="bg-mine-shaft-400 hover:bg-mine-shaft-300 text-soft-peach-100 hover:cursor-pointer px-2 py-1 lg:px-4 lg:py-2 rounded-xl mt-3">Read Article</RouterLink>
              
        </div>
   </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  description: String,
  category: String,
  date: String,
  link: String,
})
</script>

<style lang="scss" scoped>

</style>