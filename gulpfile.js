var gulp = require("gulp"),
    sass = require("gulp-sass"),
    jade = require("gulp-jade"),
    browserSync = require("browser-sync").create();

gulp.task("sass", function () {
  return gulp.src("src/sass/custom.sass")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("jade", function () {
  return gulp.src("src/**/*.jade")
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task("browserSync", function () {
  browserSync.init({
    server: {
      baseDir: "./"
    },
  });
});

gulp.task("watch", ["browserSync", "sass", "jade"], function () {
  gulp.watch("src/sass/**/*.sass", ["sass"]);
  gulp.watch("src/**/*.jade", ["jade"]);
});
