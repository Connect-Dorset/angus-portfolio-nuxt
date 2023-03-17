<template>
    <header>
        <nav class="w-screen h-20 py-3 px-6 bg-mine-shaft-500 text-soft-peach-100 flex flex-row justify-around items-center overflow-x-hidden overflow-y-hidden">
            <h1 class="font-bold text-xl">Angus Gaukroger</h1>
            <div >
                <ul class="flex flex-row justify-between items-center gap-8">
                    <li>Home</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button class="bg-mine-shaft-400 border-2 border-mine-shaft-400 px-4 py-3 rounded-xl">
                Connect Dorset
            </button>

        </nav>
    </header>

        <div class="w-screen h-screen ">
            <slot />
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>