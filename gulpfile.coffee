gulp = require 'gulp'
coffee = require 'gulp-coffee'
browsersync = require 'browser-sync'
plumber = require 'gulp-plumber'

gulp.task 'compile', ->
  return gulp.src 'app.coffee'
    .pipe plumber()
    .pipe coffee({bare: true})
    .pipe gulp.dest('./')
    .pipe browsersync.reload({stream: true})

gulp.task 'server', ->
  browsersync.init({
    server:
      baseDir: './'
    notify: false
  })

gulp.task 'server:reload', ->
  browsersync.reload()

gulp.task 'default', ['compile', 'server'], ->
  gulp.watch 'app.coffee', ['compile']
