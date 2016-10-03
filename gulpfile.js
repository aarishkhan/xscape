var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var concatCss=require('gulp-concat-css');
var uglify = require('gulp-uglify');

var tinypng = require('gulp-tinypng-compress');


var paths = {
  source_files_folder:"./source_project",
  sass: ['./scss/**/*.scss'],
  templateCache: ['./source_project/templates/**/*.html'],
  ng_annotate: ['./www/js/*.js'],
  useref: ['./www/*.html'],
  images:['./www/img/*.png']
};

gulp.task('tinypng', function () {
  gulp.src('www/img/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'a-GreEm89hr-prLgwrw16kborpVDEA66',
      sigFile: 'images/.tinypng-sigs',
      log: true
    }))
    .pipe(gulp.dest('images'));
});

// gulp.task ('compress-images',function(done){
//
//   gulp.src(paths.images)
//     .pipe(tinypng("a-GreEm89hr-prLgwrw16kborpVDEA66"))
//     .pipe(gulp.dest('./www/compress-images/'))
//     .on('end',done);
//
// })

// gulp.task('sass', function(done) {
//   gulp.src('./scss/ionic.app.scss')
//     .pipe(sass())
//     .on('error', sass.logError)
//     .pipe(gulp.dest(paths.source_files_folder+'/css/'))
//     .pipe(minifyCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(rename({ extname: '.min.css' }))
//     .pipe(gulp.dest(paths.source_files_folder+'/css/'))
//     .on('end', done);
// });

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest(paths.source_files_folder+'/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(paths.source_files_folder+'/css/'))
    .on('end', done);
});


gulp.task('style-sass',function(done){
  gulp.src('./scss/style/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);



})

gulp.task('combine-css',function(done){

  gulp.src([paths.source_files_folder+'/css/ionic.app.min.css',paths.source_files_folder+'/css/style.css'])
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('./www/dist_css/'))
    .on('end',done);
})

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);

});




gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

gulp.task('templatecache', function(done){
  gulp.src(paths.source_files_folder+'/templates/**/*.html')
  .pipe(templateCache({standalone:true,transformUrl: function(url) {
    return url.replace("views/", '').replace("components/","")
  }}))
  .pipe(gulp.dest(paths.source_files_folder+'/js/'))
  .on('end', done);
});

gulp.task('ng_annotate', function (done) {
  gulp.src('.www/js/*.js')
  .pipe(ngAnnotate({single_quotes: true}))
  .pipe(gulp.dest('./www/js/'))
  .on('end', done);
});

gulp.task('combine-uglify', function (done) {
  gulp.src(['./source_project/js/*.js','!./www/js/main.min.js'])
    .pipe(concat("main.min.js"))
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('./www/js/'))
    .on('end', done);
});

gulp.task('useref', function (done) {

  gulp.src(paths.source_files_folder+'/*.html')
  .pipe(useref())
  .pipe(gulp.dest('./www'))
    .on('end',done);
});





gulp.task('watch', function() {
  // //gulp.watch(paths.sass, ['sass']);
  // gulp.watch(paths.templatecache, ['templatecache']);
  // gulp.watch("./scss/style/*.scss",['style-sass']);
  // gulp.watch("./source_project/js/*.js",['combine-js']);

});

gulp.task('default', []);


gulp.task('watch-templates',function(){
  gulp.watch('./source_project/templates/**/*.html', ['templatecache']);
});


gulp.task('watch-js',function () {
  gulp.watch('./source_project/js/*.js', ['combine-uglify']);

});

gulp.task('watch-style-sass', function() {

  gulp.watch("./scss/style/*.scss",['style-sass']);

});

gulp.task('watch-dev',['watch-templates','watch-js','watch-style-sass']);

gulp.task('package-for-build',[])
