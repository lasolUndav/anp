var gulp = require('gulp');

var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'bower-files'],
    replaceString: /\bgulp[\-.]/
});

var runSequence = require('run-sequence').use(gulp);

var bower_dir = './bower_components';
var dev_dir = './';
var index_file = '/index.html';

var app_dir = './anp';
var assets_dir = './assets';
var assets_dir_relative = '../assets';
var js_dir =  assets_dir + '/js';
var css_dir =  assets_dir + '/css';
var img_dir =  assets_dir + '/img';
var libs_dir =  assets_dir + '/libs';
var libs_dir_relative =  assets_dir_relative + '/libs/';

var dist_dir = './dist';
var js_file =  'all.min.js';
var css_file =  'all.min.css';
var libs_js_file =  'libs.min.js';
var libs_css_file =  'libs.min.css';
var app_file = 'anp.min.js';

/**********************************************************************************************************************/
/*** Development tasks
 /**********************************************************************************************************************/

gulp.task('install-libs', function() {
    return gulp.src(['./bower.json', './package.json'])
        .pipe(plugins.install({noOptional: true}));
});

gulp.task('lint', function() {
    return gulp.src([app_dir + '/**/*.js', js_dir + '/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(plugins.jshint.reporter('fail'));
});

gulp.task('clean-libs', function() {
    return gulp.src(libs_dir + '/*')
        .pipe(plugins.clean({force: true}));
});

gulp.task('index-libs', function() {
    var src = gulp.src(plugins.bowerFiles().ext(['js', 'css']).files);

    gulp.src(app_dir + index_file)
        .pipe(plugins.inject(src, {name: 'libs',
            transform: function(filepath, file) {
                return /(?:\.([^.]+))?$/.exec(file.relative)[0] == '.js'
                    ? '<script src="' + libs_dir_relative + file.relative + '"></script>'
                    : '<link rel="stylesheet" href="' + libs_dir_relative + file.relative + '"/>';
            }}))
        .pipe(gulp.dest(app_dir));

    return src.pipe(gulp.dest(libs_dir));
});

gulp.task('index-css' , function() {
    var css = gulp.src([css_dir + '/**/*.css'], {read: false});

    return gulp.src(app_dir + index_file)
        .pipe(plugins.inject(css, {name: 'css', empty: true, relative: true}))
        .pipe(gulp.dest(app_dir));
});

gulp.task('index-js' , function() {
    var js = gulp.src([js_dir + '/**/*.js'], {read: false});

    return gulp.src(app_dir + index_file)
        .pipe(plugins.inject(js, {name: 'js', empty: true, relative: true}))
        .pipe(gulp.dest(app_dir));
});

gulp.task('index-app' , function() {
    var app = gulp.src([app_dir + '/**/*.js'])
        .pipe(plugins.angularFilesort());

    return gulp.src(app_dir + index_file)
        .pipe(plugins.inject(app, {name: 'app', empty: true, relative: true}))
        .pipe(gulp.dest(app_dir));
});

gulp.task('connect-dev', function () {
    plugins.connect.server({
        root: dev_dir,
        port: 8888
    });
});

/**********************************************************************************************************************/
/*** Deployment tasks
 /**********************************************************************************************************************/

gulp.task('clean', function() {
    return gulp.src(dist_dir + '/*')
        .pipe(plugins.clean({force: true}));
});

gulp.task('libs', function() {
    const jsFilter = plugins.filter(['*.js'], {restore: true});
    const cssFilter = plugins.filter(['*.css'], {restore: true});

    return gulp.src(plugins.bowerFiles().ext(['js', 'css']).files)
        .pipe(jsFilter)
        .pipe(plugins.concatVendor(libs_js_file))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(dist_dir))
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(plugins.concatVendor(libs_css_file))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest(dist_dir))
        .pipe(cssFilter.restore);
});

gulp.task('libs-index', function() {
    var libs = gulp.src([dist_dir + '/' + libs_js_file, dist_dir + '/' + libs_css_file], {read: false})
    return gulp.src(dist_dir + index_file)
        .pipe(plugins.inject(libs, {name: 'libs', empty: true, relative: true, removeTags: true}))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('js', function() {
    return gulp.src([js_dir + '/*'])
        .pipe(plugins.concat(js_file))
        .pipe(plugins.uglify({mangle: false}))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('js-index', function() {
    var js = gulp.src([dist_dir + '/' + js_file], {read: false});
    return gulp.src(dist_dir + index_file)
        .pipe(plugins.inject(js, {name: 'js', empty: true, relative: true, removeTags: true}))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('css', function() {
    return gulp.src([css_dir + '/*'])
        .pipe(plugins.concat(css_file))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest(dist_dir));
});

gulp.task('css-index', function() {
    var css = gulp.src([dist_dir + '/' + css_file], {read: false});
    return gulp.src(dist_dir + index_file)
        .pipe(plugins.inject(css, {name: 'css', empty: true, relative: true, removeTags: true}))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('app', function() {
    return gulp.src([app_dir + '/**/*.js'])
        .pipe(plugins.angularFilesort())
        .pipe(plugins.concat(app_file))
        .pipe(plugins.uglify({mangle: false}))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('app-index', function() {
    var app = gulp.src([dist_dir + '/' + app_file], {read: false});
    return gulp.src(dist_dir + index_file)
        .pipe(plugins.inject(app, {name: 'app', empty: true, relative: true, removeTags: true}))
        .pipe(gulp.dest(dist_dir));
});

// TODO: minificar imagenes
gulp.task('img', function(){
    return gulp.src(img_dir + '/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest(dist_dir + '/assets/img'))
});

gulp.task('html', function() {
    return gulp.src(app_dir + '/**/*.html')
        .pipe(gulp.dest(dist_dir));
});

gulp.task('connect', function () {
    plugins.connect.server({
        root: dist_dir,
        port: 9998
    });
});

/**********************************************************************************************************************/
/*** Development watch tasks
 /**********************************************************************************************************************/

gulp.task('watch', function() {
    gulp.watch(bower_dir + '/*', ['update-libs']);
    gulp.watch(js_dir + '/*', ['index-js']);
    gulp.watch(css_dir + '/*', ['index-css']);
    gulp.watch(app_dir + '/**/*.js', ['index-app']);
});

/**********************************************************************************************************************/
/*** Development commands
 /**********************************************************************************************************************/

gulp.task('init-dev', function(callback) { runSequence('install-libs', 'update-libs', 'update-index', 'watch', callback) });

gulp.task('update-libs', function(callback) { runSequence('clean-libs', 'index-libs', callback) });

gulp.task('update-index', function(callback) { runSequence('index-js', 'index-css', 'index-app', callback) });

gulp.task('default', function(callback) { runSequence('lint', 'connect-dev', callback) });

/**********************************************************************************************************************/
/*** Deployment commands
 /**********************************************************************************************************************/

gulp.task('deploy', function (callback) { runSequence('clean', 'html', 'libs', 'libs-index', 'js', 'js-index',
    'css', 'css-index', 'app', 'app-index', 'img', callback); });

gulp.task('run', function(callback) { runSequence('deploy', 'connect', callback) });
