<script setup>
    import { ref, computed, watch, onMounted, defineEmits } from 'vue';
    import { useRoute } from 'vue-router';
    import menus from '~/assets/data/header-menu.json'

    const emit = defineEmits(['toggleMenu'])

    const isMenuOpen = ref(false);
    const hamburger = ref(null);
    const route = useRoute();

    const toggleMenu = () => {
        isMenuOpen.value = !isMenuOpen.value;
    }

    watch( route,  () => {
        isMenuOpen.value = false;
    })

    watch( isMenuOpen, (value) => {
        const line = hamburger.value.$el.querySelector('#last-hamburger-line');
        emit('toggleMenu', value);
        line.style.x = value ? 0 : 8;
    } )

    const isVisible = computed(() => {
        return isMenuOpen.value;
    })

    const hamburgerClasses = computed(() => {
        return {
            'text-primary-500' : isVisible.value,
            'text-zinc-700 dark:text-white' : !isVisible.value
        }
    })

    const screenHandler = (ev) => {
        if (ev.matches) {
            isMenuOpen.value = false;
        }
    }

    onMounted(() => {
        const screenMedia = window.matchMedia('(min-width: 768px)');
        screenMedia.addEventListener('change', screenHandler);
    })

</script>

<template>
    <div>
        <Teleport to="body">
            <div>
                <Transition name="mobile-menu-overlay">
                    <div v-if="isVisible" @click.prevent="toggleMenu" class="fixed top-0 left-0 w-full h-screen z-40 bg-white/40 dark:bg-black/40 backdrop-blur-sm"></div>
                </Transition>
                <Transition name="mobile-menu">
                    <ul v-if="isVisible" class="fixed top-[65px] max-h-[calc(100vh_-_70px)] overflow-y-auto z-50 left-0 border-b-2 border-b-primary-400 w-full bg-zinc-100 dark:bg-zinc-900 rounded-bl-xl rounded-br-xl overflow-hidden">
                        <li v-for="menu in menus">
                            <NuxtLink
                                :to="menu.to"
                                :data-target="menu.to"
                                class="px-5 block py-3 text-base select-none border-t border-zinc-200 dark:border-zinc-800 transition hover:text-primary-500 dark:hover:text-primary-400"
                                exact-active-class="text-primary-500 font-semibold dark:text-primary-400 bg-primary-400/10"
                            >
                                {{ menu.label }}
                            </NuxtLink>
                        </li>

                        <div class="p-4">
                            <WidgetWork class="bg-white dark:bg-transparent"/>
                        </div>
                    </ul>
                </Transition>
            </div>
        </Teleport>
        <IconHamburger ref="hamburger" @click.prevent="toggleMenu" :class="hamburgerClasses"/>
    </div>
</template>