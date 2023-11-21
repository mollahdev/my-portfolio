<template>
    <form class="mt-6 flex flex-col">
        <div class="relative flex-grow sm:border border-gray-500 group sm:rounded-xl sm:focus-within:ring-1 focus-within:ring-gray-400 focus-within:border-gray-400">
            <input 
                type="email" 
                name="email" 
                placeholder="Email address" 
                aria-label="Email address" 
                required 
                class="block w-full px-4 py-2.5 sm:pr-28 text-zinc-700 dark:text-zinc-200 placeholder-zinc-600 dark:placeholder-zinc-400 bg-transparent border outline-none focus:border-none focus:ring-2 focus:ring-primary-700 dark:focus:ring-primary-400 rounded-xl sm:border-none"
            >

            <div class="mt-4 sm:mt-0 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-1">
                <button type="submit" class="inline-flex items-center gap-2 justify-center rounded-lg py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-primary-800 dark:bg-primary-500 font-semibold text-white dark:text-zinc-900 hover:bg-primary-700 dark:hover:bg-primary-400 ml-0 disabled:opacity-50 flex-none w-full focus:ring-2 focus:ring-primary-700 dark:focus:ring-primary-400 focus:ring-offset-1 ring-offset-white dark:ring-offset-black outline-none disabled:cursor-progress">Subscribe</button>
            </div>
        </div>
        <div class="mt-2">
            <div class="flex gap-1 flex-wrap justify-between">
                <p class="text-sm font-normal text-zinc-600 dark:text-zinc-400">
                    Join 185 other subscribers.
                </p>
                <NuxtLink
                    to="/newsletter/"
                    class="text-sm font-normal text-zinc-600 dark:text-zinc-400 hover:text-primary-600 dark:hover:text-primary-400"
                >
                    Read past issues →
                </NuxtLink>
            </div>
        </div>
    </form>
</template>