var gulp = require('gulp'),
prefixer = require('gulp-autoprefixer'),
include = require('gulp-include'),
coffee = require('gulp-coffee'),
header = require('gulp-header'),
stylus = require('gulp-stylus'),
reload = require('gulp-livereload'),

src = {
  coffee: './src/coffee/*.coffee',
  stylus: './src/stylus/*.styl',
  html: './src/html/*.html'
},

dest = {
  coffee: './js',
  stylus: './css',
  html: './'
},

opt = {
  coffee: {bare: false},
  header: '/*\n * @author Timur Valiyev\n * @link https://webprowww.github.io\n */\n\n',
  prefixer: {browsers: ['last 5 versions'], cascade: true}
},

watch = {
  coffee: './src/coffee/**/*.coffee',
  stylus: './src/stylus/**/*.styl',
  html: './src/html/**/*.html'
};

function taskError(err, done) {
  console.log(err.message);
  done();
}

function coffeeTask(done) {
  gulp.src(src.coffee)
    .pipe(include().on('error', function(err) {
      taskError(err, done);
    }))
    .pipe(coffee(opt.coffee).on('error', function(err) {
      taskError(err, done);
    }))
    .pipe(header(opt.header))
    .pipe(gulp.dest(dest.coffee))
    .pipe(reload());
  done();
}

function stylusTask(done) {
  gulp.src(src.stylus)
    .pipe(stylus().on('error', function(err) {
      taskError(err, done);
    }))
    .pipe(prefixer(opt.prefixer))
    .pipe(header(opt.header))
    .pipe(gulp.dest(dest.stylus))
    .pipe(reload());
  done();
}

function htmlTask(done) {
  gulp.src(src.html)
    .pipe(include().on('error', function(err) {
      taskError(err, done);
    }))
    .pipe(gulp.dest(dest.html))
    .pipe(reload());
  done();
}

function defaultTask(done) {
  gulp.watch(watch.coffee, gulp.series(coffeeTask));
  gulp.watch(watch.stylus, gulp.series(stylusTask));
  gulp.watch(watch.html, gulp.series(htmlTask));
  reload.listen();
  done();
}

gulp.task('default', defaultTask);

/* gulpfile.js */