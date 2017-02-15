
// Dependencias


var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');


// Tarea Build -------------------------------------------------------


gulp.task('build', function() {
  return gulp.src('').pipe(shell(['./scripts/generate-gitbook']));
});


/*
 Tarea Deploy ------------------------------------------------------

gulp.task('deploy', function () {
  return gulp.src('').pipe(shell(["./scripts/deploy-gitbook"]));
});
*/


gulp.task('deploy', function() {
      return gulp.src('./gh-pages/**/*')
        .pipe(ghPages());
    });


// Tarea publicacion en local ---------------------------------------

gulp.task('serve', function() {
  return gulp.src('').pipe(shell(['gitbook serve --lrport 99990 --port 43210 ./txt gh-pages']));
});



// Tarea por defecto -------------------------------------------------


gulp.task('default', ['build', 'deploy']);
