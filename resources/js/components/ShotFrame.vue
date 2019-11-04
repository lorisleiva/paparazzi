<template>
    <div class="flex items-center">

        <!-- Image. -->
        <div class="flex-1 max-w-3xl max-h-md overflow-y-auto rounded-lg shadow border border-gray-400 hover:border-gray-500">
            <img :src="shot.image">
        </div>

        <!-- Metadata. -->
        <div class="pl-4 max-w-sm hidden lg:block">
            <h2 class="font-semibold" v-text="shot.name"></h2>
            <div class="text-sm font-medium text-gray-500 mb-4" v-text="shot.created_at"></div>
            <base-metadata :metadata="metadata"></base-metadata>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shot: Object,
    },
    computed: {
        metadata () {
            return [
                { icon: 'time', value: this.shot.frequency_for_humans },
                { icon: 'application', value: this.shot.device_for_humans },
                { icon: 'link', value: this.shot.url },
                { icon: 'paint', value: this.shot.css, design: 'font-mono' },
            ].filter(x => x.value)
        },
    },
}
</script>
