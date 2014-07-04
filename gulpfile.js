var gulp = require('gulp'),
    src  = require('vinyl-source-stream'),
    browserify = require('browserify');

gulp.task('scripts', function () {
  browserify('./client/app.js').bundle()
    .pipe(src('app.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
  gulp.watch('./client/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts']);
