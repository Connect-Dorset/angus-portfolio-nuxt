<template> 
    <div id="contact" class=" w-full h-full overflow-x-hidden bg-soft-peach-50">
      <div class="flex flex-row justify-evenly items-center h-full text-mine-shaft-800">
        <div class="h-5/12 w-full flex flex-col md:flex-row justify-evenly items-center px-12 gap-4  " >
          <div class="bg-soft-peach-100 md:w-5/12 h-full gap-3 flex flex-col justify-center items-center text-center rounded-lg px-8 py-7">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum minus ratione autem asperiores atque tenetur dolores voluptates debitis error vel iure labore modi quisquam sunt hic similique, maxime reiciendis itaque!
          </div>
        </div>
        <div class="h-5/12 w-full flex flex-col md:flex-row justify-evenly items-center px-12 gap-4  " >
          <div class="bg-soft-peach-100 md:w-5/12 h-full gap-3 flex flex-col justify-center items-center text-center rounded-lg px-8 py-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In soluta quasi qui? Rerum, eius pariatur. Maiores, vel? Eaque, alias. Reprehenderit ipsam eum provident quos saepe omnis sunt unde aliquam quam.
          </div>
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