var gulp = require("gulp"),
    sass = require("gulp-sass"),
    jade = require("gulp-jade"),
    coffee = require("gulp-coffee"),
    imagemin = require("gulp-imagemin"),
    browserSync = require("browser-sync").create();

gulp.task("sass", function () {
  return gulp.src("src/sass/custom.sass")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("imagemin", function() {
  gulp.src("src/img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
});

gulp.task("jade", function () {
  return gulp.src("src/*.jade")
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("coffee", function() {
  gulp.src("src/coffee/**/*.coffee")
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest("dist/js"));
});

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "dist"
    },
  });
});

gulp.task("watch", ["browserSync", "sass", "jade", "imagemin", "coffee"], function () {
  gulp.watch("src/sass/**/*.sass", ["sass"]);
  gulp.watch("src/**/*.jade", ["jade"]);
  gulp.watch("src/img/*", ["imagemin"]);
  gulp.watch("src/coffee/*.coffee", ["coffee"]);
});

gulp.task("default", ["watch"]);
