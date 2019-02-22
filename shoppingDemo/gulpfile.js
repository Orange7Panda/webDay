//gulp任务
var gulp = require("gulp");

gulp.task("copy-htmls", function(){
	return gulp.src(["*.html", "!index.html"])
	.pipe(gulp.dest("dist/html"))
	.pipe(connect.reload())
})

gulp.task("copy-html", function(){
	return gulp.src("index.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload())
})

//拷贝图片
gulp.task("images", function(){
	return gulp.src("img/*/*")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload())
})

//拷贝js代码
gulp.task("scripts", function(){
	return gulp.src(["*.js", "!gulpfile.js", "!index.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload())
})

//拷贝index.js
/*
	gulp-uglify
	gulp-rename
*/
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");

gulp.task("scripts-index", function(){
	return gulp.src("index.js")
	.pipe(gulp.dest("dist/js"))
	/*.pipe(uglify())
	.pipe(rename("index.min.js"))
	.pipe(gulp.dest("dist/js"))*/
	.pipe(connect.reload());
})

/*
	拷贝数据
*/
gulp.task("data", function(){
	return gulp.src(["*.json", "!package.json", "!package-lock.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

/*
	处理css文件
	gulp-sass
	gulp-minify-css
*/
var sass = require("gulp-sass");
var minifyCSS = require("gulp-minify-css");
gulp.task("sass", function(){
	return gulp.src("stylesheet/index.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass1", function(){
	return gulp.src("stylesheet/login.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("login.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass2", function(){
	return gulp.src("stylesheet/register.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("register.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass3", function(){
	return gulp.src("stylesheet/reset.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("reset.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass4", function(){
	return gulp.src("stylesheet/detail.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("detail.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass5", function(){
	return gulp.src("stylesheet/list.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("list.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
gulp.task("sass6", function(){
	return gulp.src("stylesheet/shoppingCar.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("shoppingCar.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})


/*
	在运行程序之前，启动监听之前
	先要将上述所有的任务都运行一遍
	build 一次性执行多个任务
*/
gulp.task("build", ["copy-html", "copy-htmls", "images", "scripts-index", "scripts", "data", "sass", "sass1", "sass2", "sass3", "sass4", "sass5", "sass6"], function(){
	console.log("任务执行完成，项目已建立");
})
/*
	监听  实时刷新(服务)
*/

gulp.task("watch", function(){
	gulp.watch(["*.html", "!index.html"], ["copy-htmls"])
	gulp.watch("index.html", ["copy-html"]);
	gulp.watch("img/*/*", ["images"]);
	gulp.watch(["*.js", "!gulpfile.js", "!index.js"], ["scripts"]);
	gulp.watch("index.js", ['scripts-index']);
	gulp.watch(["*.json", "!package.json", "!package-lock.json"], ['data']);
	gulp.watch("stylesheet/index.scss", ["sass"]);
	gulp.watch("stylesheet/login.scss", ["sass1"]);
	gulp.watch("stylesheet/register.scss", ["sass2"]);
	gulp.watch("stylesheet/reset.scss", ["sass3"]);
	gulp.watch("stylesheet/detail.scss", ["sass4"]);
	gulp.watch("stylesheet/list.scss", ["sass5"]);
	gulp.watch("stylesheet/shoppingCar.scss", ["sass6"]);
})

var connect = require("gulp-connect");
gulp.task("server", function(){
	connect.server({
		root: "dist",
		port: 1024,
		livereload: true
	})
})

//设置默认任务
gulp.task("default", ["watch", "server"]);