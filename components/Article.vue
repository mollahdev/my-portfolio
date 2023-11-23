<script setup>
import { defineProps } from 'vue';
defineProps(['date', 'title', 'excerpt', 'slug', 'tags'])
</script>

<template>
    <article>
        <NuxtLink 
            class="group relative flex flex-col items-start h-full"
            :to="`blog/${slug}`"
        >
            <span class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"></span>
            <div v-if="tags" class="flex items-center gap-3">
                <p 
                    v-for="(tag, index) in tags" 
                    :key="index"
                    class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500"
                >
                    # {{ tag.name  }}
                </p>
            </div>
            <h2 class="relative z-10 text-lg font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400" v-if="title">{{ title }}</h2>
            <div class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3" v-if="excerpt" v-html="excerpt"></div>
            <span class="relative z-10 mt-4 text-sm font-light text-zinc-400 dark:text-zinc-500" v-if="date">{{ date }}</span>
        </NuxtLink>
    </article>
</template>