<template> 
  
    <div id="projects" class="w-full h-auto overflow-x-hidden py-5 md:h-full flex flex-col items-center justify-center  text-soft-peach-100 bg-mine-shaft-500 gap-10 ">
      <h1 class="text-5xl font-bold">Projects</h1>
      <div class="h-5/12 w-full flex flex-col md:flex-row justify-evenly items-center px-12 gap-4  " >        
        <div class="bg-mine-shaft-600 md:w-5/12 h-full gap-3 flex flex-col justify-center items-center text-center rounded-lg px-8 py-7">
          <img class="border-4 border-mine-shaft-300 rounded-full" src="https://store.brth.uk/connect-dorset/CONNECT%20Specific/cd-logo.png" width="30%" />
          <h2 class="text-3xl font-bold">Connect Dorset</h2>
          <h3 class="text-2xl font-semibold">Website Services Business</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis saepe est doloremque pariatur accusantium et sapiente vitae unde possimus animi!</p>
          <a href="https://connectdorset.com" class="bg-mine-shaft-400 hover:bg-mine-shaft-300 text-soft-peach-100 hover:cursor-pointer px-2 py-2 lg:px-4 lg:py-2 rounded-xl mt-3">Check It Out!</a>     
        </div>
        <div class="bg-mine-shaft-600 md:w-5/12 h-full gap-3  flex flex-col justify-center items-center text-center rounded-lg  px-7 py-8">
          <img class="border-4 border-mine-shaft-300 rounded-full" src="https://store.brth.uk/angus-port/android-chrome-512x512.png" width="30%" />

          <h2 class="text-3xl font-bold">InglésPalMundo</h2>
          <h3 class="text-2xl font-semibold">Online English Language Lessons</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui necessitatibus eaque vel neque laboriosam, iure mollitia esse natus magnam exercitationem!</p>
          <a href="https://inglespalmundo.com" class="bg-mine-shaft-400 hover:bg-mine-shaft-300 text-soft-peach-100 hover:cursor-pointer px-2 py-2 lg:px-4 lg:py-2 rounded-xl mt-3">Check It Out!</a>
          
        </div>
      </div>
    </div>
    
    
  </template>
  
  <script setup>
  
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