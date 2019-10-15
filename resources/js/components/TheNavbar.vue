<template>
    <div class="w-full bg-white border-b">
        <div class="flex items-center container mx-auto px-4 py-3 text-gray-600">
            
            <!-- Logo. -->
            <router-link tag="div" :to="{ name: 'HomePage' }" class="flex items-center hover:text-gray-900 cursor-pointer">
                <img class="w-12" src="/img/logo.png" alt="Logo">
                <div class="hidden sm:block ml-4 uppercase tracking-widest font-medium">Paparazzi</div>
            </router-link>

            <!-- Authenticated. -->
            <template v-if="auth.check()">
                <div class="ml-auto" v-text="auth.user().name"></div>
                <a class="ml-4 font-medium hover:text-gray-900" href="#">Logout</a>
            </template>

            <!-- Guest. -->
            <template v-else>
                <router-link :to="{ name: 'AuthLogin' }" active-class="text-blue-500" class="ml-auto font-medium hover:text-gray-900">Login</router-link>
                <router-link :to="{ name: 'AuthRegister' }" active-class="text-blue-500" class="ml-4 font-medium hover:text-gray-900">Register</router-link>
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
