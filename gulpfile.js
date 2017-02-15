
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

/* Tarea publicacion gitbook ---------------------------------------

<<<<<<< HEAD
-gulp.task('push-repo', function(){
 -    return gulp.src('').pipe(shell([
 -        'git add . '+
 -        'git commit -m "Prueba" '+
 -        'git push origin master'
 -    ]))
 -});
=======
/* Tarea publicacion gitbook ---------------------------------------

gulp.task('deploy-gitbook', function(){
  return gulp.src('').pipe(shell([
  'git add . '+
  'git commit -m "Despliegue a Gitbook" '+
  'git push gb master'
  ]))
  });
>>>>>>> 8a505d2f2466c4b63cac803db2e20683d0abaa48

*/

// Tarea por defecto -------------------------------------------------


gulp.task('default', ['build', 'deploy']);
