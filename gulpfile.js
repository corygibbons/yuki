var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('default', ['stylus'], function() {
    gulp.watch('src/stylus/**/*.styl', ['stylus']);
});


gulp.task('stylus', function() {
    console.log('piped to stylus');
    gulp.src('src/stylus/*.styl')
    .pipe(stylus({
        'include css': true,
        'compress': true
    }))
    .pipe(autoprefixer('last 15 version'))
    .on('error', function(err) { console.log(err.message); })
    .pipe(gulp.dest('.'));
});