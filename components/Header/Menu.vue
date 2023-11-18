<script setup>
import menus from '~/assets/data/header-menu.json'
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';

const route = useRoute()
const menusRef = ref(null)
const linePosition = ref(null)

const onRouteChange = value => {
    const path = value.path
    const target = menusRef.value.querySelector(`[data-target="${path}"]`)
    const scopeRect = menusRef.value.getBoundingClientRect()

    if( target ) {
        const targetRect = target.getBoundingClientRect()
        const x = targetRect.x - scopeRect.x;
        const width = targetRect.width;
        
        linePosition.value.style.left = `${x}px`
        linePosition.value.style.width = `${width}px`
        linePosition.value.style.opacity = 1
    } else {
        linePosition.value.style.opacity = 0
    }
}

watch( route,  onRouteChange)
onMounted( () => onRouteChange(route) )
</script>

<template>
    <ul ref="menusRef" class="flex rounded-full bg-white/90 px-3 text-sm relative font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <li v-for="menu in menus">
            <NuxtLink
                :to="menu.to"
                :data-target="menu.to"
                class="relative block px-3 py-2 transition hover:text-primary-500 dark:hover:text-primary-400"
                exact-active-class="text-primary-500 dark:text-primary-400"
            >
                {{ menu.label }}
            </NuxtLink>
        </li>
        <span ref="linePosition" style="opacity: 0" class="absolute transition-all duration-200 ease-linear inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 dark:from-primary-400/0 dark:via-primary-400/40 dark:to-primary-400/0"></span>
    </ul>
</template>