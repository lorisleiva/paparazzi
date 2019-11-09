<template>
    <div>
        <base-panel title="Settings" class="mb-8">
            <base-form-section title="Target" class="mb-6 border-b">
                <template #description>
                    Identify your paparazzi by giving it a name and provide the URL of a webpage to target.
                </template>

                <base-input v-model="paparazzi.name" label="Name" class="mb-6"></base-input>
                <base-input v-model="paparazzi.url" label="URL" class="mb-6"></base-input>
            </base-form-section>

            <base-form-section title="Scheduler" class="mb-6 border-b">
                <template #description>
                    In this section, you can define a frequency used by the paparazzi. If you feel confortable with <a class="font-semibold hover:underline" href="https://github.com/mtdowling/cron-expression#cron-expressions">CRON expressions</a>, you can provide more complex frequencies.
                </template>

                <paparazzi-scheduler v-model="paparazzi.frequency"></paparazzi-scheduler>
            </base-form-section>

            <base-form-section title="Camera">
                <template #description>
                    Here, you can adjust the camera settings of your paparazzi. You can emulate a particular device or provide custom dimensions for your shots. The custom CSS provided will be added to the webpage before taking the screenshot.
                </template>

                <base-select v-model="paparazzi.device" label="Device" class="mb-6" :options="deviceOptions"></base-select>
                <div v-if="paparazzi.device === 'Screen'" class="flex flex-col sm:flex-row -mx-2">
                    <base-input v-model="paparazzi.width" label="Width" class="flex-1 px-2 mb-6"></base-input>
                    <base-input v-model="paparazzi.height" label="Height" class="flex-1 px-2 mb-6"></base-input>
                </div>
                <base-input v-model="paparazzi.css" label="Custom CSS" class="mb-6"></base-input>
                <base-checkbox v-model="paparazzi.fullpage" label="Capture the full page" class="mb-6"></base-checkbox>
            </base-form-section>

            <base-button primary class="w-full sm:w-auto ml-auto">
                Update
            </base-button>
        </base-panel>
        
        <base-panel title="Danger zone">
            <div class="mb-8">
                Please note that deleting a paparazzi is irreversible and will automatically remove all shots associated with that paparazzi. You might want to download them before proceding.
            </div>
            <base-button class="ml-auto" danger v-if="! deleting" @click="deleting = true">
                Delete paparazzi
            </base-button>
            <div class="flex items-center justify-end" v-else>
                <div class="mr-4">Are you sure?</div>
                <base-button danger class="mr-4">Yes</base-button>
                <base-button @click="deleting = false">No</base-button>
            </div>
        </base-panel>
    </div>
</template>

<script>
import PaparazziScheduler from './PaparazziScheduler'
import { deviceOptions } from '@utils'

export default {
    components: { PaparazziScheduler },
    props: {
        paparazzi: Object,
    },
    data () {
        return {
            deviceOptions,
            deleting: false,
        }
    }
}
</script>
