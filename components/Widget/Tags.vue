<script setup>
const { data, pending } = useLazyAsyncData('getAllTags', () => GqlGetAllTags(), {
    transform(data) {
        return data.tags.nodes
    }
})
</script>

<template>
    <WrapperWidget>
        <WidgetHeading>
            <template #icon>
                <IconWork/>
            </template>
            <template #default>Filter by Tags</template>
        </WidgetHeading>
        <div v-if="pending" class="animate-pulse flex flex-wrap gap-2.5 mt-4">
            <div v-for="index in 20" :key="index" class="h-4 bg-zinc-200 flex-grow rounded-md min-w-[100px]"></div>
        </div>
        <div v-else class="flex flex-wrap gap-2.5 mt-4">
            <NuxtLink 
                v-for="(tag, index) in data"
                :key="index" 
                :to="`/tag/${tag.slug}`" 
                class="hover:text-primary-500"
            >
                # {{ tag.name }}
            </NuxtLink>
        </div>
    </WrapperWidget>
</template>