var express = require('express');
var app 	= express();

var http = require('http').Server(app);
var io   = require('socket.io')(http);

// Needed for loading of external css and js files from index.html
app.use(express.static(__dirname));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// When the node server is started, the number of clicks is started with 0
var clicks = 0;

// Code to handle io connection from clients
io.on('connection', function(socket){
  	console.log('New User Connected: ' + socket.id);

  	// Only send the number of clicks to the new socket connection
	socket.emit('counterValue', clicks);

	// When the socket connection increment the value, emit for all the users connected to this server
	socket.on('incrementCounterValue', function(msg) {
		clicks++;
		io.emit('counterValue', clicks);
  	});

});

// Set the server (localhost) to listen in port 3000
http.listen(3000, function(){
  console.log('Listening on *:3000');
});