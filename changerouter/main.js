// 取得http请求
var http = require('http');
// 获取url
var url = require('url');
// 获取路由js
var router = require('./router');

// 创建端口为8000的服务
http.createServer(function(request,response){
	
	if(request.url!=='/favicon.ico'){// 过滤第二次重复请求
		// 过滤url中的地址，例如localhost:8000/login,取得其中的login
		var pathname = url.parse(request.url).pathname;
		pathname=pathname.replace(/\//,'');
		
		// 调用router.js 中的 pathname方法
		router[pathname](request,response);

		console.log('主程序执行完毕！');
	}

}).listen(8000);

console.log('Server running is port 8000！ ');