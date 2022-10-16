let mix = require('laravel-mix');

mix.js(['src/js/jquery-3.6.0.min.js', 'src/js/app.js'], 'js')
    .sass('src/sass/app.scss', 'css');