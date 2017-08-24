// Socket to send and receive messages from server
var socket;

// After the page finish the rendering, start socket and necessary listeners
window.onload = function() {

	// Start the io connection
	socket = io();

	// Listener to update the number of clicks in html page with the value from server
	socket.on('counterValue', function(clicks){
		console.log('New value');
		document.getElementById("counter").innerHTML = "Clicks Counter: " + clicks;	
    });

	
};

// Function used to increment the counter value in server
function increment() {
	// Increment the counter value in server
	socket.emit('incrementCounterValue');
};