var gulp = require('gulp');
var sort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var wiredep = require('wiredep').stream;
var proxyMiddleware = require('http-proxy-middleware');

var browserSync = require("browser-sync").create();

var path = {
    tmp: ".tmp",
    src: "src",
    dist: "dist"
};

gulp.task('serve', ['dev'], function() {
    browserSync.init({
        server: {
            baseDir: [".tmp/dev", path.src],
            routes: {
                '/bower_components': 'bower_components'
            },
            middleware: [
                proxyMiddleware('/eres-backend/api/', {
                    target: 'http://localhost:8080'
                })
            ]
        }
    });
});

gulp.task('dev', function() {
    var styles = gulp.src([path.src + "/*.css", path.src + "/**/*.css"], { read: false });
    var scripts = gulp.src([path.src + "/*.js", path.src + "/**/*.js"]).pipe(sort());
    //var scripts = gulp.src([path.src + "/*.js", path.src + "/**/*.js"], { read: false });
    var wiredepConfig = {
        directory: 'bower_components',
        exclude: [/bootstrap\.js/]
    };

    var injectOptions = {
        ignorePath: [path.src, '.tmp/dev'],
        addRootSlash: false
    };
    return gulp.src([path.src + "/*.html"])
        .pipe(inject(styles, injectOptions))
        .pipe(inject(scripts, injectOptions))
        .pipe(wiredep(wiredepConfig))
        .pipe(gulp.dest(path.tmp + '/dev'));
});

gulp.task('dev:dist', function() {

});

gulp.task('bulid', function() {

});

gulp.task('sass', function() {

});