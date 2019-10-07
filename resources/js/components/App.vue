<template>
    <div>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Panels</h1>
            <base-panel class="mb-8">
                Consectetur commodo occaecat duis aliquip amet anim officia consectetur quis cupidatat cillum. Minim occaecat est nostrud proident ad ut aliqua officia. Ipsum est culpa ullamco nulla ut pariatur in ea pariatur nulla est.
            </base-panel>
            <base-panel class="mb-8 flex" no-padding>
                <div class="bg-blue-500 w-64"></div>
                <div class="px-6 py-4 flex-1">Ipsum magna fugiat irure ut eiusmod magna ut amet Lorem. Minim sint aute ex adipisicing magna adipisicing amet. Irure culpa esse adipisicing. Voluptate quis ut ullamco ut sunt dolor ullamco est reprehenderit. Amet magna consectetur tempor duis nostrud adipisicing. Ex et sit id esse tempor dolor officia ut pariatur magna.</div>
            </base-panel>
            <base-panel class="mb-8" title="My title" sub="Some metadata">
                Qui enim officia aute minim id sint anim ex aliqua ut laborum. Incididunt commodo ut quis sint excepteur mollit incididunt laboris aute incididunt culpa eu. Est amet deserunt esse minim reprehenderit pariatur commodo pariatur. Sunt excepteur adipisicing veniam sit velit pariatur cupidatat non dolor. Deserunt veniam labore ullamco in incididunt ipsum amet in mollit reprehenderit laborum laborum.
            </base-panel>
            <base-panel class="mb-8" title="Leads" sub="236 leads ∙ 102 opportunities">
                <template #actions>
                    <base-button>Add new lead</base-button>
                </template>
                Magna velit proident ea elit ipsum ex mollit labore eiusmod reprehenderit officia esse nulla. Occaecat magna duis deserunt non amet aute quis. Laborum aute aliquip labore qui anim nisi ad consectetur culpa proident laborum exercitation. Officia veniam proident nostrud commodo qui. Cupidatat cupidatat ex et anim ex ut officia laborum aute ullamco. Aute est et ipsum cillum cillum fugiat nulla. Sit minim fugiat dolore consectetur nostrud ipsum quis.
            </base-panel>
        </section>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Buttons</h1>
            <table class="w-full">
                <tr class="font-semibold">
                    <td>Default</td>
                    <td>Danger</td>
                    <td>Primary</td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button @click="sayHi">Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button small>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button small disabled>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small disabled danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small disabled primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button icon="camera">Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button icon="camera" primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button small icon="camera">Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small icon="camera" danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button small icon="camera" primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button disabled icon="camera">Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled icon="camera" danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled icon="camera" primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button disabled small icon="camera">Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled small icon="camera" danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button disabled small icon="camera" primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button loading>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading primary>Primary</base-button>
                    </td>
                </tr>
                <tr>
                    <td class="py-6">
                        <base-button loading small>Default</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading small danger>Danger</base-button>
                    </td>
                    <td class="py-6">
                        <base-button loading small primary>Primary</base-button>
                    </td>
                </tr>
            </table>
        </section>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Icons</h1>
            <div class="flex mb-8">
                <base-icon 
                    v-for="icon in icons" :key="icon"
                    :icon="icon" 
                    class="fill-current w-6 h-6 mr-4" 
                    primary="text-gray-500" 
                    secondary="text-gray-700"
                ></base-icon>
            </div>
            <div class="flex">
                <base-icon 
                    v-for="icon in icons" :key="icon"
                    :icon="icon" 
                    class="group cursor-pointer fill-current w-6 h-6 mr-4" 
                    primary="text-blue-300 group-hover:text-blue-500" 
                    secondary="text-blue-500 group-hover:text-blue-700"
                ></base-icon>
            </div>
        </section>
        <section class="m-16">
            <h1 class="text-5xl font-semibold mb-8">Form elements</h1>
            <base-panel>
                <base-input v-model="name" label="Name" class="mb-4"></base-input>
                <base-input v-model="dateOfBirth" label="Date of birth" type="date" class="mb-4"></base-input>
                <base-select v-model="plan" :options="availablePlans" label="Select a plan" class="mb-4"></base-select>
                <base-checkbox v-model="subscribeToNewsletter" label="Subscribe me to your monthly newsletter"></base-checkbox>
            </base-panel>
        </section>
    </div>
</template>

<script>
import BasePanel from './BasePanel'
import BaseButton from './BaseButton'
import BaseIcon from './BaseIcon'
import BaseInput from './BaseInput'
import BaseSelect from './BaseSelect'
import BaseCheckbox from './BaseCheckbox'

export default {
    components: { BasePanel, BaseButton, BaseIcon, BaseInput, BaseSelect, BaseCheckbox },
    data () {
        return {
            icons: ['camera', 'application', 'cog', 'history', 'link', 'paint', 'trash'],
            name: 'John Doe',
            dateOfBirth: '1990-01-01',
            plan: 'starter',
            availablePlans: [
                { value: 'free', name: 'Free' }, 
                { value: 'starter', name: 'Starter ($5/month)' }, 
                { value: 'premium', name: 'Premium ($10/month)' }, 
                { value: 'business', name: 'Business ($15/month)' }
            ],
            subscribeToNewsletter: false,
        }
    },
    methods: {
        sayHi () {
            alert('Hi')
        }
    }
}
</script>
