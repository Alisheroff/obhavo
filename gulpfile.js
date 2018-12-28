var gulp = require('gulp');
var sass = require('gulp-sass');
    sass.compiler = require('node-sass');
var browsersync = require('browser-sync');  
var imagemin = require('gulp-imagemin');
var jsMin = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var rename = require('gulp-rename');
var cssMin = require('gulp-clean-css');

var path = {

	watch: {
		sass: 'app/sass/**/*.sass',
		html: 'app/**/*.html',
		js:   'app/js/**/*.js',
		css:  'app/css/**/*.css',
	},

	build: {
		html: 'dist',
		sass: 'dist/css',
		js:   'dist/js',
		img:  'dist/img',
		css:  'dist/css',
		lib:  'dist/lib',
		fonts:'dist/fonts',
	},

	src: {
		html: 'app/**/*.html',
		img:  'app/img/**/*.*',
		js:   'app/js/**/*.js',
		css:  'app/css/**/*.css',
		sass: 'app/sass/**/*.sass',
		lib:  'app/lib/**/*.*',
		fonts:'app/fonts/**/*.*',
	}
}

gulp.task('img', function() {
	gulp.src(path.src.img)
	.pipe(imagemin())
	.pipe(gulp.dest(path.build.img))
})

gulp.task('sass', function() {
	return gulp.src(path.src.sass)
	.pipe(sass({
		outputStyle: 'expanded',
	}))
	.pipe(autoprefixer({
		browsers: ['last 99 versions'],
		cascade: true,
	}))
    .pipe(gulp.dest('app/css'))
    .pipe(browsersync.reload({
    	stream: true,
    }))
});

gulp.task('sass:build', function() {
	return gulp.src(path.src.sass)
	.pipe(sass({
		outputStyle: 'expanded',
	}))
	.pipe(autoprefixer({
		browsers: ['last 99 versions'],
		cascade: false,
	}))
	.pipe(cssMin())
    .pipe(gulp.dest(path.build.css))
})


gulp.task('lib:build', function() {
	return gulp.src(path.src.lib)
    .pipe(gulp.dest(path.build.lib))
})

gulp.task('fonts:build', function() {
	return gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
})

gulp.task('css:build', function() {
	return gulp.src(path.src.css)
	.pipe(cssMin())
    .pipe(gulp.dest(path.build.css))
})

gulp.task('js', function () {
	return gulp.src(path.src.js)
	.pipe(gulp.dest(path.build.js))
})

gulp.task('js:build', function () {
	return gulp.src(path.src.js)
	.pipe(jsMin())
	.pipe(gulp.dest(path.build.js))
})

gulp.task('html:build', function() {
	return gulp.src(path.src.html)
	.pipe(gulp.dest(path.build.html)); 
})

gulp.task('build:clear', function() {
	return del.sync('dist');
})

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
	});
})

gulp.task('watch', ['browser-sync', 'sass'], function() {
	gulp.watch(path.watch.sass, ['sass']);
	gulp.watch(path.watch.html, browsersync.reload);
	gulp.watch(path.watch.js, browsersync.reload);
	gulp.watch(path.watch.css, browsersync.reload);
});


gulp.task('build', ['build:clear', 'img', 'lib:build', 'fonts:build', 'js:build', 'css:build', 'sass:build', 'html:build'], function() {
	console.log('Success!');
});


