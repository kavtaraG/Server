const http = require('http');

const express = require('express');
const app = express();

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
});

server.listen(4000);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/add/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let sum = parseInt(num1 + num2).toString();
    res.send(sum);
    res.end();
});

app.get('/multiply/:num1/:num2', (req, res) => {
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.params.num2);
    let multiply = (num1*num2).toString();
    res.send(multiply);
    res.end();
});

app.listen(5000, () => {
    console.log('Client is Connnected: ');
});