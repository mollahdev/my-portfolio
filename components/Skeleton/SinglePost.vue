<template>
    <div class="animate-pulse space-y-4">
        <div class="h-20 md:h-32 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
        <div class="h-8 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
        <div class="pt-8 space-y-4">
            <div class="h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md w-52"></div>
            <div class="h-20 md:h-32 bg-zinc-200 dark:bg-zinc-800 rounded-md w-full"></div>
        </div>
        <div class="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-12">
            <SkeletonArticle v-for="index in 3" :key="index"/>
        </div>
    </div>
</template>