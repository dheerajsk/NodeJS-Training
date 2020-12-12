var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

var imgSrc = 'src/images/*.+(png|jpg|gif)',
    imgDst = 'build/images';

function run() {

    return gulp.src(imgSrc)
        .pipe(changed(imgDst))
        .pipe(imagemin())
        .pipe(gulp.dest(imgDst));
}

gulp.task('imagemin', run);
gulp.task('watch', () => {
    gulp.watch(imgSrc, run);
});


gulp.task('default', gulp.series('imagemin','watch'));