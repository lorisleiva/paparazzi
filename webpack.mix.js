const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/css/app.css', 'public/css');

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
