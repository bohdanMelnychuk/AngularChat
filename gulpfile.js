var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    sass = require('gulp-sass'),
    autoprefix = require('gulp-autoprefixer'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-csso')

//server
gulp.task('startserver', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      open: true,
      port: 1603
    }));
});

//styles
gulp.task('style', function() {
    return gulp.src('app/sass/**/*.sass')
            .pipe(sass().on('error',sass.logError))
            .pipe(autoprefix({
                browsers : ['Last 5 versions']
            }))
            .pipe(gulp.dest('app/css'));
});

//build
gulp.task('build', function () {    
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});

//watch
gulp.task('watch',function(){
    gulp.watch('app/sass/**/*.sass',['style'])
})

//default task
gulp.task('default',['startserver','watch'])