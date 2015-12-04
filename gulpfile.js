var gulp = require('gulp'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-cssimport'),
    plumber = require('gulp-plumber'),
    watch   = require('gulp-watch'),
    paths   = { sass: ['public/public/**/*.sass', 'public/public/**/*.scss'] };

gulp.task('sass', function(done) {
    gulp.src('public/public/styles/main.sass')
        .pipe(plumber())
        .pipe(concat())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(prefix({ browsers: ['last 2 versions'], cascade: false }))
        .pipe(gulp.dest('public/public'))
        .on('end', done);
});

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['sass', 'watch']);
