<script setup>
const { transformPost, cacheResponse } = useUtils()
const searchValue = ref('')

const cacheId = computed(() => {
    if( searchValue.value === '' ) return 'blog_all'
    return `blog_all${searchValue.value.replace(/\s/g, '_')}`
})

const { pending, data, refresh } = useLazyAsyncData('GetQueryPosts', () => cacheResponse(cacheId.value, () => GqlGetQueryPosts({
    search: searchValue.value
})), {
    transform: transformPost
})

watch( searchValue, () => {
    refresh()
})

</script>

<template>
    <HeroPageBanner>
        <template #title>
            Writing on software development, system design, linux and in general tech.
        </template>
        <template #description>
            I have been writing since 2020, mostly around tech and my career. In total I have written 165 posts. I hope you enjoy them.
        </template>
        <template #sidebar>
            <WidgetTags/>
        </template>
    </HeroPageBanner>
    
    <div class="py-2 md:py-8">
        <Search :disable="pending" @search="val => searchValue = val"/>
    </div>

    <div class="pb-10 md:pb-16 pt-10">
        <QueryArticle
            class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 sm:[&_>_*:not(:hover)]:hover:opacity-60"
            :first="100"
            :skeleton="6"
            :search="searchValue"
            :cacheId="cacheId"
        />
        <NoResult v-if="!pending && data.length === 0"/>
    </div>
</template>