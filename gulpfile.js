'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');



/**
 * Live reload web server of `dist`
 */
gulp.task('connect', function() {
  connect.server({
    root: 'src',
    livereload: true,
    port: 8080
  });
});

function log(error) {
  console.error(error.toString && error.toString());
}

gulp.task('serve', ['connect']);
