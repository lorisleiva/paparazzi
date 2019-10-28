<template>
    <div class="bg-white rounded shadow border overflow-hidden border-gray-400 hover:shadow-md hover:border-gray-500 hover:bg-gray-100 cursor-pointer">
        <!-- Image. -->
        <div 
            v-if="paparazzi.shot_count > 0"
            class="h-48 bg-cover bg-top border-b"
            :style="`background-image: url(${paparazzi.latest_shot.image})`"
        ></div>
        <div v-else class="flex items-center justify-center h-48 border-b bg-gray-300">
            <img src="/img/empty_photo.svg" class="w-32">
        </div>

        <!-- Text. -->
        <div class="p-4">
            <div class="text-xs text-gray-600 font-semibold uppercase tracking-wide" v-text="metadata"></div>
            <div class="my-1 text-gray-900 font-semibold text-lg" v-text="paparazzi.name"></div>
            <div class="text-sm text-gray-600" v-text="paparazzi.frequency_for_humans"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        paparazzi: Object,
    },
    computed: {
        metadata () {
            if (this.paparazzi.shot_count === 0) {
                return '0 shots'
            }

            return `${this.paparazzi.shot_count} shot${this.paparazzi.shot_count > 1 ? 's' : ''} • ${this.paparazzi.latest_shot.created_ago}`
        }
    },
}
</script>
