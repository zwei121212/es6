import gulp from 'gulp';
improt gulpSequrence from 'gulp-sequrence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
