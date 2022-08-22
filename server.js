const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000');
const WebSocketServer = new WebSocket.Server({
    port: 3000
});

WebSocketServer.on('connection', (socket) => {
    socket.on('message', (msg, isBuffer) => {
        const message = isBuffer? msg : msg.toString();
        console.log('Received: ', message);
        if(msg = 'Hello') socket.send('World');
    });
});

ws.on('open', () => {
    console.log('Connected: ');
});

 ws.on('message', () => {
    console.log('Received: ');
 });

ws.on('close', () => {
    console.log('Disconnected: ');
});

setInterval(() => {
    ws.send('world');
}, 3000)