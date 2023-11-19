<script setup>
    import { ref, computed } from 'vue';
    const isMenuOpen = ref(false);
    const toggleMenu = (val) => {
        isMenuOpen.value = val
    }

    const headerClasses = computed(() => {
        return {
            'bg-zinc-100/50 dark:bg-zinc-800/50' : !isMenuOpen.value,
            'bg-white dark:bg-zinc-800' : isMenuOpen.value
        }
    })
</script>

<template>
    <header 
        :class="headerClasses"
        class="fixed transition-colors duration-300 backdrop-blur-md md:static top-0 left-0 w-full py-3 md:py-6 border-b md:border-none border-b-zinc-200 dark:border-b-zinc-800 md:bg-transparent dark:md:bg-transparent z-50"
    >
        <div class="container relative z-50 flex justify-between items-center gap-x-2">
            <HeaderAvatar/>
            <HeaderMenu/>
            <div class="flex items-center gap-x-4 md:gap-x-3">
                <HeaderThemeSwitcher/>
                <HeaderSearch/>
                <HeaderMobileMenu @toggleMenu="toggleMenu" class="inline-block md:hidden"/>
            </div>
        </div>
    </header>
</template>