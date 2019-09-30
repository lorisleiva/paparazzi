<template>
    <button
        class="relative flex items-center justify-center border overflow-hidden rounded font-medium focus:outline-none focus:shadow-outline focus:border-blue-400"
        :class="[buttonType, buttonSize, buttonDisabled]"
        :disabled="isDisabled"
        v-on="$listeners"
    >
        <base-icon
            v-if="icon"
            :icon="icon"
            class="fill-current mr-2"
            :class="iconSize"
            :primary="iconPrimary"
        ></base-icon>
        <slot></slot>

        <div v-if="loading" class="absolute inset-0 flex items-center justify-center" :class="buttonType">
            <base-icon
                icon="cog"
                class="fill-current spin"
                :class="iconSize"
                :primary="loadingIcon[0]"
                :secondary="loadingIcon[1]"
            ></base-icon>
        </div>
    </button>
</template>

<script>
import BaseIcon from './BaseIcon'

export default {
    props: {
        icon: String,
        danger: Boolean,
        primary: Boolean,
        small: Boolean,
        disabled: Boolean,
        loading: Boolean,
    },
    components: {
        BaseIcon
    },
    computed: {
        isDisabled () {
            return this.disabled || this.loading
        },
        buttonType () {
            if (this.danger) return this.buttonDanger
            if (this.primary) return this.buttonPrimary
            return this.buttonDefault
        },
        buttonDanger () {
            return this.isDisabled
                ? 'bg-red-100 border-red-200 text-red-300' 
                : 'bg-red-100 border-red-300 text-red-700 hover:border-red-400 hover:text-red-800'
        },
        buttonPrimary () {
            return this.isDisabled
                ? 'bg-blue-200 border-blue-300 text-white uppercase tracking-wider' 
                : 'bg-primary border-blue-600 text-white uppercase tracking-wider hover:border-blue-900'
        },
        buttonDefault () {
            return this.isDisabled
                ? 'bg-white border-gray-300 text-gray-500' 
                : 'bg-white border-gray-400 hover:border-gray-500 hover:text-gray-900'
        },
        buttonSize () {
            return this.small
                ? 'px-2 py-1 text-xs'
                : 'px-4 py-2 text-sm'
        },
        buttonDisabled () {
            return this.isDisabled
                ? 'cursor-not-allowed'
                : 'shadow hover:shadow-md'
        },
        iconSize () {
            return this.small
                ? 'w-4 h-4'
                : 'w-5 h-5'
        },
        iconPrimary () {
            if (this.isDisabled || this.primary) return ''
            if (this.danger) return 'text-red-400'
            return 'text-gray-600'
        },
        loadingIcon () {
            if (this.primary) return ['text-blue-500', 'text-blue-600']
            if (this.danger) return ['text-red-400', 'text-red-600']
            return ['text-gray-700', 'text-gray-600']
        }
    }
}
</script>
