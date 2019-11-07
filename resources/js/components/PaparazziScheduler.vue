<template>
    <div>
        <base-input :value="value" @input="value => $emit('input', value)" label="Cron" class="mb-6"></base-input>
    </div>
</template>

<script>
export default {
    props: {
        value: String,
    }
}
</script>
