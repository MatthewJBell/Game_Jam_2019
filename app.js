//consts for setting up server
//const is a constant
//use let for variables you want to change
//DO NOT USE var 
const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);

//default port is 80
//default port for https is 443
const LISTEN_PORT = 8080;

//use middleware
//these functions are acted upon the page before it is "served"
//this is telling the server to assume the public folder where all html/js is found
app.use(express.static(__dirname + '/public'));

//create a "route" for accessing this page
app.get('/', function(req, res) {
    res.sendFile(__dirname + 'public/index.html'); //send/serve this index.html file
});

//now start server
server.listen(LISTEN_PORT);

console.log('Listening to port' + LISTEN_PORT);
