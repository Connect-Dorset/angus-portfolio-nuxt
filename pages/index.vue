<template>
    
    <div
        
        class=" w-screen h-full bg-white dark:bg-black page__grid"
      >
        <Subgrid1 />
        <Subgrid2 @dark-changed="darkSwitcher" />
        <Subgrid4 @contact-view="contactViewSwitch()" />
        <Subgrid3 v-bind:Check="contactSwitcher" />
      </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.home__default {
  overflow: hidden;
}
.page__grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  padding-left: 10%;
  padding-right: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  grid-column-gap: 2%;
  grid-row-gap: 2%;
}
</style>
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
.flip-card {
  /* background-color: transparent; */
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}
.flip-card-front {
  background-color: white;
}
/* Style the back side */
.flip-card-back {
  background-color: white;
  /* color: white; */
  transform: rotateY(180deg);
}
.center__children {
  display: flex;
  direction: row;
  justify-content: center;
  align-items: center;
  padding: 5% 5% 5% 5%;
  border-color: #f3f4f6;
}
.floating__borders {
  border-color: 8px solid #4b5563;
  border-radius: 25px;
}
.center__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>