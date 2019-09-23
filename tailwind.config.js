module.exports = {
    theme: {
        extend: {},
        gradients: theme => ({
            primary: ['45deg', theme('colors.blue.400'), theme('colors.blue.600')]
        })
    },
    variants: {},
    plugins: [
        require('tailwindcss-plugins/gradients'),
    ]
}
