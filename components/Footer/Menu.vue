<script setup>
    import { defineProps } from 'vue'
    const props = defineProps({
        menus: {
            type: Array,
            required: true
        }
    })
</script>

<template>
    <div>
        <h2 class="text-sm font-semibold tracking-wider uppercase"><slot name="heading"/></h2>
        <ul class="mt-4 space-y-2">
            <li v-for="(menu, index) in menus" :key="index">
                <NuxtLink 
                    :to="menu.link"
                    class="block text-base text-primary-700 dark:text-primary-500 hover:text-primary-900 dark:hover:text-primary-300 no-underline hover:underline"
                >
                    {{ menu.label }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>