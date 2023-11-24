<script setup>
const { postStore } = useAppStore();
let pending = false;
let data = [];

if( !Reflect.has( postStore.value, 'getRecentPosts' ) ) {
    const response = useLazyAsyncData('getRecentPosts', () => GqlGetRecentPosts(), {
        transform(data) {
            return data.posts.nodes.map((post) => {
                // remove these symbol [...] from excerpt
                const excerpt = post.excerpt.replace(/\[&hellip;\]/g, '')
                // make readable date
                const date = new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })
                return {
                    date,
                    title: post.title,
                    excerpt,
                    slug: post.slug,
                    tags: post.tags
                }
            })
        }
    })

    pending = response.pending;
    data = response.data;
    postStore.value = {
        ...postStore.value,
        getRecentPosts: response.data
    }
} else {
    data = postStore.value.getRecentPosts;
}

</script>

<template>
    <HeroMain/>
    <WrapperSidebar class="pb-6 md:pb-16">
        <template #content>
            <div class="grid gap-16">
                <h2 class="flex text-sm space-x-2 font-semibold text-zinc-600 dark:text-zinc-400">
                    <IconPencil/>
                    <span>Recent Articles</span>
                </h2>
                <template v-if="pending">
                    <SkeletonArticle v-for="index in 2" :key="index"/>
                </template>
                <template v-else-if="data">
                    <Article 
                        v-for="(post, index) in data" 
                        :key="index" 
                        :date="post.date"
                        :title="post.title"
                        :excerpt="post.excerpt"
                        :slug="post.slug"
                        :tags="post.tags.nodes"
                    />

                    <NuxtLink
                        to="/blog"
                        class="text-primary-700 dark:text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-1 ml-auto"
                    >
                        <span>View All Articles</span> 
                        <IconArrowRight class="h-4 w-4 flex-none "/>
                    </NuxtLink>
                </template>
                <template v-else>
                    <p>No post available</p>
                </template>
            </div>
        </template>
        <template #sidebar>
            <WidgetWork/>
            <WidgetTags/>
            <WidgetNewsletter class="hidden md:inline-block"/>
        </template>
    </WrapperSidebar>
</template>