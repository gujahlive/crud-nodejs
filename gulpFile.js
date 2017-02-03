var gulp = require('gulp'),
    concat = require('gulp-concat');

var js = [
    "./public/vendor/angular/angular.js",
    "./public/vendor/angular-route/angular-route.js",
    "./public/vendor/bootstrap/dist/js/bootstrap.min.js",
    "./public/vendor/jquery/dist/jquery.min.js"
];

gulp.task('default', function() {
    gulp.src(js)
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('./public/js'))
});
