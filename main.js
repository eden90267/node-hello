console.log('hello');
var http = require('http');

var server = http.createServer(function(req, res) {
	res.setHeader('Content-Type', 'text/html');
	
	res.write('<h1>hello world</h1>');
	res.end();
});

server.listen({
	port: 3000,
	path: './'
});