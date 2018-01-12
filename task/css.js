const gulp = require('gulp');
const gulpif = require('gulp-if');
const livereload = require('gulp-livereload');
const args = require('./util/args.js');

gulp.task('css',()={
    return gulp.src('app/**/*.css')
        .pipe(gulp.dest('server/public'))
})