<script setup>
import { useSlots } from 'vue';
const slots = useSlots();

const wrapperClass = computed(() => {
    return {
        'flex flex-col lg:flex-row gap-4': slots.sidebar,
    }
})
</script>

<template>
    <HeroWrapper>
        <div :class="wrapperClass">
            <div class="max-w-3xl">
                <h1 class="text-3xl sm:text-4xl !leading-[1.3] font-bold tracking-tight text-zinc-800 dark:text-zinc-100 md:text-5xl">
                    <slot name="title"></slot>
                </h1>
                <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                    <slot name="description"></slot>
                </p>
            </div>
            <div v-if="$slots.sidebar" class="lg:max-w-xs">
                <slot name="sidebar"></slot>
            </div>
        </div>
    </HeroWrapper>
</template>