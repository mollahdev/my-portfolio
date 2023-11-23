<script setup>
    import works from '~/assets/data/works.json'
</script>

<template>
    <WrapperWidget>
        <WidgetHeading>
            <template #icon>
                <IconWork/>
            </template>
            <template #default>Work</template>
        </WidgetHeading>
        <ul class="space-y-5 pt-5">
            <li v-for="(work, index) in works" :key="index" class="flex items-center gap-x-4">
                <a 
                    :href="work.url" 
                    :area-label="`visit ${work.name}`"
                    class="flex w-10 h-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
                >
                    <NuxtImg
                        width="28"
                        height="28"
                        class="rounded-full w-7 h-7 object-cover object-center"
                        loading="lazy"
                        format="webp"
                        :alt="work.name"
                        :src="work.logo"
                    />
                </a>
                <div class="flex-grow">
                    <a :href="work.url" :area-label="`visit ${work.name}`" class="group">
                        <h2 class="inline-flex text-sm pb-0.5 group-hover:underline font-medium text-zinc-900 dark:text-zinc-100">
                            {{ work.name }}
                        </h2>
                    </a>
                    <p class="text-xs text-zinc-500 gap-y-1 flex-wrap dark:text-zinc-400 flex justify-between items-center w-full">
                        <span>{{ work.designation }}</span>
                        <span>
                            {{ work.from }} — {{ work.to }}
                        </span>
                    </p>
                </div>
            </li>
        </ul>

        <NuxtLink 
            to="hire-me"
            class="group mt-7 w-full bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 inline-flex items-center gap-1 justify-center rounded-md py-3 px-3 text-sm outline-offset-2 transition active:transition-none"
        >
            <span>Hire me</span>
            <IconArrowRight class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50 "/>
        </NuxtLink>
    </WrapperWidget>
</template>