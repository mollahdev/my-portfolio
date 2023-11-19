<template>
    <div class="fixed pointer-events-none top-0 left-0 w-full">
        <div class="container bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20 h-screen -z-10"></div>
    </div>
    <div class="container">
        <Header/>
        <main class="container relative z-0 px-0 sm:px-[2.5rem]">
            <slot/>
        </main>
        <Footer/>
    </div>
</template>