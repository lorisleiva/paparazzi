<template>
    <div>
        <base-select :value="frequency" @input="setFrequency" label="Frequency" class="mb-6" :options="frequencyOptions"></base-select>
        <base-select v-if="frequency === 'yearly'" :value="month" @input="value => setPart(3, value)" label="Month" class="mb-6" :options="monthOptions"></base-select>
        <base-select v-if="['yearly', 'monthly'].includes(frequency)" :value="day" @input="value => setPart(2, value)" label="Day" class="mb-6" :options="dayOptions"></base-select>
        <base-select v-if="frequency === 'weekly'" :value="week" @input="value => setPart(4, value)" label="Week day" class="mb-6" :options="weekOptions"></base-select>
        <div class="flex flex-col sm:flex-row -mx-2">
            <base-select v-if="! ['hourly', 'custom'].includes(frequency)" :value="hour" @input="value => setPart(1, value)" label="Hour" class="flex-1 px-2 mb-6" :options="hourOptions"></base-select>
            <base-select v-if="frequency !== 'custom'" :value="minute" @input="value => setPart(0, value)" label="Minute" class="flex-1 px-2 mb-6" :options="minuteOptions"></base-select>
        </div>
        <base-input v-if="frequency === 'custom'" :value="value" @input="value => $emit('input', value)" label="Cron" class="mb-6"></base-input>
    </div>
</template>

<script>
import {
    frequencyOptions,
    monthOptions,
    dayOptions,
    weekOptions,
    hourOptions,
    minuteOptions,
} from '@utils'

export default {
    props: {
        value: String,
    },
    data () {
        return {
            frequencyOptions,
            monthOptions,
            dayOptions,
            weekOptions,
            hourOptions,
            minuteOptions,
            forceCustom: false,
        }
    },
    computed: {
        frequency () {
            if (this.forceCustom) return 'custom'
            if (/^\d+ \d+ \d+ \d+ \*$/.test(this.value)) return 'yearly'
            if (/^\d+ \d+ \d+ \* \*$/.test(this.value)) return 'monthly'
            if (/^\d+ \d+ \* \* \d+$/.test(this.value)) return 'weekly'
            if (/^\d+ \d+ \* \* \*$/.test(this.value)) return 'daily'
            if (/^\d+ \* \* \* \*$/.test(this.value)) return 'hourly'
            this.forceCustom = true
            return 'custom'
        },
        minute() {
            return this.getPart(0)
        },
        hour() {
            return this.getPart(1)
        },
        day() {
            return this.getPart(2)
        },
        month() {
            return this.getPart(3)
        },
        week() {
            return this.getPart(4)
        },
    },
    methods: {
        getPart (index) {
            const part = this.value.split(' ')[index]
            return isNaN(parseInt(part)) ? part : parseInt(part)
        },
        setPart (index, newValue) {
            const array = this.value.split(' ')
            array[index] = newValue
            this.$emit('input', array.join(' '))
        },
        setFrequency (newFrequency) {
            this.forceCustom = newFrequency === 'custom'
            switch (newFrequency) {
                case 'yearly': return this.$emit('input', '0 0 1 1 *')
                case 'monthly': return this.$emit('input', '0 0 1 * *')
                case 'weekly': return this.$emit('input', '0 0 * * 1')
                case 'daily': return this.$emit('input', '0 0 * * *')
                case 'hourly': return this.$emit('input', '0 * * * *')
                default: return this.$emit('input', '* * * * *')
            }
        }
    },
}
</script>
