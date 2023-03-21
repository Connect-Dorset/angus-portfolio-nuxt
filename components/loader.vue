<template >

    <div class="">
      <div class="loader  " v-if="!isLoaded">
        <div class="small__square1"></div>
        <div class=""></div>
        <div class=""></div>
        <div class="small__square2"></div>
      </div>

  </div>
</template>

<script setup>
let isLoaded = ref(false);
const emit = defineEmits("complete");

onMounted(() => {
    document.onreadystatechange = () => {
        if(document.readyState == "complete")
        {        
            isLoaded.value = true;
            emit("complete"); 
        }     
    }});
    
</script>

<style  scoped>

.loader {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1vw 1vw;
  grid-template-rows: 1vw 1vw;
  grid-gap: 0.5vw;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
}
.small__square1 {
  background-color: #6d5f62;
  animation: path1 1s infinite;
}
@keyframes path1 {
  40% {
    transform: translateX(1.5vw);
  }
  80% {
    transform: translateY(1.5vw);
  }
}
.small__square2 {
  background-color: #6d5f62;
  animation: path2 1s infinite;
}
@keyframes path2 {
  40% {
    transform: translateX(-1.5vw);
  }
  80% {
    transform: translateY(-1.5vw);
  }
}
</style>