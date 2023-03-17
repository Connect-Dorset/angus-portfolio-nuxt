<template> 
    <div id="about" class="w-full h-full flex flex-col justify-center items-center top-0 left-0 bg-gradient-to-bl from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100">
      <div class="flex flex-row justify-evenly items-center w-10/12 h-4/6">
        <div class="text-center flex flex-col justify-center items-center w-5/12 h-4/6 gap-6">
          <h1 class="text-4xl">About Me</h1>
            <p>
                I am a 23 year old Full Stack Software Developer from Dorchester, England.

            In my free time outside of work, I have been learning web technologies. I like working with Javascript predominantly, and in particular Nuxt.js, but can easily adapt to whatever stack is put infront of me. I have an interest in all parts of the stack, but I particularly enjoy creating frontend UI's.
            </p>
             </div>
        <div class="flex flex-col justify-center items-center w-5/12 h-4/6 ">
            <div class="border-4 border-soft-peach-100 object-fit w-4/12 h-3/6">
                <img   src="https://dummyimage.com/800x800/000/fff"/>
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