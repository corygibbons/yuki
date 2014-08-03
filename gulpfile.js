var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task('sass', function() {
    return gulp.src('sass/**/*.sass')
    .pipe(sass({style: 'compressed'}))
    .pipe(autoprefixer('last 15 version'))
    .on('error', function(err) { console.log(err.message); })
    .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
    gulp.watch('sass/**/*.sass', function() {
        gulp.run('sass');
    });
});