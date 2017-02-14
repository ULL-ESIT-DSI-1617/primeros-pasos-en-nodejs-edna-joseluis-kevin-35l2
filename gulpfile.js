/*
* Dependencias
*/

var gulp = require('gulp');
var shell = require('gulp-shell');

/*
 Tarea Build ------------------------------------------------------
*/

gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});


