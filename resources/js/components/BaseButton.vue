<template>
    <button
        class="border rounded font-medium focus:outline-none focus:shadow-outline focus:border-blue-400"
        :class="[buttonType, buttonSize, buttonDisabled]"
        :disabled="disabled"
        v-on="$listeners"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        danger: Boolean,
        primary: Boolean,
        small: Boolean,
        disabled: Boolean,
    },
    computed: {
        buttonType () {
            if (this.danger) return this.buttonDanger
            if (this.primary) return this.buttonPrimary
            return this.buttonDefault
        },
        buttonDanger () {
            return this.disabled
                ? 'bg-red-100 border-red-200 text-red-300' 
                : 'bg-red-100 border-red-300 text-red-700 hover:border-red-400 hover:text-red-800'
        },
        buttonPrimary () {
            return this.disabled
                ? 'bg-blue-200 border-blue-300 text-white uppercase tracking-wider' 
                : 'bg-primary border-blue-600 text-white uppercase tracking-wider hover:border-blue-900'
        },
        buttonDefault () {
            return this.disabled
                ? 'bg-white border-gray-300 text-gray-500' 
                : 'bg-white border-gray-400 hover:border-gray-500 hover:text-gray-900'
        },
        buttonSize () {
            return this.small
                ? 'px-2 py-1 text-xs'
                : 'px-4 py-2 text-sm'
        },
        buttonDisabled () {
            return this.disabled
                ? 'cursor-not-allowed'
                : 'shadow hover:shadow-md'
        }
    }
}
</script>
