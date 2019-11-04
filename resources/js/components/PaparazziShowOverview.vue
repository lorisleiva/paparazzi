<template>
    <div>
        <base-panel
            :title="paparazzi.name"
            :sub="`${paparazzi.shot_count} shot${paparazzi.shot_count === 1 ? '' : 's'}`"
            class="mb-8"
        >
            <template #actions>
                <base-button>
                    Shoot now
                </base-button>
            </template>
            
            <base-metadata :metadata="metadata"></base-metadata>
        </base-panel>

        <base-panel
            v-if="paparazzi.latest_shot"
            title="Latest shot"
            :sub="paparazzi.latest_shot.created_ago"
        >
            <template #actions>
                <base-button @click="$router.push({ name: 'PaparazziShowShots', params: { id: paparazzi.id } })">
                    View all shots
                </base-button>
            </template>

            <shot-frame :shot="paparazzi.latest_shot"></shot-frame>
        </base-panel>
    </div>
</template>

<script>
import ShotFrame from './ShotFrame'

export default {
    components: { ShotFrame },
    props: {
        paparazzi: Object,
    },
    computed: {
        metadata () {
            return [
                { icon: 'time', value: this.paparazzi.frequency_for_humans },
                { icon: 'arrow-thin-right-circle', value: `Next shot in ${this.paparazzi.next_shot_in}` },
                { icon: 'application', value: this.paparazzi.device_for_humans },
                { icon: 'link', value: this.paparazzi.url },
                { icon: 'paint', value: this.paparazzi.css, design: 'font-mono' },
            ].filter(x => x.value)
        },
    },
}
</script>
