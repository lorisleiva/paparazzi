<template>
    <label class="block">
        <div 
            v-if="label"
            class="text-sm font-semibold mb-1"
            v-text="label"
        ></div>
        <input 
            class="form-input block w-full bg-gray-200 border border-gray-200 focus:bg-white"
            :type="type"
            :value="value"
            @input="$emit('input', $event.target.value)"
        >
    </label>
</template>

<script>
export default {
    props: {
        value: null,
        label: String,
        type: {
            type: String,
            default: 'text',
        }
    }
}
</script>
