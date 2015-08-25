var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write('Hello World!');
    res.end();
}).listen(process.env.PORT || 3000);