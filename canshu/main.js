var http = require('http');
var url = require('url');
var router = require('./router');
// 创建服务端口为8000
http.createServer(function(request,response){
	
	// 判断是否为第二次访问
	if(request.url!=='/favicon.ico'){
		var pathname = url.parse(request.url).pathname;
		// 去除路径中的 /
		pathname = pathname.replace(/\//,'');
		try{
			router[pathname](request,response);
		}catch(err){
			console.log(err);
			response.writeHead(200,{'Contet-Type':'text/html;charset=utf-8'});
			response.write(err.toString());
			response.end('');
		}
	}
}).listen(8000);
console.log('Server is running in port 8000');