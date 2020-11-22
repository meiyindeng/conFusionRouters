const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

//this app takes 3 parameters, request, response, and next as the middleware
/* app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

}); */

app.use(morgan('dev'));
//the static tells express to serve the file
app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});



const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

