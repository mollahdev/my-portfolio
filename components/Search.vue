<script setup>
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
    disable: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['search']);
const debounceTimeout = ref(null);
const value = ref('');

const debounceSearch = () => {
    if ( debounceTimeout.value ) clearTimeout(debounceTimeout.value);
    debounceTimeout.value = setTimeout(() => {
        emit('search', value.value.trim());
    }, 500); // delay for half second
}

</script>
<template>
    <div class="relative">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IconSearch/>
        </div>
        <input
            @input="debounceSearch" v-model="value"
            class="block w-full rounded-lg border border-zinc-300 bg-zinc-50 p-2 pl-10 text-sm text-zinc-900 focus:border-primary-500 focus:outline-primary-500 focus:ring-primary-500 dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 focus:outline-none" placeholder="Search from the articles" autocomplete="off"
        >
    </div>
</template>