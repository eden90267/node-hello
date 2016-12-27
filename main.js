var http = require('http');
var url = require('url');

var foo = function() {
	console.log('foo');
};

var hello = function() {
	console.log('hello');
};

var server = http.createServer(function(req, res) {
	var pathname = url.parse(req.url).pathname;
	if (pathname === '/') {
		foo();
	} else if (pathname === '/hello') {
		hello();
	}
	res.end();
});

server.listen({
	port: 3000,
	path: './'
});