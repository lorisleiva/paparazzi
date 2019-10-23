<template>
    <div class="absolute inset-0 flex">
        <div class="m-auto px-4 py-8 sm:py-16" :class="wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        wrapper: String,
    }
}
</script>
