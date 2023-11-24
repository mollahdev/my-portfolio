export default function useAppStore() {
    const cacheStore = useState('cache', () => ({}))

    return {
        cacheStore
    }
}