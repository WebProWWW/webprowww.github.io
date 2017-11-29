var gulp = require('gulp'),
  sass = require('gulp-sass'),
  refresh = require('gulp-refresh'),
  cssmin = require('gulp-csso'),
  prefix = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  coffee = require('gulp-coffee'),
  uglify = require('gulp-uglify'),
  include = require('gulp-include'),
  header = require('gulp-header'),

watch = {
  sass: 'src/sass/**/*.sass',
  coffee: 'src/coffee/**/*.coffee',
  html: 'src/html/**/*.html'
},

src = {
  sass: 'src/sass/*.sass',
  coffee: 'src/coffee/*.coffee',
  html: 'src/html/*.html'
},

dest = {
  sass: 'css/',
  coffee: 'js/',
  html: './'
},

opt = {
  sass: {outputStyle: 'expanded'},
  prefix: {browsers: ['> 1%']},
  rename: {suffix: '.min'},
  coffee: {bare: false},
  header: '\n/* author: Timur Valiyev | website: https://WebproWWW.github.io */\n\n',
},

wrapPipe = function(taskFn) {
  var onSuccess, onError, outStream;
  return function(done) {
    onSuccess = function() {
      return done();
    };
    onError = function(err) {
      return done(err);
    };
    outStream = taskFn(onSuccess, onError);
    if (outStream && typeof outStream.on === 'function') {
      outStream.on('end', onSuccess);
    }
  }
};

gulp.task('sass', wrapPipe(function(success, err) {
  return gulp.src(src.sass)
    .pipe(sass(opt.sass).on('error', err))
    .pipe(prefix(opt.prefix).on('error', err))
    .pipe(gulp.dest(dest.sass))
    .pipe(cssmin().on('error', err))
    .pipe(rename(opt.rename).on('error', err))
    .pipe(header(opt.header))
    .pipe(gulp.dest(dest.sass))
    .pipe(refresh());
}));

gulp.task('coffee', wrapPipe(function(success, err) {
  return gulp.src(src.coffee)
    .pipe(include().on('error', err))
    .pipe(coffee(opt.coffee).on('error', err))
    .pipe(gulp.dest(dest.coffee))
    .pipe(uglify().on('error', err))
    .pipe(rename(opt.rename).on('error', err))
    .pipe(header(opt.header))
    .pipe(gulp.dest(dest.coffee))
    .pipe(refresh());
}));

gulp.task('html', wrapPipe(function(success, err) {
  return gulp.src(src.html)
    .pipe(include().on('error', err))
    .pipe(gulp.dest(dest.html))
    .pipe(refresh());
}));

gulp.task('listen', function() {
  refresh.listen();
  return true;
});

gulp.task('watch', function() {
  gulp.watch(watch.sass, ['sass']);
  gulp.watch(watch.coffee, ['coffee']);
  gulp.watch(watch.html, ['html']);
  // gulp.watch('**/*.php', function() {
  //   refresh.reload('/');
  // });
  return true;
});

gulp.task('default', ['listen', 'watch']);