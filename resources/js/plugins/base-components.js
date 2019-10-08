export default {
    install (Vue) {
        let requireContext = require.context('../components', false, /Base\w*\.vue$/)
        requireContext.keys().forEach(filename => {
            let name = filename.replace(/^.+\//, '').replace(/\.\w+$/, '')
            let component = requireContext(filename)
            component = component.default || component
            Vue.component(component.name || name, component)
        })
    }
}