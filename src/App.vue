<template>
  <Header/>
  <button @click="toggleDarkMode()">Toggle Dark Mode</button>
</template>

<script>
import Header from '@/components/global/TheHeader.vue'

export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    toggleDarkMode( mode ) {
      mode = mode || (localStorage.theme === 'dark' ? 'light' : 'dark')
      if( ['dark', 'light'].includes(mode) ) {
        document.documentElement.classList.toggle('dark', mode === 'dark')
        localStorage.theme = mode
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('theme')
      }
    }
  },
  created() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
  },
}
</script>
