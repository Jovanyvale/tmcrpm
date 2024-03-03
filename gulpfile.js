const { src, dest, watch, parallel } = require("gulp");

const cssnano = require('cssnano');
const plumber = require('gulp-plumber');
const postcss = require('postcss')
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer')


function css(callback) {
    src('src/**/*.scss') //Indentificar archivo SASS
        .pipe(plumber())
        .pipe(sass())//Compilar
        .pipe(postcss([cssnano()]))
        .pipe(dest('build/css/app.css'))//Almacernarla en el destino

    callback();//Callback que avisa a gulp cuando llega al final
}

exports.css = css;