var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    changed = require('gulp-changed'),
    connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    karma = require('gulp-karma'),
    coffee = require('gulp-coffee'),
    rename = require('rename'),

    env = process.env.NODE_ENV || 'dev';

var src = {

    scripts: {
        app: [
            'app/app.coffee',
            'app/config/config.' + env + '.coffee',
            '!app/config',
            'app/**/*.coffee'
        ],
        vendor: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/lodash/dist/lodash.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/restangular/dist/restangular.js',
            'bower_components/ngstorage/ngStorage.js'
        ]
    },
    styles: [
        'bower_components/pure/pure.css',
        'app/assets/styles.css'
    ]
};


gulp.task('scripts.app', function () {
    return gulp.src(src.scripts.app)
        .pipe(coffee({bare: true})).on('error', gutil.log)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload());
});

gulp.task('scripts.vendor', function () {
    return gulp.src(src.scripts.vendor)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(connect.reload());
});

gulp.task('styles', function () {
    return gulp.src(src.styles)
        .pipe(cssmin())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(connect.reload())
});

gulp.task('templates.direct', function () {
    return gulp.src('app/**/*.html')
        .pipe(changed('public'))
        .pipe(gulp.dest('public'))
        .pipe(connect.reload());
});

gulp.task('server', function () {
    connect.server({
        root: 'public',
        port: 9090,
        livereload: true
    });
});

//gulp.task('karma.watch', function () {
//    return gulp.src('app/**/*.test.js')
//        .pipe(karma({
//            configFile: 'karma.config.js',
//            action: 'watch'
//        }));
//});

gulp.task('clean', function () {
    gulp.src('public/**', {read: false})
        .pipe(clean());
});

gulp.task('watch', ['clean'], function () {
    gulp.watch('app/**/*.coffee', ['scripts.app']);
    gulp.watch('app/assets/*.css', ['styles']);
    gulp.watch('app/**/*.html', ['templates.direct']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('scripts.app', 'scripts.vendor', 'styles', 'templates.direct', 'server', 'watch', 'karma.watch');
});

gulp.task('build', ['clean'], function () {
    gulp.start('scripts.app', 'scripts.vendor', 'styles', 'templates.direct');
});