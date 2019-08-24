const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const less        = require('gulp-less');
const stylus      = require('gulp-stylus');

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
    }
  });

  gulp.watch("./*.scss", gulp.series('sass'));
  gulp.watch("./*.less", gulp.series('less'));
  gulp.watch("./*.styl", gulp.series('stylus'));
  gulp.watch("./*").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp.src("./*.scss")
      .pipe(sass())
      .pipe(gulp.dest("./css"))
      .pipe(browserSync.stream());
});

gulp.task('less', function () {
  return gulp.src('./*.less')
      .pipe(less())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('stylus', function () {
  return gulp.src('./*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('serve'));
