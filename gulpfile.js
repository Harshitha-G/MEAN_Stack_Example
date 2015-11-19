var gulp = require('gulp');
var concat = require('gulp-concat')
var html2js = require('gulp-html2js')
 
gulp.task('templateJs', function() {
  gulp.src('public/js/directives/templates/*.html')
    .pipe(html2js({
      outputModuleName: 'app',
      useStrict: true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('default', ['templateJs']);