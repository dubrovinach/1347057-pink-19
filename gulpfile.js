"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.scss", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("start", gulp.series("css", "server"));

var gulp = require("gulp");
var webp = require("gulp-webp");
gulp.task("webp", function () {
 return gulp.src("source/img/**/*.{png,jpg}")
 .pipe(webp({quality: 90}))
 .pipe(gulp.dest("source/img"));
});

var gulp = require("gulp"); 
var imagemin = require("gulp-imagemin"); 
gulp.task("images", function () { 
  return gulp.src("source/img/**/*.{png,jpg,svg}") 
  .pipe(imagemin([ 
    imagemin.optipng({optimizationLevel: 3}), 
    imagemin.mozjpeg({ progressive: true }),
    imagemin.svgo() 
    ])) 
  .pipe(gulp.dest("source/img")); 
  });
