<template>
    <div class="w-full max-w-sm mx-auto">
        <base-panel>
            <base-input label="Email" type="email" class="mb-6"></base-input>
            <base-input label="Password" type="password" class="mb-6"></base-input>
            <base-checkbox label="Remember me" class="mb-6"></base-checkbox>
            <div class="flex items-center">
                <router-link :to="{ name: 'AuthPasswordEmail' }" class="text-sm text-gray-600 hover:text-gray-900 ml-auto mr-4">Forgot your password?</router-link>
                <base-button primary>Sign in</base-button>
            </div>
        </base-panel>
    </div>
</template>

<script>
export default {
    //
}
</script>
