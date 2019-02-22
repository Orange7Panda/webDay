console.log("加载完成");

// 配置路径
require.config({
	paths: {
		index: "index"
	}
})

// 调用引入模块的函数，遵从AMD规范
require(["index"], function(index){
	index.index();
})