<template>
    <table class="w-full text-sm">
        <tr v-for="{ icon, value, design } in metadata" :key="icon">
            <td class="w-px pr-2 py-2">
                <base-icon
                    :icon="icon"
                    class="w-5 h-5 fill-current"
                    primary="text-gray-500"
                ></base-icon>
            </td>
            <td v-text="value" :class="design"></td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        metadata: Array,
    }
}
</script>
