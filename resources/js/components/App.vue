<template>
    <div class="flex flex-col h-screen">
        <the-navbar></the-navbar>
        <div class="flex-1 overflow-scroll">
            <div class="container mx-auto px-4 py-8 sm:py-16">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import TheNavbar from './TheNavbar'

export default {
    components: { TheNavbar },
}
</script>
