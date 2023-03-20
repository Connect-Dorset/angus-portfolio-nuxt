<template> 
    <div id="about" class="w-full  h-auto py-5 md:py-5 xl:h-screen flex flex-col justify-center items-center  bg-gradient-to-bl from-mine-shaft-600 to-mine-shaft-500 text-soft-peach-100">
      <div class="flex flex-col-reverse md:flex-row md:px-2 lg:px-5 md:py-4 justify-evenly items-center  md:w-11/12 lg:10/12 h-full">
        <div data-aos="fade-left" aos-duration="300" class="text-center bg-mine-shaft-600 rounded-lg flex flex-col justify-center items-center w-4/5 px-8  py-7  md:px-4 lg:px-8  md:py-7 md:w-5/12 h-7/12 gap-6">
          <h1  class="text-4xl">About Me</h1>
          <p  class="text-lg md:text-sm lg:text-lg xl:text-lg">
              Hey! I'm Angus. Thank you for visiting my portfolio site. I'm a 23 year old Software Developer with a passion for travel, fitness, music, language learning and new experiences.                
          </p>
          <p  class="text-lg md:text-sm lg:text-lg xl:text-lg">
              I'm currently employed by Oasis Group as a Backend Software Developer. In my spare time I also run a website services business called Connect Dorset and teach English as a foreign language
              on my platform InglesPalMundo (It means "English for the world" in Spanish).
          </p>
          <p  class="text-lg md:text-sm lg:text-lg xl:text-lg">
              Outside of Software Development my hobbies include going to the gym, football, muay thai and music. I have also just started learning Portuguese as my third language.
          </p>
          <div class="w-full flex flex-row justify-evenly items-center gap-3">
            <a  target="blank" href="https://store.brth.uk/angus-port/AngusGaukroger-CV.pdf" class="w-5/12 bg-mine-shaft-400 hover:bg-mine-shaft-300 text-soft-peach-100 hover:cursor-pointer px-2 py-1 lg:px-4 lg:py-2 rounded-xl mt-3">My CV</a>
            <RouterLink to="/#contact"  class="w-5/12 bg-mine-shaft-400 hover:bg-mine-shaft-300 text-soft-peach-100 hover:cursor-pointer px-2 py-1 lg:px-4 lg:py-2 rounded-xl mt-3">Contact Me</RouterLink>

          </div>
          
             </div>
        <div class="flex flex-col justify-center items-center w-full md:w-5/12 h-7/12 ">
            <div class=" scale-[0.55] border-4  border-soft-peach-100 rounded-lg ">
                <img   src="https://store.brth.uk/angus-port/IMG-20220824-WA0076.jpg"/>
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