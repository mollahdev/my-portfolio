<script setup>
const { data } = await useAsyncData('getAllTags', () => GqlGetAllTags(), {
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
        <div class="flex flex-wrap gap-2.5 mt-4">
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