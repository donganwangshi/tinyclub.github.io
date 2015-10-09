'use strict';

var gulp      = require('gulp'),
    sass      = require('gulp-sass'),
    minifyCSS = require('gulp-minify-css'),
    rename    = require("gulp-rename"),
    concat    = require('gulp-concat');

gulp.task('default', ['watch']);

var buildStyleSheets = function() {
    gulp.src('./stylesheets/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../build/'))
        .pipe(minifyCSS())
        .pipe(rename(function(path) {
            path.extname = '.min.css'
        }))
        .pipe(gulp.dest('../build/'));
};

var buildJavaScripts = function() {
    gulp.src('./javascripts/*.js')
        .pipe(concat('tinylab.js'))
        .pipe(gulp.dest('../build/'));
};

gulp.task('watch', function() {
    buildStyleSheets();
    buildJavaScripts();
    gulp.watch('stylesheets/*.scss', function(event) {
        console.log(`File ${event.path} was ${event.type} running tasks...`);
        buildStyleSheets();
        buildJavaScripts();
    });
});