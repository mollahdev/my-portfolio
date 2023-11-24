export default function useAppStore() {
    const tagStore = useState('tags', () => ({}))
    const postStore = useState('posts', () => ({}))

    return {
        tagStore,
        postStore
    }
}