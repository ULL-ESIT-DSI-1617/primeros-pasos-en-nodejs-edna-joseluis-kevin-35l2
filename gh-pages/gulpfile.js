
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


// Tarea Push al Repositorio -----------------------------------------

gulp.task('push-repo', function(){
    return gulp.src('').pipe(shell([
        'git add . '+
        'git commit -m "Prueba" '+
        'git push origin master'
    ]))
});


// Tarea publicacion en local ---------------------------------------

gulp.task('serve', function() {
  return gulp.src('').pipe(shell(['gitbook serve --lrport 99990 --port 43210 `pwd` gh-pages']));
});



// Tarea por defecto -------------------------------------------------


gulp.task('default', ['build', 'deploy']);
