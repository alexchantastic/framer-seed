var gulp = require('gulp');

var coffee = require('gulp-coffee'),
    browsersync = require('browser-sync'),
    plumber = require('gulp-plumber');

gulp.task('compile', function() {
  return gulp.src('app.coffee')
    .pipe(plumber())
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('.'))
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('server', function() {
  browsersync.init({
    server: {baseDir: '.'},
    notify: false
  });
});

gulp.task('server:reload', function() {
  browsersync.reload();
});

gulp.task('default', ['compile', 'server'], function() {
  gulp.watch('app.coffee', ['compile']);
});
