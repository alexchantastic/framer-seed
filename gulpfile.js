var gulp = require('gulp');

var browsersync = require('browser-sync'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('compile', function() {
  return browserify('app.coffee', {
      paths: ['modules'],
      extensions: ['.coffee'],
      transform: ['coffeeify'],
      debug: true
    })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('.'))
    .pipe(browsersync.reload({stream: true}));
});

gulp.task('server', function() {
  browsersync.init({
    server: {baseDir: '.'},
    notify: false
  });
});

gulp.task('default', ['compile', 'server'], function() {
  gulp.watch(['app.coffee', 'modules/**/*.coffee'], ['compile']);
});
