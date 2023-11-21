<template>
    <div class="grid md:grid-cols-[auto_320px] lg:grid-cols-[auto_400px] gap-y-16 gap-10 lg:gap-x-20">
        <main>
            <slot name="content"/>
        </main>
        <aside class="space-y-8">
            <slot name="sidebar"/>
        </aside>
    </div>
</template>