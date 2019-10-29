const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', function() {
  return gulp.src('./styles/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./dist/'));
});