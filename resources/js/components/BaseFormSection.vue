<template>
    <div class="flex flex-col sm:flex-row">
        <div class="w-full sm:w-48 lg:w-64 pb-4 sm:pr-8">
            <h1 class="text-xs text-gray-600 font-semibold uppercase tracking-wide mb-1" v-text="title"></h1>
            <div class="text-sm">
                <slot name="description"></slot>
            </div>
        </div>
        <div class="flex-1">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
    }
}
</script>
