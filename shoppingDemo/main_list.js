console.log("加载完成");

// 配置路径
require.config({
	paths: {
		list: "list"
	}
})

// 调用引入模块的函数，遵从AMD规范
require(["list"], function(list){
	list.list();
})