<script setup>
    const theme = useCookie('theme')

    const onToggleTheme = () => {
        const mode = theme.value === 'dark' ? 'dark' : 'light'
        if( mode === 'dark' ) {
            document.documentElement.classList.remove('dark')
            theme.value = 'light'
        } else {
            document.documentElement.classList.add('dark')
            theme.value = 'dark'
        }
    }
</script>

<template>
    <button 
        @click.prevent="onToggleTheme"
        type="button" 
        aria-label="Toggle dark mode" 
        class="group rounded-full select-none bg-white/90 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
        <IconThemeSwitcher/>
    </button>
</template>