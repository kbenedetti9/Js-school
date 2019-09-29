var gulp  = require('gulp');
var babel = require('gulp-babel');
var babelify   = require('babelify');
var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var source     = require('vinyl-source-stream');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

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

gulp.task('sass', function () {
  return gulp.src('assets/sass/styles.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('assets/sass/styles.scss', ['sass']);
});