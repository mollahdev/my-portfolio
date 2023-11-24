function transformPost(data: any) {
    return data.posts.nodes.map((post: any) => {
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
async function cacheResponse( catchId: string, callback: Function ) {
    const { cacheStore } = useAppStore() as any

    if ( cacheStore.value[catchId] ) {
        return cacheStore.value[catchId]
    }

    const response = await callback()
    cacheStore.value = {
        ...cacheStore.value,
        [catchId]: response
    }
    return response;
}

export default function useUtils() {
    return {
         transformPost,
         cacheResponse
    }
}