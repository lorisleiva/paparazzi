const mix = require('laravel-mix');
const purgecss = require('@fullhuman/postcss-purgecss')({

   // Specify the paths to all of the template files in your project 
   content: [
     './resources/**/*.blade.php',
     './resources/**/*.vue',
   ],
 
   // Include any special characters you're using in this regular expression
   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
 })
 
mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
      require('tailwindcss'),
      ...mix.inProduction() ? [purgecss] : [],
      require('autoprefixer'),
   ])

mix.webpackConfig({
   resolve: {
      alias: {
         '@components': path.resolve(__dirname, 'resources/js/components'),
         '@plugins$': path.resolve(__dirname, 'resources/js/plugins'),
         '@stubs$': path.resolve(__dirname, 'resources/js/stubs'),
         '@router$': path.resolve(__dirname, 'resources/js/router'),
         '@utils$': path.resolve(__dirname, 'resources/js/utils'),
      }
   }
})

mix.disableSuccessNotifications()

if (mix.inProduction()) {
   mix.version()
} else {
   mix.sourceMaps()
}
