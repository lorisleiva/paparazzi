const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css', [
      require('tailwindcss'),
      require('autoprefixer'),
   ])

mix.webpackConfig({
   resolve: {
      alias: {
         '@components': path.resolve(__dirname, 'resources/js/components'),
      }
   }
})

mix.disableSuccessNotifications()

if (mix.inProduction()) {
   mix.version()
} else {
   mix.sourceMaps()
}
