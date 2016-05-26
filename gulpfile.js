"use strict";

const gulp = require('gulp'),
	jade = require('gulp-jade'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync');

const paths = {
	root: '',
	sass: 'build/sass',
	jade: 'build/jade',
	css: 'css'
};

gulp.task('browser-sync', ['sass', 'jade'], () => {
	browserSync({
		server: true,
		notify: false,
		browser: false
	});
});

gulp.task('jade', () => {
	return gulp.src(paths.jade + '/index.jade')
		.pipe(jade())
		.pipe(gulp.dest(paths.root));
});

gulp.task('sass', () => {
	return gulp.src(paths.sass + '/style.sass')
		.pipe(sass({
			includePaths: [paths.sass],
			outputStyle: 'compressed'
		}))
		.on('error', sass.logError)
		.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7']))
		.pipe(gulp.dest(paths.css))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('jade-rebuild', ['jade'], ()=> {
	browserSync.reload();
});

gulp.task('watch', () => {
	gulp.watch(paths.sass + '/*.sass', ['sass']);
	gulp.watch(paths.jade + '/*.jade', ['jade-rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);