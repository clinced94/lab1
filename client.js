
var net = require('net');

var HOST = 'localhost';
var PORT = 8000;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

	console.log('Connection Successful \n' + 'Connected to: ' + HOST + ':' + PORT);
	client.write('GET /echo.php?message=test HTTP/1.1\r\n\r\n');
});

client.on('data', function(data) {

	console.log('DATA: %s\n\n', data);

});

