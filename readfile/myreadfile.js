var http = require('http');

var url = require('url');

var router = require('./router');

http.createServer(function (request,response){

	response.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});

	if(request.url!=='/favicon.ico'){// 去除第二次访问

		var pathname = url.parse(request.url).pathname;
		pathname = pathname.replace(/\//,'');// 替换掉前面的/

		router[pathname](request,response);

		console.log('主程序完毕');	
	}
}).listen("8000");

console.log("Server is 8000");
