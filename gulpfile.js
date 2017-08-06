var gulp = require('gulp');

var browsersync = require('browser-sync'),
    webpack = require('webpack'),
    webpackstream = require('webpack-stream');

gulp.task('compile', function() {
  return gulp.src('app.coffee')
    .pipe(webpackstream({
      output: {
        filename: 'app.js',
      },
      module: {
        loaders: [
          {
            test: /\.coffee$/,
            loader: 'coffee-loader'
          }
        ]
      },
      resolve: {
        modules: ['modules', 'node_modules'],
        extensions: ['.coffee', '.js', '.json']
      }
    }, webpack))
    .on('error', function handleError() {
      this.emit('end');
    })
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
