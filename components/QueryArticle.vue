<script setup>
import { defineProps } from 'vue';
const { transformPost, cacheResponse } = useUtils()

const props = defineProps({
    first: {
        type: Number,
        default: 5
    },
    search: {
        type: String,
        default: ''
    },
    tag: {
        type: String,
        default: ''
    },
    skeleton: {
        type: Number,
        default: 3
    },
    cacheId: {
        type: String,
        required: true
    }
})

const queryProps = computed(() => ({
    first: Number(props.first),
    search: props.search,
    tag: props.tag
}))

const { pending, data, refresh } = useLazyAsyncData('GetQueryPosts', () => cacheResponse(props.cacheId, () => GqlGetQueryPosts(queryProps.value)), {
    transform: transformPost
})

watch( queryProps, () => {
    refresh()
})

</script>

<template>
    <div>
        <SkeletonArticle v-if="pending" v-for="index in Number(props.skeleton)" :key="index"/>
        <Article 
            v-else
            v-for="post in data" 
            :key="post.slug" 
            :date="post.date"
            :title="post.title"
            :excerpt="post.excerpt"
            :slug="post.slug"
            :tags="post.tags.nodes"
        />
    </div>
</template>