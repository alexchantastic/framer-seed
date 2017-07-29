var gulp = require('gulp');

var browsersync = require('browser-sync').create(),
    webpack = require('webpack2-stream-watch');

gulp.task('compile', function() {
  return gulp.src('app.coffee')
    .pipe(webpack({
      module: {
        rules: [
          {
            test: /\.coffee$/,
            use: ['coffee-loader']
          }
        ]
      },
      resolve: {
        modules: ['modules', 'node_modules'],
        extensions: ['.coffee', '.js', '.json']
      },
      output: {
        filename: 'app.js',
      }
    }))
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
