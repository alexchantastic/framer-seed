var gulp = require('gulp');

var browsersync = require('browser-sync').create(),
    coffee = require('gulp-coffee');

gulp.task('compile', function() {
  return gulp.src('app.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('.'));
});

gulp.task('server', function() {
  browsersync.init({
    server: {baseDir: '.'},
    notify: false
  });
});

gulp.task('watch', ['compile'], function(done) {
  browsersync.reload();
  done();
});

gulp.task('default', ['compile', 'server'], function() {
  gulp.watch(['app.coffee', 'modules/**/*.coffee'], ['watch']);
});
