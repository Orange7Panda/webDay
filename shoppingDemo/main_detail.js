console.log("加载完成");

// 配置路径
require.config({
	paths: {
		detail: "detail"
	}
})

// 调用引入模块的函数，遵从AMD规范
require(["detail"], function(detail){
	detail.detail();
})