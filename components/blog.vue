<template> 
    <div id="blog" class="bg-soft-peach-50 overflow-x-hidden relative z-50 w-full h-auto py-6 md:h-full flex flex-col justify-center space-y-12 items-center ">
      
      <h1 class="text-5xl font-bold text-mine-shaft-800">Blog</h1>
      <div  class="w-5/6 sm:w-4/6 md:w-5/6 gap-6 px-6 md:px-3 lg:px-5  flex flex-col md:flex-row  justify-evenly items-center overflow-x-hidden">
        <!-- wtf -->
        <div v-for="item in blogData" class=" text-mine-shaft-800 h-full flex flex-col justify-between py-4 px-3   bg-soft-peach-100 rounded-lg">
          <div class="w-full ">
            <img class="border-2 scale-100 border-mine-shaft-300 rounded-lg" :src="item.image"/>
          </div>
          <div class="w-full  flex flex-row justify-evenly items-center text-center px-3 py-2 gap-4">
            <div class=" px-4  ">
              <h1 class=" rounded-xl text-xl lg:text-3xl font-semibold">{{ item.name }}</h1>
            </div>
          </div>
          <div class="w-full md:h-36 px-4 text-center flex flex-col justify-evenly mb-3">
            <p class="flex text-sm lg:text-md">{{ item.description }}</p>
            <div class="flex flex-row justify-evenly items-center">
              <div class="text-sm lg:text-md">
                <strong>Category: </strong>{{ item.category }}
              </div>
              <div class="text-sm lg:text-md">
                <strong>Date: </strong>{{ item.date }}
              </div>
            </div>
            <RouterLink :to="item.link" class="bg-mine-shaft-400 hover:bg-mine-shaft-300 text-soft-peach-100 hover:cursor-pointer px-2 py-1 lg:px-4 lg:py-2 rounded-xl mt-3">Read More</RouterLink>

          </div>
   
        </div>
      </div>
    </div>
    
  </template>
  <script setup>
    var blogData = [
      {name: "Colombia", description: "Coffee, salsa, Carribean Coast, mountains.. This country has it all.", image: "https://store.brth.uk/angus-port/ValleDeCocuraLandscape.jpg", link: "/blog/travel/colombia", category: "Travel", date: "06/2022"},
      {name: "Perú", description: "Land of the Incas, incredible food and all types of diverse landscapes.", image: "https://store.brth.uk/angus-port/Cajamarca.jpg", link: "/blog/travel/peru", category: "Travel", date: "07/2022"},
      {name: "Ecuador", description: "A small, but super diverse country that I wish I had more time in!", image: "https://store.brth.uk/angus-port/cuenca.jpg", link: "/blog/travel/ecuador", category: "Travel", date: "08/2022"},
      {name: "Spain", description: "My favourite country that I've visited in Europe so far!", image: "https://store.brth.uk/angus-port/Barcelona.jpg", link: "/blog/travel/spain", category: "Travel", date: "03/2022"},
    ]
  </script>
  
  <style>
  .floating {
    animation-name: floating;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(-15px, -15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
  
  
  .hover__transition {
    display: inline-block;
    padding: 1em 2em;
    text-align: center;
    /*color: v-bind(hoverColor);*/
    /*background: v-bind(hoverColor);*/
    /* "to left" / "to right" - affects initial color */
    background: v-bind(colorScheme);
    background-size: 250%;
    object-fit: cover;
    transform: scale(1.03);
    transition: 0.5s ease-out;
  }
  .hover__transition:hover {
    background-position: left;
    cursor: pointer;
    color: v-bind(hoverColor);
  }
  
  </style>