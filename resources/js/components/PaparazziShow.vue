<template>
    <div v-if="paparazzi" class="flex flex-col md:flex-row">
        <div class="w-full md:w-40 mb-4 text-gray-600">
            <router-link
                v-for="{ name, title, icon } in menu"
                :key="name"
                :to="{ name, params: { id: paparazzi.id } }"
                class="group inline-flex md:flex items-center px-4 py-2 font-medium"
                :class="isActive(name) ? 'text-blue-600' : 'hover:text-gray-900'"
            >
                <base-icon
                    :key="isActive(name)"
                    :icon="icon"
                    class="w-5 h-5 fill-current mr-2"
                    :primary="isActive(name) ? 'text-blue-300' : 'text-gray-400 group-hover:text-gray-600'"
                    :secondary="isActive(name) ? 'text-blue-500' : 'text-gray-500 group-hover:text-gray-700'"
                ></base-icon>
                {{ title }}
            </router-link>
        </div>
        <div class="flex-1 md:pl-8">
            <router-view :paparazzi="paparazzi"></router-view>
        </div>
    </div>
</template>

<script>
import { paparazzis } from '@stubs'

export default {
    data () {
        return {
            paparazzi: null,
            menu: [
                { name: 'PaparazziShowOverview', title: 'Overview', icon: 'view-visible' },
                { name: 'PaparazziShowShots', title: 'Shots', icon: 'camera' },
                { name: 'PaparazziShowSettings', title: 'Settings', icon: 'cog' },
            ],
        }
    },
    methods: {
        isActive (name) {
            return name === this.$route.name
        },
    },
    beforeRouteEnter (to, from, next) {
        const paparazzi = paparazzis.find(p => p.id == to.params.id)
        next(vm => vm.paparazzi = paparazzi)
    },
    beforeRouteUpdate (to, from, next) {
        if (to.params.id === from.params.id) {
            return next()
        }

        this.paparazzi = paparazzis.find(p => p.id == to.params.id)
        next()
    }
}
</script>
