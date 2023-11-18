<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
useHead({
  title: 'Ashraf Mollah',
  bodyAttrs: {
    class: 'bg-zinc-50 text-zinc-900 dark:bg-black dark:text-white font-inter'
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