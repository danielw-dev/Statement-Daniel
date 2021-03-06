const { src, dest, parallel, series, watch } = require("gulp");

// Plugins

const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const cssnano = require("gulp-cssnano");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const browsersync = require("browser-sync").create();

// JS Concat and Minify

function js() {
  const source = "./src/js/*.js";

  return src(source)
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(
      rename({
        extname: ".min.js",
      })
    )
    .pipe(dest("./build/js/"))
    .pipe(browsersync.stream());
}

// Sass Compling function

function styles() {
  const source = "./src/scss/styles.scss";

  return src(source)
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(
      rename({
        extname: ".min.css",
      })
    )
    .pipe(cssnano())
    .pipe(dest("./build/css/"))
    .pipe(browsersync.stream());
}

// Minify and move HTML file to build

function html() {
  return src("./src/index.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(dest("./build/"))
    .pipe(browsersync.stream());
}

// Watch files

function watchFiles() {
  watch("./src/scss/**/*.scss", styles);
  watch("./src/index.html", html);
  watch("./src/js/*", js);
}

// BrowserSync

function browserSync() {
  browsersync.init({
    server: {
      baseDir: "./build/",
    },
    port: 3000,
  });
}

// Tasks to define the execution of the functions simultaneously or in series

exports.watch = parallel(watchFiles, browserSync);
exports.build = series(parallel(html, styles, js));
