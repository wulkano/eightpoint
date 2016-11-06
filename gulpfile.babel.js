import { src, dest, watch, parallel, series } from 'gulp';
import del from 'del';
import postcss from 'gulp-postcss';
import stylelint from 'stylelint';
import reporter from 'postcss-reporter';
import cssnext from 'postcss-cssnext';
import nested from 'postcss-nested';
import minify from 'cssnano';
import simpleVars from 'postcss-simple-vars';
import rename from 'gulp-rename';
import comments from 'postcss-optional-comments';
import conditionals from 'postcss-conditionals';
import atImport from 'postcss-import';
import mqpacker from 'css-mqpacker';

// Directories
const SRC_DIR = 'src';
const BUILD_DIR = 'dist';

// Source Files
const CSS_GLOB = `${SRC_DIR}/**/*.css`;
const CSS_PARTIALS = `!${SRC_DIR}/**/_*.css`;
const JS_GLOB = `${SRC_DIR}/**/*.js`;


// Task to clean the build directory
export const clean = () => del([BUILD_DIR])



// Style Lint Task
export const lintStyles = () => src(CSS_GLOB)
  .pipe(postcss([
    stylelint(),
    reporter({ clearMessages: true })
  ]));

// Build CSS files
export const css = () => src([CSS_GLOB, CSS_PARTIALS], { base: SRC_DIR })
    .pipe(postcss([
      atImport,
      comments,
      simpleVars,
      conditionals,
      nested,
      mqpacker,
      cssnext
    ]))
    .pipe(dest(BUILD_DIR))
    .pipe(postcss([minify]))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest(BUILD_DIR));



// Watch Task
export const watchSrc = () => watch(CSS_GLOB, css);


// Task sequences
export const dev = series(clean, css, watchSrc);
export const dist = series(clean, css);

// Default task export
export default dev;
