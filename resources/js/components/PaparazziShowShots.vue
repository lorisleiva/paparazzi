<template>
    <base-panel v-if="paparazzi.shot_count > 0" title="Shots" :sub="`${paparazzi.shot_count} shot${paparazzi.shot_count === 1 ? '' : 's'} in total`">
        <!-- Shots. -->
        <div class="mb-4 -mx-6">
            <div 
                v-for="shot in paparazzi.shots" 
                :key="shot.id"
                class="flex items-center justify-between odd:bg-gray-100 px-6 py-2"
            >
                <div class="uppercase tracking-wider text-sm font-semibold" v-text="shot.created_at"></div>
                <div class="flex items-center" v-if="deletingShotId !== shot.id">
                    <base-button small class="mr-4">
                        <base-icon icon="cloud-download" class="fill-current w-4 mr-2" primary="text-gray-600"></base-icon>
                        Download
                    </base-button>
                    <base-button small @click="deletingShotId = shot.id">
                        <base-icon icon="trash" class="fill-current w-4 mr-2" primary="text-gray-600"></base-icon>
                        Delete
                    </base-button>
                </div>
                <div class="flex items-center" v-else>
                    <div class="mr-4">Are you sure?</div>
                    <base-button small danger class="mr-4">
                        Yes
                    </base-button>
                    <base-button small @click="deletingShotId = null">
                        No
                    </base-button>
                </div>
            </div>
        </div>

        <!-- Pagination. -->
        <div class="flex items-center justify-between">
            <base-button disabled>Newer</base-button>
            <div class="text-gray-600">1 / 3</div>
            <base-button>Older</base-button>
        </div>
    </base-panel>

    <base-panel class="py-8" v-else>
        No shots
    </base-panel>
</template>

<script>
export default {
    props: {
        paparazzi: Object,
    },
    data () {
        return {
            deletingShotId: null,
        }
    },
}
</script>
