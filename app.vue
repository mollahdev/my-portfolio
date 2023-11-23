<script setup lang="ts">
const theme = useCookie('theme')
const mode = theme.value === 'dark' ? 'dark' : 'light'

useHead({
  title: 'Ashraf Mollah',
  htmlAttrs: {
    lang: 'en',
    class: `overflow-x-hidden ${mode}`
  },
  bodyAttrs: {
    class: 'bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white font-inter overflow-x-hidden'
  },
  link: [
    {
      rel: 'preload',
      href: '/fonts/inter-100.woff2',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },
    {
      rel: 'preload',
      href: '/fonts/inter-300.woff2',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },
    {
      rel: 'preload',
      href: '/fonts/inter-400.woff2',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },
    {
      rel: 'preload',
      href: '/fonts/inter-500.woff2',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },
    {
      rel: 'preload',
      href: '/fonts/inter-600.woff2',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    },
    {
      rel: 'preload',
      href: '/fonts/inter-700.woff2',
      crossorigin: '',
      as: 'font',
      type: 'font/woff2',
    }
  ]
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>