<template>
    <div>
        <!-- Header. -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center mb-8">
            <div class="flex-1 mb-8 sm:mb-0">
                <h1 class="text-gray-900 text-xl">My paparazzis</h1>
                <p class="text-gray-600">Create paparazzis to schedule screenshots at a given frequency.</p>
            </div>
            <base-button>
                Create new paparazzi
            </base-button>
        </div>

        <!-- Paparazzi cards. -->
        <div class="flex flex-wrap -mx-3">
            <div
                v-for="paparazzi in paparazzis"
                :key="paparazzi.id"
                class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-4 sm:mb-6"
            >
                <paparazzi-card :paparazzi="paparazzi"></paparazzi-card>
            </div>
        </div>
    </div>
</template>

<script>
import { paparazzis } from '@stubs'
import PaparazziCard from './PaparazziCard'

export default {
    components: { PaparazziCard },
    data () {
        return { paparazzis }
    }
}
</script>
