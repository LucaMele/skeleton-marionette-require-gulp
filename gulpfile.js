var gulp = require('gulp'),
    template = require('gulp-template-compile'),
    concat  = require('gulp-concat'),
    clean = require('gulp-clean'),
    requirejsOptimize = require('gulp-requirejs-optimize'),
    p = require('./package.json');

// cleanup
gulp.task('clean', function () {
    return gulp.src('./templates/templates.js', {read: false})
        .pipe(clean({force: true}));
});

// cleanup
gulp.task('clean-build', function () {
    return gulp.src('./dist/' + p.name + '_' + p.version + '.min.js', {read: false})
        .pipe(clean({force: true}));
});

// build the templates
gulp.task('jst', ['clean'], function () {
    return gulp.src('templates/**/*.html')
        .pipe(template())
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('./templates'));
});

// build
gulp.task('build', ['clean-build', 'jst'], function () {
    var config  = {
        baseUrl: __dirname,
        mainConfigFile: 'init.js',
        generateSourceMaps: false,
        out: '' + p.name + '_' + p.version + '.min.js',
        optimize: 'uglify2',
        findNestedDependencies: true,
        // Include a minimal AMD implementation shim.
        name: 'node_modules/almond/almond.js',
        wrap: true,
        preserveLicenseComments: true
    };
    return gulp.src('init.js')
        .pipe(requirejsOptimize(config))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['jst'], function() {
    gulp.watch('templates/**/*.html', ['jst']);
});
