<template>
    <div class="w-full bg-white border-b">
        <div class="flex items-center container mx-auto px-4 py-3 text-gray-600">
            
            <!-- Logo. -->
            <div class="flex items-center hover:text-gray-900 cursor-pointer">
                <img class="w-12" src="/img/logo.png" alt="Logo">
                <div class="hidden sm:block ml-4 uppercase tracking-widest font-medium">Paparazzi</div>
            </div>

            <!-- Authenticated. -->
            <template v-if="auth.check()">
                <div class="ml-auto" v-text="auth.user().name"></div>
                <a class="ml-4 font-medium hover:text-gray-900" href="#">Logout</a>
            </template>

            <!-- Guest. -->
            <template v-else>
                <a class="ml-auto font-medium hover:text-gray-900" href="#">Login</a>
                <a class="ml-4 font-medium hover:text-gray-900" href="#">Register</a>
            </template>
        </div>
    </div>
</template>

<script>
import { auth } from '@stubs'

export default {
    data () {
        return { auth }
    }
}
</script>
