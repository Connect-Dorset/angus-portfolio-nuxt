<template> 
    <div id="contact" class=" w-full h-auto md:h-full overflow-x-hidden py-20 flex flex-col items-center bg-soft-peach-50">
      <h1 class="text-5xl font-bold text-mine-shaft-800">Contact</h1>     
      <div class="flex flex-col md:flex-row justify-evenly items-center h-full text-mine-shaft-800">
        <div class="h-8/12 w-full flex flex-col md:flex-row justify-evenly items-center px-6 gap-4  " >
          <div class=" md:w-8/12 h-full gap-3 flex flex-col justify-center items-center text-center rounded-lg px-6 sm:px-2 py-7">
            <img class=" border-4 h-full w-full border-mine-shaft-400 rounded-lg" src="https://store.brth.uk/angus-port/FootballMedellin.jpg" />
          </div>
        </div>
        <div class="h-8/12 w-full flex flex-col md:flex-row justify-evenly items-center px-10 md:px-12 gap-4  " >
          <form @submit.prevent="sendMessage" class="gap-y-4 bg-soft-peach-100 w-full md:w-10/12 h-full gap-3 flex flex-col justify-center items-center text-center rounded-lg px-6 sm:px-2 py-5">
            <h2 class="text-xl">Drop me a Message!</h2>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-y-2 md:gap-y-4 items-start md:items-center w-full">

              <label for="name" class="ml-3 sm:ml-0 justify-self-start sm:justify-self-center">Name:</label>
              <input id="name" required type="text" v-model="form.name" class="col-span-2 px-3 py-2 rounded-xl border-2 border-mine-shaft-300 focus:border-2 focus:border-mine-shaft-500" placeholder="What's your name?"/>
              
              <label for="email" class="ml-3 sm:ml-0 justify-self-start sm:justify-self-center">Email:</label>
              <input id="email" required type="email" v-model="form.email" class="col-span-2 px-3 py-2 rounded-xl border-2 border-mine-shaft-300 focus:border-2 focus:border-mine-shaft-500" placeholder="hello@gmail.com"/>
              
              <label for="message" class="ml-3 sm:ml-0 justify-self-start sm:justify-self-center">Message:</label>
              <textarea id="message" required type="text" v-model="form.message" class="col-span-2 h-40 resize-none px-3 rounded-xl border-2 border-mine-shaft-300 focus:border-2 focus:border-mine-shaft-500" placeholder="Type your message here!"/>
            </div>
            <button type="submit" class="bg-mine-shaft-400 hover:bg-mine-shaft-300 text-soft-peach-100 hover:cursor-pointer px-3 py-2 lg:px-4 lg:py-2 rounded-xl mt-3">Send Message!</button>
            
          </form>
        </div>
      </div>
    </div>
    
  </template>
  
  <script setup>
  var form = {
    name: "",
    email: "",
    message:  "",

  }
  function sendMessage() {
  
    console.log(form);
    fetch("https://mail.brth.uk:1234/api/v1/form/ag-port", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },  redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(form), // body data type must match "Content-Type" header
    })
    // this$.api.post("https://mail.brth.uk:1234/api/v1/form/ag-port", form)
      .then((res) => {
        showSuccess.value = true
      })
      .catch((error) => {
        showError.value = false
        console.log(error)
      })
      .finally(() => {
        form.name = ''
        form.email = ''
        form.message = ''
      });
}
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