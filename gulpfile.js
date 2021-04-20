var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('watch', gulp.parallel('browserSync', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
  gulp.watch('index.html').on('change', browserSync.reload);
}))