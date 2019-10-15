import './bootstrap'
import Vue from 'vue'
import App from '@components/App'
import router from '@router'

// Plugins.
import registerPlugins from '@plugins'
registerPlugins(Vue)

new Vue({
    el: '#app',
    render: h => h(App),
    router,
});
