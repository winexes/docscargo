var elixir = require('laravel-elixir');

require('laravel-elixir-angular');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

 var paths = {
    'jquery': './vendor/bower_components/jquery/',
    'bootstrap': './vendor/bower_components/bootstrap-sass/assets/',
    'angular': './vendor/bower_components/angular/',
    'moment': './vendor/bower_components/moment/',
    'moment_timezone': './vendor/bower_components/moment-timezone/',
    'angular_bootstrap': './vendor/bower_components/angular-bootstrap/',
    'angular_animate': './vendor/bower_components/angular-animate/'
}

elixir(function(mix) {
    mix.sass('app.scss')
    	.angular('resources/assets/angular/**', 'resources/assets/js/', 'ngApp.js')	
    	.scripts([
            paths.jquery + 'dist/jquery.min.js',            
            paths.angular + 'angular.min.js',           
            paths.angular_bootstrap + 'ui-bootstrap.min.js',
            paths.angular_bootstrap + 'ui-bootstrap-tpls.min.js',           
            'ngApp.js',                       
        ], 'public/js/app.js');
});
