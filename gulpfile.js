
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
      return gulp.src('./minified/**/*')
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



// Tarea por defecto -------------------------------------------------


gulp.task('default', ['build', 'deploy']);
