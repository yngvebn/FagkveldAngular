var gulp = require('gulp'),
	concat = require('gulp-concat'),
    webserver = require('gulp-webserver');
 
var paths = {
	js: ['app/**/*.module.js', 'app/**/*.js'],
	css: ['app/app.css', 'app/**/*.css']
}

gulp.task('js', function(){
	gulp.src(paths.js)
		.pipe(concat('app.js'))
		.pipe(gulp.dest('js'));
});

gulp.task('css', function(){
	gulp.src(paths.css)
		.pipe(concat('app.css'))
		.pipe(gulp.dest('css'));
});

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: false,
      path: '/',
      fallback: 'index.html'
    }));
});


gulp.task('default', ['js', 'css', 'webserver'], function(){
	gulp.watch(paths.js, ['js']);
	gulp.watch(paths.css, ['css']);
});