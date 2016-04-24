gulp = require 'gulp'
browsersync = require 'browser-sync'

gulp.task 'server', ->
  browsersync.init({
    server:
      baseDir: './'
    notify: false
  })

gulp.task 'server:reload', ->
  browsersync.reload()

gulp.task 'default', ['server'], ->
  gulp.watch 'app.coffee', ['server:reload']
