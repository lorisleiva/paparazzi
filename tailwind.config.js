module.exports = {
    theme: {
        extend: {},
        gradients: theme => ({
            primary: ['45deg', theme('colors.blue.400'), theme('colors.blue.600')]
        }),
        animations: {
            spin: 'spin 4s linear infinite'
        }
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [
        require('tailwindcss-plugins/gradients'),
        require('tailwindcss-plugins/animations'),
        require('tailwindcss-plugins/keyframes/spin'),
    ]
}
