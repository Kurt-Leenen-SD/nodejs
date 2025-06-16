var http = require('http');

const server = http.createServer();

function onConnect(req, res){
    res.write('Hello People!');
    res.write(' yago gay is kkr gay');
    res.end();
}
server.on('request', onConnect);

server.listen(8080);