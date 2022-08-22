const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('./indexd.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(index);

});

server.listen(8080, () => {
    console.log('Client is connected: ')
});