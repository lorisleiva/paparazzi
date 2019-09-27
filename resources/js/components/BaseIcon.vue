<script>
export default {
    template: '',
    props: {
        icon: String,
        primary: String,
        secondary: String,
    },
    created () {
        this.$options.template = require(`!svg-inline-loader!../../icons/icon-${this.icon}.svg`)
            .replace(/primary/g, this.primary)
            .replace(/secondary/g, this.secondary)
    }
}
</script>
