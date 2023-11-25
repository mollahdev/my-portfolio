<script setup>
const { transformPost, cacheResponse } = useUtils()
const { pending, data } = useLazyAsyncData('GetRecentArticles', () => cacheResponse('recent-articles', () => GqlGetQueryPosts({first: 5})), {
    transform: transformPost
})

</script>
<template>
    <HeroMain/>
    <WrapperSidebar class="pb-6 md:pb-16">
        <template #content>
            <div class="grid gap-12">
                <h2 class="flex text-sm space-x-2 font-semibold text-zinc-600 dark:text-zinc-400">
                    <IconPencil/>
                    <span>Recent Articles</span>
                </h2>
                
                <QueryArticle
                    class="grid gap-16"
                    :first="5"
                    :skeleton="3"
                    cacheId="recent-articles"
                />

                <NoResult v-if="!pending && data.length === 0"/>

                <NuxtLink
                    v-if="!pending && data.length > 0"
                    to="/blog"
                    class="text-primary-700 dark:text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1 ml-auto"
                >
                    <span>View All Articles</span> 
                    <IconArrowRight class="h-4 w-4 flex-none "/>
                </NuxtLink>
            </div>
        </template>
        <template #sidebar>
            <WidgetWork/>
            <WidgetTags/>
            <WidgetNewsletter class="hidden md:inline-block"/>
        </template>
    </WrapperSidebar>
</template>