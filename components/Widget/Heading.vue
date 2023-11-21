<template>
    <div class="widget">
        <h2 class="flex items-center text-sm gap-x-2 font-semibold text-zinc-900 dark:text-zinc-100">
            <slot name="icon">
                <IconWork/>
            </slot>
            <slot>Work</slot>
        </h2>
        <p v-if="$slots.description" class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            <slot name="description"></slot>
        </p>
    </div>
</template>