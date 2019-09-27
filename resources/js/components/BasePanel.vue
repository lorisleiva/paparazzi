<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden" :class="{ 'px-6 py-4': ! noPadding }">
        <div class="flex items-start mb-8" v-if="title">
            <div class="flex-1">
                <h1 class="text-gray-900 text-xl" v-text="title"></h1>
                <div class="text-sm text-gray-600 uppercase tracking-wide font-semibold mt-1" v-text="sub"></div>
            </div>
            <slot name="actions"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        noPadding: Boolean,
        title: String,
        sub: String,
    }
}
</script>
