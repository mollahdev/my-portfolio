<script setup>
const route = useRoute()
const { cacheResponse } = useUtils()

const { pending, data } = 
useLazyAsyncData(
'GetSinglePost', 
() => cacheResponse(
    `blog_post_${route.params.slug}`,
    () => GqlGetSinglePost({id: route.params.slug }
)), {
    transform: (data) => {
        return data
    }
});

</script>
<template>
    <WrapperContent>
        <SkeletonSinglePost v-if="pending"/>
        <div v-else>
            <header>
                <h1 class="text-3xl sm:text-4xl tracking-wide md:text-5xl leading-[1.3] bg-clip-text text-transparent bg-gradient-to-b font-extrabold from-orange-600 via-amber-500 to-yellow-600 dark:from-orange-500 dark:via-amber-500 dark:to-yellow-400 selection:text-gray-800 dark:selection:text-gray-200">{{ data.post.title }}</h1>
            </header>
            <article>
                <div v-html="data.post.content"></div>
            </article>
        </div>
    </WrapperContent>
</template>