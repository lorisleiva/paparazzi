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
            </table>
        </section>
    </div>
</template>

<script>
import BasePanel from './BasePanel'
import BaseButton from './BaseButton'

export default {
    components: { BasePanel, BaseButton },
    methods: {
        sayHi () {
            alert('Hi')
        }
    }
}
</script>
