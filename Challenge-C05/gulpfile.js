var gulp  = require('gulp');
var babel = require('gulp-babel');
var babelify   = require('babelify');
var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');

// gulp.task('build:js', function () {
//   return browserify("./assets/js/script2.js")
//     .transform(babelify, {
//         presets: ['@babel/preset-env']
//     })
//     .bundle()
//     .pipe(source('./assets/js/script2.js'))
//     // .pipe(buffer())
//     .pipe(gulp.dest('./build/'));
// });


gulp.task('build:js', function () {
  return browserify("./assets/js/showBooks2.js")
    .transform(babelify, {
        presets: ['@babel/preset-env']
    })
    .bundle()
    .pipe(source('./showBooks2.js'))
    // .pipe(buffer())
    .pipe(gulp.dest('./compiled/'));
});
