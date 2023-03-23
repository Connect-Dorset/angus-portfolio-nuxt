<template>
    <div class="top-0 absolute w-full h-auto flex flex-col justify-center  pt-28 pb-20 px-10 md:px-20 gap-10 text-left text-lg bg-soft-peach-50 text-mine-shaft-800">
        <h1 class="text-4xl font-semibold text-center">Get Started With Nuxt 3 and Tailwind CSS</h1>
        <p>Nuxt can be quite a frustrating framework to get started with. When I first started using it, the standard create_nuxt_app commands didn't work as expected and I struggled for some time to even get a basic project going. It is however worth using! Some of the advantages of Nuxt include the ability to make use of Server Side Rendering, improved routing and automatic imports (this is actually a dream, most frameworks don't have this!).</p>

        <div class="flex flex-col md:flex-row justify-evenly items-start w-full h-full text-start ">
            <div class="w-full md:w-1/2 flex flex-col gap-10">
                <p>I have created a empty Nuxt 3 and Tailwind template to get you started. The project contains a default.vue file in the layout folder - this is the top level of the routing.</p>
                <p>Inside of this file a layout can be specified which will wrap the pages inside of it. By default, for the default layout, the page filling the slot is index.vue which can be found inside the pages folder.</p>
            </div>
           
            
            <img class="w-full my-5 md:my-0 md:mx-4 md:w-1/2 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png"/>

        </div>
        <p>The template also contains a basic example of how to wrap pages in a non default layout. These pages are labelled as 'test' in the project, and can be deleted if need be!</p>
       <p>Once you have successfully created a template of the repository below and cloned it to your machine, run <strong>"npm i"</strong>  in console and the project will then install the tailwind package. Now you're ready to go! Run <strong>"npm run dev"</strong> to start a live server.</p>
        <div class="w-full flex flex-col  justify-around items-center h-auto gap-10">

            <a target="_blank" href="https://github.com/Connect-Dorset/template-nuxt-tailwind" class="bg-mine-shaft-400 w-4/5 md:w-1/4 text-center text-soft-peach-100 font-semibold hover:cursor-pointer hover:bg-mine-shaft-300 rounded-xl py-2 px-3 md:px-4 md:py-3">Click Here for the Template Link</a>
            <p class="">Good luck and have fun!</p>

        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

</style>