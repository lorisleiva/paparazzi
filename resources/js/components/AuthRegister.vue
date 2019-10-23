<template>
    <base-center-container wrapper="w-full max-w-sm md:max-w-2xl">
        <base-panel class="flex" no-padding>
            <div class="relative flex-1 hidden md:block bg-cover bg-center" style="background-image: url('img/register.jpg')">
                <div class="absolute bottom-0 right-0 text-gray-200 mr-6 mb-4">
                    👋 Welcome to Paparazzi
                </div>
            </div>
            <div class="flex-1 px-6 py-4">
                <base-input label="Name" class="mb-6"></base-input>
                <base-input label="Email" type="email" class="mb-6"></base-input>
                <base-input label="Password" type="password" class="mb-6"></base-input>
                <base-input label="Confirm Password" type="password" class="mb-6"></base-input>
                <base-button primary class="ml-auto">Register</base-button>
            </div>
        </base-panel>
    </base-center-container>
</template>

<script>
export default {
    //
}
</script>
