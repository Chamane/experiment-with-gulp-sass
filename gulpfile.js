var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// compile sass into css 
function style(){
    return gulp.src('./scss/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/'));
}

exports.style = style;