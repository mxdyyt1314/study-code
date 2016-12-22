/**
 * Created by meng on 2016/12/22.
 */
var gulp = require("gulp");
var liveReload = require("gulp-livereload");

gulp.task("watch", function (file) {
    /**
     * 监听livereload
     */
    liveReload.listen();
    /**
     * 监听文件变化，将文件流传入liveReload模块进行浏览器刷新
     */
    gulp.watch("./*.html", function (file) {
        console.log(file);
        gulp.src("./*.html").pipe(liveReload());
    });
});

