<script setup>
 import footerMenus from '~/assets/data/footer-menu.json'
</script>

<template>
    <footer class="relative z-0 pb-10 md:pb-16">
        <div class="container">
            <div class="grid sm:grid-cols-2 lg:grid-cols-[auto_472px] gap-y-10 gap-x-6 md:gap-x-10 sm:border-t sm:border-zinc-100 pb-10 md:pb-16 sm:pt-10 sm:dark:border-zinc-700/40">
                <div class="grid grid-cols-2 gap-4 px-2">
                    <FooterMenu v-for="(menus, index) in footerMenus" :key="index" :menus="menus.menus">
                        <template #heading>{{ menus.label }}</template>
                    </FooterMenu>
                </div>
                <WidgetNewsletter class="-order-1 sm:order-1"/>
            </div>

            <FooterCopyright/>
        </div>
    </footer>
</template>