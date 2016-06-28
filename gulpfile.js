var gulp       = require('gulp'),
    nodemon    = require('gulp-nodemon'),
    streamify  = require('gulp-streamify'),
    babelify   = require('babelify'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream'),
    imagemin   = require('gulp-imagemin'),
    uglify     = require('gulp-uglify'),
    sass       = require('gulp-sass');


gulp.task('start',() =>{
  nodemon({
    script: './bin/www',
    env: { 'NODE_ENV': 'development' }
  })
});

gulp.task('script',() =>{
  browserify({
    entries: 'src/js/',
    extensions: ['.js'],
    debug: true
  })
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source('script.js'))
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('public/js'));
});

gulp.task('sass',() =>{
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    })).on('error', sass.logError)
    .pipe(gulp.dest('./public/css'));
});

gulp.task('images',() =>{
  gulp.src('src/images/**/*.*')
    .pipe((imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('./public/images/'));
});


gulp.task('watch',() =>{
  gulp.watch('src/**/*.js', ['script']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
  // gulp.watch('src/images/*', ['images']);
});


gulp.task('default', [ 'start', 'sass', 'script', 'watch']);