var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var pug = require('gulp-pug');
var clipboard = require('gulp-clipboard');


gulp.task('default', ['stylus', 'pug'], function() {
    gulp.watch('src/stylus/**/*.styl', ['stylus']);
    gulp.watch('src/pug/**/*.pug', ['pug']);
});


gulp.task('stylus', function() {
    gulp.src('src/stylus/*.styl')
    .pipe(stylus({
        'include css': true,
        'compress': true
    }))
    .pipe(autoprefixer('last 15 version'))
    .on('error', function(err) { console.log(err.message); })
    .pipe(gulp.dest('.'));
});

gulp.task('pug', function buildHTML() {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({
    'pretty': true
  }))
  .pipe(clipboard())
  .pipe(gulp.dest('.'));
});