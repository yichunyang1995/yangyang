var gulp = require('gulp'); //引入gulp工具
var html = require('gulp-minify-html'); //引入html压缩插件
var css = require('gulp-minify-css'); //引入css压缩插件
var concat = require('gulp-concat'); //js合并插件
var rename = require('gulp-rename'); //js重命名插件
var uglify = require('gulp-uglify'); //js压缩
var sass = require('gulp-sass'); //sass编译插件
// 4.压缩html文件。
gulp.task('uglifyhtml', function() {
    gulp.src('src/*.html')
        .pipe(html()) //使用压缩插件
        .pipe(gulp.dest('dist/')); //输出
});

gulp.task('watchuglifyhtml', function() {
    gulp.watch('src/*.html', function() {
        gulp.run('uglifyhtml');
    });
});


// 5.压缩css
gulp.task('uglifycss', function() { //所有的监听，基于先执行一次。
    gulp.src('src/css/*.css')
        .pipe(css())
        .pipe(gulp.dest('dist/css/'));
});
// js代码的合并压缩
gulp.task('uglifyjs', function() {
    gulp.src('src/script/js/*.js') //引入路径
        .pipe(concat('all.js')) //执行合并插件并且重新命名合并后的文件
        .pipe(gulp.dest('dist/script/js/')) //输出
        .pipe(rename('all.min.js')) //重命名
        .pipe(uglify()) //压缩
        .pipe(gulp.dest('dist/script/js/')); //输出
});


// 编译sass
gulp.task('runsass', function() {
    gulp.src('script/sasswork/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/sass/css/'));
});
// gulp.task('watchsass', function() {
//         gulp.watch('src/sass/*.scss', function() {
//             gulp.run('runsass');
//         });
//     })
// // gulp.task('watchuglifycss',function(){
// 	gulp.watch('src/css/*.css',function(){
// 		gulp.run('uglifycss');
// 	});
// });


//gulp.task(任务名,回调函数):新建一个任务 
//gulp.src(路径) : 引入文件的目录
//gulp.dest(路径) : 输出文件目录设置
//gulp.watch() : 监听
//gulp.run() : 执行 
//pipe() : 管道（流）链式