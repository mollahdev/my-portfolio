<script setup>
    const year = new Date().getFullYear()
</script>

<template>
    <div class="flex flex-col gap-6 sm:flex-row items-center justify-between">
        <p class="text-base">&copy; {{ year }} Md Ashraful Mollah</p>
        <div class="flex gap-x-5 items-center">
            
            <a href="#" class="text-zinc-500 transition hover:text-primary-500 ">
                <IconGithub/>
            </a>
            <a href="#" class="text-zinc-500 transition hover:text-primary-500 ">
                <IconLinkedIn/>
            </a>
            <a href="#" class="text-zinc-500 transition hover:text-primary-500 ">
                <IconWhatsApp/>
            </a>
            <a href="#" class="text-zinc-500 transition hover:text-primary-500 ">
                <IconFacebook/>
            </a>
            <a href="#" class="text-zinc-500 transition hover:text-primary-500 ">
                <IconEmail/>
            </a>
        </div>
    </div>
</template>