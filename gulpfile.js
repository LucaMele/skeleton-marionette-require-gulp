var gulp = require('gulp'),
    template = require('gulp-template-compile'),
    concat  = require('gulp-concat'),
    clean = require('gulp-clean');

// cleanup
gulp.task('clean', function () {
    return gulp.src('./templates/templates.js', {read: false})
        .pipe(clean({force: true}));
});

// build the templates
gulp.task('jst', ['clean'], function () {
    gulp.src('templates/**/*.html')
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./templates'));
});

gulp.task('default', ['jst']);
gulp.watch('templates/**/*.html', ['jst']);