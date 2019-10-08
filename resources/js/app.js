require('./bootstrap');
import Vue from 'vue'
import App from '@components/App'

// Plugins.
import registerPlugins from '@plugins'
registerPlugins(Vue)

const app = new Vue({
    el: '#app',
    render: h => h(App),
});
